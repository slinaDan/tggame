import{_ as I,i as D,K as N,r as f,o as b,l as m,q as s,s as a,f as B,y as r,H as L,J as S,v as q,A as c,z as o}from"./index-B691GwuT.js";import{o as E}from"./api-CjhyYONa.js";import{N as g}from"./index-CxgHzYv3.js";import{E as k}from"./index-CLejF7qy.js";import{a as H}from"./function-call-BqwFy359.js";import"./use-placeholder-tAUy5Gse.js";import"./index-TiZfQg1j.js";const M={components:{[g.name]:g,[k.name]:k},setup(){const t=D(),i=N();console.log(i.query.petId);const _=i.query.petId,n=f([]);f(null);const p=f(1),d=f(0);async function u(){const l=await E(_||"",p.value);l.code==200&&(d.value=l.total,p.value==1&&(n.value=[]),n.value=n.value.concat(...l.rows))}b(()=>{u()});function v(l){const h=l.target;if(h){const{scrollTop:$,scrollHeight:w,clientHeight:C}=h;$+C>=w&&(console.log("已经滚动到底部",d.value,n.value.length),d.value>n.value.length&&(p.value+=1,u()))}}function e(l){H([l])}function y(){t.back()}return{onClickLeft:y,petDetail:n,handleScroll:v,previewImg:e}}},V={class:"page"},P={class:"no flex"},R={class:"flex"},T=["src","onClick"],z={class:"flex1"},A={class:"flex-bw fs-13"},F={key:0},J={key:1},K={key:2},W={key:3},j={key:4},G={key:5},O={class:"fs-13 date"};function Q(t,i,_,n,p,d){const u=m("van-nav-bar"),v=m("van-empty");return s(),a("div",V,[B(u,{fixed:"",title:t.$t("宠物明细"),"left-arrow":"",onClickLeft:n.onClickLeft,border:!1},null,8,["title","onClickLeft"]),r("div",{class:"petWrap flex1 scroll-container",ref:"scrollContainer",onScroll:i[0]||(i[0]=(...e)=>n.handleScroll&&n.handleScroll(...e))},[(s(!0),a(L,null,S(n.petDetail,(e,y)=>(s(),a("div",{class:"wrap flex1",key:e.id},[r("div",P,o(t.$t("宠物编号"))+"："+o(e.petNo),1),r("div",R,[r("img",{src:e.pet?e.pet.image:"",alt:"",onClick:l=>n.previewImg(e.pet.image)},null,8,T),r("div",z,[r("span",null,o(e.pet?e.pet.name:""),1),r("div",A,[e.type==1?(s(),a("span",F,o(t.$t("类型"))+"："+o(t.$t("孵化")),1)):c("",!0),e.type==2?(s(),a("span",J,o(t.$t("类型"))+"："+o(t.$t("转赠")),1)):c("",!0),e.type==3?(s(),a("span",K,o(t.$t("类型"))+"："+o(t.$t("转入")),1)):c("",!0),e.type==4?(s(),a("span",W,o(t.$t("类型"))+"："+o(t.$t("合成")),1)):c("",!0),e.type==5?(s(),a("span",j,o(t.$t("类型"))+"："+o(t.$t("合成扣减")),1)):c("",!0),e.sendMemerId?(s(),a("span",G,o(e.type==2?t.$t("转赠人"):t.$t("转入人"))+"："+o(e.sendMemerId),1)):c("",!0)]),r("span",O,o(t.$t("获得时间"))+"："+o(e.createTime),1)])])]))),128)),n.petDetail.length==0?(s(),q(v,{key:0,description:t.$t("暂无数据")},null,8,["description"])):c("",!0)],544)])}const oe=I(M,[["render",Q],["__scopeId","data-v-c6a0aaf5"]]);export{oe as default};
