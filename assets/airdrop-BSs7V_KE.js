import{N as R}from"./NavBar-C3QYu_7I.js";import{_ as W,K as x,i as C,r as w,o as L,l as f,q as i,s as a,v as K,x as k,S as N,y as s,f as y,z as o,H as S,I as T}from"./index-jGd7M4XS.js";import{a as V,g as B,e as G,f as O}from"./api-BkGIExB3.js";import{S as I,a as U}from"./index-G1exyTPe.js";const j=""+new URL("../imgs/task1.png",import.meta.url).href,r=""+new URL("../imgs/coin.png",import.meta.url).href,c=""+new URL("../imgs/done.png",import.meta.url).href,D=""+new URL("../imgs/task2.png",import.meta.url).href,z=""+new URL("../imgs/task3.png",import.meta.url).href,E=""+new URL("../imgs/task4.png",import.meta.url).href,M=""+new URL("../imgs/task5.png",import.meta.url).href,q=""+new URL("../imgs/task6.png",import.meta.url).href,A=""+new URL("../imgs/task7.png",import.meta.url).href,F={components:{NavbarVue:R,[I.name]:I,[U.name]:U,[x.name]:x},setup(){const l=C(),n=w({}),m=w({}),t=["app:new:user","app:tg:channel","app:band:ton","app:follow:tw","app:tg:member","app:tg:register","app:invite:earn","app:tgchannel:link","app:tw:url"],_=w([]);async function b(){const e=await V();e.code==200&&(n.value=e.data)}async function g(){const e=await B(t);console.log(e),e.code==200&&(m.value=e.data)}async function p(){const e=await G("app_banner");e.code==200&&(_.value=e.data)}L(()=>{b(),g(),p()});function u(e,d){console.log(e),window.open(e),d==2&&O({type:d}).then(h=>{h.code==200})}function v(e){l.push(e)}return{banner:_,jumpto:v,userInfo:n,config:m,configKey:t,toWeb:u}}},H={class:"page"},J={class:"swiper"},P=["src"],Q={class:"flex-bw titleWrap"},X={class:"taskWrap flex-bw"},Y={class:"flex left"},Z={class:"flex1"},$={class:"flex"},ss={key:0,src:c,alt:""},ns={key:1},ts={class:"taskWrap flex-bw"},os={class:"flex left"},es={class:"flex1"},ls={class:"flex"},is={key:0,src:c,alt:""},as={class:"taskWrap flex-bw"},rs={class:"flex left"},cs={class:"flex1"},ds={class:"flex"},fs={key:0,src:c,alt:""},ms={key:1},_s={class:"taskWrap flex-bw"},gs={class:"flex left"},ps={class:"flex1"},us={class:"flex"},vs={key:0,src:c,alt:""},ws={class:"taskWrap flex-bw"},ks={class:"flex left"},ys={class:"flex1"},bs={class:"flex"},hs={key:0,src:c,alt:""},xs={key:1},Ks={class:"taskWrap flex-bw"},Is={class:"flex left"},Us={class:"flex1"},Rs={class:"flex"},Ws={class:"flex receive"},Cs={class:"yellow"},Ls={class:"taskWrap flex-bw"},Ns={class:"flex left"},Ss={class:"flex1"},Ts={class:"flex"},Vs={class:"flex receive"},Bs={class:"yellow"};function Gs(l,n,m,t,_,b){const g=f("NavbarVue"),p=f("van-swipe-item"),u=f("van-swipe"),v=f("van-icon");return i(),a("div",H,[(i(),K(N,null,{default:k(()=>[y(g)]),_:1})),s("div",J,[y(u,{autoplay:3e3,"lazy-render":"","indicator-color":"#fff"},{default:k(()=>[(i(!0),a(S,null,T(t.banner,(e,d)=>(i(),K(p,{key:d,onClick:h=>t.jumpto("/rule?detail="+JSON.stringify(e))},{default:k(()=>[s("img",{src:e.dictValue},null,8,P)]),_:2},1032,["onClick"]))),128))]),_:1})]),s("div",Q,[s("span",null,o(l.$t("KONG任务")),1),s("div",{class:"flex",onClick:n[0]||(n[0]=e=>t.jumpto("/kong"))},[s("span",null,o(l.$t("KONG明细")),1),y(v,{name:"arrow"})])]),s("div",X,[s("div",Y,[n[4]||(n[4]=s("img",{src:j,alt:""},null,-1)),s("div",Z,[s("span",null,o(l.$t("新用户赠送")),1),s("div",$,[n[3]||(n[3]=s("img",{src:r,alt:""},null,-1)),s("span",null,"+"+o(t.config[t.configKey[0]]),1)])])]),t.userInfo.newUser==1?(i(),a("img",ss)):(i(),a("button",ns,o(l.$t("去完成")),1))]),s("div",ts,[s("div",os,[n[6]||(n[6]=s("img",{src:D,alt:""},null,-1)),s("div",es,[s("span",null,o(l.$t("加入TG频道")),1),s("div",ls,[n[5]||(n[5]=s("img",{src:r,alt:""},null,-1)),s("span",null,"+"+o(t.config[t.configKey[1]]),1)])])]),t.userInfo.enterTg==1?(i(),a("img",is)):(i(),a("button",{key:1,onClick:n[1]||(n[1]=e=>t.toWeb(t.config[t.configKey[7]]))},o(l.$t("去加入")),1))]),s("div",as,[s("div",rs,[n[8]||(n[8]=s("img",{src:z,alt:""},null,-1)),s("div",cs,[s("span",null,o(l.$t("绑定TON钱包")),1),s("div",ds,[n[7]||(n[7]=s("img",{src:r,alt:""},null,-1)),s("span",null,"+"+o(t.config[t.configKey[2]]),1)])])]),t.userInfo.bindTon==1?(i(),a("img",fs)):(i(),a("button",ms,o(l.$t("去完成")),1))]),s("div",_s,[s("div",gs,[n[10]||(n[10]=s("img",{src:E,alt:""},null,-1)),s("div",ps,[s("span",null,o(l.$t("关注游戏推特")),1),s("div",us,[n[9]||(n[9]=s("img",{src:r,alt:""},null,-1)),s("span",null,"+"+o(t.config[t.configKey[3]]),1)])])]),t.userInfo.followTwitter==1?(i(),a("img",vs)):(i(),a("button",{key:1,onClick:n[2]||(n[2]=e=>t.toWeb(t.config[t.configKey[8]],2))},o(l.$t("去关注")),1))]),s("div",ws,[s("div",ks,[n[12]||(n[12]=s("img",{src:M,alt:""},null,-1)),s("div",ys,[s("span",null,o(l.$t("TG会员")),1),s("div",bs,[n[11]||(n[11]=s("img",{src:r,alt:""},null,-1)),s("span",null,"+"+o(t.config[t.configKey[4]]),1)])])]),t.userInfo.tgMember?(i(),a("img",hs)):(i(),a("button",xs,o(l.$t("去完成")),1))]),s("div",Ks,[s("div",Is,[n[14]||(n[14]=s("img",{src:q,alt:""},null,-1)),s("div",Us,[s("span",null,o(l.$t("TG注册时间每增加一个月")),1),s("div",Rs,[n[13]||(n[13]=s("img",{src:r,alt:""},null,-1)),s("span",null,"+"+o(t.config[t.configKey[5]]),1)])])]),s("div",Ws,[s("span",null,o(l.$t("累计获得"))+"：",1),s("span",Cs,o(t.userInfo.tgRegisterAmount),1)])]),s("div",Ls,[s("div",Ns,[n[16]||(n[16]=s("img",{src:A,alt:""},null,-1)),s("div",Ss,[s("span",null,o(l.$t("每邀请一个好友")),1),s("div",Ts,[n[15]||(n[15]=s("img",{src:r,alt:""},null,-1)),s("span",null,"+"+o(t.config[t.configKey[6]]),1)])])]),s("div",Vs,[s("span",null,o(l.$t("累计获得"))+"：",1),s("span",Bs,o(t.userInfo.inviteEarn),1)])])])}const Es=W(F,[["render",Gs],["__scopeId","data-v-0403db55"]]);export{Es as default};
