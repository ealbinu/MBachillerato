import{i as $,r as D,l as de,o as e,c as x,w as z,T as V,a as r,b as o,t as w,u,F as p,d as f,e as se,n as F,f as C,g as T,h as H,j as J,k as G,p as ae,m as ne,q as oe,s as N,v as K,_ as Q,x as le,y as X,z as Y,G as _e,A as ve,V as pe,B as fe,C as ge,D as Z,E as he}from"./vendor.2e784223.js";const ye=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(n){if(n.ep)return;n.ep=!0;const c=t(n);fetch(n.href,c)}};ye();const ke={class:"container text-center"},be={class:"description my-2"},me={class:"my-2"},$e=o("hr",null,null,-1),Se=o("h4",{class:"my-1"},"Aprendizajes esperados",-1),we={class:"mb-2"},xe=o("h4",{class:"my-1"},"Contenido central",-1),Le={class:"mb-2"},Ce=["data-animation-path","data-name"],Te={emits:["start"],setup(a,{emit:l}){const t=$("activityFile");$("statusFile");const s=D(),n=D(!0),c=()=>{n.value=!1},i=()=>{l("start")};return de.searchAnimations(),(g,m)=>(e(),x(V,{name:"zoom",onAfterLeave:i},{default:z(()=>[n.value?(e(),r("div",{key:0,class:"dialog intro",ref_key:"introContainer",ref:s},[o("div",ke,[o("div",be,[o("h1",me,w(u(t).title),1),o("p",null,w(u(t).asignatura),1),$e,Se,o("p",we,w(u(t).aprendizajes),1),u(t).contenidocentral?(e(),r(p,{key:0},[xe,o("p",Le,w(u(t).contenidocentral),1)],64)):f("",!0)]),o("button",{class:"important",onClick:c},"Comenzar")]),o("div",{class:"lottie","data-animation-path":"odas/animations/intro_"+u(t).materia+".json","data-anim-loop":"true","data-name":"intro_"+u(t).materia},null,8,Ce)],512)):f("",!0)]),_:1}))}},Ae={class:"material-icons-two-tone"},P={props:{},setup(a){return(l,t)=>(e(),r("div",Ae,[se(l.$slots,"default")]))}};var E=(a,l)=>{const t=a.__vccOpts||a;for(const[s,n]of l)t[s]=n;return t};const ze=["innerHTML"],Me={key:0,class:"dialog"},De=T("close"),Oe={class:"ma-1"},Ie={props:{label:String,classinit:Object},setup(a){const l=D(!1),t=()=>{l.value=!0},s=()=>{l.value=!1};return(n,c)=>(e(),r(p,null,[o("button",{onClick:t,innerHTML:a.label,class:F(a.classinit)},null,10,ze),C(V,{name:"zoom"},{default:z(()=>[l.value?(e(),r("div",Me,[o("button",{class:"close",onClick:s},[C(P,null,{default:z(()=>[De]),_:1})]),o("div",Oe,[se(n.$slots,"default",{},void 0,!0)])])):f("",!0)]),_:3})],64))}};var re=E(Ie,[["__scopeId","data-v-16797cfb"]]);const Ne=o("hr",null,null,-1),Fe={class:"area row"},Pe=T("Mostrar pantallas"),je=T("Cerrar pantallas"),Ee={props:{},setup(a){const l=H(),t=()=>{l.appContext.config.globalProperties.emitter.emit("solve")},s=$("test"),n=$("view"),c=()=>{n.value=!n.value,console.log(n.value)};return(i,g)=>u(s)?(e(),r(p,{key:0},[Ne,o("div",{class:"area row mb-1"},[o("button",{class:"test",onClick:t},"Resolver todo")]),o("div",Fe,[o("button",{class:"test",onClick:c},[u(n)?(e(),r(p,{key:1},[je],64)):(e(),r(p,{key:0},[Pe],64))])])],64)):f("",!0)}};const He=a=>(ae("data-v-5e37cb7c"),a=a(),ne(),a),Be={class:"area"},Re=T("donut_large"),qe={class:"label"},Ve={class:"progreso"},Je=He(()=>o("hr",null,null,-1)),Ge={props:{},setup(a){const l=$("statusFile"),t=J(()=>{var s=l.value.answers,n={total:0,unanswered:0};return s&&(n.total=Object.keys(s).length,Object.keys(s).forEach(function(c){s[c],s[c]==null&&n.unanswered++})),n});return(s,n)=>(e(),r("div",Be,[o("h2",null,[C(P,null,{default:z(()=>[Re]),_:1}),o("span",qe,"\xA0Progreso "+w(u(t).total-u(t).unanswered)+" /"+w(u(t).total),1)]),o("div",Ve,[o("div",{class:"bar",style:G("width:"+Math.round((u(t).total-u(t).unanswered)/u(t).total*100)+"%")},null,4)]),Je]))}};var Ue=E(Ge,[["__scopeId","data-v-5e37cb7c"]]);const We={key:0,class:"area"},Ke=T("auto_awesome"),Qe={class:"label"},Xe={props:{},setup(a){const l=$("statusFile"),t=$("resultsFile"),s=()=>{const n=t.value.oksPercentage;var c="ok1";switch(!0){case(n<=100&&n>75):c="ok4";break;case(n<=75&&n>50):c="ok3";break;case(n<=50&&n>25):c="ok2";break}return c};return(n,c)=>u(l).finalize?(e(),r("div",We,[o("h2",{class:F(["puntaje",s()])},[C(P,null,{default:z(()=>[Ke]),_:1}),o("span",Qe,"\xA0Puntaje: "+w(u(t).oksPercentage)+"%",1)],2)])):f("",!0)}};var Ye=E(Xe,[["__scopeId","data-v-f0824b86"]]);const Ze=T("navigate_before"),et=T("navigate_next"),tt={class:"area"},st=o("hr",null,null,-1),at={class:"area row vertical extrainfo"},nt={class:"text-center"},ot=o("h1",{class:"main mb-1"},"Aprendizajes esperados",-1),lt={class:"main"},rt={class:"text-center"},ct=o("h1",{class:"main mb-1"},"Contenido central",-1),it={class:"main"},ut=o("hr",null,null,-1),dt={class:"area pantallas"},_t=["onClick"],vt={class:"label"},pt=o("hr",null,null,-1),ft=o("hr",null,null,-1),gt={setup(a){const l=$("blocked"),t=$("activityFile"),s=$("statusFile"),n=D(!0),c=H(),i=m=>{s.value.step=0,s.value.screen=m},g=()=>{K(t.id+"_").removeStorageSync("status"),location.reload()};return c.appContext.config.globalProperties.emitter.on("sidebarmini",m=>{n.value=!1}),(m,y)=>{const O=oe("perfect-scrollbar");return e(),x(V,{name:"zoom"},{default:z(()=>[o("aside",{class:F(["ActivitySidebar",[n.value?"":"mini"]])},[o("div",{class:"openclosebtn",onClick:y[0]||(y[0]=S=>n.value=!n.value)},[n.value?(e(),x(P,{key:0},{default:z(()=>[Ze]),_:1})):(e(),x(P,{key:1},{default:z(()=>[et]),_:1}))]),C(O,{class:"container"},{default:z(()=>[o("div",tt,[o("h1",null,w(u(t).title),1)]),st,o("div",at,[C(re,{label:"Aprendizajes esperados",classinit:["mb-1"]},{default:z(()=>[o("div",nt,[ot,o("div",lt,w(u(t).aprendizajes),1)])]),_:1}),u(t).contenidocentral?(e(),x(re,{key:0,label:"Contenido central"},{default:z(()=>[o("div",rt,[ct,o("div",it,w(u(t).contenidocentral),1)])]),_:1})):f("",!0)]),ut,o("div",dt,[o("ul",null,[(e(!0),r(p,null,N(u(t).screens,(S,k)=>(e(),r("li",{class:F(["screenItem",k==u(s).screen?"active":""]),onClick:A=>i(k)},[C(P,{class:F(k==u(s).screen?"active":"")},{default:z(()=>[T(w(S.icon),1)]),_:2},1032,["class"]),o("span",vt,"\xA0"+w(S.title),1)],10,_t))),256))])]),pt,C(Ue),C(Ye),C(Ee),u(l)?f("",!0):(e(),r(p,{key:0},[ft,o("div",{class:"area row"},[o("button",{onClick:g},"Reiniciar")])],64))]),_:1})],2)]),_:1})}}};const ht=["innerHTML"],yt=["innerHTML"],B={props:{data:Object},setup(a){const l=a,t=J(()=>({"--fontSize":l.data.size||"1rem"})),s=n=>window.MathJax.tex2svg(n).getElementsByTagName("svg")[0].outerHTML;return(n,c)=>a.data.block?(e(),r("div",{key:0,class:"blockmathCont",style:G(u(t)),innerHTML:s(a.data.math)},null,12,ht)):(e(),r("span",{key:1,class:"blockmathCont",style:G(u(t)),innerHTML:s(a.data.math)},null,12,yt))}};const ce={props:{},setup(a,{emit:l}){const t=$("test"),s=()=>{l("solve")};return(n,c)=>u(t)?(e(),r("button",{key:0,class:"solveModule test",onClick:s},"Resolver")):f("",!0)}};const kt=["id"],bt={key:0,class:"drops dropsLeft"},mt=["data"],$t=["innerHTML"],St={class:"drags"},wt=["data","data-index"],xt=T("pan_tool"),Lt=["innerHTML"],Ct={key:1,class:"drops dropsRight"},Tt=["data"],At=["innerHTML"],zt={props:{blockid:String,data:Object},setup(a){const l=a,t=$("statusFile"),s=H(),n=D(),c=D();var i="#block-"+l.blockid,g=i+" .drag",m=i+" .drop",y=null,O;const S=()=>{y=document.querySelectorAll(i+" .drop"),O=Draggable.create(g,{type:"x,y",bounds:i,zIndexBoost:!1,onDrag:function(h){k(h,this)},onClick:function(h){A(h,this)},onDragEnd:function(h){_(h,this)}})},k=(h,b)=>{for(var d=0;d<y.length;d++){if(b.hitTest(y[d],"40%"))return b.target.classList.add("hover"),y[d].classList.add("hover"),!1;b.target.classList.remove("hover"),y[d].classList.remove("hover")}},A=(h,b)=>{if(n.value!=null)return!1;var d=document.querySelector(i+" .drags");b.target.parentElement!=d&&(d.append(b.target),TweenLite.to(b.target,.2,{x:0,y:0}),L())},_=(h,b)=>{for(var d=!1,M=0;M<y.length;M++)b.hitTest(y[M],"40%")&&(d=!0,y[M].append(b.target),TweenLite.to(b.target,.2,{x:0,y:0}),b.target.classList.remove("hover"),y[M].classList.remove("hover"),L());d||TweenLite.to(b.target,.2,{x:0,y:0})},v=h=>{var b=btoa(h);return b},L=()=>{for(var h=document.querySelectorAll(g),b=[],d=0;d<h.length;d++){var M=h[d].getAttribute("data-index"),q=h[d].parentElement.getAttribute("data");b.push([M,q])}t.value.answers[l.blockid]=b},j=setInterval(function(){Draggable&&(S(),U())},500),U=()=>{clearInterval(j),W()},W=()=>{if(t.value.answers||(t.value.answers={}),t.value.answers[l.blockid]){var h=t.value.answers[l.blockid];for(var b in h){var d=h[b];if(d[1]){var M=document.querySelector(g+'[data-index="'+d[0]+'"]'),q=document.querySelector(m+"[data="+d[1]+"]");q.append(M)}}}else t.value.answers[l.blockid]=null;t.value.finalize&&te()},ee=()=>{for(var h=document.querySelectorAll(g),b=0;b<h.length;b++){var d=atob(h[b].getAttribute("data")),M=document.querySelector(m+"[data="+d+"]");M.append(h[b])}L()},te=()=>{for(var h=document.querySelectorAll(g),b=0,d=0;d<h.length;d++){O[d].disable();var M=atob(h[d].getAttribute("data")),q=h[d].parentElement.getAttribute("data");M==q?h[d].classList.add("isok"):(h[d].classList.add("notok"),b++)}b==0?n.value=!0:n.value=!1,t.value.result[l.blockid]=n.value};return s.appContext.config.globalProperties.emitter.on("solve",h=>{ee()}),s.appContext.config.globalProperties.emitter.on("finalize",h=>{te()}),(h,b)=>(e(),r(p,null,[o("div",{class:"blockDragDrop",id:"block-"+a.blockid,ref_key:"block",ref:c},[a.data.dropsLeft?(e(),r("section",bt,[(e(!0),r(p,null,N(a.data.dropsLeft,(d,M)=>(e(),r("div",{class:"drop",data:d[1]},[typeof d[0]=="string"?(e(),r("div",{key:0,class:"content",innerHTML:d[0]},null,8,$t)):d[0].math?(e(),x(B,{key:1,data:d[0]},null,8,["data"])):f("",!0)],8,mt))),256))])):f("",!0),o("section",St,[(e(!0),r(p,null,N(a.data.drags,(d,M)=>(e(),r("div",{class:"drag",data:v(d[1]),"data-index":M},[C(P,null,{default:z(()=>[xt]),_:1}),typeof d[0]=="string"?(e(),r("div",{key:0,class:"content",innerHTML:d[0]},null,8,Lt)):d[0].math?(e(),x(B,{key:1,data:d[0]},null,8,["data"])):f("",!0)],8,wt))),256))]),a.data.dropsRight?(e(),r("section",Ct,[(e(!0),r(p,null,N(a.data.dropsRight,(d,M)=>(e(),r("div",{class:"drop",data:d[1]},[typeof d[0]=="string"?(e(),r("div",{key:0,class:"content",innerHTML:d[0]},null,8,At)):d[0].math?(e(),x(B,{key:1,data:d[0]},null,8,["data"])):f("",!0)],8,Tt))),256))])):f("",!0)],8,kt),C(ce,{onSolve:ee})],64))}};var Mt=E(zt,[["__scopeId","data-v-7807bcf4"]]);const Dt=["id"],Ot=["onClick"],It=T("touch_app"),Nt={class:"option-letter"},Ft=["innerHTML"],Pt={props:{blockid:String,data:Object},setup(a){const l=a,t=D(),s=$("statusFile"),n=H(),c=D(),i=D([]);var g=D(!0);const m=_=>"abcdefghijk"[_],y=()=>{for(var _ in l.data.options)l.data.options,i.value[_]=!1;O(),s.value.answers||(s.value.answers={}),s.value.answers[l.blockid]?i.value=s.value.answers[l.blockid]:s.value.answers[l.blockid]=null},O=()=>{var _=0;l.data.options.forEach(v=>{v[1]&&(_+=1)}),_>1&&(g.value=!1)};y();const S=_=>{if(s.value.finalize)return!1;if(g.value){for(var v in i.value)i.value[v]=!1;i.value[_]=!0}else i.value[_]=!i.value[_];s.value.answers[l.blockid]=i.value},k=()=>{for(var _=l.data.options,v=0;v<_.length;v++)_[v][1]?i.value[v]=!0:i.value[v]=!1;s.value.answers[l.blockid]=i.value},A=()=>{for(var _=l.data.options,v=[],L=0;L<_.length;L++)v.push(_[L][1]);Q.isEqual(v,i.value)?(t.value=!0,c.value.classList.add("isok")):(t.value=!1,c.value.classList.add("notok")),s.value.result[l.blockid]=t.value};return n.appContext.config.globalProperties.emitter.on("solve",_=>{k()}),n.appContext.config.globalProperties.emitter.on("finalize",_=>{A()}),(_,v)=>(e(),r(p,null,[o("div",{class:"blockSelect",id:"block-"+a.blockid,ref_key:"block",ref:c},[(e(!0),r(p,null,N(a.data.options,(L,j)=>(e(),r("div",{class:F(["blockSelectOption",i.value[j]?"active":""]),onClick:U=>S(j)},[C(P,null,{default:z(()=>[It]),_:1}),o("div",Nt,w(m(j)),1),typeof L[0]=="string"?(e(),r("div",{key:0,class:"content",innerHTML:L[0]},null,8,Ft)):L[0].math?(e(),x(B,{key:1,data:L[0]},null,8,["data"])):f("",!0)],10,Ot))),256))],8,Dt),C(ce,{onSolve:k})],64))}};const jt=["src"],Et={props:{data:{type:Object}},setup(a){const l=$("activityFile");return(t,s)=>(e(),r("img",{class:"blockImg",src:"odas/"+u(l).id+"/"+a.data.img},null,8,jt))}};var ie=E(Et,[["__scopeId","data-v-1def06aa"]]);const Ht=["title"],Bt=["innerHTML"],Rt=T("contact_support"),qt={key:2,class:"termDefinition"},Vt={key:0},Jt={key:0},Gt={props:{data:{type:Object}},setup(a){const l=D(!1),t=()=>{l.value=!l.value};return(s,n)=>(e(),r("div",{class:"blockTerm",title:a.data.d,onClick:t},[a.data.t?(e(),r("span",{key:0,innerHTML:a.data.t},null,8,Bt)):f("",!0),a.data.i?(e(),x(ie,{key:1,data:{img:a.data.i}},null,8,["data"])):f("",!0),C(P,null,{default:z(()=>[Rt]),_:1}),l.value?(e(),r("div",qt,[typeof a.data.d=="string"?(e(),r("p",Vt,w(a.data.d),1)):(e(!0),r(p,{key:1},N(a.data.d,(c,i)=>(e(),r(p,null,[typeof c=="string"?(e(),r("p",Jt,w(c),1)):c.math?(e(),x(B,{key:1,data:c},null,8,["data"])):f("",!0)],64))),256))])):f("",!0)],8,Ht))}};var Ut=E(Gt,[["__scopeId","data-v-fdef45ae"]]);const Wt={class:"blockContainer"},Kt=["innerHTML"],Qt={key:1},Xt=["innerHTML"],Yt={key:0,class:"text-center my-2"},Zt={props:{block:Object,blockid:String},setup(a){const l=a,t=$("view"),s=J(()=>({"--block-width":l.block.width||"100%"}));return(n,c)=>a.block.content.length?(e(),r("div",{key:0,class:"block",style:G(u(s))},[o("div",Wt,[(e(!0),r(p,null,N(a.block.content,(i,g)=>(e(),r(p,null,[typeof i=="string"?(e(),r("span",{key:0,innerHTML:i},null,8,Kt)):i.br?(e(),r("br",Qt)):i.text?(e(),r("div",{key:2,innerHTML:i.text,class:F(i.class||"my-2")},null,10,Xt)):i.term?(e(),x(Ut,{key:3,data:i},null,8,["data"])):i.img?(e(),x(ie,{key:4,data:i},null,8,["data"])):i.math?(e(),x(B,{key:5,data:i},null,8,["data"])):f("",!0),i.dragdrop?(e(),x(Mt,{key:6,data:i,blockid:a.blockid+"-"+g},null,8,["data","blockid"])):f("",!0),i.select?(e(),x(Pt,{key:7,data:i,blockid:a.blockid+"-"+g},null,8,["data","blockid"])):f("",!0)],64))),256))]),u(t)?f("",!0):(e(),r("div",Yt,[a.block.buttonNextStep?(e(),r("button",{key:0,onClick:c[0]||(c[0]=i=>n.$emit("stepNext"))},w(a.block.buttonNextStep),1)):f("",!0),a.block.buttonNextScreen?(e(),r("button",{key:1,class:"important",onClick:c[1]||(c[1]=i=>n.$emit("screenNext",1))},w(a.block.buttonNextScreen),1)):f("",!0)]))],4)):f("",!0)}},es={class:"block ScreenBlockEnd"},ts={class:"text-center"},ss={class:"my-3"},as=T("De un total de "),ns=T(" tienes "),os={class:"high"},ls=T("."),rs=["onClick"],cs=o("div",{class:"my-3"},"\xBFDeseas finalizar?",-1),is=o("hr",null,null,-1),us={key:1,class:"my-3"},ds=o("span",null,[T("Has contestado todas las preguntas. Verifica tus respuestas y da clic en "),o("strong",null,'"finalizar"'),T(".")],-1),_s=[ds],vs={key:2,class:"my-3"},ps=o("span",null,"Muy bien. Has llegado al final de la actividad.",-1),fs=[ps],gs=o("div",{class:"my-3"},[o("strong",null,"Actividad finalizada.")],-1),hs={class:"my-3"},ys=T("De un total de "),ks=T(" obtuviste un "),bs={class:"high"},ms=T("."),$s=o("div",{class:"my-3"},"A continuaci\xF3n podr\xE1s ver un res\xFAmen de tus resultados:",-1),Ss={class:"row wrap"},ws=["onClick"],xs=o("div",{class:"my-3"},"Puedes ver tus resultados individuales o repasar los contenidos navegando con el men\xFA de la izquierda.",-1),Ls=o("div",{class:"my-3"},"Tambi\xE9n puedes reiniciar la actividad:",-1),Cs={props:{},setup(a){const l=$("activityFile"),t=$("statusFile"),s=$("resultsFile"),n=H(),c=$("blocked"),i=S=>{var k=S.split("-"),A=k[0],_=k[1],v=l.screens[A].title;return v+" > Bloque "+_},g=S=>{var k=S.split("-"),A=k[0],_=k[1];t.value.screen=A*1,t.value.step=_*1},m=J(()=>{var S=t.value.answers,k={tot:"",total:0,unanswered:{},unansweredLength:0};if(S){k.total=Object.keys(S).length;var A={};Object.keys(S).forEach(function(_){var v=S[_];S[_]==null&&(A[_]=v,k.unansweredLength++)}),Q(A).keys().sort().each(function(_){k.unanswered[_]=A[_]})}return k}),y=()=>{t.value.finalize=!0,n.appContext.config.globalProperties.emitter.emit("finalize");for(var S in t.value.result)s.value.total++,t.value.result[S]?s.value.oks++:s.value.errors++;s.value.total&&(s.value.oksPercentage=Math.round(s.value.oks*100/s.value.total),s.value.errorsPercentage=100-s.value.oksPercentage)};t.value.finalize&&setTimeout(function(){y()},1e3);const O=()=>{console.log(l.id),K(l.id+"_").removeStorageSync("status"),location.reload()};return(S,k)=>(e(),r("div",es,[o("div",ts,[u(t).finalize?(e(),r(p,{key:1},[gs,u(s).total>0?(e(),r(p,{key:0},[o("div",hs,[ys,o("strong",null,w(u(s).total)+" preguntas",1),ks,o("strong",bs,w(u(s).oksPercentage)+"% de aciertos",1),ms]),u(s).errors>0?(e(),r(p,{key:0},[$s,o("div",Ss,[(e(!0),r(p,null,N(u(t).result,(A,_)=>(e(),r("div",{class:F(["px-3 bg-light ma-1 floatcard",A?"isok":"notok"])},[o("button",{class:"bg-clear ma-1",onClick:v=>g(_)},w(i(_)),9,ws)],2))),256))])],64)):f("",!0)],64)):(e(),r(p,{key:1},[],64)),xs,u(c)?f("",!0):(e(),r(p,{key:2},[Ls,o("button",{class:"important",onClick:O},"Reiniciar")],64))],64)):(e(),r(p,{key:0},[u(m).unansweredLength?(e(),r(p,{key:0},[o("div",ss,[o("span",null,[as,o("strong",null,w(u(m).total)+" preguntas",1),ns,o("strong",os,w(u(m).unansweredLength)+" sin contestar",1),ls])]),(e(!0),r(p,null,N(u(m).unanswered,(A,_)=>(e(),r("button",{class:"high ma-1",onClick:v=>g(_)},w(i(_)),9,rs))),256)),u(c)?f("",!0):(e(),r(p,{key:0},[cs,is,o("div",{class:"my-4"},[o("button",{class:"important",onClick:y},"Finalizar")])],64))],64)):u(m).total>0?(e(),r("div",us,_s)):(e(),r("div",vs,fs))],64))])]))}};const ue=a=>(ae("data-v-0af9ee72"),a=a(),ne(),a),Ts={class:"stepsNavigation"},As=["disabled"],zs=T("navigate_before"),Ms=ue(()=>o("span",{class:"txt"},"Anterior",-1)),Ds=["disabled"],Os=ue(()=>o("span",{class:"txt"},"Siguiente",-1)),Is=T("navigate_next"),Ns={props:{steps:{type:Number,required:!0}},setup(a,{emit:l}){const t=a,s=$("statusFile");D(0);const n=c=>{(c==-1&&s.value.step>0||c==1&&s.value.step<t.steps-1)&&(s.value.step+=c,l("stepChanged"))};return(c,i)=>(e(),r("div",Ts,[o("button",{onClick:i[0]||(i[0]=g=>n(-1)),disabled:u(s).step==0},[C(P,null,{default:z(()=>[zs]),_:1}),Ms],8,As),(e(!0),r(p,null,N(a.steps,(g,m)=>(e(),r("div",{class:F(["step",[u(s).step==m?"active":"non-active"]])},null,2))),256)),o("button",{onClick:i[1]||(i[1]=g=>n(1)),disabled:u(s).step==a.steps-1},[Os,C(P,null,{default:z(()=>[Is]),_:1})],8,Ds)]))}};var Fs=E(Ns,[["__scopeId","data-v-0af9ee72"]]);const Ps={key:0,class:"activityScreenTitle"},js={props:{screenindex:{type:Number},screen:{type:Object,required:!0}},setup(a){const l=a,t=$("view"),s=D(),n=$("statusFile"),c=J(()=>({})),i=()=>{n.value.step++},g=m=>t.value?!0:l.screen.steps?n.value.step==m:!0;return le(()=>n.value.step,(m,y)=>{s.value.$el.scrollTop>0&&(s.value.$el.scrollTop=0)}),(m,y)=>{const O=oe("perfect-scrollbar");return e(),r("div",{class:F(["activityScreen",u(t)?"desplegado":""]),style:G(u(c))},[u(t)?(e(),r("div",Ps,w(a.screen.title),1)):f("",!0),C(O,{ref_key:"scroll",ref:s},{default:z(()=>[a.screen.end?X((e(),x(Cs,{key:1},null,512)),[[Y,a.screen.end]]):(e(!0),r(p,{key:0},N(a.screen.blocks,(S,k)=>(e(),x(V,{name:"slide"},{default:z(()=>[X(C(Zt,{block:S,onStepNext:i,onScreenNext:y[0]||(y[0]=A=>m.$emit("screenNext",A)),blockid:a.screenindex+"-"+k},null,8,["block","blockid"]),[[Y,g(k)]])]),_:2},1024))),256))]),_:1},512),a.screen.steps&&!u(t)?(e(),x(Fs,{key:1,steps:a.screen.blocks.length},null,8,["steps"])):f("",!0)],6)}}};var Es=E(js,[["__scopeId","data-v-3104b0ab"]]);const Hs={setup(a){const l=$("view"),t=$("activityFile"),s=$("statusFile"),n=i=>{s.value.step=0,s.value.screen+=i},c=i=>l.value?!0:i==s.value.screen;return(i,g)=>(e(),x(V,{name:"zoom"},{default:z(()=>[o("section",{class:F(["Activity",u(l)?"desplegado":""])},[(e(!0),r(p,null,N(u(t).screens,(m,y)=>X((e(),x(Es,{key:y,screen:m,onScreenNext:n,screenindex:y},null,8,["screen","screenindex"])),[[Y,c(y)]])),128))],2)]),_:1}))}};const Bs={setup(a){const l=$("activityFile"),t=$("statusFile"),s=n=>{t.value.state=n};return(n,c)=>u(l)&&u(t)?(e(),r(p,{key:0},[u(t).state=="@intro"?(e(),x(Te,{key:0,onStart:c[0]||(c[0]=i=>s("@activity"))})):u(t).state=="@activity"?(e(),r(p,{key:1},[C(gt),C(Hs)],64)):f("",!0)],64)):f("",!0)}};function Rs(a){var l=_e.generate(a||"-");const t=l.toDataUrl();var s=document.createElement("style");s.type="text/css",s.innerHTML="#app {background-image: "+t+";}",document.getElementsByTagName("head")[0].appendChild(s)}var qs={buildBG:Rs};const R=["color: #446699","background: #ddff99","font-size: 9px","padding: 2px 5px","border-radius: 4px"].join(";"),Vs=he();H();var I=ve(Bs);I.config.globalProperties.emitter=Vs;I.use(pe);I.use(fe);gsap.registerPlugin(Draggable);I.provide("view",D(!1));Gs();function Js(a){try{JSON.parse(a)}catch{return!1}return!0}async function Gs(){const a=window.location.search,l=new URLSearchParams(a),t=l.get("test"),s=l.get("blocked"),n=l.get("oda"),c=l.get("status");t!=null?(console.log("%c%s",R,"::TestMode"),I.provide("test",!0)):I.provide("test",!1),s!=null?(console.log("%c%s",R,"::BLOCKED"),I.provide("blocked",!0)):I.provide("blocked",!1);const g=D({state:"@intro",screen:0,step:0,answers:{},result:{},finalize:!1}),m=D({total:0,oks:0,errors:0,oksPercentage:0,errorsPercentage:0});if(I.provide("resultsFile",m),n)try{const O=K(n+"_"),S=await ge.get("./odas/"+n+"/oda.json"),k=S.data;I.provide("activityFile",k),qs.buildBG(S.data.id),I.provide("statusFile",g),I.mount("#app");const A=O.getStorageSync("status");if(A){const v=Z.atob(A);if(!v)return!1;const L=JSON.parse(v);if(!L)return!1;g.value=L,console.log("%c%s",R,"::LoadedData")}if(c!=null&&c.length>4){const v=Z.atob(c);if(!v)return!1;if(Js(v)){const L=JSON.parse(v);if(!L)return!1;g.value=L,console.log("%c%s",R,"::UrlData")}else console.log("%c%s",R,"::WRONG UrlData")}const _=Q.throttle(function(v,L){const j=Z.btoa(JSON.stringify(v.value));O.setStorageSync("status",j);const U={status:j,results:g.value.finalize?m.value:null};var W=JSON.stringify(U);window.top.postMessage(W,"*")},2e3);le(()=>g,(v,L)=>{if(s!=null)return!1;_(v,L)},{deep:!0}),document.title=k.id+" | "+k.title,t&&(document.title="::TEST:: "+k.id+" | "+k.title)}catch(O){console.log("%c%s",R,"::Error: "+O);var y=document.getElementById("app");y.innerHTML='<div class="erroroda">ERROR DE CARGA</div>'}else{var y=document.getElementById("app");y.innerHTML='<div class="erroroda">ODA NO ENCONTRADA</div>'}}const Us=a=>{var l=a.data;if(typeof l=="string"){var t=JSON.parse(l);console.log("Message: ",t)}};window.addEventListener("message",Us,!1);window.addEventListener("resize",function(){window.innerWidth<=600&&I.config.globalProperties.emitter.emit("sidebarmini")});
