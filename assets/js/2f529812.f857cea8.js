"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2614],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g=r.createContext({}),p=function(e){var n=r.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(g.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,g=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=o,m=c["".concat(g,".").concat(d)]||c[d]||s[d]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3899:function(e,n,t){t.d(n,{Z:function(){return g},T:function(){return p}});var r=t(7462),o=t(7294),a=t(6742),i=t(2263),l=t(907);function g(e){return o.createElement(a.Z,(0,r.Z)({},e,{to:(n=e.to,g=(0,l.zu)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==g?void 0:g.name)?t:"current"]+n),target:"_blank"}));var n,t,g}function p(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return o.createElement(g,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},6243:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return g},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=t(3899),l=["components"],g={id:"logging",title:"Logging",sidebar_label:"Logging"},p=void 0,u={unversionedId:"tutorials/basic/running_your_app/logging",id:"tutorials/basic/running_your_app/logging",isDocsHomePage:!1,title:"Logging",description:"People often do not use Python logging due to the setup cost.",source:"@site/docs/tutorials/basic/running_your_app/4_logging.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/logging",permalink:"/docs/next/tutorials/basic/running_your_app/logging",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/tutorials/basic/running_your_app/4_logging.md",tags:[],version:"current",lastUpdatedBy:"Jasha10",lastUpdatedAt:1642944430,formattedLastUpdatedAt:"1/23/2022",sidebarPosition:4,frontMatter:{id:"logging",title:"Logging",sidebar_label:"Logging"},sidebar:"docs",previous:{title:"Output/Working directory",permalink:"/docs/next/tutorials/basic/running_your_app/working_directory"},next:{title:"Debugging",permalink:"/docs/next/tutorials/basic/running_your_app/debugging"}},s=[],c={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(i.T,{to:"examples/tutorials/basic/running_your_hydra_app/4_logging/my_app.py",mdxType:"ExampleGithubLink"}),(0,a.kt)("p",null,"People often do not use Python logging due to the setup cost.\nHydra solves this by configuring the Python logging for you."),(0,a.kt)("p",null,"By default, Hydra logs at the INFO level to both the console and a log file in the automatic working directory."),(0,a.kt)("p",null,"An example of logging with Hydra:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import logging\nfrom omegaconf import DictConfig\nimport hydra\n\n# A logger for this file\nlog = logging.getLogger(__name__)\n\n@hydra.main()\ndef my_app(_cfg: DictConfig) -> None:\n    log.info("Info level message")\n    log.debug("Debug level message")\n\nif __name__ == "__main__":\n    my_app()\n\n$ python my_app.py\n[2019-06-27 00:52:46,653][__main__][INFO] - Info level message\n\n')),(0,a.kt)("p",null,"You can enable DEBUG level logging from the command line  by overriding ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra.verbose"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hydra.verbose")," can be a Boolean, a String or a List:"),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hydra.verbose=true")," : Sets the log level of ",(0,a.kt)("strong",{parentName:"li"},"all")," loggers to ",(0,a.kt)("inlineCode",{parentName:"li"},"DEBUG")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hydra.verbose=NAME")," : Sets the log level of the logger ",(0,a.kt)("inlineCode",{parentName:"li"},"NAME")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"DEBUG"),".\nEquivalent to ",(0,a.kt)("inlineCode",{parentName:"li"},"import logging; logging.getLogger(NAME).setLevel(logging.DEBUG)"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hydra.verbose=[NAME1,NAME2]"),": Sets the log level of the loggers ",(0,a.kt)("inlineCode",{parentName:"li"},"NAME1")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"NAME2")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"DEBUG"))),(0,a.kt)("p",null,"Example output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py hydra.verbose=[__main__,hydra]\n[2019-09-29 13:06:00,880] - Installed Hydra Plugins\n[2019-09-29 13:06:00,880] - ***********************\n...\n[2019-09-29 13:06:00,896][__main__][INFO] - Info level message\n[2019-09-29 13:06:00,896][__main__][DEBUG] - Debug level message\n")),(0,a.kt)("p",null,"You can disable the logging output by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra/job_logging")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"disabled"),"   "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-commandline"},"$ python my_app.py hydra/job_logging=disabled\n<NO OUTPUT>\n")),(0,a.kt)("p",null,"You can also set ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra/job_logging=none")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra/hydra_logging=none")," if you do not want Hydra to configure the logging."),(0,a.kt)("p",null,"Logging can be ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/configure_hydra/logging"},"customized"),"."))}d.isMDXComponent=!0}}]);