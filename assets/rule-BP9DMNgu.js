import{_ as f,i as d,r as c,K as _,k as p,l as v,q as m,s as k,f as C,y as N}from"./index-B691GwuT.js";import{d as g}from"./api-CjhyYONa.js";import{N as i}from"./index-CxgHzYv3.js";import"./use-placeholder-tAUy5Gse.js";const y={components:{[i.name]:i},setup(){const s=d();let t=c("");const o=_();console.log(o.query.detail);const e=o.query.detail&&JSON.parse(o.query.detail),a=c(""),{locale:r}=p();e?(a.value=e.title,t.value=e.content):(a.value=r.value=="en"?"KONG Rules":"KONG 规则",n());async function n(){const l=await g("app:kong:rule");l.code==200&&(t.value=l.data)}function u(){s.back()}return{onClickLeft:u,rule:t,title:a}}},L={class:"page"},b=["innerHTML"];function q(s,t,o,e,a,r){const n=v("van-nav-bar");return m(),k("div",L,[C(n,{fixed:"",title:e.title,"left-arrow":"",onClickLeft:e.onClickLeft,border:!1},null,8,["title","onClickLeft"]),N("div",{class:"ruleCont",innerHTML:e.rule},null,8,b)])}const h=f(y,[["render",q],["__scopeId","data-v-fa2bd402"]]);export{h as default};
