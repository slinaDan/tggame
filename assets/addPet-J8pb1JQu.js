import{_ as y,i as g,r as u,k as C,o as L,l as _,q as a,s as i,f as N,y as o,H as b,I as w,z as c,v as B,C as I,A as v}from"./index-l-J8Cx1Z.js";import{i as E}from"./api-REcrZpJX.js";import{N as k}from"./index-BkkKcov-.js";import{E as h}from"./index-D_Xh2VBz.js";import"./use-placeholder-aBHGaMwr.js";const P=""+new URL("../imgs/checked.png",import.meta.url).href,R=""+new URL("../imgs/nocheck.png",import.meta.url).href,V={components:{[k.name]:k,[h.name]:h},setup(){const s=g(),n=u(-1);let r=u([]);const{locale:t}=C();async function p(){const e=await E();e.code==200&&(r.value=e.data)}function d(e,l){e.num>=3?n.value=l:v(t.value=="en"?"Insufficient number of pets":"宠物数量不足")}L(()=>{p()});function f(){r.value[n.value]?s.push("/synthesis?petItem="+JSON.stringify(r.value[n.value])):v(t.value=="en"?"No pet selected":"未选择宠物")}function m(){s.back()}return{onClickLeft:m,current:n,petList:r,check:d,onConfirm:f}}},$={class:"page"},x={class:"petWrap flex1"},F=["onClick"],M={key:0,class:"radio",src:P,alt:""},O={key:1,class:"radio",src:R,alt:""},S={class:"flex1"},U={class:"fs-13"},q={class:"fs-13"};function z(s,n,r,t,p,d){const f=_("van-nav-bar"),m=_("van-empty");return a(),i("div",$,[N(f,{fixed:"",title:s.$t("选择宠物"),"left-arrow":"",onClickLeft:t.onClickLeft,border:!1},null,8,["title","onClickLeft"]),o("div",x,[(a(!0),i(b,null,w(t.petList,(e,l)=>(a(),i("div",{class:"wrap flex",key:e.id,onClick:A=>t.check(e,l)},[t.current==l?(a(),i("img",M)):(a(),i("img",O)),n[1]||(n[1]=o("img",{src:"",alt:""},null,-1)),o("div",S,[o("span",null,c(e.name),1),o("span",U,c(s.$t("宠物收益： KONG/每小时",[e.earn])),1),o("span",q,c(s.$t("宠物数量"))+"："+c(e.num),1)])],8,F))),128)),o("button",{onClick:n[0]||(n[0]=(...e)=>t.onConfirm&&t.onConfirm(...e))},c(s.$t("提交选择")),1)]),t.petList.length==0?(a(),B(m,{key:0,description:s.$t("暂无数据")},null,8,["description"])):I("",!0)])}const T=y(V,[["render",z],["__scopeId","data-v-7412e5f5"]]);export{T as default};
