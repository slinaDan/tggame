import{N as v,c as m}from"./NavBar-B_JY-XEw.js";import{a as _,c as h,d as y}from"./api-D9jvAFlf.js";import{_ as g,r as d,k as C,i as w,o as b,l as k,q as p,s as N,v as H,x as I,S as V,y as s,z as a,E as B,F as T,B as x,G as D,f as M}from"./index-ClPHJh0a.js";const S={components:{NavbarVue:v},setup(){const n=d({}),e=d(""),i=d(""),{locale:o}=C(),u=w();async function r(){const t=await _();console.log(t),t.code==200&&(n.value=t.data)}async function c(){if(!e.value)return x(o.value=="en"?"Please enter your friend assistance code":"请输入好友助力码");const t=await h(e.value);t.code==200&&(D(t.msg),r())}async function l(){const t=await y("app:help:desc");t.code==200&&(i.value=t.data)}function f(t){u.push(t)}return b(()=>{r(),l()}),{copy:m,userInfo:n,toHelp:c,code:e,jumpto:f,rule:i}}},U={class:"page"},$={class:"wrap flex1"},j={class:"flex-bw codes"},E={class:"flex1"},F=["placeholder"],L={class:"fs-12"},R={class:"flex"},q={class:"mb-8"},z=["innerHTML"];function G(n,e,i,o,u,r){const c=k("NavbarVue");return p(),N("div",U,[(p(),H(V,null,{default:I(()=>[M(c)]),_:1})),s("div",$,[s("div",{class:"myCode",onClick:e[0]||(e[0]=l=>o.copy(o.userInfo.helpCode))},a(n.$t("我的助力码"))+"："+a(o.userInfo.helpCode),1),s("div",j,[s("span",null,a(n.$t("好友助力码"))+"：",1),s("div",E,[B(s("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=l=>o.code=l),placeholder:n.$t("请输入助力码")},null,8,F),[[T,o.code]]),s("span",L,a(n.$t("当前剩余助力次数"))+"："+a(o.userInfo.helpNum),1)])]),s("div",R,[s("button",{onClick:e[2]||(e[2]=(...l)=>o.toHelp&&o.toHelp(...l))},a(n.$t("给好友助力")),1),s("button",{onClick:e[3]||(e[3]=l=>o.jumpto("/invite"))},a(n.$t("邀请好友")),1)])]),s("div",q,a(n.$t("助力说明"))+"：",1),s("div",{innerHTML:o.rule},null,8,z)])}const J=g(S,[["render",G],["__scopeId","data-v-327b0fe6"]]);export{J as default};
