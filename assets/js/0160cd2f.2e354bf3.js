"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4614],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5498:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(9496),a=n(5924);const i={tabItem:"tabItem_IfE0"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:n},t)}},725:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(2564),a=n(9496),i=n(5924),l=n(3819),o=n(3442),u=n(1233),s=n(6491),c=n(9182);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=d(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[u,s]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),k=(()=>{const e=u??p;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),b(e)}),[s,b,i]),tabValues:i}}var k=n(7502);const y={tabList:"tabList_qavC",tabItem:"tabItem_f8Aq"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==o&&(p(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=b(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function h(e){const t=(0,k.Z)();return a.createElement(N,(0,r.Z)({key:String(t)},e))}},7081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(2564),a=(n(9496),n(9613)),i=n(725),l=n(5498);const o={title:"Notifications"},u=void 0,s={unversionedId:"ox_lib/Modules/Interface/Client/notify",id:"ox_lib/Modules/Interface/Client/notify",title:"Notifications",description:"lib.notify",source:"@site/docs/ox_lib/Modules/Interface/Client/notify.md",sourceDirName:"ox_lib/Modules/Interface/Client",slug:"/ox_lib/Modules/Interface/Client/notify",permalink:"/docs/ox_lib/Modules/Interface/Client/notify",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Modules/Interface/Client/notify.md",tags:[],version:"current",lastUpdatedAt:1685115401,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Notifications"},sidebar:"tutorialSidebar",previous:{title:"Menu",permalink:"/docs/ox_lib/Modules/Interface/Client/menu"},next:{title:"Progress",permalink:"/docs/ox_lib/Modules/Interface/Client/progress"}},c={},p=[{value:"lib.notify",id:"libnotify",level:3},{value:"Usage Example",id:"usage-example",level:3},{value:"Standard",id:"standard",level:4},{value:"Custom",id:"custom",level:4}],d={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"libnotify"},"lib.notify"),(0,a.kt)("p",null,"Custom notifications with a lot of styling options."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Client",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.notify(data)\n"))),(0,a.kt)(l.Z,{value:"Server",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"TriggerClientEvent('ox_lib:notify', source, data)\n"))))),(0,a.kt)(l.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.notify(data)\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When set the current notification will be unique and only shown once on screen when spammed."))),(0,a.kt)("li",{parentName:"ul"},"title?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Must provide if there is no description"))),(0,a.kt)("li",{parentName:"ul"},"description?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Must provide if there is no title"),(0,a.kt)("li",{parentName:"ul"},"Markdown support"))),(0,a.kt)("li",{parentName:"ul"},"duration?: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"position?: ",(0,a.kt)("inlineCode",{parentName:"li"},"'top'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'top-right'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'top-left'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom-right'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom-left'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'center-right'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'center-left'"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'top-right'")))),(0,a.kt)("li",{parentName:"ul"},"type?: ",(0,a.kt)("inlineCode",{parentName:"li"},"'inform'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'error'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'success'"),"or ",(0,a.kt)("inlineCode",{parentName:"li"},"'warning'"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'inform'")))),(0,a.kt)("li",{parentName:"ul"},"style?: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," (",(0,a.kt)("inlineCode",{parentName:"li"},"object"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"React CSS styling format"))),(0,a.kt)("li",{parentName:"ul"},"icon?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Font Awesome 6 icon name"))),(0,a.kt)("li",{parentName:"ul"},"iconColor: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"iconColor")," will get rid of the contrasted icon colour and it's circular background.")),(0,a.kt)("h3",{id:"usage-example"},"Usage Example"),(0,a.kt)("h4",{id:"standard"},"Standard"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.notify({\n    title = 'Notification title',\n    description = 'Notification description',\n    type = 'success'\n})\n"))),(0,a.kt)(l.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.notify({\n  title: 'Notification title',\n  description: 'Notification description',\n  type: 'success'\n})\n")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/HFeBTLg.png",alt:"notification"})),(0,a.kt)("h4",{id:"custom"},"Custom"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.notify({\n    id = 'some_identifier',\n    title = 'Notification title',\n    description = 'Notification description',\n    position = 'top',\n    style = {\n        backgroundColor = '#141517',\n        color = '#C1C2C5',\n        ['.description'] = {\n          color = '#909296'\n        }\n    },\n    icon = 'ban',\n    iconColor = '#C53030'\n})\n"))),(0,a.kt)(l.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.notify({\n  id: 'some_identifier',\n  title: 'Notification title',\n  description: 'Notification description',\n  position: 'top',\n  style: {\n    backgroundColor: '#141517',\n    color: '#C1C2C5',\n    '.decription': {\n      color: '#909296',\n    },\n  },\n  icon: 'ban',\n  iconColor: '#C53030'\n})\n")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/WpqiW5f.png",alt:"custom_notification"})))}f.isMDXComponent=!0}}]);