"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8279],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=c(r),d=o,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||l;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3899:function(e,t,r){r.d(t,{Z:function(){return p},T:function(){return c}});var n=r(7462),o=r(7294),l=r(6742),a=r(2263),i=r(907);function p(e){return o.createElement(l.Z,(0,n.Z)({},e,{to:(t=e.to,p=(0,i.zu)(),(0,a.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(r=null==p?void 0:p.name)?r:"current"]+t),target:"_blank"}));var t,r,p}function c(e){var t,r=null!=(t=e.text)?t:"Example (Click Here)";return o.createElement(p,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+r+"-informational",alt:"Example (Click Here)"}))}},2678:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return g},default:function(){return f}});var n,o=r(7462),l=r(3366),a=(r(7294),r(3905)),i=r(3899),p=["components"],c={id:"colorlog",title:"Colorlog plugin",sidebar_label:"Colorlog plugin"},s=void 0,u={unversionedId:"plugins/colorlog",id:"plugins/colorlog",isDocsHomePage:!1,title:"Colorlog plugin",description:"PyPI",source:"@site/docs/plugins/colorlog.md",sourceDirName:"plugins",slug:"/plugins/colorlog",permalink:"/docs/next/plugins/colorlog",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/plugins/colorlog.md",tags:[],version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1642635143,formattedLastUpdatedAt:"1/19/2022",frontMatter:{id:"colorlog",title:"Colorlog plugin",sidebar_label:"Colorlog plugin"},sidebar:"docs",previous:{title:"Customizing Application's help",permalink:"/docs/next/configure_hydra/app_help"},next:{title:"Joblib Launcher plugin",permalink:"/docs/next/plugins/joblib_launcher"}},g=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],d=(n="GithubLink",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),m={toc:g};function f(e){var t=e.components,n=(0,l.Z)(e,p);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/hydra-colorlog/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-colorlog",alt:"PyPI"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-colorlog",alt:"PyPI - License"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-colorlog",alt:"PyPI - Python Version"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-colorlog"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-colorlog.svg",alt:"PyPI - Downloads"})),(0,a.kt)(i.T,{text:"Example application",to:"plugins/hydra_colorlog/example",mdxType:"ExampleGithubLink"}),(0,a.kt)(i.T,{text:"Plugin source",to:"plugins/hydra_colorlog",mdxType:"ExampleGithubLink"})),(0,a.kt)("p",null,"Adds ",(0,a.kt)("a",{class:"external",href:"https://github.com/borntyping/python-colorlog",target:"_blank"},"colorlog")," colored logs for ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra/hydra_logging"),"."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra_colorlog --upgrade\n")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Override ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra/hydra_logging")," in your config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/job_logging: colorlog\n  - override hydra/hydra_logging: colorlog\n")),(0,a.kt)("p",null,"There are several standard approaches for configuring plugins. Check ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/patterns/configuring_plugins"},"this page")," for more information."),(0,a.kt)("p",null,"See included ",(0,a.kt)(d,{to:"plugins/hydra_colorlog/example",mdxType:"GithubLink"},"example application"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Colored log output",src:r(98).Z})))}f.isMDXComponent=!0},98:function(e,t,r){t.Z=r.p+"assets/images/colorlog-b20147697b9d16362f62a5d0bb58347f.png"}}]);