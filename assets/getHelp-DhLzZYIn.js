import{N as v,c as m}from"./NavBar-wOX7PC5X.js";import{a as _,c as h,d as y}from"./api-REcrZpJX.js";import{_ as g,r as d,k as C,i as w,o as b,l as k,q as p,s as N,v as H,x as I,S as V,y as s,z as n,E as T,F as x,A as B,G as D,f as M}from"./index-l-J8Cx1Z.js";const S={components:{NavbarVue:v},setup(){const a=d({}),e=d(""),i=d(""),{locale:o}=C(),u=w();async function r(){const t=await _();console.log(t),t.code==200&&(a.value=t.data)}async function c(){if(!e.value)return B(o.value=="en"?"Please enter your friend assistance code":"请输入好友助力码");const t=await h(e.value);t.code==200&&(D(t.msg),r())}async function l(){const t=await y("app:help:desc");t.code==200&&(i.value=t.data)}function f(t){u.push(t)}return b(()=>{r(),l()}),{copy:m,userInfo:a,toHelp:c,code:e,jumpto:f,rule:i}}},U={class:"page"},$={class:"wrap flex1"},j={class:"flex-bw codes"},E={class:"flex1"},F=["placeholder"],L={class:"fs-12"},R={class:"flex"},q={class:"mb-8"},z=["innerHTML"];function A(a,e,i,o,u,r){const c=k("NavbarVue");return p(),N("div",U,[(p(),H(V,null,{default:I(()=>[M(c)]),_:1})),s("div",$,[s("div",{class:"myCode",onClick:e[0]||(e[0]=l=>o.copy(o.userInfo.helpCode))},n(a.$t("我的助力码"))+"："+n(o.userInfo.helpCode),1),s("div",j,[s("span",null,n(a.$t("好友助力码"))+"：",1),s("div",E,[T(s("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=l=>o.code=l),placeholder:a.$t("请输入助力码")},null,8,F),[[x,o.code]]),s("span",L,n(a.$t("当前剩余助力次数"))+"："+n(o.userInfo.helpNum),1)])]),s("div",R,[s("button",{onClick:e[2]||(e[2]=(...l)=>o.toHelp&&o.toHelp(...l))},n(a.$t("给好友助力")),1),s("button",{onClick:e[3]||(e[3]=l=>o.jumpto("/invite"))},n(a.$t("邀请好友")),1)])]),s("div",q,n(a.$t("助力说明"))+"：",1),s("div",{innerHTML:o.rule},null,8,z)])}const J=g(S,[["render",A],["__scopeId","data-v-92063a91"]]);export{J as default};
