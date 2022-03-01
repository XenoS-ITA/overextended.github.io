"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[358],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return m}});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?t.createElement(b,l(l({ref:r},s),{},{components:n})):t.createElement(b,l({ref:r},s))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9097:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return d},default:function(){return m}});var t=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={},c="Permissions",p={unversionedId:"ox_lib/Server/acl",id:"ox_lib/Server/acl",title:"Permissions",description:"Wrapper around the built-in ACL system. Handles lib.addCommand and ox_groups permissions.",source:"@site/docs/ox_lib/Server/acl.md",sourceDirName:"ox_lib/Server",slug:"/ox_lib/Server/acl",permalink:"/docs/ox_lib/Server/acl",editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Server/acl.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"index",permalink:"/docs/ox_lib/Server/"},next:{title:"Command",permalink:"/docs/ox_lib/Server/addCommand"}},s={},d=[{value:"lib.addAce",id:"libaddace",level:3},{value:"lib.removeAce",id:"libremoveace",level:3},{value:"lib.addPrincipal",id:"libaddprincipal",level:3},{value:"lib.removePrincipal",id:"libremoveprincipal",level:3}],u={toc:d};function m(e){var r=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"permissions"},"Permissions"),(0,a.kt)("p",null,"Wrapper around the built-in ACL system. Handles lib.addCommand and ox_groups permissions.",(0,a.kt)("br",{parentName:"p"}),"\n","Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://forum.cfx.re/t/basic-aces-principals-overview-guide/90917"},"Basic Aces & Principals overview/guide")," for more information."),(0,a.kt)("h3",{id:"libaddace"},"lib.addAce"),(0,a.kt)("p",null,"Assigns the ace permission to a principal. Third parameter defaults to 'allow', while false sets the permission to 'deny'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- principal: string\n-- ace: string\n-- allow: boolean\nlib.addAce(principal, ace, allow)\n\nlib.addAce('group.admin', 'command.say')\n")),(0,a.kt)("h3",{id:"libremoveace"},"lib.removeAce"),(0,a.kt)("p",null,"Removes the ace permission from a principal. Third parameter defaults to 'allow', while false sets the permission to 'deny'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- principal: string\n-- ace: string\n-- allow: boolean\nlib.removeAce(principal, ace, allow)\n\nlib.removeAce('group.admin', 'command.say')\n")),(0,a.kt)("h3",{id:"libaddprincipal"},"lib.addPrincipal"),(0,a.kt)("p",null,"Assigns a principal to a parent principal. Children inherit permissions from the parent."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- child: string\n-- parent: string\nlib.addPrincipal(child, parent)\n\nlib.addPrincipal('player.1', 'group.moderator')\n")),(0,a.kt)("h3",{id:"libremoveprincipal"},"lib.removePrincipal"),(0,a.kt)("p",null,"Removes a principal from a parent principal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- child: string\n-- parent: string\nlib.removePrincipal(child, parent)\n\nlib.removePrincipal('player.1', 'group.moderator')\n")))}m.isMDXComponent=!0}}]);