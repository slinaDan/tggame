import{Q as T,c as A,t as P,n as x,m as N,d as U,r as j,ag as z,f as l,O as D,ao as E,ac as K,g as w,ad as q,an as F,b as G,ap as Q,X,K as Y,aq as Z,ar as H,as as J,j as W,at as ee,_ as te,l as I,q as d,v as ae,x as i,y as h,s as b,z as y,S as ne}from"./index-CQ3tacxD.js";import{s as oe}from"./NavBar-BfTgkDUD.js";import{u as re}from"./use-placeholder-82hqpu4J.js";const se={to:[String,Object],url:String,replace:Boolean};function ce({to:e,url:t,replace:a,$router:n}){e&&n?n[a?"replace":"push"](e):t&&(a?location.replace(t):location.href=t)}function ie(){const e=T().proxy;return()=>ce(e)}const[V,S]=A("tabbar"),le={route:Boolean,fixed:P,border:P,zIndex:x,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:N(0),safeAreaInsetBottom:{type:Boolean,default:null}},O=Symbol(V);var ue=U({name:V,props:le,emits:["change","update:modelValue"],setup(e,{emit:t,slots:a}){const n=j(),{linkChildren:f}=z(O),u=re(n,S),m=()=>{var s;return(s=e.safeAreaInsetBottom)!=null?s:e.fixed},r=()=>{var s;const{fixed:c,zIndex:_,border:g}=e;return l("div",{ref:n,role:"tablist",style:D(_),class:[S({fixed:c}),{[E]:g,"van-safe-area-bottom":m()}]},[(s=a.default)==null?void 0:s.call(a)])};return f({props:e,setActive:(s,c)=>{K(e.beforeChange,{args:[s],done(){t("update:modelValue",s),t("change",s),c()}})}}),()=>e.fixed&&e.placeholder?u(r):r()}});const $=w(ue),[me,k]=A("tabbar-item"),de=q({},se,{dot:Boolean,icon:String,name:x,badge:x,badgeProps:Object,iconPrefix:String});var _e=U({name:me,props:de,emits:["click"],setup(e,{emit:t,slots:a}){const n=ie(),f=T().proxy,{parent:u,index:m}=F(O);if(!u)return;const r=G(()=>{var c;const{route:_,modelValue:g}=u.props;if(_&&"$route"in f){const{$route:C}=f,{to:v}=e,p=Z(v)?v:{path:v};return!!C.matched.find(B=>{const L="path"in p&&p.path===B.path,M="name"in p&&p.name===B.name;return L||M})}return((c=e.name)!=null?c:m.value)===g}),o=c=>{var _;r.value||u.setActive((_=e.name)!=null?_:m.value,n),t("click",c)},s=()=>{if(a.icon)return a.icon({active:r.value});if(e.icon)return l(Y,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var c;const{dot:_,badge:g}=e,{activeColor:C,inactiveColor:v}=u.props,p=r.value?C:v;return l("div",{role:"tab",class:k({active:r.value}),style:{color:p},tabindex:0,"aria-selected":r.value,onClick:o},[l(Q,X({dot:_,class:k("icon"),content:g},e.badgeProps),{default:s}),l("div",{class:k("text")},[(c=a.default)==null?void 0:c.call(a,{active:r.value})])])}}});const R=w(_e),be=""+new URL("../imgs/tabbar11.png",import.meta.url).href,fe=""+new URL("../imgs/tabbar1.png",import.meta.url).href,pe=""+new URL("../imgs/tabbar22.png",import.meta.url).href,ge=""+new URL("../imgs/tabbar2.png",import.meta.url).href,ve=""+new URL("../imgs/tabbar33.png",import.meta.url).href,he=""+new URL("../imgs/tabbar3.png",import.meta.url).href,ye=""+new URL("../imgs/tabbar44.png",import.meta.url).href,Ce=""+new URL("../imgs/tabbar4.png",import.meta.url).href,ke={components:{TonConnectButton:H,[$.name]:$,[R.name]:R},props:["active"],async setup(e){let t=J();const[a]=W(),n=e.active,f=()=>{a.disconnect(),localStorage.clear()},{open:u}=ee();return{userFriendlyAddress:t,logout:f,open:u,sliceAddress:oe,active:n}}},xe={class:"tabbar"},Be={key:0,src:be},Pe={key:1,src:fe},Ie={key:0,src:pe},Se={key:1,src:ge},$e={key:0,src:ve},Re={key:1,src:he},Te={key:0,src:ye},Ae={key:1,src:Ce};function Ue(e,t,a,n,f,u){const m=I("van-tabbar-item"),r=I("van-tabbar");return d(),ae(ne,null,{default:i(()=>[h("div",xe,[l(r,{modelValue:n.active,"onUpdate:modelValue":t[0]||(t[0]=o=>n.active=o),"active-color":"#fff","inactive-color":"#C4C2D8",border:!1},{default:i(()=>[l(m,{to:"/"},{icon:i(o=>[o.active?(d(),b("img",Be)):(d(),b("img",Pe))]),default:i(()=>[h("span",null,y(e.$t("宠物孵化")),1)]),_:1}),l(m,{to:"/synthesis"},{icon:i(o=>[o.active?(d(),b("img",Ie)):(d(),b("img",Se))]),default:i(()=>[h("span",null,y(e.$t("合成")),1)]),_:1}),l(m,{to:"/myPet"},{icon:i(o=>[o.active?(d(),b("img",$e)):(d(),b("img",Re))]),default:i(()=>[h("span",null,y(e.$t("我的宠物")),1)]),_:1}),l(m,{to:"/ranking"},{icon:i(o=>[o.active?(d(),b("img",Te)):(d(),b("img",Ae))]),default:i(()=>[h("span",null,y(e.$t("KONG排行榜")),1)]),_:1})]),_:1},8,["modelValue"])])]),_:1})}const Le=te(ke,[["render",Ue],["__scopeId","data-v-26dc184f"]]);export{Le as M};
