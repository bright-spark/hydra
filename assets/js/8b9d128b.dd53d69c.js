(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{191:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var i=t(3),r=t(8),a=(t(0),t(269)),o=(t(276),{id:"configuring_plugins",title:"Configuring Plugins"}),c={unversionedId:"patterns/configuring_plugins",id:"patterns/configuring_plugins",isDocsHomePage:!1,title:"Configuring Plugins",description:"Hydra plugins usually comes with sensible defaults which works with minimal configuration.",source:"@site/docs/patterns/configuring_plugins.md",slug:"/patterns/configuring_plugins",permalink:"/docs/next/patterns/configuring_plugins",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/patterns/configuring_plugins.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1621380137,formattedLastUpdatedAt:"5/18/2021",sidebar:"docs",previous:{title:"Configuring Experiments",permalink:"/docs/next/patterns/configuring_experiments"},next:{title:"Selecting multiple configs from a Config Group",permalink:"/docs/next/patterns/select_multiple_configs_from_config_group"}},l=[{value:"Overriding in primary config",id:"overriding-in-primary-config",children:[]},{value:"Extending plugin default config",id:"extending-plugin-default-config",children:[]}],s={toc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hydra plugins usually comes with sensible defaults which works with minimal configuration.\nThere are two primary ways to customize the configuration of a plugin:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Overriding it directly in your primary config"),Object(a.b)("li",{parentName:"ul"},"Extending the config and using it from your primary config.")),Object(a.b)("p",null,"The first method is the simpler, but it makes it harder to switch to a different plugin configuration.\nThe second method is a bit more complicated, but makes it easier to switch between different plugin configurations."),Object(a.b)("p",null,"The following methods apply to all Hydra plugins. In the following examples, we will configure a imaginary Launcher plugin\n",Object(a.b)("inlineCode",{parentName:"p"},"MoonLauncher"),". The Launcher has two modes: ",Object(a.b)("inlineCode",{parentName:"p"},"falcon9"),", which actually launches the application to the Moon and\n",Object(a.b)("inlineCode",{parentName:"p"},"sim")," which simulates a launch."),Object(a.b)("p",null,"The config schema for MoonLauncher looks like:"),Object(a.b)("div",{className:"row"},Object(a.b)("div",{className:"col col--6"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"@dataclass\nclass Falcon9Conf:\n  ton_fuel:  int = 10\n\n\n\n\n"))),Object(a.b)("div",{className:"col  col--6"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"@dataclass\nclass Simulation:\n  ton_fuel:  int = 10\n  window_size:\n    width: 1024\n    height: 768\n\n")))),Object(a.b)("h3",{id:"overriding-in-primary-config"},"Overriding in primary config"),Object(a.b)("p",null,"We can directly override Launcher config in primary config."),Object(a.b)("div",{className:"row"},Object(a.b)("div",{className:"col col--4"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"a: 1\n\nhydra:\n  launcher:\n    ton_fuel: 2\n\n\n\n\n\n\n\n\n\n"))),Object(a.b)("div",{className:"col col--4"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-commandline",metastring:'title="command-line override"',title:'"command-line','override"':!0},"hydra/launcher=falcon9\n\n\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="resulting launcher config"  {3}',title:'"resulting',launcher:!0,'config"':!0,"":!0,"{3}":!0},"hydra:\n  launcher:\n    ton_fuel: 2\n\n\n\n"))),Object(a.b)("div",{className:"col col--4"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-commandline",metastring:'title="command-line override"',title:'"command-line','override"':!0},"hydra/launcher=sim\n\n\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="resulting launcher config"  {3}',title:'"resulting',launcher:!0,'config"':!0,"":!0,"{3}":!0},"hydra:\n  launcher:\n    ton_fuel: 2\n    window_size:\n      width: 1024\n      height: 768\n")))),Object(a.b)("p",null,"This approach makes the assumption that the Launcher used has all the fields we are overriding.\nIf we wanted to override a field that exists in the Simulation Launcher but not in the Falcon9 Launcher,\nlike ",Object(a.b)("inlineCode",{parentName:"p"},"window_size.width"),", we would no longer be able to use the Falcon9 Launcher! The next section solves this problem."),Object(a.b)("h3",{id:"extending-plugin-default-config"},"Extending plugin default config"),Object(a.b)("p",null,"This section assumes that you are familiar with the contents of ",Object(a.b)("a",{parentName:"p",href:"/docs/next/patterns/extending_configs"},"Common Patterns/Extending Configs"),"."),Object(a.b)("p",null,"Extending plugin default config has several advantages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Separate configuration concerns, keep primary config clean."),Object(a.b)("li",{parentName:"ul"},"Easier to switch between different plugin configurations."),Object(a.b)("li",{parentName:"ul"},"Provides flexibility when a Plugin has different modes\nthat requires different schema.")),Object(a.b)("p",null,"Say that we want to override certain values for different Launcher mode:"),Object(a.b)("div",{className:"row"},Object(a.b)("div",{className:"col col--6"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hydra/launcher/my_falcon9.yaml" {4}',title:'"hydra/launcher/my_falcon9.yaml"',"{4}":!0},"defaults:\n  - falcon9\n\nton_fuel: 2\n\n\n"))),Object(a.b)("div",{className:"col col--6"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hydra/sweeper/my_sim.yaml" {5}',title:'"hydra/sweeper/my_sim.yaml"',"{5}":!0},"defaults:\n  - sim\n\nwindow_size:\n  width: 768\n\n")))),Object(a.b)("p",null,"We can easily user command-line overrides to get the configuration needed:"),Object(a.b)("div",{className:"row"},Object(a.b)("div",{className:"col col--6"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-commandline",metastring:'title="command-line override"',title:'"command-line','override"':!0},"hydra/launcher=my_falcon9\n\n\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="resulting launcher config"  {3}',title:'"resulting',launcher:!0,'config"':!0,"":!0,"{3}":!0},"hydra:\n  launcher:\n    ton_fuel: 2\n\n\n\n"))),Object(a.b)("div",{className:"col col--6"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-commandline",metastring:'title="command-line override"',title:'"command-line','override"':!0},"hydra/launcher=my_sim\n\n\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="resulting launcher config"  {5}',title:'"resulting',launcher:!0,'config"':!0,"":!0,"{5}":!0},"hydra:\n  launcher:\n    ton_fuel: 10\n    window_size:\n      width: 768\n      height: 768\n")))))}u.isMDXComponent=!0},269:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},g=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),g=i,p=d["".concat(o,".").concat(g)]||d[g]||f[g]||a;return t?r.a.createElement(p,c(c({ref:n},s),{},{components:t})):r.a.createElement(p,c({ref:n},s))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},270:function(e,n,t){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return r}))},271:function(e,n,t){"use strict";var i=t(0),r=t.n(i),a=t(11),o=t(270),c=t(7),l=Object(i.createContext)({collectLink:function(){}}),s=t(272),u=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)n.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(t[i[r]]=e[i[r]])}return t};n.a=function(e){var n,t,d,f=e.isNavLink,g=e.to,p=e.href,m=e.activeClassName,b=e.isActive,h=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,O=void 0===v||v,y=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(s.b)().withBaseUrl,w=Object(i.useContext)(l),N=g||p,D=Object(o.a)(N),x=null==N?void 0:N.replace("pathname://",""),P=void 0!==x?(t=x,O&&function(e){return e.startsWith("/")}(t)?j(t):t):void 0,A=Object(i.useRef)(!1),_=f?a.e:a.c,E=c.default.canUseIntersectionObserver;Object(i.useEffect)((function(){return!E&&D&&window.docusaurus.prefetch(P),function(){E&&d&&d.disconnect()}}),[P,E,D]);var C=null!==(n=null==P?void 0:P.startsWith("#"))&&void 0!==n&&n,L=!P||!D||C;return P&&D&&!C&&!h&&w.collectLink(P),L?r.a.createElement("a",Object.assign({href:P},N&&!D&&{target:"_blank",rel:"noopener noreferrer"},y)):r.a.createElement(_,Object.assign({},y,{onMouseEnter:function(){A.current||(window.docusaurus.preload(P),A.current=!0)},innerRef:function(e){var n,t;E&&e&&D&&(n=e,t=function(){window.docusaurus.prefetch(P)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(n),d.disconnect(),t())}))}))).observe(n))},to:P||""},f&&{isActive:b,activeClassName:m}))}},272:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return o}));var i=t(10),r=t(270);function a(){var e=Object(i.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,c=void 0!==o&&o,l=a.absolute,s=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(c)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+u:u}(a,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},273:function(e,n,t){try{e.exports=t(274)}catch(r){var i={};e.exports={useAllDocsData:function(){return i},useActivePluginAndVersion:function(){}}}},274:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useDocVersionSuggestions=n.useActiveDocContext=n.useActiveVersion=n.useLatestVersion=n.useVersions=n.useActivePluginAndVersion=n.useActivePlugin=n.useDocsData=n.useAllDocsData=void 0;var i=t(23),r=t(38),a=t(275);n.useAllDocsData=function(){return r.useAllPluginInstancesData("docusaurus-plugin-content-docs")},n.useDocsData=function(e){return r.usePluginData("docusaurus-plugin-content-docs",e)},n.useActivePlugin=function(e){void 0===e&&(e={});var t=n.useAllDocsData(),r=i.useLocation().pathname;return a.getActivePlugin(t,r,e)},n.useActivePluginAndVersion=function(e){void 0===e&&(e={});var t=n.useActivePlugin(e),r=i.useLocation().pathname;if(t)return{activePlugin:t,activeVersion:a.getActiveVersion(t.pluginData,r)}},n.useVersions=function(e){return n.useDocsData(e).versions},n.useLatestVersion=function(e){var t=n.useDocsData(e);return a.getLatestVersion(t)},n.useActiveVersion=function(e){var t=n.useDocsData(e),r=i.useLocation().pathname;return a.getActiveVersion(t,r)},n.useActiveDocContext=function(e){var t=n.useDocsData(e),r=i.useLocation().pathname;return a.getActiveDocContext(t,r)},n.useDocVersionSuggestions=function(e){var t=n.useDocsData(e),r=i.useLocation().pathname;return a.getDocVersionSuggestions(t,r)}},275:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var i=t(23);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var r=Object.entries(e).find((function(e){e[0];var t=e[1];return!!i.matchPath(n,{path:t.path,exact:!1,strict:!1})})),a=r?{pluginId:r[0],pluginData:r[1]}:void 0;if(!a&&t.failfast)throw new Error("Can't find active docs plugin for pathname="+n+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return a},n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},n.getActiveVersion=function(e,t){var r=n.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==r})),[r]).find((function(e){return!!i.matchPath(t,{path:e.path,exact:!1,strict:!1})}))},n.getActiveDocContext=function(e,t){var r,a,o=n.getActiveVersion(e,t),c=null==o?void 0:o.docs.find((function(e){return!!i.matchPath(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(r=c.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===r&&(a[e.name]=n)}))})),a):{}}},n.getDocVersionSuggestions=function(e,t){var i=n.getLatestVersion(e),r=n.getActiveDocContext(e,t),a=r.activeVersion!==i;return{latestDocSuggestion:a?null==r?void 0:r.alternateDocVersions[i.name]:void 0,latestVersionSuggestion:a?i:void 0}}},276:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return u}));var i=t(3),r=t(0),a=t.n(r),o=t(271),c=t(10),l=t(273);function s(e){return a.a.createElement(o.a,Object(i.a)({},e,{to:(n=e.to,r=Object(l.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(t=null==r?void 0:r.name)&&void 0!==t?t:"current"]+n),target:"_blank"}));var n,t,r}function u(e){var n,t=null!==(n=e.text)&&void 0!==n?n:"Example";return a.a.createElement(s,e,a.a.createElement("span",null,"\xa0"),a.a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example"}))}}}]);