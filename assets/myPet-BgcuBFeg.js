import{N}from"./NavBar-DmvligJC.js";import{M as P}from"./MyTabbar-CBHjeX6f.js";import{g as S,_ as U,P as g,i as $,r as i,J as j,k as B,o as L,l as v,q as r,s as h,v as w,x as y,S as C,y as e,z as a,H as E,I as q,f as I,C as F,A as M,B as x,E as T,F as V}from"./index-S2zTlICI.js";import{i as R,j as z}from"./api-Bx-wWTMg.js";import{s as A,a as G}from"./function-call-DXAIu9Pb.js";import{E as D}from"./index-Dgqdf6gF.js";import"./use-placeholder-C7KdJeTT.js";import"./index-CBF9gkmn.js";S(A);const H={components:{NavbarVue:N,MyTabbarVue:P,[D.name]:D,[g.name]:g},setup(){const s=$(),n=i(2);let _=i(!1),t=i([]),b=i(""),p=i(""),d=i("");const m=j();console.log(m.query.petItem),m.query.petItem;const{locale:c}=B();async function f(){const l=await R();l.code==200&&(t.value=l.data)}async function o(){if(!p.value)return M(c.value=="en"?"Please enter the user UID":"请输入用户UID");if(!d.value)return M(c.value=="en"?"Please enter the amount of gift to be transferred":"请输入转赠数量");const l=await z({petId:b.value,num:d.value,toMemberId:p.value});l.code==200&&(x(l.msg),_.value=!1,f())}function k(l){G([l])}L(()=>{f()});function u(l){s.push(l)}return{jumpto:u,active:n,showTransfer:_,petList:t,toSubmit:o,petId:b,toMemberId:p,num:d,previewImg:k}}},J={class:"page flex1"},K={class:"flex-bw title"},O=["src","onClick"],Q={class:"flex1"},W={class:"fs-13"},X={class:"fs-13"},Y={class:"btns flex"},Z=["onClick"],ee=["onClick"],te={class:"modal flex1"},oe={class:"title"},se={class:"flex-bw"},ne=["placeholder"],ae={class:"flex-bw"},le=["placeholder"],ie={class:"flex btns"};function re(s,n,_,t,b,p){const d=v("NavbarVue"),m=v("MyTabbarVue"),c=v("van-popup"),f=v("van-empty");return r(),h("div",J,[(r(),w(C,null,{default:y(()=>[I(d)]),_:1})),(r(),w(C,null,{default:y(()=>[I(m,{active:t.active},null,8,["active"])]),_:1})),e("div",K,[e("span",null,a(s.$t("宠物信息")),1),e("span",{class:"yellow",onClick:n[0]||(n[0]=o=>t.jumpto("/petDetail"))},a(s.$t("宠物明细")),1)]),(r(!0),h(E,null,q(t.petList,(o,k)=>(r(),h("div",{class:"wrap flex",key:o.id},[e("img",{src:o.image,alt:"",onClick:u=>t.previewImg(o.image)},null,8,O),e("div",Q,[e("span",null,a(o.name),1),e("span",W,a(s.$t("宠物收益： KONG/每小时",[o.earn])),1),e("span",X,a(s.$t("宠物数量"))+"："+a(o.num),1),e("div",Y,[e("button",{onClick:u=>t.jumpto("/petDetail?petId="+o.id)},a(s.$t("宠物明细")),9,Z),e("button",{onClick:n[1]||(n[1]=u=>t.jumpto("/synthesis"))},a(s.$t("合成")),1),e("button",{onClick:u=>(t.showTransfer=!0,t.petId=o.id)},a(s.$t("转赠")),9,ee)])])]))),128)),I(c,{show:t.showTransfer,"onUpdate:show":n[6]||(n[6]=o=>t.showTransfer=o),round:""},{default:y(()=>[e("div",te,[e("div",oe,a(s.$t("宠物转赠")),1),e("div",se,[e("span",null,a(s.$t("用户"))+"UID：",1),T(e("input",{"onUpdate:modelValue":n[2]||(n[2]=o=>t.toMemberId=o),type:"text",placeholder:s.$t("请输入用户UID")},null,8,ne),[[V,t.toMemberId]])]),e("div",ae,[e("span",null,a(s.$t("转赠数量"))+"：",1),T(e("input",{"onUpdate:modelValue":n[3]||(n[3]=o=>t.num=o),type:"text",placeholder:s.$t("请输入转赠数量")},null,8,le),[[V,t.num]])]),e("div",ie,[e("button",{onClick:n[4]||(n[4]=o=>t.showTransfer=!1)},a(s.$t("取消")),1),e("button",{onClick:n[5]||(n[5]=(...o)=>t.toSubmit&&t.toSubmit(...o))},a(s.$t("提交")),1)])])]),_:1},8,["show"]),t.petList.length==0?(r(),w(f,{key:0,description:s.$t("暂无数据")},null,8,["description"])):F("",!0)])}const be=U(H,[["render",re],["__scopeId","data-v-d49464d1"]]);export{be as default};
