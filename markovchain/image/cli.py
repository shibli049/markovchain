from argparse import FileType
from sys import stderr
from os import replace, remove, path
from shutil import copyfile
from functools import reduce
from itertools import islice
from PIL import Image

from . import ImageScanner, MarkovImageMixin
from .util import palette
from ..util import ObjectWrapper, truncate
from ..cli.util import (
    tqdm, load, save, infiles, outfiles as _outfiles,
    check_output_format, JSON, SQLITE,
    BAR_FORMAT, BAR_DESC_SIZE
)
from ..cli.util import cmd_settings # pylint:disable=unused-import


BASE = (MarkovImageMixin,)


def create_arg_parser(parent):
    """Create command subparsers.

    Parameters
    ----------
    parent : `argparse.ArgumentParser`
        Command parser.
    """

    arg1 = parent.add_subparsers(dest='command')

    arg2 = arg1.add_parser('convert')
    arg2.add_argument('-p', '--palette',
                      nargs=3, metavar=('HUES', 'SATURATIONS', 'VALUES'),
                      type=int, default=[8, 4, 8],
                      help='palette color division (default: %(default)s)')
    arg2.add_argument('-c', '--convert-type',
                      type=int, default=1, choices=(0, 1),
                      help='conversion type (default: %(default)s)')
    arg2.add_argument('-d', '--dither',
                      action='store_true',
                      help='enable dithering')
    arg2.add_argument('-r', '--resize', metavar=('WIDTH', 'HEIGHT'),
                      type=int, nargs=2,
                      default=None,
                      help='resize images (default: %(default)s)')
    arg2.add_argument('input', nargs='+',
                      help='input file')

    arg2 = arg1.add_parser('create')
    arg2.add_argument('-P', '--progress',
                      action='store_true',
                      help='show progress bar')
    arg2.add_argument('-s', '--settings',
                      type=FileType('r'), default=None,
                      help='settings json file')
    arg2.add_argument('-o', '--output',
                      default=None,
                      help='output file (default: stdout)')
    arg2.add_argument('input', nargs='*',
                      help='input file')

    arg2 = arg1.add_parser('update')
    arg2.add_argument('-P', '--progress',
                      action='store_true',
                      help='show progress bar')
    arg2.add_argument('-s', '--settings',
                      type=FileType('r'), default=None,
                      help='settings json file')
    arg2.add_argument('-o', '--output',
                      default=None,
                      help='output file (default: rewrite state file)')
    arg2.add_argument('state',
                      help='state file')
    arg2.add_argument('input', nargs='*',
                      help='input file')

    arg2 = arg1.add_parser('settings')
    arg2.add_argument('state',
                      help='state file')

    arg2 = arg1.add_parser('generate')
    arg2.add_argument('-P', '--progress',
                      action='store_true',
                      help='show progress bar')
    arg2.add_argument('-s', '--settings',
                      type=FileType('r'), default=None,
                      help='settings json file')
    arg2.add_argument('-ss', '--state-size',
                      type=int, nargs='+', default=None,
                      help='generator state sizes')
    arg2.add_argument('-S', '--size', metavar=('WIDTH', 'HEIGHT'),
                      type=int, nargs=2, default=None,
                      help='image size (default: <scanner.resize>)')
    arg2.add_argument('-l', '--level',
                      type=int, default=None,
                      help='image levels (default: <scanner.levels>)')
    arg2.add_argument('-c', '--count',
                      type=int, default=1,
                      help='generated image count (default: %(default)s)')
    arg2.add_argument('state',
                      help='state file')
    arg2.add_argument('output',
                      help='output file name format string')

    arg2 = arg1.add_parser('filter')
    arg2.add_argument('-P', '--progress',
                      action='store_true',
                      help='show progress bar')
    arg2.add_argument('-t', '--type',
                      choices=('json', 'sqlite'), default='json',
                      help='generator type (default: %(default)s)')
    arg2.add_argument('-s', '--settings',
                      type=FileType('r'), default=None,
                      help='settings json file')
    arg2.add_argument('-S', '--state',
                      default=None,
                      help='state file')
    arg2.add_argument('-ss', '--state-size',
                      type=int, nargs='+', default=None,
                      help='generator state sizes')
    arg2.add_argument('-l', '--level',
                      type=int, default=1,
                      help='filter start level (default: %(default)s)')
    arg2.add_argument('-c', '--count',
                      type=int, default=1,
                      help='generated image count (default: %(default)s)')
    arg2.add_argument('input',
                      help='input image')
    arg2.add_argument('output',
                      help='output file name format string')


class TraversalProgressWrapper(ObjectWrapper): # pylint: disable=too-few-public-methods
    """Traversal object wrapper.

    Shows image traversal progress.

    Attributes
    ----------
    pbar_parent : `tqdm.tqdm`
        Parent progress bar.
    """
    def __init__(self, obj, parent=None):
        super().__init__(obj)
        self.pbar_parent = parent

    def __call__(self, width, height, ends=True):
        size = width * height
        if self.pbar_parent is not None:
            title = 'Level ' + str(self.pbar_parent.n + 1)
        else:
            title = None
        pbar = tqdm(total=size, desc=title,
                    leave=False, unit='px',
                    bar_format=BAR_FORMAT, dynamic_ncols=True)
        try:
            for xy in super().__call__(width, height, ends):
                if xy is not None:
                    pbar.update(1)
                yield xy
        finally:
            pbar.close()

        if self.pbar_parent is not None:
            self.pbar_parent.update(1)


def read(fnames, markov, progress, leave=True):
    """Read data files and update a generator.

    Parameters
    ----------
    fnames : `list` of `str`
        File paths.
    markov : `markovchain.base.MarkovBase`
        Generator to update.
    progress : `bool`
        Show progress bar.
    leave : `bool`, optional
        Leave progress bars (default: `True`).
    """
    tr = markov.scanner.traversal
    if progress and not isinstance(tr[0], TraversalProgressWrapper):
        tr[0] = TraversalProgressWrapper(tr[0])
    tr = tr[0]

    with infiles(fnames, progress, leave) as fnames:
        for fname in fnames:
            if progress:
                title = truncate(fname, BAR_DESC_SIZE - 1, False)
                pbar = tqdm(total=markov.levels, desc=title,
                            leave=False, unit='lvl',
                            bar_format=BAR_FORMAT, dynamic_ncols=True)
                tr.pbar_parent = pbar
            markov.data(Image.open(fname), False)
            if progress:
                pbar.close()

def outfiles(markov, fmt, nfiles, progress, start=0):
    """Get output file paths.

    Parameters
    ----------
    markov : `markovchain.base.MarkovBase`
        Markov chain generator.
    fmt : `str`
        File path format string.
    nfiles : `int`
        Number of files.
    progress : `bool`
        Show progress bars.
    start : `int`, optional
        Initial image level (default: 0).

    Returns
    -------
    `generator` of `str`
        Output file paths.
    """
    tr = markov.scanner.traversal
    if progress and not isinstance(tr[0], TraversalProgressWrapper):
        tr[0] = TraversalProgressWrapper(tr[0])
    tr = tr[0]

    with _outfiles(fmt, nfiles, progress) as fnames:
        for fname in fnames:
            if progress:
                title = truncate(fname, BAR_DESC_SIZE - 1, False)
                pbar = tqdm(initial=start, total=markov.levels,
                            desc=title, leave=False, unit='lvl',
                            bar_format=BAR_FORMAT, dynamic_ncols=True)
                tr.pbar_parent = pbar
            yield fname
            if progress:
                pbar.close()

def cmd_convert(args):
    """Convert an image.

    Parameters
    ----------
    args : `argparse.Namespace`
        Command arguments.
    """
    scanner = ImageScanner(
        levels=1,
        resize=tuple(args.resize) if args.resize else None,
        dither=args.dither,
        convert_type=args.convert_type,
        palette=palette(*args.palette)
    )

    for fname in args.input:
        name, _ = path.splitext(fname)
        name += '_convert.png'
        img = scanner.input(Image.open(fname))
        img = scanner.level(img, 0)
        with open(name, 'wb') as fp:
            img.save(fp)

def cmd_create(args):
    """Create a generator.

    Parameters
    ----------
    args : `argparse.Namespace`
        Command arguments.
    """
    if args.type == SQLITE:
        if path.exists(args.output):
            remove(args.output)
        args.settings['db'] = args.output

    markov = args.markov(**args.settings)
    read(args.input, markov, args.progress)
    save(markov, args.output, args)

def cmd_update(args):
    """Update a generator.

    Parameters
    ----------
    args : `argparse.Namespace`
        Command arguments.
    """
    if args.type == SQLITE and args.output is not None:
        copyfile(args.state, args.output)
        args.state = args.output

    markov = load(args.markov, args.state, args)

    read(args.input, markov, args.progress)

    if args.output is None:
        if args.type == SQLITE:
            save(markov, None, args)
        elif args.type == JSON:
            name, ext = path.splitext(args.state)
            tmp = name + '.tmp' + ext
            save(markov, tmp, args)
            replace(tmp, args.state)
    else:
        save(markov, args.output, args)

def cmd_generate(args):
    """Generate images.

    Parameters
    ----------
    args : `argparse.Namespace`
        Command arguments.
    """
    check_output_format(args.output, args.count)

    markov = load(args.markov, args.state, args)

    if args.size is None:
        if markov.scanner.resize is None:
            print('Unknown output image size', file=stderr)
            exit(1)
        width, height = markov.scanner.resize
    else:
        width, height = args.size

    if args.level is None:
        scale = markov.scanner.min_size
    else:
        scale = reduce(
            lambda x, y: x * y,
            islice(markov.scanner.level_scale, 0, args.level - 1),
            1
        )

    width, height = width // scale, height // scale

    markov.scanner.traversal[0].show_progress = args.progress

    for fname in outfiles(markov, args.output, args.count, args.progress):
        img = markov.image(width, height,
                           state_size=args.state_size,
                           levels=args.level)
        with open(fname, 'wb') as fp:
            img.save(fp)

def cmd_filter(args):
    """Filter an image.

    Parameters
    ----------
    args : `argparse.Namespace`
        Command arguments.
    """
    check_output_format(args.output, args.count)

    img = Image.open(args.input)
    width, height = img.size

    if args.state is not None:
        markov = load(args.markov, args.state, args)
    else:
        markov = args.markov(**args.settings)

    if args.state is None:
        read([args.input], markov, args.progress, False)

    args.level = min(args.level, markov.levels - 1) - 1

    if args.level < 0:
        args.level = -1
        scale = markov.scanner.min_size
        width, height = width // scale, height // scale
        start = None
    else:
        scale = reduce(
            lambda x, y: x * y,
            islice(markov.scanner.level_scale, args.level, markov.levels),
            1
        )
        width, height = width // scale, height // scale
        start = img.resize((width, height), markov.scanner.scale)

    for fname in outfiles(markov, args.output,
                          args.count, args.progress, args.level + 1):
        img = markov.image(width, height,
                           state_size=args.state_size,
                           start_level=args.level,
                           start_image=start)
        with open(fname, 'wb') as fp:
            img.save(fp)
