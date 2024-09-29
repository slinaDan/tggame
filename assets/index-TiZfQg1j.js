import{c as F,t as k,n as L,m as D,d as K,r as U,Y as Z,Z as re,ag as ve,b as d,e as q,w as $,ah as fe,o as G,ai as de,aj as he,ak as ge,U as me,$ as we,f as A,al as j,V as J,a9 as ye,aa as be,am as z,a1 as xe,a2 as R,g as Q,an as Se}from"./index-B691GwuT.js";const[ee,I]=F("swipe"),Te={loop:k,width:L,height:L,vertical:Boolean,autoplay:D(0),duration:D(500),touchable:k,lazyRender:Boolean,initialSwipe:D(0),indicatorColor:String,showIndicators:k,stopPropagation:k},te=Symbol(ee);var pe=K({name:ee,props:Te,emits:["change","dragStart","dragEnd"],setup(a,{emit:b,slots:g}){const u=U(),h=U(),t=Z({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let x=!1;const r=re(),{children:m,linkChildren:s}=ve(te),i=d(()=>m.length),o=d(()=>t[a.vertical?"height":"width"]),v=d(()=>a.vertical?r.deltaY.value:r.deltaX.value),y=d(()=>t.rect?(a.vertical?t.rect.height:t.rect.width)-o.value*i.value:0),M=d(()=>o.value?Math.ceil(Math.abs(y.value)/o.value):i.value),O=d(()=>i.value*o.value),S=d(()=>(t.active+i.value)%i.value),Y=d(()=>{const e=a.vertical?"vertical":"horizontal";return r.direction.value===e}),ae=d(()=>{const e={transitionDuration:`${t.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${+t.offset.toFixed(2)}px)`};if(o.value){const l=a.vertical?"height":"width",n=a.vertical?"width":"height";e[l]=`${O.value}px`,e[n]=a[n]?`${a[n]}px`:""}return e}),ie=e=>{const{active:l}=t;return e?a.loop?R(l+e,-1,i.value):R(l+e,0,M.value):l},B=(e,l=0)=>{let n=e*o.value;a.loop||(n=Math.min(n,-y.value));let f=l-n;return a.loop||(f=R(f,y.value,0)),f},w=({pace:e=0,offset:l=0,emitChange:n})=>{if(i.value<=1)return;const{active:f}=t,c=ie(e),C=B(c,l);if(a.loop){if(m[0]&&C!==y.value){const _=C<y.value;m[0].setOffset(_?O.value:0)}if(m[i.value-1]&&C!==0){const _=C>0;m[i.value-1].setOffset(_?-O.value:0)}}t.active=c,t.offset=C,n&&c!==f&&b("change",S.value)},E=()=>{t.swiping=!0,t.active<=-1?w({pace:i.value}):t.active>=i.value&&w({pace:-i.value})},ne=()=>{E(),r.reset(),z(()=>{t.swiping=!1,w({pace:-1,emitChange:!0})})},X=()=>{E(),r.reset(),z(()=>{t.swiping=!1,w({pace:1,emitChange:!0})})};let H;const p=()=>clearTimeout(H),P=()=>{p(),+a.autoplay>0&&i.value>1&&(H=setTimeout(()=>{X(),P()},+a.autoplay))},T=(e=+a.initialSwipe)=>{if(!u.value)return;const l=()=>{var n,f;if(!j(u)){const c={width:u.value.offsetWidth,height:u.value.offsetHeight};t.rect=c,t.width=+((n=a.width)!=null?n:c.width),t.height=+((f=a.height)!=null?f:c.height)}i.value&&(e=Math.min(i.value-1,e),e===-1&&(e=i.value-1)),t.active=e,t.swiping=!0,t.offset=B(e),m.forEach(c=>{c.setOffset(0)}),P()};j(u)?J().then(l):l()},N=()=>T(t.active);let V;const le=e=>{!a.touchable||e.touches.length>1||(r.start(e),x=!1,V=Date.now(),p(),E())},oe=e=>{a.touchable&&t.swiping&&(r.move(e),Y.value&&(!a.loop&&(t.active===0&&v.value>0||t.active===i.value-1&&v.value<0)||(xe(e,a.stopPropagation),w({offset:v.value}),x||(b("dragStart",{index:S.value}),x=!0))))},W=()=>{if(!a.touchable||!t.swiping)return;const e=Date.now()-V,l=v.value/e;if((Math.abs(l)>.25||Math.abs(v.value)>o.value/2)&&Y.value){const f=a.vertical?r.offsetY.value:r.offsetX.value;let c=0;a.loop?c=f>0?v.value>0?-1:1:0:c=-Math[v.value>0?"ceil":"floor"](v.value/o.value),w({pace:c,emitChange:!0})}else v.value&&w({pace:0});x=!1,t.swiping=!1,b("dragEnd",{index:S.value}),P()},se=(e,l={})=>{E(),r.reset(),z(()=>{let n;a.loop&&e===i.value?n=t.active===0?0:e:n=e%i.value,l.immediate?z(()=>{t.swiping=!1}):t.swiping=!1,w({pace:n-t.active,emitChange:!0})})},ce=(e,l)=>{const n=l===S.value,f=n?{backgroundColor:a.indicatorColor}:void 0;return A("i",{style:f,class:I("indicator",{active:n})},null)},ue=()=>{if(g.indicator)return g.indicator({active:S.value,total:i.value});if(a.showIndicators&&i.value>1)return A("div",{class:I("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(ce)])};return q({prev:ne,next:X,state:t,resize:N,swipeTo:se}),s({size:o,props:a,count:i,activeIndicator:S}),$(()=>a.initialSwipe,e=>T(+e)),$(i,()=>T(t.active)),$(()=>a.autoplay,P),$([ye,be,()=>a.width,()=>a.height],N),$(fe(),e=>{e==="visible"?P():p()}),G(T),de(()=>T(t.active)),he(()=>T(t.active)),ge(p),me(p),we("touchmove",oe,{target:h}),()=>{var e;return A("div",{ref:u,class:I()},[A("div",{ref:h,style:ae.value,class:I("track",{vertical:a.vertical}),onTouchstartPassive:le,onTouchend:W,onTouchcancel:W},[(e=g.default)==null?void 0:e.call(g)]),ue()])}}});const Ee=Q(pe),[Pe,Ce]=F("swipe-item");var $e=K({name:Pe,setup(a,{slots:b}){let g;const u=Z({offset:0,inited:!1,mounted:!1}),{parent:h,index:t}=Se(te);if(!h)return;const x=d(()=>{const s={},{vertical:i}=h.props;return h.size.value&&(s[i?"height":"width"]=`${h.size.value}px`),u.offset&&(s.transform=`translate${i?"Y":"X"}(${u.offset}px)`),s}),r=d(()=>{const{loop:s,lazyRender:i}=h.props;if(!i||g)return!0;if(!u.mounted)return!1;const o=h.activeIndicator.value,v=h.count.value-1,y=o===0&&s?v:o-1,M=o===v&&s?0:o+1;return g=t.value===o||t.value===y||t.value===M,g}),m=s=>{u.offset=s};return G(()=>{J(()=>{u.mounted=!0})}),q({setOffset:m}),()=>{var s;return A("div",{class:Ce(),style:x.value},[r.value?(s=b.default)==null?void 0:s.call(b):null])}}});const ke=Q($e);export{Ee as S,ke as a};
