import{N as w}from"./NavBar-DmvligJC.js";import{M as L}from"./MyTabbar-CBHjeX6f.js";import{_ as N,k as V,i as x,r as _,o as R,l as d,q as t,s as o,v as u,x as v,S as h,y as s,L as M,z as a,H as B,I as C,C as S,f as b}from"./index-S2zTlICI.js";import{l as E}from"./api-Bx-wWTMg.js";import{E as k}from"./index-Dgqdf6gF.js";import"./use-placeholder-C7KdJeTT.js";const I=""+new URL("../imgs/one.png",import.meta.url).href,T=""+new URL("../imgs/two.png",import.meta.url).href,U=""+new URL("../imgs/three.png",import.meta.url).href,z={components:{NavbarVue:w,MyTabbarVue:L,[k.name]:k},setup(){const{locale:r}=V(),p=x(),f=_(3),e=_({}),l=_([]);async function g(){const n=await E();n.code==200&&(e.value=n.data.member,l.value=n.data.memberList)}R(()=>{g()});function i(n){p.push(n)}return{jumpto:i,active:f,locale:r,memberList:l,member:e}}},A={class:"page flex1"},G={class:"mainWrap"},K={class:"myRank flex-bw"},O={class:"flex user"},j={class:"blue"},q=["src"],D={class:"flex1"},F={class:"fs-12"},H={class:"yellow"},W={class:"fs-16"},J={class:"flex user"},P=["src"],Q={class:"flex1"},X={class:"fs-12"},Y={key:0,class:"icon",src:I,alt:""},Z={key:1,class:"icon",src:T,alt:""},$={key:2,class:"icon",src:U,alt:""},ss={key:3,class:"nums"};function es(r,p,f,e,l,g){const i=d("NavbarVue"),n=d("MyTabbarVue"),y=d("van-empty");return t(),o("div",A,[(t(),u(h,null,{default:v(()=>[b(i)]),_:1})),(t(),u(h,null,{default:v(()=>[b(n,{active:e.active},null,8,["active"])]),_:1})),s("div",{class:"ranking",style:M({"background-image":e.locale=="en"?"url(imgs/rankingbg1.png)":"url(imgs/rankingbg.png)"})},null,4),s("div",G,[s("div",K,[s("div",O,[s("div",j,a(r.$t("我的排名")),1),s("img",{src:e.member.avatar,alt:""},null,8,q),s("div",D,[s("span",null,a(e.member.name),1),s("span",F,a(e.member.kongAmount)+" KONG",1)])]),s("span",H,a(r.$t("名次"))+"："+a(e.member.rank),1)]),s("div",W,a(r.$t("排名")),1),s("div",null,[(t(!0),o(B,null,C(e.memberList,(m,c)=>(t(),o("div",{class:"rankRow flex-bw",key:c},[s("div",J,[s("img",{src:m.avatar,alt:""},null,8,P),s("div",Q,[s("span",null,a(m.name),1),s("span",X,a(m.kongAmount)+" KONG",1)])]),c==0?(t(),o("img",Y)):c==1?(t(),o("img",Z)):c==2?(t(),o("img",$)):(t(),o("span",ss,a(c+1),1))]))),128))]),e.memberList.length==0?(t(),u(y,{key:0,description:r.$t("暂无数据")},null,8,["description"])):S("",!0)])])}const ls=N(z,[["render",es],["__scopeId","data-v-f5ca1074"]]);export{ls as default};
