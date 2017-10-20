Search.setIndex({docnames:["index","source/markovchain","source/markovchain.cli","source/markovchain.image","source/markovchain.text","source/modules"],envversion:53,filenames:["index.rst","source/markovchain.rst","source/markovchain.cli.rst","source/markovchain.image.rst","source/markovchain.text.rst","source/modules.rst"],objects:{"":{markovchain:[1,0,0,"-"]},"markovchain.base":{MarkovBase:[1,1,1,""]},"markovchain.base.MarkovBase":{DEFAULT_PARSER:[1,2,1,""],DEFAULT_SCANNER:[1,2,1,""],__init__:[1,3,1,""],data:[1,3,1,""],generate:[1,3,1,""],get_save_data:[1,3,1,""],links:[1,3,1,""],load:[1,4,1,""],parser:[1,2,1,""],random_link:[1,3,1,""],replace_state_separator:[1,3,1,""],save:[1,3,1,""],scanner:[1,2,1,""],separator:[1,2,1,""]},"markovchain.cli":{main:[2,0,0,"-"],util:[2,0,0,"-"]},"markovchain.cli.main":{main:[2,5,1,""]},"markovchain.cli.util":{NoProgressBar:[2,1,1,""],check_output_format:[2,5,1,""],cmd_settings:[2,5,1,""],infiles:[2,5,1,""],load:[2,5,1,""],no_tqdm:[2,5,1,""],outfiles:[2,5,1,""],pprint:[2,5,1,""],save:[2,5,1,""],set_args:[2,5,1,""]},"markovchain.cli.util.NoProgressBar":{close:[2,3,1,""],print_warning:[2,4,1,""],update:[2,3,1,""],warning:[2,2,1,""]},"markovchain.image":{cli:[3,0,0,"-"],markov:[3,0,0,"-"],scanner:[3,0,0,"-"],traversal:[3,0,0,"-"],util:[3,0,0,"-"]},"markovchain.image.cli":{TraversalProgressWrapper:[3,1,1,""],cmd_convert:[3,5,1,""],cmd_create:[3,5,1,""],cmd_filter:[3,5,1,""],cmd_generate:[3,5,1,""],cmd_update:[3,5,1,""],create_arg_parser:[3,5,1,""],outfiles:[3,5,1,""],read:[3,5,1,""]},"markovchain.image.cli.TraversalProgressWrapper":{__call__:[3,3,1,""],__init__:[3,3,1,""],pbar_parent:[3,2,1,""]},"markovchain.image.markov":{MarkovImageMixin:[3,1,1,""]},"markovchain.image.markov.MarkovImageMixin":{DEFAULT_PARSER:[3,2,1,""],DEFAULT_SCANNER:[3,2,1,""],__init__:[3,3,1,""],data:[3,3,1,""],get_save_data:[3,3,1,""],image:[3,3,1,""],levels:[3,2,1,""]},"markovchain.image.scanner":{ImageScanner:[3,1,1,""]},"markovchain.image.scanner.ImageScanner":{__call__:[3,3,1,""],__init__:[3,3,1,""],convert:[3,2,1,""],dither:[3,2,1,""],input:[3,3,1,""],level:[3,3,1,""],level_scale:[3,2,1,""],levels:[3,2,1,""],min_size:[3,2,1,""],palette:[3,2,1,""],palette_image:[3,2,1,""],resize:[3,2,1,""],save:[3,3,1,""],set_palette:[3,3,1,""],traversal:[3,2,1,""]},"markovchain.image.traversal":{Blocks:[3,1,1,""],HLines:[3,1,1,""],Hilbert:[3,1,1,""],Lines:[3,1,1,""],Spiral:[3,1,1,""],Traversal:[3,1,1,""],VLines:[3,1,1,""]},"markovchain.image.traversal.Blocks":{__call__:[3,3,1,""],__init__:[3,3,1,""],block_sentences:[3,2,1,""],block_size:[3,2,1,""],save:[3,3,1,""],traverse_block:[3,2,1,""],traverse_image:[3,2,1,""]},"markovchain.image.traversal.HLines":{__call__:[3,3,1,""]},"markovchain.image.traversal.Hilbert":{POSITION:[3,2,1,""],__call__:[3,3,1,""],get_point:[3,4,1,""],get_point_in_block:[3,4,1,""]},"markovchain.image.traversal.Lines":{__init__:[3,3,1,""],line_sentences:[3,2,1,""],reverse:[3,2,1,""],save:[3,3,1,""]},"markovchain.image.traversal.Spiral":{__call__:[3,3,1,""],__init__:[3,3,1,""],reverse:[3,2,1,""],save:[3,3,1,""]},"markovchain.image.traversal.Traversal":{__call__:[3,3,1,""],classes:[3,2,1,""]},"markovchain.image.traversal.VLines":{__call__:[3,3,1,""]},"markovchain.image.util":{convert:[3,5,1,""],palette:[3,5,1,""]},"markovchain.json":{MarkovJsonMixin:[1,1,1,""]},"markovchain.json.MarkovJsonMixin":{__init__:[1,3,1,""],get_save_data:[1,3,1,""],links:[1,3,1,""],load:[1,4,1,""],nodes:[1,2,1,""],random_link:[1,3,1,""],replace_state_separator:[1,3,1,""],save:[1,3,1,""]},"markovchain.parser":{LevelParser:[1,1,1,""],Parser:[1,1,1,""],ParserBase:[1,1,1,""]},"markovchain.parser.LevelParser":{__call__:[1,3,1,""],__init__:[1,3,1,""],levels:[1,2,1,""],parsers:[1,2,1,""],reset:[1,3,1,""],save:[1,3,1,""]},"markovchain.parser.Parser":{__call__:[1,3,1,""],__init__:[1,3,1,""],end:[1,2,1,""],reset:[1,3,1,""],reset_on_sentence_end:[1,2,1,""],save:[1,3,1,""],state:[1,2,1,""],state_size:[1,2,1,""],state_sizes:[1,2,1,""]},"markovchain.parser.ParserBase":{__call__:[1,3,1,""],__init__:[1,3,1,""],classes:[1,2,1,""]},"markovchain.scanner":{CharScanner:[1,1,1,""],RegExpScanner:[1,1,1,""],Scanner:[1,1,1,""]},"markovchain.scanner.CharScanner":{__call__:[1,3,1,""],__init__:[1,3,1,""],default_end:[1,2,1,""],end:[1,2,1,""],end_chars:[1,2,1,""],reset:[1,3,1,""],save:[1,3,1,""],start:[1,2,1,""]},"markovchain.scanner.RegExpScanner":{DEFAULT_EXPR:[1,2,1,""],__call__:[1,3,1,""],__init__:[1,3,1,""],default_end:[1,2,1,""],end:[1,2,1,""],expr:[1,2,1,""],get_group:[1,6,1,""],get_regexp:[1,6,1,""],reset:[1,3,1,""],save:[1,3,1,""]},"markovchain.scanner.Scanner":{END:[1,2,1,""],START:[1,2,1,""],__call__:[1,3,1,""],__init__:[1,3,1,""],classes:[1,2,1,""],reset:[1,3,1,""]},"markovchain.sqlite":{MarkovSqliteMixin:[1,1,1,""]},"markovchain.sqlite.MarkovSqliteMixin":{__init__:[1,3,1,""],create_node_tables:[1,3,1,""],cursor:[1,2,1,""],db:[1,2,1,""],get_node:[1,3,1,""],get_tables:[1,3,1,""],links:[1,3,1,""],load:[1,4,1,""],random_link:[1,3,1,""],replace_state_separator:[1,3,1,""],save:[1,3,1,""],update_main_table:[1,3,1,""]},"markovchain.text":{cli:[4,0,0,"-"],util:[4,0,0,"-"]},"markovchain.text.cli":{cmd_create:[4,5,1,""],cmd_generate:[4,5,1,""],cmd_update:[4,5,1,""],create_arg_parser:[4,5,1,""],read:[4,5,1,""]},"markovchain.text.util":{capitalize:[4,5,1,""],format_sentence:[4,5,1,""],format_sentence_string:[4,5,1,""],ispunct:[4,5,1,""],lstrip_ws_and_chars:[4,5,1,""]},"markovchain.util":{"const":[1,5,1,""],ObjectWrapper:[1,1,1,""],SaveLoad:[1,1,1,""],extend:[1,5,1,""],fill:[1,5,1,""],load:[1,5,1,""],to_list:[1,5,1,""],truncate:[1,5,1,""]},"markovchain.util.ObjectWrapper":{__init__:[1,3,1,""]},"markovchain.util.SaveLoad":{add_class:[1,4,1,""],classes:[1,2,1,""],load:[1,4,1,""],remove_class:[1,4,1,""],save:[1,3,1,""]},markovchain:{base:[1,0,0,"-"],cli:[2,0,0,"-"],image:[3,0,0,"-"],json:[1,0,0,"-"],parser:[1,0,0,"-"],scanner:[1,0,0,"-"],sqlite:[1,0,0,"-"],text:[4,0,0,"-"],util:[1,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","classmethod","Python class method"],"5":["py","function","Python function"],"6":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:classmethod","5":"py:function","6":"py:staticmethod"},terms:{"02d":0,"boolean":1,"char":4,"class":[0,1,2,3],"const":1,"default":[0,1,2,3,4],"function":[1,2],"import":0,"int":[1,2,3],"long":1,"new":1,"return":[1,2,3,4],"short":1,"static":1,"super":1,"true":[0,1,2,3,4],__call__:[1,3],__class__:1,__init__:[1,3],__main__:1,_sre:1,add:1,add_class:1,after:[2,3],alia:[1,3],all:[1,4],ani:1,arg:[1,2,3,4],argpars:[2,3,4],argument:[0,1,2,3,4],argumentpars:[3,4],attr:1,bar:[0,2,3,4],base:[2,3,4,5],beef:0,befor:3,bicub:3,block:3,block_idx:3,block_index:3,block_sent:3,block_siz:3,bool:[1,2,3,4],bound:3,box:3,bz2:0,bzip2:0,capit:4,chain:[0,1,2,3],chang:1,charact:[1,2,4],charscann:1,check_output_format:2,classmethod:[1,2,3],cli:[1,5],clone:0,close:2,cls:1,cmd_convert:3,cmd_creat:[3,4],cmd_filter:3,cmd_gener:[3,4],cmd_set:2,cmd_updat:[3,4],color:0,com:0,command:[2,3,4],compil:1,compress:0,comput:2,connect:1,constructor:[1,3],content:5,convers:[0,3],convert:[1,3],convert_typ:3,coordin:3,copi:1,count:[0,1],creat:[1,3,4],create_arg_pars:[3,4],create_node_t:1,ctype:3,current:[1,3],cursor:1,curv:3,data2:0,data:[1,2,3,4],databas:[0,1],dead:0,decor:2,deep:1,def:1,default_end:[1,4],default_expr:1,default_factori:1,default_pars:[1,3],default_scann:[1,3],dequ:1,dev:0,dict:[1,3],dictionari:1,dither:[0,3],divis:0,document:0,doe:1,don:1,dst:1,each:3,element:1,empti:[1,4],enabl:[0,2,3],end:[1,2,3,4],end_char:[1,4],everi:3,exampl:[1,3,4],exist:1,exit:0,expr:1,express:1,extend:1,factor:3,fals:[0,1,2,3],file:[0,1,2,3,4],fill:1,filter:3,fmt:[2,3],fname:[2,3,4],format:[0,2,3,4],format_sent:4,format_sentence_str:4,from:[0,1,4],gener:[1,2,3,4],get:[1,2,3],get_group:1,get_nod:1,get_point:3,get_point_in_block:3,get_regexp:1,get_save_data:[1,3],get_tabl:1,git:0,github:0,greater:3,group:[1,3],has:3,have:1,height:[0,3],help:0,hilbert:3,hline:3,horizont:3,http:0,hue:[0,3],idx:3,imag:[1,5],imagescann:3,img1:0,img2:0,img3:0,img4:0,img:[0,3],indent:2,index:[1,3],indexerror:3,infil:2,initi:3,input1:0,input2:0,input3:0,input4:0,input:[0,1,2,3],invalid:[1,2],islic:1,ispunct:4,iter:[2,4],its:1,join_with:4,json:[0,2,3,5],kei:1,keyerror:1,kwarg:[1,2,3],lambda:1,last:1,lead:4,leav:[2,3],length:1,level:[0,1,2,3],level_scal:3,levelpars:[1,3],line:[0,3],line_sent:3,link:[1,3],list:[1,2,3,4],load:[0,1,2],lstrip_ws_and_char:4,main:[1,5],markov:[0,1,2,4,5],markovbas:[0,1,2,3,4],markovchain:0,markovimagemixin:[0,3],markovjsonmixin:[0,1],markovsqlitemixin:[0,1],match:1,max:0,maximum:1,maxlen:1,maxlength:1,memori:1,messag:0,method:1,min:3,min_siz:3,minimum:3,miss:[1,2],mixin:[0,1,2,3],modul:5,multilevel:1,name:[0,1],namespac:[2,3,4],necessari:[1,3],new_separ:1,next:[1,3],nfile:[2,3],no_tqdm:2,node:1,none:[0,1,2,3],noprogressbar:2,noth:2,notimplementederror:[1,3],nth:3,number:[0,1,2,3],obj2:1,obj:[1,3],object:[1,2,3],objectwrapp:[1,3],old:1,old_separ:1,open:0,option:[0,1,2,3,4],order:3,other:[0,1],out:3,outfil:[2,3],output:[0,1,2,3],overrid:1,packag:5,palett:[0,3],palette_imag:3,palette_img:3,paramet:[1,2,3,4],parent:[3,4],pars:[1,3],parser:[3,4,5],parserbas:1,part:[1,3,4],partial:[1,3],pass:0,path:[1,2,3,4],pbar_par:3,pil:[0,3],pip:0,png:0,point:3,posit:[0,3],pprint:2,pretti:2,print:[0,2],print_warn:2,progress:[0,2,3,4],punctuat:[1,4],putpalett:3,python:0,qualiti:3,rais:[1,2,3],random:1,random_link:1,rang:[1,3,4],read:[0,3,4],recurs:1,regexpscann:1,regular:1,remov:[1,4],remove_class:1,replac:1,replace_state_separ:1,reset:1,reset_on_sentence_end:1,resiz:[0,3],revers:3,rewrit:0,satur:[0,3],save:[0,1,2,3],saveload:[1,3],saveloadgroup:1,saveloadobject:1,scale:3,scan:[1,3],scanner:[0,5],self:[1,3],sentenc:[0,1,4],separ:[0,1,4],set:[1,2,3],set_arg:2,set_palett:3,should:1,show:[0,2,3,4],size:[0,1,3],small:3,sourc:[1,2,3,4],specifi:1,spiral:3,split:1,sqlite3:1,sqlite:[0,5],sre_match:1,sre_pattern:1,start:[0,1,3],start_imag:3,start_level:3,state:[0,1,3],state_s:[0,1,3],state_size_chang:1,stdin:0,stdout:[0,2],str:[1,2,3,4],string:[0,1,2,3,4],strip:4,submodul:5,subpackag:5,subpars:[3,4],tabl:1,take:1,text:[1,5],than:3,thei:1,thi:0,to_list:1,token:[1,3],too:[1,3],tqdm:3,travers:[1,5],traversalprogresswrapp:3,traverse_block:3,traverse_imag:3,tring:1,truncat:1,txt:0,type:[1,2,3,4],unus:3,updat:[1,2,3,4],update_main_t:1,use:3,used:0,util:5,valid:2,valu:[0,1,3],valueerror:[1,2,3],vertic:3,vline:3,warn:2,whitespac:4,width:[0,3],word:[0,1,4],word_separ:0,wrap:1,wrapper:[1,3],write:1,zip:1},titles:["README","markovchain package","markovchain.cli package","markovchain.image package","markovchain.text package","markovchain"],titleterms:{base:1,build:0,cli:[0,2,3,4],content:[1,2,3,4],convert:0,creat:0,data:0,exampl:0,filter:0,gener:0,imag:[0,3],instal:0,json:1,licens:0,main:2,markov:3,markovchain:[1,2,3,4,5],modul:[0,1,2,3,4],overview:0,packag:[1,2,3,4],parser:1,readm:0,requir:0,scanner:[1,3],set:0,sqlite:1,submodul:[1,2,3,4],subpackag:1,test:0,text:[0,4],travers:3,type:0,updat:0,usag:0,util:[1,2,3,4]}})