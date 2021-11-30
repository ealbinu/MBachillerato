import{o as r,c as _,w as S,T as x,a as l,b as a,d as m,r as f,n as g,t as A,e as b,F as v,f as $,i as h,g as p,h as V,j as w,k as C,v as F,l as N,p as L,G as j,m as T,q as O,s as I,u as q}from"./vendor.93c41daf.js";const z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function e(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}};z();const P={key:0,class:"dialog intro"};function G(s,t,n,e,o,c){return r(),_(x,{name:"zoom",onAfterLeave:e.start},{default:S(()=>[e.dialog?(r(),l("div",P,[a("button",{class:"important",onClick:t[0]||(t[0]=(...i)=>e.close&&e.close(...i))},"Comenzar")])):m("",!0)]),_:1},8,["onAfterLeave"])}var y=(s,t)=>{const n=s.__vccOpts||s;for(const[e,o]of t)n[e]=o;return n};const E={setup(s,t){const n=f(!0);return{dialog:n,close:()=>{n.value=!1},start:()=>{t.emit("start")}}}};var H=y(E,[["render",G]]);const U={class:"container"},W={class:"area"},R=a("hr",null,null,-1),J={class:"area pantallas"},K=["onClick"],Q={class:"label"},X=a("hr",null,null,-1),Y=a("div",{class:"area"},[a("h2",null,[a("span",{class:"icon ico-progreso"}),$(),a("span",{class:"label"},"Progreso")]),a("div",{class:"progreso"},[a("div",{class:"bar",style:"width:"+70+"%"})])],-1),Z=a("hr",null,null,-1),ee=a("div",{class:"area"},[a("h2",null,[a("span",{class:"icon ico-puntaje"}),$(),a("span",{class:"label"},"Puntaje")]),a("div",{class:"puntaje"},[$("10 "),a("span",{class:"label"},"/100")])],-1);function te(s,t,n,e,o,c){return r(),_(x,{name:"zoom"},{default:S(()=>[a("aside",{class:g(["ActivitySidebar",[e.wide?"":"mini"]])},[a("div",{class:"openclosebtn",onClick:t[0]||(t[0]=i=>e.wide=!e.wide)},[a("span",{class:g(["icon",[e.wide?"ico-left":"ico-right"]])},null,2)]),a("div",U,[a("div",W,[a("h1",null,A(e.Activity.title),1)]),R,a("div",J,[a("ul",null,[(r(!0),l(v,null,b(e.Activity.screens,(i,d)=>(r(),l("li",{class:g(["screenItem",d==e.Status.screen?"active":""]),onClick:u=>e.goToScreen(d)},[a("span",{class:g(["icon ico-pantallas",d==e.Status.screen?"active":""])},null,2),a("span",Q,"\xA0 "+A(i.title),1)],10,K))),256))])]),X,Y,Z,ee])],2)]),_:1})}const ne={setup(s,t){const n=h("activityFile"),e=h("statusFile");return{wide:f(!0),Activity:n,Status:e,goToScreen:i=>{e.value.screen=i}}}};var se=y(ne,[["render",te]]);function oe(s,t,n,e,o,c){const i=p("math-jax");return r(),_(i,{latex:n.data.math,block:n.data.block},null,8,["latex","block"])}const ae={components:{},props:["data"],setup(s,t){return{}}};var re=y(ae,[["render",oe]]);const ce=["innerHTML"];function ie(s,t,n,e,o,c){const i=p("math-jax");return r(),l("div",{class:"blockText",style:V(e.cssVars)},[(r(!0),l(v,null,b(n.data.content,(d,u)=>(r(),l(v,null,[typeof d=="string"?(r(),l("span",{key:0,innerHTML:d},null,8,ce)):d.math?(r(),_(i,{key:1,latex:d.math,block:d.block},null,8,["latex","block"])):m("",!0)],64))),256))],4)}const le={components:{},props:["data"],setup(s,t){return{cssVars:w(()=>({"--block-align":s.data.align||"center"})),formula:"\\frac{x}{b}"}}};var de=y(le,[["render",ie]]);const ue={class:"blockContainer"},_e=["innerHTML"],ve={key:0,class:"text-center my-1"},pe={key:1,class:"text-center my-2"};function me(s,t,n,e,o,c){const i=p("BlockMath"),d=p("BlockDragDrop");return r(),l("div",{class:"block",style:V(e.cssVars)},[a("div",ue,[(r(!0),l(v,null,b(n.block.content,(u,k)=>(r(),l(v,null,[typeof u=="string"?(r(),l("span",{key:0,innerHTML:u},null,8,_e)):u.math?(r(),_(i,{key:1,data:u},null,8,["data"])):m("",!0),u.dragdrop?(r(),_(d,{key:2,data:u},null,8,["data"])):m("",!0)],64))),256))]),n.block.buttonNextStep?(r(),l("div",ve,[a("button",{onClick:t[0]||(t[0]=u=>s.$emit("stepNext"))},A(n.block.buttonNextStep),1)])):m("",!0),n.block.buttonNextScreen?(r(),l("div",pe,[a("button",{class:"important",onClick:t[1]||(t[1]=u=>s.$emit("screenNext",1))},A(n.block.buttonNextScreen),1)])):m("",!0)],4)}const ye={components:{BlockMath:re,BlockDragDrop:de},props:["block"],setup(s,t){return{cssVars:w(()=>({"--block-width":s.block.width||"100%"}))}}};var D=y(ye,[["render",me]]);const fe={class:"stepsNavigation"},be=["disabled"],ke=a("span",{class:"icon ico-left"},null,-1),ge=[ke],he=["disabled"],Se=a("span",{class:"icon ico-right"},null,-1),xe=[Se];function Ae(s,t,n,e,o,c){return r(),l("div",fe,[a("button",{onClick:t[0]||(t[0]=i=>e.navigate(-1)),disabled:n.modelValue==0},ge,8,be),(r(!0),l(v,null,b(n.steps,(i,d)=>(r(),l("div",{class:g(["step",[n.modelValue==d?"active":"non-active"]])},null,2))),256)),a("button",{onClick:t[1]||(t[1]=i=>e.navigate(1)),disabled:n.modelValue==n.steps-1},xe,8,he)])}const $e={components:{},props:{modelValue:{type:Number,default:0,required:!0},steps:{type:Number,required:!0}},setup(s,t){const n=f(0);return{navigate:o=>{if(o==-1&&s.modelValue>0||o==1&&s.modelValue<s.steps-1){const c=s.modelValue+o;t.emit("update:modelValue",c)}},currentStep:n}}};var Ve=y($e,[["render",Ae]]);function we(s,t,n,e,o,c){const i=p("ScreenBlocks"),d=p("ActivityScreenSteps");return r(),l("div",{class:"activityScreen",style:V(e.cssVars)},[(r(!0),l(v,null,b(n.screen.blocks,(u,k)=>(r(),_(x,{name:"slide"},{default:S(()=>[C(N(i,{block:u,onStepNext:t[0]||(t[0]=M=>e.step++),onScreenNext:t[1]||(t[1]=M=>s.$emit("screenNext",M))},null,8,["block"]),[[F,e.useSteps(k)]])]),_:2},1024))),256)),n.screen.steps?(r(),_(d,{key:0,modelValue:e.step,"onUpdate:modelValue":t[2]||(t[2]=u=>e.step=u),steps:n.screen.blocks.length},null,8,["modelValue","steps"])):m("",!0)],4)}const Ne={components:{ScreenBlocks:D},props:{screen:{type:Object,required:!0}},setup(s){const t=f(0);return{cssVars:w(()=>({})),useSteps:o=>s.screen.steps?t.value==o:!0,step:t}},components:{ScreenBlocks:D,ActivityScreenSteps:Ve}};var Be=y(Ne,[["render",we]]);const Me={class:"Activity"};function Ce(s,t,n,e,o,c){const i=p("ActivityScreen");return r(),_(x,{name:"zoom"},{default:S(()=>[a("section",Me,[(r(!0),l(v,null,b(e.Activity.screens,(d,u)=>C((r(),_(i,{screen:d,onScreenNext:e.changeScreen},null,8,["screen","onScreenNext"])),[[F,u==e.Status.screen]])),256))])]),_:1})}const Fe={components:{ActivityScreen:Be},props:{screenModel:{type:Number,default:0,required:!0}},setup(s,t){const n=h("activityFile"),e=h("statusFile");return{Activity:n,Status:e,changeScreen:c=>{e.value.screen=c}}}};var De=y(Fe,[["render",Ce]]);const Le={key:2};function je(s,t,n,e,o,c){const i=p("Intro"),d=p("ActivitySidebar"),u=p("ActivityWindow");return e.activityFile?(r(),l(v,{key:0},[e.main.state=="@intro"?(r(),_(i,{key:0,onStart:t[0]||(t[0]=k=>e.changestate("@activity"))})):e.main.state=="@activity"?(r(),l(v,{key:1},[N(d),N(u,{screenModel:e.status.screen,"onUpdate:screenModel":t[1]||(t[1]=k=>e.status.screen=k)},null,8,["screenModel"])],64)):e.main.state=="@ended"?(r(),l("p",Le,"Ended")):m("",!0)],64)):m("",!0)}const Te={components:{Intro:H,ActivitySidebar:se,ActivityWindow:De},setup(){const s=f({state:"@activity"}),t=o=>{s.value.state=o},n=h("activityFile"),e=f({screen:0});return L("statusFile",f(e)),{main:s,changestate:t,activityFile:n,status}}};var Oe=y(Te,[["render",je]]);function Ie(s){var t=j.generate(s||"-");const n=t.toDataUrl();document.getElementById("app").style.backgroundImage=n}var qe={buildBG:Ie},B=T(Oe);function ze(){Pe()}O({options:{enableMenu:!1}},ze);B.use(I);async function Pe(){const s=window.location.search,n=new URLSearchParams(s).get("oda");if(n)try{const e=await q.get("./odas/"+n+"/oda.json");B.provide("activityFile",e.data),qe.buildBG(e.data.id),B.mount("#app")}catch(e){alert("Ocurri\xF3 un error al cargar la ODA"),console.log(e)}else alert("ODA no definida")}
