"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1852],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),h=l,v=p["".concat(i,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8126:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(6600),l=(r(9496),r(9613));const a={title:"Methods"},o=void 0,c={unversionedId:"ox_core/Vehicle/Server/methods",id:"ox_core/Vehicle/Server/methods",title:"Methods",description:"These functions are inherited by instances of CVehicle.",source:"@site/docs/ox_core/Vehicle/Server/methods.md",sourceDirName:"ox_core/Vehicle/Server",slug:"/ox_core/Vehicle/Server/methods",permalink:"/docs/ox_core/Vehicle/Server/methods",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_core/Vehicle/Server/methods.md",tags:[],version:"current",lastUpdatedAt:1665488974,formattedLastUpdatedAt:"Oct 11, 2022",frontMatter:{title:"Methods"},sidebar:"ox_core",previous:{title:"Server",permalink:"/docs/ox_core/Vehicle/Server/"}},i={},s=[{value:"vehicle.set",id:"vehicleset",level:2},{value:"vehicle.get",id:"vehicleget",level:2},{value:"vehicle.getCoords",id:"vehiclegetcoords",level:2},{value:"vehicle.delete",id:"vehicledelete",level:2},{value:"vehicle.store",id:"vehiclestore",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"These functions are inherited by instances of CVehicle."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local vehicle = Ox.GetVehicle(entity)\n")),(0,l.kt)("h2",{id:"vehicleset"},"vehicle.set"),(0,l.kt)("p",null,"Sets the vehicle's metadata for key to the given value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local key, value = 'vin', '1HGBH41JXMN109186'\nvehicle.set(key, value)\n")),(0,l.kt)("h2",{id:"vehicleget"},"vehicle.get"),(0,l.kt)("p",null,"Return the vehicle's metadata. Sending an argument will retrieve a specific metadata key."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local data = vehicle.get()\nlocal vin = vehicle.get('vin')\n")),(0,l.kt)("h2",{id:"vehiclegetcoords"},"vehicle.getCoords"),(0,l.kt)("p",null,"Return the vehicle's world position. The value will be cached for future calls, so send true for the first argument to update it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local coords = vehicle.getCoords(update)\n")),(0,l.kt)("h2",{id:"vehicledelete"},"vehicle.delete"),(0,l.kt)("p",null,"Remove the vehicle from the database and despawns the entity."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"vehicle.delete()\n")),(0,l.kt)("h2",{id:"vehiclestore"},"vehicle.store"),(0,l.kt)("p",null,"Save the vehicle to the database and despawns the entity."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local store = 'garagea'\nvehicle.store(store)\n")))}d.isMDXComponent=!0}}]);