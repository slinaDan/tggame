import{N as no}from"./NavBar-OK_U4UO8.js";import{M as so}from"./MyTabbar-COTpJEjV.js";import{p as b,c as W,m as ao,a as io,t as q,d as O,u as lo,b as Y,w as ro,e as co,f as p,g as A,n as M,h as mo,_ as uo,P as V,r as f,i as fo,j as go,k as po,o as vo,l as U,q as l,s as r,v as z,x as k,S as K,y as n,z as a,A as E,B as R,C as ho,D as wo}from"./index-CThFJ6vP.js";import{g as yo,a as ko,h as Co,b as So,p as _o}from"./api-BVq_wGQT.js";import{_ as bo}from"./one-CXrO1K9a.js";import"./use-placeholder-qX5_W8ZW.js";function Uo(e,t){const{days:h}=t;let{hours:o,minutes:m,seconds:d,milliseconds:u}=t;if(e.includes("DD")?e=e.replace("DD",b(h)):o+=h*24,e.includes("HH")?e=e.replace("HH",b(o)):m+=o*60,e.includes("mm")?e=e.replace("mm",b(m)):d+=m*60,e.includes("ss")?e=e.replace("ss",b(d)):u+=d*1e3,e.includes("S")){const c=b(u,3);e.includes("SSS")?e=e.replace("SSS",c):e.includes("SS")?e=e.replace("SS",c.slice(0,2)):e=e.replace("S",c.charAt(0))}return e}const[To,Po]=W("count-down"),Lo={time:ao(0),format:io("HH:mm:ss"),autoStart:q,millisecond:Boolean};var No=O({name:To,props:Lo,emits:["change","finish"],setup(e,{emit:t,slots:h}){const{start:o,pause:m,reset:d,current:u}=lo({time:+e.time,millisecond:e.millisecond,onChange:C=>t("change",C),onFinish:()=>t("finish")}),c=Y(()=>Uo(e.format,u.value)),w=()=>{d(+e.time),e.autoStart&&o()};return ro(()=>e.time,w,{immediate:!0}),co({start:o,pause:m,reset:w}),()=>p("div",{role:"timer",class:Po()},[h.default?h.default(u.value):c.value])}});const F=A(No),[Ro,B]=W("progress"),Bo={color:String,inactive:Boolean,pivotText:String,textColor:String,showPivot:q,pivotColor:String,trackColor:String,strokeWidth:M,percentage:{type:M,default:0,validator:e=>+e>=0&&+e<=100}};var Do=O({name:Ro,props:Bo,setup(e){const t=Y(()=>e.inactive?void 0:e.color),h=()=>{const{textColor:o,pivotText:m,pivotColor:d,percentage:u}=e,c=m??`${u}%`;if(e.showPivot&&c){const w={color:o,left:`${+u}%`,transform:`translate(-${+u}%,-50%)`,background:d||t.value};return p("span",{style:w,class:B("pivot",{inactive:e.inactive})},[c])}};return()=>{const{trackColor:o,percentage:m,strokeWidth:d}=e,u={background:o,height:mo(d)},c={width:`${m}%`,background:t.value};return p("div",{class:B(),style:u},[p("span",{class:B("portion",{inactive:e.inactive}),style:c},null),h()])}}});const G=A(Do),jo=""+new URL("icon11-BP-IXX_4.png",import.meta.url).href,Ho=""+new URL("icon1-CabFUzrM.png",import.meta.url).href,Io=""+new URL("icon33-B49QxJFE.png",import.meta.url).href,xo=""+new URL("icon3-E4ShYdK9.png",import.meta.url).href,Mo=""+new URL("icon5-ByR6CkOw.png",import.meta.url).href,Vo=""+new URL("icon7-BRWn4_Px.png",import.meta.url).href,zo=""+new URL("icon22-Bs8myrgK.png",import.meta.url).href,Ko=""+new URL("icon2-Vz8uxzxC.png",import.meta.url).href,Eo=""+new URL("icon44-D8HKDqdz.png",import.meta.url).href,Fo=""+new URL("icon4-I2gNfyMN.png",import.meta.url).href,Go=""+new URL("icon66-CSzElCyg.png",import.meta.url).href,Wo=""+new URL("icon6-Chp2E9-W.png",import.meta.url).href,qo=""+new URL("icon88-BGqJwtDC.png",import.meta.url).href,Oo=""+new URL("icon8-B35KqxTU.png",import.meta.url).href,Yo=""+new URL("egg-CvBl--JO.png",import.meta.url).href,Ao=""+new URL("../imgs/hand.png",import.meta.url).href,Jo=""+new URL("super-D-gdSZbi.png",import.meta.url).href,Xo=""+new URL("times-CYYbz3ww.png",import.meta.url).href,Zo={components:{NavbarVue:no,MyTabbarVue:so,[V.name]:V,[G.name]:G,[F.name]:F},setup(){let e=f(!1),t=f(!1),h=f(!1),o=f(!1),m=f(!1),d=f(!1);const u=fo(),c=f(!1),w=f(0),C=f(localStorage.token);let v=["app:superhatch:amount","app:hatchnum:amount","app:hatchnum:num","app:ton:address"];const s=f({hatchTodayNum:0,hatchPerpetualNum:0,earning:0}),S=f({}),D=f(0),j=f(0),T=f(""),[H]=go(),{locale:P}=po();async function L(){try{const i=await ko(),g=await Co();if(console.log(i),i.code==200&&(s.value=i.data),g.code==200){D.value=g.data.hatching?g.data.hatching.remainingSecond:0,j.value=g.data.hatching?g.data.hatching.totalSecond:1,c.value=g.data.hatching!=null;let _=g.data.showTipList||[];_.length&&_.forEach((y,x)=>{y.status==1&&y.showTip==0&&(console.log(T.value),T.value=y.pet.image,x==0?N():setTimeout(()=>{N()},1600*x))})}}catch(i){console.error("失败:",i)}}vo(()=>{C.value&&I()});function I(){console.log(222222222),L(),J()}function N(){d.value=!1,o.value=!0,setTimeout(()=>{o.value=!1},900),setTimeout(()=>{m.value=!0,setTimeout(()=>{d.value=!0,setTimeout(()=>{m.value=!1},700)},100)},700)}async function J(){const i=await yo(v);i.code==200&&(S.value=i.data)}function X(){Number(s.value.hatchTodayNum)+Number(s.value.hatchPerpetualNum)>0?e.value=!0:R(P.value=="en"?"Currently, there are no incubation attempts available":"当前暂无孵化次数")}function Z(i){u.push(i)}async function Q(){e.value=!1;const i=await So();i.code==200&&(L(),s.value.superHatch==1?(T.value=i.data.pet?i.data.pet.image:"",N()):c.value=!0)}function $(){s.value.disabledSuperHatch==0?t.value=!0:R(P.value=="en"?"You have made a purchase, there may be a delay, please be patient and wait":"您已购买，可能有延迟，请耐心等待")}async function oo(i){t.value=!1,h.value=!1;let g=i==1?S.value[v[1]]*1e9:S.value[v[0]]*1e9;console.log(S.value[v[3]],g.toString());const _={validUntil:Math.floor(Date.now()/1e3)+60,messages:[{address:S.value[v[3]],amount:g.toString()}]};console.log(_,H);try{const y=await H.sendTransaction(_);to(i),console.log(111111,y)}catch(y){console.log(y,typeof y)}}async function to(i){const g=await _o({type:i});g.code==200&&(ho(g.msg),L())}function eo(){R(P.value=="en"?"Please connect the wallet first, authorize and patiently wait for the system to connect":"请先连接钱包,授权后耐心等待系统连接")}return{showCenter:e,showSuper:t,showTimes:h,showGif:o,jumpto:Z,inProgress:c,active:w,locale:P,onConfirm:Q,userInfo:s,config:S,configKey:v,remainingSecond:D,toHatch:X,toBuy:oo,totalSecond:j,showPet:m,showScale:d,petUrl:T,loadData:I,buySuper:$,notLogin:eo,token:C}}},Qo={class:"page"},$o={class:"iconWrap"},ot={class:"flex-bw"},tt={class:"flex1"},et={class:"flex1"},nt={class:"flex-bw btns"},st={class:"flex"},at={class:"fs-16"},it={class:"flex"},lt={class:"fs-16"},rt={class:"wrap flex1"},ct={class:"income flex"},mt={class:"yellow"},ut={key:0,class:"flex buttons"},dt={key:1,class:"flex progress"},ft={class:"van_progress"},gt={class:"countdown flex"},pt={class:"modal flex1"},vt={class:"flex"},ht={class:"modal modal1 flex1"},wt={class:"flex1"},yt={class:"tip"},kt={class:"flex"},Ct={class:"modal modal1 flex1"},St={class:"flex1"},_t={class:"tip"},bt={class:"flex"},Ut={key:0,class:"gif",src:bo,alt:""},Tt={class:"petModal"},Pt=["src"];function Lt(e,t,h,o,m,d){const u=U("NavbarVue"),c=U("MyTabbarVue"),w=U("van-progress"),C=U("van-count-down"),v=U("van-popup");return l(),r("div",Qo,[(l(),z(K,{onInitData:o.loadData},{default:k(()=>[p(u)]),_:1},8,["onInitData"])),(l(),z(K,null,{default:k(()=>[p(c,{active:o.active},null,8,["active"])]),_:1})),n("div",$o,[n("div",ot,[n("div",tt,[o.locale=="en"?(l(),r("img",{key:0,class:"icons",onClick:t[0]||(t[0]=s=>o.jumpto("/synthesis")),src:jo,alt:""})):(l(),r("img",{key:1,class:"icons",onClick:t[1]||(t[1]=s=>o.jumpto("/synthesis")),src:Ho,alt:""})),o.locale=="en"?(l(),r("img",{key:2,class:"icons",onClick:t[2]||(t[2]=s=>o.jumpto("/myPet")),src:Io,alt:""})):(l(),r("img",{key:3,class:"icons",onClick:t[3]||(t[3]=s=>o.jumpto("/myPet")),src:xo,alt:""})),n("img",{class:"icons",onClick:t[4]||(t[4]=s=>o.jumpto("/kong")),src:Mo,alt:""}),n("img",{class:"icons",onClick:t[5]||(t[5]=s=>o.jumpto("/ranking")),src:Vo,alt:""})]),n("div",et,[o.locale=="en"?(l(),r("img",{key:0,class:"icons",onClick:t[6]||(t[6]=s=>o.jumpto("/getHelp")),src:zo,alt:""})):(l(),r("img",{key:1,class:"icons",onClick:t[7]||(t[7]=s=>o.jumpto("/getHelp")),src:Ko,alt:""})),o.locale=="en"?(l(),r("img",{key:2,class:"icons",onClick:t[8]||(t[8]=s=>o.jumpto("/invite")),src:Eo,alt:""})):(l(),r("img",{key:3,class:"icons",onClick:t[9]||(t[9]=s=>o.jumpto("/invite")),src:Fo,alt:""})),o.locale=="en"?(l(),r("img",{key:4,class:"icons",onClick:t[10]||(t[10]=s=>o.jumpto("/airdrop")),src:Go,alt:""})):(l(),r("img",{key:5,class:"icons",onClick:t[11]||(t[11]=s=>o.jumpto("/airdrop")),src:Wo,alt:""}))])]),n("div",nt,[n("button",st,[n("span",null,a(e.$t("今日孵化"))+"：",1),n("span",at,a(o.userInfo.hatchTodayNum)+a(e.$t("次")),1)]),n("button",it,[n("span",null,a(e.$t("永久孵化"))+"：",1),n("span",lt,a(o.userInfo.hatchPerpetualNum)+a(e.$t("次")),1)])]),o.locale=="en"?(l(),r("img",{key:0,onClick:t[12]||(t[12]=(...s)=>o.buySuper&&o.buySuper(...s)),class:"super",src:qo,alt:""})):(l(),r("img",{key:1,onClick:t[13]||(t[13]=(...s)=>o.buySuper&&o.buySuper(...s)),class:"super",src:Oo,alt:""}))]),n("div",rt,[t[29]||(t[29]=n("img",{class:"egg",src:Yo,alt:""},null,-1)),n("div",ct,[n("span",null,a(e.$t("我的收益"))+"：",1),n("span",mt,a(o.userInfo.earning)+"/h",1)]),o.inProgress?(l(),r("div",dt,[n("span",null,a(e.$t("孵化进度")),1),n("div",ft,[p(w,{percentage:(1-o.remainingSecond/o.totalSecond)*100,color:"#F5BB30","show-pivot":!1,"track-color":"#413E5A"},null,8,["percentage"]),n("div",gt,[p(C,{time:o.remainingSecond*1e3,format:"mm"+e.$t("分")+"ss"+e.$t("秒")},null,8,["time","format"])])]),n("img",{onClick:t[16]||(t[16]=s=>o.jumpto("/getHelp")),src:Ao,alt:""})])):(l(),r("div",ut,[n("button",{onClick:t[14]||(t[14]=(...s)=>o.toHatch&&o.toHatch(...s))},a(e.$t("孵化")),1),n("button",{onClick:t[15]||(t[15]=s=>o.showTimes=!0)},a(e.$t("暴击孵化次数")),1)]))]),o.token?E("",!0):(l(),r("div",{key:0,class:"noLoginMask",onClick:t[17]||(t[17]=(...s)=>o.notLogin&&o.notLogin(...s))})),p(v,{show:o.showCenter,"onUpdate:show":t[20]||(t[20]=s=>o.showCenter=s),round:""},{default:k(()=>[n("div",pt,[n("div",null,a(e.$t("是否确认进行孵化操作"))+"？",1),n("div",vt,[n("button",{onClick:t[18]||(t[18]=s=>o.showCenter=!1)},a(e.$t("取消")),1),n("button",{onClick:t[19]||(t[19]=(...s)=>o.onConfirm&&o.onConfirm(...s))},a(e.$t("确定")),1)])])]),_:1},8,["show"]),p(v,{show:o.showSuper,"onUpdate:show":t[23]||(t[23]=s=>o.showSuper=s),round:""},{default:k(()=>[n("div",ht,[n("div",wt,[t[30]||(t[30]=n("img",{src:Jo,alt:""},null,-1)),n("div",null,a(e.$t("您将使用TON购买（超级孵化器），购买后获得永久免除所有宠物蛋孵化时间权益",[o.config[o.configKey[0]]])),1),n("div",yt,a(e.$t("温馨提示"))+":"+a(e.$t("到账可能会有所延迟")),1)]),n("div",kt,[n("button",{onClick:t[21]||(t[21]=s=>o.showSuper=!1)},a(e.$t("取消")),1),n("button",{onClick:t[22]||(t[22]=s=>o.toBuy(2))},a(e.$t("购买")),1)])])]),_:1},8,["show"]),p(v,{show:o.showTimes,"onUpdate:show":t[26]||(t[26]=s=>o.showTimes=s),round:""},{default:k(()=>[n("div",Ct,[n("div",St,[t[31]||(t[31]=n("img",{src:Xo,alt:""},null,-1)),n("div",null,a(e.$t("您将使用TON购买（暴击孵化），购买后获得永久孵化次数次",[o.config[o.configKey[1]],o.config[o.configKey[2]]])),1),n("div",_t,a(e.$t("温馨提示"))+":"+a(e.$t("到账可能会有所延迟")),1)]),n("div",bt,[n("button",{onClick:t[24]||(t[24]=s=>o.showTimes=!1)},a(e.$t("取消")),1),n("button",{onClick:t[25]||(t[25]=s=>o.toBuy(1))},a(e.$t("购买")),1)])])]),_:1},8,["show"]),p(v,{show:o.showGif,"onUpdate:show":t[27]||(t[27]=s=>o.showGif=s),round:""},{default:k(()=>[o.showGif?(l(),r("img",Ut)):E("",!0)]),_:1},8,["show"]),p(v,{show:o.showPet,"onUpdate:show":t[28]||(t[28]=s=>o.showPet=s),round:""},{default:k(()=>[n("div",Tt,[n("img",{class:wo(["gif petImg",{petImg1:o.showScale}]),src:o.petUrl,alt:""},null,10,Pt)])]),_:1},8,["show"])])}const It=uo(Zo,[["render",Lt],["__scopeId","data-v-803139ed"]]);export{It as default};
