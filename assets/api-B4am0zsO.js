import{aE as t}from"./index-CQ3tacxD.js";const r="http://172.16.11.97:8081";function u(e){return t({url:r+"/app/member/login",method:"POST",data:e})}function a(e){return t({url:r+"/app/member/userDetail",method:"GET",data:e})}function m(e){return t({url:r+`/app/config/getConfigKeys?configKeys=${e}`,method:"GET"})}function p(e){return t({url:r+`/app/config/configKey/${e}`,method:"GET"})}function i(e){return t({url:r+"/app/memberPet/hatch",method:"POST",data:e})}function s(e){return t({url:r+"/app/memberPet/hatching",method:"GET",data:e})}function c(e){return t({url:r+"/app/memberPet/myPetList",method:"GET",data:e})}function h(e,n){return t({url:r+`/app/petRecord/list?id=${e}&pageNum=${n}`,method:"GET"})}function l(e){return t({url:r+"/app/memberPet/synthesis",method:"POST",data:e})}function d(e){return t({url:r+"/app/memberPet/send",method:"POST",data:e})}function f(e){return t({url:r+`/app/memberPet/help?helpCode=${e}`,method:"GET"})}function g(e){return t({url:r+"/app/member/bearComplete",method:"POST",data:e})}function T(e){return t({url:r+`/app/member/list?pageNum=${e}`,method:"GET"})}function b(e){return t({url:r+"/app/member/kongRank",method:"GET",data:e})}function P(e){return t({url:r+"/app/kongRecord/receive",method:"POST",data:e})}function E(e){return t({url:r+`/app/kongRecord/list?pageNum=${e}`,method:"GET",data:e})}function G(e){return t({url:r+`/app/dict/${e}`,method:"GET"})}function y(e){return t({url:r+"/app/order/pay",method:"POST",data:e})}function C(e){return t({url:r+"/app/member/getCodeInfo",method:"GET"})}export{h as P,a,i as b,f as c,p as d,G as e,g as f,m as g,s as h,c as i,d as j,E as k,b as l,T as m,u as n,C as o,y as p,P as r,l as s};
