import{N as B,c as G}from"./NavBar-BfTgkDUD.js";import{_ as K,i as O,r as d,o as R,l as h,q as c,s as i,v as k,x as T,S as I,y as a,z as s,H as L,I as x,C as g,B as D,f as $}from"./index-CQ3tacxD.js";import{k as A,a as E,e as H,r as M}from"./api-B4am0zsO.js";import{E as N}from"./index-Bsyi8aNu.js";const j=""+new URL("../imgs/kong.png",import.meta.url).href,U={components:{NavbarVue:B,[N.name]:N},setup(){const l=O(),o=d([]),v=d({}),n=d([]),u=d(1),p=d(0);async function r(){const e=await A(u.value);e.code==200&&(p.value=e.total,u.value==1&&(o.value=[]),o.value=o.value.concat(...e.rows))}async function f(){const e=await E();e.code==200&&(v.value=e.data)}async function t(){const e=await H("app_kong_type");e.code==200&&(n.value=e.data)}async function m(){const e=await M();e.code==200&&(D(e.msg),r(),f())}async function w(e){return n.value.find(y=>y.dictValue==e).dictLabel}function b(e){const _=e.target;if(_){const{scrollTop:y,scrollHeight:S,clientHeight:V}=_;y+V>=S&&(console.log("已经滚动到底部",p.value,o.value.length),p.value>o.value.length&&(u.value+=1,r()))}}R(()=>{r(),f(),t()});function C(e){l.push(e)}return{copy:G,jumpto:C,list:o,credit:v,typeInfo:n,handleScroll:b,toReceive:m,filetrType:w}}},q={class:"wrap flex1"},z={class:"amount"},F={class:"flex"},W={class:"yellow"},J={class:"detailWrap"},P={class:"title flex"},Q={class:"flex1"},X={class:"balance"},Y={class:"flex1 flex-end"},Z={key:0,class:"fs-16 yellow"},ee={key:1,class:"fs-16 blue"},te={key:2,class:"balance num"},se={key:3,class:"balance num"};function oe(l,o,v,n,u,p){const r=h("NavbarVue"),f=h("van-empty");return c(),i("div",{class:"page",ref:"scrollContainer",onScroll:o[2]||(o[2]=(...t)=>n.handleScroll&&n.handleScroll(...t))},[(c(),k(I,null,{default:T(()=>[$(r)]),_:1})),a("div",q,[o[3]||(o[3]=a("img",{src:j,alt:""},null,-1)),a("span",z,s(n.credit.noClaimAmount),1),a("button",{onClick:o[0]||(o[0]=(...t)=>n.toReceive&&n.toReceive(...t))},s(l.$t("立即领取")),1),a("div",F,[a("span",null,s(l.$t("KONG余额"))+"：",1),a("span",W,s(n.credit.kongAmount),1)]),a("div",{class:"rule flex",onClick:o[1]||(o[1]=t=>n.jumpto("/rule"))},s(l.$t("KONG规则")),1)]),a("div",J,[a("div",P,s(l.$t("KONG明细")),1),(c(!0),i(L,null,x(n.list,(t,m)=>(c(),i("div",{class:"detailRow flex-bw",key:m},[a("div",Q,[a("span",null,s(l.$t("类型"))+"："+s(n.filetrType[t.type]),1),a("span",X,s(l.$t("KONG余额"))+"："+s(t.actualAmount),1)]),a("div",Y,[t.changeType==1?(c(),i("span",Z," KONG：+"+s(t.amount),1)):(c(),i("span",ee," KONG：-"+s(t.amount),1)),t.inviteMemberId?(c(),i("span",te,s(l.$t("好友uid"))+"："+s(t.inviteMemberId),1)):g("",!0),t.petNo?(c(),i("span",se,s(l.$t("宠物编号"))+"："+s(t.petNo),1)):g("",!0)])]))),128)),n.list.length==0?(c(),k(f,{key:0,description:l.$t("暂无数据")},null,8,["description"])):g("",!0)])],544)}const ie=K(U,[["render",oe],["__scopeId","data-v-af12e8d4"]]);export{ie as default};
