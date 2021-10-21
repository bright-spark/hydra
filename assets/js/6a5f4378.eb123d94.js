"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2250],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3899:function(e,t,n){n.d(t,{Z:function(){return s},T:function(){return c}});var a=n(7462),i=n(7294),o=n(6742),r=n(2263),l=n(907);function s(e){return i.createElement(o.Z,(0,a.Z)({},e,{to:(t=e.to,s=(0,l.zu)(),(0,r.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==s?void 0:s.name)?n:"current"]+t),target:"_blank"}));var t,n,s}function c(e){var t,n=null!=(t=e.text)?t:"Example";return i.createElement(s,e,i.createElement("span",null,"\xa0"),i.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},7847:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=n(3899),l=["components"],s={id:"specializing_config",title:"Specializing configuration"},c=void 0,d={unversionedId:"patterns/specializing_config",id:"patterns/specializing_config",isDocsHomePage:!1,title:"Specializing configuration",description:"In some cases the desired configuration should depend on other configuration choices.",source:"@site/docs/patterns/specializing_config.md",sourceDirName:"patterns",slug:"/patterns/specializing_config",permalink:"/docs/next/patterns/specializing_config",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/patterns/specializing_config.md",tags:[],version:"current",lastUpdatedBy:"Jasha10",lastUpdatedAt:1634836172,formattedLastUpdatedAt:"10/21/2021",frontMatter:{id:"specializing_config",title:"Specializing configuration"},sidebar:"docs",previous:{title:"Selecting multiple configs from a Config Group",permalink:"/docs/next/patterns/select_multiple_configs_from_config_group"},next:{title:"Read-only config",permalink:"/docs/next/patterns/write_protect_config_node"}},p=[{value:"initial config.yaml",id:"initial-configyaml",children:[]},{value:"modified config.yaml",id:"modified-configyaml",children:[]},{value:"dataset_model/cifar10_alexnet.yaml",id:"dataset_modelcifar10_alexnetyaml",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.T,{text:"Example application",to:"examples/patterns/specializing_config-select",mdxType:"ExampleGithubLink"}),(0,o.kt)("p",null,"In some cases the desired configuration should depend on other configuration choices.\nFor example, You may want to use only 5 layers in your Alexnet model if the dataset of choice is cifar10, and the dafault 7 otherwise."),(0,o.kt)("p",null,"We can start with a config that looks like this:"),(0,o.kt)("h3",{id:"initial-configyaml"},"initial config.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - dataset: imagenet\n  - model: alexnet\n")),(0,o.kt)("p",null,"We want to specialize the config based on the choice of the selected dataset and model:\nFurthermore, we only want to do it for cifar10 and alexnet and not for 3 other combinations."),(0,o.kt)("p",null,"OmegaConf supports value interpolation, we can construct a value that would - at runtime - be a function of other values.\nThe idea is that we can add another element to the defaults list that would load a file name that depends on those two values:"),(0,o.kt)("h3",{id:"modified-configyaml"},"modified config.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - dataset: imagenet\n  - model: alexnet\n  - optional dataset_model: ${dataset}_${model}\n")),(0,o.kt)("p",null,"Let's break this down:"),(0,o.kt)("h4",{id:"dataset_model"},"dataset_model"),(0,o.kt)("p",null,"The key ",(0,o.kt)("inlineCode",{parentName:"p"},"dataset_model")," is an arbitrary directory, it can be anything unique that makes sense, including nested directory like ",(0,o.kt)("inlineCode",{parentName:"p"},"dataset/model"),"."),(0,o.kt)("h4",{id:"dataset_model-1"},"${dataset}_${model}"),(0,o.kt)("p",null,"the value ",(0,o.kt)("inlineCode",{parentName:"p"},"${dataset}_${model}")," is using OmegaConf's ",(0,o.kt)("a",{parentName:"p",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#variable-interpolation"},"variable interpolation")," syntax.\nAt runtime, that value would resolve to ",(0,o.kt)("em",{parentName:"p"},"imagenet_alexnet"),", or ",(0,o.kt)("em",{parentName:"p"},"cifar_resnet")," - depending on the values of defaults.dataset and defaults.model."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is non-standard interpolation and there are some subtle differences and limitations."))),(0,o.kt)("h4",{id:"optional"},"optional"),(0,o.kt)("p",null,"By default, Hydra fails with an error if a config specified in the defaults does not exist.\nIn this case we only want to specialize cifar10 + alexnet, not all 4 combinations.\nthe keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"optional")," tells Hydra to just continue if it can't find this file."),(0,o.kt)("p",null,"When specializing config, you usually want to only specify what's different, and not the whole thing.\nWe want the model for alexnet, when trained on cifar - to have 5 layers."),(0,o.kt)("h3",{id:"dataset_modelcifar10_alexnetyaml"},"dataset_model/cifar10_alexnet.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"model:\n  num_layers: 5\n")),(0,o.kt)("p",null,"Let's check. Running with the default uses imagenet, so we don't get the specialized version of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python example.py \ndataset:\n  name: imagenet\n  path: /datasets/imagenet\nmodel:\n  num_layers: 7\n  type: alexnet\n")),(0,o.kt)("p",null,"Running with cifar10 dataset, we do get 5 for num_layers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python example.py dataset=cifar10\ndataset:\n  name: cifar10\n  path: /datasets/cifar10\nmodel:\n  num_layers: 5\n  type: alexnet\n")))}m.isMDXComponent=!0}}]);