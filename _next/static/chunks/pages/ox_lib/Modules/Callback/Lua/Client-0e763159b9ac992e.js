(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2058],{9661:function(e,l,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_lib/Modules/Callback/Lua/Client",function(){return s(2237)}])},2237:function(e,l,s){"use strict";s.r(l),s.d(l,{__toc:function(){return a}});var n=s(1527),r=s(2059),i=s(3443);let a=[{depth:2,value:"Trigger Server Callback",id:"trigger-server-callback"},{depth:3,value:"lib.callback",id:"libcallback"},{depth:3,value:"lib.callback.await",id:"libcallbackawait"},{depth:2,value:"Register Client Callback",id:"register-client-callback"},{depth:3,value:"lib.callback.register",id:"libcallbackregister"}];function c(e){let l=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},(0,i.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h1,{children:"Client"}),"\n",(0,n.jsx)(l.h2,{id:"trigger-server-callback",children:"Trigger Server Callback"}),"\n",(0,n.jsx)(l.h3,{id:"libcallback",children:"lib.callback"}),"\n",(0,n.jsx)(l.p,{children:"The response is handled in a separate coroutine."}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(l.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"callback"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(name, delay, cb, "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-constant)"},children:"..."}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["name: ",(0,n.jsx)(l.code,{children:"string"})]}),"\n",(0,n.jsxs)(l.li,{children:["delay: ",(0,n.jsx)(l.code,{children:"number"})," or ",(0,n.jsx)(l.code,{children:"false"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"Amount of time until this callback can be triggered again"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["cb: ",(0,n.jsx)(l.code,{children:"function"})]}),"\n",(0,n.jsxs)(l.li,{children:["...: ",(0,n.jsx)(l.code,{children:"any"})]}),"\n"]}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"callback"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox_inventory:getItemCount'"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-parameter)"},children:"count"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(count)"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'water'"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:", {type "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'fresh'"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"})"})]})]})}),"\n",(0,n.jsx)(l.h3,{id:"libcallbackawait",children:"lib.callback.await"}),"\n",(0,n.jsx)(l.p,{children:"The current coroutine is yielded until a response is received."}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(l.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"lib.callback."}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"await"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(name, delay, "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-constant)"},children:"..."}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["name: ",(0,n.jsx)(l.code,{children:"string"})]}),"\n",(0,n.jsxs)(l.li,{children:["delay: ",(0,n.jsx)(l.code,{children:"number"})," or ",(0,n.jsx)(l.code,{children:"false"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"Amount of time until this callback can be triggered again"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["...: ",(0,n.jsx)(l.code,{children:"any"})]}),"\n"]}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" count "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" lib.callback."}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"await"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox_inventory:getItemCount'"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'water'"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:", {type "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'fresh'"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"})"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(count)"})]})]})}),"\n",(0,n.jsx)(l.h2,{id:"register-client-callback",children:"Register Client Callback"}),"\n",(0,n.jsx)(l.h3,{id:"libcallbackregister",children:"lib.callback.register"}),"\n",(0,n.jsx)(l.p,{children:"Register an event handler for responding to server requests."}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(l.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"lib.callback."}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"register"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(name, cb)"})]})})}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["name: ",(0,n.jsx)(l.code,{children:"string"})]}),"\n",(0,n.jsxs)(l.li,{children:["cb: ",(0,n.jsx)(l.code,{children:"function"})]}),"\n"]}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"lib.callback."}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"register"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox:getNearbyVehicles'"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-parameter)"},children:"radius"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" nearbyVehicles "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"getNearbyVehicles"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"GetEntityCoords"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(cache.ped), radius, "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" nearbyVehicles"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})]})}l.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:l}=Object.assign({},(0,i.a)(),e.components);return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/ox_lib/Modules/Callback/Lua/Client.mdx",route:"/ox_lib/Modules/Callback/Lua/Client",title:"Client",headings:a},pageNextRoute:"/ox_lib/Modules/Callback/Lua/Client"})}},function(e){e.O(0,[2059,9774,2888,179],function(){return e(e.s=9661)}),_N_E=e.O()}]);