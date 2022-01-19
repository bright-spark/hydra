"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1361],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,c=m["".concat(s,".").concat(g)]||m[g]||u[g]||l;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1762:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"extended",sidebar_label:"Extended Override syntax",hide_title:!0},s=void 0,p={unversionedId:"advanced/override_grammar/extended",id:"advanced/override_grammar/extended",isDocsHomePage:!1,title:"extended",description:"Extended Override syntax",source:"@site/docs/advanced/override_grammar/extended.md",sourceDirName:"advanced/override_grammar",slug:"/advanced/override_grammar/extended",permalink:"/docs/next/advanced/override_grammar/extended",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/advanced/override_grammar/extended.md",tags:[],version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1642635143,formattedLastUpdatedAt:"1/19/2022",frontMatter:{id:"extended",sidebar_label:"Extended Override syntax",hide_title:!0},sidebar:"docs",previous:{title:"Basic Override syntax",permalink:"/docs/next/advanced/override_grammar/basic"},next:{title:"The Defaults List",permalink:"/docs/next/advanced/defaults_list"}},d=[{value:"Extended Override syntax",id:"extended-override-syntax",children:[]},{value:"Sweeps",id:"sweeps",children:[{value:"Choice sweep",id:"choice-sweep",children:[]},{value:"Glob choice sweep",id:"glob-choice-sweep",children:[]},{value:"Range sweep",id:"range-sweep",children:[]},{value:"Interval sweep",id:"interval-sweep",children:[]},{value:"Tag",id:"tag",children:[]}]},{value:"Reordering lists and sweeps",id:"reordering-lists-and-sweeps",children:[{value:"sort",id:"sort",children:[]},{value:"shuffle",id:"shuffle",children:[]}]},{value:"Type casting",id:"type-casting",children:[{value:"Conversion matrix",id:"conversion-matrix",children:[]}]}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"extended-override-syntax"},"Extended Override syntax"),(0,l.kt)("p",null,"Hydra Overrides supports functions.\nWhen calling a function, one can optionally name parameters. This is following the Python\nconvention of naming parameters."),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Example function"',title:'"Example','function"':!0},"def func(a:int, b:str) -> bool:\n    ...\n\n\n"))),(0,l.kt)("div",{className:"col  col--6"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Calling function"',title:'"Calling','function"':!0},"func(10,foo)     # Positional only\nfunc(a=10,b=foo) # Named only\nfunc(10,b=foo)   # Mixed\nfunc(a=10,foo)   # Error\n")))),(0,l.kt)("p",null,"Note the lack of quotes in the examples above. Despite some similarities, this is ",(0,l.kt)("strong",{parentName:"p"},"not Python"),"."),(0,l.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Hydra supports very specific functions. If you would like to have\nanother function added, please file an issue and explain the use case."))),(0,l.kt)("h2",{id:"sweeps"},"Sweeps"),(0,l.kt)("p",null,"Sweep overrides are used by Sweepers to determine what to do. For example,\none can instruct the Basic Sweeper to sweep over all combinations of the\nranges ",(0,l.kt)("inlineCode",{parentName:"p"},"num1=range(0,3)")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"num2=range(0,3)")," - resulting in ",(0,l.kt)("inlineCode",{parentName:"p"},"9")," jobs, each getting a\ndifferent pair of numbers from ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,l.kt)("h3",{id:"choice-sweep"},"Choice sweep"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Signature"',title:'"Signature"'},'def choice(\n    *args: Union[str, int, float, bool, Dict[Any, Any], List[Any], ChoiceSweep]\n) -> ChoiceSweep:\n    """\n    A choice sweep over the specified values\n    """\n')),(0,l.kt)("p",null,"Choice sweeps are the most common sweeps.\nA choice sweep is described in one of two equivalent forms."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Examples"',title:'"Examples"'},"db=mysql,postgresql          # a comma separated list of two or more elements. \ndb=choice(mysql,postgresql)  # choice\n")),(0,l.kt)("h3",{id:"glob-choice-sweep"},"Glob choice sweep"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Signature"',title:'"Signature"'},'def glob(\n    include: Union[List[str], str], exclude: Optional[Union[List[str], str]] = None\n) -> Glob:\n    """\n    A glob selects from all options in the config group.\n    inputs are in glob format. e.g: *, foo*, *foo.\n    :param include: a string or a list of strings to use as include globs\n    :param exclude: a string or a list of strings to use as exclude globs\n    :return: A Glob object\n    """\n')),(0,l.kt)("p",null,"Assuming the config group ",(0,l.kt)("strong",{parentName:"p"},"schema")," with the options ",(0,l.kt)("strong",{parentName:"p"},"school"),", ",(0,l.kt)("strong",{parentName:"p"},"support")," and ",(0,l.kt)("strong",{parentName:"p"},"warehouse"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Examples"',title:'"Examples"'},"schema=glob(*)                                # school,support,warehouse\nschema=glob(*,exclude=support)                # school,warehouse\nschema=glob([s*,w*],exclude=school)           # support,warehouse\n")),(0,l.kt)("h3",{id:"range-sweep"},"Range sweep"),(0,l.kt)("p",null,"Unlike Python, Hydra's range can be used with both integer and floating-point numbers.\nIn both cases, the range represents a discrete list of values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Signature"',title:'"Signature"'},'def range(\n    start: Union[int, float], stop: Optional[Union[int, float]] = None, step: Union[int, float] = 1\n) -> RangeSweep:\n    """\n    Range is defines a sweeep over a range of integer or floating-point values.\n    For a positive step, the contents of a range r are determined by the formula\n     r[i] = start + step*i where i >= 0 and r[i] < stop.\n    For a negative step, the contents of the range are still determined by the formula\n     r[i] = start + step*i, but the constraints are i >= 0 and r[i] > stop.\n    """\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Examples"',title:'"Examples"'},"num=range(5)                          # 0,1,2,3,4\nnum=range(0,5)                        # 0,1,2,3,4\nnum=range(0,5,2)                      # 0,2,4\nnum=range(0,10,3.3)                   # 0.0,3.3,6.6,9.9\nnum=range(-5,step=-1)                 # 0,-1,-2,-3,-4\n")),(0,l.kt)("h3",{id:"interval-sweep"},"Interval sweep"),(0,l.kt)("p",null,"An interval sweep represents all the floating point value between two values.\nThis is used by optimizing sweepers like Ax and Nevergrad. The basic sweeper does not support interval."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Signature"',title:'"Signature"'},'def interval(start: Union[int, float], end: Union[int, float]) -> IntervalSweep:\n    """\n    A continuous interval between two floating point values.\n    value=interval(x,y) is interpreted as x <= value < y\n    """\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Examples"',title:'"Examples"'},"interval(1.0,5.0)  # 1.0 <= x < 5.0\ninterval(1,5)      # 1.0 <= x < 5.0, auto-cast to floats\n")),(0,l.kt)("h3",{id:"tag"},"Tag"),(0,l.kt)("p",null,"With tags you can add arbitrary metadata to a sweep. The metadata can be used by advanced sweepers."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Signature"',title:'"Signature"'},'def tag(*args: Union[str, Union[Sweep]], sweep: Optional[Sweep] = None) -> Sweep:\n    """\n    Tags the sweep with a list of string tags.\n    """\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Examples"',title:'"Examples"'},"tag(log,interval(0,1))          # 1.0 <= x < 1.0, tags=[log]\ntag(foo,bar,interval(0,1))      # 1.0 <= x < 1.0, tags=[foo,bar]\n")),(0,l.kt)("h2",{id:"reordering-lists-and-sweeps"},"Reordering lists and sweeps"),(0,l.kt)("h3",{id:"sort"},"sort"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Signature"',title:'"Signature"'},'def sort(\n    *args: Union[ElementType, ChoiceSweep, RangeSweep],\n    sweep: Optional[Union[ChoiceSweep, RangeSweep]] = None,\n    list: Optional[List[Any]] = None,\n    reverse: bool = False,\n) -> Any:\n    """\n    Sort an input list or sweep.\n    reverse=True reverses the order\n    """\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Examples"',title:'"Examples"'},"# sweep\nsort(1,3,2)                         # ChoiceSweep(1,2,3)\nsort(1,3,2,reverse=true)            # ChoiceSweep(3,2,1)\nsort(choice(1,2,3))                 # ChoiceSweep(1,2,3)\nsort(sweep=choice(1,2,3))           # ChoiceSweep(1,2,3)\nsort(choice(1,2,3),reverse=true)    # ChoiceSweep(3,2,1)\nsort(range(10,1))                   # range in ascending order\nsort(range(1,10),reverse=true)      # range in descending order\n\n# lists\nsort([1,3,2])                       # [1,2,3]\nsort(list=[1,3,2])                  # [1,2,3]\nsort(list=[1,3,2], reverse=true)    # [3,2,1]\n\n# single value returned as is\nsort(1)                             # 1\n")),(0,l.kt)("h3",{id:"shuffle"},"shuffle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Signature"',title:'"Signature"'},'def shuffle(\n    *args: Union[ElementType, ChoiceSweep, RangeSweep],\n    sweep: Optional[Union[ChoiceSweep, RangeSweep]] = None,\n    list: Optional[List[Any]] = None,\n) -> Union[List[Any], ChoiceSweep, RangeSweep]:\n    """\n    Shuffle input list or sweep (does not support interval)\n    """\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Examples"',title:'"Examples"'},"shuffle(a,b,c)                                       # shuffled a,b,c\nshuffle(choice(a,b,c)), shuffle(sweep=choice(a,b,c)) # shuffled choice(a,b,c)\nshuffle(range(1,10))                                 # shuffled range(1,10)\nshuffle([a,b,c]), shuffle(list=[a,b,c])              # shuffled list [a,b,c] \n")),(0,l.kt)("h2",{id:"type-casting"},"Type casting"),(0,l.kt)("p",null,"You can cast values and sweeps to ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bool")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"str"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Example"',title:'"Example"'},"int(3.14)                  # 3 (int)\nint(value=3.14)            # 3 (int)\nfloat(10)                  # 10.0 (float)\nstr(10)                    # \"10\" (str)\nbool(1)                    # true (bool)\nfloat(range(1,10))         # range(1.0,10.0)\nstr([1,2,3])               # ['1','2','3']\nstr({a:10})                # {a:'10'}\n")),(0,l.kt)("p",null,"Below are pseudo code snippets that illustrates the differences between Python's casting and Hydra's casting."),(0,l.kt)("h4",{id:"casting-string-to-bool"},"Casting string to bool"),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"def bool(value: Any) -> bool:\n    if isinstance(value, str):\n        return len(value) > 0\n    else:\n        return bool(value)\n\n\n\n\n"))),(0,l.kt)("div",{className:"col  col--6"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra"',title:'"Hydra"'},'def bool(s: str) -> bool:\n    if isinstance(value, str):\n        if value.lower() == "false":\n            return False\n        elif value.lower() == "true":\n            return True\n        else:\n            raise ValueError()\n    return bool(value)\n')))),(0,l.kt)("h4",{id:"casting-lists"},"Casting lists"),(0,l.kt)("p",null,"Casting lists results in a list where each element is recursively cast.\nFailure to cast an element in the list fails the cast of the list."),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"def cast_int(value: Any):\n    if isinstance(value, list):\n        raise TypeError()\n    else:\n        return int(v)\n\n\n"))),(0,l.kt)("div",{className:"col  col--6"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra"',title:'"Hydra"'},"def cast_int(value: Any):\n    if isinstance(v, list):\n        return list(map(cast_int, v))\n    else:\n        return int(v)\n\n\n")))),(0,l.kt)("h4",{id:"casting-dicts"},"Casting dicts"),(0,l.kt)("p",null,"Casting dicts results in a dict where values are recursively cast, but keys are unchanged.\nFailure to cast a value in the dict fails the cast of the entire dict."),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"def cast_int(value: Any):\n    if isinstance(value, dict):\n        raise TypeError()\n    else:\n        return int(v)\n\n\n"))),(0,l.kt)("div",{className:"col  col--6"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra"',title:'"Hydra"'},"def cast_int(value: Any):\n    if isinstance(value, dict):\n        return apply_to_values(\n            value, cast_int\n        )\n    else:\n        return int(v)\n")))),(0,l.kt)("h4",{id:"casting-ranges"},"Casting ranges"),(0,l.kt)("p",null,"Ranges can be cast to float or int, resulting in start, stop and step being cast and thus the range elements being cast."),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"def cast_int(value: Any):\n    if isinstance(value, RangeSweep):\n        raise TypeError()\n    else:\n        return int(v)\n\n\n\n\n"))),(0,l.kt)("div",{className:"col  col--6"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra"',title:'"Hydra"'},"def cast_int(value: Any):\n    if isinstance(value, RangeSweep):\n        return RangeSweep(\n            start=cast_int(value.start),\n            stop=cast_int(value.stop),\n            step=cast_int(value.step),\n        )\n    else:\n        return int(v)\n")))),(0,l.kt)("h3",{id:"conversion-matrix"},"Conversion matrix"),(0,l.kt)("p",null,"Below is the conversion matrix from various inputs to all supported types.\nInput are grouped by type."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"int()"),(0,l.kt)("th",{parentName:"tr",align:null},"float()"),(0,l.kt)("th",{parentName:"tr",align:null},"str()"),(0,l.kt)("th",{parentName:"tr",align:null},"bool()"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"10.0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u201c10\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u201c0\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10.0"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"10.0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u201c10.0\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u201c0.0\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inf"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"inf"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2018inf\u2019"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nan"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"nan"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2018nan\u2019"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1e6"),(0,l.kt)("td",{parentName:"tr",align:null},"1,000,000"),(0,l.kt)("td",{parentName:"tr",align:null},"1e6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u20181000000.0\u2019"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"foo"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"foo"),(0,l.kt)("td",{parentName:"tr",align:null},"error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u201c\u201d (empty string)"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"\u201c\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u201c10\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"10.0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u201c10\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u201c10.0\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"10.0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u201c10.0\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u201ctrue\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"\u201ctrue\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u201cfalse\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"\u201cfalse\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u201c","[1,2,3]","\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"\u201c","[1,2,3]","\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u201c{a:10}\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"\u201c{a:10}\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u201ctrue\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u201cfalse\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[0,1,2]"),(0,l.kt)("td",{parentName:"tr",align:null},"[0,1,2]"),(0,l.kt)("td",{parentName:"tr",align:null},"[0.0,1.0,2.0]"),(0,l.kt)("td",{parentName:"tr",align:null},"[\u201c0\u201d,\u201d1\u201d,\u201d2\u201d]"),(0,l.kt)("td",{parentName:"tr",align:null},"[false,true,true]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[1,","[2]","]"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,","[2]","]"),(0,l.kt)("td",{parentName:"tr",align:null},"[1.0,","[2.0]","]"),(0,l.kt)("td",{parentName:"tr",align:null},"[\u201c1\u201d,","[\u201c2\u201d]","]"),(0,l.kt)("td",{parentName:"tr",align:null},"[true,","[true]","]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[a,1]"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"[\u201ca\u201d,\u201d1\u201d]"),(0,l.kt)("td",{parentName:"tr",align:null},"error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{}"),(0,l.kt)("td",{parentName:"tr",align:null},"{}"),(0,l.kt)("td",{parentName:"tr",align:null},"{}"),(0,l.kt)("td",{parentName:"tr",align:null},"{}"),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{a:10}"),(0,l.kt)("td",{parentName:"tr",align:null},"{a:10}"),(0,l.kt)("td",{parentName:"tr",align:null},"{a:10.0}"),(0,l.kt)("td",{parentName:"tr",align:null},"{a:\u201d10\u201d}"),(0,l.kt)("td",{parentName:"tr",align:null},"{a: true}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{a:","[0,1,2]","}"),(0,l.kt)("td",{parentName:"tr",align:null},"{a:","[0,1,2]","}"),(0,l.kt)("td",{parentName:"tr",align:null},"{a:","[0.0,1.0,2.-]","}"),(0,l.kt)("td",{parentName:"tr",align:null},"{a:","[\u201c0\u201d,\u201d1\u201d,\u201d2\u201d]","}"),(0,l.kt)("td",{parentName:"tr",align:null},"{a:","[false,true,true]","}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{a:10,b:xyz}"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"{a:\u201d10\u201d,b:\u201dxyz\u201d}"),(0,l.kt)("td",{parentName:"tr",align:null},"error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"choice(0,1)"),(0,l.kt)("td",{parentName:"tr",align:null},"choice(0,1)"),(0,l.kt)("td",{parentName:"tr",align:null},"choice(0.0,1.0)"),(0,l.kt)("td",{parentName:"tr",align:null},"choice(\u201c0\u201d,\u201c1\u201d)"),(0,l.kt)("td",{parentName:"tr",align:null},"choice(false,true)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"choice(a,b)"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"choice(\u201ca\u201d,\u201db\u201d)"),(0,l.kt)("td",{parentName:"tr",align:null},"error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"choice(1,a)"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"choice(\u201c1\u201d,\u201da\u201d)"),(0,l.kt)("td",{parentName:"tr",align:null},"error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval(1.0, 2.0)"),(0,l.kt)("td",{parentName:"tr",align:null},"interval(1, 2)"),(0,l.kt)("td",{parentName:"tr",align:null},"interval(1.0, 2.0)"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval(1, 2)"),(0,l.kt)("td",{parentName:"tr",align:null},"interval(1, 2)"),(0,l.kt)("td",{parentName:"tr",align:null},"interval(1.0, 2.0)"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"range(1,10)"),(0,l.kt)("td",{parentName:"tr",align:null},"range(1,10)"),(0,l.kt)("td",{parentName:"tr",align:null},"range(1.0,10.0)"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"range(1.0, 10.0)"),(0,l.kt)("td",{parentName:"tr",align:null},"range(1,10)"),(0,l.kt)("td",{parentName:"tr",align:null},"range(1.0,10.0)"),(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"error")))))}m.isMDXComponent=!0}}]);