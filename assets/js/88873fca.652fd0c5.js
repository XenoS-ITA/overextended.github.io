"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4291],{9613:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>y});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(r),y=a,d=c["".concat(s,".").concat(y)]||c[y]||u[y]||o;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8872:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(4250),a=(r(9496),r(9613));const o={},i="CreateTemporaryStash",l={unversionedId:"ox_inventory/Functions/Server/Inventory/CreateTemporaryStash",id:"ox_inventory/Functions/Server/Inventory/CreateTemporaryStash",title:"CreateTemporaryStash",description:"Creates a temporary stash which will be removed after some time.",source:"@site/docs/ox_inventory/Functions/Server/Inventory/CreateTemporaryStash.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/CreateTemporaryStash",permalink:"/docs/ox_inventory/Functions/Server/Inventory/CreateTemporaryStash",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/CreateTemporaryStash.md",tags:[],version:"current",lastUpdatedAt:1678111404,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{},sidebar:"ox_inventory",previous:{title:"ConvertItems",permalink:"/docs/ox_inventory/Functions/Server/Inventory/ConvertItems"},next:{title:"CustomDrop",permalink:"/docs/ox_inventory/Functions/Server/Inventory/CustomDrop"}},s={},p=[],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"createtemporarystash"},"CreateTemporaryStash"),(0,a.kt)("p",null,"Creates a temporary stash which will be removed after some time."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:CreateTemporaryStash(properties)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"properties: ",(0,a.kt)("inlineCode",{parentName:"li"},"table"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"label: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"slots: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"maxWeight: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"owner?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Can only access the stash linked to the owner."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true"),": Each player has a unique stash but can request other player's stashes."),(0,a.kt)("li",{parentName:"ul"},"The inventory is always shared if ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"nil"),"."))),(0,a.kt)("li",{parentName:"ul"},"groups?: ",(0,a.kt)("inlineCode",{parentName:"li"},"table<string, number>"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Table of group names (e.g. jobs) where the numeric value is the minimum grade required."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{['police'] = 0, ['ambulance'] = 2}")))),(0,a.kt)("li",{parentName:"ul"},"coords?: ",(0,a.kt)("inlineCode",{parentName:"li"},"vector3"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Stash can only be accessed while nearby."))),(0,a.kt)("li",{parentName:"ul"},"items?: ",(0,a.kt)("inlineCode",{parentName:"li"},"{ [number]: string, [number]: number, [number]?: table }[]"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"An array of tables, containing a sequence of itemName, count, metadata.")))))),(0,a.kt)("p",null,"Return:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"inventoryId: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local mystash = exports.ox_inventory:CreateTemporaryStash({\n    label = 'mystash',\n    slots = 5,\n    maxWeight = 5000,\n    items = {\n        { 'WEAPON_MINISMG', 1 },\n        { 'ammo-9', 69 },\n        { 'water', 2, { label = 'Mineral water' } }\n    }\n})\n\nTriggerClientEvent('ox_inventory:openInventory', 1, 'stash', mystash)\n")))}u.isMDXComponent=!0}}]);