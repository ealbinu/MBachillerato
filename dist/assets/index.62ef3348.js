import{i as T,r as B,l as me,o as t,c as M,w as C,a,b as e,t as x,u,F as k,d as y,T as Y,p as ee,e as te,f as ve,n as q,g as w,h as v,j as ne,k as K,m as Z,q as X,s as ae,v as E,_ as oe,x as pe,y as F,z as se,A as H,B as ie,C as de,V as be,G as ye,D as $e,E as Se,H as we,I as Ce,J as ue,K as Te}from"./vendor.74d4fcf4.js";const xe=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(r){if(r.ep)return;r.ep=!0;const c=s(r);fetch(r.href,c)}};xe();var G=(n,o)=>{const s=n.__vccOpts||n;for(const[l,r]of o)s[l]=r;return s};const le=n=>(ee("data-v-0f645ab4"),n=n(),te(),n),Le={class:"container text-center"},Ae={class:"description my-2"},Ie={class:"my-2"},Oe=le(()=>e("hr",null,null,-1)),ze=le(()=>e("h4",{class:"my-1"},"Aprendizajes esperados",-1)),De={class:"mb-2"},Me=le(()=>e("h4",{class:"my-1"},"Contenido central",-1)),Ne={class:"mb-2"},je=["data-animation-path","data-name"],Fe={emits:["start"],setup(n,{emit:o}){const s=T("activityFile");T("statusFile");const l=B(),r=B(!0),c=()=>{r.value=!1},d=()=>{o("start")};return me.searchAnimations(),(p,i)=>(t(),M(Y,{name:"zoom",onAfterLeave:d},{default:C(()=>[r.value?(t(),a("div",{key:0,class:"dialog intro",ref_key:"introContainer",ref:l},[e("div",Le,[e("div",Ae,[e("h1",Ie,x(u(s).title),1),e("p",null,x(u(s).asignatura),1),Oe,ze,e("p",De,x(u(s).aprendizajes),1),u(s).contenidocentral?(t(),a(k,{key:0},[Me,e("p",Ne,x(u(s).contenidocentral),1)],64)):y("",!0)]),e("button",{class:"important",onClick:c},"Comenzar")]),e("div",{class:"lottie","data-animation-path":"odas/animations/intro_"+u(s).materia+".json","data-anim-loop":"true","data-name":"intro_"+u(s).materia},null,8,je)],512)):y("",!0)]),_:1}))}};var Ve=G(Fe,[["__scopeId","data-v-0f645ab4"]]);const Be={class:"material-icons-two-tone"},V={props:{},setup(n){return(o,s)=>(t(),a("div",Be,[ve(o.$slots,"default")]))}};const Pe=["innerHTML"],Ee={key:0,class:"dialog"},Ue=v("close"),He={class:"ma-1"},Je={props:{label:String,classinit:Object},setup(n){const o=B(!1),s=()=>{o.value=!0},l=()=>{o.value=!1};return(r,c)=>(t(),a(k,null,[e("button",{onClick:s,innerHTML:n.label,class:q(n.classinit)},null,10,Pe),w(Y,{name:"zoom"},{default:C(()=>[o.value?(t(),a("div",Ee,[e("button",{class:"close",onClick:l},[w(V,null,{default:C(()=>[Ue]),_:1})]),e("div",He,[ve(r.$slots,"default",{},void 0,!0)])])):y("",!0)]),_:3})],64))}};var _e=G(Je,[["__scopeId","data-v-16797cfb"]]);const Re=e("hr",null,null,-1),qe={class:"area row"},Ge=v("Mostrar pantallas"),We=v("Cerrar pantallas"),Ke=e("hr",null,null,-1),Qe={props:{},setup(n){const o=K(),s=()=>{o.appContext.config.globalProperties.emitter.emit("solve")},l=T("test"),r=T("view"),c=()=>{r.value=!r.value,console.log(r.value)},d=()=>{ne(Activity.id+"_").removeStorageSync("status"),location.reload()};return(p,i)=>u(l)?(t(),a(k,{key:0},[Re,e("div",{class:"area row mb-1"},[e("button",{class:"test",onClick:s},"Resolver todo")]),e("div",qe,[e("button",{class:"test",onClick:c},[u(r)?(t(),a(k,{key:1},[We],64)):(t(),a(k,{key:0},[Ge],64))])]),Ke,e("div",{class:"area row"},[e("button",{onClick:d},"Reiniciar")])],64)):y("",!0)}};const Xe=n=>(ee("data-v-5e37cb7c"),n=n(),te(),n),Ye={class:"area"},Ze=v("donut_large"),et={class:"label"},tt={class:"progreso"},st=Xe(()=>e("hr",null,null,-1)),nt={props:{},setup(n){const o=T("statusFile"),s=Z(()=>{var l=o.value.answers,r={total:0,unanswered:0};return l&&(r.total=Object.keys(l).length,Object.keys(l).forEach(function(c){l[c],l[c]==null&&r.unanswered++})),r});return(l,r)=>(t(),a("div",Ye,[e("h2",null,[w(V,null,{default:C(()=>[Ze]),_:1}),e("span",et,"\xA0Progreso "+x(u(s).total-u(s).unanswered)+" /"+x(u(s).total),1)]),e("div",tt,[e("div",{class:"bar",style:X("width:"+Math.round((u(s).total-u(s).unanswered)/u(s).total*100)+"%")},null,4)]),st]))}};var at=G(nt,[["__scopeId","data-v-5e37cb7c"]]);const ot={key:0,class:"area"},lt=v("auto_awesome"),rt={class:"label"},ct={props:{},setup(n){const o=T("statusFile"),s=T("resultsFile"),l=()=>{const r=s.value.oksPercentage;var c="ok1";switch(!0){case(r<=100&&r>75):c="ok4";break;case(r<=75&&r>50):c="ok3";break;case(r<=50&&r>25):c="ok2";break}return c};return(r,c)=>u(o).finalize?(t(),a("div",ot,[e("h2",{class:q(["puntaje",l()])},[w(V,null,{default:C(()=>[lt]),_:1}),e("span",rt,"\xA0Puntaje: "+x(u(s).oksPercentage)+"%",1)],2)])):y("",!0)}};var it=G(ct,[["__scopeId","data-v-f0824b86"]]);const dt=v("navigate_before"),ut=v("navigate_next"),_t={class:"area"},vt=e("hr",null,null,-1),pt={class:"area row vertical extrainfo"},ht={class:"text-center"},ft=e("h1",{class:"main mb-1"},"Aprendizajes esperados",-1),gt={class:"main"},kt={class:"text-center"},mt=e("h1",{class:"main mb-1"},"Contenido central",-1),bt={class:"main"},yt=e("hr",null,null,-1),$t={class:"area pantallas"},St=["onClick"],wt={class:"label"},Ct=e("hr",null,null,-1),Tt={setup(n){T("blocked");const o=T("activityFile"),s=T("statusFile"),l=B(!0),r=K(),c=d=>{s.value.step=0,s.value.screen=d};return r.appContext.config.globalProperties.emitter.on("sidebarmini",d=>{l.value=!1}),(d,p)=>{const i=ae("perfect-scrollbar");return t(),M(Y,{name:"zoom"},{default:C(()=>[e("aside",{class:q(["ActivitySidebar",[l.value?"":"mini"]])},[e("div",{class:"openclosebtn",onClick:p[0]||(p[0]=I=>l.value=!l.value)},[l.value?(t(),M(V,{key:0},{default:C(()=>[dt]),_:1})):(t(),M(V,{key:1},{default:C(()=>[ut]),_:1}))]),w(i,{class:"container"},{default:C(()=>[e("div",_t,[e("h1",null,x(u(o).title),1)]),vt,e("div",pt,[w(_e,{label:"Aprendizajes esperados",classinit:["mb-1"]},{default:C(()=>[e("div",ht,[ft,e("div",gt,x(u(o).aprendizajes),1)])]),_:1}),u(o).contenidocentral?(t(),M(_e,{key:0,label:"Contenido central"},{default:C(()=>[e("div",kt,[mt,e("div",bt,x(u(o).contenidocentral),1)])]),_:1})):y("",!0)]),yt,e("div",$t,[e("ul",null,[(t(!0),a(k,null,E(u(o).screens,(I,L)=>(t(),a("li",{class:q(["screenItem",L==u(s).screen?"active":""]),onClick:$=>c(L)},[w(V,{class:q(L==u(s).screen?"active":"")},{default:C(()=>[v(x(I.icon),1)]),_:2},1032,["class"]),e("span",wt,"\xA0"+x(I.title),1)],10,St))),256))])]),Ct,w(at),w(it),w(Qe)]),_:1})],2)]),_:1})}}};const xt=["innerHTML"],Lt=["innerHTML"],W={props:{data:Object},setup(n){const o=n,s=Z(()=>({"--fontSize":o.data.size||"1rem"})),l=r=>window.MathJax.tex2svg(r).getElementsByTagName("svg")[0].outerHTML;return(r,c)=>n.data.block?(t(),a("div",{key:0,class:"blockmathCont",style:X(u(s)),innerHTML:l(n.data.math)},null,12,xt)):(t(),a("span",{key:1,class:"blockmathCont",style:X(u(s)),innerHTML:l(n.data.math)},null,12,Lt))}};const he={props:{},setup(n,{emit:o}){const s=T("test"),l=()=>{o("solve")};return(r,c)=>u(s)?(t(),a("button",{key:0,class:"solveModule test",onClick:l},"Resolver")):y("",!0)}};const At=["id"],It={key:0,class:"drops dropsLeft"},Ot=["data"],zt=["innerHTML"],Dt={class:"drags"},Mt=["data","data-index"],Nt=v("pan_tool"),jt=["innerHTML"],Ft={key:1,class:"drops dropsRight"},Vt=["data"],Bt=["innerHTML"],Pt={props:{blockid:String,data:Object},setup(n){const o=n,s=T("statusFile"),l=T("blocked"),r=K(),c=B(),d=B();var p="#block-"+o.blockid,i=p+" .drag",I=p+" .drop",L=null,$;const N=()=>{if(L=document.querySelectorAll(p+" .drop"),l)return!1;$=Draggable.create(i,{type:"x,y",bounds:p,zIndexBoost:!1,onDrag:function(f){A(f,this)},onClick:function(f){O(f,this)},onDragEnd:function(f){m(f,this)}})},A=(f,h)=>{for(var _=0;_<L.length;_++){if(h.hitTest(L[_],"40%"))return h.target.classList.add("hover"),L[_].classList.add("hover"),!1;h.target.classList.remove("hover"),L[_].classList.remove("hover")}},O=(f,h)=>{if(c.value!=null)return!1;var _=document.querySelector(p+" .drags");h.target.parentElement!=_&&(_.append(h.target),TweenLite.to(h.target,.2,{x:0,y:0}),S())},m=(f,h)=>{for(var _=!1,j=0;j<L.length;j++)h.hitTest(L[j],"40%")&&(_=!0,L[j].append(h.target),TweenLite.to(h.target,.2,{x:0,y:0}),h.target.classList.remove("hover"),L[j].classList.remove("hover"),S());_||TweenLite.to(h.target,.2,{x:0,y:0})},z=f=>{var h=btoa(f);return h},S=()=>{for(var f=document.querySelectorAll(i),h=[],_=0;_<f.length;_++){var j=f[_].getAttribute("data-index"),R=f[_].parentElement.getAttribute("data");h.push([j,R])}s.value.answers[o.blockid]=h},g=setInterval(function(){Draggable&&(N(),J())},500),J=()=>{clearInterval(g),b()},b=()=>{if(s.value.answers||(s.value.answers={}),s.value.answers[o.blockid]){var f=s.value.answers[o.blockid];for(var h in f){var _=f[h];if(_[1]){var j=document.querySelector(i+'[data-index="'+_[0]+'"]'),R=document.querySelector(I+"[data="+_[1]+"]");R.append(j)}}}else s.value.answers[o.blockid]=null;s.value.finalize&&D()},U=()=>{for(var f=document.querySelectorAll(i),h=0;h<f.length;h++){var _=atob(f[h].getAttribute("data")),j=document.querySelector(I+"[data="+_+"]");j.append(f[h])}S()},D=()=>{for(var f=document.querySelectorAll(i),h=0,_=0;_<f.length;_++){$[_].disable();var j=atob(f[_].getAttribute("data")),R=f[_].parentElement.getAttribute("data");j==R?f[_].classList.add("isok"):(f[_].classList.add("notok"),h++)}h==0?c.value=!0:c.value=!1,s.value.result[o.blockid]=c.value};return r.appContext.config.globalProperties.emitter.on("solve",f=>{U()}),r.appContext.config.globalProperties.emitter.on("finalize",f=>{D()}),(f,h)=>(t(),a(k,null,[e("div",{class:"blockDragDrop",id:"block-"+n.blockid,ref_key:"block",ref:d},[n.data.dropsLeft?(t(),a("section",It,[(t(!0),a(k,null,E(n.data.dropsLeft,(_,j)=>(t(),a("div",{class:"drop",data:_[1]},[typeof _[0]=="string"?(t(),a("div",{key:0,class:"content",innerHTML:_[0]},null,8,zt)):_[0].math?(t(),M(W,{key:1,data:_[0]},null,8,["data"])):y("",!0)],8,Ot))),256))])):y("",!0),e("section",Dt,[(t(!0),a(k,null,E(n.data.drags,(_,j)=>(t(),a("div",{class:"drag",data:z(_[1]),"data-index":j},[w(V,null,{default:C(()=>[Nt]),_:1}),typeof _[0]=="string"?(t(),a("div",{key:0,class:"content",innerHTML:_[0]},null,8,jt)):_[0].math?(t(),M(W,{key:1,data:_[0]},null,8,["data"])):y("",!0)],8,Mt))),256))]),n.data.dropsRight?(t(),a("section",Ft,[(t(!0),a(k,null,E(n.data.dropsRight,(_,j)=>(t(),a("div",{class:"drop",data:_[1]},[typeof _[0]=="string"?(t(),a("div",{key:0,class:"content",innerHTML:_[0]},null,8,Bt)):_[0].math?(t(),M(W,{key:1,data:_[0]},null,8,["data"])):y("",!0)],8,Vt))),256))])):y("",!0)],8,At),w(he,{onSolve:U})],64))}};var Et=G(Pt,[["__scopeId","data-v-3f31024a"]]);const Ut=["id"],Ht=["onClick"],Jt=v("touch_app"),Rt={class:"option-letter"},qt=["innerHTML"],Gt={props:{blockid:String,data:Object},setup(n){const o=n,s=B(),l=T("statusFile"),r=T("blocked"),c=K(),d=B(),p=B([]);var i=B(!0);const I=m=>"abcdefghijk"[m],L=()=>{for(var m in o.data.options)o.data.options,p.value[m]=!1;$(),l.value.answers||(l.value.answers={}),l.value.answers[o.blockid]?p.value=l.value.answers[o.blockid]:l.value.answers[o.blockid]=null},$=()=>{var m=0;o.data.options.forEach(z=>{z[1]&&(m+=1)}),m>1&&(i.value=!1)};L();const N=m=>{if(r||l.value.finalize)return!1;if(i.value){for(var z in p.value)p.value[z]=!1;p.value[m]=!0}else p.value[m]=!p.value[m];l.value.answers[o.blockid]=p.value},A=()=>{for(var m=o.data.options,z=0;z<m.length;z++)m[z][1]?p.value[z]=!0:p.value[z]=!1;l.value.answers[o.blockid]=p.value},O=()=>{for(var m=o.data.options,z=[],S=0;S<m.length;S++)z.push(m[S][1]);oe.isEqual(z,p.value)?(s.value=!0,d.value.classList.add("isok")):(s.value=!1,d.value.classList.add("notok")),l.value.result[o.blockid]=s.value};return c.appContext.config.globalProperties.emitter.on("solve",m=>{A()}),c.appContext.config.globalProperties.emitter.on("finalize",m=>{O()}),(m,z)=>(t(),a(k,null,[e("div",{class:"blockSelect",id:"block-"+n.blockid,ref_key:"block",ref:d},[(t(!0),a(k,null,E(n.data.options,(S,g)=>(t(),a("div",{class:q(["blockSelectOption",p.value[g]?"active":""]),onClick:J=>N(g)},[w(V,null,{default:C(()=>[Jt]),_:1}),e("div",Rt,x(I(g)),1),typeof S[0]=="string"?(t(),a("div",{key:0,class:"content",innerHTML:S[0]},null,8,qt)):S[0].math?(t(),M(W,{key:1,data:S[0]},null,8,["data"])):y("",!0)],10,Ht))),256))],8,Ut),w(he,{onSolve:A})],64))}};const Wt=["src"],Kt={props:{data:{type:Object}},setup(n){const o=T("activityFile");return(s,l)=>(t(),a("img",{class:"blockImg",src:"odas/"+u(o).id+"/"+n.data.img},null,8,Wt))}};var fe=G(Kt,[["__scopeId","data-v-1def06aa"]]);const Qt=["title"],Xt=["innerHTML"],Yt=v("contact_support"),Zt={key:2,class:"termDefinition"},es={key:0},ts={key:0},ss={props:{data:{type:Object}},setup(n){const o=B(!1),s=()=>{o.value=!o.value};return(l,r)=>(t(),a("div",{class:"blockTerm",title:n.data.d,onClick:s},[n.data.t?(t(),a("span",{key:0,innerHTML:n.data.t},null,8,Xt)):y("",!0),n.data.i?(t(),M(fe,{key:1,data:{img:n.data.i}},null,8,["data"])):y("",!0),w(V,null,{default:C(()=>[Yt]),_:1}),o.value?(t(),a("div",Zt,[typeof n.data.d=="string"?(t(),a("p",es,x(n.data.d),1)):(t(!0),a(k,{key:1},E(n.data.d,(c,d)=>(t(),a(k,null,[typeof c=="string"?(t(),a("p",ts,x(c),1)):c.math?(t(),M(W,{key:1,data:c},null,8,["data"])):y("",!0)],64))),256))])):y("",!0)],8,Qt))}};var ns=G(ss,[["__scopeId","data-v-fdef45ae"]]);const as={class:"blockContainer"},os=["innerHTML"],ls={key:1},rs=["innerHTML"],cs={key:0,class:"text-center my-2"},is={props:{block:Object,blockid:String},setup(n){const o=n,s=T("view"),l=Z(()=>({"--block-width":o.block.width||"100%"}));return(r,c)=>n.block.content.length?(t(),a("div",{key:0,class:"block",style:X(u(l))},[e("div",as,[(t(!0),a(k,null,E(n.block.content,(d,p)=>(t(),a(k,null,[typeof d=="string"?(t(),a("span",{key:0,innerHTML:d},null,8,os)):d.br?(t(),a("br",ls)):d.text?(t(),a("div",{key:2,innerHTML:d.text,class:q(d.class||"my-2")},null,10,rs)):d.term?(t(),M(ns,{key:3,data:d},null,8,["data"])):d.img?(t(),M(fe,{key:4,data:d},null,8,["data"])):d.math?(t(),M(W,{key:5,data:d},null,8,["data"])):y("",!0),d.dragdrop?(t(),M(Et,{key:6,data:d,blockid:n.blockid+"-"+p},null,8,["data","blockid"])):y("",!0),d.select?(t(),M(Gt,{key:7,data:d,blockid:n.blockid+"-"+p},null,8,["data","blockid"])):y("",!0)],64))),256))]),u(s)?y("",!0):(t(),a("div",cs,[n.block.buttonNextStep?(t(),a("button",{key:0,onClick:c[0]||(c[0]=d=>r.$emit("stepNext"))},x(n.block.buttonNextStep),1)):y("",!0),n.block.buttonNextScreen?(t(),a("button",{key:1,class:"important",onClick:c[1]||(c[1]=d=>r.$emit("screenNext",1))},x(n.block.buttonNextScreen),1)):y("",!0)]))],4)):y("",!0)}},ds={class:"block ScreenBlockEnd"},us={class:"text-center"},_s={class:"my-3"},vs=v("De un total de "),ps=v(" tienes "),hs={class:"high"},fs=v("."),gs=["onClick"],ks={key:1,class:"my-3"},ms=e("span",null,[v("Has contestado todas las preguntas. Verifica tus respuestas y da clic en "),e("strong",null,'"finalizar"'),v(".")],-1),bs=[ms],ys={key:2,class:"my-3"},$s=e("span",null,"Muy bien. Has llegado al final de la actividad.",-1),Ss=[$s],ws=e("div",{class:"my-3"},"\xBFDeseas finalizar?",-1),Cs=e("hr",null,null,-1),Ts=e("div",{class:"my-3"},[e("strong",null,"Actividad finalizada.")],-1),xs={class:"my-3"},Ls=v("De un total de "),As=v(" obtuviste un "),Is={class:"high"},Os=v("."),zs=e("div",{class:"my-3"},"A continuaci\xF3n podr\xE1s ver un res\xFAmen de tus resultados:",-1),Ds={class:"row wrap"},Ms=["onClick"],Ns=e("div",{class:"my-3"},"Puedes ver tus resultados individuales o repasar los contenidos navegando con el men\xFA de la izquierda.",-1),js=e("div",{class:"my-3"},"Tambi\xE9n puedes reiniciar la actividad:",-1),Fs={props:{},setup(n){const o=T("activityFile"),s=T("statusFile"),l=T("resultsFile"),r=K(),c=T("blocked"),d=$=>{var N=$.split("-"),A=N[0],O=N[1],m=o.screens[A].title;return m+" > Bloque "+O},p=$=>{var N=$.split("-"),A=N[0],O=N[1];s.value.screen=A*1,s.value.step=O*1},i=Z(()=>{var $=s.value.answers,N={tot:"",total:0,unanswered:{},unansweredLength:0};if($){N.total=Object.keys($).length;var A={};Object.keys($).forEach(function(O){var m=$[O];$[O]==null&&(A[O]=m,N.unansweredLength++)}),oe(A).keys().sort().each(function(O){N.unanswered[O]=A[O]})}return N}),I=()=>{s.value.finalize=!0,r.appContext.config.globalProperties.emitter.emit("finalize");for(var $ in s.value.result)l.value.total++,s.value.result[$]?l.value.oks++:l.value.errors++;l.value.total&&(l.value.oksPercentage=Math.round(l.value.oks*100/l.value.total),l.value.errorsPercentage=100-l.value.oksPercentage)};s.value.finalize&&setTimeout(function(){I()},1e3);const L=()=>{console.log(o.id),ne(o.id+"_").removeStorageSync("status"),location.reload()};return($,N)=>(t(),a("div",ds,[e("div",us,[u(s).finalize?(t(),a(k,{key:1},[Ts,u(l).total>0?(t(),a(k,{key:0},[e("div",xs,[Ls,e("strong",null,x(u(l).total)+" preguntas",1),As,e("strong",Is,x(u(l).oksPercentage)+"% de aciertos",1),Os]),u(l).errors>0?(t(),a(k,{key:0},[zs,e("div",Ds,[(t(!0),a(k,null,E(u(s).result,(A,O)=>(t(),a("div",{class:q(["px-3 bg-light ma-1 floatcard",A?"isok":"notok"])},[e("button",{class:"bg-clear ma-1",onClick:m=>p(O)},x(d(O)),9,Ms)],2))),256))])],64)):y("",!0)],64)):(t(),a(k,{key:1},[],64)),Ns,u(c)?y("",!0):(t(),a(k,{key:2},[js,e("button",{class:"important",onClick:L},"Reiniciar")],64))],64)):(t(),a(k,{key:0},[u(i).unansweredLength?(t(),a(k,{key:0},[e("div",_s,[e("span",null,[vs,e("strong",null,x(u(i).total)+" preguntas",1),ps,e("strong",hs,x(u(i).unansweredLength)+" sin contestar",1),fs])]),(t(!0),a(k,null,E(u(i).unanswered,(A,O)=>(t(),a("button",{class:"high ma-1",onClick:m=>p(O)},x(d(O)),9,gs))),256))],64)):u(i).total>0?(t(),a("div",ks,bs)):(t(),a("div",ys,Ss)),u(c)?y("",!0):(t(),a(k,{key:3},[ws,Cs,e("div",{class:"my-4"},[e("button",{class:"important",onClick:I},"Finalizar")])],64))],64))])]))}};const ge=n=>(ee("data-v-0af9ee72"),n=n(),te(),n),Vs={class:"stepsNavigation"},Bs=["disabled"],Ps=v("navigate_before"),Es=ge(()=>e("span",{class:"txt"},"Anterior",-1)),Us=["disabled"],Hs=ge(()=>e("span",{class:"txt"},"Siguiente",-1)),Js=v("navigate_next"),Rs={props:{steps:{type:Number,required:!0}},setup(n,{emit:o}){const s=n,l=T("statusFile");B(0);const r=c=>{(c==-1&&l.value.step>0||c==1&&l.value.step<s.steps-1)&&(l.value.step+=c,o("stepChanged"))};return(c,d)=>(t(),a("div",Vs,[e("button",{onClick:d[0]||(d[0]=p=>r(-1)),disabled:u(l).step==0},[w(V,null,{default:C(()=>[Ps]),_:1}),Es],8,Bs),(t(!0),a(k,null,E(n.steps,(p,i)=>(t(),a("div",{class:q(["step",[u(l).step==i?"active":"non-active"]])},null,2))),256)),e("button",{onClick:d[1]||(d[1]=p=>r(1)),disabled:u(l).step==n.steps-1},[Hs,w(V,null,{default:C(()=>[Js]),_:1})],8,Us)]))}};var qs=G(Rs,[["__scopeId","data-v-0af9ee72"]]);const Gs={key:0,class:"activityScreenTitle"},Ws={props:{screenindex:{type:Number},screen:{type:Object,required:!0}},setup(n){const o=n,s=T("view"),l=B(),r=T("statusFile"),c=Z(()=>({})),d=()=>{r.value.step++},p=i=>s.value?!0:o.screen.steps?r.value.step==i:!0;return pe(()=>r.value.step,(i,I)=>{l.value.$el.scrollTop>0&&(l.value.$el.scrollTop=0)}),(i,I)=>{const L=ae("perfect-scrollbar");return t(),a("div",{class:q(["activityScreen",u(s)?"desplegado":""]),style:X(u(c))},[u(s)?(t(),a("div",Gs,x(n.screen.title),1)):y("",!0),w(L,{ref_key:"scroll",ref:l},{default:C(()=>[n.screen.end?F((t(),M(Fs,{key:1},null,512)),[[se,n.screen.end]]):(t(!0),a(k,{key:0},E(n.screen.blocks,($,N)=>(t(),M(Y,{name:"slide"},{default:C(()=>[F(w(is,{block:$,onStepNext:d,onScreenNext:I[0]||(I[0]=A=>i.$emit("screenNext",A)),blockid:n.screenindex+"-"+N},null,8,["block","blockid"]),[[se,p(N)]])]),_:2},1024))),256))]),_:1},512),n.screen.steps&&!u(s)?(t(),M(qs,{key:1,steps:n.screen.blocks.length},null,8,["steps"])):y("",!0)],6)}}};var Ks=G(Ws,[["__scopeId","data-v-3104b0ab"]]);const Qs={setup(n){const o=T("view"),s=T("activityFile"),l=T("statusFile"),r=d=>{l.value.step=0,l.value.screen+=d},c=d=>o.value?!0:d==l.value.screen;return(d,p)=>(t(),M(Y,{name:"zoom"},{default:C(()=>[e("section",{class:q(["Activity",u(o)?"desplegado":""])},[(t(!0),a(k,null,E(u(s).screens,(i,I)=>F((t(),M(Ks,{key:I,screen:i,onScreenNext:r,screenindex:I},null,8,["screen","screenindex"])),[[se,c(I)]])),128))],2)]),_:1}))}};const re=n=>(ee("data-v-1fcecd7f"),n=n(),te(),n),Xs={class:"theform"},Ys={class:"row"},Zs={class:"field"},en=v("ID:"),tn={class:"field"},sn=v("Programa:"),nn=re(()=>e("span",null,"DGETI",-1)),an=re(()=>e("span",null,"DGB ",-1)),on={class:"row"},ln={class:"field"},rn=v("Materia:"),cn={class:"field"},dn=v("Asignatura:"),un={class:"field"},_n=v("Titulo:"),vn={class:"field"},pn=v("Aprendizajes:"),hn={class:"field"},fn=v("Contenido_central:"),gn={key:0},kn={class:"field in"},mn=v("library_add"),bn={class:"inner"},yn=["onClick"],$n=v("backspace"),Sn={class:"field"},wn=v("T\xEDtulo: "),Cn=["onUpdate:modelValue"],Tn={class:"field"},xn=v("Icono: "),Ln=["onUpdate:modelValue"],An={class:"field"},In=v("Steps: "),On=["onUpdate:modelValue"],zn={class:"field"},Dn=v("End: "),Mn=["onUpdate:modelValue"],Nn={key:0},jn={class:"field in"},Fn=["onClick"],Vn=v("library_add"),Bn={class:"inner"},Pn=["onClick"],En=v("backspace"),Un={class:"field"},Hn=v("Width: "),Jn=["onUpdate:modelValue"],Rn=re(()=>e("div",null,null,-1)),qn={class:"field in"},Gn=["onClick"],Wn=["onClick"],Kn=["onClick"],Qn=["onClick"],Xn=["onClick"],Yn=["onClick"],Zn=["onClick"],ea=["onClick"],ta={class:"inner"},sa=["onClick"],na=v("backspace"),aa={key:0,class:"field multi"},oa=v("Simple: "),la=["onUpdate:modelValue"],ra={class:"field multi"},ca=["onUpdate:modelValue"],ia={class:"field"},da={class:"thedata"},ua={class:"BuilderBar"},_a=v("code"),va=v("ondemand_video"),pa=v("sync_problem"),ha={props:{},setup(n){const o=B(null),s=B("json"),l={text:"",class:""},r={math:"",size:"2rem"},c={simple:"",text:l,math:r,term:{term:1,t:"",d:""},img:{img:""},dragdrop:{dragdrop:!0,drags:[[r,"val"]],dropsLeft:[["Titulo","val"]],dropsRight:["Titulo","val"]},select:{select:!0,options:[[r,!1],[r,!0]]},br:{br:1},br:{br:1}},d={width:"100%",content:[]},p={title:"",icon:"",steps:!0,end:!1,blocks:[d]},i=B({id:"",programa:"DGETI",materia:"",asignatura:"",title:"",aprendizajes:"",contenidocentral:"",screens:[JSON.parse(JSON.stringify(p)),{title:"Finalizar",icon:"flag",end:!0,content:[]}]}),I=()=>{const S=JSON.parse(JSON.stringify(p));i.value.screens.push(S)},L=S=>{const g=JSON.parse(JSON.stringify(d));i.value.screens[S].blocks.push(g)},$=(S,g,J)=>{const b=JSON.parse(JSON.stringify(c[J]));console.log(),i.value.screens[S].blocks[g].content.push(b)},N=S=>{i.value.screens.splice(S,1)},A=(S,g)=>{i.value.screens[S].blocks.splice(g,1)},O=(S,g,J)=>{i.value.screens[S].blocks[g].content.splice(J,1)},m=()=>{const S=JSON.parse(o.value);o.value="",console.log(S),i.value=S},z=()=>{navigator.clipboard.writeText(JSON.stringify(i.value,null,"	"))};return(S,g)=>{const J=ae("perfect-scrollbar");return t(),a(k,null,[w(J,null,{default:C(()=>[e("div",Xs,[e("div",Ys,[e("div",Zs,[en,F(e("input",{"onUpdate:modelValue":g[0]||(g[0]=b=>i.value.id=b)},null,512),[[H,i.value.id]])]),e("div",tn,[sn,e("label",null,[F(e("input",{"onUpdate:modelValue":g[1]||(g[1]=b=>i.value.programa=b),placeholder:"programa",type:"radio",value:"DGETI"},null,512),[[ie,i.value.programa]]),nn]),e("label",null,[F(e("input",{"onUpdate:modelValue":g[2]||(g[2]=b=>i.value.programa=b),placeholder:"programa",type:"radio",value:"DGB"},null,512),[[ie,i.value.programa]]),an])])]),e("div",on,[e("div",ln,[rn,F(e("input",{"onUpdate:modelValue":g[3]||(g[3]=b=>i.value.materia=b)},null,512),[[H,i.value.materia]])]),e("div",cn,[dn,F(e("input",{"onUpdate:modelValue":g[4]||(g[4]=b=>i.value.asignatura=b)},null,512),[[H,i.value.asignatura]])])]),e("div",un,[_n,F(e("input",{"onUpdate:modelValue":g[5]||(g[5]=b=>i.value.title=b)},null,512),[[H,i.value.title]])]),e("div",vn,[pn,F(e("input",{"onUpdate:modelValue":g[6]||(g[6]=b=>i.value.aprendizajes=b)},null,512),[[H,i.value.aprendizajes]])]),e("div",hn,[fn,F(e("input",{"onUpdate:modelValue":g[7]||(g[7]=b=>i.value.contenidocentral=b)},null,512),[[H,i.value.contenidocentral]])]),i.value.screens?(t(),a("div",gn,[e("div",kn,[v("Screens ("+x(i.value.screens.length)+"):",1),e("button",{class:"add",onClick:I},[w(V,null,{default:C(()=>[mn]),_:1})])]),(t(!0),a(k,null,E(i.value.screens,(b,U)=>(t(),a("div",bn,[e("button",{class:"rm",onClick:D=>N(U)},[w(V,null,{default:C(()=>[$n]),_:1})],8,yn),e("div",Sn,[wn,F(e("input",{"onUpdate:modelValue":D=>b.title=D},null,8,Cn),[[H,b.title]])]),e("div",Tn,[xn,F(e("input",{"onUpdate:modelValue":D=>b.icon=D},null,8,Ln),[[H,b.icon]])]),e("div",An,[In,F(e("input",{"onUpdate:modelValue":D=>b.steps=D,type:"checkbox"},null,8,On),[[de,b.steps]])]),e("div",zn,[Dn,F(e("input",{"onUpdate:modelValue":D=>b.end=D,type:"checkbox"},null,8,Mn),[[de,b.end]])]),b.blocks?(t(),a("div",Nn,[e("div",jn,[v("Blocks ("+x(b.blocks.length)+"):",1),(t(),a("button",{class:"add",onClick:D=>L(U),key:"addblock"+U},[w(V,null,{default:C(()=>[Vn]),_:1})],8,Fn))]),(t(!0),a(k,null,E(b.blocks,(D,f)=>(t(),a("div",Bn,[e("button",{class:"rm",onClick:h=>A(U,f)},[w(V,null,{default:C(()=>[En]),_:1})],8,Pn),e("div",Un,[Hn,F(e("input",{"onUpdate:modelValue":h=>D.width=h},null,8,Jn),[[H,D.width]])]),Rn,e("div",qn,[v("Content ("+x(D.content.length)+"):",1),e("button",{class:"add",onClick:h=>$(U,f,"simple")},"Simple",8,Gn),e("button",{class:"add",onClick:h=>$(U,f,"text")},"Text",8,Wn),e("button",{class:"add",onClick:h=>$(U,f,"math")},"Math",8,Kn),e("button",{class:"add",onClick:h=>$(U,f,"term")},"Term",8,Qn),e("button",{class:"add",onClick:h=>$(U,f,"img")},"Img",8,Xn),e("button",{class:"add",onClick:h=>$(U,f,"br")},"br",8,Yn),e("button",{class:"add",onClick:h=>$(U,f,"dragdrop")},"dragdrop",8,Zn),e("button",{class:"add",onClick:h=>$(U,f,"select")},"select",8,ea)]),(t(!0),a(k,null,E(D.content,(h,_)=>(t(),a("div",ta,[e("button",{class:"rm",onClick:j=>O(U,f,_)},[w(V,null,{default:C(()=>[na]),_:1})],8,sa),typeof D.content[_]=="string"?(t(),a("div",aa,[oa,F(e("input",{"onUpdate:modelValue":j=>D.content[_]=j},null,8,la),[[H,D.content[_]]])])):(t(!0),a(k,{key:1},E(h,(j,R)=>(t(),a("div",ra,[v(x(R),1),typeof D.content[_][R]=="string"?F((t(),a("input",{key:0,"onUpdate:modelValue":ce=>D.content[_][R]=ce},null,8,ca)),[[H,D.content[_][R]]]):(t(!0),a(k,{key:1},E(D.content[_][R],(ce,ke)=>(t(),a("div",ia,x(ke),1))),256))]))),256))]))),256))]))),256))])):y("",!0)]))),256))])):y("",!0)])]),_:1}),w(J,null,{default:C(()=>[e("div",da,[e("div",ua,[e("button",{onClick:g[8]||(g[8]=b=>s.value="json")},[w(V,null,{default:C(()=>[_a]),_:1})]),e("button",{onClick:g[9]||(g[9]=b=>s.value="play")},[w(V,null,{default:C(()=>[va]),_:1})]),e("button",{onClick:g[10]||(g[10]=b=>s.value="import")},[w(V,null,{default:C(()=>[pa]),_:1})])]),s.value=="json"&&i.value?(t(),M(u(be),{key:0,data:i.value,"show-length":!0,"show-line":!0,"show-select-controller":!0,onClick:z},null,8,["data"])):s.value=="play"?(t(),a(k,{key:1},[],64)):s.value=="import"?F((t(),a("textarea",{key:2,"onUpdate:modelValue":g[11]||(g[11]=b=>o.value=b),onChange:m,placeholder:"Import json"},null,544)),[[H,o.value]]):y("",!0)])]),_:1})],64)}}};var fa=G(ha,[["__scopeId","data-v-1fcecd7f"]]);const ga={setup(n){const o=T("activityFile"),s=T("statusFile"),l=T("builderFile"),r=c=>{s.value.state=c};return(c,d)=>(t(),a(k,null,[u(l)?(t(),M(fa,{key:0})):y("",!0),u(o)&&u(s)?(t(),a(k,{key:1},[u(s).state=="@intro"?(t(),M(Ve,{key:0,onStart:d[0]||(d[0]=p=>r("@activity"))})):u(s).state=="@activity"?(t(),a(k,{key:1},[w(Tt),w(Qs)],64)):y("",!0)],64)):y("",!0)],64))}};function ka(n){var o=ye.generate(n||"-");const s=o.toDataUrl();var l=document.createElement("style");l.type="text/css",l.innerHTML="#app {background-image: "+s+";}",document.getElementsByTagName("head")[0].appendChild(l)}var ma={buildBG:ka};const Q=["color: #446699","background: #ddff99","font-size: 9px","padding: 2px 5px","border-radius: 4px"].join(";"),ba=Te();K();var P=$e(ga);P.config.globalProperties.emitter=ba;P.use(Se);P.use(we);gsap.registerPlugin(Draggable);P.provide("view",B(!1));$a();function ya(n){try{JSON.parse(n)}catch{return!1}return!0}async function $a(){const n=window.location.search,o=new URLSearchParams(n),s=o.get("test"),l=o.get("blocked"),r=o.get("oda"),c=o.get("status"),d=o.get("builder");s!=null?(console.log("%c%s",Q,"::TestMode"),P.provide("test",!0)):P.provide("test",!1),l!=null?(console.log("%c%s",Q,"::BLOCKED"),P.provide("blocked",!0)):P.provide("blocked",!1);const i=B({state:"@intro",screen:0,step:0,answers:{},result:{},finalize:!1}),I=B({total:0,oks:0,errors:0,oksPercentage:0,errorsPercentage:0});if(P.provide("resultsFile",I),r)try{const $=ne(r+"_"),N=await Ce.get("./odas/"+r+"/oda.json"),A=N.data;if(P.provide("activityFile",A),ma.buildBG(N.data.id),P.provide("statusFile",i),P.mount("#app"),c!=null&&c.length>4){const m=ue.atob(c);if(!m)return!1;if(ya(m)){const z=JSON.parse(m);if(!z)return!1;i.value=z,console.log("%c%s",Q,"::UrlData")}else console.log("%c%s",Q,"::WRONG UrlData")}const O=oe.throttle(function(m,z){const S=ue.btoa(JSON.stringify(m.value));$.setStorageSync("status",S);const g={status:S,results:i.value.finalize?I.value:null};var J=JSON.stringify(g);window.top.postMessage(J,"*")},2e3);pe(()=>i,(m,z)=>{if(l!=null)return!1;O(m,z)},{deep:!0}),document.title=A.id+" | "+A.title,s&&(document.title="::TEST:: "+A.id+" | "+A.title)}catch($){console.log("%c%s",Q,"::Error: "+$);var L=document.getElementById("app");L.innerHTML='<div class="erroroda">ERROR DE CARGA</div>'}else if(d!=null)P.provide("statusFile",!1),P.provide("activityFile",!1),P.provide("builderFile",!0),P.mount("#app");else{var L=document.getElementById("app");L.innerHTML='<div class="erroroda">ODA NO ENCONTRADA</div>'}}const Sa=n=>{var o=n.data;if(typeof o=="string"){var s=JSON.parse(o);console.log("iFrameInternalMessage: ",s)}};window.addEventListener("message",Sa,!1);window.addEventListener("resize",function(){window.innerWidth<=600&&P.config.globalProperties.emitter.emit("sidebarmini")});
