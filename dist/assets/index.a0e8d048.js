import{i as b,r as M,l as de,o as e,c as w,w as A,T as V,a as r,b as n,t as S,u,F as f,d as g,e as ee,n as N,f as L,g as T,h as H,j as R,k as G,p as te,m as se,q as ae,s as O,v as U,_ as ne,x as oe,y as W,z as K,G as _e,A as ve,V as pe,B as fe,C as ge,D as Q,E as he}from"./vendor.2e784223.js";const ye=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function s(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(l){if(l.ep)return;l.ep=!0;const i=s(l);fetch(l.href,i)}};ye();const ke={class:"container text-center"},be={class:"description my-2"},me={class:"my-2"},$e=n("hr",null,null,-1),Se=n("h4",{class:"my-1"},"Aprendizajes esperados",-1),xe={class:"mb-2"},we=n("h4",{class:"my-1"},"Contenido central",-1),Ce={class:"mb-2"},Le=["data-animation-path","data-name"],Te={emits:["start"],setup(a,{emit:o}){const s=b("activityFile");b("statusFile");const t=M(),l=M(!0),i=()=>{l.value=!1},c=()=>{o("start")};return de.searchAnimations(),(_,C)=>(e(),w(V,{name:"zoom",onAfterLeave:c},{default:A(()=>[l.value?(e(),r("div",{key:0,class:"dialog intro",ref_key:"introContainer",ref:t},[n("div",ke,[n("div",be,[n("h1",me,S(u(s).title),1),n("p",null,S(u(s).asignatura),1),$e,Se,n("p",xe,S(u(s).aprendizajes),1),u(s).contenidocentral?(e(),r(f,{key:0},[we,n("p",Ce,S(u(s).contenidocentral),1)],64)):g("",!0)]),n("button",{class:"important",onClick:i},"Comenzar")]),n("div",{class:"lottie","data-animation-path":"odas/animations/intro_"+u(s).materia+".json","data-anim-loop":"true","data-name":"intro_"+u(s).materia},null,8,Le)],512)):g("",!0)]),_:1}))}},Ae={class:"material-icons-two-tone"},P={props:{},setup(a){return(o,s)=>(e(),r("div",Ae,[ee(o.$slots,"default")]))}};var j=(a,o)=>{const s=a.__vccOpts||a;for(const[t,l]of o)s[t]=l;return s};const ze=["innerHTML"],Ie={key:0,class:"dialog"},Me=T("close"),Fe={class:"ma-1"},Oe={props:{label:String,classinit:Object},setup(a){const o=M(!1),s=()=>{o.value=!0},t=()=>{o.value=!1};return(l,i)=>(e(),r(f,null,[n("button",{onClick:s,innerHTML:a.label,class:N(a.classinit)},null,10,ze),L(V,{name:"zoom"},{default:A(()=>[o.value?(e(),r("div",Ie,[n("button",{class:"close",onClick:t},[L(P,null,{default:A(()=>[Me]),_:1})]),n("div",Fe,[ee(l.$slots,"default",{},void 0,!0)])])):g("",!0)]),_:3})],64))}};var le=j(Oe,[["__scopeId","data-v-16797cfb"]]);const De=n("hr",null,null,-1),Ne={class:"area row"},Pe=T("Mostrar pantallas"),je=T("Cerrar pantallas"),He={props:{},setup(a){const o=H(),s=()=>{o.appContext.config.globalProperties.emitter.emit("solve")},t=b("test"),l=b("view"),i=()=>{l.value=!l.value,console.log(l.value)};return(c,_)=>u(t)?(e(),r(f,{key:0},[De,n("div",{class:"area row mb-1"},[n("button",{class:"test",onClick:s},"Resolver todo")]),n("div",Ne,[n("button",{class:"test",onClick:i},[u(l)?(e(),r(f,{key:1},[je],64)):(e(),r(f,{key:0},[Pe],64))])])],64)):g("",!0)}};const Ee=a=>(te("data-v-5e37cb7c"),a=a(),se(),a),Be={class:"area"},qe=T("donut_large"),Ve={class:"label"},Re={class:"progreso"},Ge=Ee(()=>n("hr",null,null,-1)),Je={props:{},setup(a){const o=b("statusFile"),s=R(()=>{var t=o.value.answers,l={total:0,unanswered:0};return t&&(l.total=Object.keys(t).length,Object.keys(t).forEach(function(i){t[i],t[i]==null&&l.unanswered++})),l});return(t,l)=>(e(),r("div",Be,[n("h2",null,[L(P,null,{default:A(()=>[qe]),_:1}),n("span",Ve,"\xA0Progreso "+S(u(s).total-u(s).unanswered)+" /"+S(u(s).total),1)]),n("div",Re,[n("div",{class:"bar",style:G("width:"+Math.round((u(s).total-u(s).unanswered)/u(s).total*100)+"%")},null,4)]),Ge]))}};var Ue=j(Je,[["__scopeId","data-v-5e37cb7c"]]);const We={key:0,class:"area"},Ke=T("auto_awesome"),Qe={class:"label"},Xe={props:{},setup(a){const o=b("statusFile"),s=b("resultsFile"),t=()=>{const l=s.value.oksPercentage;var i="ok1";switch(!0){case(l<=100&&l>75):i="ok4";break;case(l<=75&&l>50):i="ok3";break;case(l<=50&&l>25):i="ok2";break}return i};return(l,i)=>u(o).finalize?(e(),r("div",We,[n("h2",{class:N(["puntaje",t()])},[L(P,null,{default:A(()=>[Ke]),_:1}),n("span",Qe,"\xA0Puntaje: "+S(u(s).oksPercentage)+"%",1)],2)])):g("",!0)}};var Ye=j(Xe,[["__scopeId","data-v-f0824b86"]]);const Ze=T("navigate_before"),et=T("navigate_next"),tt={class:"area"},st=n("hr",null,null,-1),at={class:"area row vertical extrainfo"},nt={class:"text-center"},ot=n("h1",{class:"main mb-1"},"Aprendizajes esperados",-1),lt={class:"main"},rt={class:"text-center"},ct=n("h1",{class:"main mb-1"},"Contenido central",-1),it={class:"main"},ut=n("hr",null,null,-1),dt={class:"area pantallas"},_t=["onClick"],vt={class:"label"},pt=n("hr",null,null,-1),ft=n("hr",null,null,-1),gt={setup(a){const o=b("activityFile"),s=b("statusFile"),t=M(!0),l=H(),i=_=>{s.value.step=0,s.value.screen=_},c=()=>{U(o.id+"_").removeStorageSync("status"),location.reload()};return l.appContext.config.globalProperties.emitter.on("sidebarmini",_=>{t.value=!1}),(_,C)=>{const h=ae("perfect-scrollbar");return e(),w(V,{name:"zoom"},{default:A(()=>[n("aside",{class:N(["ActivitySidebar",[t.value?"":"mini"]])},[n("div",{class:"openclosebtn",onClick:C[0]||(C[0]=k=>t.value=!t.value)},[t.value?(e(),w(P,{key:0},{default:A(()=>[Ze]),_:1})):(e(),w(P,{key:1},{default:A(()=>[et]),_:1}))]),L(h,{class:"container"},{default:A(()=>[n("div",tt,[n("h1",null,S(u(o).title),1)]),st,n("div",at,[L(le,{label:"Aprendizajes esperados",classinit:["mb-1"]},{default:A(()=>[n("div",nt,[ot,n("div",lt,S(u(o).aprendizajes),1)])]),_:1}),u(o).contenidocentral?(e(),w(le,{key:0,label:"Contenido central"},{default:A(()=>[n("div",rt,[ct,n("div",it,S(u(o).contenidocentral),1)])]),_:1})):g("",!0)]),ut,n("div",dt,[n("ul",null,[(e(!0),r(f,null,O(u(o).screens,(k,m)=>(e(),r("li",{class:N(["screenItem",m==u(s).screen?"active":""]),onClick:x=>i(m)},[L(P,{class:N(m==u(s).screen?"active":"")},{default:A(()=>[T(S(k.icon),1)]),_:2},1032,["class"]),n("span",vt,"\xA0"+S(k.title),1)],10,_t))),256))])]),pt,L(Ue),L(Ye),L(He),ft,n("div",{class:"area row"},[n("button",{onClick:c},"Reiniciar")])]),_:1})],2)]),_:1})}}};const ht=["innerHTML"],yt=["innerHTML"],E={props:{data:Object},setup(a){const o=a,s=R(()=>({"--fontSize":o.data.size||"1rem"})),t=l=>window.MathJax.tex2svg(l).getElementsByTagName("svg")[0].outerHTML;return(l,i)=>a.data.block?(e(),r("div",{key:0,class:"blockmathCont",style:G(u(s)),innerHTML:t(a.data.math)},null,12,ht)):(e(),r("span",{key:1,class:"blockmathCont",style:G(u(s)),innerHTML:t(a.data.math)},null,12,yt))}};const re={props:{},setup(a,{emit:o}){const s=b("test"),t=()=>{o("solve")};return(l,i)=>u(s)?(e(),r("button",{key:0,class:"solveModule test",onClick:t},"Resolver")):g("",!0)}};const kt=["id"],bt={key:0,class:"drops dropsLeft"},mt=["data"],$t=["innerHTML"],St={class:"drags"},xt=["data","data-index"],wt=T("pan_tool"),Ct=["innerHTML"],Lt={key:1,class:"drops dropsRight"},Tt=["data"],At=["innerHTML"],zt={props:{blockid:String,data:Object},setup(a){const o=a,s=b("statusFile"),t=H(),l=M(),i=M();var c="#block-"+o.blockid,_=c+" .drag",C=c+" .drop",h=null,k;const m=()=>{h=document.querySelectorAll(c+" .drop"),k=Draggable.create(_,{type:"x,y",bounds:c,zIndexBoost:!1,onDrag:function(v){x(v,this)},onClick:function(v){$(v,this)},onDragEnd:function(v){y(v,this)}})},x=(v,p)=>{for(var d=0;d<h.length;d++){if(p.hitTest(h[d],"40%"))return p.target.classList.add("hover"),h[d].classList.add("hover"),!1;p.target.classList.remove("hover"),h[d].classList.remove("hover")}},$=(v,p)=>{if(l.value!=null)return!1;var d=document.querySelector(c+" .drags");p.target.parentElement!=d&&(d.append(p.target),TweenLite.to(p.target,.2,{x:0,y:0}),F())},y=(v,p)=>{for(var d=!1,I=0;I<h.length;I++)p.hitTest(h[I],"40%")&&(d=!0,h[I].append(p.target),TweenLite.to(p.target,.2,{x:0,y:0}),p.target.classList.remove("hover"),h[I].classList.remove("hover"),F());d||TweenLite.to(p.target,.2,{x:0,y:0})},z=v=>{var p=btoa(v);return p},F=()=>{for(var v=document.querySelectorAll(_),p=[],d=0;d<v.length;d++){var I=v[d].getAttribute("data-index"),q=v[d].parentElement.getAttribute("data");p.push([I,q])}s.value.answers[o.blockid]=p},B=setInterval(function(){Draggable&&(m(),X())},500),X=()=>{clearInterval(B),ue()},ue=()=>{if(s.value.answers||(s.value.answers={}),s.value.answers[o.blockid]){var v=s.value.answers[o.blockid];for(var p in v){var d=v[p];if(d[1]){var I=document.querySelector(_+'[data-index="'+d[0]+'"]'),q=document.querySelector(C+"[data="+d[1]+"]");q.append(I)}}}else s.value.answers[o.blockid]=null;s.value.finalize&&Z()},Y=()=>{for(var v=document.querySelectorAll(_),p=0;p<v.length;p++){var d=atob(v[p].getAttribute("data")),I=document.querySelector(C+"[data="+d+"]");I.append(v[p])}F()},Z=()=>{for(var v=document.querySelectorAll(_),p=0,d=0;d<v.length;d++){k[d].disable();var I=atob(v[d].getAttribute("data")),q=v[d].parentElement.getAttribute("data");I==q?v[d].classList.add("isok"):(v[d].classList.add("notok"),p++)}p==0?l.value=!0:l.value=!1,s.value.result[o.blockid]=l.value};return t.appContext.config.globalProperties.emitter.on("solve",v=>{Y()}),t.appContext.config.globalProperties.emitter.on("finalize",v=>{Z()}),(v,p)=>(e(),r(f,null,[n("div",{class:"blockDragDrop",id:"block-"+a.blockid,ref_key:"block",ref:i},[a.data.dropsLeft?(e(),r("section",bt,[(e(!0),r(f,null,O(a.data.dropsLeft,(d,I)=>(e(),r("div",{class:"drop",data:d[1]},[typeof d[0]=="string"?(e(),r("div",{key:0,class:"content",innerHTML:d[0]},null,8,$t)):d[0].math?(e(),w(E,{key:1,data:d[0]},null,8,["data"])):g("",!0)],8,mt))),256))])):g("",!0),n("section",St,[(e(!0),r(f,null,O(a.data.drags,(d,I)=>(e(),r("div",{class:"drag",data:z(d[1]),"data-index":I},[L(P,null,{default:A(()=>[wt]),_:1}),typeof d[0]=="string"?(e(),r("div",{key:0,class:"content",innerHTML:d[0]},null,8,Ct)):d[0].math?(e(),w(E,{key:1,data:d[0]},null,8,["data"])):g("",!0)],8,xt))),256))]),a.data.dropsRight?(e(),r("section",Lt,[(e(!0),r(f,null,O(a.data.dropsRight,(d,I)=>(e(),r("div",{class:"drop",data:d[1]},[typeof d[0]=="string"?(e(),r("div",{key:0,class:"content",innerHTML:d[0]},null,8,At)):d[0].math?(e(),w(E,{key:1,data:d[0]},null,8,["data"])):g("",!0)],8,Tt))),256))])):g("",!0)],8,kt),L(re,{onSolve:Y})],64))}};var It=j(zt,[["__scopeId","data-v-7807bcf4"]]);const Mt=["id"],Ft=["onClick"],Ot=T("touch_app"),Dt={class:"option-letter"},Nt=["innerHTML"],Pt={props:{blockid:String,data:Object},setup(a){const o=a,s=M(),t=b("statusFile"),l=H(),i=M(),c=M([]);var _=M(!0);const C=y=>"abcdefghijk"[y],h=()=>{for(var y in o.data.options)o.data.options,c.value[y]=!1;k(),t.value.answers||(t.value.answers={}),t.value.answers[o.blockid]?c.value=t.value.answers[o.blockid]:t.value.answers[o.blockid]=null},k=()=>{var y=0;o.data.options.forEach(z=>{z[1]&&(y+=1)}),y>1&&(_.value=!1)};h();const m=y=>{if(t.value.finalize)return!1;if(_.value){for(var z in c.value)c.value[z]=!1;c.value[y]=!0}else c.value[y]=!c.value[y];t.value.answers[o.blockid]=c.value},x=()=>{for(var y=o.data.options,z=0;z<y.length;z++)y[z][1]?c.value[z]=!0:c.value[z]=!1;t.value.answers[o.blockid]=c.value},$=()=>{for(var y=o.data.options,z=[],F=0;F<y.length;F++)z.push(y[F][1]);ne.isEqual(z,c.value)?(s.value=!0,i.value.classList.add("isok")):(s.value=!1,i.value.classList.add("notok")),t.value.result[o.blockid]=s.value};return l.appContext.config.globalProperties.emitter.on("solve",y=>{x()}),l.appContext.config.globalProperties.emitter.on("finalize",y=>{$()}),(y,z)=>(e(),r(f,null,[n("div",{class:"blockSelect",id:"block-"+a.blockid,ref_key:"block",ref:i},[(e(!0),r(f,null,O(a.data.options,(F,B)=>(e(),r("div",{class:N(["blockSelectOption",c.value[B]?"active":""]),onClick:X=>m(B)},[L(P,null,{default:A(()=>[Ot]),_:1}),n("div",Dt,S(C(B)),1),typeof F[0]=="string"?(e(),r("div",{key:0,class:"content",innerHTML:F[0]},null,8,Nt)):F[0].math?(e(),w(E,{key:1,data:F[0]},null,8,["data"])):g("",!0)],10,Ft))),256))],8,Mt),L(re,{onSolve:x})],64))}};const jt=["src"],Ht={props:{data:{type:Object}},setup(a){const o=b("activityFile");return(s,t)=>(e(),r("img",{class:"blockImg",src:"odas/"+u(o).id+"/"+a.data.img},null,8,jt))}};var ce=j(Ht,[["__scopeId","data-v-1def06aa"]]);const Et=["title"],Bt=["innerHTML"],qt=T("contact_support"),Vt={key:2,class:"termDefinition"},Rt={key:0},Gt={key:0},Jt={props:{data:{type:Object}},setup(a){const o=M(!1),s=()=>{o.value=!o.value};return(t,l)=>(e(),r("div",{class:"blockTerm",title:a.data.d,onClick:s},[a.data.t?(e(),r("span",{key:0,innerHTML:a.data.t},null,8,Bt)):g("",!0),a.data.i?(e(),w(ce,{key:1,data:{img:a.data.i}},null,8,["data"])):g("",!0),L(P,null,{default:A(()=>[qt]),_:1}),o.value?(e(),r("div",Vt,[typeof a.data.d=="string"?(e(),r("p",Rt,S(a.data.d),1)):(e(!0),r(f,{key:1},O(a.data.d,(i,c)=>(e(),r(f,null,[typeof i=="string"?(e(),r("p",Gt,S(i),1)):i.math?(e(),w(E,{key:1,data:i},null,8,["data"])):g("",!0)],64))),256))])):g("",!0)],8,Et))}};var Ut=j(Jt,[["__scopeId","data-v-fdef45ae"]]);const Wt={class:"blockContainer"},Kt=["innerHTML"],Qt={key:1},Xt=["innerHTML"],Yt={key:0,class:"text-center my-2"},Zt={props:{block:Object,blockid:String},setup(a){const o=a,s=b("view"),t=R(()=>({"--block-width":o.block.width||"100%"}));return(l,i)=>a.block.content.length?(e(),r("div",{key:0,class:"block",style:G(u(t))},[n("div",Wt,[(e(!0),r(f,null,O(a.block.content,(c,_)=>(e(),r(f,null,[typeof c=="string"?(e(),r("span",{key:0,innerHTML:c},null,8,Kt)):c.br?(e(),r("br",Qt)):c.text?(e(),r("div",{key:2,innerHTML:c.text,class:N(c.class||"my-2")},null,10,Xt)):c.term?(e(),w(Ut,{key:3,data:c},null,8,["data"])):c.img?(e(),w(ce,{key:4,data:c},null,8,["data"])):c.math?(e(),w(E,{key:5,data:c},null,8,["data"])):g("",!0),c.dragdrop?(e(),w(It,{key:6,data:c,blockid:a.blockid+"-"+_},null,8,["data","blockid"])):g("",!0),c.select?(e(),w(Pt,{key:7,data:c,blockid:a.blockid+"-"+_},null,8,["data","blockid"])):g("",!0)],64))),256))]),u(s)?g("",!0):(e(),r("div",Yt,[a.block.buttonNextStep?(e(),r("button",{key:0,onClick:i[0]||(i[0]=c=>l.$emit("stepNext"))},S(a.block.buttonNextStep),1)):g("",!0),a.block.buttonNextScreen?(e(),r("button",{key:1,class:"important",onClick:i[1]||(i[1]=c=>l.$emit("screenNext",1))},S(a.block.buttonNextScreen),1)):g("",!0)]))],4)):g("",!0)}},es={class:"block ScreenBlockEnd"},ts={class:"text-center"},ss={class:"my-3"},as=T("De un total de "),ns=T(" tienes "),os={class:"high"},ls=T("."),rs=["onClick"],cs=n("div",{class:"my-3"},"\xBFDeseas finalizar?",-1),is={key:1,class:"my-3"},us=n("span",null,[T("Has contestado todas las preguntas. Verifica tus respuestas y da clic en "),n("strong",null,'"finalizar"'),T(".")],-1),ds=[us],_s={key:2,class:"my-3"},vs=n("span",null,"Muy bien. Has llegado al final de la actividad.",-1),ps=[vs],fs=n("hr",null,null,-1),gs=n("div",{class:"my-3"},[n("strong",null,"Actividad finalizada.")],-1),hs={class:"my-3"},ys=T("De un total de "),ks=T(" obtuviste un "),bs={class:"high"},ms=T("."),$s=n("div",{class:"my-3"},"A continuaci\xF3n podr\xE1s ver un res\xFAmen de tus resultados:",-1),Ss={class:"row wrap"},xs=["onClick"],ws=n("div",{class:"my-3"},"Puedes ver tus resultados individuales o repasar los contenidos navegando con el men\xFA de la izquierda.",-1),Cs=n("div",{class:"my-3"},"Tambi\xE9n puedes reiniciar la actividad:",-1),Ls={props:{},setup(a){const o=b("activityFile"),s=b("statusFile"),t=b("resultsFile"),l=H(),i=k=>{var m=k.split("-"),x=m[0],$=m[1],y=o.screens[x].title;return y+" > Bloque "+$},c=k=>{var m=k.split("-"),x=m[0],$=m[1];s.value.screen=x*1,s.value.step=$*1},_=R(()=>{var k=s.value.answers,m={tot:"",total:0,unanswered:{},unansweredLength:0};if(k){m.total=Object.keys(k).length;var x={};Object.keys(k).forEach(function($){var y=k[$];k[$]==null&&(x[$]=y,m.unansweredLength++)}),ne(x).keys().sort().each(function($){m.unanswered[$]=x[$]})}return m}),C=()=>{s.value.finalize=!0,l.appContext.config.globalProperties.emitter.emit("finalize");for(var k in s.value.result)t.value.total++,s.value.result[k]?t.value.oks++:t.value.errors++;t.value.total&&(t.value.oksPercentage=Math.round(t.value.oks*100/t.value.total),t.value.errorsPercentage=100-t.value.oksPercentage)};s.value.finalize&&setTimeout(function(){C()},1e3);const h=()=>{console.log(o.id),U(o.id+"_").removeStorageSync("status"),location.reload()};return(k,m)=>(e(),r("div",es,[n("div",ts,[u(s).finalize?(e(),r(f,{key:1},[gs,u(t).total>0?(e(),r(f,{key:0},[n("div",hs,[ys,n("strong",null,S(u(t).total)+" preguntas",1),ks,n("strong",bs,S(u(t).oksPercentage)+"% de aciertos",1),ms]),u(t).errors>0?(e(),r(f,{key:0},[$s,n("div",Ss,[(e(!0),r(f,null,O(u(s).result,(x,$)=>(e(),r("div",{class:N(["px-3 bg-light ma-1 floatcard",x?"isok":"notok"])},[n("button",{class:"bg-clear ma-1",onClick:y=>c($)},S(i($)),9,xs)],2))),256))])],64)):g("",!0)],64)):(e(),r(f,{key:1},[],64)),ws,Cs,n("button",{class:"important",onClick:h},"Reiniciar")],64)):(e(),r(f,{key:0},[u(_).unansweredLength?(e(),r(f,{key:0},[n("div",ss,[n("span",null,[as,n("strong",null,S(u(_).total)+" preguntas",1),ns,n("strong",os,S(u(_).unansweredLength)+" sin contestar",1),ls])]),(e(!0),r(f,null,O(u(_).unanswered,(x,$)=>(e(),r("button",{class:"high ma-1",onClick:y=>c($)},S(i($)),9,rs))),256)),cs],64)):u(_).total>0?(e(),r("div",is,ds)):(e(),r("div",_s,ps)),fs,n("div",{class:"my-4"},[n("button",{class:"important",onClick:C},"Finalizar")])],64))])]))}};const ie=a=>(te("data-v-0af9ee72"),a=a(),se(),a),Ts={class:"stepsNavigation"},As=["disabled"],zs=T("navigate_before"),Is=ie(()=>n("span",{class:"txt"},"Anterior",-1)),Ms=["disabled"],Fs=ie(()=>n("span",{class:"txt"},"Siguiente",-1)),Os=T("navigate_next"),Ds={props:{steps:{type:Number,required:!0}},setup(a,{emit:o}){const s=a,t=b("statusFile");M(0);const l=i=>{(i==-1&&t.value.step>0||i==1&&t.value.step<s.steps-1)&&(t.value.step+=i,o("stepChanged"))};return(i,c)=>(e(),r("div",Ts,[n("button",{onClick:c[0]||(c[0]=_=>l(-1)),disabled:u(t).step==0},[L(P,null,{default:A(()=>[zs]),_:1}),Is],8,As),(e(!0),r(f,null,O(a.steps,(_,C)=>(e(),r("div",{class:N(["step",[u(t).step==C?"active":"non-active"]])},null,2))),256)),n("button",{onClick:c[1]||(c[1]=_=>l(1)),disabled:u(t).step==a.steps-1},[Fs,L(P,null,{default:A(()=>[Os]),_:1})],8,Ms)]))}};var Ns=j(Ds,[["__scopeId","data-v-0af9ee72"]]);const Ps={key:0,class:"activityScreenTitle"},js={props:{screenindex:{type:Number},screen:{type:Object,required:!0}},setup(a){const o=a,s=b("view"),t=M(),l=b("statusFile"),i=R(()=>({})),c=()=>{l.value.step++},_=C=>s.value?!0:o.screen.steps?l.value.step==C:!0;return oe(()=>l.value.step,(C,h)=>{t.value.$el.scrollTop>0&&(t.value.$el.scrollTop=0)}),(C,h)=>{const k=ae("perfect-scrollbar");return e(),r("div",{class:N(["activityScreen",u(s)?"desplegado":""]),style:G(u(i))},[u(s)?(e(),r("div",Ps,S(a.screen.title),1)):g("",!0),L(k,{ref_key:"scroll",ref:t},{default:A(()=>[a.screen.end?W((e(),w(Ls,{key:1},null,512)),[[K,a.screen.end]]):(e(!0),r(f,{key:0},O(a.screen.blocks,(m,x)=>(e(),w(V,{name:"slide"},{default:A(()=>[W(L(Zt,{block:m,onStepNext:c,onScreenNext:h[0]||(h[0]=$=>C.$emit("screenNext",$)),blockid:a.screenindex+"-"+x},null,8,["block","blockid"]),[[K,_(x)]])]),_:2},1024))),256))]),_:1},512),a.screen.steps&&!u(s)?(e(),w(Ns,{key:1,steps:a.screen.blocks.length},null,8,["steps"])):g("",!0)],6)}}};var Hs=j(js,[["__scopeId","data-v-3104b0ab"]]);const Es={setup(a){const o=b("view"),s=b("activityFile"),t=b("statusFile"),l=c=>{t.value.step=0,t.value.screen+=c},i=c=>o.value?!0:c==t.value.screen;return(c,_)=>(e(),w(V,{name:"zoom"},{default:A(()=>[n("section",{class:N(["Activity",u(o)?"desplegado":""])},[(e(!0),r(f,null,O(u(s).screens,(C,h)=>W((e(),w(Hs,{key:h,screen:C,onScreenNext:l,screenindex:h},null,8,["screen","screenindex"])),[[K,i(h)]])),128))],2)]),_:1}))}};const Bs={setup(a){const o=b("activityFile"),s=b("statusFile"),t=l=>{s.value.state=l};return(l,i)=>u(o)&&u(s)?(e(),r(f,{key:0},[u(s).state=="@intro"?(e(),w(Te,{key:0,onStart:i[0]||(i[0]=c=>t("@activity"))})):u(s).state=="@activity"?(e(),r(f,{key:1},[L(gt),L(Es)],64)):g("",!0)],64)):g("",!0)}};function qs(a){var o=_e.generate(a||"-");const s=o.toDataUrl();var t=document.createElement("style");t.type="text/css",t.innerHTML="#app {background-image: "+s+";}",document.getElementsByTagName("head")[0].appendChild(t)}var Vs={buildBG:qs};const J=["color: #446699","background: #ddff99","font-size: 9px","padding: 2px 5px","border-radius: 4px"].join(";"),Rs=he();H();var D=ve(Bs);D.config.globalProperties.emitter=Rs;D.use(pe);D.use(fe);gsap.registerPlugin(Draggable);D.provide("view",M(!1));Gs();async function Gs(){const a=window.location.search,o=new URLSearchParams(a),s=o.get("test");s!=null?(console.log("%c%s",J,"::TestMode"),D.provide("test",!0)):D.provide("test",!1);const t=o.get("oda");if(t)try{const i=U(t+"_"),c=await ge.get("./odas/"+t+"/oda.json"),_=c.data;D.provide("activityFile",_),Vs.buildBG(c.data.id);const h=M({state:"@intro",screen:0,step:0,answers:{},result:{}});D.provide("statusFile",h);const k=M({total:0,oks:0,errors:0,oksPercentage:0,errorsPercentage:0});D.provide("resultsFile",k),D.mount("#app");const m=i.getStorageSync("status");m&&(h.value=JSON.parse(Q.atob(m)),console.log("%c%s",J,"::LoadedData"));const x=o.get("status");x&&(h.value=JSON.parse(Q.atob(x)),console.log("%c%s",J,"::UrlData")),oe(()=>h,($,y)=>{const z=Q.btoa(JSON.stringify($.value));i.setStorageSync("status",z)},{deep:!0}),document.title=_.id+" | "+_.title,s&&(document.title="::TEST:: "+_.id+" | "+_.title)}catch(i){alert("Ocurri\xF3 un error al cargar la ODA"),console.log("%c%s",J,"::Error: "+i)}else{var l=document.getElementById("app");l.innerHTML='<div class="erroroda">ODA NO ENCONTRADA</div>'}}window.addEventListener("resize",function(){window.innerWidth<=600&&(console.log(D.config),D.config.globalProperties.emitter.emit("sidebarmini"))});
