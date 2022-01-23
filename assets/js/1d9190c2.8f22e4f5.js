"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8302],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2617:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"multi-run",title:"Multi-run",sidebar_label:"Multi-run"},p=void 0,l={unversionedId:"tutorials/basic/running_your_app/multi-run",id:"version-1.0/tutorials/basic/running_your_app/multi-run",isDocsHomePage:!1,title:"Multi-run",description:"Sometimes you want to run a parameter sweep.",source:"@site/versioned_docs/version-1.0/tutorials/basic/running_your_app/2_multirun.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/multi-run",permalink:"/docs/1.0/tutorials/basic/running_your_app/multi-run",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/basic/running_your_app/2_multirun.md",tags:[],version:"1.0",lastUpdatedBy:"Jasha10",lastUpdatedAt:1642944430,formattedLastUpdatedAt:"1/23/2022",sidebarPosition:2,frontMatter:{id:"multi-run",title:"Multi-run",sidebar_label:"Multi-run"},sidebar:"version-1.0/docs",previous:{title:"Putting it all together",permalink:"/docs/1.0/tutorials/basic/your_first_app/composition"},next:{title:"Output/Working directory",permalink:"/docs/1.0/tutorials/basic/running_your_app/working_directory"}},u=[{value:"Sweeper",id:"sweeper",children:[]},{value:"Launcher",id:"launcher",children:[]}],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sometimes you want to run a parameter sweep.\nA parameter sweep is a method of evaluating a function (or a program) with a pre-determined set of parameters.\nThe examples below will clarify what this means."),(0,o.kt)("p",null,"To run a parameter sweep, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--multirun")," (",(0,o.kt)("inlineCode",{parentName:"p"},"-m"),") flag and pass a comma separated list for each\ndimension you want to sweep.  "),(0,o.kt)("p",null,"To run your program with the 3 different schemas in schema config group:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ python my_app.py -m schema=warehouse,support,school\n")),(0,o.kt)("p",null,"Here is sweep over the db types (mysql,postgresql) and the schemas (warehouse,support,school).\nOutput does not contain the configuration prints."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"}," $ python my_app.py schema=warehouse,support,school db=mysql,postgresql -m\n[2019-10-01 14:44:16,254] - Launching 6 jobs locally\n[2019-10-01 14:44:16,254] - Sweep output dir : multirun/2019-10-01/14-44-16\n[2019-10-01 14:44:16,254] -     #0 : schema=warehouse db=mysql\n[2019-10-01 14:44:16,321] -     #1 : schema=warehouse db=postgresql\n[2019-10-01 14:44:16,390] -     #2 : schema=support db=mysql\n[2019-10-01 14:44:16,458] -     #3 : schema=support db=postgresql\n[2019-10-01 14:44:16,527] -     #4 : schema=school db=mysql\n[2019-10-01 14:44:16,602] -     #5 : schema=school db=postgresql\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Hydra supports other kind of sweeps, for example a range sweep: ",(0,o.kt)("strong",{parentName:"p"},"x=range(1,10)")," or a glob: ",(0,o.kt)("strong",{parentName:"p"},"support=glob(*)"),".",(0,o.kt)("br",{parentName:"p"}),"\n","See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.0/advanced/override_grammar/extended"},"Extended Override syntax")," for details."))),(0,o.kt)("h3",{id:"sweeper"},"Sweeper"),(0,o.kt)("p",null,"The sweeping logic is implemented by a simple sweeper that is built into Hydra.\nAdditional sweepers are available as plugins.\nFor example, the ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.0/plugins/ax_sweeper"},"Ax Sweeper")," can automatically find the best parameter combination!"),(0,o.kt)("h3",{id:"launcher"},"Launcher"),(0,o.kt)("p",null,"A Launcher is what runs your job. Hydra comes with a simple launcher that runs the jobs locally and serially.\nOther launchers are available as plugins for launching in parallel and on different clusters. For example, the ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.0/plugins/joblib_launcher"},"JobLib Launcher"),"\ncan execute the different parameter combinations in parallel on your local machine using multi-processing."))}m.isMDXComponent=!0}}]);