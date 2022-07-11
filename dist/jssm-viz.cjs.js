'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Viz.js 3.7.0 (Graphviz 5.0.0, Expat 2.4.8, Emscripten 3.1.15)
 * @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt MIT licensed
 *
 * This distribution contains other software in object code form:
 * - [Emscripten](https://github.com/emscripten-core/emscripten/blob/master/LICENSE)
 * - [Expat](https://github.com/libexpat/libexpat/blob/master/expat/COPYING)
 * - [Graphviz](https://graphviz.org/license/)
 */
class e$1{_worker;_isNodeWorker;_listeners=[];_nextId=0;_executing=0;constructor(e){this._worker=e;this._isNodeWorker="function"===typeof e.ref;if(this._isNodeWorker){this._worker.on("message",(e=>this._eventListener({data:e})));this._worker.on("error",(e=>this._listeners.forEach((r=>r(e)))));}else {this._worker.addEventListener("message",(e=>this._eventListener(e)));}}_eventListener(e){const{id:r,error:t,result:s}=e.data;this._listeners[r](t,s);delete this._listeners[r];if(this._isNodeWorker&&--this._executing===0){this._worker.unref();}}render(e,r){return new Promise(((t,s)=>{const i=this._nextId++;if(this._isNodeWorker&&this._executing++===0){this._worker.ref();}this._listeners[i]=function(e,r){if(e){const r=new Error(e.message);if(e.fileName)r.fileName=e.fileName;if(e.lineNumber)r.lineNumber=e.lineNumber;if(e.stack)r.stack=e.stack;return s(r)}t(r);};this._worker.postMessage({id:i,src:e,options:r});}))}terminate(){return this._worker.terminate()}}class r$1{_wrapper;constructor(r){if(!r)r={};if(typeof r.workerURL!=="undefined"){this._wrapper=new e$1(new Worker(r.workerURL,{type:"module"}));}else if(typeof r.worker!=="undefined"){this._wrapper=new e$1(r.worker);}else {throw new Error("Must specify workerURL or worker option.")}}renderString(e,{format:r="svg",engine:t="dot",files:s=[],images:i=[],yInvert:n=false,nop:o=0}={}){for(const{path:e,width:r,height:t}of i){s.push({path:e,data:'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n'+'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'+`<svg width="${r}" height="${t}"></svg>`});}return this._wrapper.render(e,{format:r,engine:t,files:s,yInvert:n,nop:o})}renderJSONObject(e,r={}){let{format:t}=r;if(!t||!t.startsWith("json")){t="json";}return this.renderString(e,{...r,format:t}).then(JSON.parse)}terminateWorker(){return this._wrapper.terminate()}}

/**
 * Viz.js 3.7.0 (Graphviz 5.0.0, Expat 2.4.8, Emscripten 3.1.15)
 * @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt MIT licensed
 *
 * This distribution contains other software in object code form:
 * - [Emscripten](https://github.com/emscripten-core/emscripten/blob/master/LICENSE)
 * - [Expat](https://github.com/libexpat/libexpat/blob/master/expat/COPYING)
 * - [Graphviz](https://graphviz.org/license/)
 */
var n=function(n){var r,e,t;n=n||{},r||(r=void 0!==n?n:{}),r.ready=new Promise((function(n,r){e=n,t=r;}));var a,i=Object.assign({},r),o="./this.program",u=(n,r)=>{throw r},f="";f=0!==(f=self.location.href).indexOf("blob:")?f.substr(0,f.replace(/[?#].*/,"").lastIndexOf("/")+1):"",a=n=>{var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)};var s,c=r.print||console.log.bind(console),l=r.printErr||console.warn.bind(console);Object.assign(r,i),i=null,r.thisProgram&&(o=r.thisProgram),r.quit&&(u=r.quit),r.wasmBinary&&(s=r.wasmBinary);var h=r.noExitRuntime||!0;"object"!=typeof WebAssembly&&q("no native wasm support detected");var d,p=!1,w="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function v(n,r,e){var t=r+e;for(e=r;n[e]&&!(e>=t);)++e;if(16<e-r&&n.buffer&&w)return w.decode(n.subarray(r,e));for(t="";r<e;){var a=n[r++];if(128&a){var i=63&n[r++];if(192==(224&a))t+=String.fromCharCode((31&a)<<6|i);else {var o=63&n[r++];65536>(a=224==(240&a)?(15&a)<<12|i<<6|o:(7&a)<<18|i<<12|o<<6|63&n[r++])?t+=String.fromCharCode(a):(a-=65536,t+=String.fromCharCode(55296|a>>10,56320|1023&a));}}else t+=String.fromCharCode(a);}return t}function m(n,r){return n?v(_,n,r):""}function y(n,r,e,t){if(!(0<t))return 0;var a=e;t=e+t-1;for(var i=0;i<n.length;++i){var o=n.charCodeAt(i);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&n.charCodeAt(++i)),127>=o){if(e>=t)break;r[e++]=o;}else {if(2047>=o){if(e+1>=t)break;r[e++]=192|o>>6;}else {if(65535>=o){if(e+2>=t)break;r[e++]=224|o>>12;}else {if(e+3>=t)break;r[e++]=240|o>>18,r[e++]=128|o>>12&63;}r[e++]=128|o>>6&63;}r[e++]=128|63&o;}}return r[e]=0,e-a}function g(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);55296<=t&&57343>=t&&(t=65536+((1023&t)<<10)|1023&n.charCodeAt(++e)),127>=t?++r:r=2047>=t?r+2:65535>=t?r+3:r+4;}return r}var b,A,_,k,C,E,M,T,j,F="undefined"==typeof TextDecoder&&void 0;function P(n,r){for(var e=n>>1,t=e+r/2;!(e>=t)&&C[e];)++e;if(32<(e<<=1)-n&&F)return F.decode(_.subarray(n,e));for(e="",t=0;!(t>=r/2);++t){var a=k[n+2*t>>1];if(0==a)break;e+=String.fromCharCode(a);}return e}function D(n,r,e){if(void 0===e&&(e=2147483647),2>e)return 0;var t=r;e=(e-=2)<2*n.length?e/2:n.length;for(var a=0;a<e;++a)k[r>>1]=n.charCodeAt(a),r+=2;return k[r>>1]=0,r-t}function S(n){return 2*n.length}function W(n,r){for(var e=0,t="";!(e>=r/4);){var a=E[n+4*e>>2];if(0==a)break;++e,65536<=a?(a-=65536,t+=String.fromCharCode(55296|a>>10,56320|1023&a)):t+=String.fromCharCode(a);}return t}function O(n,r,e){if(void 0===e&&(e=2147483647),4>e)return 0;var t=r;e=t+e-4;for(var a=0;a<n.length;++a){var i=n.charCodeAt(a);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),E[r>>2]=i,(r+=4)+4>e)break}return E[r>>2]=0,r-t}function x(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);55296<=t&&57343>=t&&++e,r+=4;}return r}function U(){var n=d.buffer;b=n,r.HEAP8=A=new Int8Array(n),r.HEAP16=k=new Int16Array(n),r.HEAP32=E=new Int32Array(n),r.HEAPU8=_=new Uint8Array(n),r.HEAPU16=C=new Uint16Array(n),r.HEAPU32=M=new Uint32Array(n),r.HEAPF32=T=new Float32Array(n),r.HEAPF64=j=new Float64Array(n);}var R,I=[],z=[],H=[];function N(){var n=r.preRun.shift();I.unshift(n);}var Y,B=0,V=null;function q(n){throw r.onAbort&&r.onAbort(n),l(n="Aborted("+n+")"),p=!0,n=new WebAssembly.RuntimeError(n+". Build with -sASSERTIONS for more info."),t(n),n}function L(){return Y.startsWith("data:application/octet-stream;base64,")}if(r.locateFile){if(Y="render.wasm",!L()){var G=Y;Y=r.locateFile?r.locateFile(G,f):f+G;}}else Y=new URL("render.wasm",!1).toString();function J(){var n=Y;try{if(n==Y&&s)return new Uint8Array(s);if(a)return a(n);throw "both async and sync fetching of the wasm failed"}catch(n){q(n);}}var X,$,K={159192:(n,r)=>{n=m(n),r=m(r);var e="/";e="string"==typeof e?e:En(e);for(var t=en(n).split("/").reverse();t.length;){var a=t.pop();if(a){e=rn(e+"/"+a);try{zn(e,16895,0);}catch(n){}}}if(t=function(){return rn(Array.prototype.slice.call(arguments,0).join("/"))}("/",n),(n={}).flags=n.flags||577,t=qn(t,n.flags,n.mode),"string"==typeof r)r=y(r,e=new Uint8Array(g(r)+1),0,e.length),Jn(t,e,0,r,n.cb);else {if(!ArrayBuffer.isView(r))throw Error("Unsupported data type");Jn(t,r,0,r.byteLength,n.cb);}Ln(t);}};function Z(n){for(;0<n.length;)n.shift()(r);}function Q(n){this.pa=n-24,this.jb=function(n){M[this.pa+4>>2]=n;},this.fb=function(n){M[this.pa+8>>2]=n;},this.hb=function(){E[this.pa>>2]=0;},this.bb=function(){A[this.pa+12>>0]=0;},this.ib=function(){A[this.pa+13>>0]=0;},this.ta=function(n,r){this.Za(),this.jb(n),this.fb(r),this.hb(),this.bb(),this.ib();},this.Za=function(){M[this.pa+16>>2]=0;};}var nn=(n,r)=>{for(var e=0,t=n.length-1;0<=t;t--){var a=n[t];"."===a?n.splice(t,1):".."===a?(n.splice(t,1),e++):e&&(n.splice(t,1),e--);}if(r)for(;e;e--)n.unshift("..");return n},rn=n=>{var r="/"===n.charAt(0),e="/"===n.substr(-1);return (n=nn(n.split("/").filter((n=>!!n)),!r).join("/"))||r||(n="."),n&&e&&(n+="/"),(r?"/":"")+n},en=n=>{var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(n).slice(1);return n=r[0],r=r[1],n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},tn=n=>{if("/"===n)return "/";var r=(n=(n=rn(n)).replace(/\/$/,"")).lastIndexOf("/");return -1===r?n:n.substr(r+1)};function an(){for(var n="",r=!1,e=arguments.length-1;-1<=e&&!r;e--){if("string"!=typeof(r=0<=e?arguments[e]:"/"))throw new TypeError("Arguments to path.resolve must be strings");if(!r)return "";n=r+"/"+n,r="/"===r.charAt(0);}return (r?"/":"")+(n=nn(n.split("/").filter((n=>!!n)),!r).join("/"))||"."}var on=[];function un(n,r){on[n]={input:[],ga:[],wa:r},Rn(n,hn);}var fn,sn,cn,ln,hn={open:function(n){var r=on[n.node.ya];if(!r)throw new _n(43);n.ea=r,n.seekable=!1;},close:function(n){n.ea.wa.flush(n.ea);},flush:function(n){n.ea.wa.flush(n.ea);},read:function(n,r,e,t){if(!n.ea||!n.ea.wa.Sa)throw new _n(60);for(var a=0,i=0;i<t;i++){try{var o=n.ea.wa.Sa(n.ea);}catch(n){throw new _n(29)}if(void 0===o&&0===a)throw new _n(6);if(null==o)break;a++,r[e+i]=o;}return a&&(n.node.timestamp=Date.now()),a},write:function(n,r,e,t){if(!n.ea||!n.ea.wa.La)throw new _n(60);try{for(var a=0;a<t;a++)n.ea.wa.La(n.ea,r[e+a]);}catch(n){throw new _n(29)}return t&&(n.node.timestamp=Date.now()),a}},dn={Sa:function(n){if(!n.input.length){var r=null;if("undefined"!=typeof window&&"function"==typeof window.prompt?null!==(r=window.prompt("Input: "))&&(r+="\n"):"function"==typeof readline&&null!==(r=readline())&&(r+="\n"),!r)return null;n.input=Ur(r,!0);}return n.input.shift()},La:function(n,r){null===r||10===r?(c(v(n.ga,0)),n.ga=[]):0!=r&&n.ga.push(r);},flush:function(n){n.ga&&0<n.ga.length&&(c(v(n.ga,0)),n.ga=[]);}},pn={La:function(n,r){null===r||10===r?(l(v(n.ga,0)),n.ga=[]):0!=r&&n.ga.push(r);},flush:function(n){n.ga&&0<n.ga.length&&(l(v(n.ga,0)),n.ga=[]);}},wn={ia:null,ma:function(){return wn.createNode(null,"/",16895,0)},createNode:function(n,r,e,t){if(24576==(61440&e)||4096==(61440&e))throw new _n(63);return wn.ia||(wn.ia={dir:{node:{ha:wn.aa.ha,ka:wn.aa.ka,xa:wn.aa.xa,Ba:wn.aa.Ba,Va:wn.aa.Va,Ia:wn.aa.Ia,Ea:wn.aa.Ea,Ua:wn.aa.Ua,Fa:wn.aa.Fa},stream:{qa:wn.ba.qa}},file:{node:{ha:wn.aa.ha,ka:wn.aa.ka},stream:{qa:wn.ba.qa,read:wn.ba.read,write:wn.ba.write,Oa:wn.ba.Oa,Ca:wn.ba.Ca,Da:wn.ba.Da}},link:{node:{ha:wn.aa.ha,ka:wn.aa.ka,za:wn.aa.za},stream:{}},Pa:{node:{ha:wn.aa.ha,ka:wn.aa.ka},stream:Un}}),16384==(61440&(e=Fn(n,r,e,t)).mode)?(e.aa=wn.ia.dir.node,e.ba=wn.ia.dir.stream,e.ca={}):32768==(61440&e.mode)?(e.aa=wn.ia.file.node,e.ba=wn.ia.file.stream,e.da=0,e.ca=null):40960==(61440&e.mode)?(e.aa=wn.ia.link.node,e.ba=wn.ia.link.stream):8192==(61440&e.mode)&&(e.aa=wn.ia.Pa.node,e.ba=wn.ia.Pa.stream),e.timestamp=Date.now(),n&&(n.ca[r]=e,n.timestamp=e.timestamp),e},yb:function(n){return n.ca?n.ca.subarray?n.ca.subarray(0,n.da):new Uint8Array(n.ca):new Uint8Array(0)},Qa:function(n,r){var e=n.ca?n.ca.length:0;e>=r||(r=Math.max(r,e*(1048576>e?2:1.125)>>>0),0!=e&&(r=Math.max(r,256)),e=n.ca,n.ca=new Uint8Array(r),0<n.da&&n.ca.set(e.subarray(0,n.da),0));},rb:function(n,r){if(n.da!=r)if(0==r)n.ca=null,n.da=0;else {var e=n.ca;n.ca=new Uint8Array(r),e&&n.ca.set(e.subarray(0,Math.min(r,n.da))),n.da=r;}},aa:{ha:function(n){var r={};return r.gb=8192==(61440&n.mode)?n.id:1,r.Ka=n.id,r.mode=n.mode,r.pb=1,r.uid=0,r.kb=0,r.ya=n.ya,16384==(61440&n.mode)?r.size=4096:32768==(61440&n.mode)?r.size=n.da:40960==(61440&n.mode)?r.size=n.link.length:r.size=0,r.Ya=new Date(n.timestamp),r.ob=new Date(n.timestamp),r.eb=new Date(n.timestamp),r.$a=4096,r.ab=Math.ceil(r.size/r.$a),r},ka:function(n,r){void 0!==r.mode&&(n.mode=r.mode),void 0!==r.timestamp&&(n.timestamp=r.timestamp),void 0!==r.size&&wn.rb(n,r.size);},xa:function(){throw kn[44]},Ba:function(n,r,e,t){return wn.createNode(n,r,e,t)},Va:function(n,r,e){if(16384==(61440&n.mode)){try{var t=jn(r,e);}catch(n){}if(t)for(var a in t.ca)throw new _n(55)}delete n.parent.ca[n.name],n.parent.timestamp=Date.now(),n.name=e,r.ca[e]=n,r.timestamp=n.parent.timestamp,n.parent=r;},Ia:function(n,r){delete n.ca[r],n.timestamp=Date.now();},Ea:function(n,r){var e,t=jn(n,r);for(e in t.ca)throw new _n(55);delete n.ca[r],n.timestamp=Date.now();},Ua:function(n){var r,e=[".",".."];for(r in n.ca)n.ca.hasOwnProperty(r)&&e.push(r);return e},Fa:function(n,r,e){return (n=wn.createNode(n,r,41471,0)).link=e,n},za:function(n){if(40960!=(61440&n.mode))throw new _n(28);return n.link}},ba:{read:function(n,r,e,t,a){var i=n.node.ca;if(a>=n.node.da)return 0;if(8<(n=Math.min(n.node.da-a,t))&&i.subarray)r.set(i.subarray(a,a+n),e);else for(t=0;t<n;t++)r[e+t]=i[a+t];return n},write:function(n,r,e,t,a,i){if(r.buffer===A.buffer&&(i=!1),!t)return 0;if((n=n.node).timestamp=Date.now(),r.subarray&&(!n.ca||n.ca.subarray)){if(i)return n.ca=r.subarray(e,e+t),n.da=t;if(0===n.da&&0===a)return n.ca=r.slice(e,e+t),n.da=t;if(a+t<=n.da)return n.ca.set(r.subarray(e,e+t),a),t}if(wn.Qa(n,a+t),n.ca.subarray&&r.subarray)n.ca.set(r.subarray(e,e+t),a);else for(i=0;i<t;i++)n.ca[a+i]=r[e+i];return n.da=Math.max(n.da,a+t),t},qa:function(n,r,e){if(1===e?r+=n.position:2===e&&32768==(61440&n.node.mode)&&(r+=n.node.da),0>r)throw new _n(28);return r},Oa:function(n,r,e){wn.Qa(n.node,r+e),n.node.da=Math.max(n.node.da,r+e);},Ca:function(n,r,e,t,a){if(32768!=(61440&n.node.mode))throw new _n(43);if(n=n.node.ca,2&a||n.buffer!==b){if((0<e||e+r<n.length)&&(n=n.subarray?n.subarray(e,e+r):Array.prototype.slice.call(n,e,e+r)),e=!0,r=65536*Math.ceil(r/65536),(a=Br(65536,r))?(_.fill(0,a,a+r),r=a):r=0,!r)throw new _n(48);A.set(n,r);}else e=!1,r=n.byteOffset;return {pa:r,Wa:e}},Da:function(n,r,e,t,a){if(32768!=(61440&n.node.mode))throw new _n(43);return 2&a||wn.ba.write(n,r,0,t,e,!1),0}}},vn=null,mn={},yn=[],gn=1,bn=null,An=!0,_n=null,kn={},Cn=(n,r={})=>{if(!(n=an("/",n)))return {path:"",node:null};if(8<(r=Object.assign({Ra:!0,Ma:0},r)).Ma)throw new _n(32);n=nn(n.split("/").filter((n=>!!n)),!1);for(var e=vn,t="/",a=0;a<n.length;a++){var i=a===n.length-1;if(i&&r.parent)break;if(e=jn(e,n[a]),t=rn(t+"/"+n[a]),e.ua&&(!i||i&&r.Ra)&&(e=e.ua.root),!i||r.Aa)for(i=0;40960==(61440&e.mode);)if(e=Yn(t),t=an(en(t),e),e=Cn(t,{Ma:r.Ma+1}).node,40<i++)throw new _n(32)}return {path:t,node:e}},En=n=>{for(var r;;){if(n===n.parent)return n=n.ma.Ta,r?"/"!==n[n.length-1]?n+"/"+r:n+r:n;r=r?n.name+"/"+r:n.name,n=n.parent;}},Mn=(n,r)=>{for(var e=0,t=0;t<r.length;t++)e=(e<<5)-e+r.charCodeAt(t)|0;return (n+e>>>0)%bn.length},Tn=n=>{var r=Mn(n.parent.id,n.name);if(bn[r]===n)bn[r]=n.va;else for(r=bn[r];r;){if(r.va===n){r.va=n.va;break}r=r.va;}},jn=(n,r)=>{var e;if(e=(e=Sn(n,"x"))?e:n.aa.xa?0:2)throw new _n(e,n);for(e=bn[Mn(n.id,r)];e;e=e.va){var t=e.name;if(e.parent.id===n.id&&t===r)return e}return n.aa.xa(n,r)},Fn=(n,r,e,t)=>(n=new Wr(n,r,e,t),r=Mn(n.parent.id,n.name),n.va=bn[r],bn[r]=n),Pn={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},Dn=n=>{var r=["r","w","rw"][3&n];return 512&n&&(r+="w"),r},Sn=(n,r)=>An?0:!r.includes("r")||292&n.mode?r.includes("w")&&!(146&n.mode)||r.includes("x")&&!(73&n.mode)?2:0:2,Wn=(n,r)=>{try{return jn(n,r),20}catch(n){}return Sn(n,"wx")},On=(n,r,e)=>{try{var t=jn(n,r);}catch(n){return n.fa}if(n=Sn(n,"wx"))return n;if(e){if(16384!=(61440&t.mode))return 54;if(t===t.parent||"/"===En(t))return 10}else if(16384==(61440&t.mode))return 31;return 0},xn=(n,r)=>(cn||((cn=function(){this.ta={};}).prototype={},Object.defineProperties(cn.prototype,{object:{get:function(){return this.node},set:function(n){this.node=n;}},flags:{get:function(){return this.ta.flags},set:function(n){this.ta.flags=n;}},position:{get:function(){return this.ta.position},set:function(n){this.ta.position=n;}}})),n=Object.assign(new cn,n),r=((n=0)=>{for(;4096>=n;n++)if(!yn[n])return n;throw new _n(33)})(r),n.oa=r,yn[r]=n),Un={open:n=>{n.ba=mn[n.node.ya].ba,n.ba.open&&n.ba.open(n);},qa:()=>{throw new _n(70)}},Rn=(n,r)=>{mn[n]={ba:r};},In=(n,r)=>{var e="/"===r,t=!r;if(e&&vn)throw new _n(10);if(!e&&!t){var a=Cn(r,{Ra:!1});if(r=a.path,(a=a.node).ua)throw new _n(10);if(16384!=(61440&a.mode))throw new _n(54)}r={type:n,Bb:{},Ta:r,nb:[]},(n=n.ma(r)).ma=r,r.root=n,e?vn=n:a&&(a.ua=r,a.ma&&a.ma.nb.push(r));},zn=(n,r,e)=>{var t=Cn(n,{parent:!0}).node;if(!(n=tn(n))||"."===n||".."===n)throw new _n(28);var a=Wn(t,n);if(a)throw new _n(a);if(!t.aa.Ba)throw new _n(63);return t.aa.Ba(t,n,r,e)},Hn=(n,r,e)=>{void 0===e&&(e=r,r=438),zn(n,8192|r,e);},Nn=(n,r)=>{if(!an(n))throw new _n(44);var e=Cn(r,{parent:!0}).node;if(!e)throw new _n(44);r=tn(r);var t=Wn(e,r);if(t)throw new _n(t);if(!e.aa.Fa)throw new _n(63);e.aa.Fa(e,r,n);},Yn=n=>{if(!(n=Cn(n).node))throw new _n(44);if(!n.aa.za)throw new _n(28);return an(En(n.parent),n.aa.za(n))},Bn=(n,r)=>{if(!(n=Cn(n,{Aa:!r}).node))throw new _n(44);if(!n.aa.ha)throw new _n(63);return n.aa.ha(n)},Vn=n=>Bn(n,!0),qn=(n,e,t)=>{if(""===n)throw new _n(44);if("string"==typeof e){var a=Pn[e];if(void 0===a)throw Error("Unknown file open mode: "+e);e=a;}if(t=64&e?4095&(void 0===t?438:t)|32768:0,"object"==typeof n)var i=n;else {n=rn(n);try{i=Cn(n,{Aa:!(131072&e)}).node;}catch(n){}}if(a=!1,64&e)if(i){if(128&e)throw new _n(20)}else i=zn(n,t,0),a=!0;if(!i)throw new _n(44);if(8192==(61440&i.mode)&&(e&=-513),65536&e&&16384!=(61440&i.mode))throw new _n(54);if(!a&&(t=i?40960==(61440&i.mode)?32:16384==(61440&i.mode)&&("r"!==Dn(e)||512&e)?31:Sn(i,Dn(e)):44))throw new _n(t);if(512&e&&!a){if(!(t="string"==typeof(t=i)?Cn(t,{Aa:!0}).node:t).aa.ka)throw new _n(63);if(16384==(61440&t.mode))throw new _n(31);if(32768!=(61440&t.mode))throw new _n(28);if(a=Sn(t,"w"))throw new _n(a);t.aa.ka(t,{size:0,timestamp:Date.now()});}return e&=-131713,(i=xn({node:i,path:En(i),flags:e,seekable:!0,position:0,ba:i.ba,xb:[],error:!1})).ba.open&&i.ba.open(i),!r.logReadFiles||1&e||(ln||(ln={}),n in ln||(ln[n]=1)),i},Ln=n=>{if(null===n.oa)throw new _n(8);n.Ja&&(n.Ja=null);try{n.ba.close&&n.ba.close(n);}catch(n){throw n}finally{yn[n.oa]=null;}n.oa=null;},Gn=(n,r,e)=>{if(null===n.oa)throw new _n(8);if(!n.seekable||!n.ba.qa)throw new _n(70);if(0!=e&&1!=e&&2!=e)throw new _n(28);n.position=n.ba.qa(n,r,e),n.xb=[];},Jn=(n,r,e,t,a)=>{var i=void 0;if(0>t||0>i)throw new _n(28);if(null===n.oa)throw new _n(8);if(0==(2097155&n.flags))throw new _n(8);if(16384==(61440&n.node.mode))throw new _n(31);if(!n.ba.write)throw new _n(28);n.seekable&&1024&n.flags&&Gn(n,0,2);var o=void 0!==i;if(o){if(!n.seekable)throw new _n(70)}else i=n.position;return r=n.ba.write(n,r,e,t,i,a),o||(n.position+=r),r},Xn=()=>{_n||((_n=function(n,r){this.node=r,this.sb=function(n){this.fa=n;},this.sb(n),this.message="FS error";}).prototype=Error(),_n.prototype.constructor=_n,[44].forEach((n=>{kn[n]=new _n(n),kn[n].stack="<generic error, no stack>";})));},$n=(n,r,e)=>{n=rn("/dev/"+n);var t=((n,r)=>{var e=0;return n&&(e|=365),r&&(e|=146),e})(!!r,!!e);sn||(sn=64);var a=sn++<<8|0;Rn(a,{open:n=>{n.seekable=!1;},close:()=>{e&&e.buffer&&e.buffer.length&&e(10);},read:(n,e,t,a)=>{for(var i=0,o=0;o<a;o++){try{var u=r();}catch(n){throw new _n(29)}if(void 0===u&&0===i)throw new _n(6);if(null==u)break;i++,e[t+o]=u;}return i&&(n.node.timestamp=Date.now()),i},write:(n,r,t,a)=>{for(var i=0;i<a;i++)try{e(r[t+i]);}catch(n){throw new _n(29)}return a&&(n.node.timestamp=Date.now()),i}}),Hn(n,t,a);},Kn={};function Zn(n,r,e){if("/"===r.charAt(0))return r;if(-100===n)n="/";else {if(!(n=yn[n]))throw new _n(8);n=n.path;}if(0==r.length){if(!e)throw new _n(44);return n}return rn(n+"/"+r)}function Qn(n,r,e){try{var t=n(r);}catch(n){if(n&&n.node&&rn(r)!==rn(En(n.node)))return -54;throw n}return E[e>>2]=t.gb,E[e+4>>2]=0,E[e+8>>2]=t.Ka,E[e+12>>2]=t.mode,E[e+16>>2]=t.pb,E[e+20>>2]=t.uid,E[e+24>>2]=t.kb,E[e+28>>2]=t.ya,E[e+32>>2]=0,$=[t.size>>>0,(X=t.size,1<=+Math.abs(X)?0<X?(0|Math.min(+Math.floor(X/4294967296),4294967295))>>>0:~~+Math.ceil((X-+(~~X>>>0))/4294967296)>>>0:0)],E[e+40>>2]=$[0],E[e+44>>2]=$[1],E[e+48>>2]=4096,E[e+52>>2]=t.ab,E[e+56>>2]=t.Ya.getTime()/1e3|0,E[e+60>>2]=0,E[e+64>>2]=t.ob.getTime()/1e3|0,E[e+68>>2]=0,E[e+72>>2]=t.eb.getTime()/1e3|0,E[e+76>>2]=0,$=[t.Ka>>>0,(X=t.Ka,1<=+Math.abs(X)?0<X?(0|Math.min(+Math.floor(X/4294967296),4294967295))>>>0:~~+Math.ceil((X-+(~~X>>>0))/4294967296)>>>0:0)],E[e+80>>2]=$[0],E[e+84>>2]=$[1],0}var nr=void 0;function rr(){return E[(nr+=4)-4>>2]}function er(n){if(!(n=yn[n]))throw new _n(8);return n}function tr(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var ar=void 0;function ir(n){for(var r="";_[n];)r+=ar[_[n++]];return r}var or={},ur={},fr={};function sr(n){if(void 0===n)return "_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=r&&57>=r?"_"+n:n}function cr(n,r){return n=sr(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function lr(n){var r=Error,e=cr(n,(function(r){this.name=n,this.message=r,void 0!==(r=Error(r).stack)&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""));}));return e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var hr=void 0;function dr(n){throw new hr(n)}var pr=void 0;function wr(n,r,e={}){if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=r.name;if(n||dr('type "'+t+'" must have a positive integer typeid pointer'),ur.hasOwnProperty(n)){if(e.lb)return;dr("Cannot register type '"+t+"' twice");}ur[n]=r,delete fr[n],or.hasOwnProperty(n)&&(r=or[n],delete or[n],r.forEach((n=>n())));}var vr=[],mr=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function yr(n){return this.fromWireType(E[n>>2])}function gr(n,r){switch(r){case 2:return function(n){return this.fromWireType(T[n>>2])};case 3:return function(n){return this.fromWireType(j[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function br(n){for(;n.length;){var r=n.pop();n.pop()(r);}}function Ar(n,e,t){r.hasOwnProperty(n)?((void 0===t||void 0!==r[n].ja&&void 0!==r[n].ja[t])&&dr("Cannot register public name '"+n+"' twice"),function(n,e){var t=r;if(void 0===t[n].ja){var a=t[n];t[n]=function(){return t[n].ja.hasOwnProperty(arguments.length)||dr("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[n].ja+")!"),t[n].ja[arguments.length].apply(this,arguments)},t[n].ja=[],t[n].ja[a.Xa]=a;}}(n,n),r.hasOwnProperty(t)&&dr("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),r[n].ja[t]=e):(r[n]=e,void 0!==t&&(r[n].Ab=t));}function _r(n,e){var t=(n=ir(n)).includes("j")?function(n,e){var t=[];return function(){if(t.length=0,Object.assign(t,arguments),n.includes("j")){var a=r["dynCall_"+n];a=t&&t.length?a.apply(null,[e].concat(t)):a.call(null,e);}else a=R.get(e).apply(null,t);return a}}(n,e):R.get(e);return "function"!=typeof t&&dr("unknown function pointer with signature "+n+": "+e),t}var kr=void 0;function Cr(n){var r=ir(n=Nr(n));return zr(n),r}function Er(n,r,e){switch(r){case 0:return e?function(n){return A[n]}:function(n){return _[n]};case 1:return e?function(n){return k[n>>1]}:function(n){return C[n>>1]};case 2:return e?function(n){return E[n>>2]}:function(n){return M[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var Mr,Tr=[],jr={};function Fr(){if(!Mr){var n,r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:o||"./this.program"};for(n in jr)void 0===jr[n]?delete r[n]:r[n]=jr[n];var e=[];for(n in r)e.push(n+"="+r[n]);Mr=e;}return Mr}function Pr(n){return 0==n%4&&(0!=n%100||0==n%400)}var Dr=[31,29,31,30,31,30,31,31,30,31,30,31],Sr=[31,28,31,30,31,30,31,31,30,31,30,31];function Wr(n,r,e,t){n||(n=this),this.parent=n,this.ma=n.ma,this.ua=null,this.id=gn++,this.name=r,this.mode=e,this.aa={},this.ba={},this.ya=t;}Object.defineProperties(Wr.prototype,{read:{get:function(){return 365==(365&this.mode)},set:function(n){n?this.mode|=365:this.mode&=-366;}},write:{get:function(){return 146==(146&this.mode)},set:function(n){n?this.mode|=146:this.mode&=-147;}}}),Xn(),bn=Array(4096),In(wn,"/"),zn("/tmp",16895,0),zn("/home",16895,0),zn("/home/web_user",16895,0),(()=>{zn("/dev",16895,0),Rn(259,{read:()=>0,write:(n,r,e,t)=>t}),Hn("/dev/null",259),un(1280,dn),un(1536,pn),Hn("/dev/tty",1280),Hn("/dev/tty1",1536);var n=function(){if("object"==typeof crypto&&"function"==typeof crypto.getRandomValues){var n=new Uint8Array(1);return function(){return crypto.getRandomValues(n),n[0]}}return function(){q("randomDevice");}}();$n("random",n),$n("urandom",n),zn("/dev/shm",16895,0),zn("/dev/shm/tmp",16895,0);})(),(()=>{zn("/proc",16895,0);var n=zn("/proc/self",16895,0);zn("/proc/self/fd",16895,0),In({ma:()=>{var r=Fn(n,"fd",16895,73);return r.aa={xa:(n,r)=>{var e=yn[+r];if(!e)throw new _n(8);return (n={parent:null,ma:{Ta:"fake"},aa:{za:()=>e.path}}).parent=n}},r}},"/proc/self/fd");})();for(var Or=Array(256),xr=0;256>xr;++xr)Or[xr]=String.fromCharCode(xr);function Ur(n,r){var e=Array(g(n)+1);return n=y(n,e,0,e.length),r&&(e.length=n),e}ar=Or,hr=r.BindingError=lr("BindingError"),pr=r.InternalError=lr("InternalError"),r.count_emval_handles=function(){for(var n=0,r=5;r<mr.length;++r)void 0!==mr[r]&&++n;return n},r.get_first_emval=function(){for(var n=5;n<mr.length;++n)if(void 0!==mr[n])return mr[n];return null},kr=r.UnboundTypeError=lr("UnboundTypeError");var Rr={a:function(n,r,e,t){q("Assertion failed: "+m(n)+", at: "+[r?m(r):"unknown filename",e,t?m(t):"unknown function"]);},f:function(n){return Ir(n+24)+24},e:function(n,r,e){throw new Q(n).ta(r,e),n},I:function(n,r,e){try{if(r=Zn(n,r=m(r)),-8&e)return -28;var t=Cn(r,{Aa:!0}).node;return t?(n="",4&e&&(n+="r"),2&e&&(n+="w"),1&e&&(n+="x"),n&&Sn(t,n)?-2:0):-44}catch(n){if(void 0===Kn||!(n instanceof _n))throw n;return -n.fa}},l:function(n,r,e){nr=e;try{var t=er(n);switch(r){case 0:var a=rr();return 0>a?-28:xn(t,a).oa;case 1:case 2:case 6:case 7:return 0;case 3:return t.flags;case 4:return a=rr(),t.flags|=a,0;case 5:return a=rr(),k[a+0>>1]=2,0;case 16:case 8:default:return -28;case 9:return E[Hr()>>2]=28,-1}}catch(n){if(void 0===Kn||!(n instanceof _n))throw n;return -n.fa}},E:function(n,r){try{var e=er(n);return Qn(Bn,e.path,r)}catch(n){if(void 0===Kn||!(n instanceof _n))throw n;return -n.fa}},G:function(n,r,e){nr=e;try{var t=er(n);switch(r){case 21509:case 21505:case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:case 21523:case 21524:return t.ea?0:-59;case 21519:if(!t.ea)return -59;var a=rr();return E[a>>2]=0;case 21520:return t.ea?-28:-59;case 21531:if(n=a=rr(),!t.ba.mb)throw new _n(59);return t.ba.mb(t,r,n);default:q("bad ioctl syscall "+r);}}catch(n){if(void 0===Kn||!(n instanceof _n))throw n;return -n.fa}},C:function(n,r,e,t){try{r=m(r);var a=256&t;return r=Zn(n,r,4096&t),Qn(a?Vn:Bn,r,e)}catch(n){if(void 0===Kn||!(n instanceof _n))throw n;return -n.fa}},m:function(n,r,e,t){nr=t;try{r=Zn(n,r=m(r));var a=t?rr():0;return qn(r,e,a).oa}catch(n){if(void 0===Kn||!(n instanceof _n))throw n;return -n.fa}},D:function(n,r){try{return n=m(n),Qn(Bn,n,r)}catch(n){if(void 0===Kn||!(n instanceof _n))throw n;return -n.fa}},x:function(n,r,e){try{if(r=Zn(n,r=m(r)),0===e){var t=r,a=Cn(t,{parent:!0}).node;if(!a)throw new _n(44);var i=tn(t),o=jn(a,i),u=On(a,i,!1);if(u)throw new _n(u);if(!a.aa.Ia)throw new _n(63);if(o.ua)throw new _n(10);a.aa.Ia(a,i),Tn(o);}else if(512===e){t=Cn(a=r,{parent:!0}).node;var f=tn(a),s=jn(t,f),c=On(t,f,!0);if(c)throw new _n(c);if(!t.aa.Ea)throw new _n(63);if(s.ua)throw new _n(10);t.aa.Ea(t,f),Tn(s);}else q("Invalid flags passed to unlinkat");return 0}catch(n){if(void 0===Kn||!(n instanceof _n))throw n;return -n.fa}},t:function(){},q:function(n,r,e,t,a){var i=tr(e);wr(n,{name:r=ir(r),fromWireType:function(n){return !!n},toWireType:function(n,r){return r?t:a},argPackAdvance:8,readValueFromPointer:function(n){if(1===e)var t=A;else if(2===e)t=k;else {if(4!==e)throw new TypeError("Unknown boolean type size: "+r);t=E;}return this.fromWireType(t[n>>i])},na:null});},J:function(n,r){wr(n,{name:r=ir(r),fromWireType:function(n){n||dr("Cannot use deleted val. handle = "+n);var r=mr[n].value;return 4<n&&0==--mr[n].qb&&(mr[n]=void 0,vr.push(n)),r},toWireType:function(n,r){return (n=>{switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=vr.length?vr.pop():mr.length;return mr[r]={qb:1,value:n},r}})(r)},argPackAdvance:8,readValueFromPointer:yr,na:null});},p:function(n,r,e){e=tr(e),wr(n,{name:r=ir(r),fromWireType:function(n){return n},toWireType:function(n,r){return r},argPackAdvance:8,readValueFromPointer:gr(r,e),na:null});},g:function(n,e,t,a,i,o){var u=function(n,r){for(var e=[],t=0;t<n;t++)e.push(M[r+4*t>>2]);return e}(e,t);n=ir(n),i=_r(a,i),Ar(n,(function(){!function(n,r){var e=[],t={};throw r.forEach((function n(r){t[r]||ur[r]||(fr[r]?fr[r].forEach(n):(e.push(r),t[r]=!0));})),new kr(n+": "+e.map(Cr).join([", "]))}("Cannot call "+n+" due to unbound types",u);}),e-1),function(n,r){function e(n){if((n=r(n)).length!==t.length)throw new pr("Mismatched type converter count");for(var e=0;e<t.length;++e)wr(t[e],n[e]);}var t=[];t.forEach((function(r){fr[r]=n;}));var a=Array(n.length),i=[],o=0;n.forEach(((n,r)=>{ur.hasOwnProperty(n)?a[r]=ur[n]:(i.push(n),or.hasOwnProperty(n)||(or[n]=[]),or[n].push((()=>{a[r]=ur[n],++o===i.length&&e(a);})));})),0===i.length&&e(a);}(u,(function(t){var a=n,u=n;t=[t[0],null].concat(t.slice(1));var f=i,s=t.length;2>s&&dr("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var c=null!==t[1]&&!1,l=!1,h=1;h<t.length;++h)if(null!==t[h]&&void 0===t[h].na){l=!0;break}var d="void"!==t[0].name,p="",w="";for(h=0;h<s-2;++h)p+=(0!==h?", ":"")+"arg"+h,w+=(0!==h?", ":"")+"arg"+h+"Wired";u="return function "+sr(u)+"("+p+") {\nif (arguments.length !== "+(s-2)+") {\nthrowBindingError('function "+u+" called with ' + arguments.length + ' arguments, expected "+(s-2)+" args!');\n}\n",l&&(u+="var destructors = [];\n");var v=l?"destructors":"null";for(p="throwBindingError invoker fn runDestructors retType classParam".split(" "),f=[dr,f,o,br,t[0],t[1]],c&&(u+="var thisWired = classParam.toWireType("+v+", this);\n"),h=0;h<s-2;++h)u+="var arg"+h+"Wired = argType"+h+".toWireType("+v+", arg"+h+"); // "+t[h+2].name+"\n",p.push("argType"+h),f.push(t[h+2]);if(c&&(w="thisWired"+(0<w.length?", ":"")+w),u+=(d?"var rv = ":"")+"invoker(fn"+(0<w.length?", ":"")+w+");\n",l)u+="runDestructors(destructors);\n";else for(h=c?1:2;h<t.length;++h)s=1===h?"thisWired":"arg"+(h-2)+"Wired",null!==t[h].na&&(u+=s+"_dtor("+s+"); // "+t[h].name+"\n",p.push(s+"_dtor"),f.push(t[h].na));if(d&&(u+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p.push(u+"}\n"),t=function(n){var r=Function;if(!(r instanceof Function))throw new TypeError("new_ called with constructor type "+typeof r+" which is not a function");var e=cr(r.name||"unknownFunctionName",(function(){}));return e.prototype=r.prototype,e=new e,(n=r.apply(e,n))instanceof Object?n:e}(p).apply(null,f),h=e-1,!r.hasOwnProperty(a))throw new pr("Replacing nonexistant public symbol");return void 0!==r[a].ja&&void 0!==h?r[a].ja[h]=t:(r[a]=t,r[a].Xa=h),[]}));},d:function(n,r,e,t,a){r=ir(r),-1===a&&(a=4294967295),a=tr(e);var i=n=>n;if(0===t){var o=32-8*e;i=n=>n<<o>>>o;}e=r.includes("unsigned")?function(n,r){return r>>>0}:function(n,r){return r},wr(n,{name:r,fromWireType:i,toWireType:e,argPackAdvance:8,readValueFromPointer:Er(r,a,0!==t),na:null});},c:function(n,r,e){function t(n){var r=M;return new a(b,r[1+(n>>=2)],r[n])}var a=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];wr(n,{name:e=ir(e),fromWireType:t,argPackAdvance:8,readValueFromPointer:t},{lb:!0});},o:function(n,r){var e="std::string"===(r=ir(r));wr(n,{name:r,fromWireType:function(n){var r=M[n>>2],t=n+4;if(e)for(var a=t,i=0;i<=r;++i){var o=t+i;if(i==r||0==_[o]){if(a=m(a,o-a),void 0===u)var u=a;else u+=String.fromCharCode(0),u+=a;a=o+1;}}else {for(u=Array(r),i=0;i<r;++i)u[i]=String.fromCharCode(_[t+i]);u=u.join("");}return zr(n),u},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var t="string"==typeof r;t||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||dr("Cannot pass non-string to std::string");var a=e&&t?g(r):r.length,i=Ir(4+a+1),o=i+4;if(M[i>>2]=a,e&&t)y(r,_,o,a+1);else if(t)for(t=0;t<a;++t){var u=r.charCodeAt(t);255<u&&(zr(o),dr("String has UTF-16 code units that do not fit in 8 bits")),_[o+t]=u;}else for(t=0;t<a;++t)_[o+t]=r[t];return null!==n&&n.push(zr,i),i},argPackAdvance:8,readValueFromPointer:yr,na:function(n){zr(n);}});},j:function(n,r,e){if(e=ir(e),2===r)var t=P,a=D,i=S,o=()=>C,u=1;else 4===r&&(t=W,a=O,i=x,o=()=>M,u=2);wr(n,{name:e,fromWireType:function(n){for(var e,a=M[n>>2],i=o(),f=n+4,s=0;s<=a;++s){var c=n+4+s*r;s!=a&&0!=i[c>>u]||(f=t(f,c-f),void 0===e?e=f:(e+=String.fromCharCode(0),e+=f),f=c+r);}return zr(n),e},toWireType:function(n,t){"string"!=typeof t&&dr("Cannot pass non-string to C++ string type "+e);var o=i(t),f=Ir(4+o+r);return M[f>>2]=o>>u,a(t,f+4,o+r),null!==n&&n.push(zr,f),f},argPackAdvance:8,readValueFromPointer:yr,na:function(n){zr(n);}});},r:function(n,r){wr(n,{zb:!0,name:r=ir(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}});},n:function(){return Date.now()},H:function(){return !0},y:function(n,r,e,t,a,i){try{var o=yn[t];if(!o)return -8;if(0!=(2&r)&&0==(2&e)&&2!=(2097155&o.flags))throw new _n(2);if(1==(2097155&o.flags))throw new _n(2);if(!o.ba.Ca)throw new _n(43);var u=o.ba.Ca(o,n,a,r,e),f=u.pa;return E[i>>2]=u.Wa,f}catch(n){if(void 0===Kn||!(n instanceof _n))throw n;return -n.fa}},z:function(n,r,e,t,a,i){try{var o=yn[a];o&&2&e&&o&&o.ba.Da&&o.ba.Da(o,_.slice(n,n+r),i,r,t);}catch(n){if(void 0===Kn||!(n instanceof _n))throw n;return -n.fa}},b:function(){q("");},K:function(n,r,e){var t;for(Tr.length=0,e>>=2;t=_[r++];)e+=105!=t&e,Tr.push(105==t?E[e]:j[e++>>1]),++e;return K[n].apply(null,Tr)},w:function(n){var r=_.length;if(2147483648<(n>>>=0))return !1;for(var e=1;4>=e;e*=2){var t=r*(1+.2/e);t=Math.min(t,n+100663296);var a=Math;t=Math.max(n,t),a=a.min.call(a,2147483648,t+(65536-t%65536)%65536);n:{try{d.grow(a-b.byteLength+65535>>>16),U();var i=1;break n}catch(n){}i=void 0;}if(i)return !0}return !1},A:function(n,r){var e=0;return Fr().forEach((function(t,a){var i=r+e;for(a=M[n+4*a>>2]=i,i=0;i<t.length;++i)A[a++>>0]=t.charCodeAt(i);A[a>>0]=0,e+=t.length+1;})),0},B:function(n,r){var e=Fr();M[n>>2]=e.length;var t=0;return e.forEach((function(n){t+=n.length+1;})),M[r>>2]=t,0},h:function(n){h||(r.onExit&&r.onExit(n),p=!0),u(n,new Vr(n));},i:function(n){try{var r=er(n);return Ln(r),0}catch(n){if(void 0===Kn||!(n instanceof _n))throw n;return n.fa}},F:function(n,r,e,t){try{n:{var a=er(n);n=r;for(var i=r=0;i<e;i++){var o=M[n>>2],u=M[n+4>>2];n+=8;var f=a,s=o,c=u,l=void 0,h=A;if(0>c||0>l)throw new _n(28);if(null===f.oa)throw new _n(8);if(1==(2097155&f.flags))throw new _n(8);if(16384==(61440&f.node.mode))throw new _n(31);if(!f.ba.read)throw new _n(28);var d=void 0!==l;if(d){if(!f.seekable)throw new _n(70)}else l=f.position;var p=f.ba.read(f,h,s,c,l);d||(f.position+=p);var w=p;if(0>w){var v=-1;break n}if(r+=w,w<u)break}v=r;}return E[t>>2]=v,0}catch(n){if(void 0===Kn||!(n instanceof _n))throw n;return n.fa}},s:function(n,r,e,t,a){try{if(r=e+2097152>>>0<4194305-!!r?(r>>>0)+4294967296*e:NaN,isNaN(r))return 61;var i=er(n);return Gn(i,r,t),$=[i.position>>>0,(X=i.position,1<=+Math.abs(X)?0<X?(0|Math.min(+Math.floor(X/4294967296),4294967295))>>>0:~~+Math.ceil((X-+(~~X>>>0))/4294967296)>>>0:0)],E[a>>2]=$[0],E[a+4>>2]=$[1],i.Ja&&0===r&&0===t&&(i.Ja=null),0}catch(n){if(void 0===Kn||!(n instanceof _n))throw n;return n.fa}},k:function(n,r,e,t){try{n:{var a=er(n);n=r;for(var i=r=0;i<e;i++){var o=M[n>>2],u=M[n+4>>2];n+=8;var f=Jn(a,A,o,u);if(0>f){var s=-1;break n}r+=f;}s=r;}return M[t>>2]=s,0}catch(n){if(void 0===Kn||!(n instanceof _n))throw n;return n.fa}},u:function(){},v:function(n,r,e,t){return function(n,r,e,t){function a(n,r,e){for(n="number"==typeof n?n.toString():n||"";n.length<r;)n=e[0]+n;return n}function i(n,r){return a(n,r,"0")}function o(n,r){function e(n){return 0>n?-1:0<n?1:0}var t;return 0===(t=e(n.getFullYear()-r.getFullYear()))&&0===(t=e(n.getMonth()-r.getMonth()))&&(t=e(n.getDate()-r.getDate())),t}function u(n){switch(n.getDay()){case 0:return new Date(n.getFullYear()-1,11,29);case 1:return n;case 2:return new Date(n.getFullYear(),0,3);case 3:return new Date(n.getFullYear(),0,2);case 4:return new Date(n.getFullYear(),0,1);case 5:return new Date(n.getFullYear()-1,11,31);case 6:return new Date(n.getFullYear()-1,11,30)}}function f(n){var r=n.ra;for(n=new Date(new Date(n.sa+1900,0,1).getTime());0<r;){var e=n.getMonth(),t=(Pr(n.getFullYear())?Dr:Sr)[e];if(!(r>t-n.getDate())){n.setDate(n.getDate()+r);break}r-=t-n.getDate()+1,n.setDate(1),11>e?n.setMonth(e+1):(n.setMonth(0),n.setFullYear(n.getFullYear()+1));}return e=new Date(n.getFullYear()+1,0,4),r=u(new Date(n.getFullYear(),0,4)),e=u(e),0>=o(r,n)?0>=o(e,n)?n.getFullYear()+1:n.getFullYear():n.getFullYear()-1}var s=E[t+40>>2];for(var c in t={vb:E[t>>2],ub:E[t+4>>2],Ga:E[t+8>>2],Na:E[t+12>>2],Ha:E[t+16>>2],sa:E[t+20>>2],la:E[t+24>>2],ra:E[t+28>>2],Cb:E[t+32>>2],tb:E[t+36>>2],wb:s?m(s):""},e=m(e),s={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})e=e.replace(new RegExp(c,"g"),s[c]);var l="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),h="January February March April May June July August September October November December".split(" ");for(c in s={"%a":function(n){return l[n.la].substring(0,3)},"%A":function(n){return l[n.la]},"%b":function(n){return h[n.Ha].substring(0,3)},"%B":function(n){return h[n.Ha]},"%C":function(n){return i((n.sa+1900)/100|0,2)},"%d":function(n){return i(n.Na,2)},"%e":function(n){return a(n.Na,2," ")},"%g":function(n){return f(n).toString().substring(2)},"%G":function(n){return f(n)},"%H":function(n){return i(n.Ga,2)},"%I":function(n){return 0==(n=n.Ga)?n=12:12<n&&(n-=12),i(n,2)},"%j":function(n){for(var r=0,e=0;e<=n.Ha-1;r+=(Pr(n.sa+1900)?Dr:Sr)[e++]);return i(n.Na+r,3)},"%m":function(n){return i(n.Ha+1,2)},"%M":function(n){return i(n.ub,2)},"%n":function(){return "\n"},"%p":function(n){return 0<=n.Ga&&12>n.Ga?"AM":"PM"},"%S":function(n){return i(n.vb,2)},"%t":function(){return "\t"},"%u":function(n){return n.la||7},"%U":function(n){return i(Math.floor((n.ra+7-n.la)/7),2)},"%V":function(n){var r=Math.floor((n.ra+7-(n.la+6)%7)/7);if(2>=(n.la+371-n.ra-2)%7&&r++,r)53==r&&(4==(e=(n.la+371-n.ra)%7)||3==e&&Pr(n.sa)||(r=1));else {r=52;var e=(n.la+7-n.ra-1)%7;(4==e||5==e&&Pr(n.sa%400-1))&&r++;}return i(r,2)},"%w":function(n){return n.la},"%W":function(n){return i(Math.floor((n.ra+7-(n.la+6)%7)/7),2)},"%y":function(n){return (n.sa+1900).toString().substring(2)},"%Y":function(n){return n.sa+1900},"%z":function(n){var r=0<=(n=n.tb);return n=Math.abs(n)/60,(r?"+":"-")+String("0000"+(n/60*100+n%60)).slice(-4)},"%Z":function(n){return n.wb},"%%":function(){return "%"}},e=e.replace(/%%/g,"\0\0"),s)e.includes(c)&&(e=e.replace(new RegExp(c,"g"),s[c](t)));return (c=Ur(e=e.replace(/\0\0/g,"%"),!1)).length>r?0:(A.set(c,n),c.length-1)}(n,r,e,t)}};!function(){function n(n){r.asm=n.exports,d=r.asm.L,U(),R=r.asm.O,z.unshift(r.asm.M),B--,r.monitorRunDependencies&&r.monitorRunDependencies(B),0==B&&V&&(n=V,V=null,n());}function e(r){n(r.instance);}function a(n){return (s||"function"!=typeof fetch?Promise.resolve().then((function(){return J()})):fetch(Y,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw "failed to load wasm binary file at '"+Y+"'";return n.arrayBuffer()})).catch((function(){return J()}))).then((function(n){return WebAssembly.instantiate(n,i)})).then((function(n){return n})).then(n,(function(n){l("failed to asynchronously prepare wasm: "+n),q(n);}))}var i={a:Rr};if(B++,r.monitorRunDependencies&&r.monitorRunDependencies(B),r.instantiateWasm)try{return r.instantiateWasm(i,n)}catch(n){return l("Module.instantiateWasm callback failed with error: "+n),!1}(s||"function"!=typeof WebAssembly.instantiateStreaming||L()||"function"!=typeof fetch?a(e):fetch(Y,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,i).then(e,(function(n){return l("wasm streaming compile failed: "+n),l("falling back to ArrayBuffer instantiation"),a(e)}))}))).catch(t);}(),r.___wasm_call_ctors=function(){return (r.___wasm_call_ctors=r.asm.M).apply(null,arguments)};var Ir=r._malloc=function(){return (Ir=r._malloc=r.asm.N).apply(null,arguments)},zr=r._free=function(){return (zr=r._free=r.asm.P).apply(null,arguments)},Hr=r.___errno_location=function(){return (Hr=r.___errno_location=r.asm.Q).apply(null,arguments)},Nr=r.___getTypeName=function(){return (Nr=r.___getTypeName=r.asm.R).apply(null,arguments)};r.___embind_register_native_and_builtin_types=function(){return (r.___embind_register_native_and_builtin_types=r.asm.S).apply(null,arguments)};var Yr,Br=r._emscripten_builtin_memalign=function(){return (Br=r._emscripten_builtin_memalign=r.asm.T).apply(null,arguments)};function Vr(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n;}function qr(){function n(){if(!Yr&&(Yr=!0,r.calledRun=!0,!p)){if(r.noFSInit||fn||(fn=!0,Xn(),r.stdin=r.stdin,r.stdout=r.stdout,r.stderr=r.stderr,r.stdin?$n("stdin",r.stdin):Nn("/dev/tty","/dev/stdin"),r.stdout?$n("stdout",null,r.stdout):Nn("/dev/tty","/dev/stdout"),r.stderr?$n("stderr",null,r.stderr):Nn("/dev/tty1","/dev/stderr"),qn("/dev/stdin",0),qn("/dev/stdout",1),qn("/dev/stderr",1)),An=!1,Z(z),e(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;){var n=r.postRun.shift();H.unshift(n);}Z(H);}}if(!(0<B)){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)N();Z(I),0<B||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("");}),1),n();}),1)):n());}}if(r.___cxa_is_pointer_type=function(){return (r.___cxa_is_pointer_type=r.asm.U).apply(null,arguments)},r.dynCall_iiij=function(){return (r.dynCall_iiij=r.asm.V).apply(null,arguments)},r.dynCall_viij=function(){return (r.dynCall_viij=r.asm.W).apply(null,arguments)},r.dynCall_jiji=function(){return (r.dynCall_jiji=r.asm.X).apply(null,arguments)},r.dynCall_viijii=function(){return (r.dynCall_viijii=r.asm.Y).apply(null,arguments)},r.dynCall_iiiiij=function(){return (r.dynCall_iiiiij=r.asm.Z).apply(null,arguments)},r.dynCall_iiiiijj=function(){return (r.dynCall_iiiiijj=r.asm._).apply(null,arguments)},r.dynCall_iiiiiijj=function(){return (r.dynCall_iiiiiijj=r.asm.$).apply(null,arguments)},V=function n(){Yr||qr(),Yr||(V=n);},r.run=qr,r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);0<r.preInit.length;)r.preInit.pop()();return qr(),n.ready};let r,e,t;function a(r){const{id:a,src:i,options:o}=r.data;return async function(){return void 0===t&&(t=await e.then(n)),t}().then((n=>{const r=function(n,r,e){for(const{path:r,data:t}of e.files)n.vizCreateFile(r,t);n.vizSetY_invert(e.yInvert?1:0),n.vizSetNop(e.nop||0);const t=n.vizRenderFromString(r,e.format,e.engine),a=n.vizLastErrorMessage();if(""!==a)throw new Error(a);return t}(n,i,o);postMessage({id:a,result:r});})).catch((n=>{const r=n instanceof Error?{message:n.message,fileName:n.fileName,lineNumber:n.lineNumber,stack:n.stack}:{message:n.toString()};postMessage({id:a,error:r});}))}e=Promise.resolve({}),r=n=>e=Promise.resolve(n),addEventListener("message",a);var i=r;

var reductions = {
  "abkhazian" : "ab",
  "аҧсуа бызшәа, аҧсшәа" : "ab",
  "ab" : "ab",
  "abk" : "ab",
  "аҧсуа бызшәа" : "ab",
  "аҧсшәа" : "ab",
  "afar" : "aa",
  "afaraf" : "aa",
  "aa" : "aa",
  "aar" : "aa",
  "afrikaans" : "af",
  "af" : "af",
  "afr" : "af",
  "akan" : "ak",
  "ak" : "ak",
  "aka" : "ak",
  "aka + 2" : "ak",
  "albanian" : "sq",
  "shqip" : "sq",
  "sq" : "sq",
  "sqi" : "sq",
  "alb" : "sq",
  "sqi + 4" : "sq",
  "amharic" : "am",
  "አማርኛ" : "am",
  "am" : "am",
  "amh" : "am",
  "arabic" : "ar",
  "العربية" : "ar",
  "ar" : "ar",
  "ara" : "ar",
  "ara + 30" : "ar",
  "aragonese" : "an",
  "aragonés" : "an",
  "an" : "an",
  "arg" : "an",
  "armenian" : "hy",
  "հայերեն" : "hy",
  "hy" : "hy",
  "hye" : "hy",
  "arm" : "hy",
  "assamese" : "as",
  "অসমীয়া" : "as",
  "as" : "as",
  "asm" : "as",
  "avaric" : "av",
  "авар мацӏ, магӏарул мацӏ" : "av",
  "av" : "av",
  "ava" : "av",
  "авар мацӏ" : "av",
  "магӏарул мацӏ" : "av",
  "avestan" : "ae",
  "avesta" : "ae",
  "ae" : "ae",
  "ave" : "ae",
  "aymara" : "ay",
  "aymar aru" : "ay",
  "ay" : "ay",
  "aym" : "ay",
  "aym + 2" : "ay",
  "azerbaijani" : "az",
  "azərbaycan dili" : "az",
  "az" : "az",
  "aze" : "az",
  "aze + 2" : "az",
  "bambara" : "bm",
  "bamanankan" : "bm",
  "bm" : "bm",
  "bam" : "bm",
  "bashkir" : "ba",
  "башҡорт теле" : "ba",
  "ba" : "ba",
  "bak" : "ba",
  "basque" : "eu",
  "euskara, euskera" : "eu",
  "eu" : "eu",
  "eus" : "eu",
  "baq" : "eu",
  "euskara" : "eu",
  "euskera" : "eu",
  "belarusian" : "be",
  "беларуская мова" : "be",
  "be" : "be",
  "bel" : "be",
  "bengali" : "bn",
  "বাংলা" : "bn",
  "bn" : "bn",
  "ben" : "bn",
  "bihari languages" : "bh",
  "भोजपुरी" : "bh",
  "bh" : "bh",
  "bih" : "bh",
  "bislama" : "bi",
  "bi" : "bi",
  "bis" : "bi",
  "bosnian" : "bs",
  "bosanski jezik" : "bs",
  "bs" : "bs",
  "bos" : "bs",
  "breton" : "br",
  "brezhoneg" : "br",
  "br" : "br",
  "bre" : "br",
  "bulgarian" : "bg",
  "български език" : "bg",
  "bg" : "bg",
  "bul" : "bg",
  "burmese" : "my",
  "ဗမာစာ" : "my",
  "my" : "my",
  "mya" : "my",
  "bur" : "my",
  "catalan, valencian" : "ca",
  "català, valencià" : "ca",
  "ca" : "ca",
  "cat" : "ca",
  "català" : "ca",
  "valencià" : "ca",
  "chamorro" : "ch",
  "chamoru" : "ch",
  "ch" : "ch",
  "cha" : "ch",
  "chechen" : "ce",
  "нохчийн мотт" : "ce",
  "ce" : "ce",
  "che" : "ce",
  "chichewa, chewa, nyanja" : "ny",
  "chicheŵa, chinyanja" : "ny",
  "ny" : "ny",
  "nya" : "ny",
  "chicheŵa" : "ny",
  "chinyanja" : "ny",
  "chinese" : "zh",
  "中文 (zhōngwén), 汉语, 漢語" : "zh",
  "zh" : "zh",
  "zho" : "zh",
  "chi" : "zh",
  "zho + 13" : "zh",
  "中文 (zhōngwén)" : "zh",
  "汉语" : "zh",
  "漢語" : "zh",
  "chuvash" : "cv",
  "чӑваш чӗлхи" : "cv",
  "cv" : "cv",
  "chv" : "cv",
  "cornish" : "kw",
  "kernewek" : "kw",
  "kw" : "kw",
  "cor" : "kw",
  "corsican" : "co",
  "corsu, lingua corsa" : "co",
  "co" : "co",
  "cos" : "co",
  "corsu" : "co",
  "lingua corsa" : "co",
  "cree" : "cr",
  "ᓀᐦᐃᔭᐍᐏᐣ" : "cr",
  "cr" : "cr",
  "cre" : "cr",
  "cre + 6" : "cr",
  "croatian" : "hr",
  "hrvatski jezik" : "hr",
  "hr" : "hr",
  "hrv" : "hr",
  "czech" : "cs",
  "čeština, český jazyk" : "cs",
  "cs" : "cs",
  "ces" : "cs",
  "cze" : "cs",
  "čeština" : "cs",
  "český jazyk" : "cs",
  "danish" : "da",
  "dansk" : "da",
  "da" : "da",
  "dan" : "da",
  "divehi, dhivehi, maldivian" : "dv",
  "ދިވެހި" : "dv",
  "dv" : "dv",
  "div" : "dv",
  "dutch, flemish" : "nl",
  "nederlands, vlaams" : "nl",
  "nl" : "nl",
  "nld" : "nl",
  "dut" : "nl",
  "nederlands" : "nl",
  "vlaams" : "nl",
  "dzongkha" : "dz",
  "རྫོང་ཁ" : "dz",
  "dz" : "dz",
  "dzo" : "dz",
  "english" : "en",
  "en" : "en",
  "eng" : "en",
  "esperanto" : "eo",
  "eo" : "eo",
  "epo" : "eo",
  "estonian" : "et",
  "eesti, eesti keel" : "et",
  "et" : "et",
  "est" : "et",
  "est + 2" : "et",
  "eesti" : "et",
  "eesti keel" : "et",
  "ewe" : "ee",
  "eʋegbe" : "ee",
  "ee" : "ee",
  "faroese" : "fo",
  "føroyskt" : "fo",
  "fo" : "fo",
  "fao" : "fo",
  "fijian" : "fj",
  "vosa vakaviti" : "fj",
  "fj" : "fj",
  "fij" : "fj",
  "finnish" : "fi",
  "suomi, suomen kieli" : "fi",
  "fi" : "fi",
  "fin" : "fi",
  "suomi" : "fi",
  "suomen kieli" : "fi",
  "french" : "fr",
  "français, langue française" : "fr",
  "fr" : "fr",
  "fra" : "fr",
  "fre" : "fr",
  "français" : "fr",
  "langue française" : "fr",
  "fulah" : "ff",
  "fulfulde, pulaar, pular" : "ff",
  "ff" : "ff",
  "ful" : "ff",
  "ful + 9" : "ff",
  "fulfulde" : "ff",
  "pulaar" : "ff",
  "pular" : "ff",
  "galician" : "gl",
  "galego" : "gl",
  "gl" : "gl",
  "glg" : "gl",
  "georgian" : "ka",
  "ქართული" : "ka",
  "ka" : "ka",
  "kat" : "ka",
  "geo" : "ka",
  "german" : "de",
  "deutsch" : "de",
  "de" : "de",
  "deu" : "de",
  "ger" : "de",
  "greek (modern)" : "el",
  "ελληνικά" : "el",
  "el" : "el",
  "ell" : "el",
  "gre" : "el",
  "guaraní" : "gn",
  "avañe'ẽ" : "gn",
  "gn" : "gn",
  "grn" : "gn",
  "grn + 5" : "gn",
  "gujarati" : "gu",
  "ગુજરાતી" : "gu",
  "gu" : "gu",
  "guj" : "gu",
  "haitian, haitian creole" : "ht",
  "kreyòl ayisyen" : "ht",
  "ht" : "ht",
  "hat" : "ht",
  "hausa" : "ha",
  "(hausa) هَوُسَ" : "ha",
  "ha" : "ha",
  "hau" : "ha",
  "hebrew (modern)" : "he",
  "עברית" : "he",
  "he" : "he",
  "heb" : "he",
  "herero" : "hz",
  "otjiherero" : "hz",
  "hz" : "hz",
  "her" : "hz",
  "hindi" : "hi",
  "हिन्दी, हिंदी" : "hi",
  "hi" : "hi",
  "hin" : "hi",
  "हिन्दी" : "hi",
  "हिंदी" : "hi",
  "hiri motu" : "ho",
  "ho" : "ho",
  "hmo" : "ho",
  "hungarian" : "hu",
  "magyar" : "hu",
  "hu" : "hu",
  "hun" : "hu",
  "interlingua" : "ia",
  "ia" : "ia",
  "ina" : "ia",
  "indonesian" : "id",
  "bahasa indonesia" : "id",
  "id" : "id",
  "ind" : "id",
  "interlingue" : "ie",
  "originally called occidental; then interlingue after wwii" : "ie",
  "ie" : "ie",
  "ile" : "ie",
  "irish" : "ga",
  "gaeilge" : "ga",
  "ga" : "ga",
  "gle" : "ga",
  "igbo" : "ig",
  "asụsụ igbo" : "ig",
  "ig" : "ig",
  "ibo" : "ig",
  "inupiaq" : "ik",
  "iñupiaq, iñupiatun" : "ik",
  "ik" : "ik",
  "ipk" : "ik",
  "ipk + 2" : "ik",
  "iñupiaq" : "ik",
  "iñupiatun" : "ik",
  "ido" : "io",
  "io" : "io",
  "icelandic" : "is",
  "íslenska" : "is",
  "is" : "is",
  "isl" : "is",
  "ice" : "is",
  "italian" : "it",
  "italiano" : "it",
  "it" : "it",
  "ita" : "it",
  "inuktitut" : "iu",
  "ᐃᓄᒃᑎᑐᑦ" : "iu",
  "iu" : "iu",
  "iku" : "iu",
  "iku + 2" : "iu",
  "japanese" : "ja",
  "日本語 (にほんご)" : "ja",
  "ja" : "ja",
  "jpn" : "ja",
  "javanese" : "jv",
  "ꦧꦱꦗꦮ, basa jawa" : "jv",
  "jv" : "jv",
  "jav" : "jv",
  "ꦧꦱꦗꦮ" : "jv",
  "basa jawa" : "jv",
  "kalaallisut, greenlandic" : "kl",
  "kalaallisut, kalaallit oqaasii" : "kl",
  "kl" : "kl",
  "kal" : "kl",
  "kalaallisut" : "kl",
  "kalaallit oqaasii" : "kl",
  "kannada" : "kn",
  "ಕನ್ನಡ" : "kn",
  "kn" : "kn",
  "kan" : "kn",
  "kanuri" : "kr",
  "kr" : "kr",
  "kau" : "kr",
  "kau + 3" : "kr",
  "kashmiri" : "ks",
  "कश्मीरी, كشميري‎" : "ks",
  "ks" : "ks",
  "kas" : "ks",
  "कश्मीरी" : "ks",
  "كشميري‎" : "ks",
  "kazakh" : "kk",
  "қазақ тілі" : "kk",
  "kk" : "kk",
  "kaz" : "kk",
  "central khmer" : "km",
  "ខ្មែរ, ខេមរភាសា, ភាសាខ្មែរ" : "km",
  "km" : "km",
  "khm" : "km",
  "ខ្មែរ" : "km",
  "ខេមរភាសា" : "km",
  "ភាសាខ្មែរ" : "km",
  "kikuyu, gikuyu" : "ki",
  "gĩkũyũ" : "ki",
  "ki" : "ki",
  "kik" : "ki",
  "kinyarwanda" : "rw",
  "ikinyarwanda" : "rw",
  "rw" : "rw",
  "kin" : "rw",
  "kirghiz, kyrgyz" : "ky",
  "кыргызча, кыргыз тили" : "ky",
  "ky" : "ky",
  "kir" : "ky",
  "кыргызча" : "ky",
  "кыргыз тили" : "ky",
  "komi" : "kv",
  "коми кыв" : "kv",
  "kv" : "kv",
  "kom" : "kv",
  "kom + 2" : "kv",
  "kongo" : "kg",
  "kikongo" : "kg",
  "kg" : "kg",
  "kon" : "kg",
  "kon + 3" : "kg",
  "korean" : "ko",
  "한국어" : "ko",
  "ko" : "ko",
  "kor" : "ko",
  "kurdish" : "ku",
  "kurdî, كوردی‎" : "ku",
  "ku" : "ku",
  "kur" : "ku",
  "kur + 3" : "ku",
  "kurdî" : "ku",
  "كوردی‎" : "ku",
  "kuanyama, kwanyama" : "kj",
  "kuanyama" : "kj",
  "kj" : "kj",
  "kua" : "kj",
  "latin" : "la",
  "latine, lingua latina" : "la",
  "la" : "la",
  "lat" : "la",
  "latine" : "la",
  "lingua latina" : "la",
  "luxembourgish, letzeburgesch" : "lb",
  "lëtzebuergesch" : "lb",
  "lb" : "lb",
  "ltz" : "lb",
  "ganda" : "lg",
  "luganda" : "lg",
  "lg" : "lg",
  "lug" : "lg",
  "limburgan, limburger, limburgish" : "li",
  "limburgs" : "li",
  "li" : "li",
  "lim" : "li",
  "lingala" : "ln",
  "lingála" : "ln",
  "ln" : "ln",
  "lin" : "ln",
  "lao" : "lo",
  "ພາສາລາວ" : "lo",
  "lo" : "lo",
  "lithuanian" : "lt",
  "lietuvių kalba" : "lt",
  "lt" : "lt",
  "lit" : "lt",
  "luba-katanga" : "lu",
  "kiluba" : "lu",
  "lu" : "lu",
  "lub" : "lu",
  "latvian" : "lv",
  "latviešu valoda" : "lv",
  "lv" : "lv",
  "lav" : "lv",
  "lav + 2" : "lv",
  "manx" : "gv",
  "gaelg, gailck" : "gv",
  "gv" : "gv",
  "glv" : "gv",
  "gaelg" : "gv",
  "gailck" : "gv",
  "macedonian" : "mk",
  "македонски јазик" : "mk",
  "mk" : "mk",
  "mkd" : "mk",
  "mac" : "mk",
  "malagasy" : "mg",
  "fiteny malagasy" : "mg",
  "mg" : "mg",
  "mlg" : "mg",
  "mlg + 10" : "mg",
  "malay" : "ms",
  "bahasa melayu, بهاس ملايو‎" : "ms",
  "ms" : "ms",
  "msa" : "ms",
  "may" : "ms",
  "msa + 13" : "ms",
  "bahasa melayu" : "ms",
  "بهاس ملايو‎" : "ms",
  "malayalam" : "ml",
  "മലയാളം" : "ml",
  "ml" : "ml",
  "mal" : "ml",
  "maltese" : "mt",
  "malti" : "mt",
  "mt" : "mt",
  "mlt" : "mt",
  "maori" : "mi",
  "te reo māori" : "mi",
  "mi" : "mi",
  "mri" : "mi",
  "mao" : "mi",
  "marathi" : "mr",
  "मराठी" : "mr",
  "mr" : "mr",
  "mar" : "mr",
  "marshallese" : "mh",
  "kajin m̧ajeļ" : "mh",
  "mh" : "mh",
  "mah" : "mh",
  "mongolian" : "mn",
  "монгол хэл" : "mn",
  "mn" : "mn",
  "mon" : "mn",
  "mon + 2" : "mn",
  "nauru" : "na",
  "dorerin naoero" : "na",
  "na" : "na",
  "nau" : "na",
  "navajo, navaho" : "nv",
  "diné bizaad" : "nv",
  "nv" : "nv",
  "nav" : "nv",
  "north ndebele" : "nd",
  "isindebele" : "nr",
  "nd" : "nd",
  "nde" : "nd",
  "nepali" : "ne",
  "नेपाली" : "ne",
  "ne" : "ne",
  "nep" : "ne",
  "ndonga" : "ng",
  "owambo" : "ng",
  "ng" : "ng",
  "ndo" : "ng",
  "norwegian bokmål" : "nb",
  "norsk bokmål" : "nb",
  "nb" : "nb",
  "nob" : "nb",
  "norwegian nynorsk" : "nn",
  "norsk nynorsk" : "nn",
  "nn" : "nn",
  "nno" : "nn",
  "norwegian" : "no",
  "norsk" : "no",
  "no" : "no",
  "nor" : "no",
  "nor + 2" : "no",
  "sichuan yi, nuosu" : "ii",
  "ꆈꌠ꒿ nuosuhxop" : "ii",
  "ii" : "ii",
  "iii" : "ii",
  "south ndebele" : "nr",
  "nr" : "nr",
  "nbl" : "nr",
  "occitan" : "oc",
  "occitan, lenga d'òc" : "oc",
  "oc" : "oc",
  "oci" : "oc",
  "lenga d'òc" : "oc",
  "ojibwa" : "oj",
  "ᐊᓂᔑᓈᐯᒧᐎᓐ" : "oj",
  "oj" : "oj",
  "oji" : "oj",
  "oji + 7" : "oj",
  "church slavic, church slavonic, old church slavonic, old slavonic, old bulgarian" : "cu",
  "ѩзыкъ словѣньскъ" : "cu",
  "cu" : "cu",
  "chu" : "cu",
  "oromo" : "om",
  "afaan oromoo" : "om",
  "om" : "om",
  "orm" : "om",
  "orm + 4" : "om",
  "oriya" : "or",
  "ଓଡ଼ିଆ" : "or",
  "or" : "or",
  "ori" : "or",
  "ossetian, ossetic" : "os",
  "ирон æвзаг" : "os",
  "os" : "os",
  "oss" : "os",
  "panjabi, punjabi" : "pa",
  "ਪੰਜਾਬੀ" : "pa",
  "pa" : "pa",
  "pan" : "pa",
  "pali" : "pi",
  "पाऴि" : "pi",
  "pi" : "pi",
  "pli" : "pi",
  "persian" : "fa",
  "فارسی" : "fa",
  "fa" : "fa",
  "fas" : "fa",
  "per" : "fa",
  "fas + 2" : "fa",
  "polish" : "pl",
  "język polski, polszczyzna" : "pl",
  "pl" : "pl",
  "pol" : "pl",
  "język polski" : "pl",
  "polszczyzna" : "pl",
  "pashto, pushto" : "ps",
  "پښتو" : "ps",
  "ps" : "ps",
  "pus" : "ps",
  "pus + 3" : "ps",
  "portuguese" : "pt",
  "português" : "pt",
  "pt" : "pt",
  "por" : "pt",
  "quechua" : "qu",
  "runa simi, kichwa" : "qu",
  "qu" : "qu",
  "que" : "qu",
  "que + 44" : "qu",
  "runa simi" : "qu",
  "kichwa" : "qu",
  "romansh" : "rm",
  "rumantsch grischun" : "rm",
  "rm" : "rm",
  "roh" : "rm",
  "rundi" : "rn",
  "ikirundi" : "rn",
  "rn" : "rn",
  "run" : "rn",
  "romanian, moldavian, moldovan" : "ro",
  "română" : "ro",
  "ro" : "ro",
  "ron" : "ro",
  "rum" : "ro",
  "russian" : "ru",
  "русский" : "ru",
  "ru" : "ru",
  "rus" : "ru",
  "sanskrit" : "sa",
  "संस्कृतम्" : "sa",
  "sa" : "sa",
  "san" : "sa",
  "sardinian" : "sc",
  "sardu" : "sc",
  "sc" : "sc",
  "srd" : "sc",
  "srd + 4" : "sc",
  "sindhi" : "sd",
  "सिन्धी, سنڌي، سندھی‎" : "sd",
  "sd" : "sd",
  "snd" : "sd",
  "सिन्धी" : "sd",
  "سنڌي، سندھی‎" : "sd",
  "northern sami" : "se",
  "davvisámegiella" : "se",
  "se" : "se",
  "sme" : "se",
  "samoan" : "sm",
  "gagana fa'a samoa" : "sm",
  "sm" : "sm",
  "smo" : "sm",
  "sango" : "sg",
  "yângâ tî sängö" : "sg",
  "sg" : "sg",
  "sag" : "sg",
  "serbian" : "sr",
  "српски језик" : "sr",
  "sr" : "sr",
  "srp" : "sr",
  "gaelic, scottish gaelic" : "gd",
  "gàidhlig" : "gd",
  "gd" : "gd",
  "gla" : "gd",
  "shona" : "sn",
  "chishona" : "sn",
  "sn" : "sn",
  "sna" : "sn",
  "sinhala, sinhalese" : "si",
  "සිංහල" : "si",
  "si" : "si",
  "sin" : "si",
  "slovak" : "sk",
  "slovenčina, slovenský jazyk" : "sk",
  "sk" : "sk",
  "slk" : "sk",
  "slo" : "sk",
  "slovenčina" : "sk",
  "slovenský jazyk" : "sk",
  "slovenian" : "sl",
  "slovenski jezik, slovenščina" : "sl",
  "sl" : "sl",
  "slv" : "sl",
  "slovenski jezik" : "sl",
  "slovenščina" : "sl",
  "somali" : "so",
  "soomaaliga, af soomaali" : "so",
  "so" : "so",
  "som" : "so",
  "soomaaliga" : "so",
  "af soomaali" : "so",
  "southern sotho" : "st",
  "sesotho" : "st",
  "st" : "st",
  "sot" : "st",
  "spanish, castilian" : "es",
  "español" : "es",
  "es" : "es",
  "spa" : "es",
  "sundanese" : "su",
  "basa sunda" : "su",
  "su" : "su",
  "sun" : "su",
  "swahili" : "sw",
  "kiswahili" : "sw",
  "sw" : "sw",
  "swa" : "sw",
  "swa + 2" : "sw",
  "swati" : "ss",
  "siswati" : "ss",
  "ss" : "ss",
  "ssw" : "ss",
  "swedish" : "sv",
  "svenska" : "sv",
  "sv" : "sv",
  "swe" : "sv",
  "tamil" : "ta",
  "தமிழ்" : "ta",
  "ta" : "ta",
  "tam" : "ta",
  "telugu" : "te",
  "తెలుగు" : "te",
  "te" : "te",
  "tel" : "te",
  "tajik" : "tg",
  "тоҷикӣ, toçikī, تاجیکی‎" : "tg",
  "tg" : "tg",
  "tgk" : "tg",
  "тоҷикӣ" : "tg",
  "toçikī" : "tg",
  "تاجیکی‎" : "tg",
  "thai" : "th",
  "ไทย" : "th",
  "th" : "th",
  "tha" : "th",
  "tigrinya" : "ti",
  "ትግርኛ" : "ti",
  "ti" : "ti",
  "tir" : "ti",
  "tibetan" : "bo",
  "བོད་ཡིག" : "bo",
  "bo" : "bo",
  "bod" : "bo",
  "tib" : "bo",
  "turkmen" : "tk",
  "türkmen, түркмен" : "tk",
  "tk" : "tk",
  "tuk" : "tk",
  "türkmen" : "tk",
  "түркмен" : "tk",
  "tagalog" : "tl",
  "wikang tagalog" : "tl",
  "tl" : "tl",
  "tgl" : "tl",
  "tswana" : "tn",
  "setswana" : "tn",
  "tn" : "tn",
  "tsn" : "tn",
  "tonga (tonga islands)" : "to",
  "faka tonga" : "to",
  "to" : "to",
  "ton" : "to",
  "turkish" : "tr",
  "türkçe" : "tr",
  "tr" : "tr",
  "tur" : "tr",
  "tsonga" : "ts",
  "xitsonga" : "ts",
  "ts" : "ts",
  "tso" : "ts",
  "tatar" : "tt",
  "татар теле, tatar tele" : "tt",
  "tt" : "tt",
  "tat" : "tt",
  "татар теле" : "tt",
  "tatar tele" : "tt",
  "twi" : "tw",
  "tw" : "tw",
  "tahitian" : "ty",
  "reo tahiti" : "ty",
  "ty" : "ty",
  "tah" : "ty",
  "uighur, uyghur" : "ug",
  "ئۇيغۇرچە‎, uyghurche" : "ug",
  "ug" : "ug",
  "uig" : "ug",
  "ئۇيغۇرچە‎" : "ug",
  "uyghurche" : "ug",
  "ukrainian" : "uk",
  "українська" : "uk",
  "uk" : "uk",
  "ukr" : "uk",
  "urdu" : "ur",
  "اردو" : "ur",
  "ur" : "ur",
  "urd" : "ur",
  "uzbek" : "uz",
  "oʻzbek, ўзбек, أۇزبېك‎" : "uz",
  "uz" : "uz",
  "uzb" : "uz",
  "uzb + 2" : "uz",
  "oʻzbek" : "uz",
  "ўзбек" : "uz",
  "أۇزبېك‎" : "uz",
  "venda" : "ve",
  "tshivenḓa" : "ve",
  "ve" : "ve",
  "ven" : "ve",
  "vietnamese" : "vi",
  "tiếng việt" : "vi",
  "vi" : "vi",
  "vie" : "vi",
  "volapük" : "vo",
  "vo" : "vo",
  "vol" : "vo",
  "walloon" : "wa",
  "walon" : "wa",
  "wa" : "wa",
  "wln" : "wa",
  "welsh" : "cy",
  "cymraeg" : "cy",
  "cy" : "cy",
  "cym" : "cy",
  "wel" : "cy",
  "wolof" : "wo",
  "wollof" : "wo",
  "wo" : "wo",
  "wol" : "wo",
  "western frisian" : "fy",
  "frysk" : "fy",
  "fy" : "fy",
  "fry" : "fy",
  "xhosa" : "xh",
  "isixhosa" : "xh",
  "xh" : "xh",
  "xho" : "xh",
  "yiddish" : "yi",
  "ייִדיש" : "yi",
  "yi" : "yi",
  "yid" : "yi",
  "yid + 2" : "yi",
  "yoruba" : "yo",
  "yorùbá" : "yo",
  "yo" : "yo",
  "yor" : "yo",
  "zhuang, chuang" : "za",
  "saɯ cueŋƅ, saw cuengh" : "za",
  "za" : "za",
  "zha" : "za",
  "zha + 16" : "za",
  "saɯ cueŋƅ" : "za",
  "saw cuengh" : "za",
  "zulu" : "zu",
  "isizulu" : "zu",
  "zu" : "zu",
  "zul" : "zu"
};





function reduce(from) {

    return reductions[from.toLowerCase()];

}





var reduceTo6391 = { reduce: reduce, reductions: reductions };

class circular_buffer{constructor(uCapacity){if(!Number.isInteger(uCapacity)){throw new RangeError(`Capacity must be an integer, received ${uCapacity}`)}if(uCapacity<0){throw new RangeError(`Capacity must be a non-negative integer, received ${uCapacity}`)}this._values=new Array(uCapacity);this._capacity=uCapacity;this._cursor=0;this._offset=0;this._length=0;}get capacity(){return this._capacity}set capacity(newSize){this.resize(newSize);}get length(){return this._length}set length(newLength){if(newLength>this._capacity){throw new RangeError(`Requested new length [${newLength}] exceeds container capacity [${this._capacity}]`)}if(newLength<0){throw new RangeError(`Requested new length [${newLength}] cannot be negative`)}if(!Number.isInteger(newLength)){throw new RangeError(`Requested new length [${newLength}] must be an integer`)}if(this._length<=newLength){return}this._length=newLength;}get available(){return this._capacity-this._length}get isEmpty(){return this._length===0}get isFull(){return this._length===this._capacity}get first(){if(this.isEmpty){throw new RangeError("Cannot return first element of an empty container")}return this.at(0)}get last(){if(this.isEmpty){throw new RangeError("Cannot return last element of an empty container")}return this.at(this.length-1)}static from(i,map_fn,t){const new_array=map_fn?Array.from(i,map_fn,t):Array.from(i);const target_length=new_array.length;const ncb=new circular_buffer(target_length);ncb._values=new_array;ncb._length=target_length;return ncb}push(v){if(this.isFull){throw new RangeError(`Cannot push, structure is full to capacity`)}this._values[(this._cursor+this._length++)%this._capacity]=v;return v}shove(v){let shoved;if(this._capacity===0){throw new RangeError(`Cannot shove, structure is zero-capacity`)}if(this.isFull){shoved=this.pop();}this.push(v);return shoved}fill(x){for(let i=0;i<this._capacity;i++){this._values[i]=x;}this._length=this._capacity;return this._values}indexOf(searchElement,fromIndex){const normalized=this.toArray();return normalized.indexOf(searchElement,fromIndex)}find(predicate,thisArg){return this.toArray().find(predicate,thisArg)}every(functor,thisArg){const normalized=this.toArray(),res=normalized.every(functor,thisArg);this._values=normalized;this._values.length=this._capacity;this._cursor=0;return res}some(functor,thisArg){const normalized=this.toArray(),res=normalized.some(functor,thisArg);this._values=normalized;this._values.length=this._capacity;this._cursor=0;return res}reverse(){const normalized=this.toArray();this._values=normalized.reverse();this._values.length=this._capacity;this._cursor=0;return this}clear(){const old=this.toArray();this._length=0;return old}pop(){if(this._length<=0){throw new RangeError(`Cannot pop, structure is empty`)}const cache=this.at(0);--this._length;++this._offset;++this._cursor;if(this._cursor>=this._capacity){this._cursor-=this._capacity;}return cache}at(i){if(i<0){throw new RangeError(`circular_buffer does not support negative traversals; called at(${i})`)}if(!Number.isInteger(i)){throw new RangeError(`Accessors must be non-negative integers; called at(${i})`)}if(i>=this._capacity){throw new RangeError(`Requested cell ${i} exceeds container permanent capacity`)}if(i>=this._length){throw new RangeError(`Requested cell ${i} exceeds container current length`)}return this._values[(this._cursor+i)%this._capacity]}pos(i){return this.at(i-this.offset())}offset(){return this._offset}resize(newSize,preferEnd=false){this._values=this.toArray();this._cursor=0;const oldSize=this._length;this._length=Math.min(this._length,newSize);this._capacity=newSize;if(newSize>=oldSize){this._values.length=newSize;}else {if(preferEnd){const tmp=this._values.slice(oldSize-newSize);this._values=tmp;}else {this._values.length=newSize;}}}toArray(){const startPoint=this._cursor%this._capacity;if(this._capacity>startPoint+this._length){return this._values.slice(startPoint,startPoint+this._length)}else {const base=this._values.slice(startPoint,this._capacity);base.push(...this._values.slice(0,this.length-(this._capacity-startPoint)));return base}}}

/*******
 *
 *  Predicate for validating an array for uniqueness.  Not generally meant for
 *  external use.
 *
 */
const array_box_if_string = n => typeof n === 'string' ? [n] : n;
// this is explicitly about other peoples' data, so it has to be weakly typed
/* eslint-disable flowtype/no-weak-types */
const weighted_rand_select = (options, probability_property = 'probability') => {
    if (!Array.isArray(options)) {
        throw new TypeError('options must be a non-empty array of objects');
    }
    if (!(typeof options[0] === 'object')) {
        throw new TypeError('options must be a non-empty array of objects');
    }
    const frand = (cap) => Math.random() * cap, or_one = (item) => item === undefined ? 1 : item, prob_sum = options.reduce((acc, val) => acc + or_one(val[probability_property]), 0), rnd = frand(prob_sum);
    let cursor = 0, cursor_sum = 0;
    while ((cursor_sum += or_one(options[cursor++][probability_property])) <= rnd) { } // eslint-disable-line no-empty,fp/no-loops
    return options[cursor - 1];
};
/* eslint-enable flowtype/no-weak-types */
/*******
 *
 *  Returns, for a non-negative integer argument `n`, the series `[0 .. n]`.
 *
 *  ```typescript
 *  import { seq } from './jssm';
 *
 *  seq(5);  // [0, 1, 2, 3, 4]
 *  seq(0);  // []
 *  ```
 *
 */
function seq(n) {
    if (!(Number.isInteger(n))) {
        throw new TypeError('seq/1 takes a non-negative integer n as an argument');
    }
    if (n < 0) {
        throw new TypeError('seq/1 takes a non-negative integer n as an argument');
    }
    return (new Array(n))
        .fill(true)
        .map((_, i) => i);
}
/*******
 *
 *  Returns the histograph of an array as a `Map`.  Makes no attempt to cope
 *  with deep equality; will fail for complex contents, as such.
 *
 *  ```typescript
 *  import { histograph } from './jssm';
 *
 *  histograph( [0, 0, 1, 1, 2, 2, 1] );  // Map()
 *  ```
 *
 */
const histograph = (ar) => // eslint-disable-line flowtype/no-weak-types
 ar.sort()
    .reduce((m, v) => // TODO FIXME eslint-disable-line flowtype/no-weak-types,no-sequences
 (m.set(v, (m.has(v) ? m.get(v) + 1 : 1)), m), new Map());
const weighted_sample_select = (n, options, probability_property) => // TODO FIXME no any // eslint-disable-line flowtype/no-weak-types
 seq(n)
    .map((_i) => // TODO FIXME eslint-disable-line flowtype/no-weak-types
 weighted_rand_select(options, probability_property));
const weighted_histo_key = (n, opts, prob_prop, extract) => // TODO FIXME no any // eslint-disable-line flowtype/no-weak-types
 histograph(weighted_sample_select(n, opts, prob_prop)
    .map((s) => s[extract] // TODO FIXME eslint-disable-line flowtype/no-weak-types
));
/*******
 *
 *  Internal method generating names for edges for the hook lookup map.  Not
 *  meant for external use.
 *
 */
const hook_name = (from, to) => JSON.stringify([from, to]);
/*******
 *
 *  Internal method generating names for actions for the hook lookup map.  Not
 *  meant for external use.
 *
 */
const named_hook_name = (from, to, action) => JSON.stringify([from, to, action]);

const gviz_shapes = [
    "box3d",
    "polygon",
    "ellipse",
    "oval",
    "circle",
    "point",
    "egg",
    "triangle",
    "plaintext",
    "plain",
    "diamond",
    "trapezium",
    "parallelogram",
    "house",
    "pentagon",
    "hexagon",
    "septagon",
    "octagon",
    "doublecircle",
    "doubleoctagon",
    "tripleoctagon",
    "invtriangle",
    "invtrapezium",
    "invhouse",
    "Mdiamond",
    "Msquare",
    "Mcircle",
    "rectangle",
    "rect",
    "square",
    "star",
    "none",
    "underline",
    "cylinder",
    "note",
    "tab",
    "folder",
    "box",
    "component",
    "promoter",
    "cds",
    "terminator",
    "utr",
    "primersite",
    "restrictionsite",
    "fivepoverhang",
    "threepoverhang",
    "noverhang",
    "assembly",
    "signature",
    "insulator",
    "ribosite",
    "rnastab",
    "proteasesite",
    "proteinstab",
    "rpromoter",
    "rarrow",
    "larrow",
    "lpromoter",
    "record"
];
const shapes = gviz_shapes;
const named_colors = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige",
    "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown",
    "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral",
    "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan",
    "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki",
    "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed",
    "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray",
    "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue",
    "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen",
    "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey",
    "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory",
    "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon",
    "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray",
    "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen",
    "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue",
    "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon",
    "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple",
    "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise",
    "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin",
    "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed",
    "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed",
    "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple",
    "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown",
    "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue",
    "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal",
    "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke",
    "Yellow", "YellowGreen"
];

function peg$subclass(child,parent){function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor;}function peg$SyntaxError(message,expected,found,location){this.message=message;this.expected=expected;this.found=found;this.location=location;this.name="SyntaxError";if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(this,peg$SyntaxError);}}peg$subclass(peg$SyntaxError,Error);peg$SyntaxError.buildMessage=function(expected,found){var DESCRIBE_EXPECTATION_FNS={literal:function(expectation){return '"'+literalEscape(expectation.text)+'"'},class:function(expectation){var escapedParts="",i;for(i=0;i<expectation.parts.length;i++){escapedParts+=expectation.parts[i]instanceof Array?classEscape(expectation.parts[i][0])+"-"+classEscape(expectation.parts[i][1]):classEscape(expectation.parts[i]);}return "["+(expectation.inverted?"^":"")+escapedParts+"]"},any:function(expectation){return "any character"},end:function(expectation){return "end of input"},other:function(expectation){return expectation.description}};function hex(ch){return ch.charCodeAt(0).toString(16).toUpperCase()}function literalEscape(s){return s.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(ch){return "\\x0"+hex(ch)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(ch){return "\\x"+hex(ch)}))}function classEscape(s){return s.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(ch){return "\\x0"+hex(ch)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(ch){return "\\x"+hex(ch)}))}function describeExpectation(expectation){return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation)}function describeExpected(expected){var descriptions=new Array(expected.length),i,j;for(i=0;i<expected.length;i++){descriptions[i]=describeExpectation(expected[i]);}descriptions.sort();if(descriptions.length>0){for(i=1,j=1;i<descriptions.length;i++){if(descriptions[i-1]!==descriptions[i]){descriptions[j]=descriptions[i];j++;}}descriptions.length=j;}switch(descriptions.length){case 1:return descriptions[0];case 2:return descriptions[0]+" or "+descriptions[1];default:return descriptions.slice(0,-1).join(", ")+", or "+descriptions[descriptions.length-1]}}function describeFound(found){return found?'"'+literalEscape(found)+'"':"end of input"}return "Expected "+describeExpected(expected)+" but "+describeFound(found)+" found."};function peg$parse(input,options){options=options!==void 0?options:{};var peg$FAILED={},peg$startRuleFunctions={Document:peg$parseDocument},peg$startRuleFunction=peg$parseDocument,peg$c0=function(e){return e},peg$c1="none",peg$c2=peg$literalExpectation("none",false),peg$c3="default",peg$c4=peg$literalExpectation("default",false),peg$c5="modern",peg$c6=peg$literalExpectation("modern",false),peg$c7="ocean",peg$c8=peg$literalExpectation("ocean",false),peg$c9="box3d",peg$c10=peg$literalExpectation("box3d",false),peg$c11="polygon",peg$c12=peg$literalExpectation("polygon",false),peg$c13="ellipse",peg$c14=peg$literalExpectation("ellipse",false),peg$c15="oval",peg$c16=peg$literalExpectation("oval",false),peg$c17="circle",peg$c18=peg$literalExpectation("circle",false),peg$c19="point",peg$c20=peg$literalExpectation("point",false),peg$c21="egg",peg$c22=peg$literalExpectation("egg",false),peg$c23="triangle",peg$c24=peg$literalExpectation("triangle",false),peg$c25="plaintext",peg$c26=peg$literalExpectation("plaintext",false),peg$c27="plain",peg$c28=peg$literalExpectation("plain",false),peg$c29="diamond",peg$c30=peg$literalExpectation("diamond",false),peg$c31="trapezium",peg$c32=peg$literalExpectation("trapezium",false),peg$c33="parallelogram",peg$c34=peg$literalExpectation("parallelogram",false),peg$c35="house",peg$c36=peg$literalExpectation("house",false),peg$c37="pentagon",peg$c38=peg$literalExpectation("pentagon",false),peg$c39="hexagon",peg$c40=peg$literalExpectation("hexagon",false),peg$c41="septagon",peg$c42=peg$literalExpectation("septagon",false),peg$c43="octagon",peg$c44=peg$literalExpectation("octagon",false),peg$c45="doublecircle",peg$c46=peg$literalExpectation("doublecircle",false),peg$c47="doubleoctagon",peg$c48=peg$literalExpectation("doubleoctagon",false),peg$c49="tripleoctagon",peg$c50=peg$literalExpectation("tripleoctagon",false),peg$c51="invtriangle",peg$c52=peg$literalExpectation("invtriangle",false),peg$c53="invtrapezium",peg$c54=peg$literalExpectation("invtrapezium",false),peg$c55="invhouse",peg$c56=peg$literalExpectation("invhouse",false),peg$c57="Mdiamond",peg$c58=peg$literalExpectation("Mdiamond",false),peg$c59="Msquare",peg$c60=peg$literalExpectation("Msquare",false),peg$c61="Mcircle",peg$c62=peg$literalExpectation("Mcircle",false),peg$c63="rectangle",peg$c64=peg$literalExpectation("rectangle",false),peg$c65="rect",peg$c66=peg$literalExpectation("rect",false),peg$c67="square",peg$c68=peg$literalExpectation("square",false),peg$c69="star",peg$c70=peg$literalExpectation("star",false),peg$c71="underline",peg$c72=peg$literalExpectation("underline",false),peg$c73="cylinder",peg$c74=peg$literalExpectation("cylinder",false),peg$c75="note",peg$c76=peg$literalExpectation("note",false),peg$c77="tab",peg$c78=peg$literalExpectation("tab",false),peg$c79="folder",peg$c80=peg$literalExpectation("folder",false),peg$c81="box",peg$c82=peg$literalExpectation("box",false),peg$c83="component",peg$c84=peg$literalExpectation("component",false),peg$c85="promoter",peg$c86=peg$literalExpectation("promoter",false),peg$c87="cds",peg$c88=peg$literalExpectation("cds",false),peg$c89="terminator",peg$c90=peg$literalExpectation("terminator",false),peg$c91="utr",peg$c92=peg$literalExpectation("utr",false),peg$c93="primersite",peg$c94=peg$literalExpectation("primersite",false),peg$c95="restrictionsite",peg$c96=peg$literalExpectation("restrictionsite",false),peg$c97="fivepoverhang",peg$c98=peg$literalExpectation("fivepoverhang",false),peg$c99="threepoverhang",peg$c100=peg$literalExpectation("threepoverhang",false),peg$c101="noverhang",peg$c102=peg$literalExpectation("noverhang",false),peg$c103="assembly",peg$c104=peg$literalExpectation("assembly",false),peg$c105="signature",peg$c106=peg$literalExpectation("signature",false),peg$c107="insulator",peg$c108=peg$literalExpectation("insulator",false),peg$c109="ribosite",peg$c110=peg$literalExpectation("ribosite",false),peg$c111="rnastab",peg$c112=peg$literalExpectation("rnastab",false),peg$c113="proteasesite",peg$c114=peg$literalExpectation("proteasesite",false),peg$c115="proteinstab",peg$c116=peg$literalExpectation("proteinstab",false),peg$c117="rpromoter",peg$c118=peg$literalExpectation("rpromoter",false),peg$c119="rarrow",peg$c120=peg$literalExpectation("rarrow",false),peg$c121="larrow",peg$c122=peg$literalExpectation("larrow",false),peg$c123="lpromoter",peg$c124=peg$literalExpectation("lpromoter",false),peg$c125="record",peg$c126=peg$literalExpectation("record",false),peg$c127=peg$otherExpectation("forward light arrow ->"),peg$c128="->",peg$c129=peg$literalExpectation("->",false),peg$c130="→",peg$c131=peg$literalExpectation("→",false),peg$c132=function(){return "->"},peg$c133=peg$otherExpectation("two way light arrow <->"),peg$c134="<->",peg$c135=peg$literalExpectation("<->",false),peg$c136="↔",peg$c137=peg$literalExpectation("↔",false),peg$c138=function(){return "<->"},peg$c139=peg$otherExpectation("back light arrow <-"),peg$c140="<-",peg$c141=peg$literalExpectation("<-",false),peg$c142="←",peg$c143=peg$literalExpectation("←",false),peg$c144=function(){return "<-"},peg$c145=peg$otherExpectation("forward fat arrow =>"),peg$c146="=>",peg$c147=peg$literalExpectation("=>",false),peg$c148="⇒",peg$c149=peg$literalExpectation("⇒",false),peg$c150=function(){return "=>"},peg$c151=peg$otherExpectation("two way fat arrow <=>"),peg$c152="<=>",peg$c153=peg$literalExpectation("<=>",false),peg$c154="⇔",peg$c155=peg$literalExpectation("⇔",false),peg$c156=function(){return "<=>"},peg$c157=peg$otherExpectation("back fat arrow <="),peg$c158="<=",peg$c159=peg$literalExpectation("<=",false),peg$c160="⇐",peg$c161=peg$literalExpectation("⇐",false),peg$c162=function(){return "<="},peg$c163=peg$otherExpectation("forward tilde arrow ~>"),peg$c164="~>",peg$c165=peg$literalExpectation("~>",false),peg$c166="↛",peg$c167=peg$literalExpectation("↛",false),peg$c168=function(){return "~>"},peg$c169=peg$otherExpectation("two way tilde arrow <~>"),peg$c170="<~>",peg$c171=peg$literalExpectation("<~>",false),peg$c172="↮",peg$c173=peg$literalExpectation("↮",false),peg$c174=function(){return "<~>"},peg$c175=peg$otherExpectation("back tilde arrow <~"),peg$c176="<~",peg$c177=peg$literalExpectation("<~",false),peg$c178="↚",peg$c179=peg$literalExpectation("↚",false),peg$c180=function(){return "<~"},peg$c181=peg$otherExpectation("light fat arrow <-=>"),peg$c182="<-=>",peg$c183=peg$literalExpectation("<-=>",false),peg$c184="←⇒",peg$c185=peg$literalExpectation("←⇒",false),peg$c186=function(){return "<-=>"},peg$c187=peg$otherExpectation("light tilde arrow <-~>"),peg$c188="<-~>",peg$c189=peg$literalExpectation("<-~>",false),peg$c190="←↛",peg$c191=peg$literalExpectation("←↛",false),peg$c192=function(){return "<-~>"},peg$c193=peg$otherExpectation("fat light arrow <=->"),peg$c194="<=->",peg$c195=peg$literalExpectation("<=->",false),peg$c196="⇐→",peg$c197=peg$literalExpectation("⇐→",false),peg$c198=function(){return "<=->"},peg$c199=peg$otherExpectation("fat tilde arrow <=~>"),peg$c200="<=~>",peg$c201=peg$literalExpectation("<=~>",false),peg$c202="⇐↛",peg$c203=peg$literalExpectation("⇐↛",false),peg$c204=function(){return "<=~>"},peg$c205=peg$otherExpectation("tilde light arrow <~->"),peg$c206="<~->",peg$c207=peg$literalExpectation("<~->",false),peg$c208="↚→",peg$c209=peg$literalExpectation("↚→",false),peg$c210=function(){return "<~->"},peg$c211=peg$otherExpectation("tilde fat arrow <~=>"),peg$c212="<~=>",peg$c213=peg$literalExpectation("<~=>",false),peg$c214="↚⇒",peg$c215=peg$literalExpectation("↚⇒",false),peg$c216=function(){return "<~=>"},peg$c217=peg$otherExpectation("light arrow"),peg$c218=peg$otherExpectation("fat arrow"),peg$c219=peg$otherExpectation("tilde arrow"),peg$c220=peg$otherExpectation("mixed arrow"),peg$c221=peg$otherExpectation("arrow"),peg$c222="true",peg$c223=peg$literalExpectation("true",false),peg$c225="false",peg$c226=peg$literalExpectation("false",false),peg$c228="regular",peg$c229=peg$literalExpectation("regular",false),peg$c230="rounded",peg$c231=peg$literalExpectation("rounded",false),peg$c232="lined",peg$c233=peg$literalExpectation("lined",false),peg$c234="solid",peg$c235=peg$literalExpectation("solid",false),peg$c236="dotted",peg$c237=peg$literalExpectation("dotted",false),peg$c238="dashed",peg$c239=peg$literalExpectation("dashed",false),peg$c240=/^[0-9a-fA-F]/,peg$c241=peg$classExpectation([["0","9"],["a","f"],["A","F"]],false,false),peg$c242='"',peg$c243=peg$literalExpectation('"',false),peg$c244="\\",peg$c245=peg$literalExpectation("\\",false),peg$c246="/",peg$c247=peg$literalExpectation("/",false),peg$c248="b",peg$c249=peg$literalExpectation("b",false),peg$c250=function(){return "\b"},peg$c251="f",peg$c252=peg$literalExpectation("f",false),peg$c253=function(){return "\f"},peg$c254="n",peg$c255=peg$literalExpectation("n",false),peg$c256=function(){return "\n"},peg$c257="r",peg$c258=peg$literalExpectation("r",false),peg$c259=function(){return "\r"},peg$c260="t",peg$c261=peg$literalExpectation("t",false),peg$c262=function(){return "\t"},peg$c263="v",peg$c264=peg$literalExpectation("v",false),peg$c265=function(){return "\v"},peg$c266="u",peg$c267=peg$literalExpectation("u",false),peg$c268=function(digits){return String.fromCharCode(parseInt(digits,16))},peg$c269=function(Sequence){return Sequence},peg$c270=/^[ -!#-[\]-\u10FFFF]/,peg$c271=peg$classExpectation([[" ","!"],["#","["],["]","ჿ"],"F","F"],false,false),peg$c272="'",peg$c273=peg$literalExpectation("'",false),peg$c274=/^[ -&(-[\]-\u10FFFF]/,peg$c275=peg$classExpectation([[" ","&"],["(","["],["]","ჿ"],"F","F"],false,false),peg$c276=peg$otherExpectation("action label"),peg$c277=function(chars){return chars.join("")},peg$c278=/^[\n\r\u2028\u2029]/,peg$c279=peg$classExpectation(["\n","\r","\u2028","\u2029"],false,false),peg$c282="*/",peg$c283=peg$literalExpectation("*/",false),peg$c284=peg$anyExpectation(),peg$c285=peg$otherExpectation("block comment"),peg$c286="/*",peg$c287=peg$literalExpectation("/*",false),peg$c288=peg$otherExpectation("line comment"),peg$c289="//",peg$c290=peg$literalExpectation("//",false),peg$c291=peg$otherExpectation("whitespace"),peg$c292=/^[ \t\r\n\x0B]/,peg$c293=peg$classExpectation([" ","\t","\r","\n","\v"],false,false),peg$c294=peg$otherExpectation("string"),peg$c295=/^[0-9a-zA-Z._!$\^*!?,\x80-\uFFFF]/,peg$c296=peg$classExpectation([["0","9"],["a","z"],["A","Z"],".","_","!","$","^","*","!","?",",",["","￿"]],false,false),peg$c297=/^[0-9a-zA-Z.+_\^()*&$#@!?,\x80-\uFFFF]/,peg$c298=peg$classExpectation([["0","9"],["a","z"],["A","Z"],".","+","_","^","(",")","*","&","$","#","@","!","?",",",["","￿"]],false,false),peg$c299=peg$otherExpectation("atom"),peg$c300=function(firstletter,text){return firstletter+(text||[]).join("")},peg$c301=peg$otherExpectation("label"),peg$c302="0",peg$c303=peg$literalExpectation("0",false),peg$c304=/^[0-9]/,peg$c305=peg$classExpectation([["0","9"]],false,false),peg$c306=/^[1-9]/,peg$c307=peg$classExpectation([["1","9"]],false,false),peg$c308=peg$otherExpectation("nonneg number"),peg$c309=".",peg$c310=peg$literalExpectation(".",false),peg$c311=function(){return parseFloat(text())},peg$c312=function(major,minor,patch){return {major:parseInt(major,10),minor:parseInt(minor,10),patch:parseInt(patch,10),full:text()}},peg$c323="http://",peg$c324=peg$literalExpectation("http://",false),peg$c325="https://",peg$c326=peg$literalExpectation("https://",false),peg$c327=/^[a-zA-Z0-9!*'():;@&=+$,\/?#[\]_.~\-]/,peg$c328=peg$classExpectation([["a","z"],["A","Z"],["0","9"],"!","*","'","(",")",":",";","@","&","=","+","$",",","/","?","#","[","]","_",".","~","-"],false,false),peg$c329=function(protocol){return text()},peg$c330="aliceblue",peg$c331=peg$literalExpectation("aliceblue",false),peg$c332=function(){return "#f0f8ffff"},peg$c333="AliceBlue",peg$c334=peg$literalExpectation("AliceBlue",false),peg$c335="antiquewhite",peg$c336=peg$literalExpectation("antiquewhite",false),peg$c337=function(){return "#faebd7ff"},peg$c338="AntiqueWhite",peg$c339=peg$literalExpectation("AntiqueWhite",false),peg$c340="aquamarine",peg$c341=peg$literalExpectation("aquamarine",false),peg$c342=function(){return "#7fffd4ff"},peg$c343="Aquamarine",peg$c344=peg$literalExpectation("Aquamarine",false),peg$c345="aqua",peg$c346=peg$literalExpectation("aqua",false),peg$c347=function(){return "#00ffffff"},peg$c348="Aqua",peg$c349=peg$literalExpectation("Aqua",false),peg$c350="azure",peg$c351=peg$literalExpectation("azure",false),peg$c352=function(){return "#f0ffffff"},peg$c353="Azure",peg$c354=peg$literalExpectation("Azure",false),peg$c355="beige",peg$c356=peg$literalExpectation("beige",false),peg$c357=function(){return "#f5f5dcff"},peg$c358="Beige",peg$c359=peg$literalExpectation("Beige",false),peg$c360="bisque",peg$c361=peg$literalExpectation("bisque",false),peg$c362=function(){return "#ffe4c4ff"},peg$c363="Bisque",peg$c364=peg$literalExpectation("Bisque",false),peg$c365="black",peg$c366=peg$literalExpectation("black",false),peg$c367=function(){return "#000000ff"},peg$c368="Black",peg$c369=peg$literalExpectation("Black",false),peg$c370="blanchedalmond",peg$c371=peg$literalExpectation("blanchedalmond",false),peg$c372=function(){return "#ffebcdff"},peg$c373="BlanchedAlmond",peg$c374=peg$literalExpectation("BlanchedAlmond",false),peg$c375="blueviolet",peg$c376=peg$literalExpectation("blueviolet",false),peg$c377=function(){return "#8a2be2ff"},peg$c378="BlueViolet",peg$c379=peg$literalExpectation("BlueViolet",false),peg$c380="blue",peg$c381=peg$literalExpectation("blue",false),peg$c382=function(){return "#0000ffff"},peg$c383="Blue",peg$c384=peg$literalExpectation("Blue",false),peg$c385="brown",peg$c386=peg$literalExpectation("brown",false),peg$c387=function(){return "#a52a2aff"},peg$c388="Brown",peg$c389=peg$literalExpectation("Brown",false),peg$c390="burlywood",peg$c391=peg$literalExpectation("burlywood",false),peg$c392=function(){return "#deb887ff"},peg$c393="BurlyWood",peg$c394=peg$literalExpectation("BurlyWood",false),peg$c395="cadetblue",peg$c396=peg$literalExpectation("cadetblue",false),peg$c397=function(){return "#5f9ea0ff"},peg$c398="CadetBlue",peg$c399=peg$literalExpectation("CadetBlue",false),peg$c400="chartreuse",peg$c401=peg$literalExpectation("chartreuse",false),peg$c402=function(){return "#7fff00ff"},peg$c403="Chartreuse",peg$c404=peg$literalExpectation("Chartreuse",false),peg$c405="chocolate",peg$c406=peg$literalExpectation("chocolate",false),peg$c407=function(){return "#d2691eff"},peg$c408="Chocolate",peg$c409=peg$literalExpectation("Chocolate",false),peg$c410="coral",peg$c411=peg$literalExpectation("coral",false),peg$c412=function(){return "#ff7f50ff"},peg$c413="Coral",peg$c414=peg$literalExpectation("Coral",false),peg$c415="cornflowerblue",peg$c416=peg$literalExpectation("cornflowerblue",false),peg$c417=function(){return "#6495edff"},peg$c418="CornflowerBlue",peg$c419=peg$literalExpectation("CornflowerBlue",false),peg$c420="cornsilk",peg$c421=peg$literalExpectation("cornsilk",false),peg$c422=function(){return "#fff8dcff"},peg$c423="Cornsilk",peg$c424=peg$literalExpectation("Cornsilk",false),peg$c425="crimson",peg$c426=peg$literalExpectation("crimson",false),peg$c427=function(){return "#dc143cff"},peg$c428="Crimson",peg$c429=peg$literalExpectation("Crimson",false),peg$c430="cyan",peg$c431=peg$literalExpectation("cyan",false),peg$c432="Cyan",peg$c433=peg$literalExpectation("Cyan",false),peg$c434="darkblue",peg$c435=peg$literalExpectation("darkblue",false),peg$c436=function(){return "#00008bff"},peg$c437="DarkBlue",peg$c438=peg$literalExpectation("DarkBlue",false),peg$c439="darkcyan",peg$c440=peg$literalExpectation("darkcyan",false),peg$c441=function(){return "#008b8bff"},peg$c442="DarkCyan",peg$c443=peg$literalExpectation("DarkCyan",false),peg$c444="darkgoldenrod",peg$c445=peg$literalExpectation("darkgoldenrod",false),peg$c446=function(){return "#b8860bff"},peg$c447="DarkGoldenRod",peg$c448=peg$literalExpectation("DarkGoldenRod",false),peg$c449="darkgray",peg$c450=peg$literalExpectation("darkgray",false),peg$c451=function(){return "#a9a9a9ff"},peg$c452="DarkGray",peg$c453=peg$literalExpectation("DarkGray",false),peg$c454="darkgrey",peg$c455=peg$literalExpectation("darkgrey",false),peg$c456="DarkGrey",peg$c457=peg$literalExpectation("DarkGrey",false),peg$c458="darkgreen",peg$c459=peg$literalExpectation("darkgreen",false),peg$c460=function(){return "#006400ff"},peg$c461="DarkGreen",peg$c462=peg$literalExpectation("DarkGreen",false),peg$c463="darkkhaki",peg$c464=peg$literalExpectation("darkkhaki",false),peg$c465=function(){return "#bdb76bff"},peg$c466="DarkKhaki",peg$c467=peg$literalExpectation("DarkKhaki",false),peg$c468="darkmagenta",peg$c469=peg$literalExpectation("darkmagenta",false),peg$c470=function(){return "#8b008bff"},peg$c471="DarkMagenta",peg$c472=peg$literalExpectation("DarkMagenta",false),peg$c473="darkolivegreen",peg$c474=peg$literalExpectation("darkolivegreen",false),peg$c475=function(){return "#556b2fff"},peg$c476="DarkOliveGreen",peg$c477=peg$literalExpectation("DarkOliveGreen",false),peg$c478="darkorange",peg$c479=peg$literalExpectation("darkorange",false),peg$c480=function(){return "#ff8c00ff"},peg$c481="Darkorange",peg$c482=peg$literalExpectation("Darkorange",false),peg$c483="darkorchid",peg$c484=peg$literalExpectation("darkorchid",false),peg$c485=function(){return "#9932ccff"},peg$c486="DarkOrchid",peg$c487=peg$literalExpectation("DarkOrchid",false),peg$c488="darkred",peg$c489=peg$literalExpectation("darkred",false),peg$c490=function(){return "#8b0000ff"},peg$c491="DarkRed",peg$c492=peg$literalExpectation("DarkRed",false),peg$c493="darksalmon",peg$c494=peg$literalExpectation("darksalmon",false),peg$c495=function(){return "#e9967aff"},peg$c496="DarkSalmon",peg$c497=peg$literalExpectation("DarkSalmon",false),peg$c498="darkseagreen",peg$c499=peg$literalExpectation("darkseagreen",false),peg$c500=function(){return "#8fbc8fff"},peg$c501="DarkSeaGreen",peg$c502=peg$literalExpectation("DarkSeaGreen",false),peg$c503="darkslateblue",peg$c504=peg$literalExpectation("darkslateblue",false),peg$c505=function(){return "#483d8bff"},peg$c506="DarkSlateBlue",peg$c507=peg$literalExpectation("DarkSlateBlue",false),peg$c508="darkslategray",peg$c509=peg$literalExpectation("darkslategray",false),peg$c510=function(){return "#2f4f4fff"},peg$c511="DarkSlateGray",peg$c512=peg$literalExpectation("DarkSlateGray",false),peg$c513="darkslategrey",peg$c514=peg$literalExpectation("darkslategrey",false),peg$c515="DarkSlateGrey",peg$c516=peg$literalExpectation("DarkSlateGrey",false),peg$c517="darkturquoise",peg$c518=peg$literalExpectation("darkturquoise",false),peg$c519=function(){return "#00ced1ff"},peg$c520="DarkTurquoise",peg$c521=peg$literalExpectation("DarkTurquoise",false),peg$c522="darkviolet",peg$c523=peg$literalExpectation("darkviolet",false),peg$c524=function(){return "#9400d3ff"},peg$c525="DarkViolet",peg$c526=peg$literalExpectation("DarkViolet",false),peg$c527="deeppink",peg$c528=peg$literalExpectation("deeppink",false),peg$c529=function(){return "#ff1493ff"},peg$c530="DeepPink",peg$c531=peg$literalExpectation("DeepPink",false),peg$c532="deepskyblue",peg$c533=peg$literalExpectation("deepskyblue",false),peg$c534=function(){return "#00bfffff"},peg$c535="DeepSkyBlue",peg$c536=peg$literalExpectation("DeepSkyBlue",false),peg$c537="dimgray",peg$c538=peg$literalExpectation("dimgray",false),peg$c539=function(){return "#696969ff"},peg$c540="DimGray",peg$c541=peg$literalExpectation("DimGray",false),peg$c542="dimgrey",peg$c543=peg$literalExpectation("dimgrey",false),peg$c544="DimGrey",peg$c545=peg$literalExpectation("DimGrey",false),peg$c546="dodgerblue",peg$c547=peg$literalExpectation("dodgerblue",false),peg$c548=function(){return "#1e90ffff"},peg$c549="DodgerBlue",peg$c550=peg$literalExpectation("DodgerBlue",false),peg$c551="firebrick",peg$c552=peg$literalExpectation("firebrick",false),peg$c553=function(){return "#b22222ff"},peg$c554="FireBrick",peg$c555=peg$literalExpectation("FireBrick",false),peg$c556="floralwhite",peg$c557=peg$literalExpectation("floralwhite",false),peg$c558=function(){return "#fffaf0ff"},peg$c559="FloralWhite",peg$c560=peg$literalExpectation("FloralWhite",false),peg$c561="forestgreen",peg$c562=peg$literalExpectation("forestgreen",false),peg$c563=function(){return "#228b22ff"},peg$c564="ForestGreen",peg$c565=peg$literalExpectation("ForestGreen",false),peg$c566="fuchsia",peg$c567=peg$literalExpectation("fuchsia",false),peg$c568=function(){return "#ff00ffff"},peg$c569="Fuchsia",peg$c570=peg$literalExpectation("Fuchsia",false),peg$c571="gainsboro",peg$c572=peg$literalExpectation("gainsboro",false),peg$c573=function(){return "#dcdcdcff"},peg$c574="Gainsboro",peg$c575=peg$literalExpectation("Gainsboro",false),peg$c576="ghostwhite",peg$c577=peg$literalExpectation("ghostwhite",false),peg$c578=function(){return "#f8f8ffff"},peg$c579="GhostWhite",peg$c580=peg$literalExpectation("GhostWhite",false),peg$c581="goldenrod",peg$c582=peg$literalExpectation("goldenrod",false),peg$c583=function(){return "#daa520ff"},peg$c584="GoldenRod",peg$c585=peg$literalExpectation("GoldenRod",false),peg$c586="gold",peg$c587=peg$literalExpectation("gold",false),peg$c588=function(){return "#ffd700ff"},peg$c589="Gold",peg$c590=peg$literalExpectation("Gold",false),peg$c591="gray",peg$c592=peg$literalExpectation("gray",false),peg$c593=function(){return "#808080ff"},peg$c594="Gray",peg$c595=peg$literalExpectation("Gray",false),peg$c596="grey",peg$c597=peg$literalExpectation("grey",false),peg$c598="Grey",peg$c599=peg$literalExpectation("Grey",false),peg$c600="greenyellow",peg$c601=peg$literalExpectation("greenyellow",false),peg$c602=function(){return "#adff2fff"},peg$c603="GreenYellow",peg$c604=peg$literalExpectation("GreenYellow",false),peg$c605="green",peg$c606=peg$literalExpectation("green",false),peg$c607=function(){return "#008000ff"},peg$c608="Green",peg$c609=peg$literalExpectation("Green",false),peg$c610="honeydew",peg$c611=peg$literalExpectation("honeydew",false),peg$c612=function(){return "#f0fff0ff"},peg$c613="HoneyDew",peg$c614=peg$literalExpectation("HoneyDew",false),peg$c615="hotpink",peg$c616=peg$literalExpectation("hotpink",false),peg$c617=function(){return "#ff69b4ff"},peg$c618="HotPink",peg$c619=peg$literalExpectation("HotPink",false),peg$c620="indianred",peg$c621=peg$literalExpectation("indianred",false),peg$c622=function(){return "#cd5c5cff"},peg$c623="IndianRed",peg$c624=peg$literalExpectation("IndianRed",false),peg$c625="indigo",peg$c626=peg$literalExpectation("indigo",false),peg$c627=function(){return "#4b0082ff"},peg$c628="Indigo",peg$c629=peg$literalExpectation("Indigo",false),peg$c630="ivory",peg$c631=peg$literalExpectation("ivory",false),peg$c632=function(){return "#fffff0ff"},peg$c633="Ivory",peg$c634=peg$literalExpectation("Ivory",false),peg$c635="khaki",peg$c636=peg$literalExpectation("khaki",false),peg$c637=function(){return "#f0e68cff"},peg$c638="Khaki",peg$c639=peg$literalExpectation("Khaki",false),peg$c640="lavenderblush",peg$c641=peg$literalExpectation("lavenderblush",false),peg$c642=function(){return "#fff0f5ff"},peg$c643="LavenderBlush",peg$c644=peg$literalExpectation("LavenderBlush",false),peg$c645="lavender",peg$c646=peg$literalExpectation("lavender",false),peg$c647=function(){return "#e6e6faff"},peg$c648="Lavender",peg$c649=peg$literalExpectation("Lavender",false),peg$c650="lawngreen",peg$c651=peg$literalExpectation("lawngreen",false),peg$c652=function(){return "#7cfc00ff"},peg$c653="LawnGreen",peg$c654=peg$literalExpectation("LawnGreen",false),peg$c655="lemonchiffon",peg$c656=peg$literalExpectation("lemonchiffon",false),peg$c657=function(){return "#fffacdff"},peg$c658="LemonChiffon",peg$c659=peg$literalExpectation("LemonChiffon",false),peg$c660="lightblue",peg$c661=peg$literalExpectation("lightblue",false),peg$c662=function(){return "#add8e6ff"},peg$c663="LightBlue",peg$c664=peg$literalExpectation("LightBlue",false),peg$c665="lightcoral",peg$c666=peg$literalExpectation("lightcoral",false),peg$c667=function(){return "#f08080ff"},peg$c668="LightCoral",peg$c669=peg$literalExpectation("LightCoral",false),peg$c670="lightcyan",peg$c671=peg$literalExpectation("lightcyan",false),peg$c672=function(){return "#e0ffffff"},peg$c673="LightCyan",peg$c674=peg$literalExpectation("LightCyan",false),peg$c675="lightgoldenrodyellow",peg$c676=peg$literalExpectation("lightgoldenrodyellow",false),peg$c677=function(){return "#fafad2ff"},peg$c678="LightGoldenRodYellow",peg$c679=peg$literalExpectation("LightGoldenRodYellow",false),peg$c680="lightgray",peg$c681=peg$literalExpectation("lightgray",false),peg$c682=function(){return "#d3d3d3ff"},peg$c683="LightGray",peg$c684=peg$literalExpectation("LightGray",false),peg$c685="lightgrey",peg$c686=peg$literalExpectation("lightgrey",false),peg$c687="LightGrey",peg$c688=peg$literalExpectation("LightGrey",false),peg$c689="lightgreen",peg$c690=peg$literalExpectation("lightgreen",false),peg$c691=function(){return "#90ee90ff"},peg$c692="LightGreen",peg$c693=peg$literalExpectation("LightGreen",false),peg$c694="lightpink",peg$c695=peg$literalExpectation("lightpink",false),peg$c696=function(){return "#ffb6c1ff"},peg$c697="LightPink",peg$c698=peg$literalExpectation("LightPink",false),peg$c699="lightsalmon",peg$c700=peg$literalExpectation("lightsalmon",false),peg$c701=function(){return "#ffa07aff"},peg$c702="LightSalmon",peg$c703=peg$literalExpectation("LightSalmon",false),peg$c704="lightseagreen",peg$c705=peg$literalExpectation("lightseagreen",false),peg$c706=function(){return "#20b2aaff"},peg$c707="LightSeaGreen",peg$c708=peg$literalExpectation("LightSeaGreen",false),peg$c709="lightskyblue",peg$c710=peg$literalExpectation("lightskyblue",false),peg$c711=function(){return "#87cefaff"},peg$c712="LightSkyBlue",peg$c713=peg$literalExpectation("LightSkyBlue",false),peg$c714="lightslategray",peg$c715=peg$literalExpectation("lightslategray",false),peg$c716=function(){return "#778899ff"},peg$c717="LightSlateGray",peg$c718=peg$literalExpectation("LightSlateGray",false),peg$c719="lightslategrey",peg$c720=peg$literalExpectation("lightslategrey",false),peg$c721="LightSlateGrey",peg$c722=peg$literalExpectation("LightSlateGrey",false),peg$c723="lightsteelblue",peg$c724=peg$literalExpectation("lightsteelblue",false),peg$c725=function(){return "#b0c4deff"},peg$c726="LightSteelBlue",peg$c727=peg$literalExpectation("LightSteelBlue",false),peg$c728="lightyellow",peg$c729=peg$literalExpectation("lightyellow",false),peg$c730=function(){return "#ffffe0ff"},peg$c731="LightYellow",peg$c732=peg$literalExpectation("LightYellow",false),peg$c733="limegreen",peg$c734=peg$literalExpectation("limegreen",false),peg$c735=function(){return "#32cd32ff"},peg$c736="LimeGreen",peg$c737=peg$literalExpectation("LimeGreen",false),peg$c738="lime",peg$c739=peg$literalExpectation("lime",false),peg$c740=function(){return "#00ff00ff"},peg$c741="Lime",peg$c742=peg$literalExpectation("Lime",false),peg$c743="linen",peg$c744=peg$literalExpectation("linen",false),peg$c745=function(){return "#faf0e6ff"},peg$c746="Linen",peg$c747=peg$literalExpectation("Linen",false),peg$c748="magenta",peg$c749=peg$literalExpectation("magenta",false),peg$c750="Magenta",peg$c751=peg$literalExpectation("Magenta",false),peg$c752="maroon",peg$c753=peg$literalExpectation("maroon",false),peg$c754=function(){return "#800000ff"},peg$c755="Maroon",peg$c756=peg$literalExpectation("Maroon",false),peg$c757="mediumaquamarine",peg$c758=peg$literalExpectation("mediumaquamarine",false),peg$c759=function(){return "#66cdaaff"},peg$c760="MediumAquaMarine",peg$c761=peg$literalExpectation("MediumAquaMarine",false),peg$c762="mediumblue",peg$c763=peg$literalExpectation("mediumblue",false),peg$c764=function(){return "#0000cdff"},peg$c765="MediumBlue",peg$c766=peg$literalExpectation("MediumBlue",false),peg$c767="mediumorchid",peg$c768=peg$literalExpectation("mediumorchid",false),peg$c769=function(){return "#ba55d3ff"},peg$c770="MediumOrchid",peg$c771=peg$literalExpectation("MediumOrchid",false),peg$c772="mediumpurple",peg$c773=peg$literalExpectation("mediumpurple",false),peg$c774=function(){return "#9370d8ff"},peg$c775="MediumPurple",peg$c776=peg$literalExpectation("MediumPurple",false),peg$c777="mediumseagreen",peg$c778=peg$literalExpectation("mediumseagreen",false),peg$c779=function(){return "#3cb371ff"},peg$c780="MediumSeaGreen",peg$c781=peg$literalExpectation("MediumSeaGreen",false),peg$c782="mediumslateblue",peg$c783=peg$literalExpectation("mediumslateblue",false),peg$c784=function(){return "#7b68eeff"},peg$c785="MediumSlateBlue",peg$c786=peg$literalExpectation("MediumSlateBlue",false),peg$c787="mediumspringgreen",peg$c788=peg$literalExpectation("mediumspringgreen",false),peg$c789=function(){return "#00fa9aff"},peg$c790="MediumSpringGreen",peg$c791=peg$literalExpectation("MediumSpringGreen",false),peg$c792="mediumturquoise",peg$c793=peg$literalExpectation("mediumturquoise",false),peg$c794=function(){return "#48d1ccff"},peg$c795="MediumTurquoise",peg$c796=peg$literalExpectation("MediumTurquoise",false),peg$c797="mediumvioletred",peg$c798=peg$literalExpectation("mediumvioletred",false),peg$c799=function(){return "#c71585ff"},peg$c800="MediumVioletRed",peg$c801=peg$literalExpectation("MediumVioletRed",false),peg$c802="midnightblue",peg$c803=peg$literalExpectation("midnightblue",false),peg$c804=function(){return "#191970ff"},peg$c805="MidnightBlue",peg$c806=peg$literalExpectation("MidnightBlue",false),peg$c807="mintcream",peg$c808=peg$literalExpectation("mintcream",false),peg$c809=function(){return "#f5fffaff"},peg$c810="MintCream",peg$c811=peg$literalExpectation("MintCream",false),peg$c812="mistyrose",peg$c813=peg$literalExpectation("mistyrose",false),peg$c814=function(){return "#ffe4e1ff"},peg$c815="MistyRose",peg$c816=peg$literalExpectation("MistyRose",false),peg$c817="moccasin",peg$c818=peg$literalExpectation("moccasin",false),peg$c819=function(){return "#ffe4b5ff"},peg$c820="Moccasin",peg$c821=peg$literalExpectation("Moccasin",false),peg$c822="navajowhite",peg$c823=peg$literalExpectation("navajowhite",false),peg$c824=function(){return "#ffdeadff"},peg$c825="NavajoWhite",peg$c826=peg$literalExpectation("NavajoWhite",false),peg$c827="navy",peg$c828=peg$literalExpectation("navy",false),peg$c829=function(){return "#000080ff"},peg$c830="Navy",peg$c831=peg$literalExpectation("Navy",false),peg$c832="oldlace",peg$c833=peg$literalExpectation("oldlace",false),peg$c834=function(){return "#fdf5e6ff"},peg$c835="OldLace",peg$c836=peg$literalExpectation("OldLace",false),peg$c837="olivedrab",peg$c838=peg$literalExpectation("olivedrab",false),peg$c839=function(){return "#6b8e23ff"},peg$c840="OliveDrab",peg$c841=peg$literalExpectation("OliveDrab",false),peg$c842="olive",peg$c843=peg$literalExpectation("olive",false),peg$c844=function(){return "#808000ff"},peg$c845="Olive",peg$c846=peg$literalExpectation("Olive",false),peg$c847="orangered",peg$c848=peg$literalExpectation("orangered",false),peg$c849=function(){return "#ff4500ff"},peg$c850="OrangeRed",peg$c851=peg$literalExpectation("OrangeRed",false),peg$c852="orange",peg$c853=peg$literalExpectation("orange",false),peg$c854=function(){return "#ffa500ff"},peg$c855="Orange",peg$c856=peg$literalExpectation("Orange",false),peg$c857="orchid",peg$c858=peg$literalExpectation("orchid",false),peg$c859=function(){return "#da70d6ff"},peg$c860="Orchid",peg$c861=peg$literalExpectation("Orchid",false),peg$c862="palegoldenrod",peg$c863=peg$literalExpectation("palegoldenrod",false),peg$c864=function(){return "#eee8aaff"},peg$c865="PaleGoldenRod",peg$c866=peg$literalExpectation("PaleGoldenRod",false),peg$c867="palegreen",peg$c868=peg$literalExpectation("palegreen",false),peg$c869=function(){return "#98fb98ff"},peg$c870="PaleGreen",peg$c871=peg$literalExpectation("PaleGreen",false),peg$c872="paleturquoise",peg$c873=peg$literalExpectation("paleturquoise",false),peg$c874=function(){return "#afeeeeff"},peg$c875="PaleTurquoise",peg$c876=peg$literalExpectation("PaleTurquoise",false),peg$c877="palevioletred",peg$c878=peg$literalExpectation("palevioletred",false),peg$c879=function(){return "#d87093ff"},peg$c880="PaleVioletRed",peg$c881=peg$literalExpectation("PaleVioletRed",false),peg$c882="papayawhip",peg$c883=peg$literalExpectation("papayawhip",false),peg$c884=function(){return "#ffefd5ff"},peg$c885="PapayaWhip",peg$c886=peg$literalExpectation("PapayaWhip",false),peg$c887="peachpuff",peg$c888=peg$literalExpectation("peachpuff",false),peg$c889=function(){return "#ffdab9ff"},peg$c890="PeachPuff",peg$c891=peg$literalExpectation("PeachPuff",false),peg$c892="peru",peg$c893=peg$literalExpectation("peru",false),peg$c894=function(){return "#cd853fff"},peg$c895="Peru",peg$c896=peg$literalExpectation("Peru",false),peg$c897="pink",peg$c898=peg$literalExpectation("pink",false),peg$c899=function(){return "#ffc0cbff"},peg$c900="Pink",peg$c901=peg$literalExpectation("Pink",false),peg$c902="plum",peg$c903=peg$literalExpectation("plum",false),peg$c904=function(){return "#dda0ddff"},peg$c905="Plum",peg$c906=peg$literalExpectation("Plum",false),peg$c907="powderblue",peg$c908=peg$literalExpectation("powderblue",false),peg$c909=function(){return "#b0e0e6ff"},peg$c910="PowderBlue",peg$c911=peg$literalExpectation("PowderBlue",false),peg$c912="purple",peg$c913=peg$literalExpectation("purple",false),peg$c914=function(){return "#800080ff"},peg$c915="Purple",peg$c916=peg$literalExpectation("Purple",false),peg$c917="red",peg$c918=peg$literalExpectation("red",false),peg$c919=function(){return "#ff0000ff"},peg$c920="Red",peg$c921=peg$literalExpectation("Red",false),peg$c922="rosybrown",peg$c923=peg$literalExpectation("rosybrown",false),peg$c924=function(){return "#bc8f8fff"},peg$c925="RosyBrown",peg$c926=peg$literalExpectation("RosyBrown",false),peg$c927="royalblue",peg$c928=peg$literalExpectation("royalblue",false),peg$c929=function(){return "#4169e1ff"},peg$c930="RoyalBlue",peg$c931=peg$literalExpectation("RoyalBlue",false),peg$c932="saddlebrown",peg$c933=peg$literalExpectation("saddlebrown",false),peg$c934=function(){return "#8b4513ff"},peg$c935="SaddleBrown",peg$c936=peg$literalExpectation("SaddleBrown",false),peg$c937="salmon",peg$c938=peg$literalExpectation("salmon",false),peg$c939=function(){return "#fa8072ff"},peg$c940="Salmon",peg$c941=peg$literalExpectation("Salmon",false),peg$c942="sandybrown",peg$c943=peg$literalExpectation("sandybrown",false),peg$c944=function(){return "#f4a460ff"},peg$c945="SandyBrown",peg$c946=peg$literalExpectation("SandyBrown",false),peg$c947="seagreen",peg$c948=peg$literalExpectation("seagreen",false),peg$c949=function(){return "#2e8b57ff"},peg$c950="SeaGreen",peg$c951=peg$literalExpectation("SeaGreen",false),peg$c952="seashell",peg$c953=peg$literalExpectation("seashell",false),peg$c954=function(){return "#fff5eeff"},peg$c955="SeaShell",peg$c956=peg$literalExpectation("SeaShell",false),peg$c957="sienna",peg$c958=peg$literalExpectation("sienna",false),peg$c959=function(){return "#a0522dff"},peg$c960="Sienna",peg$c961=peg$literalExpectation("Sienna",false),peg$c962="silver",peg$c963=peg$literalExpectation("silver",false),peg$c964=function(){return "#c0c0c0ff"},peg$c965="Silver",peg$c966=peg$literalExpectation("Silver",false),peg$c967="skyblue",peg$c968=peg$literalExpectation("skyblue",false),peg$c969=function(){return "#87ceebff"},peg$c970="SkyBlue",peg$c971=peg$literalExpectation("SkyBlue",false),peg$c972="slateblue",peg$c973=peg$literalExpectation("slateblue",false),peg$c974=function(){return "#6a5acdff"},peg$c975="SlateBlue",peg$c976=peg$literalExpectation("SlateBlue",false),peg$c977="slategray",peg$c978=peg$literalExpectation("slategray",false),peg$c979=function(){return "#708090ff"},peg$c980="SlateGray",peg$c981=peg$literalExpectation("SlateGray",false),peg$c982="slategrey",peg$c983=peg$literalExpectation("slategrey",false),peg$c984="SlateGrey",peg$c985=peg$literalExpectation("SlateGrey",false),peg$c986="snow",peg$c987=peg$literalExpectation("snow",false),peg$c988=function(){return "#fffafaff"},peg$c989="Snow",peg$c990=peg$literalExpectation("Snow",false),peg$c991="springgreen",peg$c992=peg$literalExpectation("springgreen",false),peg$c993=function(){return "#00ff7fff"},peg$c994="SpringGreen",peg$c995=peg$literalExpectation("SpringGreen",false),peg$c996="steelblue",peg$c997=peg$literalExpectation("steelblue",false),peg$c998=function(){return "#4682b4ff"},peg$c999="SteelBlue",peg$c1000=peg$literalExpectation("SteelBlue",false),peg$c1001="tan",peg$c1002=peg$literalExpectation("tan",false),peg$c1003=function(){return "#d2b48cff"},peg$c1004="Tan",peg$c1005=peg$literalExpectation("Tan",false),peg$c1006="teal",peg$c1007=peg$literalExpectation("teal",false),peg$c1008=function(){return "#008080ff"},peg$c1009="Teal",peg$c1010=peg$literalExpectation("Teal",false),peg$c1011="thistle",peg$c1012=peg$literalExpectation("thistle",false),peg$c1013=function(){return "#d8bfd8ff"},peg$c1014="Thistle",peg$c1015=peg$literalExpectation("Thistle",false),peg$c1016="tomato",peg$c1017=peg$literalExpectation("tomato",false),peg$c1018=function(){return "#ff6347ff"},peg$c1019="Tomato",peg$c1020=peg$literalExpectation("Tomato",false),peg$c1021="turquoise",peg$c1022=peg$literalExpectation("turquoise",false),peg$c1023=function(){return "#40e0d0ff"},peg$c1024="Turquoise",peg$c1025=peg$literalExpectation("Turquoise",false),peg$c1026="violet",peg$c1027=peg$literalExpectation("violet",false),peg$c1028=function(){return "#ee82eeff"},peg$c1029="Violet",peg$c1030=peg$literalExpectation("Violet",false),peg$c1031="wheat",peg$c1032=peg$literalExpectation("wheat",false),peg$c1033=function(){return "#f5deb3ff"},peg$c1034="Wheat",peg$c1035=peg$literalExpectation("Wheat",false),peg$c1036="whitesmoke",peg$c1037=peg$literalExpectation("whitesmoke",false),peg$c1038=function(){return "#f5f5f5ff"},peg$c1039="WhiteSmoke",peg$c1040=peg$literalExpectation("WhiteSmoke",false),peg$c1041="white",peg$c1042=peg$literalExpectation("white",false),peg$c1043=function(){return "#ffffffff"},peg$c1044="White",peg$c1045=peg$literalExpectation("White",false),peg$c1046="yellowgreen",peg$c1047=peg$literalExpectation("yellowgreen",false),peg$c1048=function(){return "#9acd32ff"},peg$c1049="YellowGreen",peg$c1050=peg$literalExpectation("YellowGreen",false),peg$c1051="yellow",peg$c1052=peg$literalExpectation("yellow",false),peg$c1053=function(){return "#ffff00ff"},peg$c1054="Yellow",peg$c1055=peg$literalExpectation("Yellow",false),peg$c1056=function(lab){return lab},peg$c1057="#",peg$c1058=peg$literalExpectation("#",false),peg$c1059=function(r,g,b){return `#${r}${r}${g}${g}${b}${b}ff`},peg$c1060=function(r1,r2,g1,g2,b1,b2){return `#${r1}${r2}${g1}${g2}${b1}${b2}ff`},peg$c1061=function(r,g,b,a){return `#${r}${r}${g}${g}${b}${b}${a}${a}`},peg$c1062=function(r1,r2,g1,g2,b1,b2,a1,a2){return `#${r1}${r2}${g1}${g2}${b1}${b2}${a1}${a2}`},peg$c1063=peg$otherExpectation("color"),peg$c1064="arc_label",peg$c1065=peg$literalExpectation("arc_label",false),peg$c1066="head_label",peg$c1067=peg$literalExpectation("head_label",false),peg$c1068="tail_label",peg$c1069=peg$literalExpectation("tail_label",false),peg$c1070=":",peg$c1071=peg$literalExpectation(":",false),peg$c1072=";",peg$c1073=peg$literalExpectation(";",false),peg$c1074=function(key,value){return {key:key,value:value}},peg$c1075=peg$otherExpectation("single edge color"),peg$c1076="edge_color",peg$c1077=peg$literalExpectation("edge_color",false),peg$c1078=function(value){return {key:"single_edge_color",value:value}},peg$c1079=peg$otherExpectation("transition line style"),peg$c1080="linestyle",peg$c1081=peg$literalExpectation("linestyle",false),peg$c1082=function(value){return {key:"transition_line_style",value:value}},peg$c1083="{",peg$c1084=peg$literalExpectation("{",false),peg$c1085="}",peg$c1086=peg$literalExpectation("}",false),peg$c1087=function(items){return items},peg$c1088="%",peg$c1089=peg$literalExpectation("%",false),peg$c1090=function(value){return {key:"arrow probability",value:value}},peg$c1091="[",peg$c1092=peg$literalExpectation("[",false),peg$c1093="]",peg$c1094=peg$literalExpectation("]",false),peg$c1095=function(names){return names.map((i=>i[0]))},peg$c1096="+|",peg$c1097=peg$literalExpectation("+|",false),peg$c1098=function(nzd,dd){return {key:"stripe",value:parseInt(`${nzd}${dd}`,10)}},peg$c1099="-|",peg$c1100=peg$literalExpectation("-|",false),peg$c1101=function(nzd,dd){return {key:"stripe",value:-1*parseInt(`${nzd}${dd}`,10)}},peg$c1102="+",peg$c1103=peg$literalExpectation("+",false),peg$c1104=function(nzd,dd){return {key:"cycle",value:parseInt(`${nzd}${dd}`,10)}},peg$c1105="-",peg$c1106=peg$literalExpectation("-",false),peg$c1107=function(nzd,dd){return {key:"cycle",value:-1*parseInt(`${nzd}${dd}`,10)}},peg$c1108="+0",peg$c1109=peg$literalExpectation("+0",false),peg$c1110=function(){return {key:"cycle",value:0}},peg$c1111=function(r_action,r_prob,l_desc,arrow,r_desc,l_prob,l_action,label,tail){const base={kind:arrow,to:label};if(tail&&tail!==[]){base.se=tail;}if(l_desc){base.l_desc=l_desc;}if(r_desc){base.r_desc=r_desc;}if(l_action){base.l_action=l_action;}if(r_action){base.r_action=r_action;}if(l_prob){base.l_probability=l_prob.value;}if(r_prob){base.r_probability=r_prob.value;}return base},peg$c1112=function(label,se){const base={key:"transition",from:label};if(se&&se!==[]){base.se=se;}return base},peg$c1113="whargarbl",peg$c1114=peg$literalExpectation("whargarbl",false),peg$c1115="todo",peg$c1116=peg$literalExpectation("todo",false),peg$c1117=function(validationkey,value){return {key:validationkey,value:value}},peg$c1118="validation",peg$c1119=peg$literalExpectation("validation",false),peg$c1120="};",peg$c1121=peg$literalExpectation("};",false),peg$c1122=function(validation_items){return {config_kind:"validation",config_items:validation_items||[]}},peg$c1123="dot",peg$c1124=peg$literalExpectation("dot",false),peg$c1125="circo",peg$c1126=peg$literalExpectation("circo",false),peg$c1127="fdp",peg$c1128=peg$literalExpectation("fdp",false),peg$c1129="neato",peg$c1130=peg$literalExpectation("neato",false),peg$c1131="shape",peg$c1132=peg$literalExpectation("shape",false),peg$c1133=function(value){return {key:"shape",value:value}},peg$c1134="state",peg$c1135=peg$literalExpectation("state",false),peg$c1136=function(state_items){return {key:"state_config",value:{config_kind:"state",config_items:state_items||[]}}},peg$c1137="start_state",peg$c1138=peg$literalExpectation("start_state",false),peg$c1139=function(state_items){return {key:"state_config",value:{config_kind:"in_state",config_items:state_items||[]}}},peg$c1140="end_state",peg$c1141=peg$literalExpectation("end_state",false),peg$c1142=function(state_items){return {key:"state_config",value:{config_kind:"out_state",config_items:state_items||[]}}},peg$c1143=function(actionkey,value){return {key:actionkey,value:value}},peg$c1144="action",peg$c1145=peg$literalExpectation("action",false),peg$c1146=function(action_items){return {config_kind:"action",config_items:action_items||[]}},peg$c1147=function(transitionkey,value){return {key:transitionkey,value:value}},peg$c1148=peg$otherExpectation("graph default edge color"),peg$c1149=function(value){return {key:"graph_default_edge_color",value:value}},peg$c1150="transition",peg$c1151=peg$literalExpectation("transition",false),peg$c1152=function(transition_items){return {config_kind:"transition",config_items:transition_items||[]}},peg$c1153="graph_layout",peg$c1154=peg$literalExpectation("graph_layout",false),peg$c1155=function(value){return {key:"graph_layout",value:value}},peg$c1156="start_states",peg$c1157=peg$literalExpectation("start_states",false),peg$c1158=function(value){return {key:"start_states",value:value}},peg$c1159="end_states",peg$c1160=peg$literalExpectation("end_states",false),peg$c1161=function(value){return {key:"end_states",value:value}},peg$c1162="graph_bg_color",peg$c1163=peg$literalExpectation("graph_bg_color",false),peg$c1164=function(value){return {key:"graph_bg_color",value:value}},peg$c1165=peg$otherExpectation("configuration"),peg$c1166="MIT",peg$c1167=peg$literalExpectation("MIT",false),peg$c1168="BSD 2-clause",peg$c1169=peg$literalExpectation("BSD 2-clause",false),peg$c1170="BSD 3-clause",peg$c1171=peg$literalExpectation("BSD 3-clause",false),peg$c1172="Apache 2.0",peg$c1173=peg$literalExpectation("Apache 2.0",false),peg$c1174="Mozilla 2.0",peg$c1175=peg$literalExpectation("Mozilla 2.0",false),peg$c1176="Public domain",peg$c1177=peg$literalExpectation("Public domain",false),peg$c1178="GPL v2",peg$c1179=peg$literalExpectation("GPL v2",false),peg$c1180="GPL v3",peg$c1181=peg$literalExpectation("GPL v3",false),peg$c1182="LGPL v2.1",peg$c1183=peg$literalExpectation("LGPL v2.1",false),peg$c1184="LGPL v3.0",peg$c1185=peg$literalExpectation("LGPL v3.0",false),peg$c1186="Unknown",peg$c1187=peg$literalExpectation("Unknown",false),peg$c1188=peg$otherExpectation("direction"),peg$c1189="up",peg$c1190=peg$literalExpectation("up",false),peg$c1191="right",peg$c1192=peg$literalExpectation("right",false),peg$c1193="down",peg$c1194=peg$literalExpectation("down",false),peg$c1195="left",peg$c1196=peg$literalExpectation("left",false),peg$c1197=peg$otherExpectation("hook definition (open/closed)"),peg$c1198="open",peg$c1199=peg$literalExpectation("open",false),peg$c1200="closed",peg$c1201=peg$literalExpectation("closed",false),peg$c1202="machine_author",peg$c1203=peg$literalExpectation("machine_author",false),peg$c1204=function(value){return {key:"machine_author",value:value}},peg$c1205="machine_contributor",peg$c1206=peg$literalExpectation("machine_contributor",false),peg$c1207=function(value){return {key:"machine_contributor",value:value}},peg$c1208="machine_comment",peg$c1209=peg$literalExpectation("machine_comment",false),peg$c1210=function(value){return {key:"machine_comment",value:value}},peg$c1211="machine_definition",peg$c1212=peg$literalExpectation("machine_definition",false),peg$c1213=function(value){return {key:"machine_definition",value:value}},peg$c1214="machine_name",peg$c1215=peg$literalExpectation("machine_name",false),peg$c1216=function(value){return {key:"machine_name",value:value}},peg$c1220="machine_version",peg$c1221=peg$literalExpectation("machine_version",false),peg$c1222=function(value){return {key:"machine_version",value:value}},peg$c1223="machine_license",peg$c1224=peg$literalExpectation("machine_license",false),peg$c1225=function(value){return {key:"machine_license",value:value}},peg$c1226="machine_language",peg$c1227=peg$literalExpectation("machine_language",false),peg$c1228=function(value){return {key:"machine_language",value:value}},peg$c1229="fsl_version",peg$c1230=peg$literalExpectation("fsl_version",false),peg$c1231=function(value){return {key:"fsl_version",value:value}},peg$c1232="theme",peg$c1233=peg$literalExpectation("theme",false),peg$c1234=function(value){return {key:"theme",value:value}},peg$c1235="flow",peg$c1236=peg$literalExpectation("flow",false),peg$c1237=function(value){return {key:"flow",value:value}},peg$c1238="hooks",peg$c1239=peg$literalExpectation("hooks",false),peg$c1240=function(value){return {key:"hook_definition",value:value}},peg$c1241="dot_preamble",peg$c1242=peg$literalExpectation("dot_preamble",false),peg$c1243=function(value){return {key:"dot_preamble",value:value}},peg$c1244=peg$otherExpectation("machine attribute"),peg$c1245="color",peg$c1246=peg$literalExpectation("color",false),peg$c1247=function(value){return {key:"color",value:value}},peg$c1248=peg$otherExpectation("text color"),peg$c1249="text-color",peg$c1250=peg$literalExpectation("text-color",false),peg$c1251=function(value){return {key:"text-color",value:value}},peg$c1252=peg$otherExpectation("background color"),peg$c1253="background-color",peg$c1254=peg$literalExpectation("background-color",false),peg$c1255=function(value){return {key:"background-color",value:value}},peg$c1256=peg$otherExpectation("border color"),peg$c1257="border-color",peg$c1258=peg$literalExpectation("border-color",false),peg$c1259=function(value){return {key:"border-color",value:value}},peg$c1260=peg$otherExpectation("shape"),peg$c1261=function(value){return {key:"shape",value:value}},peg$c1262=peg$otherExpectation("corners"),peg$c1263="corners",peg$c1264=peg$literalExpectation("corners",false),peg$c1265=function(value){return {key:"corners",value:value}},peg$c1266=peg$otherExpectation("linestyle"),peg$c1267=function(value){return {key:"linestyle",value:value}},peg$c1268=function(name,value){return {key:"state_declaration",name:name,value:value}},peg$c1269="&",peg$c1270=peg$literalExpectation("&",false),peg$c1271=function(name,value){return {key:"named_list",name:name,value:value}},peg$c1272="null",peg$c1273=peg$literalExpectation("null",false),peg$c1274="undefined",peg$c1275=peg$literalExpectation("undefined",false),peg$c1276=function(){return parseFloat(text())},peg$c1277="Infinity",peg$c1278=peg$literalExpectation("Infinity",false),peg$c1279="NegInfinity",peg$c1280=peg$literalExpectation("NegInfinity",false),peg$c1281="NaN",peg$c1282=peg$literalExpectation("NaN",false),peg$c1283="MaxSafeInt",peg$c1284=peg$literalExpectation("MaxSafeInt",false),peg$c1285="MinSafeInt",peg$c1286=peg$literalExpectation("MinSafeInt",false),peg$c1287=function(chars){return chars.join("")},peg$c1288=function(char){return char},peg$c1289=function(sequence){return sequence},peg$c1290=function(){return "\b"},peg$c1291=function(){return "\f"},peg$c1292=function(){return "\n"},peg$c1293=function(){return "\r"},peg$c1294=function(){return "\t"},peg$c1295=function(){return "\v"},peg$c1296="property",peg$c1297=peg$literalExpectation("property",false),peg$c1298=function(name,default_value){return {key:"property_definition",name:name,default_value:default_value}},peg$c1299=function(name){return {key:"property_definition",name:name}},peg$c1300="arrange",peg$c1301=peg$literalExpectation("arrange",false),peg$c1302=function(value){return {key:"arrange_declaration",value:value}},peg$c1303="arrange-start",peg$c1304=peg$literalExpectation("arrange-start",false),peg$c1305=function(value){return {key:"arrange_start_declaration",value:value}},peg$c1306="arrange-end",peg$c1307=peg$literalExpectation("arrange-end",false),peg$c1308=function(value){return {key:"arrange_end_declaration",value:value}},peg$c1309=peg$otherExpectation("arrange declaration"),peg$currPos=0,peg$savedPos=0,peg$posDetailsCache=[{line:1,column:1}],peg$maxFailPos=0,peg$maxFailExpected=[],peg$silentFails=0,peg$result;if("startRule"in options){if(!(options.startRule in peg$startRuleFunctions)){throw new Error("Can't start parsing from rule \""+options.startRule+'".')}peg$startRuleFunction=peg$startRuleFunctions[options.startRule];}function text(){return input.substring(peg$savedPos,peg$currPos)}function peg$literalExpectation(text,ignoreCase){return {type:"literal",text:text,ignoreCase:ignoreCase}}function peg$classExpectation(parts,inverted,ignoreCase){return {type:"class",parts:parts,inverted:inverted,ignoreCase:ignoreCase}}function peg$anyExpectation(){return {type:"any"}}function peg$endExpectation(){return {type:"end"}}function peg$otherExpectation(description){return {type:"other",description:description}}function peg$computePosDetails(pos){var details=peg$posDetailsCache[pos],p;if(details){return details}else {p=pos-1;while(!peg$posDetailsCache[p]){p--;}details=peg$posDetailsCache[p];details={line:details.line,column:details.column};while(p<pos){if(input.charCodeAt(p)===10){details.line++;details.column=1;}else {details.column++;}p++;}peg$posDetailsCache[pos]=details;return details}}function peg$computeLocation(startPos,endPos){var startPosDetails=peg$computePosDetails(startPos),endPosDetails=peg$computePosDetails(endPos);return {start:{offset:startPos,line:startPosDetails.line,column:startPosDetails.column},end:{offset:endPos,line:endPosDetails.line,column:endPosDetails.column}}}function peg$fail(expected){if(peg$currPos<peg$maxFailPos){return}if(peg$currPos>peg$maxFailPos){peg$maxFailPos=peg$currPos;peg$maxFailExpected=[];}peg$maxFailExpected.push(expected);}function peg$buildStructuredError(expected,found,location){return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected,found),expected,found,location)}function peg$parseDocument(){var s0,s1,s2,s3;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){s2=peg$parseTermList();if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){peg$savedPos=s0;s1=peg$c0(s2);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseTheme(){var s0;if(input.substr(peg$currPos,4)===peg$c1){s0=peg$c1;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c2);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,7)===peg$c3){s0=peg$c3;peg$currPos+=7;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c4);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,6)===peg$c5){s0=peg$c5;peg$currPos+=6;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c6);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,5)===peg$c7){s0=peg$c7;peg$currPos+=5;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c8);}}}}}return s0}function peg$parseGvizShape(){var s0;if(input.substr(peg$currPos,5)===peg$c9){s0=peg$c9;peg$currPos+=5;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c10);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,7)===peg$c11){s0=peg$c11;peg$currPos+=7;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c12);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,7)===peg$c13){s0=peg$c13;peg$currPos+=7;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c14);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,4)===peg$c15){s0=peg$c15;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c16);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,6)===peg$c17){s0=peg$c17;peg$currPos+=6;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c18);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,5)===peg$c19){s0=peg$c19;peg$currPos+=5;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c20);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,3)===peg$c21){s0=peg$c21;peg$currPos+=3;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c22);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,8)===peg$c23){s0=peg$c23;peg$currPos+=8;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c24);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,9)===peg$c25){s0=peg$c25;peg$currPos+=9;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c26);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,5)===peg$c27){s0=peg$c27;peg$currPos+=5;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c28);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,7)===peg$c29){s0=peg$c29;peg$currPos+=7;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c30);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,9)===peg$c31){s0=peg$c31;peg$currPos+=9;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c32);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,13)===peg$c33){s0=peg$c33;peg$currPos+=13;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c34);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,5)===peg$c35){s0=peg$c35;peg$currPos+=5;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c36);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,8)===peg$c37){s0=peg$c37;peg$currPos+=8;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c38);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,7)===peg$c39){s0=peg$c39;peg$currPos+=7;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c40);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,8)===peg$c41){s0=peg$c41;peg$currPos+=8;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c42);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,7)===peg$c43){s0=peg$c43;peg$currPos+=7;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c44);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,12)===peg$c45){s0=peg$c45;peg$currPos+=12;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c46);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,13)===peg$c47){s0=peg$c47;peg$currPos+=13;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c48);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,13)===peg$c49){s0=peg$c49;peg$currPos+=13;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c50);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,11)===peg$c51){s0=peg$c51;peg$currPos+=11;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c52);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,12)===peg$c53){s0=peg$c53;peg$currPos+=12;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c54);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,8)===peg$c55){s0=peg$c55;peg$currPos+=8;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c56);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,8)===peg$c57){s0=peg$c57;peg$currPos+=8;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c58);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,7)===peg$c59){s0=peg$c59;peg$currPos+=7;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c60);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,7)===peg$c61){s0=peg$c61;peg$currPos+=7;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c62);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,9)===peg$c63){s0=peg$c63;peg$currPos+=9;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c64);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,4)===peg$c65){s0=peg$c65;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c66);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,6)===peg$c67){s0=peg$c67;peg$currPos+=6;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c68);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,4)===peg$c69){s0=peg$c69;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c70);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,4)===peg$c1){s0=peg$c1;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c2);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,9)===peg$c71){s0=peg$c71;peg$currPos+=9;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c72);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,8)===peg$c73){s0=peg$c73;peg$currPos+=8;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c74);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,4)===peg$c75){s0=peg$c75;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c76);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,3)===peg$c77){s0=peg$c77;peg$currPos+=3;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c78);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,6)===peg$c79){s0=peg$c79;peg$currPos+=6;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c80);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,3)===peg$c81){s0=peg$c81;peg$currPos+=3;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c82);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,9)===peg$c83){s0=peg$c83;peg$currPos+=9;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c84);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,8)===peg$c85){s0=peg$c85;peg$currPos+=8;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c86);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,3)===peg$c87){s0=peg$c87;peg$currPos+=3;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c88);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,10)===peg$c89){s0=peg$c89;peg$currPos+=10;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c90);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,3)===peg$c91){s0=peg$c91;peg$currPos+=3;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c92);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,10)===peg$c93){s0=peg$c93;peg$currPos+=10;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c94);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,15)===peg$c95){s0=peg$c95;peg$currPos+=15;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c96);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,13)===peg$c97){s0=peg$c97;peg$currPos+=13;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c98);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,14)===peg$c99){s0=peg$c99;peg$currPos+=14;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c100);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,9)===peg$c101){s0=peg$c101;peg$currPos+=9;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c102);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,8)===peg$c103){s0=peg$c103;peg$currPos+=8;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c104);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,9)===peg$c105){s0=peg$c105;peg$currPos+=9;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c106);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,9)===peg$c107){s0=peg$c107;peg$currPos+=9;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c108);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,8)===peg$c109){s0=peg$c109;peg$currPos+=8;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c110);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,7)===peg$c111){s0=peg$c111;peg$currPos+=7;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c112);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,12)===peg$c113){s0=peg$c113;peg$currPos+=12;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c114);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,11)===peg$c115){s0=peg$c115;peg$currPos+=11;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c116);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,9)===peg$c117){s0=peg$c117;peg$currPos+=9;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c118);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,6)===peg$c119){s0=peg$c119;peg$currPos+=6;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c120);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,6)===peg$c121){s0=peg$c121;peg$currPos+=6;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c122);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,9)===peg$c123){s0=peg$c123;peg$currPos+=9;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c124);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,6)===peg$c125){s0=peg$c125;peg$currPos+=6;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c126);}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}return s0}function peg$parseForwardLightArrow(){var s0,s1;peg$silentFails++;if(input.substr(peg$currPos,2)===peg$c128){s0=peg$c128;peg$currPos+=2;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c129);}}if(s0===peg$FAILED){s0=peg$currPos;if(input.charCodeAt(peg$currPos)===8594){s1=peg$c130;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c131);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c132();}s0=s1;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c127);}}return s0}function peg$parseTwoWayLightArrow(){var s0,s1;peg$silentFails++;if(input.substr(peg$currPos,3)===peg$c134){s0=peg$c134;peg$currPos+=3;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c135);}}if(s0===peg$FAILED){s0=peg$currPos;if(input.charCodeAt(peg$currPos)===8596){s1=peg$c136;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c137);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c138();}s0=s1;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c133);}}return s0}function peg$parseBackLightArrow(){var s0,s1;peg$silentFails++;if(input.substr(peg$currPos,2)===peg$c140){s0=peg$c140;peg$currPos+=2;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c141);}}if(s0===peg$FAILED){s0=peg$currPos;if(input.charCodeAt(peg$currPos)===8592){s1=peg$c142;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c143);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c144();}s0=s1;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c139);}}return s0}function peg$parseForwardFatArrow(){var s0,s1;peg$silentFails++;if(input.substr(peg$currPos,2)===peg$c146){s0=peg$c146;peg$currPos+=2;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c147);}}if(s0===peg$FAILED){s0=peg$currPos;if(input.charCodeAt(peg$currPos)===8658){s1=peg$c148;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c149);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c150();}s0=s1;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c145);}}return s0}function peg$parseTwoWayFatArrow(){var s0,s1;peg$silentFails++;if(input.substr(peg$currPos,3)===peg$c152){s0=peg$c152;peg$currPos+=3;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c153);}}if(s0===peg$FAILED){s0=peg$currPos;if(input.charCodeAt(peg$currPos)===8660){s1=peg$c154;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c155);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c156();}s0=s1;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c151);}}return s0}function peg$parseBackFatArrow(){var s0,s1;peg$silentFails++;if(input.substr(peg$currPos,2)===peg$c158){s0=peg$c158;peg$currPos+=2;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c159);}}if(s0===peg$FAILED){s0=peg$currPos;if(input.charCodeAt(peg$currPos)===8656){s1=peg$c160;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c161);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c162();}s0=s1;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c157);}}return s0}function peg$parseForwardTildeArrow(){var s0,s1;peg$silentFails++;if(input.substr(peg$currPos,2)===peg$c164){s0=peg$c164;peg$currPos+=2;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c165);}}if(s0===peg$FAILED){s0=peg$currPos;if(input.charCodeAt(peg$currPos)===8603){s1=peg$c166;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c167);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c168();}s0=s1;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c163);}}return s0}function peg$parseTwoWayTildeArrow(){var s0,s1;peg$silentFails++;if(input.substr(peg$currPos,3)===peg$c170){s0=peg$c170;peg$currPos+=3;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c171);}}if(s0===peg$FAILED){s0=peg$currPos;if(input.charCodeAt(peg$currPos)===8622){s1=peg$c172;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c173);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c174();}s0=s1;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c169);}}return s0}function peg$parseBackTildeArrow(){var s0,s1;peg$silentFails++;if(input.substr(peg$currPos,2)===peg$c176){s0=peg$c176;peg$currPos+=2;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c177);}}if(s0===peg$FAILED){s0=peg$currPos;if(input.charCodeAt(peg$currPos)===8602){s1=peg$c178;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c179);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c180();}s0=s1;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c175);}}return s0}function peg$parseLightFatArrow(){var s0,s1;peg$silentFails++;if(input.substr(peg$currPos,4)===peg$c182){s0=peg$c182;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c183);}}if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,2)===peg$c184){s1=peg$c184;peg$currPos+=2;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c185);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c186();}s0=s1;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c181);}}return s0}function peg$parseLightTildeArrow(){var s0,s1;peg$silentFails++;if(input.substr(peg$currPos,4)===peg$c188){s0=peg$c188;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c189);}}if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,2)===peg$c190){s1=peg$c190;peg$currPos+=2;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c191);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c192();}s0=s1;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c187);}}return s0}function peg$parseFatLightArrow(){var s0,s1;peg$silentFails++;if(input.substr(peg$currPos,4)===peg$c194){s0=peg$c194;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c195);}}if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,2)===peg$c196){s1=peg$c196;peg$currPos+=2;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c197);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c198();}s0=s1;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c193);}}return s0}function peg$parseFatTildeArrow(){var s0,s1;peg$silentFails++;if(input.substr(peg$currPos,4)===peg$c200){s0=peg$c200;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c201);}}if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,2)===peg$c202){s1=peg$c202;peg$currPos+=2;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c203);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c204();}s0=s1;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c199);}}return s0}function peg$parseTildeLightArrow(){var s0,s1;peg$silentFails++;if(input.substr(peg$currPos,4)===peg$c206){s0=peg$c206;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c207);}}if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,2)===peg$c208){s1=peg$c208;peg$currPos+=2;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c209);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c210();}s0=s1;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c205);}}return s0}function peg$parseTildeFatArrow(){var s0,s1;peg$silentFails++;if(input.substr(peg$currPos,4)===peg$c212){s0=peg$c212;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c213);}}if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,2)===peg$c214){s1=peg$c214;peg$currPos+=2;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c215);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c216();}s0=s1;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c211);}}return s0}function peg$parseLightArrow(){var s0;peg$silentFails++;s0=peg$parseForwardLightArrow();if(s0===peg$FAILED){s0=peg$parseTwoWayLightArrow();if(s0===peg$FAILED){s0=peg$parseBackLightArrow();}}peg$silentFails--;if(s0===peg$FAILED){if(peg$silentFails===0){peg$fail(peg$c217);}}return s0}function peg$parseFatArrow(){var s0;peg$silentFails++;s0=peg$parseForwardFatArrow();if(s0===peg$FAILED){s0=peg$parseTwoWayFatArrow();if(s0===peg$FAILED){s0=peg$parseBackFatArrow();}}peg$silentFails--;if(s0===peg$FAILED){if(peg$silentFails===0){peg$fail(peg$c218);}}return s0}function peg$parseTildeArrow(){var s0;peg$silentFails++;s0=peg$parseForwardTildeArrow();if(s0===peg$FAILED){s0=peg$parseTwoWayTildeArrow();if(s0===peg$FAILED){s0=peg$parseBackTildeArrow();}}peg$silentFails--;if(s0===peg$FAILED){if(peg$silentFails===0){peg$fail(peg$c219);}}return s0}function peg$parseMixedArrow(){var s0;peg$silentFails++;s0=peg$parseLightFatArrow();if(s0===peg$FAILED){s0=peg$parseLightTildeArrow();if(s0===peg$FAILED){s0=peg$parseFatLightArrow();if(s0===peg$FAILED){s0=peg$parseFatTildeArrow();if(s0===peg$FAILED){s0=peg$parseTildeLightArrow();if(s0===peg$FAILED){s0=peg$parseTildeFatArrow();}}}}}peg$silentFails--;if(s0===peg$FAILED){if(peg$silentFails===0){peg$fail(peg$c220);}}return s0}function peg$parseArrow(){var s0;peg$silentFails++;s0=peg$parseMixedArrow();if(s0===peg$FAILED){s0=peg$parseLightArrow();if(s0===peg$FAILED){s0=peg$parseFatArrow();if(s0===peg$FAILED){s0=peg$parseTildeArrow();}}}peg$silentFails--;if(s0===peg$FAILED){if(peg$silentFails===0){peg$fail(peg$c221);}}return s0}function peg$parseCorners(){var s0;if(input.substr(peg$currPos,7)===peg$c228){s0=peg$c228;peg$currPos+=7;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c229);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,7)===peg$c230){s0=peg$c230;peg$currPos+=7;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c231);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,5)===peg$c232){s0=peg$c232;peg$currPos+=5;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c233);}}}}return s0}function peg$parseLineStyle(){var s0;if(input.substr(peg$currPos,5)===peg$c234){s0=peg$c234;peg$currPos+=5;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c235);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,6)===peg$c236){s0=peg$c236;peg$currPos+=6;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c237);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,6)===peg$c238){s0=peg$c238;peg$currPos+=6;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c239);}}}}return s0}function peg$parseHexDigit(){var s0;if(peg$c240.test(input.charAt(peg$currPos))){s0=input.charAt(peg$currPos);peg$currPos++;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c241);}}return s0}function peg$parseChar(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$parseUnescaped();if(s0===peg$FAILED){s0=peg$currPos;s1=peg$parseEscape();if(s1!==peg$FAILED){if(input.charCodeAt(peg$currPos)===34){s2=peg$c242;peg$currPos++;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c243);}}if(s2===peg$FAILED){if(input.charCodeAt(peg$currPos)===92){s2=peg$c244;peg$currPos++;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c245);}}if(s2===peg$FAILED){if(input.charCodeAt(peg$currPos)===47){s2=peg$c246;peg$currPos++;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c247);}}if(s2===peg$FAILED){s2=peg$currPos;if(input.charCodeAt(peg$currPos)===98){s3=peg$c248;peg$currPos++;}else {s3=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c249);}}if(s3!==peg$FAILED){peg$savedPos=s2;s3=peg$c250();}s2=s3;if(s2===peg$FAILED){s2=peg$currPos;if(input.charCodeAt(peg$currPos)===102){s3=peg$c251;peg$currPos++;}else {s3=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c252);}}if(s3!==peg$FAILED){peg$savedPos=s2;s3=peg$c253();}s2=s3;if(s2===peg$FAILED){s2=peg$currPos;if(input.charCodeAt(peg$currPos)===110){s3=peg$c254;peg$currPos++;}else {s3=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c255);}}if(s3!==peg$FAILED){peg$savedPos=s2;s3=peg$c256();}s2=s3;if(s2===peg$FAILED){s2=peg$currPos;if(input.charCodeAt(peg$currPos)===114){s3=peg$c257;peg$currPos++;}else {s3=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c258);}}if(s3!==peg$FAILED){peg$savedPos=s2;s3=peg$c259();}s2=s3;if(s2===peg$FAILED){s2=peg$currPos;if(input.charCodeAt(peg$currPos)===116){s3=peg$c260;peg$currPos++;}else {s3=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c261);}}if(s3!==peg$FAILED){peg$savedPos=s2;s3=peg$c262();}s2=s3;if(s2===peg$FAILED){s2=peg$currPos;if(input.charCodeAt(peg$currPos)===118){s3=peg$c263;peg$currPos++;}else {s3=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c264);}}if(s3!==peg$FAILED){peg$savedPos=s2;s3=peg$c265();}s2=s3;if(s2===peg$FAILED){s2=peg$currPos;if(input.charCodeAt(peg$currPos)===117){s3=peg$c266;peg$currPos++;}else {s3=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c267);}}if(s3!==peg$FAILED){s4=peg$currPos;s5=peg$currPos;s6=peg$parseHexDigit();if(s6!==peg$FAILED){s7=peg$parseHexDigit();if(s7!==peg$FAILED){s8=peg$parseHexDigit();if(s8!==peg$FAILED){s9=peg$parseHexDigit();if(s9!==peg$FAILED){s6=[s6,s7,s8,s9];s5=s6;}else {peg$currPos=s5;s5=peg$FAILED;}}else {peg$currPos=s5;s5=peg$FAILED;}}else {peg$currPos=s5;s5=peg$FAILED;}}else {peg$currPos=s5;s5=peg$FAILED;}if(s5!==peg$FAILED){s4=input.substring(s4,peg$currPos);}else {s4=s5;}if(s4!==peg$FAILED){peg$savedPos=s2;s3=peg$c268(s4);s2=s3;}else {peg$currPos=s2;s2=peg$FAILED;}}else {peg$currPos=s2;s2=peg$FAILED;}}}}}}}}}}if(s2!==peg$FAILED){peg$savedPos=s0;s1=peg$c269(s2);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}return s0}function peg$parseEscape(){var s0;if(input.charCodeAt(peg$currPos)===92){s0=peg$c244;peg$currPos++;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c245);}}return s0}function peg$parseQuoteMark(){var s0;if(input.charCodeAt(peg$currPos)===34){s0=peg$c242;peg$currPos++;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c243);}}return s0}function peg$parseUnescaped(){var s0;if(peg$c270.test(input.charAt(peg$currPos))){s0=input.charAt(peg$currPos);peg$currPos++;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c271);}}return s0}function peg$parseActionLabelChar(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$parseActionLabelUnescaped();if(s0===peg$FAILED){s0=peg$currPos;s1=peg$parseEscape();if(s1!==peg$FAILED){if(input.charCodeAt(peg$currPos)===39){s2=peg$c272;peg$currPos++;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c273);}}if(s2===peg$FAILED){if(input.charCodeAt(peg$currPos)===92){s2=peg$c244;peg$currPos++;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c245);}}if(s2===peg$FAILED){if(input.charCodeAt(peg$currPos)===47){s2=peg$c246;peg$currPos++;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c247);}}if(s2===peg$FAILED){s2=peg$currPos;if(input.charCodeAt(peg$currPos)===98){s3=peg$c248;peg$currPos++;}else {s3=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c249);}}if(s3!==peg$FAILED){peg$savedPos=s2;s3=peg$c250();}s2=s3;if(s2===peg$FAILED){s2=peg$currPos;if(input.charCodeAt(peg$currPos)===102){s3=peg$c251;peg$currPos++;}else {s3=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c252);}}if(s3!==peg$FAILED){peg$savedPos=s2;s3=peg$c253();}s2=s3;if(s2===peg$FAILED){s2=peg$currPos;if(input.charCodeAt(peg$currPos)===110){s3=peg$c254;peg$currPos++;}else {s3=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c255);}}if(s3!==peg$FAILED){peg$savedPos=s2;s3=peg$c256();}s2=s3;if(s2===peg$FAILED){s2=peg$currPos;if(input.charCodeAt(peg$currPos)===114){s3=peg$c257;peg$currPos++;}else {s3=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c258);}}if(s3!==peg$FAILED){peg$savedPos=s2;s3=peg$c259();}s2=s3;if(s2===peg$FAILED){s2=peg$currPos;if(input.charCodeAt(peg$currPos)===116){s3=peg$c260;peg$currPos++;}else {s3=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c261);}}if(s3!==peg$FAILED){peg$savedPos=s2;s3=peg$c262();}s2=s3;if(s2===peg$FAILED){s2=peg$currPos;if(input.charCodeAt(peg$currPos)===118){s3=peg$c263;peg$currPos++;}else {s3=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c264);}}if(s3!==peg$FAILED){peg$savedPos=s2;s3=peg$c265();}s2=s3;if(s2===peg$FAILED){s2=peg$currPos;if(input.charCodeAt(peg$currPos)===117){s3=peg$c266;peg$currPos++;}else {s3=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c267);}}if(s3!==peg$FAILED){s4=peg$currPos;s5=peg$currPos;s6=peg$parseHexDigit();if(s6!==peg$FAILED){s7=peg$parseHexDigit();if(s7!==peg$FAILED){s8=peg$parseHexDigit();if(s8!==peg$FAILED){s9=peg$parseHexDigit();if(s9!==peg$FAILED){s6=[s6,s7,s8,s9];s5=s6;}else {peg$currPos=s5;s5=peg$FAILED;}}else {peg$currPos=s5;s5=peg$FAILED;}}else {peg$currPos=s5;s5=peg$FAILED;}}else {peg$currPos=s5;s5=peg$FAILED;}if(s5!==peg$FAILED){s4=input.substring(s4,peg$currPos);}else {s4=s5;}if(s4!==peg$FAILED){peg$savedPos=s2;s3=peg$c268(s4);s2=s3;}else {peg$currPos=s2;s2=peg$FAILED;}}else {peg$currPos=s2;s2=peg$FAILED;}}}}}}}}}}if(s2!==peg$FAILED){peg$savedPos=s0;s1=peg$c269(s2);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}return s0}function peg$parseActionLabelQuoteMark(){var s0;if(input.charCodeAt(peg$currPos)===39){s0=peg$c272;peg$currPos++;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c273);}}return s0}function peg$parseActionLabelUnescaped(){var s0;if(peg$c274.test(input.charAt(peg$currPos))){s0=input.charAt(peg$currPos);peg$currPos++;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c275);}}return s0}function peg$parseActionLabel(){var s0,s1,s2,s3;peg$silentFails++;s0=peg$currPos;s1=peg$parseActionLabelQuoteMark();if(s1!==peg$FAILED){s2=[];s3=peg$parseActionLabelChar();while(s3!==peg$FAILED){s2.push(s3);s3=peg$parseActionLabelChar();}if(s2!==peg$FAILED){s3=peg$parseActionLabelQuoteMark();if(s3!==peg$FAILED){peg$savedPos=s0;s1=peg$c277(s2);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c276);}}return s0}function peg$parseLineTerminator(){var s0;if(peg$c278.test(input.charAt(peg$currPos))){s0=input.charAt(peg$currPos);peg$currPos++;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c279);}}return s0}function peg$parseBlockCommentTail(){var s0,s1,s2;if(input.substr(peg$currPos,2)===peg$c282){s0=peg$c282;peg$currPos+=2;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c283);}}if(s0===peg$FAILED){s0=peg$currPos;if(input.length>peg$currPos){s1=input.charAt(peg$currPos);peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c284);}}if(s1!==peg$FAILED){s2=peg$parseBlockCommentTail();if(s2!==peg$FAILED){s1=[s1,s2];s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}return s0}function peg$parseBlockComment(){var s0,s1,s2;peg$silentFails++;s0=peg$currPos;if(input.substr(peg$currPos,2)===peg$c286){s1=peg$c286;peg$currPos+=2;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c287);}}if(s1!==peg$FAILED){s2=peg$parseBlockCommentTail();if(s2!==peg$FAILED){s1=[s1,s2];s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c285);}}return s0}function peg$parseEOF(){var s0,s1;s0=peg$currPos;peg$silentFails++;if(input.length>peg$currPos){s1=input.charAt(peg$currPos);peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c284);}}peg$silentFails--;if(s1===peg$FAILED){s0=void 0;}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseLineCommentTail(){var s0,s1,s2;s0=peg$parseLineTerminator();if(s0===peg$FAILED){s0=peg$parseEOF();if(s0===peg$FAILED){s0=peg$currPos;if(input.length>peg$currPos){s1=input.charAt(peg$currPos);peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c284);}}if(s1!==peg$FAILED){s2=peg$parseLineCommentTail();if(s2!==peg$FAILED){s1=[s1,s2];s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}}return s0}function peg$parseLineComment(){var s0,s1,s2;peg$silentFails++;s0=peg$currPos;if(input.substr(peg$currPos,2)===peg$c289){s1=peg$c289;peg$currPos+=2;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c290);}}if(s1!==peg$FAILED){s2=peg$parseLineCommentTail();if(s2!==peg$FAILED){s1=[s1,s2];s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c288);}}return s0}function peg$parseWS(){var s0,s1,s2;peg$silentFails++;s0=peg$currPos;s1=peg$parseBlockComment();if(s1!==peg$FAILED){s2=peg$parseWS();if(s2===peg$FAILED){s2=null;}if(s2!==peg$FAILED){s1=[s1,s2];s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}if(s0===peg$FAILED){s0=peg$currPos;s1=peg$parseLineComment();if(s1!==peg$FAILED){s2=peg$parseWS();if(s2===peg$FAILED){s2=null;}if(s2!==peg$FAILED){s1=[s1,s2];s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}if(s0===peg$FAILED){s0=peg$currPos;s1=[];if(peg$c292.test(input.charAt(peg$currPos))){s2=input.charAt(peg$currPos);peg$currPos++;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c293);}}if(s2!==peg$FAILED){while(s2!==peg$FAILED){s1.push(s2);if(peg$c292.test(input.charAt(peg$currPos))){s2=input.charAt(peg$currPos);peg$currPos++;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c293);}}}}else {s1=peg$FAILED;}if(s1!==peg$FAILED){s2=peg$parseWS();if(s2===peg$FAILED){s2=null;}if(s2!==peg$FAILED){s1=[s1,s2];s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c291);}}return s0}function peg$parseString(){var s0,s1,s2,s3;peg$silentFails++;s0=peg$currPos;s1=peg$parseQuoteMark();if(s1!==peg$FAILED){s2=[];s3=peg$parseChar();while(s3!==peg$FAILED){s2.push(s3);s3=peg$parseChar();}if(s2!==peg$FAILED){s3=peg$parseQuoteMark();if(s3!==peg$FAILED){peg$savedPos=s0;s1=peg$c277(s2);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c294);}}return s0}function peg$parseAtomFirstLetter(){var s0;if(peg$c295.test(input.charAt(peg$currPos))){s0=input.charAt(peg$currPos);peg$currPos++;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c296);}}return s0}function peg$parseAtomLetter(){var s0;if(peg$c297.test(input.charAt(peg$currPos))){s0=input.charAt(peg$currPos);peg$currPos++;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c298);}}return s0}function peg$parseAtom(){var s0,s1,s2,s3;peg$silentFails++;s0=peg$currPos;s1=peg$parseAtomFirstLetter();if(s1!==peg$FAILED){s2=[];s3=peg$parseAtomLetter();while(s3!==peg$FAILED){s2.push(s3);s3=peg$parseAtomLetter();}if(s2!==peg$FAILED){peg$savedPos=s0;s1=peg$c300(s1,s2);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c299);}}return s0}function peg$parseLabel(){var s0;peg$silentFails++;s0=peg$parseAtom();if(s0===peg$FAILED){s0=peg$parseString();}peg$silentFails--;if(s0===peg$FAILED){if(peg$silentFails===0){peg$fail(peg$c301);}}return s0}function peg$parseIntegerLiteral(){var s0,s1,s2,s3;if(input.charCodeAt(peg$currPos)===48){s0=peg$c302;peg$currPos++;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c303);}}if(s0===peg$FAILED){s0=peg$currPos;s1=peg$parseNonZeroDigit();if(s1!==peg$FAILED){s2=[];s3=peg$parseDecimalDigit();while(s3!==peg$FAILED){s2.push(s3);s3=peg$parseDecimalDigit();}if(s2!==peg$FAILED){s1=[s1,s2];s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}return s0}function peg$parseDecimalDigit(){var s0;if(peg$c304.test(input.charAt(peg$currPos))){s0=input.charAt(peg$currPos);peg$currPos++;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c305);}}return s0}function peg$parseNonZeroDigit(){var s0;if(peg$c306.test(input.charAt(peg$currPos))){s0=input.charAt(peg$currPos);peg$currPos++;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c307);}}return s0}function peg$parseNonNegNumber(){var s0,s1,s2,s3,s4;peg$silentFails++;s0=peg$currPos;s1=peg$parseIntegerLiteral();if(s1!==peg$FAILED){if(input.charCodeAt(peg$currPos)===46){s2=peg$c309;peg$currPos++;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c310);}}if(s2!==peg$FAILED){s3=[];s4=peg$parseDecimalDigit();while(s4!==peg$FAILED){s3.push(s4);s4=peg$parseDecimalDigit();}if(s3!==peg$FAILED){s4=peg$parseWS();if(s4===peg$FAILED){s4=null;}if(s4!==peg$FAILED){peg$savedPos=s0;s1=peg$c311();s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}if(s0===peg$FAILED){s0=peg$currPos;s1=peg$parseIntegerLiteral();if(s1!==peg$FAILED){s2=peg$parseWS();if(s2===peg$FAILED){s2=null;}if(s2!==peg$FAILED){peg$savedPos=s0;s1=peg$c311();s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c308);}}return s0}function peg$parseSemVer(){var s0,s1,s2,s3,s4,s5;s0=peg$currPos;s1=peg$parseIntegerLiteral();if(s1!==peg$FAILED){if(input.charCodeAt(peg$currPos)===46){s2=peg$c309;peg$currPos++;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c310);}}if(s2!==peg$FAILED){s3=peg$parseIntegerLiteral();if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===46){s4=peg$c309;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c310);}}if(s4!==peg$FAILED){s5=peg$parseIntegerLiteral();if(s5!==peg$FAILED){peg$savedPos=s0;s1=peg$c312(s1,s3,s5);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseUrlProtocol(){var s0;if(input.substr(peg$currPos,7)===peg$c323){s0=peg$c323;peg$currPos+=7;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c324);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,8)===peg$c325){s0=peg$c325;peg$currPos+=8;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c326);}}}return s0}function peg$parseURL(){var s0,s1,s2,s3;s0=peg$currPos;s1=peg$parseUrlProtocol();if(s1!==peg$FAILED){s2=[];if(peg$c327.test(input.charAt(peg$currPos))){s3=input.charAt(peg$currPos);peg$currPos++;}else {s3=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c328);}}if(s3!==peg$FAILED){while(s3!==peg$FAILED){s2.push(s3);if(peg$c327.test(input.charAt(peg$currPos))){s3=input.charAt(peg$currPos);peg$currPos++;}else {s3=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c328);}}}}else {s2=peg$FAILED;}if(s2!==peg$FAILED){peg$savedPos=s0;s1=peg$c329();s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseSvgColorLabel(){var s0,s1;s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c330){s1=peg$c330;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c331);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c332();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c333){s1=peg$c333;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c334);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c332();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,12)===peg$c335){s1=peg$c335;peg$currPos+=12;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c336);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c337();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,12)===peg$c338){s1=peg$c338;peg$currPos+=12;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c339);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c337();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c340){s1=peg$c340;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c341);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c342();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c343){s1=peg$c343;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c344);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c342();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c345){s1=peg$c345;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c346);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c347();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c348){s1=peg$c348;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c349);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c347();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c350){s1=peg$c350;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c351);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c352();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c353){s1=peg$c353;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c354);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c352();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c355){s1=peg$c355;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c356);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c357();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c358){s1=peg$c358;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c359);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c357();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c360){s1=peg$c360;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c361);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c362();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c363){s1=peg$c363;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c364);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c362();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c365){s1=peg$c365;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c366);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c367();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c368){s1=peg$c368;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c369);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c367();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,14)===peg$c370){s1=peg$c370;peg$currPos+=14;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c371);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c372();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,14)===peg$c373){s1=peg$c373;peg$currPos+=14;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c374);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c372();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c375){s1=peg$c375;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c376);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c377();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c378){s1=peg$c378;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c379);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c377();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c380){s1=peg$c380;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c381);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c382();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c383){s1=peg$c383;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c384);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c382();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c385){s1=peg$c385;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c386);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c387();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c388){s1=peg$c388;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c389);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c387();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c390){s1=peg$c390;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c391);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c392();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c393){s1=peg$c393;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c394);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c392();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c395){s1=peg$c395;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c396);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c397();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c398){s1=peg$c398;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c399);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c397();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c400){s1=peg$c400;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c401);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c402();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c403){s1=peg$c403;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c404);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c402();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c405){s1=peg$c405;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c406);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c407();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c408){s1=peg$c408;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c409);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c407();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c410){s1=peg$c410;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c411);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c412();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c413){s1=peg$c413;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c414);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c412();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,14)===peg$c415){s1=peg$c415;peg$currPos+=14;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c416);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c417();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,14)===peg$c418){s1=peg$c418;peg$currPos+=14;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c419);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c417();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c420){s1=peg$c420;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c421);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c422();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c423){s1=peg$c423;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c424);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c422();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c425){s1=peg$c425;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c426);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c427();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c428){s1=peg$c428;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c429);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c427();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c430){s1=peg$c430;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c431);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c347();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c432){s1=peg$c432;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c433);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c347();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c434){s1=peg$c434;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c435);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c436();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c437){s1=peg$c437;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c438);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c436();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c439){s1=peg$c439;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c440);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c441();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c442){s1=peg$c442;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c443);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c441();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c444){s1=peg$c444;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c445);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c446();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c447){s1=peg$c447;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c448);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c446();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c449){s1=peg$c449;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c450);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c451();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c452){s1=peg$c452;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c453);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c451();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c454){s1=peg$c454;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c455);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c451();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c456){s1=peg$c456;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c457);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c451();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c458){s1=peg$c458;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c459);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c460();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c461){s1=peg$c461;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c462);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c460();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c463){s1=peg$c463;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c464);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c465();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c466){s1=peg$c466;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c467);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c465();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c468){s1=peg$c468;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c469);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c470();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c471){s1=peg$c471;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c472);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c470();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,14)===peg$c473){s1=peg$c473;peg$currPos+=14;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c474);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c475();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,14)===peg$c476){s1=peg$c476;peg$currPos+=14;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c477);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c475();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c478){s1=peg$c478;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c479);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c480();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c481){s1=peg$c481;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c482);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c480();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c483){s1=peg$c483;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c484);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c485();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c486){s1=peg$c486;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c487);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c485();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c488){s1=peg$c488;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c489);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c490();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c491){s1=peg$c491;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c492);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c490();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c493){s1=peg$c493;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c494);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c495();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c496){s1=peg$c496;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c497);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c495();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,12)===peg$c498){s1=peg$c498;peg$currPos+=12;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c499);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c500();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,12)===peg$c501){s1=peg$c501;peg$currPos+=12;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c502);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c500();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c503){s1=peg$c503;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c504);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c505();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c506){s1=peg$c506;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c507);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c505();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c508){s1=peg$c508;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c509);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c510();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c511){s1=peg$c511;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c512);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c510();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c513){s1=peg$c513;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c514);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c510();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c515){s1=peg$c515;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c516);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c510();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c517){s1=peg$c517;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c518);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c519();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c520){s1=peg$c520;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c521);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c519();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c522){s1=peg$c522;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c523);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c524();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c525){s1=peg$c525;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c526);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c524();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c527){s1=peg$c527;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c528);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c529();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c530){s1=peg$c530;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c531);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c529();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c532){s1=peg$c532;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c533);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c534();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c535){s1=peg$c535;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c536);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c534();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c537){s1=peg$c537;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c538);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c539();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c540){s1=peg$c540;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c541);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c539();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c542){s1=peg$c542;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c543);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c539();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c544){s1=peg$c544;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c545);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c539();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c546){s1=peg$c546;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c547);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c548();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c549){s1=peg$c549;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c550);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c548();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c551){s1=peg$c551;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c552);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c553();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c554){s1=peg$c554;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c555);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c553();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c556){s1=peg$c556;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c557);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c558();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c559){s1=peg$c559;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c560);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c558();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c561){s1=peg$c561;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c562);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c563();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c564){s1=peg$c564;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c565);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c563();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c566){s1=peg$c566;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c567);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c568();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c569){s1=peg$c569;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c570);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c568();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c571){s1=peg$c571;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c572);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c573();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c574){s1=peg$c574;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c575);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c573();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c576){s1=peg$c576;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c577);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c578();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c579){s1=peg$c579;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c580);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c578();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c581){s1=peg$c581;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c582);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c583();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c584){s1=peg$c584;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c585);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c583();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c586){s1=peg$c586;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c587);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c588();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c589){s1=peg$c589;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c590);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c588();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c591){s1=peg$c591;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c592);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c593();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c594){s1=peg$c594;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c595);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c593();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c596){s1=peg$c596;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c597);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c593();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c598){s1=peg$c598;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c599);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c593();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c600){s1=peg$c600;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c601);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c602();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c603){s1=peg$c603;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c604);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c602();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c605){s1=peg$c605;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c606);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c607();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c608){s1=peg$c608;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c609);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c607();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c610){s1=peg$c610;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c611);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c612();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c613){s1=peg$c613;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c614);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c612();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c615){s1=peg$c615;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c616);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c617();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c618){s1=peg$c618;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c619);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c617();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c620){s1=peg$c620;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c621);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c622();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c623){s1=peg$c623;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c624);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c622();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c625){s1=peg$c625;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c626);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c627();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c628){s1=peg$c628;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c629);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c627();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c630){s1=peg$c630;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c631);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c632();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c633){s1=peg$c633;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c634);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c632();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c635){s1=peg$c635;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c636);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c637();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c638){s1=peg$c638;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c639);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c637();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c640){s1=peg$c640;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c641);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c642();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c643){s1=peg$c643;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c644);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c642();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c645){s1=peg$c645;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c646);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c647();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c648){s1=peg$c648;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c649);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c647();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c650){s1=peg$c650;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c651);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c652();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c653){s1=peg$c653;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c654);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c652();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,12)===peg$c655){s1=peg$c655;peg$currPos+=12;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c656);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c657();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,12)===peg$c658){s1=peg$c658;peg$currPos+=12;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c659);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c657();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c660){s1=peg$c660;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c661);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c662();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c663){s1=peg$c663;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c664);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c662();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c665){s1=peg$c665;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c666);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c667();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c668){s1=peg$c668;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c669);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c667();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c670){s1=peg$c670;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c671);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c672();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c673){s1=peg$c673;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c674);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c672();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,20)===peg$c675){s1=peg$c675;peg$currPos+=20;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c676);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c677();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,20)===peg$c678){s1=peg$c678;peg$currPos+=20;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c679);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c677();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c680){s1=peg$c680;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c681);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c682();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c683){s1=peg$c683;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c684);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c682();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c685){s1=peg$c685;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c686);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c682();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c687){s1=peg$c687;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c688);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c682();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c689){s1=peg$c689;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c690);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c691();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c692){s1=peg$c692;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c693);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c691();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c694){s1=peg$c694;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c695);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c696();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c697){s1=peg$c697;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c698);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c696();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c699){s1=peg$c699;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c700);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c701();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c702){s1=peg$c702;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c703);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c701();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c704){s1=peg$c704;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c705);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c706();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c707){s1=peg$c707;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c708);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c706();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,12)===peg$c709){s1=peg$c709;peg$currPos+=12;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c710);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c711();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,12)===peg$c712){s1=peg$c712;peg$currPos+=12;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c713);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c711();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,14)===peg$c714){s1=peg$c714;peg$currPos+=14;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c715);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c716();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,14)===peg$c717){s1=peg$c717;peg$currPos+=14;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c718);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c716();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,14)===peg$c719){s1=peg$c719;peg$currPos+=14;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c720);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c716();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,14)===peg$c721){s1=peg$c721;peg$currPos+=14;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c722);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c716();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,14)===peg$c723){s1=peg$c723;peg$currPos+=14;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c724);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c725();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,14)===peg$c726){s1=peg$c726;peg$currPos+=14;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c727);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c725();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c728){s1=peg$c728;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c729);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c730();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c731){s1=peg$c731;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c732);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c730();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c733){s1=peg$c733;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c734);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c735();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c736){s1=peg$c736;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c737);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c735();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c738){s1=peg$c738;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c739);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c740();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c741){s1=peg$c741;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c742);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c740();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c743){s1=peg$c743;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c744);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c745();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c746){s1=peg$c746;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c747);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c745();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c748){s1=peg$c748;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c749);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c568();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c750){s1=peg$c750;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c751);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c568();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c752){s1=peg$c752;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c753);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c754();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c755){s1=peg$c755;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c756);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c754();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,16)===peg$c757){s1=peg$c757;peg$currPos+=16;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c758);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c759();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,16)===peg$c760){s1=peg$c760;peg$currPos+=16;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c761);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c759();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c762){s1=peg$c762;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c763);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c764();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c765){s1=peg$c765;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c766);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c764();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,12)===peg$c767){s1=peg$c767;peg$currPos+=12;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c768);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c769();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,12)===peg$c770){s1=peg$c770;peg$currPos+=12;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c771);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c769();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,12)===peg$c772){s1=peg$c772;peg$currPos+=12;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c773);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c774();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,12)===peg$c775){s1=peg$c775;peg$currPos+=12;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c776);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c774();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,14)===peg$c777){s1=peg$c777;peg$currPos+=14;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c778);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c779();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,14)===peg$c780){s1=peg$c780;peg$currPos+=14;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c781);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c779();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,15)===peg$c782){s1=peg$c782;peg$currPos+=15;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c783);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c784();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,15)===peg$c785){s1=peg$c785;peg$currPos+=15;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c786);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c784();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,17)===peg$c787){s1=peg$c787;peg$currPos+=17;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c788);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c789();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,17)===peg$c790){s1=peg$c790;peg$currPos+=17;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c791);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c789();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,15)===peg$c792){s1=peg$c792;peg$currPos+=15;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c793);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c794();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,15)===peg$c795){s1=peg$c795;peg$currPos+=15;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c796);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c794();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,15)===peg$c797){s1=peg$c797;peg$currPos+=15;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c798);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c799();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,15)===peg$c800){s1=peg$c800;peg$currPos+=15;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c801);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c799();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,12)===peg$c802){s1=peg$c802;peg$currPos+=12;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c803);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c804();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,12)===peg$c805){s1=peg$c805;peg$currPos+=12;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c806);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c804();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c807){s1=peg$c807;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c808);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c809();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c810){s1=peg$c810;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c811);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c809();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c812){s1=peg$c812;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c813);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c814();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c815){s1=peg$c815;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c816);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c814();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c817){s1=peg$c817;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c818);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c819();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c820){s1=peg$c820;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c821);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c819();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c822){s1=peg$c822;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c823);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c824();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c825){s1=peg$c825;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c826);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c824();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c827){s1=peg$c827;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c828);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c829();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c830){s1=peg$c830;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c831);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c829();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c832){s1=peg$c832;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c833);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c834();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c835){s1=peg$c835;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c836);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c834();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c837){s1=peg$c837;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c838);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c839();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c840){s1=peg$c840;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c841);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c839();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c842){s1=peg$c842;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c843);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c844();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c845){s1=peg$c845;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c846);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c844();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c847){s1=peg$c847;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c848);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c849();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c850){s1=peg$c850;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c851);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c849();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c852){s1=peg$c852;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c853);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c854();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c855){s1=peg$c855;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c856);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c854();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c857){s1=peg$c857;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c858);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c859();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c860){s1=peg$c860;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c861);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c859();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c862){s1=peg$c862;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c863);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c864();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c865){s1=peg$c865;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c866);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c864();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c867){s1=peg$c867;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c868);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c869();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c870){s1=peg$c870;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c871);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c869();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c872){s1=peg$c872;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c873);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c874();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c875){s1=peg$c875;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c876);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c874();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c877){s1=peg$c877;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c878);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c879();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c880){s1=peg$c880;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c881);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c879();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c882){s1=peg$c882;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c883);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c884();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c885){s1=peg$c885;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c886);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c884();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c887){s1=peg$c887;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c888);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c889();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c890){s1=peg$c890;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c891);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c889();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c892){s1=peg$c892;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c893);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c894();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c895){s1=peg$c895;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c896);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c894();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c897){s1=peg$c897;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c898);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c899();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c900){s1=peg$c900;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c901);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c899();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c902){s1=peg$c902;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c903);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c904();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c905){s1=peg$c905;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c906);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c904();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c907){s1=peg$c907;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c908);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c909();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c910){s1=peg$c910;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c911);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c909();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c912){s1=peg$c912;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c913);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c914();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c915){s1=peg$c915;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c916);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c914();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,3)===peg$c917){s1=peg$c917;peg$currPos+=3;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c918);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c919();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,3)===peg$c920){s1=peg$c920;peg$currPos+=3;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c921);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c919();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c922){s1=peg$c922;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c923);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c924();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c925){s1=peg$c925;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c926);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c924();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c927){s1=peg$c927;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c928);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c929();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c930){s1=peg$c930;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c931);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c929();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c932){s1=peg$c932;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c933);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c934();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c935){s1=peg$c935;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c936);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c934();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c937){s1=peg$c937;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c938);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c939();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c940){s1=peg$c940;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c941);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c939();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c942){s1=peg$c942;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c943);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c944();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c945){s1=peg$c945;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c946);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c944();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c947){s1=peg$c947;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c948);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c949();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c950){s1=peg$c950;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c951);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c949();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c952){s1=peg$c952;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c953);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c954();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,8)===peg$c955){s1=peg$c955;peg$currPos+=8;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c956);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c954();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c957){s1=peg$c957;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c958);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c959();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c960){s1=peg$c960;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c961);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c959();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c962){s1=peg$c962;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c963);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c964();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c965){s1=peg$c965;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c966);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c964();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c967){s1=peg$c967;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c968);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c969();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c970){s1=peg$c970;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c971);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c969();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c972){s1=peg$c972;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c973);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c974();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c975){s1=peg$c975;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c976);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c974();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c977){s1=peg$c977;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c978);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c979();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c980){s1=peg$c980;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c981);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c979();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c982){s1=peg$c982;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c983);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c979();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c984){s1=peg$c984;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c985);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c979();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c986){s1=peg$c986;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c987);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c988();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c989){s1=peg$c989;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c990);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c988();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c991){s1=peg$c991;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c992);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c993();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c994){s1=peg$c994;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c995);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c993();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c996){s1=peg$c996;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c997);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c998();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c999){s1=peg$c999;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1000);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c998();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,3)===peg$c1001){s1=peg$c1001;peg$currPos+=3;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1002);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1003();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,3)===peg$c1004){s1=peg$c1004;peg$currPos+=3;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1005);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1003();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c1006){s1=peg$c1006;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1007);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1008();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,4)===peg$c1009){s1=peg$c1009;peg$currPos+=4;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1010);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1008();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c1011){s1=peg$c1011;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1012);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1013();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c1014){s1=peg$c1014;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1015);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1013();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c1016){s1=peg$c1016;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1017);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1018();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c1019){s1=peg$c1019;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1020);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1018();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c1021){s1=peg$c1021;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1022);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1023();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,9)===peg$c1024){s1=peg$c1024;peg$currPos+=9;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1025);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1023();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c1026){s1=peg$c1026;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1027);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1028();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c1029){s1=peg$c1029;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1030);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1028();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c1031){s1=peg$c1031;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1032);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1033();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c1034){s1=peg$c1034;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1035);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1033();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c1036){s1=peg$c1036;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1037);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1038();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,10)===peg$c1039){s1=peg$c1039;peg$currPos+=10;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1040);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1038();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c1041){s1=peg$c1041;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1042);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1043();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,5)===peg$c1044){s1=peg$c1044;peg$currPos+=5;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1045);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1043();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c1046){s1=peg$c1046;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1047);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1048();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c1049){s1=peg$c1049;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1050);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1048();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c1051){s1=peg$c1051;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1052);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1053();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,6)===peg$c1054){s1=peg$c1054;peg$currPos+=6;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1055);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1053();}s0=s1;}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}return s0}function peg$parseSvgColor(){var s0,s1,s2;s0=peg$currPos;s1=peg$parseSvgColorLabel();if(s1!==peg$FAILED){s2=peg$parseWS();if(s2===peg$FAILED){s2=null;}if(s2!==peg$FAILED){peg$savedPos=s0;s1=peg$c1056(s1);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseRgb3(){var s0,s1,s2,s3,s4,s5;s0=peg$currPos;if(input.charCodeAt(peg$currPos)===35){s1=peg$c1057;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1058);}}if(s1!==peg$FAILED){s2=peg$parseHexDigit();if(s2!==peg$FAILED){s3=peg$parseHexDigit();if(s3!==peg$FAILED){s4=peg$parseHexDigit();if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){peg$savedPos=s0;s1=peg$c1059(s2,s3,s4);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseRgb6(){var s0,s1,s2,s3,s4,s5,s6,s7,s8;s0=peg$currPos;if(input.charCodeAt(peg$currPos)===35){s1=peg$c1057;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1058);}}if(s1!==peg$FAILED){s2=peg$parseHexDigit();if(s2!==peg$FAILED){s3=peg$parseHexDigit();if(s3!==peg$FAILED){s4=peg$parseHexDigit();if(s4!==peg$FAILED){s5=peg$parseHexDigit();if(s5!==peg$FAILED){s6=peg$parseHexDigit();if(s6!==peg$FAILED){s7=peg$parseHexDigit();if(s7!==peg$FAILED){s8=peg$parseWS();if(s8===peg$FAILED){s8=null;}if(s8!==peg$FAILED){peg$savedPos=s0;s1=peg$c1060(s2,s3,s4,s5,s6,s7);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseRgba4(){var s0,s1,s2,s3,s4,s5,s6;s0=peg$currPos;if(input.charCodeAt(peg$currPos)===35){s1=peg$c1057;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1058);}}if(s1!==peg$FAILED){s2=peg$parseHexDigit();if(s2!==peg$FAILED){s3=peg$parseHexDigit();if(s3!==peg$FAILED){s4=peg$parseHexDigit();if(s4!==peg$FAILED){s5=peg$parseHexDigit();if(s5!==peg$FAILED){s6=peg$parseWS();if(s6===peg$FAILED){s6=null;}if(s6!==peg$FAILED){peg$savedPos=s0;s1=peg$c1061(s2,s3,s4,s5);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseRgba8(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10;s0=peg$currPos;if(input.charCodeAt(peg$currPos)===35){s1=peg$c1057;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1058);}}if(s1!==peg$FAILED){s2=peg$parseHexDigit();if(s2!==peg$FAILED){s3=peg$parseHexDigit();if(s3!==peg$FAILED){s4=peg$parseHexDigit();if(s4!==peg$FAILED){s5=peg$parseHexDigit();if(s5!==peg$FAILED){s6=peg$parseHexDigit();if(s6!==peg$FAILED){s7=peg$parseHexDigit();if(s7!==peg$FAILED){s8=peg$parseHexDigit();if(s8!==peg$FAILED){s9=peg$parseHexDigit();if(s9!==peg$FAILED){s10=peg$parseWS();if(s10===peg$FAILED){s10=null;}if(s10!==peg$FAILED){peg$savedPos=s0;s1=peg$c1062(s2,s3,s4,s5,s6,s7,s8,s9);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseColor(){var s0;peg$silentFails++;s0=peg$parseSvgColor();if(s0===peg$FAILED){s0=peg$parseRgba8();if(s0===peg$FAILED){s0=peg$parseRgb6();if(s0===peg$FAILED){s0=peg$parseRgba4();if(s0===peg$FAILED){s0=peg$parseRgb3();}}}}peg$silentFails--;if(s0===peg$FAILED){if(peg$silentFails===0){peg$fail(peg$c1063);}}return s0}function peg$parseArrowItemKey(){var s0;if(input.substr(peg$currPos,9)===peg$c1064){s0=peg$c1064;peg$currPos+=9;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1065);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,10)===peg$c1066){s0=peg$c1066;peg$currPos+=10;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1067);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,10)===peg$c1068){s0=peg$c1068;peg$currPos+=10;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1069);}}}}return s0}function peg$parseArrowItem(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){s2=peg$parseArrowItemKey();if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseLabel();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1074(s2,s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseSingleEdgeColor(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;peg$silentFails++;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,10)===peg$c1076){s2=peg$c1076;peg$currPos+=10;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1077);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseColor();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1078(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1075);}}return s0}function peg$parseTransitionLineStyle(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;peg$silentFails++;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,9)===peg$c1080){s2=peg$c1080;peg$currPos+=9;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1081);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseLineStyle();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1082(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1079);}}return s0}function peg$parseArrowItems(){var s0,s1;s0=peg$parseSingleEdgeColor();if(s0===peg$FAILED){s0=peg$parseTransitionLineStyle();if(s0===peg$FAILED){s0=[];s1=peg$parseArrowItem();if(s1!==peg$FAILED){while(s1!==peg$FAILED){s0.push(s1);s1=peg$parseArrowItem();}}else {s0=peg$FAILED;}}}return s0}function peg$parseArrowDesc(){var s0,s1,s2,s3,s4,s5;s0=peg$currPos;if(input.charCodeAt(peg$currPos)===123){s1=peg$c1083;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1084);}}if(s1!==peg$FAILED){s2=peg$parseWS();if(s2===peg$FAILED){s2=null;}if(s2!==peg$FAILED){s3=peg$parseArrowItems();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){s4=peg$parseWS();if(s4===peg$FAILED){s4=null;}if(s4!==peg$FAILED){if(input.charCodeAt(peg$currPos)===125){s5=peg$c1085;peg$currPos++;}else {s5=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1086);}}if(s5!==peg$FAILED){peg$savedPos=s0;s1=peg$c1087(s3);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseArrowProbability(){var s0,s1,s2;s0=peg$currPos;s1=peg$parseNonNegNumber();if(s1!==peg$FAILED){if(input.charCodeAt(peg$currPos)===37){s2=peg$c1088;peg$currPos++;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1089);}}if(s2!==peg$FAILED){peg$savedPos=s0;s1=peg$c1090(s1);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseLabelList(){var s0,s1,s2,s3,s4,s5,s6;s0=peg$currPos;if(input.charCodeAt(peg$currPos)===91){s1=peg$c1091;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1092);}}if(s1!==peg$FAILED){s2=peg$parseWS();if(s2===peg$FAILED){s2=null;}if(s2!==peg$FAILED){s3=[];s4=peg$currPos;s5=peg$parseLabel();if(s5!==peg$FAILED){s6=peg$parseWS();if(s6===peg$FAILED){s6=null;}if(s6!==peg$FAILED){s5=[s5,s6];s4=s5;}else {peg$currPos=s4;s4=peg$FAILED;}}else {peg$currPos=s4;s4=peg$FAILED;}while(s4!==peg$FAILED){s3.push(s4);s4=peg$currPos;s5=peg$parseLabel();if(s5!==peg$FAILED){s6=peg$parseWS();if(s6===peg$FAILED){s6=null;}if(s6!==peg$FAILED){s5=[s5,s6];s4=s5;}else {peg$currPos=s4;s4=peg$FAILED;}}else {peg$currPos=s4;s4=peg$FAILED;}}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===93){s4=peg$c1093;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1094);}}if(s4!==peg$FAILED){peg$savedPos=s0;s1=peg$c1095(s3);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseLabelOrLabelList(){var s0;s0=peg$parseLabelList();if(s0===peg$FAILED){s0=peg$parseLabel();}return s0}function peg$parseStripe(){var s0,s1,s2,s3,s4;s0=peg$currPos;if(input.substr(peg$currPos,2)===peg$c1096){s1=peg$c1096;peg$currPos+=2;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1097);}}if(s1!==peg$FAILED){s2=peg$parseNonZeroDigit();if(s2!==peg$FAILED){s3=[];s4=peg$parseDecimalDigit();while(s4!==peg$FAILED){s3.push(s4);s4=peg$parseDecimalDigit();}if(s3!==peg$FAILED){peg$savedPos=s0;s1=peg$c1098(s2,s3);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,2)===peg$c1099){s1=peg$c1099;peg$currPos+=2;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1100);}}if(s1!==peg$FAILED){s2=peg$parseNonZeroDigit();if(s2!==peg$FAILED){s3=[];s4=peg$parseDecimalDigit();while(s4!==peg$FAILED){s3.push(s4);s4=peg$parseDecimalDigit();}if(s3!==peg$FAILED){peg$savedPos=s0;s1=peg$c1101(s2,s3);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}return s0}function peg$parseCycle(){var s0,s1,s2,s3,s4;s0=peg$currPos;if(input.charCodeAt(peg$currPos)===43){s1=peg$c1102;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1103);}}if(s1!==peg$FAILED){s2=peg$parseNonZeroDigit();if(s2!==peg$FAILED){s3=[];s4=peg$parseDecimalDigit();while(s4!==peg$FAILED){s3.push(s4);s4=peg$parseDecimalDigit();}if(s3!==peg$FAILED){peg$savedPos=s0;s1=peg$c1104(s2,s3);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}if(s0===peg$FAILED){s0=peg$currPos;if(input.charCodeAt(peg$currPos)===45){s1=peg$c1105;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1106);}}if(s1!==peg$FAILED){s2=peg$parseNonZeroDigit();if(s2!==peg$FAILED){s3=[];s4=peg$parseDecimalDigit();while(s4!==peg$FAILED){s3.push(s4);s4=peg$parseDecimalDigit();}if(s3!==peg$FAILED){peg$savedPos=s0;s1=peg$c1107(s2,s3);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}if(s0===peg$FAILED){s0=peg$currPos;if(input.substr(peg$currPos,2)===peg$c1108){s1=peg$c1108;peg$currPos+=2;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1109);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1110();}s0=s1;}}return s0}function peg$parseArrowTarget(){var s0;s0=peg$parseStripe();if(s0===peg$FAILED){s0=peg$parseCycle();if(s0===peg$FAILED){s0=peg$parseLabelList();if(s0===peg$FAILED){s0=peg$parseLabel();}}}return s0}function peg$parseSubexp(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){s2=peg$parseActionLabel();if(s2===peg$FAILED){s2=null;}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){s4=peg$parseArrowProbability();if(s4===peg$FAILED){s4=null;}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseArrowDesc();if(s6===peg$FAILED){s6=null;}if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){s8=peg$parseArrow();if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){s10=peg$parseArrowDesc();if(s10===peg$FAILED){s10=null;}if(s10!==peg$FAILED){s11=peg$parseWS();if(s11===peg$FAILED){s11=null;}if(s11!==peg$FAILED){s12=peg$parseArrowProbability();if(s12===peg$FAILED){s12=null;}if(s12!==peg$FAILED){s13=peg$parseWS();if(s13===peg$FAILED){s13=null;}if(s13!==peg$FAILED){s14=peg$parseActionLabel();if(s14===peg$FAILED){s14=null;}if(s14!==peg$FAILED){s15=peg$parseWS();if(s15===peg$FAILED){s15=null;}if(s15!==peg$FAILED){s16=peg$parseArrowTarget();if(s16!==peg$FAILED){s17=peg$parseWS();if(s17===peg$FAILED){s17=null;}if(s17!==peg$FAILED){s18=peg$parseSubexp();if(s18===peg$FAILED){s18=null;}if(s18!==peg$FAILED){peg$savedPos=s0;s1=peg$c1111(s2,s4,s6,s8,s10,s12,s14,s16,s18);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseExp(){var s0,s1,s2,s3,s4,s5;s0=peg$currPos;s1=peg$parseArrowTarget();if(s1!==peg$FAILED){s2=peg$parseSubexp();if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s4=peg$c1072;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){peg$savedPos=s0;s1=peg$c1112(s1,s2);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseValidationKey(){var s0;if(input.substr(peg$currPos,9)===peg$c1113){s0=peg$c1113;peg$currPos+=9;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1114);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,4)===peg$c1115){s0=peg$c1115;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1116);}}}return s0}function peg$parseValidationItem(){var s0,s1,s2,s3,s4;s0=peg$currPos;s1=peg$parseValidationKey();if(s1!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s2=peg$c1070;peg$currPos++;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s2!==peg$FAILED){s3=peg$parseLabel();if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s4=peg$c1072;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s4!==peg$FAILED){peg$savedPos=s0;s1=peg$c1117(s1,s3);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseValidationItems(){var s0,s1;s0=[];s1=peg$parseValidationItem();if(s1!==peg$FAILED){while(s1!==peg$FAILED){s0.push(s1);s1=peg$parseValidationItem();}}else {s0=peg$FAILED;}return s0}function peg$parseConfigValidation(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,10)===peg$c1118){s2=peg$c1118;peg$currPos+=10;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1119);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){if(input.charCodeAt(peg$currPos)===123){s6=peg$c1083;peg$currPos++;}else {s6=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1084);}}if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){s8=peg$parseValidationItems();if(s8===peg$FAILED){s8=null;}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){if(input.substr(peg$currPos,2)===peg$c1120){s10=peg$c1120;peg$currPos+=2;}else {s10=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1121);}}if(s10!==peg$FAILED){s11=peg$parseWS();if(s11===peg$FAILED){s11=null;}if(s11!==peg$FAILED){peg$savedPos=s0;s1=peg$c1122(s8);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseGvizLayout(){var s0;if(input.substr(peg$currPos,3)===peg$c1123){s0=peg$c1123;peg$currPos+=3;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1124);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,5)===peg$c1125){s0=peg$c1125;peg$currPos+=5;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1126);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,3)===peg$c1127){s0=peg$c1127;peg$currPos+=3;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1128);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,5)===peg$c1129){s0=peg$c1129;peg$currPos+=5;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1130);}}}}}return s0}function peg$parseStateItemShape(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,5)===peg$c1131){s2=peg$c1131;peg$currPos+=5;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1132);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseGvizShape();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1133(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseStateItems(){var s0,s1;s0=[];s1=peg$parseStateItemShape();if(s1!==peg$FAILED){while(s1!==peg$FAILED){s0.push(s1);s1=peg$parseStateItemShape();}}else {s0=peg$FAILED;}return s0}function peg$parseConfigState(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,5)===peg$c1134){s2=peg$c1134;peg$currPos+=5;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1135);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){if(input.charCodeAt(peg$currPos)===123){s6=peg$c1083;peg$currPos++;}else {s6=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1084);}}if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){s8=peg$parseStateItems();if(s8===peg$FAILED){s8=null;}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){if(input.substr(peg$currPos,2)===peg$c1120){s10=peg$c1120;peg$currPos+=2;}else {s10=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1121);}}if(s10!==peg$FAILED){s11=peg$parseWS();if(s11===peg$FAILED){s11=null;}if(s11!==peg$FAILED){peg$savedPos=s0;s1=peg$c1136(s8);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseConfigStartState(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,11)===peg$c1137){s2=peg$c1137;peg$currPos+=11;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1138);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){if(input.charCodeAt(peg$currPos)===123){s6=peg$c1083;peg$currPos++;}else {s6=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1084);}}if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){s8=peg$parseStateItems();if(s8===peg$FAILED){s8=null;}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){if(input.substr(peg$currPos,2)===peg$c1120){s10=peg$c1120;peg$currPos+=2;}else {s10=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1121);}}if(s10!==peg$FAILED){s11=peg$parseWS();if(s11===peg$FAILED){s11=null;}if(s11!==peg$FAILED){peg$savedPos=s0;s1=peg$c1139(s8);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseConfigEndState(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,9)===peg$c1140){s2=peg$c1140;peg$currPos+=9;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1141);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){if(input.charCodeAt(peg$currPos)===123){s6=peg$c1083;peg$currPos++;}else {s6=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1084);}}if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){s8=peg$parseStateItems();if(s8===peg$FAILED){s8=null;}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){if(input.substr(peg$currPos,2)===peg$c1120){s10=peg$c1120;peg$currPos+=2;}else {s10=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1121);}}if(s10!==peg$FAILED){s11=peg$parseWS();if(s11===peg$FAILED){s11=null;}if(s11!==peg$FAILED){peg$savedPos=s0;s1=peg$c1142(s8);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseConfigAnyState(){var s0;s0=peg$parseConfigState();if(s0===peg$FAILED){s0=peg$parseConfigStartState();if(s0===peg$FAILED){s0=peg$parseConfigEndState();}}return s0}function peg$parseActionKey(){var s0;if(input.substr(peg$currPos,9)===peg$c1113){s0=peg$c1113;peg$currPos+=9;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1114);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,4)===peg$c1115){s0=peg$c1115;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1116);}}}return s0}function peg$parseActionItem(){var s0,s1,s2,s3,s4;s0=peg$currPos;s1=peg$parseActionKey();if(s1!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s2=peg$c1070;peg$currPos++;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s2!==peg$FAILED){s3=peg$parseLabel();if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s4=peg$c1072;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s4!==peg$FAILED){peg$savedPos=s0;s1=peg$c1143(s1,s3);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseActionItems(){var s0,s1;s0=[];s1=peg$parseActionItem();if(s1!==peg$FAILED){while(s1!==peg$FAILED){s0.push(s1);s1=peg$parseActionItem();}}else {s0=peg$FAILED;}return s0}function peg$parseConfigAction(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,6)===peg$c1144){s2=peg$c1144;peg$currPos+=6;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1145);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){if(input.charCodeAt(peg$currPos)===123){s6=peg$c1083;peg$currPos++;}else {s6=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1084);}}if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){s8=peg$parseActionItems();if(s8===peg$FAILED){s8=null;}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){if(input.substr(peg$currPos,2)===peg$c1120){s10=peg$c1120;peg$currPos+=2;}else {s10=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1121);}}if(s10!==peg$FAILED){s11=peg$parseWS();if(s11===peg$FAILED){s11=null;}if(s11!==peg$FAILED){peg$savedPos=s0;s1=peg$c1146(s8);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseTransitionKey(){var s0;if(input.substr(peg$currPos,9)===peg$c1113){s0=peg$c1113;peg$currPos+=9;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1114);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,4)===peg$c1115){s0=peg$c1115;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1116);}}}return s0}function peg$parseTransitionItem(){var s0,s1,s2,s3,s4;s0=peg$currPos;s1=peg$parseTransitionKey();if(s1!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s2=peg$c1070;peg$currPos++;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s2!==peg$FAILED){s3=peg$parseLabel();if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s4=peg$c1072;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s4!==peg$FAILED){peg$savedPos=s0;s1=peg$c1147(s1,s3);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseTransitionItems(){var s0,s1;s0=peg$parseGraphDefaultEdgeColor();if(s0===peg$FAILED){s0=[];s1=peg$parseTransitionItem();if(s1!==peg$FAILED){while(s1!==peg$FAILED){s0.push(s1);s1=peg$parseTransitionItem();}}else {s0=peg$FAILED;}}return s0}function peg$parseGraphDefaultEdgeColor(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;peg$silentFails++;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,10)===peg$c1076){s2=peg$c1076;peg$currPos+=10;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1077);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseColor();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1149(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1148);}}return s0}function peg$parseConfigTransition(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,10)===peg$c1150){s2=peg$c1150;peg$currPos+=10;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1151);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){if(input.charCodeAt(peg$currPos)===123){s6=peg$c1083;peg$currPos++;}else {s6=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1084);}}if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){s8=peg$parseTransitionItems();if(s8===peg$FAILED){s8=null;}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){if(input.substr(peg$currPos,2)===peg$c1120){s10=peg$c1120;peg$currPos+=2;}else {s10=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1121);}}if(s10!==peg$FAILED){s11=peg$parseWS();if(s11===peg$FAILED){s11=null;}if(s11!==peg$FAILED){peg$savedPos=s0;s1=peg$c1152(s8);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseConfigGraphLayout(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,12)===peg$c1153){s2=peg$c1153;peg$currPos+=12;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1154);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseGvizLayout();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1155(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseConfigStartNodes(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,12)===peg$c1156){s2=peg$c1156;peg$currPos+=12;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1157);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseLabelList();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1158(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseConfigEndNodes(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,10)===peg$c1159){s2=peg$c1159;peg$currPos+=10;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1160);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseLabelList();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1161(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseConfigGraphBgColor(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,14)===peg$c1162){s2=peg$c1162;peg$currPos+=14;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1163);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseColor();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1164(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseConfig(){var s0;peg$silentFails++;s0=peg$parseConfigGraphLayout();if(s0===peg$FAILED){s0=peg$parseConfigStartNodes();if(s0===peg$FAILED){s0=peg$parseConfigEndNodes();if(s0===peg$FAILED){s0=peg$parseConfigTransition();if(s0===peg$FAILED){s0=peg$parseConfigAction();if(s0===peg$FAILED){s0=peg$parseConfigAnyState();if(s0===peg$FAILED){s0=peg$parseConfigValidation();if(s0===peg$FAILED){s0=peg$parseConfigGraphBgColor();}}}}}}}peg$silentFails--;if(s0===peg$FAILED){if(peg$silentFails===0){peg$fail(peg$c1165);}}return s0}function peg$parseLicenseOrLabelOrList(){var s0;if(input.substr(peg$currPos,3)===peg$c1166){s0=peg$c1166;peg$currPos+=3;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1167);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,12)===peg$c1168){s0=peg$c1168;peg$currPos+=12;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1169);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,12)===peg$c1170){s0=peg$c1170;peg$currPos+=12;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1171);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,10)===peg$c1172){s0=peg$c1172;peg$currPos+=10;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1173);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,11)===peg$c1174){s0=peg$c1174;peg$currPos+=11;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1175);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,13)===peg$c1176){s0=peg$c1176;peg$currPos+=13;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1177);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,6)===peg$c1178){s0=peg$c1178;peg$currPos+=6;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1179);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,6)===peg$c1180){s0=peg$c1180;peg$currPos+=6;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1181);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,9)===peg$c1182){s0=peg$c1182;peg$currPos+=9;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1183);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,9)===peg$c1184){s0=peg$c1184;peg$currPos+=9;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1185);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,7)===peg$c1186){s0=peg$c1186;peg$currPos+=7;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1187);}}if(s0===peg$FAILED){s0=peg$parseLabel();if(s0===peg$FAILED){s0=peg$parseLabelList();}}}}}}}}}}}}return s0}function peg$parseDirection(){var s0;peg$silentFails++;if(input.substr(peg$currPos,2)===peg$c1189){s0=peg$c1189;peg$currPos+=2;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1190);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,5)===peg$c1191){s0=peg$c1191;peg$currPos+=5;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1192);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,4)===peg$c1193){s0=peg$c1193;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1194);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,4)===peg$c1195){s0=peg$c1195;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1196);}}}}}peg$silentFails--;if(s0===peg$FAILED){if(peg$silentFails===0){peg$fail(peg$c1188);}}return s0}function peg$parseHookDefinition(){var s0;peg$silentFails++;if(input.substr(peg$currPos,4)===peg$c1198){s0=peg$c1198;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1199);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,6)===peg$c1200){s0=peg$c1200;peg$currPos+=6;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1201);}}}peg$silentFails--;if(s0===peg$FAILED){if(peg$silentFails===0){peg$fail(peg$c1197);}}return s0}function peg$parseMachineAuthor(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,14)===peg$c1202){s2=peg$c1202;peg$currPos+=14;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1203);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseLabelOrLabelList();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1204(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseMachineContributor(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,19)===peg$c1205){s2=peg$c1205;peg$currPos+=19;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1206);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseLabelOrLabelList();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1207(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseMachineComment(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,15)===peg$c1208){s2=peg$c1208;peg$currPos+=15;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1209);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseLabelOrLabelList();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1210(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseMachineDefinition(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,18)===peg$c1211){s2=peg$c1211;peg$currPos+=18;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1212);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseURL();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1213(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseMachineName(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,12)===peg$c1214){s2=peg$c1214;peg$currPos+=12;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1215);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseLabel();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1216(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseMachineVersion(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,15)===peg$c1220){s2=peg$c1220;peg$currPos+=15;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1221);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseSemVer();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1222(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseMachineLicense(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,15)===peg$c1223){s2=peg$c1223;peg$currPos+=15;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1224);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseLicenseOrLabelOrList();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1225(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseMachineLanguage(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,16)===peg$c1226){s2=peg$c1226;peg$currPos+=16;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1227);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseLabel();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1228(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseFslVersion(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,11)===peg$c1229){s2=peg$c1229;peg$currPos+=11;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1230);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseSemVer();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1231(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseMachineTheme(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,5)===peg$c1232){s2=peg$c1232;peg$currPos+=5;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1233);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseTheme();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1234(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseMachineFlow(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,4)===peg$c1235){s2=peg$c1235;peg$currPos+=4;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1236);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseDirection();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1237(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseMachineHookDefinition(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,5)===peg$c1238){s2=peg$c1238;peg$currPos+=5;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1239);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseHookDefinition();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1240(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseDotPreamble(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,12)===peg$c1241){s2=peg$c1241;peg$currPos+=12;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1242);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseString();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1243(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseMachineAttribute(){var s0;peg$silentFails++;s0=peg$parseFslVersion();if(s0===peg$FAILED){s0=peg$parseMachineName();if(s0===peg$FAILED){s0=peg$parseMachineAuthor();if(s0===peg$FAILED){s0=peg$parseMachineContributor();if(s0===peg$FAILED){s0=peg$parseMachineComment();if(s0===peg$FAILED){s0=peg$parseMachineDefinition();if(s0===peg$FAILED){s0=peg$parseMachineVersion();if(s0===peg$FAILED){s0=peg$parseMachineLicense();if(s0===peg$FAILED){s0=peg$parseMachineLanguage();if(s0===peg$FAILED){s0=peg$parseMachineTheme();if(s0===peg$FAILED){s0=peg$parseDotPreamble();if(s0===peg$FAILED){s0=peg$parseMachineFlow();if(s0===peg$FAILED){s0=peg$parseMachineHookDefinition();}}}}}}}}}}}}peg$silentFails--;if(s0===peg$FAILED){if(peg$silentFails===0){peg$fail(peg$c1244);}}return s0}function peg$parseSdStateColor(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;peg$silentFails++;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,5)===peg$c1245){s2=peg$c1245;peg$currPos+=5;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1246);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseColor();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1247(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1063);}}return s0}function peg$parseSdStateTextColor(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;peg$silentFails++;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,10)===peg$c1249){s2=peg$c1249;peg$currPos+=10;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1250);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseColor();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1251(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1248);}}return s0}function peg$parseSdStateBackgroundColor(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;peg$silentFails++;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,16)===peg$c1253){s2=peg$c1253;peg$currPos+=16;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1254);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseColor();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1255(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1252);}}return s0}function peg$parseSdStateBorderColor(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;peg$silentFails++;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,12)===peg$c1257){s2=peg$c1257;peg$currPos+=12;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1258);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseColor();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1259(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1256);}}return s0}function peg$parseSdStateShape(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;peg$silentFails++;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,5)===peg$c1131){s2=peg$c1131;peg$currPos+=5;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1132);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseGvizShape();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1261(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1260);}}return s0}function peg$parseSdStateCorners(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;peg$silentFails++;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,7)===peg$c1263){s2=peg$c1263;peg$currPos+=7;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1264);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseCorners();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1265(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1262);}}return s0}function peg$parseSdStateLineStyle(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9;peg$silentFails++;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,9)===peg$c1080){s2=peg$c1080;peg$currPos+=9;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1081);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s4=peg$c1070;peg$currPos++;}else {s4=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){s6=peg$parseLineStyle();if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s8=peg$c1072;peg$currPos++;}else {s8=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){peg$savedPos=s0;s1=peg$c1267(s6);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}peg$silentFails--;if(s0===peg$FAILED){s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1266);}}return s0}function peg$parseStateDeclarationItems(){var s0;s0=peg$parseSdStateColor();if(s0===peg$FAILED){s0=peg$parseSdStateTextColor();if(s0===peg$FAILED){s0=peg$parseSdStateBackgroundColor();if(s0===peg$FAILED){s0=peg$parseSdStateBorderColor();if(s0===peg$FAILED){s0=peg$parseSdStateShape();if(s0===peg$FAILED){s0=peg$parseSdStateCorners();if(s0===peg$FAILED){s0=peg$parseSdStateLineStyle();}}}}}}return s0}function peg$parseStateDeclarationDesc(){var s0,s1,s2,s3,s4,s5;s0=peg$currPos;if(input.charCodeAt(peg$currPos)===123){s1=peg$c1083;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1084);}}if(s1!==peg$FAILED){s2=peg$parseWS();if(s2===peg$FAILED){s2=null;}if(s2!==peg$FAILED){s3=[];s4=peg$parseStateDeclarationItems();while(s4!==peg$FAILED){s3.push(s4);s4=peg$parseStateDeclarationItems();}if(s3!==peg$FAILED){s4=peg$parseWS();if(s4===peg$FAILED){s4=null;}if(s4!==peg$FAILED){if(input.charCodeAt(peg$currPos)===125){s5=peg$c1085;peg$currPos++;}else {s5=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1086);}}if(s5!==peg$FAILED){peg$savedPos=s0;s1=peg$c1087(s3);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseStateDeclaration(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,5)===peg$c1134){s2=peg$c1134;peg$currPos+=5;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1135);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3!==peg$FAILED){s4=peg$parseLabel();if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s6=peg$c1070;peg$currPos++;}else {s6=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){s8=peg$parseStateDeclarationDesc();if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s10=peg$c1072;peg$currPos++;}else {s10=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s10!==peg$FAILED){s11=peg$parseWS();if(s11===peg$FAILED){s11=null;}if(s11!==peg$FAILED){peg$savedPos=s0;s1=peg$c1268(s4,s8);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseNamedList(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.charCodeAt(peg$currPos)===38){s2=peg$c1269;peg$currPos++;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1270);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){s4=peg$parseLabel();if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){if(input.charCodeAt(peg$currPos)===58){s6=peg$c1070;peg$currPos++;}else {s6=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1071);}}if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){s8=peg$parseLabelOrLabelList();if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s10=peg$c1072;peg$currPos++;}else {s10=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s10!==peg$FAILED){s11=peg$parseWS();if(s11===peg$FAILED){s11=null;}if(s11!==peg$FAILED){peg$savedPos=s0;s1=peg$c1271(s4,s8);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseMachinePropertyDefaultNull(){var s0;if(input.substr(peg$currPos,4)===peg$c1272){s0=peg$c1272;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1273);}}return s0}function peg$parseMachinePropertyDefaultUndefined(){var s0;if(input.substr(peg$currPos,9)===peg$c1274){s0=peg$c1274;peg$currPos+=9;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1275);}}return s0}function peg$parseMachinePropertyDefaultBoolean(){var s0;if(input.substr(peg$currPos,4)===peg$c222){s0=peg$c222;peg$currPos+=4;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c223);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,5)===peg$c225){s0=peg$c225;peg$currPos+=5;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c226);}}}return s0}function peg$parseMachinePropertyDefaultNumber(){var s0,s1,s2,s3,s4,s5;s0=peg$currPos;if(input.charCodeAt(peg$currPos)===45){s1=peg$c1105;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1106);}}if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){s2=peg$parseIntegerLiteral();if(s2!==peg$FAILED){if(input.charCodeAt(peg$currPos)===46){s3=peg$c309;peg$currPos++;}else {s3=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c310);}}if(s3!==peg$FAILED){s4=[];s5=peg$parseDecimalDigit();while(s5!==peg$FAILED){s4.push(s5);s5=peg$parseDecimalDigit();}if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){peg$savedPos=s0;s1=peg$c1276();s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}if(s0===peg$FAILED){s0=peg$currPos;if(input.charCodeAt(peg$currPos)===45){s1=peg$c1105;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1106);}}if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){s2=peg$parseIntegerLiteral();if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){peg$savedPos=s0;s1=peg$c1276();s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}if(s0===peg$FAILED){if(input.substr(peg$currPos,8)===peg$c1277){s0=peg$c1277;peg$currPos+=8;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1278);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,11)===peg$c1279){s0=peg$c1279;peg$currPos+=11;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1280);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,3)===peg$c1281){s0=peg$c1281;peg$currPos+=3;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1282);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,10)===peg$c1283){s0=peg$c1283;peg$currPos+=10;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1284);}}if(s0===peg$FAILED){if(input.substr(peg$currPos,10)===peg$c1285){s0=peg$c1285;peg$currPos+=10;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1286);}}}}}}}}return s0}function peg$parseMachinePropertyDefaultString(){var s0,s1,s2,s3;s0=peg$currPos;if(input.charCodeAt(peg$currPos)===34){s1=peg$c242;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c243);}}if(s1!==peg$FAILED){s2=[];s3=peg$parseMachinePropertyDefaultStringCharacter();while(s3!==peg$FAILED){s2.push(s3);s3=peg$parseMachinePropertyDefaultStringCharacter();}if(s2!==peg$FAILED){if(input.charCodeAt(peg$currPos)===34){s3=peg$c242;peg$currPos++;}else {s3=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c243);}}if(s3!==peg$FAILED){peg$savedPos=s0;s1=peg$c1287(s2);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseMachinePropertyDefaultStringCharacter(){var s0,s1,s2;s0=peg$currPos;s1=peg$currPos;peg$silentFails++;if(input.charCodeAt(peg$currPos)===34){s2=peg$c242;peg$currPos++;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c243);}}if(s2===peg$FAILED){if(input.charCodeAt(peg$currPos)===92){s2=peg$c244;peg$currPos++;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c245);}}}peg$silentFails--;if(s2===peg$FAILED){s1=void 0;}else {peg$currPos=s1;s1=peg$FAILED;}if(s1!==peg$FAILED){if(input.length>peg$currPos){s2=input.charAt(peg$currPos);peg$currPos++;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c284);}}if(s2!==peg$FAILED){peg$savedPos=s0;s1=peg$c1288(s2);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}if(s0===peg$FAILED){s0=peg$currPos;if(input.charCodeAt(peg$currPos)===92){s1=peg$c244;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c245);}}if(s1!==peg$FAILED){s2=peg$parseMachinePropertyDefaultStringEscapeSequence();if(s2!==peg$FAILED){peg$savedPos=s0;s1=peg$c1289(s2);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}return s0}function peg$parseMachinePropertyDefaultStringEscapeSequence(){var s0,s1;if(input.charCodeAt(peg$currPos)===39){s0=peg$c272;peg$currPos++;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c273);}}if(s0===peg$FAILED){if(input.charCodeAt(peg$currPos)===34){s0=peg$c242;peg$currPos++;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c243);}}if(s0===peg$FAILED){if(input.charCodeAt(peg$currPos)===92){s0=peg$c244;peg$currPos++;}else {s0=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c245);}}if(s0===peg$FAILED){s0=peg$currPos;if(input.charCodeAt(peg$currPos)===98){s1=peg$c248;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c249);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1290();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.charCodeAt(peg$currPos)===102){s1=peg$c251;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c252);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1291();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.charCodeAt(peg$currPos)===110){s1=peg$c254;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c255);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1292();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.charCodeAt(peg$currPos)===114){s1=peg$c257;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c258);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1293();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.charCodeAt(peg$currPos)===116){s1=peg$c260;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c261);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1294();}s0=s1;if(s0===peg$FAILED){s0=peg$currPos;if(input.charCodeAt(peg$currPos)===118){s1=peg$c263;peg$currPos++;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c264);}}if(s1!==peg$FAILED){peg$savedPos=s0;s1=peg$c1295();}s0=s1;}}}}}}}}return s0}function peg$parseMachinePropertyDefault(){var s0;s0=peg$parseMachinePropertyDefaultNull();if(s0===peg$FAILED){s0=peg$parseMachinePropertyDefaultUndefined();if(s0===peg$FAILED){s0=peg$parseMachinePropertyDefaultBoolean();if(s0===peg$FAILED){s0=peg$parseMachinePropertyDefaultNumber();if(s0===peg$FAILED){s0=peg$parseMachinePropertyDefaultString();}}}}return s0}function peg$parseMachineProperty(){var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11;s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,8)===peg$c1296){s2=peg$c1296;peg$currPos+=8;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1297);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){s4=peg$parseLabel();if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){if(input.substr(peg$currPos,7)===peg$c3){s6=peg$c3;peg$currPos+=7;}else {s6=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c4);}}if(s6!==peg$FAILED){s7=peg$parseWS();if(s7!==peg$FAILED){s8=peg$parseMachinePropertyDefault();if(s8!==peg$FAILED){s9=peg$parseWS();if(s9===peg$FAILED){s9=null;}if(s9!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s10=peg$c1072;peg$currPos++;}else {s10=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s10!==peg$FAILED){s11=peg$parseWS();if(s11===peg$FAILED){s11=null;}if(s11!==peg$FAILED){peg$savedPos=s0;s1=peg$c1298(s4,s8);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}if(s0===peg$FAILED){s0=peg$currPos;s1=peg$parseWS();if(s1===peg$FAILED){s1=null;}if(s1!==peg$FAILED){if(input.substr(peg$currPos,8)===peg$c1296){s2=peg$c1296;peg$currPos+=8;}else {s2=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1297);}}if(s2!==peg$FAILED){s3=peg$parseWS();if(s3===peg$FAILED){s3=null;}if(s3!==peg$FAILED){s4=peg$parseLabel();if(s4!==peg$FAILED){s5=peg$parseWS();if(s5===peg$FAILED){s5=null;}if(s5!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s6=peg$c1072;peg$currPos++;}else {s6=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s6!==peg$FAILED){s7=peg$parseWS();if(s7===peg$FAILED){s7=null;}if(s7!==peg$FAILED){peg$savedPos=s0;s1=peg$c1299(s4);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}return s0}function peg$parseRegularArrangeDeclaration(){var s0,s1,s2,s3,s4,s5,s6;s0=peg$currPos;if(input.substr(peg$currPos,7)===peg$c1300){s1=peg$c1300;peg$currPos+=7;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1301);}}if(s1!==peg$FAILED){s2=peg$parseWS();if(s2===peg$FAILED){s2=null;}if(s2!==peg$FAILED){s3=peg$parseLabelOrLabelList();if(s3!==peg$FAILED){s4=peg$parseWS();if(s4===peg$FAILED){s4=null;}if(s4!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s5=peg$c1072;peg$currPos++;}else {s5=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s5!==peg$FAILED){s6=peg$parseWS();if(s6===peg$FAILED){s6=null;}if(s6!==peg$FAILED){peg$savedPos=s0;s1=peg$c1302(s3);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseArrangeStartDeclaration(){var s0,s1,s2,s3,s4,s5,s6;s0=peg$currPos;if(input.substr(peg$currPos,13)===peg$c1303){s1=peg$c1303;peg$currPos+=13;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1304);}}if(s1!==peg$FAILED){s2=peg$parseWS();if(s2===peg$FAILED){s2=null;}if(s2!==peg$FAILED){s3=peg$parseLabelOrLabelList();if(s3!==peg$FAILED){s4=peg$parseWS();if(s4===peg$FAILED){s4=null;}if(s4!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s5=peg$c1072;peg$currPos++;}else {s5=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s5!==peg$FAILED){s6=peg$parseWS();if(s6===peg$FAILED){s6=null;}if(s6!==peg$FAILED){peg$savedPos=s0;s1=peg$c1305(s3);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseArrangeEndDeclaration(){var s0,s1,s2,s3,s4,s5,s6;s0=peg$currPos;if(input.substr(peg$currPos,11)===peg$c1306){s1=peg$c1306;peg$currPos+=11;}else {s1=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1307);}}if(s1!==peg$FAILED){s2=peg$parseWS();if(s2===peg$FAILED){s2=null;}if(s2!==peg$FAILED){s3=peg$parseLabelOrLabelList();if(s3!==peg$FAILED){s4=peg$parseWS();if(s4===peg$FAILED){s4=null;}if(s4!==peg$FAILED){if(input.charCodeAt(peg$currPos)===59){s5=peg$c1072;peg$currPos++;}else {s5=peg$FAILED;if(peg$silentFails===0){peg$fail(peg$c1073);}}if(s5!==peg$FAILED){s6=peg$parseWS();if(s6===peg$FAILED){s6=null;}if(s6!==peg$FAILED){peg$savedPos=s0;s1=peg$c1308(s3);s0=s1;}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}}else {peg$currPos=s0;s0=peg$FAILED;}return s0}function peg$parseArrangeDeclaration(){var s0;peg$silentFails++;s0=peg$parseArrangeStartDeclaration();if(s0===peg$FAILED){s0=peg$parseArrangeEndDeclaration();if(s0===peg$FAILED){s0=peg$parseRegularArrangeDeclaration();}}peg$silentFails--;if(s0===peg$FAILED){if(peg$silentFails===0){peg$fail(peg$c1309);}}return s0}function peg$parseTerm(){var s0;s0=peg$parseExp();if(s0===peg$FAILED){s0=peg$parseStateDeclaration();if(s0===peg$FAILED){s0=peg$parseArrangeDeclaration();if(s0===peg$FAILED){s0=peg$parseNamedList();if(s0===peg$FAILED){s0=peg$parseMachineAttribute();if(s0===peg$FAILED){s0=peg$parseMachineProperty();if(s0===peg$FAILED){s0=peg$parseConfig();}}}}}}return s0}function peg$parseTermList(){var s0,s1;s0=[];s1=peg$parseTerm();while(s1!==peg$FAILED){s0.push(s1);s1=peg$parseTerm();}return s0}peg$result=peg$startRuleFunction();if(peg$result!==peg$FAILED&&peg$currPos===input.length){return peg$result}else {if(peg$result!==peg$FAILED&&peg$currPos<input.length){peg$fail(peg$endExpectation());}throw peg$buildStructuredError(peg$maxFailExpected,peg$maxFailPos<input.length?input.charAt(peg$maxFailPos):null,peg$maxFailPos<input.length?peg$computeLocation(peg$maxFailPos,peg$maxFailPos+1):peg$computeLocation(peg$maxFailPos,peg$maxFailPos))}}

const version = "5.78.0";

class JssmError extends Error {
    constructor(machine, message, JEEI) {
        const { requested_state } = (JEEI === undefined)
            ? { requested_state: undefined }
            : JEEI;
        const follow_ups = [];
        if (machine) {
            if (machine.state() !== undefined) {
                follow_ups.push(`at "${machine.state()}"`);
            }
        }
        if (requested_state !== undefined) {
            follow_ups.push(`requested "${requested_state}"`);
        }
        const complex_msg = `${((machine === null || machine === void 0 ? void 0 : machine.instance_name()) !== undefined)
            ? `[[${machine.instance_name()}]]: `
            : ''}${message}${follow_ups.length
            ? ` (${follow_ups.join(', ')})`
            : ''}`;
        super(complex_msg);
        this.name = 'JssmError';
        this.message = complex_msg;
        this.base_message = message;
        this.requested_state = requested_state;
    }
}

// whargarbl lots of these return arrays could/should be sets
/* eslint-disable complexity */
/*********
 *
 *  Return the direction of an arrow - `right`, `left`, or `both`.
 *
 *  ```typescript
 *  import { arrow_direction } from 'jssm';
 *
 *  arrow_direction('->');    // 'right'
 *  arrow_direction('<~=>');  // 'both'
 *  ```
 *
 *  @param arrow The arrow to be evaluated
 *
 */
function arrow_direction(arrow) {
    switch (String(arrow)) {
        case '->':
        case '→':
        case '=>':
        case '⇒':
        case '~>':
        case '↛':
            return 'right';
        case '<-':
        case '←':
        case '<=':
        case '⇐':
        case '<~':
        case '↚':
            return 'left';
        case '<->':
        case '↔':
        case '<-=>':
        case '←⇒':
        case '←=>':
        case '<-⇒':
        case '<-~>':
        case '←↛':
        case '←~>':
        case '<-↛':
        case '<=>':
        case '⇔':
        case '<=->':
        case '⇐→':
        case '⇐->':
        case '<=→':
        case '<=~>':
        case '⇐↛':
        case '⇐~>':
        case '<=↛':
        case '<~>':
        case '↮':
        case '<~->':
        case '↚→':
        case '↚->':
        case '<~→':
        case '<~=>':
        case '↚⇒':
        case '↚=>':
        case '<~⇒':
            return 'both';
        default:
            throw new JssmError(undefined, `arrow_direction: unknown arrow type ${arrow}`);
    }
}
/* eslint-enable complexity */
/* eslint-disable complexity */
/*********
 *
 *  Return the direction of an arrow - `right`, `left`, or `both`.
 *
 *  ```typescript
 *  import { arrow_left_kind } from 'jssm';
 *
 *  arrow_left_kind('<-');    // 'legal'
 *  arrow_left_kind('<=');    // 'main'
 *  arrow_left_kind('<~');    // 'forced'
 *  arrow_left_kind('<->');   // 'legal'
 *  arrow_left_kind('->');    // 'none'
 *  ```
 *
 *  @param arrow The arrow to be evaluated
 *
 */
function arrow_left_kind(arrow) {
    switch (String(arrow)) {
        case '->':
        case '→':
        case '=>':
        case '⇒':
        case '~>':
        case '↛':
            return 'none';
        case '<-':
        case '←':
        case '<->':
        case '↔':
        case '<-=>':
        case '←⇒':
        case '<-~>':
        case '←↛':
            return 'legal';
        case '<=':
        case '⇐':
        case '<=>':
        case '⇔':
        case '<=->':
        case '⇐→':
        case '<=~>':
        case '⇐↛':
            return 'main';
        case '<~':
        case '↚':
        case '<~>':
        case '↮':
        case '<~->':
        case '↚→':
        case '<~=>':
        case '↚⇒':
            return 'forced';
        default:
            throw new JssmError(undefined, `arrow_direction: unknown arrow type ${arrow}`);
    }
}
/* eslint-enable complexity */
/* eslint-disable complexity */
/*********
 *
 *  Return the direction of an arrow - `right`, `left`, or `both`.
 *
 *  ```typescript
 *  import { arrow_left_kind } from 'jssm';
 *
 *  arrow_left_kind('->');    // 'legal'
 *  arrow_left_kind('=>');    // 'main'
 *  arrow_left_kind('~>');    // 'forced'
 *  arrow_left_kind('<->');   // 'legal'
 *  arrow_left_kind('<-');    // 'none'
 *  ```
 *
 *  @param arrow The arrow to be evaluated
 *
 */
function arrow_right_kind(arrow) {
    switch (String(arrow)) {
        case '<-':
        case '←':
        case '<=':
        case '⇐':
        case '<~':
        case '↚':
            return 'none';
        case '->':
        case '→':
        case '<->':
        case '↔':
        case '<=->':
        case '⇐→':
        case '<~->':
        case '↚→':
            return 'legal';
        case '=>':
        case '⇒':
        case '<=>':
        case '⇔':
        case '<-=>':
        case '←⇒':
        case '<~=>':
        case '↚⇒':
            return 'main';
        case '~>':
        case '↛':
        case '<~>':
        case '↮':
        case '<-~>':
        case '←↛':
        case '<=~>':
        case '⇐↛':
            return 'forced';
        default:
            throw new JssmError(undefined, `arrow_direction: unknown arrow type ${arrow}`);
    }
}
/* eslint-enable complexity */
/*********
 *
 *  Internal method meant to perform factory assembly of an edge.  Not meant for
 *  external use.
 *
 *  @internal
 *
 *  @typeparam mDT The type of the machine data member; usually omitted
 *
 */
// TODO add at-param to docblock
function makeTransition(this_se, from, to, isRight, _wasList, _wasIndex) {
    const kind = isRight ? arrow_right_kind(this_se.kind) : arrow_left_kind(this_se.kind), edge = {
        from,
        to,
        kind,
        forced_only: kind === 'forced',
        main_path: kind === 'main'
    };
    //  if ((wasList  !== undefined) && (wasIndex === undefined)) { throw new JssmError(undefined, `Must have an index if transition was in a list"); }
    //  if ((wasIndex !== undefined) && (wasList  === undefined)) { throw new JssmError(undefined, `Must be in a list if transition has an index");   }
    /*
      if (typeof edge.to === 'object') {
  
        if (edge.to.key === 'cycle') {
          if (wasList === undefined) { throw new JssmError(undefined, "Must have a waslist if a to is type cycle"); }
          const nextIndex = wrapBy(wasIndex, edge.to.value, wasList.length);
          edge.to = wasList[nextIndex];
        }
  
      }
    */
    const action = isRight ? 'r_action' : 'l_action', probability = isRight ? 'r_probability' : 'l_probability';
    if (this_se[action]) {
        edge.action = this_se[action];
    }
    if (this_se[probability]) {
        edge.probability = this_se[probability];
    }
    return edge;
}
/*********
 *
 *  This method wraps the parser call that comes from the peg grammar,
 *  {@link parse}.  Generally neither this nor that should be used directly
 *  unless you mean to develop plugins or extensions for the machine.
 *
 *  Parses the intermediate representation of a compiled string down to a
 *  machine configuration object.  If you're using this (probably don't,) you're
 *  probably also using {@link compile} and {@link Machine.constructor}.
 *
 *  ```typescript
 *  import { parse, compile, Machine } from 'jssm';
 *
 *  const intermediate = wrap_parse('a -> b;', {});
 *  // [ {key:'transition', from:'a', se:{kind:'->',to:'b'}} ]
 *
 *  const cfg = compile(intermediate);
 *  // { start_states:['a'], transitions: [{ from:'a', to:'b', kind:'legal', forced_only:false, main_path:false }] }
 *
 *  const machine = new Machine(cfg);
 *  // Machine { _instance_name: undefined, _state: 'a', ...
 *  ```
 *
 *  This method is mostly for plugin and intermediate tool authors, or people
 *  who need to work with the machine's intermediate representation.
 *
 *  # Hey!
 *
 *  Most people looking at this want either the `sm` operator or method `from`,
 *  which perform all the steps in the chain.  The library's author mostly uses
 *  operator `sm`, and mostly falls back to `.from` when needing to parse
 *  strings dynamically instead of from template literals.
 *
 *  Operator {@link sm}:
 *
 *  ```typescript
 *  import { sm } from 'jssm';
 *
 *  const switch = sm`on <=> off;`;
 *  ```
 *
 *  Method {@link from}:
 *
 *  ```typescript
 *  import * as jssm from 'jssm';
 *
 *  const toggle = jssm.from('up <=> down;');
 *  ```
 *
 *  `wrap_parse` itself is an internal convenience method for alting out an
 *  object as the options call.  Not generally meant for external use.
 *
 *  @param input The FSL code to be evaluated
 *
 *  @param options Things to control about the instance
 *
 */
function wrap_parse(input, options) {
    return peg$parse(input, options || {});
}
/*********
 *
 *  Internal method performing one step in compiling rules for transitions.  Not
 *  generally meant for external use.
 *
 *  @internal
 *
 *  @typeparam mDT The type of the machine data member; usually omitted
 *
 */
function compile_rule_transition_step(acc, from, to, this_se, next_se) {
    const edges = [];
    const uFrom = (Array.isArray(from) ? from : [from]), uTo = (Array.isArray(to) ? to : [to]);
    uFrom.map((f) => {
        uTo.map((t) => {
            const right = makeTransition(this_se, f, t, true);
            if (right.kind !== 'none') {
                edges.push(right);
            }
            const left = makeTransition(this_se, t, f, false);
            if (left.kind !== 'none') {
                edges.push(left);
            }
        });
    });
    const new_acc = acc.concat(edges);
    if (next_se) {
        return compile_rule_transition_step(new_acc, to, next_se.to, next_se, next_se.se);
    }
    else {
        return new_acc;
    }
}
/*********
 *
 *  Internal method performing one step in compiling rules for transitions.  Not
 *  generally meant for external use.
 *
 *  @internal
 *
 */
function compile_rule_handle_transition(rule) {
    return compile_rule_transition_step([], rule.from, rule.se.to, rule.se, rule.se.se);
}
/*********
 *
 *  Internal method performing one step in compiling rules for transitions.  Not
 *  generally meant for external use.
 *
 *  @internal
 *
 */
function compile_rule_handler(rule) {
    if (rule.key === 'transition') {
        return { agg_as: 'transition', val: compile_rule_handle_transition(rule) };
    }
    if (rule.key === 'machine_language') {
        return { agg_as: 'machine_language', val: reduceTo6391.reduce(rule.value) };
    }
    if (rule.key === 'state_declaration') {
        if (!rule.name) {
            throw new JssmError(undefined, 'State declarations must have a name');
        }
        return { agg_as: 'state_declaration', val: { state: rule.name, declarations: rule.value } };
    }
    if (['arrange_declaration', 'arrange_start_declaration',
        'arrange_end_declaration'].includes(rule.key)) {
        return { agg_as: rule.key, val: [rule.value] };
    }
    const tautologies = [
        'graph_layout', 'start_states', 'end_states', 'machine_name', 'machine_version',
        'machine_comment', 'machine_author', 'machine_contributor', 'machine_definition',
        'machine_reference', 'machine_license', 'fsl_version', 'state_config', 'theme',
        'flow', 'dot_preamble'
    ];
    if (tautologies.includes(rule.key)) {
        return { agg_as: rule.key, val: rule.value };
    }
    throw new JssmError(undefined, `compile_rule_handler: Unknown rule: ${JSON.stringify(rule)}`);
}
/*********
 *
 *  Compile a machine's JSON intermediate representation to a config object.  If
 *  you're using this (probably don't,) you're probably also using
 *  {@link parse} to get the IR, and the object constructor
 *  {@link Machine.construct} to turn the config object into a workable machine.
 *
 *  ```typescript
 *  import { parse, compile, Machine } from 'jssm';
 *
 *  const intermediate = parse('a -> b;');
 *  // [ {key:'transition', from:'a', se:{kind:'->',to:'b'}} ]
 *
 *  const cfg = compile(intermediate);
 *  // { start_states:['a'], transitions: [{ from:'a', to:'b', kind:'legal', forced_only:false, main_path:false }] }
 *
 *  const machine = new Machine(cfg);
 *  // Machine { _instance_name: undefined, _state: 'a', ...
 *  ```
 *
 *  This method is mostly for plugin and intermediate tool authors, or people
 *  who need to work with the machine's intermediate representation.
 *
 *  # Hey!
 *
 *  Most people looking at this want either the `sm` operator or method `from`,
 *  which perform all the steps in the chain.  The library's author mostly uses
 *  operator `sm`, and mostly falls back to `.from` when needing to parse
 *  strings dynamically instead of from template literals.
 *
 *  Operator {@link sm}:
 *
 *  ```typescript
 *  import { sm } from 'jssm';
 *
 *  const switch = sm`on <=> off;`;
 *  ```
 *
 *  Method {@link from}:
 *
 *  ```typescript
 *  import * as jssm from 'jssm';
 *
 *  const toggle = jssm.from('up <=> down;');
 *  ```
 *
 *  @typeparam mDT The type of the machine data member; usually omitted
 *
 *  @param tree The parse tree to be boiled down into a machine config
 *
 */
function compile(tree) {
    const results = {
        graph_layout: [],
        transition: [],
        start_states: [],
        end_states: [],
        state_config: [],
        state_declaration: [],
        fsl_version: [],
        machine_author: [],
        machine_comment: [],
        machine_contributor: [],
        machine_definition: [],
        machine_language: [],
        machine_license: [],
        machine_name: [],
        machine_reference: [],
        theme: [],
        flow: [],
        dot_preamble: [],
        arrange_declaration: [],
        arrange_start_declaration: [],
        arrange_end_declaration: [],
        machine_version: []
    };
    tree.map((tr) => {
        const rule = compile_rule_handler(tr), agg_as = rule.agg_as, val = rule.val; // TODO FIXME no any
        results[agg_as] = results[agg_as].concat(val);
    });
    const assembled_transitions = [].concat(...results['transition']);
    const result_cfg = {
        start_states: results.start_states.length ? results.start_states : [assembled_transitions[0].from],
        transitions: assembled_transitions
    };
    const oneOnlyKeys = [
        'graph_layout', 'machine_name', 'machine_version', 'machine_comment',
        'fsl_version', 'machine_license', 'machine_definition', 'machine_language',
        'theme', 'flow', 'dot_preamble'
    ];
    oneOnlyKeys.map((oneOnlyKey) => {
        if (results[oneOnlyKey].length > 1) {
            throw new JssmError(undefined, `May only have one ${oneOnlyKey} statement maximum: ${JSON.stringify(results[oneOnlyKey])}`);
        }
        else {
            if (results[oneOnlyKey].length) {
                result_cfg[oneOnlyKey] = results[oneOnlyKey][0];
            }
        }
    });
    ['arrange_declaration', 'arrange_start_declaration', 'arrange_end_declaration',
        'machine_author', 'machine_contributor', 'machine_reference', 'state_declaration'].map((multiKey) => {
        if (results[multiKey].length) {
            result_cfg[multiKey] = results[multiKey];
        }
    });
    return result_cfg;
}
/*********
 *
 *  An internal convenience wrapper for parsing then compiling a machine string.
 *  Not generally meant for external use.  Please see {@link compile} or
 *  {@link sm}.
 *
 *  @typeparam mDT The type of the machine data member; usually omitted
 *
 *  @param plan The FSL code to be evaluated and built into a machine config
 *
 */
function make(plan) {
    return compile(wrap_parse(plan));
}
/*********
 *
 *  An internal method meant to take a series of declarations and fold them into
 *  a single multi-faceted declaration, in the process of building a state.  Not
 *  generally meant for external use.
 *
 *  @internal
 *
 */
function transfer_state_properties(state_decl) {
    state_decl.declarations.map((d) => {
        switch (d.key) {
            case 'shape':
                state_decl.shape = d.value;
                break;
            case 'color':
                state_decl.color = d.value;
                break;
            case 'corners':
                state_decl.corners = d.value;
                break;
            case 'linestyle':
                state_decl.linestyle = d.value;
                break;
            case 'text-color':
                state_decl.textColor = d.value;
                break;
            case 'background-color':
                state_decl.backgroundColor = d.value;
                break;
            case 'border-color':
                state_decl.borderColor = d.value;
                break;
            default: throw new JssmError(undefined, `Unknown state property: '${JSON.stringify(d)}'`);
        }
    });
    return state_decl;
}
// TODO add a lotta docblock here
class Machine {
    // whargarbl this badly needs to be broken up, monolith master
    constructor({ start_states, complete = [], transitions, machine_author, machine_comment, machine_contributor, machine_definition, machine_language, machine_license, machine_name, machine_version, state_declaration, fsl_version, dot_preamble = undefined, arrange_declaration = [], arrange_start_declaration = [], arrange_end_declaration = [], theme = 'default', flow = 'down', graph_layout = 'dot', instance_name, history, data }) {
        this._instance_name = instance_name;
        this._state = start_states[0];
        this._states = new Map();
        this._state_declarations = new Map();
        this._edges = [];
        this._edge_map = new Map();
        this._named_transitions = new Map();
        this._actions = new Map();
        this._reverse_actions = new Map();
        this._reverse_action_targets = new Map(); // todo
        this._machine_author = array_box_if_string(machine_author);
        this._machine_comment = machine_comment;
        this._machine_contributor = array_box_if_string(machine_contributor);
        this._machine_definition = machine_definition;
        this._machine_language = machine_language;
        this._machine_license = machine_license;
        this._machine_name = machine_name;
        this._machine_version = machine_version;
        this._raw_state_declaration = state_declaration || [];
        this._fsl_version = fsl_version;
        this._arrange_declaration = arrange_declaration;
        this._arrange_start_declaration = arrange_start_declaration;
        this._arrange_end_declaration = arrange_end_declaration;
        this._dot_preamble = dot_preamble;
        this._theme = theme;
        this._flow = flow;
        this._graph_layout = graph_layout;
        this._has_hooks = false;
        this._has_basic_hooks = false;
        this._has_named_hooks = false;
        this._has_entry_hooks = false;
        this._has_exit_hooks = false;
        this._has_global_action_hooks = false;
        this._has_transition_hooks = true;
        // no need for a boolean for single hooks, just test for undefinedness
        this._hooks = new Map();
        this._named_hooks = new Map();
        this._entry_hooks = new Map();
        this._exit_hooks = new Map();
        this._global_action_hooks = new Map();
        this._any_action_hook = undefined;
        this._standard_transition_hook = undefined;
        this._main_transition_hook = undefined;
        this._forced_transition_hook = undefined;
        this._any_transition_hook = undefined;
        this._has_post_hooks = false;
        this._has_post_basic_hooks = false;
        this._has_post_named_hooks = false;
        this._has_post_entry_hooks = false;
        this._has_post_exit_hooks = false;
        this._has_post_global_action_hooks = false;
        this._has_post_transition_hooks = true;
        // no need for a boolean for single hooks, just test for undefinedness
        this._post_hooks = new Map();
        this._post_named_hooks = new Map();
        this._post_entry_hooks = new Map();
        this._post_exit_hooks = new Map();
        this._post_global_action_hooks = new Map();
        this._post_any_action_hook = undefined;
        this._post_standard_transition_hook = undefined;
        this._post_main_transition_hook = undefined;
        this._post_forced_transition_hook = undefined;
        this._post_any_transition_hook = undefined;
        this._data = data;
        this._history_length = history || 0;
        this._history = new circular_buffer(this._history_length);
        if (state_declaration) {
            state_declaration.map((state_decl) => {
                if (this._state_declarations.has(state_decl.state)) { // no repeats
                    throw new JssmError(this, `Added the same state declaration twice: ${JSON.stringify(state_decl.state)}`);
                }
                this._state_declarations.set(state_decl.state, transfer_state_properties(state_decl));
            });
        }
        transitions.map((tr) => {
            if (tr.from === undefined) {
                throw new JssmError(this, `transition must define 'from': ${JSON.stringify(tr)}`);
            }
            if (tr.to === undefined) {
                throw new JssmError(this, `transition must define 'to': ${JSON.stringify(tr)}`);
            }
            // get the cursors.  what a mess
            const cursor_from = this._states.get(tr.from)
                || { name: tr.from, from: [], to: [], complete: complete.includes(tr.from) };
            if (!(this._states.has(tr.from))) {
                this._new_state(cursor_from);
            }
            const cursor_to = this._states.get(tr.to)
                || { name: tr.to, from: [], to: [], complete: complete.includes(tr.to) };
            if (!(this._states.has(tr.to))) {
                this._new_state(cursor_to);
            }
            // guard against existing connections being re-added
            if (cursor_from.to.includes(tr.to)) {
                throw new JssmError(this, `already has ${JSON.stringify(tr.from)} to ${JSON.stringify(tr.to)}`);
            }
            else {
                cursor_from.to.push(tr.to);
                cursor_to.from.push(tr.from);
            }
            // add the edge; note its id
            this._edges.push(tr);
            const thisEdgeId = this._edges.length - 1;
            // guard against repeating a transition name
            if (tr.name) {
                if (this._named_transitions.has(tr.name)) {
                    throw new JssmError(this, `named transition "${JSON.stringify(tr.name)}" already created`);
                }
                else {
                    this._named_transitions.set(tr.name, thisEdgeId);
                }
            }
            // set up the mapping, so that edges can be looked up by endpoint pairs
            const from_mapping = this._edge_map.get(tr.from) || new Map();
            if (!(this._edge_map.has(tr.from))) {
                this._edge_map.set(tr.from, from_mapping);
            }
            //    const to_mapping = from_mapping.get(tr.to);
            from_mapping.set(tr.to, thisEdgeId); // already checked that this mapping doesn't exist, above
            // set up the action mapping, so that actions can be looked up by origin
            if (tr.action) {
                // forward mapping first by action name
                let actionMap = this._actions.get(tr.action);
                if (!(actionMap)) {
                    actionMap = new Map();
                    this._actions.set(tr.action, actionMap);
                }
                if (actionMap.has(tr.from)) {
                    throw new JssmError(this, `action ${JSON.stringify(tr.action)} already attached to origin ${JSON.stringify(tr.from)}`);
                }
                else {
                    actionMap.set(tr.from, thisEdgeId);
                }
                // reverse mapping first by state origin name
                let rActionMap = this._reverse_actions.get(tr.from);
                if (!(rActionMap)) {
                    rActionMap = new Map();
                    this._reverse_actions.set(tr.from, rActionMap);
                }
                // no need to test for reverse mapping pre-presence;
                // forward mapping already covers collisions
                rActionMap.set(tr.action, thisEdgeId);
                // reverse mapping first by state target name
                if (!(this._reverse_action_targets.has(tr.to))) {
                    this._reverse_action_targets.set(tr.to, new Map());
                }
                /* todo comeback
                   fundamental problem is roActionMap needs to be a multimap
                        const roActionMap = this._reverse_action_targets.get(tr.to);  // wasteful - already did has - refactor
                        if (roActionMap) {
                          if (roActionMap.has(tr.action)) {
                            throw new JssmError(this, `ro-action ${tr.to} already attached to action ${tr.action}`);
                          } else {
                            roActionMap.set(tr.action, thisEdgeId);
                          }
                        } else {
                          throw new JssmError(this, `should be impossible - flow doesn\'t know .set precedes .get yet again.  severe error?');
                        }
                */
            }
        });
    }
    /********
     *
     *  Internal method for fabricating states.  Not meant for external use.
     *
     *  @internal
     *
     */
    _new_state(state_config) {
        if (this._states.has(state_config.name)) {
            throw new JssmError(this, `state ${JSON.stringify(state_config.name)} already exists`);
        }
        this._states.set(state_config.name, state_config);
        return state_config.name;
    }
    /*********
     *
     *  Get the current state of a machine.
     *
     *  ```typescript
     *  import * as jssm from 'jssm';
     *
     *  const switch = jssm.from('on <=> off;');
     *  console.log( switch.state() );             // 'on'
     *
     *  switch.transition('off');
     *  console.log( switch.state() );             // 'off'
     *  ```
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     */
    state() {
        return this._state;
    }
    /* whargarbl todo major
       when we reimplement this, reintroduce this change to the is_final call
  
      is_changing(): boolean {
        return true; // todo whargarbl
      }
    */
    /*********
     *
     *  Get the current data of a machine.
     *
     *  ```typescript
     *  import * as jssm from 'jssm';
     *
     *  const switch = jssm.from('on <=> off;', {data: 1});
     *  console.log( switch.data() );              // 1
     *  ```
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     */
    data() {
        return this._data;
    }
    /* whargarbl todo major
       when we reimplement this, reintroduce this change to the is_final call
  
      is_changing(): boolean {
        return true; // todo whargarbl
      }
    */
    /********
     *
     *  Check whether a given state is final (either has no exits or is marked
     *  `complete`.)
     *
     *  ```typescript
     *  import { sm, state_is_final } from 'jssm';
     *
     *  const final_test = sm`first -> second;`;
     *
     *  console.log( final_test.state_is_final('first') );   // false
     *  console.log( final_test.state_is_final('second') );  // true
     *  ```
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     *  @param whichState The name of the state to check for finality
     *
     */
    state_is_final(whichState) {
        return ((this.state_is_terminal(whichState)) && (this.state_is_complete(whichState)));
    }
    /********
     *
     *  Check whether the current state is final (either has no exits or is marked
     *  `complete`.)
     *
     *  ```typescript
     *  import { sm, state_is_final } from 'jssm';
     *
     *  const final_test = sm`first -> second;`;
     *
     *  console.log( final_test.is_final() );   // false
     *  state.transition('second');
     *  console.log( final_test.is_final() );   // true
     *  ```
     *
     */
    is_final() {
        //  return ((!this.is_changing()) && this.state_is_final(this.state()));
        return this.state_is_final(this.state());
    }
    /********
     *
     *  Serialize the current machine, including all defining state but not the
     *  machine string, to a structure.  This means you will need the machine
     *  string to recreate (to not waste repeated space;) if you want the machine
     *  string embedded, call {@link serialize_with_string} instead.
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     */
    serialize(comment) {
        return {
            comment,
            state: this._state,
            data: this._data,
            jssm_version: version,
            history: this._history.toArray(),
            history_capacity: this._history.capacity,
            timestamp: new Date().getTime(),
        };
    }
    graph_layout() {
        return this._graph_layout;
    }
    dot_preamble() {
        return this._dot_preamble;
    }
    machine_author() {
        return this._machine_author;
    }
    machine_comment() {
        return this._machine_comment;
    }
    machine_contributor() {
        return this._machine_contributor;
    }
    machine_definition() {
        return this._machine_definition;
    }
    machine_language() {
        return this._machine_language;
    }
    machine_license() {
        return this._machine_license;
    }
    machine_name() {
        return this._machine_name;
    }
    machine_version() {
        return this._machine_version;
    }
    raw_state_declarations() {
        return this._raw_state_declaration;
    }
    state_declaration(which) {
        return this._state_declarations.get(which);
    }
    state_declarations() {
        return this._state_declarations;
    }
    fsl_version() {
        return this._fsl_version;
    }
    machine_state() {
        return {
            internal_state_impl_version: 1,
            actions: this._actions,
            edge_map: this._edge_map,
            edges: this._edges,
            named_transitions: this._named_transitions,
            reverse_actions: this._reverse_actions,
            // reverse_action_targets : this._reverse_action_targets,
            state: this._state,
            states: this._states
        };
    }
    /*
      load_machine_state(): boolean {
        return false; // todo whargarbl
      }
    */
    /*********
     *
     *  List all the states known by the machine.  Please note that the order of
     *  these states is not guaranteed.
     *
     *  ```typescript
     *  import * as jssm from 'jssm';
     *
     *  const switch = jssm.from('on <=> off;');
     *  console.log( switch.states() );             // ['on', 'off']
     *  ```
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     */
    states() {
        return Array.from(this._states.keys());
    }
    state_for(whichState) {
        const state = this._states.get(whichState);
        if (state) {
            return state;
        }
        else {
            throw new JssmError(this, 'No such state', { requested_state: whichState });
        }
    }
    /*********
     *
     *  Check whether the machine knows a given state.
     *
     *  ```typescript
     *  import * as jssm from 'jssm';
     *
     *  const switch = jssm.from('on <=> off;');
     *
     *  console.log( switch.has_state('off') );     // true
     *  console.log( switch.has_state('dance') );   // false
     *  ```
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     *  @param whichState The state to be checked for extance
     *
     */
    has_state(whichState) {
        return this._states.get(whichState) !== undefined;
    }
    /*********
     *
     *  Lists all edges of a machine.
     *
     *  ```typescript
     *  import { sm } from 'jssm';
     *
     *  const lswitch = sm`on 'toggle' <=> 'toggle' off;`;
     *
     *  lswitch.list_edges();
     *  [
     *    {
     *      from: 'on',
     *      to: 'off',
     *      kind: 'main',
     *      forced_only: false,
     *      main_path: true,
     *      action: 'toggle'
     *    },
     *    {
     *      from: 'off',
     *      to: 'on',
     *      kind: 'main',
     *      forced_only: false,
     *      main_path: true,
     *      action: 'toggle'
     *    }
     *  ]
     *  ```
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     */
    list_edges() {
        return this._edges;
    }
    list_named_transitions() {
        return this._named_transitions;
    }
    list_actions() {
        return Array.from(this._actions.keys());
    }
    theme() {
        return this._theme; // constructor sets this to "default" otherwise
    }
    flow() {
        return this._flow;
    }
    get_transition_by_state_names(from, to) {
        const emg = this._edge_map.get(from);
        if (emg) {
            return emg.get(to);
        }
        else {
            return undefined;
        }
    }
    lookup_transition_for(from, to) {
        const id = this.get_transition_by_state_names(from, to);
        return ((id === undefined) || (id === null)) ? undefined : this._edges[id];
    }
    /********
     *
     *  List all transitions attached to the current state, sorted by entrance and
     *  exit.  The order of each sublist is not defined.  A node could appear in
     *  both lists.
     *
     *  ```typescript
     *  import { sm } from 'jssm';
     *
     *  const light = sm`red 'next' -> green 'next' -> yellow 'next' -> red; [red yellow green] 'shutdown' ~> off 'start' -> red;`;
     *
     *  light.state();               // 'red'
     *  light.list_transitions();    // { entrances: [ 'yellow', 'off' ], exits: [ 'green', 'off' ] }
     *  ```
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     *  @param whichState The state whose transitions to have listed
     *
     */
    list_transitions(whichState = this.state()) {
        return { entrances: this.list_entrances(whichState), exits: this.list_exits(whichState) };
    }
    /********
     *
     *  List all entrances attached to the current state.  Please note that the
     *  order of the list is not defined.
     *
     *  ```typescript
     *  import { sm } from 'jssm';
     *
     *  const light = sm`red 'next' -> green 'next' -> yellow 'next' -> red; [red yellow green] 'shutdown' ~> off 'start' -> red;`;
     *
     *  light.state();               // 'red'
     *  light.list_entrances();      // [ 'yellow', 'off' ]
     *  ```
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     *  @param whichState The state whose entrances to have listed
     *
     */
    list_entrances(whichState = this.state()) {
        return (this._states.get(whichState)
            || { from: undefined }).from
            || [];
    }
    /********
     *
     *  List all exits attached to the current state.  Please note that the order
     *  of the list is not defined.
     *
     *  ```typescript
     *  import { sm } from 'jssm';
     *
     *  const light = sm`red 'next' -> green 'next' -> yellow 'next' -> red; [red yellow green] 'shutdown' ~> off 'start' -> red;`;
     *
     *  light.state();               // 'red'
     *  light.list_exits();          // [ 'green', 'off' ]
     *  ```
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     *  @param whichState The state whose exits to have listed
     *
     */
    list_exits(whichState = this.state()) {
        return (this._states.get(whichState)
            || { to: undefined }).to
            || [];
    }
    probable_exits_for(whichState) {
        const wstate = this._states.get(whichState);
        if (!(wstate)) {
            throw new JssmError(this, `No such state ${JSON.stringify(whichState)} in probable_exits_for`);
        }
        const wstate_to = wstate.to, wtf // wstate_to_filtered -> wtf
         = wstate_to
            .map((ws) => this.lookup_transition_for(this.state(), ws))
            .filter(Boolean);
        return wtf;
    }
    probabilistic_transition() {
        const selected = weighted_rand_select(this.probable_exits_for(this.state()));
        return this.transition(selected.to);
    }
    probabilistic_walk(n) {
        return seq(n)
            .map(() => {
            const state_was = this.state();
            this.probabilistic_transition();
            return state_was;
        })
            .concat([this.state()]);
    }
    probabilistic_histo_walk(n) {
        return histograph(this.probabilistic_walk(n));
    }
    /********
     *
     *  List all actions available from this state.  Please note that the order of
     *  the actions is not guaranteed.
     *
     *  ```typescript
     *  import { sm } from 'jssm';
     *
     *  const machine = sm`
     *    red 'next' -> green 'next' -> yellow 'next' -> red;
     *    [red yellow green] 'shutdown' ~> off 'start' -> red;
     *  `;
     *
     *  console.log( machine.state() );    // logs 'red'
     *  console.log( machine.actions() );  // logs ['next', 'shutdown']
     *
     *  machine.action('next');            // true
     *  console.log( machine.state() );    // logs 'green'
     *  console.log( machine.actions() );  // logs ['next', 'shutdown']
     *
     *  machine.action('shutdown');        // true
     *  console.log( machine.state() );    // logs 'off'
     *  console.log( machine.actions() );  // logs ['start']
     *
     *  machine.action('start');           // true
     *  console.log( machine.state() );    // logs 'red'
     *  console.log( machine.actions() );  // logs ['next', 'shutdown']
     *  ```
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     *  @param whichState The state whose actions to have listed
     *
     */
    actions(whichState = this.state()) {
        const wstate = this._reverse_actions.get(whichState);
        if (wstate) {
            return Array.from(wstate.keys());
        }
        else {
            throw new JssmError(this, `No such state ${JSON.stringify(whichState)}`);
        }
    }
    /********
     *
     *  List all states that have a specific action attached.  Please note that
     *  the order of the states is not guaranteed.
     *
     *  ```typescript
     *  import { sm } from 'jssm';
     *
     *  const machine = sm`
     *    red 'next' -> green 'next' -> yellow 'next' -> red;
     *    [red yellow green] 'shutdown' ~> off 'start' -> red;
     *  `;
     *
     *  console.log( machine.list_states_having_action('next') );    // ['red', 'green', 'yellow']
     *  console.log( machine.list_states_having_action('start') );   // ['off']
     *  ```
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     *  @param whichState The action to be checked for associated states
     *
     */
    list_states_having_action(whichState) {
        const wstate = this._actions.get(whichState);
        if (wstate) {
            return Array.from(wstate.keys());
        }
        else {
            throw new JssmError(this, `No such state ${JSON.stringify(whichState)}`);
        }
    }
    // comeback
    /*
      list_entrance_actions(whichState: mNT = this.state() ) : Array<mNT> {
        return [... (this._reverse_action_targets.get(whichState) || new Map()).values()] // wasteful
               .map( (edgeId:any) => (this._edges[edgeId] : any)) // whargarbl burn out any
               .filter( (o:any) => o.to === whichState)
               .map( filtered => filtered.from );
      }
    */
    list_exit_actions(whichState = this.state()) {
        const ra_base = this._reverse_actions.get(whichState);
        if (!(ra_base)) {
            throw new JssmError(this, `No such state ${JSON.stringify(whichState)}`);
        }
        return Array.from(ra_base.values())
            .map((edgeId) => this._edges[edgeId])
            .filter((o) => o.from === whichState)
            .map((filtered) => filtered.action);
    }
    probable_action_exits(whichState = this.state()) {
        const ra_base = this._reverse_actions.get(whichState);
        if (!(ra_base)) {
            throw new JssmError(this, `No such state ${JSON.stringify(whichState)}`);
        }
        return Array.from(ra_base.values())
            .map((edgeId) => this._edges[edgeId])
            .filter((o) => o.from === whichState)
            .map((filtered) => ({
            action: filtered.action,
            probability: filtered.probability
        }));
    }
    // TODO FIXME test that is_unenterable on non-state throws
    is_unenterable(whichState) {
        if (!(this.has_state(whichState))) {
            throw new JssmError(this, `No such state ${whichState}`);
        }
        return this.list_entrances(whichState).length === 0;
    }
    has_unenterables() {
        return this.states().some((x) => this.is_unenterable(x));
    }
    is_terminal() {
        return this.state_is_terminal(this.state());
    }
    // TODO FIXME test that state_is_terminal on non-state throws
    state_is_terminal(whichState) {
        if (!(this.has_state(whichState))) {
            throw new JssmError(this, `No such state ${whichState}`);
        }
        return this.list_exits(whichState).length === 0;
    }
    has_terminals() {
        return this.states().some((x) => this.state_is_terminal(x));
    }
    is_complete() {
        return this.state_is_complete(this.state());
    }
    state_is_complete(whichState) {
        const wstate = this._states.get(whichState);
        if (wstate) {
            return wstate.complete;
        }
        else {
            throw new JssmError(this, `No such state ${JSON.stringify(whichState)}`);
        }
    }
    has_completes() {
        return this.states().some((x) => this.state_is_complete(x));
    }
    // basic toolable hook call.  convenience wrappers will follow, like
    // hook(from, to, handler) and exit_hook(from, handler) and etc
    set_hook(HookDesc) {
        switch (HookDesc.kind) {
            case 'hook':
                this._hooks.set(hook_name(HookDesc.from, HookDesc.to), HookDesc.handler);
                this._has_hooks = true;
                this._has_basic_hooks = true;
                break;
            case 'named':
                this._named_hooks.set(named_hook_name(HookDesc.from, HookDesc.to, HookDesc.action), HookDesc.handler);
                this._has_hooks = true;
                this._has_named_hooks = true;
                break;
            case 'global action':
                this._global_action_hooks.set(HookDesc.action, HookDesc.handler);
                this._has_hooks = true;
                this._has_global_action_hooks = true;
                break;
            case 'any action':
                this._any_action_hook = HookDesc.handler;
                this._has_hooks = true;
                break;
            case 'standard transition':
                this._standard_transition_hook = HookDesc.handler;
                this._has_transition_hooks = true;
                this._has_hooks = true;
                break;
            case 'main transition':
                this._main_transition_hook = HookDesc.handler;
                this._has_transition_hooks = true;
                this._has_hooks = true;
                break;
            case 'forced transition':
                this._forced_transition_hook = HookDesc.handler;
                this._has_transition_hooks = true;
                this._has_hooks = true;
                break;
            case 'any transition':
                this._any_transition_hook = HookDesc.handler;
                this._has_hooks = true;
                break;
            case 'entry':
                this._entry_hooks.set(HookDesc.to, HookDesc.handler);
                this._has_hooks = true;
                this._has_entry_hooks = true;
                break;
            case 'exit':
                this._exit_hooks.set(HookDesc.from, HookDesc.handler);
                this._has_hooks = true;
                this._has_exit_hooks = true;
                break;
            case 'post hook':
                this._post_hooks.set(hook_name(HookDesc.from, HookDesc.to), HookDesc.handler);
                this._has_post_hooks = true;
                this._has_post_basic_hooks = true;
                break;
            case 'post named':
                this._post_named_hooks.set(named_hook_name(HookDesc.from, HookDesc.to, HookDesc.action), HookDesc.handler);
                this._has_post_hooks = true;
                this._has_post_named_hooks = true;
                break;
            case 'post global action':
                this._post_global_action_hooks.set(HookDesc.action, HookDesc.handler);
                this._has_post_hooks = true;
                this._has_post_global_action_hooks = true;
                break;
            case 'post any action':
                this._post_any_action_hook = HookDesc.handler;
                this._has_post_hooks = true;
                break;
            case 'post standard transition':
                this._post_standard_transition_hook = HookDesc.handler;
                this._has_post_transition_hooks = true;
                this._has_post_hooks = true;
                break;
            case 'post main transition':
                this._post_main_transition_hook = HookDesc.handler;
                this._has_post_transition_hooks = true;
                this._has_post_hooks = true;
                break;
            case 'post forced transition':
                this._post_forced_transition_hook = HookDesc.handler;
                this._has_post_transition_hooks = true;
                this._has_post_hooks = true;
                break;
            case 'post any transition':
                this._post_any_transition_hook = HookDesc.handler;
                this._has_post_hooks = true;
                break;
            case 'post entry':
                this._post_entry_hooks.set(HookDesc.to, HookDesc.handler);
                this._has_post_entry_hooks = true;
                this._has_post_hooks = true;
                break;
            case 'post exit':
                this._post_exit_hooks.set(HookDesc.from, HookDesc.handler);
                this._has_post_exit_hooks = true;
                this._has_post_hooks = true;
                break;
            default:
                throw new JssmError(this, `Unknown hook type ${HookDesc.kind}, should be impossible`);
        }
    }
    hook(from, to, handler) {
        this.set_hook({ kind: 'hook', from, to, handler });
        return this;
    }
    hook_action(from, to, action, handler) {
        this.set_hook({ kind: 'named', from, to, action, handler });
        return this;
    }
    hook_global_action(action, handler) {
        this.set_hook({ kind: 'global action', action, handler });
        return this;
    }
    hook_any_action(handler) {
        this.set_hook({ kind: 'any action', handler });
        return this;
    }
    hook_standard_transition(handler) {
        this.set_hook({ kind: 'standard transition', handler });
        return this;
    }
    hook_main_transition(handler) {
        this.set_hook({ kind: 'main transition', handler });
        return this;
    }
    hook_forced_transition(handler) {
        this.set_hook({ kind: 'forced transition', handler });
        return this;
    }
    hook_any_transition(handler) {
        this.set_hook({ kind: 'any transition', handler });
        return this;
    }
    hook_entry(to, handler) {
        this.set_hook({ kind: 'entry', to, handler });
        return this;
    }
    hook_exit(from, handler) {
        this.set_hook({ kind: 'exit', from, handler });
        return this;
    }
    post_hook(from, to, handler) {
        this.set_hook({ kind: 'post hook', from, to, handler });
        return this;
    }
    post_hook_action(from, to, action, handler) {
        this.set_hook({ kind: 'post named', from, to, action, handler });
        return this;
    }
    post_hook_global_action(action, handler) {
        this.set_hook({ kind: 'post global action', action, handler });
        return this;
    }
    post_hook_any_action(handler) {
        this.set_hook({ kind: 'post any action', handler });
        return this;
    }
    post_hook_standard_transition(handler) {
        this.set_hook({ kind: 'post standard transition', handler });
        return this;
    }
    post_hook_main_transition(handler) {
        this.set_hook({ kind: 'post main transition', handler });
        return this;
    }
    post_hook_forced_transition(handler) {
        this.set_hook({ kind: 'post forced transition', handler });
        return this;
    }
    post_hook_any_transition(handler) {
        this.set_hook({ kind: 'post any transition', handler });
        return this;
    }
    post_hook_entry(to, handler) {
        this.set_hook({ kind: 'post entry', to, handler });
        return this;
    }
    post_hook_exit(from, handler) {
        this.set_hook({ kind: 'post exit', from, handler });
        return this;
    }
    // remove_hook(HookDesc: HookDescription) {
    //   throw new JssmError(this, 'TODO: Should remove hook here');
    // }
    edges_between(from, to) {
        return this._edges.filter(edge => ((edge.from === from) && (edge.to === to)));
    }
    transition_impl(newStateOrAction, newData, wasForced, wasAction) {
        // TODO the forced-ness behavior needs to be cleaned up a lot here
        // TODO all the callbacks are wrong on forced, action, etc
        let valid = false, trans_type, newState, fromAction = undefined;
        if (wasForced) {
            if (this.valid_force_transition(newStateOrAction, newData)) {
                valid = true;
                trans_type = 'forced';
                newState = newStateOrAction;
            }
        }
        else if (wasAction) {
            if (this.valid_action(newStateOrAction, newData)) {
                const edge = this.current_action_edge_for(newStateOrAction);
                valid = true;
                trans_type = edge.kind;
                newState = edge.to;
                fromAction = newStateOrAction;
            }
        }
        else {
            if (this.valid_transition(newStateOrAction, newData)) {
                if (this._has_transition_hooks) {
                    trans_type = this.edges_between(this._state, newStateOrAction)[0].kind; // TODO this won't do the right thing if various edges have different types
                }
                valid = true;
                newState = newStateOrAction;
            }
        }
        const hook_args = {
            data: this._data,
            action: fromAction,
            from: this._state,
            to: newState,
            forced: wasForced,
            trans_type
        };
        if (valid) {
            if (this._has_hooks) {
                function update_fields(res) {
                    if (res.hasOwnProperty('data')) {
                        hook_args.data = res.data;
                        data_changed = true;
                    }
                }
                let data_changed = false;
                if (wasAction) {
                    // 1. any action hook
                    const outcome = abstract_hook_step(this._any_action_hook, hook_args);
                    if (outcome.pass === false) {
                        return false;
                    }
                    update_fields(outcome);
                    // 2. global specific action hook
                    const outcome2 = abstract_hook_step(this._global_action_hooks.get(newStateOrAction), hook_args);
                    if (outcome2.pass === false) {
                        return false;
                    }
                    update_fields(outcome2);
                }
                // 3. any transition hook
                if (this._any_transition_hook !== undefined) {
                    const outcome = abstract_hook_step(this._any_transition_hook, hook_args);
                    if (outcome.pass === false) {
                        return false;
                    }
                    update_fields(outcome);
                }
                // 4. exit hook
                if (this._has_exit_hooks) {
                    const outcome = abstract_hook_step(this._exit_hooks.get(this._state), hook_args);
                    if (outcome.pass === false) {
                        return false;
                    }
                    update_fields(outcome);
                }
                // 5. named transition / action hook
                if (this._has_named_hooks) {
                    if (wasAction) {
                        const nhn = named_hook_name(this._state, newState, newStateOrAction), outcome = abstract_hook_step(this._named_hooks.get(nhn), hook_args);
                        if (outcome.pass === false) {
                            return false;
                        }
                        update_fields(outcome);
                    }
                }
                // 6. regular hook
                if (this._has_basic_hooks) {
                    const hn = hook_name(this._state, newState), outcome = abstract_hook_step(this._hooks.get(hn), hook_args);
                    if (outcome.pass === false) {
                        return false;
                    }
                    update_fields(outcome);
                }
                // 7. edge type hook
                // 7a. standard transition hook
                if (trans_type === 'legal') {
                    const outcome = abstract_hook_step(this._standard_transition_hook, hook_args);
                    if (outcome.pass === false) {
                        return false;
                    }
                    update_fields(outcome);
                }
                // 7b. main type hook
                if (trans_type === 'main') {
                    const outcome = abstract_hook_step(this._main_transition_hook, hook_args);
                    if (outcome.pass === false) {
                        return false;
                    }
                    update_fields(outcome);
                }
                // 7c. forced transition hook
                if (trans_type === 'forced') {
                    const outcome = abstract_hook_step(this._forced_transition_hook, hook_args);
                    if (outcome.pass === false) {
                        return false;
                    }
                    update_fields(outcome);
                }
                // 8. entry hook
                if (this._has_entry_hooks) {
                    const outcome = abstract_hook_step(this._entry_hooks.get(newState), hook_args);
                    if (outcome.pass === false) {
                        return false;
                    }
                    update_fields(outcome);
                }
                // all hooks passed!  let's now establish the result
                if (this._history_length) {
                    this._history.shove([this._state, this._data]);
                }
                this._state = newState;
                if (data_changed) {
                    this._data = hook_args.data;
                }
                // success fallthrough to posthooks; intentionally no return here
                // look for "posthooks begin here"
                // or without hooks
            }
            else {
                if (this._history_length) {
                    this._history.shove([this._state, this._data]);
                }
                this._state = newState;
                // success fallthrough to posthooks; intentionally no return here
                // look for "posthooks begin here"
            }
            // not valid
        }
        else {
            return false;
        }
        // posthooks begin here
        if (this._has_post_hooks) {
            if (wasAction) {
                // 1. any action posthook
                if (this._post_any_action_hook !== undefined) {
                    this._post_any_action_hook(hook_args);
                }
                // 2. global specific action hook
                const pgah = this._post_global_action_hooks.get(hook_args.action);
                if (pgah !== undefined) {
                    pgah(hook_args);
                }
            }
            // 3. any transition hook
            if (this._post_any_transition_hook !== undefined) {
                this._post_any_transition_hook(hook_args);
            }
            // 4. exit hook
            if (this._has_post_exit_hooks) {
                const peh = this._post_exit_hooks.get(hook_args.from); // todo this is probably from instead
                if (peh !== undefined) {
                    peh(hook_args);
                }
            }
            // 5. named transition / action hook
            if (this._has_post_named_hooks) {
                if (wasAction) {
                    const nhn = named_hook_name(hook_args.from, hook_args.to, hook_args.action), pnh = this._post_named_hooks.get(nhn);
                    if (pnh !== undefined) {
                        pnh(hook_args);
                    }
                }
            }
            // 6. regular hook
            if (this._has_post_basic_hooks) {
                const hook = this._post_hooks.get(hook_name(hook_args.from, hook_args.to));
                if (hook !== undefined) {
                    hook(hook_args);
                }
            }
            // 7. edge type hook
            // 7a. standard transition hook
            if (trans_type === 'legal') {
                if (this._post_standard_transition_hook !== undefined) {
                    this._post_standard_transition_hook(hook_args);
                }
            }
            // 7b. main type hook
            if (trans_type === 'main') {
                if (this._post_main_transition_hook !== undefined) {
                    this._post_main_transition_hook(hook_args);
                }
            }
            // 7c. forced transition hook
            if (trans_type === 'forced') {
                if (this._post_forced_transition_hook !== undefined) {
                    this._post_forced_transition_hook(hook_args);
                }
            }
            // 8. entry hook
            if (this._has_post_entry_hooks) {
                const hook = this._post_entry_hooks.get(hook_args.to);
                if (hook !== undefined) {
                    hook(hook_args);
                }
            }
        }
        return true;
    }
    /*********
     *
     *  Get a truncated history of the recent states and data of the machine.
     *  Turned off by default; configure with `.from('...', {data: 5})` by length,
     *  or set `.history_length` at runtime.
     *
     *  History *does not contain the current state*.  If you want that, call
     *  `.history_inclusive` instead.
     *
     *  ```typescript
     *  const foo = jssm.from(
     *    "a 'next' -> b 'next' -> c 'next' -> d 'next' -> e;",
     *    { history: 3 }
     *  );
     *
     *  foo.action('next');
     *  foo.action('next');
     *  foo.action('next');
     *  foo.action('next');
     *
     *  foo.history;  // [ ['b',undefined], ['c',undefined], ['d',undefined] ]
     *  ```
     *
     *  Notice that the machine's current state, `e`, is not in the returned list.
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     */
    get history() {
        return this._history.toArray();
    }
    /*********
     *
     *  Get a truncated history of the recent states and data of the machine,
     *  including the current state.  Turned off by default; configure with
     *  `.from('...', {data: 5})` by length, or set `.history_length` at runtime.
     *
     *  History inclusive contains the current state.  If you only want past
     *  states, call `.history` instead.
     *
     *  The list returned will be one longer than the history buffer kept, as the
     *  history buffer kept gets the current state added to it to produce this
     *  list.
     *
     *  ```typescript
     *  const foo = jssm.from(
     *    "a 'next' -> b 'next' -> c 'next' -> d 'next' -> e;",
     *    { history: 3 }
     *  );
     *
     *  foo.action('next');
     *  foo.action('next');
     *  foo.action('next');
     *  foo.action('next');
     *
     *  foo.history_inclusive;  // [ ['b',undefined], ['c',undefined], ['d',undefined], ['e',undefined] ]
     *  ```
     *
     *  Notice that the machine's current state, `e`, is in the returned list.
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     */
    get history_inclusive() {
        const ret = this._history.toArray();
        ret.push([this.state(), this.data()]);
        return ret;
    }
    /*********
     *
     *  Find out how long a history this machine is keeping.  Defaults to zero.
     *  Settable directly.
     *
     *  ```typescript
     *  const foo = jssm.from("a -> b;");
     *  foo.history_length;                                  // 0
     *
     *  const bar = jssm.from("a -> b;", { history: 3 });
     *  foo.history_length;                                  // 3
     *  foo.history_length = 5;
     *  foo.history_length;                                  // 5
     *  ```
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     */
    get history_length() {
        return this._history_length;
    }
    set history_length(to) {
        this._history_length = to;
        this._history.resize(to, true);
    }
    /********
     *
     *  Instruct the machine to complete an action.  Synonym for {@link do}.
     *
     *  ```typescript
     *  const light = sm`red 'next' -> green 'next' -> yellow 'next' -> red; [red yellow green] 'shutdown' ~> off 'start' -> red;`;
     *
     *  light.state();               // 'red'
     *  light.action('next');        // true
     *  light.state();               // 'green'
     *  ```
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     *  @param actionName The action to engage
     *
     *  @param newData The data change to insert during the action
     *
     */
    action(actionName, newData) {
        return this.transition_impl(actionName, newData, false, true);
    }
    /********
     *
     *  Instruct the machine to complete an action.  Synonym for {@link action}.
     *
     *  ```typescript
     *  const light = sm`red 'next' -> green 'next' -> yellow 'next' -> red; [red yellow green] 'shutdown' ~> off 'start' -> red;`;
     *
     *  light.state();           // 'red'
     *  light.do('next');        // true
     *  light.state();           // 'green'
     *  ```
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     *  @param actionName The action to engage
     *
     *  @param newData The data change to insert during the action
     *
     */
    do(actionName, newData) {
        return this.transition_impl(actionName, newData, false, true);
    }
    /********
     *
     *  Instruct the machine to complete a transition.  Synonym for {@link go}.
     *
     *  ```typescript
     *  const light = sm`red -> green -> yellow -> red; [red yellow green] 'shutdown' ~> off 'start' -> red;`;
     *
     *  light.state();               // 'red'
     *  light.transition('green');   // true
     *  light.state();               // 'green'
     *  ```
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     *  @param newState The state to switch to
     *
     *  @param newData The data change to insert during the transition
     *
     */
    transition(newState, newData) {
        return this.transition_impl(newState, newData, false, false);
    }
    /********
     *
     *  Instruct the machine to complete a transition.  Synonym for {@link transition}.
     *
     *  ```typescript
     *  const light = sm`red -> green -> yellow -> red; [red yellow green] 'shutdown' ~> off 'start' -> red;`;
     *
     *  light.state();       // 'red'
     *  light.go('green');   // true
     *  light.state();       // 'green'
     *  ```
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     *  @param newState The state to switch to
     *
     *  @param newData The data change to insert during the transition
     *
     */
    go(newState, newData) {
        return this.transition_impl(newState, newData, false, false);
    }
    /********
     *
     *  Instruct the machine to complete a forced transition (which will reject if
     *  called with a normal {@link transition} call.)
     *
     *  ```typescript
     *  const light = sm`red -> green -> yellow -> red; [red yellow green] 'shutdown' ~> off 'start' -> red;`;
     *
     *  light.state();                     // 'red'
     *  light.transition('off');           // false
     *  light.state();                     // 'red'
     *  light.force_transition('off');     // true
     *  light.state();                     // 'off'
     *  ```
     *
     *  @typeparam mDT The type of the machine data member; usually omitted
     *
     *  @param newState The state to switch to
     *
     *  @param newData The data change to insert during the transition
     *
     */
    force_transition(newState, newData) {
        return this.transition_impl(newState, newData, true, false);
    }
    current_action_for(action) {
        const action_base = this._actions.get(action);
        return action_base
            ? action_base.get(this.state())
            : undefined;
    }
    current_action_edge_for(action) {
        const idx = this.current_action_for(action);
        if ((idx === undefined) || (idx === null)) {
            throw new JssmError(this, `No such action ${JSON.stringify(action)}`);
        }
        return this._edges[idx];
    }
    valid_action(action, _newData) {
        // todo whargarbl implement data stuff
        // todo major incomplete whargarbl comeback
        return this.current_action_for(action) !== undefined;
    }
    valid_transition(newState, _newData) {
        // todo whargarbl implement data stuff
        // todo major incomplete whargarbl comeback
        const transition_for = this.lookup_transition_for(this.state(), newState);
        if (!(transition_for)) {
            return false;
        }
        if (transition_for.forced_only) {
            return false;
        }
        return true;
    }
    valid_force_transition(newState, _newData) {
        // todo whargarbl implement data stuff
        // todo major incomplete whargarbl comeback
        return (this.lookup_transition_for(this.state(), newState) !== undefined);
    }
    instance_name() {
        return this._instance_name;
    }
    /* eslint-disable no-use-before-define */
    /* eslint-disable class-methods-use-this */
    sm(template_strings, ...remainder /* , arguments */) {
        return sm$1(template_strings, ...remainder);
    }
}
/*********
 *
 *  Create a state machine from a template string.  This is one of the two main
 *  paths for working with JSSM, alongside {@link from}.
 *
 *  Use this method when you want to work directly and conveniently with a
 *  constant template expression.  Use `.from` when you want to pull from
 *  dynamic strings.
 *
 *
 *  ```typescript
 *  import * as jssm from 'jssm';
 *
 *  const switch = jssm.from('on <=> off;');
 *  ```
 *
 *  @typeparam mDT The type of the machine data member; usually omitted
 *
 *  @param template_strings The assembled code
 *
 *  @param remainder The mechanic for template argument insertion
 *
 */
function sm$1(template_strings, ...remainder /* , arguments */) {
    // foo`a${1}b${2}c` will come in as (['a','b','c'],1,2)
    // this includes when a and c are empty strings
    // therefore template_strings will always have one more el than template_args
    // therefore map the smaller container and toss the last one on on the way out
    return new Machine(make(template_strings.reduce(
    // in general avoiding `arguments` is smart.  however with the template
    // string notation, as designed, it's not really worth the hassle
    /* eslint-disable prefer-rest-params */
    (acc, val, idx) => `${acc}${remainder[idx - 1]}${val}` // arguments[0] is never loaded, so args doesn't need to be gated
    /* eslint-enable  prefer-rest-params */
    )));
}
/*********
 *
 *  Create a state machine from an implementation string.  This is one of the
 *  two main paths for working with JSSM, alongside {@link sm}.
 *
 *  Use this method when you want to conveniently pull a state machine from a
 *  string dynamically.  Use operator `sm` when you just want to work with a
 *  template expression.
 *
 *  ```typescript
 *  import * as jssm from 'jssm';
 *
 *  const switch = jssm.from('on <=> off;');
 *  ```
 *
 *  @typeparam mDT The type of the machine data member; usually omitted
 *
 *  @param MachineAsString The FSL code to evaluate
 *
 *  @param ExtraConstructorFields Extra non-code configuration to pass at creation time
 *
 */
function from(MachineAsString, ExtraConstructorFields) {
    const to_decorate = make(MachineAsString);
    if (ExtraConstructorFields !== undefined) {
        Object.keys(ExtraConstructorFields).map(key => to_decorate[key] = ExtraConstructorFields[key]);
    }
    return new Machine(to_decorate);
}
function is_hook_complex_result(hr) {
    if (typeof hr === 'object') {
        if (typeof hr.pass === 'boolean') {
            return true;
        }
    }
    return false;
}
function is_hook_rejection(hr) {
    if (hr === true) {
        return false;
    }
    if (hr === undefined) {
        return false;
    }
    if (hr === false) {
        return true;
    }
    if (is_hook_complex_result(hr)) {
        return (!(hr.pass));
    }
    throw new TypeError('unknown hook rejection type result');
}
function abstract_hook_step(maybe_hook, hook_args) {
    if (maybe_hook !== undefined) {
        const result = maybe_hook(hook_args);
        if (result === undefined) {
            return { pass: true };
        }
        if (result === true) {
            return { pass: true };
        }
        if (result === false) {
            return { pass: false };
        }
        if (is_hook_complex_result(result)) {
            return result;
        }
        throw new TypeError(`Unknown hook result type ${result}`);
    }
    else {
        return { pass: true };
    }
}
function deserialize(machine_string, ser) {
    const machine = from(machine_string, { data: ser.data, history: ser.history_capacity });
    machine._state = ser.state;
    ser.history.forEach(history_item => machine._history.push(history_item));
    return machine;
}

var jssm = /*#__PURE__*/Object.freeze({
  __proto__: null,
  version: version,
  transfer_state_properties: transfer_state_properties,
  Machine: Machine,
  deserialize: deserialize,
  make: make,
  parse: wrap_parse,
  compile: compile,
  sm: sm$1,
  from: from,
  arrow_direction: arrow_direction,
  arrow_left_kind: arrow_left_kind,
  arrow_right_kind: arrow_right_kind,
  seq: seq,
  weighted_rand_select: weighted_rand_select,
  histograph: histograph,
  weighted_sample_select: weighted_sample_select,
  weighted_histo_key: weighted_histo_key,
  shapes: shapes,
  gviz_shapes: gviz_shapes,
  named_colors: named_colors,
  is_hook_rejection: is_hook_rejection,
  is_hook_complex_result: is_hook_complex_result,
  abstract_hook_step: abstract_hook_step
});

const default_viz_colors = {
    'graph_bg_color': '#eeeeee',
    'fill_final': '#ddddff',
    'fill_terminal': '#ffdddd',
    'fill_complete': '#ddffdd',
    'legal_1': '#888888',
    'legal_2': '#777777',
    'legal_solo': '#777777',
    'legal_final_1': '#7777aa',
    'legal_final_2': '#666699',
    'legal_final_solo': '#666699',
    'legal_terminal_1': '#aa7777',
    'legal_terminal_2': '#996666',
    'legal_terminal_solo': '#996666',
    'legal_complete_1': '#77aa77',
    'legal_complete_2': '#669966',
    'legal_complete_solo': '#669966',
    'main_1': '#444444',
    'main_2': '#333333',
    'main_solo': '#333333',
    'main_final_1': '#333366',
    'main_final_2': '#222255',
    'main_final_solo': '#222255',
    'main_terminal_1': '#663333',
    'main_terminal_2': '#552222',
    'main_terminal_solo': '#552222',
    'main_complete_1': '#336633',
    'main_complete_2': '#225522',
    'main_complete_solo': '#225522',
    'forced_1': '#cccccc',
    'forced_2': '#bbbbbb',
    'forced_solo': '#bbbbbb',
    'forced_final_1': '#bbbbee',
    'forced_final_2': '#aaaadd',
    'forced_final_solo': '#aaaadd',
    'forced_terminal_1': '#eebbbb',
    'forced_terminal_2': '#ddaaaa',
    'forced_terminal_solo': '#ddaaaa',
    'forced_complete_1': '#bbeebb',
    'forced_complete_2': '#aaddaa',
    'forced_complete_solo': '#aaddaa',
    'text_final_1': '#000088',
    'text_final_2': '#000088',
    'text_final_solo': '#000088',
    'text_terminal_1': '#880000',
    'text_terminal_2': '#880000',
    'text_terminal_solo': '#880000',
    'text_complete_1': '#007700',
    'text_complete_2': '#007700',
    'text_complete_solo': '#007700'
};

const sm = sm$1;
function is_worker(w) {
    if ('postMessage' in w) {
        return true;
    }
    return false;
}
let worker, viz;
async function setup() {
    worker = await i();
    if (worker === undefined) {
        throw 'Worker undefined!';
    }
    if (!(is_worker(worker))) {
        throw 'Failed import!';
    }
    viz = new r$1({ worker });
    window.viz = viz;
}
setup();
function dot_to_svg(dot, config, errorHandler) {
    return viz
        .renderString(dot);
}
function dot_template(RankDir, GraphBgColor, nodes, edges, arranges, preamble = "") {
    return `digraph G {
${preamble}

${RankDir}
fontname="Open Sans";
style=filled;
bgcolor="${GraphBgColor}";
node [fontsize=14; shape=box; style=filled; fillcolor=white; fontname="Times New Roman"];
edge [fontsize=6; fontname="Open Sans"];

${nodes}

${edges}

${arranges}
}`;
}
function vc(col) {
    return default_viz_colors[col] || '';
}
function node_of(state, l_states) {
    return `n${l_states.indexOf(state)}`;
}
function color8to6(color8) {
    if (color8.length !== 9) {
        throw 'not a color8';
    }
    if (color8[0] !== '#') {
        throw 'not a color8';
    }
    return `#${color8.substring(1, 7)}`;
}
function u_color8to6(color8) {
    if (color8 === undefined) {
        return undefined;
    }
    return color8to6(color8);
}
function border_color_for_state(u_jssm, state) {
    const decls = u_jssm._state_declarations;
    if (!decls) {
        return undefined;
    }
    const state_decl = decls.get(state);
    if (!state_decl) {
        return undefined;
    }
    return u_color8to6(state_decl.borderColor);
}
function text_color_for_state(u_jssm, state) {
    const decls = u_jssm._state_declarations;
    if (!decls) {
        return undefined;
    }
    const state_decl = decls.get(state);
    if (!state_decl) {
        return undefined;
    }
    return u_color8to6(state_decl.textColor);
}
function shape_for_state(u_jssm, state) {
    const decls = u_jssm._state_declarations;
    if (!decls) {
        return undefined;
    }
    const state_decl = decls.get(state);
    if (!state_decl) {
        return undefined;
    }
    return state_decl.shape;
}
function style_for_state(u_jssm, state) {
    const decls = u_jssm._state_declarations;
    if (!decls) {
        return undefined;
    }
    const state_decl = decls.get(state);
    if (!state_decl) {
        return undefined;
    }
    const corners = {
        rounded: 'rounded',
        lined: 'diagonals'
    }[state_decl.corners];
    const lines = {
        dashed: 'dashed',
        dotted: 'dotted'
    }[state_decl.linestyle];
    const style = [corners, lines]
        .filter(f => f !== '')
        .join(',');
    return style ? `${style},filled` : '';
}
function background_color_for_state(u_jssm, state) {
    const decls = u_jssm._state_declarations;
    if (!decls) {
        return undefined;
    }
    const state_decl = decls.get(state);
    if (!state_decl) {
        return undefined;
    }
    return u_color8to6(state_decl.backgroundColor);
}
function states_to_nodes_string(u_jssm, l_states) {
    return l_states.map((s) => {
        const bordercolor = border_color_for_state(u_jssm, s), bgcolor = background_color_for_state(u_jssm, s), fgcolor = text_color_for_state(u_jssm, s);
        u_jssm.state_for(s); const terminal = u_jssm.state_is_terminal(s), final = u_jssm.state_is_final(s), complete = u_jssm.state_is_complete(s), features = [
            ['label', s],
            ['shape', shape_for_state(u_jssm, s) || ''],
            ['peripheries', complete ? 2 : 1],
            ['color', bordercolor || ''],
            ['style', style_for_state(u_jssm, s) || ''],
            ['fontcolor', fgcolor || ''],
            ['fillcolor', bgcolor ? bgcolor :
                    (final ? vc('fill_final') :
                        (complete ? vc('fill_complete') :
                            (terminal ? vc('fill_terminal') :
                                '')))]
        ]
            .filter(r => r[1])
            .map(r => `${r[0]}="${r[1]}"`)
            .join(' ');
        return `${node_of(s, l_states)} [${features}];`;
    }).join(' ');
}
function states_to_edges_string(u_jssm, l_states, strike) {
    return u_jssm.states().map((s) => u_jssm.list_exits(s).map((ex) => {
        if (strike.find(row => (row[0] === s) && (row[1] == ex))) {
            return '';
        }
        const doublequote = txt => txt.replace('"', '\\"');
        const edge = u_jssm.list_transitions(s, ex), edge_tr = u_jssm.lookup_transition_for(s, ex), pair = u_jssm.list_transitions(ex, s), pair_id = u_jssm.get_transition_by_state_names(ex, s), pair_tr = u_jssm.lookup_transition_for(ex, s), double = pair_id && (s !== ex), if_obj_field = (obj, field) => obj ? (obj[field] || '') : '', h_final = u_jssm.state_is_final(s), h_complete = u_jssm.state_is_complete(s), h_terminal = u_jssm.state_is_terminal(s), t_final = u_jssm.state_is_final(ex), t_complete = u_jssm.state_is_complete(ex), t_terminal = u_jssm.state_is_terminal(ex), lineColor = (final, complete, terminal, lkind, _solo_1_2 = '_solo') => final ? (vc(`${lkind}_final` + _solo_1_2)) :
            (complete ? (vc(`${lkind}_complete` + _solo_1_2)) :
                (terminal ? (vc(`${lkind}_terminal` + _solo_1_2)) :
                    vc(`${lkind}` + _solo_1_2))), textColor = (final, complete, terminal, _solo_1_2 = '_solo') => final ? (vc('text_final' + _solo_1_2)) :
            (complete ? (vc('text_complete' + _solo_1_2)) :
                (terminal ? (vc('text_terminal' + _solo_1_2)) :
                    '')), headColor = textColor(h_final, h_complete, h_terminal, double ? '_1' : '_solo'), tailColor = textColor(t_final, t_complete, t_terminal, double ? '_2' : '_solo'), labelInline = [
            [pair, 'probability', 'headlabel', 'name', 'action', double, headColor],
            [edge, 'probability', 'taillabel', 'name', 'action', true, tailColor]
        ]
            .map(r => ({ which: r[2], whether: (r[5] ? ([(if_obj_field(r[0], r[5])), (if_obj_field(r[0], r[1])), (if_obj_field(r[0], r[3]))].filter(q => q).join('<br/>') || '') : ''), color: r[6] }))
            .filter(present => present.whether)
            .map(r => `${r.which}=${(r.color) ? `<<font color="${(r.color)}">${(r.whether)}</font>>` : `"${(r.whether)}"`};`)
            .join(' '), label = edge_tr ? ([`${((edge_tr.action || ''))}`, `${((edge_tr.probability || ''))}`]
            .filter(not_empty => not_empty !== '')
            .join('\n') || undefined) : undefined, maybeLabel = label ? `taillabel="${doublequote(label)}";` : '', rlabel = pair_tr ? ([`${((pair_tr.action || ''))}`, `${((pair_tr.probability || ''))}`]
            .filter(not_empty => not_empty !== '')
            .join('\n') || undefined) : undefined, maybeRLabel = rlabel ? `headlabel="${doublequote(rlabel)}";` : '', tc1 = lineColor(t_final, t_complete, t_terminal, edge_tr.kind, '_1'), tc2 = lineColor(h_final, h_complete, h_terminal, (pair_tr || {}).kind, '_2'), tcd = lineColor(t_final, t_complete, t_terminal, edge_tr.kind, '_solo'), arrowHead = edge_tr.forced_only ? 'ediamond' : (edge_tr.main_path ? 'normal;weight=5' : 'empty'), arrowTail = pair_tr ? (pair_tr.forced_only ? 'ediamond' : (pair_tr.main_path ? 'normal;weight=5' : 'empty')) : '', edgeInline = edge ? (double ? `${maybeLabel}${maybeRLabel}arrowhead=${arrowHead};arrowtail=${arrowTail};dir=both;color="${tc1}:${tc2}"`
            : `${maybeLabel}arrowhead=${arrowHead};color="${tcd}"`)
            : '';
        if (pair) {
            strike.push([ex, s]);
        }
        return `${node_of(s, l_states)}->${node_of(ex, l_states)} [${labelInline}${edgeInline}];`;
    }).join(' ')).join(' ');
}
function flow_direction_to_rankdir(flow_direction) {
    switch (flow_direction) {
        case 'up': return 'rankdir=BT;';
        case 'right': return 'rankdir=LR;';
        case 'down': return 'rankdir=TB;';
        case 'left': return 'rankdir=RL;';
        default: throw new TypeError(`unknown flow direction '${flow_direction}'`);
    }
}
function arranges_for(u_jssm, l_states) {
    let decl = '';
    if (u_jssm._arrange_declaration) {
        decl += u_jssm._arrange_declaration.map(d => `{rank=same; ${d.map(di => node_of(di, l_states)).join('; ')};};`).join('\n');
    }
    if (u_jssm._arrange_start_declaration) {
        decl += u_jssm._arrange_start_declaration.map(d => `{rank=min; ${d.map(di => node_of(di, l_states)).join('; ')};};`).join('\n');
    }
    if (u_jssm._arrange_end_declaration) {
        decl += u_jssm._arrange_end_declaration.map(d => `{rank=max; ${d.map(di => node_of(di, l_states)).join('; ')};};`).join('\n');
    }
    return decl;
}
function machine_to_dot(u_jssm) {
    const l_states = u_jssm.states();
    const nodes = states_to_nodes_string(u_jssm, l_states);
    const strike = [];
    const edges = states_to_edges_string(u_jssm, l_states, strike);
    const arranges = arranges_for(u_jssm, l_states);
    let RankDir = flow_direction_to_rankdir(u_jssm.flow() || 'down'), preamble = u_jssm.dot_preamble() || '';
    return dot_template(RankDir, vc('graph_bg_color'), nodes, edges, arranges, preamble);
}
function dot(jssm) {
    machine_to_dot(jssm);
}
function fsl_to_dot(fsl) {
    return machine_to_dot(sm `${fsl}`);
}
function fsl_to_svg_string(fsl, errorHandler) {
    return dot_to_svg(fsl_to_dot(fsl));
}

exports.dot = dot;
exports.dot_to_svg = dot_to_svg;
exports.fsl_to_dot = fsl_to_dot;
exports.fsl_to_svg_string = fsl_to_svg_string;
exports.jssm = jssm;
exports.machine_to_dot = machine_to_dot;
//# sourceMappingURL=jssm-viz.cjs.js.map
