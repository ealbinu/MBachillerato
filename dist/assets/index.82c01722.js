import{i as $,r as C,l as ae,o as s,c as A,w as I,T as B,a as r,b as e,t as k,u as v,d as m,e as z,f as oe,F as h,p as K,g as Q,h as M,j as P,k as D,n as O,m as X,q as E,s as V,_ as Y,v as R,x as G,G as le,y as re,V as ce,z as ie,A as Z,B as ue,C as de}from"./vendor.9f890246.js";const ve=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}};ve();const _e={class:"container text-center"},pe={class:"description my-2"},ge={class:"my-2"},he=e("hr",null,null,-1),fe=e("h4",{class:"my-1"},"Aprendizajes esperados",-1),me={class:"mb-2"},be=e("h4",{class:"my-1"},"Contenido central",-1),ye={class:"mb-2"},ke=["data-animation-path","data-name"],$e={emits:["start"],setup(a,{emit:o}){const t=$("activityFile");$("statusFile");const c=C(),n=C(!0),i=()=>{n.value=!1},l=()=>{o("start")};return ae.searchAnimations(),(d,S)=>(s(),A(B,{name:"zoom",onAfterLeave:l},{default:I(()=>[n.value?(s(),r("div",{key:0,class:"dialog intro",ref_key:"introContainer",ref:c},[e("div",_e,[e("div",pe,[e("h1",ge,k(v(t).title),1),e("p",null,k(v(t).asignatura),1),he,fe,e("p",me,k(v(t).aprendizajes),1),be,e("p",ye,k(v(t).contenidocentral),1)]),e("button",{class:"important",onClick:i},"Comenzar")]),e("div",{class:"lottie","data-animation-path":"odas/animations/intro_"+v(t).materia+".json","data-anim-loop":"true","data-name":"intro_"+v(t).materia},null,8,ke)],512)):m("",!0)]),_:1}))}};var ee=(a,o)=>{const t=a.__vccOpts||a;for(const[c,n]of o)t[c]=n;return t};const Se=a=>(K("data-v-0dac4442"),a=a(),Q(),a),we=["innerHTML"],xe={key:0,class:"dialog"},Le=Se(()=>e("div",{class:"material-icons-two-tone"},"close",-1)),Ce=[Le],Ae={class:"ma-1"},Te={props:{label:String},setup(a){const o=C(!1),t=()=>{o.value=!0},c=()=>{o.value=!1};return(n,i)=>(s(),r(h,null,[e("button",{onClick:t,innerHTML:a.label},null,8,we),z(B,{name:"zoom"},{default:I(()=>[o.value?(s(),r("div",xe,[e("button",{class:"close",onClick:c},Ce),e("div",Ae,[oe(n.$slots,"default",{},void 0,!0)])])):m("",!0)]),_:3})],64))}};var te=ee(Te,[["__scopeId","data-v-0dac4442"]]);const ze=e("hr",null,null,-1),Me={class:"area row"},De=M("Mostrar pantallas"),Fe=M("Cerrar pantallas"),Ne={props:{},setup(a){const o=P(),t=()=>{o.appContext.config.globalProperties.emitter.emit("solve")},c=$("test"),n=$("view"),i=()=>{n.value=!n.value,console.log(n.value)};return(l,d)=>v(c)?(s(),r(h,{key:0},[ze,e("div",{class:"area row"},[e("button",{class:"test",onClick:t},"Resolver todo")]),e("div",Me,[e("button",{class:"test",onClick:i},[v(n)?(s(),r(h,{key:1},[Fe],64)):(s(),r(h,{key:0},[De],64))])])],64)):m("",!0)}};const Oe={key:0,class:"material-icons-two-tone"},Ie={key:1,class:"material-icons-two-tone"},Pe={class:"container"},je={class:"area"},He=e("hr",null,null,-1),Be={class:"area row vertical extrainfo"},qe={class:"text-center"},Ee=e("h1",{class:"main mb-1"},"Aprendizajes esperados",-1),Ve={class:"main"},Re={class:"text-center"},Ge=e("h1",{class:"main mb-1"},"Contenido central",-1),Je={class:"main"},Ue=e("hr",null,null,-1),We={class:"area pantallas"},Ke=["onClick"],Qe={class:"label"},Xe=e("hr",null,null,-1),Ye=e("div",{class:"area"},[e("h2",null,[e("span",{class:"material-icons-two-tone"},"donut_large"),e("span",{class:"label"},"\xA0Progreso")]),e("div",{class:"progreso"},[e("div",{class:"bar",style:"width:"+70+"%"})]),e("hr")],-1),Ze=e("div",{class:"area"},[e("h2",null,[e("span",{class:"material-icons-two-tone"},"auto_awesome"),e("span",{class:"label"},"\xA0Puntaje")]),e("div",{class:"puntaje"},[M("10 "),e("span",{class:"label"},"/100")])],-1),et=e("hr",null,null,-1),tt={setup(a){const o=$("activityFile"),t=$("statusFile"),c=C(!0),n=P(),i=d=>{t.value.step=0,t.value.screen=d},l=()=>{console.log(o.id),X(o.id+"_").removeStorageSync("status"),location.reload()};return n.appContext.config.globalProperties.emitter.on("sidebarmini",d=>{c.value=!1}),(d,S)=>(s(),A(B,{name:"zoom"},{default:I(()=>[e("aside",{class:O(["ActivitySidebar",[c.value?"":"mini"]])},[e("div",{class:"openclosebtn",onClick:S[0]||(S[0]=_=>c.value=!c.value)},[c.value?(s(),r("span",Oe,"navigate_before")):(s(),r("span",Ie,"navigate_next"))]),e("div",Pe,[e("div",je,[e("h1",null,k(v(o).title),1)]),He,e("div",Be,[z(te,{label:"Aprendizajes esperados"},{default:I(()=>[e("div",qe,[Ee,e("div",Ve,k(v(o).aprendizajes),1)])]),_:1}),z(te,{label:"Contenido central"},{default:I(()=>[e("div",Re,[Ge,e("div",Je,k(v(o).contenidocentral),1)])]),_:1})]),Ue,e("div",We,[e("ul",null,[(s(!0),r(h,null,D(v(o).screens,(_,f)=>(s(),r("li",{class:O(["screenItem",f==v(t).screen?"active":""]),onClick:w=>i(f)},[e("span",{class:O(["material-icons-two-tone",f==v(t).screen?"active":""])},k(_.icon),3),e("span",Qe,"\xA0"+k(_.title),1)],10,Ke))),256))])]),Xe,Ye,Ze,z(Ne),et,e("div",{class:"area row"},[e("button",{onClick:l},"Reiniciar")])])],2)]),_:1}))}};const st=["innerHTML"],nt=["innerHTML"],q={props:{data:Object},setup(a){const o=a,t=E(()=>({"--fontSize":o.data.size||"1rem"})),c=n=>window.MathJax.tex2svg(n).getElementsByTagName("svg")[0].outerHTML;return(n,i)=>a.data.block?(s(),r("div",{key:0,class:"blockmathCont",style:V(v(t)),innerHTML:c(a.data.math)},null,12,st)):(s(),r("span",{key:1,class:"blockmathCont",style:V(v(t)),innerHTML:c(a.data.math)},null,12,nt))}};const se={props:{},setup(a,{emit:o}){const t=$("test"),c=()=>{o("solve")};return(n,i)=>v(t)?(s(),r("button",{key:0,class:"solveModule test",onClick:c},"Resolver")):m("",!0)}};const at=a=>(K("data-v-5c24d53d"),a=a(),Q(),a),ot=["id"],lt={key:0,class:"drops dropsLeft"},rt=["data"],ct=["innerHTML"],it={class:"drags"},ut=["data","data-index"],dt=at(()=>e("div",{class:"material-icons-two-tone"},"pan_tool",-1)),vt=["innerHTML"],_t={key:1,class:"drops dropsRight"},pt=["data"],gt=["innerHTML"],ht={props:{blockid:String,data:Object},setup(a){const o=a,t=$("statusFile"),c=P(),n=C(),i=C();var l="#block-"+o.blockid,d=l+" .drag",S=l+" .drop",_=null,f;const w=()=>{_=document.querySelectorAll(l+" .drop"),f=Draggable.create(d,{type:"x,y",bounds:l,zIndexBoost:!1,onDrag:function(p){b(p,this)},onClick:function(p){N(p,this)},onDragEnd:function(p){y(p,this)}})},b=(p,g)=>{for(var u=0;u<_.length;u++){if(g.hitTest(_[u],"40%"))return g.target.classList.add("hover"),_[u].classList.add("hover"),!1;g.target.classList.remove("hover"),_[u].classList.remove("hover")}},N=(p,g)=>{if(n.value!=null)return!1;var u=document.querySelector(l+" .drags");g.target.parentElement!=u&&(u.append(g.target),TweenLite.to(g.target,.2,{x:0,y:0}),T())},y=(p,g)=>{for(var u=!1,x=0;x<_.length;x++)g.hitTest(_[x],"40%")&&(u=!0,_[x].append(g.target),TweenLite.to(g.target,.2,{x:0,y:0}),g.target.classList.remove("hover"),_[x].classList.remove("hover"),T());u||TweenLite.to(g.target,.2,{x:0,y:0})},L=p=>{var g=btoa(p);return g},T=()=>{for(var p=document.querySelectorAll(d),g=[],u=0;u<p.length;u++){var x=p[u].getAttribute("data-index"),H=p[u].parentElement.getAttribute("data");g.push([x,H])}t.value.answers[o.blockid]=g},j=setInterval(function(){Draggable&&(w(),J())},500),J=()=>{clearInterval(j),ne()},ne=()=>{if(t.value.answers[o.blockid]){var p=t.value.answers[o.blockid];for(var g in p){var u=p[g];if(u[1]){var x=document.querySelector(d+'[data-index="'+u[0]+'"]'),H=document.querySelector(S+"[data="+u[1]+"]");H.append(x)}}}else t.value.answers[o.blockid]=null;t.value.finalize&&W()},U=()=>{for(var p=document.querySelectorAll(d),g=0;g<p.length;g++){var u=atob(p[g].getAttribute("data")),x=document.querySelector(S+"[data="+u+"]");x.append(p[g])}T()},W=()=>{for(var p=document.querySelectorAll(d),g=0,u=0;u<p.length;u++){f[u].disable();var x=atob(p[u].getAttribute("data")),H=p[u].parentElement.getAttribute("data");x==H?p[u].classList.add("isok"):(p[u].classList.add("notok"),g++)}g==0?n.value=!0:n.value=!1,t.value.result[o.blockid]=n.value};return c.appContext.config.globalProperties.emitter.on("solve",p=>{U()}),c.appContext.config.globalProperties.emitter.on("finalize",p=>{W()}),(p,g)=>(s(),r(h,null,[e("div",{class:"blockDragDrop",id:"block-"+a.blockid,ref_key:"block",ref:i},[a.data.dropsLeft?(s(),r("section",lt,[(s(!0),r(h,null,D(a.data.dropsLeft,(u,x)=>(s(),r("div",{class:"drop",data:u[1]},[typeof u[0]=="string"?(s(),r("div",{key:0,class:"content",innerHTML:u[0]},null,8,ct)):u[0].math?(s(),A(q,{key:1,data:u[0]},null,8,["data"])):m("",!0)],8,rt))),256))])):m("",!0),e("section",it,[(s(!0),r(h,null,D(a.data.drags,(u,x)=>(s(),r("div",{class:"drag",data:L(u[1]),"data-index":x},[dt,typeof u[0]=="string"?(s(),r("div",{key:0,class:"content",innerHTML:u[0]},null,8,vt)):u[0].math?(s(),A(q,{key:1,data:u[0]},null,8,["data"])):m("",!0)],8,ut))),256))]),a.data.dropsRight?(s(),r("section",_t,[(s(!0),r(h,null,D(a.data.dropsRight,(u,x)=>(s(),r("div",{class:"drop",data:u[1]},[typeof u[0]=="string"?(s(),r("div",{key:0,class:"content",innerHTML:u[0]},null,8,gt)):u[0].math?(s(),A(q,{key:1,data:u[0]},null,8,["data"])):m("",!0)],8,pt))),256))])):m("",!0)],8,ot),z(se,{onSolve:U})],64))}};var ft=ee(ht,[["__scopeId","data-v-5c24d53d"]]);const mt=["id"],bt=["onClick"],yt=e("div",{class:"material-icons-two-tone"},"touch_app",-1),kt={class:"option-letter"},$t=["innerHTML"],St={props:{blockid:String,data:Object},setup(a){const o=a,t=C(),c=$("statusFile"),n=P(),i=C(),l=C([]);var d=C(!0);const S=y=>"abcdefghijk"[y],_=()=>{for(var y in o.data.options)o.data.options,l.value[y]=!1;f(),c.value.answers[o.blockid]?l.value=c.value.answers[o.blockid]:c.value.answers[o.blockid]=null},f=()=>{var y=0;o.data.options.forEach(L=>{L[1]&&(y+=1)}),y>1&&(d.value=!1)};_();const w=y=>{if(d.value){for(var L in l.value)l.value[L]=!1;l.value[y]=!0}else l.value[y]=!l.value[y];c.value.answers[o.blockid]=l.value},b=()=>{for(var y=o.data.options,L=0;L<y.length;L++)y[L][1]?l.value[L]=!0:l.value[L]=!1;c.value.answers[o.blockid]=l.value},N=()=>{for(var y=o.data.options,L=[],T=0;T<y.length;T++)L.push(y[T][1]);Y.isEqual(L,l.value)?(t.value=!0,i.value.classList.add("isok")):(t.value=!1,i.value.classList.add("notok")),c.value.result[o.blockid]=t.value};return n.appContext.config.globalProperties.emitter.on("solve",y=>{b()}),n.appContext.config.globalProperties.emitter.on("finalize",y=>{N()}),(y,L)=>(s(),r(h,null,[e("div",{class:"blockSelect",id:"block-"+a.blockid,ref_key:"block",ref:i},[(s(!0),r(h,null,D(a.data.options,(T,j)=>(s(),r("div",{class:O(["blockSelectOption",l.value[j]?"active":""]),onClick:J=>w(j)},[yt,e("div",kt,k(S(j)),1),typeof T[0]=="string"?(s(),r("div",{key:0,class:"content",innerHTML:T[0]},null,8,$t)):T[0].math?(s(),A(q,{key:1,data:T[0]},null,8,["data"])):m("",!0)],10,bt))),256))],8,mt),z(se,{onSolve:b})],64))}};const wt={class:"blockContainer"},xt=["innerHTML"],Lt=["innerHTML"],Ct={key:0,class:"text-center my-1"},At={key:1,class:"text-center my-2"},Tt={props:{block:Object,blockid:String},setup(a){const o=a,t=$("view"),c=E(()=>({"--block-width":o.block.width||"100%"}));return(n,i)=>a.block.content.length?(s(),r("div",{key:0,class:"block",style:V(v(c))},[e("div",wt,[(s(!0),r(h,null,D(a.block.content,(l,d)=>(s(),r(h,null,[typeof l=="string"?(s(),r("span",{key:0,innerHTML:l},null,8,xt)):l.text?(s(),r("div",{key:1,innerHTML:l.text,class:O(l.class||"my-2")},null,10,Lt)):l.math?(s(),A(q,{key:2,data:l,ref_for:!0,ref:"question"},null,8,["data"])):m("",!0),l.dragdrop?(s(),A(ft,{key:3,data:l,blockid:a.blockid+"-"+d},null,8,["data","blockid"])):m("",!0),l.select?(s(),A(St,{key:4,data:l,blockid:a.blockid+"-"+d},null,8,["data","blockid"])):m("",!0)],64))),256))]),v(t)?m("",!0):(s(),r(h,{key:0},[a.block.buttonNextStep?(s(),r("div",Ct,[e("button",{onClick:i[0]||(i[0]=l=>n.$emit("stepNext"))},k(a.block.buttonNextStep),1)])):m("",!0),a.block.buttonNextScreen?(s(),r("div",At,[e("button",{class:"important",onClick:i[1]||(i[1]=l=>n.$emit("screenNext",1))},k(a.block.buttonNextScreen),1)])):m("",!0)],64))],4)):m("",!0)}},zt={class:"block ScreenBlockEnd"},Mt={class:"text-center"},Dt={class:"my-3"},Ft=M("De un total de "),Nt=M(" tienes "),Ot={class:"high"},It=M("."),Pt=["onClick"],jt=e("div",{class:"my-3"},"\xBFDeseas finalizar?",-1),Ht={key:1,class:"my-3"},Bt=e("span",null,[M("Has contestado todas las preguntas. Verifica tus respuestas y da clic en "),e("strong",null,'"finalizar"'),M(".")],-1),qt=[Bt],Et=e("hr",null,null,-1),Vt=e("div",{class:"my-3"},[e("strong",null,"Actividad finalizada.")],-1),Rt={class:"my-3"},Gt=M("De un total de "),Jt=M(" obtuviste un "),Ut={class:"high"},Wt=M("."),Kt=e("div",{class:"my-3"},"A continuaci\xF3n podr\xE1s ver un res\xFAmen de tus resultados:",-1),Qt={class:"row wrap"},Xt=["onClick"],Yt={props:{},setup(a){const o=$("activityFile"),t=$("statusFile"),c=P(),n=_=>{var f=_.split("-"),w=f[0],b=f[1],N=o.screens[w].title;return N+" > Bloque "+b},i=_=>{var f=_.split("-"),w=f[0],b=f[1];t.value.screen=w*1,t.value.step=b*1},l=E(()=>{var _=t.value.answers,f={tot:"",total:Object.keys(_).length,unanswered:{},unansweredLength:0},w={};return Object.keys(_).forEach(function(b){var N=_[b];_[b]==null&&(w[b]=N,f.unansweredLength++)}),Y(w).keys().sort().each(function(b){f.unanswered[b]=w[b]}),f}),d=C({total:0,oks:0,errors:0,oksPercentage:0,errorsPercentage:0}),S=()=>{t.value.finalize=!0,c.appContext.config.globalProperties.emitter.emit("finalize");for(var _ in t.value.result)d.value.total++,t.value.result[_]?d.value.oks++:d.value.errors++;d.value.oksPercentage=Math.round(d.value.oks*100/d.value.total),d.value.errorsPercentage=100-d.value.oksPercentage};return t.value.finalize&&setTimeout(function(){S()},1e3),(_,f)=>(s(),r("div",zt,[e("div",Mt,[v(t).finalize?(s(),r(h,{key:1},[Vt,e("div",Rt,[Gt,e("strong",null,k(d.value.total)+" preguntas",1),Jt,e("strong",Ut,k(d.value.oksPercentage)+"% de aciertos",1),Wt]),d.value.errors>0?(s(),r(h,{key:0},[Kt,e("div",Qt,[(s(!0),r(h,null,D(v(t).result,(w,b)=>(s(),r("div",{class:O(["px-3 bg-light ma-1 floatcard",w?"isok":"notok"])},[e("button",{class:"bg-clear ma-1",onClick:N=>i(b)},k(n(b)),9,Xt)],2))),256))])],64)):m("",!0),e("p",null,k(v(t).result),1),e("p",null,k(d.value),1)],64)):(s(),r(h,{key:0},[v(l).unansweredLength?(s(),r(h,{key:0},[e("div",Dt,[e("span",null,[Ft,e("strong",null,k(v(l).total)+" preguntas",1),Nt,e("strong",Ot,k(v(l).unansweredLength)+" sin contestar",1),It])]),(s(!0),r(h,null,D(v(l).unanswered,(w,b)=>(s(),r("button",{class:"high ma-1",onClick:N=>i(b)},k(n(b)),9,Pt))),256)),jt],64)):(s(),r("div",Ht,qt)),Et,e("div",{class:"my-4"},[e("button",{class:"important",onClick:S},"Finalizar")])],64))])]))}};const Zt={class:"stepsNavigation"},es=["disabled"],ts=e("span",{class:"material-icons-two-tone"},"navigate_before",-1),ss=[ts],ns=["disabled"],as=e("span",{class:"material-icons-two-tone"},"navigate_next",-1),os=[as],ls={props:{steps:{type:Number,required:!0}},setup(a){const o=a,t=$("statusFile");C(0);const c=n=>{(n==-1&&t.value.step>0||n==1&&t.value.step<o.steps-1)&&(t.value.step+=n)};return(n,i)=>(s(),r("div",Zt,[e("button",{onClick:i[0]||(i[0]=l=>c(-1)),disabled:v(t).step==0},ss,8,es),(s(!0),r(h,null,D(a.steps,(l,d)=>(s(),r("div",{class:O(["step",[v(t).step==d?"active":"non-active"]])},null,2))),256)),e("button",{onClick:i[1]||(i[1]=l=>c(1)),disabled:v(t).step==a.steps-1},os,8,ns)]))}};const rs={key:0,class:"activityScreenTitle"},cs={props:{screenindex:{type:Number},screen:{type:Object,required:!0}},setup(a){const o=a,t=$("view"),c=$("statusFile"),n=E(()=>({})),i=()=>{c.value.step++},l=d=>t.value?!0:o.screen.steps?c.value.step==d:!0;return(d,S)=>(s(),r("div",{class:O(["activityScreen",v(t)?"desplegado":""]),style:V(v(n))},[v(t)?(s(),r("div",rs,k(a.screen.title),1)):m("",!0),(s(!0),r(h,null,D(a.screen.blocks,(_,f)=>(s(),r(h,null,[z(B,{name:"slide"},{default:I(()=>[R(z(Tt,{block:_,onStepNext:i,onScreenNext:S[0]||(S[0]=w=>d.$emit("screenNext",w)),blockid:a.screenindex+"-"+f},null,8,["block","blockid"]),[[G,l(f)]])]),_:2},1024),R(z(Yt,null,null,512),[[G,a.screen.end]])],64))),256)),a.screen.steps&&!v(t)?(s(),A(ls,{key:1,steps:a.screen.blocks.length},null,8,["steps"])):m("",!0)],6))}};const is={setup(a){const o=$("view"),t=$("activityFile"),c=$("statusFile"),n=l=>{c.value.step=0,c.value.screen+=l},i=l=>o.value?!0:l==c.value.screen;return(l,d)=>(s(),A(B,{name:"zoom"},{default:I(()=>[e("section",{class:O(["Activity",v(o)?"desplegado":""])},[(s(!0),r(h,null,D(v(t).screens,(S,_)=>R((s(),A(cs,{screen:S,onScreenNext:n,screenindex:_},null,8,["screen","screenindex"])),[[G,i(_)]])),256))],2)]),_:1}))}};const us={setup(a){const o=$("activityFile"),t=$("statusFile"),c=n=>{t.value.state=n};return(n,i)=>v(o)&&v(t)?(s(),r(h,{key:0},[v(t).state=="@intro"?(s(),A($e,{key:0,onStart:i[0]||(i[0]=l=>c("@activity"))})):v(t).state=="@activity"?(s(),r(h,{key:1},[z(tt),z(is)],64)):m("",!0)],64)):m("",!0)}};function ds(a){var o=le.generate(a||"-");const t=o.toDataUrl();var c=document.createElement("style");c.type="text/css",c.innerHTML="#app {background-image: "+t+";}",document.getElementsByTagName("head")[0].appendChild(c)}var vs={buildBG:ds};const _s=de();P();var F=re(us);F.config.globalProperties.emitter=_s;F.use(ce);gsap.registerPlugin(Draggable);F.provide("view",C(!1));ps();async function ps(){const a=window.location.search,o=new URLSearchParams(a);o.get("test")!=null?(console.log("%c Test Mode! ","background: #222; color: #bada55"),F.provide("test",!0)):F.provide("test",!1);const c=o.get("oda");if(c)try{const n=X(c+"_"),i=await ie.get("./odas/"+c+"/oda.json");F.provide("activityFile",i.data),vs.buildBG(i.data.id);const d=C({state:"@intro",screen:0,step:0,answers:{},result:{}});F.provide("statusFile",d),F.mount("#app");const S=n.getStorageSync("status");S&&(d.value=JSON.parse(Z.atob(S)),console.log("Saved data loaded")),ue(()=>d,(_,f)=>{const w=Z.btoa(JSON.stringify(_.value));n.setStorageSync("status",w)},{deep:!0})}catch(n){alert("Ocurri\xF3 un error al cargar la ODA"),console.log(n)}else alert("ODA no definida")}window.addEventListener("resize",function(){window.innerWidth<=600&&(console.log("ressszzz"),console.log(F.config),F.config.globalProperties.emitter.emit("sidebarmini"))});
