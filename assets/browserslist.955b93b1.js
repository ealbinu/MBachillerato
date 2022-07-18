import{r as ie,a as oe}from"./node-releases.964f411d.js";import{a as ae}from"./caniuse-lite.79211338.js";import{g as ue}from"./@editorjs.ba2deff0.js";import{v as fe}from"./electron-to-chromium.b7f3b613.js";var ce={},le=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"})),de=ue(le);function R(e){this.name="BrowserslistError",this.message=e,this.browserslist=!0,Error.captureStackTrace&&Error.captureStackTrace(this,R)}R.prototype=Error.prototype;var K=R,O=K;function k(){}var pe={loadQueries:function(){throw new O("Sharable configs are not supported in client-side build of Browserslist")},getStat:function(r){return r.stats},loadConfig:function(r){if(r.config)throw new O("Browserslist config are not supported in client-side build")},loadCountry:function(){throw new O("Country statistics are not supported in client-side build of Browserslist")},loadFeature:function(){throw new O("Supports queries are not available in client-side build of Browserslist")},currentNode:function(r,n){return r(["maintained node versions"],n)[0]},parseConfig:k,readConfig:k,findConfig:k,clearCaches:k,oldDataWarning:k},ge=ie,m=ae.agents,B=oe,D=de,p=fe,d=K,l=pe,ve=365.259641*24*60*60*1e3,X=37,N=1,Z=2;function ee(e,r){return(e+".").indexOf(r+".")===0}function me(e){var r=e.slice(1);return o.nodeVersions.some(function(n){return ee(n,r)})}function L(e){return e.filter(function(r){return typeof r=="string"})}function U(e){var r=e;return e.split(".").length===3&&(r=e.split(".").slice(0,-1).join(".")),r}function w(e){return function(n){return e+" "+n}}function z(e){return parseInt(e.split(".")[0])}function _(e,r){if(e.length===0)return[];var n=re(e.map(z)),t=n[n.length-r];if(!t)return e;for(var s=[],i=e.length-1;i>=0&&!(t>z(e[i]));i--)s.unshift(e[i]);return s}function re(e){for(var r=[],n=0;n<e.length;n++)r.indexOf(e[n])===-1&&r.push(e[n]);return r}function F(e,r,n){for(var t in n)e[r+" "+t]=n[t]}function W(e,r){return r=parseFloat(r),e===">"?function(n){return parseFloat(n)>r}:e===">="?function(n){return parseFloat(n)>=r}:e==="<"?function(n){return parseFloat(n)<r}:function(n){return parseFloat(n)<=r}}function he(e,r){return r=r.split(".").map(x),r[1]=r[1]||0,r[2]=r[2]||0,e===">"?function(n){return n=n.split(".").map(x),C(n,r)>0}:e===">="?function(n){return n=n.split(".").map(x),C(n,r)>=0}:e==="<"?function(n){return n=n.split(".").map(x),C(r,n)>0}:function(n){return n=n.split(".").map(x),C(r,n)>=0}}function x(e){return parseInt(e)}function S(e,r){return e<r?-1:e>r?1:0}function C(e,r){return S(parseInt(e[0]),parseInt(r[0]))||S(parseInt(e[1]||"0"),parseInt(r[1]||"0"))||S(parseInt(e[2]||"0"),parseInt(r[2]||"0"))}function Y(e,r){switch(r=r.split(".").map(x),typeof r[1]=="undefined"&&(r[1]="x"),e){case"<=":return function(n){return n=n.split(".").map(x),M(n,r)<=0};case">=":default:return function(n){return n=n.split(".").map(x),M(n,r)>=0}}}function M(e,r){return e[0]!==r[0]?e[0]<r[0]?-1:1:r[1]==="x"?0:e[1]!==r[1]?e[1]<r[1]?-1:1:0}function we(e,r){return e.versions.indexOf(r)!==-1?r:o.versionAliases[e.name][r]?o.versionAliases[e.name][r]:!1}function E(e,r){var n=we(e,r);return n||(e.versions.length===1?e.versions[0]:!1)}function ne(e,r){return e=e/1e3,Object.keys(m).reduce(function(n,t){var s=b(t,r);if(!s)return n;var i=Object.keys(s.releaseDate).filter(function(a){var u=s.releaseDate[a];return u!==null&&u>=e});return n.concat(i.map(w(s.name)))},[])}function q(e){return{name:e.name,versions:e.versions,released:e.released,releaseDate:e.releaseDate}}function xe(e,r){e.versions=e.versions.map(function(s){return r[s]||s}),e.released=e.versions.map(function(s){return r[s]||s});var n={};for(var t in e.releaseDate)n[r[t]||t]=e.releaseDate[t];return e.releaseDate=n,e}function b(e,r){if(e=e.toLowerCase(),e=o.aliases[e]||e,r.mobileToDesktop&&o.desktopNames[e]){var n=o.data[o.desktopNames[e]];if(e==="android")return be(q(o.data[e]),n);var t=q(n);return t.name=e,e==="op_mob"&&(t=xe(t,{"10.0-10.1":"10"})),t}return o.data[e]}function G(e,r){var n=X,t=r[r.length-1];return e.filter(function(s){return/^(?:[2-4]\.|[34]$)/.test(s)}).concat(r.slice(n-t-1))}function be(e,r){return e.released=G(e.released,r.released),e.versions=G(e.versions,r.versions),e}function $(e,r){var n=b(e,r);if(!n)throw new d("Unknown browser "+e);return n}function te(e){return new d("Unknown browser query `"+e+"`. Maybe you are using old Browserslist or made typo in query.")}function j(e,r,n){if(n.mobileToDesktop)return e;var t=o.data.android.released,s=t[t.length-1],i=s-X-r;return i>0?e.slice(-1):e.slice(i-1)}function y(e,r){return Array.isArray(e)?e=se(e.map(P)):e=P(e),e.reduce(function(n,t,s){var i=t.queryString,a=i.indexOf("not ")===0;if(a){if(s===0)throw new d("Write any browsers query (for instance, `defaults`) before `"+i+"`");i=i.slice(4)}for(var u=0;u<J.length;u++){var f=J[u],c=i.match(f.regexp);if(c){var v=[r].concat(c.slice(1)),h=f.select.apply(o,v).map(function(g){var A=g.split(" ");return A[1]==="0"?A[0]+" "+b(A[0],r).versions[0]:g});switch(t.type){case Z:return a?n.filter(function(g){return h.indexOf(g)===-1}):n.filter(function(g){return h.indexOf(g)!==-1});case N:default:if(a){var Q={};return h.forEach(function(g){Q[g]=!0}),n.filter(function(g){return!Q[g]})}return n.concat(h)}}}throw te(i)},[])}var V={};function o(e,r){if(typeof r=="undefined"&&(r={}),typeof r.path=="undefined"&&(r.path=D.resolve?D.resolve("."):"."),typeof e=="undefined"||e===null){var n=o.loadConfig(r);n?e=n:e=o.defaults}if(!(typeof e=="string"||Array.isArray(e)))throw new d("Browser queries must be an array or string. Got "+typeof e+".");var t={ignoreUnknownVersions:r.ignoreUnknownVersions,dangerousExtend:r.dangerousExtend,mobileToDesktop:r.mobileToDesktop,path:r.path,env:r.env};l.oldDataWarning(o.data);var s=l.getStat(r,o.data);if(s){t.customUsage={};for(var i in s)F(t.customUsage,i,s[i])}var a=JSON.stringify([e,t]);if(V[a])return V[a];var u=re(y(e,t)).sort(function(f,c){if(f=f.split(" "),c=c.split(" "),f[0]===c[0]){var v=f[1].split("-")[0],h=c[1].split("-")[0];return C(h.split("."),v.split("."))}else return S(f[0],c[0])});return{}.BROWSERSLIST_DISABLE_CACHE||(V[a]=u),u}function P(e){var r=[];do e=$e(e,r);while(e);return r}function $e(e,r){var n=/^(?:,\s*|\s+or\s+)(.*)/i,t=/^\s+and\s+(.*)/i;return ye(e,function(s,i,a){return t.test(s)?(r.unshift({type:Z,queryString:s.match(t)[1]}),!0):n.test(s)?(r.unshift({type:N,queryString:s.match(n)[1]}),!0):i===a?(r.unshift({type:N,queryString:s.trim()}),!0):!1})}function ye(e,r){for(var n=1,t=e.length;n<=t;n++){var s=e.substr(-n,n);if(r(s,n,t))return e.slice(0,-n)}return""}function se(e){return Array.isArray(e)?e.reduce(function(r,n){return r.concat(se(n))},[]):[e]}o.cache={};o.data={};o.usage={global:{},custom:null};o.defaults=["> 0.5%","last 2 versions","Firefox ESR","not dead"];o.aliases={fx:"firefox",ff:"firefox",ios:"ios_saf",explorer:"ie",blackberry:"bb",explorermobile:"ie_mob",operamini:"op_mini",operamobile:"op_mob",chromeandroid:"and_chr",firefoxandroid:"and_ff",ucandroid:"and_uc",qqandroid:"and_qq"};o.desktopNames={and_chr:"chrome",and_ff:"firefox",ie_mob:"ie",op_mob:"opera",android:"chrome"};o.versionAliases={};o.clearCaches=l.clearCaches;o.parseConfig=l.parseConfig;o.readConfig=l.readConfig;o.findConfig=l.findConfig;o.loadConfig=l.loadConfig;o.coverage=function(e,r){var n;if(typeof r=="undefined")n=o.usage.global;else if(r==="my stats"){var t={};t.path=D.resolve?D.resolve("."):".";var s=l.getStat(t);if(!s)throw new d("Custom usage statistics was not provided");n={};for(var i in s)F(n,i,s[i])}else if(typeof r=="string")r.length>2?r=r.toLowerCase():r=r.toUpperCase(),l.loadCountry(o.usage,r,o.data),n=o.usage[r];else{"dataByBrowser"in r&&(r=r.dataByBrowser),n={};for(var a in r)for(var u in r[a])n[a+" "+u]=r[a][u]}return e.reduce(function(f,c){var v=n[c];return v===void 0&&(v=n[c.replace(/ \S+$/," 0")]),f+(v||0)},0)};function I(e,r){var n=o.nodeVersions.filter(function(t){return ee(t,r)});if(n.length===0){if(e.ignoreUnknownVersions)return[];throw new d("Unknown version "+r+" of Node.js")}return["node "+n[n.length-1]]}function T(e,r,n,t){return r=parseInt(r),n=parseInt(n||"01")-1,t=parseInt(t||"01"),ne(Date.UTC(r,n,t,0,0,0),e)}function H(e,r,n){r=parseFloat(r);var t=o.usage.global;if(n)if(n.match(/^my\s+stats$/i)){if(!e.customUsage)throw new d("Custom usage statistics was not provided");t=e.customUsage}else{var s;n.length===2?s=n.toUpperCase():s=n.toLowerCase(),l.loadCountry(o.usage,s,o.data),t=o.usage[s]}for(var i=Object.keys(t).sort(function(v,h){return t[h]-t[v]}),a=0,u=[],f,c=0;c<i.length&&(f=i[c],!(t[f]===0||(a+=t[f],u.push(f),a>=r)));c++);return u}var J=[{regexp:/^last\s+(\d+)\s+major\s+versions?$/i,select:function(e,r){return Object.keys(m).reduce(function(n,t){var s=b(t,e);if(!s)return n;var i=_(s.released,r);return i=i.map(w(s.name)),s.name==="android"&&(i=j(i,r,e)),n.concat(i)},[])}},{regexp:/^last\s+(\d+)\s+versions?$/i,select:function(e,r){return Object.keys(m).reduce(function(n,t){var s=b(t,e);if(!s)return n;var i=s.released.slice(-r);return i=i.map(w(s.name)),s.name==="android"&&(i=j(i,r,e)),n.concat(i)},[])}},{regexp:/^last\s+(\d+)\s+electron\s+major\s+versions?$/i,select:function(e,r){var n=_(Object.keys(p),r);return n.map(function(t){return"chrome "+p[t]})}},{regexp:/^last\s+(\d+)\s+node\s+major\s+versions?$/i,select:function(e,r){return _(o.nodeVersions,r).map(function(n){return"node "+n})}},{regexp:/^last\s+(\d+)\s+(\w+)\s+major\s+versions?$/i,select:function(e,r,n){var t=$(n,e),s=_(t.released,r),i=s.map(w(t.name));return t.name==="android"&&(i=j(i,r,e)),i}},{regexp:/^last\s+(\d+)\s+electron\s+versions?$/i,select:function(e,r){return Object.keys(p).slice(-r).map(function(n){return"chrome "+p[n]})}},{regexp:/^last\s+(\d+)\s+node\s+versions?$/i,select:function(e,r){return o.nodeVersions.slice(-r).map(function(n){return"node "+n})}},{regexp:/^last\s+(\d+)\s+(\w+)\s+versions?$/i,select:function(e,r,n){var t=$(n,e),s=t.released.slice(-r).map(w(t.name));return t.name==="android"&&(s=j(s,r,e)),s}},{regexp:/^unreleased\s+versions$/i,select:function(e){return Object.keys(m).reduce(function(r,n){var t=b(n,e);if(!t)return r;var s=t.versions.filter(function(i){return t.released.indexOf(i)===-1});return s=s.map(w(t.name)),r.concat(s)},[])}},{regexp:/^unreleased\s+electron\s+versions?$/i,select:function(){return[]}},{regexp:/^unreleased\s+(\w+)\s+versions?$/i,select:function(e,r){var n=$(r,e);return n.versions.filter(function(t){return n.released.indexOf(t)===-1}).map(w(n.name))}},{regexp:/^last\s+(\d*.?\d+)\s+years?$/i,select:function(e,r){return ne(Date.now()-ve*r,e)}},{regexp:/^since (\d+)$/i,select:T},{regexp:/^since (\d+)-(\d+)$/i,select:T},{regexp:/^since (\d+)-(\d+)-(\d+)$/i,select:T},{regexp:/^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%$/,select:function(e,r,n){n=parseFloat(n);var t=o.usage.global;return Object.keys(t).reduce(function(s,i){return r===">"?t[i]>n&&s.push(i):r==="<"?t[i]<n&&s.push(i):r==="<="?t[i]<=n&&s.push(i):t[i]>=n&&s.push(i),s},[])}},{regexp:/^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+my\s+stats$/,select:function(e,r,n){if(n=parseFloat(n),!e.customUsage)throw new d("Custom usage statistics was not provided");var t=e.customUsage;return Object.keys(t).reduce(function(s,i){var a=t[i];return a==null||(r===">"?a>n&&s.push(i):r==="<"?a<n&&s.push(i):r==="<="?a<=n&&s.push(i):a>=n&&s.push(i)),s},[])}},{regexp:/^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/,select:function(e,r,n,t){n=parseFloat(n);var s=l.loadStat(e,t,o.data);if(s){e.customUsage={};for(var i in s)F(e.customUsage,i,s[i])}if(!e.customUsage)throw new d("Custom usage statistics was not provided");var a=e.customUsage;return Object.keys(a).reduce(function(u,f){var c=a[f];return c==null||(r===">"?c>n&&u.push(f):r==="<"?c<n&&u.push(f):r==="<="?c<=n&&u.push(f):c>=n&&u.push(f)),u},[])}},{regexp:/^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+((alt-)?\w\w)$/,select:function(e,r,n,t){n=parseFloat(n),t.length===2?t=t.toUpperCase():t=t.toLowerCase(),l.loadCountry(o.usage,t,o.data);var s=o.usage[t];return Object.keys(s).reduce(function(i,a){var u=s[a];return u==null||(r===">"?u>n&&i.push(a):r==="<"?u<n&&i.push(a):r==="<="?u<=n&&i.push(a):u>=n&&i.push(a)),i},[])}},{regexp:/^cover\s+(\d+|\d+\.\d+|\.\d+)%$/i,select:H},{regexp:/^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(my\s+stats|(alt-)?\w\w)$/i,select:H},{regexp:/^supports\s+([\w-]+)$/,select:function(e,r){l.loadFeature(o.cache,r);var n=o.cache[r];return Object.keys(n).reduce(function(t,s){var i=n[s];return(i.indexOf("y")>=0||i.indexOf("a")>=0)&&t.push(s),t},[])}},{regexp:/^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,select:function(e,r,n){var t=U(r),s=U(n);if(!p[t])throw new d("Unknown version "+r+" of electron");if(!p[s])throw new d("Unknown version "+n+" of electron");return r=parseFloat(r),n=parseFloat(n),Object.keys(p).filter(function(i){var a=parseFloat(i);return a>=r&&a<=n}).map(function(i){return"chrome "+p[i]})}},{regexp:/^node\s+([\d.]+)\s*-\s*([\d.]+)$/i,select:function(e,r,n){return o.nodeVersions.filter(Y(">=",r)).filter(Y("<=",n)).map(function(t){return"node "+t})}},{regexp:/^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,select:function(e,r,n,t){var s=$(r,e);n=parseFloat(E(s,n)||n),t=parseFloat(E(s,t)||t);function i(a){var u=parseFloat(a);return u>=n&&u<=t}return s.released.filter(i).map(w(s.name))}},{regexp:/^electron\s*(>=?|<=?)\s*([\d.]+)$/i,select:function(e,r,n){var t=U(n);return Object.keys(p).filter(W(r,t)).map(function(s){return"chrome "+p[s]})}},{regexp:/^node\s*(>=?|<=?)\s*([\d.]+)$/i,select:function(e,r,n){return o.nodeVersions.filter(he(r,n)).map(function(t){return"node "+t})}},{regexp:/^(\w+)\s*(>=?|<=?)\s*([\d.]+)$/,select:function(e,r,n,t){var s=$(r,e),i=o.versionAliases[s.name][t];return i&&(t=i),s.released.filter(W(n,t)).map(function(a){return s.name+" "+a})}},{regexp:/^(firefox|ff|fx)\s+esr$/i,select:function(){return["firefox 91"]}},{regexp:/(operamini|op_mini)\s+all/i,select:function(){return["op_mini all"]}},{regexp:/^electron\s+([\d.]+)$/i,select:function(e,r){var n=U(r),t=p[n];if(!t)throw new d("Unknown version "+r+" of electron");return["chrome "+t]}},{regexp:/^node\s+(\d+)$/i,select:I},{regexp:/^node\s+(\d+\.\d+)$/i,select:I},{regexp:/^node\s+(\d+\.\d+\.\d+)$/i,select:I},{regexp:/^current\s+node$/i,select:function(e){return[l.currentNode(y,e)]}},{regexp:/^maintained\s+node\s+versions$/i,select:function(e){var r=Date.now(),n=Object.keys(B).filter(function(t){return r<Date.parse(B[t].end)&&r>Date.parse(B[t].start)&&me(t)}).map(function(t){return"node "+t.slice(1)});return y(n,e)}},{regexp:/^phantomjs\s+1.9$/i,select:function(){return["safari 5"]}},{regexp:/^phantomjs\s+2.1$/i,select:function(){return["safari 6"]}},{regexp:/^(\w+)\s+(tp|[\d.]+)$/i,select:function(e,r,n){/^tp$/i.test(n)&&(n="TP");var t=$(r,e),s=E(t,n);if(s)n=s;else if(n.indexOf(".")===-1?s=n+".0":s=n.replace(/\.0$/,""),s=E(t,s),s)n=s;else{if(e.ignoreUnknownVersions)return[];throw new d("Unknown version "+n+" of "+r)}return[t.name+" "+n]}},{regexp:/^browserslist config$/i,select:function(e){return o(void 0,e)}},{regexp:/^extends (.+)$/i,select:function(e,r){return y(l.loadQueries(e,r),e)}},{regexp:/^defaults$/i,select:function(e){return y(o.defaults,e)}},{regexp:/^dead$/i,select:function(e){var r=["ie <= 10","ie_mob <= 11","bb <= 10","op_mob <= 12.1","samsung 4"];return y(r,e)}},{regexp:/^(\w+)$/i,select:function(e,r){throw b(r,e)?new d("Specify versions in Browserslist query for browser "+r):te(r)}}];(function(){for(var e in m){var r=m[e];o.data[e]={name:e,versions:L(m[e].versions),released:L(m[e].versions.slice(0,-3)),releaseDate:m[e].release_date},F(o.usage.global,e,r.usage_global),o.versionAliases[e]={};for(var n=0;n<r.versions.length;n++){var t=r.versions[n];if(!!t&&t.indexOf("-")!==-1)for(var s=t.split("-"),i=0;i<s.length;i++)o.versionAliases[e][s[i]]=t}}o.versionAliases.op_mob["59"]="58",o.nodeVersions=ge.map(function(a){return a.version})})();
