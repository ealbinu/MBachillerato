import{o,c as m,w,T as $,a as c,b as r,d as p,r as k,t as S,e as b,F as y,n as A,f as C,i as x,g,h as L,j as V,k as N,p as O,l as I,m as F,v as M,q as j,G as q,s as z,u as H,x as E,y as P}from"./vendor.4d3da515.js";const G=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&e(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerpolicy&&(d.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?d.credentials="include":a.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function e(a){if(a.ep)return;a.ep=!0;const d=n(a);fetch(a.href,d)}};G();const R={key:0,class:"dialog intro"};function U(s,t,n,e,a,d){return o(),m($,{name:"zoom",onAfterLeave:e.start},{default:w(()=>[e.dialog?(o(),c("div",R,[r("button",{class:"important",onClick:t[0]||(t[0]=(...u)=>e.close&&e.close(...u))},"Comenzar")])):p("",!0)]),_:1},8,["onAfterLeave"])}var f=(s,t)=>{const n=s.__vccOpts||s;for(const[e,a]of t)n[e]=a;return n};const W={setup(s,t){const n=k(!0);return{dialog:n,close:()=>{n.value=!1},start:()=>{t.emit("start")}}}};var J=f(W,[["render",U]]);const K={key:0,class:"material-icons-two-tone"},Q={key:1,class:"material-icons-two-tone"},X={class:"container"},Y={class:"area"},Z=r("hr",null,null,-1),ee={class:"area pantallas"},te=["onClick"],ne={class:"label"},se=r("hr",null,null,-1),oe=r("div",{class:"area"},[r("h2",null,[r("span",{class:"material-icons-two-tone"},"donut_large"),r("span",{class:"label"},"\xA0Progreso")]),r("div",{class:"progreso"},[r("div",{class:"bar",style:"width:"+70+"%"})])],-1),ae=r("hr",null,null,-1),re=r("div",{class:"area"},[r("h2",null,[r("span",{class:"material-icons-two-tone"},"auto_awesome"),r("span",{class:"label"},"\xA0Puntaje")]),r("div",{class:"puntaje"},[C("10 "),r("span",{class:"label"},"/100")])],-1);function ce(s,t,n,e,a,d){return o(),m($,{name:"zoom"},{default:w(()=>[r("aside",{class:A(["ActivitySidebar",[e.wide?"":"mini"]])},[r("div",{class:"openclosebtn",onClick:t[0]||(t[0]=u=>e.wide=!e.wide)},[e.wide?(o(),c("span",K,"navigate_before")):(o(),c("span",Q,"navigate_next"))]),r("div",X,[r("div",Y,[r("h1",null,S(e.Activity.title),1)]),Z,r("div",ee,[r("ul",null,[(o(!0),c(y,null,b(e.Activity.screens,(u,v)=>(o(),c("li",{class:A(["screenItem",v==e.Status.screen?"active":""]),onClick:l=>e.goToScreen(v)},[r("span",{class:A(["material-icons-two-tone",v==e.Status.screen?"active":""])},S(u.icon),3),r("span",ne,"\xA0"+S(u.title),1)],10,te))),256))])]),se,oe,ae,re])],2)]),_:1})}const ie={setup(s,t){const n=x("activityFile"),e=x("statusFile");return{wide:k(!0),Activity:n,Status:e,goToScreen:u=>{e.value.screen=u}}}};var le=f(ie,[["render",ce]]);function de(s,t,n,e,a,d){const u=g("math-jax");return o(),c("span",{style:V(e.cssVars)},[L(u,{latex:n.data.math,block:n.data.block},null,8,["latex","block"])],4)}const ue={components:{},props:["data"],setup(s,t){return{cssVars:N(()=>({"--fontSize":s.data.size||"1rem"}))}}};var D=f(ue,[["render",de]]);const _e=s=>(O("data-v-5178be32"),s=s(),I(),s),ve=["id"],pe={key:0,class:"drops dropsLeft"},me=["data"],ye=["innerHTML"],ge={class:"drags"},fe=["data"],he=_e(()=>r("div",{class:"material-icons-two-tone"},"pan_tool",-1)),be=["innerHTML"],ke={key:1,class:"drops dropsRight"},Se=["data"],xe=["innerHTML"],we={props:{blockid:String,data:Object},setup(s){const t=s;k();var n="#block-"+t.blockid,e=null;const a=()=>{e=document.querySelectorAll(n+" .drop"),Draggable.create(n+" .drag",{type:"x,y",bounds:n,onDrag:function(l){d(l,this)},onClick:function(l){u(l,this)},onDragEnd:function(l){v(l,this)}})},d=(l,_)=>{for(var i=0;i<e.length;i++){if(_.hitTest(e[i],"40%"))return _.target.classList.add("hover"),e[i].classList.add("hover"),!1;_.target.classList.remove("hover"),e[i].classList.remove("hover")}},u=(l,_)=>{var i=document.querySelector(n+" .drags");_.target.parentElement!=i&&(i.append(_.target),TweenLite.to(_.target,.2,{x:0,y:0}))},v=(l,_)=>{for(var i=!1,h=0;h<e.length;h++)_.hitTest(e[h],"40%")&&(i=!0,e[h].append(_.target),TweenLite.to(_.target,.2,{x:0,y:0}),_.target.classList.remove("hover"),e[h].classList.remove("hover"));i||TweenLite.to(_.target,.2,{x:0,y:0})};return setTimeout(function(){a()},1e3),(l,_)=>(o(),c("div",{class:"blockDragDrop",id:"block-"+s.blockid},[s.data.dropsLeft?(o(),c("section",pe,[(o(!0),c(y,null,b(s.data.dropsLeft,(i,h)=>(o(),c("div",{class:"drop",data:i[1]},[typeof i[0]=="string"?(o(),c("div",{key:0,class:"content",innerHTML:i[0]},null,8,ye)):i[0].math?(o(),m(D,{key:1,data:i[0]},null,8,["data"])):p("",!0)],8,me))),256))])):p("",!0),r("section",ge,[(o(!0),c(y,null,b(s.data.drags,(i,h)=>(o(),c("div",{class:"drag",data:i[1]},[he,typeof i[0]=="string"?(o(),c("div",{key:0,class:"content",innerHTML:i[0]},null,8,be)):i[0].math?(o(),m(D,{key:1,data:i[0]},null,8,["data"])):p("",!0)],8,fe))),256))]),s.data.dropsRight?(o(),c("section",ke,[(o(!0),c(y,null,b(s.data.dropsRight,(i,h)=>(o(),c("div",{class:"drop",data:i[1]},[typeof i[0]=="string"?(o(),c("div",{key:0,class:"content",innerHTML:i[0]},null,8,xe)):i[0].math?(o(),m(D,{key:1,data:i[0]},null,8,["data"])):p("",!0)],8,Se))),256))])):p("",!0)],8,ve))}};var $e=f(we,[["__scopeId","data-v-5178be32"]]);const Ae={class:"blockContainer"},Le=["innerHTML"],De={key:0,class:"text-center my-1"},Ve={key:1,class:"text-center my-2"};function Ne(s,t,n,e,a,d){const u=g("BlockMath"),v=g("BlockDragDrop");return o(),c("div",{class:"block",style:V(e.cssVars)},[r("div",Ae,[(o(!0),c(y,null,b(n.block.content,(l,_)=>(o(),c(y,null,[typeof l=="string"?(o(),c("span",{key:0,innerHTML:l},null,8,Le)):l.math?(o(),m(u,{key:1,data:l},null,8,["data"])):p("",!0),l.dragdrop?(o(),m(v,{key:2,data:l,blockid:n.blockid+"-"+_},null,8,["data","blockid"])):p("",!0)],64))),256))]),n.block.buttonNextStep?(o(),c("div",De,[r("button",{onClick:t[0]||(t[0]=l=>s.$emit("stepNext"))},S(n.block.buttonNextStep),1)])):p("",!0),n.block.buttonNextScreen?(o(),c("div",Ve,[r("button",{class:"important",onClick:t[1]||(t[1]=l=>s.$emit("screenNext",1))},S(n.block.buttonNextScreen),1)])):p("",!0)],4)}const Te={components:{BlockMath:D,BlockDragDrop:$e},props:["block","blockid"],setup(s,t){return{cssVars:N(()=>({"--block-width":s.block.width||"100%"}))}}};var B=f(Te,[["render",Ne]]);const Fe={class:"stepsNavigation"},Me=["disabled"],Be=r("span",{class:"material-icons-two-tone"},"navigate_before",-1),Ce=[Be],Oe=["disabled"],Ie=r("span",{class:"material-icons-two-tone"},"navigate_next",-1),je=[Ie];function qe(s,t,n,e,a,d){return o(),c("div",Fe,[r("button",{onClick:t[0]||(t[0]=u=>e.navigate(-1)),disabled:n.modelValue==0},Ce,8,Me),(o(!0),c(y,null,b(n.steps,(u,v)=>(o(),c("div",{class:A(["step",[n.modelValue==v?"active":"non-active"]])},null,2))),256)),r("button",{onClick:t[1]||(t[1]=u=>e.navigate(1)),disabled:n.modelValue==n.steps-1},je,8,Oe)])}const ze={components:{},props:{modelValue:{type:Number,default:0,required:!0},steps:{type:Number,required:!0}},setup(s,t){const n=k(0);return{navigate:a=>{if(a==-1&&s.modelValue>0||a==1&&s.modelValue<s.steps-1){const d=s.modelValue+a;t.emit("update:modelValue",d)}},currentStep:n}}};var He=f(ze,[["render",qe]]);function Ee(s,t,n,e,a,d){const u=g("ScreenBlocks"),v=g("ActivityScreenSteps");return o(),c("div",{class:"activityScreen",style:V(e.cssVars)},[(o(!0),c(y,null,b(n.screen.blocks,(l,_)=>(o(),m($,{name:"slide"},{default:w(()=>[F(L(u,{block:l,onStepNext:t[0]||(t[0]=i=>e.step++),onScreenNext:t[1]||(t[1]=i=>s.$emit("screenNext",i)),blockid:n.screenindex+"-"+_},null,8,["block","blockid"]),[[M,e.useSteps(_)]])]),_:2},1024))),256)),n.screen.steps?(o(),m(v,{key:0,modelValue:e.step,"onUpdate:modelValue":t[2]||(t[2]=l=>e.step=l),steps:n.screen.blocks.length},null,8,["modelValue","steps"])):p("",!0)],4)}const Pe={components:{ScreenBlocks:B},props:{screenindex:{type:Number},screen:{type:Object,required:!0}},setup(s){const t=k(0);return{cssVars:N(()=>({})),useSteps:a=>s.screen.steps?t.value==a:!0,step:t}},components:{ScreenBlocks:B,ActivityScreenSteps:He}};var Ge=f(Pe,[["render",Ee]]);const Re={class:"Activity"};function Ue(s,t,n,e,a,d){const u=g("ActivityScreen");return o(),m($,{name:"zoom"},{default:w(()=>[r("section",Re,[(o(!0),c(y,null,b(e.Activity.screens,(v,l)=>F((o(),m(u,{screen:v,onScreenNext:e.changeScreen,screenindex:l},null,8,["screen","onScreenNext","screenindex"])),[[M,l==e.Status.screen]])),256))])]),_:1})}const We={components:{ActivityScreen:Ge},props:{screenModel:{type:Number,default:0,required:!0}},setup(s,t){const n=x("activityFile"),e=x("statusFile");return{Activity:n,Status:e,changeScreen:d=>{e.value.screen+=d}}}};var Je=f(We,[["render",Ue]]);const Ke={key:2};function Qe(s,t,n,e,a,d){const u=g("Intro"),v=g("ActivitySidebar"),l=g("ActivityWindow");return e.activityFile?(o(),c(y,{key:0},[e.statusFile.state=="@intro"?(o(),m(u,{key:0,onStart:t[0]||(t[0]=_=>e.changestate("@activity"))})):e.statusFile.state=="@activity"?(o(),c(y,{key:1},[L(v),L(l,{screenModel:e.statusFile.screen,"onUpdate:screenModel":t[1]||(t[1]=_=>e.statusFile.screen=_)},null,8,["screenModel"])],64)):e.statusFile.state=="@ended"?(o(),c("p",Ke,"Ended")):p("",!0)],64)):p("",!0)}const Xe={components:{Intro:J,ActivitySidebar:le,ActivityWindow:Je},setup(){const s=k({state:"@intro",screen:0});j("statusFile",k(s));const t=e=>{s.value.state=e},n=x("activityFile");return{changestate:t,activityFile:n,statusFile:s}}};var Ye=f(Xe,[["render",Qe]]);function Ze(s){var t=q.generate(s||"-");const n=t.toDataUrl();document.getElementById("app").style.backgroundImage=n}var et={buildBG:Ze};var T=z(Ye);function tt(){nt()}H({options:{enableMenu:!1}},tt);T.use(E);async function nt(){const s=window.location.search,n=new URLSearchParams(s).get("oda");if(n)try{const e=await P.get("./odas/"+n+"/oda.json");T.provide("activityFile",e.data),et.buildBG(e.data.id),T.mount("#app")}catch(e){alert("Ocurri\xF3 un error al cargar la ODA"),console.log(e)}else alert("ODA no definida")}
