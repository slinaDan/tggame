import{_ as w,i as D,J as N,r as f,o as b,l as y,q as s,s as a,f as B,y as r,H as L,I as S,v as q,C as c,z as o}from"./index-jGd7M4XS.js";import{P as E}from"./api-BkGIExB3.js";import{N as g}from"./index-CEWyZLay.js";import{E as k}from"./index-9RjU7Pw0.js";import{a as H}from"./function-call-5oG5HLXg.js";import"./use-placeholder-EQuqUqbJ.js";import"./index-G1exyTPe.js";const M={components:{[g.name]:g,[k.name]:k},setup(){const e=D(),i=N();console.log(i.query.petId);const _=i.query.petId,n=f([]);f(null);const d=f(1),p=f(0);async function u(){const l=await E(_||"",d.value);l.code==200&&(p.value=l.total,d.value==1&&(n.value=[]),n.value=n.value.concat(...l.rows))}b(()=>{u()});function v(l){const h=l.target;if(h){const{scrollTop:$,scrollHeight:C,clientHeight:I}=h;$+I>=C&&(console.log("已经滚动到底部",p.value,n.value.length),p.value>n.value.length&&(d.value+=1,u()))}}function t(l){H([l])}function m(){e.back()}return{onClickLeft:m,petDetail:n,handleScroll:v,previewImg:t}}},P={class:"page"},V={class:"no flex"},R={class:"flex"},T=["src","onClick"],z={class:"flex1"},F={class:"flex-bw fs-13"},J={key:0},W={key:1},j={key:2},A={key:3},G={key:4},K={key:5},O={class:"fs-13 date"};function Q(e,i,_,n,d,p){const u=y("van-nav-bar"),v=y("van-empty");return s(),a("div",P,[B(u,{fixed:"",title:e.$t("宠物明细"),"left-arrow":"",onClickLeft:n.onClickLeft,border:!1},null,8,["title","onClickLeft"]),r("div",{class:"petWrap flex1 scroll-container",ref:"scrollContainer",onScroll:i[0]||(i[0]=(...t)=>n.handleScroll&&n.handleScroll(...t))},[(s(!0),a(L,null,S(n.petDetail,(t,m)=>(s(),a("div",{class:"wrap flex1",key:t.id},[r("div",V,o(e.$t("宠物编号"))+"："+o(t.petNo),1),r("div",R,[r("img",{src:t.pet.image,alt:"",onClick:l=>n.previewImg(t.pet.image)},null,8,T),r("div",z,[r("span",null,o(t.pet.name),1),r("div",F,[t.type==1?(s(),a("span",J,o(e.$t("类型"))+"："+o(e.$t("孵化")),1)):c("",!0),t.type==2?(s(),a("span",W,o(e.$t("类型"))+"："+o(e.$t("转赠")),1)):c("",!0),t.type==3?(s(),a("span",j,o(e.$t("类型"))+"："+o(e.$t("转入")),1)):c("",!0),t.type==4?(s(),a("span",A,o(e.$t("类型"))+"："+o(e.$t("合成")),1)):c("",!0),t.type==5?(s(),a("span",G,o(e.$t("类型"))+"："+o(e.$t("合成扣减")),1)):c("",!0),t.sendMemerId?(s(),a("span",K,o(e.$t("转入人"))+"："+o(t.sendMemerId),1)):c("",!0)]),r("span",O,o(e.$t("获得时间"))+"："+o(t.createTime),1)])])]))),128)),n.petDetail.length==0?(s(),q(v,{key:0,description:e.$t("暂无数据")},null,8,["description"])):c("",!0)],544)])}const oe=w(M,[["render",Q],["__scopeId","data-v-dd9eadd5"]]);export{oe as default};
