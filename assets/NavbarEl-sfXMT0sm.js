import{o as h,c as _,b as t,a as e,f as o,e as r,r as f,_ as y,j as p,l as c,n as d,F as v}from"./index-qchCosE3.js";const b={class:"p-3 md:p-10 max-w-screen-lg mx-auto"},m={class:"bg-gray-4 pb-4 pt-6 mx-auto rounded-t-2xl"},w={class:"flex justify-center"},k=t("li",null,[t("button",{class:"px-2 py-1 transition hover:text-primary",type:"button"},"常見問題")],-1),M=t("li",null,[t("button",{class:"px-2 py-1 transition hover:text-primary",type:"button"},"聯絡我們")],-1),C=t("div",{class:"rounded-b-2xl my-1 bg-gray-4 text-center py-3"},[t("p",{class:"text-gray-2"},"本網站不提供商業用途。")],-1),O="/img_components/logo.svg",at={__name:"ComponentFooter",setup(g){return(l,x)=>{const u=f("RouterLink");return h(),_("footer",b,[t("div",m,[t("img",{class:"mx-auto w-12 mb-3 md:w-16",src:O,alt:"選集"}),t("ul",w,[t("li",null,[e(u,{to:"/terms",class:"px-2 py-1 transition hover:text-primary",type:"button"},{default:o(()=>[r("關於我們")]),_:1})]),t("li",null,[e(u,{to:"/",class:"px-2 py-1 transition hover:text-primary",type:"button"},{default:o(()=>[r("開始投票")]),_:1})]),k,M])]),C])}}},L={data(){return{isMenuListOpen:!1,isMenuModalOpen:!1,logoImageUrl:"/img_components/logo.svg"}},methods:{toggleMenu(){this.isMenuListOpen=!this.isMenuListOpen},openMenuModal(){this.isMenuModalOpen=!0},closeMenuModal(){this.isMenuModalOpen=!1}}},j={class:"py-3 px-3 sticky top-0 bg-white"},B={class:"flex items-center justify-between max-w-screen-lg mx-auto"},I={class:"flex"},N=["src"],R={class:"gap-2 pl-6 hidden md:flex"},U={class:"group relative"},F=t("div",{class:"group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:rounded group-hover:after:left-1/2 group-hover:after:-translate-x-1/2 group-hover:after:w-4 group-hover:after:h-1 group-hover:after:bg-primary"},null,-1),V={class:"group relative"},z=t("div",{class:"group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:rounded group-hover:after:left-1/2 group-hover:after:-translate-x-1/2 group-hover:after:w-4 group-hover:after:h-1 group-hover:after:bg-primary"},null,-1),D={class:"group relative"},E=t("div",{class:"group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:rounded group-hover:after:left-1/2 group-hover:after:-translate-x-1/2 group-hover:after:w-4 group-hover:after:h-1 group-hover:after:bg-primary"},null,-1),S={class:"group relative"},T=t("div",{class:"group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:rounded group-hover:after:left-1/2 group-hover:after:-translate-x-1/2 group-hover:after:w-4 group-hover:after:h-1 group-hover:after:bg-primary"},null,-1),q={class:"flex items-center gap-2"},A={class:"relative"},G=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-circle-user-round"},[t("path",{d:"M18 20a6 6 0 0 0-12 0"}),t("circle",{cx:"12",cy:"10",r:"4"}),t("circle",{cx:"12",cy:"12",r:"10"})],-1),H=t("li",null,[t("button",{class:"py-2 transition hover:text-primary w-full",type:"button"},"帳戶設定")],-1),J=t("li",null,[t("button",{class:"py-2 transition hover:text-primary w-full",type:"button"},"投票項目")],-1),K=t("li",null,[t("button",{class:"py-2 transition hover:text-primary w-full",type:"button"},"投票評論")],-1),P=t("li",null,[t("button",{class:"py-2 transition hover:text-primary w-full",type:"button"},"登出")],-1),Q=[H,J,K,P],W={class:"md:hidden"},X=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-align-justify"},[t("line",{x1:"3",x2:"21",y1:"6",y2:"6"}),t("line",{x1:"3",x2:"21",y1:"12",y2:"12"}),t("line",{x1:"3",x2:"21",y1:"18",y2:"18"})],-1),Y=[X],Z={class:"flex justify-between items-center py-3"},$=["src"],tt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-x"},[t("path",{d:"M18 6 6 18"}),t("path",{d:"m6 6 12 12"})],-1),et=[tt],ot={class:"gap-2"},rt=t("div",{class:"border-b-2 my-4"},null,-1),st=t("button",{type:"button",class:"py-2 px-4 w-full text-left transition hover:text-primary"},"登出",-1);function lt(g,l,x,u,n,a){const s=f("RouterLink");return h(),_(v,null,[t("nav",j,[t("div",B,[t("div",I,[e(s,{to:"/"},{default:o(()=>[t("img",{class:"w-12 md:w-16",src:n.logoImageUrl,alt:"選集"},null,8,N)]),_:1}),t("ul",R,[t("li",U,[e(s,{to:"/terms",type:"button",class:"py-2 px-4 block w-full text-left transition hover:text-primary"},{default:o(()=>[r("關於我們")]),_:1}),F]),t("li",V,[e(s,{to:"/",type:"button",class:"py-2 px-4 block w-full text-left transition hover:text-primary"},{default:o(()=>[r("開始投票")]),_:1}),z]),t("li",D,[e(s,{to:"/",type:"button",class:"py-2 px-4 block w-full text-left transition hover:text-primary"},{default:o(()=>[r("常見問題")]),_:1}),E]),t("li",S,[e(s,{to:"/",type:"button",class:"py-2 px-4 block w-full text-left transition hover:text-primary"},{default:o(()=>[r("聯絡我們")]),_:1}),T])])]),t("ul",q,[t("li",null,[e(s,{to:"/",type:"button",class:"px-6 py-2 border-2 border-black rounded-full hover:border-gray-2 hover:bg-gray-2 hover:text-white transition"},{default:o(()=>[r("登入")]),_:1})]),t("li",null,[e(s,{to:"/",type:"button",class:"px-6 py-2 border-2 border-black rounded-full bg-black text-white hover:border-gray-2 hover:bg-gray-2 transition"},{default:o(()=>[r("註冊")]),_:1})]),t("li",A,[t("button",{onClick:l[0]||(l[0]=(...i)=>a.toggleMenu&&a.toggleMenu(...i)),type:"button",class:"px-6 py-2 border-2 border-black rounded-full flex gap-2 items-center hover:bg-gray-2 hover:text-white hover:border-gray-2 transition"},[G,r("會員中心 ")]),p(t("ul",{class:d([{"animate-fadeIn":n.isMenuListOpen},"absolute left-0 right-0 mt-2 p-3 bg-white drop-shadow-2xlg rounded-2xl text-center"])},Q,2),[[c,n.isMenuListOpen]])]),t("li",W,[t("button",{type:"button",class:"p-2",onClick:l[1]||(l[1]=(...i)=>a.openMenuModal&&a.openMenuModal(...i))},Y)])])])]),p(t("div",{class:d([{"animate-fadeIn":n.isMenuModalOpen},"fixed top-0 left-0 right-0 bottom-0 bg-white z-10 p-3"])},[t("div",Z,[t("img",{class:"w-12",src:n.logoImageUrl,alt:"選集"},null,8,$),t("button",{onClick:l[2]||(l[2]=(...i)=>a.closeMenuModal&&a.closeMenuModal(...i)),type:"button"},et)]),t("ul",ot,[t("li",null,[e(s,{to:"/",type:"button",class:"py-2 px-4 block w-full text-left transition hover:text-primary"},{default:o(()=>[r("關於我們")]),_:1})]),t("li",null,[e(s,{to:"/",type:"button",class:"py-2 px-4 block w-full text-left transition hover:text-primary"},{default:o(()=>[r("開始投票")]),_:1})]),t("li",null,[e(s,{to:"/",type:"button",class:"py-2 px-4 block w-full text-left transition hover:text-primary"},{default:o(()=>[r("常見問題")]),_:1})]),t("li",null,[e(s,{to:"/",type:"button",class:"py-2 px-4 block w-full text-left transition hover:text-primary"},{default:o(()=>[r("聯絡我們")]),_:1})])]),rt,st],2),[[c,n.isMenuModalOpen]])],64)}const it=y(L,[["render",lt]]);export{it as N,at as _};
