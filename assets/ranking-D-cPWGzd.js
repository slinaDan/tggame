import{N as w}from"./NavBar-B_JY-XEw.js";import{M as L}from"./MyTabbar-BGIdZBT_.js";import{_ as N,k as V,i as x,r as _,o as R,l as d,q as t,s as o,v as u,x as v,S as h,y as s,L as M,z as a,H as B,I as S,A,f as b}from"./index-ClPHJh0a.js";import{o as C}from"./api-D9jvAFlf.js";import{E as k}from"./index-CX4kjn0m.js";import"./use-placeholder-DVrY4sxw.js";const E=""+new URL("../imgs/one.png",import.meta.url).href,I=""+new URL("../imgs/two.png",import.meta.url).href,T=""+new URL("../imgs/three.png",import.meta.url).href,U={components:{NavbarVue:w,MyTabbarVue:L,[k.name]:k},setup(){const{locale:r}=V(),p=x(),f=_(3),e=_({}),i=_([]);async function g(){const n=await C();n.code==200&&(e.value=n.data.member,i.value=n.data.memberList)}R(()=>{g()});function l(n){p.push(n)}return{jumpto:l,active:f,locale:r,memberList:i,member:e}}},z={class:"page flex1"},G={class:"mainWrap"},K={class:"myRank flex-bw"},O={class:"flex user"},j={class:"blue"},q=["src"],D={class:"flex1"},F={class:"fs-12"},H={class:"yellow"},W={class:"fs-16"},J={class:"flex user"},P=["src"],Q={class:"flex1"},X={class:"fs-12"},Y={key:0,class:"icon",src:E,alt:""},Z={key:1,class:"icon",src:I,alt:""},$={key:2,class:"icon",src:T,alt:""},ss={key:3,class:"nums"};function es(r,p,f,e,i,g){const l=d("NavbarVue"),n=d("MyTabbarVue"),y=d("van-empty");return t(),o("div",z,[(t(),u(h,null,{default:v(()=>[b(l)]),_:1})),(t(),u(h,null,{default:v(()=>[b(n,{active:e.active},null,8,["active"])]),_:1})),s("div",{class:"ranking",style:M({"background-image":e.locale=="en"?"url(imgs/rankingbg1.png)":"url(imgs/rankingbg.png)"})},null,4),s("div",G,[s("div",K,[s("div",O,[s("div",j,a(r.$t("我的排名")),1),s("img",{src:e.member.avatar,alt:""},null,8,q),s("div",D,[s("span",null,a(e.member.name),1),s("span",F,a(e.member.kongAmount)+" KONG",1)])]),s("span",H,a(r.$t("名次"))+"："+a(e.member.rank),1)]),s("div",W,a(r.$t("排名")),1),s("div",null,[(t(!0),o(B,null,S(e.memberList,(m,c)=>(t(),o("div",{class:"rankRow flex-bw",key:c},[s("div",J,[s("img",{src:m.avatar,alt:""},null,8,P),s("div",Q,[s("span",null,a(m.name),1),s("span",X,a(m.kongAmount)+" KONG",1)])]),c==0?(t(),o("img",Y)):c==1?(t(),o("img",Z)):c==2?(t(),o("img",$)):(t(),o("span",ss,a(c+1),1))]))),128))]),e.memberList.length==0?(t(),u(y,{key:0,description:r.$t("暂无数据")},null,8,["description"])):A("",!0)])])}const is=N(U,[["render",es],["__scopeId","data-v-f5ca1074"]]);export{is as default};
