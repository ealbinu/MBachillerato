import{o as t,c as l,r as ge,n as U,a as A,b as J,d as H,u as d,F as y,e as T,i as $,f as s,g as V,h as b,w as B,j as p,k as ae,t as E,_ as se,l as te,m as O,p as he,q as ye,s as N,v as oe,T as ue,x as $e,y as Se,z as ce,A as ve,B as _e,C as me,D as K,E as de,V as we,G as le,H as xe,I as Ie,J as Ce,K as Ae,L as Te,W as Y,M as Oe,N as ne,O as Be}from"./vendor.f6f08734.js";const Le=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const v of r.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&n(v)}).observe(document,{childList:!0,subtree:!0});function c(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=c(o);fetch(o.href,r)}};Le();const P={props:{class:String},setup(e){return(a,c)=>(t(),l("i",{class:U(["material-icons theicon",e.class])},[ge(a.$slots,"default")],2))}};var R=(e,a)=>{const c=e.__vccOpts||e;for(const[n,o]of a)c[n]=o;return c};const Ee=["innerHTML"],Me=["innerHTML"],Fe={props:{data:Object},setup(e){const a=e,c=A(!1),n=J(()=>({"--fontSize":a.data.size||"1rem","--fontSizeBlock":a.data.size||"1.5rem"})),o=r=>window.MathJax.tex2svg(r).getElementsByTagName("svg")[0].outerHTML;return setTimeout(()=>{c.value=!0},200),(r,v)=>c.value?(t(),l(y,{key:0},[e.data.block?(t(),l("div",{key:0,class:U(["blockmathCont animate__animated animate__jello animate__delay-2s",[e.data.dark?"dark":"light"]]),style:H(d(n)),innerHTML:o(e.data.math)},null,14,Ee)):(t(),l("span",{key:1,class:U(["blockmathCont",[e.data.dark?"dark":"light"]]),style:H(d(n)),innerHTML:o(e.data.math)},null,14,Me))],64)):T("",!0)}};const ie={props:{},setup(e,{emit:a}){const c=$("test"),n=()=>{a("solve")};return(o,r)=>d(c)?(t(),l("button",{key:0,class:"solveModule test",onClick:n},"Resolver")):T("",!0)}};const De=["id"],Ve={key:0,class:"drops dropsLeft"},je=["data"],ze={class:"drags"},Ne=["data","data-index"],Pe=p("pan_tool"),Ue={key:1,class:"drops dropsRight"},Ge=["data"],Re={props:{blockid:String,data:Object},setup(e){const a=e,c=$("Audios"),n=$("statusFile"),o=$("blocked"),r=ae(),v=A(),_=A();var i="#block-"+a.blockid,m=i+" .drag",I=i+" .drop",f=null,w;const L=()=>{if(f=document.querySelectorAll(i+" .drop"),o)return!1;w=Draggable.create(m,{type:"x,y",bounds:i,zIndexBoost:!1,onDrag:function(g){C(g,this)},onClick:function(g){M(g,this)},onDragEnd:function(g){q(g,this)}})},C=(g,x)=>{for(var h=0;h<f.length;h++){if(x.hitTest(f[h],"40%"))return x.target.classList.add("hover"),f[h].classList.add("hover"),!1;x.target.classList.remove("hover"),f[h].classList.remove("hover")}},M=(g,x)=>{if(v.value!=null)return!1;c.scancel.play();var h=document.querySelector(i+" .drags");x.target.parentElement!=h&&(h.append(x.target),TweenLite.to(x.target,.2,{x:0,y:0}),u())},q=(g,x)=>{for(var h=!1,F=0;F<f.length;F++)x.hitTest(f[F],"40%")&&(h=!0,f[F].append(x.target),TweenLite.to(x.target,.2,{x:0,y:0}),x.target.classList.remove("hover"),f[F].classList.remove("hover"),u());h?c.sBlockDrag.play():TweenLite.to(x.target,.2,{x:0,y:0})},k=g=>{var x=btoa(g);return x},u=()=>{for(var g=document.querySelectorAll(m),x=[],h=0;h<g.length;h++){var F=g[h].getAttribute("data-index"),X=g[h].parentElement.getAttribute("data");x.push([F,X])}n.value.answers[a.blockid]=x},z=setInterval(function(){Draggable&&(L(),S())},500),S=()=>{clearInterval(z),G()},G=()=>{if(n.value.answers||(n.value.answers={}),n.value.answers[a.blockid]){var g=n.value.answers[a.blockid];for(var x in g){var h=g[x];if(h[1]){var F=document.querySelector(m+'[data-index="'+h[0]+'"]'),X=document.querySelector(I+"[data="+h[1]+"]");X.append(F)}}}else n.value.answers[a.blockid]=null;n.value.finalize&&W()},D=()=>{for(var g=document.querySelectorAll(m),x=0;x<g.length;x++){var h=atob(g[x].getAttribute("data")),F=document.querySelector(I+"[data="+h+"]");F.append(g[x])}u()},W=()=>{for(var g=document.querySelectorAll(m),x=0,h=0;h<g.length;h++){w[h].disable();var F=atob(g[h].getAttribute("data")),X=g[h].parentElement.getAttribute("data");F==X?g[h].classList.add("isok"):(g[h].classList.add("notok"),x++)}x==0?v.value=!0:v.value=!1,n.value.result[a.blockid]=v.value};return r.appContext.config.globalProperties.emitter.on("solve",g=>{D()}),r.appContext.config.globalProperties.emitter.on("finalize",g=>{W()}),(g,x)=>(t(),l(y,null,[s("div",{class:"blockDragDrop",id:"block-"+e.blockid,ref_key:"block",ref:_},[e.data.dropsLeft?(t(),l("section",Ve,[(t(!0),l(y,null,V(e.data.dropsLeft,(h,F)=>(t(),l("div",{class:"drop",data:h[1]},[b(Q,{item:h[0],blockid:e.blockid+"-dropLeft-"+F},null,8,["item","blockid"])],8,je))),256))])):T("",!0),s("section",ze,[(t(!0),l(y,null,V(e.data.drags,(h,F)=>(t(),l("div",{class:"drag",data:k(h[1]),"data-index":F},[b(P,null,{default:B(()=>[Pe]),_:1}),b(Q,{item:h[0],blockid:e.blockid+"-drag-"+F},null,8,["item","blockid"])],8,Ne))),256))]),e.data.dropsRight?(t(),l("section",Ue,[(t(!0),l(y,null,V(e.data.dropsRight,(h,F)=>(t(),l("div",{class:"drop",data:h[1]},[b(Q,{item:h[0],blockid:e.blockid+"-dropRight-"+F},null,8,["item","blockid"])],8,Ge))),256))])):T("",!0)],8,De),b(ie,{onSolve:D})],64))}};var He=R(Re,[["__scopeId","data-v-093ddae6"]]);const Je=["id"],qe=["onClick"],We=p("touch_app"),Qe={class:"option-letter"},Ke={props:{blockid:String,data:Object},setup(e){const a=e,c=A(),n=$("statusFile"),o=$("blocked"),r=$("Audios"),v=ae(),_=A(),i=A([]);var m=A(!0);const I=k=>"abcdefghijk"[k],f=()=>{for(var k in a.data.options)a.data.options,i.value[k]=!1;w(),n.value.answers||(n.value.answers={}),n.value.answers[a.blockid]?i.value=n.value.answers[a.blockid]:n.value.answers[a.blockid]=null},w=()=>{var k=0;a.data.options.forEach(u=>{u[1]&&(k+=1)}),k>1&&(m.value=!1)};f();const L=k=>{if(o||n.value.finalize)return!1;if(r.sBlockSelect.play(),m.value){for(var u in i.value)i.value[u]=!1;i.value[k]=!0}else i.value[k]=!i.value[k];n.value.answers[a.blockid]=i.value},C=()=>{for(var k=a.data.options,u=0;u<k.length;u++)k[u][1]?i.value[u]=!0:i.value[u]=!1;n.value.answers[a.blockid]=i.value},M=()=>{for(var k=a.data.options,u=[],z=0;z<k.length;z++)u.push(k[z][1]);se.isEqual(u,i.value)?(c.value=!0,_.value.classList.add("isok")):(c.value=!1,_.value.classList.add("notok")),n.value.result[a.blockid]=c.value};v.appContext.config.globalProperties.emitter.on("solve",k=>{C()}),v.appContext.config.globalProperties.emitter.on("finalize",k=>{M()});const q=J(()=>({"--block-grid-template-columns":a.data.columns||"1fr 1fr 1fr 1fr","--block-grid-template-columns-responsive":a.data.columnsResponsive||"1fr","--block-grid-gap":a.data.gap||"10px"}));return(k,u)=>(t(),l(y,null,[s("div",{class:"blockSelect",id:"block-"+e.blockid,ref_key:"block",ref:_,style:H(d(q))},[(t(!0),l(y,null,V(e.data.options,(z,S)=>(t(),l("div",{class:U(["blockSelectOption",i.value[S]?"active":""]),onClick:G=>L(S)},[b(P,null,{default:B(()=>[We]),_:1}),s("div",Qe,E(I(S)),1),b(Q,{item:z[0],blockid:e.blockid+"-selectitem"},null,8,["item","blockid"])],10,qe))),256))],12,Je),b(ie,{onSolve:C})],64))}};const Xe=["src"],Ye={props:{data:Object},setup(e){const a=$("activityFile"),c=J(()=>({}));return(n,o)=>(t(),l("img",{class:U(["blockImg",e.data.class]),src:"odas/"+d(a).id+"/"+e.data.img,style:H(d(c))},null,14,Xe))}};var Ze=R(Ye,[["__scopeId","data-v-4faf3878"]]);const et=p("contact_support"),tt={props:{data:{type:Object}},setup(e){return A(!1),(a,c)=>{const n=te("Popper");return t(),O(n,null,{content:B(()=>[(t(!0),l(y,null,V(e.data.content,(o,r)=>(t(),O(Q,{key:r,item:o},null,8,["item"]))),128))]),default:B(()=>[b(Q,{item:e.data.term},null,8,["item"]),b(P,{class:"termIcon animate__animated animate__pulse animate__infinite animate__slow"},{default:B(()=>[et]),_:1})]),_:1})}}};var st=R(tt,[["__scopeId","data-v-1d0789ae"]]);const at={props:{data:Object,blockid:String},setup(e){const a=e;return J(()=>({"--fontSize":a.data.size||"1rem"})),(c,n)=>{const o=te("apexchart");return e.data.chart=="line"?(t(),l(y,{key:0},[s("p",null,E(e.data),1),b(o,{type:e.data.chart,options:e.data.options,series:e.data.series},null,8,["type","options","series"])],64)):T("",!0)}}};var ot=he({props:{data:Object,blockid:String},setup(e){const a=e;J(()=>({"--fontSize":a.data.size||"1rem"}));const c=A(),n=A(),o=A(),r=()=>{let v=c.value.getBoundingClientRect(),_=340,i=200,m=v.width/_;_*=m,i*=m,o.value=functionPlot({title:typeof a.data.plot=="string"?a.data.plot:"",target:n.value,width:_,height:i,yAxis:a.data.yAxis,xAxis:a.data.xAxis,grid:!1,data:a.data.data,annotations:a.data.annotations})};return setTimeout(()=>{r()},500),(v,_)=>(t(),l("div",{class:"blockPlot",ref_key:"blockParent",ref:c},[s("div",{ref_key:"block",ref:n},null,512)],512))}});const nt={class:"blockGridItem"},lt={props:{data:Object,blockid:String},setup(e){const a=e,c=J(()=>({"--block-grid-template-columns":a.data.columns||"auto auto auto auto","--block-grid-template-columns-responsive":a.data.columnsResponsive||"auto","--block-grid-gap":a.data.gap||"10px"}));return(n,o)=>(t(),l("div",{class:"blockGrid",style:H([d(c),e.data.style])},[(t(!0),l(y,null,V(e.data.content,(r,v)=>(t(),l("div",nt,[b(Q,{item:r,blockid:e.blockid+"-"+v},null,8,["item","blockid"])]))),256))],4))}};const ct={props:{data:Object,blockid:String},setup(e){const a=J(()=>({}));return(c,n)=>(t(),l("div",{class:U(["blockGroup",e.data.class]),style:H(d(a))},[(t(!0),l(y,null,V(e.data.content,(o,r)=>(t(),O(Q,{item:o,blockid:e.blockid+"-"+r},null,8,["item","blockid"]))),256))],6))}};const it=["id"],rt=["data"],dt=p("swipe_vertical"),ut={props:{blockid:String,data:Object},setup(e){const a=e,c=A(),n=A(),o=$("statusFile"),r=$("blocked"),v=ae(),_=A(se.shuffle(a.data.items));(()=>{o.value.answers[a.blockid]?_.value=o.value.answers[a.blockid]:o.value.answers[a.blockid]=null})();const m=()=>{o.value.answers[a.blockid]=_.value},I=()=>{_.value=a.data.items,m()},f=()=>{se.isEqual(_.value,a.data.items)?(c.value=!0,n.value.classList.add("isok")):(c.value=!1,n.value.classList.add("notok")),o.value.result[a.blockid]=c.value};return v.appContext.config.globalProperties.emitter.on("solve",w=>{I()}),v.appContext.config.globalProperties.emitter.on("finalize",w=>{f()}),(w,L)=>(t(),l(y,null,[s("div",{class:"blockSortable",id:"block-"+e.blockid,ref_key:"block",ref:n},[b(d(ye),{modelValue:_.value,"onUpdate:modelValue":L[0]||(L[0]=C=>_.value=C),"item-key":"id",onEnd:m,sort:!(d(r)||d(o).finalize)},{item:B(({element:C,index:M})=>[s("div",{class:U(["sortable-item",[e.data.numbers?"shownumbers":""]]),data:M+1},[b(P,null,{default:B(()=>[dt]),_:1}),b(Q,{item:C,blockid:e.blockid+"-sortableitem"},null,8,["item","blockid"])],10,rt)]),_:1},8,["modelValue","sort"])],8,it),b(ie,{onSolve:I})],64))}};var vt=R(ut,[["__scopeId","data-v-b1c18fee"]]);const _t=["innerHTML"],mt={props:{data:Object},setup(e){const a=e;A(!1);const c=A(a.data.text);a.data.text.match(/.{1,10}/g);const n=J(()=>({"--block-align":a.data.align||"left"}));return(o,r)=>(t(),l("div",{class:U(["blockText animate__animated",[e.data.class]]),style:H(d(n)),innerHTML:c.value},null,14,_t))}};var bt=R(mt,[["__scopeId","data-v-28ac30bb"]]);const pt={props:{data:Object},setup(e){const a=e,c=J(()=>({"--block-fontSize":a.data.size||"1rem","--block-block":a.data.block?"block":"inline-block"}));return(n,o)=>(t(),l("div",{class:U(["blockIcon",[e.data.class]]),style:H(d(c))},[b(P,null,{default:B(()=>[p(E(e.data.icon),1)]),_:1})],6))}};var kt=R(pt,[["__scopeId","data-v-3173a235"]]);const ft={props:{data:Object,blockid:String},setup(e){const a=e,c=J(()=>({"--block-align":a.data.align||"left"}));return(n,o)=>(t(),l("div",{class:U(["blockInstruction animate__animated animate__bounce animate__delay-3s",[e.data.class]]),style:H([d(c),e.data.style])},[(t(!0),l(y,null,V(e.data.content,(r,v)=>(t(),O(Q,{item:r,blockid:e.blockid+"-instruction-"+v},null,8,["item","blockid"]))),256))],6))}};var gt=R(ft,[["__scopeId","data-v-2768cab3"]]);const ht=["innerHTML"],yt={key:1},$t={key:2,class:"my-2"},St=["innerHTML"],Q={props:{item:[Object,String],blockid:String},setup(e){return(a,c)=>(t(),l(y,null,[typeof e.item=="string"?(t(),l("span",{key:0,innerHTML:e.item},null,8,ht)):e.item.br?(t(),l("br",yt)):e.item.hr?(t(),l("hr",$t)):e.item.html?(t(),l("div",{key:3,innerHTML:e.item.html},null,8,St)):e.item.icon?(t(),O(kt,{key:4,data:e.item},null,8,["data"])):e.item.text?(t(),O(bt,{data:e.item,key:e.blockid},null,8,["data"])):e.item.instruction?(t(),O(gt,{data:e.item,key:e.blockid},null,8,["data"])):e.item.term?(t(),O(st,{key:7,data:e.item},null,8,["data"])):e.item.img?(t(),O(Ze,{key:8,data:e.item},null,8,["data"])):e.item.math?(t(),O(Fe,{key:9,data:e.item},null,8,["data"])):T("",!0),e.item.dragdrop?(t(),O(He,{key:10,data:e.item,blockid:e.blockid},null,8,["data","blockid"])):T("",!0),e.item.sortable?(t(),O(vt,{key:11,data:e.item,blockid:e.blockid},null,8,["data","blockid"])):T("",!0),e.item.select?(t(),O(Ke,{key:12,data:e.item,blockid:e.blockid},null,8,["data","blockid"])):T("",!0),e.item.chart?(t(),O(at,{key:13,data:e.item,blockid:e.blockid},null,8,["data","blockid"])):T("",!0),e.item.dialog?(t(),O(be,{key:14,data:e.item,blockid:e.blockid},null,8,["data","blockid"])):T("",!0),e.item.plot?(t(),O(ot,{key:15,data:e.item,blockid:e.blockid},null,8,["data","blockid"])):T("",!0),e.item.grid?(t(),O(lt,{key:16,data:e.item,blockid:e.blockid},null,8,["data","blockid"])):T("",!0),e.item.group?(t(),O(ct,{key:17,data:e.item,blockid:e.blockid},null,8,["data","blockid"])):T("",!0)],64))}};const wt=["id"],xt={class:"modal"},It={class:"modal-box bg-white text-primary"},Ct=p("close"),At={class:"ma-1 pt-5"},Tt={props:{data:Object,blockid:String},setup(e){const a=$("Audios"),c=$("hidemenu"),n=A(!1),o=()=>{n.value=!0,a.sopen.play(),c.value=!0},r=()=>{n.value=!1,a.sclose.play(),c.value=!1};return(v,_)=>{const i=te("perfect-scrollbar");return t(),l("div",{class:"blockDialog",style:H([e.data.style])},[s("button",{class:U(["animate__animated animate__pulse animate__infinite animate__slower",e.data.buttonClass]),onClick:o},[(t(!0),l(y,null,V(e.data.button,(m,I)=>(t(),O(Q,{item:m,blockid:e.blockid+"-button-"+I},null,8,["item","blockid"]))),256))],2),N(s("input",{class:"modal-toggle",type:"checkbox",id:e.blockid,"onUpdate:modelValue":_[0]||(_[0]=m=>n.value=m)},null,8,wt),[[oe,n.value]]),s("div",xt,[s("div",It,[s("label",{class:"btn btn-sm btn-circle absolute right-2 top-2",onClick:r},[b(P,null,{default:B(()=>[Ct]),_:1})]),s("div",At,[b(i,null,{default:B(()=>[(t(!0),l(y,null,V(e.data.content,(m,I)=>(t(),O(Q,{item:m,blockid:e.blockid+"-content-"+I},null,8,["item","blockid"]))),256))]),_:1})])])])],4)}}};var be=R(Tt,[["__scopeId","data-v-1da6a961"]]);const Ot={class:"FichaTecnica"},Bt={props:{},setup(e){const a=$("activityFile"),c='<div class="tooltip" data-tip="Ficha T\xE9cnica"> <img src="odas/assets/icons/'+a.programa+'/ico-ficha-tecnica.png" class="w-12"> </div>',n=A([]);var o='<table class="table bg-white table-fixed table-zebra">',r=[],v="</table>";for(var _ in a.ficha)r.push(' <tr> <td class="bg-white text-bold text-xl max-w-sm break-normal whitespace-normal">'+a.ficha[_][0]+'</td><td class="text-lg font-light max-w-sm break-normal whitespace-normal bg-white">'+a.ficha[_][1]+"</td></tr>");n.value.push({html:o+r.join("")+v});const i={button:{html:c},buttonClass:"",content:[{text:"Ficha T\xE9cnica",class:"text-4xl text-center",align:"center"},{group:1,content:n.value}]};return(m,I)=>(t(),l("div",Ot,[b(be,{data:i})]))}};var Lt=R(Bt,[["__scopeId","data-v-0b38c69f"]]);const Et={class:"activitybgcontainer"},Mt={key:0,class:"ActBG"},Ft={props:{speed:Number},setup(e){const a=e,c=$("activityFile"),n=a.speed?a.speed:6e3,o=A(1);return setInterval(()=>{o.value<c.bgimgs?o.value++:o.value=1},n),(r,v)=>(t(),l("div",Et,[(t(!0),l(y,null,V(d(c).bgimgs,(_,i)=>(t(),O(ue,{name:"fadebg",mode:"out-in"},{default:B(()=>[o.value==i+1?(t(),l("div",Mt,[s("div",{class:"ActivityBG",style:H("background-image:url(odas/"+d(c).id+"/bg/bg"+(i+1)+".jpg)")},null,4)])):T("",!0)]),_:2},1024))),256))]))}};var pe=R(Ft,[["__scopeId","data-v-aacd57c0"]]),Dt="/odas/assets/icons/Montenegro-icon.svg",Vt="/odas/assets/icons/Montenegro.svg";const jt={key:0,src:Dt},zt={key:1,src:Vt},Nt={props:{logo:{type:Boolean,default:!1}},setup(e){const a=A(!0);return(()=>{a.value=!1,setTimeout(()=>{a.value=!0},2e3)})(),(n,o)=>(t(),l("div",{class:U(["montenegroIcon",e.logo?"logo":"icon"]),duration:{enter:1e3,leave:3e3},appear:""},[e.logo?(t(),l("img",zt)):(t(),l("img",jt))],2))}};var ke=R(Nt,[["__scopeId","data-v-71929997"]]);const Pt={class:"modal"},Ut={class:"modal-box relative w-11/12 max-w-5xl"},Gt={class:"hero relative"},Rt={class:"hero-content text-center relative z-10"},Ht={class:"max-w-md text-center"},Jt={class:"text-center"},qt=["src"],Wt={class:"text-lg"},Qt={class:"text-4xl font-bold mt-2"},Kt={class:"text-xl"},Xt={class:"mt-10"},Yt={emits:["start"],setup(e,{emit:a}){$e(()=>{Se.exports.themeChange(!1)});const c=$("activityFile");$("statusFile"),A();const n=A(!0),o=()=>{n.value=!1,a("start")};return(r,v)=>(t(),l(y,null,[N(s("input",{class:"modal-toggle",type:"checkbox",id:"my-modal","onUpdate:modelValue":v[0]||(v[0]=_=>n.value=_)},null,512),[[oe,n.value]]),s("div",Pt,[s("div",Ut,[s("div",Gt,[s("div",Rt,[s("div",Ht,[s("div",Jt,[s("img",{class:"w-28 mx-auto",src:"odas/assets/icons/"+d(c).programa+"/"+d(c).materia+".png"},null,8,qt)]),s("h3",Wt,E(d(c).conf.programa=="DGETI"?"Bachillerato Tecnol\xF3gico":"Bachillerato General"),1),s("h1",Qt,E(d(c).title),1),s("h2",Kt,E(d(c).conf.materia),1),s("div",{class:"mt-10"},[s("button",{class:"btn",onClick:o},"Comenzar")]),s("div",Xt,[b(ke,{logo:!0})])])]),b(pe,{speed:3e3})])])])],64))}};var Zt=R(Yt,[["__scopeId","data-v-29b2fcf6"]]);const es={class:"area"},ts={class:"p mb-1"},ss=p("donut_large"),as={class:"progreso"},os={props:{},setup(e){const a=$("statusFile"),c=J(()=>{var n=a.value.answers,o={total:0,unanswered:0};return n&&(o.total=Object.keys(n).length,Object.keys(n).forEach(function(r){n[r],n[r]==null&&o.unanswered++})),o});return(n,o)=>(t(),l("div",es,[s("div",ts,[b(P,{class:"text-sm"},{default:B(()=>[ss]),_:1}),p("\xA0Progreso "+E(d(c).total-d(c).unanswered)+" /"+E(d(c).total),1)]),s("div",as,[s("div",{class:"bar",style:H("width:"+Math.round((d(c).total-d(c).unanswered)/d(c).total*100)+"%")},null,4)])]))}};var ns=R(os,[["__scopeId","data-v-2082bade"]]);const ls={key:0,class:"area"},cs=p("auto_awesome"),is={class:"label"},rs={props:{},setup(e){const a=$("statusFile"),c=$("resultsFile"),n=()=>{const o=c.value.oksPercentage;var r="ok1";switch(!0){case(o<=100&&o>75):r="ok4";break;case(o<=75&&o>50):r="ok3";break;case(o<=50&&o>25):r="ok2";break}return r};return(o,r)=>d(a).finalize?(t(),l("div",ls,[s("h2",{class:U(["puntaje",n()])},[b(P,null,{default:B(()=>[cs]),_:1}),s("span",is,"\xA0Puntaje: "+E(d(c).oksPercentage)+"%",1)],2)])):T("",!0)}};var ds=R(rs,[["__scopeId","data-v-7ac64b3a"]]);const us={class:"blockContainer"},vs={key:0,class:"text-center my-2"},_s={props:{block:Object,blockid:String,islast:Boolean},setup(e){const a=e,c=A([]),n=A(!1),o=$("statusFile"),r=$("view"),v=J(()=>({"--block-width":a.block.width||"100%"})),_=a.blockid.split("-"),i=()=>{for(var I in Object.keys(o.value.answers)){var f=Object.keys(o.value.answers)[I];const w=f.split("-");w[0]==_[0]&&w[1]==_[1]&&c.value.push(Object.keys(o.value.answers)[I])}};setTimeout(()=>{i()},1e3),ce(o.value.answers,I=>{m()},{deep:!0});const m=()=>{let I=!0;for(var f in c.value)o.value.answers[c.value[f]]==null&&(I=!1);n.value=I};return setTimeout(function(){m()},1e3),(I,f)=>e.block.content.length?(t(),l("div",{key:0,class:"block",style:H(d(v))},[s("div",us,[(t(!0),l(y,null,V(e.block.content,(w,L)=>(t(),O(Q,{item:w,blockid:e.blockid+"-"+L,key:L},null,8,["item","blockid"]))),128))]),d(r)?T("",!0):(t(),l("div",vs,[c.value.length>0&&n.value?(t(),l(y,{key:0},[e.islast?(t(),l("button",{key:1,class:"btn btn-accent btn-wide",onClick:f[1]||(f[1]=w=>I.$emit("screenNext",1))},"Continuar")):(t(),l("button",{key:0,class:"btn btn-ghost text-white animate__animated animate__tada",onClick:f[0]||(f[0]=w=>I.$emit("stepNext"))},"Siguiente"))],64)):T("",!0),e.block.buttonNextStep?(t(),l("button",{key:1,class:"btn btn-ghost text-white",onClick:f[2]||(f[2]=w=>I.$emit("stepNext"))},E(e.block.buttonNextStep),1)):T("",!0),e.block.buttonNextScreen?(t(),l("button",{key:2,class:"btn btn-accent btn-wide",onClick:f[3]||(f[3]=w=>I.$emit("screenNext",1))},E(e.block.buttonNextScreen),1)):T("",!0)]))],4)):T("",!0)}};const Z=e=>(ve("data-v-6d173506"),e=e(),_e(),e),ms={class:"block ScreenBlockEnd"},bs={class:"text-center"},ps={class:"my-3"},ks=p("De un total de "),fs=p(" tienes "),gs={class:"high"},hs=p("."),ys=["onClick"],$s={key:1,class:"my-3"},Ss=Z(()=>s("span",null,[p("Has contestado todas las preguntas. Verifica tus respuestas y da clic en "),s("strong",null,'"finalizar"'),p(".")],-1)),ws=[Ss],xs={key:2,class:"my-3"},Is=Z(()=>s("span",null,"Muy bien. Has llegado al final de la actividad.",-1)),Cs=[Is],As=Z(()=>s("div",{class:"my-3"},"\xBFDeseas finalizar?",-1)),Ts=Z(()=>s("hr",null,null,-1)),Os=Z(()=>s("div",{class:"my-3"},[s("strong",null,"Actividad finalizada.")],-1)),Bs={class:"my-3"},Ls=p("De un total de "),Es=p(" obtuviste un "),Ms={class:"high"},Fs=p("."),Ds=Z(()=>s("div",{class:"my-3"},"A continuaci\xF3n podr\xE1s ver un res\xFAmen de tus resultados:",-1)),Vs={class:"row wrap"},js=["onClick"],zs=Z(()=>s("div",{class:"my-3"},"Puedes ver tus resultados individuales o repasar los contenidos navegando con el men\xFA de la izquierda.",-1)),Ns=Z(()=>s("div",{class:"my-3"},"Tambi\xE9n puedes reiniciar la actividad:",-1)),Ps={props:{},setup(e){const a=$("Audios"),c=$("activityFile"),n=$("statusFile"),o=$("resultsFile"),r=ae(),v=$("blocked"),_=w=>{var L=w.split("-"),C=L[0],M=L[1],q=c.screens[C].title;return q+" > Bloque "+M},i=w=>{var L=w.split("-"),C=L[0],M=L[1];n.value.screen=C*1,n.value.step=M*1},m=J(()=>{var w=n.value.answers,L={tot:"",total:0,unanswered:{},unansweredLength:0};if(w){L.total=Object.keys(w).length;var C={};Object.keys(w).forEach(function(M){var q=w[M];w[M]==null&&(C[M]=q,L.unansweredLength++)}),se(C).keys().sort().each(function(M){L.unanswered[M]=C[M]})}return L}),I=()=>{n.value.finalize=!0,r.appContext.config.globalProperties.emitter.emit("finalize");for(var w in n.value.result)o.value.total++,n.value.result[w]?o.value.oks++:o.value.errors++;o.value.total&&(o.value.oksPercentage=Math.round(o.value.oks*100/o.value.total),o.value.errorsPercentage=100-o.value.oksPercentage),a.send.play()};n.value.finalize&&setTimeout(function(){I()},1e3);const f=()=>{me(c.id+"_").removeStorageSync("status"),location.reload()};return(w,L)=>(t(),l("div",ms,[s("div",bs,[d(n).finalize?(t(),l(y,{key:1},[Os,d(o).total>0?(t(),l(y,{key:0},[s("div",Bs,[Ls,s("strong",null,E(d(o).total)+" preguntas",1),Es,s("strong",Ms,E(d(o).oksPercentage)+"% de aciertos",1),Fs]),d(o).errors>0?(t(),l(y,{key:0},[Ds,s("div",Vs,[(t(!0),l(y,null,V(d(n).result,(C,M)=>(t(),l("div",{class:U(["px-3 ma-1 floatcard",C?"isok":"notok"])},[s("button",{class:"btn btn-sm m-1 ma-1",onClick:q=>i(M)},E(_(M)),9,js)],2))),256))])],64)):T("",!0)],64)):(t(),l(y,{key:1},[],64)),zs,d(v)?T("",!0):(t(),l(y,{key:2},[Ns,s("button",{class:"btn btn-accent",onClick:f},"Reiniciar")],64))],64)):(t(),l(y,{key:0},[d(m).unansweredLength?(t(),l(y,{key:0},[s("div",ps,[s("span",null,[ks,s("strong",null,E(d(m).total)+" preguntas",1),fs,s("strong",gs,E(d(m).unansweredLength)+" sin contestar",1),hs])]),(t(!0),l(y,null,V(d(m).unanswered,(C,M)=>(t(),l("button",{class:"btn high btn-sm m-1",onClick:q=>i(M)},E(_(M)),9,ys))),256))],64)):d(m).total>0?(t(),l("div",$s,ws)):(t(),l("div",xs,Cs)),d(v)?T("",!0):(t(),l(y,{key:3},[As,Ts,s("div",{class:"my-4"},[s("button",{class:"btn-accent btn-wide important btn-lg",onClick:I},"Finalizar")])],64))],64))])]))}};var Us=R(Ps,[["__scopeId","data-v-6d173506"]]);const re=e=>(ve("data-v-68aae306"),e=e(),_e(),e),Gs={class:"theform"},Rs={class:"row"},Hs={class:"field"},Js=p("ID:"),qs={class:"field"},Ws=p("Programa:"),Qs=re(()=>s("span",null,"DGETI",-1)),Ks=re(()=>s("span",null,"DGB ",-1)),Xs={class:"row"},Ys={class:"field"},Zs=p("Asignatura:"),ea={class:"field"},ta=p("Titulo:"),sa={class:"field"},aa=p("Aprendizajes:"),oa={class:"field"},na=p("Contenido_central:"),la={key:0},ca={class:"field in"},ia=p("library_add"),ra={class:"inner"},da=["onClick"],ua=p("backspace"),va={class:"field"},_a=p("T\xEDtulo: "),ma=["onUpdate:modelValue"],ba={class:"field"},pa=p("Icono: "),ka=["onUpdate:modelValue"],fa={class:"field"},ga=p("Steps: "),ha=["onUpdate:modelValue"],ya={class:"field"},$a=p("End: "),Sa=["onUpdate:modelValue"],wa={key:0},xa={class:"field in"},Ia=["onClick"],Ca=p("library_add"),Aa={class:"inner"},Ta=["onClick"],Oa=p("backspace"),Ba={class:"field"},La=p("Width: "),Ea=["onUpdate:modelValue"],Ma=re(()=>s("div",null,null,-1)),Fa={class:"field in"},Da=["onClick"],Va=["onClick"],ja=["onClick"],za=["onClick"],Na=["onClick"],Pa=["onClick"],Ua=["onClick"],Ga=["onClick"],Ra={class:"inner"},Ha=["onClick"],Ja=p("backspace"),qa={key:0,class:"field multi"},Wa=p("Simple: "),Qa=["onUpdate:modelValue"],Ka={class:"field multi"},Xa=["onUpdate:modelValue"],Ya={class:"field"},Za={class:"thedata"},eo={class:"BuilderBar"},to=p("code"),so=p("ondemand_video"),ao=p("sync_problem"),oo={props:{},setup(e){const a=A(null),c=A("json"),n={text:"",class:""},o={math:"",size:"2rem"},r={simple:"",text:n,math:o,term:{term:1,t:"",d:""},img:{img:""},dragdrop:{dragdrop:!0,drags:[[o,"val"]],dropsLeft:[["Titulo","val"]],dropsRight:["Titulo","val"]},select:{select:!0,options:[[o,!1],[o,!0]]},br:{br:1},br:{br:1}},v={width:"100%",content:[]},_={title:"",icon:"",steps:!0,end:!1,blocks:[v]},i=A({id:"",programa:"DGETI",materia:"",asignatura:"",title:"",aprendizajes:"",contenidocentral:"",screens:[JSON.parse(JSON.stringify(_)),{title:"Finalizar",icon:"flag",end:!0,content:[]}]}),m=()=>{const k=JSON.parse(JSON.stringify(_));i.value.screens.push(k)},I=k=>{const u=JSON.parse(JSON.stringify(v));i.value.screens[k].blocks.push(u)},f=(k,u,z)=>{const S=JSON.parse(JSON.stringify(r[z]));i.value.screens[k].blocks[u].content.push(S)},w=k=>{i.value.screens.splice(k,1)},L=(k,u)=>{i.value.screens[k].blocks.splice(u,1)},C=(k,u,z)=>{i.value.screens[k].blocks[u].content.splice(z,1)},M=()=>{const k=JSON.parse(a.value);a.value="",i.value=k},q=()=>{navigator.clipboard.writeText(JSON.stringify(i.value,null,"	"))};return(k,u)=>{const z=te("perfect-scrollbar");return t(),l(y,null,[b(z,null,{default:B(()=>[s("div",Gs,[s("div",Rs,[s("div",Hs,[Js,N(s("input",{"onUpdate:modelValue":u[0]||(u[0]=S=>i.value.id=S)},null,512),[[K,i.value.id]])]),s("div",qs,[Ws,s("label",null,[N(s("input",{"onUpdate:modelValue":u[1]||(u[1]=S=>i.value.programa=S),placeholder:"programa",type:"radio",value:"DGETI"},null,512),[[de,i.value.programa]]),Qs]),s("label",null,[N(s("input",{"onUpdate:modelValue":u[2]||(u[2]=S=>i.value.programa=S),placeholder:"programa",type:"radio",value:"DGB"},null,512),[[de,i.value.programa]]),Ks])])]),s("div",Xs,[s("div",Ys,[Zs,N(s("input",{"onUpdate:modelValue":u[3]||(u[3]=S=>i.value.asignatura=S)},null,512),[[K,i.value.asignatura]])])]),s("div",ea,[ta,N(s("input",{"onUpdate:modelValue":u[4]||(u[4]=S=>i.value.title=S)},null,512),[[K,i.value.title]])]),s("div",sa,[aa,N(s("input",{"onUpdate:modelValue":u[5]||(u[5]=S=>i.value.aprendizajes=S)},null,512),[[K,i.value.aprendizajes]])]),s("div",oa,[na,N(s("input",{"onUpdate:modelValue":u[6]||(u[6]=S=>i.value.contenidocentral=S)},null,512),[[K,i.value.contenidocentral]])]),i.value.screens?(t(),l("div",la,[s("div",ca,[p("Screens ("+E(i.value.screens.length)+"):",1),s("button",{class:"add",onClick:m},[b(P,null,{default:B(()=>[ia]),_:1})])]),(t(!0),l(y,null,V(i.value.screens,(S,G)=>(t(),l("div",ra,[s("button",{class:"rm",onClick:D=>w(G)},[b(P,null,{default:B(()=>[ua]),_:1})],8,da),s("div",va,[_a,N(s("input",{"onUpdate:modelValue":D=>S.title=D},null,8,ma),[[K,S.title]])]),s("div",ba,[pa,N(s("input",{"onUpdate:modelValue":D=>S.icon=D},null,8,ka),[[K,S.icon]])]),s("div",fa,[ga,N(s("input",{"onUpdate:modelValue":D=>S.steps=D,type:"checkbox"},null,8,ha),[[oe,S.steps]])]),s("div",ya,[$a,N(s("input",{"onUpdate:modelValue":D=>S.end=D,type:"checkbox"},null,8,Sa),[[oe,S.end]])]),S.blocks?(t(),l("div",wa,[s("div",xa,[p("Blocks ("+E(S.blocks.length)+"):",1),(t(),l("button",{class:"add",onClick:D=>I(G),key:"addblock"+G},[b(P,null,{default:B(()=>[Ca]),_:1})],8,Ia))]),(t(!0),l(y,null,V(S.blocks,(D,W)=>(t(),l("div",Aa,[s("button",{class:"rm",onClick:g=>L(G,W)},[b(P,null,{default:B(()=>[Oa]),_:1})],8,Ta),s("div",Ba,[La,N(s("input",{"onUpdate:modelValue":g=>D.width=g},null,8,Ea),[[K,D.width]])]),Ma,s("div",Fa,[p("Content ("+E(D.content.length)+"):",1),s("button",{class:"add",onClick:g=>f(G,W,"simple")},"Simple",8,Da),s("button",{class:"add",onClick:g=>f(G,W,"text")},"Text",8,Va),s("button",{class:"add",onClick:g=>f(G,W,"math")},"Math",8,ja),s("button",{class:"add",onClick:g=>f(G,W,"term")},"Term",8,za),s("button",{class:"add",onClick:g=>f(G,W,"img")},"Img",8,Na),s("button",{class:"add",onClick:g=>f(G,W,"br")},"br",8,Pa),s("button",{class:"add",onClick:g=>f(G,W,"dragdrop")},"dragdrop",8,Ua),s("button",{class:"add",onClick:g=>f(G,W,"select")},"select",8,Ga)]),(t(!0),l(y,null,V(D.content,(g,x)=>(t(),l("div",Ra,[s("button",{class:"rm",onClick:h=>C(G,W,x)},[b(P,null,{default:B(()=>[Ja]),_:1})],8,Ha),typeof D.content[x]=="string"?(t(),l("div",qa,[Wa,N(s("input",{"onUpdate:modelValue":h=>D.content[x]=h},null,8,Qa),[[K,D.content[x]]])])):(t(!0),l(y,{key:1},V(g,(h,F)=>(t(),l("div",Ka,[p(E(F),1),typeof D.content[x][F]=="string"?N((t(),l("input",{key:0,"onUpdate:modelValue":X=>D.content[x][F]=X},null,8,Xa)),[[K,D.content[x][F]]]):(t(!0),l(y,{key:1},V(D.content[x][F],(X,fe)=>(t(),l("div",Ya,E(fe),1))),256))]))),256))]))),256))]))),256))])):T("",!0)]))),256))])):T("",!0)])]),_:1}),b(z,null,{default:B(()=>[s("div",Za,[s("div",eo,[s("button",{onClick:u[7]||(u[7]=S=>c.value="json")},[b(P,null,{default:B(()=>[to]),_:1})]),s("button",{onClick:u[8]||(u[8]=S=>c.value="play")},[b(P,null,{default:B(()=>[so]),_:1})]),s("button",{onClick:u[9]||(u[9]=S=>c.value="import")},[b(P,null,{default:B(()=>[ao]),_:1})])]),c.value=="json"&&i.value?(t(),O(d(we),{key:0,data:i.value,"show-length":!0,"show-line":!0,"show-select-controller":!0,onClick:q},null,8,["data"])):c.value=="play"?(t(),l(y,{key:1},[],64)):c.value=="import"?N((t(),l("textarea",{key:2,"onUpdate:modelValue":u[10]||(u[10]=S=>a.value=S),onChange:M,placeholder:"Import json"},null,544)),[[K,a.value]]):T("",!0)])]),_:1})],64)}}};var no=R(oo,[["__scopeId","data-v-68aae306"]]);const lo={class:"menu justify-between rounded w-56 overflow-y-auto p-4 bg-white m-1"},co={class:"menu-title"},io=["src"],ro={class:"text-center"},uo={class:"text-dark text-xl font-bold mt-2"},vo={class:"text-center"},_o={class:"text-sm"},mo=s("hr",{class:"mt-1"},null,-1),bo={class:"menu-title flex justify-center my-5"},po=s("hr",{class:"mb-1"},null,-1),ko={class:"menu bg-transparent menu-vertical w-full"},fo=["onClick"],go=s("hr",{class:"mt-auto"},null,-1),ho=s("hr",{class:"my-2"},null,-1),yo={props:{},setup(e){$("blocked");const a=$("activityFile"),c=$("statusFile"),n=o=>{c.value.step=0,c.value.screen=o};return(o,r)=>{const v=te("perfect-scrollbar");return t(),l("div",lo,[s("div",co,[s("img",{class:"w-12 mx-auto",src:"odas/assets/icons/"+d(a).programa+"/"+d(a).materia+".png"},null,8,io)]),s("div",ro,[s("h1",uo,E(d(a).title),1)]),s("div",vo,[s("div",_o,E(d(a).conf.materia),1)]),mo,s("div",bo,[b(Lt)]),po,b(v,{class:"w-full"},{default:B(()=>[s("ul",ko,[(t(!0),l(y,null,V(d(a).screens,(_,i)=>(t(),l("li",{onClick:m=>n(i)},[s("div",{class:U(["gap-px",i==d(c).screen?"active":""])},[b(P,{class:U(["text-sm",i==d(c).screen?"text-white":""])},{default:B(()=>[p(E(_.icon),1)]),_:2},1032,["class"]),p("\xA0"+E(_.title),1)],2)],8,fo))),256))])]),_:1}),go,b(ns),b(ds),ho,b(ke,{class:"mx-auto my-2"})])}}},$o={class:"absolute p-1 bg-white rounded bottom-0.5 left-0.5 right-0.5"},So={class:"btn-group justify-center"},wo=p("navigate_before"),xo=s("span",null,"Anterior",-1),Io=p("Siguiente"),Co=p("navigate_next"),Ao={props:{steps:{type:Number,required:!0}},setup(e,{emit:a}){const c=e,n=$("statusFile"),o=$("Audios");A(0);const r=v=>{o.sclick.play(),(v==-1&&n.value.step>0||v==1&&n.value.step<c.steps-1)&&(n.value.step+=v,a("stepChanged"))};return(v,_)=>(t(),l("div",$o,[s("div",So,[s("button",{class:U(["btn btn-xs",d(n).step==0?"btn-disabled":""]),onClick:_[0]||(_[0]=i=>r(-1))},[b(P,null,{default:B(()=>[wo]),_:1}),xo],2),(t(!0),l(y,null,V(e.steps,(i,m)=>(t(),l("button",{class:U(["btn btn-xs",[d(n).step==m?"btn-active":"non-active"]])},E(m+1),3))),256)),s("button",{class:U(["btn btn-xs",d(n).step==e.steps-1?"btn-disabled":""]),onClick:_[1]||(_[1]=i=>r(1))},[Io,b(P,null,{default:B(()=>[Co]),_:1})],2)])]))}},To={props:{screenindex:{type:Number},screen:{type:Object,required:!0}},setup(e){const a=e,c=$("activityFile"),n=$("statusFile"),o=$("view"),r=A(),v=J(()=>({"--activity-bg":c.conf.color||"#ffffff"})),_=()=>{n.value.step++},i=m=>o.value?!0:a.screen.steps?n.value.step==m:!0;return ce(()=>n.value.step,(m,I)=>{r.value.$el.scrollTop>0&&(r.value.$el.scrollTop=0)}),(m,I)=>{const f=te("perfect-scrollbar");return t(),l("section",{class:U(["screens h-screen relative pt-16 px-2",[d(o)?"desplegado":""]]),style:H(d(v))},[b(f,{class:"w-full",ref_key:"scroll",ref:r},{default:B(()=>[e.screen.end?N((t(),O(Us,{key:1},null,512)),[[le,e.screen.end]]):(t(!0),l(y,{key:0},V(e.screen.blocks,(w,L)=>(t(),O(ue,{name:"slide",mode:"out-in",appear:""},{default:B(()=>[N(b(_s,{islast:e.screen.blocks.length-1==L,block:w,onStepNext:_,onScreenNext:I[0]||(I[0]=C=>m.$emit("screenNext",C)),blockid:e.screenindex+"-"+L},null,8,["islast","block","blockid"]),[[le,i(L)]])]),_:2},1024))),256))]),_:1},512),e.screen.steps&&!d(o)?(t(),O(Ao,{key:0,steps:e.screen.blocks.length},null,8,["steps"])):T("",!0)],6)}}},Oo={class:"relative w-full h-full"},Bo={props:{},setup(e){const a=$("activityFile"),c=$("statusFile"),n=$("view"),o=v=>{c.value.step=0,c.value.screen+=v},r=v=>n.value?!0:v==c.value.screen;return(v,_)=>(t(),l("section",Oo,[b(pe),(t(!0),l(y,null,V(d(a).screens,(i,m)=>N((t(),O(To,{key:m,screen:i,onScreenNext:o,screenindex:m},null,8,["screen","screenindex"])),[[le,r(m)]])),128))]))}},Lo={class:"drawer drawer-mobile"},Eo=s("input",{class:"drawer-toggle",id:"sidebar",type:"checkbox"},null,-1),Mo={class:"drawer-content"},Fo={class:"z-10 btn btn-sm btn-outline gap-2 drawer-button fixed top-2 left-2 text-xs lg:hidden text-white",for:"sidebar"},Do=p("menu_open"),Vo=p("Abrir"),jo={class:"drawer-side"},zo={key:0,class:"drawer-overlay",for:"sidebar"},No={props:{},setup(e){$("activityFile");const a=$("hidemenu");return(c,n)=>(t(),l("div",Lo,[Eo,s("div",Mo,[s("label",Fo,[b(P,null,{default:B(()=>[Do]),_:1}),Vo]),b(Bo)]),s("div",jo,[d(a)?T("",!0):(t(),l("label",zo)),b(yo)])]))}};const Po={setup(e){const a=$("activityFile"),c=$("statusFile"),n=$("builderFile"),o=r=>{c.value.state=r};return(r,v)=>(t(),l(y,null,[d(n)?(t(),O(no,{key:0})):T("",!0),d(a)&&d(c)?(t(),l(y,{key:1},[d(c).state=="@intro"?(t(),O(Zt,{key:0,onStart:v[0]||(v[0]=_=>o("@activity"))})):d(c).state=="@activity"?(t(),O(No,{key:1})):T("",!0)],64)):T("",!0)],64))}};function Uo(e){return!1}var Go={buildBG:Uo},Ro={ALGEBRAI:{materia:"A\u0301lgebra I",color:"215 52% 42%"},LECTURAEOEI:{materia:"Lectura, Expresio\u0301n Oral y Escrita I",color:"215 52% 42%"},LOGICA:{materia:"Lo\u0301gica",color:"215 52% 42%"},QUIMICAI:{materia:"Qui\u0301mica I",color:"215 52% 42%"},TECNOLOGIASIC:{materia:"Tecnologi\u0301as de la Informacio\u0301n y la Comunicacio\u0301n",color:"215 52% 42%"},BIOLOGIA:{materia:"Biologi\u0301a",color:"359 53% 44%"},ETICA:{materia:"E\u0301tica",color:"359 53% 44%"},GEOMETRIAA:{materia:"Geometri\u0301a Anali\u0301tica",color:"359 53% 44%"},CALCULOI:{materia:"Ca\u0301lculo Integral",color:"130 27% 35%"},CIENCIATSV:{materia:"Ciencia, Tecnologi\u0301a, Sociedad y Valores",color:"130 27% 35%"},FISICAII:{materia:"Fi\u0301sica II",color:"130 27% 35%"}},Ho={BIOLOGIAI:{materia:"Biolog\xEDa  I",color:""},ESTRUCTURASM:{materia:"Estructura Socioecono\u0301mica de Me\u0301xico",color:""},ETICAI:{materia:"E\u0301tica I",color:""},FISICAI:{materia:"Fi\u0301sica  I",color:""},GEOGRAFIA:{materia:"Geografi\u0301a",color:""},HISTORIAMI:{materia:"Historia de Me\u0301xico  I",color:""},INFORMATIVAI:{materia:"Informa\u0301tica  I",color:""},LITERATURAI:{materia:"Literatura  I",color:""},MATEMATICASI:{materia:"Matema\u0301ticas  I",color:""},MATEMATICASIII:{materia:"Matema\u0301ticas  III",color:""},METODOLOGIASII:{materia:"Metodologi\u0301a de la Investigacio\u0301n  I",color:""},QUIMICAI:{materia:"Qui\u0301mica  I",color:""},TALLERLRI:{materia:"Taller de Lectura y Redaccio\u0301n  I",color:""}},Jo={DGETI:Ro,DGB:Ho};const ee=["color: #446699","background: #ddff99","font-size: 9px","padding: 2px 5px","border-radius: 4px"].join(";"),qo=Be();ae();var j=xe(Po);j.config.globalProperties.emitter=qo;j.use(Ie);j.use(Ce);j.use(Ae);j.component("Popper",Te);gsap.registerPlugin(Draggable);j.provide("view",A(!1));j.provide("hidemenu",A(!1));j.provide("Audios",{sclick:new Y({source:"odas/assets/sounds/click.mp3"}),scancel:new Y({source:"odas/assets/sounds/cancel.mp3"}),sopen:new Y({source:"odas/assets/sounds/open.mp3"}),sclose:new Y({source:"odas/assets/sounds/close.mp3"}),schange:new Y({source:"odas/assets/sounds/change.mp3"}),sBlockSelect:new Y({source:"odas/assets/sounds/blockSelect.mp3"}),sBlockDrag:new Y({source:"odas/assets/sounds/blockDrag.mp3"}),send:new Y({source:"odas/assets/sounds/end.mp3"})});Qo();function Wo(e){try{JSON.parse(e)}catch{return!1}return!0}async function Qo(){const e=window.location.search,a=new URLSearchParams(e),c=a.get("test"),n=a.get("blocked"),o=a.get("oda"),r=a.get("status"),v=a.get("builder");c!=null?(console.log("%c%s",ee,"::TestMode"),j.provide("test",!0)):j.provide("test",!1),n!=null?(console.log("%c%s",ee,"::BLOCKED"),j.provide("blocked",!0)):j.provide("blocked",!1);const i=A({state:"@intro",screen:0,step:0,answers:{},result:{},finalize:!1}),m=A({total:0,oks:0,errors:0,oksPercentage:0,errorsPercentage:0});if(j.provide("resultsFile",m),o)try{const w=me(o+"_"),C=(await Oe.get("./odas/"+o+"/oda.json")).data;C.conf=Jo[C.programa][C.materia];const M=C.conf.color;var I=document.querySelector("html");if(I&&I.style.setProperty("--p",M),j.provide("activityFile",C),Go.buildBG(C.conf.color),j.provide("statusFile",i),j.provide("builderFile",!1),j.mount("#app"),c!=null){const k=w.getStorageSync("status");if(k){const u=ne.atob(k);if(!u)return!1;const z=JSON.parse(u);if(!z)return!1;i.value=z,console.log("%c%s",ee,"::LoadedData")}}if(r!=null&&r.length>4){const k=ne.atob(r);if(!k)return!1;if(Wo(k)){const u=JSON.parse(k);if(!u)return!1;i.value=u,console.log("%c%s",ee,"::UrlData")}else console.log("%c%s",ee,"::WRONG UrlData")}const q=se.throttle(function(k,u){const z=ne.btoa(JSON.stringify(k.value));w.setStorageSync("status",z);const S={status:z,results:i.value.finalize?m.value:null};var G=JSON.stringify(S);window.top.postMessage(G,"*")},2e3);ce(()=>i,(k,u)=>{if(n!=null)return!1;q(k,u)},{deep:!0}),document.title=C.id+" | "+C.title,c!=null&&(document.title="::TEST:: "+C.id+" | "+C.title)}catch(w){console.log("%c%s",ee,"::Error: "+w);var f=document.getElementById("app");f.innerHTML='<div class="erroroda">ERROR DE CARGA</div>'}else if(v!=null)j.provide("statusFile",!1),j.provide("activityFile",!1),j.provide("builderFile",!0),j.mount("#app");else{var f=document.getElementById("app");f.innerHTML='<div class="erroroda">ODA NO ENCONTRADA</div>'}}const Ko=e=>{var a=e.data;typeof a=="string"&&JSON.parse(a)};window.addEventListener("message",Ko,!1);window.addEventListener("resize",function(){window.innerWidth<=600&&j.config.globalProperties.emitter.emit("sidebarmini")});
