(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const g of c)if(g.type==="childList")for(const f of g.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function u(c){const g={};return c.integrity&&(g.integrity=c.integrity),c.referrerPolicy&&(g.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?g.credentials="include":c.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function r(c){if(c.ep)return;c.ep=!0;const g=u(c);fetch(c.href,g)}})();function wf(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Cr={exports:{}},Nn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c;function mp(){if($c)return Nn;$c=1;var i=Symbol.for("react.transitional.element"),h=Symbol.for("react.fragment");function u(r,c,g){var f=null;if(g!==void 0&&(f=""+g),c.key!==void 0&&(f=""+c.key),"key"in c){g={};for(var T in c)T!=="key"&&(g[T]=c[T])}else g=c;return c=g.ref,{$$typeof:i,type:r,key:f,ref:c!==void 0?c:null,props:g}}return Nn.Fragment=h,Nn.jsx=u,Nn.jsxs=u,Nn}var Pc;function gp(){return Pc||(Pc=1,Cr.exports=mp()),Cr.exports}var S=gp(),jr={exports:{}},$={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef;function pp(){if(ef)return $;ef=1;var i=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),f=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),D=Symbol.iterator;function U(y){return y===null||typeof y!="object"?null:(y=D&&y[D]||y["@@iterator"],typeof y=="function"?y:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,G={};function V(y,O,_){this.props=y,this.context=O,this.refs=G,this.updater=_||q}V.prototype.isReactComponent={},V.prototype.setState=function(y,O){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,O,"setState")},V.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function F(){}F.prototype=V.prototype;function H(y,O,_){this.props=y,this.context=O,this.refs=G,this.updater=_||q}var Q=H.prototype=new F;Q.constructor=H,B(Q,V.prototype),Q.isPureReactComponent=!0;var oe=Array.isArray;function Te(){}var P={H:null,A:null,T:null,S:null},Me=Object.prototype.hasOwnProperty;function _e(y,O,_){var Y=_.ref;return{$$typeof:i,type:y,key:O,ref:Y!==void 0?Y:null,props:_}}function mt(y,O){return _e(y.type,O,y.props)}function Ct(y){return typeof y=="object"&&y!==null&&y.$$typeof===i}function Je(y){var O={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(_){return O[_]})}var Ca=/\/+/g;function qt(y,O){return typeof y=="object"&&y!==null&&y.key!=null?Je(""+y.key):O.toString(36)}function It(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Te,Te):(y.status="pending",y.then(function(O){y.status==="pending"&&(y.status="fulfilled",y.value=O)},function(O){y.status==="pending"&&(y.status="rejected",y.reason=O)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function C(y,O,_,Y,ee){var se=typeof y;(se==="undefined"||se==="boolean")&&(y=null);var fe=!1;if(y===null)fe=!0;else switch(se){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(y.$$typeof){case i:case h:fe=!0;break;case M:return fe=y._init,C(fe(y._payload),O,_,Y,ee)}}if(fe)return ee=ee(y),fe=Y===""?"."+qt(y,0):Y,oe(ee)?(_="",fe!=null&&(_=fe.replace(Ca,"$&/")+"/"),C(ee,O,_,"",function(Ks){return Ks})):ee!=null&&(Ct(ee)&&(ee=mt(ee,_+(ee.key==null||y&&y.key===ee.key?"":(""+ee.key).replace(Ca,"$&/")+"/")+fe)),O.push(ee)),1;fe=0;var Xe=Y===""?".":Y+":";if(oe(y))for(var ze=0;ze<y.length;ze++)Y=y[ze],se=Xe+qt(Y,ze),fe+=C(Y,O,_,se,ee);else if(ze=U(y),typeof ze=="function")for(y=ze.call(y),ze=0;!(Y=y.next()).done;)Y=Y.value,se=Xe+qt(Y,ze++),fe+=C(Y,O,_,se,ee);else if(se==="object"){if(typeof y.then=="function")return C(It(y),O,_,Y,ee);throw O=String(y),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return fe}function K(y,O,_){if(y==null)return y;var Y=[],ee=0;return C(y,Y,"","",function(se){return O.call(_,se,ee++)}),Y}function J(y){if(y._status===-1){var O=y._result;O=O(),O.then(function(_){(y._status===0||y._status===-1)&&(y._status=1,y._result=_)},function(_){(y._status===0||y._status===-1)&&(y._status=2,y._result=_)}),y._status===-1&&(y._status=0,y._result=O)}if(y._status===1)return y._result.default;throw y._result}var pe=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},xe={map:K,forEach:function(y,O,_){K(y,function(){O.apply(this,arguments)},_)},count:function(y){var O=0;return K(y,function(){O++}),O},toArray:function(y){return K(y,function(O){return O})||[]},only:function(y){if(!Ct(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return $.Activity=I,$.Children=xe,$.Component=V,$.Fragment=u,$.Profiler=c,$.PureComponent=H,$.StrictMode=r,$.Suspense=w,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,$.__COMPILER_RUNTIME={__proto__:null,c:function(y){return P.H.useMemoCache(y)}},$.cache=function(y){return function(){return y.apply(null,arguments)}},$.cacheSignal=function(){return null},$.cloneElement=function(y,O,_){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var Y=B({},y.props),ee=y.key;if(O!=null)for(se in O.key!==void 0&&(ee=""+O.key),O)!Me.call(O,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&O.ref===void 0||(Y[se]=O[se]);var se=arguments.length-2;if(se===1)Y.children=_;else if(1<se){for(var fe=Array(se),Xe=0;Xe<se;Xe++)fe[Xe]=arguments[Xe+2];Y.children=fe}return _e(y.type,ee,Y)},$.createContext=function(y){return y={$$typeof:f,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:g,_context:y},y},$.createElement=function(y,O,_){var Y,ee={},se=null;if(O!=null)for(Y in O.key!==void 0&&(se=""+O.key),O)Me.call(O,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(ee[Y]=O[Y]);var fe=arguments.length-2;if(fe===1)ee.children=_;else if(1<fe){for(var Xe=Array(fe),ze=0;ze<fe;ze++)Xe[ze]=arguments[ze+2];ee.children=Xe}if(y&&y.defaultProps)for(Y in fe=y.defaultProps,fe)ee[Y]===void 0&&(ee[Y]=fe[Y]);return _e(y,se,ee)},$.createRef=function(){return{current:null}},$.forwardRef=function(y){return{$$typeof:T,render:y}},$.isValidElement=Ct,$.lazy=function(y){return{$$typeof:M,_payload:{_status:-1,_result:y},_init:J}},$.memo=function(y,O){return{$$typeof:p,type:y,compare:O===void 0?null:O}},$.startTransition=function(y){var O=P.T,_={};P.T=_;try{var Y=y(),ee=P.S;ee!==null&&ee(_,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(Te,pe)}catch(se){pe(se)}finally{O!==null&&_.types!==null&&(O.types=_.types),P.T=O}},$.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},$.use=function(y){return P.H.use(y)},$.useActionState=function(y,O,_){return P.H.useActionState(y,O,_)},$.useCallback=function(y,O){return P.H.useCallback(y,O)},$.useContext=function(y){return P.H.useContext(y)},$.useDebugValue=function(){},$.useDeferredValue=function(y,O){return P.H.useDeferredValue(y,O)},$.useEffect=function(y,O){return P.H.useEffect(y,O)},$.useEffectEvent=function(y){return P.H.useEffectEvent(y)},$.useId=function(){return P.H.useId()},$.useImperativeHandle=function(y,O,_){return P.H.useImperativeHandle(y,O,_)},$.useInsertionEffect=function(y,O){return P.H.useInsertionEffect(y,O)},$.useLayoutEffect=function(y,O){return P.H.useLayoutEffect(y,O)},$.useMemo=function(y,O){return P.H.useMemo(y,O)},$.useOptimistic=function(y,O){return P.H.useOptimistic(y,O)},$.useReducer=function(y,O,_){return P.H.useReducer(y,O,_)},$.useRef=function(y){return P.H.useRef(y)},$.useState=function(y){return P.H.useState(y)},$.useSyncExternalStore=function(y,O,_){return P.H.useSyncExternalStore(y,O,_)},$.useTransition=function(){return P.H.useTransition()},$.version="19.2.4",$}var tf;function Gr(){return tf||(tf=1,jr.exports=pp()),jr.exports}var E=Gr();const bp=wf(E);var Nr={exports:{}},On={},Or={exports:{}},Br={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af;function yp(){return af||(af=1,(function(i){function h(C,K){var J=C.length;C.push(K);e:for(;0<J;){var pe=J-1>>>1,xe=C[pe];if(0<c(xe,K))C[pe]=K,C[J]=xe,J=pe;else break e}}function u(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var K=C[0],J=C.pop();if(J!==K){C[0]=J;e:for(var pe=0,xe=C.length,y=xe>>>1;pe<y;){var O=2*(pe+1)-1,_=C[O],Y=O+1,ee=C[Y];if(0>c(_,J))Y<xe&&0>c(ee,_)?(C[pe]=ee,C[Y]=J,pe=Y):(C[pe]=_,C[O]=J,pe=O);else if(Y<xe&&0>c(ee,J))C[pe]=ee,C[Y]=J,pe=Y;else break e}}return K}function c(C,K){var J=C.sortIndex-K.sortIndex;return J!==0?J:C.id-K.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;i.unstable_now=function(){return g.now()}}else{var f=Date,T=f.now();i.unstable_now=function(){return f.now()-T}}var w=[],p=[],M=1,I=null,D=3,U=!1,q=!1,B=!1,G=!1,V=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function Q(C){for(var K=u(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=C)r(p),K.sortIndex=K.expirationTime,h(w,K);else break;K=u(p)}}function oe(C){if(B=!1,Q(C),!q)if(u(w)!==null)q=!0,Te||(Te=!0,Je());else{var K=u(p);K!==null&&It(oe,K.startTime-C)}}var Te=!1,P=-1,Me=5,_e=-1;function mt(){return G?!0:!(i.unstable_now()-_e<Me)}function Ct(){if(G=!1,Te){var C=i.unstable_now();_e=C;var K=!0;try{e:{q=!1,B&&(B=!1,F(P),P=-1),U=!0;var J=D;try{t:{for(Q(C),I=u(w);I!==null&&!(I.expirationTime>C&&mt());){var pe=I.callback;if(typeof pe=="function"){I.callback=null,D=I.priorityLevel;var xe=pe(I.expirationTime<=C);if(C=i.unstable_now(),typeof xe=="function"){I.callback=xe,Q(C),K=!0;break t}I===u(w)&&r(w),Q(C)}else r(w);I=u(w)}if(I!==null)K=!0;else{var y=u(p);y!==null&&It(oe,y.startTime-C),K=!1}}break e}finally{I=null,D=J,U=!1}K=void 0}}finally{K?Je():Te=!1}}}var Je;if(typeof H=="function")Je=function(){H(Ct)};else if(typeof MessageChannel<"u"){var Ca=new MessageChannel,qt=Ca.port2;Ca.port1.onmessage=Ct,Je=function(){qt.postMessage(null)}}else Je=function(){V(Ct,0)};function It(C,K){P=V(function(){C(i.unstable_now())},K)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(C){C.callback=null},i.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Me=0<C?Math.floor(1e3/C):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_next=function(C){switch(D){case 1:case 2:case 3:var K=3;break;default:K=D}var J=D;D=K;try{return C()}finally{D=J}},i.unstable_requestPaint=function(){G=!0},i.unstable_runWithPriority=function(C,K){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var J=D;D=C;try{return K()}finally{D=J}},i.unstable_scheduleCallback=function(C,K,J){var pe=i.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?pe+J:pe):J=pe,C){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=J+xe,C={id:M++,callback:K,priorityLevel:C,startTime:J,expirationTime:xe,sortIndex:-1},J>pe?(C.sortIndex=J,h(p,C),u(w)===null&&C===u(p)&&(B?(F(P),P=-1):B=!0,It(oe,J-pe))):(C.sortIndex=xe,h(w,C),q||U||(q=!0,Te||(Te=!0,Je()))),C},i.unstable_shouldYield=mt,i.unstable_wrapCallback=function(C){var K=D;return function(){var J=D;D=K;try{return C.apply(this,arguments)}finally{D=J}}}})(Br)),Br}var sf;function wp(){return sf||(sf=1,Or.exports=yp()),Or.exports}var Dr={exports:{}},Ve={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function xp(){if(nf)return Ve;nf=1;var i=Gr();function h(w){var p="https://react.dev/errors/"+w;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)p+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+w+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var r={d:{f:u,r:function(){throw Error(h(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function g(w,p,M){var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:I==null?null:""+I,children:w,containerInfo:p,implementation:M}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(w,p){if(w==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ve.createPortal=function(w,p){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(h(299));return g(w,p,null,M)},Ve.flushSync=function(w){var p=f.T,M=r.p;try{if(f.T=null,r.p=2,w)return w()}finally{f.T=p,r.p=M,r.d.f()}},Ve.preconnect=function(w,p){typeof w=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(w,p))},Ve.prefetchDNS=function(w){typeof w=="string"&&r.d.D(w)},Ve.preinit=function(w,p){if(typeof w=="string"&&p&&typeof p.as=="string"){var M=p.as,I=T(M,p.crossOrigin),D=typeof p.integrity=="string"?p.integrity:void 0,U=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;M==="style"?r.d.S(w,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:I,integrity:D,fetchPriority:U}):M==="script"&&r.d.X(w,{crossOrigin:I,integrity:D,fetchPriority:U,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ve.preinitModule=function(w,p){if(typeof w=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var M=T(p.as,p.crossOrigin);r.d.M(w,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(w)},Ve.preload=function(w,p){if(typeof w=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var M=p.as,I=T(M,p.crossOrigin);r.d.L(w,M,{crossOrigin:I,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ve.preloadModule=function(w,p){if(typeof w=="string")if(p){var M=T(p.as,p.crossOrigin);r.d.m(w,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(w)},Ve.requestFormReset=function(w){r.d.r(w)},Ve.unstable_batchedUpdates=function(w,p){return w(p)},Ve.useFormState=function(w,p,M){return f.H.useFormState(w,p,M)},Ve.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ve.version="19.2.4",Ve}var lf;function vp(){if(lf)return Dr.exports;lf=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(h){console.error(h)}}return i(),Dr.exports=xp(),Dr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of;function kp(){if(of)return On;of=1;var i=wp(),h=Gr(),u=vp();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(g(e)!==e)throw Error(r(188))}function p(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,s=t;;){var n=a.return;if(n===null)break;var l=n.alternate;if(l===null){if(s=n.return,s!==null){a=s;continue}break}if(n.child===l.child){for(l=n.child;l;){if(l===a)return w(n),e;if(l===s)return w(n),t;l=l.sibling}throw Error(r(188))}if(a.return!==s.return)a=n,s=l;else{for(var o=!1,d=n.child;d;){if(d===a){o=!0,a=n,s=l;break}if(d===s){o=!0,s=n,a=l;break}d=d.sibling}if(!o){for(d=l.child;d;){if(d===a){o=!0,a=l,s=n;break}if(d===s){o=!0,s=l,a=n;break}d=d.sibling}if(!o)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function M(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=M(e),t!==null)return t;e=e.sibling}return null}var I=Object.assign,D=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),H=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),_e=Symbol.for("react.activity"),mt=Symbol.for("react.memo_cache_sentinel"),Ct=Symbol.iterator;function Je(e){return e===null||typeof e!="object"?null:(e=Ct&&e[Ct]||e["@@iterator"],typeof e=="function"?e:null)}var Ca=Symbol.for("react.client.reference");function qt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ca?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case V:return"Profiler";case G:return"StrictMode";case oe:return"Suspense";case Te:return"SuspenseList";case _e:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case H:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case Q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:qt(e.type)||"Memo";case Me:t=e._payload,e=e._init;try{return qt(e(t))}catch{}}return null}var It=Array.isArray,C=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},pe=[],xe=-1;function y(e){return{current:e}}function O(e){0>xe||(e.current=pe[xe],pe[xe]=null,xe--)}function _(e,t){xe++,pe[xe]=e.current,e.current=t}var Y=y(null),ee=y(null),se=y(null),fe=y(null);function Xe(e,t){switch(_(se,t),_(ee,e),_(Y,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vc(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vc(t),e=kc(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(Y),_(Y,e)}function ze(){O(Y),O(ee),O(se)}function Ks(e){e.memoizedState!==null&&_(fe,e);var t=Y.current,a=kc(t,e.type);t!==a&&(_(ee,e),_(Y,a))}function Hn(e){ee.current===e&&(O(Y),O(ee)),fe.current===e&&(O(fe),Mn._currentValue=J)}var fo,Fr;function ja(e){if(fo===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);fo=t&&t[1]||"",Fr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fo+e+Fr}var mo=!1;function go(e,t){if(!e||mo)return"";mo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(A){var R=A}Reflect.construct(e,[],N)}else{try{N.call()}catch(A){R=A}e.call(N.prototype)}}else{try{throw Error()}catch(A){R=A}(N=e())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(A){if(A&&R&&typeof A.stack=="string")return[A.stack,R.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=s.DetermineComponentFrameRoot(),o=l[0],d=l[1];if(o&&d){var m=o.split(`
`),k=d.split(`
`);for(n=s=0;s<m.length&&!m[s].includes("DetermineComponentFrameRoot");)s++;for(;n<k.length&&!k[n].includes("DetermineComponentFrameRoot");)n++;if(s===m.length||n===k.length)for(s=m.length-1,n=k.length-1;1<=s&&0<=n&&m[s]!==k[n];)n--;for(;1<=s&&0<=n;s--,n--)if(m[s]!==k[n]){if(s!==1||n!==1)do if(s--,n--,0>n||m[s]!==k[n]){var z=`
`+m[s].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=s&&0<=n);break}}}finally{mo=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ja(a):""}function Wf(e,t){switch(e.tag){case 26:case 27:case 5:return ja(e.type);case 16:return ja("Lazy");case 13:return e.child!==t&&t!==null?ja("Suspense Fallback"):ja("Suspense");case 19:return ja("SuspenseList");case 0:case 15:return go(e.type,!1);case 11:return go(e.type.render,!1);case 1:return go(e.type,!0);case 31:return ja("Activity");default:return""}}function $r(e){try{var t="",a=null;do t+=Wf(e,a),a=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var po=Object.prototype.hasOwnProperty,bo=i.unstable_scheduleCallback,yo=i.unstable_cancelCallback,Vf=i.unstable_shouldYield,Xf=i.unstable_requestPaint,nt=i.unstable_now,Qf=i.unstable_getCurrentPriorityLevel,Pr=i.unstable_ImmediatePriority,ed=i.unstable_UserBlockingPriority,Ln=i.unstable_NormalPriority,Zf=i.unstable_LowPriority,td=i.unstable_IdlePriority,Jf=i.log,Ff=i.unstable_setDisableYieldValue,_s=null,lt=null;function la(e){if(typeof Jf=="function"&&Ff(e),lt&&typeof lt.setStrictMode=="function")try{lt.setStrictMode(_s,e)}catch{}}var ot=Math.clz32?Math.clz32:em,$f=Math.log,Pf=Math.LN2;function em(e){return e>>>=0,e===0?32:31-($f(e)/Pf|0)|0}var Gn=256,Yn=262144,Wn=4194304;function Na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vn(e,t,a){var s=e.pendingLanes;if(s===0)return 0;var n=0,l=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var d=s&134217727;return d!==0?(s=d&~l,s!==0?n=Na(s):(o&=d,o!==0?n=Na(o):a||(a=d&~e,a!==0&&(n=Na(a))))):(d=s&~l,d!==0?n=Na(d):o!==0?n=Na(o):a||(a=s&~e,a!==0&&(n=Na(a)))),n===0?0:t!==0&&t!==n&&(t&l)===0&&(l=n&-n,a=t&-t,l>=a||l===32&&(a&4194048)!==0)?t:n}function Hs(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ad(){var e=Wn;return Wn<<=1,(Wn&62914560)===0&&(Wn=4194304),e}function wo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ls(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function am(e,t,a,s,n,l){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,m=e.expirationTimes,k=e.hiddenUpdates;for(a=o&~a;0<a;){var z=31-ot(a),N=1<<z;d[z]=0,m[z]=-1;var R=k[z];if(R!==null)for(k[z]=null,z=0;z<R.length;z++){var A=R[z];A!==null&&(A.lane&=-536870913)}a&=~N}s!==0&&sd(e,s,0),l!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=l&~(o&~t))}function sd(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-ot(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function nd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var s=31-ot(a),n=1<<s;n&t|e[s]&t&&(e[s]|=t),a&=~n}}function ld(e,t){var a=t&-t;return a=(a&42)!==0?1:xo(a),(a&(e.suspendedLanes|t))!==0?0:a}function xo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function od(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Wc(e.type))}function id(e,t){var a=K.p;try{return K.p=e,t()}finally{K.p=a}}var oa=Math.random().toString(36).slice(2),He="__reactFiber$"+oa,Fe="__reactProps$"+oa,Pa="__reactContainer$"+oa,ko="__reactEvents$"+oa,sm="__reactListeners$"+oa,nm="__reactHandles$"+oa,rd="__reactResources$"+oa,Gs="__reactMarker$"+oa;function So(e){delete e[He],delete e[Fe],delete e[ko],delete e[sm],delete e[nm]}function es(e){var t=e[He];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Pa]||a[He]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Mc(e);e!==null;){if(a=e[He])return a;e=Mc(e)}return t}e=a,a=e.parentNode}return null}function ts(e){if(e=e[He]||e[Pa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ys(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function as(e){var t=e[rd];return t||(t=e[rd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[Gs]=!0}var dd=new Set,hd={};function Oa(e,t){ss(e,t),ss(e+"Capture",t)}function ss(e,t){for(hd[e]=t,e=0;e<t.length;e++)dd.add(t[e])}var lm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ud={},cd={};function om(e){return po.call(cd,e)?!0:po.call(ud,e)?!1:lm.test(e)?cd[e]=!0:(ud[e]=!0,!1)}function Xn(e,t,a){if(om(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Qn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Kt(e,t,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+s)}}function gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function im(e,t,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var n=s.get,l=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function To(e){if(!e._valueTracker){var t=fd(e)?"checked":"value";e._valueTracker=im(e,t,""+e[t])}}function md(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),s="";return e&&(s=fd(e)?e.checked?"true":"false":e.value),e=s,e!==a?(t.setValue(e),!0):!1}function Zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var rm=/[\n"\\]/g;function pt(e){return e.replace(rm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ro(e,t,a,s,n,l,o,d){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gt(t)):e.value!==""+gt(t)&&(e.value=""+gt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Io(e,o,gt(t)):a!=null?Io(e,o,gt(a)):s!=null&&e.removeAttribute("value"),n==null&&l!=null&&(e.defaultChecked=!!l),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+gt(d):e.removeAttribute("name")}function gd(e,t,a,s,n,l,o,d){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){To(e);return}a=a!=null?""+gt(a):"",t=t!=null?""+gt(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}s=s??n,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=d?e.checked:!!s,e.defaultChecked=!!s,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),To(e)}function Io(e,t,a){t==="number"&&Zn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ns(e,t,a,s){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&s&&(e[a].defaultSelected=!0)}else{for(a=""+gt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,s&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function pd(e,t,a){if(t!=null&&(t=""+gt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+gt(a):""}function bd(e,t,a,s){if(t==null){if(s!=null){if(a!=null)throw Error(r(92));if(It(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),t=a}a=gt(t),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),To(e)}function ls(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var dm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yd(e,t,a){var s=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,a):typeof a!="number"||a===0||dm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function wd(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var n in t)s=t[n],t.hasOwnProperty(n)&&a[n]!==s&&yd(e,n,s)}else for(var l in t)t.hasOwnProperty(l)&&yd(e,l,t[l])}function Ao(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),um=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jn(e){return um.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _t(){}var Eo=null;function Mo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var os=null,is=null;function xd(e){var t=ts(e);if(t&&(e=t.stateNode)){var a=e[Fe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ro(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var s=a[t];if(s!==e&&s.form===e.form){var n=s[Fe]||null;if(!n)throw Error(r(90));Ro(s,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)s=a[t],s.form===e.form&&md(s)}break e;case"textarea":pd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ns(e,!!a.multiple,t,!1)}}}var zo=!1;function vd(e,t,a){if(zo)return e(t,a);zo=!0;try{var s=e(t);return s}finally{if(zo=!1,(os!==null||is!==null)&&(Ul(),os&&(t=os,e=is,is=os=null,xd(t),e)))for(t=0;t<e.length;t++)xd(e[t])}}function Ws(e,t){var a=e.stateNode;if(a===null)return null;var s=a[Fe]||null;if(s===null)return null;a=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Co=!1;if(Ht)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){Co=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{Co=!1}var ia=null,jo=null,Fn=null;function kd(){if(Fn)return Fn;var e,t=jo,a=t.length,s,n="value"in ia?ia.value:ia.textContent,l=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(s=1;s<=o&&t[a-s]===n[l-s];s++);return Fn=n.slice(e,1<s?1-s:void 0)}function $n(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pn(){return!0}function Sd(){return!1}function $e(e){function t(a,s,n,l,o){this._reactName=a,this._targetInst=n,this.type=s,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Pn:Sd,this.isPropagationStopped=Sd,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),t}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=$e(Ba),Xs=I({},Ba,{view:0,detail:0}),cm=$e(Xs),No,Oo,Qs,tl=I({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Do,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qs&&(Qs&&e.type==="mousemove"?(No=e.screenX-Qs.screenX,Oo=e.screenY-Qs.screenY):Oo=No=0,Qs=e),No)},movementY:function(e){return"movementY"in e?e.movementY:Oo}}),Td=$e(tl),fm=I({},tl,{dataTransfer:0}),mm=$e(fm),gm=I({},Xs,{relatedTarget:0}),Bo=$e(gm),pm=I({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),bm=$e(pm),ym=I({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wm=$e(ym),xm=I({},Ba,{data:0}),Rd=$e(xm),vm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sm[e])?!!t[e]:!1}function Do(){return Tm}var Rm=I({},Xs,{key:function(e){if(e.key){var t=vm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$n(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?km[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Do,charCode:function(e){return e.type==="keypress"?$n(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$n(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Im=$e(Rm),Am=I({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Id=$e(Am),Em=I({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Do}),Mm=$e(Em),zm=I({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cm=$e(zm),jm=I({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nm=$e(jm),Om=I({},Ba,{newState:0,oldState:0}),Bm=$e(Om),Dm=[9,13,27,32],Uo=Ht&&"CompositionEvent"in window,Zs=null;Ht&&"documentMode"in document&&(Zs=document.documentMode);var Um=Ht&&"TextEvent"in window&&!Zs,Ad=Ht&&(!Uo||Zs&&8<Zs&&11>=Zs),Ed=" ",Md=!1;function zd(e,t){switch(e){case"keyup":return Dm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rs=!1;function qm(e,t){switch(e){case"compositionend":return Cd(t);case"keypress":return t.which!==32?null:(Md=!0,Ed);case"textInput":return e=t.data,e===Ed&&Md?null:e;default:return null}}function Km(e,t){if(rs)return e==="compositionend"||!Uo&&zd(e,t)?(e=kd(),Fn=jo=ia=null,rs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ad&&t.locale!=="ko"?null:t.data;default:return null}}var _m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_m[e.type]:t==="textarea"}function Nd(e,t,a,s){os?is?is.push(s):is=[s]:os=s,t=Yl(t,"onChange"),0<t.length&&(a=new el("onChange","change",null,a,s),e.push({event:a,listeners:t}))}var Js=null,Fs=null;function Hm(e){gc(e,0)}function al(e){var t=Ys(e);if(md(t))return e}function Od(e,t){if(e==="change")return t}var Bd=!1;if(Ht){var qo;if(Ht){var Ko="oninput"in document;if(!Ko){var Dd=document.createElement("div");Dd.setAttribute("oninput","return;"),Ko=typeof Dd.oninput=="function"}qo=Ko}else qo=!1;Bd=qo&&(!document.documentMode||9<document.documentMode)}function Ud(){Js&&(Js.detachEvent("onpropertychange",qd),Fs=Js=null)}function qd(e){if(e.propertyName==="value"&&al(Fs)){var t=[];Nd(t,Fs,e,Mo(e)),vd(Hm,t)}}function Lm(e,t,a){e==="focusin"?(Ud(),Js=t,Fs=a,Js.attachEvent("onpropertychange",qd)):e==="focusout"&&Ud()}function Gm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Fs)}function Ym(e,t){if(e==="click")return al(t)}function Wm(e,t){if(e==="input"||e==="change")return al(t)}function Vm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:Vm;function $s(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var n=a[s];if(!po.call(t,n)||!it(e[n],t[n]))return!1}return!0}function Kd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _d(e,t){var a=Kd(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=t&&s>=t)return{node:a,offset:t-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Kd(a)}}function Hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ld(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Zn(e.document)}return t}function _o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Xm=Ht&&"documentMode"in document&&11>=document.documentMode,ds=null,Ho=null,Ps=null,Lo=!1;function Gd(e,t,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lo||ds==null||ds!==Zn(s)||(s=ds,"selectionStart"in s&&_o(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ps&&$s(Ps,s)||(Ps=s,s=Yl(Ho,"onSelect"),0<s.length&&(t=new el("onSelect","select",null,t,a),e.push({event:t,listeners:s}),t.target=ds)))}function Da(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var hs={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},Go={},Yd={};Ht&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Ua(e){if(Go[e])return Go[e];if(!hs[e])return e;var t=hs[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Yd)return Go[e]=t[a];return e}var Wd=Ua("animationend"),Vd=Ua("animationiteration"),Xd=Ua("animationstart"),Qm=Ua("transitionrun"),Zm=Ua("transitionstart"),Jm=Ua("transitioncancel"),Qd=Ua("transitionend"),Zd=new Map,Yo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yo.push("scrollEnd");function At(e,t){Zd.set(e,t),Oa(t,[e])}var sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bt=[],us=0,Wo=0;function nl(){for(var e=us,t=Wo=us=0;t<e;){var a=bt[t];bt[t++]=null;var s=bt[t];bt[t++]=null;var n=bt[t];bt[t++]=null;var l=bt[t];if(bt[t++]=null,s!==null&&n!==null){var o=s.pending;o===null?n.next=n:(n.next=o.next,o.next=n),s.pending=n}l!==0&&Jd(a,n,l)}}function ll(e,t,a,s){bt[us++]=e,bt[us++]=t,bt[us++]=a,bt[us++]=s,Wo|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Vo(e,t,a,s){return ll(e,t,a,s),ol(e)}function qa(e,t){return ll(e,null,null,t),ol(e)}function Jd(e,t,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var n=!1,l=e.return;l!==null;)l.childLanes|=a,s=l.alternate,s!==null&&(s.childLanes|=a),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(n=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,n&&t!==null&&(n=31-ot(a),e=l.hiddenUpdates,s=e[n],s===null?e[n]=[t]:s.push(t),t.lane=a|536870912),l):null}function ol(e){if(50<kn)throw kn=0,tr=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var cs={};function Fm(e,t,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,a,s){return new Fm(e,t,a,s)}function Xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lt(e,t){var a=e.alternate;return a===null?(a=rt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Fd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function il(e,t,a,s,n,l){var o=0;if(s=e,typeof e=="function")Xo(e)&&(o=1);else if(typeof e=="string")o=ap(e,a,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case _e:return e=rt(31,a,t,n),e.elementType=_e,e.lanes=l,e;case B:return Ka(a.children,n,l,t);case G:o=8,n|=24;break;case V:return e=rt(12,a,t,n|2),e.elementType=V,e.lanes=l,e;case oe:return e=rt(13,a,t,n),e.elementType=oe,e.lanes=l,e;case Te:return e=rt(19,a,t,n),e.elementType=Te,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:o=10;break e;case F:o=9;break e;case Q:o=11;break e;case P:o=14;break e;case Me:o=16,s=null;break e}o=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return t=rt(o,a,t,n),t.elementType=e,t.type=s,t.lanes=l,t}function Ka(e,t,a,s){return e=rt(7,e,s,t),e.lanes=a,e}function Qo(e,t,a){return e=rt(6,e,null,t),e.lanes=a,e}function $d(e){var t=rt(18,null,null,0);return t.stateNode=e,t}function Zo(e,t,a){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pd=new WeakMap;function yt(e,t){if(typeof e=="object"&&e!==null){var a=Pd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:$r(t)},Pd.set(e,t),t)}return{value:e,source:t,stack:$r(t)}}var fs=[],ms=0,rl=null,en=0,wt=[],xt=0,ra=null,jt=1,Nt="";function Gt(e,t){fs[ms++]=en,fs[ms++]=rl,rl=e,en=t}function eh(e,t,a){wt[xt++]=jt,wt[xt++]=Nt,wt[xt++]=ra,ra=e;var s=jt;e=Nt;var n=32-ot(s)-1;s&=~(1<<n),a+=1;var l=32-ot(t)+n;if(30<l){var o=n-n%5;l=(s&(1<<o)-1).toString(32),s>>=o,n-=o,jt=1<<32-ot(t)+n|a<<n|s,Nt=l+e}else jt=1<<l|a<<n|s,Nt=e}function Jo(e){e.return!==null&&(Gt(e,1),eh(e,1,0))}function Fo(e){for(;e===rl;)rl=fs[--ms],fs[ms]=null,en=fs[--ms],fs[ms]=null;for(;e===ra;)ra=wt[--xt],wt[xt]=null,Nt=wt[--xt],wt[xt]=null,jt=wt[--xt],wt[xt]=null}function th(e,t){wt[xt++]=jt,wt[xt++]=Nt,wt[xt++]=ra,jt=t.id,Nt=t.overflow,ra=e}var Le=null,ke=null,de=!1,da=null,vt=!1,$o=Error(r(519));function ha(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tn(yt(t,e)),$o}function ah(e){var t=e.stateNode,a=e.type,s=e.memoizedProps;switch(t[He]=e,t[Fe]=s,a){case"dialog":le("cancel",t),le("close",t);break;case"iframe":case"object":case"embed":le("load",t);break;case"video":case"audio":for(a=0;a<Tn.length;a++)le(Tn[a],t);break;case"source":le("error",t);break;case"img":case"image":case"link":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"input":le("invalid",t),gd(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":le("invalid",t);break;case"textarea":le("invalid",t),bd(t,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||s.suppressHydrationWarning===!0||wc(t.textContent,a)?(s.popover!=null&&(le("beforetoggle",t),le("toggle",t)),s.onScroll!=null&&le("scroll",t),s.onScrollEnd!=null&&le("scrollend",t),s.onClick!=null&&(t.onclick=_t),t=!0):t=!1,t||ha(e,!0)}function sh(e){for(Le=e.return;Le;)switch(Le.tag){case 5:case 31:case 13:vt=!1;return;case 27:case 3:vt=!0;return;default:Le=Le.return}}function gs(e){if(e!==Le)return!1;if(!de)return sh(e),de=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||pr(e.type,e.memoizedProps)),a=!a),a&&ke&&ha(e),sh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ke=Ec(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ke=Ec(e)}else t===27?(t=ke,Ta(e.type)?(e=vr,vr=null,ke=e):ke=t):ke=Le?St(e.stateNode.nextSibling):null;return!0}function _a(){ke=Le=null,de=!1}function Po(){var e=da;return e!==null&&(at===null?at=e:at.push.apply(at,e),da=null),e}function tn(e){da===null?da=[e]:da.push(e)}var ei=y(null),Ha=null,Yt=null;function ua(e,t,a){_(ei,t._currentValue),t._currentValue=a}function Wt(e){e._currentValue=ei.current,O(ei)}function ti(e,t,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===a)break;e=e.return}}function ai(e,t,a,s){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var l=n.dependencies;if(l!==null){var o=n.child;l=l.firstContext;e:for(;l!==null;){var d=l;l=n;for(var m=0;m<t.length;m++)if(d.context===t[m]){l.lanes|=a,d=l.alternate,d!==null&&(d.lanes|=a),ti(l.return,a,e),s||(o=null);break e}l=d.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(r(341));o.lanes|=a,l=o.alternate,l!==null&&(l.lanes|=a),ti(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function ps(e,t,a,s){e=null;for(var n=t,l=!1;n!==null;){if(!l){if((n.flags&524288)!==0)l=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(r(387));if(o=o.memoizedProps,o!==null){var d=n.type;it(n.pendingProps.value,o.value)||(e!==null?e.push(d):e=[d])}}else if(n===fe.current){if(o=n.alternate,o===null)throw Error(r(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Mn):e=[Mn])}n=n.return}e!==null&&ai(t,e,a,s),t.flags|=262144}function dl(e){for(e=e.firstContext;e!==null;){if(!it(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function La(e){Ha=e,Yt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ge(e){return nh(Ha,e)}function hl(e,t){return Ha===null&&La(e),nh(e,t)}function nh(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Yt===null){if(e===null)throw Error(r(308));Yt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yt=Yt.next=t;return a}var $m=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Pm=i.unstable_scheduleCallback,eg=i.unstable_NormalPriority,Ne={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function si(){return{controller:new $m,data:new Map,refCount:0}}function an(e){e.refCount--,e.refCount===0&&Pm(eg,function(){e.controller.abort()})}var sn=null,ni=0,bs=0,ys=null;function tg(e,t){if(sn===null){var a=sn=[];ni=0,bs=ir(),ys={status:"pending",value:void 0,then:function(s){a.push(s)}}}return ni++,t.then(lh,lh),t}function lh(){if(--ni===0&&sn!==null){ys!==null&&(ys.status="fulfilled");var e=sn;sn=null,bs=0,ys=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ag(e,t){var a=[],s={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(s.status="rejected",s.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),s}var oh=C.S;C.S=function(e,t){Gu=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&tg(e,t),oh!==null&&oh(e,t)};var Ga=y(null);function li(){var e=Ga.current;return e!==null?e:ve.pooledCache}function ul(e,t){t===null?_(Ga,Ga.current):_(Ga,t.pool)}function ih(){var e=li();return e===null?null:{parent:Ne._currentValue,pool:e}}var ws=Error(r(460)),oi=Error(r(474)),cl=Error(r(542)),fl={then:function(){}};function rh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function dh(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(_t,_t),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uh(e),e;default:if(typeof t.status=="string")t.then(_t,_t);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=s}},function(s){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uh(e),e}throw Wa=t,ws}}function Ya(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Wa=a,ws):a}}var Wa=null;function hh(){if(Wa===null)throw Error(r(459));var e=Wa;return Wa=null,e}function uh(e){if(e===ws||e===cl)throw Error(r(483))}var xs=null,nn=0;function ml(e){var t=nn;return nn+=1,xs===null&&(xs=[]),dh(xs,e,t)}function ln(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function gl(e,t){throw t.$$typeof===D?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ch(e){function t(x,b){if(e){var v=x.deletions;v===null?(x.deletions=[b],x.flags|=16):v.push(b)}}function a(x,b){if(!e)return null;for(;b!==null;)t(x,b),b=b.sibling;return null}function s(x){for(var b=new Map;x!==null;)x.key!==null?b.set(x.key,x):b.set(x.index,x),x=x.sibling;return b}function n(x,b){return x=Lt(x,b),x.index=0,x.sibling=null,x}function l(x,b,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<b?(x.flags|=67108866,b):v):(x.flags|=67108866,b)):(x.flags|=1048576,b)}function o(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function d(x,b,v,j){return b===null||b.tag!==6?(b=Qo(v,x.mode,j),b.return=x,b):(b=n(b,v),b.return=x,b)}function m(x,b,v,j){var X=v.type;return X===B?z(x,b,v.props.children,j,v.key):b!==null&&(b.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Me&&Ya(X)===b.type)?(b=n(b,v.props),ln(b,v),b.return=x,b):(b=il(v.type,v.key,v.props,null,x.mode,j),ln(b,v),b.return=x,b)}function k(x,b,v,j){return b===null||b.tag!==4||b.stateNode.containerInfo!==v.containerInfo||b.stateNode.implementation!==v.implementation?(b=Zo(v,x.mode,j),b.return=x,b):(b=n(b,v.children||[]),b.return=x,b)}function z(x,b,v,j,X){return b===null||b.tag!==7?(b=Ka(v,x.mode,j,X),b.return=x,b):(b=n(b,v),b.return=x,b)}function N(x,b,v){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Qo(""+b,x.mode,v),b.return=x,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case U:return v=il(b.type,b.key,b.props,null,x.mode,v),ln(v,b),v.return=x,v;case q:return b=Zo(b,x.mode,v),b.return=x,b;case Me:return b=Ya(b),N(x,b,v)}if(It(b)||Je(b))return b=Ka(b,x.mode,v,null),b.return=x,b;if(typeof b.then=="function")return N(x,ml(b),v);if(b.$$typeof===H)return N(x,hl(x,b),v);gl(x,b)}return null}function R(x,b,v,j){var X=b!==null?b.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return X!==null?null:d(x,b,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case U:return v.key===X?m(x,b,v,j):null;case q:return v.key===X?k(x,b,v,j):null;case Me:return v=Ya(v),R(x,b,v,j)}if(It(v)||Je(v))return X!==null?null:z(x,b,v,j,null);if(typeof v.then=="function")return R(x,b,ml(v),j);if(v.$$typeof===H)return R(x,b,hl(x,v),j);gl(x,v)}return null}function A(x,b,v,j,X){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return x=x.get(v)||null,d(b,x,""+j,X);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case U:return x=x.get(j.key===null?v:j.key)||null,m(b,x,j,X);case q:return x=x.get(j.key===null?v:j.key)||null,k(b,x,j,X);case Me:return j=Ya(j),A(x,b,v,j,X)}if(It(j)||Je(j))return x=x.get(v)||null,z(b,x,j,X,null);if(typeof j.then=="function")return A(x,b,v,ml(j),X);if(j.$$typeof===H)return A(x,b,v,hl(b,j),X);gl(b,j)}return null}function L(x,b,v,j){for(var X=null,he=null,W=b,ae=b=0,re=null;W!==null&&ae<v.length;ae++){W.index>ae?(re=W,W=null):re=W.sibling;var ue=R(x,W,v[ae],j);if(ue===null){W===null&&(W=re);break}e&&W&&ue.alternate===null&&t(x,W),b=l(ue,b,ae),he===null?X=ue:he.sibling=ue,he=ue,W=re}if(ae===v.length)return a(x,W),de&&Gt(x,ae),X;if(W===null){for(;ae<v.length;ae++)W=N(x,v[ae],j),W!==null&&(b=l(W,b,ae),he===null?X=W:he.sibling=W,he=W);return de&&Gt(x,ae),X}for(W=s(W);ae<v.length;ae++)re=A(W,x,ae,v[ae],j),re!==null&&(e&&re.alternate!==null&&W.delete(re.key===null?ae:re.key),b=l(re,b,ae),he===null?X=re:he.sibling=re,he=re);return e&&W.forEach(function(Ma){return t(x,Ma)}),de&&Gt(x,ae),X}function Z(x,b,v,j){if(v==null)throw Error(r(151));for(var X=null,he=null,W=b,ae=b=0,re=null,ue=v.next();W!==null&&!ue.done;ae++,ue=v.next()){W.index>ae?(re=W,W=null):re=W.sibling;var Ma=R(x,W,ue.value,j);if(Ma===null){W===null&&(W=re);break}e&&W&&Ma.alternate===null&&t(x,W),b=l(Ma,b,ae),he===null?X=Ma:he.sibling=Ma,he=Ma,W=re}if(ue.done)return a(x,W),de&&Gt(x,ae),X;if(W===null){for(;!ue.done;ae++,ue=v.next())ue=N(x,ue.value,j),ue!==null&&(b=l(ue,b,ae),he===null?X=ue:he.sibling=ue,he=ue);return de&&Gt(x,ae),X}for(W=s(W);!ue.done;ae++,ue=v.next())ue=A(W,x,ae,ue.value,j),ue!==null&&(e&&ue.alternate!==null&&W.delete(ue.key===null?ae:ue.key),b=l(ue,b,ae),he===null?X=ue:he.sibling=ue,he=ue);return e&&W.forEach(function(fp){return t(x,fp)}),de&&Gt(x,ae),X}function we(x,b,v,j){if(typeof v=="object"&&v!==null&&v.type===B&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case U:e:{for(var X=v.key;b!==null;){if(b.key===X){if(X=v.type,X===B){if(b.tag===7){a(x,b.sibling),j=n(b,v.props.children),j.return=x,x=j;break e}}else if(b.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Me&&Ya(X)===b.type){a(x,b.sibling),j=n(b,v.props),ln(j,v),j.return=x,x=j;break e}a(x,b);break}else t(x,b);b=b.sibling}v.type===B?(j=Ka(v.props.children,x.mode,j,v.key),j.return=x,x=j):(j=il(v.type,v.key,v.props,null,x.mode,j),ln(j,v),j.return=x,x=j)}return o(x);case q:e:{for(X=v.key;b!==null;){if(b.key===X)if(b.tag===4&&b.stateNode.containerInfo===v.containerInfo&&b.stateNode.implementation===v.implementation){a(x,b.sibling),j=n(b,v.children||[]),j.return=x,x=j;break e}else{a(x,b);break}else t(x,b);b=b.sibling}j=Zo(v,x.mode,j),j.return=x,x=j}return o(x);case Me:return v=Ya(v),we(x,b,v,j)}if(It(v))return L(x,b,v,j);if(Je(v)){if(X=Je(v),typeof X!="function")throw Error(r(150));return v=X.call(v),Z(x,b,v,j)}if(typeof v.then=="function")return we(x,b,ml(v),j);if(v.$$typeof===H)return we(x,b,hl(x,v),j);gl(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,b!==null&&b.tag===6?(a(x,b.sibling),j=n(b,v),j.return=x,x=j):(a(x,b),j=Qo(v,x.mode,j),j.return=x,x=j),o(x)):a(x,b)}return function(x,b,v,j){try{nn=0;var X=we(x,b,v,j);return xs=null,X}catch(W){if(W===ws||W===cl)throw W;var he=rt(29,W,null,x.mode);return he.lanes=j,he.return=x,he}finally{}}}var Va=ch(!0),fh=ch(!1),ca=!1;function ii(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ri(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ma(e,t,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(ce&2)!==0){var n=s.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),s.pending=t,t=ol(e),Jd(e,null,a),t}return ll(e,s,t,a),ol(e)}function on(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,nd(e,a)}}function di(e,t){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var n=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?n=l=o:l=l.next=o,a=a.next}while(a!==null);l===null?n=l=t:l=l.next=t}else n=l=t;a={baseState:s.baseState,firstBaseUpdate:n,lastBaseUpdate:l,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var hi=!1;function rn(){if(hi){var e=ys;if(e!==null)throw e}}function dn(e,t,a,s){hi=!1;var n=e.updateQueue;ca=!1;var l=n.firstBaseUpdate,o=n.lastBaseUpdate,d=n.shared.pending;if(d!==null){n.shared.pending=null;var m=d,k=m.next;m.next=null,o===null?l=k:o.next=k,o=m;var z=e.alternate;z!==null&&(z=z.updateQueue,d=z.lastBaseUpdate,d!==o&&(d===null?z.firstBaseUpdate=k:d.next=k,z.lastBaseUpdate=m))}if(l!==null){var N=n.baseState;o=0,z=k=m=null,d=l;do{var R=d.lane&-536870913,A=R!==d.lane;if(A?(ie&R)===R:(s&R)===R){R!==0&&R===bs&&(hi=!0),z!==null&&(z=z.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var L=e,Z=d;R=t;var we=a;switch(Z.tag){case 1:if(L=Z.payload,typeof L=="function"){N=L.call(we,N,R);break e}N=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=Z.payload,R=typeof L=="function"?L.call(we,N,R):L,R==null)break e;N=I({},N,R);break e;case 2:ca=!0}}R=d.callback,R!==null&&(e.flags|=64,A&&(e.flags|=8192),A=n.callbacks,A===null?n.callbacks=[R]:A.push(R))}else A={lane:R,tag:d.tag,payload:d.payload,callback:d.callback,next:null},z===null?(k=z=A,m=N):z=z.next=A,o|=R;if(d=d.next,d===null){if(d=n.shared.pending,d===null)break;A=d,d=A.next,A.next=null,n.lastBaseUpdate=A,n.shared.pending=null}}while(!0);z===null&&(m=N),n.baseState=m,n.firstBaseUpdate=k,n.lastBaseUpdate=z,l===null&&(n.shared.lanes=0),wa|=o,e.lanes=o,e.memoizedState=N}}function mh(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function gh(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)mh(a[e],t)}var vs=y(null),pl=y(0);function ph(e,t){e=ea,_(pl,e),_(vs,t),ea=e|t.baseLanes}function ui(){_(pl,ea),_(vs,vs.current)}function ci(){ea=pl.current,O(vs),O(pl)}var dt=y(null),kt=null;function ga(e){var t=e.alternate;_(Ce,Ce.current&1),_(dt,e),kt===null&&(t===null||vs.current!==null||t.memoizedState!==null)&&(kt=e)}function fi(e){_(Ce,Ce.current),_(dt,e),kt===null&&(kt=e)}function bh(e){e.tag===22?(_(Ce,Ce.current),_(dt,e),kt===null&&(kt=e)):pa()}function pa(){_(Ce,Ce.current),_(dt,dt.current)}function ht(e){O(dt),kt===e&&(kt=null),O(Ce)}var Ce=y(0);function bl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wr(a)||xr(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vt=0,te=null,be=null,Oe=null,yl=!1,ks=!1,Xa=!1,wl=0,hn=0,Ss=null,sg=0;function Ae(){throw Error(r(321))}function mi(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!it(e[a],t[a]))return!1;return!0}function gi(e,t,a,s,n,l){return Vt=l,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?eu:zi,Xa=!1,l=a(s,n),Xa=!1,ks&&(l=wh(t,a,s,n)),yh(e),l}function yh(e){C.H=fn;var t=be!==null&&be.next!==null;if(Vt=0,Oe=be=te=null,yl=!1,hn=0,Ss=null,t)throw Error(r(300));e===null||Be||(e=e.dependencies,e!==null&&dl(e)&&(Be=!0))}function wh(e,t,a,s){te=e;var n=0;do{if(ks&&(Ss=null),hn=0,ks=!1,25<=n)throw Error(r(301));if(n+=1,Oe=be=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}C.H=tu,l=t(a,s)}while(ks);return l}function ng(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?un(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(te.flags|=1024),t}function pi(){var e=wl!==0;return wl=0,e}function bi(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function yi(e){if(yl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yl=!1}Vt=0,Oe=be=te=null,ks=!1,hn=wl=0,Ss=null}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?te.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function je(){if(be===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Oe===null?te.memoizedState:Oe.next;if(t!==null)Oe=t,be=e;else{if(e===null)throw te.alternate===null?Error(r(467)):Error(r(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Oe===null?te.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function un(e){var t=hn;return hn+=1,Ss===null&&(Ss=[]),e=dh(Ss,e,t),t=te,(Oe===null?t.memoizedState:Oe.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?eu:zi),e}function vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return un(e);if(e.$$typeof===H)return Ge(e)}throw Error(r(438,String(e)))}function wi(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var s=te.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=xl(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),s=0;s<e;s++)a[s]=mt;return t.index++,a}function Xt(e,t){return typeof t=="function"?t(e):t}function kl(e){var t=je();return xi(t,be,e)}function xi(e,t,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var n=e.baseQueue,l=s.pending;if(l!==null){if(n!==null){var o=n.next;n.next=l.next,l.next=o}t.baseQueue=n=l,s.pending=null}if(l=e.baseState,n===null)e.memoizedState=l;else{t=n.next;var d=o=null,m=null,k=t,z=!1;do{var N=k.lane&-536870913;if(N!==k.lane?(ie&N)===N:(Vt&N)===N){var R=k.revertLane;if(R===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),N===bs&&(z=!0);else if((Vt&R)===R){k=k.next,R===bs&&(z=!0);continue}else N={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},m===null?(d=m=N,o=l):m=m.next=N,te.lanes|=R,wa|=R;N=k.action,Xa&&a(l,N),l=k.hasEagerState?k.eagerState:a(l,N)}else R={lane:N,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},m===null?(d=m=R,o=l):m=m.next=R,te.lanes|=N,wa|=N;k=k.next}while(k!==null&&k!==t);if(m===null?o=l:m.next=d,!it(l,e.memoizedState)&&(Be=!0,z&&(a=ys,a!==null)))throw a;e.memoizedState=l,e.baseState=o,e.baseQueue=m,s.lastRenderedState=l}return n===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function vi(e){var t=je(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,n=a.pending,l=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do l=e(l,o.action),o=o.next;while(o!==n);it(l,t.memoizedState)||(Be=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),a.lastRenderedState=l}return[l,s]}function xh(e,t,a){var s=te,n=je(),l=de;if(l){if(a===void 0)throw Error(r(407));a=a()}else a=t();var o=!it((be||n).memoizedState,a);if(o&&(n.memoizedState=a,Be=!0),n=n.queue,Ti(Sh.bind(null,s,n,e),[e]),n.getSnapshot!==t||o||Oe!==null&&Oe.memoizedState.tag&1){if(s.flags|=2048,Ts(9,{destroy:void 0},kh.bind(null,s,n,a,t),null),ve===null)throw Error(r(349));l||(Vt&127)!==0||vh(s,t,a)}return a}function vh(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=xl(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function kh(e,t,a,s){t.value=a,t.getSnapshot=s,Th(t)&&Rh(e)}function Sh(e,t,a){return a(function(){Th(t)&&Rh(e)})}function Th(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!it(e,a)}catch{return!0}}function Rh(e){var t=qa(e,2);t!==null&&st(t,e,2)}function ki(e){var t=Qe();if(typeof e=="function"){var a=e;if(e=a(),Xa){la(!0);try{a()}finally{la(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:e},t}function Ih(e,t,a,s){return e.baseState=a,xi(e,be,typeof s=="function"?s:Xt)}function lg(e,t,a,s,n){if(Rl(e))throw Error(r(485));if(e=t.action,e!==null){var l={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){l.listeners.push(o)}};C.T!==null?a(!0):l.isTransition=!1,s(l),a=t.pending,a===null?(l.next=t.pending=l,Ah(t,l)):(l.next=a.next,t.pending=a.next=l)}}function Ah(e,t){var a=t.action,s=t.payload,n=e.state;if(t.isTransition){var l=C.T,o={};C.T=o;try{var d=a(n,s),m=C.S;m!==null&&m(o,d),Eh(e,t,d)}catch(k){Si(e,t,k)}finally{l!==null&&o.types!==null&&(l.types=o.types),C.T=l}}else try{l=a(n,s),Eh(e,t,l)}catch(k){Si(e,t,k)}}function Eh(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Mh(e,t,s)},function(s){return Si(e,t,s)}):Mh(e,t,a)}function Mh(e,t,a){t.status="fulfilled",t.value=a,zh(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ah(e,a)))}function Si(e,t,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=a,zh(t),t=t.next;while(t!==s)}e.action=null}function zh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ch(e,t){return t}function jh(e,t){if(de){var a=ve.formState;if(a!==null){e:{var s=te;if(de){if(ke){t:{for(var n=ke,l=vt;n.nodeType!==8;){if(!l){n=null;break t}if(n=St(n.nextSibling),n===null){n=null;break t}}l=n.data,n=l==="F!"||l==="F"?n:null}if(n){ke=St(n.nextSibling),s=n.data==="F!";break e}}ha(s)}s=!1}s&&(t=a[0])}}return a=Qe(),a.memoizedState=a.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ch,lastRenderedState:t},a.queue=s,a=Fh.bind(null,te,s),s.dispatch=a,s=ki(!1),l=Mi.bind(null,te,!1,s.queue),s=Qe(),n={state:t,dispatch:null,action:e,pending:null},s.queue=n,a=lg.bind(null,te,n,l,a),n.dispatch=a,s.memoizedState=e,[t,a,!1]}function Nh(e){var t=je();return Oh(t,be,e)}function Oh(e,t,a){if(t=xi(e,t,Ch)[0],e=kl(Xt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=un(t)}catch(o){throw o===ws?cl:o}else s=t;t=je();var n=t.queue,l=n.dispatch;return a!==t.memoizedState&&(te.flags|=2048,Ts(9,{destroy:void 0},og.bind(null,n,a),null)),[s,l,e]}function og(e,t){e.action=t}function Bh(e){var t=je(),a=be;if(a!==null)return Oh(t,a,e);je(),t=t.memoizedState,a=je();var s=a.queue.dispatch;return a.memoizedState=e,[t,s,!1]}function Ts(e,t,a,s){return e={tag:e,create:a,deps:s,inst:t,next:null},t=te.updateQueue,t===null&&(t=xl(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,t.lastEffect=e),e}function Dh(){return je().memoizedState}function Sl(e,t,a,s){var n=Qe();te.flags|=e,n.memoizedState=Ts(1|t,{destroy:void 0},a,s===void 0?null:s)}function Tl(e,t,a,s){var n=je();s=s===void 0?null:s;var l=n.memoizedState.inst;be!==null&&s!==null&&mi(s,be.memoizedState.deps)?n.memoizedState=Ts(t,l,a,s):(te.flags|=e,n.memoizedState=Ts(1|t,l,a,s))}function Uh(e,t){Sl(8390656,8,e,t)}function Ti(e,t){Tl(2048,8,e,t)}function ig(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=xl(),te.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function qh(e){var t=je().memoizedState;return ig({ref:t,nextImpl:e}),function(){if((ce&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Kh(e,t){return Tl(4,2,e,t)}function _h(e,t){return Tl(4,4,e,t)}function Hh(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lh(e,t,a){a=a!=null?a.concat([e]):null,Tl(4,4,Hh.bind(null,t,e),a)}function Ri(){}function Gh(e,t){var a=je();t=t===void 0?null:t;var s=a.memoizedState;return t!==null&&mi(t,s[1])?s[0]:(a.memoizedState=[e,t],e)}function Yh(e,t){var a=je();t=t===void 0?null:t;var s=a.memoizedState;if(t!==null&&mi(t,s[1]))return s[0];if(s=e(),Xa){la(!0);try{e()}finally{la(!1)}}return a.memoizedState=[s,t],s}function Ii(e,t,a){return a===void 0||(Vt&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Wu(),te.lanes|=e,wa|=e,a)}function Wh(e,t,a,s){return it(a,t)?a:vs.current!==null?(e=Ii(e,a,s),it(e,t)||(Be=!0),e):(Vt&42)===0||(Vt&1073741824)!==0&&(ie&261930)===0?(Be=!0,e.memoizedState=a):(e=Wu(),te.lanes|=e,wa|=e,t)}function Vh(e,t,a,s,n){var l=K.p;K.p=l!==0&&8>l?l:8;var o=C.T,d={};C.T=d,Mi(e,!1,t,a);try{var m=n(),k=C.S;if(k!==null&&k(d,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var z=ag(m,s);cn(e,t,z,ft(e))}else cn(e,t,s,ft(e))}catch(N){cn(e,t,{then:function(){},status:"rejected",reason:N},ft())}finally{K.p=l,o!==null&&d.types!==null&&(o.types=d.types),C.T=o}}function rg(){}function Ai(e,t,a,s){if(e.tag!==5)throw Error(r(476));var n=Xh(e).queue;Vh(e,n,t,J,a===null?rg:function(){return Qh(e),a(s)})}function Xh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:J},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qh(e){var t=Xh(e);t.next===null&&(t=e.alternate.memoizedState),cn(e,t.next.queue,{},ft())}function Ei(){return Ge(Mn)}function Zh(){return je().memoizedState}function Jh(){return je().memoizedState}function dg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ft();e=fa(a);var s=ma(t,e,a);s!==null&&(st(s,t,a),on(s,t,a)),t={cache:si()},e.payload=t;return}t=t.return}}function hg(e,t,a){var s=ft();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Rl(e)?$h(t,a):(a=Vo(e,t,a,s),a!==null&&(st(a,e,s),Ph(a,t,s)))}function Fh(e,t,a){var s=ft();cn(e,t,a,s)}function cn(e,t,a,s){var n={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rl(e))$h(t,n);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,d=l(o,a);if(n.hasEagerState=!0,n.eagerState=d,it(d,o))return ll(e,t,n,0),ve===null&&nl(),!1}catch{}finally{}if(a=Vo(e,t,n,s),a!==null)return st(a,e,s),Ph(a,t,s),!0}return!1}function Mi(e,t,a,s){if(s={lane:2,revertLane:ir(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Rl(e)){if(t)throw Error(r(479))}else t=Vo(e,a,s,2),t!==null&&st(t,e,2)}function Rl(e){var t=e.alternate;return e===te||t!==null&&t===te}function $h(e,t){ks=yl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Ph(e,t,a){if((a&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,nd(e,a)}}var fn={readContext:Ge,use:vl,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae};fn.useEffectEvent=Ae;var eu={readContext:Ge,use:vl,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:Uh,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Sl(4194308,4,Hh.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Sl(4194308,4,e,t)},useInsertionEffect:function(e,t){Sl(4,2,e,t)},useMemo:function(e,t){var a=Qe();t=t===void 0?null:t;var s=e();if(Xa){la(!0);try{e()}finally{la(!1)}}return a.memoizedState=[s,t],s},useReducer:function(e,t,a){var s=Qe();if(a!==void 0){var n=a(t);if(Xa){la(!0);try{a(t)}finally{la(!1)}}}else n=t;return s.memoizedState=s.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=hg.bind(null,te,e),[s.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:function(e){e=ki(e);var t=e.queue,a=Fh.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ri,useDeferredValue:function(e,t){var a=Qe();return Ii(a,e,t)},useTransition:function(){var e=ki(!1);return e=Vh.bind(null,te,e.queue,!0,!1),Qe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var s=te,n=Qe();if(de){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),ve===null)throw Error(r(349));(ie&127)!==0||vh(s,t,a)}n.memoizedState=a;var l={value:a,getSnapshot:t};return n.queue=l,Uh(Sh.bind(null,s,l,e),[e]),s.flags|=2048,Ts(9,{destroy:void 0},kh.bind(null,s,l,a,t),null),a},useId:function(){var e=Qe(),t=ve.identifierPrefix;if(de){var a=Nt,s=jt;a=(s&~(1<<32-ot(s)-1)).toString(32)+a,t="_"+t+"R_"+a,a=wl++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=sg++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ei,useFormState:jh,useActionState:jh,useOptimistic:function(e){var t=Qe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Mi.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:wi,useCacheRefresh:function(){return Qe().memoizedState=dg.bind(null,te)},useEffectEvent:function(e){var t=Qe(),a={impl:e};return t.memoizedState=a,function(){if((ce&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},zi={readContext:Ge,use:vl,useCallback:Gh,useContext:Ge,useEffect:Ti,useImperativeHandle:Lh,useInsertionEffect:Kh,useLayoutEffect:_h,useMemo:Yh,useReducer:kl,useRef:Dh,useState:function(){return kl(Xt)},useDebugValue:Ri,useDeferredValue:function(e,t){var a=je();return Wh(a,be.memoizedState,e,t)},useTransition:function(){var e=kl(Xt)[0],t=je().memoizedState;return[typeof e=="boolean"?e:un(e),t]},useSyncExternalStore:xh,useId:Zh,useHostTransitionStatus:Ei,useFormState:Nh,useActionState:Nh,useOptimistic:function(e,t){var a=je();return Ih(a,be,e,t)},useMemoCache:wi,useCacheRefresh:Jh};zi.useEffectEvent=qh;var tu={readContext:Ge,use:vl,useCallback:Gh,useContext:Ge,useEffect:Ti,useImperativeHandle:Lh,useInsertionEffect:Kh,useLayoutEffect:_h,useMemo:Yh,useReducer:vi,useRef:Dh,useState:function(){return vi(Xt)},useDebugValue:Ri,useDeferredValue:function(e,t){var a=je();return be===null?Ii(a,e,t):Wh(a,be.memoizedState,e,t)},useTransition:function(){var e=vi(Xt)[0],t=je().memoizedState;return[typeof e=="boolean"?e:un(e),t]},useSyncExternalStore:xh,useId:Zh,useHostTransitionStatus:Ei,useFormState:Bh,useActionState:Bh,useOptimistic:function(e,t){var a=je();return be!==null?Ih(a,be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:wi,useCacheRefresh:Jh};tu.useEffectEvent=qh;function Ci(e,t,a,s){t=e.memoizedState,a=a(s,t),a=a==null?t:I({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ji={enqueueSetState:function(e,t,a){e=e._reactInternals;var s=ft(),n=fa(s);n.payload=t,a!=null&&(n.callback=a),t=ma(e,n,s),t!==null&&(st(t,e,s),on(t,e,s))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var s=ft(),n=fa(s);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ma(e,n,s),t!==null&&(st(t,e,s),on(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ft(),s=fa(a);s.tag=2,t!=null&&(s.callback=t),t=ma(e,s,a),t!==null&&(st(t,e,a),on(t,e,a))}};function au(e,t,a,s,n,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,l,o):t.prototype&&t.prototype.isPureReactComponent?!$s(a,s)||!$s(n,l):!0}function su(e,t,a,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,s),t.state!==e&&ji.enqueueReplaceState(t,t.state,null)}function Qa(e,t){var a=t;if("ref"in t){a={};for(var s in t)s!=="ref"&&(a[s]=t[s])}if(e=e.defaultProps){a===t&&(a=I({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function nu(e){sl(e)}function lu(e){console.error(e)}function ou(e){sl(e)}function Il(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function iu(e,t,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Ni(e,t,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(e,t)},a}function ru(e){return e=fa(e),e.tag=3,e}function du(e,t,a,s){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var l=s.value;e.payload=function(){return n(l)},e.callback=function(){iu(t,a,s)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){iu(t,a,s),typeof n!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var d=s.stack;this.componentDidCatch(s.value,{componentStack:d!==null?d:""})})}function ug(e,t,a,s,n){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=a.alternate,t!==null&&ps(t,a,n,!0),a=dt.current,a!==null){switch(a.tag){case 31:case 13:return kt===null?ql():a.alternate===null&&Ee===0&&(Ee=3),a.flags&=-257,a.flags|=65536,a.lanes=n,s===fl?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([s]):t.add(s),nr(e,s,n)),!1;case 22:return a.flags|=65536,s===fl?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([s]):a.add(s)),nr(e,s,n)),!1}throw Error(r(435,a.tag))}return nr(e,s,n),ql(),!1}if(de)return t=dt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,s!==$o&&(e=Error(r(422),{cause:s}),tn(yt(e,a)))):(s!==$o&&(t=Error(r(423),{cause:s}),tn(yt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,s=yt(s,a),n=Ni(e.stateNode,s,n),di(e,n),Ee!==4&&(Ee=2)),!1;var l=Error(r(520),{cause:s});if(l=yt(l,a),vn===null?vn=[l]:vn.push(l),Ee!==4&&(Ee=2),t===null)return!0;s=yt(s,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Ni(a.stateNode,s,e),di(a,e),!1;case 1:if(t=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(xa===null||!xa.has(l))))return a.flags|=65536,n&=-n,a.lanes|=n,n=ru(n),du(n,e,a,s),di(a,n),!1}a=a.return}while(a!==null);return!1}var Oi=Error(r(461)),Be=!1;function Ye(e,t,a,s){t.child=e===null?fh(t,null,a,s):Va(t,e.child,a,s)}function hu(e,t,a,s,n){a=a.render;var l=t.ref;if("ref"in s){var o={};for(var d in s)d!=="ref"&&(o[d]=s[d])}else o=s;return La(t),s=gi(e,t,a,o,l,n),d=pi(),e!==null&&!Be?(bi(e,t,n),Qt(e,t,n)):(de&&d&&Jo(t),t.flags|=1,Ye(e,t,s,n),t.child)}function uu(e,t,a,s,n){if(e===null){var l=a.type;return typeof l=="function"&&!Xo(l)&&l.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=l,cu(e,t,l,s,n)):(e=il(a.type,null,s,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!Li(e,n)){var o=l.memoizedProps;if(a=a.compare,a=a!==null?a:$s,a(o,s)&&e.ref===t.ref)return Qt(e,t,n)}return t.flags|=1,e=Lt(l,s),e.ref=t.ref,e.return=t,t.child=e}function cu(e,t,a,s,n){if(e!==null){var l=e.memoizedProps;if($s(l,s)&&e.ref===t.ref)if(Be=!1,t.pendingProps=s=l,Li(e,n))(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,Qt(e,t,n)}return Bi(e,t,a,s,n)}function fu(e,t,a,s){var n=s.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,e!==null){for(s=t.child=e.child,n=0;s!==null;)n=n|s.lanes|s.childLanes,s=s.sibling;s=n&~l}else s=0,t.child=null;return mu(e,t,l,a,s)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ul(t,l!==null?l.cachePool:null),l!==null?ph(t,l):ui(),bh(t);else return s=t.lanes=536870912,mu(e,t,l!==null?l.baseLanes|a:a,a,s)}else l!==null?(ul(t,l.cachePool),ph(t,l),pa(),t.memoizedState=null):(e!==null&&ul(t,null),ui(),pa());return Ye(e,t,n,a),t.child}function mn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mu(e,t,a,s,n){var l=li();return l=l===null?null:{parent:Ne._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&ul(t,null),ui(),bh(t),e!==null&&ps(e,t,s,!0),t.childLanes=n,null}function Al(e,t){return t=Ml({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gu(e,t,a){return Va(t,e.child,null,a),e=Al(t,t.pendingProps),e.flags|=2,ht(t),t.memoizedState=null,e}function cg(e,t,a){var s=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(de){if(s.mode==="hidden")return e=Al(t,s),t.lanes=536870912,mn(null,e);if(fi(t),(e=ke)?(e=Ac(e,vt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ra!==null?{id:jt,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},a=$d(e),a.return=t,t.child=a,Le=t,ke=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return Al(t,s)}var l=e.memoizedState;if(l!==null){var o=l.dehydrated;if(fi(t),n)if(t.flags&256)t.flags&=-257,t=gu(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Be||ps(e,t,a,!1),n=(a&e.childLanes)!==0,Be||n){if(s=ve,s!==null&&(o=ld(s,a),o!==0&&o!==l.retryLane))throw l.retryLane=o,qa(e,o),st(s,e,o),Oi;ql(),t=gu(e,t,a)}else e=l.treeContext,ke=St(o.nextSibling),Le=t,de=!0,da=null,vt=!1,e!==null&&th(t,e),t=Al(t,s),t.flags|=4096;return t}return e=Lt(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function El(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Bi(e,t,a,s,n){return La(t),a=gi(e,t,a,s,void 0,n),s=pi(),e!==null&&!Be?(bi(e,t,n),Qt(e,t,n)):(de&&s&&Jo(t),t.flags|=1,Ye(e,t,a,n),t.child)}function pu(e,t,a,s,n,l){return La(t),t.updateQueue=null,a=wh(t,s,a,n),yh(e),s=pi(),e!==null&&!Be?(bi(e,t,l),Qt(e,t,l)):(de&&s&&Jo(t),t.flags|=1,Ye(e,t,a,l),t.child)}function bu(e,t,a,s,n){if(La(t),t.stateNode===null){var l=cs,o=a.contextType;typeof o=="object"&&o!==null&&(l=Ge(o)),l=new a(s,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=ji,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=s,l.state=t.memoizedState,l.refs={},ii(t),o=a.contextType,l.context=typeof o=="object"&&o!==null?Ge(o):cs,l.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Ci(t,a,o,s),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(o=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),o!==l.state&&ji.enqueueReplaceState(l,l.state,null),dn(t,s,l,n),rn(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){l=t.stateNode;var d=t.memoizedProps,m=Qa(a,d);l.props=m;var k=l.context,z=a.contextType;o=cs,typeof z=="object"&&z!==null&&(o=Ge(z));var N=a.getDerivedStateFromProps;z=typeof N=="function"||typeof l.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,z||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d||k!==o)&&su(t,l,s,o),ca=!1;var R=t.memoizedState;l.state=R,dn(t,s,l,n),rn(),k=t.memoizedState,d||R!==k||ca?(typeof N=="function"&&(Ci(t,a,N,s),k=t.memoizedState),(m=ca||au(t,a,m,s,R,k,o))?(z||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=k),l.props=s,l.state=k,l.context=o,s=m):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{l=t.stateNode,ri(e,t),o=t.memoizedProps,z=Qa(a,o),l.props=z,N=t.pendingProps,R=l.context,k=a.contextType,m=cs,typeof k=="object"&&k!==null&&(m=Ge(k)),d=a.getDerivedStateFromProps,(k=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==N||R!==m)&&su(t,l,s,m),ca=!1,R=t.memoizedState,l.state=R,dn(t,s,l,n),rn();var A=t.memoizedState;o!==N||R!==A||ca||e!==null&&e.dependencies!==null&&dl(e.dependencies)?(typeof d=="function"&&(Ci(t,a,d,s),A=t.memoizedState),(z=ca||au(t,a,z,s,R,A,m)||e!==null&&e.dependencies!==null&&dl(e.dependencies))?(k||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(s,A,m),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(s,A,m)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=A),l.props=s,l.state=A,l.context=m,s=z):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),s=!1)}return l=s,El(e,t),s=(t.flags&128)!==0,l||s?(l=t.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&s?(t.child=Va(t,e.child,null,n),t.child=Va(t,null,a,n)):Ye(e,t,a,n),t.memoizedState=l.state,e=t.child):e=Qt(e,t,n),e}function yu(e,t,a,s){return _a(),t.flags|=256,Ye(e,t,a,s),t.child}var Di={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ui(e){return{baseLanes:e,cachePool:ih()}}function qi(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=ct),e}function wu(e,t,a){var s=t.pendingProps,n=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(Ce.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(de){if(n?ga(t):pa(),(e=ke)?(e=Ac(e,vt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ra!==null?{id:jt,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},a=$d(e),a.return=t,t.child=a,Le=t,ke=null)):e=null,e===null)throw ha(t);return xr(e)?t.lanes=32:t.lanes=536870912,null}var d=s.children;return s=s.fallback,n?(pa(),n=t.mode,d=Ml({mode:"hidden",children:d},n),s=Ka(s,n,a,null),d.return=t,s.return=t,d.sibling=s,t.child=d,s=t.child,s.memoizedState=Ui(a),s.childLanes=qi(e,o,a),t.memoizedState=Di,mn(null,s)):(ga(t),Ki(t,d))}var m=e.memoizedState;if(m!==null&&(d=m.dehydrated,d!==null)){if(l)t.flags&256?(ga(t),t.flags&=-257,t=_i(e,t,a)):t.memoizedState!==null?(pa(),t.child=e.child,t.flags|=128,t=null):(pa(),d=s.fallback,n=t.mode,s=Ml({mode:"visible",children:s.children},n),d=Ka(d,n,a,null),d.flags|=2,s.return=t,d.return=t,s.sibling=d,t.child=s,Va(t,e.child,null,a),s=t.child,s.memoizedState=Ui(a),s.childLanes=qi(e,o,a),t.memoizedState=Di,t=mn(null,s));else if(ga(t),xr(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var k=o.dgst;o=k,s=Error(r(419)),s.stack="",s.digest=o,tn({value:s,source:null,stack:null}),t=_i(e,t,a)}else if(Be||ps(e,t,a,!1),o=(a&e.childLanes)!==0,Be||o){if(o=ve,o!==null&&(s=ld(o,a),s!==0&&s!==m.retryLane))throw m.retryLane=s,qa(e,s),st(o,e,s),Oi;wr(d)||ql(),t=_i(e,t,a)}else wr(d)?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,ke=St(d.nextSibling),Le=t,de=!0,da=null,vt=!1,e!==null&&th(t,e),t=Ki(t,s.children),t.flags|=4096);return t}return n?(pa(),d=s.fallback,n=t.mode,m=e.child,k=m.sibling,s=Lt(m,{mode:"hidden",children:s.children}),s.subtreeFlags=m.subtreeFlags&65011712,k!==null?d=Lt(k,d):(d=Ka(d,n,a,null),d.flags|=2),d.return=t,s.return=t,s.sibling=d,t.child=s,mn(null,s),s=t.child,d=e.child.memoizedState,d===null?d=Ui(a):(n=d.cachePool,n!==null?(m=Ne._currentValue,n=n.parent!==m?{parent:m,pool:m}:n):n=ih(),d={baseLanes:d.baseLanes|a,cachePool:n}),s.memoizedState=d,s.childLanes=qi(e,o,a),t.memoizedState=Di,mn(e.child,s)):(ga(t),a=e.child,e=a.sibling,a=Lt(a,{mode:"visible",children:s.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Ki(e,t){return t=Ml({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ml(e,t){return e=rt(22,e,null,t),e.lanes=0,e}function _i(e,t,a){return Va(t,e.child,null,a),e=Ki(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xu(e,t,a){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),ti(e.return,t,a)}function Hi(e,t,a,s,n,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:n,treeForkCount:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=a,o.tailMode=n,o.treeForkCount=l)}function vu(e,t,a){var s=t.pendingProps,n=s.revealOrder,l=s.tail;s=s.children;var o=Ce.current,d=(o&2)!==0;if(d?(o=o&1|2,t.flags|=128):o&=1,_(Ce,o),Ye(e,t,s,a),s=de?en:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xu(e,a,t);else if(e.tag===19)xu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&bl(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Hi(t,!1,n,a,l,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&bl(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Hi(t,!0,a,null,l,s);break;case"together":Hi(t,!1,null,null,void 0,s);break;default:t.memoizedState=null}return t.child}function Qt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),wa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ps(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=Lt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Lt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Li(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&dl(e)))}function fg(e,t,a){switch(t.tag){case 3:Xe(t,t.stateNode.containerInfo),ua(t,Ne,e.memoizedState.cache),_a();break;case 27:case 5:Ks(t);break;case 4:Xe(t,t.stateNode.containerInfo);break;case 10:ua(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fi(t),null;break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(ga(t),t.flags|=128,null):(a&t.child.childLanes)!==0?wu(e,t,a):(ga(t),e=Qt(e,t,a),e!==null?e.sibling:null);ga(t);break;case 19:var n=(e.flags&128)!==0;if(s=(a&t.childLanes)!==0,s||(ps(e,t,a,!1),s=(a&t.childLanes)!==0),n){if(s)return vu(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),_(Ce,Ce.current),s)break;return null;case 22:return t.lanes=0,fu(e,t,a,t.pendingProps);case 24:ua(t,Ne,e.memoizedState.cache)}return Qt(e,t,a)}function ku(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Be=!0;else{if(!Li(e,a)&&(t.flags&128)===0)return Be=!1,fg(e,t,a);Be=(e.flags&131072)!==0}else Be=!1,de&&(t.flags&1048576)!==0&&eh(t,en,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=Ya(t.elementType),t.type=e,typeof e=="function")Xo(e)?(s=Qa(e,s),t.tag=1,t=bu(null,t,e,s,a)):(t.tag=0,t=Bi(null,t,e,s,a));else{if(e!=null){var n=e.$$typeof;if(n===Q){t.tag=11,t=hu(null,t,e,s,a);break e}else if(n===P){t.tag=14,t=uu(null,t,e,s,a);break e}}throw t=qt(e)||e,Error(r(306,t,""))}}return t;case 0:return Bi(e,t,t.type,t.pendingProps,a);case 1:return s=t.type,n=Qa(s,t.pendingProps),bu(e,t,s,n,a);case 3:e:{if(Xe(t,t.stateNode.containerInfo),e===null)throw Error(r(387));s=t.pendingProps;var l=t.memoizedState;n=l.element,ri(e,t),dn(t,s,null,a);var o=t.memoizedState;if(s=o.cache,ua(t,Ne,s),s!==l.cache&&ai(t,[Ne],a,!0),rn(),s=o.element,l.isDehydrated)if(l={element:s,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=yu(e,t,s,a);break e}else if(s!==n){n=yt(Error(r(424)),t),tn(n),t=yu(e,t,s,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ke=St(e.firstChild),Le=t,de=!0,da=null,vt=!0,a=fh(t,null,s,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_a(),s===n){t=Qt(e,t,a);break e}Ye(e,t,s,a)}t=t.child}return t;case 26:return El(e,t),e===null?(a=Nc(t.type,null,t.pendingProps,null))?t.memoizedState=a:de||(a=t.type,e=t.pendingProps,s=Wl(se.current).createElement(a),s[He]=t,s[Fe]=e,We(s,a,e),qe(s),t.stateNode=s):t.memoizedState=Nc(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ks(t),e===null&&de&&(s=t.stateNode=zc(t.type,t.pendingProps,se.current),Le=t,vt=!0,n=ke,Ta(t.type)?(vr=n,ke=St(s.firstChild)):ke=n),Ye(e,t,t.pendingProps.children,a),El(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&de&&((n=s=ke)&&(s=Gg(s,t.type,t.pendingProps,vt),s!==null?(t.stateNode=s,Le=t,ke=St(s.firstChild),vt=!1,n=!0):n=!1),n||ha(t)),Ks(t),n=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,s=l.children,pr(n,l)?s=null:o!==null&&pr(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=gi(e,t,ng,null,null,a),Mn._currentValue=n),El(e,t),Ye(e,t,s,a),t.child;case 6:return e===null&&de&&((e=a=ke)&&(a=Yg(a,t.pendingProps,vt),a!==null?(t.stateNode=a,Le=t,ke=null,e=!0):e=!1),e||ha(t)),null;case 13:return wu(e,t,a);case 4:return Xe(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Va(t,null,s,a):Ye(e,t,s,a),t.child;case 11:return hu(e,t,t.type,t.pendingProps,a);case 7:return Ye(e,t,t.pendingProps,a),t.child;case 8:return Ye(e,t,t.pendingProps.children,a),t.child;case 12:return Ye(e,t,t.pendingProps.children,a),t.child;case 10:return s=t.pendingProps,ua(t,t.type,s.value),Ye(e,t,s.children,a),t.child;case 9:return n=t.type._context,s=t.pendingProps.children,La(t),n=Ge(n),s=s(n),t.flags|=1,Ye(e,t,s,a),t.child;case 14:return uu(e,t,t.type,t.pendingProps,a);case 15:return cu(e,t,t.type,t.pendingProps,a);case 19:return vu(e,t,a);case 31:return cg(e,t,a);case 22:return fu(e,t,a,t.pendingProps);case 24:return La(t),s=Ge(Ne),e===null?(n=li(),n===null&&(n=ve,l=si(),n.pooledCache=l,l.refCount++,l!==null&&(n.pooledCacheLanes|=a),n=l),t.memoizedState={parent:s,cache:n},ii(t),ua(t,Ne,n)):((e.lanes&a)!==0&&(ri(e,t),dn(t,null,null,a),rn()),n=e.memoizedState,l=t.memoizedState,n.parent!==s?(n={parent:s,cache:s},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ua(t,Ne,s)):(s=l.cache,ua(t,Ne,s),s!==n.cache&&ai(t,[Ne],a,!0))),Ye(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function Zt(e){e.flags|=4}function Gi(e,t,a,s,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Zu())e.flags|=8192;else throw Wa=fl,oi}else e.flags&=-16777217}function Su(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qc(t))if(Zu())e.flags|=8192;else throw Wa=fl,oi}function zl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ad():536870912,e.lanes|=t,Es|=t)}function gn(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,s|=n.subtreeFlags&65011712,s|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,s|=n.subtreeFlags,s|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=s,e.childLanes=a,t}function mg(e,t,a){var s=t.pendingProps;switch(Fo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return a=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),Wt(Ne),ze(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(gs(t)?Zt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Po())),Se(t),null;case 26:var n=t.type,l=t.memoizedState;return e===null?(Zt(t),l!==null?(Se(t),Su(t,l)):(Se(t),Gi(t,n,null,s,a))):l?l!==e.memoizedState?(Zt(t),Se(t),Su(t,l)):(Se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&Zt(t),Se(t),Gi(t,n,e,s,a)),null;case 27:if(Hn(t),a=se.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Zt(t);else{if(!s){if(t.stateNode===null)throw Error(r(166));return Se(t),null}e=Y.current,gs(t)?ah(t):(e=zc(n,s,a),t.stateNode=e,Zt(t))}return Se(t),null;case 5:if(Hn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Zt(t);else{if(!s){if(t.stateNode===null)throw Error(r(166));return Se(t),null}if(l=Y.current,gs(t))ah(t);else{var o=Wl(se.current);switch(l){case 1:l=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:l=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":l=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":l=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":l=o.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof s.is=="string"?o.createElement("select",{is:s.is}):o.createElement("select"),s.multiple?l.multiple=!0:s.size&&(l.size=s.size);break;default:l=typeof s.is=="string"?o.createElement(n,{is:s.is}):o.createElement(n)}}l[He]=t,l[Fe]=s;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)l.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=l;e:switch(We(l,n,s),n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Zt(t)}}return Se(t),Gi(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&Zt(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(r(166));if(e=se.current,gs(t)){if(e=t.stateNode,a=t.memoizedProps,s=null,n=Le,n!==null)switch(n.tag){case 27:case 5:s=n.memoizedProps}e[He]=t,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||wc(e.nodeValue,a)),e||ha(t,!0)}else e=Wl(e).createTextNode(s),e[He]=t,t.stateNode=e}return Se(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(s=gs(t),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[He]=t}else _a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),e=!1}else a=Po(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ht(t),t):(ht(t),null);if((t.flags&128)!==0)throw Error(r(558))}return Se(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=gs(t),s!==null&&s.dehydrated!==null){if(e===null){if(!n)throw Error(r(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[He]=t}else _a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),n=!1}else n=Po(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ht(t),t):(ht(t),null)}return ht(t),(t.flags&128)!==0?(t.lanes=a,t):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=t.child,n=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(n=s.alternate.memoizedState.cachePool.pool),l=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(l=s.memoizedState.cachePool.pool),l!==n&&(s.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),zl(t,t.updateQueue),Se(t),null);case 4:return ze(),e===null&&ur(t.stateNode.containerInfo),Se(t),null;case 10:return Wt(t.type),Se(t),null;case 19:if(O(Ce),s=t.memoizedState,s===null)return Se(t),null;if(n=(t.flags&128)!==0,l=s.rendering,l===null)if(n)gn(s,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=bl(e),l!==null){for(t.flags|=128,gn(s,!1),e=l.updateQueue,t.updateQueue=e,zl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Fd(a,e),a=a.sibling;return _(Ce,Ce.current&1|2),de&&Gt(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&nt()>Bl&&(t.flags|=128,n=!0,gn(s,!1),t.lanes=4194304)}else{if(!n)if(e=bl(l),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,zl(t,e),gn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!de)return Se(t),null}else 2*nt()-s.renderingStartTime>Bl&&a!==536870912&&(t.flags|=128,n=!0,gn(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(e=s.last,e!==null?e.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=nt(),e.sibling=null,a=Ce.current,_(Ce,n?a&1|2:a&1),de&&Gt(t,s.treeForkCount),e):(Se(t),null);case 22:case 23:return ht(t),ci(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(a&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),a=t.updateQueue,a!==null&&zl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==a&&(t.flags|=2048),e!==null&&O(Ga),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Wt(Ne),Se(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function gg(e,t){switch(Fo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wt(Ne),ze(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Hn(t),null;case 31:if(t.memoizedState!==null){if(ht(t),t.alternate===null)throw Error(r(340));_a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ht(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));_a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(Ce),null;case 4:return ze(),null;case 10:return Wt(t.type),null;case 22:case 23:return ht(t),ci(),e!==null&&O(Ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wt(Ne),null;case 25:return null;default:return null}}function Tu(e,t){switch(Fo(t),t.tag){case 3:Wt(Ne),ze();break;case 26:case 27:case 5:Hn(t);break;case 4:ze();break;case 31:t.memoizedState!==null&&ht(t);break;case 13:ht(t);break;case 19:O(Ce);break;case 10:Wt(t.type);break;case 22:case 23:ht(t),ci(),e!==null&&O(Ga);break;case 24:Wt(Ne)}}function pn(e,t){try{var a=t.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var n=s.next;a=n;do{if((a.tag&e)===e){s=void 0;var l=a.create,o=a.inst;s=l(),o.destroy=s}a=a.next}while(a!==n)}}catch(d){ge(t,t.return,d)}}function ba(e,t,a){try{var s=t.updateQueue,n=s!==null?s.lastEffect:null;if(n!==null){var l=n.next;s=l;do{if((s.tag&e)===e){var o=s.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,n=t;var m=a,k=d;try{k()}catch(z){ge(n,m,z)}}}s=s.next}while(s!==l)}}catch(z){ge(t,t.return,z)}}function Ru(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{gh(t,a)}catch(s){ge(e,e.return,s)}}}function Iu(e,t,a){a.props=Qa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){ge(e,t,s)}}function bn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(n){ge(e,t,n)}}function Ot(e,t){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(n){ge(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ge(e,t,n)}else a.current=null}function Au(e){var t=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(n){ge(e,e.return,n)}}function Yi(e,t,a){try{var s=e.stateNode;Ug(s,e.type,a,t),s[Fe]=t}catch(n){ge(e,e.return,n)}}function Eu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function Wi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vi(e,t,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=_t));else if(s!==4&&(s===27&&Ta(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Vi(e,t,a),e=e.sibling;e!==null;)Vi(e,t,a),e=e.sibling}function Cl(e,t,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(s!==4&&(s===27&&Ta(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Cl(e,t,a),e=e.sibling;e!==null;)Cl(e,t,a),e=e.sibling}function Mu(e){var t=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);We(t,s,a),t[He]=e,t[Fe]=a}catch(l){ge(e,e.return,l)}}var Jt=!1,De=!1,Xi=!1,zu=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function pg(e,t){if(e=e.containerInfo,mr=$l,e=Ld(e),_o(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var n=s.anchorOffset,l=s.focusNode;s=s.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var o=0,d=-1,m=-1,k=0,z=0,N=e,R=null;t:for(;;){for(var A;N!==a||n!==0&&N.nodeType!==3||(d=o+n),N!==l||s!==0&&N.nodeType!==3||(m=o+s),N.nodeType===3&&(o+=N.nodeValue.length),(A=N.firstChild)!==null;)R=N,N=A;for(;;){if(N===e)break t;if(R===a&&++k===n&&(d=o),R===l&&++z===s&&(m=o),(A=N.nextSibling)!==null)break;N=R,R=N.parentNode}N=A}a=d===-1||m===-1?null:{start:d,end:m}}else a=null}a=a||{start:0,end:0}}else a=null;for(gr={focusedElem:e,selectionRange:a},$l=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,a=t,n=l.memoizedProps,l=l.memoizedState,s=a.stateNode;try{var L=Qa(a.type,n);e=s.getSnapshotBeforeUpdate(L,l),s.__reactInternalSnapshotBeforeUpdate=e}catch(Z){ge(a,a.return,Z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)yr(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function Cu(e,t,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:$t(e,a),s&4&&pn(5,a);break;case 1:if($t(e,a),s&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){ge(a,a.return,o)}else{var n=Qa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ge(a,a.return,o)}}s&64&&Ru(a),s&512&&bn(a,a.return);break;case 3:if($t(e,a),s&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{gh(e,t)}catch(o){ge(a,a.return,o)}}break;case 27:t===null&&s&4&&Mu(a);case 26:case 5:$t(e,a),t===null&&s&4&&Au(a),s&512&&bn(a,a.return);break;case 12:$t(e,a);break;case 31:$t(e,a),s&4&&Ou(e,a);break;case 13:$t(e,a),s&4&&Bu(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Rg.bind(null,a),Wg(e,a))));break;case 22:if(s=a.memoizedState!==null||Jt,!s){t=t!==null&&t.memoizedState!==null||De,n=Jt;var l=De;Jt=s,(De=t)&&!l?Pt(e,a,(a.subtreeFlags&8772)!==0):$t(e,a),Jt=n,De=l}break;case 30:break;default:$t(e,a)}}function ju(e){var t=e.alternate;t!==null&&(e.alternate=null,ju(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&So(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,Pe=!1;function Ft(e,t,a){for(a=a.child;a!==null;)Nu(e,t,a),a=a.sibling}function Nu(e,t,a){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(_s,a)}catch{}switch(a.tag){case 26:De||Ot(a,t),Ft(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:De||Ot(a,t);var s=Re,n=Pe;Ta(a.type)&&(Re=a.stateNode,Pe=!1),Ft(e,t,a),In(a.stateNode),Re=s,Pe=n;break;case 5:De||Ot(a,t);case 6:if(s=Re,n=Pe,Re=null,Ft(e,t,a),Re=s,Pe=n,Re!==null)if(Pe)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(a.stateNode)}catch(l){ge(a,t,l)}else try{Re.removeChild(a.stateNode)}catch(l){ge(a,t,l)}break;case 18:Re!==null&&(Pe?(e=Re,Rc(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ds(e)):Rc(Re,a.stateNode));break;case 4:s=Re,n=Pe,Re=a.stateNode.containerInfo,Pe=!0,Ft(e,t,a),Re=s,Pe=n;break;case 0:case 11:case 14:case 15:ba(2,a,t),De||ba(4,a,t),Ft(e,t,a);break;case 1:De||(Ot(a,t),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Iu(a,t,s)),Ft(e,t,a);break;case 21:Ft(e,t,a);break;case 22:De=(s=De)||a.memoizedState!==null,Ft(e,t,a),De=s;break;default:Ft(e,t,a)}}function Ou(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ds(e)}catch(a){ge(t,t.return,a)}}}function Bu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ds(e)}catch(a){ge(t,t.return,a)}}function bg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new zu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new zu),t;default:throw Error(r(435,e.tag))}}function jl(e,t){var a=bg(e);t.forEach(function(s){if(!a.has(s)){a.add(s);var n=Ig.bind(null,e,s);s.then(n,n)}})}function et(e,t){var a=t.deletions;if(a!==null)for(var s=0;s<a.length;s++){var n=a[s],l=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 27:if(Ta(d.type)){Re=d.stateNode,Pe=!1;break e}break;case 5:Re=d.stateNode,Pe=!1;break e;case 3:case 4:Re=d.stateNode.containerInfo,Pe=!0;break e}d=d.return}if(Re===null)throw Error(r(160));Nu(l,o,n),Re=null,Pe=!1,l=n.alternate,l!==null&&(l.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Du(t,e),t=t.sibling}var Et=null;function Du(e,t){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(t,e),tt(e),s&4&&(ba(3,e,e.return),pn(3,e),ba(5,e,e.return));break;case 1:et(t,e),tt(e),s&512&&(De||a===null||Ot(a,a.return)),s&64&&Jt&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var n=Et;if(et(t,e),tt(e),s&512&&(De||a===null||Ot(a,a.return)),s&4){var l=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(s){case"title":l=n.getElementsByTagName("title")[0],(!l||l[Gs]||l[He]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(s),n.head.insertBefore(l,n.querySelector("head > title"))),We(l,s,a),l[He]=e,qe(l),s=l;break e;case"link":var o=Dc("link","href",n).get(s+(a.href||""));if(o){for(var d=0;d<o.length;d++)if(l=o[d],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(d,1);break t}}l=n.createElement(s),We(l,s,a),n.head.appendChild(l);break;case"meta":if(o=Dc("meta","content",n).get(s+(a.content||""))){for(d=0;d<o.length;d++)if(l=o[d],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(d,1);break t}}l=n.createElement(s),We(l,s,a),n.head.appendChild(l);break;default:throw Error(r(468,s))}l[He]=e,qe(l),s=l}e.stateNode=s}else Uc(n,e.type,e.stateNode);else e.stateNode=Bc(n,s,e.memoizedProps);else l!==s?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,s===null?Uc(n,e.type,e.stateNode):Bc(n,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Yi(e,e.memoizedProps,a.memoizedProps)}break;case 27:et(t,e),tt(e),s&512&&(De||a===null||Ot(a,a.return)),a!==null&&s&4&&Yi(e,e.memoizedProps,a.memoizedProps);break;case 5:if(et(t,e),tt(e),s&512&&(De||a===null||Ot(a,a.return)),e.flags&32){n=e.stateNode;try{ls(n,"")}catch(L){ge(e,e.return,L)}}s&4&&e.stateNode!=null&&(n=e.memoizedProps,Yi(e,n,a!==null?a.memoizedProps:n)),s&1024&&(Xi=!0);break;case 6:if(et(t,e),tt(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(L){ge(e,e.return,L)}}break;case 3:if(Ql=null,n=Et,Et=Vl(t.containerInfo),et(t,e),Et=n,tt(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Ds(t.containerInfo)}catch(L){ge(e,e.return,L)}Xi&&(Xi=!1,Uu(e));break;case 4:s=Et,Et=Vl(e.stateNode.containerInfo),et(t,e),tt(e),Et=s;break;case 12:et(t,e),tt(e);break;case 31:et(t,e),tt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,jl(e,s)));break;case 13:et(t,e),tt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ol=nt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,jl(e,s)));break;case 22:n=e.memoizedState!==null;var m=a!==null&&a.memoizedState!==null,k=Jt,z=De;if(Jt=k||n,De=z||m,et(t,e),De=z,Jt=k,tt(e),s&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||m||Jt||De||Za(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){m=a=t;try{if(l=m.stateNode,n)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=m.stateNode;var N=m.memoizedProps.style,R=N!=null&&N.hasOwnProperty("display")?N.display:null;d.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(L){ge(m,m.return,L)}}}else if(t.tag===6){if(a===null){m=t;try{m.stateNode.nodeValue=n?"":m.memoizedProps}catch(L){ge(m,m.return,L)}}}else if(t.tag===18){if(a===null){m=t;try{var A=m.stateNode;n?Ic(A,!0):Ic(m.stateNode,!1)}catch(L){ge(m,m.return,L)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,jl(e,a))));break;case 19:et(t,e),tt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,jl(e,s)));break;case 30:break;case 21:break;default:et(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{for(var a,s=e.return;s!==null;){if(Eu(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var n=a.stateNode,l=Wi(e);Cl(e,l,n);break;case 5:var o=a.stateNode;a.flags&32&&(ls(o,""),a.flags&=-33);var d=Wi(e);Cl(e,d,o);break;case 3:case 4:var m=a.stateNode.containerInfo,k=Wi(e);Vi(e,k,m);break;default:throw Error(r(161))}}catch(z){ge(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Uu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $t(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Cu(e,t.alternate,t),t=t.sibling}function Za(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ba(4,t,t.return),Za(t);break;case 1:Ot(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Iu(t,t.return,a),Za(t);break;case 27:In(t.stateNode);case 26:case 5:Ot(t,t.return),Za(t);break;case 22:t.memoizedState===null&&Za(t);break;case 30:Za(t);break;default:Za(t)}e=e.sibling}}function Pt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,n=e,l=t,o=l.flags;switch(l.tag){case 0:case 11:case 15:Pt(n,l,a),pn(4,l);break;case 1:if(Pt(n,l,a),s=l,n=s.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(k){ge(s,s.return,k)}if(s=l,n=s.updateQueue,n!==null){var d=s.stateNode;try{var m=n.shared.hiddenCallbacks;if(m!==null)for(n.shared.hiddenCallbacks=null,n=0;n<m.length;n++)mh(m[n],d)}catch(k){ge(s,s.return,k)}}a&&o&64&&Ru(l),bn(l,l.return);break;case 27:Mu(l);case 26:case 5:Pt(n,l,a),a&&s===null&&o&4&&Au(l),bn(l,l.return);break;case 12:Pt(n,l,a);break;case 31:Pt(n,l,a),a&&o&4&&Ou(n,l);break;case 13:Pt(n,l,a),a&&o&4&&Bu(n,l);break;case 22:l.memoizedState===null&&Pt(n,l,a),bn(l,l.return);break;case 30:break;default:Pt(n,l,a)}t=t.sibling}}function Qi(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&an(a))}function Zi(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&an(e))}function Mt(e,t,a,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)qu(e,t,a,s),t=t.sibling}function qu(e,t,a,s){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,a,s),n&2048&&pn(9,t);break;case 1:Mt(e,t,a,s);break;case 3:Mt(e,t,a,s),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&an(e)));break;case 12:if(n&2048){Mt(e,t,a,s),e=t.stateNode;try{var l=t.memoizedProps,o=l.id,d=l.onPostCommit;typeof d=="function"&&d(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){ge(t,t.return,m)}}else Mt(e,t,a,s);break;case 31:Mt(e,t,a,s);break;case 13:Mt(e,t,a,s);break;case 23:break;case 22:l=t.stateNode,o=t.alternate,t.memoizedState!==null?l._visibility&2?Mt(e,t,a,s):yn(e,t):l._visibility&2?Mt(e,t,a,s):(l._visibility|=2,Rs(e,t,a,s,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Qi(o,t);break;case 24:Mt(e,t,a,s),n&2048&&Zi(t.alternate,t);break;default:Mt(e,t,a,s)}}function Rs(e,t,a,s,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,o=t,d=a,m=s,k=o.flags;switch(o.tag){case 0:case 11:case 15:Rs(l,o,d,m,n),pn(8,o);break;case 23:break;case 22:var z=o.stateNode;o.memoizedState!==null?z._visibility&2?Rs(l,o,d,m,n):yn(l,o):(z._visibility|=2,Rs(l,o,d,m,n)),n&&k&2048&&Qi(o.alternate,o);break;case 24:Rs(l,o,d,m,n),n&&k&2048&&Zi(o.alternate,o);break;default:Rs(l,o,d,m,n)}t=t.sibling}}function yn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,s=t,n=s.flags;switch(s.tag){case 22:yn(a,s),n&2048&&Qi(s.alternate,s);break;case 24:yn(a,s),n&2048&&Zi(s.alternate,s);break;default:yn(a,s)}t=t.sibling}}var wn=8192;function Is(e,t,a){if(e.subtreeFlags&wn)for(e=e.child;e!==null;)Ku(e,t,a),e=e.sibling}function Ku(e,t,a){switch(e.tag){case 26:Is(e,t,a),e.flags&wn&&e.memoizedState!==null&&sp(a,Et,e.memoizedState,e.memoizedProps);break;case 5:Is(e,t,a);break;case 3:case 4:var s=Et;Et=Vl(e.stateNode.containerInfo),Is(e,t,a),Et=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=wn,wn=16777216,Is(e,t,a),wn=s):Is(e,t,a));break;default:Is(e,t,a)}}function _u(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];Ke=s,Lu(s,e)}_u(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hu(e),e=e.sibling}function Hu(e){switch(e.tag){case 0:case 11:case 15:xn(e),e.flags&2048&&ba(9,e,e.return);break;case 3:xn(e);break;case 12:xn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Nl(e)):xn(e);break;default:xn(e)}}function Nl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];Ke=s,Lu(s,e)}_u(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ba(8,t,t.return),Nl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Nl(t));break;default:Nl(t)}e=e.sibling}}function Lu(e,t){for(;Ke!==null;){var a=Ke;switch(a.tag){case 0:case 11:case 15:ba(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:an(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Ke=s;else e:for(a=e;Ke!==null;){s=Ke;var n=s.sibling,l=s.return;if(ju(s),s===a){Ke=null;break e}if(n!==null){n.return=l,Ke=n;break e}Ke=l}}}var yg={getCacheForType:function(e){var t=Ge(Ne),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ge(Ne).controller.signal}},wg=typeof WeakMap=="function"?WeakMap:Map,ce=0,ve=null,ne=null,ie=0,me=0,ut=null,ya=!1,As=!1,Ji=!1,ea=0,Ee=0,wa=0,Ja=0,Fi=0,ct=0,Es=0,vn=null,at=null,$i=!1,Ol=0,Gu=0,Bl=1/0,Dl=null,xa=null,Ue=0,va=null,Ms=null,ta=0,Pi=0,er=null,Yu=null,kn=0,tr=null;function ft(){return(ce&2)!==0&&ie!==0?ie&-ie:C.T!==null?ir():od()}function Wu(){if(ct===0)if((ie&536870912)===0||de){var e=Yn;Yn<<=1,(Yn&3932160)===0&&(Yn=262144),ct=e}else ct=536870912;return e=dt.current,e!==null&&(e.flags|=32),ct}function st(e,t,a){(e===ve&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(zs(e,0),ka(e,ie,ct,!1)),Ls(e,a),((ce&2)===0||e!==ve)&&(e===ve&&((ce&2)===0&&(Ja|=a),Ee===4&&ka(e,ie,ct,!1)),Bt(e))}function Vu(e,t,a){if((ce&6)!==0)throw Error(r(327));var s=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Hs(e,t),n=s?kg(e,t):sr(e,t,!0),l=s;do{if(n===0){As&&!s&&ka(e,t,0,!1);break}else{if(a=e.current.alternate,l&&!xg(a)){n=sr(e,t,!1),l=!1;continue}if(n===2){if(l=t,e.errorRecoveryDisabledLanes&l)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var d=e;n=vn;var m=d.current.memoizedState.isDehydrated;if(m&&(zs(d,o).flags|=256),o=sr(d,o,!1),o!==2){if(Ji&&!m){d.errorRecoveryDisabledLanes|=l,Ja|=l,n=4;break e}l=at,at=n,l!==null&&(at===null?at=l:at.push.apply(at,l))}n=o}if(l=!1,n!==2)continue}}if(n===1){zs(e,0),ka(e,t,0,!0);break}e:{switch(s=e,l=n,l){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:ka(s,t,ct,!ya);break e;case 2:at=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(n=Ol+300-nt(),10<n)){if(ka(s,t,ct,!ya),Vn(s,0,!0)!==0)break e;ta=t,s.timeoutHandle=Sc(Xu.bind(null,s,a,at,Dl,$i,t,ct,Ja,Es,ya,l,"Throttled",-0,0),n);break e}Xu(s,a,at,Dl,$i,t,ct,Ja,Es,ya,l,null,-0,0)}}break}while(!0);Bt(e)}function Xu(e,t,a,s,n,l,o,d,m,k,z,N,R,A){if(e.timeoutHandle=-1,N=t.subtreeFlags,N&8192||(N&16785408)===16785408){N={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_t},Ku(t,l,N);var L=(l&62914560)===l?Ol-nt():(l&4194048)===l?Gu-nt():0;if(L=np(N,L),L!==null){ta=l,e.cancelPendingCommit=L(tc.bind(null,e,t,l,a,s,n,o,d,m,z,N,null,R,A)),ka(e,l,o,!k);return}}tc(e,t,l,a,s,n,o,d,m)}function xg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var n=a[s],l=n.getSnapshot;n=n.value;try{if(!it(l(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ka(e,t,a,s){t&=~Fi,t&=~Ja,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var n=t;0<n;){var l=31-ot(n),o=1<<l;s[l]=-1,n&=~o}a!==0&&sd(e,a,t)}function Ul(){return(ce&6)===0?(Sn(0),!1):!0}function ar(){if(ne!==null){if(me===0)var e=ne.return;else e=ne,Yt=Ha=null,yi(e),xs=null,nn=0,e=ne;for(;e!==null;)Tu(e.alternate,e),e=e.return;ne=null}}function zs(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,_g(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,ar(),ve=e,ne=a=Lt(e.current,null),ie=t,me=0,ut=null,ya=!1,As=Hs(e,t),Ji=!1,Es=ct=Fi=Ja=wa=Ee=0,at=vn=null,$i=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var n=31-ot(s),l=1<<n;t|=e[n],s&=~l}return ea=t,nl(),a}function Qu(e,t){te=null,C.H=fn,t===ws||t===cl?(t=hh(),me=3):t===oi?(t=hh(),me=4):me=t===Oi?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ut=t,ne===null&&(Ee=1,Il(e,yt(t,e.current)))}function Zu(){var e=dt.current;return e===null?!0:(ie&4194048)===ie?kt===null:(ie&62914560)===ie||(ie&536870912)!==0?e===kt:!1}function Ju(){var e=C.H;return C.H=fn,e===null?fn:e}function Fu(){var e=C.A;return C.A=yg,e}function ql(){Ee=4,ya||(ie&4194048)!==ie&&dt.current!==null||(As=!0),(wa&134217727)===0&&(Ja&134217727)===0||ve===null||ka(ve,ie,ct,!1)}function sr(e,t,a){var s=ce;ce|=2;var n=Ju(),l=Fu();(ve!==e||ie!==t)&&(Dl=null,zs(e,t)),t=!1;var o=Ee;e:do try{if(me!==0&&ne!==null){var d=ne,m=ut;switch(me){case 8:ar(),o=6;break e;case 3:case 2:case 9:case 6:dt.current===null&&(t=!0);var k=me;if(me=0,ut=null,Cs(e,d,m,k),a&&As){o=0;break e}break;default:k=me,me=0,ut=null,Cs(e,d,m,k)}}vg(),o=Ee;break}catch(z){Qu(e,z)}while(!0);return t&&e.shellSuspendCounter++,Yt=Ha=null,ce=s,C.H=n,C.A=l,ne===null&&(ve=null,ie=0,nl()),o}function vg(){for(;ne!==null;)$u(ne)}function kg(e,t){var a=ce;ce|=2;var s=Ju(),n=Fu();ve!==e||ie!==t?(Dl=null,Bl=nt()+500,zs(e,t)):As=Hs(e,t);e:do try{if(me!==0&&ne!==null){t=ne;var l=ut;t:switch(me){case 1:me=0,ut=null,Cs(e,t,l,1);break;case 2:case 9:if(rh(l)){me=0,ut=null,Pu(t);break}t=function(){me!==2&&me!==9||ve!==e||(me=7),Bt(e)},l.then(t,t);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:rh(l)?(me=0,ut=null,Pu(t)):(me=0,ut=null,Cs(e,t,l,7));break;case 5:var o=null;switch(ne.tag){case 26:o=ne.memoizedState;case 5:case 27:var d=ne;if(o?qc(o):d.stateNode.complete){me=0,ut=null;var m=d.sibling;if(m!==null)ne=m;else{var k=d.return;k!==null?(ne=k,Kl(k)):ne=null}break t}}me=0,ut=null,Cs(e,t,l,5);break;case 6:me=0,ut=null,Cs(e,t,l,6);break;case 8:ar(),Ee=6;break e;default:throw Error(r(462))}}Sg();break}catch(z){Qu(e,z)}while(!0);return Yt=Ha=null,C.H=s,C.A=n,ce=a,ne!==null?0:(ve=null,ie=0,nl(),Ee)}function Sg(){for(;ne!==null&&!Vf();)$u(ne)}function $u(e){var t=ku(e.alternate,e,ea);e.memoizedProps=e.pendingProps,t===null?Kl(e):ne=t}function Pu(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=pu(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=pu(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:yi(t);default:Tu(a,t),t=ne=Fd(t,ea),t=ku(a,t,ea)}e.memoizedProps=e.pendingProps,t===null?Kl(e):ne=t}function Cs(e,t,a,s){Yt=Ha=null,yi(t),xs=null,nn=0;var n=t.return;try{if(ug(e,n,t,a,ie)){Ee=1,Il(e,yt(a,e.current)),ne=null;return}}catch(l){if(n!==null)throw ne=n,l;Ee=1,Il(e,yt(a,e.current)),ne=null;return}t.flags&32768?(de||s===1?e=!0:As||(ie&536870912)!==0?e=!1:(ya=e=!0,(s===2||s===9||s===3||s===6)&&(s=dt.current,s!==null&&s.tag===13&&(s.flags|=16384))),ec(t,e)):Kl(t)}function Kl(e){var t=e;do{if((t.flags&32768)!==0){ec(t,ya);return}e=t.return;var a=mg(t.alternate,t,ea);if(a!==null){ne=a;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Ee===0&&(Ee=5)}function ec(e,t){do{var a=gg(e.alternate,e);if(a!==null){a.flags&=32767,ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=a}while(e!==null);Ee=6,ne=null}function tc(e,t,a,s,n,l,o,d,m){e.cancelPendingCommit=null;do _l();while(Ue!==0);if((ce&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(l=t.lanes|t.childLanes,l|=Wo,am(e,a,l,o,d,m),e===ve&&(ne=ve=null,ie=0),Ms=t,va=e,ta=a,Pi=l,er=n,Yu=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ag(Ln,function(){return oc(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=C.T,C.T=null,n=K.p,K.p=2,o=ce,ce|=4;try{pg(e,t,a)}finally{ce=o,K.p=n,C.T=s}}Ue=1,ac(),sc(),nc()}}function ac(){if(Ue===1){Ue=0;var e=va,t=Ms,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var s=K.p;K.p=2;var n=ce;ce|=4;try{Du(t,e);var l=gr,o=Ld(e.containerInfo),d=l.focusedElem,m=l.selectionRange;if(o!==d&&d&&d.ownerDocument&&Hd(d.ownerDocument.documentElement,d)){if(m!==null&&_o(d)){var k=m.start,z=m.end;if(z===void 0&&(z=k),"selectionStart"in d)d.selectionStart=k,d.selectionEnd=Math.min(z,d.value.length);else{var N=d.ownerDocument||document,R=N&&N.defaultView||window;if(R.getSelection){var A=R.getSelection(),L=d.textContent.length,Z=Math.min(m.start,L),we=m.end===void 0?Z:Math.min(m.end,L);!A.extend&&Z>we&&(o=we,we=Z,Z=o);var x=_d(d,Z),b=_d(d,we);if(x&&b&&(A.rangeCount!==1||A.anchorNode!==x.node||A.anchorOffset!==x.offset||A.focusNode!==b.node||A.focusOffset!==b.offset)){var v=N.createRange();v.setStart(x.node,x.offset),A.removeAllRanges(),Z>we?(A.addRange(v),A.extend(b.node,b.offset)):(v.setEnd(b.node,b.offset),A.addRange(v))}}}}for(N=[],A=d;A=A.parentNode;)A.nodeType===1&&N.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<N.length;d++){var j=N[d];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}$l=!!mr,gr=mr=null}finally{ce=n,K.p=s,C.T=a}}e.current=t,Ue=2}}function sc(){if(Ue===2){Ue=0;var e=va,t=Ms,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var s=K.p;K.p=2;var n=ce;ce|=4;try{Cu(e,t.alternate,t)}finally{ce=n,K.p=s,C.T=a}}Ue=3}}function nc(){if(Ue===4||Ue===3){Ue=0,Xf();var e=va,t=Ms,a=ta,s=Yu;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ue=5:(Ue=0,Ms=va=null,lc(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(xa=null),vo(a),t=t.stateNode,lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(_s,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=C.T,n=K.p,K.p=2,C.T=null;try{for(var l=e.onRecoverableError,o=0;o<s.length;o++){var d=s[o];l(d.value,{componentStack:d.stack})}}finally{C.T=t,K.p=n}}(ta&3)!==0&&_l(),Bt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===tr?kn++:(kn=0,tr=e):kn=0,Sn(0)}}function lc(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,an(t)))}function _l(){return ac(),sc(),nc(),oc()}function oc(){if(Ue!==5)return!1;var e=va,t=Pi;Pi=0;var a=vo(ta),s=C.T,n=K.p;try{K.p=32>a?32:a,C.T=null,a=er,er=null;var l=va,o=ta;if(Ue=0,Ms=va=null,ta=0,(ce&6)!==0)throw Error(r(331));var d=ce;if(ce|=4,Hu(l.current),qu(l,l.current,o,a),ce=d,Sn(0,!1),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(_s,l)}catch{}return!0}finally{K.p=n,C.T=s,lc(e,t)}}function ic(e,t,a){t=yt(a,t),t=Ni(e.stateNode,t,2),e=ma(e,t,2),e!==null&&(Ls(e,2),Bt(e))}function ge(e,t,a){if(e.tag===3)ic(e,e,a);else for(;t!==null;){if(t.tag===3){ic(t,e,a);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(xa===null||!xa.has(s))){e=yt(a,e),a=ru(2),s=ma(t,a,2),s!==null&&(du(a,s,t,e),Ls(s,2),Bt(s));break}}t=t.return}}function nr(e,t,a){var s=e.pingCache;if(s===null){s=e.pingCache=new wg;var n=new Set;s.set(t,n)}else n=s.get(t),n===void 0&&(n=new Set,s.set(t,n));n.has(a)||(Ji=!0,n.add(a),e=Tg.bind(null,e,t,a),t.then(e,e))}function Tg(e,t,a){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ve===e&&(ie&a)===a&&(Ee===4||Ee===3&&(ie&62914560)===ie&&300>nt()-Ol?(ce&2)===0&&zs(e,0):Fi|=a,Es===ie&&(Es=0)),Bt(e)}function rc(e,t){t===0&&(t=ad()),e=qa(e,t),e!==null&&(Ls(e,t),Bt(e))}function Rg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),rc(e,a)}function Ig(e,t){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(t),rc(e,a)}function Ag(e,t){return bo(e,t)}var Hl=null,js=null,lr=!1,Ll=!1,or=!1,Sa=0;function Bt(e){e!==js&&e.next===null&&(js===null?Hl=js=e:js=js.next=e),Ll=!0,lr||(lr=!0,Mg())}function Sn(e,t){if(!or&&Ll){or=!0;do for(var a=!1,s=Hl;s!==null;){if(e!==0){var n=s.pendingLanes;if(n===0)var l=0;else{var o=s.suspendedLanes,d=s.pingedLanes;l=(1<<31-ot(42|e)+1)-1,l&=n&~(o&~d),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,cc(s,l))}else l=ie,l=Vn(s,s===ve?l:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(l&3)===0||Hs(s,l)||(a=!0,cc(s,l));s=s.next}while(a);or=!1}}function Eg(){dc()}function dc(){Ll=lr=!1;var e=0;Sa!==0&&Kg()&&(e=Sa);for(var t=nt(),a=null,s=Hl;s!==null;){var n=s.next,l=hc(s,t);l===0?(s.next=null,a===null?Hl=n:a.next=n,n===null&&(js=a)):(a=s,(e!==0||(l&3)!==0)&&(Ll=!0)),s=n}Ue!==0&&Ue!==5||Sn(e),Sa!==0&&(Sa=0)}function hc(e,t){for(var a=e.suspendedLanes,s=e.pingedLanes,n=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var o=31-ot(l),d=1<<o,m=n[o];m===-1?((d&a)===0||(d&s)!==0)&&(n[o]=tm(d,t)):m<=t&&(e.expiredLanes|=d),l&=~d}if(t=ve,a=ie,a=Vn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===t&&(me===2||me===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&yo(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Hs(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(s!==null&&yo(s),vo(a)){case 2:case 8:a=ed;break;case 32:a=Ln;break;case 268435456:a=td;break;default:a=Ln}return s=uc.bind(null,e),a=bo(a,s),e.callbackPriority=t,e.callbackNode=a,t}return s!==null&&s!==null&&yo(s),e.callbackPriority=2,e.callbackNode=null,2}function uc(e,t){if(Ue!==0&&Ue!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(_l()&&e.callbackNode!==a)return null;var s=ie;return s=Vn(e,e===ve?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Vu(e,s,t),hc(e,nt()),e.callbackNode!=null&&e.callbackNode===a?uc.bind(null,e):null)}function cc(e,t){if(_l())return null;Vu(e,t,!0)}function Mg(){Hg(function(){(ce&6)!==0?bo(Pr,Eg):dc()})}function ir(){if(Sa===0){var e=bs;e===0&&(e=Gn,Gn<<=1,(Gn&261888)===0&&(Gn=256)),Sa=e}return Sa}function fc(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jn(""+e)}function mc(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function zg(e,t,a,s,n){if(t==="submit"&&a&&a.stateNode===n){var l=fc((n[Fe]||null).action),o=s.submitter;o&&(t=(t=o[Fe]||null)?fc(t.formAction):o.getAttribute("formAction"),t!==null&&(l=t,o=null));var d=new el("action","action",null,s,n);e.push({event:d,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Sa!==0){var m=o?mc(n,o):new FormData(n);Ai(a,{pending:!0,data:m,method:n.method,action:l},null,m)}}else typeof l=="function"&&(d.preventDefault(),m=o?mc(n,o):new FormData(n),Ai(a,{pending:!0,data:m,method:n.method,action:l},l,m))},currentTarget:n}]})}}for(var rr=0;rr<Yo.length;rr++){var dr=Yo[rr],Cg=dr.toLowerCase(),jg=dr[0].toUpperCase()+dr.slice(1);At(Cg,"on"+jg)}At(Wd,"onAnimationEnd"),At(Vd,"onAnimationIteration"),At(Xd,"onAnimationStart"),At("dblclick","onDoubleClick"),At("focusin","onFocus"),At("focusout","onBlur"),At(Qm,"onTransitionRun"),At(Zm,"onTransitionStart"),At(Jm,"onTransitionCancel"),At(Qd,"onTransitionEnd"),ss("onMouseEnter",["mouseout","mouseover"]),ss("onMouseLeave",["mouseout","mouseover"]),ss("onPointerEnter",["pointerout","pointerover"]),ss("onPointerLeave",["pointerout","pointerover"]),Oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ng=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tn));function gc(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],n=s.event;s=s.listeners;e:{var l=void 0;if(t)for(var o=s.length-1;0<=o;o--){var d=s[o],m=d.instance,k=d.currentTarget;if(d=d.listener,m!==l&&n.isPropagationStopped())break e;l=d,n.currentTarget=k;try{l(n)}catch(z){sl(z)}n.currentTarget=null,l=m}else for(o=0;o<s.length;o++){if(d=s[o],m=d.instance,k=d.currentTarget,d=d.listener,m!==l&&n.isPropagationStopped())break e;l=d,n.currentTarget=k;try{l(n)}catch(z){sl(z)}n.currentTarget=null,l=m}}}}function le(e,t){var a=t[ko];a===void 0&&(a=t[ko]=new Set);var s=e+"__bubble";a.has(s)||(pc(t,e,2,!1),a.add(s))}function hr(e,t,a){var s=0;t&&(s|=4),pc(a,e,s,t)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function ur(e){if(!e[Gl]){e[Gl]=!0,dd.forEach(function(a){a!=="selectionchange"&&(Ng.has(a)||hr(a,!1,e),hr(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gl]||(t[Gl]=!0,hr("selectionchange",!1,t))}}function pc(e,t,a,s){switch(Wc(t)){case 2:var n=ip;break;case 8:n=rp;break;default:n=Ir}a=n.bind(null,t,a,e),n=void 0,!Co||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),s?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function cr(e,t,a,s,n){var l=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var d=s.stateNode.containerInfo;if(d===n)break;if(o===4)for(o=s.return;o!==null;){var m=o.tag;if((m===3||m===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;d!==null;){if(o=es(d),o===null)return;if(m=o.tag,m===5||m===6||m===26||m===27){s=l=o;continue e}d=d.parentNode}}s=s.return}vd(function(){var k=l,z=Mo(a),N=[];e:{var R=Zd.get(e);if(R!==void 0){var A=el,L=e;switch(e){case"keypress":if($n(a)===0)break e;case"keydown":case"keyup":A=Im;break;case"focusin":L="focus",A=Bo;break;case"focusout":L="blur",A=Bo;break;case"beforeblur":case"afterblur":A=Bo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Mm;break;case Wd:case Vd:case Xd:A=bm;break;case Qd:A=Cm;break;case"scroll":case"scrollend":A=cm;break;case"wheel":A=Nm;break;case"copy":case"cut":case"paste":A=wm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Id;break;case"toggle":case"beforetoggle":A=Bm}var Z=(t&4)!==0,we=!Z&&(e==="scroll"||e==="scrollend"),x=Z?R!==null?R+"Capture":null:R;Z=[];for(var b=k,v;b!==null;){var j=b;if(v=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||v===null||x===null||(j=Ws(b,x),j!=null&&Z.push(Rn(b,j,v))),we)break;b=b.return}0<Z.length&&(R=new A(R,L,null,a,z),N.push({event:R,listeners:Z}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",R&&a!==Eo&&(L=a.relatedTarget||a.fromElement)&&(es(L)||L[Pa]))break e;if((A||R)&&(R=z.window===z?z:(R=z.ownerDocument)?R.defaultView||R.parentWindow:window,A?(L=a.relatedTarget||a.toElement,A=k,L=L?es(L):null,L!==null&&(we=g(L),Z=L.tag,L!==we||Z!==5&&Z!==27&&Z!==6)&&(L=null)):(A=null,L=k),A!==L)){if(Z=Td,j="onMouseLeave",x="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(Z=Id,j="onPointerLeave",x="onPointerEnter",b="pointer"),we=A==null?R:Ys(A),v=L==null?R:Ys(L),R=new Z(j,b+"leave",A,a,z),R.target=we,R.relatedTarget=v,j=null,es(z)===k&&(Z=new Z(x,b+"enter",L,a,z),Z.target=v,Z.relatedTarget=we,j=Z),we=j,A&&L)t:{for(Z=Og,x=A,b=L,v=0,j=x;j;j=Z(j))v++;j=0;for(var X=b;X;X=Z(X))j++;for(;0<v-j;)x=Z(x),v--;for(;0<j-v;)b=Z(b),j--;for(;v--;){if(x===b||b!==null&&x===b.alternate){Z=x;break t}x=Z(x),b=Z(b)}Z=null}else Z=null;A!==null&&bc(N,R,A,Z,!1),L!==null&&we!==null&&bc(N,we,L,Z,!0)}}e:{if(R=k?Ys(k):window,A=R.nodeName&&R.nodeName.toLowerCase(),A==="select"||A==="input"&&R.type==="file")var he=Od;else if(jd(R))if(Bd)he=Wm;else{he=Gm;var W=Lm}else A=R.nodeName,!A||A.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?k&&Ao(k.elementType)&&(he=Od):he=Ym;if(he&&(he=he(e,k))){Nd(N,he,a,z);break e}W&&W(e,R,k),e==="focusout"&&k&&R.type==="number"&&k.memoizedProps.value!=null&&Io(R,"number",R.value)}switch(W=k?Ys(k):window,e){case"focusin":(jd(W)||W.contentEditable==="true")&&(ds=W,Ho=k,Ps=null);break;case"focusout":Ps=Ho=ds=null;break;case"mousedown":Lo=!0;break;case"contextmenu":case"mouseup":case"dragend":Lo=!1,Gd(N,a,z);break;case"selectionchange":if(Xm)break;case"keydown":case"keyup":Gd(N,a,z)}var ae;if(Uo)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else rs?zd(e,a)&&(re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(Ad&&a.locale!=="ko"&&(rs||re!=="onCompositionStart"?re==="onCompositionEnd"&&rs&&(ae=kd()):(ia=z,jo="value"in ia?ia.value:ia.textContent,rs=!0)),W=Yl(k,re),0<W.length&&(re=new Rd(re,e,null,a,z),N.push({event:re,listeners:W}),ae?re.data=ae:(ae=Cd(a),ae!==null&&(re.data=ae)))),(ae=Um?qm(e,a):Km(e,a))&&(re=Yl(k,"onBeforeInput"),0<re.length&&(W=new Rd("onBeforeInput","beforeinput",null,a,z),N.push({event:W,listeners:re}),W.data=ae)),zg(N,e,k,a,z)}gc(N,t)})}function Rn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Yl(e,t){for(var a=t+"Capture",s=[];e!==null;){var n=e,l=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||l===null||(n=Ws(e,a),n!=null&&s.unshift(Rn(e,n,l)),n=Ws(e,t),n!=null&&s.push(Rn(e,n,l))),e.tag===3)return s;e=e.return}return[]}function Og(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bc(e,t,a,s,n){for(var l=t._reactName,o=[];a!==null&&a!==s;){var d=a,m=d.alternate,k=d.stateNode;if(d=d.tag,m!==null&&m===s)break;d!==5&&d!==26&&d!==27||k===null||(m=k,n?(k=Ws(a,l),k!=null&&o.unshift(Rn(a,k,m))):n||(k=Ws(a,l),k!=null&&o.push(Rn(a,k,m)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Bg=/\r\n?/g,Dg=/\u0000|\uFFFD/g;function yc(e){return(typeof e=="string"?e:""+e).replace(Bg,`
`).replace(Dg,"")}function wc(e,t){return t=yc(t),yc(e)===t}function ye(e,t,a,s,n,l){switch(a){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||ls(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&ls(e,""+s);break;case"className":Qn(e,"class",s);break;case"tabIndex":Qn(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Qn(e,a,s);break;case"style":wd(e,s,l);break;case"data":if(t!=="object"){Qn(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Jn(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(t!=="input"&&ye(e,t,"name",n.name,n,null),ye(e,t,"formEncType",n.formEncType,n,null),ye(e,t,"formMethod",n.formMethod,n,null),ye(e,t,"formTarget",n.formTarget,n,null)):(ye(e,t,"encType",n.encType,n,null),ye(e,t,"method",n.method,n,null),ye(e,t,"target",n.target,n,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Jn(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=_t);break;case"onScroll":s!=null&&le("scroll",e);break;case"onScrollEnd":s!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Jn(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":le("beforetoggle",e),le("toggle",e),Xn(e,"popover",s);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Xn(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=hm.get(a)||a,Xn(e,a,s))}}function fr(e,t,a,s,n,l){switch(a){case"style":wd(e,s,l);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?ls(e,s):(typeof s=="number"||typeof s=="bigint")&&ls(e,""+s);break;case"onScroll":s!=null&&le("scroll",e);break;case"onScrollEnd":s!=null&&le("scrollend",e);break;case"onClick":s!=null&&(e.onclick=_t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),l=e[Fe]||null,l=l!=null?l[a]:null,typeof l=="function"&&e.removeEventListener(t,l,n),typeof s=="function")){typeof l!="function"&&l!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,s,n);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Xn(e,a,s)}}}function We(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var s=!1,n=!1,l;for(l in a)if(a.hasOwnProperty(l)){var o=a[l];if(o!=null)switch(l){case"src":s=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ye(e,t,l,o,a,null)}}n&&ye(e,t,"srcSet",a.srcSet,a,null),s&&ye(e,t,"src",a.src,a,null);return;case"input":le("invalid",e);var d=l=o=n=null,m=null,k=null;for(s in a)if(a.hasOwnProperty(s)){var z=a[s];if(z!=null)switch(s){case"name":n=z;break;case"type":o=z;break;case"checked":m=z;break;case"defaultChecked":k=z;break;case"value":l=z;break;case"defaultValue":d=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(137,t));break;default:ye(e,t,s,z,a,null)}}gd(e,l,d,m,k,o,n,!1);return;case"select":le("invalid",e),s=o=l=null;for(n in a)if(a.hasOwnProperty(n)&&(d=a[n],d!=null))switch(n){case"value":l=d;break;case"defaultValue":o=d;break;case"multiple":s=d;default:ye(e,t,n,d,a,null)}t=l,a=o,e.multiple=!!s,t!=null?ns(e,!!s,t,!1):a!=null&&ns(e,!!s,a,!0);return;case"textarea":le("invalid",e),l=n=s=null;for(o in a)if(a.hasOwnProperty(o)&&(d=a[o],d!=null))switch(o){case"value":s=d;break;case"defaultValue":n=d;break;case"children":l=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(r(91));break;default:ye(e,t,o,d,a,null)}bd(e,s,n,l);return;case"option":for(m in a)if(a.hasOwnProperty(m)&&(s=a[m],s!=null))switch(m){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ye(e,t,m,s,a,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(s=0;s<Tn.length;s++)le(Tn[s],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(s=a[k],s!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ye(e,t,k,s,a,null)}return;default:if(Ao(t)){for(z in a)a.hasOwnProperty(z)&&(s=a[z],s!==void 0&&fr(e,t,z,s,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(s=a[d],s!=null&&ye(e,t,d,s,a,null))}function Ug(e,t,a,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,l=null,o=null,d=null,m=null,k=null,z=null;for(A in a){var N=a[A];if(a.hasOwnProperty(A)&&N!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":m=N;default:s.hasOwnProperty(A)||ye(e,t,A,null,s,N)}}for(var R in s){var A=s[R];if(N=a[R],s.hasOwnProperty(R)&&(A!=null||N!=null))switch(R){case"type":l=A;break;case"name":n=A;break;case"checked":k=A;break;case"defaultChecked":z=A;break;case"value":o=A;break;case"defaultValue":d=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(137,t));break;default:A!==N&&ye(e,t,R,A,s,N)}}Ro(e,o,d,m,k,z,l,n);return;case"select":A=o=d=R=null;for(l in a)if(m=a[l],a.hasOwnProperty(l)&&m!=null)switch(l){case"value":break;case"multiple":A=m;default:s.hasOwnProperty(l)||ye(e,t,l,null,s,m)}for(n in s)if(l=s[n],m=a[n],s.hasOwnProperty(n)&&(l!=null||m!=null))switch(n){case"value":R=l;break;case"defaultValue":d=l;break;case"multiple":o=l;default:l!==m&&ye(e,t,n,l,s,m)}t=d,a=o,s=A,R!=null?ns(e,!!a,R,!1):!!s!=!!a&&(t!=null?ns(e,!!a,t,!0):ns(e,!!a,a?[]:"",!1));return;case"textarea":A=R=null;for(d in a)if(n=a[d],a.hasOwnProperty(d)&&n!=null&&!s.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:ye(e,t,d,null,s,n)}for(o in s)if(n=s[o],l=a[o],s.hasOwnProperty(o)&&(n!=null||l!=null))switch(o){case"value":R=n;break;case"defaultValue":A=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==l&&ye(e,t,o,n,s,l)}pd(e,R,A);return;case"option":for(var L in a)if(R=a[L],a.hasOwnProperty(L)&&R!=null&&!s.hasOwnProperty(L))switch(L){case"selected":e.selected=!1;break;default:ye(e,t,L,null,s,R)}for(m in s)if(R=s[m],A=a[m],s.hasOwnProperty(m)&&R!==A&&(R!=null||A!=null))switch(m){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:ye(e,t,m,R,s,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in a)R=a[Z],a.hasOwnProperty(Z)&&R!=null&&!s.hasOwnProperty(Z)&&ye(e,t,Z,null,s,R);for(k in s)if(R=s[k],A=a[k],s.hasOwnProperty(k)&&R!==A&&(R!=null||A!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,t));break;default:ye(e,t,k,R,s,A)}return;default:if(Ao(t)){for(var we in a)R=a[we],a.hasOwnProperty(we)&&R!==void 0&&!s.hasOwnProperty(we)&&fr(e,t,we,void 0,s,R);for(z in s)R=s[z],A=a[z],!s.hasOwnProperty(z)||R===A||R===void 0&&A===void 0||fr(e,t,z,R,s,A);return}}for(var x in a)R=a[x],a.hasOwnProperty(x)&&R!=null&&!s.hasOwnProperty(x)&&ye(e,t,x,null,s,R);for(N in s)R=s[N],A=a[N],!s.hasOwnProperty(N)||R===A||R==null&&A==null||ye(e,t,N,R,s,A)}function xc(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var n=a[s],l=n.transferSize,o=n.initiatorType,d=n.duration;if(l&&d&&xc(o)){for(o=0,d=n.responseEnd,s+=1;s<a.length;s++){var m=a[s],k=m.startTime;if(k>d)break;var z=m.transferSize,N=m.initiatorType;z&&xc(N)&&(m=m.responseEnd,o+=z*(m<d?1:(d-k)/(m-k)))}if(--s,t+=8*(l+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var mr=null,gr=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function vc(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kc(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function pr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var br=null;function Kg(){var e=window.event;return e&&e.type==="popstate"?e===br?!1:(br=e,!0):(br=null,!1)}var Sc=typeof setTimeout=="function"?setTimeout:void 0,_g=typeof clearTimeout=="function"?clearTimeout:void 0,Tc=typeof Promise=="function"?Promise:void 0,Hg=typeof queueMicrotask=="function"?queueMicrotask:typeof Tc<"u"?function(e){return Tc.resolve(null).then(e).catch(Lg)}:Sc;function Lg(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function Rc(e,t){var a=t,s=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(n),Ds(t);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")In(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,In(a);for(var l=a.firstChild;l;){var o=l.nextSibling,d=l.nodeName;l[Gs]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=o}}else a==="body"&&In(e.ownerDocument.body);a=n}while(a);Ds(t)}function Ic(e,t){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function yr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yr(a),So(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Gg(e,t,a,s){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Gs])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=St(e.nextSibling),e===null)break}return null}function Yg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=St(e.nextSibling),e===null))return null;return e}function Ac(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=St(e.nextSibling),e===null))return null;return e}function wr(e){return e.data==="$?"||e.data==="$~"}function xr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Wg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var s=function(){t(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var vr=null;function Ec(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return St(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Mc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function zc(e,t,a){switch(t=Wl(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function In(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);So(e)}var Tt=new Map,Cc=new Set;function Vl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=K.d;K.d={f:Vg,r:Xg,D:Qg,C:Zg,L:Jg,m:Fg,X:Pg,S:$g,M:ep};function Vg(){var e=aa.f(),t=Ul();return e||t}function Xg(e){var t=ts(e);t!==null&&t.tag===5&&t.type==="form"?Qh(t):aa.r(e)}var Ns=typeof document>"u"?null:document;function jc(e,t,a){var s=Ns;if(s&&typeof t=="string"&&t){var n=pt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Cc.has(n)||(Cc.add(n),e={rel:e,crossOrigin:a,href:t},s.querySelector(n)===null&&(t=s.createElement("link"),We(t,"link",e),qe(t),s.head.appendChild(t)))}}function Qg(e){aa.D(e),jc("dns-prefetch",e,null)}function Zg(e,t){aa.C(e,t),jc("preconnect",e,t)}function Jg(e,t,a){aa.L(e,t,a);var s=Ns;if(s&&e&&t){var n='link[rel="preload"][as="'+pt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+pt(a.imageSizes)+'"]')):n+='[href="'+pt(e)+'"]';var l=n;switch(t){case"style":l=Os(e);break;case"script":l=Bs(e)}Tt.has(l)||(e=I({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Tt.set(l,e),s.querySelector(n)!==null||t==="style"&&s.querySelector(An(l))||t==="script"&&s.querySelector(En(l))||(t=s.createElement("link"),We(t,"link",e),qe(t),s.head.appendChild(t)))}}function Fg(e,t){aa.m(e,t);var a=Ns;if(a&&e){var s=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+pt(s)+'"][href="'+pt(e)+'"]',l=n;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Bs(e)}if(!Tt.has(l)&&(e=I({rel:"modulepreload",href:e},t),Tt.set(l,e),a.querySelector(n)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(En(l)))return}s=a.createElement("link"),We(s,"link",e),qe(s),a.head.appendChild(s)}}}function $g(e,t,a){aa.S(e,t,a);var s=Ns;if(s&&e){var n=as(s).hoistableStyles,l=Os(e);t=t||"default";var o=n.get(l);if(!o){var d={loading:0,preload:null};if(o=s.querySelector(An(l)))d.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Tt.get(l))&&kr(e,a);var m=o=s.createElement("link");qe(m),We(m,"link",e),m._p=new Promise(function(k,z){m.onload=k,m.onerror=z}),m.addEventListener("load",function(){d.loading|=1}),m.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Xl(o,t,s)}o={type:"stylesheet",instance:o,count:1,state:d},n.set(l,o)}}}function Pg(e,t){aa.X(e,t);var a=Ns;if(a&&e){var s=as(a).hoistableScripts,n=Bs(e),l=s.get(n);l||(l=a.querySelector(En(n)),l||(e=I({src:e,async:!0},t),(t=Tt.get(n))&&Sr(e,t),l=a.createElement("script"),qe(l),We(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},s.set(n,l))}}function ep(e,t){aa.M(e,t);var a=Ns;if(a&&e){var s=as(a).hoistableScripts,n=Bs(e),l=s.get(n);l||(l=a.querySelector(En(n)),l||(e=I({src:e,async:!0,type:"module"},t),(t=Tt.get(n))&&Sr(e,t),l=a.createElement("script"),qe(l),We(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},s.set(n,l))}}function Nc(e,t,a,s){var n=(n=se.current)?Vl(n):null;if(!n)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Os(a.href),a=as(n).hoistableStyles,s=a.get(t),s||(s={type:"style",instance:null,count:0,state:null},a.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Os(a.href);var l=as(n).hoistableStyles,o=l.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,o),(l=n.querySelector(An(e)))&&!l._p&&(o.instance=l,o.state.loading=5),Tt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Tt.set(e,a),l||tp(n,e,a,o.state))),t&&s===null)throw Error(r(528,""));return o}if(t&&s!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Bs(a),a=as(n).hoistableScripts,s=a.get(t),s||(s={type:"script",instance:null,count:0,state:null},a.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Os(e){return'href="'+pt(e)+'"'}function An(e){return'link[rel="stylesheet"]['+e+"]"}function Oc(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function tp(e,t,a,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),We(t,"link",a),qe(t),e.head.appendChild(t))}function Bs(e){return'[src="'+pt(e)+'"]'}function En(e){return"script[async]"+e}function Bc(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+pt(a.href)+'"]');if(s)return t.instance=s,qe(s),s;var n=I({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),qe(s),We(s,"style",n),Xl(s,a.precedence,e),t.instance=s;case"stylesheet":n=Os(a.href);var l=e.querySelector(An(n));if(l)return t.state.loading|=4,t.instance=l,qe(l),l;s=Oc(a),(n=Tt.get(n))&&kr(s,n),l=(e.ownerDocument||e).createElement("link"),qe(l);var o=l;return o._p=new Promise(function(d,m){o.onload=d,o.onerror=m}),We(l,"link",s),t.state.loading|=4,Xl(l,a.precedence,e),t.instance=l;case"script":return l=Bs(a.src),(n=e.querySelector(En(l)))?(t.instance=n,qe(n),n):(s=a,(n=Tt.get(l))&&(s=I({},a),Sr(s,n)),e=e.ownerDocument||e,n=e.createElement("script"),qe(n),We(n,"link",s),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,Xl(s,a.precedence,e));return t.instance}function Xl(e,t,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=s.length?s[s.length-1]:null,l=n,o=0;o<s.length;o++){var d=s[o];if(d.dataset.precedence===t)l=d;else if(l!==n)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function kr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Sr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ql=null;function Dc(e,t,a){if(Ql===null){var s=new Map,n=Ql=new Map;n.set(a,s)}else n=Ql,s=n.get(a),s||(s=new Map,n.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var l=a[n];if(!(l[Gs]||l[He]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var o=l.getAttribute(t)||"";o=e+o;var d=s.get(o);d?d.push(l):s.set(o,[l])}}return s}function Uc(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function ap(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function qc(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function sp(e,t,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Os(s.href),l=t.querySelector(An(n));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Zl.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=l,qe(l);return}l=t.ownerDocument||t,s=Oc(s),(n=Tt.get(n))&&kr(s,n),l=l.createElement("link"),qe(l);var o=l;o._p=new Promise(function(d,m){o.onload=d,o.onerror=m}),We(l,"link",s),a.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zl.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Tr=0;function np(e,t){return e.stylesheets&&e.count===0&&Fl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Fl(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&Tr===0&&(Tr=62500*qg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Fl(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Tr?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(n)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jl=null;function Fl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jl=new Map,t.forEach(lp,e),Jl=null,Zl.call(e))}function lp(e,t){if(!(t.state.loading&4)){var a=Jl.get(e);if(a)var s=a.get(null);else{a=new Map,Jl.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<n.length;l++){var o=n[l];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),s=o)}s&&a.set(null,s)}n=t.instance,o=n.getAttribute("data-precedence"),l=a.get(o)||s,l===s&&a.set(null,n),a.set(o,n),this.count++,s=Zl.bind(this),n.addEventListener("load",s),n.addEventListener("error",s),l?l.parentNode.insertBefore(n,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Mn={$$typeof:H,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function op(e,t,a,s,n,l,o,d,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wo(0),this.hiddenUpdates=wo(null),this.identifierPrefix=s,this.onUncaughtError=n,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Kc(e,t,a,s,n,l,o,d,m,k,z,N){return e=new op(e,t,a,o,m,k,z,N,d),t=1,l===!0&&(t|=24),l=rt(3,null,null,t),e.current=l,l.stateNode=e,t=si(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:s,isDehydrated:a,cache:t},ii(l),e}function _c(e){return e?(e=cs,e):cs}function Hc(e,t,a,s,n,l){n=_c(n),s.context===null?s.context=n:s.pendingContext=n,s=fa(t),s.payload={element:a},l=l===void 0?null:l,l!==null&&(s.callback=l),a=ma(e,s,t),a!==null&&(st(a,e,t),on(a,e,t))}function Lc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Rr(e,t){Lc(e,t),(e=e.alternate)&&Lc(e,t)}function Gc(e){if(e.tag===13||e.tag===31){var t=qa(e,67108864);t!==null&&st(t,e,67108864),Rr(e,67108864)}}function Yc(e){if(e.tag===13||e.tag===31){var t=ft();t=xo(t);var a=qa(e,t);a!==null&&st(a,e,t),Rr(e,t)}}var $l=!0;function ip(e,t,a,s){var n=C.T;C.T=null;var l=K.p;try{K.p=2,Ir(e,t,a,s)}finally{K.p=l,C.T=n}}function rp(e,t,a,s){var n=C.T;C.T=null;var l=K.p;try{K.p=8,Ir(e,t,a,s)}finally{K.p=l,C.T=n}}function Ir(e,t,a,s){if($l){var n=Ar(s);if(n===null)cr(e,t,s,Pl,a),Vc(e,s);else if(hp(n,e,t,a,s))s.stopPropagation();else if(Vc(e,s),t&4&&-1<dp.indexOf(e)){for(;n!==null;){var l=ts(n);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var o=Na(l.pendingLanes);if(o!==0){var d=l;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var m=1<<31-ot(o);d.entanglements[1]|=m,o&=~m}Bt(l),(ce&6)===0&&(Bl=nt()+500,Sn(0))}}break;case 31:case 13:d=qa(l,2),d!==null&&st(d,l,2),Ul(),Rr(l,2)}if(l=Ar(s),l===null&&cr(e,t,s,Pl,a),l===n)break;n=l}n!==null&&s.stopPropagation()}else cr(e,t,s,null,a)}}function Ar(e){return e=Mo(e),Er(e)}var Pl=null;function Er(e){if(Pl=null,e=es(e),e!==null){var t=g(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=f(t),e!==null)return e;e=null}else if(a===31){if(e=T(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Pl=e,null}function Wc(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qf()){case Pr:return 2;case ed:return 8;case Ln:case Zf:return 32;case td:return 268435456;default:return 32}default:return 32}}var Mr=!1,Ra=null,Ia=null,Aa=null,zn=new Map,Cn=new Map,Ea=[],dp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vc(e,t){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(t.pointerId)}}function jn(e,t,a,s,n,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:a,eventSystemFlags:s,nativeEvent:l,targetContainers:[n]},t!==null&&(t=ts(t),t!==null&&Gc(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function hp(e,t,a,s,n){switch(t){case"focusin":return Ra=jn(Ra,e,t,a,s,n),!0;case"dragenter":return Ia=jn(Ia,e,t,a,s,n),!0;case"mouseover":return Aa=jn(Aa,e,t,a,s,n),!0;case"pointerover":var l=n.pointerId;return zn.set(l,jn(zn.get(l)||null,e,t,a,s,n)),!0;case"gotpointercapture":return l=n.pointerId,Cn.set(l,jn(Cn.get(l)||null,e,t,a,s,n)),!0}return!1}function Xc(e){var t=es(e.target);if(t!==null){var a=g(t);if(a!==null){if(t=a.tag,t===13){if(t=f(a),t!==null){e.blockedOn=t,id(e.priority,function(){Yc(a)});return}}else if(t===31){if(t=T(a),t!==null){e.blockedOn=t,id(e.priority,function(){Yc(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ar(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Eo=s,a.target.dispatchEvent(s),Eo=null}else return t=ts(a),t!==null&&Gc(t),e.blockedOn=a,!1;t.shift()}return!0}function Qc(e,t,a){eo(e)&&a.delete(t)}function up(){Mr=!1,Ra!==null&&eo(Ra)&&(Ra=null),Ia!==null&&eo(Ia)&&(Ia=null),Aa!==null&&eo(Aa)&&(Aa=null),zn.forEach(Qc),Cn.forEach(Qc)}function to(e,t){e.blockedOn===t&&(e.blockedOn=null,Mr||(Mr=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,up)))}var ao=null;function Zc(e){ao!==e&&(ao=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ao===e&&(ao=null);for(var t=0;t<e.length;t+=3){var a=e[t],s=e[t+1],n=e[t+2];if(typeof s!="function"){if(Er(s||a)===null)continue;break}var l=ts(a);l!==null&&(e.splice(t,3),t-=3,Ai(l,{pending:!0,data:n,method:a.method,action:s},s,n))}}))}function Ds(e){function t(m){return to(m,e)}Ra!==null&&to(Ra,e),Ia!==null&&to(Ia,e),Aa!==null&&to(Aa,e),zn.forEach(t),Cn.forEach(t);for(var a=0;a<Ea.length;a++){var s=Ea[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ea.length&&(a=Ea[0],a.blockedOn===null);)Xc(a),a.blockedOn===null&&Ea.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var n=a[s],l=a[s+1],o=n[Fe]||null;if(typeof l=="function")o||Zc(a);else if(o){var d=null;if(l&&l.hasAttribute("formAction")){if(n=l,o=l[Fe]||null)d=o.formAction;else if(Er(n)!==null)continue}else d=o.action;typeof d=="function"?a[s+1]=d:(a.splice(s,3),s-=3),Zc(a)}}}function Jc(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function zr(e){this._internalRoot=e}so.prototype.render=zr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,s=ft();Hc(a,s,e,t,null,null)},so.prototype.unmount=zr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hc(e.current,2,null,e,null,null),Ul(),t[Pa]=null}};function so(e){this._internalRoot=e}so.prototype.unstable_scheduleHydration=function(e){if(e){var t=od();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ea.length&&t!==0&&t<Ea[a].priority;a++);Ea.splice(a,0,e),a===0&&Xc(e)}};var Fc=h.version;if(Fc!=="19.2.4")throw Error(r(527,Fc,"19.2.4"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(t),e=e!==null?M(e):null,e=e===null?null:e.stateNode,e};var cp={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{_s=no.inject(cp),lt=no}catch{}}return On.createRoot=function(e,t){if(!c(e))throw Error(r(299));var a=!1,s="",n=nu,l=lu,o=ou;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Kc(e,1,!1,null,null,a,s,null,n,l,o,Jc),e[Pa]=t.current,ur(e),new zr(t)},On.hydrateRoot=function(e,t,a){if(!c(e))throw Error(r(299));var s=!1,n="",l=nu,o=lu,d=ou,m=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.formState!==void 0&&(m=a.formState)),t=Kc(e,1,!0,t,a??null,s,n,m,l,o,d,Jc),t.context=_c(null),a=t.current,s=ft(),s=xo(s),n=fa(s),n.callback=null,ma(a,n,s),a=s,t.current.lanes=a,Ls(t,a),Bt(t),e[Pa]=t.current,ur(e),new so(t)},On.version="19.2.4",On}var rf;function Sp(){if(rf)return Nr.exports;rf=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(h){console.error(h)}}return i(),Nr.exports=kp(),Nr.exports}var Tp=Sp();const Rp=wf(Tp);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var df="popstate";function Ip(i={}){function h(r,c){let{pathname:g,search:f,hash:T}=r.location;return Hr("",{pathname:g,search:f,hash:T},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function u(r,c){return typeof c=="string"?c:Un(c)}return Ep(h,u,null,i)}function Ie(i,h){if(i===!1||i===null||typeof i>"u")throw new Error(h)}function Dt(i,h){if(!i){typeof console<"u"&&console.warn(h);try{throw new Error(h)}catch{}}}function Ap(){return Math.random().toString(36).substring(2,10)}function hf(i,h){return{usr:i.state,key:i.key,idx:h}}function Hr(i,h,u=null,r){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof h=="string"?Us(h):h,state:u,key:h&&h.key||r||Ap()}}function Un({pathname:i="/",search:h="",hash:u=""}){return h&&h!=="?"&&(i+=h.charAt(0)==="?"?h:"?"+h),u&&u!=="#"&&(i+=u.charAt(0)==="#"?u:"#"+u),i}function Us(i){let h={};if(i){let u=i.indexOf("#");u>=0&&(h.hash=i.substring(u),i=i.substring(0,u));let r=i.indexOf("?");r>=0&&(h.search=i.substring(r),i=i.substring(0,r)),i&&(h.pathname=i)}return h}function Ep(i,h,u,r={}){let{window:c=document.defaultView,v5Compat:g=!1}=r,f=c.history,T="POP",w=null,p=M();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function M(){return(f.state||{idx:null}).idx}function I(){T="POP";let G=M(),V=G==null?null:G-p;p=G,w&&w({action:T,location:B.location,delta:V})}function D(G,V){T="PUSH";let F=Hr(B.location,G,V);p=M()+1;let H=hf(F,p),Q=B.createHref(F);try{f.pushState(H,"",Q)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;c.location.assign(Q)}g&&w&&w({action:T,location:B.location,delta:1})}function U(G,V){T="REPLACE";let F=Hr(B.location,G,V);p=M();let H=hf(F,p),Q=B.createHref(F);f.replaceState(H,"",Q),g&&w&&w({action:T,location:B.location,delta:0})}function q(G){return Mp(G)}let B={get action(){return T},get location(){return i(c,f)},listen(G){if(w)throw new Error("A history only accepts one active listener");return c.addEventListener(df,I),w=G,()=>{c.removeEventListener(df,I),w=null}},createHref(G){return h(c,G)},createURL:q,encodeLocation(G){let V=q(G);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:D,replace:U,go(G){return f.go(G)}};return B}function Mp(i,h=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ie(u,"No window.location.(origin|href) available to create URL");let r=typeof i=="string"?i:Un(i);return r=r.replace(/ $/,"%20"),!h&&r.startsWith("//")&&(r=u+r),new URL(r,u)}function xf(i,h,u="/"){return zp(i,h,u,!1)}function zp(i,h,u,r){let c=typeof h=="string"?Us(h):h,g=na(c.pathname||"/",u);if(g==null)return null;let f=vf(i);Cp(f);let T=null;for(let w=0;T==null&&w<f.length;++w){let p=Lp(g);T=_p(f[w],p,r)}return T}function vf(i,h=[],u=[],r="",c=!1){let g=(f,T,w=c,p)=>{let M={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:T,route:f};if(M.relativePath.startsWith("/")){if(!M.relativePath.startsWith(r)&&w)return;Ie(M.relativePath.startsWith(r),`Absolute route path "${M.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),M.relativePath=M.relativePath.slice(r.length)}let I=sa([r,M.relativePath]),D=u.concat(M);f.children&&f.children.length>0&&(Ie(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${I}".`),vf(f.children,h,D,I,w)),!(f.path==null&&!f.index)&&h.push({path:I,score:qp(I,f.index),routesMeta:D})};return i.forEach((f,T)=>{var w;if(f.path===""||!((w=f.path)!=null&&w.includes("?")))g(f,T);else for(let p of kf(f.path))g(f,T,!0,p)}),h}function kf(i){let h=i.split("/");if(h.length===0)return[];let[u,...r]=h,c=u.endsWith("?"),g=u.replace(/\?$/,"");if(r.length===0)return c?[g,""]:[g];let f=kf(r.join("/")),T=[];return T.push(...f.map(w=>w===""?g:[g,w].join("/"))),c&&T.push(...f),T.map(w=>i.startsWith("/")&&w===""?"/":w)}function Cp(i){i.sort((h,u)=>h.score!==u.score?u.score-h.score:Kp(h.routesMeta.map(r=>r.childrenIndex),u.routesMeta.map(r=>r.childrenIndex)))}var jp=/^:[\w-]+$/,Np=3,Op=2,Bp=1,Dp=10,Up=-2,uf=i=>i==="*";function qp(i,h){let u=i.split("/"),r=u.length;return u.some(uf)&&(r+=Up),h&&(r+=Op),u.filter(c=>!uf(c)).reduce((c,g)=>c+(jp.test(g)?Np:g===""?Bp:Dp),r)}function Kp(i,h){return i.length===h.length&&i.slice(0,-1).every((r,c)=>r===h[c])?i[i.length-1]-h[h.length-1]:0}function _p(i,h,u=!1){let{routesMeta:r}=i,c={},g="/",f=[];for(let T=0;T<r.length;++T){let w=r[T],p=T===r.length-1,M=g==="/"?h:h.slice(g.length)||"/",I=ho({path:w.relativePath,caseSensitive:w.caseSensitive,end:p},M),D=w.route;if(!I&&p&&u&&!r[r.length-1].route.index&&(I=ho({path:w.relativePath,caseSensitive:w.caseSensitive,end:!1},M)),!I)return null;Object.assign(c,I.params),f.push({params:c,pathname:sa([g,I.pathname]),pathnameBase:Vp(sa([g,I.pathnameBase])),route:D}),I.pathnameBase!=="/"&&(g=sa([g,I.pathnameBase]))}return f}function ho(i,h){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[u,r]=Hp(i.path,i.caseSensitive,i.end),c=h.match(u);if(!c)return null;let g=c[0],f=g.replace(/(.)\/+$/,"$1"),T=c.slice(1);return{params:r.reduce((p,{paramName:M,isOptional:I},D)=>{if(M==="*"){let q=T[D]||"";f=g.slice(0,g.length-q.length).replace(/(.)\/+$/,"$1")}const U=T[D];return I&&!U?p[M]=void 0:p[M]=(U||"").replace(/%2F/g,"/"),p},{}),pathname:g,pathnameBase:f,pattern:i}}function Hp(i,h=!1,u=!0){Dt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let r=[],c="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,T,w)=>(r.push({paramName:T,isOptional:w!=null}),w?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(r.push({paramName:"*"}),c+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?c+="\\/*$":i!==""&&i!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,h?void 0:"i"),r]}function Lp(i){try{return i.split("/").map(h=>decodeURIComponent(h).replace(/\//g,"%2F")).join("/")}catch(h){return Dt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${h}).`),i}}function na(i,h){if(h==="/")return i;if(!i.toLowerCase().startsWith(h.toLowerCase()))return null;let u=h.endsWith("/")?h.length-1:h.length,r=i.charAt(u);return r&&r!=="/"?null:i.slice(u)||"/"}var Gp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Yp(i,h="/"){let{pathname:u,search:r="",hash:c=""}=typeof i=="string"?Us(i):i,g;return u?(u=u.replace(/\/\/+/g,"/"),u.startsWith("/")?g=cf(u.substring(1),"/"):g=cf(u,h)):g=h,{pathname:g,search:Xp(r),hash:Qp(c)}}function cf(i,h){let u=h.replace(/\/+$/,"").split("/");return i.split("/").forEach(c=>{c===".."?u.length>1&&u.pop():c!=="."&&u.push(c)}),u.length>1?u.join("/"):"/"}function Ur(i,h,u,r){return`Cannot include a '${i}' character in a manually specified \`to.${h}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Wp(i){return i.filter((h,u)=>u===0||h.route.path&&h.route.path.length>0)}function Sf(i){let h=Wp(i);return h.map((u,r)=>r===h.length-1?u.pathname:u.pathnameBase)}function Tf(i,h,u,r=!1){let c;typeof i=="string"?c=Us(i):(c={...i},Ie(!c.pathname||!c.pathname.includes("?"),Ur("?","pathname","search",c)),Ie(!c.pathname||!c.pathname.includes("#"),Ur("#","pathname","hash",c)),Ie(!c.search||!c.search.includes("#"),Ur("#","search","hash",c)));let g=i===""||c.pathname==="",f=g?"/":c.pathname,T;if(f==null)T=u;else{let I=h.length-1;if(!r&&f.startsWith("..")){let D=f.split("/");for(;D[0]==="..";)D.shift(),I-=1;c.pathname=D.join("/")}T=I>=0?h[I]:"/"}let w=Yp(c,T),p=f&&f!=="/"&&f.endsWith("/"),M=(g||f===".")&&u.endsWith("/");return!w.pathname.endsWith("/")&&(p||M)&&(w.pathname+="/"),w}var sa=i=>i.join("/").replace(/\/\/+/g,"/"),Vp=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Xp=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Qp=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Zp=class{constructor(i,h,u,r=!1){this.status=i,this.statusText=h||"",this.internal=r,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function Jp(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function Fp(i){return i.map(h=>h.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Rf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function If(i,h){let u=i;if(typeof u!="string"||!Gp.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let r=u,c=!1;if(Rf)try{let g=new URL(window.location.href),f=u.startsWith("//")?new URL(g.protocol+u):new URL(u),T=na(f.pathname,h);f.origin===g.origin&&T!=null?u=T+f.search+f.hash:c=!0}catch{Dt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:c,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Af=["POST","PUT","PATCH","DELETE"];new Set(Af);var $p=["GET",...Af];new Set($p);var qs=E.createContext(null);qs.displayName="DataRouter";var uo=E.createContext(null);uo.displayName="DataRouterState";var Pp=E.createContext(!1),Ef=E.createContext({isTransitioning:!1});Ef.displayName="ViewTransition";var eb=E.createContext(new Map);eb.displayName="Fetchers";var tb=E.createContext(null);tb.displayName="Await";var Rt=E.createContext(null);Rt.displayName="Navigation";var qn=E.createContext(null);qn.displayName="Location";var Ut=E.createContext({outlet:null,matches:[],isDataRoute:!1});Ut.displayName="Route";var Yr=E.createContext(null);Yr.displayName="RouteError";var Mf="REACT_ROUTER_ERROR",ab="REDIRECT",sb="ROUTE_ERROR_RESPONSE";function nb(i){if(i.startsWith(`${Mf}:${ab}:{`))try{let h=JSON.parse(i.slice(28));if(typeof h=="object"&&h&&typeof h.status=="number"&&typeof h.statusText=="string"&&typeof h.location=="string"&&typeof h.reloadDocument=="boolean"&&typeof h.replace=="boolean")return h}catch{}}function lb(i){if(i.startsWith(`${Mf}:${sb}:{`))try{let h=JSON.parse(i.slice(40));if(typeof h=="object"&&h&&typeof h.status=="number"&&typeof h.statusText=="string")return new Zp(h.status,h.statusText,h.data)}catch{}}function ob(i,{relative:h}={}){Ie(Kn(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:r}=E.useContext(Rt),{hash:c,pathname:g,search:f}=_n(i,{relative:h}),T=g;return u!=="/"&&(T=g==="/"?u:sa([u,g])),r.createHref({pathname:T,search:f,hash:c})}function Kn(){return E.useContext(qn)!=null}function za(){return Ie(Kn(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(qn).location}var zf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Cf(i){E.useContext(Rt).static||E.useLayoutEffect(i)}function Wr(){let{isDataRoute:i}=E.useContext(Ut);return i?wb():ib()}function ib(){Ie(Kn(),"useNavigate() may be used only in the context of a <Router> component.");let i=E.useContext(qs),{basename:h,navigator:u}=E.useContext(Rt),{matches:r}=E.useContext(Ut),{pathname:c}=za(),g=JSON.stringify(Sf(r)),f=E.useRef(!1);return Cf(()=>{f.current=!0}),E.useCallback((w,p={})=>{if(Dt(f.current,zf),!f.current)return;if(typeof w=="number"){u.go(w);return}let M=Tf(w,JSON.parse(g),c,p.relative==="path");i==null&&h!=="/"&&(M.pathname=M.pathname==="/"?h:sa([h,M.pathname])),(p.replace?u.replace:u.push)(M,p.state,p)},[h,u,g,c,i])}E.createContext(null);function jf(){let{matches:i}=E.useContext(Ut),h=i[i.length-1];return h?h.params:{}}function _n(i,{relative:h}={}){let{matches:u}=E.useContext(Ut),{pathname:r}=za(),c=JSON.stringify(Sf(u));return E.useMemo(()=>Tf(i,JSON.parse(c),r,h==="path"),[i,c,r,h])}function rb(i,h){return Nf(i,h)}function Nf(i,h,u,r,c){var F;Ie(Kn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:g}=E.useContext(Rt),{matches:f}=E.useContext(Ut),T=f[f.length-1],w=T?T.params:{},p=T?T.pathname:"/",M=T?T.pathnameBase:"/",I=T&&T.route;{let H=I&&I.path||"";Bf(p,!I||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let D=za(),U;if(h){let H=typeof h=="string"?Us(h):h;Ie(M==="/"||((F=H.pathname)==null?void 0:F.startsWith(M)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${M}" but pathname "${H.pathname}" was given in the \`location\` prop.`),U=H}else U=D;let q=U.pathname||"/",B=q;if(M!=="/"){let H=M.replace(/^\//,"").split("/");B="/"+q.replace(/^\//,"").split("/").slice(H.length).join("/")}let G=xf(i,{pathname:B});Dt(I||G!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),Dt(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=fb(G&&G.map(H=>Object.assign({},H,{params:Object.assign({},w,H.params),pathname:sa([M,g.encodeLocation?g.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?M:sa([M,g.encodeLocation?g.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),f,u,r,c);return h&&V?E.createElement(qn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...U},navigationType:"POP"}},V):V}function db(){let i=yb(),h=Jp(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),u=i instanceof Error?i.stack:null,r="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:r},g={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",i),f=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:g},"ErrorBoundary")," or"," ",E.createElement("code",{style:g},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},h),u?E.createElement("pre",{style:c},u):null,f)}var hb=E.createElement(db,null),Of=class extends E.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,h){return h.location!==i.location||h.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:h.error,location:h.location,revalidation:i.revalidation||h.revalidation}}componentDidCatch(i,h){this.props.onError?this.props.onError(i,h):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const u=lb(i.digest);u&&(i=u)}let h=i!==void 0?E.createElement(Ut.Provider,{value:this.props.routeContext},E.createElement(Yr.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?E.createElement(ub,{error:i},h):h}};Of.contextType=Pp;var qr=new WeakMap;function ub({children:i,error:h}){let{basename:u}=E.useContext(Rt);if(typeof h=="object"&&h&&"digest"in h&&typeof h.digest=="string"){let r=nb(h.digest);if(r){let c=qr.get(h);if(c)throw c;let g=If(r.location,u);if(Rf&&!qr.get(h))if(g.isExternal||r.reloadDocument)window.location.href=g.absoluteURL||g.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(g.to,{replace:r.replace}));throw qr.set(h,f),f}return E.createElement("meta",{httpEquiv:"refresh",content:`0;url=${g.absoluteURL||g.to}`})}}return i}function cb({routeContext:i,match:h,children:u}){let r=E.useContext(qs);return r&&r.static&&r.staticContext&&(h.route.errorElement||h.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=h.route.id),E.createElement(Ut.Provider,{value:i},u)}function fb(i,h=[],u=null,r=null,c=null){if(i==null){if(!u)return null;if(u.errors)i=u.matches;else if(h.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let g=i,f=u==null?void 0:u.errors;if(f!=null){let M=g.findIndex(I=>I.route.id&&(f==null?void 0:f[I.route.id])!==void 0);Ie(M>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),g=g.slice(0,Math.min(g.length,M+1))}let T=!1,w=-1;if(u)for(let M=0;M<g.length;M++){let I=g[M];if((I.route.HydrateFallback||I.route.hydrateFallbackElement)&&(w=M),I.route.id){let{loaderData:D,errors:U}=u,q=I.route.loader&&!D.hasOwnProperty(I.route.id)&&(!U||U[I.route.id]===void 0);if(I.route.lazy||q){T=!0,w>=0?g=g.slice(0,w+1):g=[g[0]];break}}}let p=u&&r?(M,I)=>{var D,U;r(M,{location:u.location,params:((U=(D=u.matches)==null?void 0:D[0])==null?void 0:U.params)??{},unstable_pattern:Fp(u.matches),errorInfo:I})}:void 0;return g.reduceRight((M,I,D)=>{let U,q=!1,B=null,G=null;u&&(U=f&&I.route.id?f[I.route.id]:void 0,B=I.route.errorElement||hb,T&&(w<0&&D===0?(Bf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,G=null):w===D&&(q=!0,G=I.route.hydrateFallbackElement||null)));let V=h.concat(g.slice(0,D+1)),F=()=>{let H;return U?H=B:q?H=G:I.route.Component?H=E.createElement(I.route.Component,null):I.route.element?H=I.route.element:H=M,E.createElement(cb,{match:I,routeContext:{outlet:M,matches:V,isDataRoute:u!=null},children:H})};return u&&(I.route.ErrorBoundary||I.route.errorElement||D===0)?E.createElement(Of,{location:u.location,revalidation:u.revalidation,component:B,error:U,children:F(),routeContext:{outlet:null,matches:V,isDataRoute:!0},onError:p}):F()},null)}function Vr(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mb(i){let h=E.useContext(qs);return Ie(h,Vr(i)),h}function gb(i){let h=E.useContext(uo);return Ie(h,Vr(i)),h}function pb(i){let h=E.useContext(Ut);return Ie(h,Vr(i)),h}function Xr(i){let h=pb(i),u=h.matches[h.matches.length-1];return Ie(u.route.id,`${i} can only be used on routes that contain a unique "id"`),u.route.id}function bb(){return Xr("useRouteId")}function yb(){var r;let i=E.useContext(Yr),h=gb("useRouteError"),u=Xr("useRouteError");return i!==void 0?i:(r=h.errors)==null?void 0:r[u]}function wb(){let{router:i}=mb("useNavigate"),h=Xr("useNavigate"),u=E.useRef(!1);return Cf(()=>{u.current=!0}),E.useCallback(async(c,g={})=>{Dt(u.current,zf),u.current&&(typeof c=="number"?await i.navigate(c):await i.navigate(c,{fromRouteId:h,...g}))},[i,h])}var ff={};function Bf(i,h,u){!h&&!ff[i]&&(ff[i]=!0,Dt(!1,u))}E.memo(xb);function xb({routes:i,future:h,state:u,onError:r}){return Nf(i,void 0,u,r,h)}function oo(i){Ie(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function vb({basename:i="/",children:h=null,location:u,navigationType:r="POP",navigator:c,static:g=!1,unstable_useTransitions:f}){Ie(!Kn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let T=i.replace(/^\/*/,"/"),w=E.useMemo(()=>({basename:T,navigator:c,static:g,unstable_useTransitions:f,future:{}}),[T,c,g,f]);typeof u=="string"&&(u=Us(u));let{pathname:p="/",search:M="",hash:I="",state:D=null,key:U="default"}=u,q=E.useMemo(()=>{let B=na(p,T);return B==null?null:{location:{pathname:B,search:M,hash:I,state:D,key:U},navigationType:r}},[T,p,M,I,D,U,r]);return Dt(q!=null,`<Router basename="${T}"> is not able to match the URL "${p}${M}${I}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:E.createElement(Rt.Provider,{value:w},E.createElement(qn.Provider,{children:h,value:q}))}function kb({children:i,location:h}){return rb(Lr(i),h)}function Lr(i,h=[]){let u=[];return E.Children.forEach(i,(r,c)=>{if(!E.isValidElement(r))return;let g=[...h,c];if(r.type===E.Fragment){u.push.apply(u,Lr(r.props.children,g));return}Ie(r.type===oo,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ie(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||g.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Lr(r.props.children,g)),u.push(f)}),u}var io="get",ro="application/x-www-form-urlencoded";function co(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function Sb(i){return co(i)&&i.tagName.toLowerCase()==="button"}function Tb(i){return co(i)&&i.tagName.toLowerCase()==="form"}function Rb(i){return co(i)&&i.tagName.toLowerCase()==="input"}function Ib(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Ab(i,h){return i.button===0&&(!h||h==="_self")&&!Ib(i)}var lo=null;function Eb(){if(lo===null)try{new FormData(document.createElement("form"),0),lo=!1}catch{lo=!0}return lo}var Mb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kr(i){return i!=null&&!Mb.has(i)?(Dt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ro}"`),null):i}function zb(i,h){let u,r,c,g,f;if(Tb(i)){let T=i.getAttribute("action");r=T?na(T,h):null,u=i.getAttribute("method")||io,c=Kr(i.getAttribute("enctype"))||ro,g=new FormData(i)}else if(Sb(i)||Rb(i)&&(i.type==="submit"||i.type==="image")){let T=i.form;if(T==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let w=i.getAttribute("formaction")||T.getAttribute("action");if(r=w?na(w,h):null,u=i.getAttribute("formmethod")||T.getAttribute("method")||io,c=Kr(i.getAttribute("formenctype"))||Kr(T.getAttribute("enctype"))||ro,g=new FormData(T,i),!Eb()){let{name:p,type:M,value:I}=i;if(M==="image"){let D=p?`${p}.`:"";g.append(`${D}x`,"0"),g.append(`${D}y`,"0")}else p&&g.append(p,I)}}else{if(co(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=io,r=null,c=ro,f=i}return g&&c==="text/plain"&&(f=g,g=void 0),{action:r,method:u.toLowerCase(),encType:c,formData:g,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Qr(i,h){if(i===!1||i===null||typeof i>"u")throw new Error(h)}function Cb(i,h,u,r){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return u?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${r}`:c.pathname=`${c.pathname}.${r}`:c.pathname==="/"?c.pathname=`_root.${r}`:h&&na(c.pathname,h)==="/"?c.pathname=`${h.replace(/\/$/,"")}/_root.${r}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${r}`,c}async function jb(i,h){if(i.id in h)return h[i.id];try{let u=await import(i.module);return h[i.id]=u,u}catch(u){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Nb(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Ob(i,h,u){let r=await Promise.all(i.map(async c=>{let g=h.routes[c.route.id];if(g){let f=await jb(g,u);return f.links?f.links():[]}return[]}));return qb(r.flat(1).filter(Nb).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function mf(i,h,u,r,c,g){let f=(w,p)=>u[p]?w.route.id!==u[p].route.id:!0,T=(w,p)=>{var M;return u[p].pathname!==w.pathname||((M=u[p].route.path)==null?void 0:M.endsWith("*"))&&u[p].params["*"]!==w.params["*"]};return g==="assets"?h.filter((w,p)=>f(w,p)||T(w,p)):g==="data"?h.filter((w,p)=>{var I;let M=r.routes[w.route.id];if(!M||!M.hasLoader)return!1;if(f(w,p)||T(w,p))return!0;if(w.route.shouldRevalidate){let D=w.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((I=u[0])==null?void 0:I.params)||{},nextUrl:new URL(i,window.origin),nextParams:w.params,defaultShouldRevalidate:!0});if(typeof D=="boolean")return D}return!0}):[]}function Bb(i,h,{includeHydrateFallback:u}={}){return Db(i.map(r=>{let c=h.routes[r.route.id];if(!c)return[];let g=[c.module];return c.clientActionModule&&(g=g.concat(c.clientActionModule)),c.clientLoaderModule&&(g=g.concat(c.clientLoaderModule)),u&&c.hydrateFallbackModule&&(g=g.concat(c.hydrateFallbackModule)),c.imports&&(g=g.concat(c.imports)),g}).flat(1))}function Db(i){return[...new Set(i)]}function Ub(i){let h={},u=Object.keys(i).sort();for(let r of u)h[r]=i[r];return h}function qb(i,h){let u=new Set;return new Set(h),i.reduce((r,c)=>{let g=JSON.stringify(Ub(c));return u.has(g)||(u.add(g),r.push({key:g,link:c})),r},[])}function Df(){let i=E.useContext(qs);return Qr(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Kb(){let i=E.useContext(uo);return Qr(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Zr=E.createContext(void 0);Zr.displayName="FrameworkContext";function Uf(){let i=E.useContext(Zr);return Qr(i,"You must render this element inside a <HydratedRouter> element"),i}function _b(i,h){let u=E.useContext(Zr),[r,c]=E.useState(!1),[g,f]=E.useState(!1),{onFocus:T,onBlur:w,onMouseEnter:p,onMouseLeave:M,onTouchStart:I}=h,D=E.useRef(null);E.useEffect(()=>{if(i==="render"&&f(!0),i==="viewport"){let B=V=>{V.forEach(F=>{f(F.isIntersecting)})},G=new IntersectionObserver(B,{threshold:.5});return D.current&&G.observe(D.current),()=>{G.disconnect()}}},[i]),E.useEffect(()=>{if(r){let B=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(B)}}},[r]);let U=()=>{c(!0)},q=()=>{c(!1),f(!1)};return u?i!=="intent"?[g,D,{}]:[g,D,{onFocus:Bn(T,U),onBlur:Bn(w,q),onMouseEnter:Bn(p,U),onMouseLeave:Bn(M,q),onTouchStart:Bn(I,U)}]:[!1,D,{}]}function Bn(i,h){return u=>{i&&i(u),u.defaultPrevented||h(u)}}function Hb({page:i,...h}){let{router:u}=Df(),r=E.useMemo(()=>xf(u.routes,i,u.basename),[u.routes,i,u.basename]);return r?E.createElement(Gb,{page:i,matches:r,...h}):null}function Lb(i){let{manifest:h,routeModules:u}=Uf(),[r,c]=E.useState([]);return E.useEffect(()=>{let g=!1;return Ob(i,h,u).then(f=>{g||c(f)}),()=>{g=!0}},[i,h,u]),r}function Gb({page:i,matches:h,...u}){let r=za(),{future:c,manifest:g,routeModules:f}=Uf(),{basename:T}=Df(),{loaderData:w,matches:p}=Kb(),M=E.useMemo(()=>mf(i,h,p,g,r,"data"),[i,h,p,g,r]),I=E.useMemo(()=>mf(i,h,p,g,r,"assets"),[i,h,p,g,r]),D=E.useMemo(()=>{if(i===r.pathname+r.search+r.hash)return[];let B=new Set,G=!1;if(h.forEach(F=>{var Q;let H=g.routes[F.route.id];!H||!H.hasLoader||(!M.some(oe=>oe.route.id===F.route.id)&&F.route.id in w&&((Q=f[F.route.id])!=null&&Q.shouldRevalidate)||H.hasClientLoader?G=!0:B.add(F.route.id))}),B.size===0)return[];let V=Cb(i,T,c.unstable_trailingSlashAwareDataRequests,"data");return G&&B.size>0&&V.searchParams.set("_routes",h.filter(F=>B.has(F.route.id)).map(F=>F.route.id).join(",")),[V.pathname+V.search]},[T,c.unstable_trailingSlashAwareDataRequests,w,r,g,M,h,i,f]),U=E.useMemo(()=>Bb(I,g),[I,g]),q=Lb(I);return E.createElement(E.Fragment,null,D.map(B=>E.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...u})),U.map(B=>E.createElement("link",{key:B,rel:"modulepreload",href:B,...u})),q.map(({key:B,link:G})=>E.createElement("link",{key:B,nonce:u.nonce,...G,crossOrigin:G.crossOrigin??u.crossOrigin})))}function Yb(...i){return h=>{i.forEach(u=>{typeof u=="function"?u(h):u!=null&&(u.current=h)})}}var Wb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Wb&&(window.__reactRouterVersion="7.13.0")}catch{}function Vb({basename:i,children:h,unstable_useTransitions:u,window:r}){let c=E.useRef();c.current==null&&(c.current=Ip({window:r,v5Compat:!0}));let g=c.current,[f,T]=E.useState({action:g.action,location:g.location}),w=E.useCallback(p=>{u===!1?T(p):E.startTransition(()=>T(p))},[u]);return E.useLayoutEffect(()=>g.listen(w),[g,w]),E.createElement(vb,{basename:i,children:h,location:f.location,navigationType:f.action,navigator:g,unstable_useTransitions:u})}var qf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zt=E.forwardRef(function({onClick:h,discover:u="render",prefetch:r="none",relative:c,reloadDocument:g,replace:f,state:T,target:w,to:p,preventScrollReset:M,viewTransition:I,unstable_defaultShouldRevalidate:D,...U},q){let{basename:B,unstable_useTransitions:G}=E.useContext(Rt),V=typeof p=="string"&&qf.test(p),F=If(p,B);p=F.to;let H=ob(p,{relative:c}),[Q,oe,Te]=_b(r,U),P=Jb(p,{replace:f,state:T,target:w,preventScrollReset:M,relative:c,viewTransition:I,unstable_defaultShouldRevalidate:D,unstable_useTransitions:G});function Me(mt){h&&h(mt),mt.defaultPrevented||P(mt)}let _e=E.createElement("a",{...U,...Te,href:F.absoluteURL||H,onClick:F.isExternal||g?h:Me,ref:Yb(q,oe),target:w,"data-discover":!V&&u==="render"?"true":void 0});return Q&&!V?E.createElement(E.Fragment,null,_e,E.createElement(Hb,{page:H})):_e});zt.displayName="Link";var Xb=E.forwardRef(function({"aria-current":h="page",caseSensitive:u=!1,className:r="",end:c=!1,style:g,to:f,viewTransition:T,children:w,...p},M){let I=_n(f,{relative:p.relative}),D=za(),U=E.useContext(uo),{navigator:q,basename:B}=E.useContext(Rt),G=U!=null&&ty(I)&&T===!0,V=q.encodeLocation?q.encodeLocation(I).pathname:I.pathname,F=D.pathname,H=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;u||(F=F.toLowerCase(),H=H?H.toLowerCase():null,V=V.toLowerCase()),H&&B&&(H=na(H,B)||H);const Q=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let oe=F===V||!c&&F.startsWith(V)&&F.charAt(Q)==="/",Te=H!=null&&(H===V||!c&&H.startsWith(V)&&H.charAt(V.length)==="/"),P={isActive:oe,isPending:Te,isTransitioning:G},Me=oe?h:void 0,_e;typeof r=="function"?_e=r(P):_e=[r,oe?"active":null,Te?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let mt=typeof g=="function"?g(P):g;return E.createElement(zt,{...p,"aria-current":Me,className:_e,ref:M,style:mt,to:f,viewTransition:T},typeof w=="function"?w(P):w)});Xb.displayName="NavLink";var Qb=E.forwardRef(({discover:i="render",fetcherKey:h,navigate:u,reloadDocument:r,replace:c,state:g,method:f=io,action:T,onSubmit:w,relative:p,preventScrollReset:M,viewTransition:I,unstable_defaultShouldRevalidate:D,...U},q)=>{let{unstable_useTransitions:B}=E.useContext(Rt),G=Pb(),V=ey(T,{relative:p}),F=f.toLowerCase()==="get"?"get":"post",H=typeof T=="string"&&qf.test(T),Q=oe=>{if(w&&w(oe),oe.defaultPrevented)return;oe.preventDefault();let Te=oe.nativeEvent.submitter,P=(Te==null?void 0:Te.getAttribute("formmethod"))||f,Me=()=>G(Te||oe.currentTarget,{fetcherKey:h,method:P,navigate:u,replace:c,state:g,relative:p,preventScrollReset:M,viewTransition:I,unstable_defaultShouldRevalidate:D});B&&u!==!1?E.startTransition(()=>Me()):Me()};return E.createElement("form",{ref:q,method:F,action:V,onSubmit:r?w:Q,...U,"data-discover":!H&&i==="render"?"true":void 0})});Qb.displayName="Form";function Zb(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kf(i){let h=E.useContext(qs);return Ie(h,Zb(i)),h}function Jb(i,{target:h,replace:u,state:r,preventScrollReset:c,relative:g,viewTransition:f,unstable_defaultShouldRevalidate:T,unstable_useTransitions:w}={}){let p=Wr(),M=za(),I=_n(i,{relative:g});return E.useCallback(D=>{if(Ab(D,h)){D.preventDefault();let U=u!==void 0?u:Un(M)===Un(I),q=()=>p(i,{replace:U,state:r,preventScrollReset:c,relative:g,viewTransition:f,unstable_defaultShouldRevalidate:T});w?E.startTransition(()=>q()):q()}},[M,p,I,u,r,h,i,c,g,f,T,w])}var Fb=0,$b=()=>`__${String(++Fb)}__`;function Pb(){let{router:i}=Kf("useSubmit"),{basename:h}=E.useContext(Rt),u=bb(),r=i.fetch,c=i.navigate;return E.useCallback(async(g,f={})=>{let{action:T,method:w,encType:p,formData:M,body:I}=zb(g,h);if(f.navigate===!1){let D=f.fetcherKey||$b();await r(D,u,f.action||T,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:M,body:I,formMethod:f.method||w,formEncType:f.encType||p,flushSync:f.flushSync})}else await c(f.action||T,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:M,body:I,formMethod:f.method||w,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:u,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,c,h,u])}function ey(i,{relative:h}={}){let{basename:u}=E.useContext(Rt),r=E.useContext(Ut);Ie(r,"useFormAction must be used inside a RouteContext");let[c]=r.matches.slice(-1),g={..._n(i||".",{relative:h})},f=za();if(i==null){g.search=f.search;let T=new URLSearchParams(g.search),w=T.getAll("index");if(w.some(M=>M==="")){T.delete("index"),w.filter(I=>I).forEach(I=>T.append("index",I));let M=T.toString();g.search=M?`?${M}`:""}}return(!i||i===".")&&c.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(g.pathname=g.pathname==="/"?u:sa([u,g.pathname])),Un(g)}function ty(i,{relative:h}={}){let u=E.useContext(Ef);Ie(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Kf("useViewTransitionState"),c=_n(i,{relative:h});if(!u.isTransitioning)return!1;let g=na(u.currentLocation.pathname,r)||u.currentLocation.pathname,f=na(u.nextLocation.pathname,r)||u.nextLocation.pathname;return ho(c.pathname,f)!=null||ho(c.pathname,g)!=null}const ay={id:"home",title:{ko:"홈",en:"Home"},isSinglePost:!1,isActive:!0,posts:[]},sy={id:"prologue",title:{ko:"프롤로그",en:"Prologue"},description:{ko:"여정의 시작",en:"The Beginning of the Journey"},isSinglePost:!0,isActive:!0,posts:[{id:"prologue-1",title:{ko:"프롤로그",en:"Prologue"},subtitle:{ko:"할 수 있다.",en:"I Can Do It."},imageUrl:"https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=1200&auto=format&fit=crop",isActive:!0,content:{ko:`
          <p class="leading-relaxed mb-6 text-slate-700">
            군에서는 현역 군인이 직무 전문성을 높이기 위해 군 외부 기관(국내외 대학원, 연구소, 군/민간 기관 등)에서 교육을 받는 <span class="font-bold text-russia-blue">‘위탁교육’</span>이라는 제도가 있다. 이 중 국내외 대학원에 진학하여 석박사를 취득할 수 있는 전문학위 위탁교육은 1년에 한 번 공고를 내고 선발을 한다. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            국내 전문학위로 선발이 된다면 내로라하는 국내 여러 유수 대학의 대학원을 진학할 기회가 주어지고, 국외 전문학위에 선발이 되면 공고에 따라 다르지만 국외로 갈 수 있는 나라는 영어권인 미국 🇺🇸, 캐나다 🇨🇦, 영국 🇬🇧 뿐만 아니라 러시아 🇷🇺, 인도 🇮🇳, 중국 🇨🇳, 일본 🇯🇵 등 여러 나라에 진학할 기회가 주어진다.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            2013년 여름 ☀️, 당시 소대장이었던 당시 나는 여느때와 다름없이 부대에서 업무를 보고 있었다. 그러던 중, 국내외 위탁교육 공고를 군내 인트라넷에서 확인을 했다. 나의 병과는 <strong>화생방</strong>으로 주력인 전투병과가 아니었고 특성화되어 있는 화생방 병과의 성격상 아무래도 내가 나갈 수 있는 자리는 한정적이었다. 
          </p>
          
          <div class="bg-slate-50 border-l-4 border-russia-blue p-4 my-6 rounded-r-lg">
            <p class="leading-relaxed text-slate-700">
               많은 분야에서 전문가를 키우기 위해 다양한 사람을 선발하겠다는 공고였지만 내게 눈에 띄는 것은 두 자리 뿐이었다. 장차 군 교수가 될 수 있는 <strong>국내 위탁 자리</strong>와 군 연구원이 될 수 있는 <strong>러시아의 핵공학 자리</strong> ☢️가 눈에 띄었다.
            </p>
          </div>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            하지만 대학(생도)시절 공부를 열심히 하지 않았던 나에게 교수자리는 <span class="text-slate-500 line-through decoration-slate-400">그림의 떡</span>이었다. 🍡 대학성적이 <strong>상위 30퍼센트</strong> 안에 들어야 한다는 제한이 있었기 때문이다.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            후회해도 늦었다. 과거는 바꿀 수 없다. 내가 교수가 된다고 한들 추천서나 제대로 받을 수 있을지 의문이었다. 대학시절 입학한지 얼마되지 않았을 때, 한 선배는 내게 생도생활을 그나마 편하게 하고 싶다면 어디에서든 딱 3분의 2에만 있으면 된다고 했는데 내 성적이 아주 딱 그랬다. 그랬다고 내 생도생활이 아주 스무스했던 것은 아니지만 말이다. 😅 그런 나를 눈여겨 본 교수님은 없을거라 생각한다. 그러니 자연스레 나는 <strong>러시아로 가는 핵공학 석사</strong>로 시선을 고정할 수 밖에 없었다.
          </p>
          
          <hr class="border-slate-200 my-8 w-1/2 mx-auto" />

          <p class="leading-relaxed mb-6 text-slate-700">
            <span class="font-bold text-russia-blue">"내가 러시아어를 아냐고? 핵공학을 공부해 봤냐고?"</span> 설마. 나는 학창시절 내내 배운 영어조차 제대로 할 줄 몰랐고 전공은 화학이었다. 게다가 육군사관학교에서의 전공은 다른 민간대학의 전공이라고 부르기에 부족한 감이 있다. 게다가 생소한 러시아어로 생소한 핵공학을 공부한다니, 주위 사람들도 <strong>"되겠냐"</strong>는 반응이었다. 🤷
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            그 때, 나는 아버지와의 어릴 적을 일을 떠올렸다. 아버지는 우리가 등교하려고 집을 나서기 전 <span class="font-bold text-russia-blue">“나는 할 수 있다”</span>를 세 번 외치고 가라고 하셨다. 물론 몇 번하다가 말기를 반복했지만 그래도 그 기억은 여전히 선명했고, 힘든 시기에 나를 버티게 해준 내 가슴에 새겨진 말이었다. 이번에도 그 주문이 내게 용기를 주었다. 
          </p>
          
          <blockquote class="text-center font-serif text-2xl font-bold text-russia-blue my-8 animate-pulse">
            "그래 할 수 있다. 👊"
          </blockquote>

          <p class="leading-relaxed mb-6 text-slate-700">
            결심이 선 이후 바로 지원서를 작성했다. 서류에는 공인 러시아어 성적이 있으면 제출하라고 했지만, 그런 게 있을리 만무했다. 그게 없다면 영어성적도 제출하라고 했으니, 그래도 틈틈이 공부하고 시험도 보고 있던 토익 성적을 제출했다. 서류심사는 어떻게 통과했는지 모르겠지만 <strong>러시아어를 테스트 하는 언어심사</strong>를 보러 오라는 통보를 받았다. 📨
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            러시아어를 하나도 모르기에 내가 하고 싶은 말을 반페이지 가량 적어본 다음, 러시아어를 전공한 친구에게 부탁하여 번역을 했고 해당하는 한국어 발음을 적어서 달달 외웠다. <strong>자기소개랑 할 수 있다는 간단한 포부</strong>를 적었다.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            언어심사에 가자마자 왜 서류심사를 통과했는지 바로 알 수 있었다. <strong>지원자가 나 하나 뿐이었던 것이다.</strong> 😲 아, 역시나 러시아어도 할 줄 알고 핵공학도 공부했던 사람은 없었구나. 그러면서 살짝 안도한 것도 잠시, 면접이 아닌 시험문제를 푼다는 말에 잔뜩 긴장하고 말았다. 
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            면접이었다면 외운 내용이라도 이야기 하고 반드시 할 수 있다고 어필을 할 수 있었는데 말이다. 듣기와 읽기 평가였지만 러시아 까막눈인 나에게는 <strong>까만 건 글씨고 하얀 건 종이</strong>였다. 😵‍💫 그렇게 겨우 러시아 알파벳만 떼었던 나는 거의 찍다시피 문제를 풀었고 시험장을 나왔다.
          </p>
          
          <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
             <p class="leading-relaxed text-slate-800">
                그 후 얼마 뒤에 개별 및 단체면접이 있었고 심사위원들은 다른 자리에 지원한 지원자들에게는 각종 전문지식을 묻는 어려운 질문을 하는 반면 나에게는 <span class="font-bold text-orange-800">"할 수 있겠냐"</span>는 물음만 던졌다.
             </p>
          </div>
          
          <p class="leading-relaxed mb-6 text-slate-700">
             선발된 사람이 학위를 취득하지 못하고 돌아오는 것은 선발자에게도 많은 불이익이 따르지만 선발하는 기관 입장에서도 중장기 계획으로 필요한 분야의 전문인을 양성해야 하는데 나야 말로 리스크 그 자체였을거라 생각한다. 아는 건 별로 없고, 대학시절 성적도 변변찮은 내게 그들도 나를 보내도 될지 고민이 많이 되었을거라 조심히 추측해 본다. 
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
             나 스스로를 믿지 못하면 어느 누가 나를 믿어 주겠는가. 나는 누가 물어보든 <strong>당당히 할 수 있다고 말했다.</strong>
          </p>
          
          <p class="leading-relaxed text-slate-800 font-serif text-xl border-l-4 border-gold-accent pl-4 py-2 bg-gradient-to-r from-orange-50 to-transparent">
             하늘이 높고 말이 살찌는 2013년 가을 어느 날 🍂, 나는 기다리던 <strong>합격 통지</strong>를 받았다. 🎉 이어서 러시아어 예비학부 등록을 위해 지원했고 어찌저찌 비자도 발급받고 2014년 여름 드디어 러시아의 심장, <strong>모스크바</strong>로 향하는 비행기에 몸을 실었다. ✈️🇷🇺
          </p>
        `,en:`
          <p class="leading-relaxed mb-6 text-slate-700">
            In the military, there is a system called <span class="font-bold text-russia-blue">'consignment education'</span> where active-duty soldiers receive education at external institutions (domestic and international graduate schools, research institutes, military/private institutions, etc.) to enhance their job expertise. Among these, the professional degree consignment education, which allows soldiers to enter domestic or international graduate schools to obtain master's or doctoral degrees, announces and selects candidates once a year.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            If selected for a domestic professional degree, one is given the opportunity to enter various prestigious graduate schools in Korea. If selected for a foreign professional degree, depending on the announcement, opportunities are given to study in various countries, not only English-speaking ones like the United States 🇺🇸, Canada 🇨🇦, and the United Kingdom 🇬🇧, but also Russia 🇷🇺, India 🇮🇳, China 🇨🇳, and Japan 🇯🇵.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            In the summer of 2013 ☀️, I was a platoon leader, working at my unit as usual. Then, I saw an announcement for domestic and international consignment education on the military intranet. My branch was <strong>CBR (Chemical, Biological, Radiological)</strong>, which was not a main combat branch, and due to the specialized nature of the CBR branch, the positions available to me were limited.
          </p>
          
          <div class="bg-slate-50 border-l-4 border-russia-blue p-4 my-6 rounded-r-lg">
            <p class="leading-relaxed text-slate-700">
               Although the announcement stated that they were selecting various people to nurture experts in many fields, only two positions caught my eye: a <strong>domestic consignment position</strong> that could lead to becoming a military professor in the future, and a <strong>nuclear engineering position in Russia</strong> ☢️ that could lead to becoming a military researcher.
            </p>
          </div>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            However, for me, who had not studied hard during my university (cadet) days, the professorship was <span class="text-slate-500 line-through decoration-slate-400">a pie in the sky</span>. 🍡 This was because there was a restriction that one's university grades had to be in the <strong>top 30 percent</strong>.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            It was too late for regrets. The past cannot be changed. I wondered if I could even get a proper recommendation letter if I were to become a professor. When I had just entered university, a senior told me that if I wanted to have a relatively comfortable cadet life, I just needed to be in the top two-thirds in everything, and my grades were exactly like that. Not that my cadet life was very smooth, though. 😅 I don't think any professor would have taken notice of me. So, naturally, I had no choice but to fix my gaze on the <strong>master's in nuclear engineering in Russia</strong>.
          </p>
          
          <hr class="border-slate-200 my-8 w-1/2 mx-auto" />

          <p class="leading-relaxed mb-6 text-slate-700">
            <span class="font-bold text-russia-blue">"Do I know Russian? Have I ever studied nuclear engineering?"</span> Of course not. I couldn't even speak the English I had learned throughout my school years properly, and my major was chemistry. Besides, the major at the Korea Military Academy is somewhat lacking to be called a major at another civilian university. Moreover, studying unfamiliar nuclear engineering in an unfamiliar Russian language, even the people around me reacted with <strong>"Can you do it?"</strong> 🤷
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            At that time, I remembered something from my childhood with my father. Before we left for school, my father would make us shout <span class="font-bold text-russia-blue">"I can do it"</span> three times. Of course, I did it a few times and then stopped, but the memory was still vivid, and it was a phrase engraved in my heart that helped me get through tough times. This time, too, that spell gave me courage.
          </p>
          
          <blockquote class="text-center font-serif text-2xl font-bold text-russia-blue my-8 animate-pulse">
            "Yes, I can do it. 👊"
          </blockquote>

          <p class="leading-relaxed mb-6 text-slate-700">
            After making up my mind, I immediately filled out the application form. The documents said to submit a certified Russian language score if I had one, but there was no way I had one. If not, it said to submit an English score, so I submitted my TOEIC score, which I had been studying for and taking tests for from time to time. I don't know how I passed the document screening, but I received a notification to come for a <strong>language screening to test my Russian</strong>. 📨
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            Since I didn't know any Russian, I wrote down what I wanted to say on half a page, asked a friend who majored in Russian to translate it, and wrote down the corresponding Korean pronunciation to memorize it. I wrote a <strong>simple self-introduction and my aspirations that I can do it</strong>.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            As soon as I went to the language screening, I immediately knew why I had passed the document screening. <strong>I was the only applicant.</strong> 😲 Ah, so there was no one who knew Russian and had studied nuclear engineering. I was relieved for a moment, but then I got nervous when they said it was a test, not an interview.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            If it had been an interview, I could have at least said what I had memorized and appealed that I could definitely do it. It was a listening and reading test, but to me, who was illiterate in Russian, <strong>the black was the letters and the white was the paper</strong>. 😵‍💫 So, having barely learned the Russian alphabet, I practically guessed my way through the questions and left the test center.
          </p>
          
          <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
             <p class="leading-relaxed text-slate-800">
                Sometime later, there were individual and group interviews, and while the interviewers asked the other applicants difficult questions about various professional knowledge, they only asked me <span class="font-bold text-orange-800">"Can you do it?"</span>.
             </p>
          </div>
          
          <p class="leading-relaxed mb-6 text-slate-700">
             If a selected person fails to obtain a degree and returns, it has many disadvantages for the selected person, but from the perspective of the selecting institution, they need to cultivate experts in necessary fields as a mid- to long-term plan, and I think I was a risk in myself. I don't know much, and my university grades were not great, so I can carefully guess that they were also very worried about whether to send me.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
             If I don't believe in myself, who will believe in me? No matter who asked, I <strong>confidently said I could do it.</strong>
          </p>
          
          <p class="leading-relaxed text-slate-800 font-serif text-xl border-l-4 border-gold-accent pl-4 py-2 bg-gradient-to-r from-orange-50 to-transparent">
             One day in the autumn of 2013, when the sky was high and the horses were fat 🍂, I received the long-awaited <strong>acceptance notice</strong>. 🎉 I then applied to register for the Russian preparatory program, somehow got my visa issued, and in the summer of 2014, I finally boarded a plane to the heart of Russia, <strong>Moscow</strong>. ✈️🇷🇺
          </p>
        `},comments:[]}]},gf="/assets/Picture1-Df7qmBvz.png",pf="/assets/Picture2-CLY9TRtK.png",bf="/assets/Picture3-BxKIssuo.png",ny={id:"year1",title:{ko:"1년차, 예비학부",en:"Year 1, Preparatory Program"},shortTitle:{ko:"1년차",en:"Year 1"},description:{ko:"낯선 땅, 첫 번째 겨울",en:"A Strange Land, The First Winter"},isSinglePost:!1,isActive:!0,posts:[{id:"post-100",title:{ko:"새출발",en:"A New Beginning"},subtitle:{ko:"러시아로 향하는 비행기, 그리고 혹독한 신고식",en:"The Flight to Russia, and a Harsh Initiation"},imageUrl:"https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            개인적인 사정으로 아내보다 이틀 먼저 출국을 하게 되었다. 인천국제공항에는 어머니와 동생이 나와주었고 작별을 한 뒤 비행기에 몸을 실었다.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            군인정신이 몸에 밴 나는 예비학부를 포함한 3년간의 석사과정을 마쳐야 하는 <span class="font-bold text-russia-blue">임무(?)</span>를 완수해야 했기에 비장한 마음으로 좌석에 앉았다. 하지만 부모형제, 친구들을 못 본다는 생각이 나서 그런지, 낯선 땅에 대한 막연한 두려움 때문인지 눈물이 났다. 😭
          </p>

          <p class="leading-relaxed mb-8 text-slate-700">
            비행기 출발 전 기내방송이 나왔을 때가 드디어 정말 떠나는구나 하는 마음에 제일 많이 울었다.
          </p>

          <div class="bg-slate-50 p-6 rounded-xl border-l-4 border-russia-blue mb-8">
            <p class="leading-relaxed text-slate-700 italic">
              "기분이 조금 안정되나 싶을 때, 비행기 내에는 기내식이 나왔다. 승무원의 식사와 함께 어떤 음료를 마시겠냐는 질문에 나는 뭔가에 이끌린듯 <span class="font-bold text-wine-600">와인 🍷</span>을 달라고 했다. 왠지 알콜이 조금 도움이 되지 않을까 하는 마음에서였다."
            </p>
          </div>

          <p class="leading-relaxed mb-6 text-slate-700">
             하지만 결과는 정반대였다. 와인을 마시고 나니 한 번 더 이유 모를 슬픔과 두려움이 울컥했다. 가까스로 스스로를 다독이고 나니 잠이 몰려왔다. 한참을 푹 잔 것 같다. 기내식을 주고 있을 때 다시 깨어났고, 비슷한 일이 반복되었다. 또 와인을 주문했고 와인과 식사를 마치고는 또다시 한 번 울컥하고는 또 잠에 들었다. 😴
             <br/><br/>
             그렇게 14시간의 비행이 짧게 느껴졌고 어느새 <strong>모스크바 세례메티예보 국제공항</strong>에 도착해 있었다. 🇷🇺
          </p>

          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

          <p class="leading-relaxed mb-6 text-slate-700">
            한국에서 잠시 공부했던 러시아어로는 모스크바 현지인의 말을 거의 알아듣지 못했다. 그래도 공항에서 엄청나게 많은 사람들이 택시 호객행위를 한다는 건 알 수 있었다. 🚕
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            나는 미리 모스크바 국립대 학생회의 입학안내 서비스를 신청했기에 마중 나온 사람이 있었고, 안전하게 모스크바 시내 근처에 있는 기숙사까지 일행과 이동할 수 있었다. 공항에서 기숙사까지는 약 한 시간 조금 넘게 걸렸는데 택시 안에서 본 모스크바의 풍경은 모든 게 다 신기할 따름이었다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏠 낯선 기숙사, 첫 번째 밤</h3>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            도착한 기숙사는 지하철이 바로 옆에 있는 역세권 중의 역세권이었다. 말이 기숙사지 사실상 방이 두 개인 아파트였다. 각 방에는 두 명씩 들어갈 수 있었으니 한 호수에는 학생 네 명까지 살 수 있었다. 방 하나에는 나와 나보다는 대여섯 살 어린 룸메가 들어갔고, 다른 방에는 운 좋은 한국인이 혼자 방을 쓰게 되었다.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            방은 온통 오래된 목재로 되어 있었다. 그래도 다행인 건 해당 기숙사는 그나마 깨끗하게 관리가 된 편이라 바퀴벌레는 나오지 않는다고 했다. 나무로 된 침대에는 침대보와 담요가 있었는데 모두 정말 너무 오래되어서 사용할 수가 없었다. 특히 담요는 엄청 두껍고 까끌해서 바로 옷장 구석에 보관해 두었다.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            방을 조금 둘러보고는 당장 급한 물부터 해결을 해야 했다. 대부분의 유럽처럼 수도꼭지를 틀면 나오는 물은 모두 <strong>석회</strong>이기에 요로결석의 이유로 함부로 마시지 말라고 했다. 끓이더라도 석회가 둥둥 떠다니는 게 보이기에 별로 마시고 싶은 생각도 들지 않았다. 🚰
          </p>
          
          <p class="leading-relaxed mb-8 text-slate-700">
            필요한 물과 간식을 샀고, 잠시 혼자 밖에 나가보니 이제 진짜 러시아 생활을 시작한다는 생각이 들었다. <span class="bg-yellow-100 px-1">과연 어떤 모험이 기다리고 있을까, 설레는 마음과 미지의 불안함이 교대로 나를 어지럽히던 밤이었다.</span> 별로 아늑하지 못한 기숙사에서의 첫날밤이었지만 하루 종일 새로운 곳에서의 생활에 잔뜩 긴장했다가 마음이 놓여서인지 잠은 잘 잤다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📝 관료주의와 마주하다</h3>

          <p class="leading-relaxed mb-6 text-slate-700">
            러시아의 대학/대학원에 진학하기 위해선 예비학부를 거치는 것이 일반적이기에 함께 온 사람들과 함께 예비학부를 등록하러 갔다. 예비학부를 등록하려면 러시아어 공증을 받고 여권 복사본을 러시아어로 번역하여 제출해야 했다. 
            <br/><br/>
            다른 나라의 공증과 번역은 인정해 주지 않기에, 아무리 대한민국 국방부가 보증하고 국제여권이 증명해도, 구소련의 잔재가 가득한 러시아의 낡은 책상 앞에서는 무용지물이었다. 다음으로는 대형마트에 가서 필요한 물품들을 구입했다. 특히 이불과 베개는 최대한 포근하고 푹신한 것으로 신중히 골랐다. 🛌
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚕 선배(?)의 굴욕: 택시 사기</h3>

          <p class="leading-relaxed mb-6 text-slate-700">
            아내는 예정대로 내가 러시아에 오고 이틀 뒤에 왔다. 그래도 이틀 먼저 러시아에서 산 ‘선배’로서 어깨에 힘을 잔뜩 주고 의기양양하게 공항으로 향했다. 😤 겨우 이틀 만에 보는 거였지만 심적으로 의지할 사람이 생겨서 그런지 아내가 매우 반가웠다.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            내가 오는 날 도와준 사람의 얘기로는 3만 원 이상 절대 주지 말라고 해서 호객행위 하는 사람들이 금액을 부를 때마다 거절했다. 하지만 어떤 호객꾼이 곧잘 3만 원에 해주겠다고 하여 그 택시를 탔다. 그 때만 해도 모든 게 잘 풀리나 싶었다. 
          </p>
          
          <div class="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
            <p class="leading-relaxed text-red-900 font-medium mb-2">💸 기숙사에 도착하니 기사가 택시비를 요구했다.</p>
            <p class="leading-relaxed text-red-800">
              택시비를 이미 냈다고 하니, 그건 중계료이고 택시비가 <strong>18만 원</strong>이 나왔으니 내라고 한다. 아는 한국 사람에게 전화해서 도움을 요청했으나 역시 쉽지 않았다. 이런 택시기사를 하는 사람들이 러시아 마피아와도 연결되어 있는 경우도 있다고 하기도 하고, 이제 막 도착했는데 문제를 일으키고 싶지 않아 눈물을 머금고 비용을 지불했다.
            </p>
          </div>

          <p class="leading-relaxed mb-6 text-slate-700">
            흐린 하늘과 추운 날씨, 불친절한 사람들, 나의 멍청함으로 인한 사기... 이 모든 것들이 러시아의 첫인상을 망치기에 충분했다. 이제 시작이라고 생각하니 앞으로 남은 3년이 막막하기도 했다. 
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-800 font-bold text-lg text-center my-10">
            "정신을 바짝 차려야만 이 낯선 곳, 낯선 사람들 사이에서<br/>무사히 원하는 목표를 달성할 수 있을 듯했다. 👊"
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            그래도 한편으로는 ‘다 사람 사는 곳인데’ 하는 스스로의 위안을 했다. 그렇게 러시아에서의 첫 며칠은 분노와 다짐으로 순식간에 지나갔다.
          </p>
        `,en:`
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            For personal reasons, I had to leave for Russia two days before my wife. My mother and younger sibling came to see me off at Incheon International Airport, and after saying our goodbyes, I boarded the plane.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            With a soldier's spirit ingrained in me, I sat down with a grim determination to complete the <span class="font-bold text-russia-blue">mission(?)</span> of finishing my three-year master's program, including the preparatory program. However, tears welled up, perhaps because I thought about not being able to see my parents, siblings, and friends, or perhaps because of a vague fear of the unfamiliar land. 😭
          </p>

          <p class="leading-relaxed mb-8 text-slate-700">
            I cried the most when the in-flight announcement was made before departure, as it finally hit me that I was really leaving.
          </p>

          <div class="bg-slate-50 p-6 rounded-xl border-l-4 border-russia-blue mb-8">
            <p class="leading-relaxed text-slate-700 italic">
              "Just as I was starting to feel a little calmer, the in-flight meal was served. When the flight attendant asked what I would like to drink with my meal, I found myself asking for <span class="font-bold text-wine-600">wine 🍷</span>, as if drawn by something. I thought maybe a little alcohol would help."
            </p>
          </div>

          <p class="leading-relaxed mb-6 text-slate-700">
             However, the result was the complete opposite. After drinking the wine, another wave of inexplicable sadness and fear washed over me. After barely managing to compose myself, I felt sleepy. I think I slept soundly for a while. I woke up when they were serving another meal, and the same thing repeated. I ordered wine again, and after finishing my meal and wine, I felt another surge of emotion and fell asleep again. 😴
             <br/><br/>
             The 14-hour flight felt short, and before I knew it, I had arrived at <strong>Moscow Sheremetyevo International Airport</strong>. 🇷🇺
          </p>

          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

          <p class="leading-relaxed mb-6 text-slate-700">
            With the little Russian I had studied in Korea, I could barely understand the locals in Moscow. Still, I could tell that a huge number of people were soliciting for taxis at the airport. 🚕
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            I had pre-arranged for an admission guidance service from the Moscow State University student council, so there was someone to meet me, and I was able to travel safely with my group to a dormitory near the city center. It took a little over an hour from the airport to the dormitory, and the scenery of Moscow from the taxi was all so new and fascinating.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏠 A Strange Dorm, The First Night</h3>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            The dormitory I arrived at was in a prime location, right next to a subway station. It was called a dormitory, but it was actually an apartment with two rooms. Each room could accommodate two people, so up to four students could live in one unit. I shared a room with a roommate who was five or six years younger than me, and in the other room, a lucky Korean got to have the room all to himself.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            The room was entirely made of old wood. Fortunately, this dormitory was relatively well-maintained, so they said there were no cockroaches. The wooden bed had a bedsheet and a blanket, but they were all so old that I couldn't use them. The blanket, in particular, was incredibly thick and scratchy, so I immediately stored it in a corner of the closet.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            After looking around the room for a bit, I had to deal with the urgent matter of water. Like in most of Europe, the tap water contained a lot of <strong>lime</strong>, and I was warned not to drink it carelessly as it could cause kidney stones. Even when boiled, I could see lime floating around, so I didn't feel like drinking it. 🚰
          </p>
          
          <p class="leading-relaxed mb-8 text-slate-700">
            I bought some necessary water and snacks, and when I went outside alone for a moment, it hit me that my life in Russia was truly beginning. <span class="bg-yellow-100 px-1">What kind of adventures awaited me, a mix of excitement and an unknown anxiety that took turns dizzying me that night.</span> It was my first night in a not-so-cozy dormitory, but perhaps because I had been so tense all day in a new environment, I slept well once I relaxed.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📝 Encountering Bureaucracy</h3>

          <p class="leading-relaxed mb-6 text-slate-700">
            To enter a Russian university or graduate school, it is common to go through a preparatory program. So I went with the others who had come with me to register for the preparatory program. To register, we had to get our Russian documents notarized and submit Russian translations of our passport copies.
            <br/><br/>
            Notarizations and translations from other countries were not accepted. So no matter how much the Republic of Korea's Ministry of National Defense guaranteed it and my international passport proved it, it was useless in front of an old desk in Russia, full of the remnants of the former Soviet Union. Next, we went to a large supermarket to buy necessary items. I was especially careful to choose the softest and fluffiest blanket and pillow. 🛌
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚕 A Senior's(?) Humiliation: The Taxi Scam</h3>

          <p class="leading-relaxed mb-6 text-slate-700">
            My wife arrived two days after me, as scheduled. As a 'senior' who had lived in Russia for two days, I puffed out my chest and headed to the airport with great confidence. 😤 It had only been two days, but I was so happy to see her, perhaps because I now had someone to rely on emotionally.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            The person who helped me on the day I arrived told me not to pay more than 30 dollars, so I refused every time the taxi touts quoted a price. But one tout readily agreed to 30 dollars, so I took his taxi. At that moment, I thought everything was going well.
          </p>
          
          <div class="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
            <p class="leading-relaxed text-red-900 font-medium mb-2">💸 When we arrived at the dormitory, the driver demanded the taxi fare.</p>
            <p class="leading-relaxed text-red-800">
              When I said I had already paid the fare, he said that was a brokerage fee and the taxi fare came out to be <strong>180 dollars</strong>. I called a Korean acquaintance for help, but it wasn't easy. They said that these taxi drivers are sometimes connected to the Russian mafia, and I didn't want to cause any trouble right after arriving, so I paid the fee with tears in my eyes.
            </p>
          </div>

          <p class="leading-relaxed mb-6 text-slate-700">
            The gloomy sky, the cold weather, the unfriendly people, and the scam due to my foolishness... all of these things were enough to ruin my first impression of Russia. Thinking that this was just the beginning, the next three years seemed daunting.
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-800 font-bold text-lg text-center my-10">
            "It seemed I had to keep my wits about me to safely achieve my goals<br/>in this unfamiliar place, among these unfamiliar people. 👊"
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            Still, on the other hand, I comforted myself by thinking, 'people live here too.' And so, my first few days in Russia passed in a flash of anger and resolve.
          </p>
        `}},{id:"post-101",title:{ko:"모스크바가 모스크바 했다",en:"Moscow will be Moscow"},subtitle:{ko:"기숙사 생활과 러시아의 이면",en:"Dorm Life and the Other Side of Russia"},imageUrl:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            예비학부 등록은 이미 한 번 해봤기 때문에 이젠 아내의 예비학부에 등록을 도와줬다. 예비학부에서는 여러 기숙사를 배정해주시는데 등록과정에서 우리가 <strong>부부 💑</strong>임을 밝혔더니 같은 기숙사에 배정을 해주었다.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            부부가 같은 방에서 지낼 수 있는 가족 전용 기숙사는 아니었지만 가족기숙사보다 오히려 더 깨끗하다는 말과 저렴하다는 말에 예비학부 1년 간은 해당 기숙사에 머물기로 했다. 아내는 나와는 다른 층에 2인실 방을 배정받았는데 다행히 오기로 했던 룸메가 오지 않는 덕에 아내는 넓은 방을 혼자 쓰게 되었다. 🍀 공부해야 하는 시간이 많아 서로 바빴지만 아내 방에 놀러가는 것이 최고의 힐링이었다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👫 부부 기숙사와 새로운 인연</h3>

          <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
            <h4 class="font-serif font-bold text-slate-800 mb-2">🏠 옆 방의 미스터리</h4>
            <p class="leading-relaxed text-slate-700">
              이전 글에서 이야기 했듯 우리가 머물었던 기숙사는 한 호수에 두 개의 방이 있었는데, 아내와 같은 호수 하지만 옆 방에는 일본인 여학생이 살고 있었다. 그 학생은 은둔형 외톨이, 속칭 <strong>'히키코모리'</strong>로 보였다. 방은 다르지만 주방과 화장실을 아내와 같이 쓰는데 마주치는 일이 거의 없고 계단에서 마주쳤더니 '스미마셍'하면서 도망쳤다. 🏃‍♀️💨<br/>
              주방을 쓰지도 않았고 사회 생활을 전혀 하는 것 같지 않는 듯 방에서 잘 나오지도 않았다. 덕분에 아내는 기숙사를 편하게 사용할 수 있었다. 어쩌다가 먼 러시아까지 와서 공부를 하는지는 모르겠지만 잘 마치고 가길 바랐다. 🙏
            </p>
          </div>

          <p class="leading-relaxed mb-6 text-slate-700">
            나의 룸메는 나보다 몇 살 어린 친구였는데 (P군이라 칭하겠다), 키도 훤칠하고 인물도 좋았다. 영어도 무척이나 잘했고 사교성도 좋아서 나는 그 친구가 무척이나 마음에 들었다. 👍 그 외에도 공항에서 같이 만났던 일본어를 잘하는 S양이 있었는데, 자세한 이야기는 이후에 기술하겠지만 아내와 함께 그 친구들과 좋은 추억들을 많이 쌓을 수 있었다.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            그렇게 한국 친구들도 사귀었고 (늦은 나이에 오느라 대부분 동생들이었지만), 한국어를 배우는 러시아 친구들도 사귈 수 있었다. 러시아에서는 구글 대신 <strong>얀덱스(Yandex)</strong>라는 사이트가 우리의 네이버와 같은 역할을 하고, <strong>VK(Vkontakte)</strong>가 우리의 카카오톡과 비슷한 역할을 한다. 그 외에도 얀덱스에서 제공하는 각종 서비스들(얀덱스 택시 🚖, 얀덱스 지도 🗺️)을 설치함으로써 러시아 현지 패치를 서서히 해 나가고 있었다.
          </p>

          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎓 학생이라는 신분의 양면</h3>

          <p class="leading-relaxed mb-6 text-slate-700">
            러시아에서는 <span class="text-russia-blue font-bold">학생이라는 신분</span>은 조금 무시받는 분위기가 있다. 학생이라는 이유 하나 만으로 어른으로 대접받지 못하고 가벼운 훈계 혹은 꾸지람부터 욕설까지 부당하게 당하기도 했다. 😤
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            물론 학생이기에 누릴 수 있는 혜택도 굉장히 많이 편이긴 하다. 대부분의 관광지에서 할인을 받을 수 있는 것은 물론 한 달에 만원도 안 되는 금액으로 모스크바 시내의 거의 대부분의 대중교통을 이용할 수도 있다. 🚇 이러한 할인은 정말 어처구니가 없는 곳에서도 적용이 되었다.
          </p>

          <div class="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-6 italic text-slate-700">
            "한 번은 경찰에게 차선 위반으로 걸렸는데도 학생증을 보여주니 벌금을 할인해 주었다. 물론 공식적인 벌금은 아니고 뇌물이었지만 말이다. 💸👮‍♂️"
          </div>

          <p class="leading-relaxed mb-6 text-slate-700">
            한 번은 정말 기분 나쁜 경험이 있었다. 실수로 열쇠를 방에 두고 나왔고 룸메가 방을 잠그고 나가 사감에게 방을 열어달라고 부탁을 한 적이 있었다. 벌금을 내야 한다거나 경고를 준다거나 하면 받아들일 수 있었지만 장장 <strong>10분 동안 훈계</strong>를 들어야만 했다. 🗣️💢
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            또 한 번은 별거 아닌 일로 또 훈계를 하려는 사감에게 대든 적도 있었는데 오히려 그 후의 삶이 더 편해졌다. 이런 러시아인들의 <strong>약강강약</strong>(약자한테 강하고 강자에게 약한) 태도는 러시아에 머무는 동안 나의 심기를 자주 건드렸다.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            러시아에서는 심지어 러시아인들 조차 이런 말을 사람들이 자주 한다고 한다.
          </p>

          <blockquote class="text-center font-serif text-2xl font-bold text-russia-blue my-10 border-y-2 border-slate-100 py-6">
            "Это Москва"<br/>
            <span class="text-lg font-normal text-slate-500 mt-2 block">(This is Moscow)</span>
          </blockquote>

          <p class="leading-relaxed mb-6 text-slate-700">
            이 말인즉, 좋은 뜻이든 나쁜 뜻이든 <span class="bg-russia-blue/10 px-1">모스크바는 원래 그렇다. 그러려니 해라.</span> 그만큼 다르다는 의미이자, 다름을 인정해야 한다는 뜻으로 말하는 거겠지만, 막상 살다 보면 나쁜 상황에 더 자주 쓰게 된다.
          </p>

          <p class="leading-relaxed text-xl font-bold text-slate-800 text-center mt-8">
            요즘 말로 바꾸면 "모스크바가 모스크바 했네." 정도라고 할까. 🤷‍♂️🇷🇺
          </p>
        `,en:`
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            I had already registered for the preparatory program once, so this time I helped my wife register for hers. The preparatory program assigned several dormitories, and when we revealed that we were a <strong>married couple 💑</strong> during the registration process, they assigned us to the same dormitory.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            It wasn't a family dormitory where a married couple could live in the same room, but we decided to stay there for the first year of the preparatory program because we heard it was cleaner and cheaper than the family dormitory. My wife was assigned a double room on a different floor from me, and fortunately, the roommate who was supposed to come didn't show up, so my wife got to use the spacious room by herself. 🍀 We were both busy with our studies, but visiting my wife's room was the best way to relax.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👫 Married Dorm Life and New Connections</h3>

          <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
            <h4 class="font-serif font-bold text-slate-800 mb-2">🏠 The Mystery of the Next Room</h4>
            <p class="leading-relaxed text-slate-700">
              As I mentioned in the previous post, the dormitory we stayed in had two rooms in one unit. A Japanese female student lived in the room next to my wife's. She seemed to be a reclusive loner, a so-called <strong>'hikikomori'</strong>. Although the rooms were different, she shared the kitchen and bathroom with my wife, but they rarely ran into each other. When they did cross paths on the stairs, she would say 'sumimasen (Sorry in English)' and run away. 🏃‍♀️💨<br/>
              She didn't use the kitchen and didn't seem to have any social life, rarely leaving her room. Thanks to this, my wife was able to use the dormitory comfortably. I don't know how she ended up studying so far away in Russia, but I hoped she would finish her studies well. 🙏
            </p>
          </div>

          <p class="leading-relaxed mb-6 text-slate-700">
            My roommate was a few years younger than me (I'll call him P), and he was tall and handsome. He was also very good at English and had a great personality, so I liked him very much. 👍 In addition, there was S, a girl who was good at Japanese, whom I met at the airport. I'll write more about her later, but my wife and I were able to make many good memories with them.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            And so I made Korean friends (most of them were younger than me as I came at a late age), and I was also able to make Russian friends who were learning Korean. In Russia, a site called <strong>Yandex</strong> serves the same role as Google, and <strong>VK (Vkontakte)</strong> is similar to Facebook. In addition, by installing various services provided by Yandex (Yandex Taxi 🚖, Yandex Maps 🗺️), I was gradually patching myself to the local Russian environment.
          </p>

          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎓 The Double-Edged Status of a Student</h3>

          <p class="leading-relaxed mb-6 text-slate-700">
            In Russia, there is a tendency to look down on the <span class="text-russia-blue font-bold">status of a student</span>. Just for being a student, I was not treated as an adult and was sometimes subjected to unfair treatment, from light scolding or reprimands to insults. 😤
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            Of course, there are also many benefits to being a student. Not only can you get discounts at most tourist attractions, but you can also use most of the public transportation in Moscow for less than 10 dollars a month. 🚇 These discounts were applied in the most absurd places.
          </p>

          <div class="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-6 italic text-slate-700">
            "Once, I was caught by the police for a lane violation, but when I showed them my student ID, they gave me a discount on the fine. Of course, it wasn't an official fine, but a bribe. 💸👮‍♂️"
          </div>

          <p class="leading-relaxed mb-6 text-slate-700">
            There was one particularly unpleasant experience. I accidentally left my key in my room, and my roommate locked the door and left. I had to ask the dorm supervisor to open the door for me. I could have accepted a fine or a warning, but I had to listen to a <strong>10-minute lecture</strong>. 🗣️💢
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            Another time, I stood up to a supervisor who was about to lecture me over something trivial, and my life became much more comfortable after that. This Russian attitude of being <strong>strong against the weak and weak against the strong</strong> often got on my nerves during my stay in Russia.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            In Russia, even Russians themselves are said to often say this.
          </p>

          <blockquote class="text-center font-serif text-2xl font-bold text-russia-blue my-10 border-y-2 border-slate-100 py-6">
            "Это Москва"<br/>
            <span class="text-lg font-normal text-slate-500 mt-2 block">(This is Moscow)</span>
          </blockquote>

          <p class="leading-relaxed mb-6 text-slate-700">
            This means, for better or worse, <span class="bg-russia-blue/10 px-1">that's just how Moscow is, so you have to accept it.</span> It implies that it's different, and that you have to accept the difference, but in reality, you end up using it more often in bad situations.
          </p>

          <p class="leading-relaxed text-xl font-bold text-slate-800 text-center mt-8">
            To put it in modern terms, it's like saying, "Moscow will be Moscow." 🤷‍♂️🇷🇺
          </p>
        `}},{id:"post-102",title:{ko:"다름을 이해하기",en:"Understanding Differences"},subtitle:{ko:"러시아어와 사람들, 그 속에서 배운 것들",en:"The Russian Language, Its People, and What I Learned Among Them"},imageUrl:"https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            여러모로 러시아에서의 생활은 <span class="font-bold text-russia-blue">‘다름’</span>이라는 가치에 대해 일깨워준 소중한 경험이었다. 막연히 다르다기 보다 어떻게 다른지, 러시아어와 러시아인들의 다름에 대해 일부를 소개하고자 한다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤔 질문하는 방법</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            우리에게 제일 친숙한 영어는 말할 것도 없고 어순이 비슷한 일본어랑 비교해서도 러시아어는 아주 다른 언어라고 할 수 있다. 일단 의문문의 강세가 마지막에 있지 않고 묻고자 하는 단어에 있다. 예를 들어 한국어로 "너 학교에 다녀왔니?"를 묻는다면 마지막인 "니?" 부분에서 어조 올려 질문을 하겠지만 러시아어로 말하면 같은 문장을 어조만 바꿔서 세 가지 의미로 물어볼 수 있다.
          </p>
          <ul class="list-none space-y-2 mb-6 bg-slate-50 p-6 rounded-lg border border-slate-100">
            <li class="flex gap-3">
              <span class="font-bold text-russia-blue">1.</span>
              <span>"너 학교에 다녀왔니?" (다른 사람이 아닌 <strong class="text-slate-900">네가</strong> 갔는지 확인)</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-russia-blue">2.</span>
              <span>"너 학교에 다녀왔니?" (간 곳이 <strong class="text-slate-900">학교</strong>인지 확인)</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-russia-blue">3.</span>
              <span>"너 학교에 다녀왔니?" (행위 <strong class="text-slate-900">자체</strong>를 확인)</span>
            </li>
          </ul>
          <p class="leading-relaxed mb-6 text-slate-700">
             언뜻 보면 뭐가 다른지 차이를 느끼기 힘든데 보통은 행위 자체를 묻는 경우가 많고 러시아어를 배우다 보면 생각보단 금방 익숙해진다. 오히려 이렇게 안 쓰고도 대화가 가능한 다른 언어가 신기할 때도 종종 있었다. 
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔀 없는 듯 있는 어순</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            러시아인들에게 어순이 있냐고 물어보면 없다고들 말한다. 실제로 문법적으로는 틀린 말이 아니기도 하고 맞는 말이기도 하다. 예를 들어 <strong>"난 너를 사랑해"</strong>의 문장의 경우, 특별한 (혹은 생략된) 경우가 아니고는 어순이 바뀌는 경우는 없지만 러시아어로는 거의 모든 어순이 가능하다.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            단어 3개를 나열하는 방법은 6가지가 되지만 실제로 자주 쓰는 어순은 두 가지 정도로 한국어와 같은 어순인 "난 너를 사랑해"와 "난 사랑해 너를" 정도가 된다. 러시아어는 동사에 주어의 정보(나, 너, 제삼자, 우리, 너를 포함한 복수, 복수의 제삼자)가 일부 포함되어 있기에 생략의 자유도가 한국어보다 높다고 볼 수 있지만, 그렇다고 아무렇게나 생략하거나 배열하면 러시아인들이 말을 왜 그렇게 하냐고 핀잔을 주기에 자연스러운 어순을 익히는 데는 노력이 필요하다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🙇‍♂️ 러시아어의 반말/존댓말</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            으레 가지는 선입견으로 거친 러시아의 불곰 형누님들은 예의라곤 전혀 없는 사람들 같으나 놀랍게도 러시아어에는 존댓말이 있다. 물론 영어도 좀 더 정중한 단어가 있지만 러시아어에는 단어 선택이 아닌 동사에 존대를 표현할 수 있는 말이 한국어처럼 따로 있다.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            하지만 한국어와 다른 점은 존댓말을 사용하는 기준이 <span class="bg-yellow-100 px-1">친근함</span>이 되기에 몇몇 예외를 제외하곤 할머니 할아버지라도 가족끼린 절대로 존댓말을 쓰지 않는다. 처음에 이들의 문화를 잘 몰랐을 땐 러시아 친구가 자기 부모를 이름으로 부르거나 ‘너’라고 했을 때 <em>'요런 예절머리라곤 전혀 없는 사람들 같으니라고'</em> 생각했다. 😅
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            이성으로 만난 남녀 사이에 있어서도 처음 만났을 때를 제외하곤 거의 존댓말을 쓰지 않는다. 당연히 공적으로 만난 상대(학교 또는 회사 등)에게는 존칭을 사용한다. 식당이나 카페 직원이 ‘너’라고 하더라도 친근함이라는 표시니 아주 기분 나빠할 필요는 없지만 난 내내 기분이 좋지 않았다.
          </p>
          <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue mb-6">
            <p class="leading-relaxed text-slate-700 text-sm">
              <span class="font-bold">💡 Tip: 이름 부르기</span><br/>
              참고로 러시아 사람을 부를 때는 짧은 이름을 쓴다. 내가 아는 한 모든 이름은 짧은 이름을 가지고 있다. 예를 들자면 아나스타샤는 <strong>나스쨔</strong>, 알렉산드르는 <strong>사샤</strong>, 예카테리나는 <strong>카쨔</strong>로 부르는 식이다. 다만 공식 석상이나 존대를 하기 위해서는 이름과 부칭(아버지의 이름)을 같이 부른다. 영어로는 미스터, 미스, 닥터, 주니어 등을 붙일 테지만 러시아에서는 <span class="italic">이반 세르게예비치 (세르게이의 아들 이반)</span>, <span class="italic">이리나 미하일로브나(미하일의 딸 이리나)</span>로 부른다.
            </p>
          </div>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😶 모르는 이를 대함</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            처음 모스크바 세레메치예보 공항에 내려서 입학 수속을 밟으면서 러시아인들의 불친절은 과장이 전혀 없음을 알았다. 하지만 이런 인식은 시간이 지나며 좀 변하긴 했는데 그 이유인즉 러시아인들은 대체로 모르는 이방인에게 친절히 대할 필요가 없다고 생각한다는 것이다. 하지만 조금이라도 일면식이 있는 사람이라면 (하물며 기차의 동승객) 굉장히 예의가 바르게 되고 체면을 차리기 시작한다.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             같은 사람들이 맞나 싶을 때도 많았다. 거리에서는 거의 막말을 아무렇게나 일삼는 사람들이 러시아에서 만난 친구들도 너무나도 착했고 기차나 버스 등 몇 시간만 같이 앉아있게 되면 먹을 것도 나눠주고 꽤나 놀랄 정도로 친절했다. 그들도 이렇게 낯선 사람과 아는 사람을 다르게 대하는 그들만의 이유가 있었다.
          </p>
          <ul class="list-disc list-inside space-y-2 mb-6 text-slate-700 bg-slate-50 p-6 rounded-lg">
             <li>전부터 순진하고 숭고한 슬라브 민족이 외세에 수탈을 당하여 낯선 이에게 경계심을 가지게 되었다. 🛡️</li>
             <li>푸쉬킨이란 러시아의 대문호가 <strong>‘모르는 사람에게 미소 짓는 건 바보나 하는 짓이다’</strong>라고 했다. 😐</li>
          </ul>
          <p class="leading-relaxed mb-6 text-slate-700">
             원인이 뭐가 됐든 나를 납득시키는 건 불가능했다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤣 러시아어 농담</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            러시아에 도착하고 나서 러시아어를 조금 재밌게 배워보려 서점에서 러시아어 농담집을 구입한 적이 있다. 초보자를 위한 책이어서 그런지 모르는 단어도 그다지 많지 않아서 읽는 것 자체에는 큰 무리가 없었다. 처음 몇 개를 읽었을 땐 내가 잘 이해를 못하고 있나 싶었는데 근데 몇 개를 읽어도 도통 어디서 웃어야 할지 몰랐다. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             러시아 친구를 불러서 같이 좀 봐달라 했더니 첫 농담부터 빵 터지면서 어디서 샀냐고 물었다. 어이가 아주 없었지만 정중히 어느 부분이 웃기냐고 물어봤고 친구가 아주 친절히 웃음 포인트와 설명을 해주었지만 그 후로 러시아의 농담에 익숙해지는 데는 시간이 좀 걸렸다. 이러한 유머 코드의 차이는 단지 거리에서만 비롯되는 건 아니라고 생각이 들었다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌨️ 그 외</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            러시아인들이 추위에 강하다는 건 반은 맞고 반은 틀린 말인 것 같다. 한국에서 러시아어 학원을 다닐 때 원어민 강사가 있었는데 날이 조금만 추우면 머리부터 발끝까지를 꽁꽁 옷과, 모자, 장갑 등으로 덮고 왔다. 분명 러시아는 엄청 추울 텐데라는 생각이 항상 머릿속을 맴돌았다. 러시아에 도착하니 러시아어 선생님 같은 사람들을 많이 봤다. 그런 면에서 모든 러시아인들이 육체적으로 추위에 강하다는 말은 틀린 말인 듯하다. 게다가 러시아에선 실내에 들어가면 대부분의 건물에서 히터가 무료로 너무 따뜻하게 나오기 때문에 더더욱이 추운 날씨 때문에 추위에 익숙한 신체적 특성이 있다고 생각하는 건 조금 무리가 있을 듯싶다. 러시아인들이 추위에 강할 수 있는 이유는 그들이 가진 방한용품 덕분이 아닐까 싶다. 🧣🧤
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             그리고 러시아에서는 여자를 부를 때 단어 선택을 신중히 해야 한다. 전체가 아주 하얀 백발의 여성이라고 하더라도 <strong>‘할머니’</strong>라고 부르는 건 대단히 실례다. 👵❌ 한번은 수업 시간에 러시아어 선생님이 자신에 대해서 묘사해 보라 해서 ‘살짝 고약하게 생겼지만 마음씨는 착한 할머니’라고 했다가 한두 시간 정도 핀잔을 들었다.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             마찬가지로 아줌마처럼 보이는 사람에게도 <strong>아줌마</strong>라고 하는 것도 실례라 하고 아줌마라는 단어는 공항에서 들었는데 순한 맛 욕설처럼 쓰이더라. 그러면 모르는 러시아 여성을 부를 땐 어떻게 해야 하는지 물었더니, 러시아 여성들은 다 <strong>‘제부시카(아가씨)’</strong>라고 부르면 된단다. 러시아에서 생활하며 아줌마와 할머니한테 혼이 쏙 빠질 만큼 혼나고 나면 그들을 아가씨라고 부를 맘에 손톱만큼도 남지 않을 것이다.
          </p>

          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

          <p class="leading-relaxed mb-6 text-slate-700">
             그들은 매우 달랐다. 그렇다고 못 살 정도는 아니었지만 그렇다고 선뜻 친근하다고 느끼기에도 무리가 있는 사람들이다. 하지만 그들이 무조건 잘못된 것은 아닐 것이다. 
          </p>
          <p class="leading-relaxed text-xl font-bold text-slate-800 text-center mt-8">
            아직 내가 그들의 다름을 순순히 인정하기에 부족한 사람이기에<br/>내 그릇을 더 키워야 한다고 다짐했다. 🌱
          </p>
        `,en:`
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            In many ways, life in Russia was a valuable experience that awakened me to the value of <span class="font-bold text-russia-blue">'difference'</span>. Rather than being vaguely different, I would like to introduce some of the differences in the Russian language and its people.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤔 How to Ask Questions</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            Compared not only with English, which is most familiar to us, but even with Japanese, which has a similar word order, Russian feels like a very different language. One striking difference is that in a question, the stress does not fall at the end of the sentence, but on the word you want to ask about. For example, in Korean, if you ask "Did you go to school?", you would usually raise your intonation at the very end. In Russian, however, you can ask what is essentially the same sentence in three different ways simply by shifting the intonation.
          </p>
          <ul class="list-none space-y-2 mb-6 bg-slate-50 p-6 rounded-lg border border-slate-100">
            <li class="flex gap-3">
              <span class="font-bold text-russia-blue">1.</span>
              <span>"<strong class="text-slate-900">Did you</strong> go to school?" (Confirming that <strong class="text-slate-900">you</strong> went, not someone else)</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-russia-blue">2.</span>
              <span>"Did you go to <strong class="text-slate-900">school</strong>?" (Confirming that the place you went was <strong class="text-slate-900">school</strong>)</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-russia-blue">3.</span>
              <span>"Did you <strong class="text-slate-900">go</strong> to school?" (Confirming the action <strong class="text-slate-900">itself</strong>)</span>
            </li>
          </ul>
          <p class="leading-relaxed mb-6 text-slate-700">
             At first glance, it's hard to feel the difference, but usually, people ask about the action itself, and you get used to it surprisingly quickly as you learn Russian. In fact, there were often times when I found it strange that other languages could have conversations without this. 
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔀 Seemingly Non-existent Word Order</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            If you ask a Russian if there is a word order, they will say no. In fact, grammatically, this is both true and false. For example, in the sentence <strong>"I love you,"</strong> the word order rarely changes except in special (or omitted) cases, but in Russian, almost any word order is possible.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            There are 6 ways to arrange 3 words, but the most frequently used word orders are about two, the same as in Korean: "I you love" and "I love you." Since Russian verbs contain some information about the subject, the freedom of omission is higher than in Korean. However, if you omit or arrange words randomly, Russians will scold you for speaking that way, so it takes effort to learn the natural word order.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🙇‍♂️ Formal and Informal Speech in Russian</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            Contrary to the stereotype of rough Russian "bear" brothers and sisters being completely impolite, surprisingly, Russian has a formal form of address. Of course, English also has more polite words, but in Russian, there are separate words to express politeness in verbs, not just word choice, just like in Korean.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            However, the difference from Korean is that the criterion for using formal language is <span class="bg-yellow-100 px-1">familiarity</span>, so with a few exceptions, family members never use formal language, even to their grandparents. When I first didn't know their culture, I thought, <em>'These people have no manners at all,'</em> when a Russian friend called their parents by their first name or 'you.' 😅
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            Even between men and women who meet as a potential couple, they rarely use formal language except when they first meet. Of course, you use honorifics for people you meet in a public capacity (school or company, etc.). Even if a restaurant or cafe employee calls you 'you,' it's a sign of friendliness, so you don't need to be too upset, but I was not happy about it the whole time.
          </p>
          <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue mb-6">
            <p class="leading-relaxed text-slate-700 text-sm">
              <span class="font-bold">💡 Tip: Calling Names</span><br/>
              For reference, when addressing a Russian person, you use a nickname. As far as I know, all names have a shortened version. For example, Anastasia is called <strong>Nastya</strong>, Alexander is called <strong>Sasha</strong>, and Yekaterina is called <strong>Katya</strong>. But in official settings or to be polite, you use both the first name and patronymic (father's name). In English, you would use Mr., Miss, Doctor, Junior, etc., but in Russian, you would say <span class="italic">Ivan Sergeyevich (Ivan, son of Sergey)</span>, <span class="italic">Irina Mikhailovna (Irina, daughter of Mikhail)</span>.
            </p>
          </div>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😶 Dealing with Strangers</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            When I first landed at Moscow Sheremetyevo Airport and went through the admission process, I realized that the unfriendliness of Russians was not an exaggeration at all. However, this perception changed a bit over time, and the reason is that Russians generally don't think they need to be kind to strangers. But if you have even a slight acquaintance with someone (even a fellow passenger on a train), they become very polite and start to save face.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             There were many times when I wondered if they were the same people. People who would casually use abusive language on the street were so nice when they were my friends in Russia, and if we sat together for just a few hours on a train or bus, they would share their food and be surprisingly kind. They had their own reasons for treating strangers and acquaintances so differently.
          </p>
          <ul class="list-disc list-inside space-y-2 mb-6 text-slate-700 bg-slate-50 p-6 rounded-lg">
             <li>The naive and noble Slavic people have been exploited by foreign powers since long ago, so they have become wary of strangers. 🛡️</li>
             <li>A great Russian writer named Pushkin said, <strong>‘Smiling at a stranger is something only a fool does.’</strong> 😐</li>
          </ul>
          <p class="leading-relaxed mb-6 text-slate-700">
             Whatever the reason, it was impossible to convince me.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤣 Russian Jokes</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            After arriving in Russia, I once bought a Russian joke book from a bookstore to learn Russian in a fun way. Since it was a book for beginners, there weren't many words I didn't know, so there was no major difficulty in reading it. When I first read a few, I wondered if I was not understanding them correctly, but after reading a few more, I just couldn't figure out where to laugh. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             I called a Russian friend and asked him to take a look with me. He burst out laughing from the first joke and asked where I bought it. I was completely dumbfounded, but I politely asked which part was funny. My friend kindly explained the punchline and the explanation, but it took me some time to get used to Russian jokes after that. This difference in humor code was not just due to distance.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌨️ Etc.</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            The idea that Russians are strong against the cold seems to be half right and half wrong. When I was attending a Russian language academy in Korea, there was a native speaker instructor who would bundle up from head to toe with clothes, a hat, and gloves whenever it got a little cold. The thought that Russia must be very cold always lingered in my mind. When I arrived in Russia, I saw many people like my Russian teacher. In that sense, the statement that all Russians are physically strong against the cold seems to be wrong. Besides, when you go inside in Russia, most buildings have free heaters that are so warm, so it's a bit of a stretch to think that they have a physical trait of being used to the cold because of the cold weather. I think the reason why Russians can be strong against the cold is because of the winter gear they have. 🧣🧤
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             Also, in Russia, you have to be careful with your choice of words when addressing a woman. Even if a woman has completely white hair, it is very rude to call her <strong>'grandmother'</strong>. 👵❌ Once in class, the Russian teacher asked me to describe her, and I said 'a slightly cranky-looking but kind-hearted grandmother,' and I was scolded for an hour or two.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             Likewise, it is also rude to call someone who looks like a middle-aged woman an <strong>'auntie,'</strong> and I heard the word 'auntie' used at the airport as a mild curse word. So when I asked how to address an unknown Russian woman, they told me to call all Russian women <strong>'devushka (young lady)'</strong>. After being thoroughly scolded by aunties and grandmothers in Russia, you won't have the slightest desire to call them young ladies.
          </p>

          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

          <p class="leading-relaxed mb-6 text-slate-700">
             They were very different. It wasn't to the point where I couldn't live, but they were also people who I couldn't readily feel close to. However, they are not necessarily wrong. 
          </p>
          <p class="leading-relaxed text-xl font-bold text-slate-800 text-center mt-8">
            I resolved to grow my own capacity, as I was still a person who was not yet ready to readily accept their differences. 🌱
          </p>
        `}},{id:"post-103",title:{ko:"예비학부에서의 공부",en:"Studying at the Preparatory Program"},subtitle:{ko:"쯔모, 빠라, 그리고 러시아식 수학",en:"TsMO, Para, and Russian-Style Math"},imageUrl:"https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
           <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
             모스크바 국립대학교 예비학부는 유학생들 사이에서 오래전부터 <strong>‘쯔모(ЦМО, 국제교육센터)’</strong>라는 별칭으로 더 유명했다. 2013년에 공식 명칭이 <strong>이랴익(ИРЯиК, 러시아어 및 러시아 문화 연구소)</strong>으로 변경되었지만, 2014년에 러시아에 처음 발을 들인 나를 포함해 많은 사람들은 여전히 예비학부를 ‘쯔모’라고 불렀다. 아마도 발음하기 쉽고 짧아서였을 것이라 짐작한다.
           </p>

           <p class="leading-relaxed mb-6 text-slate-700">
             모스크바 대학의 예비학부는 우리가 흔히 떠올리는 독립된 건물이 아니라, 기존의 대형 건물 일부를 사용하는 형태였다. 이과와 문과 학생들은 도보로 약 3분 정도 떨어진 서로 다른 건물에서 수업을 들었다. 나는 이과였고 아내는 문과였기 때문에, 가끔 점심을 함께 먹거나 하교를 같이할 때면 먼저 끝난 사람이 다른 건물로 가서 기다려주곤 했다.
           </p>
           
           <div class="bg-slate-50 border border-slate-200 p-6 rounded-lg my-6">
             <p class="leading-relaxed text-slate-700 italic">
               "예비학부 주변을 보면 한 건물의 한 층에만 ‘○○대학 ○○학과’라고 쓰여 있는 경우도 종종 있었다. 대학교조차 건물 일부만 사용하는 모습을 보며, 한국의 학원 시스템과 비슷하다는 점에서 적잖은 충격을 받았다. 🏢"
             </p>
           </div>

           <p class="leading-relaxed mb-6 text-slate-700">
             예비학부는 단순한 어학연수 기관이 아니라, 대부분의 학생이 학부나 대학원 진학을 목표로 등록하는 과정이다. 따라서 입학 시 진학 예정 학과를 묻는다. 특정 전공 과목을 정하는 것은 아니지만, 역사·언어·공학·자연과학 등 큰 계열을 선택하게 되며, 이에 따라 1년간 수강 과목이 달라진다. 나는 <strong>자연과학 계열</strong>을 선택해 러시아어와 함께 수학과 물리를 수강했고, 아내는 <strong>언어(러시아어-한국어 통번역)</strong>를 선택해 러시아 역사와 문화를 배웠다.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⏱️ 러시아의 수업 시간, 빠라(Пара)</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             러시아 대학에는 우리가 말하는 50분짜리 ‘한 시간 수업’ 대신 <strong>‘빠라(пара)’</strong>라는 1시간 30~35분 단위의 수업이 있다. 보통 45분 수업 후 5~10분 휴식을 포함하는 구조라 생각보다 버틸 만했다. 예비학부는 매일 수업이 있었고 하루 평균 네 빠라를 들었으니, 학생 입장에서는 꽤 빡빡한 일정이었다.
           </p>

           <p class="leading-relaxed mb-6 text-slate-700">
             2014년 당시 1년 학비는 약 5,080달러였다. 일반적인 32주가 아닌 38주 과정이었고, 매일 수업이 진행되며 한 반 인원이 최대 6~7명(내 반은 4명)에 불과했으니 비용 대비 교육 밀도는 나쁘지 않았다. 다만 예비학부의 목적이 ‘대학 진학을 위한 기초 러시아어 교육’이기에 고급 수준까지 기대하기는 어렵다. 대부분의 학생에게 최종 목표는 <strong>TORFL 1단계(ТРКИ-1)</strong> 합격이다.
           </p>
           
           <div class="mb-8">
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Info</span>
             <p class="text-sm text-slate-600 bg-slate-100 p-4 rounded">
               <strong>TORFL</strong>은 러시아 교육부에서 주관하는 러시아어 능력시험으로, 기초(A1), 기본(A2), 1단계(B1), 2단계(B2), 3단계(C1), 4단계(C2)로 구분된다. 1단계는 약 12~18개월 학습 후 도달 가능한 수준으로, 일상적인 의사소통과 전공 기초 학습이 가능한 단계로 평가된다.
             </p>
           </div>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⚒️ CCCP의 비밀</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             예비학부에는 재미있는 일화도 있다. 대부분의 학생은 러시아가 처음이기에, 모스크바 곳곳에서 보이는 <strong>‘CCCP’</strong>라는 문구를 보고 수업 시간마다 그 의미를 묻곤 한다. 선생님들은 웃으며 그것이 과거 소련을 뜻하는 약자라고 설명해 주신다. 겉보기엔 영어 알파벳과 같지만, 러시아어에서는 C를 ‘에스’, P를 ‘알’로 읽기 때문에 생긴 해프닝이다.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📐 러시아어로 배우는 수학</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             다시 수업 이야기로 돌아가 보자. 내가 지원한 자리는 핵공학이었지만 모스크바 국립대에는 핵공학과가 없고 핵물리학과만 존재했다. 결국 나는 핵물리학 전공을 희망한다고 밝혔고, 그에 따라 러시아어 외에도 일주일에 수학 두 빠라, 물리 두 빠라를 들었다. 진짜 문제는 러시아어였다. 러시아어는 인쇄체와 필기체가 상당히 달라 초반부터 쉽지 않았다. 게다가 현지인들의 필기체는 매우 흘려 쓰는 경우가 많아, 외국인 입장에서는 해독 자체가 도전이었다. ✍️
           </p>
           <p class="leading-relaxed mb-6 text-slate-700">
             문법도 만만치 않았다. 동사는 시제와 인칭에 따라 변화하고, 명사는 격·수·성에 따라 형태가 달라진다. 어떤 언어든 어렵지만, 러시아어는 문법적 변형이 특히 풍부한 언어라고 할 수 있다.
           </p>

           <p class="leading-relaxed mb-6 text-slate-700">
             수학 수업은 ‘더하기’부터 시작했다. 연산을 배우는 것이 아니라, <strong>“1 더하기 1은 2”를 러시아어로 읽는 법</strong>을 배우는 것이었다. 1학기에는 로그와 지수 정도까지라 비교적 수월했다. 그러나 2학기에는 미분과 적분, 고급 미적분이 등장했다. 문제는 난이도가 아니라 속도였다. 수학 선생님은 기본 산수처럼 고급 미적분 마저 우리가 다 안다고 생각하는 모양이었다. 😵
           </p>

           <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
             ‘자, 정적분은 이런 식으로 읽고 이런 식으로 하면 됩니다.<br/>
             (중략) 숙제는 ○○까지 풀어오세요’
           </blockquote>

           <p class="leading-relaxed mb-6 text-slate-700">
             이런 식으로 숙제를 내곤 했는데, 속으로는 <em>‘아니 무슨 이게 덧셈 뺄셈도 아니고 오늘 배웠는데 어떻게 푸냐고...’</em> 생각한 적이 있었다. 설명은 빠르게 지나갔고, 수학을 배우기보다는 ‘수학을 러시아어로 이해하는 법’을 배우는 느낌이었다. 졸업 후 돌이켜보면 편미분이나 복잡한 적분 기법까지 다루지는 않았지만, 언어 장벽 때문에 수학이 가장 힘들었던 과목 중 하나였다.
           </p>
           
           <p class="leading-relaxed mb-6 text-slate-700">
             또한 러시아에서는 소수점과 천 단위 표기법이 한국과 반대다. 예를 들어 <span class="bg-slate-100 px-1 font-mono text-sm">12,345.6</span>은 러시아에서 <span class="bg-slate-100 px-1 font-mono text-sm">12.345,6</span>으로 표기한다. 익숙해지면 괜찮지만 처음에는 자주 헷갈렸다. 숫자 필기체도 우리와 모양이 달라 또 하나의 적응 과정이었다.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⚛️ 물리, 그리고 깨달음</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             물리 수업은 수학보다 조금 늦게 시작했다. 초반에는 뉴턴 역학을 배웠다. 엘리베이터, 도르래, 경사면, 마찰 등을 이용한 문제들이었는데, 문제 설정이 꽤 복잡했다. 도르래에 엘리베이터를 매달거나, 여러 개의 용수철을 연결해 힘을 계산하는 식이었다. 단순 계산보다 문제 상황을 이해하는 데 시간이 더 걸렸다. 이후 전자기학도 다루었고, 핵물리학에 대해서도 기초적인 내용을 배웠다.
           </p>

           <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

           <p class="leading-relaxed mb-6 text-slate-700">
             언어가 완전히 익숙하지 않은 상태에서 전공 과목을 배우는 일은 생각보다 힘들었다. 단어를 이해하는 것뿐 아니라, 그들의 문제 접근 방식과 사고 구조를 받아들이는 과정이 필요했다. 1년 차 당시 나는 이해되지 않는 부분을 받아들이기보다 쉽게 ‘이상하다’고 단정 짓곤 했다.
           </p>
           
           <p class="leading-relaxed text-lg font-bold text-slate-800 text-center mt-8">
             지금 돌이켜보면, 그것은 문화와 사고방식의 차이를 인정하지 못했던<br/>내 스스로의 미숙함을 드러낸 것이라고 할 수 있다. 😌
           </p>
        `,en:`
           <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
             The preparatory program of Moscow State University has long been more famous among international students by its nickname <strong>‘TsMO (ЦМО, Center for International Education)’</strong>. Although the official name was changed to <strong>'IRYaK (ИРЯиК, Institute of Russian Language and Culture)'</strong> in 2013, many people, including myself who first set foot in Russia in 2014, still called the preparatory program 'TsMO'. I assume it was because it was easy to pronounce and short.
           </p>

           <p class="leading-relaxed mb-6 text-slate-700">
             The preparatory program of Moscow University was not an independent building as one might commonly imagine, but rather used a part of an existing large building. Science and humanities students took classes in different buildings, about a 3-minute walk apart. Since I was a science student and my wife was a humanities student, sometimes when we had lunch together or went home together, the person who finished first would go to the other building and wait.
           </p>
           
           <div class="bg-slate-50 border border-slate-200 p-6 rounded-lg my-6">
             <p class="leading-relaxed text-slate-700 italic">
               "Around the preparatory program, you could often see signs like '○○ University ○○ Department' on just one floor of a building. Seeing even universities using only a part of a building, I was quite shocked by its similarity to the Korean hagwon (private academy) system. 🏢"
             </p>
           </div>

           <p class="leading-relaxed mb-6 text-slate-700">
             The preparatory program is not just a language training institution, but a course where most students enroll with the goal of entering an undergraduate or graduate program. Therefore, upon admission, they ask for your intended major. You don't decide on a specific major, but you choose a broad field such as history, language, engineering, or natural sciences, and your courses for the year will vary accordingly. I chose the <strong>natural sciences track</strong> and took mathematics and physics along with Russian, while my wife chose the <strong>language (Russian-Korean translation and interpretation) track</strong> and learned Russian history and culture.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⏱️ Russian Class Time, Para (Пара)</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             In Russian universities, instead of the 50-minute 'one-hour class' we are used to, there is a 1-hour 30-35 minute class unit called <strong>'para (пара)'</strong>. It usually includes a 5-10 minute break after a 45-minute class, so it was more manageable than I thought. The preparatory program had classes every day, and I took an average of four paras a day, which was a pretty tight schedule for a student.
           </p>

           <p class="leading-relaxed mb-6 text-slate-700">
             In 2014, the annual tuition was about $5,080. It was a 38-week course instead of the usual 32 weeks, with classes held every day and a class size of at most 6-7 students (my class had 4), so the educational density for the cost was not bad. However, since the purpose of the preparatory program is 'basic Russian language education for university admission,' it is difficult to expect an advanced level. The ultimate goal for most students is to pass the <strong>TORFL 1st level (ТРКИ-1)</strong>.
           </p>
           
           <div class="mb-8">
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Info</span>
             <p class="text-sm text-slate-600 bg-slate-100 p-4 rounded">
               <strong>TORFL</strong> is a Russian language proficiency test administered by the Russian Ministry of Education, divided into Basic (A1), Elementary (A2), 1st Level (B1), 2nd Level (B2), 3rd Level (C1), and 4th Level (C2). The 1st level is a level that can be reached after about 12-18 months of study, and is evaluated as a stage where everyday communication and basic major studies are possible.
             </p>
           </div>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⚒️ The Secret of CCCP</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             The preparatory program also has some interesting anecdotes. Since most students are new to Russia, they often see the letters <strong>‘CCCP’</strong> all over Moscow and ask what it means in class. The teachers smile and explain that it is an abbreviation for the former Soviet Union. It looks like the English alphabet, but in Russian, C is read as ‘es’, and P as ‘er’, which is why this happens.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📐 Learning Math in Russian</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             Let’s get back to the story about my classes. I had originally applied for Nuclear Engineering, but Moscow State University didn't have a Nuclear Engineering department—only Nuclear Physics. So, I stated my intention to major in Nuclear Physics. As a result, on top of my Russian language courses, I had to take two paras of math and two paras of physics every week. Russian was not easy from the beginning because the printed and cursive scripts are quite different. Moreover, the cursive of native speakers is often very sloppy, so it was a challenge for foreigners to decipher it. ✍️
           </p>
           <p class="leading-relaxed mb-6 text-slate-700">
             The grammar was not easy either. Verbs change according to tense and person, and nouns change according to case, number, and gender. Every language is difficult, but Russian is a language with particularly rich grammatical variations.
           </p>

           <p class="leading-relaxed mb-6 text-slate-700">
             The math class started with ‘addition’. It wasn’t about learning the operation, but about learning how to read <strong>“1 plus 1 is 2” in Russian</strong>. In the first semester, it was relatively easy as it only went up to logarithms and exponents. However, in the second semester, differentiation, integration, and advanced calculus appeared. The problem was not the difficulty, but the speed. The math teacher seemed to think that we knew everything, even advanced calculus, as if it were basic arithmetic. 😵
           </p>

           <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
             ‘Okay, this is how you read and do definite integrals.<br/>
             (Omitted) Do your homework up to ○○’
           </blockquote>

           <p class="leading-relaxed mb-6 text-slate-700">
             He used to give homework like this, and I used to think to myself, <em>‘This isn’t addition and subtraction, how can I solve it when I just learned it today...’</em> The explanation went by quickly, and it felt more like learning ‘how to understand math in Russian’ than learning math. Looking back after graduation, although we didn’t cover partial differentiation or complex integration techniques, math was one of the hardest subjects due to the language barrier.
           </p>
           
           <p class="leading-relaxed mb-6 text-slate-700">
             Also, in Russia, the decimal point and thousands separator notation is the opposite of that in Korea. For example, <span class="bg-slate-100 px-1 font-mono text-sm">12,345.6</span> is written as <span class="bg-slate-100 px-1 font-mono text-sm">12.345,6</span> in Russia. It’s fine once you get used to it, but it was often confusing at first. The cursive for numbers was also different from ours, which was another adjustment process.
           </p>

           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⚛️ Physics, and Realization</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             Physics class started a little later than math. In the beginning, we learned Newtonian mechanics. The problems involved elevators, pulleys, inclined planes, and friction, and the problem settings were quite complex. It was about hanging an elevator on a pulley or calculating the force by connecting several springs. It took more time to understand the problem situation than to do simple calculations. Later, we also covered electromagnetism and learned the basics of nuclear physics.
           </p>

           <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

           <p class="leading-relaxed mb-6 text-slate-700">
             Learning a major subject when you are not completely familiar with the language was harder than I thought. It required not only understanding the words, but also accepting their problem-solving approach and thought structure. At the time, in my first year, instead of accepting the parts I didn’t understand, I would easily dismiss them as ‘strange.’
           </p>
           
           <p class="leading-relaxed text-lg font-bold text-slate-800 text-center mt-8">
             Looking back now, I can say that it revealed my own immaturity<br/>in not being able to accept the differences in culture and ways of thinking. 😌
           </p>
        `}},{id:"side-1",title:{ko:"✨ 외전 (1) - 러시아의 산책",en:"✨ Side Story (1) - The Russian Walk"},subtitle:{ko:"걷기 그 이상의 의미, 그리고 강인한 체력의 필요성",en:"More Than Just a Walk, and the Need for Strong Stamina"},imageUrl:"https://images.unsplash.com/photo-1547448415-e9f5b28e570d?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          러시아에서의 일상을 논할 때 결코 빼놓을 수 없는 단어가 바로 ‘산책(Прогулка, 프라굴까)’이다. 러시아인들의 산책은 단순히 두 다리를 번갈아 움직이는 행위 그 이상을 의미한다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✨ ‘산책’이라는 단어의 마법</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          문자 그대로의 순수한 산책뿐만 아니라, 집에서 뒹굴거리며 편히 쉬는 것, 심지어 지루한 수업을 째고(?) 놀러 가는 짜릿한 일탈도 이 마법의 단어인 ‘산책’에 포함된다. 게다가 한국에 “라면 먹고 갈래?”나 “넷플릭스 보고 갈래?”가 있다면, 러시아에서는 마음에 드는 이성에게 “같이 산책 갈래?”라고 묻는 것이 일종의 데이트 신청이자 달콤한 작업 멘트로 쓰이기도 한다. 🥰 
          <br/><br/>
          그러니 러시아에서 누군가에게 가볍게 ‘산책 갈래?’라는 말을 들었다면, 이게 진짜 걷자는 건지, 데이트하자는 건지, 아니면 다 집어치우고 놀자는 건지 문맥과 상황을 눈치껏 잘 파악해야 한다. 🤔
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💪 필요한 것은 ‘강인한 체력’</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          보통은 문자 그대로의 산책을 의미하지만, 진짜 러시아인과 산책을 나가기로 합의했다면 반드시 단단히 챙겨야 할 필수품이 있다. 그건 바로 <strong>‘강인한 체력’</strong>이다. 그들의 산책은 한국인의 상상을 초월할 정도로 끝이 없기 때문이다. 🏃‍♂️ 
          <br/><br/>
          나는 나름 대한민국에서 군 생활도 버텨낸 건장한 성인 남성이고, 체력 하나는 남들에게 뒤지지 않는다고 자부했지만, 러시아인들의 압도적인 ‘산책력’ 앞에서는 추풍낙엽에 불과했다. 🍂 평지를 걷는 별거 아닌 산책에도 내 다리만 후들거리는 걸 보니, 세상에는 ‘일반 헬스용 근육’과 ‘러시아 산책용 근육’이 따로 존재하는 게 분명하다. 이 깨달음을 얻게 된 나의 눈물겨운 에피소드를 하나 소개할까 한다. 🥲
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤝 러시아 친구와의 첫 산책</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바에는 한국어를 배우고자 하는 열정 넘치는 현지인들이 생각보다 아주 많다. 그들이 자주 모이는 아지트 중 하나가 바로 원불교 재단에서 운영하는 ‘원광학교’였다. 러시아의 국민 SNS인 ‘프콘탁테(VK)’에는 이 원광학교 관련 그룹이 있는데, 여기에 “한국에서 왔는데 러시아 친구를 사귀고 싶다”고 글을 올리면 종종 연락이 오곤 했다. 🇰🇷🇷🇺 
          <br/><br/>
          내게도 연락을 준 러시아 친구가 한 명 있었는데, 다짜고짜 날씨가 좋으니 가까운 공원으로 산책을 나가자고 제안했다. “뭐, 공원 한 바퀴 쓱 돌고 오면 되겠지” 하는 세상 안일한 생각에 흔쾌히 약속을 잡고 가벼운 발걸음으로 승리공원으로 향했다. 아, 가기 전에 스마트폰 지도로 승리공원의 스케일을 단 한 번이라도 검색해 보았더라면, 적어도 마음의 준비라도 단단히 했을 텐데 말이다. 🗺️💦
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ 승리공원에서의 시련</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          전승기념공원이라고도 불리는 이 승리공원은 나치 독일과의 조국전쟁에서 승리한 것을 기념하여 대륙의 기상으로 어마어마하게 크게 만들어진 곳이다. 공원 바로 옆 지하철역에서 처음 보는 친구와 어색한 미소로 인사를 나눈 뒤 본격적인 ‘산책’이 시작되었다. 
          <br/><br/>
          내가 “우리 이제 어느 방향으로 갈까?”라고 묻자, 친구는 세상 해맑은 표정으로 “그냥 아무 데나 발길 닿는 대로, 가고 싶은 곳으로 가면 돼”라고 답했다. 순간 등골을 타고 서늘하고 싸한 느낌이 스쳐 지나갔지만, 일단 호기롭게 걷기 시작했다. 다행히 이 러시아 친구는 한국어를 배운 지 꽤 되어서 실력이 출중했고, 내가 더듬더듬 러시아어를 내뱉을 때마다 찰떡같이 알아듣고 많이 도와주었다. 🗣️✨
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 언어 교환의 즐거움도 잠시, 넓어도 너무 넓은 공원 이곳저곳을 기웃거리며 장장 한 시간가량을 걸었을 무렵, 우리는 마침내 공원의 중심부에 있는 전승박물관에 도착할 수 있었다. 내 두 다리는 이미 집에 가고 싶다고 아우성을 치는 상태였지만, 친구에게 애써 태연한 척하며 “자, 이제 어느 쪽으로 가볼까?”라고 점잖게 물어보았다. 
          <br/><br/>
          그러나 돌아온 대답은, 처음 만났을 때 들었던 그 절망적인 멘트의 무한 반복이었다. <strong>“응? 아무 방향이나 가고 싶은 곳으로 계속 가면 돼!”</strong> 😱
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚑 생존을 위한 귀가</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          그 순간, 나는 무언가 대단히 잘못되었다는 강렬한 직감을 받았다. 이대로 걷다가는 모스크바를 벗어날지도 모른다는 위기감에, 재빨리 “이제 슬슬 집에 들어가 봐야 하지 않을까?” 하고 최대한 불쌍하고 정중하게 말한 뒤에야 간신히 귀가라는 생존을 이뤄낼 수 있었다. 🏠💨 
          <br/><br/>
          그 친구에게 개인적인 악감정은 전혀 없었지만, 며칠 뒤 또 한 번 산책을 가자는 해맑은 연락에 조건반사적으로 몸이 아프다며 병약한 척을 했더니 금세 연락이 뜸해지고 말았다. 미안한 마음도 크긴 했지만, 그 첫 러시아식 산책의 충격이 얼마나 컸던지, 이후에도 다른 러시아인들이 산책을 제안할 때면 (도저히 거절할 수 없는 상황이 아닌 이상) “나는 산책을 별로 안 좋아해”라는, 러시아인으로서는 절대 이해할 수 없는 핑계를 대며 정중히 사양하곤 했다. 🙅‍♂️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚇 나만의 산책 노하우</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          만약 정말 어쩔 수 없이 산책에 끌려가야 할 경우에는, 무조건 약속 장소를 모스크바 최중심부 쪽으로 우겨서 잡았다. 모스크바 중심부는 도보로 10분 남짓한 거리마다 지하철역이 촘촘히 깔려 있어서, 체력 게이지가 바닥을 드러낼 때 언제든 지하로 도망칠 수 있는 ‘생존 탈출’에 굉장히 용이했기 때문이다. 🚇✅ 
          <br/><br/>
          게다가 지하철역 근처에는 허허벌판 공원과 달리 눈요기할 곳도 많고, 카페나 디저트 가게들이 즐비해 있어서 “우리 저기 가서 커피나 마실까?”라며 아주 자연스럽게 상대방을 자리에 주저앉히고 대화를 이어갈 수 있었다. ☕🍰
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">☀️ 산책에 진심인 이유</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          그렇다면 도대체 러시아인들은 왜 이렇게 산책에 진심이다 못해 환장하는 것일까? 유학 생활 내내 고민해 본 결과, 나는 나름의 결론을 도출해 냈다. 가장 큰 이유는 역설적이게도 <strong>‘우울한 날씨’</strong> 때문이다. ☁️ 
          <br/><br/>
          러시아은 1년 중 날씨가 맑은 날보다 우중충한 날이 훨씬 많다. 영국의 악명 높은 날씨도 알아주지만, 모스크바의 겨울과 흐린 날씨도 그에 못지않다. 그래서인지 어쩌다 한 번 해가 쨍하게 비치는 귀한 날이면, 사람들은 마치 광합성을 하려는 식물들처럼 약속이나 한 듯 우르르 쏟아져 나와 공원을 가득 채운다. ☀️🌱
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          게다가 모스크바의 대형 공원들은 크기만 무식하게 큰 것이 아니라, 조경과 시설이 기가 막히게 잘 정비되어 있다. 공원 안에 들어서면 즐길 거리도 많고 볼거리도 풍성하며, 그중 몇몇 공원들은 아름다운 모스크바 강을 끼고 있어 한가로운 여유를 즐기기에 더할 나위 없이 안성맞춤이다. 🌳⛲ 이러니 집 안에만 박혀 있던 러시아 사람들을 야외로 자석처럼 끌어당기기에 충분한 것이다. 물론, 그들의 무시무시한 기초 체력만 감당할 수 있다면 말이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌹 낭만적인 제안, 산책</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          결국 러시아에서의 ‘산책’은 단순히 걷는 행위를 넘어, 상대의 시간을 통째로 점유하고 삶의 여유를 공유하자는 낭만적인 제안이었던 셈이다. 🌹 다른 언어에서는 단어 하나가 문맥과 상황에 따라 이토록 다채로운 의미를 품을 수 있다는 사실에 새삼 감탄하게 된다. 실전 러시아 산책의 매운맛을 통해, 오늘도 겸허히 한 수 배운다. 🙏✨
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          When discussing daily life in Russia, one word that can never be omitted is 'walk' (Прогулка, pragulka). For Russians, a walk means more than just the act of moving one's legs alternately.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✨ The Magic of the Word 'Walk'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Not only does it refer to a pure, literal walk, but also lounging around at home, and even the thrilling escape of skipping a boring class to go play is included in this magic word 'walk.' Furthermore, if in Korea you have "Want to come over for ramen?" or "Want to watch Netflix?", in Russia, asking someone you're interested in "Want to go for a walk together?" is a kind of date proposal and a sweet pick-up line. 🥰 
          <br/><br/>
          So, if someone in Russia casually asks you, "Want to go for a walk?", you need to quickly figure out from the context and situation whether they really mean to walk, to go on a date, or to just ditch everything and have fun. 🤔
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💪 What You Need is 'Strong Stamina'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Usually, it means a literal walk, but if you've agreed to go for a real walk with a Russian, there's one essential item you must pack. And that is <strong>'strong stamina'</strong>. This is because their walks are endlessly long, beyond the imagination of a Korean. 🏃‍♂️ 
          <br/><br/>
          I was a healthy adult male who had endured military service in the Republic of Korea and prided myself on not lagging behind others in terms of stamina, but in front of the overwhelming 'walking power' of the Russians, I was nothing more than a leaf in the wind. 🍂 Seeing only my legs tremble on a simple walk on flat ground, it's clear that there are separate 'muscles for general fitness' and 'muscles for Russian walks' in the world. Shall I introduce a tearful episode of mine that led to this realization? 🥲
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤝 First Walk with a Russian Friend</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Moscow has surprisingly many passionate locals who want to learn Korean. One of their frequent hangouts was the 'Wonkwang School' run by the Won-Buddhism foundation. On the Russian national social media 'VKontakte (VK),' there is a group related to this Wonkwang School, and if you post something like "I'm from Korea and I want to make Russian friends," you'll often get replies. 🇰🇷🇷🇺 
          <br/><br/>
          A Russian friend contacted me, and out of the blue, suggested we go for a walk in a nearby park since the weather was nice. With the incredibly naive thought of "Well, it'll just be a quick stroll around the park," I readily agreed and headed to Victory Park with a light heart. Ah, if only I had searched for the scale of Victory Park on my smartphone map just once before going, I would have at least been mentally prepared. 🗺️💦
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ The Ordeal at Victory Park</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Victory Park, also called the Memorial Park of Victory, was built on a massive continental scale to commemorate the victory in the Patriotic War against Nazi Germany. After exchanging awkward smiles with a friend I was meeting for the first time at the subway station right next to the park, the 'walk' officially began. 
          <br/><br/>
          When I asked, "So, which way should we go now?", my friend replied with a world-bright smile, "Just go wherever our feet take us, wherever we want to go." For a moment, a cold, chilling sensation ran down my spine, but I started walking with bravado. Fortunately, this Russian friend had been learning Korean for quite some time and was very proficient, so he understood me perfectly whenever I stammered in Russian and helped me a lot. 🗣️✨
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          But the joy of language exchange was short-lived. After wandering around the vast, vast park for about an hour, we finally arrived at the Victory Museum in the center of the park. My legs were already screaming that they wanted to go home, but I pretended to be calm to my friend and politely asked, "So, which way should we go now?" 
          <br/><br/>
          However, the answer that came back was an infinite repetition of the desperate phrase I had heard when we first met. <strong>“Huh? Just keep going in any direction you want!”</strong> 😱
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚑 The Escape for Survival</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          At that moment, I had a strong intuition that something was very wrong. In a crisis, feeling that I might walk right out of Moscow, I quickly said, "Shouldn't we be heading home soon?" as pitifully and politely as possible, and only then was I able to achieve the survival of returning home. 🏠💨 
          <br/><br/>
          I had no personal grudge against that friend, but a few days later, when he cheerfully contacted me to go for another walk, my body reflexively pretended to be sick, and he soon stopped contacting me. I felt very sorry, but the shock of that first Russian-style walk was so great that even afterwards, whenever other Russians suggested a walk, (unless it was a situation I absolutely couldn't refuse) I would politely decline with the excuse, "I don't really like walking," which is completely incomprehensible to a Russian. 🙅‍♂️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚇 My Own Walking Know-How</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          If I absolutely had to be dragged on a walk, I would insist on setting the meeting place in the very center of Moscow. The center of Moscow is densely packed with subway stations every 10 minutes or so on foot, making it very convenient for a 'survival escape' underground whenever my stamina gauge hit bottom. 🚇✅ 
          <br/><br/>
          Besides, near the subway stations, unlike the empty parks, there are many things to see, and cafes and dessert shops are lined up, so I could very naturally make the other person sit down and continue the conversation by saying, "Shall we go get some coffee over there?" ☕🍰
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">☀️ The Reason They Are So Serious About Walking</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          So why on earth are Russians so serious, no, so crazy about walking? After pondering this throughout my study abroad, I came to my own conclusion. The biggest reason, paradoxically, is the <strong>'gloomy weather'</strong>. ☁️ 
          <br/><br/>
          Russia has far more gloomy days than sunny days in a year. The notorious weather of the UK is well-known, but Moscow's winter and cloudy weather are no less so. That's why on the rare day when the sun shines brightly, people pour out as if they are plants trying to photosynthesize and fill the parks, as if by appointment. ☀️🌱
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          Moreover, Moscow's large parks are not just stupidly large, but the landscaping and facilities are fantastically well-maintained. Once you enter a park, there are many things to enjoy and see, and some of them are located along the beautiful Moscow River, making them perfect for enjoying a leisurely time. 🌳⛲ This is enough to attract the Russian people who have been cooped up in their houses to the outdoors like a magnet. Of course, that's only if you can handle their terrifying basic stamina.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌹 A Romantic Proposal, the Walk</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In the end, a 'walk' in Russia was a romantic proposal to occupy the other person's time entirely and share the leisure of life, going beyond the mere act of walking. 🌹 It makes me admire anew the fact that in other languages, a single word can contain such a variety of meanings depending on the context and situation. Through the spiciness of a real Russian walk, I humbly learn a lesson again today. 🙏✨
        </p>
      `}},{id:"post-104",title:{ko:"그럭저럭 먹고살기",en:"Getting By with Food"},subtitle:{ko:"샤슬릭부터 보르쉬, 그리고 패스트푸드까지",en:"From Shashlik to Borsch, and Fast Food"},imageUrl:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
           <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
             러시아의 먹거리에 대한 영상이나 정보를 찾기 어려우리라 짐작한다. 설령 있다 하더라도 러시아의 ‘전통음식’에 대한 정보는 거의 없을 터인데, 그도 그럴 것이 러시아인들이 먹는 음식들 대부분이 외국에서 유래했기 때문이다. 여담으로 한국인들이 ‘전통음식’이라고 믿고 즐겨 먹는 음식들 중에도 ‘전통’이라고 부르기 민망할 정도로 역사가 짧은 음식이 많긴 하다. 예를 들어 감자탕이라던지 설렁탕도 역사가 100년 내로 생각보다 매우 짧다. 각설하고 러시아인들의 식탁에는 무엇이 올라가는지 살펴보도록 하자. 🍽️
           </p>
           
           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌍 이웃 나라의 맛</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             러시아에서 쉽게 볼 수 있는 <strong>‘플로프’</strong>라는 볶음밥은 우즈베키스탄 음식이고, 내가 러시아에서 제일 좋아했던 음식 중 하나인 <strong>‘샤슬릭’</strong>이라는 꼬치 고기구이 또한 아르메니아에서 유래했다고 한다. 🥩
           </p>
           <p class="leading-relaxed mb-6 text-slate-700">
             그리고 우리에게 익숙하지 않지만 <strong>조지아</strong>(미국의 주 이름이 아니고 나라 이름, 러시아식으로는 그루지야) 음식이 맛국으로 통한다. 조지아식 만두인 <strong>힌칼리</strong>나 빵 안에 계란을 넣어서 만든 <strong>하차푸리</strong> 등은 러시아에서 쉽게 접할 수 있는 음식이자 러시아인 뿐만 아니라 러시아에 사는 외국인, 주변국 사람들에게도 사랑받는 메뉴다.
           </p>
           
           <figure class="my-8">
             <img src="${gf}" alt="이웃 나라의 맛" class="w-full rounded-lg shadow-lg" />
             <figcaption class="text-center text-sm text-slate-500 mt-2 font-serif italic">이웃 나라의 맛 (플로프, 샤슬릭, 힌칼리, 하차푸리)</figcaption>
           </figure>
           
           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥣 러시아 고유의 맛</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             그렇다면 러시아 고유의 음식은 무엇일까? 러시아는 85개의 연방관구로 구성되어 있고, 그 중 22개는 자치공화국이다. 세계 1위의 광활한 영토에 여러 민족, 게다가 여러 공화국이 섞여 있으니 딱 잘라 ‘러시아 고유음식’이라고 하기는 쉽지 않다. 하지만 주류인 슬라브인들을 대상으로 모스크바와 러시아의 주요 도시에서 접할 수 있는 대표적인 음식을 이야기 하자면 <strong>보르쉬</strong>와 <strong>블린</strong> 정도가 있겠다.
           </p>
           
           <p class="leading-relaxed mb-6 text-slate-700">
             <strong>보르쉬</strong>는 한국으로 치면 된장국 정도의 위상을 가지고 있다. 요즘은 한국 사람에게도 조금 익숙해진 비트라는 자줏빛 무로 색을 낸 고깃국이다. 러시아인들은 보르쉬 위에 <strong>스메타나</strong>라는 사워크림을 올린 후 스프와 섞어서 먹는데, 이 스메타나라는 게 한국인에게 익숙치 않을 뿐더러 살짝은 상한 듯한 시큼함이 있어서 나는 러시아를 떠날 때까지 결코 스메타나를 즐기지 못했다. 😅
           </p>
           
           <p class="leading-relaxed mb-6 text-slate-700">
             그래도 스메타나만 뺀다면 그렇게 큰 장벽 없이 누구나 즐길 수 있는 따뜻한 스프다. 처음엔 강렬한 자주색에 거부감이 들 수 있지만, 추운 날씨에 한 숟가락 떠먹으면 그런 마음은 언제 그랬냐는 듯 눈 녹듯 사라진다. 러시아에 살며 입맛이 현지에 동화되면 붉은 빛이 주는 생소함은 온데간데 없고, 우리네 소고기뭇국처럼 깊고 구수한 감칠맛을 느낄 수 있다.
           </p>

           <p class="leading-relaxed mb-6 text-slate-700">
             <strong>블린</strong>은 러시아식 팬케이크인데 우리가 흔히 아는 두툼한 팬케이크와 달리 아주 얇은 것이 특징이다. 두 세번 접거나 말아서 꿀 등의 달달한 소스를 찍어 먹기도 하고, 속에 햄이나 계란, 훈제 연어 등을 넣어서 간식으로도 좋고 식사 대용으로 먹기도 한다. 집에서도 쉽게 할 수 있고 거리에 나가면 많은 음식점에서 저렴하게 사 먹을 수 있다. 블린은 러시아 전통음식 중에 난이도가 가장 낮다고도 볼 수 있지만 안타깝게도 러시아와 그 인근 국가 외에는 블린을 찾기가 쉽지 않다.
           </p>

           <figure class="my-8">
             <img src="${pf}" alt="러시아 고유의 맛" class="w-full rounded-lg shadow-lg" />
             <figcaption class="text-center text-sm text-slate-500 mt-2 font-serif italic">러시아 고유의 맛 (보르쉬, 블린, 흑빵, 뻴메니)</figcaption>
           </figure>

           <p class="leading-relaxed mb-6 text-slate-700">
             그 외에도 시큼한 맛의 흑빵이라던가 만두와 비슷하지만 크기는 훨씬 작은 <strong>뻴메니</strong>도 러시아의 음식이다. 뻴메니 속에는 여러가지 속이 들어갈 수 있는데, 한 번은 실수로 고기가 들어있다고 산 뻴메니에 체리가 들어가 있었다. 🍒 이 뻴메니를 라면 끓일 때 넣었는데 그 중 몇 개가 익으며 터졌고 속이 라면 국물로 흘러나왔다.
           </p>

           <div class="bg-red-50 border border-red-200 p-6 rounded-lg my-6">
             <p class="leading-relaxed text-red-900 italic">
               "라면 국물이 빨개서 체리 과즙이 듬뿍 들어간 줄도 모르고 한 숟갈 떠먹었다. <strong>아비규환</strong>이라는 단어가 머리에서 절로 떠올랐다. 아까운 라면을 통째로 버릴 수 밖에 없었다. 지옥의 악마도 울고 갈 맛이었다. 👿 자신 있으면 시도해 보길."
             </p>
           </div>
           
           <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍔 생존을 위한 선택, 패스트푸드</h3>
           <p class="leading-relaxed mb-6 text-slate-700">
             러시아의 고유음식보다도 밖에서 제일 흔하게 볼 수 있는 음식은 사실 패스트푸드다. 버거킹, KFC, 맥도날드 등 글로벌 패스트푸드 체인점이 널려있는데, <span class="bg-yellow-100 px-1">빅맥지수가 세계 최저가인 러시아</span>에서 결코 이 체인점들을 피할 방법이 없다. 나와 친구들은 KFC에서 파는 바스킷 윙을 주로 먹었는데 만원 정도 되는 가격에 윙이 25개가 줬기에 치킨이 그리울 때마다 찾곤 했다. 🍗
           </p>
           <p class="leading-relaxed mb-6 text-slate-700">
             러시아에 여행 중 특이한 음식을 찾아 헤매다 결국엔 패스트푸드점으로 발길을 돌리는 여행객들을 심심찮게 볼 수 있다. 나도 그랬고, 나를 보러 러시아에 왔던 모든 사람이 그랬다.
           </p>
           
           <figure class="my-8">
             <img src="${bf}" alt="패스트푸드" class="w-full rounded-lg shadow-lg" />
             <figcaption class="text-center text-sm text-slate-500 mt-2 font-serif italic">생존을 위한 선택, 패스트푸드 (KFC, 맥도날드, 전기통닭, 샤오르마)</figcaption>
           </figure>

           <p class="leading-relaxed mb-6 text-slate-700">
             <strong>전기구이 통닭</strong>과 <strong>샤오르마</strong>는 길거리에 있는 노점상에서 아주 흔하게 볼 수 있는 음식이다. 값이 매우 저렴하고 맛도 훌륭하다. 전기구이 통닭은 어렸을 때 아버지가 사오던 통닭과 맛이 정말 비슷했다. 샤오르마를 주문하면 그 위에 스메타나를 얹을 건지 물어보는데 이것만 <strong>‘아니오’</strong>라고 대답하면 벌써 성공이다. 의심스러운 재료 없이 얇은 또띠아 빵에 채소와 고기를 듬뿍 넣어 돌돌 말아놓았기에 거의 실패가 없다.
           </p>
           <p class="leading-relaxed mb-6 text-slate-700">
             예비학부에서 공부하는 동안 러시아어 선생님은 우리더러 함부로 거리에서 뭔가를 사 먹지 말라고 그랬다. 왜 그렇게 맛있는 음식이 그렇게 싸겠냐며 말이다. 닭이 아닌 비둘기라는 소문이 있을 정도였다. 🐦 그래도 돈도 없고 춥고 배고픈 유학생에게는 이보다 더 싸고 든든한 먹거리는 찾기 힘들었다.
           </p>

           <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

           <p class="leading-relaxed mb-6 text-slate-700">
             러시아에서 살며 표면적으로 받은 느낌은 러시아 사람들은 대체로 맛에 큰 의미를 부여하지 않는 듯했다. 날이 추워서 그런지 아니면 우리나라의 옛날처럼 아직은 먹고 살기가 팍팍해서 그런지 말이다. 아마 그들의 눈에는 맛집을 불을 켜고 찾아다니는 한국인들을 결코 이해하지 못하리라.
           </p>
           <p class="leading-relaxed mb-6 text-slate-700">
             그리고 대부분의 러시아인들이 이야기 하기로는 <strong>집에서 먹는 음식</strong>이 제일 맛있고, 어쩔 수 없을 때만 나가서 외식을 한다고 한다. 생각해 보면 한국은 조금 달랐다. 집에서 하기 힘든 맛있는 음식을 먹고 싶을 때 주로 나가서 사 먹기 때문이다. 내 인식도 마찬가지였다. <em>'왜 맛도 별로 없는데 굳이 나가서 사 먹지'</em>라는 생각이 머릿속을 항상 떠돌았다. </p> <p class="leading-relaxed text-xl font-bold text-slate-800 text-center mt-8"> 음식도 다르지만 음식을 대하는 태도, 외식에 대한 인식 등<br/>여전히 달라도 많이 다르다는 것을 다시금 느꼈다. 🥢 </p>`,en:`<p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3"> I guess it's hard to find videos or information about Russian food. Even if there is, there's probably little about 'traditional Russian food', because most of the food Russians eat originated from foreign countries. As an aside, among the foods Koreans believe to be 'traditional' and enjoy, many have a surprisingly short history that makes them awkward to call 'traditional'. For example, Gamjatang and Seolleongtang are relatively short, within 100 years. Anyway, let's look at what's on Russian tables. 🍽️ </p> <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌍 Flavors of Neighboring Countries</h3> <p class="leading-relaxed mb-6 text-slate-700"> The fried rice called <strong>'Plov'</strong>, commonly seen in Russia, is Uzbek food, and <strong>'Shashlik'</strong>, a grilled skewer dish, one of my favorite foods in Russia, is also said to have originated from Armenia. 🥩 </p> <p class="leading-relaxed mb-6 text-slate-700"> And though unfamiliar to us, <strong>Georgian</strong> (the country, not the US state; in Russian, Gruziya) food is considered delicious. Georgian dumplings like <strong>Khinkali</strong> or <strong>Khachapuri</strong>, a bread with egg inside, are easily accessible in Russia and are loved not only by Russians but also by foreigners living in Russia and people from neighboring countries. </p> <figure class="my-8"> <img src="${gf}" alt="Flavors of Neighboring Countries" class="w-full rounded-lg shadow-lg" /> <figcaption class="text-center text-sm text-slate-500 mt-2 font-serif italic">Flavors of Neighboring Countries (Plov, Shashlik, Khinkali, Khachapuri)</figcaption> </figure> <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥣 Unique Russian Flavors</h3> <p class="leading-relaxed mb-6 text-slate-700"> So what are Russia's unique dishes? Russia is composed of 85 federal subjects, 22 of which are autonomous republics. With the world's largest territory, various ethnic groups, and many republics mixed together, it's not easy to pinpoint 'unique Russian food'. However, speaking of typical dishes found in Moscow and major Russian cities for the mainstream Slavic population, there are <strong>Borsch</strong> and <strong>Blini</strong>. </p> <p class="leading-relaxed mb-6 text-slate-700"> <strong>Borsch</strong> has a status in Russia comparable to doenjang-guk (soybean paste stew) in Korea. It's a meat soup colored with purple beets, which has become somewhat familiar to Koreans these days. Russians typically put <strong>Smetana</strong>, a sour cream, on top of borsch and mix it in. This smetana was unfamiliar to Koreans and had a slightly sour taste, like it had gone bad, so I never really enjoyed it until I left Russia. 😅 </p> <p class="leading-relaxed mb-6 text-slate-700"> Nevertheless, if you exclude smetana, it's a warm soup that anyone can enjoy without much of a barrier. At first, the intense purple color might be off-putting, but one spoonful on a cold day will make those feelings melt away. Once your palate adapts to the local tastes while living in Russia, the unfamiliarity of the red color disappears, and you can taste a deep, savory umami like our beef radish soup. </p> <p class="leading-relaxed mb-6 text-slate-700"> <strong>Blini</strong> are Russian pancakes, but unlike the thick pancakes we usually know, they are characterized by being very thin. They can be folded or rolled two or three times and dipped in sweet sauces like honey, or filled with ham, eggs, smoked salmon, etc., making them great as snacks or meal replacements. They are easy to make at home, and many restaurants sell them cheaply. Blini can be considered the easiest among Russian traditional foods, but unfortunately, it's hard to find them outside of Russia and its neighboring countries. </p> <figure class="my-8"> <img src="${pf}" alt="Unique Russian Flavors" class="w-full rounded-lg shadow-lg" /> <figcaption class="text-center text-sm text-slate-500 mt-2 font-serif italic">Unique Russian Flavors (Borsch, Blini, Black Bread, Pelmeni)</figcaption> </figure> <p class="leading-relaxed mb-6 text-slate-700"> In addition, sour black bread and <strong>Pelmeni</strong>, which are similar to dumplings but much smaller, are also Russian foods. Pelmeni can have various fillings. Once, I mistakenly bought pelmeni that was supposed to have meat but had cherries inside. 🍒 I put these pelmeni in ramen when cooking it, and some of them burst when cooked, and the filling flowed into the ramen broth. </p> <div class="bg-red-50 border border-red-200 p-6 rounded-lg my-6"> <p class="leading-relaxed text-red-900 italic"> "The ramen broth was red, so I didn't even know it had plenty of cherry juice and took a spoonful. <strong>Pandemonium</strong> naturally came to mind. I had no choice but to throw away the precious ramen. It tasted like something even the devil of hell would cry over. 👿 Try it if you dare." </p> </div> <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍔 Fast Food, a Choice for Survival</h3> <p class="leading-relaxed mb-6 text-slate-700"> More commonly seen outside than unique Russian dishes is actually fast food. Global fast-food chains like Burger King, KFC, and McDonald's are ubiquitous, and in <span class="bg-yellow-100 px-1">Russia, where the Big Mac Index is the lowest in the world</span>, there's no avoiding these chains. My friends and I primarily ate Basket Wings from KFC. For about 10 dollars, you'd get 25 wings, so we'd go there whenever we missed chicken. 🍗 </p> <p class="leading-relaxed mb-6 text-slate-700"> Travelers wandering around Russia looking for unique foods often end up at fast-food restaurants. I did, and so did everyone who came to visit me in Russia. </p> <figure class="my-8"> <img src="${bf}" alt="Fast Food" class="w-full rounded-lg shadow-lg" /> <figcaption class="text-center text-sm text-slate-500 mt-2 font-serif italic">A Choice for Survival, Fast Food (KFC, McDonald's, Rotisserie Chicken, Shawarma)</figcaption> </figure> <p class="leading-relaxed mb-6 text-slate-700"> <strong>Rotisserie chicken</strong> and <strong>Shawarma</strong> are very common foods found at street stalls. They are very cheap and taste excellent. The rotisserie chicken tasted very similar to the chicken my father used to buy when I was young. When ordering shawarma, they ask if you want smetana on top, and just saying <strong>‘No’</strong> is already a success. With no suspicious ingredients, they are rolled up with plenty of vegetables and meat in a thin tortilla, so they rarely fail. </p> <p class="leading-relaxed mb-6 text-slate-700"> While studying at the preparatory program, my Russian teacher told us not to buy anything to eat carelessly on the street. Why would such delicious food be so cheap? There were even rumors that it was pigeon, not chicken. 🐦 Still, for a poor, cold, and hungry international student, it was hard to find a cheaper and more satisfying meal than this. </p> <hr class="border-slate-200 my-8 w-1/3 mx-auto" /> <p class="leading-relaxed mb-6 text-slate-700"> My superficial feeling after living in Russia was that Russians generally don't attach much importance to taste. Perhaps it's because of the cold weather, or because life is still tough, like in Korea in the old days. They probably wouldn't understand Koreans who eagerly search for good restaurants. </p> <p class="leading-relaxed mb-6 text-slate-700"> And most Russians say that <strong>home-cooked food</strong> is the most delicious, and they only eat out when they have no other choice. Looking back, Korea was a little different. We usually eat out when we want to eat delicious food that is difficult to make at home. My perception was also the same. The thought, <em>'Why do they eat out when the food isn't even that good?'</em> always lingered in my mind. </p> <p class="leading-relaxed text-xl font-bold text-slate-800 text-center mt-8"> Although the food is different, the attitude towards food, and the perception of eating out<br/>I still felt that there are many differences. 🥢 </p>`}},{id:"post-105",title:{ko:"모스크바에서 한국 찾기",en:"Finding Korea in Moscow"},subtitle:{ko:"그리움, 대사관, 그리고 북한 식당",en:"Longing, the Embassy, and a North Korean Restaurant"},imageUrl:"https://images.unsplash.com/photo-1580651315530-69c8e0026377?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`<p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3"> 그리운 고국 땅과는 직선거리로 약 <strong>6,600 km</strong>, 비행기로도 장장 14시간을 날아야 닿을 수 있는 모스크바에서, 문득문득 한국이 그리워지는 것은 어쩔 수 없다. 🇰🇷 하지만 대부분의 날이 흐리고 춥고, 사람들마저 쌀쌀맞은 이 낯선 도시 곳곳에서도 경험할 수 있는 한국의 조각들이 있다. </p>
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ 모스크바의 작은 한국, 대사관</h3>
          <p class="leading-relaxed mb-6 text-slate-700"> 먼저 이야기 해 볼 것은 실제 법적으로는 한국 영토인 <strong>주러 한국대사관</strong>이다. 사실 유학생이 특별히 대사관을 방문할 일은 없지만 나는 몇 번 가볼 기회가 있었다. 모스크바에 도착한 그 해 12월 나는 대위로 진급이 예정되어 있었다. 진급하기 전 회식 자리에서 무관보좌관님은 진급식을 챙겨주신다며 아내 한복까지 준비 놓으라고 하셨다. 그 때까지 군기가 아직 덜 빠졌던 나는 그 말을 철썩같이 믿고 아내의 한복도 한국에서 보내서 준비를 마쳤다. </p>
          <p class="leading-relaxed mb-6 text-slate-700"> 내가 아내의 한복을 준비했다고 말씀드리니 반은 농담이었다고 하셨지만 그래도 무관님께 말씀드려서 대위 진급식을 대사관에서 할 수 있었다. 보통은 소령 진급식 정도는 되어야 가족도 초청해서 어깨에 새로운 견장도 달아주고 하는데 운이 좋게도 아주 먼 낯선 땅에서 영광스러운 진급식을 가질 수 있었다. ✨ </p>
          <div class="bg-slate-50 border-l-4 border-russia-blue p-6 rounded-r-lg my-6">
          <p class="leading-relaxed mb-6 text-slate-700"> "대사관 건물은 직사각형으로 생겼는데 가운데는 작은 직사각형의 빈 공간이 있었다. 거기에는 한국식으로 꾸며놓은 <strong>정자와 작은 연못</strong>이 있어 매우 인상적이었다. 대사관에서 근무하면 한국의 휴일과 현지 나라의 휴일을 모두 쉴 수 있다고 들었다는 말을 듣고 다음 생에는 꼭 대사관 직원이 되어야 겠다는 유쾌한 상상도 해보았다." </p>
          </div>
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥘 그리운 맛, 한국 식당</h3>
          <p class="leading-relaxed mb-6 text-slate-700"> 한국이 그리운 이유에는 음식을 빼놓을 수 없다. 모스크바에는 한국 식당이 여러 곳 있었다. 하지만 한국 식당이라고 해서 모두 우리가 아는 대한민국의 식당은 아니니 조심할 필요가 있다. 일례로 북한 사람이 운영하는 식당이 있고, 또 러시아에 몇 세대 전에 넘어온 고려인이 운영하는 식당도 있다. </p>
          <p class="leading-relaxed mb-6 text-slate-700"> 보통 한국 음식이 그리울 때면 <strong>인공위성</strong>이라는 이름의 호텔 내에 위치한 한국 식당을 찾았다. 이 호텔 내에는 여러 한국 식당이 있어서 선택지도 다양했고, 작은 한국식품점이 있어서 식사를 하고 한국 식재료를 사오기도 좋았다. </p>
          <p class="leading-relaxed mb-6 text-slate-700"> 그 외에도 다른 한국 식당들도 있었는데 그 중에 ‘자스민’이라는 이름의 식당에서는 메뉴에도 없는 보신탕을 알음알음 알고 찾아온 손님한테 팔기도 했다. 다른 식당에서는 토요일 점심에 600루블, 당시 한화로는 약 12,000원 정도에 한식 뷔페를 먹을 수 있었다. 김밥, 떡볶이와 같은 분식부터 불고기, 잡채 등 집에서 다 만들어 먹기는 번거로운 많은 음식이 있어서 자주 다녔다. 😋 </p>
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍜 고려인 식당과 북한 식당</h3>
          <p class="leading-relaxed mb-6 text-slate-700"> 그리고 한 번은 러시아 친구들과 <strong>고려인 식당</strong>에 가본 적도 있다. 대한민국의 음식과는 차이가 많이 났다. 메뉴판에는 조금 익숙한 발음의 음식이 있기도 했고 전혀 무슨 음식인지 유추할 수 조차 없는 음식도 많았다. 또한 한국 음식보다 식초를 많이 쓰는지 시큼한 맛이 나는 음식이 꽤나 있었다. 그래도 <strong>‘쿡시’</strong>라고 불리는 국수는 맛이 괜찮았다. 같이 갔던 러시아 친구들에게 이런 음식은 한국에서 결코 볼 수 없을 거라고 이야기했다. </p>
          <div class="bg-red-50 p-6 rounded-lg border border-red-200 my-6">
          <h4 class="font-bold text-red-900 mb-2">🚫 평양스키 고려 (북한 식당)</h4>
          <p class="leading-relaxed mb-6 text-slate-700"> 우리가 자주 가던 ‘아샨’이라는 대형 마트에 가는 길에는 <strong>평양스키 고려</strong>라는 음식점이 있었다. 직역하자면 ‘평양의 고려’인데 이 곳은 북한 사람이 운영하는 진짜 북한 식당이었다. 감히 들어갈 볼 엄두는 못 내고 정문을 통해 지하로 내려가는 복도만 볼 수 있었는데 요정들과 신선들이 산과 호수를 배경으로 한 아주 특이한 그림들이 걸려 있었다. 현역 군인 신분이었던 나는 괜히 꺼려지는 마음에 러시아에 있는 동안 북한 식당을 가본 적이 없지만 지금 돌이켜보면 한 번쯤은 괜찮지 않았을까 하는 생각이 든다. </p>
          </div>
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎤 학생 생활과 조언</h3>
          <p class="leading-relaxed mb-6 text-slate-700"> 모스크바에 공부하러 온 학생들도 꽤나 많은데 한국식 노래방이 있어서 스트레스를 해소하러 간다고 했다. 모스크바 국립대 한인학생회는 여러 행사를 계획하는데 몇몇 행사에 참가해서 여러 학생들 각자가 느끼고 경험하는 모스크바에 대해서도 들을 수 있었다. </p>
          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />
          <p class="leading-relaxed mb-6 text-slate-700"> 해외에 살면 현지 적응과 향수 사이에서 적절한 밸런스를 잡아야 하지만 내 짧은 경험에서 비추어 보았을 때, 오히려 <strong>밸런스보다는 저공비행</strong>을 해야 한다고 말하고 싶다. ✈️ 한국이 그립다고 해서 한인 사회나 커뮤니티에만 매몰되는 것은 그리 바람직하지 않다. </p>
          <p class="leading-relaxed mb-6 text-slate-700"> 만약 정해진 기간을 두고 떠나온 유학길이라면, 한국은 딱 필요한 만큼만 찾고 최대한 낯선 곳에 익숙해지고 낯선 이들의 삶 속으로 깊숙이 파고드는 노력이 필요하다. 내가 만났던 한국 학생 일부는 학생회 활동에 지나치게 몰두한 나머지 학업을 뒷전으로 한 이들도 있었다. 믿고 외국에 보내준 부모님의 간섭이 없는 타국에서 밤 늦게까지 흥청망청 다니는 모습은 안타까울 따름이었다. </p>`,en:`<p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3"> In Moscow, approximately <strong>6,600 km</strong> in a straight line from my beloved homeland, a 14-hour flight away, it's inevitable to occasionally miss Korea. 🇰🇷 However, even in this unfamiliar city, where most days are cloudy and cold, and the people are even colder, there are fragments of Korea that can be experienced everywhere. </p>
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ A Small Korea in Moscow, the Embassy</h3>
          <p class="leading-relaxed mb-6 text-slate-700"> First, let's talk about the <strong>Korean Embassy in Russia</strong>, which is legally Korean territory. In fact, international students don't usually have much reason to visit the embassy, but I had a few opportunities. In December of the year I arrived in Moscow, I was scheduled to be promoted to captain. At a dinner before the promotion, the Military Attaché's assistant told me to prepare my wife's hanbok for the promotion ceremony. At that time, I was still so ingrained in military discipline that I believed him implicitly and had my wife's hanbok sent from Korea and prepared. </p>
          <p class="leading-relaxed mb-6 text-slate-700"> When I told him I had prepared my wife's hanbok, he said it was half a joke, but he still spoke to the Military Attaché so that I could have my captain promotion ceremony at the embassy. Usually, you only invite family and get new shoulder epaulets for a major's promotion ceremony, but I was lucky enough to have a glorious promotion ceremony in a distant, unfamiliar land. ✨ </p>
          <div class="bg-slate-50 border-l-4 border-russia-blue p-6 rounded-r-lg my-6">
          <p class="leading-relaxed mb-6 text-slate-700"> "The embassy building was rectangular, and in the middle, there was a small, empty rectangular space. There was a <strong>pavilion and a small pond</strong> decorated in Korean style, which was very impressive. I heard that working at the embassy allows you to rest on both Korean holidays and local holidays, so I playfully imagined becoming an embassy staff member in my next life." </p>
          </div>
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥘 The Taste of Longing, Korean Restaurants</h3>
          <p class="leading-relaxed mb-6 text-slate-700"> Food is indispensable when talking about why I miss Korea. There were several Korean restaurants in Moscow. However, it's important to be careful, as not all Korean restaurants are the Korean restaurants we know from South Korea. For example, there are restaurants run by North Koreans, and also restaurants run by Koryo-saram (ethnic Koreans in the former Soviet Union) who moved to Russia several generations ago. </p>
          <p class="leading-relaxed mb-6 text-slate-700"> When I missed Korean food, I usually went to a Korean restaurant inside a hotel called <strong>'Sputnik' (Satellite)</strong>. This hotel had several Korean restaurants, offering a variety of choices, and there was also a small Korean grocery store, making it convenient to eat and buy Korean ingredients. </p>
          <p class="leading-relaxed mb-6 text-slate-700"> There were also other Korean restaurants, and among them, a restaurant named 'Jasmine' would secretly sell Boshintang (dog meat stew), which wasn't even on the menu, to customers who knew about it and came looking for it. At another restaurant, you could eat a Korean buffet for 600 rubles, about 12 dollars at the time, on Saturday lunch. It had many dishes, from snack foods like gimbap and tteokbokki to bulgogi and japchae, which were cumbersome to make at home, so I went there often. 😋 </p>
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍜 Koryo-saram Restaurants and North Korean Restaurants</h3>
          <p class="leading-relaxed mb-6 text-slate-700"> And once, I also went to a <strong>Koryo-saram restaurant</strong> with my Russian friends. The food was very different from Korean food. Some dishes on the menu had slightly familiar pronunciations, while others were completely unidentifiable. Also, it seemed that they used more vinegar than in Korean food, so there were quite a few sour dishes. Still, the noodles called <strong>'Kuksi'</strong> tasted good. I told my Russian friends that such food could never be seen in Korea. </p>
          <div class="bg-red-50 p-6 rounded-lg border border-red-200 my-6">
          <h4 class="font-bold text-red-900 mb-2">🚫 Pyongyangski Koryo (North Korean Restaurant)</h4>
          <p class="leading-relaxed mb-6 text-slate-700"> On the way to 'Ashan', a large supermarket we often visited, there was a restaurant called <strong>Pyongyangski Koryo</strong>. Literally translated as 'Goryeo of Pyongyang', this was a real North Korean restaurant run by North Koreans. I didn't dare to go inside, but I could only see the corridor leading down to the basement through the main entrance. There were very unique paintings of fairies and immortals with mountains and lakes in the background. As an active military officer, I never went to a North Korean restaurant during my stay in Russia because I was worried about potential trouble, but looking back now, I wonder if it would have been okay to go just once. </p>
          </div>
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎤 Student Life and Advice</h3>
          <p class="leading-relaxed mb-6 text-slate-700"> Many students who came to Moscow to study said they went to Korean-style karaoke to relieve stress. The Korean student association of Moscow State University planned various events, and I participated in some of them and heard about Moscow from the perspective of various students. </p>
          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />
          <p class="leading-relaxed mb-6 text-slate-700"> Living abroad requires striking a balance between adapting to the local environment and homesickness, but based on my short experience, I want to say that it is better to <strong>fly low rather than balance</strong>. ✈️ It is not desirable to be buried only in the Korean community or society just because you miss Korea. </p>
          <p class="leading-relaxed mb-6 text-slate-700"> If you are studying abroad for a fixed period, you need to find Korea just enough, get used to the unfamiliar place as much as possible, and make an effort to delve deep into the lives of unfamiliar people. Some Korean students I met were so engrossed in student council activities that they neglected their studies. It was regrettable to see them out late at night, having fun, in a foreign country without the interference of their parents who believed in them and sent them abroad. </p>`}},{id:"post-106",title:{ko:"모스크바의 봄여름가을겨울",en:"Spring, Summer, Autumn, and Winter in Moscow"},subtitle:{ko:"회색빛 우울감과 민들레 홀씨 사이",en:"Between Gray Melancholy and Dandelion Seeds"},isActive:!0,imageUrl:"https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?q=80&w=1200&auto=format&fit=crop",comments:[],content:{ko:`
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
             8월에 도착한 모스크바의 날씨는 매우 좋았다. ☀️ 한국이었다면 엄청 습하고 더웠을 테지만, 모스크바는 덥지도 않았고 습하지도 않았다. 정말로 많은 사람들이 다시 오지 않을 좋은 날씨를 즐기려는 듯, 모스크바 도심 공원마다 산책 나온 사람들로 가득 차 있었다. 첫 학기는 아무래도 새로운 세상에 적응하느라 정신이 없었고 주말이라 할지라도 생각보다 해야 할 숙제들이 많아서 바빴지만 틈나는 대로 밖에 나가서 시간을 보내려고 노력했다.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             그땐 몰랐다. 모스크바의 찬란한 시절이 얼마 남지 않았음을. ⏳
          </p>
          
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">☁️ 회색빛 하늘과 모스크바 블루스</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             얼마 지나지 않아 모스크바는 우리가 듣던 ☁️ <strong>회색빛 하늘</strong>을 드러내기 시작했다. 통계적으로도 모스크바는 일조량이 매우 적은 도시 중에 하나인데, 특히 겨울철에는 거의 한 달 내내 해를 구경하지 못할 수 있다. 만약 유럽이 친숙한 사람들에게는 런던의 날씨와 비슷하다고 하면 조금 더 이해가 쉬울 듯하다. 해가 떠있는 듯 아닌 듯하고 아주 소량의 비가 간간이 왔다가 갔다가 하기에 우산을 쓰기도 안 쓰기도 애매한 날씨가 일상이었다.
            </p>
            <p class="leading-relaxed text-slate-700">
               러시아인들은 웬만한 이슬비에는 우산을 펼치지 않고 묵묵히 걷는데, 그 무심한 뒷모습을 보고 있노라면 이 우중충한 하늘이 그들에겐 얼마나 익숙한 배경인지 새삼 느끼게 된다. 모스크바의 하늘이 유독 낮고 흐린 이유는 지형적인 영향이 크다. 대서양에서 불어오는 습한 공기가 거대한 러시아 평원을 가로질러 오다 보면 지형에 막히지 않고 그대로 모스크바 머리 위에 머물며 두터운 구름층을 형성하기 때문이다. 나 역시 처음에는 이 우중충한 날씨가 적응이 되지 않아 <span class="text-russia-blue font-bold">‘모스크바 블루스’</span>라 불리는 우울감에 빠지기도 했다. 하지만 시간이 가며, 이러한 모스크바 특유의 분위기를 받아들이게 되었다.
            </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">❄️ 겨울 생존 전략, 샤프카</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             하늘이 점점 흐려지는 걸 깨달을 때면 러시아의 추위가 찾아온다. 약 11월부터 영하로 내려가고 눈이 오며 약 6개월가량이 겨울이다. 그 길고 긴 겨울을 버티기 위한 방한용품은 단순히 추위를 막는 도구를 넘어 생존 전략이다. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             <strong>‘샤프카’</strong>는 러시아 하면 가장 먼저 떠오르는 털모자다. 러시아 군인 모자라고 검색하면 쉽게 찾아볼 수 있고 한국에서는 군밤 장수 모자라고 떠올리면 쉽다. 나는 겨울이 본격적으로 찾아오기 전에 <strong>이즈마일롭스키</strong>라는 시장에 가서 구매를 하여 쓰고 다녔다. 하나하나 러시아 패치를 해나가고 있었다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔥 밖은 춥지만 안은 따뜻해</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             그렇다고 모스크바의 추위가 아주 못견딜 만한 것은 아니었다. 역설적이게도 밖은 매우 춥지만 실내만큼은 세상 어디보다 따뜻하기 때문이다. 내가 아는 한 모스크바의 거의 모든 건물에는 <strong>중앙식 난방 시스템</strong>이 갖춰져 있다. 국가 차원에서 관리하기에 개별 건물의 난방비가 무료이다. 그렇기에 밖에 나가면 꽁꽁 싸매고 다니는 사람들도 건물에 들어가면 훌러덩 벗고 반팔 차림으로 다니는 모습도 자주 볼 수 있다. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             그리고 한국에서는 옷을 항상 가지고 다녀야 해서 불편했지만, 모스크바에서는 조금 큰 건물마다 겉옷을 보관하는 곳(가르데롭)이 있기에 건물 내에서 다닐 때는 아주 편하게 다닐 수 있다. 🧥
          </p>

          <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-200 my-8">
             <h4 class="font-bold text-orange-900 mb-2">🤝 거지와 선행</h4>
             <p class="leading-relaxed text-orange-800 text-sm">
                참고로 모스크바에는 거지가 꽤 많은 편인데, 이렇게 실내 난방이 잘 갖추어져 있기에 아이러니하게도 모스크바에 얼어 죽는 거지는 거의 없다. 여담으로 러시아 사람들은 선행을 많이 베풀면 천국에 간다고 믿는다. 정교회의 문화 영향인지, 남을 돕는 행위가 자신의 영혼을 구하는 길이라 믿는 듯하다. 그렇기에 러시아 사람들은 거지를 마주칠 때 그냥 지나치지 않고 주머니의 잔돈을 선뜻 건네는 모습을 자주 보았다. 해외에 있는 거지들도 러시아 사람을 제일 좋아한다는 이야기를 들은 적이 있는데 차가워 보이는 겉모습과 달리 따뜻한 그들의 모습도 엿볼 수 있다.
             </p>
          </div>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚜 눈과의 전쟁, 그리고 진흙탕</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             모스크바에는 제설 시스템이 잘 갖추어져 있다. 밤새 눈이 내려도 다음 날이면 언제 그랬냐는 듯 도로를 깨끗이 치워놓는다. 운이 좋다면 거대한 제설차 군단이 눈을 치우는 모습도 볼 수 있다. 하지만 진짜 문제는 그다음이다. 제설차에 의해 도로변으로 밀려난 눈더미와 차들이 밟고 지나간 눈은 순식간에 질척이는 진흙탕 더미 혹은 진흙탕으로 변한다. 💩
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             외출을 하고 오면 더러워진 신발은 어쩔 수가 없고 바지까지도 지저분해진다. 그리고 이미 치울 수 없이 얼어버린 인도는 정말로 위험하다. ⚠️ 겨울에 외출하면 여기저기 넘어지는 사람들을 볼 수 있는데 추위로 경직된 몸이 딱딱한 바닥에 부딪히는 건 누구도 원치 않는 상황일 것이다. 게다가 넘어져서 진흙탕에 옷까지 더러워진다면 생각만 해도 끔찍하다.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌼 민들레 홀씨 흩날리는 봄</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             모스크바에는 4월까지 눈이 온다. 더러 5월까지 오는 경우도 있지만 흔치는 않다. 봄이 오고 눈과 얼음이 녹으면 마냥 반가울 것 같지만 실상은 그리 낭만적이지 않다. 하얀 눈과 얼음에 덮여있던 도시의 지저분한 민낯이 서서히 드러나기 시작하기 때문이다. 러시아인들은 애완동물을 많이 기르고 길거리 담배에도 관대한 편인데, 겨울 내내 눈 속에 파묻혀 보이지 않던 수많은 담배꽁초와 배설물들이 녹은 눈 사이로 일제히 고개를 내민다. 🚬🐕
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             그래도 5월이 되면 모스크바는 언제 그랬냐는 듯 푸른 빛으로 옷을 갈아입는다. 도시 곳곳에서 새싹과 꽃들이 피는데, 그중에서도 특히 <span class="text-yellow-600 font-bold">노란 민들레</span>가 정말 많았던 기억이 난다. 길가나 아파트 단지 사이사이, 심지어 보도블록 틈새까지 피어난 민들레는 모스크바의 봄을 상징한다. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             5월 말이 되면 이 민들레 꽃은 하얀 홀씨로 변해 온 도시를 떠다니는데 과장을 조금 보태면 <strong>봄에 내리는 눈</strong> 같기도 했다. 꽃가루 알레르기가 있던 나는 이 기간 내내 재채기와 콧물을 달고 살았지만 그래도 이들의 생명의 기운에 기분만큼은 좋았다. 또한 도심 공원에는 형형색색의 꽃들이 만개하여 겨우내 회색빛이었던 도시를 화려하게 바꿔준다. 모스크바는 긴 겨울이 있었기에 더욱 따뜻한 봄을 맞이하는 듯했다. 🌸
          </p>

          <blockquote class="text-center font-serif text-xl text-russia-blue my-10 border-y-2 border-slate-100 py-8 leading-relaxed">
            "모스크바에서 지낸지도 어느덧 1년이 되었다.<br/>
            처음에는 차갑고 무뚝뚝하게만 느껴졌던 모스크바와 그 안의 사람들도,<br/>
            이제 겉으로 보이는 모습뿐만이 아니라 그 이면의 온기까지<br/>
            있는 그대로 받아들이기 시작했다. "
          </blockquote>
        `,en:`
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
             The weather in Moscow was very good when I arrived in August. ☀️ If it had been Korea, it would have been incredibly humid and hot, but Moscow was neither hot nor humid. It seemed as if many people were enjoying the good weather that would not come again, and every park in downtown Moscow was filled with people out for a walk. The first semester was undoubtedly chaotic as I adjusted to a new world, and even on weekends, there was more homework than I expected, so I was busy. Still, I tried to go out and spend time whenever I had a chance.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             I didn't know then that Moscow's brilliant days were numbered. ⏳
          </p>
          
          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">☁️ Gray Skies and the Moscow Blues</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             Before long, Moscow began to reveal the ☁️ <strong>gray skies</strong> we had heard about. Statistically, Moscow is one of the cities with very little sunshine, especially in winter, where you might not see the sun for almost a month. If you are familiar with Europe, it might be easier to understand if I say it's similar to London's weather. It was common to have ambiguous weather where the sun was half-present, half-not, and a very small amount of rain would come and go intermittently, making it hard to decide whether to use an umbrella or not.
            </p>
            <p class="leading-relaxed text-slate-700">
               Russians walk silently without opening their umbrellas for a light drizzle, and looking at their indifferent backs, you realize how familiar these gloomy skies are to them. The reason why Moscow's sky is particularly low and cloudy is largely due to geographical influences. Humid air blowing from the Atlantic crosses the vast Russian plain and settles directly over Moscow without being blocked by terrain, forming a thick layer of clouds. I, too, initially found it difficult to adjust to this gloomy weather and fell into a depression called the <span class="text-russia-blue font-bold">'Moscow Blues'</span>. But over time, I came to accept this unique atmosphere of Moscow.
            </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">❄️ Winter Survival Strategy, Shapka</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             When the sky gradually gets cloudy, the cold of Russia arrives. From about November, temperatures drop below freezing, and snow falls, making winter last for about six months. Winter clothing for enduring this long winter is not just a tool to keep warm but a survival strategy.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             <strong>'Shapka'</strong> is the fur hat that first comes to mind when you think of Russia. You can easily find it by searching for 'Russian military hat', and in Korea, it's easy to think of it as a 'roasted chestnut seller's hat'. I bought one at a market called <strong>Izmailovsky</strong> before winter officially arrived and wore it around. I was gradually patching myself into Russian life.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔥 Cold Outside, Warm Inside</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             However, Moscow's cold was not entirely unbearable. Paradoxically, although it's very cold outside, the indoors are warmer than anywhere else in the world. As far as I know, almost all buildings in Moscow are equipped with a <strong>central heating system</strong>. Because it is managed at the national level, heating costs for individual buildings are free. So, you often see people who are bundled up outside take off their outer clothes and walk around in short sleeves indoors.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             And in Korea, it was inconvenient because I always had to carry my clothes, but in Moscow, every slightly large building has a place to store outer clothes (garderob), so I could move around very comfortably inside buildings. 🧥
          </p>

          <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-200 my-8">
             <h4 class="font-bold text-orange-900 mb-2">🤝 Beggars and Good Deeds</h4>
             <p class="leading-relaxed text-orange-800 text-sm">
                For reference, there are quite a few beggars in Moscow, but ironically, almost no beggars freeze to death in Moscow because the indoor heating is so good. As an anecdote, Russians believe that if they do many good deeds, they will go to heaven. Perhaps due to the influence of Orthodox culture, they seem to believe that helping others is a way to save their own souls. Therefore, I often saw Russians readily give loose change from their pockets to beggars they encountered, instead of just passing by. I once heard that beggars abroad also like Russians the most, and you can see their warm side despite their seemingly cold exterior.
             </p>
          </div>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚜 War with Snow, and Mud</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             Moscow has a well-equipped snow removal system. Even if it snows all night, the roads are cleaned as if nothing happened the next day. If you are lucky, you can even see a giant fleet of snowplows clearing the snow. But the real problem comes after that. The snowdrifts pushed to the roadside by the snowplows and the snow trampled by cars quickly turn into slushy mud piles or mud. 💩
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             When you go out, your shoes inevitably get dirty, and even your pants get messy. And the sidewalks that have already frozen beyond clearing are really dangerous. ⚠️ In winter, you can see people falling here and there, and no one wants to hit their stiff body on the hard ground due to the cold. Moreover, if you fall and get your clothes dirty in the mud, it's just horrible to think about.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌼 Spring with Dandelion Seeds Scattering</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
             It snows in Moscow until April. Sometimes it snows until May, but it's rare. When spring comes and the snow and ice melt, you might think it would be entirely welcome, but the reality is not so romantic. This is because the dirty true face of the city, which was covered in white snow and ice, gradually begins to reveal itself. Russians keep many pets and are tolerant of street smoking, and countless cigarette butts and excrement that were buried in the snow all winter long collectively emerge from the melting snow. 🚬🐕
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             Nevertheless, in May, Moscow transforms into a blue landscape as if nothing happened. Sprouts and flowers bloom all over the city, and among them, I especially remember seeing many <span class="text-yellow-600 font-bold">yellow dandelions</span>. Dandelions blooming on the roadside, between apartment complexes, and even in the cracks of sidewalks symbolize Moscow's spring.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             By the end of May, these dandelion flowers turn into white fluff and float all over the city, and to exaggerate a bit, it was like <strong>snow falling in spring</strong>. I, who had pollen allergies, suffered from sneezing and runny nose throughout this period, but still, the vitality of these plants made me feel good. Also, colorful flowers bloom in urban parks, transforming the city, which was gray all winter, into a vibrant one. It seemed that Moscow welcomed a warmer spring because of its long winter. 🌸
          </p>

          <blockquote class="text-center font-serif text-xl text-russia-blue my-10 border-y-2 border-slate-100 py-8 leading-relaxed">
            "It had already been a year since I started living in Moscow.<br/>
            Moscow and its people, who initially felt cold and blunt,<br/>
            Now, I began to accept not only their outward appearance but also the warmth beneath,<br/>
            Just as they are."
          </blockquote>
        `}},{id:"post-107",title:{ko:"예비학부 마무리, 그리고",en:"Finishing the Preparatory Program, and..."},subtitle:{ko:"맥주 한 캔의 용기와 빌렛(Ticket)의 운명",en:"The Courage of a Can of Beer and the Fate of a Bilet (Ticket)"},imageUrl:"https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            전체적인 교육과정으로 보았을 때, 모스크바 국립대의 예비학부는 노력은 조금 필요하지만 통과하기 대단히 힘든 과정은 아니었다. 물론 난이도는 주관적일 수 있지만 주변을 둘러보면 대략적인 수준을 가늠할 수 있다. 일례를 들자면, 수업을 절반 정도 빼먹거나 스스로 포기하지 않는 한 대부분 무사히 졸업할 수 있다. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            예비학부의 커리큘럼 자체가 많은 수업과 상당한 양의 숙제를 포함하고 있어, <span class="bg-yellow-100 px-1">학생들의 멱살을 잡고서라도 끌고 간다</span>라는 느낌이 강하다. 그도 그럴 것이 예비학부는 외국인 학생들의 학비로 운영되는 기관이기에, 과정이 너무 어려워 낙오자가 발생하면 입학생 감소로 이어져 재정에 직접적인 타격이 오기 때문일 것이라 짐작한다. 매 학기마다 중간고사는 없이 기말고사만 있고 70점만 넘으면 합격이었다. 💯
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍻 맥주 한 캔의 용기</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            나는 러시아어, 수학, 물리 이렇게 세 과목을 수강했다. 러시아어는 말하기와 쓰기를 비롯해, 러시아 어학능력 평가 시험인 <strong>토르플(TORFL)</strong> 형식의 사지선다의 문법 문제를 풀었다. 
          </p>
          
          <div class="bg-blue-50 border border-blue-100 p-6 rounded-lg my-6">
            <p class="leading-relaxed text-slate-700">
               러시아어 말하기 시험이 있던 날에는 같은 반이었던 지인과 긴장을 좀 풀자는 의미에서 시험을 보기 전에 학교 근처 마트에 가서 <strong>맥주 한 캔</strong>을 사서 나눠먹었다. 🍺 지금 생각하면 제정신이 아니었던 것 같지만, 당시에는 그 맥주 덕분에 말이 더 술술 나와서 시험을 더 잘 본 것 같다며 지인과 함께 이야기했던 기억이 난다. 현지 적응은 아주 잘 되어가고 있다는 생각과 함께, 이제는 시험조차도 <strong>불곰 스타일</strong>로 임하는 내 자신이 점점 자랑스러워졌다. 🐻
            </p>
          </div>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📐 수학과 물리, 그리고 디펜스</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            수학 시험에는 주관식 문제들이 나왔었고 풀이과정과 정답을 모두 맞춰야 했다. 답만 맞으면 풀이과정은 어떻든 상관이 없던 한국 대학수학능력 시험 평가에 길들여진 나에게는 시험조차 추가적인 정성을 요구하였다. 다행히 후반부에 배웠던 이중적분 같은 고급 과정은 출제되지 않아 나름 수월하게 풀 수 있었다. 나름 한국이 수학 강국이라고 생각하고 있었는데 러시아도 만만치 않음을 느낄 수 있었다. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            물리 시험은 두 종류가 있었는데 첫 번째는 수학시험과 비슷하게 문제를 풀고 풀이과정과 답을 적는 것이었고, 다른 하나는 일종의 <strong>‘구술시험(디펜스)’</strong>였다. 수준이 높지는 않았으나 다른 연구자들의 연구들을 읽고 짧은 리포트를 준비해 발표해야 했다. 그게 끝이 아니라 발표 중에 시험 감독의 질문에 잘 답변하여야 합격을 받을 수 있었다. 🗣️
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            대학 시절 화학을 전공했고 핵물리학이라는 전혀 생소한 분야에 대해 아직 대학원도 진학하지 않은 나에게 작은 리뷰 리포트를 쓰는 것조차도 매우 버거웠다. 당연히도 여전히 익숙지 않은 러시아어도 큰 걸림돌이었다. 주제는 <strong>드브로이의 입자-파동 이중성</strong>으로 정했다. 그 당시 나에게 모든 물질은 입자도 파동도 될 수 있다는 아주 충격적인 내용이어서 이를 리뷰하는 리포트를 썼지만 지금에 와서 돌이켜 보면 고등학교 물리 후반부의 한 부분을 요약한 것에 지나지 않나 싶다. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             스스로도 부족한 리포트라고 생각했던 것인지 발표와 질의응답 과정에서 무척 긴장을 했다. <em>'러시아어 시험 볼 때처럼 맥주를 한 잔 마시고 왔어야 했다'</em>는 생각이 머리를 스쳐 지나갔다. 그래도 어찌저찌 시험은 잘 마칠 수 있었다. 
          </p>

          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

          <p class="leading-relaxed mb-6 text-slate-700">
            여튼 생각보다 점수는 고르게 잘 나와서 선생님들에게 칭찬도 받고 작은 성취감도 느낄 수 있었다. 지금 돌이켜보면 선생님들께도 더욱 진심으로 감사의 인사를 전했어야 했다고 생각한다. 
          </p>
          <blockquote class="border-l-4 border-russia-blue pl-4 py-2 italic text-slate-700 bg-slate-50 mb-8">
            "전 세계 각지에서 온 아주 다른 학생들을 끈기 있게 지도해 준 그들에게 이 글을 빌어서라도 잠시 감사하다는 말을 전하고 싶다. 🙏"
          </blockquote>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎓 본게임을 향하여</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            예비학부는 이 졸업시험으로 마무리되겠지만 예비학부 일뿐, <strong>‘본게임’</strong>이 아직 시작도 되지 않았다는 것을 잘 알고 있었다. 이 다음은 대학교 진학할 학과 사무실에 연락을 하여 입학시험에 대한 안내를 받고 시험을 준비하는 것이었다. 내 경우, 예비학부의 졸업시험은 5월 중순에 있었고 그 후 7월 즈음에 본학부의 입학시험이 예정되어 있었기에 약 두 달간의 시험을 준비할 시간이 있었다. 
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            약 두 달이라는 시간이 있었기에 차분히 준비하면 되었지만 인터넷으로 다운로드 받은 기출문제는 영 사람이 풀 수 있는 것처럼 생기지 않았다. 😵 당시 내 실력으로는 문제를 읽고 이해하는 것조차 힘들었다. 다행히 모터쇼 티켓을 주었던 지인분께서 그 학과 박사과정으로 먼저 다니고 계셨기에 고맙게도 과외 형식으로 이것저것 알려주셨다. 
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            무언가 어려운 것을 설명할 때 그분의 <strong>반짝반짝 빛나던 눈</strong>과 <em>“아직 우리는 많은 걸 알지 못한다”</em>는 그분의 말이 아직도 선명하게 기억에 난다. 진정한 학자란 이런 걸까 나도 언젠간 학자다움을 조금이나마 갖출 수 있을까 하는 생각을 했지만 당장은 시험에 집중해야 했다. 
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🇷🇺 러시아의 독특한 시험 방식: 빌렛 (Билет)</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            입학시험은 예비학부에서 치렀던 시험과는 다르게 실제 러시아인들이 시험을 보는 방식으로 진행이 되었다. 러시아의 시험은 <strong>“빌렛(영어로는 Ticket)”</strong>이라는 독특한 시스템을 가지고 있다. 🎫
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            입학시험은 예비학부에서 치렀던 시험과는 다르게 실제 러시아인들이 시험을 보는 방식으로 진행이 되었다. 러시아의 시험은 <strong>“빌렛(영어로는 Ticket)”</strong>이라는 독특한 시스템을 가지고 있다. 🎫
          </p>
          <ol class="list-decimal list-inside space-y-3 text-slate-700">
              <li>교수님이 시험 전에 예상 문제 리스트를 학생 수의 3-4배, 많게는 10배 넘게 미리 나눠준다. (30~100문제)</li>
              <li>시험 당일 학생은 교수가 보는 앞에서 임의로 문제지를 한 장 선택한다. (뽑기 🎲)</li>
              <li>이 과정에서 학생은 어떤 문제를 고르게 될지 알 수가 없다. </li>
          </ol>
          
          <br>
          <p class="leading-relaxed mb-6 text-slate-700">
               다행히 모든 문제에 대해서 공부를 했다면 상관없지만, 그렇지 않고 일부만 공부했다면 운 좋게 아는 문제를 뽑으냐 아니냐에 따라 희비가 엇갈리는 구조다. 러시아인들 사이에서는 100문제 중 99문제를 공부하면 꼭 나머지 한 문제를 뽑게 된다고 하여 공부를 안 하는 학생들도 있다는 우스갯소리가 있다. 😂
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            그렇게 문제를 뽑고 나면 학생들 스스로 준비할 시간이 주어진다. 이 시간에 학생들은 종이와 펜을 쓸 수 있고 종이에 자신이 발표할 내용은 정리하여 작성하고 호명이 되면 교수와 1대 1로 앉아서 발표를 하고 교수가 관련 질문을 하고 학생의 발표와 답변을 종합하여 점수를 결정한다. 
          </p>

          <div class="mb-8">
            <h4 class="font-bold text-slate-800 mb-2">📊 러시아의 학점 스케일 (5점 만점)</h4>
            <ul class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
              <li class="bg-red-50 text-red-800 p-2 rounded border border-red-100">
                <strong>2점</strong><br/>미흡 (Fail)
              </li>
              <li class="bg-yellow-50 text-yellow-800 p-2 rounded border border-yellow-100">
                <strong>3점</strong><br/>양호 (Pass)
              </li>
              <li class="bg-blue-50 text-blue-800 p-2 rounded border border-blue-100">
                <strong>4점</strong><br/>우수 (Good)
              </li>
              <li class="bg-green-50 text-green-800 p-2 rounded border border-green-100">
                <strong>5점</strong><br/>탁월 (Excellent)
              </li>
            </ul>
            <p class="mt-2 text-xs text-slate-400 text-center">
              * 1점은 '몽둥이'나 '말뚝'을 연상시킨다 하여 실제로는 주지 않습니다.
            </p>
            <br>
            <p class="leading-relaxed mb-6 text-slate-700">
             점수는 5단계 스케일을 적용하고 있는데 실제로는 1점은 주지 않고 2점부터 5점까지가 부여된다. 1점을 주지 않는 이유는 숫자 1이 몽둥이나 말뚝을 연상할 수 있다고는 해서 그렇다 한다. 2점은 미흡, 3점은 양호, 4점은 우수, 5점은 탁월이라고 러시아어로 불리지만 사실 2점은 낙제라 주는 경우가 거의 없고 3점만 맞아도 양호가 아닌 요구 수준에 못 미친다고 볼 수 있다. 
            </p>
          </div>

          <p class="leading-relaxed text-xl font-bold text-slate-800 text-center mt-12 mb-8">
            지인분의 노력 덕분일까 다행히 입학시험도 통과하였고,<br/> 
            이제 정말 ‘예비’게임이 아닌 <span class="text-russia-blue">‘본게임’</span>을 시작할 시간이 되었다. 🚀
          </p>
        `,en:`
          <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
            From the perspective of the overall curriculum, the preparatory program of Moscow State University was not an extremely difficult process to pass, although it required some effort. Of course, the difficulty level can be subjective, but you can gauge the approximate level by looking around. For example, most students can graduate safely as long as they don't skip half the classes or give up on their own.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            The curriculum of the preparatory program itself includes many classes and a considerable amount of homework, so it strongly feels like they <span class="bg-yellow-100 px-1">drag students along by the scruff of their necks</span>. This is probably because the preparatory program is an institution operated with tuition fees from foreign students, so if the process is too difficult and dropouts occur, it directly impacts their finances by reducing the number of new students. There were no midterms each semester, only a final exam, and 70 points were enough to pass. 💯
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍻 The Courage of a Can of Beer</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            I took three subjects: Russian, mathematics, and physics. For Russian, I solved multiple-choice grammar problems in the format of <strong>TORFL (Test of Russian as a Foreign Language)</strong>, including speaking and writing.
          </p>
          
          <div class="bg-blue-50 border border-blue-100 p-6 rounded-lg my-6">
            <p class="leading-relaxed text-slate-700">
               On the day of the Russian speaking exam, an acquaintance from the same class and I went to a supermarket near the school and bought a <strong>can of beer</strong> to share before the exam, to relax a bit. 🍺 Looking back now, it seems like we were out of our minds, but I remember telling my acquaintance that thanks to that beer, my words flowed more smoothly, and I felt like I did better on the exam. With the thought that I was adapting very well to the local culture, I became increasingly proud of myself for even approaching exams in a <strong>bear-like Russian style</strong>. 🐻
            </p>
          </div>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📐 Math, Physics, and Defense</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            The math exam had subjective questions, and I had to get both the solution process and the correct answer right. For me, who was accustomed to the Korean College Scholastic Ability Test where only the answer mattered regardless of the solution process, even the exam demanded additional effort. Fortunately, advanced topics like double integrals, which we learned in the latter half, were not included, so I was able to solve it relatively easily. I had thought Korea was a strong country in mathematics, but I realized that Russia was not to be underestimated.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            There were two types of physics exams: the first was similar to the math exam, where I had to solve problems and write down the solution process and answers, and the other was a kind of <strong>'oral exam (defense)'</strong>. The level was not high, but I had to read other researchers' studies and prepare a short report to present. That wasn't the end of it; I had to answer the examiner's questions well during the presentation to pass. 🗣️
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            As a chemistry major in college, and not yet having started graduate school in the completely unfamiliar field of nuclear physics, even writing a small review report was very challenging for me. Of course, the still unfamiliar Russian language was a big obstacle. I chose <strong>de Broglie's wave-particle duality</strong> as my topic. At the time, the idea that all matter could be both a particle and a wave was very shocking to me, so I wrote a report reviewing it. But looking back now, I think it was just a summary of a part of high school physics.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
             Perhaps because I felt my report was inadequate, I was very nervous during the presentation and Q&A session. The thought, <em>'I should have had a drink like when I took the Russian exam'</em>, crossed my mind. Still, somehow, I managed to finish the exam well.
          </p>

          <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

          <p class="leading-relaxed mb-6 text-slate-700">
            Anyway, my grades were surprisingly consistent and good, so I received praise from the teachers and felt a small sense of accomplishment. Looking back now, I think I should have expressed my gratitude to the teachers more sincerely.
          </p>
          <blockquote class="border-l-4 border-russia-blue pl-4 py-2 italic text-slate-700 bg-slate-50 mb-8">
            "I want to take this opportunity to briefly express my gratitude to those who patiently guided students from all over the world, who were all so different. 🙏"
          </blockquote>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎓 Towards the Main Game</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            The preparatory program would conclude with this graduation exam, but I knew very well that the <strong>'main game'</strong> hadn't even started yet. The next step was to contact the department office of the university I was going to enter, get information about the entrance exam, and prepare for it. In my case, the preparatory program's graduation exam was in mid-May, and the main department's entrance exam was scheduled for around July, so I had about two months to prepare for the exam.
          </p>

          <p class="leading-relaxed mb-6 text-slate-700">
            Since I had about two months, I could have prepared calmly, but the past exam questions I downloaded from the internet didn't look like something a person could solve. 😵 At that time, even reading and understanding the problems was difficult with my skills. Fortunately, an acquaintance who had given me motor show tickets was already studying for a doctorate in that department, and thankfully taught me various things in a tutoring format.
          </p>
          <p class="leading-relaxed mb-6 text-slate-700">
            When he explained something difficult, his <strong>sparkling eyes</strong> and his words, <em>"We still don't know much,"</em> are still vivid in my memory. I wondered if this was what a true scholar was like, and if I too could one day possess even a little bit of scholarship, but for now, I had to focus on the exam.
          </p>

          <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🇷🇺 Russia's Unique Exam System: Bilet (Билет)</h3>
          <p class="leading-relaxed mb-6 text-slate-700">
            The entrance exam was conducted differently from the exams taken at the preparatory program, in the way actual Russians take exams. The Russian exam has a unique system called <strong>"Bilet (Билет, English: Ticket)"</strong>. 🎫
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            The entrance exam was conducted differently from the exams taken at the preparatory program, in the way actual Russians take exams. The Russian exam has a unique system called <strong>"Bilet (Билет, English: Ticket)"</strong>. 🎫
          </p>
          <ol class="list-decimal list-inside space-y-3 text-slate-700">
              <li>The professor distributes a list of expected problems 3-4 times, sometimes even more than 10 times, the number of students, before the exam. (30-100 problems)</li>
              <li>On the day of the exam, the student arbitrarily selects one problem sheet in front of the professor. (Drawing lots 🎲)</li>
              <li>During this process, the student has no way of knowing which problem they will choose. </li>
          </ol>
          
          <br>
          <p class="leading-relaxed mb-6 text-slate-700">
               Fortunately, if you have studied all the problems, it doesn't matter, but if you have only studied some, the outcome depends on whether you are lucky enough to pick a problem you know. Among Russians, there is a joke that if you study 99 out of 100 problems, you will inevitably pick the remaining one problem you didn't study, so some students don't study. 😂
          </p>
          
          <p class="leading-relaxed mb-6 text-slate-700">
            After picking the problem, students are given time to prepare themselves. During this time, students can use paper and pens to organize and write down what they will present. When called, they sit one-on-one with the professor, make their presentation, and the professor asks related questions and determines the score based on the student's presentation and answers.
          </p>

          <div class="mb-8">
            <h4 class="font-bold text-slate-800 mb-2">📊 Russian Grading Scale (out of 5 points)</h4>
            <ul class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
              <li class="bg-red-50 text-red-800 p-2 rounded border border-red-100">
                <strong>2 points</strong><br/>Fail
              </li>
              <li class="bg-yellow-50 text-yellow-800 p-2 rounded border border-yellow-100">
                <strong>3 points</strong><br/>Pass
              </li>
              <li class="bg-blue-50 text-blue-800 p-2 rounded border border-blue-100">
                <strong>4 points</strong><br/>Good
              </li>
              <li class="bg-green-50 text-green-800 p-2 rounded border border-green-100">
                <strong>5 points</strong><br/>Excellent
              </li>
            </ul>
            <p class="mt-2 text-xs text-slate-400 text-center">
              * 1 point is not actually given, as it resembles a 'club' or 'stake'.
            </p>
            <br>
            <p class="leading-relaxed mb-6 text-slate-700">
             The grading is based on a 5-point scale, but in practice, 1 point is not given, and scores are from 2 to 5. The reason 1 point is not given is said to be because the number 1 resembles a club or stake. 2 points is Unsatisfactory, 3 points is Satisfactory, 4 points is Good, and 5 points is Excellent in Russian. However, 2 points is practically a failing grade and rarely given, and even 3 points can be considered not meeting the required level.
            </p>
          </div>

          <p class="leading-relaxed text-xl font-bold text-slate-800 text-center mt-12 mb-8">
            Perhaps thanks to the efforts of my acquaintance, I fortunately passed the entrance exam,<br/>
            And now it was time to start the <span class="text-russia-blue">'main game'</span>, not the 'preliminary' game. 🚀
          </p>
        `}},{id:"side-2",title:{ko:"✨ 외전 (2) - 러시아의 뇌물",en:"✨ Side Story (2) - Bribery in Russia"},subtitle:{ko:"공기처럼 자연스러운 유혹, 그리고 생존을 위한 선택",en:"A Temptation as Natural as Air, and a Choice for Survival"},imageUrl:"https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          ‘뇌물’ 하면 한국에서는 정치인들이나 고위 공무원들이 은밀하게 주고받는 검은돈이나 사과 상자(?)가 먼저 생각날 것이다. 📦 물론 한국도 예전에는 공공연히 뇌물이 있었지만 김영란법이 시행되고 사회가 투명해진 지금에 이르러서는, 공직자들의 노골적인 뇌물 수수가 그리 흔한 일은 아니다(적어도 나는 그렇게 믿고 싶다). 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💨 공기처럼 자연스러운 ‘뇌물’</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 러시아는 달랐다. 이 거대한 대륙에서는 공직 사회는 물론 서민들의 소박한 일상생활 속에서도 뇌물이 마치 공기처럼 자연스럽고 공공연하게 요구된다. 🇷🇺💨 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚨 경찰과의 황당한 첫 대면</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          내가 첫 번째 뇌물 수수 사건을 직관한 것은 수즈달이라는 작은 도시에 방문했을 때였다. 당시에 수즈달 크렘린을 보기 위해 다른 차들도 다 주차를 해 둔 공터에 잠시 차를 세워두었었다. (시골이라 주차 구역 표시가 코에 걸면 코걸이, 귀에 걸면 귀걸이 수준으로 잘 안 되어 있다.) 
          <br/><br/>
          그런데 구경을 마치고 차를 빼려고 보니, 경찰이 다가와 주차하면 안 되는 곳에 차를 댔다며 다짜고짜 벌금을 내라고 했다. 👮‍♂️ 버젓이 다른 러시아인들은 우리 양옆에 주차를 하고 유유히 차에서 빠져나오고 있는데, 유독 눈에 띄는 외국인이었던 우리 일행에게만 돈을 요구하는 것이다. 
          <br/><br/>
          처음엔 우리가 표지판을 잘못 본 게 아닌가 싶었지만, 나중에 알고 보니 러시아 경찰들은 뇌물을 뜯어낼 때 지갑 얇은 자국민보다는 돈도 많아 보이고 말도 안 통하는 데다 법적 지식도 부족해 트집 잡기 쉬운 외국인을 주요 고객(?)으로 삼는다고 했다. 💸
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⚖️ 정의보다는 ‘생존’</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          나와 같이 간 일행 A는 이를 명백한 외국인 차별이라며 따지려고 했지만, 러시아 짬바(?)가 좀 있던 다른 일행 B가 기겁하며 나서서 말렸다. 법정까지 갈 경우 재판관들도 다 경찰과 한통속이라 법정 싸움에서 이길 확률은 제로에 가깝고, 재수 없으면 벌금 폭탄은 물론 강제 추방까지 당할 수도 있다는 것이다. 😱 
          <br/><br/>
          기분 좋을 리 없는 상황에 어리둥절하고 있을 때, B가 능숙하게 “죄송하게 됐습니다”라며 경찰의 손에 슬쩍 뇌물을 쥐여주는 것을 보았다. 사소한 교통법규 위반도 법정에 가서 소명할 건 소명하고 정당하게 벌금을 내는 게 상식이지만, 그렇게 해봐야 경찰 주머니에 떨어지는 콩고물은 없으니 경찰도 대충 주위를 슬쩍 살피더니 이제 가봐도 된다는 눈치를 주었다. 러시아에 온 지 고작 한 달이나 되었을까, 내 상식을 산산조각 낸 아주 충격적인 경험이었다. 💥
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎫 여권을 지키는 평화로운 길</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          일행이 해준 말에 따르면, 예전에 다른 한국인이 비슷한 일로 뇌물을 주지 않으려고 끝까지 버티다 진짜로 법정까지 갔고, 결국에는 패소해서 엄청난 벌금은 물론이고 실제로 한국으로 강제 추방까지 당했다고 한다. 🛫🇰🇷 
          <br/><br/>
          그러니 혹시 이 책을 읽고 러시아에 가서 경찰이나 공무원과 시비가 붙었다면, 정의감은 잠시 내려놓고 그냥 돈 몇 푼 쥐여주는 것이 몸과 마음, 그리고 당신의 여권을 지키는 가장 평화로운 길이다. 🎫🕊️ 뇌물계에도 나름의 인플레이션이 존재하지만, 사소한 일로는 대략 5만 원에서 10만 원 선에서 아주 깔끔하게 정리가 되니 문제를 더 키우는 것보단 차라리 가성비가 좋다고 볼 수도 있다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍫 초콜릿 상자 속의 비밀</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아에서 한 학기를 보내고 두 번째 학기가 시작되려 하던 1월의 한겨울이었다. 아내는 2인실 기숙사 방을 운 좋게 혼자 쓰고 있었는데, 새 학기에 룸메이트가 배정될지도 모른다는 청천벽력 같은 소식이 들려왔다. ⚡ 아내의 방을 우리 부부의 아지트로 요긴하게 쓰고 있었기에, 우리는 이 소중한 아지트가 날아갈까 봐 굉장히 긴장했다. 
          <br/><br/>
          하지만 나는 이미 한 학기 동안 러시아에서 뇌물이 어떤 메커니즘으로 작동하는지 어느 정도 많이 익숙해진 상태였다. 그저 방구석에서 벌벌 떨고 있기보다는, 이 상호 호혜로운(?) 시스템을 적극적으로 활용해 먼저 행동에 나서는 것이 현명하다고 판단했다. 😎
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          러시아인들은 보통 단 음식(특히 초콜릿)에 환장한다는 고급 정보를 입수 우리는, 방 배정의 전권을 쥔 사감을 매수하기 위해 마트로 달려갔다. 🍫 꽤 그럴싸하고 고급스러운 초콜릿을 고른 뒤, 박스를 조심스럽게 뜯어 그 안에 아주 잘 보이도록 2천 루블(약 3~4만 원)짜리 지폐와 애교 섞인 작은 편지를 살포시 찔러 넣었다. 💌 
          <br/><br/>
          사감을 찾아가 “새해 인사를 드리러 왔습니다”라는 가식적인 멘트와 함께 초콜릿 상자를 건넸다. 그리고 “아내가 지금 쓰는 방을 아주 마음에 들어 하는데, 혹시 이번 학기에 룸메이트가 새로 올까요?”라며 슬쩍 운을 띄웠다. 
          <br/><br/>
          그 사감은 역시나 이 바닥의 산전수전을 다 겪은 아주 눈치가 빠른 사람이었다. 그녀는 우리의 말을 듣자마자 자애로운 미소를 지으며 “별로 걱정할 일 없을 거야”라고 우리를 안심시켜 주었고, 결과적으로 그렇게 우리는 단돈 4만 원에 쾌적한 아지트를 사수할 수 있었다. 사람은 정말이지 무서운 적응의 동물이다. 🐾
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚇 지하철역의 불심검문</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바 경찰들이 곳곳에 배치되어 있다. 특히 지하철역이나 관광객이 밀집한 곳에는 무장한 경찰들을 심심치 않게 볼 수 있는데, 물론 치안을 지키는 업무가 있지만 이들은 보통 할 일 없이 자기들끼리 수다나 떨며 시간을 때운다. 🗣️ 그러다 심심해지면 지나가는 외국인들을 콕 집어 불심검문을 한다. 여권과 거주 등록증 등 필수 서류가 완벽한지 트집을 잡고, 행선지가 어딘지 꼬치꼬치 캐물으며 가방 안의 소지품까지 탈탈 턴다. 하나라도 꼬투리가 잡힌다면 뇌물없이 빠져나오기가 쉽지 않다. 👜🛑
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥩 고기 불판과 끈질긴 대치</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          한 번은 친구들과 모스크바 외곽 공원에서 고기를 구워 먹기위해 지하철을 타러 이동 중이었다. 아니나 다를까, 한 경찰이 내 앞을 가로막더니 검사할 게 있다며 나를 지하철역 구석의 으슥한 사무실로 끌고 갔다. 🏚️ 여권과 서류를 완벽하게 보여주니 딱히 잡을 꼬투리가 없었던 모양이다. 
          <br/><br/>
          그때부터 “어디 가냐”, “왜 가냐”, “친구는 몇 명이냐” 등 시시껄렁한 호구조사가 시작되었다. 소지품도 샅샅이 뒤졌지만, 나는 고기 굽기 불판 담당이라 가방 안에는 무식하게 큰 철망 말고는 특별한 게 없었다. 🕸️ 그러자 경찰은 대놓고 본색을 드러내기 시작했다. “술은 먹냐?”, “술은 누가 갖고 있냐?”, “네가 술 담당 이었으면 참 좋을 텐데” 하며 질척거리는 이상한 말들만 늘어놓았다. 내가 일부러 러시아어를 못 알아듣는 척하며 끝까지 지갑을 열 생각을 안 하자, 결국 지친 경찰은 트집 잡기를 포기하고 나를 풀어주었다. 🙌
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💬 “안 되는 것도 된다”</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이런 식으로 지나가는 애먼 행인을 잡아다 오랜 시간 놔주지 않으며 알아서 돈을 바치기를 기다리는 악질 경찰들이 모스크바에는 널려 있다. 정 뜯어먹을 외국인이 없으면 만만한 자국민이라도 잡아서 이런 식으로 귀찮게 군다고 하니, 러시아 내에서 경찰에 대한 이미지가 바닥을 기는 것은 너무나 당연한 일이다. 📉
          <br/><br/>
          길거리의 말단 경찰부터 기숙사 사감까지, 돈 몇 푼이면 법과 원칙이 마법처럼 구부러지는 이 기상천외한 뇌물 에피소드들을 겪을 때마다 내 머릿속을 강렬하게 맴도는 문장이 하나 있다. <strong>"러시아에선 되는 것도 안 되고, 안 되는 것도 된다."</strong> ✨
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          이 말은 합법적인 일도 불합리하게 거절당하는 러시아식 관료주의와, 뒷돈 몇 푼이면 안 될 일도 기적처럼 통과되는 러시아의 모순을 가장 완벽하게 관통하는 철학이다. 만약 누군가 이 매력적이고도 골치 아픈 동토의 땅으로 떠날 준비를 하고 있다면, 두꺼운 외투도 중요하지만 이 씁쓸한 명언을 가슴 깊이 가장 먼저 새겨두길 바란다. 🙏❄️
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          When you hear 'bribe' in Korea, you probably first think of black money secretly exchanged by politicians or high-ranking public officials, or perhaps an apple box(?). 📦 Of course, bribes were openly common in Korea in the past, but now that the Kim Young-ran Act has been implemented and society has become more transparent, blatant bribery by public officials is not so common (at least, I want to believe that).
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💨 Bribery as Natural as Air</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          But Russia was different. On this vast continent, bribes were demanded as naturally and openly as air, not only in public office but also in the humble daily lives of ordinary people. 🇷🇺💨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚨 My Absurd First Encounter with the Police</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The first time I witnessed a bribery incident was when I visited a small city called Suzdal. At that time, I had briefly parked my car in an empty lot where other cars were also parked to see the Suzdal Kremlin. (In the countryside, parking signs are so poorly marked that they are almost non-existent.)
          <br/><br/>
          But when I finished sightseeing and tried to move my car, a police officer approached me and demanded a fine, saying I had parked in a no-parking zone. 👮‍♂️ While other Russians were openly parking on both sides of us and leisurely getting out of their cars, he was demanding money only from our group, who were conspicuously foreigners.
          <br/><br/>
          At first, I wondered if we had misread the sign, but I later found out that Russian police often target foreigners, who appear to have more money, don't speak the language well, and lack legal knowledge, as their main 'customers' when extorting bribes, rather than their own thin-walleted citizens. 💸
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⚖️ Survival Over Justice</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          My companion A, who was with me, tried to argue that this was clear discrimination against foreigners, but my other companion B, who had some 'Russian experience,' freaked out and stopped him. He said that if we went to court, the judges would all be in cahoots with the police, so the chances of winning a court battle were close to zero, and if we were unlucky, we could face not only a huge fine but also forced deportation. 😱
          <br/><br/>
          While I was bewildered by the unpleasant situation, B skillfully said, "I'm sorry," and subtly slipped a bribe into the police officer's hand. It is common sense to explain even a minor traffic violation in court and pay the fine fairly, but there would be no crumbs for the police to pick up if we did that, so the police also casually glanced around and gave us a nod to go. I had been in Russia for only about a month, and it was a shocking experience that shattered my common sense. 💥
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎫 The Peaceful Way to Protect Your Passport</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          According to what my companions told me, another Korean once refused to give a bribe for a similar matter and ended up going to court. In the end, he lost the case and was not only fined a huge amount but also actually deported to Korea. 🛫🇰🇷
          <br/><br/>
          So, if you ever get into an argument with the police or a public official in Russia after reading this book, put aside your sense of justice for a moment and just give them a few pennies. It is the most peaceful way to protect your body, mind, and your passport. 🎫🕊️ Although there is a certain inflation in the bribery system, minor matters are usually settled cleanly for about 50 to 100 dollars, so it can even be seen as cost-effective rather than escalating the problem.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍫 The Secret in the Chocolate Box</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          It was the middle of winter in January, after I had spent one semester in Russia and was about to start my second. My wife was lucky enough to be using a double room in the dormitory by herself, but then came the shocking news that a new roommate might be assigned to her for the new semester. ⚡ Since we had been conveniently using my wife's room as our couple's hideout, we were very nervous that this precious hideout might be taken away.
          <br/><br/>
          However, I had already become quite familiar with how bribery works in Russia during my first semester. Rather than just trembling in my room, I judged it wise to actively utilize this mutually beneficial(?) system and take action first. 😎
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          We received insider information that Russians are usually crazy about sweet foods (especially chocolate), so we rushed to the supermarket to bribe the dorm supervisor, who had the full authority to assign rooms. 🍫 After choosing a fairly plausible and luxurious chocolate, we carefully opened the box and discreetly slipped in a 2,000 ruble (about 30-40 dollars) banknote and a small, charming letter so that it was clearly visible. 💌
          <br/><br/>
          We found the supervisor and, with a hypocritical comment of "We've come to wish you a Happy New Year," handed her the chocolate box. And then we subtly hinted, "My wife really likes the room she's using now, so will a new roommate be coming this semester?"
          <br/><br/>
          The supervisor, having seen it all in this business, was a very quick-witted person. As soon as she heard our words, she smiled benevolently and reassured us, "You don't have to worry too much." As a result, we were able to secure our comfortable hideout for just 40 dollars. Humans are truly animals of terrible adaptation. 🐾
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚇 Subway Station Stop-and-Frisk</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Moscow police officers are deployed everywhere. Especially in subway stations and areas crowded with tourists, you can often see armed police officers. Of course, they have duties to maintain public order, but they usually just pass the time chatting among themselves. 🗣️ Then, when they get bored, they pick out passing foreigners and conduct stop-and-frisks. They pick faults with passports, residence permits, and other essential documents, ask detailed questions about destinations, and thoroughly search bags. If even one flaw is found, it is not easy to get out without a bribe. 👜🛑
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥩 Meat Griddle and Persistent Standoff</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Once, my friends and I were on our way to the subway to grill meat at a park on the outskirts of Moscow. As expected, a police officer blocked my way and said he had something to inspect, then dragged me into a gloomy office in a corner of the subway station. 🏚️ I showed him my passport and documents perfectly, so it seemed he had no excuse to find fault.
          <br/><br/>
          From then on, trivial interrogations began: "Where are you going?", "Why are you going?", "How many friends do you have?" They searched my belongings thoroughly, but since I was in charge of the meat grilling griddle, there was nothing special in my bag except a ridiculously large wire mesh. 🕸️ Then the police officer began to reveal his true colors. He kept making strange remarks, like "Do you drink?", "Who has the alcohol?", "It would be great if you were in charge of the alcohol." When I deliberately pretended not to understand Russian and stubbornly refused to open my wallet, the exhausted police officer eventually gave up trying to find fault and let me go. 🙌
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💬 "What's Impossible is Possible"</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          There are countless malicious police officers in Moscow who, in this way, apprehend innocent passersby and detain them for a long time, waiting for them to offer money. If there are no foreigners to extort, they even bother their own vulnerable citizens in this manner, so it is only natural that the image of the police in Russia is at rock bottom. 📉
          <br/><br/>
          From street-level police officers to dorm supervisors, there is one sentence that strongly resonates in my mind every time I experience these bizarre bribery episodes where laws and principles are magically bent with a few pennies: <strong>"In Russia, what's possible is not possible, and what's not possible is possible."</strong> ✨
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          This statement is a philosophy that perfectly penetrates the contradiction of Russia, where legal matters are unreasonably rejected due to Russian-style bureaucracy, and impossible matters are miraculously passed with a few bribes. If anyone is preparing to leave for this charming yet troublesome frozen land, a thick coat is important, but I hope they engrave this bitter saying deep in their heart first. 🙏❄️
        </p>
      `}}]},ly={id:"year2",title:{ko:"2년차, 대학원 입학",en:"Year 2, Graduate School Admission"},shortTitle:{ko:"2년차",en:"Year 2"},description:{ko:"본격적인 대학원 생활의 시작",en:"The beginning of full-fledged graduate school life"},isSinglePost:!1,isActive:!0,posts:[{id:"post-200",title:{ko:"새 보금자리를 찾아",en:"Finding a New Home"},subtitle:{ko:"기숙사 탈출, 모스크바 아파트 구하기 대작전",en:"Escape from the Dormitory, The Great Moscow Apartment Hunt"},imageUrl:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          예비학부 동안 정들었던 기숙사는 대학원에 진학하면서 더 이상 지낼 수 없다고 했다. 우리가 살던 기숙사는 아파트 형식으로 층은 달랐지만 아내가 방을 혼자 쓰고 있었을 뿐만 아니라, 무엇보다 모스크바 내 기숙사 중에는 아주 깔끔한 축에 속했기 때문에 아쉬움이 더욱 컸다. 😥 기숙사를 벗어나면 그동안 혜택을 누렸던 전기세나 온수 등 추가적인 비용도 발생한다는 점도 큰 고민거리였다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 본학부로 진학하며 새로 받게 될 기숙사들은 <span class="text-red-600 font-bold">바퀴벌레와 공존해야 하는 🪳</span> 끔찍한 곳 뿐이었다. 앞으로 남은 2년간 생존을 위한 최소한의 삶을 보장하고 무사히 학업을 마치려면 어떻게든 ‘사람이 살 만한’ 보금자리로 이동을 해야 했다. 우물쭈물 하다가는 괜찮은 매물이 나와도 놓칠 수 있었기에 서둘러 집을 알아보러 다녔다.
        </p>

        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p class="leading-relaxed text-slate-800">
            예비학부에서 같이 공부하던 친구들도 너나 할 것 없이 집구하기 전쟁에 뛰어들었다. ⚔️ 어제의 동료들은 하루 아침에 더 싸고 좋은 집을 찾으려는 우리의 경쟁자들이 되어 있었다.
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏠 모스크바에서 집 구하기란</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          어느 대도시나 마찬가지겠지만, 모스크바 역시 약 천만 명, 유동 인구까지 합치면 그보다 훨씬 많은 인구가 이 도시의 한정된 공간을 나누어 쓰고 있다. 그렇기에 지하철과 가깝고 치안이 안전한 곳은 가격이 매우 비쌌다. 이미 아파트에서 살고 있던 몇몇 지인들은 한달에 150만원도 넘는 월세를 내며 살고 있었는데, 우리에게 <span class="text-slate-500 line-through">그림의 떡</span>이었다. 💸 설사 낼 수 있다 하더라도 군에서 아주 저렴히 제공하는 숙소에 비하면 매월 아무것도 안해도 고정으로 나가는 큰 돈은 낭비가 아닐 수 없었다. 러시아에서 차를 구입하지 않았기에 우리가 구할 수 있는 집은 대중교통으로 접근이 가능해야 했다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          한시라도 낭비할 수 없는 그 시간, 나는 모스크바에서 집을 찾는 데에 가장 큰 걸림돌 중 하나는 러시아 사람들의 폐쇄성과 배타성임을 알게 되었다. 부동산 사이트에서 마음에 드는 집을 발견해 전화를 걸어도, 수화기 너머로 들려오는 대답은 차가웠다.
        </p>

        <div class="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
          <p class="leading-relaxed text-red-900">
            <strong>"슬라브인이 아니면 세를 내줄 수 없다"</strong>는 집주인이 부지기수였다. 😤 아마 그들은 스스로가 세상에서 제일 정결한 민족이라도 되는 양, 이방인에게 집을 내주는 것을 극도로 꺼렸다. 아마도 다른 문화권 사람들의 음식 향신료 냄새가 벽지에 배거나, 생활 습관의 차이로 집이 망가질 것을 우려했는지도 모르겠다. 혹은 막연한 거부감일 수도 있겠다. 당하는 입장에서는 가슴이 답답하고 기가 막힐 노릇이었지만, 한편으로는 그들의 경계심이 아예 이해가 안 가는 것도 아니었다.
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😱 충격의 연속, 러시아식 인테리어</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          외국인도 세입자로 받을 수 있다는 몇몇의 저렴한 매물을 둘러보았지만, 문을 열고 들어설 때마다 마주한 풍경은 충격의 연속이었다. 거대한 아파트 단지라는 외관이 무색하게도 집 내부가 전부 나무로 마감되어 있었다. 러시아 인테리어의 정점은 단연 곳곳에 깔린 카펫(러그)였다. 바닥은 물론이고, 추위를 막으려는 방편인지 아니면 전통적인 취향인지 벽면까지 카펫이 점령하고 있었다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          문제는 이들의 관리 상태였다. 수십 년의 세월을 머금은 듯한 카펫은 확인하지 않아도 먼지를 가득 품고 있음을 알 수 있었고, 정체 모를 쿰쿰한 냄새가 배어 나왔다. 🤢
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          여기에 더해 러시아인들은 화장실뿐만 아니라 집 안 모든 곳에 백열등 대신 주황빛 전구를 선호했다. 가뜩이나 흐린 날씨 때문에 침침한 실내는 주황색 조명 아래서 더욱 어둡고 가라앉은 분위기를 자아냈다. 안 그래도 삐걱거리는 낡은 나무로 가득한 아파트에, 지저분한 카펫, 침침한 주황 불빛까지, 집 안은 마치 과거 박물관을 연상시켰다.
        </p>
        <blockquote class="text-center font-serif text-xl font-bold text-russia-blue my-8 animate-pulse">
          "아무리 ‘하면 된다’는 정신으로 러시아어 까막눈인채로 석사과정을 한다고 덤볐던 나도 도저히 이런 곳에서 남은 2년을 버틸 자신이 생기지 않았다."
        </blockquote>
        <div class="bg-slate-50 p-4 my-6 rounded-lg text-sm">
          <span class="font-bold text-slate-700">💡 따뜻한 전구 vs 차가운 전구</span><br/>
          러시아어로 백열등은 '추운 전구(холодная лампа)'였고 주황등은 '따뜻한 전구(тёплая лампа)'였으니, 그들이 왜 주황빛을 선호했는지 조금은 알 것도 같았다.
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✨ 운명처럼 나타난 보금자리</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          그렇게 많은 헛 걸음 끝에 점점 지쳐갈 무렵, 정말로 살만한 집을 못 찾는 건 아닐까 하는 불안감이 엄습했다. 그 때 정말 운명처럼 학교와도 가깝고 사진상으로도 꽤 괜찮아 보이는 집이 매물로 나왔다. 집주인은 러시아 사람이지만 유럽풍의 실내 인테리어에 관심이 있는 사람이었다. 집은 넓지 않았지만 월세를 놓으려고 새로 깨끗하게 유럽풍으로 리몬트(리모델링)를 했다고 들었다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          특히, 가장 마음에 들었던 것은 크게 낸 창문이었다. 덕분에 밖에서 집으로 볕이 아주 잘 들었다. ☀️ 바닥에는 나무가 아닌 우리와 친숙한 바닥 장판이 깔려있었고, 벽면도 흰색으로 환하게 잘 도배되어 있었다. 방 하나에 주방과 화장실이 따로 있는 구조로 원룸보다는 방 하나 있는 아파트에 가까웠다. 거실은 따로 없었지만 둘이 살기에는 나쁘지 않았다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          집주인 아주머니는 아주 교양있는 사람이었다. 말도 조곤조곤하고 더듬거리는 서툰 내 러시아어도 끝까지 잘 들어주었다. 러시아에서는 매년 레기스트라찌야 (Регистрация, Registration)라는 거주증을 갱신해야 하는데 그 때마다 집주인도 동사무소에 직접 나와야 하는 번거로움이 있었다. 그럼에도 그녀는 기꺼이 이방인인 우리에게 세를 주었다. 내가 돈을 주는 입장이지만 너무 고마워서 눈물이 날 지경이었다. 🥹
        </p>

        <div class="bg-blue-50 border-t-4 border-b-4 border-blue-200 p-6 my-8 text-center">
          <p class="text-2xl font-bold text-blue-900">월세 약 70만원</p>
          <p class="text-blue-800 mt-2">공공요금(전기, 상하수도) 월 3만원 내외</p>
          <p class="text-sm text-blue-700 mt-2">(당시 환율 ±18원/루블 기준)</p>
        </div>

        <p class="leading-relaxed mb-6 text-slate-700">
          러시아에서는 난방을 국가에서 무료로 관리하기에 공공요금 부담이 적었다. 문득 한국에서의 겨울이 생각났다. 당시 겨울에 한국에서는 창문사이로 들어오는 한기를 막기 위해 ‘뽁뽁이’라는 포장재를 사용하는 것이 유행이었다. 내가 살던 집은 오래된 군아파트로 꼭대기인 5층에 있어 다른 집보다 더욱 추웠다. 개별 난방이 되지 않았기에 난방을 틀면 집 전체를 데워야만 했다. 그래서 이불을 두르고 난방팬을 사서 방에 틀어놓고 공부를 했던 기억이 난다.
        </p>
        <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
          "하지만 이제는 자애로운 러시아의 무료 난방 덕에 더이상 방에서 추위에 떨지 않아도 되었다. 러시아인들에게 온도가 조절이 안돼서 방이 너무 더운데 어떻게 해야하냐고 물어보면 그들은 백이면 백, ‘창문을 열어, 그럼 되잖아’라고 할 것이다. 이 얼마나 호사인가."
        </blockquote>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏰 우리만의 요새, 그리고 집들이</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          하나 뿐인 방에는 가운데에 둘이 쓰기에 넉넉한 킹 사이즈의 침대가 있었다. 침대를 중심으로 한쪽에는 내 책상을, 다른 한쪽에는 아내의 책상을 두어 각자의 영역을 만들었다. 살림살이가 단출했기에 이사는 택시 한 대로 충분했다. 🚚 정든 기숙사를 떠나는 날, 아내는 눈물을 흘렸는데 아마 낯선 곳에서의 첫 1년을 잘 버티게 도와준 보금자리를 떠나서 그런 듯 하다. 나는 짐들을 택시 트렁크와 뒷좌석까지 꾹꾹 실어서 이동했고, 아내는 지하철을 타고 새집으로 향했다. 짐을 풀고 앞으로 필요한 물품들을 하나하나 채우니 남은 2년 우리 둘 만의 새 요새가 완성되었다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          새 보금자리를 마련한 기념으로 예비학부 시절 친하게 지냈던 동생들 두 명과 단촐하게나마 집들이를 했다. 🎉 주방이 작아서 사람 넷이 앉으니 주방이 꽉 찼다. 주방이 좁아서 좋은 점도 있다. 음식을 먹으면서 부족하면 바로바로 요리를 더 할 수도 있었고, 더 필요한게 있으면 언제든 손이 닿는 냉장고에서 꺼내면 되었다. 심지어 요리를 하면서도 같이 대화를 할 수도 있었다. 이렇게 집들이까지 마치고 나니 남은 2년의 전투를 할 심신의 준비가 완료된 기분이었다.
        </p>
        <hr class="border-slate-200 my-8 w-1/3 mx-auto" />
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아에서는 돈을 주고 집을 구하는 것도 전쟁이었고 또한 배움이었다. 낯선 땅, 낯선 이들을 이해하지 못했다면 그들의 배타성에 상처만 남았으리라 생각한다. 집을 구해야 한다는 절박한 상황 속이었지만 러시아도 다 사람 사는 곳이었고 그들을 이해하니 그들의 따뜻함 마저도 느껴졌던 소중한 경험이었다.
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          The dormitory that I had grown fond of during the preparatory program was no longer available to me as I entered graduate school. The dormitory we lived in was apartment-style, and although my wife's room was on a different floor, she had it all to herself. Moreover, it was one of the cleanest dormitories in Moscow, so the disappointment was even greater. 😥 Another major concern was that leaving the dormitory would incur additional costs such as electricity and hot water, which we had been enjoying as benefits.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          However, the new dormitories we would be assigned to as we entered the main program were all terrible places where we would have to <span class="text-red-600 font-bold">coexist with cockroaches 🪳</span>. To ensure a minimum standard of living for the remaining two years and to successfully complete my studies, I had to move to a place 'fit for human habitation' somehow. If I hesitated, I could miss out on good listings, so I hurried to look for a new home.
        </p>

        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p class="leading-relaxed text-slate-800">
            My friends from the preparatory program also jumped into the house-hunting war. ⚔️ Yesterday's colleagues had become our competitors overnight, looking for cheaper and better homes.
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏠 House Hunting in Moscow</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          As with any big city, Moscow has a population of about 10 million, and even more if you include the floating population, all sharing the limited space of this city. Therefore, places close to the subway and with good security were very expensive. Some acquaintances who were already living in apartments were paying more than 1,500 dollars a month in rent, which was <span class="text-slate-500 line-through">a pie in the sky</span> for us. 💸 Even if we could afford it, compared to the very cheap accommodation provided by the military, the large amount of money that would go out every month for doing nothing was a waste. Since we hadn't bought a car in Russia, the house we were looking for had to be accessible by public transport.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          During that time when I couldn't waste a single moment, I learned that one of the biggest obstacles to finding a house in Moscow was the closed-mindedness and exclusivity of the Russian people. Even if I found a house I liked on a real estate website and called, the response on the other end of the line was cold.
        </p>

        <div class="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
          <p class="leading-relaxed text-red-900">
            There were countless landlords who said, <strong>"I can't rent to you if you're not Slavic."</strong> 😤 They were extremely reluctant to rent their homes to foreigners, as if they themselves were the purest people in the world. Perhaps they were worried that the smell of spices from other cultures would seep into the wallpaper, or that their homes would be damaged due to differences in lifestyle. Or it could have been a vague sense of rejection. From the perspective of the one being rejected, it was frustrating and absurd, but on the other hand, I could somewhat understand their wariness.
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😱 A Series of Shocks, Russian-style Interior</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I looked at a few cheap listings that were said to be available to foreign tenants, but the scene that greeted me every time I opened the door was a series of shocks. The exterior of a huge apartment complex was belied by the fact that the interior of the house was entirely finished with wood. The pinnacle of Russian interior design was undoubtedly the carpets (rugs) laid everywhere. Not only the floor, but also the walls were occupied by carpets, perhaps as a way to block the cold or as a traditional preference.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The problem was the condition of their management. The carpets, which seemed to have absorbed decades of time, were full of dust even without checking, and a musty, unidentifiable smell emanated from them. 🤢
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          In addition to this, Russians preferred orange-colored light bulbs instead of incandescent bulbs not only in the bathroom but everywhere in the house. The already dim interior due to the cloudy weather created an even darker and more subdued atmosphere under the orange lighting. The apartment, already full of creaky old wood, with its dirty carpets and dim orange lights, was reminiscent of a museum of the past.
        </p>
        <blockquote class="text-center font-serif text-xl font-bold text-russia-blue my-8 animate-pulse">
          "No matter how much I had tackled my master's program with the 'I can do it' spirit while being illiterate in Russian, I didn't have the confidence to endure the remaining two years in a place like this."
        </blockquote>
        <div class="bg-slate-50 p-4 my-6 rounded-lg text-sm">
          <span class="font-bold text-slate-700">💡 Warm Bulb vs. Cold Bulb</span><br/>
          In Russian, an incandescent bulb was a 'cold bulb (холодная лампа)' and an orange bulb was a 'warm bulb (тёплая лампа),' so I could somewhat understand why they preferred the orange light.
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✨ A Home That Appeared Like Destiny</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Just as I was getting tired after so many fruitless visits, the anxiety that I might not be able to find a decent place to live at all crept up on me. At that moment, a house that was close to the school and looked quite good in the pictures came up for sale, as if by destiny. The landlord was Russian but was interested in European-style interior design. The house was not large, but I heard that it had been newly and cleanly renovated in a European style for rent.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          In particular, what I liked the most were the large windows. Thanks to them, the house got a lot of sunlight from the outside. ☀️ The floor was not wood but a familiar floor covering, and the walls were also brightly plastered in white. It was a one-room apartment with a separate kitchen and bathroom, rather than a studio apartment. There was no separate living room, but it was not bad for two people to live in.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The landlady was a very cultured person. She spoke softly and listened patiently to my clumsy, stuttering Russian. In Russia, you have to renew your residence permit, called Registratsiya (Регистрация, Registration), every year, which meant that the landlord had to go to the community service center in person each time. Nevertheless, she willingly rented to us, who were foreigners. Although I was the one paying, I was so grateful that I was on the verge of tears. 🥹
        </p>

        <div class="bg-blue-50 border-t-4 border-b-4 border-blue-200 p-6 my-8 text-center">
          <p class="text-2xl font-bold text-blue-900">Rent approx. 700 USD</p>
          <p class="text-blue-800 mt-2">Utilities (electricity, water/sewage) approx. 30 USD/month</p>
          <p class="text-sm text-blue-700 mt-2">(Based on the exchange rate at the time of 70± RUB/USD)</p>
        </div>

        <p class="leading-relaxed mb-6 text-slate-700">
          In Russia, the burden of public utility fees was low because the state managed the heating for free. I was suddenly reminded of winter in Korea. At that time, it was popular in Korea to use a packaging material called 'bubble wrap' to block the cold air coming in through the windows. The old military apartment I lived in was on the top floor, the 5th floor, so it was even colder than other houses. Since there was no individual heating, I had to heat the entire house when I turned on the heating. So I remember studying wrapped in a blanket with a heating fan on in my room.
        </p>
        <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
          "But now, thanks to the benevolent free heating of Russia, I no longer had to shiver from the cold in my room. If you ask a Russian what to do when the room is too hot because the temperature cannot be adjusted, they will say, one hundred out of one hundred, 'Open the window, that's all.' What a luxury."
        </blockquote>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏰 Our Own Fortress, and a Housewarming Party</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In the only room, there was a king-size bed in the middle that was spacious enough for two people. With the bed as the center, I created my own area with my desk on one side and my wife's desk on the other. Since our household goods were simple, one taxi was enough for the move. 🚚 On the day we left the dormitory we had grown fond of, my wife shed tears, probably because we were leaving the home that had helped us get through our first year in a strange place. I packed our belongings tightly into the trunk and back seat of the taxi, and my wife took the subway to our new home. After unpacking and filling the house with the necessary items one by one, our new fortress for the two of us for the remaining two years was complete.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          To celebrate our new home, we had a small housewarming party with two of our younger friends from the preparatory program. 🎉 The kitchen was small, so it was full with just four people sitting in it. There were also good things about the small kitchen. If we ran out of food while eating, we could cook more right away, and if we needed anything else, we could get it from the refrigerator, which was always within reach. We could even talk while cooking. After the housewarming party, I felt that I was mentally and physically ready for the battle of the remaining two years.
        </p>
        <hr class="border-slate-200 my-8 w-1/3 mx-auto" />
        <p class="leading-relaxed mb-6 text-slate-700">
          In Russia, even buying a house for money was a war and a learning experience. If I hadn't understood the strange land and the strange people, I think I would have only been hurt by their exclusivity. Although it was a desperate situation where I had to find a house, Russia was also a place where people lived, and once I understood them, it was a precious experience where I could even feel their warmth.
        </p>
      `}},{id:"post-201",title:{ko:"대학원 새내기",en:"Graduate School Freshman"},subtitle:{ko:"동무들과의 첫 만남, 그리고 혹독한 전공의 맛",en:"First Meeting with Comrades, and the Harsh Taste of a Major"},imageUrl:"https://cdn-media.tass.ru/width/1020_b9261fa1/tass/m2/en/uploads/i/20190619/1223730.jpg",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          길 것만 같던 여름방학은 언제 흘러갔는지 흔적도 없이 증발해 버렸고, 어느새 대학원생으로서의 첫 학기가 막을 올렸다. 🎓 한국의 대학생이라면 수강 신청 기간마다 마우스 광클릭으로 🖱️ 스스로 시간표를 쟁취해야겠지만, 러시아는 참으로 ‘친절하게도’ 학부생은 물론 대학원생의 시간표까지 학교에서 알아서 짜준다. 뭐, 사실 사관학교 시절부터 국가가 정해준 시간표대로 살아온 나로서는 이런 수동적인 시스템에 별다른 불만이 없긴 했다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤝 같은 반 친구들, 아니 동무들</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바 국립대의 석사 과정은 한국의 대학원과는 조금 다르다. 같은 과, 같은 시기에 입학한 동기들은 졸업할 때까지 몇몇 교양과목을 제외하면 모든 수업을 함께 듣는다. 그래서 이들을 느슨한 ‘대학 동기’라기보다는 끈끈한 ‘같은 반 친구들’이라고 부르는 편이 훨씬 자연스럽다. 아니면 소련 식으로 ‘동무(товарищ)’라고 부르는 게 더 어울릴지도...
        </p>
        <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue my-6">
          <p class="leading-relaxed text-slate-700">
            우리 반은 총 12명이었는데, ‘핵물리학과’라는 무시무시하고도 딱딱한 전공 이름이 무색하게 여학생이 무려 3명이나 있었다. 👩‍🔬 성비가 25%라니, 공대나 자연대치고는 실로 굉장한 수치가 아닐 수 없다.
          </p>
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          이 12명의 구성을 살펴보면 꽤 흥미롭다. 8명은 모스크바 국립대 학부에서 그대로 올라온 이른바 ‘성골’들이었고, 1명은 타 대학 출신의 내국인, 1명은 카자흐스탄에서 온 유학생이었다. 🇰🇿 사실 카자흐스탄은 러시아어권이라 말이 완벽하게 통하니 ‘외국인 전형’이라는 타이틀이 무색할 지경이었다. 그리고 남은 두 자리가 바로 진정한 의미의 쌩초보 외국인, 나와 내 지인이었다. 게다가 이들 모두 학부 때부터 핵물리학을 전공했다고 하니 더더욱 긴장이 되지 않을 수 없었다. 🤯
        </p>
        
        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <p class="leading-relaxed text-yellow-900 font-medium mb-2">🤫 자본주의의 씁쓸한 진실</p>
          <p class="leading-relaxed text-yellow-800">
            나중에 지인들에게 전해 들은 충격적인 사실인데, 외국인인 우리 두 사람을 입학시키기 위해 원래 이 학부 출신이었던 러시아 학생 두 명이 석사 과정에서 탈락했다고 한다. 자국민 학생들은 학비를 내지 않고 오히려 소정의 장학금까지 받으며 학교를 다니지만, 우리는 학비를 100% 내야 하니 학교 입장에서는 꽤나 ‘짭짤한’ 수익원이었던 셈이다. 💸 이 자본주의의 씁쓸한 진실을 마주하고 나니, 얼굴 한 번 본 적 없는 그 두 명의 탈락자들에게 묘한 부채감이 밀려왔다. 같은 반 러시아 ‘동무’들은 이 두 명은 취직을 잘 했으니 걱정말라는 말로 나를 위로 했다.
          </p>
        </div>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💪 강인한 슬라브의 리더</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          우리 반의 반장은 여학생이었다. 같은 반 남학생과 사내(아니, 과내) 연애 중이었는데, 성격이 아주 씩씩하고 결단력이 넘치는 데다 친절하기까지 한 완벽한 리더였다. 반 친구들과 놀러 갈 때면 여행사 직원 뺨치게 모든 계획을 도맡아 했고, 말 안 통하는 외국인인 우리들의 공부도 살뜰히 챙겨주었다. 강인한 슬라브 민족 여성의 힘이 느껴지는 친구였다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          특히 그녀의 필기 노트는 가뭄의 단비 같았는데, 문제는 해독이 쉽지 않았다는 점이다. ✍️ 러시아 사람들은 성별을 불문하고 엄청난 악필을 자랑하는 경우가 많은데, 반장의 글씨체 역시 우리가 이수해야 할 또 하나의 '전공 필수 과목' 수준이었다. 심지어 본인이 휘갈겨 쓴 글씨를 본인도 못 알아봐서 둘이 같이 노트를 뚫어져라 쳐다본 적도 종종 있었다. 그래도 그 해독하기 힘든 노트와 반장의 헌신이 없었다면 내 무사 졸업은 불가능했을지도 모른다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👨‍🏫 나의 지도교수님</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          대학원생의 본업은 역시 연구 아니겠는가. 진로 상담을 담당하는 교수님과 면담하며 희망 분야를 말씀드렸더니, 며칠 뒤 내 지도 교수가 배정되었다. 교수의 이름은 '벨릐셰프 세르게이 세르게예비치(Belyshev Sergey Sergeyevich)'. 이름에서 바로 눈치챌 수 있듯, 그의 아버지 이름 역시 세르게이다.
        </p>
        <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
          (러시아인들의 독특한 작명법과 부칭 시스템에 대해서는 6장, 러시아인 이름에서 더 자세히 다루도록 하겠다).
        </blockquote>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아에서 누군가를 존중을 담아 공식적으로 부를 때는 반드시 ‘이름’과 ‘부칭’을 함께 불러야 한다. 하지만 예비학부 시절 선생들을 편하게 이름으로만 부르던 버릇이 남아 있던 나는, 석사 초기 몇 번이나 호칭 실수를 저질러 따끔한 지적을 받아야 했다. 다행히 내 지도 교수는 나보다 많아 봐야 서너 살 위로 보이는 아주 젊고 열정적인 학자였고, 살인적인 일정 속에서도 헤매는 유학생을 정성껏 지도해 주었다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😵‍💫 영혼이 가출하는 시간</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          대학원에서의 첫 몇 주는 그야말로 영혼이 가출하는 시간이었다. 모스크바 국립대에서는 석사과정이라는 시스템이 생긴지 몇 년 되지 않은 터였다. 그전에는 러시아만의 독특한 스페셜리스트라는 학부에 1년만 더 하면 되는 과정이 있었다. 서방 국가의 시스템을 따라잡고 국제적인 트렌트를 반영하기 위한 노력이라고 할 수 있다. 아직 확실히 정착된 시스템이 아니었기에 시간표가 수시로 엎어지고 바뀌어서 매우 혼란스러웠다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          게다가 도무지 알아들을 수 없는 러시아어 전공 강의를 온종일 듣고 집에 오면 파김치가 되기 일쑤였다. 예비학부 시절에는 러시아어를 배우기 위해 수학과 과학을 도구로 삼았다면, 본학부가 시작되니 상황이 완벽히 역전되었다. 이제는 <span class="text-red-600 font-bold">살인적인 전공 수업을 이해하기 위해 러시아어를 죽어라 파고들어야만 했다.</span> 📚 물론 시간이 흐르면서 전공 수업에 등장하는 어휘들이 돌림노래처럼 한정적이라는 걸 깨닫고 나름 생존법을 터득하게 되지만 말이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍻 술로 하나 된 추석</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          추석은 새 학기가 시작되고 3주쯤 지났을 때 찾아왔다. 🌕 당연히 러시아에서 추석은 공휴일이 아니었지만, 같은 반 친구들에게 앞으로 잘 부탁한다는 인사를 전하고 싶어 호텔 내 한국 식당으로 그들을 초대했다. 사실 당시만 해도 모스크바에서 한국 음식은 대중적이지 않았고 가격도 꽤 비싼 편이었다. 생전 처음 접하는 맵고 낯선 비주얼의 음식들에 친구들은 적잖이 당황한 눈치였다. 그들은 예의상 ‘음...’ 하며 고개를 끄덕이고는 있었지만, 굳어진 표정에서 숨길 수 없는 당혹감이 읽혔다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 분위기를 반전시킨 건 역시 술이었다. 보드카와 맥주를 섞은 한국식 ‘폭탄주’가 몇 번 돌기 시작하자, 어색했던 공기는 순식간에 달아올랐다. 🍻 독한 술에 단련된 러시아인들이라 그런지 폭탄주의 오묘한 맛에 금세 매료되었고, 그때부터는 안주가 무엇이든 개의치 않고 즐겁게 먹기 시작했다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          아직 러시아어가 서툴러 그들도 나도 서로의 말을 완벽히 이해하지 못할 때가 많았지만, 잔을 부딪치며 터져 나오는 웃음소리만큼은 통역이 필요 없었다. 문법이 틀리고 단어가 생각나지 않아도, 붉게 달아오른 얼굴로 서로를 마주 보며 건네는 투박한 몸짓 속에 진심이 담겨 있었다.
        </p>

        <blockquote class="text-center font-serif text-xl text-russia-blue my-10 border-y-2 border-slate-100 py-8 leading-relaxed">
          "결국 그날 밤, 호텔 식당을 나서며 우리는 한층 더 가까워져 있었다. <br/>
          한국의 명절인 추석이 모스크바의 차가운 밤공기 속에서 우정이라는 이름으로 다시 피어난 순간이었다. <br/>
          말이 통하지 않아도 마음은 통할 수 있다는, 유학 생활에서 가장 중요한 진리를 나는 그날의 술잔 속에서 배울 수 있었다."
        </blockquote>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          The summer vacation, which seemed like it would last forever, evaporated without a trace, and before I knew it, my first semester as a graduate student had begun. 🎓 If you're a university student in Korea, you have to fight for your own schedule by clicking your mouse like crazy 🖱️ during the course registration period, but in Russia, the school is so 'kind' as to make the schedule for not only undergraduate but also graduate students. Well, to be honest, I, who had lived according to a schedule set by the state since my military academy days, had no particular complaints about this passive system.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤝 Classmates, No, Comrades</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The master's program at Moscow State University is a little different from that of a Korean graduate school. Classmates who enter the same department at the same time take all classes together until graduation, with the exception of a few liberal arts courses. So it's much more natural to call them close-knit 'classmates' rather than loose 'university classmates.' Or maybe it's more appropriate to call them 'comrades (товарищ)' in the Soviet style...
        </p>
        <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue my-6">
          <p class="leading-relaxed text-slate-700">
            There were a total of 12 people in our class, and contrary to the scary and rigid name of the 'Department of Nuclear Physics,' there were as many as 3 female students. 👩‍🔬 A gender ratio of 25% is truly an amazing number for an engineering or natural sciences department.
          </p>
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          The composition of these 12 people is quite interesting. 8 of them were the so-called 'sacred bones' who came straight from the undergraduate program at Moscow State University, 1 was a domestic student from another university, and 1 was an international student from Kazakhstan. 🇰🇿 In fact, since Kazakhstan is a Russian-speaking country, he spoke the language perfectly, so the title of 'foreign student admission' was almost meaningless. And the remaining two spots were for the true beginner foreigners, me and my acquaintance. Moreover, since all of them had majored in nuclear physics since their undergraduate days, I couldn't help but be more nervous. 🤯
        </p>
        
        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <p class="leading-relaxed text-yellow-900 font-medium mb-2">🤫 The Bitter Truth of Capitalism</p>
          <p class="leading-relaxed text-yellow-800">
            A shocking fact that I later heard from my acquaintances was that two Russian students who were originally from this undergraduate program were dropped from the master's program to admit us two foreigners. While domestic students go to school without paying tuition and even receive a small scholarship, we have to pay 100% of the tuition, so from the school's perspective, we were a pretty 'lucrative' source of income. 💸 After facing this bitter truth of capitalism, I felt a strange sense of debt towards those two dropouts whom I had never even seen before. My Russian 'comrade' classmates comforted me by saying that those two got good jobs, so I shouldn't worry.
          </p>
        </div>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💪 The Strong Slavic Leader</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The leader of our class was a female student. She was dating a male student from the same class, and she was a perfect leader with a very strong personality, decisiveness, and kindness. When she went out with her classmates, she took charge of all the planning like a travel agency employee, and she also took good care of our studies, who were foreigners who couldn't speak the language well. She was a friend who made me feel the power of a strong Slavic woman.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          In particular, her lecture notes were like a welcome rain in a drought, but the problem was that they were not easy to decipher. ✍️ Many Russians, regardless of gender, boast of terrible handwriting, and the class leader's handwriting was also at the level of another 'required major subject' that we had to complete. There were even times when she couldn't recognize her own scribbled handwriting, so we would often stare at the notebook together. Still, without those hard-to-decipher notes and the class leader's dedication, my safe graduation might have been impossible.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👨‍🏫 My Advisor</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The main job of a graduate student is research, isn't it? After meeting with the professor in charge of career counseling and telling him my desired field, my advisor was assigned a few days later. The professor's name was 'Belyshev Sergey Sergeyevich'. As you can immediately guess from the name, his father's name is also Sergey.
        </p>
        <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
          (I will deal with the unique naming and patronymic system of Russians in more detail in Chapter 6, Russian Names).
        </blockquote>
        <p class="leading-relaxed mb-6 text-slate-700">
          In Russia, when you officially address someone with respect, you must call them by their 'first name' and 'patronymic' together. However, since I was still in the habit of casually calling my teachers by their first names during my preparatory program days, I made a few mistakes with the honorifics in the early days of my master's program and had to receive a sharp rebuke. Fortunately, my advisor was a very young and passionate scholar who looked to be at most three or four years older than me, and he diligently guided the lost international student even in his killer schedule.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😵‍💫 A Time When the Soul Leaves the Body</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The first few weeks of graduate school were truly a time when the soul leaves the body. The master's program system had only been in place at Moscow State University for a few years. Before that, there was a unique Russian specialist program that only required one more year of study in the undergraduate program. It can be said that this was an effort to catch up with the Western system and reflect international trends. Since it was not yet a firmly established system, the schedule was often overturned and changed, which was very confusing.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          In addition, I would be exhausted when I came home after listening to Russian major lectures all day long that I couldn't understand at all. During my preparatory program days, I used mathematics and science as tools to learn Russian, but when the main program began, the situation was completely reversed. Now, I had to <span class="text-red-600 font-bold">dig into Russian like crazy to understand the killer major classes.</span> 📚 Of course, as time went by, I realized that the vocabulary that appeared in the major classes was limited like a round song, and I learned my own survival methods.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍻 Chuseok, United by Alcohol</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Chuseok came about 3 weeks after the new semester started. 🌕 Of course, Chuseok was not a public holiday in Russia, but I wanted to say hello to my classmates and ask them to take good care of me in the future, so I invited them to a Korean restaurant in a hotel. In fact, at that time, Korean food was not popular in Moscow and the price was quite expensive. My friends seemed quite embarrassed by the spicy and unfamiliar-looking food that they had never seen before. They nodded their heads and said 'umm...' out of politeness, but I could read the unconcealable embarrassment on their stiff faces.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          But what turned the atmosphere around was, of course, alcohol. As soon as a few rounds of Korean-style 'bomb shots,' a mixture of vodka and beer, began to circulate, the awkward atmosphere quickly heated up. 🍻 Perhaps because they were Russians who were hardened to strong alcohol, they were quickly fascinated by the subtle taste of the bomb shots, and from then on, they began to eat happily regardless of what the side dishes were.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          There were many times when we couldn't understand each other's words perfectly because I was not yet fluent in Russian, but the sound of laughter that erupted as we clinked our glasses together needed no translation. Even if the grammar was wrong and I couldn't remember the words, there was sincerity in the clumsy gestures we made as we looked at each other with flushed faces.
        </p>

        <blockquote class="text-center font-serif text-xl text-russia-blue my-10 border-y-2 border-slate-100 py-8 leading-relaxed">
          "In the end, as we left the hotel restaurant that night, we had grown much closer. <br/>
          It was the moment when the Korean holiday of Chuseok blossomed again in the cold night air of Moscow in the name of friendship. <br/>
          I was able to learn the most important truth of my life as a student abroad in that day's glass of alcohol: that even if we can't communicate with words, our hearts can."
        </blockquote>
      `}},{id:"post-202",title:{ko:"인생 처음 오리엔테이션",en:"First Orientation of My Life"},subtitle:{ko:"야생, 보드카, 그리고 무너진 텐트",en:"The Wild, Vodka, and a Collapsed Tent"},imageUrl:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          반장으로부터 물리과 오리엔테이션이 있다는 이야기를 들었다. 모스크바가 교외의 어딘가 숲속 야영장에서 진행된다고 했다. 또한 우리과인 핵물리학과 뿐만이 아니라 물리학과 전체의 오리엔테이션이었기에 꽤나 규모가 크다고 한다. 같은 반 친구들이 대부분 간다기에 나와 지인도 호기심 반 기대 반으로 동참하기로 했다.
        </p>
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🛒 전투 식량 비축</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          첫 집결지는 기차역 근처의 대형 마트였다. 야생으로 떠나기 전 ‘전투 식량’을 비축하기 위해서였다. 각자 챙겨온 텐트와 침낭을 멘 무리들이 카트 한가득 보드카와 맥주, 고기, 빵, 그리고 소시지를 쓸어 담는 모습은 그야말로 장관이었다. 양손 무겁게 짐을 든 우리는 ‘일렉트리치카(Электричка)’라 불리는 모스크바 근교 통근 열차(혹은 교외철)에 몸을 실었다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          이 열차는 겉보기엔 세월의 흔적이 가득하고 덜컹거리는 소음도 심했지만, 막상 달리기 시작하니 예상과는 전혀 다른 속도감을 뽐냈다. 둔탁한 외관과 달리 광활한 러시아 평원을 거침없이 가로지르는 기세가 대단했는데, 창밖의 풍경이 마치 뒤로 빨려 들어가는 듯한 착각이 들 정도로 빨랐다. 2시간 남짓 이동하는 동안, 창밖으로는 모스크바의 도심 풍경 대신 빠른 속도로 스쳐 지나가는 끝없는 자작나무 숲이 이어졌다.
        </p>
        <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue my-6">
          <p class="leading-relaxed text-slate-700">
          출출해질 무렵, 한 친구가 흑빵 위에 기름에 절인 생선을 툭 얹어서 건넸다. 러시아인들이 보드카 안주로 가장 사랑한다는 셀룟카(Сельдка, 청어 절임)였다. 미끌거리고 비릿해 보이는 은빛 단면의 충격적인 비주얼에 잠시 멈칫했지만, 친구의 성의를 봐서 호기심에 눈 딱 감고 한 입 베어 물었다. 비린내가 진동할 것이라는 예상과 달리, 짭조름한 바다의 풍미와 발효된 생선 특유의 고소한 감칠맛이 묵직한 흑빵의 산미와 어우러져 묘하게 괜찮았다. 역시 보이는 것 만이 다는 아니었다. 이번에도 한 수 배운다.
          </p>
        </div>
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛺️ 야생 그 자체, 숲속 캠핑</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          기차역에 내린 우리는 철길을 따라 걷다가 별안간 길도 없는 울창한 숲속으로 꺾어 들어갔다. ‘정말 이런 곳에 캠핑장이 있다고?’ 의심할 무렵, 나무들 사이로 웅성거리는 무리가 나타났다. 화장실도, 개수대도 없는 그야말로 100% 날것의 숲. 러시아의 캠핑은 역시나 야생 그 자체였다. 캠핑장은 무슨...
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          오후에 도착한 우리는 해가 지기 전 서둘러 텐트 칠 자리를 물색 해야했다. 하지만 숲의 바닥은 습기를 잔뜩 머금어 푹신하다 못해 질척거렸다. 팩을 아무리 깊게 박아도 흙이 물러서 지지대가 단단히 고정되지 않았다. 해가 지기 전에 어떻게든 형태를 갖춰야 했기에 대충 뼈대를 세우고 얼렁뚱땅 공사를 마무리했다. 텐트 앞에서는 코펠을 꺼내 투박한 요리를 시작했고, 주변 학생들과 자연스럽게 보드카와 음식을 나누며 본격적인 숲속의 밤을 맞이했다.
        </p>
        <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
          야생이나 다름없는 곳이다 보니 깜빡 잊고 챙겨오지 못한 물건이나 부족한 것들이 속출했지만, 그것이 크게 문제 되지는 않았다. 주위의 학생들은 약속이라도 한 듯 너나 할 거 없이 먹을 것부터 캠핑 장비까지 손에 잡히는 모든 걸 아낌없이 나누었다. 누군가는 툭 하고 소시지를 건넸고, 다른 누군가는 부족한 컵 대신 쓰라며 자신의 빈 용기를 내어주었다. 우리도 다른 이들이 필요한 것들을 서슴없이 건넸고 체면 차리지 않고 어느 도움도 아무 거리낌 없이 주고 받았다.
        </blockquote>
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎶 강남스타일 in a Russian Forest</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          보드카 덕분에 기분 좋은 취기가 올랐을 즈음, 캄캄한 숲 깊은 곳에서 심장을 울리는 강렬한 음악 소리가 들려왔다. 소리를 따라 헤치고 들어가니, 나무들에 둘러싸인 제법 널찍한 공터가 나타났다. 그곳엔 조악하지만 그럴싸한 무대와 화려한 조명이 설치되어 있었다. 사회자로 보이는 학생의 우렁찬 환영 인사와 함께 모스크바 국립대의 구호가 밤하늘에 울려 퍼졌고, 광란의 파티가 시작되었다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          술과 음악, 그리고 젊음이 뒤엉킨 숲속의 클럽. 서로의 이름도 모른 채 어깨동무를 하고 정체불명의 춤을 추며 놀던 그때, 스피커에서 익숙한 전주가 흘러나왔다. 바로 싸이의 ‘강남스타일’이었다. 이역만리 러시아의 캄캄한 숲속에서 수백 명의 러시아 학생들과 다 함께 말춤을 추게 될 줄이야. 벅차오르는 반가움과 묘한 자부심에 취해 그 어느 때보다 열정적으로 뛰놀았다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          한바탕 춤판을 벌이고 나니 금세 허기가 졌다. 공터 한편에 모닥불을 피워놓고 모여 앉은 무리가 있길래 자연스럽게 틈에 끼어들었다. 주변에 굴러다니는 나뭇가지 끝에 소시지를 푹 꽂아 타닥타닥 타오르는 장작불에 구워 먹는 맛은 그야말로 일품이었다. 타국에서 만난 친구들과 불멍을 하며 서툰 대화를 나누는 밤은 낭만으로 가득했다.
        </p>
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛺️ 인간 김밥이 되다</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 낭만은 거기까지였다. 텐트로 돌아와 보니, 아까부터 불안불안하던 텐트는 이미 피사의 사탑처럼 기우뚱해져 있었다. 이미 알코올과 피곤에 절어있던 우리는 ‘에라 모르겠다’는 심정으로 러시아인 친구, 지인, 그리고 나까지 셋이서 위태로운 텐트 안으로 기어들어 갔다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          나와 텐트를 짝꿍처럼 쓰게 된 러시아인 친구는 자신의 주량을 한참 오버한 게 분명했다. 녀석은 자는 내내 "우욱" 소리와 함께 주기적으로 밖으로 뛰쳐나갔다. 자다가 깨는 것까지는 참을 만했는데, 진짜 문제는 녀석이 구토를 마치고 들어올 때마다 안 그래도 부실한 텐트 지지대를 자꾸 툭툭 건드린다는 것이었다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          "야... 텐트 무너진다..." 나의 애원에도 녀석은 아랑곳하지 않았다. 결국 다음 날 아침 눈을 떴을 때, 우리 셋은 텐트라는 공간 안에 누워있는 것이 아니라, 폭삭 주저앉은 텐트 천을 이불처럼 덮고 자는 '인간 김밥' 신세가 되어 있었다.
        </p>
        <blockquote class="text-center font-serif text-xl text-russia-blue my-10 border-y-2 border-slate-100 py-8 leading-relaxed">
        돌이켜보면 뼛속까지 야생적이고 날것 그대로였던 오리엔테이션이었다. 한국의 MT와는 차원이 다른, 진흙탕과 보드카, 그리고 무너진 텐트가 버무려진 진짜 생존 캠핑. 한국에서도 안 해본 대학 오리엔테이션을, 나는 이 낯선 러시아의 숲속에서 평생 잊지 못할 만큼 징하게 치러냈다.
        </blockquote>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          I heard from the class leader that there would be a physics department orientation. It was said to be held at a forest campground somewhere in the suburbs of Moscow. It was also said to be quite large, as it was an orientation for the entire physics department, not just our nuclear physics department. Since most of my classmates were going, my acquaintance and I decided to join them, half out of curiosity and half in anticipation.
        </p>
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🛒 Stocking Up on Combat Rations</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The first meeting point was a large supermarket near the train station. It was to stock up on 'combat rations' before heading into the wild. The sight of groups of people with their own tents and sleeping bags, filling their carts with vodka, beer, meat, bread, and sausages, was truly a spectacle. With our hands full of luggage, we boarded a Moscow suburban commuter train (or suburban railway) called an 'elektrichka (Электричка)'.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The train looked old and creaky, but once it started running, it boasted a speed that was completely different from what I had expected. Unlike its clunky exterior, its momentum as it relentlessly crossed the vast Russian plains was tremendous, and the scenery outside the window was so fast that it felt like it was being sucked backward. During the two-hour journey, instead of the urban landscape of Moscow, an endless birch forest sped by outside the window.
        </p>
        <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue my-6">
          <p class="leading-relaxed text-slate-700">
          When I was getting hungry, a friend put a piece of oil-cured fish on a piece of black bread and handed it to me. It was Selyodka (Сельдка, pickled herring), which Russians love most as a vodka snack. I hesitated for a moment at the shocking visual of the slippery, fishy-looking silver cross-section, but out of curiosity and consideration for my friend's sincerity, I closed my eyes and took a bite. Contrary to my expectation that it would smell fishy, the salty taste of the sea and the savory taste unique to fermented fish combined with the acidity of the heavy black bread was strangely good. As expected, what you see is not all there is. I learned a lesson again this time.
          </p>
        </div>
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛺️ The Wild Itself, Camping in the Woods</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After getting off at the train station, we walked along the railroad tracks and then suddenly turned into a dense forest with no path. Just as I was wondering, 'Is there really a campground in a place like this?', a crowd of people appeared among the trees. It was a 100% raw forest with no toilets or sinks. Russian camping was indeed the wild itself. What campground...
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          We arrived in the afternoon and had to hurry to find a place to pitch our tent before the sun went down. However, the forest floor was so damp that it was not just soft, but muddy. No matter how deep I hammered the pegs, the soil was so soft that the supports would not stay firm. We had to have some form of shelter before sunset, so we roughly set up the frame and finished the construction in a hurry. In front of the tent, we took out a mess kit and started cooking a simple meal, and we greeted the forest night in earnest by naturally sharing vodka and food with the surrounding students.
        </p>
        <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
          Since it was a place no different from the wild, there were a lot of things we forgot to bring or were short of, but that wasn't a big problem. The students around us, as if by appointment, shared everything they had in their hands, from food to camping gear. Someone casually handed me a sausage, and another gave me their empty container to use instead of a cup. We also gave others what they needed without hesitation and gave and received help without any hesitation or saving face.
        </blockquote>
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎶 Gangnam Style in a Russian Forest</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Just as I was getting pleasantly drunk on vodka, I heard a loud, heart-pounding music coming from deep in the dark forest. I followed the sound and came to a fairly spacious clearing surrounded by trees. There was a crude but plausible stage and colorful lights installed there. With a loud welcome from a student who seemed to be the MC, the slogan of Moscow State University echoed through the night sky, and a frantic party began.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          A club in the woods where alcohol, music, and youth were intertwined. At that time, when we were dancing with our arms around each other's shoulders without even knowing each other's names, a familiar intro flowed from the speakers. It was Psy's 'Gangnam Style.' I never thought I would be doing the horse dance with hundreds of Russian students in a dark forest in a foreign country, Russia. Drunk on the overwhelming joy and a strange sense of pride, I danced more passionately than ever before.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          After a round of dancing, I quickly got hungry. There was a group of people sitting around a bonfire in a corner of the clearing, so I naturally joined them. The taste of sausages skewered on the ends of tree branches lying around and grilled over the crackling bonfire was truly exquisite. The night of talking with friends I met in a foreign country while staring at the fire was full of romance.
        </p>
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛺️ Becoming a Human Gimbap</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          But the romance ended there. When I returned to the tent, the tent, which had been unstable for a while, was already leaning like the Leaning Tower of Pisa. Already soaked in alcohol and fatigue, we crawled into the precarious tent with a 'whatever' attitude, the three of us: my Russian friend, my acquaintance, and me.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          My Russian friend, who had become my tent buddy, had clearly drunk far beyond his limit. Throughout the night, he would periodically run outside with a "blech" sound. I could tolerate waking up, but the real problem was that every time he came back after vomiting, he would keep bumping into the already flimsy tent supports.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          "Hey... the tent is going to collapse..." Despite my pleas, he didn't care. In the end, when we woke up the next morning, the three of us were not lying in a tent, but in the state of 'human gimbap,' sleeping with the collapsed tent fabric as a blanket.
        </p>
        <blockquote class="text-center font-serif text-xl text-russia-blue my-10 border-y-2 border-slate-100 py-8 leading-relaxed">
        Looking back, it was an orientation that was wild and raw to the bone. It was a real survival camping mixed with mud, vodka, and a collapsed tent, on a different level from a Korean MT (membership training). I had never even been to a university orientation in Korea, but I went through this one in a strange Russian forest so intensely that I will never forget it for the rest of my life.
        </blockquote>
      `}},{id:"post-203",title:{ko:"교양과목",en:"Elective Courses"},subtitle:{ko:"러시아 대학의 시간표, 교양과목에 숨겨진 이야기",en:"The Story Behind the Timetable and Elective Courses at a Russian University"},imageUrl:"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          소련이 붕괴한지도 20년이 넘었지만 여전히 러시아에는 소련의 잔재를 많이 느낄 수 있다. 2화에서도 잠시 소개했지만 러시아 대학의 시간표 또한 우리가 아는 그것과는 사뭇 다르다. 요즘 한국에서는 중고등학생도 선택과목을 선호도 혹은 전략적으로 스스로 선택한다는데, 러시아에서는 대학생들 조차 학과에서 일괄적으로 배정해 주는 시간표를 군말 없이 따라야 하는 구조다. 😥
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          전공 필수 과목들이 빽빽하게 박힌 시간표를 보면 숨이 턱 막히기도 하지만, 그나마 숨통이 트이는 지점은 매 학기 다른 학과의 전공 중 하나를 골라 들을 수 있는 ‘자유 선택 과목’이다. 많은 과목 중에 내 눈에 ‘핵화학’이라는 과목이 들어왔다. 학부시절 화학을 공부했고 지금 핵물리학을 공부하기에 이처럼 거저먹는 과목도 없다는 생각이 들었다. 🧪 그리고 러시아 ‘동무’들이 공부가 수월해 학점을 거저 받을 수 있다는 말에 혹해 다같이 ‘지리학’을 선택했다. 🗺️
        </p>

        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
          <p class="leading-relaxed text-slate-800">
            당시 통번역학과에 재학 중이던 아내에게는 지리학은 정말 쉽고 어려운 부분은 같이 듣는 러시아 친구들이 도와줄 거라며 달콤한 말로 꼬드겨 같은 수업을 듣게 했다. 👩‍❤️‍👨 사실 강의 내용을 완벽히 이해하기보다는 그저 아내와 나란히 앉아 있는 시간이 좋았다. 잘 알아듣지는 못했지만 그래도 수업 시간에 아내와 함께 앉아 있으니 CC(Campus Couple)가 된것 같은 기분도 들긴했다. 💑
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📖 현대물리학의 역사: 지적 전쟁의 시대</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          선택 과목 외에 지정된 교양 과목들도 거쳐야 했다. 그중 첫 학기에 들었던 ‘현대물리학의 역사’는 꽤나 깊은 인상을 남겼다. 뉴턴의 고전역학이라는 견고한 성벽을 허물고 전자기학과 양자역학이라는 새로운 세계가 태동하던 시기, 그 혼돈의 시대를 풍미했던 과학자들의 뒷이야기를 다루는 수업이었다. ⚛️ 특히 빛의 이중성을 죽을 때까지 부인했던 고집불통 아인슈타인과, 당대 최고의 천재들이 한자리에 모여 지적 전쟁을 벌였던 ‘제5차 솔베이 회의’에 관한 에피소드는 전공자로서 무척이나 흥미로웠다. 🧑‍🔬 칠판 가득 적히는 수식 뒤에 숨겨진 인간적인 고뇌와 갈등을 엿볼 수 있는 귀한 시간이었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤯 거대한 벽, 러시아 철학</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          또 다른 선택 과목이었던 '러시아 철학'은 나에게 거대한 벽과 같았다. 언어 실력이 계단식으로 오른다고는 하지만, 분야별로 체감되는 난이도는 천차만별이었다. 📈 과학 관련 수업은 익숙한 수식과 라틴어 기반의 단어들 덕분에 이해하기 수월해졌지만, 철학 용어는 도무지 감을 잡을 수 없었다. 수업 시간 중 80% 이상은 안개 속을 헤매는 기분이었지만, ‘얼굴 도장이라도 찍으면 낙제는 면하겠지’라는 절박한 마음으로 강의실 맨 앞줄을 고수했다. 😮‍💨 교수님의 입에서 나오는 단어 중 아는 것만 골라 무작정 노트에 적어 내려갔는데, 나중에 보니 앞뒤 문맥도 맞지 않는 단어들의 나열일 뿐이었다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아 철학의 마지막 관문은 본인이 정한 철학 주제로 10분간 발표하는 것이었다. 🗣️ 내가 살던 거리의 이름이 러시아의 전설적인 수학자 ‘로바체프스키’였는데, 그가 러시아 우주론에 큰 족적을 남겼다는 이야기를 듣고 친숙함에 이끌려 발표 주제를 정했다. 🌌 하지만 막상 준비를 시작하니 머릿속은 하얘졌다. 기억나는 건 대학 시절 교양 수업에서 언뜻 들었던 플라톤의 ‘이데아’ 정도였다. “동굴 속 횃불이 비추는 그림자가 어쩌구...” 하는 희미한 기억을 붙잡고, 며칠 밤을 새워 자료를 뒤져 한 페이지 분량의 원고를 완성했다. 그걸 단어 하나하나 통째로 뇌에 새기듯 외운 덕분에, 다행히 교수님의 인자한 미소와 함께 과목을 잘 마칠 수 있었다. 😊
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🗣️ 피할 수 없는 숙명, 러시아어 수업</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          나 같은 외국인 유학생들에게 러시아어는 피할 수 없는 숙명이다. 첫 학기에는 일주일에 무려 6시간이나 배정되어 비중이 꽤 컸지만, 두 번째 학기에는 4시간, 세 번째 학기에는 2시간으로 서서히 줄어들며 전공에 집중할 시간을 내주었다. 🇷🇺 머리 아픈 물리학 공식과 씨름하다가 러시아어 시간에 오면 마음이 그렇게 평온할 수가 없었다. 🧘 한 반에 학생이 서너 명뿐이라 선생님과 일상적인 대화를 나눌 기회도 많았다. 같은 반 학생들은 모두 물리학과 소속 외국인들이었는데, 우리는 러시아어 논문에 자주 쓰이는 정제된 표현을 배우거나 짧은 과학 지문을 읽고 토론하며 유학 생활의 고충을 나누기도 했다. 💬
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아어 수업이 유독 편안했던 이유는 단순히 전공의 압박에서 벗어났기 때문만은 아니었다. 당시 우리를 가르치셨던 선생님은 우리의 어설픈 러시아어를 인내심 있게 들어주셨을 뿐만 아니라, 본인의 이야기도 재미있게 들려주시곤 하셨다. 한 번은 내가 수업 시간에 조심스럽게 고민을 털어놓은 적이 있다. 러시아인들이 웬지 외국인을 차별하는 듯 하다고 말이다. 마트에서 계산을 하면 점원이 잔돈을 휙휙 던지듯 건네기도 하고, 아직 마감시간이 남았는데도 닫을 시간이라면서 쫓아낸 적도 있다고 했다. 😠
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          내 이야기를 가만히 듣던 선생님은 빙그레 웃으시더니 손사래를 치셨다. 🙅‍♀️ “그건 외국인이라서 그런 게 아니에요. 우리 러시아 사람들은 러시아인끼리도 그래요!”라며 본인이 겪은 기상천외한 에피소드들을 들려주셨다. 🤣 선생님은 아주 교양있는 사람이었음에도 종종 불친절한 사람들을 만나고 가끔은 그들과 설전도 마다하지 않는다고 한다. 🗣️🔥
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          선생님의 이야기를 들으며 우리는 한바탕 크게 웃었고, 그 덕분에 러시아인들에 대해 가졌던 막연한 고정관념과 날 선 오해들을 눈 녹듯 흘려보낼 수 있었다. 😌 돌이켜보면 좋은 선생님이란 단순히 지식을 전달하는 사람이 아니라, 타인의 고민에 깊이 공감하고 그 편견의 벽을 유머로 허물어주는 사람이 아닐까 싶다. 💖 낯선 땅에서 만난 뜻밖의 철학 수업은 강의실 안이 아니라, 선생님과 마주 앉아 나누었던 그 소소한 대화 속에 있었다. ✨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🇬🇧 영국식 영어와 러시아 억양</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아 같은 반 친구들과 영어 수업도 두 학기 수강했다. 모스크바 최고의 명문인 모스크바 국립대(MSU) 학생들이었지만, 영어 실력은 나와 별반 다를 게 없다는 사실에 묘한 동질감을 느꼈다. 😅 한두 명의 특출난 실력자를 제외하면, 문법만 지독하게 파고든 우리네 학생들과 수준이 비슷했다. 다만 특이한 점은 미국식 영어가 아닌 영국식 영어를 원형으로 배운다는 것이었다. 🇬🇧 여기에 러시아인 특유의 투박하고 강한 억양이 합쳐지니 몇몇 단어의 발음은 무척 이질적으로 들려 고개를 갸우뚱하게 만들기도 했다. 🤔
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          수업 방식은 문법과 회화를 두루 다루었다. 한국에 ‘성문 종합영어’가 있다면, 그들에게는 영국의 옥스포드나 캠브리지 교재를 기반으로 한 특유의 문법 교재가 있었다. 📖 ‘a’와 ‘the’ 같은 관사의 미묘한 차이나, ‘in’, ‘at’, ‘on’ 같은 전치사의 쓰임새를 지독할 정도로 반복 숙달시키는 책이었다. 🧐 영국 영어를 배우다 보니 친구들이 즐겨 보는 문화 콘텐츠도 달랐다. 한국 학생들이 ‘프렌즈’나 ‘모던 패밀리’를 보며 미국식 농담에 웃을 때, 러시아 친구들은 ‘셜록’이나 ‘닥터 후’ 같은 영국 드라마를 보며 베네딕트 컴버배치의 빠른 발음을 따라 하려 애썼다. 🕵️‍♂️ 러시아 땅에서 러시아어로 영어 수업을 듣는 기묘한 상황이 올 줄은 미처 몰랐지만, 그 생경하고 치열했던 시간들도 이제는 웃으며 반추할 수 있는 소중한 추억의 한 페이지가 되었다. 🌟
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          Although it has been over 20 years since the collapse of the Soviet Union, you can still feel many remnants of the Soviet Union in Russia. As I briefly introduced in episode 2, the university timetable in Russia is also quite different from what we know. Nowadays in Korea, even middle and high school students choose their elective subjects based on their preference or strategy, but in Russia, even university students have to follow the timetable assigned by the department without complaint. 😥
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The timetable packed with required major subjects can be suffocating, but the one place where you can breathe is the 'free elective course' where you can choose and take one of the majors from another department each semester. Among the many subjects, the subject of 'Nuclear Chemistry' caught my eye. I thought that since I had studied chemistry in my undergraduate years and was now studying nuclear physics, there would be no other subject that I could get for free like this. 🧪 And I was tempted by the words of my Russian 'comrades' that I could get a good grade for free because the study was easy, so we all chose 'Geography'. 🗺️
        </p>

        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
          <p class="leading-relaxed text-slate-800">
            At that time, my wife, who was a student in the translation and interpretation department, was persuaded with sweet words to take the same class, saying that geography was really easy and that our Russian friends who were taking it together would help with the difficult parts. 👩‍❤️‍👨 To be honest, rather than perfectly understanding the lecture content, I just enjoyed the time I spent sitting next to my wife. I didn't understand much, but sitting with my wife in class still made me feel like we were a CC (Campus Couple). 💑
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📖 The History of Modern Physics: The Age of Intellectual Warfare</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In addition to elective courses, I also had to take designated liberal arts courses. Among them, 'The History of Modern Physics', which I took in my first semester, left a pretty deep impression. It was a class that dealt with the behind-the-scenes stories of the scientists who dominated the chaotic era when the solid walls of Newton's classical mechanics were torn down and a new world of electromagnetism and quantum mechanics was born. ⚛️ In particular, the episode about the stubborn Einstein, who denied the dual nature of light until his death, and the 'Fifth Solvay Conference', where the best geniuses of the time gathered to engage in intellectual warfare, was very interesting as a major. 🧑‍🔬 It was a precious time to get a glimpse of the human anguish and conflict hidden behind the formulas that filled the blackboard.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤯 The Great Wall, Russian Philosophy</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Another elective course, 'Russian Philosophy', was like a huge wall to me. Although it is said that language skills improve in a stepwise manner, the perceived difficulty level varies greatly from field to field. 📈 Science-related classes became easier to understand thanks to familiar formulas and Latin-based words, but I couldn't get a grasp of philosophical terms at all. More than 80% of the class time, I felt like I was wandering in a fog, but I stuck to the front row of the classroom with the desperate thought that 'if I just show my face, I'll at least avoid failing.' 😮‍💨 I just jotted down the words I knew from the professor's mouth in my notebook, but later I found that it was just a list of words that didn't even make sense in context.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The final gateway to Russian philosophy was to give a 10-minute presentation on a philosophical topic of my choice. 🗣️ The name of the street I lived on was 'Lobachevsky', a legendary Russian mathematician, and I was drawn to the topic by its familiarity after hearing that he had left a great mark on Russian cosmology. 🌌 However, when I actually started preparing, my mind went blank. All I could remember was Plato's 'Idea' that I had vaguely heard in a liberal arts class in college. Holding on to the faint memory of "something about the shadow cast by a torch in a cave...", I pulled a few all-nighters, researched materials, and completed a one-page manuscript. Thanks to memorizing it word for word as if I were engraving it on my brain, I was able to finish the course with the professor's benevolent smile. 😊
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🗣️ The Inescapable Fate, Russian Language Class</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          For foreign students like me, the Russian language is an inescapable fate. In the first semester, it was assigned a whopping 6 hours a week, so it was quite a large portion, but in the second semester, it was gradually reduced to 4 hours, and in the third semester, to 2 hours, giving me time to focus on my major. 🇷🇺 When I came to Russian class after struggling with headache-inducing physics formulas, my mind was so peaceful. 🧘 With only three or four students in a class, there were many opportunities to have casual conversations with the teacher. The students in the same class were all foreigners from the physics department, and we learned refined expressions often used in Russian academic papers or read and discussed short science texts, sharing the hardships of our study abroad life. 💬
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The reason why the Russian class was so comfortable was not just because I was free from the pressure of my major. The teacher who taught us at that time not only listened patiently to our clumsy Russian, but also told us her own stories in an interesting way. Once, I carefully confessed my worries in class. I said that I felt that Russians somehow discriminated against foreigners. I said that when I paid at the supermarket, the cashier would sometimes throw the change at me, and that I had been kicked out of a store even though it was not yet closing time, with the excuse that it was closing time. 😠
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The teacher, who was listening quietly to my story, smiled and waved her hands. 🙅‍♀️ "That's not because you're a foreigner. We Russians are like that to each other!" she said, telling us some of her own bizarre episodes. 🤣 Even though she was a very cultured person, she said she often met unfriendly people and sometimes did not hesitate to argue with them. 🗣️🔥
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          We all had a good laugh listening to the teacher's story, and thanks to that, we were able to let go of the vague stereotypes and sharp misunderstandings we had about Russians like melting snow. 😌 Looking back, I think a good teacher is not just someone who conveys knowledge, but someone who deeply empathizes with the worries of others and breaks down the wall of prejudice with humor. 💖 The unexpected philosophy class I encountered in a foreign land was not in the classroom, but in the small conversations I had with the teacher. ✨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🇬🇧 British English and Russian Accent</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I also took two semesters of English classes with my Russian classmates. Although they were students at Moscow State University (MSU), the most prestigious university in Moscow, I felt a strange sense of kinship in the fact that their English skills were not much different from mine. 😅 With the exception of one or two exceptionally skilled students, their level was similar to that of our students who had only dug into grammar. However, the peculiar thing was that they learned British English, not American English, as the original form. 🇬🇧 When the unique, rough, and strong Russian accent was added to this, the pronunciation of some words sounded very heterogeneous, making me tilt my head in confusion. 🤔
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The teaching method covered both grammar and conversation. If Korea has 'Seongmun Comprehensive English', they had their own grammar textbook based on British Oxford or Cambridge textbooks. 📖 It was a book that repeatedly drilled the subtle differences between articles like 'a' and 'the', and the usage of prepositions like 'in', 'at', and 'on' to the point of being tedious. 🧐 As I learned British English, I found that the cultural content that my friends enjoyed was also different. While Korean students laughed at American jokes while watching 'Friends' or 'Modern Family', my Russian friends tried to imitate the fast pronunciation of Benedict Cumberbatch while watching British dramas like 'Sherlock' or 'Doctor Who'. 🕵️‍♂️ I never thought I would be in the strange situation of taking an English class in Russian in Russia, but those unfamiliar and intense times have now become a precious page of memories that I can look back on with a smile. 🌟
        </p>
      `}},{id:"post-203-extra",title:{ko:"✨ 외전 (3) - 러시아 남자들",en:"✨ Side Story (3) - Russian Men"},subtitle:{ko:"불곰 같은 겉모습 속 마트료시카 같은 매력",en:"Matryoshka-like Charm Inside a Bear-like Exterior"},imageUrl:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          러시아 남성들을 떠올리면 흔히들 한 손엔 보드카 병을 쥐고 영하 30도의 눈밭에서 불곰과 씨름을 할 것 같은 거칠고 마초적인 이미지를 상상한다. 실제로 그들은 꽤나 과격하고 무뚝뚝하지만, 사소한 일들에는 굉장히 관대(?) 혹은 무신경하고, 막상 마음의 문을 열면 생각보다 정이 넘치고 친근한 것도 사실이다. 학과 친구들을 제외하면 현지 남성들과 깊게 교류할 기회가 그리 많진 않았지만, 3년의 유학 생활 동안 내 피부로 직접 겪었던 몇 가지 일화를 통해 이 ‘불곰국 형님들’에 대해 단편적으로나마 소개하고자 한다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👊 길거리 격투기 직관? 호전적인 형님들</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바에 살다 보면 지인들의 부탁으로 종종 공항에 픽업을 나갈 때가 있었다. 공항에서 시내까지 택시로 한 시간 남짓 이동하는 동안, 나는 일일 가이드가 되어 모스크바에 대한 이런저런 썰을 풀어드리곤 했다. 나의 단골 레퍼토리 중 하나는 바로 러시아 남자들의 호전성에 대한 경고였다. 거리에서 심심치 않게 주먹다짐을 하는 모습을 볼 수 있다고 주의를 주면, 손님들은 대개 대수롭지 않게 넘겼다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 그 안일한 생각은 택시 창밖을 보면 여지없이 무너지곤 한다. 맹세컨데 러시아에 온 손님들은 공항에서 시내로 돌아올 때, 혹은 시내에서 공항으로 갈 때 둘 중에 한 번은 멱살을 잡고 주먹다짐을 하는 러시아인들의 실전 길거리 격투기(?)를 직관했다. 특히 번잡한 공항이나 기차역 근처에서는 본인의 남성성을 과시하려는 다혈질 형님들이 많아 크고 작은 다툼이 흔하게 일어난다. 🥊
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌙 심야의 지하철, 생존을 위한 팁</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          낮보다 더 조심해야 할 곳은 심야의 지하철역 근처다. 지금은 치안이 아주 많이 나아다고는 하지만, 늦은 밤 보드카에 절어 비틀거리는 러시아 취객을 마주치면 나도 모르게 손발이 떨려온다. 가끔 지하철 안에서 술기운에 시비를 거는 덩치들을 만나기도 하는데, 여기에 팁이 있다면 <span class="text-red-600 font-bold">‘절대 눈을 마주치지 말고 반대 방향으로 도망가라’</span>는 것이다. 🏃‍♂️ 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          싸워서 이길 확률도 희박하거니와, 철없는 유학생들이 밤늦게 술 마시고 배회하다 폭행을 당하거나 금품을 갈취당하는 사건은 교민 사회에서 하도 많이 들어 레퍼토리가 지루할 지경이다. 이국의 밤거리에서는 나의 남성성을 증명하려 들지 말고, 그저 조용히 생존을 택하는 것이 현명하다. 
        </p>
        <div class="bg-slate-50 p-4 my-6 rounded-lg text-sm border-l-4 border-slate-300">
          모스크바 국립대 한인 학생회에서 모스크바 시내 투어를 시켜준 적이 있었는데 한국인 가이드가 전날 술 마시고 돌아다니다가 중앙아시아계 사람들에게 핸드폰과 금품을 빼앗겼다고 들은 적이 있다. 아무렇지 않게 이야기 하는 것으로 보아 한 두번 당해본게 아닌 듯 했는데도, 여전히 늦은 밤 술마시고 돌아다니다니… 그 가이드도 보통내기가 아니었다. 😵
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">❄️ 극한의 쿨함, 사과는 사치다</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          그런데 참 아이러니하게도, 이토록 전투력이 높은 사람들이 일상의 사소한 일에는 무서울 정도로 무덤덤하다. 러시아 지하철 같은 공공장소에서 걷다가 어깨를 아주 세게 부딪히거나 발을 밟혀도, 이들은 좀처럼 뒤돌아보며 화를 내거나 사과를 하지 않는다. 그저 ‘길을 걷다 보면 부딪힐 수도 있지, 잘 가’ 식의 극한의 쿨함(?)이었다. 이들에게 웬만한 물리적 충돌은 삶의 작은 스크래치조차 되지 않는 듯했다. 남의 시선을 1도 신경 쓰지 않고 자기 갈 길만 가는 그 무덤덤함, 삶의 해탈은 그들의 신비로움을 더하기도 하였다. 🧘‍♂️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚂 기차 안에서 피어난 보드카 우정</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          그들의 숨겨진 따뜻한 정을 제대로 느꼈던 건 남부 지역으로 향하는 장거리 기차 안에서였다. 하루는 4인 1실인 '쿠페' 칸을 러시아인 가족(아빠, 엄마, 중학생 딸)과 함께 쓰게 되었다. 나는 2층 침대를 썼고, 그 가족이 1층 두 칸과 남은 2층 한 칸을 사용했다. 시베리아 횡단열차 편에서 소개했듯, 러시아 기차의 룰에 따라 식사 때가 되면 1층 사람들에게 양해를 구하고 테이블을 함께 써야 한다. 자연스럽게 그들 가족의 식사 자리에 합석하게 되었고, 가벼운 대화가 오갔다. 🥪
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          싹싹한 아주머니가 주로 대화를 주도했고, 사춘기 딸은 스마트폰 화면만 뚫어져라 쳐다보기 바빴다. 기차 내에서는 인터넷도 안터지는데 뭘 그렇게 열심히 하는지 신기할 따름이었다. 그때, 창밖만 묵묵히 응시하며 과묵함의 끝을 보여주던 아저씨가 슬그머니 내 쪽을 보며 입을 열었다. <span class="italic text-slate-600">"혹시... 술 좀 할 줄 아나?"</span> 🥃
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          나는 속으로 쾌재를 부르며 "러시아 보드카가 최고 아니겠습니까? 저도 꽤 마십니다"라며 너스레를 떨었다. 그 순간, 아저씨의 굳어 있던 얼굴에 봄바람 같은 화색이 돌더니 짐 가방 깊숙한 곳에서 투명한 보드카 한 병을 마술처럼 꺼내 들었다. 옆에서 아주머니의 날카로운 레이저 눈빛이 내리꽂히는 것이 느껴졌지만, 이미 사나이들의 결의(?)를 막을 순 없었다. 🤝
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔥 사나이들의 결의, 국경을 넘다</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이참에 한국인의 매운(?) 주량을 제대로 보여주리라 마음먹고 한 잔 두 잔, 주거니 받거니 술잔을 부딪쳤다. 언어의 장벽 따위는 독한 알코올이 식도를 타고 넘어가는 순간 하얗게 휘발되어 버렸고, 우리는 이미 국경을 초월한 의형제나 다름없었다. 기어코 순식간에 보드카 한 병이 바닥을 드러내자, 아저씨는 호탕하게 웃으며 내 어깨를 퍽퍽 내리쳤다. “하하! 이 친구, 제대로 마실 줄 아는구먼!” 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          기차가 다음 역에 정차하자마자, 아저씨는 아주머니의 따가운 눈총을 뒤로한 채 승강장으로 튀어 나가 기어이 보드카 한 병을 더 보급해 오는 붉은 열정을 보여주었다. 각자 준비해 온 빵과 소시지를 넉넉하게 나눠 먹으며 밤이 깊도록 술잔을 기울였다. 🥖
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          아저씨가 사 온 보드카마저 동이 났을 때, 나는 직감적으로 ‘아, 이제 내 턴이구나’라는 걸 깨달았다. 아저씨의 융숭한 대접에 보답하고자 다음 정차역에서 살 수 있는 보드카 중 꽤 그럴싸하고 좋은 놈으로 한 병 골라왔다. 병을 건네자 아저씨의 얼굴엔 벅찬 감동이 일렁였다. 얼큰하게 달아오른 술기운에, 다음 날이면 기억도 안 날 온갖 이야기들을 끊임없이 주고받았다. 무뚝뚝한 표정 속에 감춰져 있던 러시아 아버지의 훈훈한 정 덕분에, 끝없이 지루할 뻔했던 시베리아 기차 여행은 내 인생 가장 유쾌한 추억 중 하나로 남았다. ✨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🪆 마트료시카 같은 그들</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          결국 러시아 남자들은 알면 알수록 까도 까도 새로운 매력이 나오는 ‘마트료시카’ 같은 존재들이다. 인형을 열면 그 속에 더 작은 인형이, 또 열면 새로운 인형이 끊임없이 튀어나오는 러시아의 전통 목각 인형 마트료시카처럼 말이다. 겉보기엔 찔러도 피 한 방울 안 나올 것 같은 무뚝뚝한 불곰 형님들이지만, 일단 내 바운더리 안의 사람이라고 인정하는 순간 아낌없이 보드카 잔을 채워주는 츤데레들이다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          돌이켜보면 러시아 사람들도 러시아라는 이 거대한 대륙과 꼭 닮았다. 그저 스쳐 지나가는 겉모습만 봐서는 진짜 속내를 알기 힘들지만, 오랫동안 곁에서 함께 부대끼고 잔을 부딪쳐 봐야 비로소 그 진국 같은 참매력을 온전히 느낄 수 있으니 말이다. 🇷🇺
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          When you think of Russian men, you often imagine a rough and macho image, perhaps wrestling a brown bear in -30 degree snow with a bottle of vodka in one hand. In reality, while they are quite aggressive and blunt, it's also true that they are incredibly generous—or perhaps indifferent—to minor inconveniences, and they are surprisingly warm and friendly once they open their hearts. Aside from my classmates, I didn't have many chances to interact deeply with local men, but through several anecdotes I experienced during my three years of study, I'd like to introduce these 'Brown Bear Country Brothers' in a fragmented way.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👊 Witnessing Street Fighting? The Belligerent Brothers</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Living in Moscow, I often went to the airport for pickups at the request of acquaintances. During the hour-long taxi ride from the airport to the city, I would become a daily guide and tell various stories about Moscow. One of my regular repertoires was a warning about the aggressiveness of Russian men. When I warned them that they could easily see fistfights on the street, guests usually brushed it off.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          However, that complacent thought invariably crumbles when looking out the taxi window. I swear, guests who came to Russia witnessed real-life street fighting(?) between Russians grabbing each other's collars at least once, either on the way from the airport or back to the airport. Especially near busy airports or train stations, small and large fights are common because there are many hot-tempered men trying to show off their masculinity. 🥊
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌙 Midnight Subway, Tips for Survival</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The place to be even more careful than during the day is near subway stations late at night. Although security is said to have improved a lot now, my hands and feet tremble unconsciously when I encounter a Russian drunkard stumbling and soaked in vodka late at night. Sometimes I meet big guys who pick fights in the subway under the influence of alcohol, and if there's a tip, it's <span class="text-red-600 font-bold">'never make eye contact and run in the opposite direction.'</span> 🏃‍♂️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The probability of winning a fight is slim, and stories of immature international students wandering late at night after drinking and being assaulted or having their valuables stolen are so frequent in the Korean community that the repertoire is almost boring. In the night streets of a foreign country, it is wise to choose survival quietly rather than trying to prove your masculinity.
        </p>
        <div class="bg-slate-50 p-4 my-6 rounded-lg text-sm border-l-4 border-slate-300">
          The Moscow State University Korean Student Association once gave a tour of downtown Moscow, and I heard that a Korean guide had his phone and valuables stolen by people of Central Asian descent while wandering around after drinking the night before. Judging by the way he talked about it nonchalantly, it seemed like it wasn't his first time, yet he still wandered around drinking late at night... that guide was quite something. 😵
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">❄️ Extreme Coolness, Apologies are a Luxury</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Ironically, people with such high combat power are terrifyingly indifferent to the minor things of daily life. Even if they bump shoulders very hard or get their feet stepped on while walking in public places like the Moscow subway, they rarely look back in anger or apologize. It was a kind of extreme coolness(?), as if to say, 'You can bump into someone while walking, have a nice day.' To them, most physical collisions didn't seem to leave even a small scratch on their lives. That indifference of just going one's way without caring even 1% about others' eyes, that transcendence of life added to their mystery. 🧘‍♂️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚂 Vodka Friendship Blossoming in a Train</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I truly felt their hidden warm heart in a long-distance train heading to the southern region. One day, I ended up sharing a 4-person 'kupe' (compartment) with a Russian family (father, mother, and middle school daughter). I used a top bunk, and the family used the two bottom bunks and the remaining top bunk. As introduced in the Trans-Siberian Railway episode, according to the rules of Russian trains, when it's time for a meal, you must ask for permission from the people on the first floor to use the table together. Naturally, I joined their family's mealtime, and light conversation ensued. 🥪
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The sociable lady mainly led the conversation, while the adolescent daughter was busy staring only at her smartphone screen. I was curious what she was doing so diligently since the internet doesn't even work in the train. At that moment, the man, who had been showing the height of reticence by silently staring only out the window, looked slightly toward me and opened his mouth. <span class="italic text-slate-600">"Do you... know how to drink a little?"</span> 🥃
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          I cheered internally and joked, "Isn't Russian vodka the best? I drink quite a bit too." At that moment, the man's frozen face turned as bright as a spring breeze, and he magically pulled out a bottle of clear vodka from deep inside his luggage. I felt the sharp laser-like gaze of the lady beside him, but nothing could stop the resolve(?) of men anymore. 🤝
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔥 Men's Resolve, Crossing Borders</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I decided to show them the spicy(?) drinking capacity of Koreans and clinked glasses back and forth, one glass, two glasses. The language barrier evaporated into white the moment the strong alcohol slid down the esophagus, and we were already no different from sworn brothers who had transcended borders. When the bottle of vodka finally revealed its bottom in an instant, the man laughed heartily and slapped my shoulder hard. "Haha! This guy, you really know how to drink!"
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          As soon as the train stopped at the next station, the man showed his red passion by running out to the platform and bringing one more bottle of vodka, leaving behind the lady's stinging glare. We shared the bread and sausages we had each prepared and tilted our glasses until late at night. 🥖
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          When even the vodka the man bought ran out, I instinctively realized, 'Ah, now it's my turn.' To repay the man's generous hospitality, I picked out a pretty decent and good bottle of vodka available at the next stop. When I handed him the bottle, a wave of deep emotion flickered on his face. In the drunken state of being tipsy, we continuously exchanged all sorts of stories that we wouldn't even remember the next day. Thanks to the warm heart of a Russian father hidden behind a blunt expression, the Siberian train journey, which could have been endlessly boring, remained one of the most pleasant memories of my life. ✨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🪆 Like a Matryoshka</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In the end, Russian men are like 'Matryoshkas,' where the more you know them, the more new charms come out. Just like the traditional Russian wooden doll Matryoshka, where when you open a doll, a smaller one pops out, and when you open it again, a new one keeps popping out. They look like blunt brown bear brothers who wouldn't bleed even if pricked, but they are 'tsunderes' who generously fill up vodka glasses the moment they recognize you as someone within their boundary.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Looking back, Russian people also closely resemble this vast continent of Russia. It's hard to know their true inner feelings just by looking at their passing exterior, but you can only fully feel their genuine, rich charm after rubbing shoulders and clinking glasses with them for a long time. 🇷🇺
        </p>
      `}},{id:"post-204",title:{ko:"전공과목",en:"Major Subjects"},subtitle:{ko:"러시아 학위 시스템과 혹독했던 전공 수업 이야기",en:"The Russian Degree System and the Story of a Harsh Major Class"},imageUrl:"https://s3.youthkiawaaz.com/wp-content/uploads/2013/07/06214745/subjects1.jpg",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          서양의 시스템을 가져온 우리에게는 학사, 석사, 박사 이런 식의 프로그램이 익숙하지만 러시아에서는 그들만의 프로그램이 있다. 가장 먼저 마주하게 되는 생소한 이름은 석사과정과 비슷한 <strong>‘스페셜리스트(Специалист)’</strong> 과정이다. 🎓 이는 4년제 학사와 2년제 석사를 묘하게 섞어놓은 5년(혹은 5.5년) 과정의 학위다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          박사 과정으로 넘어가면 이름표는 더 복잡해진다. 🤯 우리가 흔히 Ph. D.라고 알고 있는 명칭 대신 두 단계의 박사 학위가 존재한다. 첫 번째는 <strong>깐디다트 (Кандидат наук)</strong>, 직역하면 <strong>‘후보 박사’</strong>라는 겸손한 명칭이지만, 국제적으로는 일반적인 박사과정(Ph.D.)로 인정받는다. 하지만 그 위에는 <strong>진정한 끝판왕</strong>인 <strong>독또르(Доктор наук)</strong>가 버티고 있다. 👑 깐디다트 학위를 취득 후에도 수년간 독창적인 연구 업적을 쌓아야만 도전할 수 있는 이 학위 소지자들은 학계에서 거의 <strong>‘살아있는 전설’</strong> 대접을 받는다. 아마 서구식 시스템에 비슷한 예를 찾아보자면 정년보장 교수 (Tenured Faculty) 그 이상이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📜 볼로냐 프로세스와 새로운 물결</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          어쨌든 이렇게 우리와는 사뭇 다른 독자적인 시스템을 고수해 왔지만, 글로벌 시대의 흐름까지 거스를 수는 없었다. 🌊 러시아 학위가 해외에서 온전히 인정받지 못하거나 교류에 차질이 생기는 일이 잦아지자, 서방의 시스템을 도입해야 한다는 목소리가 커지기 시작했다. 결국 러시아는 2003년, 유럽의 학위 표준화 체계인 <strong>‘볼로냐 프로세스’</strong>에 가입하며 대대적인 수술에 들어갔다. 👨‍⚕️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          이 과정에서 탄생한 것이 바로 우리에게 익숙한 4년제 학사와 2년제 석사(Магистратура) 시스템이다. 전통적인 5년제 ‘스페셜리스트’ 과정이 굳건히 자리 잡고 있던 러시아 학계에 서구식 석사 프로그램이 이식된 것이다. 모스크바 국립대학교(MSU) 역시 1990년대 초반부터 일부 학과에서 시범적으로 석사 과정을 운영하며 간을 보긴 했지만, 공식적으로 볼로냐 시스템에 맞춰 학사와 석사를 분리해 본격적으로 운영하기 시작한 것은 2011년부터다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😵‍💫 혼돈의 ‘대학교 5학년’</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          내가 공부하던 2015년은 이 새로운 프로그램이 도입된 지 얼마 되지 않아 교정 곳곳에 혼란이 가득했다. 학기 초면 시간표가 갈대처럼 휘날리며 바뀌기 일쑤였고, 이름만 석사지 연구보다는 수업량이 압도적이어서 사실상 <strong>‘대학교 5학년’</strong>이나 다름없었다. 특히 핵물리학 기초가 부족했던 나는 토요일 오전마다 엄하기로 소문난 할머니 교수님의 기초핵물리학 수업을 들어야 했다. 👵 금요일 밤이면 숙제와 씨름하느라 유학생의 낭만 따위는 챙길 겨를이 없었지만, 그 혹독한 <strong>‘복지 희생’</strong> 덕분에 지식만큼은 빠른 속도로 습득할 수 있었다. 💪
        </p>
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p class="leading-relaxed text-slate-800">
                수강 과목 중에는 ‘천체입자물리학’이라는 뜻밖의 보석도 있었다. 💎 빅뱅 이후 입자들이 어떻게 별을 만드는지 배우는 이 과목은 82세의 정정한 할아버지 교수님이 강의하셨는데, 마치 우주 탄생 신화를 들려주는 할아버지의 옛날이야기 같아 무척 흥미로웠다. ✨ 다만, 지식의 습득량은 숙제의 양과 비례한다는 교수님의 철학 덕분에 숙제 지옥에서는 벗어날 수 없었다. 😈
            </p>
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          여담으로 내 지인은 이 교수님이 지도교수였는데 졸업 전에 혹시라도 무슨 변(?)이라도 당하실까 봐 매일 가슴을 졸이며 공부했다. 한국에 갔다올때마다 홍삼이던 뭐든 건강에 좋을만한 건강보조제를 사왔고 그 덕인지 다행히 교수님도 건강하셨고 지인도 무사히 졸업장에 도장을 찍을 수 있었다. 🙏
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💥 재앙과 깨달음의 시간</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          유럽입자물리연구소(CERN)의 자료로 힉스 입자를 다루던 수업도 기억에 남는다. 당시 힉스 입자는 존재가 증명된 지 얼마 되지 않아 모든 데이터가 안개 속이었다. 🌫️ 덕분에 시험 문제의 정답은 언제나 “~로 알려져 있다”라는 모호한 문장으로 끝맺음하곤 했다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          반면, <strong>‘초끈이론’</strong> 수업은 그야말로 재앙이었다. 💥 교수님을 찾아가도 이해할 수 없는 기괴한 수식들의 향연에 결국 시험을 망치고 말았는데, 알고 보니 외국인 학생은 들을 필요가 없는 과목이 시간표 오류로 들어간 것이었다. 성적표에서는 사라졌지만, 그 대가로 다른 과목을 추가로 들어야 했으니 <strong>‘조삼모사’</strong>가 따로 없었다. 🐒
        </p>

        <div class="bg-yellow-50 border-t-4 border-b-4 border-yellow-200 p-6 my-8 text-center">
            <p class="text-yellow-900 leading-relaxed">
                처음에는 내가 러시아어가 서툴러서 잘 이해를 못하는지 알았다. ‘단어만 조금 더 알면, 교수님의 농담 섞인 비유만 알아들으면 이 복잡한 수식들이 마법처럼 풀리지 않을까’ 하는 일말의 희망을 품고 사전을 뒤적였다. 📖 하지만 시간이 흐를수록 깨달은 잔인한 진실은, 초끈이론이나 힉스 입자 같은 녀석들은 모국어인 한국어로 배웠어도 똑같이 이해가 안 갔을 놈들이라는 사실이었다. 언어는 그저 거들 뿐, 물리학의 심오함 앞에서는 러시아인 동기들이나 나나 공평하게 머리를 쥐어뜯고 있었다. 🤯
            </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧗 학문의 장벽을 넘어서</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          결국 언어의 장벽보다 높았던 것은 학문의 장벽이었지만, 아이러니하게도 그 장벽을 넘기 위해 몸부림쳤던 시간들이 나를 성장시켰다. 사전에도 나오지 않는 물리 용어들을 노트 구석에 빼곡히 적어 넣고, 러시아 친구들과 서툰 러시아어로 “이 수식이 도대체 왜 이렇게 되는 거지?”라며 토론하던 그 밤들이 모여 (물론 토론이라 하기에는 보통 내가 묻고 그들이 답했지만) 나의 유학 생활을 지탱하는 단단한 뼈대가 되었다. 💪 무엇보다 어느 정도 전공 관련 단어들이 익숙해 지게 되니 소설은 읽을 줄 몰라도 전공 관련 논문은 꾸역꾸역 읽어 나갈 수 있게 되었다. 📜
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          생소한 나라에서 겨우 1~2년 배운 언어로 전문 지식을 완벽히 습득하기란 불가능에 가까운 일이었을지도 모른다. 하지만 칠판을 가득 채운 기괴한 수식들 사이에서 길을 잃기도 하고, 엉뚱한 과목을 듣느라 헛걸음을 하기도 했던 그 모든 시행착오가 결국은 ‘나’라는 책의 소중한 한 페이지가 되었다. 📖
        </p>
        <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
          앤젤라 더크워스는 그녀의 저서 <strong>‘그릿’</strong>에서 천재성보다 중요한 것은 장기적은 목표를 향한 열정과 끈기라고 했다. 돌이켜보면 모스크바에서의 시간은 나에게 물리학 지식 그 이상을 가르쳐주었다. 완벽한 이해보다 중요한 것은 낯선 세계에 뛰어들어 끝까지 자리를 지켰던 그 끈기, 즉 ‘그릿’이었음을 이제는 선명한 기억으로 확신할 수 있다.
        </blockquote>
        <p class="leading-relaxed mb-6 text-slate-700">
          비록 강의실 칠판에 적혔던 수식들은 희미해졌을지 몰라도, 포기하지 않고 그 시간을 버텨낸 근성만큼은 내 삶의 지치지 않는 동력으로 깊이 각인되어 있다. 🔥
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          For those of us who have adopted the Western system, programs like bachelor's, master's, and doctoral degrees are familiar, but in Russia, they have their own programs. The first unfamiliar name you will encounter is the <strong>'Specialist (Специалист)'</strong> program, which is similar to a master's program. 🎓 This is a 5-year (or 5.5-year) degree program that is a strange mix of a 4-year bachelor's degree and a 2-year master's degree.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          When you move on to the doctoral program, the name tags become even more complicated. 🤯 Instead of the designation we commonly know as Ph.D., there are two stages of doctoral degrees. The first is the <strong>Kandidat nauk (Кандидат наук)</strong>, which literally translates to <strong>'Candidate of Sciences'</strong>, a humble title, but it is internationally recognized as a regular doctoral program (Ph.D.). However, above that is the <strong>true final boss</strong>, the <strong>Doktor nauk (Доктор наук)</strong>. 👑 Holders of this degree, which can only be challenged after accumulating years of original research achievements even after obtaining the Kandidat degree, are treated almost like <strong>'living legends'</strong> in the academic world. Perhaps a similar example in the Western system would be a tenured faculty member, or even more.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📜 The Bologna Process and the New Wave</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In any case, although they have maintained this unique system that is quite different from ours, they could not go against the trend of the global era. 🌊 As Russian degrees were not fully recognized abroad or as problems arose in academic exchanges, voices calling for the adoption of the Western system began to grow louder. Eventually, in 2003, Russia joined the <strong>'Bologna Process'</strong>, the European degree standardization system, and underwent a major overhaul. 👨‍⚕️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          It was in this process that the 4-year bachelor's and 2-year master's (Магистратура) systems, which are familiar to us, were born. The Western-style master's program was transplanted into the Russian academic world, where the traditional 5-year 'specialist' program was firmly established. Moscow State University (MSU) also began to operate a master's program on a trial basis in some departments from the early 1990s, but it was not until 2011 that it officially began to separate the bachelor's and master's programs in accordance with the Bologna system and operate them in earnest.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😵‍💫 The Chaos of 'University 5th Grade'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In 2015, when I was studying, this new program had only been introduced for a short time, so there was a lot of confusion on campus. At the beginning of the semester, the timetable would change like a reed in the wind, and although it was called a master's program, the amount of coursework was overwhelming compared to research, so it was practically no different from <strong>'university 5th grade'</strong>. In particular, since I lacked a foundation in nuclear physics, I had to take a basic nuclear physics class every Saturday morning from a strict old grandmother professor. 👵 On Friday nights, I had no time for the romance of a foreign student because I was struggling with homework, but thanks to that harsh <strong>'welfare sacrifice'</strong>, I was able to acquire knowledge at a rapid pace. 💪
        </p>
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p class="leading-relaxed text-slate-800">
                Among the courses I took, there was also an unexpected gem called 'Astroparticle Physics'. 💎 This course, which taught how particles create stars after the Big Bang, was taught by a spry 82-year-old grandfather professor, and it was very interesting, like an old story of a grandfather telling the myth of the birth of the universe. ✨ However, thanks to the professor's philosophy that the amount of knowledge acquired is proportional to the amount of homework, I could not escape from homework hell. 😈
            </p>
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          As an aside, my acquaintance's advisor was this professor, and he studied with a heavy heart every day, worried that something might happen to him before graduation. Whenever he went to Korea, he would buy health supplements that would be good for his health, such as red ginseng, and thanks to that, fortunately, the professor was healthy and my acquaintance was able to get his diploma stamped safely. 🙏
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💥 A Time of Disaster and Enlightenment</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I also remember a class that dealt with the Higgs boson using data from CERN. At that time, the existence of the Higgs boson had only been proven for a short time, so all the data was in a fog. 🌫️ Thanks to this, the correct answer to the exam questions was always concluded with the ambiguous sentence, "It is known that...".
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          On the other hand, the <strong>'superstring theory'</strong> class was a disaster. 💥 Even when I went to see the professor, I couldn't understand the feast of bizarre formulas, and in the end, I failed the exam. It turned out that a course that foreign students didn't need to take had been entered into the timetable by mistake. Although it disappeared from my transcript, I had to take another course as a price, so it was a case of <strong>'robbing Peter to pay Paul'</strong>. 🐒
        </p>

        <div class="bg-yellow-50 border-t-4 border-b-4 border-yellow-200 p-6 my-8 text-center">
            <p class="text-yellow-900 leading-relaxed">
                At first, I thought I didn't understand because my Russian was not good. I rummaged through the dictionary with a glimmer of hope that 'if I just knew a few more words, if I could just understand the professor's jokes and metaphors, these complicated formulas would magically solve themselves.' 📖 However, the cruel truth I realized over time was that things like superstring theory and the Higgs boson would have been just as incomprehensible even if I had learned them in my native Korean. Language was just a helping hand; in the face of the profundity of physics, my Russian classmates and I were all tearing our hair out equally. 🤯
            </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧗 Overcoming the Barrier of Academia</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In the end, the barrier of academia was higher than the barrier of language, but ironically, the time I spent struggling to overcome that barrier was what made me grow. The nights I spent writing down physics terms that weren't even in the dictionary in the corner of my notebook and discussing with my Russian friends in clumsy Russian, "Why on earth is this formula like this?" (although it was usually me asking and them answering) became the solid backbone that supported my life as a student abroad. 💪 Most importantly, once I became familiar with some major-related vocabulary, I was able to trudge through major-related papers even if I couldn't read novels. 📜
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          It might have been close to impossible to perfectly acquire specialized knowledge in a language I had only learned for 1-2 years in a foreign country. However, all the trial and error of getting lost among the bizarre formulas that filled the blackboard and taking the wrong course in vain eventually became a precious page in the book of 'me'. 📖
        </p>
        <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
          Angela Duckworth said in her book <strong>'Grit'</strong> that more important than genius is passion and perseverance towards a long-term goal. Looking back, my time in Moscow taught me more than just physics knowledge. I can now say with a clear memory and conviction that more important than perfect understanding was the perseverance of jumping into a strange world and staying there until the end, that is, 'grit'.
        </blockquote>
        <p class="leading-relaxed mb-6 text-slate-700">
          Although the formulas written on the classroom blackboard may have faded, the grit of enduring that time without giving up is deeply engraved in my life as an untiring driving force. 🔥
        </p>
      `}},{id:"post-205",title:{ko:"나홀로 러시아 여행",en:"Traveling Alone in Russia"},subtitle:{ko:"익숙함 너머의 낯선 매력, 러시아 시골 탐방기",en:"The Unfamiliar Charm Beyond the Familiar, a Tour of the Russian Countryside"},imageUrl:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FdFycX4%2FbtrHp5ZCM45%2FAAAAAAAAAAAAAAAAAAAAAI9BUg4b5pYcZrw6XfyPuGzogBZIirKEp3_xCDoMcM3l%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1772290799%26allow_ip%3D%26allow_referer%3D%26signature%3DhYboyGd7lXQODlRu1cj2xkLI35g%253D",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          학생이라면 누구나 기다리는 방학이 찾아왔다. 러시아도 한국과 마찬가지로 대학마다 과마다 시험 기간이 제각각이고 기말고사 마지막 날이 곧 공식적인 방학의 시작이었다. 운이 좋게도 우리 과는 아내가 다니는 통번역 학과를 포함한 다른 학과보다도 기말고사가 일찍 끝나 이른 방학을 맞이했다. 모처럼 찾아온 휴가에 어디라도 떠나고 싶었지만, 아내는 집이 좋다며 <strong>요지부동이었다.</strong> 🏡 그래서 2주 남짓 되는 방학기간 동안 첫 일주일은 평소 친하게 지내던 러시아 친구들의 고향집을 방문해 보기로 했다. 두 러시아 친구는 언어 교환으로 친해졌는데, 각각 카브로프와 쿠르가닌스크라는 작은 도시 출신으로 모스크바에서 공부 중이었다. 광활한 대륙에 사는 그들의 기준에서 한국은 아주 작은 나라일텐데 한국어를 배운다는 게 너무 신기했다. <strong>한류 만세!</strong> 🇰🇷🎉
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">러시아 시골로의 고난(?)의 여정 🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          2015년 연말 아침, 새벽같이 일어나서 기차역에서 러시아인 친구를 만났다. 친구는 블라디미르 주에 위치한 카브로프라는 인구 약 13만 명 내외의 작은 도시에 사는데, 도시가 작아서 그런지 모스크바에서 카브로프로 직행하는 기차가 자주 있지는 않았다. 시간을 너무 지체할 수 없어서 한 번에 가는 기차 대신 번거롭더라도 환승 교통수단을 이용하기로 했다. 일단 일렉트리치카(근교/교외 열차)를 타고 모스크바에서 블라지미르라는 제법 큰 도시로 향했다. 여기서도 카브로프로 가는 기차가 당일에 없어서 버스를 타고 카브로프로 향했다. 자동차로 운전하면 약 4시간 정도 걸리는데, 작은 마을을 대중교통을 이용해서 가려니 <strong>여간 불편한 게 아니었다.</strong> 😩
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">생각보다 맛있었던 러시아 가정식 🍲</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          친구 집에 도착해서는 당연한 말이지만 러시아식으로 점심 식사를 했다. 러시아식 만두인 <strong>뺄매니</strong>와 고기 수프인 <strong>보르쉬</strong>, 여기에 오이 피클을 곁들여 먹었다. 사실 생각보다 <strong>맛있어서 많이 놀랐다.</strong> 😮 러시아에서 음식을 사먹어 본 경험에 비추어 보면 외식의 기억이 그렇게 좋지만은 않았기 때문이다. 러시아인들조차 맛있는 음식을 먹으려고 외식하는 경우는 많지 않다고 한다. 오히려 많은 사람들이 모여야 하거나 집에서 대접을 할 수 없는 경우 외식을 한단다. 제일 좋은 음식은 다차(дача)라는 시외곽의 별장에서 직접 가꾸고 바로 길러 먹는 그런 음식이라고들 하니까. 어쨌든 러시아 음식에 대한 나의 편견을 보기 좋게 깨준, 단출하지만 정갈하고 깔끔한 점심이 <strong>무척이나 마음에 들었다.</strong> 🥰
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">카브로프 도시 구경과 예상치 못한 만남, 곶감! 🍊</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이제 밖으로 나와서 도시 구경을 시작했다. 친구가 다녔던 학교를 보며 학창 시절에 대해서 이야기 했고, 작지만 있을 건 다 있다는 전통 시장에 가서 구경을 했다. 그 중에 내 눈길을 끄는 물건이 있었는데 바로 <strong>말린 곶감이었다.</strong> 🧡 이 곳 사람들도 곶감을 만들어서 먹는다는 사실에 한 번 놀랐고, 놀라울 정도로 한국의 그것과 비슷한 맛에 <strong>두 번 놀랐다.</strong> 😲 참고로 카프로프라는 도시 이름은 러시아어로 카펫을 뜻하는 코뵤르(Ковёр)에서 유래했는데 그래서인지 지금도 러시아 내에서는 카펫이나 섬유, 정장이 아주 유명하다고 한다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">끝나지 않는 러시아인들의 산책 사랑 🚶‍♀️🚶‍♂️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          다음은 공원 산책이었다. 러시아인들의 산책 사랑은 정말 <strong>유별난 것으로 유명하다.</strong> 그래서 친구에게 배가 고프니 산책은 적당히 하고 밥 먹으러 가자고 미리 언질을 했다. 이렇게 하지 않으면 내가 그만 살려달라고 <strong>애원할 때까지 산책을 하는 게 러시아인들이다.</strong> 🥺 친구가 나를 데려간 공원은 작은 도시치고 꽤 면적도 넓고 볼거리도 많았다. 작은 놀이공원과 예전에 친구가 다녔다는 문화센터와 근사한 식당도 있었다. 이 동네 맛집이라기에 들어갔는데 <strong>사람은 우리 말고 없었다.</strong> 🤷‍♀️ 가격도 저렴하고 음식 맛도 훌륭했는데 아마 연말이라 다들 집에서 저녁을 보내느라 사람이 없는 듯 했다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">러시아 국민 간식, 콘지테르스카야 깔바싸 🍫</h3>
        <div class="relative w-full h-80 mb-6">
          <img
            src="/images/russian_sweet_snack.jpg"
            alt="러시아 국민 간식, 콘지테르스카야 깔바싸"
            class="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>

        <p class="leading-relaxed mb-6 text-slate-700">
          친구 집에 돌아와서는 차와 함께 <strong>콘지테르스카야 깔바싸(Кондитерская колба사)</strong>라는 간식을 먹었다. 직역하면 <strong>과자 소시지</strong>인데, 모양은 영락없는 소시지지만 아주 달콤한 설탕 덩어리 디저트다. 🍪 고기는 전혀 없고 부순 비스킷과 코코아 가루, 버터, 설탕, 견과류에 연유를 버무려 소시지 모양으로 돌돌 말아 냉장고에서 굳혀 만든다. 러시아의 국민 간식이라고도 불리는데 지금껏 먹어본 러시아 음식 중에 <strong>손에 꼽을 만 했다.</strong> ⭐ 특히 차와 곁들여 먹으면 금상첨화였다. 개인적으로 커피와도 잘 어울릴 듯 했지만 러시아인들은 커피보다도 차를 굉장히 즐긴다. 러시아 친구와 있으면 하루에 차 5잔은 쉽게 마실 수 있다. 엉덩이를 의자에 붙이면 <strong>‘차이(Чай, tea)?’</strong> ☕라고 바로 권유를 할 것이다. 아침부터 많은 일이 있었던 하루여서 <strong>기절하듯 잠에 들었다.</strong> 😴
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">김치? 아니, 김치가 아닌 김치! 🤯</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          다음 날, 다른 친구의 집을 방문하기 위해 길을 나섰다. 그 친구는 쿠르가닌스크라는 더 작은 도시에 살고 있었다. 얼마나 작고 조용한 동네인지, 친구 말로는 이곳에 슬라브인 말고 다른 외국인이 발을 들이는 경우는 거의 드물다고 했다. 친구 어머니는 한국인인 내가 방문한다고 하자 직접 <strong>김치를 만들어 주시겠다고 했다.</strong> 🥬 따뜻한 마음은 너무나 감사했지만, 한편으로는 김치를 잘 모르는 외국인이 만든 김치가 조금 <strong>무서웠던 건 사실이다.</strong> 😨 결국 <strong>“러시아 문화를 더욱 깊이 느끼고 싶다”는 고도의 외교적 화법으로 정중하게 거절할 수 있었다.</strong> 😅
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">러시아인들이 한국 음식이라고 믿는, 한국 당근 🥕</h3>
        <div class="relative w-full h-80 mb-6">
          <img
            src="/images/korean_carrot.jpg"
            alt="러시아인들이 한국 음식이라고 믿는, 한국 당근"
            class="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 친구 부모님은 외국인인 내가 음식 때문에 힘들까봐 마음이 영 놓이지 않으셨나보다. 그래서 러시아인들이 한국 음식이라고 굳게 믿고 있는 <strong>한국 당근(Корейская морковь)</strong>이라는 음식을 내어주셨다. 한국 당근은 이름과 달리 <strong>한국에는 없는 음식이다.</strong> 이는 과거 중앙아시아로 강제 이주당했던 고려인들이 김치가 너무 그리운 나머지, 배추 대신 구하기 쉬운 당근을 채 썰어 고춧가루와 그림에 버무려 만든 음식이다. 러시아에서는 마트 어디서나 찾을 수 있는 흔한 음식이지만 내가 친구 부모님께 한국에는 이런 음식이 없다고 하자 그분들은 정말로 <strong>까무러치게 놀라셨다.</strong> 😱
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">눈 덮인 시골에서의 뜻밖의 즐거움 ❄️</h3>
        <div class="relative w-full h-80 mb-6">
          <img
            src="/images/winter_hangout_russia.jpeg"
            alt="눈 덮인 시골에서의 뜻밖의 즐거움"
            class="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          지루할 줄 알았지만 눈 덮인 러시아 시골에서의 <strong>평온한 날들이 퍽이나 즐거웠다.</strong> 😊 적어도 하루에 5잔 이상 제공되는 차와 함께 티타임을 즐겼고, 동네에 하나뿐인 영화관에서 <strong>‘겨울왕국’</strong> 🎬을 봤다. 러시아는 자막을 쓰지 않고 더빙을 하는 경우가 많다. 아마 러시아어 단어가 길어서 자막으로 쓰면 읽어야 할 글씨가 너무 많아서 그렇지 않나 싶다. 쿠르가닌스크에서 했던 일 중에 제일 재미있었던 것은 <strong>자동차 뒤에 썰매를 매달고 내달린 일이다.</strong> 🛷 내가 외국인이라 그런지 아주 험하게 달리지 않았지만 정말 <strong>러시아인스러운 터프한 불곰국의 놀이였다.</strong> 🐻‍❄️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">진정한 러시아의 모습, 유라시아의 발견 💖</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          연말 연시는 <strong>‘현지인 밀착형’ 여행</strong>으로 뜻깊게 보냈다. 일주일 내내 러시아인들에 둘러 쌓였더니 러시아어도 그 어느 때보다 많이 늘었다는 기분이 들었다. 모스크바의 도심에만 갇혀 있었다면 결코 알지 못했을 <strong>러시아의 진짜 얼굴이었다.</strong> 🧐 학위를 따고 지식을 쌓는 것도 중요하지만, 이렇게 낯선 대륙의 깊숙한 속살에 직접 부딪치며 사람 냄새를 맡는 것. 어쩌면 이것이야말로 내가 이 추운 나라까지 날아와 진정으로 배우고 싶었던 <strong>‘유라시아’의 진짜 모습이 아니었을까.</strong> ✨
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          The vacation that every student awaits has arrived. Just like in Korea, the exam period in Russia varies from university to university and from department to department, and the last day of the final exams was the official start of the vacation. Fortunately, our department finished its final exams earlier than other departments, including my wife's translation and interpretation department, so we had an early vacation. I wanted to go somewhere for the long-awaited vacation, but my wife was <strong>adamant</strong> that she wanted to stay home. 🏡 So, for the first week of the two-week vacation, I decided to visit the hometowns of my close Russian friends. I became friends with two Russian friends through language exchange. They were from small cities called Kavrov and Kurganinsk, respectively, and were studying in Moscow. From their perspective, living on a vast continent, Korea would be a very small country, so it was amazing that they were learning Korean. <strong>Long live the Korean Wave!</strong> 🇰🇷🎉
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">A Difficult(?) Journey to the Russian Countryside 🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          On a morning at the end of 2015, I woke up at dawn and met my Russian friend at the train station. My friend lived in a small city called Kavrov in the Vladimir Oblast, with a population of about 130,000. Perhaps because the city was small, there were not many direct trains from Moscow to Kavrov. Since we couldn't delay too much, we decided to use a transfer instead of a direct train, even though it was cumbersome. First, we took an elektrichka (suburban/commuter train) from Moscow to a fairly large city called Vladimir. There were no trains to Kavrov on that day either, so we took a bus to Kavrov. It takes about 4 hours by car, but it was <strong>quite inconvenient</strong> to go to a small village by public transport. 😩
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Surprisingly Delicious Russian Home Cooking 🍲</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After arriving at my friend's house, it goes without saying that we had a Russian-style lunch. We ate Russian dumplings called <strong>pelmeni</strong>, a meat soup called <strong>borscht</strong>, and a side of pickles. In fact, I was <strong>very surprised at how delicious it was.</strong> 😮 Based on my experience of eating out in Russia, my memory of eating out was not that great. They say that even Russians don't often eat out to eat delicious food. Rather, they say that they eat out when many people have to gather or when they can't entertain at home. They say that the best food is the food that is grown and eaten right away at a dacha, a country house outside the city. In any case, I was <strong>very pleased</strong> with the simple, yet neat and clean lunch that nicely shattered my prejudice against Russian food. 🥰
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Exploring the City of Kavrov and an Unexpected Encounter, Dried Persimmons! 🍊</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Now we went outside and started exploring the city. We talked about our school days while looking at the school my friend had attended, and we went to a traditional market that was small but had everything. Among them, something caught my eye: <strong>dried persimmons.</strong> 🧡 I was surprised once by the fact that people here also make and eat dried persimmons, and <strong>twice by the surprisingly similar taste to that of Korea.</strong> 😲 For reference, the name of the city, Kavrov, is derived from the Russian word for carpet, kover (Ковёр), and perhaps that is why it is said that carpets, textiles, and suits are still very famous in Russia.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Endless Love of Russians for Walking 🚶‍♀️🚶‍♂️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Next was a walk in the park. The love of Russians for walking is truly <strong>famous for being peculiar.</strong> So I told my friend in advance that I was hungry, so we should take a moderate walk and go eat. If I didn't do this, <strong>Russians would walk until I begged them to stop.</strong> 🥺 The park my friend took me to was quite large and had a lot to see for a small city. There was a small amusement park, a cultural center that my friend used to go to, and a nice restaurant. We went in because it was said to be a local맛집, but <strong>we were the only ones there.</strong> 🤷‍♀️ The price was cheap and the food was excellent, but it seemed that there were no people because everyone was spending the evening at home for the end of the year.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Konditerskaya Kolbasa, the National Snack of Russia 🍫</h3>
        <div class="relative w-full h-80 mb-6">
          <img
            src="/images/russian_sweet_snack.jpg"
            alt="Konditerskaya Kolbasa, the National Snack of Russia"
            class="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>

        <p class="leading-relaxed mb-6 text-slate-700">
          Back at my friend's house, we had a snack called <strong>Konditerskaya Kolbasa (Кондитерская колбаса)</strong> with tea. It literally translates to <strong>confectionery sausage</strong>, and it looks just like a sausage, but it's a very sweet dessert made of a lump of sugar. 🍪 It contains no meat at all, and is made by mixing crushed biscuits, cocoa powder, butter, sugar, nuts, and condensed milk, rolling it into a sausage shape, and hardening it in the refrigerator. It is also called the national snack of Russia, and it was <strong>one of the best</strong> Russian foods I have ever eaten. ⭐ It was especially good with tea. I personally thought it would go well with coffee, but Russians enjoy tea much more than coffee. If you are with a Russian friend, you can easily drink 5 cups of tea a day. As soon as you sit down, they will immediately offer you <strong>'chai (Чай, tea)?'</strong> ☕ It was a day with many events from the morning, so I <strong>fell asleep as if I had fainted.</strong> 😴
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Kimchi? No, Not Kimchi! 🤯</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The next day, I set out to visit another friend's house. That friend lived in an even smaller city called Kurganinsk. It was such a small and quiet town that, according to my friend, it was rare for foreigners other than Slavs to set foot there. When my friend's mother heard that I, a Korean, was visiting, she said she would <strong>make kimchi herself.</strong> 🥬 I was so grateful for her warm heart, but on the other hand, it was <strong>true that I was a little scared</strong> of kimchi made by a foreigner who didn't know kimchi well. 😨 In the end, I was able to politely decline with the highly diplomatic phrase, <strong>"I want to experience Russian culture more deeply."</strong> 😅
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Korean Carrots, What Russians Believe to Be Korean Food 🥕</h3>
        <div class="relative w-full h-80 mb-6">
          <img
            src="/images/korean_carrot.jpg"
            alt="Korean Carrots, What Russians Believe to Be Korean Food"
            class="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          But my friend's parents seemed to be worried that I, a foreigner, would have a hard time with the food. So they served me a dish that Russians firmly believe to be Korean food, called <strong>Korean Carrots (Корейская морковь)</strong>. Unlike its name, <strong>Korean carrots are not a food found in Korea.</strong> This is a dish that the Koryo-saram, who were forcibly relocated to Central Asia in the past, made by shredding carrots, which were easier to obtain than cabbage, and mixing them with red pepper powder and oil because they missed kimchi so much. It is a common food that can be found in any supermarket in Russia, but when I told my friend's parents that there was no such food in Korea, they were truly <strong>shocked.</strong> 😱
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Unexpected Joy in the Snowy Countryside ❄️</h3>
        <div class="relative w-full h-80 mb-6">
          <img
            src="/images/winter_hangout_russia.jpeg"
            alt="Unexpected Joy in the Snowy Countryside"
            class="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          I thought it would be boring, but the <strong>peaceful days in the snowy Russian countryside were quite enjoyable.</strong> 😊 I enjoyed tea time with at least 5 cups of tea a day, and I watched <strong>'Frozen'</strong> 🎬 at the only movie theater in town. In Russia, they often dub instead of using subtitles. I think it's because Russian words are long, so if they use subtitles, there would be too many words to read. The most fun I had in Kurganinsk was <strong>riding a sled tied to the back of a car.</strong> 🛷 Perhaps because I was a foreigner, they didn't drive too rough, but it was a really <strong>Russian-style, tough, bear-country game.</strong> 🐻‍❄️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The True Face of Russia, the Discovery of Eurasia 💖</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I spent the end of the year and the new year meaningfully with a <strong>'local-style' trip</strong>. After being surrounded by Russians for a whole week, I felt that my Russian had improved more than ever before. It was the <strong>real face of Russia</strong> that I would never have known if I had been confined to the city of Moscow. 🧐 It is important to get a degree and accumulate knowledge, but it is also important to directly encounter the deep inside of this strange continent and smell the scent of people. Perhaps this was the <strong>'real face of Eurasia'</strong> that I truly wanted to learn by flying to this cold country. ✨
        </p>
      `}},{id:"post-206",title:{ko:"기말고사, 석사 1년차 마무리",en:"Final Exams, End of the First Year of Master’s"},subtitle:{ko:"러시아의 기묘한 시험 제도와 성장의 기록",en:"Russia's Bizarre Exam System and a Record of Growth"},imageUrl:"https://api.ruslanguage.ru/uploads/torfl_exam_bg_b65fa1865b.jpg",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          이전 글에서도 잠시 다뤘듯이, 러시아의 대학은 아주 <strong>특이한 시험 제도</strong>를 고수하고 있다. 학생들이 반기는 가장 큰 특징은 학기 중간을 괴롭히는 <strong>‘중간고사’가 아예 존재하지 않는다는 것</strong>이다. 🎉 오로지 학기 말에 치르는 기말고사 한 방으로 한 학기의 학업 성취도가 결정된다. 중간고사가 없다는 사실은 학기 초반 학생들에게 엄청난 해방감을 안겨주지만, 이는 곧 <strong>치명적인 달콤한 독약</strong>이기도 하다. ☠️ 긴장감이 바닥을 치며 학업을 소홀히 하다가, 기말고사가 다가오면 그동안 쌓인 엄청난 양의 지식 청구서를 한 번에 받아 들고 <strong>패닉에 빠지기 때문</strong>이다. 😱
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">시험 문제 준비: 혼자서는 불가능한 미션 🤝</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          기말고사 약 2-3주 전에 교수는 시험에 나올 <strong>문제 리스트를 정리해서 주신다.</strong> 답은 없고 문제만 있는데 양이 꽤나 많은 편이다. 게다가 이렇게 받은 문제들은 하나같이 간단히 답할 수 있는 종류의 질문들이 아니었다. <strong>객관식은 기대도 할 수 없었고, 책의 내용을 완전히 이해해야 답할 수 있는 수준</strong>이었다. 그리고 몇몇 질문들은 질문 자체가 열려 있기 때문에 책 위의 지식을 넘어 <strong>스스로의 통찰을 증명해야 하는 문제도 있었다.</strong> 🤔 우리 반은 12명이었는데 보통 학급 인원의 3-4배 정도 문제를 주었다. 따라서 우리 반은 각 과목마다 약 30에서 40문제 정도를 받았다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          말했다시피 질문의 난이도도 높고 양이 꽤나 많아서 혼자 이 많은 답변을 다 준비하기는 <strong>물리적으로 불가능에 가깝다.</strong> 같은 반 친구들과 준비해야 하는 문제들을 나눠서 각자 준비하고 나중에 그 답변들을 공유했다. 물론 여기에는 <strong>치명적인 함정</strong>이 있다. ⚠️ 내게 할당된 문제를 대신 풀어준 친구의 답변이 부실하다면, 그 폭탄은 고스란히 내가 떠안아야 한다. 친구의 학구열을 전적으로 믿을 것인가, 아니면 밤을 새워서라도 내 손으로 다시 정리할 것인가. <strong>우정 테스트와 러시안룰렛이 결합된 아찔한 순간</strong>이다. 😨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">운명의 ‘빌롓(Билет)’ 뽑기, 한 장의 종이에 희비가 엇갈리다 🃏</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          대망의 시험 당일, 강의실은 마치 <strong>긴장감 넘치는 카지노(?)</strong>를 방불케 한다. 🎰 교수님은 문제가 인쇄된 종이를 가늘고 길게 잘라 교탁 위에 뒤집어 흩어놓는다. 이른바 <strong>‘빌롓(Билет, 티켓)’을 뽑는 시간</strong>이다. 학생들은 차례대로 나가 마치 그날의 운세를 점치는 타로 카드를 뽑듯 비장하게 종이 한 장을 뒤집는다. 이때 교실의 희비가 엇갈린다. 평소에 공부를 게을리했어도 기가 막히게 자신이 준비한 문제를 뽑는 <strong>‘운수 좋은 날’</strong>의 주인공이 있는가 하면, 🍀 밤새워 한 문제 빼고 모든 문제를 달달 외웠는데 하필 안 본 딱 한 문제를 뽑아 드는 <strong>머피의 법칙 희생양</strong>도 속출한다. 😭 심지어 어떤 유쾌한 교수는 아예 진짜 포커 카드를 들고 와서 뽑게 만드는 경우도 있었다. ♠️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          자신의 운명을 확인한 후에는 자리로 돌아가 30분간 주어진 문제에 대한 답변을 백지 노트에 쏟아내야 한다. 당연히 오픈북은 불가하며, <strong>오직 내 머릿속의 잔존 기억에만 의존해야 한다.</strong> 🧠 준비를 마친 학생이 비장하게 손을 들면, 교수는 그를 교탁 옆자리로 호출한다. 이제부터는 답변이 아니라 <strong>'방어전'이자 '고해성사'의 시간</strong>이다. 🛡️ 내가 적어 내려간 논리를 입으로 설명하면, 교수님은 매의 눈으로 고개를 끄덕이거나 <strong>날카롭게 꼬리 질문을 던진다.</strong> 🤔 “오, 그렇게 생각하나? 그럼 이 변수가 추가되면 어떻게 되지?”라며 훅 치고 들어오는 <strong>압박 면접을 방어해 내야만 점수를 얻어낼 수 있다.</strong> 🥵
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">주관적이지만 납득 가능한 채점 기준 👍</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          구술시험의 특성상 이 채점 기준이라는 게 <strong>대단히 주관적일 수밖에 없다.</strong> 하지만 러시아의 성적 체계는 아주 <strong>단순하고 쿨하다.</strong> 😎 보통 교수들은 학생의 논리를 존중해 점수를 후하게 주려는 편이라, 실질적인 학점은 <strong>3점(Удовлетворительно, 보통)</strong>, <strong>4점(Хорошо, 우수)</strong>, <strong>5점(Отлично, 최우수)</strong> 세 가지로 나뉜다. 수업태도가 영 불량했고 답변이 횡설수설하면 3점, 수업을 잘 나왔으나 답변이 마음에 들지 않으면 4점, 교수의 압박 질문까지 매끄럽게 쳐내면 5점 만점을 받는다. 언뜻 보면 운에 기대는 제비뽑기와 주관적인 구술시험이라 형평성에 어긋나 보일 수도 있다. 하지만 놀랍게도 나는 러시아에서 유학하는 내내 단 한 번도 내 점수에 불만을 품어본 적이 없다. 교수님과 1:1로 눈을 맞추며 밑천을 다 드러내고 나면, 내가 3점짜리인지 5점짜리인지 <strong>스스로가 가장 뼈저리게 깨닫게 되기 때문</strong>이다. 💡
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">잔혹한 기말고사 시즌의 끈끈한 연대 🫂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          중간고사는 없지만, 수강하는 과목이 워낙 많아 기말고사 시즌의 유학생은 그야말로 <strong>초주검이 된다.</strong> 🧟‍♂️ 하지만 아이러니하게도 이 잔혹한 기간은 <strong>동기들과 가장 깊게 연대하는 시간</strong>이기도 했다. 💖 늦은 밤 도서관에 모여 간식을 나눠 먹으며 각자 준비한 답변을 맞춰보고, 모두 모르는 질문에 대해 머리를 맞대고 <strong>우리의 멍청함에 한탄하던 그 모든 시간들</strong> 말이다. 🤦
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">석사 1년차 마무리, 짜릿한 5점의 성취감 ✨</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          석사를 시작한 첫 1년 동안, 두 학기가 있으니 당연하게도 나는 이 <strong>지독한 기말고사를 두 번이나 치러냈다.</strong> 처음에는 더듬거리는 러시아어로 내 논리를 입 밖으로 꺼내는 것 자체가 <strong>공포였고, 교수님의 매서운 꼬리 질문 앞에서는 머릿속이 하얘지기 일쑤였다.</strong> 😨 아무것도 떠오르지 않는 백지 상태였다. 하지만 두 번째 학기의 기말고사를 마친 후, 내 학생 수첩(Zachyotka, 쟛초트까)에 교수님이 직접 펜으로 휘갈겨 써준 <strong>'5(Отлично)'라는 숫자를 보았을 때의 그 짜릿함</strong>은 말로 다 할 수 없었다. 🌟
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">기말고사, 학자에게 필요한 완벽한 예방주사 💉</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아의 기말고사는 단순히 지식을 암기했는지 묻는 테스트가 아니었다. 정답이 없는 낯선 문제 앞에서 당황하지 않고, 자신이 아는 지식을 총동원해 <strong>논리적으로 상대를 설득해 내는 훈련.</strong> 🧠 어쩌면 이 거칠고 주관적인 '운 뽑기 구술 면접'이야말로, 훗날 어떤 돌발 상황에서도 자신의 연구를 꿋꿋하게 변호해야 할 학자들에게 필요한 <strong>가장 완벽한 예방주사</strong>가 아니었을까. 🩹
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          As I briefly mentioned in a previous post, Russian universities adhere to a very <strong>peculiar exam system</strong>. The biggest feature that students welcome is that there are <strong>no 'midterm exams'</strong> that torment the middle of the semester. 🎉 A single final exam at the end of the semester determines the academic achievement of the entire semester. The fact that there are no midterms gives students a great sense of liberation at the beginning of the semester, but this is also a <strong>deadly sweet poison</strong>. ☠️ This is because students tend to neglect their studies with a low sense of tension, and when the final exams approach, they are hit with a huge bill of knowledge accumulated over time and <strong>fall into a panic</strong>. 😱
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Preparing for Exam Questions: A Mission Impossible Alone 🤝</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          About 2-3 weeks before the final exams, the professor <strong>provides a list of exam questions.</strong> There are no answers, only questions, and the amount is quite large. In addition, the questions received in this way were not the kind that could be answered simply. <strong>Multiple choice was not to be expected, and the level was such that you had to fully understand the contents of the book to answer.</strong> And some questions were open-ended, so there were also problems that required you to <strong>prove your own insight beyond the knowledge in the book.</strong> 🤔 There were 12 students in our class, and we were usually given 3-4 times the number of problems as the number of students in the class. Therefore, our class received about 30 to 40 problems for each subject.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          As I said, the difficulty of the questions is high and the amount is quite large, so it is <strong>physically close to impossible</strong> to prepare all these answers alone. We shared the problems to be prepared with our classmates, prepared them individually, and then shared the answers later. Of course, there is a <strong>fatal trap</strong> here. ⚠️ If the answer of a friend who solved the problem assigned to me is poor, I have to take the bomb. Should I fully trust my friend's academic enthusiasm, or should I stay up all night and rearrange it with my own hands? It is a dizzying moment that combines a <strong>friendship test and Russian roulette</strong>. 😨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Drawing the Fateful 'Bilet (Билет)', a Single Piece of Paper That Divides Joy and Sorrow 🃏</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          On the day of the long-awaited exam, the classroom resembles a <strong>tense casino(?)</strong>. 🎰 The professor cuts the paper with the questions printed on it into thin, long strips and scatters them face down on the lectern. This is the time to draw the so-called <strong>'bilet (Билет, ticket)'</strong>. The students take turns going up and flipping over a piece of paper with a grim determination, as if they were reading their fortune for the day with a tarot card. At this time, the joy and sorrow of the classroom are divided. There are the main characters of a <strong>'lucky day'</strong> who, even if they have been lazy with their studies, miraculously draw the problem they have prepared, 🍀 and there are also victims of <strong>Murphy's Law</strong> who have memorized all but one problem all night long, only to draw the one they haven't seen. 😭 Some even had a cheerful professor who brought real poker cards and had them draw. ♠️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          After confirming their fate, they have to return to their seats and pour out their answers to the given problem on a blank notebook for 30 minutes. Of course, open book is not allowed, and you have to <strong>rely solely on the remaining memories in your head.</strong> 🧠 When a student who has finished preparing raises their hand with a grim determination, the professor calls them to the seat next to the lectern. From now on, it is not a time for answers, but a time for <strong>'defense' and 'confession'</strong>. 🛡️ When I explain the logic I have written down with my mouth, the professor nods with a hawk's eye or <strong>sharply throws a follow-up question.</strong> 🤔 "Oh, you think so? Then what happens if this variable is added?" You have to <strong>defend against the pressure interview</strong> that comes at you with a hook to get a score. 🥵
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Subjective but Understandable Grading Criteria 👍</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Due to the nature of the oral exam, the grading criteria are <strong>bound to be very subjective.</strong> However, the Russian grading system is very <strong>simple and cool.</strong> 😎 Professors usually tend to give generous scores in respect of the student's logic, so the actual grades are divided into three: <strong>3 points (Удовлетворительно, satisfactory)</strong>, <strong>4 points (Хорошо, good)</strong>, and <strong>5 points (Отлично, excellent)</strong>. If your class attitude was poor and your answers were rambling, you would get 3 points. If you attended class well but your answers were not satisfactory, you would get 4 points. If you smoothly handled even the professor's pressure questions, you would get a perfect score of 5. At first glance, it may seem unfair because it is a lottery that relies on luck and a subjective oral exam. But surprisingly, I have never once been dissatisfied with my grades while studying in Russia. After revealing all my shortcomings by making eye contact with the professor 1:1, I <strong>realize most painfully whether I am a 3-point or 5-point person myself</strong>. 💡
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">A Strong Bond During the Cruel Final Exam Season 🫂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Although there are no midterms, there are so many courses to take that foreign students are literally <strong>half-dead</strong> during the final exam season. 🧟‍♂️ But ironically, this cruel period was also a time of <strong>deepest solidarity with my classmates</strong>. 💖 All those times when we gathered in the library late at night, sharing snacks and comparing the answers we had prepared, and lamented our stupidity over the questions that none of us knew. 🤦
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">End of the First Year of Master's, the Thrill of a Perfect 5 ✨</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          During the first year of my master's program, since there were two semesters, I naturally <strong>took this terrible final exam twice.</strong> At first, it was <strong>a horror</strong> to even get my logic out of my mouth in stuttering Russian, and my mind would go blank in front of the professor's sharp follow-up questions. 😨 It was a blank slate with nothing coming to mind. But after finishing the final exams of the second semester, the thrill I felt when I saw the number <strong>'5 (Отлично)'</strong> scribbled by the professor in my student handbook (Zachyotka) was beyond words. 🌟
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Final Exams, the Perfect Vaccination for a Scholar 💉</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The final exams in Russia were not simply a test of whether you had memorized knowledge. It was a training to <strong>logically persuade the other party</strong> by mobilizing all the knowledge you have, without being flustered in front of an unfamiliar problem with no correct answer. 🧠 Perhaps this rough and subjective 'lucky draw oral interview' was the <strong>most perfect vaccination</strong> for scholars who would have to stubbornly defend their research in any unexpected situation in the future. 🩹
        </p>
      `}},{id:"post-207",title:{ko:"가족의 방문",en:"Family Visit"},subtitle:{ko:"연고 없는 땅에서 만난 가장 반가운 손님들",en:"The Most Welcome Guests in a Land with No Ties"},imageUrl:"https://tfifamily.org/wp-content/uploads/2022/03/family-visit.jpeg",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          연고없는 먼 나라에서 이방인으로 살아갈 때, 아마 제일 반가운 일 중 하나는 단연코 <strong>가족이 방문하는 것</strong>이 아닐까 싶다. 👨‍👩‍👧‍👦 한 번은 친동생이 약 한 달 동안 나를 보러 놀러왔다. 우리는 연년생으로 <strong>친구처럼 어린 시절을 보냈다.</strong> 👫 항상 같은 운동을 하고 같은 게임을 하고 내가 재수학원에 가기 전까지 같은 침대에서 잤다. 하지만 서로 잘하는게 확연히 달라서 대학에서 완전히 다른 분야를 공부했고, 졸업을 하고도 가족이라는 것 외에는 접점이 별로 없었다. 동생은 군대도 다녀와야 했고 나는 러시아로 나왔다보니 그나마 더 만나기 힘들었다. 다행히 동생도 유학을 마치고 취업을 하기 전에 얼마간의 시간이 있어서 러시아에 나를 방문하러 올 수 있었다. 다만 당시 동생에게 여자친구가 있었는데 자신과 함께 시간을 보내지 않고 형을 보러 간다고 해서 <strong>삐졌다는 이야기를 나중에 들었다.</strong> 😅
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">소치에서 동생을 맞이하다 👋</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이제 막 유학을 마친 <strong>가난한 취준생</strong>이었던 동생은 저렴한 항공편을 찾을 수 밖에 없었다. 💸 그 중에는 예카테린부르크라는 도시를 경유하여 소치로 오는 비행기가 있었다. 모스크바에 가기 전에 소치에서 구경도 하고, 스키도 좀 타고, 러시아 침대 기차를 타고 열차 체험도 같는 계획을 했다. 7화에서 머물렀던 쿠르가닌스크는 지리적으로 소치와 매우 가까웠다. 기차로 동생이 오기 전 소치로 먼저 이동을 했고, 소치 공항에서 동생을 기다렸다. 소치 공항에서 마주친 동생이 <strong>어찌나 반갑던지!</strong> 🥰
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">소치의 반전 매력: 아열대 해변과 만년설 🌴⛷️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          소치 시내에서 엑스쿠르시아(Экскурсия)라고 불리는 투어 상품을 구입하여, 소치 주변에 산성에 올라가 경치도 구경고 올림픽 공원도 둘러보았다. 소치는 동계올림픽이 열린 도시로 유명하지만 사실 우리가 아는 설원은 시내에서 한참 떨어진 산악 지역의 풍경이다. 실제로 소치 시내는 <strong>러시아에서 보기 드문 아열대 기후</strong>를 자랑하며, 겨울에도 영하로 내려가는 일이 거의 없을 만큼 <strong>매우 온화하다.</strong> ☀️ 동계올림픽의 주 무대가 되었던 로자 후토르(Rosa Khutor) 같은 고산 지대에는 만년설이 쌓여있지만, 기차로 불과 한 시간 거리인 시내로 내려오면 야자수가 늘어선 이국적인 해변 산책로를 만날 수 있는 셈이다. 눈 덮인 산 위에서 스키를 즐기다가 조금만 내려오면 봄날 같은 바닷바람을 맞을 수 있다는 점이 소치가 가진 <strong>가장 매력적이고도 기묘한 반전</strong>이었다. 😮
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">로자 후토르에서의 스키와 낭만적인 침대 기차 여행 🥩🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          구경을 마치고는 소치 시내에서 약 40분 가량 떨어져 있는 로자 후토르라는 스키장 근처의 마을로 이동했다. 숙소에 체크인을 하고 간단히 장을 보러 갔다. <strong>소고기가 엄청 저렴하다는 말에 러시아에 있는 동안 물리도록 스테이크를 먹여주겠다는 비장한 마음</strong>으로 스테이크를 골랐다. 🥩 통조림 옥수수와 약간의 샐러드, 소스를 구입하고는 숙소에서 거하게 저녁을 먹었다. 그 후로 동생과 약 3일간 소치에서 스키를 타고는 모스크바로 가는 열차를 탔다. 열차를 스무시간 넘게 타야 했는데도 동생은 기차여행이 즐거웠던 듯 했다. 중간중간 정차 시간이 길때마다 나가서 술이며 먹을 것들을 사왔던 것도 정차 시간이 짧을 때 러시아 할머니들이 팔던 도시락을 사먹었던 것은 우리 모두에게 매우 즐거운 시간이었다. 기차가 이동하는 대부분의 시간에는 인터넷이 되지 않는다. 동생과 오랜만에 만나서 <strong>먹고 마시며 많은 이야기를 여유롭게 나눴고</strong> 💬 어느새 모스크바에 도착할 수 있었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">모스크바의 추억: 북한 식당과 '사회주의의 맛' 🍜</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바에서는 아내가 마중을 나와있었다. 아내는 며칠 후에 한국에 잠시 다녀오기로 해서 동생과 있는 시간은 일주일 정도 밖에 없었다. 이즈마일롭스키라는 곳에 가서 러시아 사람들이 쓰는 근사한 불곰 털모자를 하나 사주었고 샤슬릭이라는 꼬치 고기도 사먹었다. 아내는 내친김에 우리가 예전 살던 기숙사 근처에 있는 북한 식당에 가보고 싶어 했다. 하지만 <strong>새가슴인 나는 괜한 외교적(?) 문제가 생길까 봐 걱정된다는 이유로 끝내 가지 않았다.</strong> 🐔 동생이 오자마자 아내는 같이 가지 않겠냐고 설득하여 결국 호기심 넘치는 둘이서만 다녀왔다. 평양냉면과 만두 같은 걸 시켜 먹었다고 했는데 맛은 그저 그랬다고 했다. 나도 포장해 온 만두를 먹어보았는데 <strong>만두피가 장갑처럼 두껍고 고기보다 야채 맛이 강하게 나는 것이 과연 ‘사회주의의 맛’이구나 싶었다.</strong> 🤔
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">30분 컷 에르미타주 박물관, 전설의 시작 🖼️💨</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          상트페테르부르크 여행에서도 두고두고 놀려먹을 전설적인 일화가 탄생했다. 상트페테르부르크에 있는 에르미타주 박물관은 <strong>세계 3대 미술관</strong>으로 유명하다. 🏛️ 나는 이미 박물관에 가본 적이 있기에 동생에게만 티켓을 끊어주었다. 당시에 김성주 아나운서의 해설이 녹음된 기기를 빌려주는 서비스까지 있었기에 동생이 최소 반나절은 느긋하게 작품들을 감상하고 올 수 있을 거라 생각했다. 나는 여유롭게 미술관 광장에서 차를 마시고 있었는데, 불과 삼십 분 정도가 지나자 동생이 <strong>에르미타주 미술관 문을 열고 튀어나왔다.</strong> 🏃‍♂️ 세계적인 거장들의 혼이 담긴 수백만 점의 예술품을 <strong>‘30분 컷’으로 돌파해버린 그의 경이로운 예술적(?) 안목</strong>에 나는 할 말을 잃었다. 🤯 물론 나라고 특별히 다를 건 없었지만 말이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">형제의 시간, 그리고 사촌 동생의 러시아 유학기 🇷🇺</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          아내는 한국에 잠시 갔고, 모스크바에 남아있는 동안 형제는 <strong>옛 추억을 소환하며 시간을 보냈다.</strong> 🎮 낮에는 모스크바 곳곳을 돌아다니며 구경했고 거리의 음식들을 섭렵했다. 저녁이 되면 나란히 앉아 컴퓨터로 같이 게임을 하면서 스테이크를 맥주와 곁들여 먹었다. 동생은 러시아에서 특히나 <strong>서커스의 웅장함에 푹 빠져버렸다.</strong> 🎪 이듬해 여름에는 이모와 사촌 동생들이 방문했다. 이모와 사촌 동생 한 명은 일주일 정도 짧고 굵게 모스크바와 상트페테르부르크 여행을 했고 막내 동생은 모스크바에 남았다. 외국어 고등학교를 다니며 러시아어를 공부하고 있었는데 <strong>좀 더 남아서 러시아어 학원도 다니며 러시아를 제대로 체험하고 싶다</strong>고 했다. 🧐 마침 우리 부부도 여름방학이라 여행을 갈 계획을 하고 있어서 아파트도 비어있었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">막내 동생이 발견한 '다정한 러시아' 😇</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          막내 동생은 약 한 달간 더 머무르다가 한국으로 돌아갔는데, 러시아라는 나라가 꽤나 마음에 들었나 보다. 그리고 <strong>신기하게도 러시아 사람들이 너무 친절하다는 말을 해서 나를 놀라게 했다.</strong> 😮 사연인즉슨, 한 번은 갑자기 현기증이나고 너무 어지러워 지하철에서 잠시 정신을 잃고 쓰러진 적이 있었는데, <strong>무뚝뚝해 보이던 주위 사람들이 벌떼처럼 몰려와 다 자신의 일인 듯 성심껏 도와주었다</strong>고 한다. 🫂 그리고 주변의 권유에 앰뷸런스를 타고 병원에 갔는데 <strong>간호진도 천사처럼 친절했고 병원비도 전혀 나오지 않아 폭풍 감동</strong>을 받았다고 했다. 💖 길을 걷다 모르는 사람에게 “너네 나라로 돌아가라”는 시비나 듣던 척박한 유학생인 나와는 <strong>180도 다른 대우였다.</strong> 😲 참 오래 살고 볼 일이었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">가족은 나의 든든한 버팀목 💪</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          대체 내가 아는 러시아와 동생이 겪은 러시아는 같은 나라가 맞나 싶어 헛웃음이 났지만, 그렇게 내가 경험하지 못한 <strong>다정한 러시아의 이면을 듬뿍 경험한 막내 동생은 ... 모스크바 국립대 학부생으로 입학하여 석사까지 내리 마쳤다.</strong> 🎓 연고 없는 툰드라 같은 유학 생활에서 가족들의 방문은 단순한 관광 가이드 역할 그 이상이었다. 동생과 밤새 맥주를 마시며 나누었던 실없는 농담들, 30분 만에 끝난 에르미타주 관람의 황당함, 그리고 사촌 동생이 남겨두고 간 훈훈한 미담까지. 그 모든 기억은 외롭고 고단했던 나의 모스크바 생활을 버티게 해 준 <strong>든든한 버팀목이 되어 주었다.</strong> 🌳
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          When living as a stranger in a distant country with no connections, perhaps one of the most welcome things is a <strong>family visit</strong>. 👨‍👩‍👧‍👦 Once, my younger brother came to visit me for about a month. We were born a year apart and <strong>spent our childhood like friends</strong>. 👫 We always played the same sports, played the same games, and slept in the same bed until I went to a cram school for the college entrance exam. However, since we were clearly good at different things, we studied completely different fields in college, and even after graduation, we didn't have much in common other than being family. My brother had to serve in the military, and I went to Russia, so it was even harder to meet. Fortunately, my brother also had some time before he got a job after finishing his studies, so he was able to come and visit me in Russia. However, I later heard that his girlfriend at the time was <strong>pouting</strong> because he was going to see his brother instead of spending time with her. 😅
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Meeting My Brother in Sochi 👋</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          My brother, who was a <strong>poor job seeker</strong> who had just finished his studies, had no choice but to find a cheap flight. 💸 Among them was a flight to Sochi via a city called Yekaterinburg. We planned to do some sightseeing in Sochi, go skiing, and experience a Russian sleeper train before going to Moscow. Kurganinsk, where we stayed in episode 7, was geographically very close to Sochi. I went to Sochi by train before my brother arrived, and I waited for him at the Sochi airport. I was <strong>so happy</strong> to see my brother at the Sochi airport! 🥰
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Unexpected Charm of Sochi: Subtropical Beaches and Perennial Snow 🌴⛷️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In Sochi, we bought a tour package called an 'excursia (Экскурсия)' and went up to a mountain fortress around Sochi to see the scenery and also looked around the Olympic Park. Sochi is famous for being the city where the Winter Olympics were held, but the snowfields we know are actually a landscape of a mountainous region far from the city. In fact, the city of Sochi boasts a <strong>subtropical climate that is rare in Russia</strong>, and it is <strong>very mild</strong>, rarely dropping below zero even in winter. ☀️ There is perennial snow in the high-altitude areas like Rosa Khutor, which was the main stage of the Winter Olympics, but if you go down to the city, which is only an hour away by train, you can find an exotic beach promenade lined with palm trees. The fact that you can enjoy skiing on a snow-covered mountain and then come down a little to feel the spring-like sea breeze was the <strong>most attractive and bizarre twist</strong> that Sochi had. 😮
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Skiing in Rosa Khutor and a Romantic Sleeper Train Journey 🥩🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After sightseeing, we moved to a village near a ski resort called Rosa Khutor, which is about 40 minutes away from downtown Sochi. We checked into our accommodation and went to do some simple grocery shopping. Hearing that <strong>beef was very cheap, I chose a steak with the grim determination to feed my brother steak until he was sick of it while he was in Russia.</strong> 🥩 I bought canned corn, some salad, and sauce, and had a hearty dinner at our accommodation. After that, my brother and I skied in Sochi for about 3 days and then took a train to Moscow. Even though we had to ride the train for over twenty hours, my brother seemed to enjoy the train journey. It was a very enjoyable time for all of us to go out and buy alcohol and food whenever the stop was long, and to eat the lunch boxes that the Russian grandmothers sold when the stop was short. There is no internet for most of the time the train is moving. I met my brother after a long time and we <strong>ate, drank, and talked a lot at our leisure</strong>, 💬 and before we knew it, we had arrived in Moscow.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Memories of Moscow: A North Korean Restaurant and the 'Taste of Socialism' 🍜</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In Moscow, my wife was waiting for me. My wife was going to go to Korea for a while in a few days, so I only had about a week with my brother. We went to a place called Izmailovsky and bought a nice bear fur hat that Russians wear, and we also ate a skewered meat called shashlik. My wife, on a whim, wanted to go to a North Korean restaurant near our old dormitory. However, <strong>being a chicken, I was worried that it would cause some unnecessary diplomatic(?) problems, so I ended up not going.</strong> 🐔 As soon as my brother arrived, my wife persuaded him to go with her, so in the end, only the two curious ones went. They said they ordered things like Pyongyang naengmyeon and dumplings, but the taste was just so-so. I also tried the dumplings they brought back, and the <strong>dumpling skin was as thick as a glove and the vegetable taste was stronger than the meat taste, which made me think that this was indeed the 'taste of socialism'.</strong> 🤔
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">30-Minute Cut of the Hermitage Museum, the Beginning of a Legend 🖼️💨</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          A legendary anecdote that we will tease him about for a long time was born during our trip to St. Petersburg. The Hermitage Museum in St. Petersburg is famous as one of the <strong>world's three major art museums</strong>. 🏛️ Since I had already been to the museum, I only bought a ticket for my brother. At that time, there was even a service that rented out a device with a recording of announcer Kim Seong-ju's commentary, so I thought my brother would be able to appreciate the artworks at a leisurely pace for at least half a day. I was leisurely drinking tea in the museum square, but after only about thirty minutes, my brother <strong>burst out of the Hermitage Museum door.</strong> 🏃‍♂️ I was speechless at his <strong>amazing artistic(?) eye, which had broken through millions of works of art containing the souls of world-renowned masters in a '30-minute cut'.</strong> 🤯 Of course, I was no different.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Brotherly Time, and My Cousin's Russian Study Abroad Story 🇷🇺</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          My wife went to Korea for a while, and while I was left in Moscow, the brothers <strong>spent their time reminiscing about old memories.</strong> 🎮 During the day, we went around Moscow and did some sightseeing, and we conquered the street food. In the evening, we would sit side by side and play games together on the computer while eating steak with beer. My brother was especially <strong>fascinated by the grandeur of the circus</strong> in Russia. 🎪 The following summer, my aunt and cousins visited. My aunt and one of my cousins had a short and intense trip to Moscow and St. Petersburg for about a week, and my youngest cousin stayed in Moscow. She was studying Russian at a foreign language high school, and she said she wanted to <strong>stay a little longer to attend a Russian language academy and experience Russia properly</strong>. 🧐 It just so happened that my wife and I were also planning a trip for our summer vacation, so our apartment was empty.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The 'Kind Russia' My Youngest Cousin Discovered 😇</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          My youngest cousin stayed for about another month before returning to Korea, and it seems she really liked the country of Russia. And <strong>surprisingly, she told me that the Russian people were so kind, which surprised me.</strong> 😮 The story is that once, she suddenly felt dizzy and very lightheaded, and she fainted for a moment on the subway. The <strong>surrounding people, who looked stern, swarmed around her and helped her with all their hearts as if it were their own business</strong>. 🫂 And on the recommendation of those around her, she went to the hospital in an ambulance, and she was <strong>deeply moved by the fact that the nurses were as kind as angels and that there was no hospital bill at all</strong>. 💖 This was a <strong>180-degree different treatment</strong> from me, a poor foreign student who would get into arguments with strangers on the street who told me to "go back to your own country." 😲 It was truly something to live and see.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Family is My Strong Support 💪</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I chuckled, wondering if the Russia I knew and the Russia my cousin experienced were the same country, but my youngest cousin, who had fully experienced the <strong>kind side of Russia</strong> that I had not experienced, ... entered Moscow State University as an undergraduate and finished her master's degree. 🎓 In a tundra-like life of studying abroad with no connections, my family's visits were more than just a role of a tour guide. The silly jokes I shared with my brother over beer all night, the absurdity of the 30-minute tour of the Hermitage, and the heartwarming story that my cousin left behind. All of those memories became a <strong>strong support</strong> that helped me endure my lonely and tiring life in Moscow. 🌳
        </p>
      `}},{id:"post-207-extra",title:{ko:"✨ 외전 (4) - 러시아 여자들",en:"✨ Side Story (4) - Russian Women"},subtitle:{ko:"얼음 공주와 시베리아 호랑이 바부시카 사이",en:"Between Ice Princesses and Siberian Tiger Babushkas"},imageUrl:"https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          러시아, 우크라이나 등 동슬라브 국가에 미인이 많다는 건 익히 알려진 사실이라, 한국 남성들 사이에서는 우스갯소리로 ‘장모님의 나라’로 불리기도 한다. “진짜로 길거리에 김태희가 밭을 매고 전지현이 소를 모느냐?”라고 묻는다면, 솔직한 내 영혼의 대답은 ‘Yes’라고 할 수 있다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✨ 압도적인 피지컬과 분위기</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          일단 피지컬부터가 압도적이다. 얼굴이 똑같이 생겼어도 평균적으로 키가 훌쩍 크고, 특히 하체가 길어 시원시원한 비율을 자랑한다. 게다가 걸음걸이나 옷차림에서 뿜어져 나오는 도도한 분위기 덕분에 일단 평균 점수 20점 이상을 주고 출발한다. 👠 한겨울에 두툼한 털코트와 롱부츠를 장착하고 눈길을 걷는 길쭉한 러시아 여성의 뒤태는 감탄을 자아낸다. 오밀조밀한 아시아인의 이목구비와 달리, 입체적이고 시원시원한 선을 가진 그들의 얼굴도 참 매력있다. 금발이 흔한 것은 아니지만, 자연스러운 갈색빛 머리카락을 가진 이들이 많았다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧟‍♀️ 고퀄리티 좀비? 겨울 아침의 풍경</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          다만 백인 특유의 얇은 피부 탓인지, 아니면 영양 상태(?)의 문제인지 쌩얼일 때는 푸른 정맥이 도드라져 보이는 경우가 많았다. 특히 한겨울 이른 아침, 모스크바 국립대로 등교하는 지하철 안에서 마주치는 핏기 없이 창백하고 푸른 실핏줄이 비치는 러시아 여대생들을 보고 있노라면, 예쁘긴 한데 어딘가 모르게 ‘고퀄리티 좀비’ 같다는 섬뜩한 기분이 들기도 했다. 나의 얄팍한 어휘력으로 묘사할 수 있는 그들의 외모 디테일은 대략 이 정도다. ❄️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎒 폭풍 성장, 고등학생인가 성인인가</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          어느 날 시내의 한 카페에서 차를 마시며 러시아인 친구를 기다리고 있었다. 그때 비슷한 옷을 맞춰 입은 무리가 우르르 들어와 한쪽 자리를 차지하더니 시끌벅적 떠들기 시작했다. 속으로 ‘다 큰 어른들이 공공장소 매너가 없네’라고 쯧쯧거리고 있을 무렵, 도착한 친구가 그들을 보며 무심하게 말했다. “어? 오늘 저 학교는 수업이 일찍 끝났나 보네.” 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          그렇다. 그들은 교복을 입은 고등학생들이었다! 😲 러시아 고등학교 시스템을 몰랐던 나는 그들의 폭풍 성장한 피지컬과 완숙한(?) 얼굴만 보고 당연히 성인일 거라 단정했던 것이다. 듣기로는 14세에서 16세 전후로 급격히 성인화가 된다고 한다. 당시 내 사촌 여동생도 고등학생이었는데 비교해 보면 그냥 애와 어른이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍞 탄수화물의 저주와 체형 변화</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          거리에서 마주치는 러시아의 젊은 여성들은 대체로 살집이 없고 늘씬하다. 오히려 말랐다고 표현하는 게 맞을 정도다. 하지만 신기하게도 나이가 들고 중년이 되면 체형이 극적으로 변하는 경우가 많다. 데이터만 보면 미국의 여성 비만율(42%)에 비하면 러시아(25%)는 양반인 수준이긴 하지만 그들의 식습관을 곁에서 지켜보면 체형 변화의 이유가 짐작이 간다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          마트에서 가장 싸고 흔하게 구할 수 있는 식재료가 바로 빵과 감자다. 🥔 2~300원이면 투박한 바게트를 살 수 있고, 감자 역시 1kg에 3~400원 수준으로 껌값보다 싸다. 팍팍한 주머니 사정 때문에 이 저렴한 탄수화물 덩어리들이 주식이 될 수밖에 없는데, 고기보다 무섭다는 이 탄수화물 과다 섭취가 나잇살과 결합하며 요정 같던 아가씨들을 푸근한 체형으로 바꾸어 놓는 주범이 아닐까 싶다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">❄️ 애교(Aegyo)? 그런 건 없다</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          성격적인 면을 보자면, 대체로 러시아 여자들에게 애교를 기대해선 안 된다. 애초에 러시아어에는 애교라는 단어 자체가 존재하지 않아서, 한국 드라마를 번역할 때도 그냥 발음 나는 대로 ‘Aegyo’라고 표기할 정도다. 언어가 사고를 지배한다고 했던가, 이들에게 눈웃음치며 콧소리를 내는 애교는 미지의 영역이다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          게다가 러시아 여성들은 본인들이 타국 여성들보다 객관적으로 예쁘다는 사실을 아주 잘 알고 있어서인지 자존감이 하늘을 찌른다. 거리에서 마주치는 소녀나 아가씨들은 얼음장처럼 차갑다. 길을 묻거나 도움을 청할 때 어설픈 러시아어를 더듬거리면, 시베리아 벌판보다 더 냉랭한 시선을 꽂아버린다. 🧊
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 이 얼음벽도 일단 ‘내 사람’이라는 바운더리 안에 들어오면 사르르 녹아내린다. 우리 반 반장은 차갑고 도도한 여학생이었는데, 시험 기간에 공부가 너무 막막해 도와달라고 매달렸더니 기꺼이 자기 시간을 쪼개어 문제를 같이 풀어주는 천사 같은 모습을 보여주었다. 😇 친해지면 자신이 가진 게 적든 많든 따뜻하게 나누려 하는 그들의 반전 매력은 꽤나 뭉클하다. (대체 왜 모르는 사람에겐 그토록 무자비하게 철벽을 치지는 유학 생활이 끝날 때까지 풀지 못한 미스터리다.)
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👗 상체 노출 vs 하체 노출, 문화의 차이</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          날씨가 풀리면 여성들의 옷차림도 확 가벼워지는데, 이때 한국과의 흥미로운 문화 차이를 발견할 수 있다. 러시아 여성들은 가슴이 깊게 파인 과감한 상의는 즐겨 입는 반면, 짧은 치마는 좀처럼 입지 않는다. 한국에서는 가슴골을 노출하는 것에 더 보수적인 잣대를 들이대지만, 러시아에서는 반대로 짧은 치마를 입고 다니는 여성을 훨씬 더 가벼운 사람으로 취급하는 경향이 있다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          한국은 상대적으로 마르고 볼륨 있는 상체를 선호하는 편이지만, 러시아 남자들은 탄탄하고 큰 엉덩이를 가진 여성을 최고의 미인으로 친다. 🍑 어느 러시아 드라마에서 짝사랑에 빠진 여주인공이 친구에게 “난 별로 예쁘지도 않고, 엉덩이도 크지 않은데 어떡하지?”라며 한탄하는 장면만 봐도 ‘골반과 엉덩이 크기 = 미모의 척도’라는 이 동네의 확고한 공식(?)을 엿볼 수 있다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👵 최종 진화 형태, 바부시카(Babushka)</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          마지막으로 러시아 여성 생태계의 최종 진화 형태인 할머니에 대해 논하지 않을 수 없다. 한국 아줌마들도 종종 초인적인 괴력을 발휘하고 “여자는 약하지만 엄마는 강하다”며 삶의 훈장을 뽐내지만, 소련 시절을 거치고 러시아의 혹독한 날씨와 거친 환경을 견뎌낸 러시아 할머니들의 강인함은 타의 추종을 불허한다. 젊은 시절의 도도함은 온데간데없고, 세상 무서울 게 없는 거리의 무법자로 거듭난다. 🐯
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          솔직히 유학 시절 내가 거리의 불량배나 스킨헤드보다 더 피하고 싶었던 대상 1순위가 바로 성난 바부시카(할머니)들이었다. 한 번은 기차역에서 현금 대신 카드로 계산을 하다가 뒤에 줄 서 있던 할머니에게 욕을 얻어먹은 적이 있다. 카드로 계산하면 현금으로 할 때보다 더 느리다는 이유였다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          또 하루는 버스 뒷자리에 앉아 핸드폰만 쳐다보고 있었는데, 갑자기 근처에 앉아 있던 할머니가 사자후를 내질렀다. “이봐! 저기 젊은 아가씨가 서 있는데 왜 당장 자리를 안 비켜주나! 예의 없는 놈, 당장 네 나라로 돌아가라!” 😠 (러시아에선 노인뿐만 아니라 젊은 여성에게도 자리를 양보하는 게 남자의 기본 매너라나 뭐라나.) 하도 이런 일을 몇 번 당하다 보니, 한겨울 빙판길에서 러시아 할머니들이 “악!” 하고 미끄러지는 비명을 들을 때면 그 어떤 교향곡보다도 감미롭게(?) 들리기도 했다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐯 거대한 대륙을 지탱하는 힘</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          결국 러시아 여자들은 화려한 바비인형으로 태어나, 무뚝뚝하지만 정 많은 이웃집 누나를 거쳐, 종국에는 시베리아 호랑이도 때려잡을 법한 세상 거칠게 없는 바부시카(할머니)로 진화한다. 차가운 겉모습 뒤에 숨겨진 그들의 따뜻한 오지랖과 억척스러운 생활력은, 척박한 이 거대한 대륙을 지탱해 온 진짜 힘일지도 모른다. 🇷🇺
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          It's a well-known fact that there are many beauties in East Slavic countries like Russia and Ukraine, so among Korean men, it's jokingly referred to as the 'Land of the Mother-in-Law.' If you ask, 'Do women who look like Kim Tae-hee really plow fields and those who look like Jun Ji-hyun really herd cows?' my honest answer from the bottom of my soul would be 'Yes.'
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✨ Overwhelming Physical Presence and Aura</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          First of all, their physical presence is overwhelming. Even if their faces were the same, they are much taller on average and boast refreshing proportions with particularly long legs. Moreover, thanks to the haughty atmosphere emanating from their gait and attire, they start with an extra 20 points on average. 👠 The sight of a tall Russian woman walking through the snow in a thick fur coat and long boots in midwinter is truly admirable. Unlike the delicate features of Asians, their faces, with three-dimensional and refreshing lines, are also very attractive. Blonde hair isn't common, but many have natural brownish hair.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧟‍♀️ High-Quality Zombies? Winter Morning Scenery</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          However, perhaps due to the thin skin characteristic of Caucasians or nutritional(?) issues, blue veins often stand out when they are not wearing makeup. Especially in the early morning of midwinter, watching pale, bloodless Russian college students with visible blue capillaries on the subway to Moscow State University, I sometimes felt an eerie feeling that they were like 'high-quality zombies,' even though they were beautiful. These are roughly the details of their appearance that I can describe with my limited vocabulary. ❄️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎒 Rapid Growth, High Schoolers or Adults?</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          One day, I was waiting for a Russian friend at a cafe in the city, drinking tea. Then, a group of people dressed in similar clothes swarmed in, occupied one side, and started talking noisily. As I was clicking my tongue inwardly, thinking, 'Grown adults have no manners in public,' my friend arrived and said nonchalantly while looking at them, "Oh, I guess that school finished classes early today."
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          That's right. They were high school students in uniforms! 😲 I, who didn't know the Russian high school system, had naturally assumed they were adults based on their burst-grown physical presence and mature(?) faces. I heard that they undergo rapid maturation around the ages of 14 to 16. At that time, my cousin was also a high school student, and comparing them, it was just like a child and an adult.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍞 The Curse of Carbohydrates and Body Type Changes</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Young Russian women encountered on the street are generally slim and slender. It would be more accurate to describe them as thin. Surprisingly, however, their body types often change drastically as they age into middle age. Looking at the data, compared to the female obesity rate in the US (42%), Russia (25%) is at a decent level, but observing their eating habits from the side, one can guess the reason for the body type change.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The cheapest and most common ingredients available at the supermarket are bread and potatoes. 🥔 You can buy a coarse baguette for 200-300 KRW, and potatoes are also cheaper than gum at 300-400 KRW per kg. Due to tight pockets, these cheap lumps of carbohydrates inevitably become the staple food. This excessive intake of carbohydrates, which is said to be scarier than meat, combined with middle-age weight gain, seems to be the main culprit in turning fairy-like young ladies into cozy body types.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">❄️ Aegyo? There is No Such Thing</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In terms of personality, you generally shouldn't expect 'aegyo' from Russian women. In the first place, the word 'aegyo' itself does not exist in the Russian language, so when translating Korean dramas, they just write it as it sounds, 'Aegyo.' As they say language governs thought, aegyo—smiling with eyes and making nasal sounds—is unknown territory for them.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Moreover, perhaps because Russian women know very well that they are objectively more beautiful than women from other countries, their self-esteem is sky-high. The girls or young ladies you meet on the street are as cold as ice. If you stammer in clumsy Russian when asking for directions or help, they will pierce you with a gaze colder than the Siberian plains. 🧊
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          However, this ice wall also melts away once you enter the 'my person' boundary. Our class leader was a cold and haughty female student, but when I clung to her for help because studying for the exam was so overwhelming, she showed an angelic side by willingly splitting her time to solve problems with me. 😇 Their unexpected charm of trying to share warmly, whether they have little or much, once you become close, is quite touching. (Exactly why they put up such a merciless iron wall against strangers remained a mystery I couldn't solve until the end of my studies.)
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👗 Chest Exposure vs. Leg Exposure, a Cultural Difference</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          When the weather warms up, women's clothing becomes much lighter, and at this time, an interesting cultural difference from Korea can be discovered. While Russian women enjoy wearing bold tops with deep necklines, they rarely wear short skirts. In Korea, a more conservative standard is applied to exposing cleavage, but in Russia, on the contrary, there is a tendency to treat women wearing short skirts as much 'lighter' people.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          While Korea relatively prefers a thin yet voluminous upper body, Russian men consider women with firm and large buttocks to be the most beautiful. 🍑 Just by looking at a scene in a Russian drama where the female protagonist, who is in love, laments to a friend, "I'm not particularly pretty and I don't have large buttocks, what should I do?", you can catch a glimpse of the firm formula of this neighborhood: 'Pelvis and buttock size = measure of beauty.'
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👵 The Final Evolution, Babushka</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Finally, one cannot help but discuss the final evolutionary form of the Russian female ecosystem: the grandmother. While Korean 'ajummas' also sometimes exert superhuman strength and boast of life's medals, saying "women are weak but mothers are strong," the toughness of Russian grandmothers, who have lived through the Soviet era and endured Russia's harsh weather and rough environment, is second to none. The haughtiness of their youth is nowhere to be found, and they are reborn as street outlaws who fear nothing in the world. 🐯
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Honestly, during my time as a student, the number one object I wanted to avoid more than street thugs or skinheads was angry 'babushkas' (grandmothers). Once, I was scolded by a grandmother standing behind me at a train station for paying with a card instead of cash. The reason was that paying with a card was slower than cash.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Another day, I was sitting in the back of a bus looking only at my phone, when suddenly a grandmother sitting nearby let out a lion's roar. "Hey! There's a young lady standing there, why don't you give up your seat right now! You mannerless fellow, go back to your country immediately!" 😠 (They say in Russia, it's a man's basic manner to give up a seat not only to the elderly but also to young women.) Having experienced such things several times, when I heard the "Ah!" scream of a Russian grandmother slipping on the icy road in midwinter, it sounded more melodious than any symphony(?).
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐯 The Power That Sustains the Vast Continent</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In the end, Russian women are born as glamorous Barbie dolls, go through a phase as blunt but warm-hearted older sisters next door, and finally evolve into 'babushkas' (grandmothers) who could even take down a Siberian tiger. Their warm nosiness and tenacious vitality hidden behind a cold exterior might be the real power that has sustained this vast, barren continent. 🇷🇺
        </p>
      `}}]},oy={id:"year3",title:{ko:"3년차, 석사 과정을 마치며",en:"Year 3, Finishing the Master’s Program"},shortTitle:{ko:"3년차",en:"Year 3"},description:{ko:"러시아에서의 대학원 생활을 마무리하며",en:"Concluding graduate school life in Russia"},isSinglePost:!1,isActive:!0,posts:[{id:"post-300",title:{ko:"러시아 문학 경연대회",en:"Russian Literature Competition"},subtitle:{ko:"윤케르의 기도와 21세기 한국 훈련병의 PTSD",en:"Junker's Prayer and the PTSD of a 21st Century Korean Trainee"},imageUrl:"https://aws.cricketmedia.com/media/20220429174414/girl-reading-poetry.jpg?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          여름 방학이 한창이던 무렵, 아직은 새로운 학기가 시작하기 전 러시아어 선생님으로부터 러시아 문학 경연대회에 참여해 달라는 부탁을 받았다. 외국인을 대상으로 하는 이 경연대회는 모스크바 국립대뿐만 아니라 타 대학 유학생들도 참여하는 나름 규모 있는 행사였다. 하지만 실상을 들여다보니 모스크바 국립대에 할당된 상장은 넘쳐나는데, 정작 방학의 늪에서 빠져나오지 못한 참가 희망자가 턱없이 부족한 상태였다. 즉, 참여만 하면 상장 하나는 무조건 챙길 수 있는 <span class="font-bold text-russia-blue">‘참가상 대잔치’</span>나 다름없었다. 🏆
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎬 대회 방식: 문학의 재해석</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          대회 방식은 자신이 선택한 러시아 문학을 다양한 방식으로 재해석하여 동영상으로 제출하는 것이었다. 여러 명이 팀을 꾸려 정통 연극을 준비하거나 러시아 특유의 유머를 선보이는 등 외국인의 시각에서 재탄생한 다채로운 작품들을 볼 수 있었다. 그중 나는 대한민국 남자라면 누구나 악몽에서조차 마주하고 싶지 않은 <span class="font-bold text-wine-600">'훈련소 생활'</span>을 주제로 택했다. 19세기 시인 미하일 율리에비치 레르몬토프가 훈련병 시절에 쓴 <span class="italic">'윤케르의 기도'</span>를 낭송하기로 한 것이다. 🎤
        </p>

        <blockquote class="text-center font-serif text-xl font-bold text-russia-blue my-10 border-y-2 border-slate-100 py-6">
          "윤케르의 기도" <br/><br/>
          하늘의 왕이시여! 구원하소서, <br/>
          이 답답한 제복에서, 마치 불에서 꺼내주듯 <br/><br/>
          행군에서 저를 해방시켜 주시고 <br/>
          의장대 훈련에서 저를 제외시켜 주소서 <br/><br/>
          훈련장의 교관의 목소리가 <br/>
          우리에게 덜 들리게 하소서 <br/><br/>
          또 하나의 기도를 들어주소서 <br/>
          이번 일요일에 지각을 허락하소서 <br/><br/>
          전능하신 왕이시여, 저는 이제 만족합니다 <br/>
          더 이상 불필요한 부탁으로 귀찮게 하지 않겠나이다
        </blockquote>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤯 시의 의미와 PTSD</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          시의 구절구절은 19세기 러시아든 21세기 한국이든 군대의 본질은 변하지 않는다는 사실을 뼈저리게 증명했다. <span class="italic">“하늘의 왕이시여, 이 답답한 제복에서 구원하소서”</span>, <span class="italic">“행군과 의장대 훈련에서 저를 제외해 주소서”</span>라는 절규는 논산 훈련소 연병장에서 울려 퍼져도 전혀 이질감이 없었다. 🥲
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          특히 <span class="font-bold text-red-600">“이번 일요일에 지각을 허락하소서”</span>라는 대목에 이르자, 억눌려 있던 PTSD(외상 후 스트레스 장애)가 목구멍까지 치밀어 올랐다. 육군사관학교 생도 시절, 매주 일요일 저녁마다 엄수해야 했던 <span class="font-bold text-red-600">‘귀영 점호’</span>의 압박이 생생히 되살아난 탓이다. 정해진 시각까지 복귀하지 못하면 감당하기 힘든 불이익이 기다리고 있었기에, 당시 우리에게 일요일 저녁은 휴식의 끝이 아닌 삼엄한 긴장의 연속이었다. 19세기 윤케르의 기도는 단순한 문학적 표현을 넘어, 시공간을 초월해 대한민국 남자들의 트라우마를 건드리는 강렬한 호소력을 지니고 있었다. 😥
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💰 러시아의 징병제와 '현금술'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          여담으로, 러시아 역시 한국과 같이 징병제를 유지하고 있다. 2008년 전까지는 2년을 복무했고 그 이후로는 1년을 복무한다. 하지만 병역 의무를 대하는 방식만큼은 한국과 확연히 달랐다. 한국에서는 흔히 말하는 ‘신의 아들’만 병역을 빠져나올 수 있었던 반면, 당시 들려온 풍문에 따르면, 약 700만 원 정도의 예산만 확보되면 의사로부터 합법과 불법의 경계를 아슬아슬하게 넘나드는 <span class="font-bold text-yellow-600">‘면제 소견서’</span>를 발급받을 수 있다고 했다. 이른바 <span class="font-bold text-yellow-600">'현금술'</span>이라는 치트키가 통용되는 현장이었다. 국가에 대한 충성심을 증명하는 대신 자본력을 증명하면 군복무를 유유히 빠져나갈 수 있다는 사실이 꽤나 충격적이었다. 💸
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎖️ 대회 당일: 제복의 힘</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          대회 당일, 러시아어 선생님과 강당에 앉아 다른 학생들의 작품을 감상하며 평가를 기다렸다. 이미 아들을 군대에 보낸 경험이 있던 선생님은 멋지게 대한민국 장교정복을 차려입고 19세기 군인의 고뇌를 읊는 나의 모습에 깊이 만족해하셨다. 러시아인들은 제복을 참 좋아한다. 러시아에 있는 3년 동안 나는 위기가 있을 때마다 옷장에 고이 모셔두었던 장교정복을 만지작거렸다. 그리고 정복을 입고 나가면 그 어떤 것도 두렵지 않았다. 🫡
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          결과적으로 모스크바 대학교 총장 명의의 <span class="font-bold text-green-600">‘최우수 상장’</span>을 거머쥐었으니 매우 만족스러운 해피엔딩이었다. 비록 소중한 방학 3일은 ‘윤케르의 기도’와 함께 산화했으나, 19세기 러시아 훈련병의 기도가 21세기 한국 유학생에게 영광의 상장을 안겨준 셈이 되었다. 🥳
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎸 또 다른 문학 경연대회: '이모가 없다면'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          참, 학기 중에도 작은 문학 경연대회가 있었는데 그 때는, <span class="italic">‘만약 당신에게 이모가 없다면’</span>이라는 노래를 기타를 치며 불렀다. 🎸 가사 내용은 아주 단순하면서 엉뚱하다. 원래 뭔가가 없었더면 잃을 일도 없다는 내용으로 마찬가지로 장교정복을 입고 노래를 불렀다. 나의 러시아어 선생님은 진지한 장교정복에 어울리지 않는 리듬의 노래에 너무 웃긴 나머지 감격의 눈물을 쏟으셨다. 🤣 19세기 군인의 고뇌를 읊던 진지한 유학생이, 이번에는 “아내가 없으면 도망갈 일도 없다”며 해맑게 기타를 튕기는 모습이 선생님께는 꽤나 신선하고도 기특한 충격이었던 모양이다.
        </p>

        <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

        <p class="leading-relaxed mb-6 text-slate-700">
          대회를 치르며 새삼 느낀 점은 러시아 사람들이 자신들의 문학을 여전히, 그리고 지독할 정도로 사랑한다는 사실이었다. 이런 모습에서 러시아 사람들의 마음속에는 여전히 순수한 면이 남아 있다는 것을 느낄 수 있었다. ❤️
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          During the summer vacation, before the new semester had even begun, my Russian teacher asked me to participate in a Russian literature competition. This competition, for foreigners, was a fairly large event in which not only students from Moscow State University but also from other universities participated. However, looking at the reality, there were plenty of awards allocated to Moscow State University, but there was a severe shortage of applicants who had not yet emerged from the swamp of vacation. In other words, it was no different from a <span class="font-bold text-russia-blue">'participation award festival'</span> where you were guaranteed to get an award just for participating. 🏆
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎬 Competition Format: Reinterpretation of Literature</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The competition format was to reinterpret a Russian literary work of one's choice in various ways and submit it as a video. You could see a variety of works reborn from a foreigner's perspective, such as teams preparing a traditional play or showcasing a unique Russian humor. Among them, I chose the theme of <span class="font-bold text-wine-600">'boot camp life'</span>, which no Korean man would want to face even in his nightmares. I decided to recite <span class="italic">'Junker's Prayer'</span>, written by the 19th-century poet Mikhail Yuryevich Lermontov during his time as a trainee. 🎤
        </p>

        <blockquote class="text-center font-serif text-xl font-bold text-russia-blue my-10 border-y-2 border-slate-100 py-6">
          "Junker's Prayer" <br/><br/>
          King of Heaven! Save me, <br/>
          From this stuffy uniform, as if from a fire <br/><br/>
          Free me from the march <br/>
          Exclude me from the honor guard training <br/><br/>
          Let the instructor's voice in the training ground <br/>
          Be heard less by us <br/><br/>
          Hear another prayer <br/>
          Allow me to be late this Sunday <br/><br/>
          Almighty King, I am now satisfied <br/>
          I will no longer bother you with unnecessary requests
        </blockquote>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤯 The Meaning of the Poem and PTSD</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The verses of the poem painfully proved that the nature of the military does not change, whether it is 19th-century Russia or 21st-century Korea. The cries of <span class="italic">"King of Heaven, save me from this stuffy uniform"</span> and <span class="italic">"Exclude me from the march and honor guard training"</span> would not have felt out of place echoing on the parade ground of the Nonsan Training Center. 🥲
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          In particular, when I reached the line <span class="font-bold text-red-600">"Allow me to be late this Sunday"</span>, the suppressed PTSD (post-traumatic stress disorder) rose to my throat. This was because the pressure of the <span class="font-bold text-red-600">'return roll call'</span> that we had to observe every Sunday evening during my time as a cadet at the Korea Military Academy came back to life. If we failed to return by the set time, we would face unbearable disadvantages, so for us at that time, Sunday evening was not the end of rest, but a continuation of strict tension. The 19th-century Junker's prayer was more than just a literary expression; it had a powerful appeal that transcended time and space and touched the trauma of Korean men. 😥
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💰 Russia's Conscription System and 'Cash-chemy'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          As an aside, Russia, like Korea, also maintains a conscription system. Before 2008, they served for 2 years, and after that, for 1 year. However, the way they treated military service was markedly different from Korea. In Korea, only the so-called 'sons of God' could evade military service, but according to the rumors at the time, if you had a budget of about 7,000 dollars, you could get a <span class="font-bold text-yellow-600">'certificate of exemption'</span> from a doctor that precariously crossed the line between legal and illegal. It was a scene where the cheat key of <span class="font-bold text-yellow-600">'cash-chemy'</span> was used. It was quite shocking that you could get out of military service by proving your financial power instead of your loyalty to the country. 💸
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎖️ The Day of the Competition: The Power of the Uniform</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          On the day of the competition, my Russian teacher and I sat in the auditorium, watching the works of other students and waiting for the evaluation. My teacher, who had already had the experience of sending her son to the military, was deeply satisfied with my appearance, dressed in a handsome Republic of Korea officer's uniform and reciting the anguish of a 19th-century soldier. Russians love uniforms. For the 3 years I was in Russia, whenever I was in a crisis, I would fiddle with the officer's uniform that I had carefully kept in my closet. And when I went out in my uniform, I was not afraid of anything. 🫡
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          In the end, it was a very satisfying happy ending as I won the <span class="font-bold text-green-600">'Grand Prize'</span> in the name of the president of Moscow State University. Although the precious 3 days of my vacation were sacrificed with 'Junker's Prayer,' the prayer of a 19th-century Russian trainee brought an award of honor to a 21st-century Korean international student. 🥳
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎸 Another Literature Competition: 'If You Don't Have an Aunt'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Oh, there was also a small literature competition during the semester, and at that time, I sang a song called <span class="italic">'If You Don't Have an Aunt'</span> while playing the guitar. 🎸 The lyrics are very simple and quirky. It's about how if you never had something, you would never lose it. I also wore my officer's uniform and sang the song. My Russian teacher was so amused by the song's rhythm, which did not match the serious officer's uniform, that she shed tears of emotion. 🤣 The sight of the serious international student who had recited the anguish of a 19th-century soldier, now cheerfully strumming the guitar and singing, "If I don't have a wife, I have no reason to run away," must have been a very fresh and commendable shock to the teacher.
        </p>

        <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

        <p class="leading-relaxed mb-6 text-slate-700">
          What I felt anew while participating in the competition was that Russians still love their literature, and to an extreme degree. From this, I could feel that there was still a pure side left in the hearts of the Russian people. ❤️
        </p>
      `}},{id:"post-301",title:{ko:"예기치 않은 문제",en:"An Unexpected Problem"},subtitle:{ko:"비자 뺑뺑이, 그 끝에서 만난 뜻밖의 우크라이나 유람기",en:"The Visa Run, and an Unexpected Trip to Ukraine at the End of It"},imageUrl:"https://cdn.shopify.com/s/files/1/0179/4388/7926/articles/ukraine-flag-history-cultural-significance-interesting-facts-6846979.png?v=1768959647&width=1200&height=675&crop=center&format=webp&quality=85?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          흔히 한국 사람들이 많이 아는 미국 비자 시스템은 비자가 만료되어도 유효한 체류 서류만 있으면 합법적 체류가 가능한 ‘입국권과 체류권의 분리’ 구조를 띠고 있다. 하지만 러시아는 비자 자체가 곧 체류 허가증이기 때문에, 비자의 만료는 곧 체류 자격의 상실을 의미한다. 이러한 시스템의 차이를 명확히 인지하지 못하면 러시아 생활에서 예기치 못한 행정적 낭패를 보기 십상이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">꼬여버린 비자 갱신 😫</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          방학이 시작하기전 비자 갱신에 대해 학과 사무실에 문의를 했었다. 학과 사무실에서는 “비자가 끝나기 전에만 연장  신청하면 돼요.”라는 안내를 들었다. 그래서 마음 놓고 방학 동안 신나게 놀고 돌아왔더니, “미안해요, 비자 만료 한 달 전에 미리 연장을 했어야 해요.”라는 손바닥 뒤짚는 듯 한 설명을 들었다. 개인적으로 꼼꼼히 알아보지 않은 내 잘못도 있지만 학과에서는 이런 일은 종종 있고 크게 걱정할 일은 아니라고 했다. 이런 일이 있었으면서도 한 달 전에 비자 연장 신청을 해야 한다는 건 왜 알려주지 않은지 궁금했다. 어쨌든, 당장 체류가 문제가 될 수 있으니 직원의 말을 들어보았다. 요약하자면 다음과 같다.
        </p>

        <div class="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400 mb-8">
          <p class="leading-relaxed text-slate-700 italic">
            한국인은 무비자로 최대 연속 60일간 체류가 가능하다. 그리고 러시아를 떠야나만 거주 목적 변경이 된다. 따라서 비자가 만료되기 전에 러시아를 떠났다가 학업비자가 아닌 무비자로 들어와서 학업을 계속한다. 그리고 60일 내에 러시아가 아닌 다른 나라 러시아 대사관에서 비자를 다시 받아서 학업비자로 러시아에 들어온다는 계획이다. 이른바 ‘비자 뺑뺑이’ 처방이었다. 직원은 여기에 많은 학생들이 노르웨이 등의 나라를 방문한다고 했는데 나는 현실적으로 가까운 우크라이나 키예프로 행선지를 정했다. 당시만해도 전쟁 전이라 지리적으로도 문화적으로도 가까운 러시아와 우크라이나는 많은 사람들이 왕래했다.
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">국경에서의 갈취 🚌</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          우선 불법체류가 되지 않으려면 비자 만료 전에 러시아 영토를 빠져나가는 것이 급선무였다. 따라서 최대한 빨리 비자 만료일에 맞춰 우크라이나로 가는 버스를 예약했다. 기차가 좀 더 편하지만 가격이 더 저렴하한 버스를 선택했는데, 이로써 닥칠 미래를 전혀 알지 못했다. 아침에 출발한 버스는 밖이 어둑어둑해 질 때 쯤 러시아-우크라이나 국경에 도착하자, 국경 수비대원 두 명이 버스에 올라타서는 우리 버스로 와서는 외국인이 타고 있냐고 물었다. 내가 탄 버스에 외국인은 단 한 명, 바로 내가 있었다. 아마 외국인이 있으면 검문을 더 철저히 하라는 상부의 명령이 있었던 것 같다. 나 때문에 다른 사람들까지 가지고 온 짐 검사를 더욱 철저히 받아야 했다.
        </p>

        <div class="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
          <p class="leading-relaxed text-red-900 font-medium mb-2">💸 부당한 뇌물 요구</p>
          <p class="leading-relaxed text-red-800">
            그때 수비대원 하나가 내게 다가와 말을 걸었다. “너 때문에 이 모든 사람이 기다리는데 10만원 정도 주면 그냥 버스를 검사 없이 보내줄게”. 말도 안되는 부당한 뇌물 요구에 내가 버티자, 결국 그는 버스 기사와 협상을 벌였다. 모든 승객이 급행료 5천원씩을 부담하면 버스를 검사없이 보내준다고 했다. 사람들이 다 불만을 토로하며 돈을 내기로 합의하였기에 나도 그 돈을 냈다. 나는 분명 죄가 없다고 생각하지만 내 뒤통수로 러시아/우크라이나인들의 원망 섞인 따가운 눈초리가 느껴졌다. 남은 여정동안 어떤 일이 생길지도 모른다는 생각에 가지고 온 배낭을 꼭 끌어안은 채 목적지인 키예프에 무사히 도착할 때까지 잠들 수 없었다.
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">키예프에서의 하룻밤 🍺</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          버스는 16시간의 이동 끝에 늦은 밤 키예프에 도착했다. 미리 예약을 해둔 호스텔에 가서 짐을 풀고는 저녁 식사를 위해 바깥으로 나왔다. 숙소 주인이 추천해준 식당에 들어가 자리를 잡고 샤슬릭이라는 꼬치 고기와 맥주를 시켰다. 따뜻한 고기와 맥주를 먹으니 이제서야 긴장의 끈이 풀리는 듯 했다. 이젠 숙소에 돌아가 한숨자고 아침 먹고 바로 다시 모스크바에만 돌아가면 되었다. 다행히 모스크바로 가는 버스에서는 이전과 같은 불쾌한 일은 없었지만 차가 많이 밀려서 버스에서 장장 스무 시간이 넘는 긴 시간을 보내야 했다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">두 번째 키예프행, 이번엔 기차로 🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          그로부터 약 한 달 뒤, 아내와 함께 정식 비자를 발급 받기 위해 키예프로 향했다. 불미스러운 일이 생기지 않도록 이번에는 버스가 아닌 기차 이동을 결정했다. 러시아-우크라이나 국경에서 가장 가까운 러시아쪽 기차역에서 국경 수비대가 기차에 탑승하여 여권과 짐을 대강 검사하고는 도장을 찍어주었다. 짐 검사와 심사는 빠른 시간 안에 끝났고 다행히 뇌물을 요구하거나 하는 불쾌한 일 또한 없었다. 그 후 어느 정도 기차가 더 이동하고는 우크라이나 쪽 기차역에서 국경수비대가 탑승하여 입국 수속과 간단한 짐 검사를 했다. 기차 이동이 가격은 20퍼센트 정도 더 비쌌지만 누워서 갈 수 있고, 화장실 출입도 자유로우며, 무엇보다 국경 통과가 버스와 달리 신속하고 깔끔해서 마음에 들었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">꼬인 비자, 그리고 여행의 시작 🗺️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이른 아침 키예프에 도착한 바로 주 우크라이나 러시아 대사관을 찾아갔다. 대사관에 가보니 예약을 하지 않으면 비자발급 진행을 해줄 수 없다는 말을 들었다. 게다가 당시에는 담당자가 출장을 가서 없고 대리인도 없다고 했다. 숙소에 돌아와 숙소 주인 컴퓨터를 빌려서 비자를 온라인 등록 했고 비자 인터뷰 예약을 잡았다. 허탈했지만 기왕 이렇게 된거 ‘허탕’을 ‘여행’으로 세탁하기로 했다. 결심 후 행동은 신속했다. 바로 우크라이나 여행 정보를 수집했고, 리비우와 오데사라는 도시로 가는 기차표를 예매했다.
        </p>

        <h4 class="text-lg font-serif font-bold text-slate-800 mt-8 mb-3">환상적인 도시, 리비우 🍷</h4>
        <p class="leading-relaxed mb-6 text-slate-700">
          리비우의 첫인상은 환상적이었다. 시가지로 진입하자 유럽풍의 멋진 집들과 상점들 그리고 활기 넘치는 도시 분위기가 우리를 반겼다. 도시 자체가 거대한 박물관 같다는 생각마저 들었다. 시가지 중심가를 둘러보며 체리 와인을 시식하고 여러 관광지를 구경했다. 그리고 저녁에는 그리스 식당에 가서 근사한 식사를 즐겼다. 물가가 저렴해서 한국돈 만오천원이면 제대로 된 식사에 맥주를 곁들여 먹을 수 있었다.
        </p>

        <h4 class="text-lg font-serif font-bold text-slate-800 mt-8 mb-3">항구 도시 오데사 ⚓</h4>
        <p class="leading-relaxed mb-6 text-slate-700">
          이어 방문한 오데사는 한국으로 치면 부산과 같은 항구 도시인데 별로 인상깊은 도시는 아니었다. 다행히 어느 식당이든 물가는 저렴했고 음식이 맛있었다. 메뉴는 러시아와 크게 다를 건 없어 보였는데 확연히 맛이 좋다고 느껴졌다. 더불어 여수 밤바다가 생각나는 부둣가의 야경도 꽤나 멋들어졌다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">다시 키예프로, 끝나지 않은 여정 💉</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          키예프에 다시 돌아와서는 비자 발급을 위한 예약에 필요하다는 에이즈 검사를 하러 갔다. 정확히 왜 에이즈 검사가 필요한지는 모르겠지만 아마 전에는 러시아로 가는 사람 중에 에이즈 환자가 있어서 문제가 되었던 것이 아닌지 조심히 추측해 보았다. 에이즈 검사는 일주일 후에 받아볼 수 있고 비자 예약은 2-3주 뒤로 잡았기에 결과는 다음 방문에 받기로 하고 일단 모스크바로 다시 돌아왔다.
        </p>

        <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

        <p class="leading-relaxed mb-6 text-slate-700">
          돌이켜보면 이 탈 많은 ‘비자 런’은, 결과적으로 예기치 않은 선물 같은 우크라이나 유람기가 되어버렸다. 다만 마음 한켠에 무거운 아쉬움이 남는다. 당시 우리가 발걸음을 옮기며 즐거운 추억을 쌓았던 그 정겨운 장소들 중 상당수가, 안타깝게도 지금은 전쟁 속에 구글 맵에 표시되지 않는다. 하루빨리 이 비극적인 전쟁이 멈추고 우크라이나에 다시금 평화가 찾아오기를 진심으로 바란다. 그래서 언젠가 다시 그 땅을 밟았을 때, 지도에 잠시 사라졌던 그 거리들이 다시 활기를 되찾고 우리를 반겨주기를, 그리고 그때는 비자 걱정 없는 가벼운 마음으로 리비우 시가지의 깊은 체리 와인을 다시 한 번 맛볼 수 있기를 간절히 기원해 본다.
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          The US visa system, which many Koreans are familiar with, has a 'separation of entry and residence rights' structure where you can legally stay as long as you have valid residence documents, even if your visa has expired. However, in Russia, the visa itself is the residence permit, so the expiration of the visa means the loss of residence status. If you do not clearly recognize this difference in systems, you are likely to face unexpected administrative difficulties in your life in Russia. 🛂
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">A Tangled Visa Renewal 😫</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Before the vacation began, I inquired about visa renewal at the department office. The department office told me, "You just need to apply for an extension before your visa expires." So I went on vacation with a carefree mind, and when I came back, I was told, "Sorry, you should have applied for an extension a month before your visa expired." Although it was my fault for not checking carefully, the department said that such things happen often and that it was not a big deal. I wondered why they didn't tell me that I had to apply for a visa extension a month in advance, even though such things had happened before.
        </p>
        
        <div class="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400 mb-8">
          <p class="leading-relaxed text-slate-700 italic">
            "Anyway, since my stay could be a problem right away, I listened to the staff. To summarize: Koreans can stay for a maximum of 60 consecutive days without a visa. And you have to leave Russia to change your purpose of residence. Therefore, the plan was to leave Russia before my visa expired, enter without a visa, not a student visa, and continue my studies. And then, within 60 days, I would get a visa again at a Russian embassy in another country, not Russia, and enter Russia with a student visa. This was the so-called <span class='font-bold text-yellow-700'>'visa run'</span> prescription."
          </p>
        </div>

        <p class="leading-relaxed mb-6 text-slate-700">
            The staff said that many students visit countries like Norway, but I realistically chose Kyiv, Ukraine as my destination. At that time, before the war, many people traveled between Russia and Ukraine, which were geographically and culturally close.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Extortion at the Border 🚌</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          First of all, to avoid being an illegal immigrant, it was urgent to leave Russian territory before my visa expired. Therefore, I booked a bus to Ukraine as quickly as possible to match my visa expiration date. I chose a bus, which was cheaper than a train, although a train would have been more comfortable, and I had no idea what future this would bring. The bus, which left in the morning, arrived at the Russia-Ukraine border when it was getting dark outside. Two border guards got on the bus and asked if there were any foreigners on board. There was only one foreigner on my bus, and that was me. I think there was an order from above to be more thorough in checking if there were any foreigners. Because of me, everyone else had to have their luggage checked more thoroughly.
        </p>

        <div class="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
          <p class="leading-relaxed text-red-900 font-medium mb-2">💸 Unfair Bribe Demand</p>
          <p class="leading-relaxed text-red-800">
            At that time, one of the guards approached me and spoke to me. "Because of you, all these people are waiting. If you give me about 100 dollars, I'll let the bus go without inspection." When I resisted the absurd and unfair demand for a bribe, he eventually negotiated with the bus driver. He said that if all the passengers paid an express fee of 5 dollars each, he would let the bus go without inspection. Since everyone complained and agreed to pay the money, I also paid it. I was sure I was innocent, but I could feel the resentful and stinging glares of the Russians/Ukrainians on the back of my head. I couldn't fall asleep until I arrived safely in Kyiv, my destination, clutching my backpack tightly, thinking about what might happen during the rest of the journey.
          </p>
        </div>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">One Night in Kyiv 🍺</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After a 16-hour journey, the bus arrived in Kyiv late at night. I went to the hostel I had booked in advance, unpacked my luggage, and went out for dinner. I went into a restaurant recommended by the hostel owner, took a seat, and ordered shashlik, a skewered meat, and beer. After eating the warm meat and drinking the beer, I felt the tension finally release. Now I just had to go back to the hostel, get some sleep, have breakfast, and go back to Moscow. Fortunately, there were no unpleasant incidents like before on the bus to Moscow, but the traffic was heavy, so I had to spend a long time of over twenty hours on the bus.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Second Trip to Kyiv: This Time by Train 🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          About a month later, I headed to Kyiv with my wife to get a formal visa. To avoid any unpleasant incidents, we decided to travel by train this time, not by bus. At the Russian train station closest to the Russia-Ukraine border, border guards boarded the train, roughly checked our passports and luggage, and stamped them. The luggage check and inspection were over in a short time, and fortunately, there were no unpleasant incidents such as demanding bribes. After the train had traveled a little further, border guards boarded at the Ukrainian train station and conducted entry procedures and a simple luggage check. The train journey was about 20 percent more expensive, but I liked it because I could lie down, go to the bathroom freely, and most importantly, the border crossing was quick and clean, unlike the bus. ✨
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">A Tangled Visa, and the Beginning of a Journey 🗺️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          As soon as we arrived in Kyiv early in the morning, we went to the Russian Embassy in Ukraine. When we went to the embassy, we were told that we could not proceed with the visa application without an appointment. In addition, at that time, the person in charge was on a business trip and there was no deputy. I went back to my accommodation, borrowed the owner's computer, registered for the visa online, and made an appointment for a visa interview. I was disappointed, but since it had already happened, I decided to <span class="bg-yellow-100 px-1">'launder' the 'wasted trip' into a 'trip'.</span> After making the decision, my actions were swift. I immediately gathered information about traveling in Ukraine and booked train tickets to the cities of Lviv and Odesa.
        </p>

        <h4 class="text-lg font-serif font-bold text-slate-800 mt-8 mb-3">Lviv, a Fantasy City 🍷</h4>
        <p class="leading-relaxed mb-6 text-slate-700">
          The first impression of Lviv was fantastic. As we entered the city, we were greeted by wonderful European-style houses and shops, and a vibrant city atmosphere. I even thought that the city itself was like a huge museum. We looked around the city center, tasted cherry wine, and visited several tourist attractions. And in the evening, we went to a Greek restaurant and enjoyed a wonderful meal. The prices were so cheap that we could have a proper meal with beer for about 15 dollars.
        </p>
        
        <h4 class="text-lg font-serif font-bold text-slate-800 mt-8 mb-3">Odesa, a Port City ⚓</h4>
        <p class="leading-relaxed mb-6 text-slate-700">
          Odesa, which we visited next, is a port city like Busan in Korea, but it was not a very impressive city. Fortunately, the prices were cheap at any restaurant, and the food was delicious. The menu didn't seem much different from Russia, but I felt that the taste was clearly better. In addition, the night view of the pier, which reminded me of the night sea of Yeosu, was also quite wonderful. 🌃
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Back to Kyiv: An Unfinished Journey 💉</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After returning to Kyiv, I went to get an AIDS test, which was required for the visa application. I didn't know exactly why an AIDS test was needed, but I carefully guessed that perhaps there had been a problem with an AIDS patient going to Russia in the past. The results of the AIDS test would be available in a week, and the visa appointment was scheduled for 2-3 weeks later, so we decided to get the results on our next visit and returned to Moscow for the time being.
        </p>

        <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

        <p class="leading-relaxed mb-6 text-slate-700">
          Looking back, this troublesome 'visa run' turned out to be an unexpected gift of a trip to Ukraine. However, a heavy regret remains in a corner of my heart. Many of the friendly places where we walked and made happy memories at that time are unfortunately not marked on Google Maps now due to the war.
        </p>
        
        <blockquote class="border-l-4 border-russia-blue pl-4 py-2 my-6 italic text-slate-700 bg-slate-50">
          "I sincerely hope that this tragic war will stop as soon as possible and that peace will return to Ukraine. So that when I set foot on that land again someday, the streets that had temporarily disappeared from the map will regain their vitality and welcome us, and that at that time, I will be able to taste the deep cherry wine of Lviv's city streets again with a light heart, free from visa worries. 🙏"
        </blockquote>
      `}},{id:"post-302",title:{ko:"비자 재발급",en:"Visa Re-issuance"},subtitle:{ko:"세 번의 국경 횡단, 그리고 마침내 얻은 한 장의 종이",en:"Three Border Crossings, and a Single Piece of Paper Finally Obtained"},imageUrl:"https://c8.alamy.com/comp/2BHT8N9/border-crossing-stamps-in-the-passport-2BHT8N9.jpg?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">다시, 운명의 땅 키예프로 🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          3주 뒤, 비자 인터뷰가 있는 운명의 날을 맞아 열차를 타고 다시 우크라이나 키예프로 향했다. 이젠 벌써 몇번 와봤다고 기차 이동도 능숙하고 키예프도 익숙하다. 일단 키예프에 온 목적인 비자부터 처리해야 했다. 제일 먼저 향한 곳은 지난 번에 에이즈 검사를 하러 갔던 병원이었다. 아내가 농담으로 “여보, 에이즈 양성 나오면 우린 어떻게 되는 거야?”라고 물었다. 맹세코 그럴 일은 없기에 생각도 해본 적 없지만, 아주 만약에 아주 혹시라도 그렇다면 비자가 문제가 아니라 내 인생이 심각하게 난처해질 것 같았다. 병원에서 ‘이상 없음’이라는 당연한 결과를 받았는데도 이상하리만큼 큰 안도감과 행복이 몰려왔다. 행복은 바로 당신 발밑에 있음을 잊지 말자. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">순조로운 시작과 성급한 자축 🍷</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          지난 번에는 대사관에 갈 때 길을 조금 해멨지만 이제는 길을 잘 알기에 느긋하게 약속시간에 맞춰 갈 수 있었다. 대사관에서 직원이 비자 관련 서류를 살펴보는 동안 조금 긴강이 되었지만 서류가 잘 작성되고 준비되었다는 말에 한시름 놓았다. 다만 비자 발급에 영업일 기준으로 3일 정도가 더 걸린다고 하여 키예프에서 여행을 하며 기다리기로 하였다. 지난 번에는 바로 다른 도시로 떠나서 정작 우크라이나의 심장이자 수도인 키예프를 제대로 보지 못했었다. 계획했던 일이 잘 처리가 되었기에 자축하는 마음으로 대낮부터 근사한 식당에 가서 스테이크와 와인을 시켰다. 둘이서 배불리 먹고도 3만원 남짓한 청구서를 보며, 우크라이나의 물가에 다시 한 번 감탄했다. 
        </p>

        <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue my-6">
          <p class="leading-relaxed text-slate-700">
            여담으로, 2016년 당시 우크라이나의 물가는 상상을 초월할 정도로 저렴했다. 어느 정도냐면, 지하철 요금은 200원도 안했고, 보통 한 끼 식사는 4-5천원 이내, 맥주 500mL 한 잔을 식당에서 사면 천 원 정도였다. 하지만 이 비현실적인 물가 뒤에는 우크라이나의 아픈 역사가 숨어 있었다. 2014년 러시아가 우크라이나의 핵심 지역인 돈바스와 크림반도를 무력으로 병합한 뒤, 우크라이나의 경제는 직격탄을 맞았다. 우크라이나의 화폐 가치가 폭락하면서, 외화를 가진 사람들은 상관없었지만 그 땅을 일구며 살아가는 현지인들에게는 힘든 나날이었음이 분명했다. 지금도 전쟁 중인 우크라이나의 현실이 어떨지 상상도 하기 힘들다. 
          </p>
        </div>

        <p class="leading-relaxed mb-6 text-slate-700">
          어쨌든 무거운 이야기는 뒤로 하고, 키예프에 3번 방문하는 동안 항상 같은 속소에 머물렀다. 그 덕에 숙소 주인과도 꽤나 친해졌고 이번 방문에는 작은 선물도 챙겨서 주었다. 숙소 주인에게 키예프를 조금 더 천천히 둘러보고 싶다고 말하며 여행지를 추천해 줄 수 있는지 물어보았다. 많은 것 중에 나의 이목을 제일 끌었던 것은 바로 키예프에서 출발하는 당일치기 체르노빌 여행이었다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">체르노빌 투어의 유혹 ☢️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          체르노빌 투어는 과거에 매우 인기 있는 여행 프로그램 중 하나였다. (물론 현재는 안타까운 러·우 전쟁으로 인해 체르노빌 지역 일부가 파괴되었고 안전 문제가 불거져, 언제 다시 이 투어가 재개될지 미지수다.) 당시에는 폐허가 된 도시 프리피야트를 걷는 코스나, 심지어 체르노빌 원자력 발전소 내부를 탐방하는 간 큰 투어 옵션도 있었다. 키예프에서 출발해 하루 종일 진행되었는데, 그 성능을 100% 신뢰할 수는 없지만 나름대로 방사능 측정기 같은 안전 장비도 제공되었다고 한다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          당시 나는 자연에서 아주 조금 나오는 방사선에 대해 연구를 하고 있었다. 웬지 체르노빌 투어가 가서 괜찮은 표본(?)을 좀 챙겨올 수 있지 않을까하는 엉뚱한 학구열에 당장이라도 가고 싶었다. 하지만 방사선 분야의 전문가이신 지도 교수님조차 그곳엔 본인이라면 가지 않겠다고 했던 말이 뇌리를 스쳤다. 게다가 우리 부부는 아직 아이도 없었기에, 혹시 모를 불확실성의 씨앗을 심고 싶지 않았다. 만일 찰나의 호기심 때문에 훗날 태어날 우리 아이가 조금이라도 건강에 불편함을 겪는다면, 평생 돌이킬 수 없는 죄책감을 안고 살아야 할 것 같았다. 결국 학구열보다 가족의 평화를 지키기로 결정했다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">뜻밖의 발견, 키예프 국립 식물원 🌸</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          숙소 주인이 추천해 준 또 다른 곳은 키예프 국립 식물원(Kyiv National Botanical Garden)이었다. 처음엔 대단할 것 없어 보였지만, 산책하다 우연히 발견한 작은 돔 형태의 온실이 하이라이트였다. 입장료를 내고 들어가 보니 우크라이나의 척박한 기후에서는 상상도 할 수 없는 열대, 사막 지역의 신기한 식물과 동물들이 가득했다. 구경을 마치고 야외로 나와 걷다 보니 뜻밖에도 ‘한국 정원’이 나타났다. 이역만리 우크라이나 땅에 이토록 정교한 한국 정원이 있다니! 안내문을 보니 양국 교류를 기념하여 한국에서 직접 장인과 재료를 공수해 지었다고 한다. 단아한 정자도 예뻤지만, 그 옆에 한반도 지도 모양으로 심어진 꽃들을 보며 묘한 애국심마저 차올랐다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">다시, 매력적인 도시 리비우 🍒</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          비자 발급까지 아직 시간이 남았기에 우리는 다시 한번 매력적인 도시 리비우(Lviv)로 향했다. 리비우는 여전히 유럽의 낭만이 물씬 풍기는 곳이었다. 골목마다 자리 잡은 로스터리 카페에서 풍기는 진한 커피 향이 도시의 운치를 더했다. 하지만 리비우 최고의 아웃풋은 단연 ‘체리 와인’이다. 지난번 방문 때 그 달콤함에 반했던 우리는 아예 작정을 하고 가게에 들러 지인들에게 선물할 와인을 여러 병 쟁여두었다. 리비우는 도시 자체가 아담해서 굳이 목적지를 정하지 않고 발길 닿는 대로 걸어도 훌륭한 여행이 되는 마법 같은 곳이었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">해피엔딩: 지긋지긋했던 비자 런의 끝 🎉</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          리비우의 낭만을 뒤로하고 다시 키예프로 돌아와 대망의 비자를 수령했다. 무려 세 번이나 국경을 넘나들며 우크라이나에 출석 도장을 찍은 끝에, 마침내 내 여권 한 페이지를 당당히 장식하고 있는 빳빳한 새 비자를 마주하니 십 년 묵은 체증이 싹 가시는 기분이었다. 러시아는 딱 ‘학비를 낸 기간’만큼만 학생 비자를 내어준다. 나는 이미 남은 1년 치 학비를 완납했기에, 한국으로 돌아가기 전까지 이 지긋지긋한 비자 런을 다시 뛸 일은 없었다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          돌이켜보면 한낱 종이 쪼가리 하나를 얻기 위해 버스와 기차에서 뜬눈으로 밤을 새우고, 뇌물을 뜯기고, 피까지 뽑아야 했던 이 긴 여정은 그야말로 슬라브식 하드코어 어드벤처였다. 무엇보다 이 핑계 저 핑계 대며 수업을 합법적으로(?) 빼먹고, 아내와 함께 우크라이나의 낭만적인 골목길을 거닐며 잊지 못할 추억을 잔뜩 쌓았으니 이 어찌 완벽한 해피엔딩이 아니겠는가. 비자 런이라는 이름으로 시작된 우크라이나 유람기는 이렇게 내 여권 속 선명한 도장 하나와 달콤한 체리 와인 향기만을 남긴 채 아름답게 막을 내렸다.
        </p>
      `,en:`
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Again, to the Fateful Land of Kyiv 🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          Three weeks later, on the fateful day of the visa interview, I took a train to Kyiv, Ukraine again. I had been here a few times now, so I was skilled at train travel and familiar with Kyiv. First, I had to take care of the visa, which was the purpose of my visit to Kyiv. The first place I went to was the hospital where I had gone for an AIDS test last time. My wife jokingly asked, "Honey, what happens to us if you test positive for AIDS?" I swear there was no way that would happen, so I had never even thought about it, but if by some very slim chance it did, it would not be a visa problem, but my life would be in serious trouble. Even though I received the obvious result of 'no abnormalities' from the hospital, I felt an unusually great sense of relief and happiness. Let's not forget that happiness is right under your feet. ✨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">A Smooth Start and a Premature Celebration 🍷</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Last time, I got a little lost on my way to the embassy, but now I knew the way well, so I was able to go at a leisurely pace and arrive on time for my appointment. I was a little nervous while the embassy staff looked over my visa documents, but I was relieved to hear that the documents were well-written and prepared. However, since it would take about 3 more business days to issue the visa, we decided to wait while traveling in Kyiv. Last time, we left for another city right away, so we didn't get to see Kyiv, the heart and capital of Ukraine, properly. Since the planned work was handled well, we went to a nice restaurant in the middle of the day and ordered steak and wine to celebrate. We were amazed once again at the prices in Ukraine when we saw the bill for just over 30 dollars, even though the two of us had eaten our fill.
        </p>

        <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue my-6">
          <p class="leading-relaxed text-slate-700">
            <span class="font-bold">As an aside,</span> the prices in Ukraine in 2016 were unimaginably cheap. To give you an idea, the subway fare was less than 0.2 dollars, a typical meal was within 4-5 dollars, and a 500mL glass of beer at a restaurant was about 1 dollar. 🍻 However, behind these unrealistic prices was the painful history of Ukraine. After Russia's armed annexation of Ukraine's key regions of Donbas and Crimea in 2014, Ukraine's economy was hit hard. As the value of Ukraine's currency plummeted, it didn't matter to people with foreign currency, but it must have been difficult days for the locals who were cultivating the land. It's hard to even imagine what the reality of Ukraine, which is still at war, is like now.
          </p>
        </div>

        <p class="leading-relaxed mb-6 text-slate-700">
          Anyway, putting the heavy stories aside, we always stayed at the same accommodation during our 3 visits to Kyiv. Thanks to that, we became quite close with the owner of the accommodation, and on this visit, we even brought a small gift. I told the owner that I wanted to take a slower look around Kyiv and asked if he could recommend any travel destinations. Among many things, what caught my eye the most was a day trip to Chernobyl departing from Kyiv.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Temptation of a Chernobyl Tour ☢️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The Chernobyl tour was one of the most popular travel programs in the past. (Of course, now, unfortunately, parts of the Chernobyl area have been destroyed due to the Russian-Ukrainian war, and safety issues have arisen, so it is uncertain when this tour will resume.) At that time, there were tour options such as a course walking through the ruined city of Pripyat, and even a bold tour option to explore the inside of the Chernobyl nuclear power plant. The tour departed from Kyiv and lasted all day, and although its performance could not be 100% trusted, it was said that safety equipment such as a radiation detector was also provided.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          At that time, I was researching the very small amount of radiation that comes from nature. For some reason, I wanted to go on the Chernobyl tour right away, with the quirky academic passion that I might be able to get some good samples(?). However, the words of my advisor, who was an expert in the field of radiation, that he would not go there himself, crossed my mind. In addition, my wife and I did not have children yet, so we did not want to plant a seed of uncertainty. If our future child were to suffer even a little from health problems because of a moment of curiosity, I felt that I would have to live with a sense of guilt that I could never undo for the rest of my life. In the end, I decided to protect the peace of my family rather than my academic passion. 👨‍👩‍👧
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">An Unexpected Discovery, the Kyiv National Botanical Garden 🌸</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Another place the accommodation owner recommended was the Kyiv National Botanical Garden. At first, it didn't seem like much, but the highlight was a small dome-shaped greenhouse that we accidentally discovered while walking. After paying the entrance fee and going inside, we found that it was full of strange plants and animals from tropical and desert regions that would be unimaginable in the barren climate of Ukraine. 🌵 After finishing our tour and walking outside, we unexpectedly came across a 'Korean Garden.' To think that there was such an elaborate Korean garden in the distant land of Ukraine! According to the information sign, it was built by bringing craftsmen and materials directly from Korea to commemorate the exchange between the two countries. The elegant pavilion was also beautiful, but seeing the flowers planted in the shape of the Korean peninsula map next to it, I felt a strange sense of patriotism welling up. 🇰🇷
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Again, to the Charming City of Lviv 🍒</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Since we still had time before our visa was issued, we headed to the charming city of Lviv once again. Lviv was still a place full of European romance. The rich aroma of coffee wafting from the roastery cafes in every alley added to the city's charm. But the best output of Lviv is definitely 'cherry wine'. We, who had fallen in love with its sweetness on our last visit, made a point of stopping by a shop and stocking up on several bottles of wine to give as gifts to our acquaintances. Lviv is such a small city that it was a magical place where you could have a great trip just by walking wherever your feet took you, without having to set a destination.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">A Happy Ending: The End of the Tedious Visa Run 🎉</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Leaving the romance of Lviv behind, we returned to Kyiv and received our long-awaited visa. After crossing the border as many as three times and getting our attendance stamped in Ukraine, the feeling of finally seeing the crisp new visa adorning a page of my passport was like having a ten-year-old indigestion completely relieved. Russia only issues student visas for the exact period for which tuition has been paid. Since I had already paid the remaining year's tuition in full, I didn't have to run this tedious visa run again before returning to Korea.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Looking back, this long journey of having to stay up all night on buses and trains, being extorted for bribes, and even having my blood drawn just to get a single piece of paper was truly a Slavic-style hardcore adventure. Most of all, what a perfect happy ending it was to have been able to legally(?) skip classes with this and that excuse, and to have built up a lot of unforgettable memories while strolling through the romantic alleys of Ukraine with my wife. The Ukrainian cruise that began under the name of a visa run thus came to a beautiful end, leaving behind only a clear stamp in my passport and the sweet scent of cherry wine.
        </p>
      `}},{id:"post-303",title:{ko:"친구들의 방문",en:"A Visit from Friends"},subtitle:{ko:"지갑은 잃었지만, 찐한 러시아의 추억을 얻다",en:"I Lost My Wallet, but Gained Rich Memories of Russia"},imageUrl:"https://mf.b37mrtl.ru/rbthmedia/images/2020.06/article/5ed7920a85600a12c8203c47.jpg?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          나에게는 학부 시절 함께 튀르키예 여행을 함께 했던 두 명의 친구가 있다. 두 친구는 내가 러시아에 있을 때 각각 한국외국어대와 중앙대에서 학업을 하고 있었다. 겨울 방학 기간을 이용해서 모스크바에 방문하고 싶다고 했을 때 오랜만에 친구를 만난다는 사실에 기분이 들떴다. 추운 겨울에 모스크바에 오는 친구들에게 무엇을 보여줘야 할지 고민이 이만저만이 아니었다. 가족들이 방문했을 때 처럼 유명한 관광 명소들을 선별해서 보여줄 수 있지만 조금 더 날것의 ‘진짜 러시아 향’을 물씬 느끼게 해주고 싶었다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          마침 그때, 이전에 (2년차 6화에 등장했던) 카브로프라는 작은 도시가 고향인 러시아인 친구가 떠올랐다. 그 친구는 한국 문화에 관심이 많았기에, 나처럼 이미 러시아에 오염(?)된 한국인보다 때 묻지 않은 ‘찐’ 한국 사람을 만나보고 싶어했다. 그래서 친구 두 명이 온다는 소식을 전하며 어디를 데려가면 좋을지 조언을 구했다. 러시아인 친구는 흔쾌히 자신의 고향을 소개해 주고 싶다고 나섰다. 모스크바보다 훨씬 더 진짜 러시아스러운 체험을 할 수 있을뿐더러, 자기 아버지가 특별한 체험까지 도와주겠다고 호언장담하여 우리는 카브로프로 떠나는 여행을 계획했다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">모스크바에서의 재회: 캄차카 펍에서 회포 풀기 🍻</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          며칠 뒤, 모스크바 셰레메치예보 국제공항에 도착한 친구들을 마중 나가 미리 예약해 둔 시내 숙소로 안내했다. 사실 셰레메치예보 공항에 올 때면, 모스크바에 처음 오자마자 당했던 택시 사기의 쓰라린 추억이 떠오르곤 했다. 하지만 가족들에 이어 친구들까지 이 공항으로 나를 찾아와 주니 그 안 좋았던 기억도 꽤 많이 희석된 상태였다. 2016년 당시 러시아는 수도인 모스크바조차 영어가 안 통하는 곳이 태반이었다. 그렇기에 친구들이 내 도움 없이 자력으로 할 수 있는 일은 극히 제한적이었다. 물론 내가 없었어도 구글 번역기를 쥐고 어떻게든 눈물겨운 생존기를 찍었겠지만 말이다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          오후에 도착한 친구들의 체크인을 돕고 짐을 풀고 나니 어느새 시간이 늦어졌다. 유럽의 여느 도시들처럼 모스크바 역시 대부분의 식당이 일찍 문을 닫는다. 다행히 시내로 나가면 밤늦게까지 영업하는 술집들이 있어, 오랜만에 회포도 풀 겸 내가 개인적으로 좋아하던 ‘캄차카’라는 펍(Pub)으로 안내했다. 참고로, 캄차카는 러시아 최동단에 위치한 반도의 이름이다. 안주와 맥주를 시켜놓고 밀린 이야기꽃을 피우다 보니, 친구들도 비행의 여독을 잊은 채 늦은 밤이 되어서야 술집을 나설 수 있었다. 그 후 며칠간은 삼총사처럼 셋이서 뭉쳐 다니며 모스크바 시내를 부지런히 둘러보았다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">불미스러운 사건: 내 지갑이 어디 갔지! 😠</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          그러다 모스크바 시내의 한 식당에서 식사할 때 불미스러운 일이 터졌다. 식당에 들어선 우리는 각자 벗은 외투를 자신이 앉은 의자에 툭 걸어놓았다. 밥을 먹는 도중 내 등 뒤로 누군가 앉았다가 일어나는 낌새를 느꼈지만 크게 신경 쓰지는 않았다. 하지만 밥값을 계산하려던 순간, 등골이 서늘해지며 무언가 단단히 잘못되었다는 것을 깨달았다. 아무리 뒤져도 내 지갑이 보이지 않았다. 내 등 뒤에 앉아 있던 사람의 실루엣이 뇌리를 스쳤다. 즉시 경찰에 신고하자 식당으로 출동한 경찰이 CCTV를 확인했다. 곧 연락을 주겠다는 말에, 우리는 찜찜한 마음을 안고 어쩔 수 없이 경찰을 믿으며 발걸음을 돌려야 했다.
        </p>
        <div class="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
          <p class="leading-relaxed text-red-800">
            나중에 경찰서에서 연락이 와 가보니, 경찰관이 CCTV를 살짝 보여주며 내 지갑을 가져간 사람을 특정했다고 말해주었다. 그런데 정작 경찰관은 "이렇게 찍혀서는 범인을 찾을 수 없다"며 아주 귀찮다는 듯 심드렁하게 말했다. 게다가 내가 CCTV에 찍힌 얼굴을 제대로 보여달라고 요구하자 이마저도 거부했다. 도둑을 잡으려는 건지, 가해자의 초상권을 피해자로부터 보호하려는 건지 알 수 없는 환장할 노릇이었다. 이런 국가 기관의 태도를 겪고 나니, ‘러시아가 군사 강대국일 수는 있어도 선진국이 되려면 아직 한참 멀었구나’라는 생각이 다시금 들었다. 
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">카브로프로 가는 길: 보석 같은 도시들 🚗</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이런 씁쓸한 사건을 뒤로하고, 우리는 며칠간의 모스크바 구경을 마친 뒤 러시아인 친구의 고향 카브로프로 향하기 위해 차를 렌트했다. 아내와 나, 그리고 친구 둘까지 성인 넷이 모이니 렌터카 한 대를 꽉 채워 떠나기에 아주 훌륭한 인원수였다. 모스크바에서 카브로프까지는 직진만 하면 4시간 만에 닿을 거리였지만, 그 길목에 놓인 보석 같은 도시들을 그냥 지나칠 수는 없었다. 첫 번째 경유지였던 제법 큰 도시 '블라디미르'는 도시를 관통하는 긴 도로를 따라 끝없이 이어지는 화려한 조명이 인상적이었다. 하룻밤을 머물렀던 ‘수즈달’에서는, 오랜 역사를 품은 고즈넉한 러시아 겨울 마을의 풍경과 활기 넘치는 장마당의 소란스러움을 만끽할 수 있었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">카브로프 탐험: 토박이 친구 덕분에 👑</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          카브로프에 도착하니 러시아인 친구가 두 팔 벌려 우리를 기다리고 있었다. 숙소에 짐을 풀자마자 밖으로 나와 시가지 구경에 나섰다. 대학에 가기 전까지 이 도시에서 쭉 자란 러시아인 친구는 동네를 속속들이 알고 있었고, 거리를 걸을 때마다 곳곳에서 동네 지인들과 마주치며 인사를 나눴다. 공연이 없는 어느 극장 앞을 지날 때도 친구가 아는 사람이 있어, 덕분에 극장 내부와 무대 뒤, 심지어 의상실과 대기실까지 구석구석 구경하는 특권을 누렸다. 걷고 또 걷느라 다리도 아프고 허기가 지자, 꽁꽁 언 몸과 마음을 녹일 겸 식당으로 향했다. 시원한 맥주에 곁들인 현지 음식은 아주 훌륭했고, 우리 중에 흡연자는 없었지만 호기심에 ‘칼리얀’이라는 물담배도 하나 시켜서 뻐끔거리며 이국적인 분위기를 내보았다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">우솔리예 마을: 따뜻한 인심과 눈싸움 ❄️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이튿날 아침에는 우솔리예라는 근처의 작은 시골 마을로 향했다. 그곳에서 마을 아이들을 가르치는, 우리나라로 치면 ‘서당(?)’ 같은 문화원을 구경했다. 지역 고유의 전통 의상을 엿볼 수 있어 퍽 인상 깊었다. 이어서 성당에 들르니 신부님으로 보이는 분이 직접 나오셔서 성당 곳곳을 다정하게 소개해 주셨다. 구경을 마치고 나오자 이번엔 마을 반장님이 우리를 본인 집으로 초대해 따뜻한 차와 다과를 듬뿍 내어 주셨다. 모스크바의 차가운 도시 분위기에서는 좀처럼 느끼기 힘들었던 뭉클한 인심과 정이 아직 러시아 시골에는 고스란히 남아있었다. 오후에는 시골 마을에 수북이 쌓인 눈밭을 뒹굴며 동심으로 돌아가 눈싸움을 했고, 근처 썰매장에서 정말로 오랫만에 신나게 튜브 썰매도 탔다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">그랜드 피날레: 러시아식 사우나, 반야(Баня) 🔥</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          저녁 식사 후에는 대망의 러시아식 사우나인 ‘반야’를 체험하기 위해 러시아 친구 아버지의 지인 댁을 방문했다. 친구분의 자녀들까지 다 함께 모여 왁자지껄하게 사우나를 즐겼다. 집과 분리된 별채로 지어진 통나무 구조물이 바로 반야였다. 기본 원리는 한국의 사우나와 비슷했다. 장작불을 지피고 그 위에 돌을 뜨겁게 달군 뒤, 달궈진 돌 위로 물을 촤악 끼얹으면 순식간에 뜨거운 증기가 뿜어져 나오는 습식 사우나가 되어 온도가 급격히 올라갔다. 숨이 턱 막힐 정도로 뜨거움을 참다 한계에 다다르면, 나체 상태로 바로 통나무 밖 눈밭으로 뛰쳐나갔다. 사방이 칠흑같이 어두운 한겨울 눈밭 한가운데 욕조가 하나 덩그러니 놓여 있었다. 꽝꽝 얼어붙은 표면의 얼음을 깨부수고 차가운 물속에 푹 들어갔다 나와야 진짜 반야의 완성이라고 했다. 얼음물에서 튀어나와 눈밭을 한바탕 뒹굴고는 다시 반야로 뛰어 들어가는 이 극단적인(?) 냉온탕 과정을 세 번이나 반복하고 나서야 러시아인들은 흡족한 미소를 지었다. 극한의 사우나를 무사히 마친 우리는 집 안으로 초대받아, 숯불에 구운 고기와 독한 보드카를 쉴 새 없이 들이켰다. 뜨거운 사우나 직후에 독주까지 들어가니, 알딸딸한 기운에 젖어 그날 밤 어떻게 잠이 들었는지조차 기억나지 않았다.
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          그렇게 러시아의 작은 도시 카브로프에서의, 달궈진 반야 돌멩이처럼 뜨겁고 강렬했던 여행이 마무리되었다. 비록 모스크바에서 지갑을 잃어버리는 작은 헤프닝도 있었지만, 이역만리 먼 타국까지 나를 보러 날아와 준 그리운 친구들 덕분에 그마저도 웃어넘길 수 있는 유쾌한 안줏거리가 되었다. 무엇보다 나 또한 한러 친구들 덕에 ‘찐한 러시아’를 경험해 볼 수 있었다. 
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          I have two friends with whom I traveled to Turkey together during my undergraduate years. When I was in Russia, both of them were studying at Hankuk University of Foreign Studies and Chung-Ang University, respectively. When they said they wanted to visit Moscow during the winter vacation, I was excited to see my friends after a long time. I was at a loss as to what to show my friends who were coming to Moscow in the cold winter. I could show them famous tourist attractions, just as I did when my family visited, but I wanted to give them a more raw, 'real Russian scent'. 🤠
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Just then, I remembered a Russian friend from a small town called Kavrov (who appeared in Year 2, Episode 6). That friend was very interested in Korean culture, so he wanted to meet a 'real' Korean person who was not yet contaminated(?) by Russia like me. So, I told him that two of my friends were coming and asked for his advice on where to take them. My Russian friend readily offered to introduce his hometown. He boasted that we would be able to experience a much more authentic Russia than in Moscow, and that his father would even help us with a special experience, so we planned a trip to Kavrov.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Reunion in Moscow: Catching Up at the Kamchatka Pub 🍻</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          A few days later, I went to pick up my friends who had arrived at Moscow Sheremetyevo International Airport and guided them to their pre-booked accommodation in the city. In fact, whenever I came to Sheremetyevo Airport, I would be reminded of the bitter memory of the taxi scam I had fallen for as soon as I arrived in Moscow. However, since my family and now my friends had come to see me at this airport, that bad memory had been diluted quite a bit. At that time in 2016, even in the capital city of Moscow, there were many places where English was not spoken. Therefore, there were very few things my friends could do on their own without my help. Of course, even without me, they would have somehow managed to survive with Google Translate, albeit with a tearful struggle.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          After helping my friends, who had arrived in the afternoon, check in and unpack, it was already late. Like in any other European city, most restaurants in Moscow close early. Fortunately, there were pubs in the city center that were open late, so I guided them to my favorite pub, 'Kamchatka', to catch up after a long time. For reference, Kamchatka is the name of a peninsula located in the far east of Russia. We ordered some snacks and beer and caught up on each other's stories, and my friends were able to leave the pub late at night, having forgotten their travel fatigue. For the next few days, the three of us stuck together like the three musketeers and diligently explored the city of Moscow.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">An Unfortunate Incident: Where's My Wallet! 😠</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Then, an unfortunate incident occurred while we were eating at a restaurant in downtown Moscow. When we entered the restaurant, we each hung our coats on the chairs we were sitting on. While we were eating, I felt someone sit down and get up behind me, but I didn't pay much attention. However, when I was about to pay for the meal, a chill ran down my spine and I realized that something was seriously wrong. No matter how much I searched, I couldn't find my wallet. The silhouette of the person who had been sitting behind me flashed through my mind. When I immediately reported it to the police, the police who came to the restaurant checked the CCTV. They said they would contact me soon, so we had no choice but to trust the police and leave with a heavy heart.
        </p>
        <div class="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
          <p class="leading-relaxed text-red-800">
            Later, when I went to the police station after receiving a call, a police officer briefly showed me the CCTV and told me that they had identified the person who had taken my wallet. However, the police officer said indifferently, "We can't find the culprit with this footage," as if he was very annoyed. In addition, when I asked him to show me the face on the CCTV properly, he refused even that. It was a frustrating situation where I couldn't tell if they were trying to catch the thief or protect the perpetrator's portrait rights from the victim. After experiencing the attitude of this state agency, I once again thought, 'Russia may be a military superpower, but it still has a long way to go to become a developed country.'
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">On the Way to Kavrov: Gem-like Cities 🚗</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After this bitter incident, we finished our few days of sightseeing in Moscow and rented a car to head to our Russian friend's hometown of Kavrov. With my wife, me, and two friends, we were four adults, which was a great number to fill a rental car. It was a straight 4-hour drive from Moscow to Kavrov, but we couldn't just pass by the gem-like cities along the way. The first stop, a fairly large city called 'Vladimir', was impressive with its endless colorful lights along the long road that ran through the city. In 'Suzdal', where we stayed overnight, we were able to enjoy the scenery of a quiet Russian winter village with a long history and the noisy bustle of a lively market.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Exploring Kavrov: Thanks to My Insider Friend 👑</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          When we arrived in Kavrov, our Russian friend was waiting for us with open arms. As soon as we unpacked our luggage at the accommodation, we went out to explore the city. My Russian friend, who had grown up in this city until he went to university, knew the neighborhood inside out, and as we walked down the street, he would greet local acquaintances everywhere. Even when we passed by a theater where there was no performance, a friend of his was there, and thanks to him, we had the privilege of seeing the inside of the theater, behind the stage, and even the dressing rooms and waiting rooms. After walking and walking until our legs ached and we were hungry, we headed to a restaurant to warm our frozen bodies and minds. The local food, accompanied by cold beer, was excellent, and although none of us were smokers, we ordered a hookah called 'kalyan' out of curiosity and puffed on it to create an exotic atmosphere.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Village of Usolye: Warm Hospitality and a Snowball Fight ❄️</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The next morning, we headed to a small nearby village called Usolye. There, we visited a cultural center, which is like a 'seodang(?)' in our country, that teaches the village children. It was very impressive to see the unique traditional costumes of the region. Next, when we stopped by a cathedral, a person who seemed to be a priest came out and kindly introduced us to the various parts of the cathedral. After finishing our tour, the village headman invited us to his house and served us plenty of warm tea and refreshments. The heartwarming hospitality and affection that were hard to feel in the cold urban atmosphere of Moscow were still intact in the Russian countryside. In the afternoon, we rolled around in the snow-covered fields of the village and had a snowball fight, returning to our childhood innocence, and we also had a great time riding a tube sled at a nearby sledding hill for the first time in a long time.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Grand Finale: The Russian Sauna, Banya (Баня) 🔥</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After dinner, we visited the home of a friend of my Russian friend's father to experience the long-awaited Russian sauna, the 'banya'. All of the friend's children also gathered together and enjoyed the sauna in a boisterous atmosphere. The log structure built as a separate building from the house was the banya. The basic principle was similar to a Korean sauna. After lighting a wood fire and heating stones on top of it, when water was poured over the heated stones, hot steam was instantly released, turning it into a steam sauna and rapidly raising the temperature. After enduring the suffocating heat to the limit, we ran out into the snowfield outside the log cabin naked. In the middle of the pitch-black snowy field in the middle of winter, there was a bathtub. They said that the real banya was complete only after breaking the ice on the frozen surface and taking a dip in the cold water. After jumping out of the ice water and rolling around in the snowfield, we ran back into the banya. Only after repeating this extreme(?) hot and cold bath process three times did the Russians smile with satisfaction. After safely finishing the extreme sauna, we were invited into the house and drank strong vodka and ate charcoal-grilled meat without a break. After the hot sauna, the strong liquor went down, and I was so dazed that I don't even remember how I fell asleep that night.
        </p>

        <p class="leading-relaxed mb-6 text-slate-700">
          And so, our hot and intense trip to the small Russian city of Kavrov, like a heated banya stone, came to an end. Although there was a small incident of losing my wallet in Moscow, thanks to my dear friends who flew all the way to a foreign country to see me, even that became a pleasant anecdote to laugh about. Most of all, I also had the opportunity to experience 'real Russia' thanks to my Korean and Russian friends.
        </p>
      `}},{id:"post-303a",title:{ko:"외전 (5) - 러시아인의 연애관",en:"Side Story (5) - Russian Views on Love"},subtitle:{ko:"고백은 없어도 사랑은 시작되고, 이혼은 놀랍게 쿨하다",en:"Love Begins Without a Confession, and Divorce Arrives with Surprising Coolness"},imageUrl:"https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          인류의 영원한 베스트셀러, 러브스토리. 드라마, 영화, 소설을 막론하고 남의 연애사만큼 도파민을 솟구치게 하는 소재가 또 있을까? 그들이 지지고 볶다 해피엔딩을 맞든, 눈물의 새드엔딩을 맞든, 우리는 남의 사랑 이야기를 훔쳐보며 대리 만족을 느끼곤 한다. 그래서 이번엔 눈 내리는 대륙, 러시아 사람들의 연애와 결혼, 그리고 이혼을 아우르는 매운맛 연애관에 대해 이야기해 볼까 한다. 물론 나 역시 이 흥미진진한 생태계를 온몸으로 직접 부딪혀(?) 보았으면 완벽한 현장 르포가 되었겠지만, 참으로 불운하게도(?) 나는 러시아 땅을 밟기 전 이미 품절남이었다. 따라서 이 챕터는 철저히 주변인들의 생생한 증언과 나의 날카로운 관찰에 기반한 전지적 유부남 시점의 이야기임을 미리 밝혀 둔다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💘 고백 없는 연애의 시작</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          한국에서는 보통 누군가 용기를 내어 고백하고, 이를 받아들이면 “우리 오늘부터 1일이야”라며 공식적인 연애가 시작된다. 하지만 러시아식 연애는 결이 조금 다르다. 일단 ‘사귀자’는 명확한 선언이나 고백의 단계가 생략되는 경우가 허다하다. 그저 만나서 밥 먹고, 차 마시고, 자연스럽게 스킨십이 이어지면서 스며들듯 연인이 된다. 요즘은 K-드라마의 영향으로 한국식 연애 개념을 아는 현지 여성들도 늘었지만, 여전히 러시아인들끼리는 “나랑 사귈래?”라는 말이 꽤나 어색하고 간지러운 모양이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔥 스킨십과 진취적인 매력</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          또 하나 눈여겨볼 점은, 러시아 여성들이 사랑 앞에서는 꽤나 진취적이고 적극적이라는 것이다. 호감이 있는 남성에게는 거침없이 다가가 은근한 스킨십을 시도하기도 한다. 그러니 러시아 현지인이 훅 들어오는 스킨십에 ‘나한테 반했나?’ 하며 실실 쪼개고만 있어서는 안 된다. 몇 번 웃으며 받아주다가는 상대방이 이미 사귀는 사이라고 단정 지어버리는 아찔한 대참사가 일어날 수 있기 때문이다. 스킨십 진도 역시 한국보다 훨씬 개방적이다. 또 한 가지 흥미로운 건 한국 특유의 대실 문화는 거의 없고, 젊은 청춘들의 모든 뜨거운 역사는 주로 좁은 기숙사나 빈집에서 이루어진다는 사실이다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌹 데이트의 절대 룰: 홀수 꽃다발</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          사귀자는 명확한 선언은 생략할지언정, 이 무뚝뚝한 불곰국 상남자들도 데이트를 할 때만큼은 엄격하게 지키는 로맨틱한 룰이 하나 있다. 바로 꽃 선물이다. 러시아 여성에게 데이트 신청을 하려면 꽃다발은 거의 필수템에 가까운데, 여기서 꽃송이는 무조건 홀수여야만 한다는 절대 어겨서는 안 될 금기가 있다. 러시아에서 짝수의 꽃은 오직 장례식에서 망자에게 바칠 때만 쓰기 때문이다. 만약 러시아 여성을 만갈 기회가 있다면, 만약 뭣도 모르고 숫자가 딱 떨어지는 게 예쁘다며 짝수의 꽃을 내미는 실수는 하지 말자. 감사 인사는 넣어두어도 좋다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥃 결혼 이후의 현실과 K-드라마 판타지</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 이 화려한 로맨스를 지나 결혼의 현실로 넘어가면 이야기가 조금 슬퍼진다. 러시아 남자들을 떠올리면 흔히 소파에 늘어져 TV를 보며 보드카를 들이켜는 배불뚝이 대머리 아저씨 이미지가 강한데, 안타깝게도 이 편견은 제법 높은 타율로 현실과 일치한다. 러시아는 나폴레옹 전쟁과 제2차 세계대전이라는 참혹한 역사를 거치기도 했고, 무엇보다 남성들의 과도한 음주와 사고로 인한 낮은 기대수명 탓에 여전히 전체 성비가 여초 현상(여성 100명당 남성 86명 수준)을 띤다. 실제로 통계를 보면 러시아 여성의 기대수명은 78~79세에 달하지만, 남성의 기대수명은 68세 남짓에 불과하다. 이러한 불균형이 러시아 남자들에게 이성을 선택하는 부분에 있어서 우위를 점할 수 있는 일종의 특권을 쥐여주기도 했다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바의 살인적인 물가 탓에 대부분의 가정은 맞벌이가 필수다. 그런데 여자가 밖에서 똑같이 돈을 벌어와도 여전히 집안일과 육아는 오롯이 여성의 몫으로 남는 경우가 허다하다. 아내가 뼈 빠지게 집안일을 하는 동안, 소파와 혼연일체가 되어 보드카를 홀짝이는 남편들의 모습. K-드라마 속 다정한 한국 남자들의 모습이 러시아 젊은 여성들 사이에서 판타지처럼 소비되며 가정적인 남자가 최고의 이상형으로 떠오른 것에는 다 이유가 있는 셈이다. 한국인 남성들이여, 세계로!
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📉 75% 이혼율의 충격</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          그렇다면 이들의 끝은 어떨까? 놀랍게도 러시아의 이혼율은 약 75%에 달한다. 물론 이 수치가 네 쌍 중 세 쌍이 무조건 이혼한다는 뜻은 아니다. 한 해 동안 발생한 혼인 건수 대비 이혼 건수를 나눈 통계이다 보니, 같은 사람이 여러 번 이혼하고 재혼하는 이른바 ‘N차 이혼’ 건수도 중복으로 카운트되어 체감 수치를 확 끌어올린 경향이 있다. 내 주변의 지인들이나 학부모들을 보아도 그 정도로 이혼 가정이 넘쳐나진 않았다. 물론 47% 정도인 한국에 비하면 엄청나게 높은 것은 엄연한 사실이다. 생각해 보니 한국도 꽤 높다. 조심해야겠다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">❄️ 헤어짐도 냉정하게</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          나는 이 압도적인 이혼율의 원인을 나름대로 분석해 보았다. 첫째, 러시아인들은 독립심이 강하고, 국가에서 대학까지 무상 교육과 장학금을 지원하는 경우가 많아 부모가 이혼해도 자녀들이 겪는 경제적, 심리적 타격이 상대적으로 적다. 둘째, 불타오르면 일단 직진하는 성향 탓에 결혼을 굉장히 이른 나이에 한다. 여성들은 보통 대학 재학 중이나 졸업 직후인 20대 초반에 웨딩드레스를 입는 경우가 흔하다. 어린 나이의 결혼이 나쁜 것은 아니지만, 경제적으로나 정서적으로 덜 성숙한 상태이다 보니 이혼의 문턱도 쉽게 넘는 듯하다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          마지막으로, 헤어지는 과정이 쿨하다 못해 춥다. 이혼 절차가 비교적 간단하고, 애정의 부재는 아주 합당하고 충분한 이혼 사유로 인정받는다. 이혼 또한 인생의 큰 흠결이나 주홍 글씨로 인식되지 않는다. 한 번은 영어를 배우기 위해 러시아 현지인 선생님에게 3~4개월 정도 과외를 받은 적이 있다. 어느 날 영어로 가족관계에 대해서 공부하며 물어봤는데, 그 선생님이 아주 해맑게 “우리 아빠는 이혼을 네 번 했고, 우리 엄마는 네 번째 아내이고, 지금 아빠랑 사는 새엄마는 아빠의 다섯 번째 아내야”라고 말하는 게 아닌가! 한국의 막장 드라마도 이보다 더 할 순 없을 거라는 생각이 머리에 스쳤다. 
        </p>

        <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

        <p class="leading-relaxed mb-6 text-slate-700">
          잠시 가만히 생각해 보니 평생 잘못된 선택을 붙들고 삶을 견디는 것보다, 쿨하게 털고 새로운 사랑을 찾아 떠나는 그들의 방식이 훨씬 합리적일지도 모른다. 그들의 말을 3년간 듣다 보면 묘하게 설득을 당할 때가 있다. 남의 시선이나 사회적 체면보다는 지금 내 심장이 뛰는 감정에 충실하고, 불꽃처럼 사랑하다 식으면 미련 없이 돌아서는 이들. 교과서에서 배울 수 없는 찐한 삶의 교훈을 주는 러시아 사람들이다. 결국 연애와 삶에 절대적인 정답은 없으며, 세상에는 참으로 다양한 사람들이 저마다의 다채로운 방식으로 사랑하고 살아간다는 것을 이 먼곳에서 다시금 깨닫게 된다.
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          Humanity's eternal bestseller is the love story. Whether in dramas, films, or novels, what subject sends dopamine rushing quite like someone else's romance? Whether they fight their way to a happy ending or collapse into a tearful tragedy, we peek into other people's love lives and enjoy the thrill secondhand. So this time, I want to talk about the spicy worldview of love in Russia, covering dating, marriage, and divorce across that snowy continent. Of course, this would have been the perfect field report if I had personally thrown myself into that fascinating ecosystem, but unfortunately(?) I was already a married man before I ever set foot in Russia. So let me make it clear in advance: this chapter is built entirely on vivid testimony from people around me and my own sharp observations, all filtered through the point of view of a married outsider.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💘 When Love Begins Without a Confession</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In Korea, romance usually begins when someone gathers their courage, makes a confession, and the other person accepts it with something like, "From today, we're officially together." Russian-style dating feels a little different. Quite often, there is no clear declaration, no formal "Let's date," and no ceremonial confession at all. People simply meet, eat, drink tea, grow physically close, and before they know it, they have drifted naturally into being a couple. These days, thanks to the influence of K-dramas, more local women are familiar with the Korean dating model, but among Russians themselves, the phrase "Will you go out with me?" still seems to feel rather awkward and embarrassingly sweet.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔥 Skinship and Forward Charm</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Another thing worth noticing is that Russian women can be quite bold and proactive when it comes to love. If they like a man, they may approach him directly and even attempt subtle physical contact. So if a Russian local suddenly gets physically affectionate, it is dangerous to sit there grinning and thinking, "Does she like me?" If you smile and play along a few times, the other person may already decide that the two of you are dating, and a dizzying misunderstanding may follow. The pace of physical intimacy is also far more open than in Korea. Another interesting point is that Korea's distinctive motel-room culture is practically nonexistent there, and much of youthful romantic history seems to unfold instead in cramped dormitories or empty apartments.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌹 The Absolute Rule of Dating: Odd-Numbered Flowers</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Even if they skip the explicit declaration of dating, these gruff men of the land of bears still follow one strict romantic rule when they go on dates: flowers. If you want to ask out a Russian woman, a bouquet is close to mandatory, and there is one taboo that must never be broken. The number of flowers must always be odd. In Russia, even-numbered flowers are reserved only for funerals and offerings to the dead. So if you ever get the chance to meet a Russian woman, do not make the mistake of offering an even-numbered bouquet just because the symmetry looks nice. You can save your thanks for this advice.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥃 Marriage, Reality, and the K-Drama Fantasy</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          But once you move past the bright romance and enter the reality of marriage, the story becomes a little sadder. When people picture Russian men, they often imagine a pot-bellied balding man sprawled on the couch, watching television and drinking vodka, and sadly this stereotype matches reality with a fairly high batting average. Russia went through brutal chapters such as the Napoleonic Wars and World War II, and above all, men still have a relatively low life expectancy because of excessive drinking and accidents. As a result, the country still shows a female-heavy sex ratio, roughly 86 men for every 100 women. Statistics show that Russian women tend to live to around 78 or 79, while men average only around 68. This imbalance has also given Russian men a kind of advantage when it comes to choosing partners.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Because of Moscow's punishing cost of living, dual-income households are practically essential. Yet even when women earn money outside the home just as much as men do, housework and childcare often remain almost entirely their responsibility. The wife works herself to the bone while the husband becomes one with the sofa and sips vodka. There is a reason why the image of the caring Korean man in K-dramas has become a fantasy among many young Russian women, and why the family-oriented man has risen to the top of the ideal-husband list. Korean men, to the world!
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📉 The Shock of a 75% Divorce Rate</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          So how do these stories end? Surprisingly, Russia's divorce rate reaches about 75 percent. Of course, that does not mean that three out of every four couples inevitably divorce. The figure is based on the number of divorces in a given year relative to the number of marriages in that same year, which means repeated divorces and remarriages by the same individual can be counted multiple times and inflate the number dramatically. Even among the acquaintances and parents I knew, divorced families were not quite that overwhelmingly common. Still, compared with Korea's roughly 47 percent, it is undeniably very high. Come to think of it, Korea's number is not exactly low either. We should probably all be careful.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">❄️ Breaking Up with Cold Efficiency</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I came up with my own rough explanation for this overwhelming divorce rate. First, Russians tend to be highly independent, and the state often supports education with free tuition and scholarships all the way through university, so the economic and psychological blow to children can be relatively smaller even if their parents divorce. Second, when they catch fire emotionally, they tend to charge ahead, which leads many people to marry at a very young age. It is common for women to put on a wedding dress in their early twenties, while still in university or right after graduation. Early marriage is not inherently bad, but when people are still less mature financially and emotionally, the threshold for divorce may also become easier to cross.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Lastly, the process of parting ways is so cool that it almost feels cold. Divorce procedures are relatively simple, and the absence of affection is recognized as a fully valid reason for divorce. Divorce is not necessarily treated as a deep stain on one's life or as scarlet-letter material. Once, I studied English for about three or four months with a local Russian tutor. One day, while we were learning how to talk about family relationships in English, I asked her a question, and she cheerfully said, "My dad has been divorced four times, my mom was his fourth wife, and the stepmother living with him now is his fifth wife." In that moment, I thought even a Korean melodrama could not have topped that plot.
        </p>

        <hr class="border-slate-200 my-8 w-1/3 mx-auto" />

        <p class="leading-relaxed mb-6 text-slate-700">
          The more I sit with it, the more I wonder whether their way might actually be more rational than clinging to a wrong choice for life and enduring it forever. After listening to them for three years, I found myself strangely persuaded at times. They stay true to the feelings that make their hearts race right now rather than to public opinion or social face, and when love burns out after flaring up like fire, they turn away without regret. Russians taught me raw lessons about life that no textbook ever could. In the end, there is no absolute right answer in love or in life, and being far away in that distant land reminded me once again that the world is full of people who love and live in richly different ways.
        </p>
      `}},{id:"post-304",title:{ko:"러시아의 결혼식",en:"A Russian Wedding"},subtitle:{ko:"이틀간의 축제, 체력이 관건!",en:"A Two-Day Festival, Stamina is Key!"},imageUrl:"https://www.boyarovweddings.ru/wp-content/uploads/2024/02/3-4.jpg",isActive:!0,comments:[],content:{ko:`
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💌 뜻밖의 초대</h3>
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
우리 부부는 러시아의 국민 SNS인 프콘탁테(VKontakte, 보통 VK라고 부른다)를 통해 한국어를 공부하고 싶어하던 또 다른 친구를 알게 되었다. 한국에 대한 관심과 한국어를 향한 열정이 대단했던 그 친구는 처음 알게 되었을 당시부터 만삭의 임신 중이었다. 언어 교환을 핑계로 만난 지 불과 몇 차례 되지 않았는데, 어느 날 친구는 우리 부부를 자신의 결혼식에 초대하고 싶다고 했다. 얼굴 몇 번 본 게 전부인 외국인을 덜컥 인생의 중대사에 초대하다니, 너무 빠른 친화력에 깜짝 놀랐다. 그래도 러시아의 결혼식에 직접 가서 현지 문화도 배우고 새로 사귄 친구도 축하해 주면 뜻깊을 것 같아 흔쾌히 초대에 응했다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤯 하객의 고민: 옷차림, 축의금, 문화 차이</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
그나저나, 무려 이틀 동안이나 진행된다는 러시아 결혼식에는 도대체 무슨 옷을 입고 가야 하며, 또 축의금이나 선물은 어떻게 준비해야 할지가 큰일이었다. 한국을 그토록 좋아하는 친구인데, 정작 우리가 러시아의 결혼식 문화를 잘 몰라 민폐 하객이 될까 봐 며칠을 전전긍긍했다. 다행히 주변에 물어보니 일반적인 서구식 결혼식처럼 다들 정장을 입고 간다고 하여, 결혼식 당일 옷장 구석에 있던 정장을 꺼내 입고 식장이 있는 ‘이즈마일롭스키’로 향했다. 이곳은 우리가 종종 러시아 전통 인형인 마트료시카 같은 기념품을 사거나 샤슬릭을 먹으러 가던 단골 시장이 있는 곳으로, 시장 한가운데에는 동화 속에나 나올 법한 이즈마일롭스키 크렘린(Kremlin, 성채)이 자리하고 있다. 그리고 이 크렘린 안에 러시아인들이 결혼식을 올리는 ‘작스(ЗАГС)’라는 민사 등록소가 있다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ 원스톱 결혼식: 작스(ЗАГС)에서의 예식</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
러시아에서 결혼식은 한국으로 치면 동사무소 혹은 구청 정도라고 할 수 있는 이 작스에서 이루어진다. 말 그대로 예식과 혼인신고를 관공서 한 방에서 ‘원스톱’으로 처리하는 셈이다. 한국에서는 성대하게 결혼식만 올리고 혼인신고는 미루는 부부도 있고, 반대로 식은 생략한 채 혼인신고만 하는 부부도 있는데, 러시아에서는 모든 법적·의례적 절차가 한 큐에 이루어지니 나로서는 꽤나 낯설고 신기한 광경이었다. 예식장처럼 화려하게 꾸며놓은 작스 내부로 들어가자, 사회자와 주례 선생님 대신 공무원들이 식을 주관했다. 순백의 웨딩드레스를 입은 신부와 턱시도를 차려입은 신랑은 진지하게 결혼 맹세를 하고, 혼인 서약서에 서명한 뒤 그 자리에서 빳빳한 결혼 증명서를 품에 안았다. 신랑 신부가 고용한 소규모 오케스트라가 관공서 한편에서 식 내내 로맨틱한 클래식 음악을 라이브로 연주해 주었던 것도 무척 인상 깊었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌳 산책은 필수! 결혼식 날의 여유</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
예식과 행정 절차를 작스에서 무사히 마친 부부는 하객들의 축하 세례를 받으며 건물을 배경으로 기념사진을 찍었다. 그리고 어김없이, 어쩌면 러시아인들의 DNA에 각인된 듯한 ‘산책 시간’이 찾아왔다. 러시아인의 산책 사랑은 정말 유별난데, 인생에서 가장 바쁜 날인 결혼식 일정에조차 기어이 산책을 끼워 넣을 줄은 꿈에도 몰랐다. 하객들은 작스에서 얼마 떨어지지 않은 근사한 공원으로 이동해 삼삼오오 짝을 지어 여유롭게 숲길을 걸었다. 마치 소풍이라도 온 듯 약속된 시간에 공원 한가운데 다시 모여 단체 사진을 찍고 나서야 이 성스러운(?) 산책 의식도 마무리되었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎉 피로연의 시작: 샴페인 잔 깨뜨리기</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
산책 후에는 본격적인 체력전인 피로연이 기다리고 있었다. 신랑 신부 측은 레스토랑 하나를 통째로 대관한 듯 보였다. 피로연장 입구에서는 아주 재미난 전통 행사가 열렸다. 러시아에서는 신랑과 신부가 샴페인 잔을 등 뒤로 휙 던져서 바닥에 깨뜨리는 풍습이 있다. 이는 두 사람의 앞날에 낄 액운을 요란한 소리로 쫓아내고 밝은 미래를 연다는 의미가 담겨 있다고 한다. 바닥에 흩뿌려진 유리 조각이 많고 잘게 부서질수록 결혼 생활이 더 길고 행복하게 지속된다고 믿는다니, 신랑 신부는 있는 등 뒤로 있는 힘껏 잔을 던졌다. 경쾌하게 잔을 깨고 박수 치고 사진 찍는 일련의 의식을 마치고 피로연장으로 입장했다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💃🕺 끝없는 춤, 음식, 그리고 건배사 릴레이</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
러시아 결혼식의 피로연은 그 규모와 지속력 면에서 압도적이었다. 우선 피로연이 상당히 길게 이어졌고, 쉴 새 없이 흥겨운 노래가 흘러나왔으며 하객들은 누가 먼저랄 것도 없이 홀로 나가 춤을 췄다. 음식은 입장할 때부터 이미 테이블이 휘어질 정도로 세팅되어 있었고, 각자 앞접시에 먹고 싶은 만큼 덜어 먹는 뷔페식이 가미된 형태였다. 접시나 술잔이 비기 무섭게 직원이 다가와 채워주었다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
무엇보다 놀라운 것은 러시아식 ‘건배사’ 릴레이였다. 양가 부모님이 먼저 커플의 앞날을 축복하며 잔을 들었는데, 이게 보통의 짧은 건배사가 아니라 거의 한국의 교장 선생님 훈화나 장편 주례사 수준으로 길었다. 부모님의 연설이 끝나면 다른 가족과 친구들에게도 마이크가 넘어갔다. 누군가는 신랑 신부의 어린 시절 추억을 눈물겹게 회상했고, 또 다른 누군가는 그들의 비밀스러운 연애 에피소드를 폭로하며 식장을 웃음바다로 만들었다. 분위기가 무르익을수록 나침반 잃은 마이크가 언제 우리 쪽으로 향할지 몰라 몹시 불안해졌다. 초대해 준 신부와 이제 막 안면을 튼 수준이었던 우리 부부는, “혹시라도 우리에게 마이크를 넘기며 러시아어로 축사를 시키면 어쩌지?” 하며 식은땀을 흘려야 했다. 다행히도 우리의 간절한 눈빛이 통했는지 그런 대참사는 일어나지 않았다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💪 체력전의 진실</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
알려진 바와 같이 러시아의 결혼식은 보통 1박 2일로 거창하게 진행된다. 하지만 1일 차의 끝없는 산책과 장장 몇 시간에 걸친 피로연으로 인해 우리의 저질 체력은 이미 바닥을 드러내고 말았다. 결국 우리는 2일 차 행사에는 차마 참석하지 못하고 백기를 들었다. 직접 보진 못했지만, 보통 2일 차에는 캐주얼한 복장으로 모여 야외에서 가볍게 바비큐를 구워 먹거나 게임을 하며 여흥을 즐긴다고 한다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
두어 시간이면 일사천리로 끝나는 한국의 결혼식과 달리, 러시아의 결혼식은 1박 2일이라는 장대한 일정 속에 온 동네 사람들이 모여 먹고 마시며 축하하는 기묘하고도 매력적인 축제 그 자체였다. 다만 한 가지 확실하게 배운 점이 있다면, 앞으로 러시아에서 누군가의 결혼식에 참석할 때는 두둑한 축의금 봉투를 챙기는 것보다 ‘밑바탕 체력을 단단히 다져놓는 것’이 백 배는 더 중요하다는 뼈저린 진리였다.
        </p>
      `,en:`
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💌 An Unexpected Invitation</h3>
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          My wife and I met another friend who wanted to study Korean through the Russian national social media platform, VKontakte (usually called VK). This friend, who had a great interest in Korea and a passion for the Korean language, was heavily pregnant from the time we first met. We had only met a few times under the pretext of language exchange, but one day, she said she wanted to invite us to her wedding. I was surprised by her fast friendliness, inviting a foreigner whom she had only seen a few times to a major event in her life. Still, I thought it would be meaningful to go to a Russian wedding in person, learn about the local culture, and congratulate our new friend, so I readily accepted the invitation.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤯 The Guest's Dilemma: Clothes, Gifts, and Cultural Differences</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          By the way, it was a big deal what to wear to a Russian wedding that was said to last for two days, and what to prepare for a wedding gift or gift money. My friend loved Korea so much, but I was worried for a few days that we would be a nuisance guest because we didn't know the Russian wedding culture well. Fortunately, when I asked around, I was told that everyone wears a suit, just like at a typical Western wedding, so on the day of the wedding, I took out the suit from the corner of my closet and headed to 'Izmailovsky', where the wedding hall was located. This is a place where we often went to buy souvenirs like the Russian traditional doll, Matryoshka, or to eat shashlik, and in the middle of the market, there is the Izmailovsky Kremlin (fortress), which looks like it came out of a fairy tale. And inside this Kremlin, there is a civil registry office called 'ZAGS (ЗАГС)' where Russians get married.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ One-Stop Wedding: The Ceremony at ZAGS (ЗАГС)</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In Russia, weddings take place at this ZAGS, which can be compared to a community service center or a district office in Korea. Literally, the ceremony and marriage registration are handled 'one-stop' in one government office. In Korea, there are couples who have a grand wedding but postpone their marriage registration, and conversely, there are couples who only register their marriage without a ceremony, so it was a very unfamiliar and strange sight for me that all legal and ceremonial procedures were carried out in one go in Russia. When I entered the ZAGS, which was decorated as splendidly as a wedding hall, civil servants, not a host or an officiant, presided over the ceremony. The bride in a pure white wedding dress and the groom in a tuxedo seriously exchanged their wedding vows, signed the marriage contract, and received a crisp marriage certificate on the spot. It was also very impressive that a small orchestra hired by the bride and groom played romantic classical music live in a corner of the government office throughout the ceremony. 🎻
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌳 A Walk is a Must! Leisure on the Wedding Day</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After successfully completing the ceremony and administrative procedures at the ZAGS, the couple took commemorative photos against the backdrop of the building, receiving a barrage of congratulations from the guests. And then, inevitably, it was time for a 'walk,' which seems to be ingrained in the DNA of Russians. The love of Russians for walking is truly peculiar, and I never dreamed that they would even squeeze a walk into the schedule of their busiest day, their wedding day. The guests moved to a nice park not far from the ZAGS and walked leisurely through the forest paths in groups of two and three. As if on a picnic, they gathered in the middle of the park at a set time, took a group photo, and only then did this sacred(?) walking ritual come to an end.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎉 The Start of the Reception: Breaking the Champagne Glasses</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After the walk, a reception that was a real test of stamina awaited. The bride and groom seemed to have rented out an entire restaurant. A very interesting traditional event was held at the entrance of the reception hall. In Russia, there is a custom where the bride and groom throw champagne glasses over their shoulders and break them on the floor. This is said to ward off bad luck in their future and open a bright future with a loud noise. It is believed that the more and the smaller the glass shards scattered on the floor, the longer and happier the marriage will last, so the bride and groom threw the glasses with all their might behind their backs. After the series of rituals of cheerfully breaking the glasses, clapping, and taking pictures, we entered the reception hall. 🥂
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💃🕺 Endless Dancing, Food, and a Relay of Toasts</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The wedding reception in Russia was overwhelming in its scale and duration. First of all, the reception went on for a very long time, cheerful music was played without a break, and the guests danced in the hall without anyone having to go first. The food was already set on the tables to the point of bending them when we entered, and it was a buffet-style where you could take as much as you wanted on your own plate. As soon as our plates or glasses were empty, a staff member would come and refill them.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          What was most surprising was the Russian-style 'toast' relay. The parents of both sides first raised their glasses to bless the couple's future, but this was not a normal short toast, but a long one, almost at the level of a Korean principal's speech or a long wedding sermon. After the parents' speeches, the microphone was passed on to other family members and friends. Someone tearfully recalled the bride and groom's childhood memories, while another made the hall roar with laughter by revealing their secret dating episodes. As the atmosphere ripened, I became very anxious that the microphone, which had lost its compass, might be heading our way at any moment. My wife and I, who had only just gotten to know the bride who had invited us, had to break out in a cold sweat, wondering, "What if they pass the microphone to us and ask us to give a congratulatory speech in Russian?" 😅 Fortunately, our desperate gazes got through, and no such disaster happened.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥵 Exhausted, and a Bitter Lesson Learned</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          As is well known, Russian weddings are usually held on a grand scale for two days and one night. However, due to the endless walks and the hours-long reception on the first day, our poor stamina had already hit rock bottom. In the end, we couldn't even attend the second-day event and raised the white flag. Although I didn't see it myself, I heard that on the second day, they usually gather in casual clothes and enjoy a barbecue outdoors or play games.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Unlike a Korean wedding, which ends in a couple of hours in a flash, a Russian wedding was a bizarre and charming festival in itself, where all the people in the neighborhood gathered to eat, drink, and celebrate over a grand two-day schedule. However, if there was one thing I learned for sure, it was the bitter truth that when attending someone's wedding in Russia in the future, it is a hundred times more important to 'build up a solid foundation of stamina' than to prepare a thick envelope of congratulatory money. 💪
        </p>
      `}},{id:"post-305",title:{ko:"졸업논문 완성하기",en:"Completing the Thesis"},subtitle:{ko:"러시아어, 분량, 그리고 깜빡이는 커서와의 사투",en:"The Struggle with Russian, Page Count, and the Blinking Cursor"},imageUrl:"https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
학부 시절에는 논문을 써 본 적이 없기 때문에 그럴싸한 논문을 써야 한다는 것 자체가 엄청난 부담이었다. 무엇보다 러시아어라는 거대한 언어의 장벽이 앞을 가로막고 있었는데, 한국어로 쓰라고 해도 막막할 판에 러시아어로 학술적인 글을 써야 한다니 한숨부터 절로 나왔다. 게다가 언어의 압박을 차치하고서라도, 석사 논문은 대략 80에서 120페이지까지 채워야 한다는 절대적인 분량 자체도 공포스러웠다. 전혀 다른 과목을 공부하던 사람이 도대체 어떻게 겨우 1-2년 공부한 학문의 그럴 싸한 논문을 쓸 수 있겠나. 하물며 러시아어로! 하지만 졸업이 코앞이라 하염없이 걱정만 하며 논문 작성을 더 이상 미룰 수는 없었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎯 뜻밖의 희망: 예상외로 순조로운 주제 선정</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
군에서 위탁교육을 보낼 때는 어느 정도 큰 틀에서 주제를 정해준다. 더 정확히 말하자면 위탁교육 공고를 띄울 때부터 자신이 선발된다면 어떤 주제의 연구를 해야 할지 대략 알 수 있다. 대신 세부적인 특정 주제는 스스로 정해야 한다. 위탁교육에 선발되고 한국에서부터 어느 정도 생각해 놓은 논문 주제가 있어서 이를 지도교수님께 말씀드렸다. 다행히도 교수님은 괜찮은 주제라며 졸업 논문으로 쓰자고 흔쾌히 동의해 주셨다. 다른 지인들에게 물어보면 논문 주제를 정하는 데에만도 수개월의 시간이 걸린다는데, 나의 경우에는 나의 설레발(?) 덕분에 많은 시간을 절약할 수 있었다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📚 첫 번째 산: 선행연구 리뷰</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
논문을 준비하면서 가장 먼저 맞닥뜨린 거대한 산은 관련 분야 논문 리뷰였다. 논문을 작성하기에 앞서 내가 쓸 논문이 가치를 갖기 위해서는 선배 학자들이 쓴 것들을 먼저 파악해야 하기 때문이다. 관련 분야 논문을 리뷰하며 기본 지식을 더 쌓을 수 있고, 매끄러운 문장들을 가져다가 쓸 수 있으며, 무엇보다 다른 사람이 이미 고생해서 연구한 내용을 헛고생하며 반복할 필요가 없기 때문이다. 하지만 러시아어로 된 논문과 자료들은 까만 건 글씨요 하얀 건 종이인지라, 언어 때문에 단순히 읽기만 해도 세월아 네월아 시간이 오래 걸렸다. 또한 내 수준에서는 이해가 전혀 되지 않는 내용들도 많아서 검은 눈동자만 굴렸을 뿐, 읽었다고 말할 수 없는 지경인 논문들도 수두룩했다. 그래도 어찌어찌 내 논문 주제와 비슷한 논문 몇 개는 지도교수님의 심폐 소생술 같은 도움을 받아 겨우 읽고 참고할 수 있었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💻 빈 문서와의 전쟁</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
그다음 큰 문제는 진짜로 논문을 작성하는 것이었다. 논리적으로 글을 전개하고 가설을 세워서 검증하고 결론까지 이끌어 내야 하는데 이게 말처럼 쉬운 것은 아니었다. 논문을 작성하는 과정은 매우 복잡한 일련의 작업의 결과물이라고 할 수 있는데, 아무도 이를 자세히 알려주지 않았고 “그냥 일단 작성해 오라”고만 하여 막막함이 이를 데 없었다. 일단 빈 워드 파일을 열었다. 한두 문장 끄적끄적 적다가 지우고 또 쓰고 지웠다. 결국 논문을 쓰기로 마음먹고 1~2주 동안 내가 한 거라고는 깜빡이는 커서와 눈싸움을 하며 뭔가를 썼다가 지운 것밖에 없었다. 야심 차게 저장했던 내 논문 워드 파일은 새로 만든 빈 파일과 용량 면에서 전혀 다르지 않았다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💡 빛과 소금 같았던 꿀팁</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
논문에 도움이 될 만한 이런저런 참고 자료들을 찾다가, 많은 사람들이 논문을 처음, 그러니까 초록이나 서론부터 쓰지 않고 결과부터 쓴다는 꿀팁을 발견했다. 사실 이 조언은 어떤 전공 서적보다도 내게 빛과 소금이 됐다. 논문 작성하는 방법을 몰라서 헤맸을 뿐, 이미 어느 정도 실험한 결과물은 내 손안에 나와 있었기 때문이다. 일단 실험의 결과물을 나타내는 그래프들을 하나하나 복사해서 붙여넣었고 거기에 설명을 덧붙였다. 이 작업은 마치 진도가 팍팍 나가는 게임처럼 순조롭게 진행되었고, 시간을 투자한 만큼 논문 페이지가 쭉쭉 늘어가서 짜릿한 보람과 성취감도 느낄 수 있었다. 다만 나의 비루한 러시아어로 복잡한 그래프를 유창하게 서술하기엔 역부족이었기에, 천사 같은 러시아인 친구들이 문장 심폐 소생술에 많은 도움을 주었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧱 배경지식, 결론, 그리고 가장 어려운 서론</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
실험 및 결과 섹션을 어느 정도 마무리하고는 배경지식 섹션으로 넘어왔다. 이 섹션은 실험 결과를 이해하는 데 필요한 것들을 교과서나 다른 사람의 논문 등을 참고하여 작성하면 된다. 문장만 조금씩 교묘하게(?) 변경하여 쓰면 되는 거라 아주 어렵진 않았으나, 내가 창조해 낸 문장이 러시아어로 말이 되는 소리인지는 나조차도 잘 몰랐기에 여전히 러시아인 친구들의 첨삭 지도가 절실히 필요했다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
이제 결론과 서론만 남았다. 결론을 쓰는 것도 어려웠지만 서론에 비하면 그래도 결론은 아주 양반이었다. 결론에는 나의 연구가 어떠한 방향으로 진행되었고, 그 과정에서 드러난 발견들이 학문적, 실질적으로 어떤 가치를 지니는지 서술해야 했다. 보통 연구는 단지 하나의 결과로 끝나지 않고, 새로운 문제 제기와 함께 다른 연구로 이어질 가능성을 품고 있기에 차후 연구가 될 만한 주제에 대해서도 짧게 기술했다. 반면 서론에는 이 연구가 어떻게 시작하게 되었는지, 왜 필요한지, 그리고 현재의 문제점은 무엇인지 논리적으로 밑밥을 깔아야 했다. 나에게 가장 큰 걸림돌은 역시나 러시아어였기에 화려한 언변이 필요한 서론이 가장 나를 괴롭혔다. 교수님께서 내 초안을 살펴보더니, 본문에도 대대적인 공사가 필요하다고 진단하셨다. 교수님의 매의 눈을 거친 꼼꼼한 검토 덕에 문장 하나하나의 표현이 더 깔끔해지고, 논리의 흐름도 매끄러워졌다. 그중 가장 놀라운 점은 단순한 빨간펜 교정에 그친 게 아니라, 글 전체의 구조에 대한 새로운 관점을 보여주셨다는 것이다. 가끔은 문장의 순서를 살짝 바꾸는 마법을 부리셨고, 몇몇 부분에서는 문단 전체의 순서를 완전히 재배치하는 대수술을 감행하셨다. 채워 넣기에 급급해 허겁지겁 쓰기에 전념하느라 논리적인 구조는 내다 버렸다는 생각이 들었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🙏 많은 사람들의 피, 땀, 눈물(?)</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
우여곡절 끝에 논문은 대략 완성되었다. 이 글을 쓰면서 다시 논문을 열어보니, 그 안에 얼마나 많은 사람들의 피, 땀, 눈물(?)이 닿아 있는지 새삼 느껴졌다. 문법을 바로잡고 내용에 조언을 아끼지 않았던 친구들, 때로는 새로운 아이디어를 함께 고민해 준 동료들, 그리고 나의 어색한 문장과 부족한 표현 하나하나를 세심하게 다듬어주신 지도교수님까지. 그들의 도움은 논문의 구석구석에 살아 숨 쉬고 있었다. 이 글을 빌어 다시금 그들에게 감사의 인사를 전하는 바이다.
        </p>
      `,en:`
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤯 The Triple Threat of Despair: Language, Length, and Lack of Experience</h3>
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          Since I had never written a thesis during my undergraduate years, the very idea of having to write a decent one was a huge burden. Above all, the huge language barrier of Russian stood in my way, and I sighed just thinking about having to write an academic paper in Russian when it would have been daunting even in Korean. In addition, even apart from the pressure of the language, the sheer volume of a master's thesis, which had to be roughly 80 to 120 pages long, was also terrifying. How on earth could a person who had studied a completely different subject write a decent thesis in a field they had only studied for 1-2 years? Let alone in Russian! However, with graduation just around the corner, I couldn't postpone writing my thesis any longer while just worrying endlessly.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💡 A Glimmer of Hope: An Unexpectedly Smooth Topic Selection</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          When the military sends you for consignment education, they give you a topic in a broad sense. To be more precise, from the time the consignment education announcement is made, you can roughly know what topic you should research if you are selected. Instead, you have to decide on a specific topic yourself. After being selected for the consignment education, I had a thesis topic that I had been thinking about since I was in Korea, so I told my advisor about it. Fortunately, my advisor said it was a good topic and readily agreed to let me write it as my graduation thesis. When I asked other acquaintances, they said it took several months just to decide on a thesis topic, but in my case, I was able to save a lot of time thanks to my premature excitement(?).
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📚 The Great Mountain: Reviewing Previous Research and the Language Barrier</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The first great mountain I encountered while preparing my thesis was reviewing papers in a related field. Before writing a thesis, you have to first understand what senior scholars have written in order for your thesis to have value. By reviewing papers in a related field, you can build more basic knowledge, you can use smooth sentences, and most importantly, you don't have to waste your time repeating the research that someone else has already worked hard on. However, since the Russian papers and materials were just black letters on white paper to me, it took a long time just to read them because of the language. In addition, there were many contents that I could not understand at all at my level, so there were a lot of papers that I could not say I had read, but only rolled my black eyeballs. Still, I was barely able to read and refer to a few papers similar to my thesis topic with the help of my advisor, which was like CPR.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✍️ The Battle with the Blank Page: A Staring Contest with the Blinking Cursor</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The next big problem was actually writing the thesis. I had to develop the text logically, set up and test a hypothesis, and lead to a conclusion, which was not as easy as it sounds. The process of writing a thesis can be said to be the result of a very complex series of tasks, but no one told me in detail, and I was at a loss because they just told me to "just write it and bring it." I first opened a blank Word file. I scribbled a sentence or two, erased it, wrote it again, and erased it again. In the end, for the 1-2 weeks after I decided to write my thesis, all I did was have a staring contest with the blinking cursor and write something and then erase it. My ambitious thesis Word file was no different in size from a newly created blank file.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✨ The Savior's Tip: The Magic of Filling in from the Results</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          While looking for various reference materials that would be helpful for my thesis, I discovered a great tip that many people don't write their thesis from the beginning, that is, from the abstract or introduction, but from the results. In fact, this advice was a light and salt to me more than any textbook on the subject. It wasn't that I didn't know how to write a thesis, it was that I had already had some experimental results in my hands. I first copied and pasted the graphs showing the results of the experiment one by one and added explanations to them. This work proceeded smoothly like a game that was making great progress, and I was able to feel a thrilling sense of reward and accomplishment as the thesis pages grew as much as I invested my time. However, since my poor Russian was not enough to describe the complex graphs fluently, my angelic Russian friends gave me a lot of help with sentence CPR.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧑‍🏫 Filling in the Background Knowledge: The Help of Textbooks and Papers</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After finishing the experiment and results section to some extent, I moved on to the background knowledge section. This section can be written by referring to textbooks or other people's papers for things necessary to understand the experimental results. It wasn't very difficult because I just had to change the sentences a little bit slyly(?), but I still desperately needed the proofreading guidance of my Russian friends because I myself didn't know if the sentences I created made sense in Russian.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🦸‍♂️ The Final Gateway and the Relief Pitcher: Introduction, Conclusion, and My Advisor</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Now only the conclusion and introduction were left. Writing the conclusion was also difficult, but compared to the introduction, the conclusion was a gentleman. In the conclusion, I had to describe the direction of my research, and the academic and practical value of the discoveries revealed in the process. Usually, research does not end with a single result, but has the potential to lead to other research with new problem-posing, so I also briefly described topics that could be future research. On the other hand, in the introduction, I had to logically lay the groundwork for how this research began, why it was necessary, and what the current problems were. The biggest obstacle for me was, of course, the Russian language, so the introduction, which required brilliant eloquence, was the most tormenting. When my advisor looked at my draft, he diagnosed that the body also needed major construction. Thanks to the professor's meticulous review with a hawk's eye, the expression of each sentence became cleaner, and the flow of logic also became smoother. The most surprising thing was that it was not just a simple red pen correction, but he showed me a new perspective on the structure of the entire text. Sometimes he worked his magic by slightly changing the order of the sentences, and in some parts, he performed a major surgery by completely rearranging the order of the entire paragraph. I felt that I had thrown away the logical structure because I was so preoccupied with filling in the blanks.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🙏 Gratitude and Retrospection: Everyone's Blood, Sweat, and Tears</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After many twists and turns, the thesis was roughly completed. As I write this, I open the thesis again and feel anew how much of everyone's blood, sweat, and tears(?) it contains. My friends who corrected my grammar and did not spare their advice on the content, my colleagues who sometimes 고민 with me on new ideas, and my advisor who carefully refined every one of my awkward sentences and poor expressions. Their help was alive in every corner of the thesis. I would like to take this opportunity to thank them again.
        </p>
      `}},{id:"post-306",title:{ko:"졸업시험 및 학위방어",en:"Graduation Exam and Thesis Defense"},subtitle:{ko:"교수님의 절대 쉴드 속에서 치러낸, 눈물과 땀의 학위 방어전",en:"A Thesis Defense of Tears and Sweat, Fought Under the Absolute Shield of a Professor"},imageUrl:"https://images.pexels.com/photos/8459030/pexels-photo-8459030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",isActive:!0,comments:[],content:{ko:`
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎓 러시아의 국가 졸업시험, '고스(ГОС)'</h3>
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
러시아에서는 논문방어 외에도 반드시 넘어야 할 또 다른 거대한 산이 있다. 바로 ‘고스(ГОС)’라고 불리는 국가  졸업시험이다. 각 과마다 시험문제와 난이도가 천차만별이라고 들었는데, 보통은 학위 기간 동안 들었던 수업 중에 서너 과목을 지정해 집중적으로 출제된다. 고스라고 해서 러시아의 다른 시험과 별로 다를 건 없었다. 고스에 출제될만한 문제들을 문제은행 식으로 시험보기 한 달 전에 나누어 주고, 시험 당일 교수님들 앞에서 그 중 임의의 한 문제를 뽑아 구술로 발표하는 제비뽑기 형식이었다. 문제는, 연구보다는 수업의 비중이 더 높은 러시아의 석사 과정 특성 상, 2년 동안 정말 많은 수업을 들었기에 수업 범위가 말도 안되게 넓었다는 점이다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
그나마 천만다행인 것은 '외국인 특별 할인(?)'이 적용되었다는 점이다. 러시아 현지인 친구들은 무려 100개의 문제를 준비해야 했던 반면, 외국인이었던 우리는 그들의 5분의 1인 20문제만 할당받았다. 하지만 학부 때 핵물리학을 공부했던 것도 아니었고, 아직 러시아어라는 거대한 언어 장벽이 떡하니 버티고 있었기에 이 20문제조차 결코 호락호락하지 않았다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😬 운명의 제비뽑기</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
대망의 졸업시험 당일, 평소의 시험 날과 다른 점이 있다면 친구들 모두 한껏 멋을 내고 정장을 차려입고 왔다는 것뿐이었다. 시험을 주관하는 교수가 들어왔고, 우리는 차례대로 교탁으로 나가 운명의 문제를 뽑았다. 앞서 몇 차례 얘기했듯 러시아에서는 시험 문제를 무작위로 뒤집어서 선택한다. 그래서 종이를 뒤집는 순간 교실 곳곳에서 안도의 한숨과 절망의 탄식이 교차했다. 고스 당일에도 문제를 확인한 친구들의 입에서 새어 나오는 소리만으로 그들의 운수를 단번에 점칠 수 있었다. 심장이 터질 것 같았던 두근거림 속에서 내 차례가 왔을 때, 다행히도 엄청 어렵지 않은 문제가 내 손에 쥐어졌다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
외국인인 나는 준비해야 할 문제의 양이 적었기에 거의 모든 문제를 충분히 숙지하고 갈 수 있었다. 러시아 친구들도 투덜거리긴 했지만 결국 무난히 다 통과한 듯 보였다. 애초에 우리나라로 치면 서울대나 카이스트를 갈 만한 두뇌를 가진 영재들이었으니, 그들의 안위까지 내가 걱정할 필요는 없었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥊 최종 보스, 학위 방어전</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
이제 진짜 최종 보스인 학위 방어(Defense)만 남았다. 지금까지의 수업이나 고스가 다른 사람이 전달해 준 지식을 이해하고 정해진 답을 뱉어내는 과정이었다면, 학위 방어는 확연히 결이 달랐다. 연구라는 것은 누군가 했던 것을 앵무새처럼 반복한다고 나의 성과로 인정되지 않는다. 선행 연구들을 논문을 통해 습득하고, 내가 새로운 이론이나 적용 방안을 발견하여 다른 학자들 앞에서 당당히 발표를 해야 한다. 만약 연구 과정이나 결과에 논리적, 기술적인 심각한 결함이 있다면 날카로운 심사위원들의 공격을 피하지 못할 것이다. 그렇기에 내가 한 연구를 말 그대로 ‘방어(Defense)’한다고 부르는 것이다. 쏟아지는 날 선 질문들을 무사히 방어해 낸다면, 적어도 심사위원들이 보기에 해당 학생이 학위를 취득할 자격이 있다고 인정받는 셈이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📖 아날로그식 논문 제본</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
내가 공부하던 당시에는 논문을 완성하면 직접 인쇄를 하고 제본을 떠서 심사위원들에게 일일이 나눠주어야 했다. 지금 생각하면 헛웃음이 나올 정도로 지독한 아날로그 방식이었는데, 가장 큰 문제는 이 링바인더 제본을 내 손으로 직접 뚫고 조립해야 한다는 사실을 학위 방어 전날에야 알았다는 것이다. 나의 얄팍한 지식 탓에 논문의 페이지 수가 그리 많지 않아 출력 자체는 부랴부랴 마칠 수 있었지만, 링바인더 기계를 다루는 법을 몰라 패닉에 빠졌다. 다행히 친구들이 자기 일처럼 두 팔 걷어붙이고 나서준 덕분에, 잘 차려입은 정장 셔츠가 땀으로 흥건해지긴 했지만 방어전 직전까지 무사히 제본을 완료할 수 있었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👨‍🏫 지도교수님의 절대적인 쉴드</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
드디어 내 논문을 발표할 시간이 되었다. 심사위원 외에도 다른 교수님들이 매의 눈을 하고 들어와 있었다. 발표에 앞서, 나의 지도교수님은 내가 지난 2년간 어떤 연구를 했고 얼마나 성실한 학생이었는지 브리핑을 해주셨다. 그리고 마지막으로 “이 논문의 수준으로 판단하건대 충분히 훌륭한 방어를 해낼 것이며, 당연히 최고점인 5점(Отлично)을 받을 자격이 있다”고 선언해 버리셨다. 나중에 알게 된 사실이지만, 발표 전 지도교수가 이렇게 대놓고 ‘쉴드’를 쳐주는 것이 심사 결과에 절대적인 영향을 미친다고 들었다. 역시 어느 나라를 가든 대학원생에게 지도교수의 입김은 절대 권력이자 가장 든든한 동아줄인 듯하다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
어쨌든 지도교수님의 소개 후에 발표를 시작했다. 충분히 준비했다고 생각했지만, 발표 내용을 거의 외워서 했기 때문에 온몸이 경직되어 있었고 중간중간 할 말을 잊고 버퍼링이 걸리기도 했다. 발표가 끝나자 예상대로 심사위원들의 송곳처럼 날카로운 질문이 쏟아졌다. 당황스러운 질문도 있었지만, 부끄럽게도 내가 말문이 막힐 때마다 지도교수님이 짠 하고 나타나 대신 방어를 해주시는 은혜를 베풀어 주셨다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏅 무엇과도 바꿀 수 없는 소중한 훈장</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
졸업 논문을 완성하고 모든 방어전을 무사히 마치며 느꼈던 감정은, 태산 같은 성취감과 동시에 영원히 끝나지 않을 것만 같았던 지독한 여정의 마침표였다. 많은 이들의 헌신적인 도움을 받았지만, 처음에는 불가능해 보였던 러시아어 논문을 기어코 완성해 냈고, 익숙하지 않은 언어로 날 선 교수들 앞에서 학위 방어까지 치러낸 이 성장의 경험은 내 인생에서 무엇과도 바꿀 수 없는 소중한 훈장이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🙏 깊은 겸손을 배우다</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
러시아에서 치열하게 부딪혔던 3년 간의 학위과정은 나 자신을 양적으로보다 질적으로 훨씬 성숙하게 만들었다. 핵물리에 대한 전공 지식이나 번듯한 석사 학위증보다도, 나와 완전히 다른 타인을 이해하는 넓은 시야, 그리고 ‘나 혼자의 힘으로는 결코 아무것도 이룰 수 없다’는 깊은 겸손. 그것이야말로 겉은 춥고지만 안은 따뜻했던 (겉추안따) 땅에서 내가 얻어가는 가장 귀중한 전리품일 것이다. 
        </p>
      `,en:`
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎓 Russia's State Graduation Exam, 'GOS (ГОС)'</h3>
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          In Russia, in addition to the thesis defense, there is another huge mountain that must be climbed. It is the state graduation exam called 'GOS (ГОС)'. I heard that the exam questions and difficulty level vary greatly from department to department, but usually, three or four subjects from the courses taken during the degree program are designated and tested intensively. The GOS was not much different from other exams in Russia. A month before the exam, a list of problems that were likely to be on the GOS was distributed in a question bank format, and on the day of the exam, it was a lottery format where you would randomly draw one of the problems in front of the professors and present it orally. The problem was that, due to the nature of the Russian master's program where the proportion of classes is higher than research, the scope of the classes was ridiculously wide because we had taken so many classes for two years.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Fortunately, there was a 'special discount for foreigners(?)'. While my Russian local friends had to prepare a whopping 100 problems, we foreigners were only assigned 20 problems, which was one-fifth of theirs. However, since I had not studied nuclear physics in my undergraduate years and the huge language barrier of Russian was still there, even these 20 problems were by no means easy.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😬 The Fateful Lottery</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          On the day of the long-awaited graduation exam, the only thing different from a normal exam day was that all my friends were dressed up in suits. The professor in charge of the exam came in, and we took turns going to the lectern to draw our fateful problem. As I have mentioned a few times before, in Russia, you randomly choose an exam problem by flipping it over. So, the moment the paper was flipped, sighs of relief and groans of despair crossed the classroom. Even on the day of the GOS, I could immediately tell the fortune of my friends just by the sounds that came out of their mouths after they checked their problems. When my turn came amidst the heart-pounding excitement, fortunately, a not-so-difficult problem was in my hand.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Since I was a foreigner, I had to prepare fewer problems, so I was able to go into the exam with almost all the problems fully memorized. My Russian friends grumbled, but in the end, it seemed that they all passed without any problems. In the first place, they were geniuses with the brains to go to Seoul National University or KAIST in our country, so I didn't need to worry about their well-being.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🥊 The Final Boss, the Thesis Defense</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Now, only the real final boss, the thesis defense, remained. If the classes and the GOS so far had been a process of understanding the knowledge passed down by others and spitting out the correct answers, the thesis defense was clearly different. In research, you are not recognized for your achievements by repeating what someone else has done like a parrot. You have to acquire previous research through papers, discover a new theory or application, and present it proudly in front of other scholars. If there is a serious logical or technical flaw in the research process or results, you will not be able to avoid the sharp attacks of the examiners. That is why it is literally called 'defending' the research you have done. If you successfully defend against the barrage of sharp questions, it means that at least the examiners have recognized that the student is qualified to receive the degree.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📖 Analog-style Thesis Binding</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          At the time I was studying, when you finished your thesis, you had to print it out yourself, bind it, and distribute it to the examiners one by one. It was a terribly analog method that makes me laugh when I think about it now, but the biggest problem was that I only found out the day before my thesis defense that I had to punch and assemble this ring binder with my own hands. Due to my shallow knowledge, the number of pages in my thesis was not that large, so I was able to finish printing it in a hurry, but I panicked because I didn't know how to operate the ring binder machine. Fortunately, thanks to my friends who rolled up their sleeves and helped me as if it were their own work, I was able to finish binding it safely just before the defense, although my well-dressed suit shirt was drenched in sweat.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👨‍🏫 My Advisor's Absolute Shield</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Finally, it was time to present my thesis. In addition to the examiners, other professors were also in the room with a hawk's eye. Before the presentation, my advisor briefed me on what research I had done over the past two years and how diligent a student I had been. And finally, he declared, "Judging by the level of this thesis, he will be able to give a great defense, and he certainly deserves the highest score of 5 (Отлично)." I later learned that when an advisor gives a blatant 'shield' like this before a presentation, it has an absolute effect on the examination results. It seems that no matter what country you go to, the advisor's influence is the absolute power and the most reliable lifeline for a graduate student.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Anyway, after my advisor's introduction, I started my presentation. I thought I had prepared enough, but since I had almost memorized the presentation content, my whole body was stiff, and I would forget what to say and buffer in the middle. After the presentation, as expected, a barrage of sharp questions from the examiners poured in. There were some embarrassing questions, but embarrassingly, whenever I was at a loss for words, my advisor would appear like a charm and defend me, which was a great grace.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏅 A Precious Medal That Cannot Be Exchanged for Anything</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The feeling I had after completing my graduation thesis and safely finishing all the defense battles was a sense of accomplishment as high as a mountain, and at the same time, the end of a terrible journey that seemed like it would never end. Although I received the dedicated help of many people, the experience of growth of finally completing the Russian thesis that seemed impossible at first, and even going through the thesis defense in front of sharp professors in an unfamiliar language, is a precious medal in my life that cannot be exchanged for anything.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🙏 Learning Deep Humility</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The three-year degree program that I struggled through in Russia made me much more mature, not quantitatively but qualitatively. More than the specialized knowledge of nuclear physics or a decent master's degree certificate, the broad perspective to understand others who are completely different from me, and the deep humility that 'I can never achieve anything on my own'. That is probably the most precious spoils of war that I am taking away from the land that was cold on the outside but warm on the inside.
        </p>
      `}},{id:"post-307",title:{ko:"마무리, 졸업식",en:"The End, Graduation Ceremony"},subtitle:{ko:"3년간의 여정을 마치며, 뜨거운 감사와 아쉬움 속 졸업",en:"Ending a 3-Year Journey, Graduation with Heartfelt Gratitude and a Touch of Sadness"},imageUrl:"https://mf.b37mrtl.ru/rbthmedia/images/web/kr-rbth/images/2016-07/top/13590507_548372432017683_470267383888957111_n.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",isActive:!0,comments:[],content:{ko:`
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎉 길고 길었던 여정의 끝, 새로운 시작</h3>
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
5월 중순, 드디어 석사 학위를 쟁취하기 위한 모든 통과의례가 막을 내렸다. 공식적인 졸업식은 6월 말이었고 한국으로 돌아가는 비행기는 7월 중순이었으니, 내게는 무려 두 달이라는 금쪽같은 잉여 시간이 주어졌다. 물론 틈틈이 학교에 불려 가 러시아 특유의 그 끝도 없는 관료주의적 행정 서류들을 떼고 도장을 받아야 했지만, 고스(ГОС)와 논문 방어를 끝낸 마당에 그깟 서류 작업쯤이야 콧노래를 부르며 해치울 수 있었다. 이제 한국으로 돌아가면 언제 다시 밟아볼지 모르는 이 애증의 도시 모스크바. 나는 그간의 치열했던 유학 생활을 천천히 갈무리하며, 마지막으로 감사한 이들에게 인사를 전하고 정든이들에게 작별을 고해야 할 시간이 왔다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤝 핏줄보다 진한 전우애, K 선배와의 마지막 건배</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
이 마무리의 첫 번째 순서는 단연 예비 학부 때부터 석사 과정까지 3년간 함께 공부해 온 K 선배와 진하게 축하를 나누는 것이었다. K 선배는 러시아어 까막눈 시절부터 피 말리는 대학원 생활까지 동고동락한 핏줄보다 진한 전우였다. 학위 논문 주제 때문에 막판 연구 방향만 조금 달랐을 뿐, 3년 내내 거의 모든 과목을 나란히 앉아 들으며 러시아 교수님들의 융단 폭격을 함께 막아냈으니 그간의 전우애가 얼마나 끈끈했겠는가.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
나는 귀국하면 서울에서 근무하기로 되어 있었고, K 선배는 진해에 가서 근무를 한다고 했다. 예전 같았으면 “서울에서 진해라니, 명절 아니면 얼굴 보기 힘들겠습니다!”라며 아쉬워했겠지만, 러시아의 광활한 대륙에서 3년을 지내다 보니 우리의 공간 지각 능력은 이미 완벽하게 ‘러시아 패치’가 되어 있었다. “에이, 서울에서 차로 서너 시간 거리면 그냥 옆 동네 마실 수준이지 말입니다!” 러시아가 만들어준 이 어질어질한 거리 감각 덕분에 우리는 이별의 아쉬움 대신 쿨한 웃음을 나눌 수 있었다. 서울과 진해의 물리적 거리를 단숨에 동네 편의점 가듯 압축해 버린 우리는, 정든 전우의 건승을 기원하며 시원하게 잔을 부딪쳤다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👋 아쉬운 작별, P군과 S양에게 보내는 인사</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
우리의 ‘굿바이 투어’에서 절대 빠질 수 없는 인물들이 있었다. 바로 멀고 낯선 땅, 예비학부 시절부터 동고동락하며 친하게 지내온 P군과 S양(1년 차, 2화에 잠시 등장)과의 작별 인사였다. 넘치는 에너지를 주체하지 못하던 P군은 어느새 모스크바 국립대 학생회의 차기 회장 후보로 거론될 만큼 거물급 ‘인싸’로 성장해 있었다. 놀라운 건 사람 만나는 걸 그렇게 좋아하면서도 학구열까지 대단했다는 것이다. 일본어에 능통한 S양 역시 특유의 싹싹함으로 무장한 우리들의 ‘인간 정보통’이었다. 모스크바 생활의 알짜배기 꿀팁은 모두 그녀를 통한다고 해도 과언이 아니었다. 두 친구 모두 이제 막 학부로 입학했기에, 학위를 털고 떠나는 우리와 달리 앞으로도 이 춥고 험난한 모스크바에서 계속 학업을 이어갈 예정이다. 비록 예비학부 1년간 기숙사에서 만난 사이임에도 타국에서 가족처럼 지냈던 동생들을 동토에 남기고 먼저 떠나려니 발길이 쉽게 떨어지지 않았다. 하지만 둘 다 취직은 한국에서 할 계획이라고 했으니, “우리가 먼저 한국에 가서 기다리마!”라며 아쉬운 작별을 고했다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🙏 나의 은인들, 지도교수님과 러시아어 선생님</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
발길을 돌려 대학교로 향했다. 빈 깡통이었던 나를 무사히 ‘석사’로 빚어내 주신 두 명의 은인, 지도교수님과 러시아어 선생님에게 감사의 마음을 담은 작은 선물을 전해드리기 위해서였다. 먼저 나의 엉망진창이었던 논문 초안에 인공호흡기를 달아주시고, 살벌했던 학위 방어전에서 온몸으로 방패막이가 되어주셨던 지도교수님을 찾아가서 감사의 인사를 전했다. 러시아어 선생님은 이제 내게 친할머니와 다름없다. 학기가 지남에 따라 점점 러시아어 수업이 줄어 섭섭해 하셨던 내가 떠난다는 말에 선생님은 기어이 울음을 떠뜨리셨다. 이런 정을 여기서 느끼다니! 역시 사람사는 곳은 어디나 매한가지인가 싶었다.  
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👩‍👧‍👦 3년 만에 오신 어머니, 그리고 '모스크바 현지인'이 된 나</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
그리고 졸업식에 앞서 어머니가 모스크바를 방문하셨다. 무려 3년 만에 마주한 어머니의 얼굴에는 이전보다 세월의 흔적이 짙게 배어 있었다. 비행기 푯값이 부담된다는 핑계로 한 번도 한국을 찾지 않은 불효자 탓에 주름이 더 깊어지신 건 아닌가 싶어 가슴 한구석이 쿡쿡 쑤셔왔다. 하지만 밀려오는 죄송스러운 마음은 잠시 가슴 깊은 곳에 묻어두고, 벅찬 반가움만으로 어머니를 맞았다. 모스크바에 갓 도착해 어설프게 택시 사기나 당하던 그 어리바리한 시절과는 달랐다. 이제는 스마트폰 앱으로 간단하게 공항에 택시를 불러 편안하게 모실 수 있는 ‘모스크바 현지인’ 패치가 완벽하게 되어 있었다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏠 작고 소박했던 우리의 보금자리</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
어머니는 우리의 단출한 신혼집을 둘러보시곤 내심 실망하신 기색이 역력했다. 그도 그럴 것이, 달랑 하나뿐인 방 한가운데 큼지막한 침대가 떡하니 자리 잡고 있었고, 남는 자투리 공간을 어찌어찌 쥐어짜 내어 각자의 책상을 하나씩 구겨 넣고 공부까지 했으니 어머니 눈에는 얼마나 짠해 보였을까. 그래도 개인적으로 나는 이 작고 소박한 집에서의 러시아 유학 시절이 꽤나 만족스러웠다. 방이 좁은 덕분에 아내와 물리적으로나 심리적으로나 많은 시간을 보낼 수 있었고, 겉보기엔 오래된 건물이었어도 내부 인테리어를 새로 한 지 얼마 안 되어 곰팡이나 쥐, 바퀴벌레 등은 구경조차 해본 적이 없기 때문이다. 아마 어머니가 러시아의 진정한 ‘야생’ 같은 다른 아파트들을 먼저 둘러보고 오셨다면, 우리의 이 작고 소중한 보금자리에 결코 실망하지 않으셨을지도 모른다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎓 뭉클했던 졸업식, 하늘의 아버지께</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
며칠 뒤, 드디어 고대하던 졸업식 당일이 밝았다. 빳빳하게 다려진 학위복을 입고 낯선 러시아어 문구가 빼곡히 적힌 졸업장을 받아 드는 순간, 그간의 마음고생이 눈 녹듯 씻겨 내려가는 기분이었다. 어머니는 연신 붉어진 눈시울을 훔치시며 내 머리 위에 자랑스럽게 학사모를 씌워주셨고, 우리는 캠퍼스 곳곳을 누비며 카메라 셔터가 닳도록 기념사진을 남겼다. 카메라 렌즈 너머로 활짝 웃으시는 어머니의 얼굴을 마주하니, 문득 하늘에 계신 아버지 생각이 가슴을 먹먹하게 때렸다. ‘아버지가 살아계셔서 이 자리에 함께하셨더라면, 더 좋았을텐데….’ 비록 육신은 곁에 안 계시지만, 먼 이국땅에서 치열하게 버텨낸 3년의 땀방울이 고스란히 녹아 있는 이 값진 졸업장을 하늘에 계신 아버지께 바친다. 
        </p>
      `,en:`
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎉 The End of a Long, Long Journey, a New Beginning</h3>
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          In mid-May, all the rites of passage to earn a master's degree finally came to an end. The official graduation ceremony was at the end of June, and my flight back to Korea was in mid-July, so I was given a precious surplus of two months. Of course, I had to be called to school from time to time to get endless bureaucratic administrative documents and stamps, which are characteristic of Russia, but after finishing the GOS and thesis defense, I could handle such paperwork while humming. Now, Moscow, this city of love and hate that I don't know when I'll be able to set foot on again once I return to Korea. As I slowly wrapped up my intense study abroad life, the time came to say goodbye to those I was grateful for and to bid farewell to those I had grown fond of.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤝 A Comradeship Thicker Than Blood, a Final Toast with Senior K</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The first order of this conclusion was, of course, to celebrate heartily with Senior K, with whom I had studied together for three years from the preparatory program to the master's program. Senior K was a comrade in arms, thicker than blood, with whom I had shared the joys and sorrows of my life, from the days when I was illiterate in Russian to my grueling graduate school life. Although our research directions were slightly different at the end due to our thesis topics, we had taken almost all of our classes side by side for three years and had withstood the carpet bombing of the Russian professors together, so how strong could our comradeship have been?
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          I was scheduled to work in Seoul after returning to Korea, and Senior K was going to work in Jinhae. In the past, I would have been disappointed, saying, "From Seoul to Jinhae, it will be hard to see you except on holidays!" But after spending three years on the vast continent of Russia, our spatial perception was already completely 'patched' to Russia. "Hey, a three or four-hour drive from Seoul is just like going to the next neighborhood!" Thanks to this dizzying sense of distance that Russia had given us, we were able to share a cool laugh instead of the sadness of parting. We, who had instantly compressed the physical distance between Seoul and Jinhae as if we were going to a neighborhood convenience store, clinked our glasses to wish our dear comrade well.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👋 A Sad Farewell, a Greeting to P and S</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          There were people who could never be left out of our 'goodbye tour'. It was a farewell to P and S (who briefly appeared in Year 1, Episode 2), with whom we had been close friends since our preparatory program days in a distant and unfamiliar land. P, who could not control his overflowing energy, had grown into a big shot 'insider', to the point where he was being mentioned as a candidate for the next president of the Moscow State University student council. What was surprising was that he had a great passion for studying, even though he loved meeting people so much. S, who was fluent in Japanese, was our 'human information source' armed with her unique friendliness. It was no exaggeration to say that all the best tips for living in Moscow came through her. Both of them had just entered their undergraduate programs, so unlike us who were leaving with our degrees, they were scheduled to continue their studies in this cold and rugged Moscow. Although we had only met in the dormitory for one year of the preparatory program, it was not easy to leave our younger siblings, who had been like family in a foreign country, behind in the tundra. But since they both planned to get jobs in Korea, we said our sad farewells, saying, "We'll go to Korea first and wait for you!"
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🙏 My Benefactors, My Advisor and My Russian Teacher</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I turned my feet and headed to the university. It was to give a small gift with my heartfelt gratitude to my two benefactors who had turned me, an empty can, into a 'master's graduate': my advisor and my Russian teacher. First, I went to my advisor, who had given my messy thesis draft a lifeline and had been a shield for me during the brutal thesis defense, and expressed my gratitude. My Russian teacher was now no different from my own grandmother. As the semester went on, my Russian classes gradually decreased, and when I told her that I was leaving, she burst into tears. To feel such affection here! I thought that people are the same everywhere.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👩‍👧‍👦 My Mother, After 3 Years, and Me, a 'Moscow Local'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          And before the graduation ceremony, my mother visited Moscow. The traces of time were deeply ingrained on my mother's face, which I saw for the first time in three years. I felt a pang in my heart, wondering if the wrinkles had deepened because of her unfilial son who had never once visited Korea, making the excuse that the plane ticket was too expensive. But I put aside the overwhelming sense of guilt for a moment and greeted my mother with only overflowing joy. It was different from the clumsy days when I had just arrived in Moscow and was scammed by a taxi. Now, I was completely patched as a 'Moscow local' who could easily call a taxi to the airport with a smartphone app and comfortably escort her.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏠 Our Small and Humble Home</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          My mother looked around our simple newlywed home and was clearly disappointed. And for good reason. A large bed was placed in the middle of the only room, and we had somehow squeezed in our own desks in the remaining space to study, so how pitiful it must have looked to my mother. Still, I was quite satisfied with my life as a student in Russia in this small and simple house. Thanks to the small room, my wife and I were able to spend a lot of time together, both physically and psychologically, and although the building looked old on the outside, the interior had been newly renovated not long ago, so I had never even seen mold, mice, or cockroaches. Perhaps if my mother had first looked around other apartments in Russia that were like a real 'wilderness', she would not have been disappointed with our small and precious home.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎓 A Moving Graduation Ceremony, to My Father in Heaven</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          A few days later, the day of the long-awaited graduation ceremony finally dawned. The moment I received my diploma, which was filled with unfamiliar Russian words, while wearing my starched graduation gown, I felt as if all my past worries were being washed away like melting snow. My mother kept wiping her reddened eyes and proudly placed the graduation cap on my head, and we went around the campus and took commemorative photos until the camera shutter wore out. When I saw my mother's smiling face through the camera lens, the thought of my father in heaven suddenly filled my heart with emotion. 'If only my father were alive and here with me...' Although his body is not with me, I dedicate this valuable diploma, which is imbued with the sweat of three years of intense struggle in a foreign land, to my father in heaven.
        </p>
      `}},{id:"post-308",title:{ko:"외전 (6) - 아내의 입장",en:"Side Story (6) - From My Wife's Point of View"},subtitle:{ko:"불도저 같은 남편 옆 조수석에서 버텨낸 유학의 시간",en:"The Years of Study Abroad Endured from the Passenger Seat Beside a Bulldozer of a Husband"},imageUrl:"https://plus.unsplash.com/premium_photo-1683140986063-437420273345?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
군인인 남편이 중위 계급장을 단 지 얼마 되지 않았을 무렵, 우리는 풋풋한 신혼부부가 되었다. 깨가 쏟아져도 모자랄 판에, 이 인간이 나와는 단 한마디 상의도 없이 덜컥 남수단 파병을 지원했다는 청천벽력 같은 소식을 들고 왔다. 도대체 나랑 결혼은 왜 한 건지, 신혼 초부터 생때같은 마누라를 청산과부로 만들 작정인지 분통이 터졌다. 파병을 가면 최소 6개월은 생이별인데 말이다. 하지만 불행 중 다행이랄까, 남편은 달랑 토익 점수 하나 믿고 통역장교에 지원하는 무모한 패기를 부렸고, 그의 그 조악한 영어 실력 덕분에 보기 좋게 파병 선발에서 탈락했다. 나는 속으로 쾌재를 불렀다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌍 남수단 다음엔 러시아라니</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
그런데 그 평화도 잠시, 얼마 지나지 않아 이번에는 러시아로 간단다. 기가 막히고 코가 막힐 노릇이었다. 러시아에 가서 무려 3년이나 지내야 하는데, 심지어 전공도 생소한 핵물리학 석사를 받으러 간다는 것이다. 러시아어 알파벳도 모르고, 핵물리는커녕 화학과 출신인 주제에 도대체 거기서 뭘 어떻게 하겠다는 건지 도통 이해가 되지 않았다. 그나마 파병 때와는 달리 가족 동반이 가능하다는 사실 하나가 유일한 위안이었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎯 지원자 1명, 그리고 불길한 예감</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
며칠 뒤 남편이 콧노래를 부르며 면접을 보고 돌아왔다. 지원자가 본인 하나뿐이라 무조건 합격할 것 같다며 혼자 김칫국을 사발로 마시고 있었다. 내 속이 타들어 가는 것도 모른 채 싱글벙글하는 그를 보며, 속으로는 ‘에이, 설마 군에서도 생각이 있으면 러시아어 한마디 못하는 저 인간을 진짜로 보내겠어?’ 하며 애써 불안감을 억눌렀다. 하지만 기어코 남편은 합격 통보를 받아오고야 말았다. 면접관이 본인의 숨겨진 가능성을 보았다나 뭐라나.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📚 불똥은 결국 내게 튀었다</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
그렇게 비행기 티켓을 끊고 예비학부 등록을 알아보며 본격적인 출국 준비가 시작되었다. 그러더니 불똥이 갑자기 내게 튀었다. 나보고도 러시아에 가서 3년 동안 가만히 있지 말고 공부를 하라는 것이었다. 러시아에 가서 도대체 내가 뭘 하겠냐는 말에 한동안 말문이 턱 막혔지만, 결국 남편과 친정 가족들의 지독한 등살에 떠밀려 나는 얼떨결에 예비학부에 지원서를 넣고 말았다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚕 공항 택시 사기와 더닝 크루거의 시작</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
나보다 이틀 먼저 러시아 땅을 밟은 남편은 아주 기세가 등등했다. 하지만 그 근거 없는 자신감이 박살 나는 데는 그리 오랜 시간이 걸리지 않았다. 공항으로 나를 데리러 온 그가 현지 택시 기사에게 보기 좋게 사기를 당해 바가지를 쓴 것이다. 생돈이 날아간 건 몹시 아까웠지만, 한편으로는 그 근거 없는 기세가 초장에 꺾여버린 게 내심 고소하고 다행스러웠다. 더닝 크루거 효과라고 들어보셨는지 모르겠다. 진정한 실력은 나의 철저한 무지를 뼈저리게 깨달은 바로 그 순간부터 시작되는 법이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎓 예비학부로 끝날 줄 알았던 공부</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
꾸질꾸질한 러시아 기숙사에서의 1년은 생각보다 견딜 만했다. 예비학부만 마치면 내 공부도 끝날 줄 알았는데, 이번에는 기어이 석사 과정까지 밟으라는 남편의 폭탄선언이 이어졌다. 그때는 정말 머리끝까지 화가 났다. 하지만 결국 이번에도 그 등살에 밀려 통번역 학과에 덜컥 지원하고 말았다. 아직도 남편과 가끔 당시 일을 회상할 때면 종종 내 석사 학위에 들어간 그 학비에 대해 이야기하곤 한다. 과연 그때 그 돈으로 비트코인을 샀으면 우리의 인생이 어떻게 달라졌을까 하고 말이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔥 오기로 버틴 석사 과정</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
억지로 떠밀려 시작한 석사 과정이 순탄할 리 없었다. 뚜렷한 목표 의식도, 초심도 부족했기에 매일이 고비였다. 하지만 책상머리에 앉아 러시아어 사전과 씨름하며 무식하게 밀어붙이는 남편을 볼 때면 묘한 오기가 생겼다. 진짜 저 인간은 계획도 없이 막무가내로 직진하는구나 싶으면서도, 나 역시 마음을 다잡게 되는 이상한 동기부여가 되었다. 주변의 도움을 받긴 했지만, 그렇게 꾸역꾸역 수업을 듣고 논문까지 써내며 졸업장을 손에 쥐었을 때의 그 벅찬 성취감은 결코 말로 이룰 수 없었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🕵️ 졸업장에 찍힌 뜻밖의 국적</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
아, 내 석사 졸업장에 얽힌 아주 기가 막힌 에피소드가 하나 있다. 졸업 전 서류 확인을 대충 한 탓에, 내 국적이 'Republic of Korea'가 아닌 'DPRK', 즉 북한으로 찍혀 나온 것이다. 졸업장에 박힌 그 활자를 수정하려면 또 엄청난 시간과 서류 작업이 필요하다길래, 어차피 석사 졸업장을 다시 꺼내볼 일이 얼마나 있겠냐는 심정으로 쿨하게 한국으로 들고 들어왔다. 일상생활에 큰 문제는 없었지만, 남편은 이 절호의 기회를 놓치지 않고 틈만 나면 나를 간첩이라며 놀려댄다. 내가 군대에 대해 뭐라도 물어볼라치면 “왜 북에서 시켰어?”라며 깐족거린다. 심지어 자기 월급 내역도 군사기밀이라 함부로 발설할 수 없단다. 내 참 어이가 없어서. 아직 등짝을 덜 맞았다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚜 불도저 남편 옆에서 산다는 것</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
주변 사람들은 남편의 엄청난 추진력을 보며 대단하다고들 칭찬한다. 밖에서 볼 때는 참 멋있고 대단해 보일지도 모른다. 하지만 한 치 앞도 모르는 그 불도저 같은 추진력에 묶여 질질 끌려다녀야 하는 바로 옆의 당사자는 매 순간이 서바이벌이고 가끔은 다 때려치우고 싶은 충동을 느낀다. 내가 참아야지. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💫 그래도 지루할 틈 없는 인생</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
그래도 그 무식하고 용감한 불도저에 강제로 올라타지 않았더라면 내 인생에 유학이라는 단어가 존재하기나 했을까. 복장 터질 때가 한두 번이 아니었지만, 남편 덕에 남들은 못할 많은 경험을 했다. 과연 누가 3년간의 시간과 돈을 들여 북한 국적이 찍힌 석사 졸업장을 들고 올 수 있겠는가. 앞뒤 재지 않고 돌진하는 남편 덕분에 내 인생은 결코 평탄치 않았지만, 단 한순간도 지루할 틈 없이 스펙터클하게 흘러가고 있다. 가끔은 이 피곤한 불도저의 조수석에 앉아 있는 내 팔자가 기구하다 싶으면서도, 어디 가서도 우리 가족 굶기지는 않겠다는 생각이 든다. 진짜 할 수 있다고 외치면 다 되는 줄 아나 봐... 이 사람과 함께 산지도 벌써 만으로 13년... 이젠 정말 그런 것 같기도...
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
Not long after my husband, a career soldier, had pinned on his lieutenant bars, we became a fresh newlywed couple. At a time when we should have been drowning in marital bliss, he came to me with the thunderbolt news that he had applied for deployment to South Sudan without discussing a single word of it with me. I was furious. Why on earth had he married me in the first place, if he was planning to make his bride a living widow from the very start of our marriage? A deployment meant at least six months of painful separation. But perhaps fortune was still on my side, because my husband recklessly applied to become an interpreter officer with nothing but a TOEIC score to his name, and thanks to his embarrassingly crude English skills, he failed the selection in spectacular fashion. Inside, I rejoiced.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌍 If Not South Sudan, Then Russia</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
But that peace did not last long. Before long, he announced that this time he was going to Russia. It was enough to leave me speechless. He was supposed to live there for a full three years, and on top of that, he was going to pursue a master's degree in the unfamiliar field of nuclear physics. He did not even know the Russian alphabet, and never mind nuclear physics, he was a chemistry major. I simply could not understand what he thought he was going to do there or how he planned to manage it. The only consolation, unlike the deployment issue, was that family accompaniment was allowed.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎯 One Applicant and a Bad Feeling</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
Several days later, my husband came back from the interview humming cheerfully. Since he had been the only applicant, he was already gulping down bowls of imaginary celebratory soup all by himself, convinced that he would definitely pass. Watching him beam without the slightest awareness that my insides were burning, I tried to calm my anxiety by thinking, "Come on, if the military has any sense at all, would they really send a man who cannot speak a word of Russian?" But in the end, he really did come home with an acceptance notice. Apparently the interviewers had seen his hidden potential or something of the sort.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📚 The Spark Landed on Me</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
Once the plane tickets were booked and the preparatory program enrollment was being arranged, our departure preparations began in earnest. Then suddenly the spark flew to me. He told me that I too should not just sit idle in Russia for three years, but should study there as well. For a while I was left completely speechless at the thought of what on earth I was supposed to do in Russia, but in the end I was pushed along by my husband's relentless pressure and my family's equally persistent urging, and somehow found myself submitting an application to the preparatory program.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚕 Airport Taxi Scam and the Start of Dunning-Kruger</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
My husband, who had landed in Russia two days before I did, was brimming with confidence. But it did not take long for that baseless confidence to be smashed to pieces. When he came to pick me up at the airport, he was neatly scammed by a local taxi driver and charged a ridiculous amount. It was painful to lose the money, of course, but on the other hand, I secretly felt satisfied and relieved that his groundless swagger had been broken so early. I do not know whether you have heard of the Dunning-Kruger effect, but true ability begins at precisely the moment one painfully realizes one's own profound ignorance.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎓 The Studies That Were Supposed to End Early</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
That one year in a grimy Russian dormitory was more bearable than I had expected. I thought my own studies would end once I finished the preparatory program, but then my husband dropped another bombshell and insisted that I should go all the way into a master's program too. At that point I was furious to the tips of my hair. But once again, I ended up being pushed along and somehow applied to the interpreting and translation department. Even now, when my husband and I recall those days, we often talk about the tuition money that went into my master's degree and wonder how our lives might have changed if we had bought Bitcoin with that money instead.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔥 A Master's Degree Fueled by Stubbornness</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
There was no way a master's program begun by sheer coercion was going to go smoothly. I lacked both a clear sense of purpose and the original passion one ought to have, so every day felt like an uphill battle. But whenever I saw my husband sitting at his desk wrestling with a Russian dictionary and charging ahead by brute force, something strangely defiant stirred inside me. I would think, "That man really is charging straight ahead without a single plan," yet somehow it became a strange source of motivation that made me steady my own mind as well. I did receive help from people around me, but the overwhelming sense of accomplishment I felt when I finally dragged myself through classes, wrote a thesis, and held the diploma in my hands is something that words can never fully capture.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🕵️ The Unexpected Nationality on My Diploma</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
Ah, there is one truly absurd episode connected to my master's diploma. Because I had checked the paperwork too carelessly before graduation, my nationality was printed not as "Republic of Korea" but as "DPRK," meaning North Korea. I was told that correcting those letters on the diploma would require an enormous amount of time and more paperwork, so I coolly brought it back to Korea thinking that there would hardly be many occasions in life when I would take out my master's diploma again anyway. It caused no great problem in everyday life, but my husband has never once missed the chance to tease me about it, calling me a spy whenever he gets the opportunity. If I ask him anything about the military, he snaps back with, "Why, did the North send you?" He even says he cannot reveal the details of his salary because it is military secret information. Honestly. He clearly has not been smacked on the back enough yet.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚜 What It Means to Live Beside a Bulldozer</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
People around us often praise my husband's incredible drive and say he is impressive. From the outside, I am sure he does look admirable and remarkable. But for the person right next to him, who has to be dragged around by that bulldozer-like momentum that knows nothing of what lies even one step ahead, every moment feels like survival, and sometimes I am overcome by the urge to throw everything away. I suppose I just have to endure it.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💫 Still, Never a Dull Life</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
And yet, if I had not been forcibly hauled aboard that ignorant but courageous bulldozer, would the word "study abroad" ever have existed in my life at all? There were countless moments when he drove me to the brink of bursting with frustration, but thanks to him I experienced many things most people never could. After all, who else could spend three years of time and money only to come home carrying a master's diploma stamped with North Korean nationality? Thanks to a husband who charges forward without weighing the consequences, my life has never been peaceful, but it has also never had a single dull moment. Sometimes I think my fate is truly strange, sitting in the passenger seat beside this exhausting bulldozer, yet at the same time I feel certain that wherever we go, he will never let our family starve. Maybe he really does believe that if he just shouts that he can do it, everything will somehow work out. It has already been thirteen full years living with this man... and now I am beginning to think he might actually be right...
        </p>
      `}}]},iy={id:"russia_travel",title:{ko:"러시아 여행",en:"Russia Travel"},description:{ko:"모스크바, 시베리아, 그리고 바이칼에서의 잊지 못할 추억들",en:"Unforgettable memories from Moscow, Siberia, and Baikal"},isSinglePost:!1,isActive:!0,posts:[{id:"russia-travel-1",title:{ko:"러시아의 심장, 모스크바",en:"Moscow, the Heart of Russia"},subtitle:{ko:"붉은 광장에서 참새 언덕까지, 유라시아의 심장을 걷다",en:"From Red Square to Sparrow Hills, Walking the Heart of Eurasia"},imageUrl:"https://upload.wikimedia.org/wikipedia/commons/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏙️ 낯선 여행객의 시선으로</h3>
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          등잔 밑이 어둡다고, 정작 본인이 사는 곳에는 어떤 관광지가 있는지 잘 모르고 산다. 돌이켜 보면 나도 마찬가지였다. 군 시절 연천에서 근무할 때는 수도 없이 재인폭포 앞을 지나다니면서도 그곳을 일부러 구경하러 오는 사람들이 있다는 사실조차 몰랐다. 부대 안에만 박혀 있었지 연천에 뭐가 있는지 하나도 몰랐던 것이다. 서울에 살 때도 마찬가지였다. 서울 산다고 서울 곳곳의 구경거리나 맛집을 다 아는 게 아니다. 오히려 한국에 여행 온 외국인이 나보다 명소에 대해 더 잘 꿰뚫고 있었다. 하지만 3년간 모스크바에 살면서, 나는 언제든 떠날 수 있는 가벼운 짐만으로 생활하고 있었기에 스스로를 마치 장기 여행객처럼 여겼다. 그러한 이방인의 마음가짐 덕분인지, 나는 부지런히 모스크바 이곳저곳을 돌아다닐 수 있었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏰 붉은 광장, 아름다움과 피의 역사</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바에 오는 사람이라면 누구든 ‘붉은 광장’은 꼭 보게 될 것이다. 그만큼 러시아, 그리고 모스크바를 상징하는 랜드마크이기 때문이다. 예전에는 이곳에서 공개 처형이 많아 광장이 항상 붉은 피로 덮여 있어 붉은 광장이라는 살벌한 이름이 붙었다는 소문도 있지만, 사실 고대 러시아어로 ‘붉다’는 단어가 ‘아름답다’는 뜻과 뿌리가 같아 붙여진 이름이라는 낭만적인 설이 더 유력하다. 뭐 믿거나 말거나. 붉은 광장에는 항상 들어갈 수 있는 건 아니지만 미라가 된 레닌이 잠들어 있는 레닌 묘가 있고, 소정의 입장료를 내고 들어갈 수 있는 성 바실리 대성당이 있다. 우리에게는 '테트리스 배경화면'으로 더 유명한 성당인데, 화려한 양파 모양 돔에 홀려 들어가면 정작 러시아 정교회 특성상 내부에는 볼 게 별로 없어 묘한 배신감(?)을 느낄 수도 있다. 광장 바로 옆에는 ‘굼(GUM)’이라는 럭셔리 백화점이 위풍당당하게 서 있다. 물건들의 가격이 살벌하게 비싸기 때문에, 쇼핑을 하러 오는 사람보다는 그냥 압도적인 인테리어를 구경하러 오는 아이쇼핑객이 훨씬 많은 곳이기도 하다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌳 붉은 광장 주변, 역사의 산책로</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          붉은 광장을 나와서 입구를 바라보면, 과거 폴란드-리투아니아 침략 당시 러시아 민병대를 조직해 나라를 지켰다는 ‘쿠즈마 미닌’과 ‘드미트리 포자르스키’의 동상이 세워져 있다. 붉은 광장 입구를 끼고 조금만 돌면 분위기가 확 바뀌며 ‘알렉산드르 정원’이 나타난다. 그곳에는 ‘꺼지지 않는 불꽃’과 무명용사의 묘를 지키는 근위병이 각을 잡고 근무하고 있으며, 운이 좋다면 근위병 교대식을 직관할 수 있다. 무명용사의 묘는 제2차 세계대전에서 희생된 군인들을 기리는 신성한 공간으로, 푸틴도 종종 참배를 하러 오는 곳이다. 그래, 뉴스에 맨날 나오는 그 푸틴 말이다. 정원 자체로도 형형색색의 꽃과 로마노프 오벨리스크 등이 있어 꽤나 근사하고 볼 만하다. (여담이지만, 알렉산드르 정원 바로 옆에는 소련 시절 서방과의 문화적, 경제적 교류를 상징하던 ‘러시아 1호 맥도날드’도 있었다. 하지만 이 역사적인 매장조차 현재는 러시아-우크라이나 전쟁의 여파로 아쉽게도 간판을 내린 상태다.)
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👑 권력의 심장, 크렘린</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          붉은 광장 바로 옆은 러시아 권력의 심장, ‘크렘린’ 궁전이다. 소정의 입장료를 내야 하지만 여기는 모스크바에 여행 왔다면 반드시 가야 하는 필수 코스다. 당연히 푸틴의 실제 집무실 문을 열고 들어갈 순 없지만, 무기 박물관을 비롯해 한 번도 울리지 못한 어마어마한 사이즈의 ‘황제의 종’, 한 번도 쏴보지 못한 ‘황제의 대포’ 등 대륙의 허세를 엿볼 수 있다. 크렘린 중심부의 대성당 광장에는 우스펜스키, 아르항겔스키, 블라고베셴스키 성당이 옹기종기 모여 있다. 아까도 잠시 언급했지만 러시아 성당 내부에는 볼 게 별로 없다고 했지만, 이 세 곳만큼은 예외다. 러시아에서 방문할 수 있는 그 어떤 성당들보다도 웅장하고 훌륭한 성화(혹은 이콘이라고 함)들을 감상할 수 있다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎸 예술과 젊음의 거리, 아르바트</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바 중심부는 생각보다 아담해서 굳이 교통수단을 이용하지 않더라도 체력만 있다면 두 발로 충분히 걸어 다니며 구경할 수 있다. 예술의 전당 격인 볼쇼이 극장이나 고즈넉한 노보데비치 수도원도 훌륭하다. 지하철이나 택시를 타고 조금만 이동하면 모스크바의 젊음과 문화가 숨 쉬는 '아르바트 거리'가 나온다. 이곳에선 대문호 푸시킨 부부의 동상과 더불어, '빅토르 최'의 추모 공간을 만날 수 있다. 빅토르 최는 구소련 시절 활동했던 고려인 3세 로커로, 억압된 사회 속에서 젊은이들의 자유와 저항을 노래해 '러시아의 전설'이 된 인물이다. 불의의 사고로 요절했지만, 그의 추모 벽에는 여전히 그를 기리는 팬들의 낙서와 담배꽁초가 끊이지 않는다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍔 아르바트의 명물, 쉑쉑버거</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          그리고 아르바트 거리의 또 다른 명물은 다름 아닌 ‘쉑쉑버거’였다. 당시 한국에서는 줄을 몇 시간씩 서야 간신히 맛볼 수 있었던 귀하신 몸이었지만, 아르바트 거리에선 대기 줄 없이 세상 쾌적하게 햄버거를 씹을 수 있었다. 그래서 나는 한국에서 손님이 놀러 오면 꼭 이 한적한 쉑쉑버거로 안내하곤 했다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏞️ 거대한 도시의 쉼터, 공원</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          도심 곳곳에는 대륙의 스케일답게 어마어마한 크기의 공원들이 있다. 날씨가 조금이라도 맑다 싶으면 온 동네 러시아인들이 마치 약속이라도 한 듯 공원으로 쏟아져 나와 산책을 즐긴다. 특히 고리키 공원이나 베데엔하(VDNKh) 공원 등은 겨울이 되면 거대한 야외 스케이트장으로 변신한다. 스케이트 대여도 가능하니 두툼한 겨울옷과 털모자, 장갑만 챙기면 준비 끝이다. 화려한 조명이 감싸는 빙판 위에서 타는 야간 스케이트는 꽤나 낭만적이다. 단, 낭만은 낭만이고 빙판에 넘어지면 뼈가 시리게 아프니, 스케이트 초보라면 멋 부리지 말고 엉덩이 보호대부터 챙겨 입는 것을 강력히 권한다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐦 도시의 파노라마, 참새 언덕</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바의 중심부에서 조금 벗어나면, 도시의 스카이라인을 한눈에 담을 수 있는 참새 언덕과 마주하게 된다. 모스크바 국립대학교의 압도적인 스탈린 양식 건물을 등지고 언덕에 서면, 굽이치는 모스크바 강과 함께 우리가 지금까지 걸어왔던 시내의 풍경이 파노라마처럼 쫙 펼쳐진다. 그만큼 많은 사람들이 찾는 모스크바를 대표하는 포토존이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌍 유럽도 아시아도 아닌, 유라시아</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          한국 사람들은 보통 바다 건너 여행을 떠난다고 하면, 엽서에 나올 법한 아기자기하고 동화 같은 유럽의 풍경을 기대하곤 한다. 하지만 모스크바는 그런 전형적인 유럽의 말랑말랑한 모습과는 거리가 멀다. 그렇다고 아시아라고 부르기엔 무언가 억울한(?) 구석이 있다. 모스크바는 유럽도 아니고 아시아도 아닌, 그저 ‘유라시아’라는 아주 독특한 장르 그 자체를 구축하고 있는 도시다.
        </p>
      `,en:`
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏙️ Through the Eyes of a Strange Traveler</h3>
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          As the saying goes, it's darkest under the lamp. People often live without knowing what tourist attractions are in their own area. Looking back, I was the same. When I was serving in the military in Yeoncheon, I passed by Jaein Falls countless times without even knowing that people deliberately came to see it. I was just stuck inside the base and knew nothing about what was in Yeoncheon. It was the same when I lived in Seoul. Living in Seoul doesn't mean you know all the sights and famous restaurants. In fact, a foreigner traveling in Korea knew more about the famous spots than I did. However, living in Moscow for three years, I lived with only a light luggage that I could leave at any time, so I considered myself a long-term traveler. Perhaps thanks to this stranger's mindset, I was able to diligently explore Moscow.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏰 Red Square, a History of Beauty and Blood</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Anyone who comes to Moscow will surely see the 'Red Square.' It is that much of a landmark that symbolizes Russia and Moscow. There is a rumor that in the past, there were many public executions here, and the square was always covered in red blood, hence the gruesome name Red Square. However, a more romantic theory is that the word 'red' in ancient Russian has the same root as the word 'beautiful.' Believe it or not. You can't always enter Red Square, but there is Lenin's Mausoleum where the mummified Lenin rests, and there is St. Basil's Cathedral, which you can enter for a small fee. It is more famous to us as the 'Tetris background,' but if you are mesmerized by the colorful onion-shaped domes and go inside, you may feel a strange sense of betrayal(?) as there is not much to see inside due to the characteristics of the Russian Orthodox Church. Right next to the square stands the magnificent 'GUM' luxury department store. Since the prices of the goods are ridiculously expensive, it is a place where there are far more window shoppers who just come to see the overwhelming interior than people who come to shop.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌳 Around Red Square, a Walk Through History</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          If you leave Red Square and look at the entrance, you will see a statue of 'Kuzma Minin' and 'Dmitry Pozharsky,' who organized the Russian militia and defended the country during the Polish-Lithuanian invasion. If you turn a little around the entrance of Red Square, the atmosphere changes completely and the 'Alexander Garden' appears. There, guards are on duty, guarding the 'Eternal Flame' and the Tomb of the Unknown Soldier, and if you're lucky, you can witness the changing of the guard ceremony. The Tomb of the Unknown Soldier is a sacred space that honors the soldiers who died in World War II, and it is a place where Putin often comes to pay his respects. Yes, that Putin you see on the news all the time. The garden itself is quite nice and worth seeing, with colorful flowers and the Romanov Obelisk. (As an aside, right next to the Alexander Garden was also the 'first McDonald's in Russia,' which symbolized cultural and economic exchange with the West during the Soviet era. However, even this historic store is now unfortunately closed due to the aftermath of the Russia-Ukraine war.)
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👑 The Heart of Power, the Kremlin</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Right next to Red Square is the heart of Russian power, the 'Kremlin' palace. You have to pay a small entrance fee, but this is a must-see course if you are traveling in Moscow. Of course, you can't open the door to Putin's actual office, but you can get a glimpse of the continent's bluff, including the Armory, the 'Tsar Bell' of enormous size that has never been rung, and the 'Tsar Cannon' that has never been fired. In the Cathedral Square in the center of the Kremlin, the Uspensky, Arkhangelsky, and Blagoveshchensky Cathedrals are gathered together. As I mentioned earlier, there is not much to see inside a Russian cathedral, but these three are exceptions. You can appreciate the most magnificent and wonderful icons (or icons) that you can visit in Russia.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎸 Arbat Street, a Street of Art and Youth</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The center of Moscow is surprisingly small, so you can easily walk around and see the sights if you have the stamina, without having to use transportation. The Bolshoi Theatre, which is like the Hall of Arts, and the quiet Novodevichy Convent are also excellent. A short ride on the subway or a taxi will take you to 'Arbat Street,' where the youth and culture of Moscow breathe. Here, you can see a statue of the great writer Pushkin and his wife, as well as a memorial space for 'Viktor Tsoi.' Viktor Tsoi was a third-generation Korean-Russian rocker who was active during the Soviet era, and he became a 'legend of Russia' by singing about the freedom and resistance of young people in an oppressed society. He died prematurely in an accident, but his memorial wall is still filled with graffiti and cigarette butts from fans who commemorate him.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍔 Shake Shack, the Specialty of Arbat</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          And another specialty of Arbat Street was none other than 'Shake Shack.' At that time, it was a precious item that you could barely taste after waiting in line for hours in Korea, but on Arbat Street, you could eat a hamburger in a very pleasant environment without a waiting line. So, whenever I had guests from Korea, I would always guide them to this quiet Shake Shack.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏞️ Parks, the Shelters of a Huge City</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Throughout the city center, there are huge parks, as befits the scale of the continent. If the weather is even a little clear, all the Russians in the neighborhood pour out into the parks to enjoy a walk, as if by appointment. In particular, Gorky Park and VDNKh Park transform into huge outdoor ice rinks in winter. Skate rentals are also available, so all you need to bring are thick winter clothes, a fur hat, and gloves. Night skating on the ice rink surrounded by colorful lights is quite romantic. However, romance is romance, and if you fall on the ice, it will hurt to the bone, so if you are a beginner skater, I strongly recommend that you wear hip protectors instead of trying to look cool.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐦 Sparrow Hills, the Panorama of the City</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          A little away from the center of Moscow, you will come across Sparrow Hills, where you can see the city's skyline at a glance. Standing on the hill with the overwhelming Stalinist-style building of Moscow State University at your back, the scenery of the city we have walked through so far unfolds like a panorama with the winding Moscow River. It is that much of a photo zone that many people visit in Moscow.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌍 Neither Europe nor Asia, but Eurasia</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          When Koreans travel across the sea, they usually expect the charming and fairy-tale-like scenery of Europe that you might see on a postcard. However, Moscow is far from that typical soft image of Europe. On the other hand, it feels somewhat unfair(?) to call it Asia. Moscow is neither Europe nor Asia, but a city that has built its own unique genre of 'Eurasia.'
        </p>
      `}},{id:"russia-travel-2",title:{ko:"시베리아 횡단열차",en:"The Trans-Siberian Railway"},subtitle:{ko:"끝없는 설원을 달리는 낭만과 생존의 기록",en:"A Record of Romance and Survival Running Through the Endless Snowfields"},imageUrl:"https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/6e5ef7a9-efe4-4a82-8b4b-6de85029ca10.jpeg?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">낭만의 대륙 횡단 🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          러시아에서 유학하며 가장 야심 차게 품었던 로망 중 하나는, 다름 아닌 시베리아 횡단열차를 타보는 것이었다. 한국 사람 중에도 이미 다녀온 사람들이 꽤 있고 관련 책도 있을 정도로, 조금만 손품을 팔면 꽤 많은 정보를 찾을 수 있었지만 무작정 몸을 싣고 대륙을 가로지르는 낭만을 포기할 순 없었다. 모스크바에서 맞는 첫 번째 겨울 방학, 그것도 하필 내 생일인 1월 1일 새해 첫날에 맞춰, 아내와 의리의 동생들인 P군, S양과 함께 바이칼 호수로 떠나는 여행을 계획했다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💰 3등석, 2등석, 그리고 바퀴 달린 호텔</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          여담으로 인류학자들은 한국인의 뿌리가 바이칼 호수 주변을 누비던 고대 기마 민족이라고 하던데, 믿거나 말거나. 러시아의 장거리 열차는 크게 플라츠캇, 쿠페, 룩스로 나뉘는데, 쉽게 말해 3등석, 2등석, 1등석으로 보면 된다. 각 열차 칸의 가격 차이가 꽤 많이 나지만, 주머니 사정에 맞춰 쉽게 구분하는 절대 공식이 있다. 3등석인 플라츠캇은 비행기 표보다 확실히 싸고, 2등석인 쿠페는 비행기 표 값과 비슷해서 묘한 내적 갈등을 유발한다. 그리고 대망의 1등석 룩스는? 타본 적은 없지만 비행기 표 값의 두 배에 육박하니, 이쯤 되면 교통수단 보다는 ‘바퀴 달린 호텔’이라고 인식하는 편이 옳다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🫂 찐 러시아를 느끼는 공간, 플라츠캇</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          3등석 플라츠캇은, 문도 없는 개방형 큐브 공간에 6명이 오밀조밀 모여 타게 된다. 장거리 열차이기에 모든 자리는 침대로 되어 있고, 복도를 사이에 두고 한쪽에는 위아래로 두 사람, 반대편에는 양쪽으로 두 명씩 네 명이 머무르는 독특한 구조다. 식사나 간식을 먹을 수 있는 유일한 테이블은 1층에만 붙어 있기에, 만약 2층 침대 당첨자가 무언가 먹고 싶다면 1층 침대 거주자에게 알현하듯 내려와 양해를 구해야 한다. 다행히 러시아 사람들은 이 열차 시스템을 잘 알고 있기에 크게 개의치 않아 한다. 낯선 러시아인과 무릎을 맞대고 자연스럽게 대화하기에는 플라츠캇만한 것이 없다고 생각한다. 가격뿐만 아니라 ‘찐 러시아’를 온몸으로 느끼고 싶은 사람들에게 강력 추천한다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🃏 기차 여행의 필수 교양, 카드게임 '두락'</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          여담으로, 러시아에서 기차 여행을 한다면 필수 교양 과목처럼 알아두면 좋은 카드게임이 있다. 바로 ‘두락(Дурак)’인데, 직역하자면 ‘바보’라는 아주 직관적인 뜻이다. 손에 든 카드를 가장 먼저 털어내는 사람이 이기고, 마지막까지 카드를 쥐고 끙끙대는 한 명이 바로 그 영광의 ‘바보’가 되는 게임이기 때문이다. 나도 기차 안에서 이 카드 게임을 처음 배웠고, 러시아 친구들과 실전을 거듭하며 타짜(?)의 기량을 쌓을 수 있었다. 기본적으로는 두 명이 하지만 최대 여섯 명까지도 즐길 수 있다. 제일 특이한 점은 포커용 트럼프 카드에서 숫자 2, 3, 4, 5는 과감하게 내다 버린다는 것이다. 따라서 조커를 제외하고 총 사용되는 카드는 52장이 아니라 36장이다. 한국에서 치던 버릇대로 풀세트 카드를 사 가면 빈 숫자를 찾느라 당황하는 경우가 생길 수 있다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔒 안락한 우리만의 공간, 쿠페</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          다시 열차 이야기로 돌아와서, 2등석인 쿠페는 네 명이 하나의 문 달린 독립된 공간을 사용한다. 플라츠캇과 가장 크게 구별되는 점이 바로 이 ‘문’인데, 열고 닫을 수 있어서 복도의 소음을 차단하고 생각보다 안락하게 머무를 수 있다. 우리는 마침 일행이 딱 넷이었기에 한 치의 망설임도 없이 이 쿠페를 통째로 점령했다. 모르는 사람과 며칠을 섞여 가는 게 불편하기도 했고, 무엇보다 소매치기 괴담 때문에 귀중품을 복대에 차고 뜬눈으로 밤을 새워야 한다는 두려움이 컸기에 문을 걸어 잠글 수 있는 일행 넷의 조합이 정말 다행이라 생각했다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍜 기차 안 생존기</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          1층 침대 밑의 벙커 같은 공간에는 큰 짐을 보관하고, 당장 생존에 필요한 먹거리들만 미리 빼두었다. 각 열차 칸에는 화장실과 뜨거운 물이 콸콸 나오는 온수 통(사모바르)이 있어서, 컵라면이나 감자 퓨레(뜨거운 물을 부으면 순식간에 으깬 감자로 변신하는 마법의 가루), 차나 커피 등을 원 없이 먹고 마실 수 있었다. 특히 한국에선 보기 힘든 팔도 도시락 컵라면이 러시아에선 국민 라면 급으로 인기가 엄청난데, 그 숨은 비결 중 하나가 용기가 네모나게 생겨서 흔들리는 기차 여행 중 좁은 테이블에서도 잘 엎어지지 않기 때문이라고 한다. 믿거나 말거나.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🦐 새우잠과 으스스한 미신</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          기차 안 객실 공간은 여유가 있는 편이었지만, 침대는 원망스러울 정도로 조금 작았다. 내가 한국에서는 꽤 키가 큰 편에 속하긴 하지만, 평균적으로 덩치가 산만한 러시아인들에게도 이 침대 길이는 많이 아쉬운 편이다. 길이가 약 180cm 정도 되는데, 베개까지 놓고 누우면 다리를 쭉 펴기엔 택도 없이 모자랐다. 결국 나는 테트리스 블록처럼 자세를 대각선으로 틀거나 새우처럼 옆으로 웅크리고 잘 수밖에 없었다. 재밌게도 러시아 사람들은 “죽은 사람만 관 속에서 사지를 일자로 뻗고 잔다”는 으스스한 미신이 있어서, 침대가 짧은 걸 크게 불평하지 않는다고 한다. 그들이 긍정적인 건지, 체념이 빠른 건지 모를 일이다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎉 시베리아에서 맞이하는 새해</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          바이칼로 향하는 우리의 기차가 2014년 12월 31일 밤, 눈 덮인 모스크바를 미끄러지듯 빠져나가기 시작했다. 그로부터 얼마 지나지 않아, 캄캄한 어둠 속을 밤기차로 뚫고 달리며 우리는 2015년 새해를 맞았다. 시베리아 횡단열차 안에서 맞이하는 새해라니! 글로만 읽으면 미치도록 낭만적일 것 같지만, 현실은 가혹했다. 창밖은 끝없는 칠흑 같은 어둠뿐이었고, 가끔씩 스쳐 지나는 이름 모를 작은 마을의 불빛들만이 유일한 생존 신호였다. 그래도 굳이 낭만을 쥐어짜 내자면, 주변에 빛 공해가 없으니 밤하늘의 별만큼은 기똥차게 잘 보였다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎴 광활한 설원과 정차역의 묘미</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          낮에는 광활한 시베리아 벌판을 배경 삼아 타짜들처럼 화투를 치며 심심한 시간을 달랬다. 기차는 중간중간 여러 역에 정차하며 사람들을 토해내고 또 태웠는데, 대부분은 작은 역들이었지만 가끔 큰 도시에서는 30분 이상 느긋하게 정차하기도 했다. 기차가 정차하면 승강장 한편에는 찐 감자와 고기, 만두 등을 파는 할머니들이 어김없이 진을 치고 있었다. 가격도 착하고 맛도 기차 안에서 허기를 달래기엔 훌륭했다. 기차 내에서는 식당칸으로 원정을 가서 먹을 것을 사 올 수도 있었고, 주기적으로 카트를 끌고 도는 승무원에게 간식을 살 수도 있었다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍗 혹한 속 KFC 치킨 쟁탈전</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이름조차 기억나지 않는 어느 작은 마을 역에서, 열차가 연료를 보충하는지 꽤 오랜 시간 정차한 적이 있다. 우리는 밖으로 나가 구멍가게를 털어 필요한 것들을 샀고, 시베리아의 한파 속에서 무슨 객기였는지 겉옷을 벗어 던진 채 반바지와 속옷 차림으로 기념사진을 찍는 광기를 부리기도 했다. 한 번은 ‘예카테린부르크’라는 큰 도시에 정차했을 때, 나와 P군은 이번에도 반바지 차림으로 기차역 근처의 KFC를 향해 전력 질주를 했다. 혹독한 추위를 뚫고 공수해 온 소중한 치킨을, 다시 출발하는 따뜻한 열차 안에서 얼어붙은 몸을 녹이며 뜯어 먹었을 때의 그 쾌감이란! 정말이지 기가 막히게 황홀한 맛이었다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⏳ 시간을 달리는 열차</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바에서 바이칼 호수의 관문인 이르쿠츠크까지는 다이렉트로 꼬박 4일이 걸리지만, 우리는 중간에 옴스크라는 큰 도시에 내려 하루를 묵었다. 시내 구경도 하고, 모처럼 식당에서 ‘진짜 밥’도 먹고, 숙소에서 따뜻한 물로 사람 몰골을 되찾았기에 총 5일이 걸린 여정이었다. 모스크바와 이르쿠츠크 간의 시차는 무려 5시간인데, 기차로 대략 하루를 이동할 때마다 시계가 한 시간씩 미래로(?) 당겨지는 신비로운 타임슬립을 경험했다. 신기하게도 이르쿠츠크는 모스크바에서 그토록 아득하게 멀리 떨어져 있었지만, 한국과의 시차는 고작 한 시간밖에 차이 나지 않았다. 대륙을 횡단하며 마침내 그리운 한국의 시간에 한 뼘 더 가까워진 기분이었다.
        </p>
      `,en:`
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Romance of a Transcontinental Journey 🚂</h3>
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          One of the most ambitious romantic notions I had while studying in Russia was to ride the Trans-Siberian Railway. There were quite a few Koreans who had already been there, and there were even books about it, so I could find a lot of information with a little effort, but I couldn't give up the romance of just getting on and crossing the continent. During my first winter vacation in Moscow, on New Year's Day, January 1st, which also happened to be my birthday, I planned a trip to Lake Baikal with my wife and my loyal younger siblings, P and S.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💰 3rd Class, 2nd Class, and a Hotel on Wheels</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          As an aside, anthropologists say that the roots of the Korean people are the ancient horse-riding people who roamed around Lake Baikal, but believe it or not. Russia's long-distance trains are largely divided into Platzkart, Coupe, and Lux, which can be easily understood as 3rd, 2nd, and 1st class. The price difference between each train car is quite large, but there is an absolute formula for easy classification according to your budget. The 3rd class Platzkart is definitely cheaper than a plane ticket, and the 2nd class Coupe is similar in price to a plane ticket, which causes a strange inner conflict. And the long-awaited 1st class Lux? I've never been on it, but it's almost twice the price of a plane ticket, so it's better to think of it as a 'hotel on wheels' rather than a means of transportation.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🫂 Platzkart, a Place to Feel the Real Russia</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The 3rd class Platzkart is an open-plan cube space without a door, where 6 people are crammed together. Since it is a long-distance train, all seats are beds, and it has a unique structure with two people on top of each other on one side of the aisle, and two people on each side on the other side, for a total of four people. The only table where you can eat meals or snacks is attached to the first floor, so if the winner of the second-floor bed wants to eat something, they have to come down as if for an audience with the first-floor bed resident and ask for their understanding. Fortunately, Russians are well aware of this train system and don't really mind. I think there is nothing better than Platzkart for striking up a natural conversation with a stranger in Russia. I highly recommend it not only for the price but also for those who want to feel the 'real Russia' with their whole body.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🃏 'Durak', a Must-Know Card Game for Train Travel</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          As an aside, if you are traveling by train in Russia, there is a card game that is good to know as a required liberal arts subject. It's called 'Durak (Дурак),' which literally means 'fool.' This is because the person who gets rid of all their cards first wins, and the one person who is stuck with cards until the end becomes the glorious 'fool.' I also learned this card game for the first time on the train, and I was able to build up my skills as a card sharp(?) through repeated practice with my Russian friends. Basically, two people play, but up to six people can enjoy it. The most peculiar thing is that the numbers 2, 3, 4, and 5 are boldly discarded from a poker deck. Therefore, excluding the joker, a total of 36 cards are used, not 52. If you buy a full deck of cards as you are used to doing in Korea, you may be flustered looking for the missing numbers.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🔒 Coupe, Our Own Cozy Space</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Returning to the train story, the 2nd class Coupe has four people using one independent space with a door. The biggest difference from Platzkart is this 'door,' which can be opened and closed, blocking the noise from the aisle and allowing you to stay in a surprisingly cozy space. Since there were exactly four of us, we occupied this coupe without a moment's hesitation. It was uncomfortable to be mixed with strangers for several days, and above all, the fear of having to stay up all night with valuables in a money belt due to pickpocketing stories was great, so I was really glad that we had a combination of four people who could lock the door.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍜 Survival on the Train</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          We stored our large luggage in the bunker-like space under the first-floor bed and took out only the food we needed for immediate survival. Each train car had a bathroom and a hot water dispenser (samovar) that gushed hot water, so we could eat and drink as much cup noodles, potato puree (a magical powder that turns into mashed potatoes in an instant when you pour hot water), tea, or coffee as we wanted. In particular, the Paldo Dosirak cup noodles, which are hard to find in Korea, are incredibly popular in Russia, to the point of being a national ramen, and one of the hidden secrets is that the container is square, so it doesn't tip over easily on a narrow table during a shaky train journey. Believe it or not.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🦐 Shrimp Sleep and a Creepy Superstition</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The cabin space on the train was spacious, but the bed was resentfully a little small. Although I am quite tall in Korea, the length of this bed is also a bit disappointing for the average-sized Russian. It is about 180 cm long, and if you lie down with a pillow, it is not long enough to stretch your legs out. In the end, I had to sleep with my body twisted diagonally like a Tetris block or curled up on my side like a shrimp. Interestingly, Russians have a creepy superstition that "only the dead sleep with their limbs stretched out straight in a coffin," so they don't complain much about the short beds. I don't know if they are positive or quick to give up.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎉 New Year in Siberia</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Our train to Baikal began to slide out of snow-covered Moscow on the night of December 31, 2014. Shortly thereafter, we greeted the new year of 2015 while running through the pitch-black darkness on a night train. New Year's on the Trans-Siberian Railway! It sounds incredibly romantic when you read it in writing, but reality was harsh. The view outside the window was nothing but endless pitch-black darkness, and the only signs of life were the occasional lights of small, nameless villages that we passed by. Still, if I had to squeeze out some romance, the stars in the night sky were amazingly clear because there was no light pollution around.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎴 The Charm of the Vast Snowfields and Station Stops</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          During the day, we passed the boring time by playing Hwatu (Korean card game) like professional gamblers against the backdrop of the vast Siberian plains. The train stopped at several stations along the way, letting people off and on. Most of them were small stations, but sometimes in big cities, it would stop for more than 30 minutes at a leisurely pace. When the train stopped, there were always grandmothers on one side of the platform selling steamed potatoes, meat, and dumplings. The price was reasonable and the taste was excellent for satisfying hunger on the train. On the train, we could go on an expedition to the dining car to buy food, or we could buy snacks from a crew member who periodically pushed a cart.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍗 KFC Chicken Scramble in the Extreme Cold</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          At a small village station whose name I don't even remember, the train stopped for quite a long time to refuel. We went outside, raided a convenience store for necessary items, and in the Siberian cold wave, with some kind of bravado, we even engaged in the madness of taking commemorative photos in our shorts and underwear after throwing off our outer clothes. Once, when we stopped in a big city called 'Yekaterinburg,' P and I once again sprinted to a KFC near the train station in our shorts. The pleasure of tearing into the precious chicken that we had procured through the harsh cold, while warming our frozen bodies in the warm train that was starting again! It was a truly, amazingly ecstatic taste.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⏳ The Time-Traveling Train</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          It takes a full 4 days to get from Moscow to Irkutsk, the gateway to Lake Baikal, but we got off in a big city called Omsk in the middle and stayed for a day. It was a 5-day journey because we also looked around the city, had a 'real meal' at a restaurant for a change, and regained our human form with warm water at our accommodation. The time difference between Moscow and Irkutsk is a whopping 5 hours, and we experienced a mysterious time slip where the clock was advanced by one hour for every day we traveled by train. Surprisingly, although Irkutsk was so far away from Moscow, the time difference with Korea was only one hour. It felt like I had finally gotten one step closer to the time of my beloved Korea while crossing the continent.
        </p>
      `}},{id:"russia-travel-3",title:{ko:"이르쿠츠크와 바이칼",en:"Irkutsk and Baikal"},subtitle:{ko:"얼음 왕국에서 맛보는 훈제 오물과 스노모빌의 짜릿함",en:"The Thrill of Smoked Omul and Snowmobiling in the Ice Kingdom"},imageUrl:"https://i.namu.wiki/i/Zl5MyGIK8j9aB7KJCT2eiF5-I_3M9A3Lpie5967ZiYqngweaEBjEswltjGZwTgkTn_QscbaYHD9d-lpUbvKqiw.webp?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍲 시베리아의 포근한 도시, 이르쿠츠크</h3>
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          4일간의 열차 이동을 하며 컵라면, 마법의 감자 퓨레 가루, 그리고 패스트푸드로 간신히 연명했다. 그렇기에 목적지인 이르쿠츠크에 도착하자마자 우리 일행의 눈이 뒤집혀 찾은 것은 다름 아닌 식당에서 사람이 직접 요리해 주는 따뜻한 요리였다. 아침 일찍 도착하여 문을 연 곳이 많지 않았지만 다행히도 식당을 하나 찾아 몸과 마음을 녹일 수 있었다. 우리가 거쳐온 시베리아의 무시무시한 도시들과는 다르게, 이르쿠츠크의 날씨는 영하 5도에서 10도 사이로 애교 수준의 포근함(?)을 자랑했다. 도시는 크게 주민들의 거주 구역과 시내 중심가로 나뉘어 있었는데, 워낙 동네가 아담해서 택시만 타면 어디든 5분 이면 갈 수 있었다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚿 아늑한 숙소와 온수통 룰렛</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          우리가 잡은 숙소는 거주 구역 쪽에 있어서 다행히 주변에 예쁜 공원과 식당들이 잘 갖춰져 있었다. 인심 좋은 호스트가 이른 체크인을 허락해 준 덕분에 아늑한 실내에서 기차 여행의 묵은 피로를 씻어낼 수 있었다. 부킹닷컴에서 예약했지만 마치 에어비엔비처럼 누군가의 진짜 가정집을 통째로 빌린 느낌이었는데, 한껏 낸 크리스마스 장식과 집 안을 어슬렁거리는 고양이가 아주 인상적이었다. 다만 이 집에는 치명적인 함정이 하나 있었으니, 바로 ‘온수통 룰렛’이었다. 따뜻한 물이 데워지는 데 시간이 걸리는 시스템이라, 누군가 샤워를 길게 하고 나온 직후에 멋모르고 들어갔다가는 찬물을 강제로 뒤집어쓰는 참사를 겪어야 했다. 기차에서의 불편한 잠자리 때문인지 따뜻하게 먹은 아침 때문인지 일단 체력을 보충하고, 이르쿠츠크 시내 구경을 나섰다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧊 얼음 왕국이 된 도시</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          우리 달력으로는 새해가 밝았지만, 러시아 정교회는 1월 7일을 크리스마스로 기념한다. 덕분에 러시아는 1월 1일부터 8일까지 나라 전체가 거대한 연휴 모드에 들어간다. 우리가 도착한 날이 1월 5일이었으니, 아직 새해의 텐션이 꺾이지 않은 데다 크리스마스이브의 설렘까지 겹쳐 시내는 그야말로 축제 분위기였다. 광장 한복판에는 얼음으로 조각한 거대한 2015 숫자와 늑대 상이 위풍당당하게 서 있었고, 주변으로 놀거리와 먹거리가 넘쳐났다. 숙소 근처의 큰 공원 역시 아예 얼음 왕국으로 변신해 있었다. 얼음성, 얼음 미로, 얼음 미끄럼틀을 마주한 우리 일행은 체면도 잊은 채 동심으로 돌아갔고, 다 큰 어른이 다섯 명이서 그렇게 이르쿠츠크의 얼음판을 뒹굴며 하루를 하얗게 불태웠다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏞️ 바이칼의 관문, 리스트비얀카</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이르쿠츠크 시내에서 몸을 풀었으니, 이제 진짜 목적지인 바이칼 호수를 마주할 차례였다. 버스를 타고 30~40분 정도를 달리자 호숫가 마을인 리스트비얀카에 도착했다. 내심 꽝꽝 언 호수 위에서 자동차 드리프트라도 해볼까 기대했지만, 아쉽게도 아직 호수가 완전히 얼어붙지 않아 그 야망은 접어야 했다. 하지만 바이칼은 얼지 않아도 즐길 거리가 무궁무진했다. 우리는 본격적인 탐험에 앞서 바이칼 호수 박물관부터 들렀다. 규모가 엄청나게 크진 않았지만, 전 세계 담수의 20%를 품고 있다는 이 거대한 바다 같은 호수의 역사와 이곳에서만 사는 고유 생물들을 훑어보기엔 완벽한 장소였다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐟 바이칼의 별미, 훈제 오물</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          박물관에서 대충 지식을 채운 뒤에는 호숫가를 따라 형성된 리스트비얀카 마을을 유유자적 걸었다. 걷다 보면 어디선가 기가 막힌 냄새가 코를 찌르는데, 상인들이 거리에서 팔고 있는 오물(Omul)이라는 물고기 훈제 냄새다. 오직 바이칼 호수에서만 서식하는 연어과 물고기라는데, 가격도 착하고 맛도 아주 훌륭했다. 거리에서 이 훈제 오물을 구입하면 비밀봉지에 넣어주는데 맨손이나 장갑 낀 손으로 낄낄거리며 뜯어 먹었다. 비록 그 대가로 장갑에 한동안 지워지지 않는 강렬한 비린내를 달게 되었지만, 길거리에서 넓디 넓은 바이칼 호수를 바라보며 뜯어 먹던 그 맛은 고급 식당 부럽지 않은 진귀한 경험이었다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐕 시베리아의 로망, 개썰매</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          시베리아에 왔다면 은빛 설원을 질주하는 개썰매에 대한 로망을 품게 마련이다. 숙소 호스트에게서 바이칼 근처에 개썰매를 탈 수 있는 곳이 있다는 고급 정보를 얻은 우리는 한껏 부푼 마음으로 찾아갔다. 내 머릿속엔 영화에 나오는 털이 북실북실하고 위풍당당한 썰매견들을 상상했지만, 막상 마주한 녀석들은 털도 짧고 몸매도 꽤나 얄쌍한(?) 실전 압축형 일꾼들이었다. 손님과 방향을 잡는 머셔(Musher)까지 두 사람을 태운 썰매를 여덟 마리의 개가 끌었는데, 상상했던 것만큼 스피드가 빠르지 않았다. 하지만 뭐 어떤가. “나 시베리아 벌판에서 개썰매 타본 사람이야”라는 기가 막힌 안줏거리를 하나 건진 것만으로도 본전은 뽑은 셈이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏍️ 개썰매보다 짜릿한 스노모빌</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 솔직히 고백하건대, 개썰매보다 오조오억 배는 더 재미있고 짜릿했던 것은 따로 있었다. 바로 개썰매 체험장 근처에 있던 스노모빌이었다. 스키장에서 안전요원들이 타고 다니는 바로 그 엔진 달린 눈썰매 말이다. 지친 기색이 역력했던 얄쌍한 개들과 달리, 시동을 걸자마자 우렁찬 굉음을 뿜어내는 이 기계는 단숨에 우리를 대륙의 폭주족(?)으로 만들어 주었다. 엑셀을 당기는 순간, 방금 전 느릿했던 개썰매의 아쉬움은 싹 잊혀지고 러시아의 끝없는 은빛 설원을 미친 듯이 질주하는 쾌감이 온몸을 휘감았다. 현대 문명의 자본주의 스피드가 시베리아 벌판을 지배하는 순간이었다. 다만, 이 미친 속도감을 즐길 때 반드시 주의할 점이 하나 있다. 아무리 헬멧을 푹 눌러쓰고 무장을 해도, 스노모빌이 일으키는 자비 없는 눈보라가 얼굴을 사정없이 때려 앞이 하나도 안 보일 수 있다는 것이다. 자칫하다간 끝없는 설원을 달리다 진짜 인생의 '끝'을 볼 수도 있으니, 스피드에 취하더라도 두 눈을 부릅뜨고 시야 확보에 목숨을 걸어야 한다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛷️ 호수를 마주하며 즐기는 스키</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          바이칼의 겨울여행을 제대로 완성해 준 화룡점정은 단연 스키장이었다. 이곳의 슬로프 길이가 압도적으로 긴 것은 아니지만, 뷰 하나만큼은 전 세계 어디와 비교해도 뒤지지 않는다. 첩첩산중의 눈덮힌 앙상한 산봉우리만 내려다보며 타는 일반 스키장과 달리, 이곳에서는 그 거대한 바이칼 호수를 정면으로 마주 보며 활강할 수 있다. 설령 스키를 타다 자빠져도, 잠시 쉬며 바이칼 호수의 그 웅장함을 멍하니 바라보고 있으면 그만이다. 그때 두 눈에 담았던 풍경은 여전히 내 기억 속에 여전히 선명하다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👋 꿈같던 겨울 여행의 마무리</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          광활한 횡단열차로 시작해 바이칼 호수에서 정점을 찍은 겨울 여행은 쏜살같이 지나갔다. 돌아갈 때는 열차 비행기를 탔다. 또다시 4일간 기차를 탈 각오가 서지 않았다. 6시간을 날아가는 비행이었지만, 모스크바와 이르쿠츠크의 5시간 시차 덕분에 비행기를 타고 출발한 시간과 거의 똑같은 시간에 모스크바에 떨어지는 신기한 타임슬립을 경험했다. 하루가 30시간으로 늘어난 듯한 기묘한 기분과 함께 시베리아 횡단열차와 함께한 겨울여행도 막을 내렸다. 러시아의 겨울 방학은 총 3주. 여행에서 하얗게 불태운 2주를 뒤로하고, 이제 남은 일주일은 다가올 새 학기의 융단폭격을 견뎌내기 위해 얌전히 방구석에서 체력을 재충전할 시간이다.
        </p>
      `,en:`
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍲 Irkutsk, a Cozy City in Siberia</h3>
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          For four days on the train, we barely survived on cup noodles, magical potato puree powder, and fast food. Therefore, as soon as we arrived at our destination, Irkutsk, what our group looked for with our eyes wide open was none other than a warm dish cooked by a person in a restaurant. We arrived early in the morning, and there were not many places open, but fortunately, we were able to find a restaurant to warm our bodies and minds. Unlike the scary Siberian cities we had passed through, the weather in Irkutsk was a cute level of cozy(?), between -5 and -10 degrees Celsius. The city was largely divided into a residential area for residents and a downtown area, but the neighborhood was so small that you could get anywhere in 5 minutes by taxi.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚿 Cozy Accommodation and Hot Water Tank Roulette</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The accommodation we booked was in a residential area, so fortunately, there were pretty parks and restaurants nearby. Thanks to the generous host who allowed us to check in early, we were able to wash away the accumulated fatigue of our train journey in the cozy interior. We booked it on Booking.com, but it felt like we had rented someone's real home, like an Airbnb, and the Christmas decorations and the cat that was lounging around the house were very impressive. However, there was one fatal trap in this house, and that was the 'hot water tank roulette.' It was a system where it took time for the hot water to heat up, so if you went in right after someone had taken a long shower, you would have to face the disaster of being forced to take a cold shower. Perhaps because of the uncomfortable bed on the train or the warm breakfast we ate, we decided to replenish our energy first and then go out to see the sights of Irkutsk.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧊 The City That Became an Ice Kingdom</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Although the new year had dawned on our calendar, the Russian Orthodox Church celebrates Christmas on January 7. Thanks to this, from January 1st to 8th, the entire country of Russia enters a huge holiday mode. Since we arrived on January 5th, the New Year's tension had not yet subsided, and the excitement of Christmas Eve was added, so the city was truly in a festive mood. In the middle of the square stood a huge 2015 number and a wolf statue carved out of ice, and there were plenty of things to do and eat around. A large park near our accommodation had also been transformed into an ice kingdom. Faced with an ice castle, an ice maze, and an ice slide, our group forgot our dignity and returned to our childhood innocence, and the five of us grown adults spent the day rolling around on the ice of Irkutsk.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏞️ Listvyanka, the Gateway to Baikal</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After warming up in the city of Irkutsk, it was time to face our real destination, Lake Baikal. After a 30-40 minute bus ride, we arrived at the lakeside village of Listvyanka. I was secretly hoping to do some car drifting on the frozen lake, but unfortunately, the lake was not yet completely frozen, so I had to give up that ambition. However, Baikal had plenty to enjoy even when it wasn't frozen. Before our full-fledged exploration, we first visited the Lake Baikal Museum. It wasn't a huge museum, but it was the perfect place to get a glimpse of the history of this huge, sea-like lake, which contains 20% of the world's fresh water, and the unique creatures that live only here.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐟 Smoked Omul, a Delicacy of Baikal</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After filling our minds with knowledge at the museum, we leisurely walked through the village of Listvyanka, which was formed along the lakeshore. As you walk, you will smell a wonderful smell, which is the smell of smoked fish called Omul, which merchants sell on the street. It is a salmonid fish that lives only in Lake Baikal, and the price was reasonable and the taste was excellent. When you buy this smoked omul on the street, they put it in a plastic bag, and we ate it with our bare hands or gloved hands, giggling. Although the price was a strong fishy smell that did not go away from my gloves for a while, the taste of eating it on the street while looking at the vast Lake Baikal was a rare experience that was not inferior to a fancy restaurant.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐕 Dog Sledding, the Romance of Siberia</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          If you come to Siberia, you are bound to have a romantic notion of dog sledding through the silver snowfields. We got some high-quality information from our host that there was a place near Baikal where you could go dog sledding, so we went there with high hopes. In my head, I imagined the fluffy, majestic sled dogs from the movies, but the ones I actually met were short-haired and quite slender(?) practical, compressed workers. Eight dogs pulled a sled carrying two people, including a guest and a musher who set the direction, but the speed was not as fast as I had imagined. But who cares? I had already gotten my money's worth just by getting a great story to tell: "I'm the guy who went dog sledding on the Siberian plains."
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏍️ Snowmobiling, More Thrilling Than Dog Sledding</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          But to be honest, there was something that was a hundred million times more fun and thrilling than dog sledding. It was the snowmobile near the dog sledding experience center. I'm talking about the engine-powered snow sled that the safety guards at ski resorts ride. Unlike the slender dogs that looked exhausted, this machine, which let out a roaring sound as soon as it was started, instantly turned us into continental bikers(?). The moment I pulled the accelerator, the disappointment of the slow dog sledding was completely forgotten, and the thrill of madly racing through the endless silver snowfields of Russia engulfed my whole body. It was the moment when the capitalist speed of modern civilization dominated the Siberian plains. However, there is one thing to be careful about when enjoying this crazy speed. No matter how much you wear a helmet and are armed, the merciless snowstorm that the snowmobile creates can hit your face so hard that you can't see anything in front of you. If you're not careful, you could really see the 'end' of your life while running through the endless snowfields, so even if you're drunk on speed, you have to keep your eyes wide open and risk your life to secure your vision.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛷️ Skiing While Facing the Lake</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The finishing touch that completed our winter trip to Baikal was definitely the ski resort. The slopes here are not overwhelmingly long, but the view is second to none in the world. Unlike a normal ski resort where you only look down at the snow-covered, bare mountain peaks of the deep mountains, here you can ski downhill while facing the huge Lake Baikal. Even if you fall while skiing, you can just take a break and stare blankly at the magnificence of Lake Baikal. The scenery I saw with my own eyes at that time is still vivid in my memory.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👋 The End of a Dreamlike Winter Trip</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The winter trip, which started with a vast transcontinental train and culminated at Lake Baikal, passed by in a flash. We took a plane back. I was not prepared to ride the train for another 4 days. It was a 6-hour flight, but thanks to the 5-hour time difference between Moscow and Irkutsk, we experienced a strange time slip where we landed in Moscow at almost the same time as we departed. With the strange feeling that the day had stretched to 30 hours, our winter trip with the Trans-Siberian Railway also came to an end. The winter vacation in Russia is a total of 3 weeks. After burning through 2 weeks on our trip, it was time to recharge our batteries in the corner of our room for the remaining week to withstand the carpet bombing of the upcoming new semester.
        </p>
      `}},{id:"russia-travel-4",title:{ko:"아픔을 간직한 도시, 상트 페테르부르크",en:"St. Petersburg, a City That Holds Pain"},subtitle:{ko:"눈부신 아름다움과 핏빛 역사가 공존하는 도시",en:"A city where dazzling beauty and bloody history coexist"},imageUrl:"https://d3b39vpyptsv01.cloudfront.net/photo/1/2/aec606e62cd04ac98dad836388702a39.jpg?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ 아름다움과 비극이 공존하는 도시</h3>
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          상트페테르부르크는 러시아의 제2의 도시로 불리지만, 그 위상과 자부심만큼은 수도 모스크바에 결코 뒤지지 않는다. 러시아 도시답게 면적은 서울의 두 배가 넘는 광활한 대지를 품고 있다. 모스크바의 임구가 약 1,300 만 명으로 서울의 천만명을 넘듯, 상트 페테르부르크는 부산의 330만 인구보다도 많은 약 560만 명의 인구가 거주하는 거대 메트로폴리스다. 18세기 표트르 대제가 ‘서구로 향하는 창’을 열기 위해 늪지대를 일구어 만든 이 계획도시는, 도시 전체가 유네스코 세계문화유산으로 지정될 만큼 눈부신 아름다움을 자랑한다. 하지만 이 화려한 유럽풍의 궁전과 낭만적인 운하를 걷다 보면, 이곳이 한때 상상조차 하기 힘든 생지옥이었다는 사실을 떠올리기 힘들다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⚔️ 900일의 지옥, 레닌그라드 공방전</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          제2차 세계대전 당시 레닌그라드 공방전으로 불리는 약 900일간의 처절한 포위전 동안, 이 도시는 그야말로 아사의 늪이었다. 식량이 완전히 바닥나 가죽 구두와 벽지를 끓여 먹는 것은 예사였고, 굶주림에 이성을 잃은 사람들이 길거리의 개와 고양이를 넘어서 심지어 사람을 잡아먹는 인육 사건까지 벌어졌던 끔찍한 비극의 역사가 서려 있다. 그 지독한 고통과 굶주림을 뼈를 깎는 인내로 버텨낸 도시이기에, 잿빛 하늘 아래 우뚝 선 상트페테르부르크의 화려한 건축물들은 단순한 예쁨을 넘어 기묘하고도 묵직한 전율을 안겨준다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌹 잊지 못할 3월 8일, 여성의 날</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아에서는 3월 8일, 세계 여성의 날을 기념하는데 이에 맞춰 여행 일정을 짰다. 한국 사람들은 잘 모르지만, 러시아에서 여성의 날은 꽤나 굵직한 명절이다. 아내는 “러시아에선 여성의 날에 길거리의 모르는 남자들도 여자에게 축하한다며 꽃을 건넨다더라”는 낭만적인 카더라(?)를 듣고 이 첫 여성의 날을 오매불망 기다렸다. 그리고 이 낭만적인 소문이 진짜였음을 증명해 준 건 다름 아닌 우리 숙소의 주인아주머니였다. 아침에 길을 나서려는데, 아주머니가 수줍게 다가와 여성의 날을 축하한다며 아내에게 장미꽃 한 송이를 건넨 것이다. 타지에서 받은 그 따뜻한 꽃 한 송이의 감동 덕분에, 아내는 매년 여성의 날이 돌아올 때마다 상트페테르부르크의 추억을 미소 지으며 꺼내어 놓곤 한다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌉 밤을 가르는 거대한 도개교</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          상트페테르부르크를 이야기할 때 절대 빼놓을 수 없는 명물이 하나 있다. 바로 늦은 밤 네바강 위에서 펼쳐지는 거대한 도개교다. 강이 꽁꽁 어는 한겨울에는 아쉽게도 볼 수 없지만, 강물이 녹는 4월 말부터 11월까지는 매일 밤 장관이 연출된다. 보통 새벽 1시 10분경 에르미타주 박물관 앞의 팰리스 브리지(궁전 다리)를 시작으로, 거대한 다리들이 배가 지나갈 수 있도록 반으로 쩍 갈라져 하늘로 솟구친다. 화려한 야간 조명을 받은 수천 톤의 다리가 육중하게 열리는 모습은 넋을 잃게 만들 만큼 압도적이다. 다만 낭만에 취해 다리 넘어가는 시간을 놓쳤다가는, 강 건너편 숙소로 돌아가기 위해 택시를 하염없이 기다려야 하는 것은 물론택시비를 왕창 뜯길 수 있으니 관람 시간과 동선 체크는 생존을 위한 필수다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🖼️ 예술의 정점, 에르미타주 박물관</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          도시의 스케일은 단연 에르미타주 박물관에서 절정을 찍는다. 영국 대영 박물관, 프랑스 루브르와 함께 세계 3대 박물관으로 꼽히는 이곳은 예술에 조예가 깊은 사람이라면 일주일을 꼬박 봐도 모자라다고 한다. 예술적 감각이 부족한 우리 부부는 경보 수준으로 스피드런을 했지만, 그냥 스윽스윽 걸으며 지나치기만 해도 끝없이 펼쳐지는 화려한 방들과 어마어마한 스케일의 명작들에 완전히 압도당하고 말았다. 이성주 아나운서의 목소리가 담긴 오디오 가이드도 있다지만, 굳이 설명을 듣지 않아도 이 거대한 겨울 궁전 내부를 두 발로 걷고 있다는 사실 자체가 황홀한 예술적 경험이었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛪ 모스크바와는 다른 매력의 성당들</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바에 성 바실리 대성당이 있다면, 상트 페테르부르크에는 피의 구원자 성당(혹은 피의 사원)이 있다. 평소 바실리 성당이 러시아 건축의 끝판왕이라 믿었던 우리는 피의 사원의 디테일을 보고 입을 다물지 못했다. 딱 봐도 피의 사원 쪽의 레벨이 한 수 위였다. 피의 사원 옆에 위치한 러시아 박물관에서는 교과서에서 본 듯한 익숙한 그림들을 찾아내는 쏠쏠한 재미가 있었고, 별 기대 없이 들렀던 성 이사악 성당은 유명세가 무색할 정도로 압도적인 웅장함을 자랑했다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏰 지식인들의 감옥, 페트로파블롭스크 요새</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          네바강 위 작은 섬에 자리한 페트로파블롭스크 요새(혹은 피터폴 요새)는 과거 감옥으로 쓰였던 곳이다. 사방이 강으로 둘러싸여 탈출이 불가능했다는 이 감옥에는 이름만 대면 알 만한 지식인들이 수없이 거쳐 갔다. 가이드 말로는 죄질이 '조금' 나쁜 엘리트들만 오는 일종의 VIP 휴양형(?) 감옥이었고, 진짜 중범죄자들은 얄짤없이 시베리아로 유배되었다고 한다. 하지만 막상 좁고 차가운 감방 내부를 보니, 휴양은커녕 어느 나라든 옥살이는 결코 만만치 않겠다는 서늘한 깨달음을 얻었다. 이 외에도 러시아 황제들의 피서지라는 여름 정원과 푸틴의 모교인 상트페테르부르크 국립대학교, 붉은 등대 등도 야무지게 눈도장을 찍었다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚇 등골 오싹한 지하철의 스킨헤드</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          상트 페테르부르크의 지하철을 이용하다 보면 가끔 등골이 오싹해지는 순간이 있는데, 바로 말로만 듣던 스킨헤드와 마주칠 때다. 스킨헤드는 이름 그대로 머리를 아주 짧게 깎거나 아예 삭발한 채 군화를 신고 다니는 극우 인종차별주의자 집단을 일컫는데, 러시아 내 외국인들에게는 공포의 대상 그 자체다. 그들이 무서운 진짜 이유는 예측 불가능한 폭력성과 외국인을 향한 맹목적인 적개심에 있었다. 그들에게 외국인은 대화의 상대가 아니라 단지 ‘러시아에서 몰아내야 할 사냥감’에 불과했기에, 그들과 눈이 마주친다는 것은 곧 통제 불능의 위험에 노출됨을 의미했다. 특히 히틀러의 생일(4월 20일) 즈음해서는 그 광기가 정점에 달해, 이유없는 무차별적 린치를 가하는 일이 있다고 들었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✨ 화려함 뒤에 가려진 시린 현실</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          유쾌했던 관람을 마치고 돌아온 기차역의 풍경은 사뭇 달랐다. 겨울이라 한산한 관광지와 달리, 따뜻한 역 안에는 추위를 피하러 온 거지들이 잔뜩 몰려 있었다. 러시아 사람들은 선행을 베풀어야 천국에 간다고 굳게 믿기에 평소 적선을 아주 후하게 하는 편인데, 그 때문인지 상트페테르부르크의 눈부신 궁전과 극명하게 대비되는 이 시린 현실이 유독 씁쓸하고 묵직하게 다가왔다.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚂 야생화처럼 피어난 도시의 낭만</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바로 돌아가는 야간열차 안에서 멀어지는 불빛들을 바라보며 생각했다. 상트페테르부르크가 그토록 눈부시게 화려해 보였던 이유는, 역설적이게도 그 밑바닥에 짙게 깔린 역사적 아픔 때문일지도 모른다. 900일의 굶주림을 견뎌낸 핏빛 역사 위로 세워진 찬란한 금빛 돔, 차가운 늪지대 위에 세계 최고의 예술을 꽃피운 사람들의 지독한 생명력, 이 도시의 낭만은 온실 속 화초처럼 가볍고 얄팍한 아름다움이 아니었다. 그것은 매서운 겨울의 눈보라를 악착같이 버텨낸 야생화 같은 끈질긴 생명력의 결정체였다.
        </p>
      `,en:`
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ A City of Coexisting Beauty and Tragedy</h3>
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          St. Petersburg is called the second city of Russia, but its status and pride are by no means inferior to the capital, Moscow. Like a typical Russian city, its area is more than twice that of Seoul, embracing a vast land. Just as Moscow's population of about 13 million exceeds Seoul's 10 million, St. Petersburg is a huge metropolis with a population of about 5.6 million, more than Busan's 3.3 million. This planned city, created by Peter the Great in the 18th century by cultivating a swamp to open a 'window to the West,' boasts a dazzling beauty that has earned the entire city a UNESCO World Heritage designation. However, as you walk through these splendid European-style palaces and romantic canals, it is hard to imagine that this place was once a living hell that is hard to even imagine.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⚔️ 900 Days of Hell, the Siege of Leningrad</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          During the approximately 900-day brutal siege known as the Siege of Leningrad during World War II, the city was literally a swamp of starvation. It was common to boil and eat leather shoes and wallpaper when food was completely gone, and there is a history of horrific tragedy where people who lost their reason due to hunger went beyond eating dogs and cats on the street to even eating people. Because it is a city that endured such terrible pain and hunger with bone-crushing patience, the splendid architecture of St. Petersburg, standing tall under the gray sky, gives a strange and heavy thrill beyond simple beauty.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌹 Unforgettable March 8th, Women's Day</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In Russia, March 8th is celebrated as International Women's Day, and we planned our trip accordingly. Koreans don't know much about it, but in Russia, Women's Day is a pretty big holiday. My wife had heard a romantic rumor(?) that "in Russia, on Women's Day, even strange men on the street give flowers to women to congratulate them," and she had been eagerly awaiting this first Women's Day. And what proved this romantic rumor to be true was none other than the landlady of our accommodation. As we were about to leave in the morning, the landlady shyly approached us and gave my wife a single rose to congratulate her on Women's Day. Thanks to the感动 of that warm flower received in a foreign land, my wife smiles and reminisces about St. Petersburg every Women's Day.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌉 A Giant Drawbridge That Splits the Night</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          There is one specialty that can never be left out when talking about St. Petersburg. It is the giant drawbridge that unfolds over the Neva River late at night. Unfortunately, you can't see it in the middle of winter when the river is frozen solid, but from late April to November when the river thaws, a spectacular sight is created every night. Usually starting with the Palace Bridge in front of the Hermitage Museum around 1:10 am, the giant bridges split in half and soar into the sky so that ships can pass. The sight of the thousands of tons of bridges, illuminated by colorful night lights, opening majestically is overwhelming enough to make you lose your mind. However, if you miss the time to cross the bridge while drunk on romance, you will have to wait endlessly for a taxi to return to your accommodation on the other side of the river, and you may be ripped off for the taxi fare, so checking the viewing time and route is essential for survival.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🖼️ The Pinnacle of Art, the Hermitage Museum</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The scale of the city definitely reaches its peak at the Hermitage Museum. It is said that this place, which is considered one of the world's three major museums along with the British Museum and the Louvre in France, is not enough to see in a whole week if you are well-versed in art. My wife and I, who lack artistic sense, did a speed run at a walking pace, but even just walking past, we were completely overwhelmed by the endlessly unfolding magnificent rooms and the enormous scale of the masterpieces. There is an audio guide with the voice of announcer Lee Sung-ju, but even without listening to the explanation, the fact that we were walking inside this huge winter palace with our own two feet was an ecstatic artistic experience in itself.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛪ Cathedrals with a Different Charm from Moscow</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          If Moscow has St. Basil's Cathedral, St. Petersburg has the Church of the Savior on Spilled Blood (or the Church on Blood). We, who had always believed that St. Basil's Cathedral was the king of Russian architecture, were speechless when we saw the details of the Church on Blood. It was clear that the level of the Church on Blood was a step above. At the Russian Museum located next to the Church on Blood, there was the simple fun of finding familiar paintings that seemed to be from textbooks, and St. Isaac's Cathedral, which we visited without much expectation, boasted an overwhelming grandeur that belied its fame.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏰 The Peter and Paul Fortress, a Prison for Intellectuals</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The Peter and Paul Fortress, located on a small island on the Neva River, was once used as a prison. This prison, which was said to be impossible to escape from because it was surrounded by the river on all sides, has housed countless intellectuals whose names are well-known. According to the guide, it was a kind of VIP resort-style(?) prison where only elites with 'slightly' bad crimes came, and real serious criminals were sent to Siberia without mercy. However, looking at the narrow and cold prison cells, I got a chilling realization that prison life is by no means easy in any country, let alone a resort. In addition, we also made sure to see the Summer Garden, which is said to be the summer resort of the Russian emperors, St. Petersburg State University, Putin's alma mater, and the red lighthouse.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚇 The Chilling Skinheads of the Subway</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          When you use the subway in St. Petersburg, there are times when you get a chill down your spine, and that is when you come face to face with the skinheads you have only heard about. The skinheads are a far-right racist group who shave their heads very short or completely bald and wear military boots, and they are the object of fear itself for foreigners in Russia. The real reason they are scary is their unpredictable violence and blind hostility towards foreigners. To them, foreigners were not partners in conversation, but simply 'prey to be driven out of Russia,' so making eye contact with them meant being exposed to uncontrollable danger. In particular, around Hitler's birthday (April 20), their madness is said to reach its peak, and they commit unprovoked and indiscriminate lynchings.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✨ The Chilling Reality Hidden Behind the Glamour</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The scenery of the train station we returned to after a pleasant viewing was quite different. Unlike the quiet tourist attractions in winter, the warm station was crowded with beggars who had come to escape the cold. Russians firmly believe that they must do good deeds to go to heaven, so they are usually very generous with their alms, but perhaps because of that, this chilling reality, which is in stark contrast to the dazzling palaces of St. Petersburg, came to me as particularly bitter and heavy.
        </p>
        
        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚂 The Romance of a City That Bloomed Like a Wildflower</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          On the night train back to Moscow, I thought as I watched the receding lights. The reason why St. Petersburg seemed so dazzlingly splendid might be, paradoxically, because of the deep historical pain that lay beneath it. The brilliant golden dome built on the bloody history of enduring 900 days of starvation, the terrible vitality of the people who made the world's best art bloom on the cold swamp, the romance of this city was not a light and flimsy beauty like a greenhouse flower. It was the crystallization of a tenacious vitality like a wildflower that had stubbornly endured the fierce winter blizzard.
        </p>
      `}},{id:"russia-travel-5",title:{ko:"모스크바 동부 여행",en:"Traveling East of Moscow"},subtitle:{ko:"니즈니 노브고러드의 얼음 낚시와 카잔의 하얀 진주",en:"Ice Fishing in Nizhny Novgorod and the White Pearl of Kazan"},imageUrl:"https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          러시아의 광활한 대지를 횡단하는 여행자라면, 모스크바를 벗어나 진짜 대륙의 민낯을 마주하고 싶은 충동에 휩싸이기 마련이다. 러시아의 남성의 날 (2월 23일, 정식 명칭은 조국 수호자의 날) 연휴를 핑계 삼아, 사실은 그저 역마살이 도져서 훌쩍 떠난 이번 여행의 최종 목적지는 타타르스탄 공화국의 하얀 진주 카잔이었다. ❄️ 그리고 기차로 가는 길목에 자리한 거대한 상업 도시 니즈니 노브고러드에서 하루를 멈춰 가기로 했다. 
        </p>

        <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue my-6 text-sm">
          <p class="leading-relaxed text-slate-700 italic">
            본격적인 이야기에 앞서 두 도시를 짧게 소개하자면, <strong>니즈니 노브고러드</strong>는 거대한 볼가강과 오카강이 만나는 지점에 위치한 러시아의 대표적인 상업 및 공업 중심지로, 탁 트인 강변 풍경과 고풍스러운 크렘린이 유명하다. 반면 <strong>카잔</strong>은 이슬람 문화와 러시아 정교회가 절묘하게 공존하는 이국적인 도시로, 모스크바와는 전혀 다른 새하얀 정갈함을 자랑하는 타타르스탄 공화국의 심장이다. ✨
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏃‍♂️ 아내의 여권 실종 사건, 숨 가쁜 출발</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          2월 20일 저녁 짐을 챙겨 여유롭게 기차역으로 향하려던 참이었다. 그런데 아내가 여권을 집에 두고 왔다고 했다. 러시아에서는 어딜 가든 외국인이라면 반드시 여권과 거주자 등록증을 항시 가지고 다녀야 한다. 어딜가나 경찰들이 불시로 검문할 가능성이 있었고, 만약 해당 문서가 없다면 뇌물을 주거나 법원에 가서 관련 사항을 소명하고 벌금을 내야할 터였다. 😱
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          어쩌겠는가. 불쌍한 남편인 내가 숨이 턱이 닿도록 집으로 뛰어가 재빨리 아내의 여권을 챙겨 온 덕에 다행히 제 시간에 열차에 탑승 할 수 있었다. 모스크바에서 니즈니 노브고러드까지는 6시간 정도 걸린다. 우린 러시아의 찐한 분위기가 가득한 플라츠캇이라는 3등석 열차칸을 탔다. 🚂
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧱 니즈니 노브고러드: 꽝꽝 언 강과 벼룩시장</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아에서 기차역의 이름은 열차가 향하는 종착지의 이름을 따오는 경우가 많다. 우리가 니즈니 노브고러드에 도착한 기차역의 이름이 ‘모스콥스키’ 인 것만 봐도 알 수 있다. 아침을 대충 해결하고 날이 밝아오자 본격적으로 밖으로 나와 눈 쌓인 텅 빈 푸시킨 공원과 니즈니 노브고러드의 아르바트 거리를 걸었다. 거리를 걷다 마주친 중앙은행 건물을 슥 구경하고, 사람들이 웅성거리는 작은 벼룩시장으로 향했다. 🪙
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          세계 각국의 동전과 신기한 잡동사니들을 파는 시장 구경은 언제나 쏠쏠한 재미를 준다. 동전을 파는 아저씨의 콜렉션 중에 한국 동전도 발견해서 매우 반가웠다. 기념품을 하나둘 챙긴 뒤, 도시의 자랑인 니즈니 노브고러드 크렘린으로 발걸음을 옮겼다. 크렘린 성벽에서 내려다보는 꽝꽝 언 오카강의 전경은 그야말로 절경이었다. 근처에 있는 거대한 저택과 그 유명한 츠칼로프 계단도 둘러보았는데, 사실 웅장한 건축물이긴 했지만 흐린 날씨와 칙칙한 주변 환경이 어우러지니 기대했던 것만큼 로맨틱하진 않았다. 🌫️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎣 얼음 위 강태공들과 보드카 한 잔</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          어느 언덕 위로 올라가 도시 전경을 내려다보았지만, 잿빛 하늘과 굳은 표정의 사람들, 저 멀리 뿜어져 나오는 공장 연기 탓에 감동은 덜했다. 그때, 저 아래 얼어붙은 오카강 위로 조그맣고 까만 점들이 보였다. 호기심에 강가로 내려가 보니 그 점들의 정체는 두꺼운 얼음을 뚫고 낚시를 하는 러시아인들이 있었다. 🧊
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          조심스레 얼음판 위를 걸어, 낚시 중인 러시아인들 근처에 가보았다. 실제 뭔가가 잡히는지, 잡히면 얼마나 큰지, 그리고 얼음 낚시가 재미있는지 등 궁금했기 때문이었다. 낚시 중인 아저씨들 근처에는 하나같이 다 보드카 병이 보였다. 우리가 다가가자 선뜻 먼저 걸어준 아저씨 한 분이 계셨는데, 외국인인 우리가 꽤나 신기했나보다. 그날 잡은 물고기도 보여주시고 나에게 원하면 물고기 들고 사진도 같이 찍자고 먼저 권하였다. 그래서 내가 잡은 물고기도 아니지만 아저씨와 사이좋게 한 마리씩 들고는 인생에 길이 남을 추억도 하나 남길 수 있었다. 📸🐟
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🕌 카잔: 순백의 성벽과 에메랄드빛 모스크</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          니즈니 노브고러드의 여정을 마치고 다음날 새벽, 카잔으로 향했다. 카잔은 첫인상부터 우중충했던 평범한 러시아 도시들과 달리, 거리가 무척 깨끗하고 건물들은 새하얀 빛을 뽐내고 있었다. 가장 먼저 카잔 대학교를 구경했다. 러시아에서는 도로명을 유명인의 이름을 따온 경우가 많은데 우리가 모스크바에서 살던 집 주소 역시 천재 수학자 ‘로바쳅스키’의 이름을 딴 ‘로바쳅스카바’ 거리 였다. 카잔 대학에서 아주 반갑게도 우리 동네 도로명 주소의 주인공인 ‘로바쳅스키’의 동상을 발견했다. 당연히 쌩판 모르는 남이었지만 그래도 어딘지 모르게 반가웠다. 🎓
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          점심으로는 타타르식 식당에 들어갔는데, 조금은 투박하지만 고기 향이 진하게 베어 있는 아주 담백한 맛의 음식이라 마음에 들었다. 🍽️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바에는 모스크바 크렘린이 있다면 카잔에는 카잔 크렘린이 있다. 붉은 색을 좋아하는 러시아인들의 특성과 다르게, 카잔의 크렘린은 다른 붉고 화려한 크렘린들과 달리 도시의 이미지처럼 새하얗고 정갈한 자태를 뽐낸다. 마치 순백의 성벽이 긴 세월 동안 이방의 문화를 고스란히 품어 안은 듯한 평온함마저 느껴진다. 🕊️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          크렘린 중앙에 자리 잡은 에메랄드빛 ‘쿨 샤리프 모스크’는 그야말로 압도적인 아름다움을 자랑했다. 하얀 대리석 벽면과 대비되는 선명한 에메랄드빛 지붕은 햇살을 받을 때마다 보석처럼 반짝이며, 이곳이 러시아 정교회와 이슬람 문화가 수백 년간 어우러져 피워낸 결정체임을 증명하고 있었다. 💎
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌖 두 도시의 대비, 대륙의 진짜 매력</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바로 돌아가는 이튿날 새벽 비행기를 타러 가는 택시 안, 창밖으로 멀어지는 카잔의 새하얀 도로를 바라보며 이번 여정을 가만히 되짚어 보았다. 잿빛 공장 연기 아래 화려했던 러시아 정교회의 건물들과 보드카를 옆에 두고 낚시하는 니즈니 노브고러드의 얼음 위 강태공들. 그리고 순백의 성벽 안에서 이슬람과 정교회가 평화롭게 어우러져 에메랄드빛으로 빛나던 카잔의 우아함. 🌖
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          달라도 너무 다른 두 도시였지만, 이 극명한 대비야말로 끊임없이 나를 낯선 곳으로 이끄는 러시아 대륙의 진짜 매력이 아닐까. 연휴를 핑계 삼아 훌쩍 다녀온 짧은 일정이었지만, 러시아가 품은 이토록 다채롭고 아름다운 모습들에 다시 한번 놀라게 된 여행이었다. 🇷🇺
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          As a traveler traversing the vast lands of Russia, one is bound to be swept away by the urge to leave Moscow and face the raw, unadorned face of the real continent. Using the Russian Men's Day (February 23rd, officially Defender of the Fatherland Day) holiday as an excuse—though in truth it was just a severe case of wanderlust—I set off for my final destination: Kazan, the white pearl of the Republic of Tatarstan. ❄️ Along the way by train, I decided to stop for a day in the massive commercial city of Nizhny Novgorod.
        </p>

        <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-russia-blue my-6 text-sm">
          <p class="leading-relaxed text-slate-700 italic">
            To briefly introduce the two cities before starting the story: <strong>Nizhny Novgorod</strong> is a representative commercial and industrial hub of Russia, located at the confluence of the mighty Volga and Oka rivers, famous for its open riverfront views and ancient Kremlin. <strong>Kazan</strong>, on the other hand, is an exotic city where Islamic culture and Russian Orthodoxy exquisitely coexist, the heart of Tatarstan boasting a pure white elegance entirely different from Moscow. ✨
          </p>
        </div>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏃‍♂️ The Missing Passport Incident, A Breathless Start</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          On the evening of February 20th, just as I was about to head leisurely to the train station after packing, my wife realized she had left her passport at home. In Russia, foreigners must always carry their passport and residence registration wherever they go. There was always the possibility of spot checks by the police, and without those documents, one would have to pay a bribe or explain the situation in court and pay a fine. 😱
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          What else could I do? As the pitiful husband, I ran home until I was out of breath, quickly grabbed her passport, and luckily managed to board the train just in time. The journey from Moscow to Nizhny Novgorod takes about 6 hours. We took a third-class 'Platskart' carriage, which is filled with the thick, authentic atmosphere of Russia. 🚂
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧱 Nizhny Novgorod: Frozen Rivers and Flea Markets</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In Russia, train stations are often named after their final destination. You can tell by the fact that the station where we arrived in Nizhny Novgorod was named 'Moskovsky.' After a quick breakfast as dawn broke, we headed out in earnest to walk through the snow-covered, empty Pushkin Park and Nizhny Novgorod's Arbat Street. We glanced at the Central Bank building we encountered on the way and headed to a small, bustling flea market. 🪙
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Exploring markets selling coins from around the world and curious trinkets is always a lot of fun. I was very pleased to find a Korean coin among one vendor's collection. After picking up a few souvenirs, we moved toward the pride of the city, the Nizhny Novgorod Kremlin. The view of the solidly frozen Oka River from the Kremlin walls was truly breathtaking. We also looked around the massive mansion nearby and the famous Chkalov Stairs; while they were grand structures, the overcast weather and somewhat drab surroundings made them feel less romantic than expected. 🌫️
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🎣 Anglers on Ice and a Shot of Vodka</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I climbed a hill to look down at the city panorama, but the impression was diminished by the gray sky, people with stiff expressions, and factory smoke billowing in the distance. Just then, I saw small black dots on the frozen Oka River below. Driven by curiosity, I went down to the riverbank and found that the dots were Russians fishing through holes drilled in the thick ice. 🧊
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          I walked carefully onto the ice to approach the fishermen. I was curious if they were actually catching anything, how big the fish were, and if ice fishing was fun. Without fail, a bottle of vodka was visible near every one of them. One man reached out to us first, seemingly fascinated by us as foreigners. He showed us the fish he caught that day and invited me to take a photo holding one if I wanted. So, even though it wasn't a fish I caught, I stood side-by-side with him holding a fish, leaving behind a memory that will last a lifetime. 📸🐟
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🕌 Kazan: Pure White Walls and the Emerald Mosque</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          After finishing our journey in Nizhny Novgorod, we headed to Kazan at dawn the next day. Unlike ordinary Russian cities that felt gloomy from the first impression, Kazan's streets were very clean and its buildings shone with a pure white light. We first explored Kazan University. In Russia, streets are often named after famous people, and our address in Moscow was 'Lobachevskaya' street, named after the genius mathematician Lobachevsky. At Kazan University, I was delighted to find a statue of Lobachevsky, the namesake of our home street. He was a complete stranger, of course, but it felt oddly welcoming. 🎓
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          For lunch, we went to a Tatar restaurant; I liked the food, which was a bit rustic but had a deep aroma of meat and a very clean, savory taste. 🍽️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Just as Moscow has the Moscow Kremlin, Kazan has the Kazan Kremlin. Unlike the typical Russian preference for red, Kazan's Kremlin is pure white and elegant, matching the city's image. There's even a sense of tranquility, as if the white walls have peacefully embraced foreign cultures over long centuries. 🕊️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The emerald-colored 'Kul Sharif Mosque' situated in the center of the Kremlin boasted overwhelming beauty. The vibrant emerald roof, contrasting with the white marble walls, sparkled like a jewel whenever the sunlight hit it, proving that this place is the culmination of centuries of harmony between Russian Orthodoxy and Islamic culture. 💎
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌖 Contrast of Two Cities, The Continent's Real Charm</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          In the taxi heading to the airport for a pre-dawn flight back to Moscow, I quietly reflected on this journey while looking at Kazan's white roads receding through the window. The ornate Russian Orthodox buildings under gray factory smoke and the ice anglers of Nizhny Novgorod with vodka by their side. And the elegance of Kazan, where Islam and Orthodoxy blended peacefully within pure white walls, shining in emerald. 🌖
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Though the two cities were so incredibly different, perhaps this stark contrast is the real charm of the Russian continent that constantly draws me to unfamiliar places. Although it was a short trip taken on the excuse of a holiday, it was a journey that made me marvel once again at the diverse and beautiful forms that Russia holds. 🇷🇺
        </p>
      `}},{id:"russia-travel-6",title:{ko:"모스크바 남부 여행",en:"Traveling South of Moscow"},subtitle:{ko:"러시아의 거친 도로 위에서 겪은 뇌물과 낭만 사이",en:"Between Bribes and Romance on the Rough Roads of Russia"},imageUrl:"https://images.unsplash.com/photo-1547448415-e9f5b28e570d?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          나는 여행 계획을 짤 때, 최대한 꽉꽉 일정을 눌러 담는 편이다. 예비학부 시절부터 친하게 지내오던 P군과 S양은 이런 우리(정확히 말하면 나)의 빡센 여행 방식을 궁금해 했다. 마침 연휴가 있어, 모스크바 남부 여행을 계획한다는 말에, 겁도 없이 이들은 우리와 합류하기로 하였다. 🚗 기차로 여행하는 낭만도 있지만 이번에는 차를 빌려 조금 더 구석구석 다녀보기로 했다. 사실 예전부터 러시아의 거친 도로를 직접 차를 몰고 달려보고 싶다는 로망도 있었다. 물론 한편으로는 이 대륙에서의 운전이 순탄한 낭만 여행이 되리라곤 기대하지 않았지만 말이다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚉 툴라(Tula) 도착과 대륙의 드라이버 데뷔</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          아침 일찍 집을 나서 지하철 역에서 P군, S양과 합류하여 일렉트리치카라는 교외철에 몸을 실었다. 꼭두새벽부터 일어나서 움직인 탓에 다들 기차 안에서 기절할 줄 알았건만, 웬걸. 잠은커녕 눈을 번뜩이며 카드 게임을 하고 이야기를 나누다 보니 어느새 첫 목적지인, 톨스토이의 영지로 유명한, 툴라라는 도시에 도착했다. 🚂
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          역에 내리자마자 가장 먼저 예약해 둔 렌터카를 찾으러 갔다. 오랜만의 운전인 데다 러시아 특유의 거친 도로 상태, 그리고 어디서 튀어나올지 모르는 불곰식 운전자들 때문에 처음엔 손에 땀이 흥건할 정도로 무서웠지만, 차차 적응이 되며 대륙의 드라이버로 거듭나고 있었다. 확실히 차가 있으니 여러모로 구경하기가 매우 편리했다. 이전에도 단체 투어로 툴라에 잠시 방문한 적이 있었는데, 이번에는 툴라 크렘린을 포함하여 그 때 둘러보지 못한 명소들을 샅샅히 볼 수 있었다. 🏰
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👮‍♂️ 실선 추월과 ‘뇌물 학생 할인’</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          다음으로 우리의 렌터카가 향한 곳은 제2차 세계대전 당시 격전지로 유명한 아룔이라는 도시였다. 열심히 엑셀을 밝으며 운전 중이었는데 도로에 차도 별로 없고 앞차가 너무 느리게 가기에 과감히 추월을 시도했다. 그런데 하필이면 추월 차선이 아닌 실선 구간에서 추월을 하는 바람에, 언덕 너머 잠복해 있던 경찰에게 딱 걸리고 말았다. 🛑
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          경찰은 차를 세운 나를 내리라고 하더니 경찰차로 끌고가 조수석에 앉히고는 대뜸 성의를 표현할 생각이 없는지 물었다. 그렇다. 정확히 <span class="text-red-600 font-bold">뇌물을 요구하는 것이었다.</span> 성의(?)의 양이 얼마나 되면 좋겠냐고 묻자 그는 5천 루블(당시 약 10만 원)이라고 했다. 💸
        </p>
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 text-sm">
          내가 주변 사람들에게 들은 이야기에 따르면 <strong>‘뇌물도 학생 할인이 된다’</strong>고 했다. 그래서 나는 믿져야 본전이라는 생각으로 경찰에게 “방학 때 잠깐 차를 빌려 나왔는데, 가난한 유학생이라 정말 돈이 없습니다”라며 세상 불쌍한 표정으로 학생증을 내밀었다. 놀랍게도 경찰은 내 처지를 갸륵하게 여긴 건지 요구액을 반으로 깎아주었다. 💳 
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          그러면서 차량 대시보드 위에 금액을 놓고가라고 했다. 나는 실수로 돈을 차에 놓고 내린거고, 경찰은 내가 떠난 뒤 우연히 주인 모르는 그 돈을 발견했다는 스토리텔링을 만드는 거였다. 그렇게 나는 조금씩, 그러나 아주 확실하게 러시아의 생태계에 적응해 가고 있었다. 😒
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🦅 아룔(Oryol)의 독수리와 요상한 ‘벨라지오’</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          경찰에게 뜯긴 속 쓰림을 안고 어둠이 깔린 아룔 시내에 진입했다. 아룔에서 웅장한 우스펜스키 사원과 아룔시의 상징인 거대한 독수리 상(Oryol은 러시아어로 독수리를 뜻한다) 등을 구경했다. 하지만 아룔에서 가장 기억에 남는 장소를 꼽으라면 유명 관광지가 아닌 단연 ‘벨라지오’라는 아주 요상한 음식점이다. 🦅
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          이탈리아 음식 전문전이라고 내건 식당 내부는 캬바레처럼 생겼는데 내부에는 손님이 아무도 없었다. 그리고 식당 주인은 주문을 받으며 춤과 노래를 선보여도(?) 되는지 물어봤다. 조용히 식사를 하고 싶었던 우리가 극구 사양한 덕에 더욱 요상한 것을 볼 뻔한 위기를 넘길 수 있었다. 💃 캬바레 같은 분위기의 아무도 없는 식당에서 여사장의 춤과 노래라니… 게다가 음식도 별로라 최대한 빨리 그곳을 벗어나고 싶었다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🛡️ 쿠르스크의 탱크와 동화 마을 옐레츠</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          아룔을 떠나 남쪽으로 더 달려 쿠르스크에 도착했다. 쿠르스크는 2차 세계대전 당시 인류 역사상 가장 거대했던 전차전이 벌어졌던 역사적인 도시다. 도시에 들어서는 길목부터 당시의 치열함을 증명하듯 길가에 실제 탱크들이 줄지어 전시되어 있어 매우 흥미로웠다. 🚜
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          이제 다시 모스크바가 있는 북쪽으로 방향을 돌려 올라가는 길에 옐레츠라는 작은 도시에 식사도 할 겸 잠시 들르기로 했다. 그런데 웬걸, 기대 없이 들어선 이 작은 도시는 마치 유럽의 작은 동화 마을을 그대로 옮겨놓은 듯, 아기자기한 건물들과 깨끗한 거리, 고풍스러운 교회들이 어우러져 탄성을 자아냈다. 🏘️ 이렇게 자유 여행 중에 예기치 않는 보물을 찾았을 때의 희열이란 말로 표현하기 힘들다. ✨
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏠 톨스토이의 숨결과 설원 속 샤슬릭</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          대문호 레프 톨스토이의 고향인 야스나야 폴랴나에서 톨스토이 생가를 마지막으로 여행은 어느 정도 마무리가 되었다. 여행의 마지막 밤, 무사히 한 대도 맞지 않고(?) 여행을 완수한 기념으로 숙소에서 바베큐 파티를 했다. 🍖 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          영하 10도의 간간히 칼바람이 불어오는 추위 속에서 타닥타닥 타오르는 장작불에 구워 먹는 기름진 샤슬릭(꼬치고기)의 맛은 모든 고생을 잊게 할 만큼 환상적이었다. 그간의 험난했던 여행의 에피소드들을 안주 삼아 복기하며 밤이 저물어 갔다. 🔥
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💸 과속 벌금 고지서의 ‘혜자’스러운 반전</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          다시 툴라로 돌아와 렌터카를 반납하고 우리를 모스크바로 데려다줄 일렉트리치카에 몸을 실었다. 모스크바에 다시 돌아온 나는 그 며칠 사이 모스크바의 살인적인 교통 체증과 탁한 공기마저 반갑게 느껴지는 걸 보니, 어지간히 이 도시에 정이 들었나 보다는 생각이 들어 실소가 났다. 🏙️
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          그리고 모스크바에 돌아온지 며칠 후에 집으로 과속 벌금 고지서 뭉치가 날아왔다. 무려 4번이나 과속 카메라에 찍힌 것이었다! 대륙의 도로에 심취한 나머지 단속 카메라의 존재를 잊은 대가였다. 📸 내심 벌금 폭탄을 맞을까 두려웠지만, 4건을 합친 벌금은 약 5~6만원 정도로 다행히 굉장히 저렴했다. 게다가 벌금 고지서를 받은 날로부터 20일 이내에 납부하면 벌금을 50% 감면해 주는 혜자스러운 룰도 있었다. 러시아는 참 여러모로, 파면 팔수록 좋은 쪽으로든 나쁜 쪽으로든 놀라움인 나라다. 🇷🇺
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          돌이켜보면 빡빡한 일정과 예측 불가능한 돌발 상황의 연속이었지만, 불평 한마디 없이 이 여정을 온전히 즐겨준 우리 일행들에게 이 자리를 빌려 깊은 고마움을 전하고 싶다. 낯선 빙판길을 함께 달리며 울고 웃었던 이 기억들은, 여전히 내 가슴 속에 추억이라는 이름으로 진하게 남아있다. 💖
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          When I plan a trip, I tend to pack the schedule as tightly as possible. P and S, who had been close friends since our preparatory program days, had always been curious about the way we traveled, or more precisely, the way I traveled. Since there happened to be a holiday, they boldly decided to join us when I said I was planning a trip to the south of Moscow. While there is certainly a romance to traveling by train, this time we decided to rent a car so that we could explore more corners along the way. To be honest, I had long dreamed of driving across Russia's rough roads myself. Of course, I never expected driving on this continent to turn into a simple and peaceful romantic getaway.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Tula and a Driver's Debut</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          We left home early in the morning, met up with P and S at the subway station, and boarded an elektrichka, the suburban train. Since we had all been up since before dawn, I assumed everyone would instantly fall asleep in their seats, but that was not the case at all. Instead, we stayed wide awake, playing card games and talking, and before long we had reached our first destination, Tula, the city famous for Tolstoy's estate.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          As soon as we got off at the station, we went to pick up the rental car we had booked in advance. It had been a long time since I had last driven, and between Russia's notoriously rough road conditions and the wildly unpredictable drivers who could appear out of nowhere, I was honestly nervous enough for my palms to sweat at first. But little by little I adjusted, and I could feel myself becoming a true driver of the continent. Having a car made sightseeing enormously convenient. I had visited Tula once before on a group tour, but this time I was finally able to take a proper look around the places I had missed back then, including the Tula Kremlin.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">A Solid Line and a Student Discount</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Our next destination was Oryol, a city known as a battlefield from the Second World War. I was driving along enthusiastically with my foot on the gas when I noticed that there were not many cars on the road and the one in front of me was moving painfully slowly, so I boldly decided to overtake. The problem was that I did it on a solid line rather than a broken one, and naturally I was caught at once by a police officer who had been hiding beyond the hill.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The officer told me to step out of the car, led me to the police vehicle, sat me down in the passenger seat, and then bluntly asked whether I had any intention of showing "sincerity." In other words, he was openly asking for a bribe. When I asked how much "sincerity" he had in mind, he answered that he wanted 5,000 rubles, which at the time came to about 100 dollars.
        </p>
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 text-sm">
          According to what I had heard from people around me, even bribes came with a student discount. So I decided that I had nothing to lose and pulled out my student ID with the saddest expression I could manage, telling him, "I only rented this car for the holiday, and I am just a poor international student. I really do not have any money." To my surprise, the officer seemed to take pity on my situation and cut the amount in half.
        </div>
        <p class="leading-relaxed mb-6 text-slate-700">
          He then told me to leave the money on the dashboard of the car. The unspoken story was that I had accidentally left the cash there when getting out, and after I had gone, the officer had just happened to discover that ownerless money. In that way, I realized that I was adapting, little by little but very surely, to the ecosystem of Russia.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Eagle of Oryol and Bellagio</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Carrying the bitter aftertaste of being shaken down by the police, we entered Oryol after dark. There we visited the grand Uspensky Cathedral and the giant eagle statue that symbolizes the city, since Oryol literally means eagle in Russian. But if I had to choose the place in Oryol that remained most vividly in my memory, it would not be one of the famous sights at all, but rather a very strange restaurant called Bellagio.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The place advertised itself as a restaurant specializing in Italian cuisine, yet the interior looked more like a cabaret, and there was not a single other customer inside. The owner even asked whether it would be alright if she sang and danced while taking our order. Fortunately, because we firmly declined and said we just wanted to eat quietly, we narrowly escaped witnessing something even stranger. A female owner singing and dancing in an empty restaurant with a cabaret atmosphere would have been memorable enough, but the food itself was not good either, so all I wanted was to get out of there as quickly as possible.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Kursk and Fairytale Yelets</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Leaving Oryol behind, we drove farther south and arrived in Kursk. Kursk is a historic city where the largest tank battle in human history took place during the Second World War. Even from the roads entering the city, real tanks were lined up on display as if to testify to the ferocity of that battle, and I found it fascinating.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          After that, we turned back north toward Moscow and decided to make a brief stop in a small town called Yelets to have a meal. But unexpectedly, this tiny town turned out to be one of the most delightful surprises of the trip. It looked as though a small European fairytale village had been lifted whole and placed there, with charming buildings, spotless streets, and elegant old churches all coming together to draw a gasp from us. The thrill of stumbling upon an unexpected treasure like that in the middle of an independent trip is difficult to put into words.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">Tolstoy and Shashlik in the Snow</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The journey came more or less to a close with a visit to Yasnaya Polyana, the hometown of the great writer Leo Tolstoy, where we saw his home. On the last night of the trip, we held a barbecue party at our lodging to celebrate the fact that we had completed the journey without anyone getting seriously "hit" by anything.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          In the freezing weather of minus ten degrees Celsius, with a bitter wind blowing through from time to time, the rich taste of shashlik grilling over a crackling wood fire was so wonderful that it made all the hardships of the trip fade away. We spent the evening recalling one absurd episode after another from our rugged little journey.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">The Twist of Speeding Tickets</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          We returned to Tula, handed back the rental car, and boarded the elektrichka that would take us to Moscow. Once I was back in Moscow, I caught myself almost laughing at how even the city's murderous traffic jams and stale air somehow felt welcome again. That was when I realized, rather sadly, that I must really have grown attached to the place.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          A few days after we got back, a whole bundle of speeding tickets arrived at my home. I had been caught by speed cameras no fewer than four times. It was the price I paid for becoming too intoxicated by the roads of the continent and forgetting that speed cameras existed at all. I was afraid I had been hit with a disastrous fine, but fortunately the total for all four tickets came to only about 50 to 60 dollars, which was surprisingly cheap. On top of that, there was even a generous rule by which the fine would be reduced by 50 percent if it was paid within twenty days of receiving the notice. In so many ways, Russia is a country that keeps surprising you, both for better and for worse, the more deeply you get to know it.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Looking back, the trip was a nonstop sequence of tightly packed plans and unpredictable incidents. Even so, I want to use this chance to express my deep gratitude to the friends who enjoyed the whole journey without a single complaint. Those memories of laughing and groaning together as we raced along unfamiliar icy roads still remain deeply etched in my heart under the name of memory.
        </p>
      `}}]},ry={id:"eurasia_travel",title:{ko:"유라시아 여행",en:"Eurasia Travel"},description:{ko:"러시아 너머, 경계에서 만난 풍경들",en:"Landscapes Found Beyond Russia, Along the Borders"},isSinglePost:!1,isActive:!0,posts:[{id:"eurasia-travel-1",title:{ko:"벨라루스, 칼리닌그라드",en:"Belarus and Kaliningrad"},subtitle:{ko:"러시아인 듯 아닌 듯",en:"Not Quite Russia, Yet Somehow Russia"},imageUrl:"https://metro.co.uk/wp-content/uploads/2022/06/SEI_110669880.jpg?quality=90&strip=all&w=646?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          모스크바에서 유학하며 제일 좋은 점 중 하나를 꼽으라면 단연코 긴 방학이 있다는 점이다. 서구권이나 한국의 대학원 과정은 보통 1년이 32주 과정으로 돌아가는 경우가 많지만, 러시아는 무려 38주 과정이라 방학이 짧게 느껴질 수도 있다. 하지만 연구실 지박령이 되어야 하는 여타 국가들과 달리 석사과정까지는 철저히 수업 위주로 굴러가는 시스템 덕분에, 일단 방학이 시작되면 온전히 학교 밖에서 시간을 보낼 수 있었다. 물론 방학 때 평소에 못했던 연구를 집중해서 하는 친구들도 있었지만, 나는 ‘진짜 공부란 꼭 학교 우물 안에서만 하는 것이 아니다’라는 확고한 주의였다. 뭐 놀기 위한 좋은 핑계로 이만한 게 없다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          이 황금 같은 자유를 틈타 우리는 국경을 넘나드는 여행을 자주 기획했는데, 이번 이야기에서는 지리적으로도 역사적으로도 참 얄궂은 두 곳의 이야기를 풀어보려 한다. 하나는 러시아 바로 옆에 딱 붙어 있지만 엄연한 남의 나라인 벨라루스, 그리고 다른 하나는 러시아 본토와 뚝 떨어져 유럽 한복판에 덩그러니 남겨진 칼리닌그라드다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤍 이름부터 러시아 같은 나라, 벨라루스</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          벨라루스(Belarus)는 이름부터가 하얀(Bel) 러시아(Rus)라는 뜻이다. 소련 붕괴 후 독립한 엄연한 주권 국가지만, 정치나 경제, 문화적으로 러시아와 떼려야 뗄 수 없는 끈끈한 관계를 유지하고 있다. 실제로 언어 역시 러시아어가 널리 쓰여서, 이미 영어보다 러시아어가 더 편했던 나에게는 의사소통에 전혀 무리가 없었다. 화폐도 벨라루스 루블을 쓴다. 이름표만 루블로 같을 뿐, 러시아 루블과는 가치가 완전히 다른 독자적인 돈이다. 당시 구권 화폐 기준으로 벨라루스 루블은 러시아 루블보다 가치가 아득하게 낮아 지폐에 동그라미가 쉴 새 없이 붙어 있었기에, 벨라루스에 방문한다면 계산할 때마다 각별히 주의를 해야 했다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚆 민스크행 기차와 치명적인 착각</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          모스크바에서 벨라루스의 수도 민스크로 가는 방법은 비행기, 버스 등 다양하지만, 우리는 언제나 그렇듯 가장 선호하는 교통수단인 기차에 몸을 실었다. 그리고 우리는 여기서 치명적인 실수를 저지르고 말았다. 두 나라가 국가 연합 성격을 띠고 있어 국경 통제가 헐겁다는 카더라 통신만 맹신한 채, 외국인인 우리에게 별도의 비자가 필요한지 제대로 알아보지도 않고 무작정 떠난 것이다. 심지어 기차를 타고 국경을 넘어갈 때 여권 검사조차 쿨하게 생략되었기에, 우리는 역시나 별 문제가 없는지 착각했다. 민스크에 도착한 우리는 어둑한 겨울밤의 정취를 만끽하며 웅장하고 깨끗한 시내를 구경했다. ‘하얀 러시아’라는 이름에 걸맞게 눈 내린 풍경과 잘 어울리는 도시였다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚨 돌아오는 길, 불법 입국자가 되다</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          진짜 문제는 민스크에서 여행을 마치고 다시 기차를 타고 러시아로 돌아가려 할 때 터졌다. 기차가 국경을 통과할 즈음, 제복을 입은 국경수비대가 열차에 올라타 깐깐하게 여권 검사를 시작했다. 우리의 여권을 이리저리 살피던 군인의 표정이 굳어지더니 고개를 저었다. 우리가 가진 러시아 비자로는 벨라루스에 입국하면 안 되는 것이었다. 올 때 검사가 없었던 건 그저 운이 좋았던(혹은 시스템이 허술했던) 것뿐이었다. 결국 우리는 졸지에 불법 입국자 신세가 되어 국경 한복판에서 강제로 기차에서 끌려 내려왔다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🪖 국경 초소에서 쓰는 반성문</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          우리는 우리처럼 허술하게 국경을 넘다 적발된 사람들을 임시로 구류해 놓는 초소로 인계되었다. 다음 기차가 올 때까지는 꽤 오랜 시간이 남았는데, 그 긴 시간 동안 우리는 테이블과 의자 4개가 있는 좁은 방에 앉아 러시아어로 경위서(사실상 반성문)를 작성하고 몇몇 서류에 서명을 했다. 유학 생활 중 별의별 일을 다 겪었지만, 국경 수비대에게 잡혀 반성문을 쓸 줄이야. 서류 작업을 마치고도 다음 기차가 올 때까지 시간이 많이 남아 핸드폰을 보며 시간을 때우고 있었는데, 시간이 지나자 긴장이 풀리며 슬슬 배가 출출해졌다. 조심스레 배가 고프다고 말했더니, 여군 한 명이 우리 부부를 호송하듯 데리고 나가 초소 내 군부대 PX 같은 작은 마트로 안내해 주었다. 우리 뒤에 바짝 붙은 군인의 따가운 감시를 받으며 주섬주섬 빵과 물을 사 먹는 그 기묘한 경험은, 무섭다기보단 헛웃음이 나올 만큼 어이가 없어서 지금도 생생하게 떠오른다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🗺️ 유럽 한복판의 기묘한 러시아, 칼리닌그라드</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          벨라루스가 러시아인 줄 알았는데 아니어서 피를 본 곳이라면, 러시아의 섬이라고 불리는 칼리닌그라드는 러시아가 아닌 줄 알았는데 완전 찐 러시아였던 곳이다. 지도를 펴놓고 보면 칼리닌그라드는 러시아 본토와 육로로 전혀 연결되어 있지 않고, 폴란드와 리투아니아 사이에 덩그러니 끼어 있는 기형적인 월경지다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏰 쾨니히스베르크에서 칼리닌그라드까지</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          왜 이런 황당한 영토가 생겼을까? 원래 이곳은 독일 기사단이 세운 도시 쾨니히스베르크로, 오랜 시간 튜튼 기사단과 프로이센의 중심지였다. 그러나 제2차 세계대전에서 독일이 패망한 후 소련이 전리품으로 이곳을 꿀꺽 삼켜버렸고, 이름도 칼리닌그라드로 바꾸었다. 문제는 1991년 소련이 붕괴하면서 주변의 발트 3국과 벨라루스 등이 줄줄이 독립해 버렸다는 것이다. 졸지에 칼리닌그라드만 주변이 모두 외국으로 둘러싸인 채 유럽 한복판에 외딴섬처럼 고립되어 버린 것이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧠 칸트의 도시, 그러나 철학은 어려웠다</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          독일의 옛 영토였던 만큼, 이곳에서 가장 유명한 인물은 쾨니히스베르크를 평생 한 번도 벗어나지 않았다는 위대한 철학자 이마누엘 칸트다. 우리도 관광객들의 필수 코스인 칸트의 묘비와 칸트 섬을 방문했다. 가이드북에서는 칸트가 매일 같은 시간에 산책하며 사색에 잠겼던 길이라며 분위기를 잡았지만, 안타깝게도 철학에 무지몽매했던 우리 부부에게 그 길은 별 감흥을 주지 못했다. 인류의 위대한 문화유산인 '순수이성비판'이라는 책을 쓴 칸트에게는 그저 한없이 미안할 따름이었다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📱 화폐도 유심도 그대로, 뼛속까지 러시아</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          철학적 영감은 얻지 못했지만, 칼리닌그라드 여행이 편하고 즐거웠던 이유는 이곳이 100% 러시아 본토와 똑같이 굴러간다는 점이었다. 어찌 보면 당연한 일이었다. 비행기를 타고 바다를 건너가도 제주도가 한국이듯, 이곳도 엄연한 러시아 영토니까! 벨라루스 여행 때처럼 환전을 고민할 필요 없이 모스크바 지갑에 있던 러시아 루블을 그대로 꺼내 썼고, 핸드폰 역시 유심을 새로 살 필요 없이 러시아 통신사가 빵빵하게 터졌다. 붉은 벽돌의 독일풍 건축물들이 묘하게 섞여 있긴 했지만, 거리를 걷는 무뚝뚝한 사람들도, 투박한 식당의 음식 맛도, 심지어 살을 에는 매서운 추위마저도 우리에겐 너무나 친숙한 모스크바의 그것이었다. 아무리 동떨어져 있어도, 러시아는 뼛속까지 러시아였다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧩 러시아의 경계에서 만난 두 얼굴</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          유라시아라는 거대한 퍼즐 조각 위에서 만난 벨라루스와 칼리닌그라드는 참으로 얄궂은 대조를 이루었다. 언어와 화폐의 이름까지 같아서 이웃 동네 마실 가듯 만만하게 넘나들다, 결국 국경 수비대에게 덜미를 잡혀 반성문까지 쓰게 만든 서늘한 외국 벨라루스. 그리고 낯선 유럽 연합 국가들에 빙 둘러싸여 있어 비행기로 가야 하지만, 일말의 여지 없는 100퍼센트 러시아 칼리닌그라드. 얄팍한 지식만 믿고 덤비기엔 아직 나는 많이 부족했고, 그렇지만 한 발 한 발 착실하게 배워나가고 있었다.
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          If I had to name one of the best things about studying abroad in Moscow, it would undoubtedly be the long vacations. In graduate programs in the West or in Korea, the academic year often runs on a 32-week schedule, but Russia runs on a full 38-week schedule, so in theory the vacations might seem shorter. But unlike in other countries, where one is expected to become a permanent fixture in the lab, even the master's program in Russia was thoroughly class-centered. So once vacation began, I could spend my time entirely outside the university. Of course, some friends used their vacations to focus on research they had not been able to do during the semester, but I firmly believed that “real learning does not happen only inside the well of the school.” Well, there was hardly a better excuse to go out and enjoy myself. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Taking advantage of this golden freedom, we often planned trips across national borders. In this story, I want to talk about two places that were both geographically and historically rather mischievous in their own way. One was Belarus, a country pressed right up against Russia yet unquestionably a foreign nation; the other was Kaliningrad, severed from mainland Russia and left dangling in the middle of Europe.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤍 Belarus, a Country That Sounds Russian from the Name Alone</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Belarus literally means White (Bel) Russia (Rus). Although it is a fully sovereign state that became independent after the collapse of the Soviet Union, it has maintained ties with Russia that are inseparable in politics, economics, and culture. In practice, Russian was widely spoken there as well, so for me, who had already become more comfortable with Russian than with English, communication posed no difficulty at all. They also use the Belarusian ruble. The name may be the same as the Russian ruble, but it is an entirely separate currency with a completely different value. At the time, under the old banknote system, the Belarusian ruble was worth so much less than the Russian ruble that zeros seemed to pile endlessly onto the bills, so anyone visiting Belarus had to be especially careful every time they paid for something. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚆 The Train to Minsk and a Fatal Assumption</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          There are many ways to travel from Moscow to Minsk, the capital of Belarus, including plane and bus, but as always, we chose our favorite means of transportation: the train. And there, we made a fatal mistake. We blindly trusted the hearsay that border control between the two countries was loose because of their union-like political relationship, and we set off without properly checking whether we, as foreigners, needed a separate visa. To make matters worse, even when the train crossed the border, passport inspection was casually skipped, so we convinced ourselves that there really was no problem. When we arrived in Minsk, we enjoyed the atmosphere of the dark winter night and wandered through the grand and clean city center. It was a city that suited its snowy scenery well, fitting the name “White Russia.”
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚨 On the Way Back, We Became Illegal Entrants</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The real problem erupted when we finished our trip in Minsk and boarded the train back to Russia. As the train approached the border, uniformed border guards came aboard and began a strict passport inspection. One soldier examined our passports from every angle, then his expression hardened and he shook his head. The Russian visa we held did not permit us to enter Belarus. The reason we had faced no inspection on the way in was simply that we had been lucky, or that the system had been sloppy. In the end, we suddenly found ourselves treated as illegal entrants and were forcibly dragged off the train in the middle of the border zone.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🪖 Writing a Statement of Reflection at a Border Post</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          We were taken to a small outpost where people like us, who had crossed the border carelessly and been caught, were temporarily held. There was still quite a long wait until the next train arrived, and during that time we sat in a cramped room with one table and four chairs, writing an explanation in Russian, essentially a statement of reflection, and signing several documents. I had gone through all kinds of strange things during my years abroad, but I never imagined I would one day be caught by border guards and made to write a written apology. Even after the paperwork was done, we still had plenty of time to kill before the next train, so we sat there looking at our phones. As time passed and our tension wore off, we gradually grew hungry. When I cautiously said that we were hungry, a female soldier escorted my wife and me outside and led us to a tiny store inside the military compound, something like a PX. The bizarre experience of buying bread and water under the close and watchful supervision of a soldier sticking right behind us was not frightening so much as absurd enough to make us laugh helplessly. Even now, I remember it vividly.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🗺️ Kaliningrad, a Strange Piece of Russia in the Middle of Europe</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          If Belarus was a place that looked Russian but was not, and made us pay dearly for that misunderstanding, then Kaliningrad, often called Russia’s island, was the opposite: a place we might have expected not to feel Russian, yet turned out to be intensely, unmistakably Russian. Looking at a map, Kaliningrad is not connected to mainland Russia by land at all, but sits awkwardly wedged between Poland and Lithuania as a bizarre exclave. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏰 From Konigsberg to Kaliningrad</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          How did such an absurd territory come into being? Originally, this place was Konigsberg, a city founded by the Teutonic Knights, and for a long time it was a major center of both the Teutonic Order and Prussia. But after Germany was defeated in World War II, the Soviet Union swallowed the place as war booty and changed its name to Kaliningrad. The real problem came in 1991, when the Soviet Union collapsed and the surrounding Baltic states and Belarus all became independent one after another. Kaliningrad alone was suddenly left isolated in the middle of Europe, surrounded on all sides by foreign countries like a stranded island.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧠 Kant’s City, Though Philosophy Was Beyond Us</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Since it had once been German territory, the most famous figure associated with the place was the great philosopher Immanuel Kant, who is said never to have left Konigsberg even once in his life. We too visited Kant’s tomb and Kant Island, both essential stops for tourists. The guidebooks tried to set the mood by describing it as the path where Kant took his daily walks and immersed himself in thought, but sadly, for my wife and me, who were utterly ignorant of philosophy, the walk stirred no particular emotion. We could only feel endlessly sorry toward Kant, the man who wrote Critique of Pure Reason, one of humanity’s great cultural inheritances. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📱 Same Currency, Same SIM Card, Russian to the Bone</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Although we gained no philosophical inspiration, Kaliningrad was comfortable and enjoyable for one simple reason: it operated exactly like mainland Russia, one hundred percent. In one sense, that was only natural. Just as Jeju Island is still Korea even if one flies over the sea to reach it, this too was undeniably Russian territory. Unlike our trip to Belarus, there was no need to worry about exchanging money; we simply pulled Russian rubles out of the same wallet we used in Moscow. Our phones worked the same way too, with no need to buy a new SIM card, because our Russian carrier had perfectly good service there. There were curious traces of German-style red-brick architecture mixed in here and there, but the blunt people on the streets, the rough taste of the food in the restaurants, and even the bitter cold that cut into the flesh all felt intimately familiar to us, just like Moscow. No matter how far detached it was, Russia was Russia to the marrow.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧩 Two Contrasting Faces on Russia's Edge</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Belarus and Kaliningrad, encountered on the vast puzzle board of Eurasia, formed an oddly fitting contrast. Belarus was the chillingly foreign country that felt casual enough to cross into as if going to a neighboring district, because even the language and the name of the currency seemed the same, only to end with us being caught by border guards and forced to write statements of reflection. Kaliningrad, by contrast, was surrounded by unfamiliar European Union countries and had to be reached by plane, yet it was one hundred percent Russia without the slightest ambiguity. I was still far too inexperienced to charge in armed only with shallow knowledge, but step by step, I was learning.
        </p>
      `}},{id:"eurasia-travel-2",title:{ko:"튀르키예, 그리스",en:"Turkiye and Greece"},subtitle:{ko:"사이가 좋지 못한 지중해의 두 나라",en:"Two Mediterranean Neighbors on Bad Terms"},imageUrl:"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          이제 눈부신 태양과 에메랄드빛 바다가 일렁이는 지중해로 무대를 옮겨볼 차례다. 이번 이야기의 주인공은 지중해를 사이에 두고 마주 본 두 나라, 튀르키예(구 터키)와 그리스다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😵 징글징글한 이웃, 튀르키예와 그리스</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          세계 어느 곳에나 이웃 나라끼리는 사이가 안 좋다는 암묵적인 룰(?)이 있지만, 튀르키예와 그리스의 관계는 그중에서도 가히 스펙터클한 수준을 자랑한다. 이들의 앙숙 역사는 수백 년 전으로 거슬러 올라간다. 과거 그리스는 오스만 제국(현 튀르키예)의 지배를 약 400년 가까이 받았다. 19세기 초 그리스가 피 터지는 독립 전쟁을 치르며 갈라선 이후에도, 두 나라는 에게해의 영토 문제와 영공 침범, 그리고 뒤에 소개할 분단 섬 문제 등으로 끊임없이 으르렁거려 왔다. 오죽하면 축구 국가대표팀 경기라도 열리는 날엔 총성 없는 전쟁이 벌어지고, 양국 국민들 사이에서는 상대방을 깎아내리는 농담이 일상처럼 쓰일 정도다. 우리의 한일 관계보다 더하면 더했지 결코 덜하지 않은, 그야말로 징글징글한 애증의 이웃이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍽️ 앙숙이지만 닮은 식탁</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 참으로 아이러니하게도, 이렇게 서로를 앙숙이라 부르며 잡아먹지 못해 안달인 두 나라가 가장 치열하게 자존심 대결을 펼치는 분야가 있으니, 바로 음식이다. 서로 자기네 음식이 훨씬 더 맛있고 훌륭하다며 한 치의 양보도 없이 으르렁대지만, 지중해성 기후라는 같은 지붕 아래서 수백 년간 부대끼며 살아서인지 이들의 식문화는 소름 돋을 정도로 닮아 있다. 신선한 올리브오일과 토마토, 향긋한 허브와 요거트를 듬뿍 사용한 지중해식 요리는 두 나라 모두 예술의 경지에 올라 있다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          가장 대표적인 예가 바로 그리스의 자이로(Gyro)와 튀르키예의 되네르 케밥(Döner Kebab)이다. 커다란 고기 덩어리를 쇠꼬챙이에 수직으로 꽂아 빙글빙글 돌려가며 불에 구운 뒤, 겉면의 바삭하게 익은 고기를 얇게 썰어내어 빵에 채소와 함께 싸 먹는 그 환상적인 맛! 이름만 다를 뿐 조리 방식부터 생김새, 심지어 입안 가득 퍼지는 황홀한 육즙까지 형제처럼 똑 닮아 있다. 서로 "우리가 원조고 저들이 베낀 것!"이라며 핏대를 세우지만, 관광객인 우리 입장에서는 이 자존심 건 미식 경쟁이 그저 반가울 따름이다. 마치 앙숙인 두 일류 기업이 앞다투어 품질 경쟁을 벌일 때 소비자가 최고의 혜택을 누리듯, 여행자는 그저 이 두 경쟁사 사이에서 가장 맛있는 결과물만 쏙쏙 골라 먹으며 궁극의 이득을 챙기면 그만이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✈️ 나를 튀르키예로 이끈 대학 동기</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          내가 튀르키예라는 나라를 처음 방문한 것은 학부 시절이었다. 사실 그때까지만 해도 나는 튀르키예가 정확히 지도 상 어디 붙어 있는지도 모르는, 여행에 무지한 학생이었다. 그런 나를 이 매력적인 나라로 이끈 건 다름 아닌 대학 동기였다. 그 친구의 아버지는 당시 튀르키예 주재 한국 대사관에서 국방무관으로 근무하고 계셨다. 덕분에 튀르키예를 제집 드나들듯 여러 번 가봤던 그 친구는, 현지인 뺨치는 알짜배기 여행 조언과 꿀팁을 아낌없이 전수해 주었다. 동기의 강력한 추천과 완벽한 브리핑 덕분에 떠났던 첫 튀르키예 여행은 내 인생의 여행 지도를 완전히 바꿔놓았다. 그때의 기억이 어찌나 강렬하고 좋았던지, 훗날 아내의 손을 잡고 다시 한번 찾아갔고, 어머니가 러시아로 나를 보러 오셨을 때도 주저 없이 비행기 표를 끊어 모시고 갔을 정도다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🕌 미식과 유적의 성지, 튀르키예</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          튀르키예는 프랑스, 중국과 함께 세계 3대 미식 국가로 불릴 만큼 먹거리가 풍성하지만, 볼거리와 즐길 거리도 그에 못지않다. 동양과 서양, 이슬람과 기독교의 문화가 한데 뒤섞여 신비로운 오라를 뿜어내는 이스탄불, 수만 년의 시간이 빚어낸 기암괴석들 사이로 수백 개의 열기구가 떠오르는 카파도키아, 새하얀 석회 붕 위로 에메랄드빛 온천수가 흘러내리는 파묵칼레, 그리고 지중해의 눈부신 햇살 아래 패러글라이딩과 휴양을 즐길 수 있는 레저의 천국 페티예까지. 게다가 역사가 어찌나 깊은지, 길을 걷다 발에 무언가 툭 걸려 내려다보면 그게 몇천 년 전 로마 시대의 유물 기둥인 나라가 바로 튀르키예다. 발길 닿는 모든 곳이 야외 박물관이자 미식의 성지였다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ 신화와 바다의 나라, 그리스</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          튀르키예가 웅장하고 다채로운 매력으로 압도한다면, 바다 건너 그리스 역시 이에 결코 뒤지지 않는 찬란함을 뽐낸다. 그리스 음식의 특징을 꼽으라면 단연 신선함과 직관적인 맛이다. 질 좋은 올리브유가 듬뿍 들어간 그릭 샐러드, 바비큐를 기반으로 숯불 향을 가득 머금은 고기 꼬치구이 수블라키, 그리고 입맛을 돋우는 다채로운 향신료의 조화는 완벽 그 자체였다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          그리스는 우리가 미디어를 통해 접했던 환상적인 풍경들이 실존하는 곳이기도 하다. 당시 러시아인들 사이에서도 선풍적인 인기를 끌었던 드라마 ‘태양의 후예’를 기억하는가? 극 중 유시진 대위(송중기 분)와 강모연(송혜교 분)이 사랑을 속삭이던, 깎아지른 절벽 아래 녹슬고 버려진 난파선이 있던 그 비현실적인 해변은 바로 그리스의 자킨토스(Zakynthos) 섬에 있다. 또한, "라라라 라라라라~" 하는 청량한 배경음악과 함께 배우 손예진이 뛰놀던 포카리스웨트 광고 속 하얀 골목과 파란 지붕의 성당은 수많은 허니무너들의 로망인 산토리니다. 여기에 유럽 문화의 탯줄이자 고대 신화가 살아 숨 쉬는 아테네, 미노아 문명의 신비로운 흔적을 간직한 크레타 섬까지. 그리스는 발을 들이는 순간 여행자를 신화 속 주인공으로 만들어버리는 마법 같은 힘을 지녔다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚧 둘의 갈등이 새겨진 섬, 키프로스</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이 두 나라의 징글징글한 관계를 이야기할 때 절대 빼놓을 수 없는 아주 흥미롭고도 슬픈 섬이 하나 있다. 지중해 동쪽에 떠 있는 키프로스(혹은 사이프러스)라는 섬이다. 제주도의 약 5배 크기인 이 아름다운 섬은 현재 튀르키예와 그리스계 주민들의 갈등으로 인해 나라가 남북으로 완전히 쪼개져 있다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          과거 영국의 식민 지배에서 독립한 후, 섬 안에서 다수를 차지하던 그리스계 주민들과 소수의 튀르키예계 주민들 사이의 피비린내 나는 유혈 충돌이 벌어졌다. 결국 1974년, 튀르키예 군대가 자국민 보호를 명분으로 섬의 북쪽을 점령해 버렸고, 그 결과 남쪽은 그리스계의 키프로스 공화국으로, 북쪽은 튀르키예계의 북키프로스 튀르키예 공화국으로 나뉘어 버렸다. 섬의 수도인 니코시아의 한가운데로는 유엔 통제하에 철조망과 장벽이 처진 그린 라인이 지나간다. 전 세계에서 유일하게 남은 분단 수도인 셈이다. 이 쪼개진 섬은 두 나라의 지독한 역사적 앙금과 영토 분쟁의 현주소를 가장 적나라하게 보여주는 살아있는 박물관이다. 다행히도 관광객은 여권만 가지고 있다면 쉽게 이 국경을 넘나 들 수 있다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏝️ 분쟁과 햇살이 교차하는 지중해의 기억</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          춥고 칙칙했던 러시아 대륙의 길고 긴 겨울을 벗어나, 튀르키예와 그리스가 뿜어내는 지중해의 찬란한 햇살과 다채로운 미식을 온몸으로 즐길 수 있었던 것은 그야말로 완벽한 해방감이었다. 단순히 입과 눈만 즐거웠던 것이 아니라, 두 나라가 치열하게 얽히며 빚어낸 흥미로운 역사적 스토리까지 깊이 있게 배울 수 있어 더욱 뜻깊은 여정이었다. 특히 교과서 속 활자로만 무미건조하게 읽던 영토 분쟁의 역사를, 키프로스처럼 실제로 철조망이 처진 채 갈라져 있는 분단 수도의 검문소를 두 발로 직접 넘나들며 마주하니 그 묵직한 현실이 훨씬 더 생생하게 피부로 와닿았다.
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          Now it is time to move the stage to the Mediterranean, where dazzling sunlight and emerald seas shimmer in every direction. The protagonists of this story are two countries facing each other across that sea: Turkiye, formerly Turkey, and Greece.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😵 Turkiye and Greece, Two Exhaustingly Hostile Neighbors</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          There seems to be an unspoken rule almost everywhere in the world that neighboring countries do not get along, but the relationship between Turkiye and Greece is spectacular even by that standard. Their long history as bitter rivals goes back hundreds of years. In the past, Greece lived under the rule of the Ottoman Empire, present-day Turkiye, for nearly four hundred years. Even after Greece broke away through a war of independence in the early nineteenth century, the two countries continued to growl at each other over territorial disputes in the Aegean Sea, violations of airspace, and the divided-island problem that I will mention later. Their hostility is so notorious that when the national football teams play, it feels like a war without gunfire, and jokes mocking the other side are used almost casually among ordinary people. If anything, their relationship is even more exhausting than that between Korea and Japan, a truly tangled mix of resentment and attachment.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍽️ Rival Nations, Nearly Identical Tables</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Yet ironically, the field in which these two countries, forever eager to call each other enemies, seem to compete most fiercely is food. Each insists that its own cuisine is far better and nobler than the other's, refusing to yield even an inch, but because they have lived side by side for centuries under the same Mediterranean climate, their food cultures resemble each other to an almost uncanny degree. Mediterranean cooking enriched with fresh olive oil, tomatoes, fragrant herbs, and generous amounts of yogurt reaches an artistic level in both countries.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The clearest example is Greece's gyro and Turkiye's doner kebab. A huge mass of meat is skewered vertically, rotated slowly over heat, and then shaved into thin slices of crisp outer meat to be wrapped in bread with vegetables. That glorious taste. The names differ, but the cooking method, the appearance, and even the rich juices that burst across the mouth are so similar they feel like siblings. Both sides passionately insist, “We are the original, and they copied us!” But from the perspective of a traveler, this proud culinary rivalry is nothing but welcome news. Just as consumers benefit when two top-tier companies compete fiercely in quality, travelers can simply enjoy the most delicious results from both sides and walk away with the ultimate advantage.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✈️ The College Friend Who Led Me to Turkiye</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The first time I visited Turkiye was during my undergraduate years. To be honest, at that point I was a hopelessly travel-ignorant student who did not even know exactly where Turkiye sat on the map. The one who led me to this fascinating country was a university friend. His father was then serving as the defense attache at the Korean embassy in Turkiye. Because of that, my friend had visited Turkiye so many times that he moved through it almost as if it were his own home, and he generously passed on practical travel advice and local tips that rivaled those of any resident. Thanks to his strong recommendation and flawless briefing, that first trip to Turkiye completely redrew the map of travel in my life. The memory was so powerful and so good that later I returned with my wife, and when my mother came to Russia to visit me, I did not hesitate to buy her a plane ticket and take her there as well.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🕌 Turkiye, a Sanctuary of Food and Ruins</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Turkiye is often mentioned alongside France and China as one of the world's three great culinary nations, and its food is indeed abundant, but its sights and experiences are no less remarkable. There is Istanbul, radiating a mysterious aura from the intermingling of East and West, Islam and Christianity; Cappadocia, where hundreds of hot-air balloons rise among rock formations shaped over tens of thousands of years; Pamukkale, where emerald-colored thermal waters flow over brilliant white travertine terraces; and Fethiye, a paradise of leisure where one can enjoy paragliding and rest under the dazzling Mediterranean sun. Its history is so deep that you can be walking along, feel something strike your foot, glance down, and discover that it is a Roman column from thousands of years ago. Everywhere the feet could reach felt at once like an open-air museum and a sacred site of gastronomy.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ Greece, Land of Myth and Sea</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          If Turkiye overwhelms through grandeur and variety, Greece across the sea shines with a brilliance that is every bit its equal. The defining feature of Greek food, if I had to choose one, would be its freshness and directness of flavor. Greek salad drenched in good olive oil, souvlaki skewers filled with the aroma of charcoal from the grill, and the perfect harmony of vivid spices that awaken the appetite all felt nearly flawless.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Greece is also a place where the dreamlike scenery we know from the media truly exists. Do you remember the drama Descendants of the Sun, which was wildly popular among Russians at the time as well? The unreal beach with the rusted shipwreck lying beneath sheer cliffs, where Captain Yoo Si-jin and Kang Mo-yeon whispered their love, is on the Greek island of Zakynthos. And those white alleys and blue-domed churches from the Pocari Sweat commercial, where Son Ye-jin ran beneath the bright refrain of “la la la la la la,” are in Santorini, long cherished as a honeymoon fantasy. Add to that Athens, the cradle of European civilization where ancient myths still seem alive, and Crete, which preserves the mysterious traces of the Minoan civilization. The moment one sets foot in Greece, it has the magical power to turn a traveler into the protagonist of a myth.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚧 Cyprus, the Island Marked by Their Conflict</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          There is one island that is both fascinating and deeply sad, and it can never be left out when speaking of the exhausting relationship between these two nations. That island is Cyprus, floating in the eastern Mediterranean. Roughly five times the size of Jeju Island, this beautiful place is now completely split north and south because of conflict between Turkish and Greek Cypriot communities.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          After gaining independence from British colonial rule, Cyprus descended into bloody clashes between the Greek Cypriot majority and the Turkish Cypriot minority. In the end, in 1974, the Turkish military occupied the northern part of the island under the pretext of protecting its own ethnic community. As a result, the south became the Greek Cypriot Republic of Cyprus, and the north became the Turkish Republic of Northern Cyprus. Through the middle of Nicosia, the island's capital, runs the Green Line, fenced with barbed wire and barriers under United Nations control. It is the only divided capital left in the world. This split island is a living museum that lays bare the bitter historical sediment and territorial conflict between the two countries more vividly than anywhere else. Fortunately, tourists can cross that border quite easily as long as they carry a passport.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏝️ Mediterranean Sunlight and the Weight of Division</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Escaping the long and bleak winters of the cold Russian continent and immersing myself in the radiant Mediterranean sunlight and diverse cuisine of Turkiye and Greece was nothing short of a perfect sense of liberation. It was not simply a matter of pleasing the eyes and the palate. The journey felt even more meaningful because it also allowed me to learn, in a vivid and layered way, the historical stories created by the fierce entanglement of these two countries. In particular, the history of territorial disputes, which I had previously encountered only as dry textbook print, felt far more tangible and weighty when I crossed in person through checkpoints in a divided capital like Cyprus, where barbed wire still cuts through the city.
        </p>
      `}},{id:"eurasia-travel-3",title:{ko:"에스토니아, 라트비아, 리투아니아",en:"Estonia, Latvia, and Lithuania"},subtitle:{ko:"발트 3국",en:"The Baltic States"},imageUrl:"https://img1.daumcdn.net/thumb/R1280x0.fwebp/?fname=http://t1.daumcdn.net/brunch/service/user/8EQu/image/v4P69mZDWlPT3y0f5E_UFLCB26Q?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          이번 무대는 러시아의 거대한 그림자를 벗어나 발트해의 낭만을 품은 세 나라, 이른바 ‘발트 3국’이라 불리는 에스토니아, 라트비아, 리투아니아이다. 우리는 상트페테르부르크에서 렌터카를 빌려 직접 운전대를 잡고 발트 3국으로 넘어갔다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚗 국경을 넘는 렌터카의 변수들</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          우리는 여권만 들고 고속도로 톨게이트 지나듯 국경을 넘으면 될 줄 알았건만, 렌터카로 국경을 넘는 일은 상상 이상으로 깐깐한 작업이었다. 사전에 렌터카 약관에 국경 통과 가능 여부를 파악해야 했고, 국가 간 이동에 필요한 차량 보험과 온갖 복잡한 서류들이 존재한다는 사실을 우리는 국경 검문소에 도착해서야 깨달았다. 뜻이 있는 곳에는 길이 있다고 했던가. 시간은 좀 걸렸지만 어찌저찌 러시아 땅을 벗어나 발트 3국의 땅을 밟을 수 있었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚨 국경 너머에서도 통하던 생존 기술</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          고난은 여기서 끝이 아니었다. 국경을 넘었다는 해방감과 뻥 뚫린 도로에 취해 나도 모르게 액셀을 깊게 밟았던 모양이다. 아주 살짝 제한 속도를 넘겼을 즈음, 어디선가 귀신같이 현지 경찰이 나타나 우리 차를 세웠다. 국경에서 진을 다 뺐는데 벌금 폭탄까지 맞을까 봐 심장이 덜컥 내려앉았지만, 놀랍게도 이 동네 경찰 역시 러시아에서 익히 겪었던 것처럼 ‘대화’가 통하는 분들이었다. 진심을 담은 ‘성의’를 표현함으로서 별탈 없이 여행을 이어갈 수 있었다. 러시아 대륙에서 배운 생존 기술이 발트해에서도 통한다는 사실에 어이가 없었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏰 탈린: 중세 도시와 헬싱키행 페리</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          우리의 첫 목적지였던 에스토니아의 수도 탈린의 구시가지는 유럽 전체를 통틀어 중세의 모습이 가장 완벽하게 보존된 곳 중 하나다. 붉은 지붕이 오밀조밀 늘어선 전망대에 올라 발트해의 푸른 바다를 내려다보는 맛도 훌륭하지만, 여기서 절대 놓칠 수 없는 꿀팁이 하나 있다. 탈린은 바다 하나를 사이에 두고 핀란드의 헬싱키와 마주 보고 있어, 대형 페리를 타면 단 2시간 남짓 만에 헬싱키에 닿는다. 배 안에서 면세 쇼핑을 즐기고 데크에서 맥주 한 잔에 시원한 바닷바람을 맞다 보면 어느새 북유럽 땅이다. 당일치기로도 충분히 가능하니 에스토니아에 간다면 고려해보기를 추천한다. 지리적으로 가까운 탓인지 에스토니아도 북유럽의 사우나 문화가 발달해 있다. 우리는 에어비앤비를 이용했는데 운 좋게도 숙소 내에 사우나가 있었다. 고된 여행 후에 노곤한 몸을 사우나에서 녹여도 좋을 듯 하다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🕯️ 리가에서 마주한 점령의 기억</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          중세 동화와 북유럽의 낭만을 뒤로하고 남쪽으로 달려 도착한 곳은 중간에 위치한 라트비아의 수도, 리가였다. 화려한 아르누보 양식의 건물들 덕분에 '발트해의 파리'라 불리는 아름다운 도시지만, 그 화려함 이면에는 아주 서늘하고 아픈 역사가 숨 쉬고 있었다. 리가 중심부에는 라트비아 점령 박물관이 있는데, 이곳은 1940년 소련에 의해 강제로 합병당하고 억압받았던 50년간의 처절한 역사를 고스란히 담고 있다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          수많은 지식인이 시베리아로 강제 유배를 당하고, 고유의 언어와 문화를 빼앗길 뻔했던 이들의 처절한 역사는 일제강점기를 겪은 우리 한국의 뼈아픈 근현대사와 너무나도 완벽하게 겹쳐 보였다. 지구 반대편의 낯선 나라 박물관에서 가슴이 먹먹해지는 묘한 동질감을 느낄 줄이야. 그제야 나는 이 동네에서 무심코 러시아어로 길을 묻거나 음식을 주문하는 게 얼마나 눈치 없는 행동인지 깊이 깨달았다. 현지인들이 내 러시아어를 찰떡같이 알아들으면서도 짐짓 모른 척 영어로 대답했던 것은, 명동 한복판에서 일본어로 당당하게 길을 묻는 관광객을 보는 한국인의 심정과 같았으리라.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤝 세트로 묶이지만 서로 다른 삼 형제</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이렇게 뼈아픈 역사를 공유하고 있지만, 재미있게도 발트 3국을 여행하다 보면 아주 기막힌 모순을 발견하게 된다. 외부인의 눈에는 늘 세트로 묶이는 세 나라이지만, 정작 본인들은 언어도 서로 달라 말도 통하지 않는다. 또한 에스토니아는 스스로를 북유럽이라 우기고, 라트비아는 그 사이에서 샌드위치처럼 끼어 센터 부심을 부리며, 가장 남쪽의 리투아니아는 찬란했던 과거 제국 시절의 자부심으로 뭉쳐 있다. 이들은 말이 통하지 않아 서로 만났을 때 영어를 쓰거나, 역설적이게도 그토록 증오하는 러시아어로 소통해야만 하는 웃픈 현실을 공유하고 있다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          평소엔 서로 촌스럽고 느리다며 디스전을 펼치지만, 동쪽의 거대한 불곰(러시아)이 으르렁거리는 순간 이들은 1초의 망설임도 없이 대동단결한다. 1989년, 독립을 열망하며 세 나라 국민 약 200만 명이 손에 손을 잡고 무려 600km에 달하는 거대한 '인간 띠(발트의 길)'를 만들어 낸 것이 바로 그 증거다. 티격태격하다가도 위기 앞에서는 가장 끈끈해지는 이 삼 형제의 기막힌 케미야말로, 발트 3국이 그 거친 역사 속에서 살아남을 수 있었던 진짜 비결이 아닐까.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏞️ 리투아니아의 성과 모래톱</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이 얄궂은 삼 형제의 막내 격이자 우리의 마지막 종착지인, 가장 남쪽의 리투아니아로 향했다. 호수 한가운데 덩그러니 떠 있는 붉은 벽돌의 트라카이성은 당장이라도 디즈니 동화 속 기사가 백마를 타고 튀어나올 것만 같은 로맨틱한 풍경이 일품이었다. 그리고 바다 위를 달리는 듯한 착각을 불러일으키는 쿠로니안 스핏 국립공원도 꼭 가봐야 할 곳 중 하나이다. 폭이 좁고 길쭉한 모래톱으로 이루어진 이 신비로운 지형은 양옆으로 끝없이 펼쳐진 발트해를 끼고 있다. 창문을 내리고 양쪽 바다에서 불어오는 바람을 맞으며 좁은 도로를 질주하는 기분은 그야말로 환상적이었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧭 길 끝에서 다시 만나는 러시아</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          그런데 더 기가 막힌 사실은 이 아름다운 바닷길의 끝이 어디로 이어지냐는 것이다. 도로를 따라 쭉 직진하다 보면, 바로 앞선 여행기에서 다루었던 러시아의 기형적인 외딴섬 영토, 칼리닌그라드의 국경과 맞닥뜨리게 된다. 유럽 한복판의 그림 같은 국립공원을 달리다 그 끝에서 또다시 100% 찐 러시아 본토와 마주하게 되다니! 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌊 서로 다른 기억이 만나는 발트해의 끝</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아와 국경을 맞대고 있는 인접 국가들은 좋든 싫든 러시아와 떼려야 뗄 수 없는 묵직한 역사를 공유하고 있다. 모스크바에서 유학 생활을 하며 러시아인이 쓴 러시아 역사에 대해 배웠지만, 국경 하나를 넘어 발트 3국의 시선에서 마주한 과거는 완전히 다른 얼굴을 하고 있었다. 러시아인들이 자랑스러워하는 위대한 통합과 해방의 역사가, 이웃 나라 사람들에게는 결코 잊을 수 없는 침략과 억압으로 뼈저리게 기억되고 있었으니 말이다. 우리가 렌터카 운전대를 잡고 넘었던 것은 단순한 지도상의 경계선이 아니라, 이처럼 복잡하게 얽힌 서로 다른 기억과 시선의 경계였던 셈이다. 철없는 무계획으로 호기롭게 떠나 고생도 제법 했지만, 발트해를 따라 달린 이 로드트립은 내게 세상을 한층 입체적으로 바라보는 새로운 렌즈를 달아주며 잊지 못할 완벽한 여정으로 막을 내렸다.
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          This time, the stage moves beyond Russia's vast shadow to three countries carrying the romance of the Baltic Sea: Estonia, Latvia, and Lithuania, the so-called Baltic states. We rented a car in Saint Petersburg, took the wheel ourselves, and drove across into the Baltics.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚗 The Complications of Crossing Borders in a Rental Car</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          We had assumed we could simply carry our passports and cross the border as casually as passing through a highway tollgate, but taking a rental car across a national border turned out to be far more demanding than expected. We only realized upon arriving at the checkpoint that we were supposed to confirm in advance whether the rental agreement even allowed border crossings, and that there were separate insurance requirements and all kinds of complicated documents needed for international travel by car. Still, where there is a will, there is a way. It took time, but somehow we managed to leave Russian soil behind and step onto the land of the Baltic states.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚨 Survival Skills That Worked Beyond the Border</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          That was not the end of our troubles. I must have grown intoxicated with the relief of crossing the border and the wide-open road ahead, because before I knew it I was pressing the accelerator a little too deeply. The moment we went just slightly over the speed limit, a local police officer appeared almost supernaturally from nowhere and pulled us over. We had already been drained at the border, so the thought of getting hit with a massive fine made my heart sink. But surprisingly, the police in this region were also the sort with whom one could have a “conversation,” much like the ones I had already learned about in Russia. By expressing the proper sincerity, we were able to continue the journey without serious trouble. It was absurd to realize that the survival techniques learned on the Russian continent also worked on the Baltic coast.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏰 Tallinn: A Medieval City and the Ferry to Helsinki</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Our first destination was Tallinn, the capital of Estonia, whose Old Town is one of the best-preserved medieval urban landscapes in all of Europe. Climbing up to the viewpoint to look out over the blue waters of the Baltic Sea beyond its clusters of red roofs is already wonderful, but there is also one essential tip that should never be missed. Tallinn sits directly across the sea from Helsinki in Finland, and by large ferry you can reach Helsinki in just a little over two hours. Enjoy duty-free shopping on board, stand on the deck with a beer in hand and a sharp sea breeze in your face, and before you know it you are in the Nordics. It is easy enough for a day trip, so if you visit Estonia, it is well worth considering. Perhaps because of that geographic closeness, Estonia has also developed a Nordic-style sauna culture. We stayed in an Airbnb and were lucky enough to have a sauna in the accommodation itself. After a tiring journey, there is little better than letting your weary body melt in the heat.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🕯️ Riga and the Memory of Occupation</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Leaving behind medieval fairy-tale scenery and Nordic romance, we drove south and arrived in Riga, the capital of Latvia, positioned in the middle of the three countries. It is a beautiful city often called the “Paris of the Baltic” thanks to its magnificent Art Nouveau architecture, but behind that elegance there breathes a cold and painful history. In central Riga stands the Museum of the Occupation of Latvia, a place that preserves the full anguish of the fifty years during which the country was forcibly annexed and oppressed by the Soviet Union after 1940.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          The desperate history of intellectuals being deported to Siberia and a people nearly losing their own language and culture overlapped with painful precision with Korea's own modern history under Japanese colonial rule. I had never expected to feel such a heavy, intimate sense of kinship in the museum of a distant country on the other side of the world. Only then did I fully realize how tactless it was to casually ask for directions or order food in Russian in this part of the world. The reason locals understood my Russian perfectly well yet deliberately replied in English must have been something like the feeling a Korean person would have upon seeing a tourist confidently asking for directions in Japanese in the middle of Myeong-dong.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤝 Three Siblings Grouped Together, Yet Entirely Different</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          What is fascinating is that even while sharing such painful history, the Baltic states reveal a striking contradiction once you travel through them. To outsiders they are always bundled together as a neat set of three, but in reality their languages are different enough that they cannot naturally understand one another. Estonia insists on thinking of itself as Nordic, Latvia carries itself with the pride of the one stuck in the middle like the filling of a sandwich, and Lithuania, the southernmost, is held together by the pride of its once-glorious imperial past. When they do meet, they often have to rely on English, or more ironically still, on Russian, the very language they resent so deeply. It is a quietly tragic and darkly funny reality they all share.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          In ordinary times they mock one another as provincial and slow, but the moment the giant bear to the east starts growling, they unite without a second of hesitation. The clearest proof came in 1989, when about two million people across the three countries joined hands in a human chain stretching some six hundred kilometers in a shared cry for independence, the event now known as the Baltic Way. That bizarre chemistry between these three brothers, bickering in peacetime but inseparable in crisis, may well be the true reason the Baltic states survived such a harsh history.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏞️ Lithuania's Castle and Sand Spit</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          We then headed to Lithuania, the southernmost country, the youngest-feeling of these troublesome three brothers, and our final stop. Trakai Castle, a red-brick fortress floating alone in the middle of a lake, offered such a romantic view that it felt as though a knight from a Disney fairy tale might burst out at any moment on horseback. Another place that should not be missed is Curonian Spit National Park, whose narrow ribbon of land creates the illusion that you are driving directly over the sea. This mysterious strip of sand stretches long and thin with the Baltic waters spread endlessly on both sides. Rolling down the window and racing along the narrow road while wind blew in from the sea on either side felt simply fantastic.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧭 Meeting Russia Again at the End of the Road</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          But the even more astonishing fact was where the end of that beautiful seaside road eventually led. If you simply continued driving straight, you would find yourself face to face with the border of Kaliningrad, Russia's strange exclave, the very territory discussed in the previous travel essay. To drive through a picturesque national park in the middle of Europe and then, at the road's end, encounter once again one hundred percent unmistakable Russia. That was almost too absurd to be real.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌊 At the Baltic's Edge, Between Clashing Memories</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Countries that share a border with Russia, whether they like it or not, also share a heavy and inseparable history with it. While studying in Moscow, I learned Russian history as written by Russians, but once I crossed a border and looked at the past from the perspective of the Baltic states, it wore an entirely different face. The great history of integration and liberation so proudly remembered by Russians was remembered by their neighbors instead as invasion and oppression that could never be forgotten. What we crossed in our rental car was not merely a line on a map, but a boundary between conflicting memories and perspectives intricately tangled together. We set out recklessly and suffered our fair share of trouble, but this road trip along the Baltic Sea ended as a perfect and unforgettable journey, one that gave me a new lens through which to see the world in richer dimensions.
        </p>
      `}},{id:"eurasia-travel-4",title:{ko:"아르메니아, 아제르바이잔, 조지아",en:"Armenia, Azerbaijan, and Georgia"},subtitle:{ko:"캅카스 3국",en:"The Three Caucasus States"},imageUrl:"https://dimg.donga.com/wps/NEWS/IMAGE/2019/03/20/94630330.5.jpg",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          흑해와 카스피해 사이, 유럽과 아시아의 경계를 가로지르는 거대한 자연의 장벽이 있다. 신화 속 프로메테우스가 인간에게 불을 훔쳐다 준 죄로 쇠사슬에 묶여 독수리에게 간을 파먹히던 형벌의 무대, 바로 캅카스 산맥이다. 그리고 이 웅장한 산줄기의 품에 안겨 있는 세 나라가 바로 이번 여행기의 주인공인 아제르바이잔, 아르메니아, 조지아다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧭 서로 붙어 있지만 전혀 다른 세 나라</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          이 세 나라는 지리적으로 딱 붙어 있고 과거 모두 소비에트 연방에 속해 있었지만, 막상 뚜껑을 열어보면 종교도, 언어도, 분위기도 완전히 다른 매력을 뿜어낸다. 얽히고설킨 이들의 관계를 조금 알고 가면 여행이 훨씬 흥미로워진다. 구소련에서 독립한 국가들인 만큼 러시아와의 관계가 꽤나 복잡한데, 조지아는 2008년 러시아와 직접 전쟁까지 치르며 국교를 단절했을 만큼 반러시아 정서가 강하다. 아르메니아는 주변국들의 위협 속에서 러시아를 일종의 안보 방패막이로 삼아왔으나 최근에는 그 관계마저 차갑게 식어가고 있다. 반면 아제르바이잔은 풍부한 오일 머니를 바탕으로 러시아의 눈치를 덜 보며 꽤나 독자적인 노선을 걷고 있다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⚔️ 국경선에 새겨진 철천지원수의 역사</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          무엇보다 골치 아픈 것은 아르메니아와 아제르바이잔의 철천지원수 관계다. 두 나라는 오랫동안 영토 분쟁으로 피를 흘려왔는데, 지도를 확대해 보면 그 기형적인 국경선에 두 눈을 의심할 지경이다. 아제르바이잔 영토 한가운데 아르메니아 사람들이 사는 섬 같은 지역이 둥둥 떠 있고, 반대로 아르메니아 영토 안쪽이나 너머에도 아제르바이잔의 영토가 조각조각 떨어져 있다. 마치 멱살을 잡고 싸우다 서로의 옷자락이 뜯겨 나간 듯한 이 복잡한 영토 덕분에 두 나라의 국경은 완전히 폐쇄되어 있다. 당연히 여행객도 이 두 나라를 직접 오갈 수는 없다. 우리는 아제르바이잔을 방문한 후 조지아를 거쳐 아르메니아로 넘어갔는데, 아르메니아 입국 심사에서 우리 여권에 찍힌 아제르바이잔 도장을 보며 왜 그곳에 갔었는지 철저하게 검문하는 모습만 봐도 두 나라 사이의 팽팽한 긴장감을 오롯이 느낄 수 있었다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💸 천국 같은 물가와 지옥 같은 도로</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          정치적으로는 이토록 살벌한 동네지만, 여행자에게 캅카스 3국은 그야말로 은혜로운 천국이다. 세 나라의 가장 치명적인 매력은 바로 극강의 가성비다. 분위기 좋은 고급 레스토랑에서 식사하는 비용은 둘이서 2만원이 채 안된다. 하지만 캅카스 3국 여행의 치명적인 단점도 있다. 세 나라 모두 화려한 도시 중심부를 조금만 벗어나면 도로 사정이 처참할 정도로 열악해진다는 것이다. 아스팔트 곳곳에 폭탄이라도 맞은 듯 커다란 웅덩이가 파여 있는데 보수조차 제대로 되어 있지 않다. 창밖 풍경에 취해 주의를 기울이지 않고 운전하다가는 덜컹거리는 충격에 차체와 함께 영혼까지 사정없이 흔들리기 일쑤였다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏙️ 바쿠의 하얀 마천루와 불의 야경</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          산유국인 아제르바이잔의 수도 바쿠에 들어서면, 자본주의 향이 물씬 풍기는 압도적인 현대식 건물들이 여행자를 맞이한다. 거리는 티끌 하나 없이 깨끗했고 건물들은 눈부시게 하얀색으로 빛나 도시 전체가 거대한 갤러리처럼 느껴졌다. 실제로 도시 곳곳에 예술적 감각이 묻어나는 갤러리들도 심심치 않게 눈에 띄었다. 특히 밤이 되면 도시 어디서나 보이는 거대한 플레임 타워가 화려한 붉은빛을 뿜어내며 압도적인 야경을 선사한다. 이 타워는 나라에 막대한 부를 가져다준 석유와 천연가스, 즉 불의 나라라는 아제르바이잔의 정체성을 상징적으로 보여준다. 이 도시가 진짜 매력적인 이유는, 이렇듯 번쩍이는 하얀 마천루가 솟아오른 바로 옆에 촘촘한 골목길과 성벽으로 둘러싸인 구시가지가 완벽하게 보존되어 있다는 점이다. 천 년 전 실크로드의 상인들이 걷던 길과 현대의 빌딩 숲이 한 프레임 안에 들어오는 풍경은 무척이나 이색적이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐄 소 떼가 지배하는 아르메니아의 산길</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          반면 아르메니아는 국토의 대부분이 해발 1,000미터가 넘는 고산지대로 이루어진 첩첩산중의 나라다. 굽이치는 산길을 다니다 보면 잊을 만할 때쯤 도로의 진정한 지배자들을 마주하게 된다. 바로 동네 소 떼들이다. 느긋하게 꼬리를 흔들며 왕복 2차선 도로를 완전히 점거한 채 유유자적 걸어가는 소 떼를 만나면 인간의 경적 따위는 아무런 소용이 없다. 그저 차를 세우고 소님들이 식사를 마치고 길을 비켜주실 때까지 한없이 겸손한 자세로 기다려야 한다. 바쁜 일정 중에 길을 막아선 이 뻔뻔한 녀석들에게 화가 날 법도 하지만, 우리에겐 아주 훌륭한 복수 방법이 있다. 바로 그날 저녁 식당에 가서 숯불에 바싹 구운 소고기 꼬치구이 샤슬릭을 아주 맛있게 씹어 삼키는 것이다. 낮에 길 위에서 당했던 길막의 설움을 훌륭한 고기 육즙으로 갚아주고 나면 장엄한 캅카스의 산맥 풍경이 한층 더 아름답게 느껴진다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍷 조지아, 미식과 와인의 성지</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          마지막으로 조지아는 미식과 와인의 성지다. 척박한 러시아에서도 조지아 식당은 믿고 먹는 고급 맛집으로 통한다. 갓 구운 빵 위에 치즈와 계란 노른자를 얹어 쓱쓱 비벼 먹는 하차푸리, 진한 고기 육즙이 폭포수처럼 쏟아지는 거대한 전통 만두 힌깔리는 지금도 군침이 돌게 만든다. 게다가 조지아는 인류 최초의 와인 발상지라는 자부심을 가지고 있다. 어느 집에 가나 자신들만의 비법으로 와인을 담그고 있었고, 동네 사람들과 눈인사를 나누며 조금만 친해져도 찰랑거리는 홈메이드 와인을 공짜로 듬뿍 얻어먹을 수 있는 와인 천국이었다.  
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🗿 조지아에서 마주한 스탈린의 그림자</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          조지아 여행에서 결코 빼놓을 수 없는 또 하나의 흥미로운 포인트는 바로 ‘스탈린’이다. 악명 높은 소련의 독재자 스탈린이 바로 고리라는 조지아의 작은 도시 출신이기 때문이다. 이곳에는 그의 생가와 함께 거대한 스탈린 박물관이 자리 잡고 있는데, 이를 대하는 현지인들의 시선은 무척이나 복잡 미묘해 보였다. 조지아는 러시아의 지배와 간섭을 치가 떨리게 싫어하면서도, 정작 그 무시무시한 소련 제국을 쥐락펴락했던 최고 권력자가 자국 출신이라는 사실에 일부 기성세대들은 일종의 비틀린 자부심을 품고 있는 듯했다. 수많은 사람을 숙청한 피도 눈물도 없는 폭군과 ‘개천에서 용 난’ 동네의 자랑거리 사이에서 빚어지는 이 기괴한 아이러니는, 캅카스의 복잡한 역사를 다시 한번 실감케 했다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛰️ 하나의 산맥 아래, 전혀 다른 현재</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          캅카스 산맥이라는 거대한 지붕 아래, 한때 소련이라는 하나의 붉은 깃발로 묶여 있던 세 나라. 하지만 거대한 제국의 그림자가 걷힌 지금, 이들은 완전히 다른 모습으로 각자의 현재를 살아가고 있다. 넘쳐나는 오일 머니로 번쩍이는 미래 도시를 짓고 있는 아제르바이잔, 첩첩산중의 대자연 속에서 묵묵히 자신들만의 고유한 시간과 신앙을 지켜가는 아르메니아, 그리고 아픈 역사를 뒤로한 채 향긋한 와인 잔을 부딪치며 낭만을 노래하는 조지아까지. 과거의 상처와 얽히고설킨 정세를 품고 있으면서도 저마다의 눈부신 색깔로 새로운 내일을 써 내려가는 이 다채로운 세 나라는, 내 추억 속 가장 강렬하고도 매혹적인 페이지를 자리하고 있다. 
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          Between the Black Sea and the Caspian Sea lies a vast natural wall that cuts across the boundary between Europe and Asia. In myth, it was the stage of the punishment where Prometheus, chained for stealing fire for humankind, had his liver devoured by an eagle. That place is the Caucasus Mountains. Cradled within this magnificent range are the three countries that star in this travel essay: Azerbaijan, Armenia, and Georgia.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🧭 Close Together, Yet Completely Different</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Geographically, these three countries sit right next to one another, and all of them once belonged to the Soviet Union. But once you actually open the lid, they radiate completely different charms in religion, language, and atmosphere. If you know even a little about their tangled relationships, the trip becomes far more interesting. As former Soviet republics, each has a complicated relationship with Russia. Georgia is strongly anti-Russian, to the point that it fought a direct war with Russia in 2008 and severed diplomatic ties. Armenia, surrounded by threats from neighboring countries, long treated Russia as a kind of security shield, but recently even that relationship has been growing cold. Azerbaijan, by contrast, has been able to follow a fairly independent course thanks to its abundant oil wealth and the freedom that comes from not having to mind Russia quite as much.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⚔️ A Bitter Feud Etched into the Border</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Above all, the most troublesome issue is the mortal enmity between Armenia and Azerbaijan. The two countries have shed blood for a long time over territorial disputes, and if you zoom in on a map, their bizarre border is enough to make you doubt your own eyes. In the middle of Azerbaijani territory, there are island-like areas inhabited by Armenians, while in and beyond Armenian territory there are also scattered fragments of Azerbaijani land. Because of this complicated patchwork, as though the two had grabbed each other by the collar and torn away pieces of one another's clothes, the border between them is completely closed. Naturally, travelers cannot move directly between the two countries either. After visiting Azerbaijan, we passed through Georgia and then entered Armenia, and just seeing the Armenian immigration officers thoroughly question us about why we had gone there when they spotted the Azerbaijani stamp in our passports was enough to make us feel the full tension between the two countries.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💸 Heavenly Prices, Hellish Roads</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Politically, this region may be fierce and forbidding, but for travelers the three Caucasus countries are a blessed paradise. Their most lethal charm is their extraordinary value for money. A meal for two at a stylish high-end restaurant costs less than 20 dollars. But there is also a crippling downside to traveling through the Caucasus three. In all three countries, once you move even a little beyond the glittering city centers, the roads become shockingly poor. Huge potholes yawn across the asphalt as if bombs had gone off, and many are not even properly repaired. If you drove while intoxicated by the scenery outside the window and failed to stay alert, it was easy to get jolted so hard that not only the car but your soul felt violently shaken.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏙️ Baku's White Skyscrapers and Fiery Nights</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The moment you enter Baku, the capital of oil-rich Azerbaijan, overwhelming modern buildings soaked in the scent of capitalism greet the traveler. The streets were spotless, and the buildings shone a dazzling white, making the entire city feel like one enormous gallery. Actual galleries full of artistic sensibility were also easy to spot throughout the city. At night, the gigantic Flame Towers visible from almost anywhere in the city blaze with brilliant red light and create a spectacular skyline. The towers symbolically express Azerbaijan's identity as the Land of Fire, enriched by oil and natural gas. What makes the city truly attractive is that right beside these gleaming white skyscrapers, the old city of tight alleyways and defensive walls has been perfectly preserved. The sight of the path once walked by Silk Road merchants a thousand years ago sharing a single frame with a modern forest of high-rises feels strikingly unusual.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐄 Armenia's Mountain Roads, Ruled by Cows</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Armenia, by contrast, is a country of deep mountains, with most of its land made up of highlands more than 1,000 meters above sea level. As you wind along the mountain roads, sooner or later you come face to face with the true rulers of the road: local herds of cows. When you encounter them leisurely swishing their tails and taking over the entire two-lane road as they stroll along at their own pace, a human car horn is utterly useless. All you can do is stop the car and wait in complete humility until their bovine majesties finish dining and kindly make way. It would be understandable to get angry at these shameless creatures for blocking the road during a busy schedule, but we had an excellent method of revenge. That evening, we went to a restaurant and happily chewed and swallowed shashlik, beef skewers grilled crisp over charcoal. Once the sorrow of being blocked on the road during the day had been repaid with rich meat juices, the majestic mountain scenery of the Caucasus somehow felt even more beautiful.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍷 Georgia, a Sanctuary of Food and Wine</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Lastly, Georgia is a holy land of food and wine. Even in harsh Russia, Georgian restaurants are known as dependable high-end places to eat. Khachapuri, freshly baked bread topped with cheese and egg yolk and mixed together before eating, and khinkali, giant traditional dumplings bursting with rich meat juices like a waterfall, still make my mouth water. On top of that, Georgia takes pride in being the birthplace of the world's first wine. Every household seemed to make wine according to its own secret method, and it was a paradise of wine where, if you exchanged greetings with the locals and grew even a little friendly, you could receive generous amounts of homemade wine for free.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🗿 Stalin's Shadow in Georgia</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Another intriguing point that can never be left out of a trip to Georgia is Stalin. The infamous Soviet dictator Stalin was from Gori, a small city in Georgia. There stands a huge Stalin Museum along with his birthplace, and the local gaze toward it seemed extremely complex and ambiguous. Georgia shudders with hatred toward Russian rule and interference, yet some of the older generation seemed to harbor a kind of twisted pride in the fact that the supreme ruler who once manipulated that terrifying Soviet empire was a son of their own country. This grotesque irony, born between a merciless tyrant who purged countless people and the local pride of a man who rose from humble origins, once again made the complicated history of the Caucasus feel vividly real.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛰️ Different Presents Beneath One Vast Roof</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Beneath the giant roof of the Caucasus Mountains stand three countries that were once tied together under the single red flag of the Soviet Union. But now that the shadow of that great empire has lifted, they are living out their own present in completely different forms. Azerbaijan is building a gleaming future city with overflowing oil money. Armenia quietly preserves its own time and faith amid the grandeur of deep mountain nature. Georgia, leaving painful history behind, sings of romance while clinking fragrant glasses of wine. Carrying past wounds and tangled geopolitics within them, yet writing tomorrow in their own dazzling colors, these richly varied three countries occupy one of the most intense and captivating pages in my memory.
        </p>
      `}},{id:"eurasia-travel-5",title:{ko:"카자흐스탄, 키르기스스탄",en:"Kazakhstan and Kyrgyzstan"},subtitle:{ko:"중앙아시아의 두 거인",en:"The Two Giants of Central Asia"},imageUrl:"https://central-asia.guide/wp-content/uploads/2021/07/Altyn_Arashan_Valley_Kyrgyzstan-1024x683.jpg",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
캅카스의 세 국가는 공통적으로 나이가 많은 사람들은 러시아어를 잘 알지만 젊은 세대로 갈수록 점점 러시아어를 잘 모르고 서투르다. 그렇다 하더라도 언어의 뿌리가 비슷한지, 그동안 배운 러시아어와 손짓 발짓을 동원하면 그나마 의사소통이 되었다. 어쨌든 영어보다는 훨씬 나았다. 이렇게 캅사스 3국이 어떻게든 러시아어에서 벗어나 모국어의 정체성을 찾으려는 묘한 긴장감을 보였다면, 중앙아시아의 카자흐스탄과 키르기스스탄은 결이 다르다. 젊은 세대를 포함한 거의 모든 국민이 모국어와 러시아어를 완벽하고 유창하게 구사하는 진정한 이중언어 국가들이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👀 한국인과 놀라울 만큼 닮은 얼굴들</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
이 지역을 여행하며 느낀 또 하나의 흥미로운 점은 사람들의 친숙한 생김새였다. 과거 몽골 제국의 거대한 영토였던 탓인지, 현지인들의 외모는 한국인과 놀라울 정도로 쏙 빼닮아 있었다. 검은 머리에 갈색 눈, 동양적인 이목구비 덕분에 우리 부부는 금세 현지 풍경 속에 위화감 없이 녹아들었다. 오죽하면 두 나라를 여행하는 내내 가장 많이 들은 말이 "당신 카자흐스탄 사람이냐"는 질문이었을까. 내가 어설픈 러시아어로 입을 떼기 전까지는 그 누구도 나를 이방인으로 의심하지 않았다. 재미있는 건 아내를 향한 시선이었다. 이목구비가 뚜렷해 약간 이국적으로 생긴 아내와 걷고 있으면, 현지인들은 우리를 보며 "출세한 카자흐스탄 남자가 예쁜 외국인 아내를 데리고 다닌다"며 부러운 눈길을 보냈다. 졸지에 자수성가한 현지인이 되어 묘하게 으쓱해지는 웃지 못할 해프닝이었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🛢️ 거대한 땅, 거대한 자원, 카자흐스탄</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
먼저 카자흐스탄은 영토가 엄청나게 넓다. 세계에서 9번째로 큰 나라이자 중앙아시아의 압도적인 맹주이며, 기름이 펑펑 솟아나는 유수의 산유국이다. 이런 거대한 경제 규모와 영토에도 불구하고 정치, 문화적으로는 여전히 러시아의 짙은 그늘 아래 있는 듯한 인상을 받았다. 우리가 방문했을 당시만 해도 물가가 믿을 수 없을 만큼 저렴해서 매 끼니를 사치스럽게 즐겼는데, 최근에는 물가가 훌쩍 뛰었다고 하니 묘한 격세지감이 든다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏔️ 한여름 도시 너머의 천산산맥</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
우리는 그 거대한 대륙을 다 보지는 못하고 알마티라는 도시만 방문했다. 사과의 고향이라는 뜻을 가진 알마티는 가로수가 울창한 깨끗한 현대 도시이면서도, 도시 어디서나 천산산맥의 장엄한 만년설을 병풍처럼 볼 수 있는 매력적인 곳이었다. 우리가 알마티를 방문한 것은 한여름이었다. 도심은 반팔을 입고 걸어도 땀이 흘러내릴 만큼 뜨거운 여름의 열기로 가득했지만, 고개를 들어 앞을 보면 새하얀 눈이 덮인 거대한 산맥이 마치 비현실적인 합성 사진처럼 도시를 굽어보고 있었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛪ 시장과 성당이 품은 알마티의 생기</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
도심 한가운데의 볼거리도 훌륭하다. 울창한 판필로프 공원 안에는 쇠못을 단 하나도 사용하지 않고 오직 목재로만 조립해 만들었다는 동화 같은 색감의 젠코프 러시아 정교회 대성당이 웅장하게 서 있다. 또한, 중앙아시아 사람들의 날것 그대로의 활기를 느끼고 싶다면 현지 최대 시장인 그린 바자르를 빼놓을 수 없다. 산더미처럼 쌓인 신선한 과일과 향신료, 그리고 유목민의 소울푸드인 말고기와 각종 치즈 냄새가 뒤섞인 시장통은 처음엔 정신이 없지만 천천히 뿜어내는 매력에 나 또한 서서히 젖어 들었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😊 유독 더 닮은 나라, 키르기스스탄</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
카자흐스탄이 거대한 규모로 여행자를 압도한다면, 이웃 나라 키르기스스탄은 좀 더 포근하고 신비로운 매력을 간직했다. 키르기스스탄 사람들은 한국 사람들과 유독 닮았는데 이에 짧은 에피소드 하나를 소개하고자 한다. 나는 러시아에 오기 전 경기도 이천에 있는 국방어학원에서 공부를 하며 키르기스스탄를 사귄 적이 있었다. 하루는 그 친구와 이천 시내를 걷던 중에 친구의 태권도 사범님을 만났는데, 나를 가리키며 “고향에서 친구가 왔나봐?”라고 말씀하셨다. 내가 한국 사람이라고 유창하게(?) 말하자, “친구는 한국말을 어디서 배웠는지 잘하네!”라고 하셨다. 나는 날 때부터 한국 사람이라며 주민등록증까지 보여주고 나서야 사범님은 의심의 눈초리를 거두셨다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌊 호수라기엔 너무 거대한 이식쿨</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
이렇듯 우리와 닮은 사람들의 나라, 키르기스스탄 한가운데 보석처럼 박혀 있는 거대한 호수, 이식쿨은 이 나라의 상징이다. 우리는 렌터카를 빌려 이 호수를 한 바퀴 도는 야심 찬 로드트립을 계획했는데, 도착하자마자 그 압도적인 규모에 입을 다물지 못했다. 지평선 끝이 보이지 않고 짠내 섞인 파도가 찰랑거리는 모습은 호수가 아니라 완벽한 바다였다. 호수변 백사장에서는 따뜻한 옥수수와 수박을 바구니에 담아 파는 아이들이 유독 많았다. “가랴차야 꾸꾸루자 (뜨거운 옥수수)!”를 외치며 끈질기게 호객 행위를 하던 아이들의 카랑카랑한 목소리가 아직도 귓가에 생생하다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤝 길 위에서 만난 가장 깊은 인상, 사람들</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
이 거대한 대자연 속에서 우리가 마주한 가장 깊은 인상은 다름 아닌 사람들의 따뜻한 정이었다. 키르기스스탄을 여행하던 중, 렌터카 바퀴가 갓길 옆 웅덩이로 푹 빠져 오도 가도 못하는 아찔한 상황이 벌어졌다. 당황해서 땀을 뻘뻘 흘리고 있는데, 마침 흙먼지를 날리며 지나가던 낡은 봉고차 한 대가 우리 앞에 멈춰 섰다. 차 문이 열리더니 사람들이 우르르 쏟아져 나와 마치 자기 일처럼 차를 밀고 당겨 기어코 구덩이에서 빼내 주었다. 고맙다고 연신 고개를 숙이는 우리에게 그들은 대수롭지 않게 씩 웃으며, 오늘 자기들 집에서 파티가 열리니 꼭 오라며 뜻밖의 다정한 초대를 건넸다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍽️ 낯선 땅에서 받은 포근한 초대</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
놀랍게도 카자흐스탄과 키르기스스탄에서는 이런 뜬금없고 훈훈한 초대가 아주 흔한 일상이었다. 우리에게 차를 빌려준 렌터카 업체 아저씨도 저녁에 고기를 구울 테니 오라고 스스럼없이 손짓했고, 길거리에서 나에게 카자흐스탄 사람이냐고 묻던 낯선 이조차 저녁 식사에 선뜻 우리를 초대했다. 한국에서 엄청나게 멀리 떨어진 낯선 땅에서 우리와 놀라울 정도로 쏙 빼닮은 사람들과, 곤경에 처한 이방인에게 스스럼없이 다가와 선뜻 저녁 식탁의 한자리를 내어주는 그들의 넉넉한 환대 덕분에 이 여행은 그 어느 여행보다 더욱 포근하다고 느껴졌다.
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
In the three Caucasus countries, older people generally speak Russian well, but the younger the generation, the less comfortable and fluent they are in it. Even so, perhaps because the roots of the languages are somewhat related, I could still manage basic communication by combining the Russian I had learned with hand gestures and body language. In any case, it worked far better than English. If the three Caucasus countries seemed to carry a curious tension as they tried to break away from Russian and reclaim the identity of their native languages, Kazakhstan and Kyrgyzstan in Central Asia felt different. They are true bilingual countries where almost everyone, including the younger generations, speaks both the national language and Russian perfectly and fluently.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">👀 Faces Strikingly Similar to Ours</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
Another fascinating thing I felt while traveling through this region was how familiar the people looked. Perhaps because this land had once been part of the vast Mongol Empire, the appearance of the locals was astonishingly similar to that of Koreans. Black hair, brown eyes, and East Asian features allowed my wife and me to blend into the local scenery almost instantly without any sense of awkwardness. The phrase I heard most often throughout both countries was, "Are you Kazakhstani?" Until I opened my mouth in clumsy Russian, no one seemed to suspect that I was an outsider. What made it especially amusing was the way people looked at my wife. When I walked beside my wife, whose well-defined features made her look a little more exotic, locals would gaze at us with envy, as though thinking, "That successful Kazakhstani man is walking around with a pretty foreign wife." It was an absurd but funny little incident that left me oddly puffed up as an accidental self-made local.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🛢️ Vast Land, Vast Resources, Kazakhstan</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
To begin with, Kazakhstan is enormous. It is the ninth largest country in the world, the overwhelming leader of Central Asia, and one of the major oil-producing nations where petroleum gushes from the ground. Yet despite that massive territory and economy, I still had the impression that politically and culturally it remained under Russia's deep shadow. When we visited, prices were unbelievably cheap, and we indulged luxuriously at every meal. Hearing that prices have risen sharply in recent years gives me a strange sense of how much time has passed.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏔️ The Tian Shan Beyond the Summer City</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
We did not see that vast country in full, and visited only the city of Almaty. Almaty, whose name means the hometown of apples, was an attractive place: a clean modern city lined with leafy trees, yet one where the majestic, snow-covered Tian Shan mountains could be seen from anywhere as if they were a painted screen. We visited Almaty in the height of summer. The city center was filled with such oppressive heat that sweat rolled down even while walking in short sleeves, yet whenever you lifted your head and looked ahead, a massive white mountain range covered in snow loomed over the city like an unreal composited photograph.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛪ Almaty's Cathedral and Bazaar</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
The sights in the middle of the city are excellent as well. In the lush Panfilov Park stands the grand Zenkov Russian Orthodox Cathedral, a structure with fairy-tale colors said to have been assembled entirely from wood without the use of a single nail. And if one wants to feel the raw, unfiltered energy of Central Asian life, the Green Bazaar, the city's largest market, cannot be missed. At first the market street, with its mountain-like piles of fresh fruit, spices, and the mingled smells of horse meat and all kinds of cheese, the soul food of nomads, feels overwhelming. But slowly, I too found myself soaking into its steadily unfolding charm.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">😊 Kyrgyzstan, Even More Strangely Familiar</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
If Kazakhstan overwhelms the traveler with sheer scale, neighboring Kyrgyzstan holds a softer and more mysterious charm. Kyrgyz people look especially similar to Koreans, and I want to share one short episode related to that. Before coming to Russia, I had once become acquainted with someone from Kyrgyzstan while studying at the Defense Language Institute in Icheon, Gyeonggi Province. One day, while walking through downtown Icheon with that friend, we ran into his taekwondo instructor, who pointed at me and said, "It looks like a friend from your hometown has come." When I fluently(?) replied that I was Korean, he said, "Wow, your friend speaks Korean really well. Where did he learn it?" Only after I insisted that I had been Korean from birth and even showed him my resident registration card did he finally drop his suspicious gaze.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌊 Issyk-Kul, Too Vast to Be Just a Lake</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
In this country of people who look so much like us, the giant lake set like a jewel in the middle of Kyrgyzstan, Issyk-Kul, is its very symbol. We rented a car and planned an ambitious road trip circling the lake, and the moment we arrived, we were struck speechless by its scale. The horizon was nowhere in sight, and the salty-smelling waves lapped against the shore so convincingly that it did not feel like a lake at all, but like a perfect sea. Along the sandy shore there were especially many children selling warm corn and watermelon from baskets. Even now, I can still vividly hear their ringing voices as they persistently cried out, "Goryachaya kukuruza! Hot corn!"
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🤝 The Deepest Impression: People's Warmth</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
In the midst of all this immense nature, the most lasting impression we encountered was not the scenery but the warmth of the people. While traveling in Kyrgyzstan, our rental car wheel suddenly sank deep into a puddle beside the roadside, leaving us in a frightening situation where we could neither move forward nor backward. We were panicking and dripping with sweat when an old van, kicking up clouds of dust, happened to stop in front of us. The door swung open, and a whole group of people poured out, pushing and pulling our car as though it were their own problem until they finally got it out of the hole. As we bowed repeatedly in thanks, they only smiled casually and told us that there was a party at their house that day and that we absolutely had to come, offering us an unexpectedly warm invitation.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍽️ Warm Invitations on Distant Soil</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
Remarkably, in Kazakhstan and Kyrgyzstan these sudden, heartwarming invitations were an ordinary part of daily life. The man from the rental car company who had lent us the vehicle also waved us over without hesitation and told us to come by in the evening because he would be grilling meat. Even a stranger on the street, who had asked whether I was Kazakhstani, readily invited us to dinner. In a land unimaginably far from Korea, among people who looked astonishingly like us and who approached strangers in distress without the slightest hesitation to offer them a seat at their dinner table, we experienced such generous hospitality that this trip felt warmer than almost any other I have taken.
        </p>
      `}},{id:"eurasia-travel-6",title:{ko:"이집트",en:"Egypt"},subtitle:{ko:"러시아인의 최애 여행국",en:"The Russians' Favorite Travel Destination"},imageUrl:"https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          이집트는 우리에게는 영화 ‘미라’의 배경으로 친숙한 곳이자, 피라미드와 스핑크스로 대변되는 아득하고 찬란한 고대 역사를 품은 신비의 나라다. 하지만 러시아 사람들에게 이집트는 조금 다른 의미로 다가온다. 일 년의 절반 이상이 춥고 흐린 날이 대부분인 러시아인들에게 일 년 내내 따뜻한 햇살과 에메랄드빛 홍해가 펼쳐진 이집트는 그야말로 지상 낙원이기 때문이다. 소련 붕괴 이후 주머니 사정이 넉넉해진 러시아인들은 저렴하고 시설 좋은 이집트의 휴양지로 물밀듯 몰려갔다. 1990년대부터 러시아인들이 많이 방문하는 휴양지에서는 길거리 표지판조차 러시아어로 적혀 있고 상인들이 러시아어로 호객을 할 정도로 러시아인의 국민 앞마당이나 다름없는 곳이 되었다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✈️ 꽉 막힌 하늘길을 돌아가는 여정</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 내가 모스크바에서 지내던 시절에는 러시아에서 이집트로 가는 하늘길이 꽉 막혀 있었다. 2015년 말 시나이반도 상공에서 발생한 끔찍한 러시아 여객기 폭탄 테러 사건 때문에 두 나라 간의 직항 노선이 전면 중단되었기 때문이다. 이집트의 따뜻한 바다는 영영 못 보나 싶었는데, 기회는 우연히 찾아왔다. 비자 문제로 우크라이나에 잠시 머물던 중 길거리에서 이집트 휴양지 전단지를 발견했다. 여전히 우크라이나와 이집트 사이의 하늘 길은 열려 있었다. 홀린 듯이 그 길로 해당 전단지의 여행사를 방문했고, 겨울에 첫 방문을 계획했다. 남들이 모스크바에서 오들오들 떠는 동안 홍해의 휴양지에서 수영복 차림으로 시원한 맥주를 들이킬 생각을 하니 벌써부터 몸이 달았다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏖️ 홍해의 휴양지와 살벌한 카이로행</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          첫 목적지는 시나이반도의 최남단 휴양지, 샤름엘셰이크였다. 올인클루시브 호텔을 예약한 덕분에 모스크바에서 잔뜩 얼어붙고 긴장했던 몸을 완벽하게 녹일 수 있었다. 휴양지임에도 불구하고 물가가 워낙 저렴해서 둘이서 고급 마사지 숍에서 스파와 마사지를 받는 호사를 부렸다. 며칠 푹 쉬다가 이틀짜리 카이로 투어 상품을 끊어 버스에 올랐는데, 수도로 이동하는 내내 도로 분위기가 꽤나 살벌했다. 삼엄한 무장 경비와 황량한 사막을 뚫고 도착한 카이로에서는 박물관과 스핑크스, 피라미드를 차례로 돌았다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐪 피라미드 앞에서 벌어지는 치열한 흥정</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          카이로 외곽 기자 고원에 우뚝 솟은 피라미드들은 그야말로 압도적이었다. 특히 가장 거대한 쿠푸왕의 대피라미드 앞에 서면, 수천 년 전 고대 이집트인들의 집념과 거대한 스케일에 절로 턱이 벌어질 지경이다. 이 거대한 무덤들을 제대로 즐기려면 현지인처럼 터번을 두르고 낙타 등에 올라타 사막을 거니는 것을 추천한다. 다만, 이곳의 호객 행위는 상상을 초월할 정도로 지독하니 정신을 바짝 차려야 한다. 무언가를 하기 전에는 무조건, 확실하게 가격부터 완벽히 흥정을 끝내야 한다. 그렇지 않으면 지갑에서 돈이 줄줄 새어 나가는 마법을 맛보게 된다. 시도 때도 없이 손을 벌리고 팁을 요구한다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📸 인생샷과 맞바꾼 팁의 전쟁</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          스핑크스와 피라미드 앞에서도 방심은 금물이다. 어김없이 웬 이집트인이 친근하게 다가와 사진을 찍어주겠다며 은근슬쩍 카메라를 달라고 손을 내민다. 뻔한 수작인 걸 알면서도 주변을 둘러보면, 그들이 다른 관광객들을 상대로 스핑크스에 뽀뽀를 시키거나 피라미드를 손가락으로 집어 올리는 등 엄청나게 재미있는 포즈를 연출해 주고 있다. 진짜 평생 남을 '인생샷'을 찍어주고 있으니 그 유혹을 쉽사리 거절하기가 어렵다. 
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          홀린 듯 카메라를 넘겨주면 그들은 바닥에 눕고 구르며 열정적인 사진작가로 빙의한다. 문제는 셔터 소리가 멈춘 직후다. 예술혼을 불태운 그들은 아주 당당하고 노골적으로 팁을 요구한다. 물론 끝까지 안 주고 버틸 수도 있겠지만, 방금 전까지 함께 깔깔대며 명작을 남긴 그 유쾌한 분위기 속에서 돈을 안 주고 매몰차게 돌아서기란 참으로 어려운 구조다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍕 피라미드를 바라보며 즐기는 피자 한 조각</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          기자의 피라미드를 방문한다면 절대 놓치지 말아야 할 엄청난 꿀팁이 하나 있다. 피라미드 매표소 바로 앞에는 다른 이집트 음식점들 사이에 피자헛이 하나 자리 잡고 있다. 이 피자헛 테라스에 앉아 피자와 함께하는 스핑크스와 피라미드의 야경은 말로 다 할 수 없을 만큼 굉장하다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ 고대 이집트의 심장, 룩소르로 향하는 길</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          첫 이집트의 강렬하고 달콤한 기억 덕분에 두 번째 방문은 아예 자유여행으로 판을 키웠다. 이번에는 지난번에 가지 못했던 홍해 연안의 후르가다 리조트에서 며칠 푹 쉰 뒤, 고대 이집트의 수도였던 룩소르로 향했다. 가이드 없이 단둘이 시외버스를 타고 후르가다에서 룩소르로 넘어가는 길은 지난번 카이로행보다 한술 더 떠서 살벌함의 극치였다. 도시를 넘어갈 때마다 마치 엄격한 국경 검문소처럼 총을 든 경비대가 버스를 세우고 삼엄하게 검문을 했다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚖 택시 한 대로 즐기는 파라오의 유산</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 룩소르는 그 모든 긴장감을 기꺼이 감수할 만큼 엄청난 곳이었다. 룩소르에 도착한 우리는 택시를 한 대 통째로 대절했다. 하루 종일 기사님이 운전해 주는 택시를 타고 점심 식사까지 포함해 쓴 돈이 우리 돈으로 고작 2~3만 원 남짓이었으니, 가성비라는 단어로는 턱없이 부족하다. 택시 기사 아저씨는 투탕카멘을 비롯한 파라오들의 무덤이 모여 있는 웅장한 왕가의 계곡부터 룩소르의 알짜배기 관광 명소들을 아주 편안하게 척척 데려다주었다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛽ 물보다 싼 기름, 이집트의 가성비</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          기사님이 주유소에 들렀을 때 기름 가격을 보았다. 1리터에 약 300원이었다. 분명 방금 편의점에서 500 mL 생수를 500원에 샀는데, 기름이 물보다 싼 나라가 있다더니 이집트가 그랬다. 우스갯소리로 이집트에서는 주유소에서 기름을 넣을 때, 차량 주유구가 아닌 차량 밖에 기름을 한바탕 뽑아내고 나서야 ‘아, 잘 나오는구만!’하고 주유를 시작한다는 말이 있다. 한국에서는 기름 한 방울 아까워서 다 넣고 탈탈 털며 더 나올 게 없나 살피던 과거의 나를 떠올리며 세상 허무함을 느꼈다. 
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌅 러시아인의 진짜 비결, 이집트의 따뜻한 바닷바람</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아인들은 칙칙하고 매서운 눈보라 속에서 그저 이 악물고 살아남고 있던 게 아니었다. 일 년 내내 따사로운 햇살과 에메랄드빛 홍해가 찰랑거리는 완벽한 도피처, 이집트라는 기가 막힌 피난처를 등 뒤에 숨겨두고 있었던 것이다. 매서운 동장군 앞에서도 여유를 잃지 않던 그들의 진짜 비결은 독한 보드카도 있지만, 언제든 훌쩍 떠날 수 있는 이집트의 따뜻한 바닷바람이었음을.
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          Egypt is a place familiar to us as the setting of the movie 'The Mummy,' a land of mystery embracing an ancient and brilliant history represented by the Pyramids and the Sphinx. However, for Russians, Egypt holds a slightly different meaning. For those who face cold and cloudy days for more than half the year, Egypt, with its year-round warm sunshine and emerald-colored Red Sea, is truly a paradise on earth. After the collapse of the Soviet Union, Russians with growing pockets flocked to Egypt's affordable yet high-quality resorts. Since the 1990s, in resorts popular with Russians, even street signs are written in Russian, and merchants solicit in Russian, making it almost like a national backyard for them.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">✈️ A Journey Around Blocked Skies</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          But during my time in Moscow, the sky route from Russia to Egypt was tightly blocked. Direct flights between the two countries had been completely suspended due to a terrible Russian passenger plane bombing over the Sinai Peninsula in late 2015. I thought I might never see the warm waters of Egypt, but the opportunity came by chance. While staying in Ukraine for a while due to visa issues, I found a flyer for an Egyptian resort on the street. The sky route between Ukraine and Egypt was still open. As if possessed, I visited the travel agency on the flyer and planned my first visit in winter. The thought of drinking cold beer in a swimsuit at a Red Sea resort while others were shivering in Moscow already made my body tingle with excitement.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏖️ Red Sea Resorts and the Grim Path to Cairo</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The first destination was Sharm El Sheikh, a resort at the southernmost tip of the Sinai Peninsula. Thanks to booking an all-inclusive hotel, I was able to perfectly melt my body, which had been frozen and tense in Moscow. Despite being a resort, the cost of living was so low that we indulged in the luxury of getting spas and massages at a high-end massage shop. After resting for a few days, I hopped on a bus for a two-day Cairo tour, but the atmosphere on the road while moving to the capital was quite grim. Passing through heavy armed guards and the desolate desert, we arrived in Cairo and visited the museum, the Sphinx, and the Pyramids in turn.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🐪 Fierce Haggling in Front of the Pyramids</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The pyramids towering on the Giza Plateau outside Cairo were simply overwhelming. Standing in front of the Great Pyramid of Khufu, the largest of them all, one's jaw naturally drops at the persistence and grand scale of the ancient Egyptians thousands of years ago. To properly enjoy these giant tombs, I recommend wrapping a turban like a local and walking through the desert on a camel's back. However, be warned that the solicitation here is persistent beyond imagination, so you must stay alert. Before doing anything, you must unconditionally and clearly finish haggling over the price. Otherwise, you will experience the magic of money leaking out of your wallet. They reach out and demand tips at every turn.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">📸 The Battle of Tips Exchanged for Life Shots</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Even in front of the Sphinx and Pyramids, you cannot let your guard down. Invariably, an Egyptian will approach you friendly and reach out his hand to take your camera, saying he will take a picture for you. Even though it's a predictable trick, if you look around, they are creating incredibly fun poses for other tourists, like making them kiss the Sphinx or pick up the Pyramids with their fingers. Since they are taking 'life shots' that will truly last a lifetime, it's hard to easily refuse the temptation.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Once you hand over the camera as if possessed, they transform into passionate photographers, lying and rolling on the ground. The problem is right after the shutter sound stops. Having burned their artistic spirit, they boldly and overtly demand a tip. Of course, you could hold out until the end, but in that pleasant atmosphere where you just laughed together and left a masterpiece, it's a structure where it's truly difficult to turn away coldly without giving money.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🍕 A Slice of Pizza with a Pyramid View</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          If you visit the Pyramids of Giza, there is one incredible tip you must not miss. Right in front of the Pyramid ticket office, there is a Pizza Hut nestled among other Egyptian restaurants. Sitting on this Pizza Hut terrace, the night view of the Sphinx and Pyramids with pizza is so magnificent that words cannot describe it.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏛️ To Luxor, the Heart of Ancient Egypt</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          Thanks to the intense and sweet memories of the first Egypt trip, I expanded the second visit to an independent trip. This time, after resting for a few days at a resort in Hurghada on the Red Sea coast, which I couldn't visit last time, I headed to Luxor, the capital of ancient Egypt. The road from Hurghada to Luxor by intercity bus, taken by just the two of us without a guide, was the height of grimness, even more so than the previous trip to Cairo. Every time we crossed into a new city, an armed guard unit stopped the bus and conducted a strict inspection, like at a strict border crossing.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚖 Pharaoh's Legacy Enjoyed with a Single Taxi</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          But Luxor was a place incredible enough to willingly endure all that tension. Arriving in Luxor, we chartered a whole taxi. The money we spent on a taxi driven by a driver all day, including lunch, was only about 20 to 30 dollars in our money, so the word 'cost-effectiveness' is woefully insufficient. The taxi driver took us comfortably and efficiently to all the core tourist attractions of Luxor, from the magnificent Valley of the Kings, where the tombs of pharaohs including Tutankhamun are gathered.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛽ Fuel Cheaper Than Water: Egypt's Value</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I saw the price of oil when the driver stopped at a gas station. It was about 0.3 dollars per liter. I had just bought 500 mL of bottled water at a convenience store for 0.5 dollars, and although I had heard of countries where oil is cheaper than water, Egypt was exactly that. There is a joke that in Egypt, when putting oil at a gas station, they first spray a bunch of oil outside the car's fuel inlet and only after saying, 'Oh, it's coming out well!' do they start refueling. Recalling my past self in Korea, who felt every drop of oil was precious and shook it out to see if any more would come, I felt the world's futility.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌅 The Russians' Real Secret: Egypt's Warm Sea Breeze</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The Russians were not just gritting their teeth and surviving in the gloomy and fierce blizzard. They had a perfect escape, a wonderful refuge called Egypt, where warm sunshine and the emerald Red Sea shimmered all year round, hidden behind their backs. The real secret to their leisure even in the face of the bitter Old Man Winter was not only strong vodka but the warm sea breeze of Egypt, where they could fly away at any time.
        </p>
      `}}]},dy={id:"epilogue",title:{ko:"에필로그",en:"Epilogue"},description:{ko:"여정을 마치며 남기는 마지막 이야기",en:"The final reflection at the end of the journey"},isSinglePost:!0,isActive:!0,posts:[{id:"epilogue-1",title:{ko:"에필로그",en:"Epilogue"},subtitle:{ko:"당신도 할 수 있다",en:"You Can Do It Too"},imageUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          2017년 여름, 드디어 그립고 그립던 고국 땅을 밟았다. 2014년 여름에 홀연히 떠났으니 꼬박 3년 만의 귀환이었다. 내가 이방인으로 떠돌던 그 시간 동안, 한국은 여러모로 참 많이도 변해 있었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏙️ 돌아와 보니 달라진 풍경</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          내가 러시아에 있는 3년 동안 한국에서는 헌정 사상 초유의 대통령 탄핵 사태가 벌어졌고, 이세돌 9단과 알파고의 대국으로 인공지능이 인간을 이긴 충격적인 사건도 일어났다. 게다가 신선한 공기를 들이마시는 게 당연했던 예전과 달리, 불과 3년 사이에 매일 아침 미세먼지 수치를 확인하고 마스크를 챙겨야 할 정도로 미세먼지가 심각한 수준으로 변해버렸다. 동네에는 못 보던 건물이 생겼고, 자주 가던 가게들이 없어지고 그 자리에 새로운 가게들이 들어섰다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          무엇보다 귀국 후 발령을 받은 국군화생방방호사령부 창밖으로 서울 하늘을 찌를 듯 솟아오른 롯데월드타워가 눈에 들어왔을 때의 묘한 기분이란. 내가 한국을 뜰 때만 해도 뼈대만 앙상하게 올라가고 있던 그 건물이 어느새 번쩍이는 위용을 자랑하며 스카이라인을 완전히 바꿔놓은 모습을 보니, 비로소 내가 생각보다 긴 시간을 떠나 있었다는 사실이 실감 났다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛵ 테세우스의 배가 된 나</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          하지만 3년이라는 세월 동안 훌쩍 변해 버린 건 비단 건물, 풍경, 나라 사정뿐만이 아니었다. 익숙한 고국의 풍경 속에 다시 던져진 나 스스로를 가만히 들여다보니, 나 역시 바뀌어 있었다. 테세우스의 배를 아는가. 배의 모든 낡은 부품과 널빤지를 새것으로 교체한다면, 과연 그 배는 처음 출항했던 그 배와 같은 배라고 부를 수 있을까 묻는 오래된 역설 말이다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          러시아의 매서운 눈보라를 견디고, 유라시아 대륙의 낯선 국경들을 넘나드는 3년 동안 내 안의 낡은 조각들도 하나둘 뜯겨 나갔다. 우물 안 개구리 같던 좁은 시야는 세상의 거대함과 다양성으로 대체되었고, 나와 다른 것을 배척하던 옹졸함은 낯선 이들의 따뜻한 환대를 받으며 다름을 기꺼이 포용하는 여유로 바뀌어 있었다. 무엇보다 ‘내가 과연 할 수 있을까’라며 주저하던 두려움의 널빤지들은, ‘일단 마음먹고 무식하게라도 들이받으면 어떻게든 된다’는 아주 단단하고 뻔뻔한 배짱으로 완벽하게 교체되어 있었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚀 당신도 할 수 있다</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          한국을 떠나던 2014년의 나와 2017년에 돌아온 나는 겉보기엔 주민등록번호가 같은 동일 인물일지 몰라도, 내면을 이루는 조각들은 유라시아 대륙을 누비며 얻은 새로운 경험과 깨달음으로 모조리 갈아 끼워져 있었다. 나는 완전히 새로운 질감을 가진 테세우스의 배가 되어 고국의 항구로 돌아온 셈이었다. 나는 이제 확실히 안다. 할 수 있다고 마음먹고 일단 시작하면, 비록 처음 계획했던 완벽한 모습은 아닐지라도 대부분의 일들은 기어코 이루어진다는 것을.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          그러니 무언가를 새롭게 시작하기를 망설이고 있는 당신에게 감히 외치고 싶다. 낡은 널빤지를 뜯어내는 걸 두려워하지 말라고. 일단 부딪혀 보라고. 당신도 할 수 있다고.
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          In the summer of 2017, I finally set foot again on the homeland I had missed so deeply. I had disappeared into the distance in the summer of 2014, so it was truly my return after a full three years. During all that time when I had wandered as a foreigner, Korea had changed in remarkably many ways.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏙️ A Changed Landscape</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          During the three years I spent in Russia, Korea went through the first presidential impeachment in its constitutional history, and the shocking event in which artificial intelligence defeated a human player unfolded in the match between Lee Sedol and AlphaGo. On top of that, unlike the days when breathing fresh air had once been taken for granted, in just those three years fine dust had worsened so severely that checking the air pollution level every morning and carrying a mask became necessary. New buildings had appeared in the neighborhood, familiar shops had disappeared, and new stores had taken their place.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Above all, I still remember the strange feeling I had after returning home and being assigned to the CBR Defense Command, when I looked out the window and saw the Lotte World Tower piercing the sky of Seoul. When I had left Korea, that building had been little more than a bare skeleton under construction, but now it stood there in dazzling splendor, completely transforming the skyline. Only then did it truly hit me that I had been away for much longer than I had imagined.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">⛵ Becoming the Ship of Theseus</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          But it was not only the buildings, the scenery, or the circumstances of the country that had changed over those three years. When I looked quietly at myself, thrown back once more into the familiar landscape of my homeland, I realized that I too had changed. Do you know the Ship of Theseus? It is the old paradox that asks whether a ship can still be called the same ship if every worn-out part and every plank is replaced with a new one.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          During those three years of enduring Russia's bitter snowstorms and crossing the unfamiliar borders of the Eurasian continent, the old pieces inside me had also been stripped away one by one. The narrow perspective of a frog in a well had been replaced by an awareness of the vastness and diversity of the world. The pettiness that once rejected what was different from me had changed, through the warm hospitality of strangers, into a spaciousness that could willingly embrace difference. Most of all, the fearful planks that had once hesitated, asking, “Can I really do this?” had been completely replaced by a much tougher and shameless courage that believed, “If I just make up my mind and charge in, even clumsily, somehow it will work out.”
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🚀 You Can Do It Too</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The person who left Korea in 2014 and the person who returned in 2017 may have looked like the same individual on the outside, with the same registration number and the same face, but the inner pieces that made me who I was had all been replaced by new experiences and realizations gathered while traversing the Eurasian continent. I had returned to the harbor of my homeland as the Ship of Theseus, but now with an entirely new texture. I know this for certain now: if you decide that you can do something and simply begin, then even if it does not turn out in the exact perfect form you first imagined, most things somehow do get accomplished in the end.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          So to you, who may be hesitating before starting something new, I want to say this boldly. Do not be afraid to tear away the old planks. Just throw yourself against it and begin. You can do it too.
        </p>
      `}}]},hy={id:"acknowledgments",title:{ko:"감사의 글",en:"Acknowledgments"},description:{ko:"함께한 이들에게 전하는 마음",en:"A note of gratitude to those who shared the journey"},isSinglePost:!0,isActive:!0,posts:[{id:"acknowledgments-1",title:{ko:"감사의 글",en:"Acknowledgments"},imageUrl:"https://images.unsplash.com/photo-1516589091380-5d8e87df6999?q=80&w=1200&auto=format&fit=crop",isActive:!0,comments:[],content:{ko:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          가장 먼저, 무대포 같은 남편을 믿고 기꺼이 험난한 여정에 동참해 준 사랑하는 아내에게 깊은 고마움을 전한다. 돌이켜보면 나는 우리 부부의 미래를 위한다는 명목 아래 참으로 고집불통인 남편이었다. 나의 그 일방적인 결정들 이면에는 낯선 타국에서 묵묵히 견뎌낸 아내의 크나큰 헌신과 희생이 자리하고 있음을 이제는 너무나도 잘 안다. 말로 다 표현할 수 없는 미안함과 애정을 담아, 나의 가장 든든한 동반자인 아내에게 이 글의 첫 페이지를 바치고 싶다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💌 함께 버텨 준 사람들</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          낡고 비좁은 러시아 기숙사에서 동고동락하며 이 책의 곳곳을 장식해 준 P군과 S양의 이름도 빼놓을 수 없다. 나보다 어린 동생들이었지만, 타지에서 서로의 온기를 나누며 버텨준 그들의 존재 자체가 내게는 크나큰 위안이자 버팀목이었다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🪖 전우와 동료들에게</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          보이지 않는 곳에서 물심양면으로 나를 지지해 준 군 선후배 동료들에게도 진심 어린 인사를 남긴다. 특히 망망대해로 배를 타고 나가 연락조차 쉽지 않은 해군 선배들에게, 이 활자들을 빌려 깊은 연대의 마음을 띄워 보낸다. 핵물리학의 길을 먼저 걸어가며 이끌어준 DY 선배, 3년의 험난한 유학 생활을 처음부터 끝까지 함께 버텨낸 전우 JH 선배, 군에서는 선배지만 대학원에서는 후배로 묘한 인연을 맺었던 JC 선배, 그리고 학부 시절 나의 매서운 호통을 견뎌내고 타국에서 반갑게 재회한 CH까지. 여러분과 나눈 끈끈한 전우애가 아니었다면 이 긴 여정은 결코 쉽지 않았을 것이다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌍 국경을 넘어 이어진 인연</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          나를 기꺼이 자신의 고향으로 초대해 러시아의 진짜 매력을 보여준 현지인 친구에게도 각별한 인사를 건넨다. 재미있는 후일담을 하나 덧붙이자면, 이 책에 등장했던 나의 대학 친구들 중 한 명과 이 러시아 친구가 눈이 맞아 결혼에 골인했다는 사실이다. 국경을 뛰어넘어 알콩달콩 가정을 꾸린 두 사람의 완벽한 해피엔딩을 축복하며, 다시 한번 우정의 마음을 전한다.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏡 가족이라는 버팀목</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          무조건적인 가족의 지지는 이 무모한 도전을 가능케 한 가장 강력한 원동력이었다. 군 위탁교육을 떠나기 위해서는 주택을 보유한 두 명의 재정 보증인이 필수적이다. 만약 내가 학위 취득에 실패하면 그 막대한 채무를 고스란히 떠안아야 하는 무거운 자리다. 러시아어 알파벳조차 모르고 핵물리학의 근처에도 가본 적 없던 아들과 사위를 위해, 한 치의 망설임 없이 선뜻 인감도장을 내어주신 어머니와 장모님. 두 분의 맹목적인 믿음과 지원이 없었다면 오늘의 나는 결코 존재하지 못했을 것이다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          자신의 연애마저 뒷전으로 미루고 먼 타국까지 형을 보러 달려와 준 든든한 내 동생, 이역만리로 떠나는 막내 여동생을 위해 멀리서도 아낌없는 응원을 보내주신 두 분의 처형에게도 깊은 감사를 표한다. 더불어 3년이라는 긴 시간 동안 잊지 않고 이모부를 반갑게 맞아준 듬직한 첫째 조카, 그리고 돌잡이 때 떠났음에도 귀국 후 나를 또렷이 기억해 주어 뭉클함을 안겨준 사랑스러운 둘째 조카까지 모두가 내게는 살아가는 힘이었다.
        </p>

        <hr class="my-10 border-slate-300" />
        <p class="leading-relaxed mb-6 text-slate-700">
          마침내 내 인생의 첫 책이 세상에 나오게 되었다. 서툴고 투박했을 나의 유라시아 유랑기를 끝까지 흥미롭게 읽고 따라와 주신 독자 여러분께 고개 숙여 깊은 감사를 드린다.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          마지막으로, 지금도 하늘에서 이 모든 여정을 대견하게 지켜보고 계실 사랑하는 아버지. 아버지가 제게 남겨주신 가장 위대한 유산, ‘할 수 있다’는 그 단단한 믿음을 가슴에 새기고 기어이 해냈다고, 당신의 아들이 자랑스럽게 보고드립니다.
        </p>
      `,en:`
        <p class="leading-relaxed mb-6 text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-russia-blue first-letter:float-left first-letter:mr-3">
          First and foremost, I want to offer my deepest gratitude to my beloved wife, who trusted her reckless husband and willingly joined me on this arduous journey. Looking back, I was an unbelievably stubborn husband, always claiming that it was all for the future of our family. Behind those one-sided decisions of mine stood my wife's immense devotion and sacrifice, as she quietly endured life in a strange foreign land. With an affection and apology that words can never fully contain, I want to dedicate the first page of this writing to my wife, my strongest and most steadfast companion.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">💌 Those Who Endured Beside Me</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I also cannot leave out P and S, whose names appear throughout this book as companions who shared thick and thin with me in that old and cramped Russian dormitory. They were younger than I was, but their very presence, sharing warmth and endurance with me in a foreign land, became a tremendous comfort and support.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🪖 To My Comrades and Colleagues</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I also want to leave my heartfelt thanks to the senior and junior military colleagues who supported me in countless visible and invisible ways. In particular, to my naval seniors who were often out on the vast open sea and difficult even to contact, I send through these printed words my deep sense of solidarity. To Senior DY, who walked the road of nuclear physics before me and guided the way; to Senior JH, my comrade who endured those three grueling years of study abroad with me from beginning to end; to Senior JC, who was my senior in the military but my junior in graduate school, creating a curious kind of bond; and to CH, who had once endured my fierce scolding in undergraduate days and whom I was delighted to meet again in a foreign country. Without the tight comradeship I shared with all of you, this long journey would never have been easy.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🌍 Bonds Beyond Borders</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          I also send special thanks to the local Russian friend who gladly invited me to his hometown and showed me the true charm of Russia. As one delightful postscript, one of my university friends who appears in this book ended up falling in love with that Russian friend and marrying her. I celebrate the perfect happy ending of those two, who built a warm little family across borders, and I offer my friendship once more with all my heart.
        </p>

        <h3 class="text-xl font-serif font-bold text-slate-800 mt-10 mb-4">🏡 Family as My Foundation</h3>
        <p class="leading-relaxed mb-6 text-slate-700">
          The unconditional support of my family was the strongest force that made this reckless challenge possible. In order to leave for military consignment education, two financial guarantors who owned housing were absolutely required. If I had failed to earn my degree, they would have had to shoulder that enormous debt in full, a burden by no means light. Yet for a son and son-in-law who did not even know the Russian alphabet and had never come close to nuclear physics, my mother and my mother-in-law gave me their seals without a moment of hesitation. Without their blind faith and support, the person I am today could never have existed.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          I also offer deep thanks to my dependable younger brother, who even put his own love life aside and came all the way to a distant foreign country just to see his older brother, and to my two sisters-in-law, who sent unstinting support from afar for their youngest sister setting off to the far ends of the earth. Along with them, my sturdy eldest nephew, who never forgot me and always welcomed his uncle warmly through those three long years, and my lovely second nephew, who had only been a baby when I left yet still remembered me clearly when I returned, all of them gave me strength to keep going.
        </p>

        <hr class="my-10 border-slate-300" />
        <p class="leading-relaxed mb-6 text-slate-700">
          At last, the first book of my life has come into the world. I bow my head in deep gratitude to all the readers who followed my clumsy and rough-edged wandering across Eurasia all the way to the end with interest and generosity.
        </p>
        <p class="leading-relaxed mb-6 text-slate-700">
          Finally, to my beloved father, who I believe is still watching all of this journey proudly from the sky above: I report with pride that your son has finally done it, engraving in his heart the greatest inheritance you left me, that firm belief that “it can be done.”
        </p>
      `}}]},Fa=[ay,sy,ny,iy,ly,ry,oy,dy,hy],_r={title:{ko:"작가의 말",en:"Author's Note"},content:{ko:`안녕하세요, 저의 웹사이트에 오신 것을 환영합니다.

이곳은 제가 러시아에서 3년 동안 석사 과정을 밟으며 겪었던 경험과 감정, 그리고 유라시아 대륙 곳곳을 누볐던 여행의 기록을 담은 공간입니다.

이 책의 제목은 <strong>'유라시아 견문록'</strong>입니다. 제가 이 기록들을 공유하는 이유는 거창한 성과를 자랑하기 위함이 아닙니다. 낯선 땅에서의 도전이 두렵기도 했지만, 결국 <strong>'누구든 할 수 있다'</strong>는 응원의 메시지를 전하고 싶었습니다. 한 개인의 소소하고도 치열했던 날들이 누군가에게는 작은 용기가 되기를 바랍니다.

프롤로그부터 에필로그까지, 차근차근 저의 발자취를 따라와 주신다면 더할 나위 없이 기쁠 것입니다. 여러분과의 소통은 언제든 환영합니다. 궁금한 점이 있거나 이야기를 나누고 싶다면 댓글을 남겨주시거나, 아래 메일로 편하게 연락해 주세요.

Email: onestark1204@naver.com

감사합니다.`,en:`Hello, and welcome to my website.

This is a space that contains the records of my experiences, emotions, and travels across the Eurasian continent during my three-year master's program in Russia.

The title of this book is <strong>'Eurasian Chronicles'</strong>. I am not sharing these records to boast of any great achievements. The challenges in a foreign land were daunting, but ultimately, I wanted to convey a message of encouragement that <strong>'anyone can do it.'</strong> I hope that one individual's small yet fierce days can become a small courage for someone.

From the prologue to the epilogue, I would be more than happy if you would follow my footsteps step by step. Communication with you is always welcome. If you have any questions or want to talk, please leave a comment or feel free to contact me at the email below.

Email: onestark1204@naver.com

Thank you.`},author:"Jeongwon Seo"},_f={commentSection:{title:{ko:"독자 한마디",en:"Reader Comments"},empty:{ko:"첫 번째 독자가 되어주세요.",en:"Be the first to leave a comment."},formTitle:{ko:"메시지 남기기",en:"Leave a Message"},namePlaceholder:{ko:"이름 (닉네임)",en:"Name (Nickname)"},passwordPlaceholder:{ko:"비밀번호",en:"Password"},contentPlaceholder:{ko:"이 글에 대한 생각이나 응원의 메시지를 남겨주세요.",en:"Please leave your thoughts or a message of support."},submit:{ko:"등록하기",en:"Post"},update:{ko:"수정하기",en:"Update"},cancel:{ko:"취소",en:"Cancel"},edit:{ko:"수정",en:"Edit"},delete:{ko:"삭제",en:"Delete"},passwordPrompt:{ko:"비밀번호를 입력하세요:",en:"Please enter your password:"},wrongPassword:{ko:"비밀번호가 일치하지 않습니다.",en:"Incorrect password."}},postView:{backToList:{ko:"목록으로 돌아가기",en:"Back to List"},prevPost:{ko:"이전 글",en:"Previous Post"},nextPost:{ko:"다음 글",en:"Next Post"}}};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=(...i)=>i.filter((h,u,r)=>!!h&&h.trim()!==""&&r.indexOf(h)===u).join(" ").trim();/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(h,u,r)=>r?r.toUpperCase():u.toLowerCase());/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=i=>{const h=cy(i);return h.charAt(0).toUpperCase()+h.slice(1)};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=i=>{for(const h in i)if(h.startsWith("aria-")||h==="role"||h==="title")return!0;return!1};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=E.forwardRef(({color:i="currentColor",size:h=24,strokeWidth:u=2,absoluteStrokeWidth:r,className:c="",children:g,iconNode:f,...T},w)=>E.createElement("svg",{ref:w,...fy,width:h,height:h,stroke:i,strokeWidth:r?Number(u)*24/Number(h):u,className:Hf("lucide",c),...!g&&!my(T)&&{"aria-hidden":"true"},...T},[...f.map(([p,M])=>E.createElement(p,M)),...Array.isArray(g)?g:[g]]));/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=(i,h)=>{const u=E.forwardRef(({className:r,...c},g)=>E.createElement(gy,{ref:g,iconNode:h,className:Hf(`lucide-${uy(yf(i))}`,`lucide-${i}`,r),...c}));return u.displayName=yf(i),u};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],by=Ze("book-open",py);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],wy=Ze("check",yy);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],vy=Ze("chevron-down",xy);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Sy=Ze("chevron-left",ky);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Jr=Ze("chevron-right",Ty);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Iy=Ze("chevron-up",Ry);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],Ey=Ze("list",Ay);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Dn=Ze("lock",My);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Cy=Ze("menu",zy);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],Ny=Ze("pen-tool",jy);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],By=Ze("pen",Oy);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Uy=Ze("send",Dy);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ky=Ze("trash-2",qy);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Hy=Ze("user",_y);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Lf=Ze("x",Ly),Gf=E.createContext(void 0),Gy=({children:i})=>{const[h,u]=E.useState("ko");return S.jsx(Gf.Provider,{value:{language:h,setLanguage:u},children:i})},$a=()=>{const i=E.useContext(Gf);if(i===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return i},Yy=({comments:i,onAddComment:h,onUpdateComment:u,onDeleteComment:r})=>{const{language:c}=$a(),[g,f]=E.useState(""),[T,w]=E.useState(""),[p,M]=E.useState(""),[I,D]=E.useState(null),[U,q]=E.useState(""),B=_f.commentSection,G=Q=>{Q.preventDefault(),g.trim()&&T.trim()&&(h(g,T,p),f(""),w(""),M(""))},V=Q=>{const oe=prompt(B.passwordPrompt[c]);oe===Q.password?(D(Q.id),q(Q.content)):oe!==null&&alert(B.wrongPassword[c])},F=Q=>{const oe=prompt(B.passwordPrompt[c]);oe===Q.password?window.confirm(c==="ko"?"정말 삭제하시겠습니까?":"Are you sure you want to delete this?")&&r(Q.id):oe!==null&&alert(B.wrongPassword[c])},H=()=>{I&&U.trim()&&(u(I,U),D(null),q(""))};return S.jsxs("div",{className:"mt-12 pt-8 border-t border-slate-200",children:[S.jsxs("h3",{className:"text-2xl font-serif text-slate-800 mb-6 flex items-center gap-2",children:[B.title[c]," ",S.jsxs("span",{className:"text-sm font-sans text-slate-500 font-normal",children:["(",i.length,")"]})]}),S.jsx("div",{className:"space-y-6 mb-10",children:i.length===0?S.jsx("div",{className:"text-slate-400 italic text-center py-4 bg-slate-50 rounded-lg",children:B.empty[c]}):i.map(Q=>S.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm border border-slate-100",children:[S.jsxs("div",{className:"flex items-center justify-between mb-2",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("div",{className:"w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500",children:S.jsx(Hy,{size:16})}),S.jsx("span",{className:"font-semibold text-slate-700",children:Q.author}),S.jsxs("span",{className:"text-xs text-slate-400",children:["| ",Q.date]})]}),Q.password&&S.jsxs("div",{className:"flex gap-2",children:[S.jsx("button",{onClick:()=>V(Q),className:"p-1 text-slate-400 hover:text-russia-blue transition-colors",title:B.edit[c],children:S.jsx(By,{size:14})}),S.jsx("button",{onClick:()=>F(Q),className:"p-1 text-slate-400 hover:text-red-500 transition-colors",title:B.delete[c],children:S.jsx(Ky,{size:14})})]})]}),I===Q.id?S.jsxs("div",{className:"pl-10 space-y-3",children:[S.jsx("textarea",{value:U,onChange:oe=>q(oe.target.value),className:"w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-russia-blue/50 text-sm h-20 resize-none"}),S.jsxs("div",{className:"flex justify-end gap-2",children:[S.jsxs("button",{onClick:()=>D(null),className:"px-3 py-1 border border-slate-300 text-slate-600 rounded text-xs flex items-center gap-1 hover:bg-slate-50",children:[S.jsx(Lf,{size:12})," ",B.cancel[c]]}),S.jsxs("button",{onClick:H,className:"px-3 py-1 bg-russia-blue text-white rounded text-xs flex items-center gap-1 hover:bg-slate-800",children:[S.jsx(wy,{size:12})," ",B.update[c]]})]})]}):S.jsx("p",{className:"text-slate-600 text-sm leading-relaxed pl-10",children:Q.content})]},Q.id))}),S.jsxs("form",{onSubmit:G,className:"bg-slate-50 p-6 rounded-xl border border-slate-200",children:[S.jsx("h4",{className:"text-sm font-bold text-slate-600 mb-4 uppercase tracking-wider",children:B.formTitle[c]}),S.jsxs("div",{className:"grid gap-4",children:[S.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[S.jsx("input",{type:"text",value:T,onChange:Q=>w(Q.target.value),placeholder:B.namePlaceholder[c],className:"w-full md:w-1/3 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-russia-blue/50 text-sm",required:!0}),S.jsx("input",{type:"password",value:p,onChange:Q=>M(Q.target.value),placeholder:B.passwordPlaceholder[c],className:"w-full md:w-1/3 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-russia-blue/50 text-sm"})]}),S.jsx("textarea",{value:g,onChange:Q=>f(Q.target.value),placeholder:B.contentPlaceholder[c],className:"w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-russia-blue/50 text-sm h-24 resize-none",required:!0}),S.jsx("div",{className:"flex justify-end",children:S.jsxs("button",{type:"submit",className:"bg-russia-blue hover:bg-slate-800 text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors flex items-center gap-2",children:[S.jsx(Uy,{size:14}),B.submit[c]]})})]})]})]})},Wy=({post:i,categoryTitle:h,onBack:u,prevPost:r,nextPost:c})=>{const{language:g}=$a(),[f,T]=E.useState(i.comments),w=_f.postView;E.useEffect(()=>{T(i.comments)},[i]);const p=(U,q,B)=>{const G={id:Date.now().toString(),content:U,author:q,date:new Date().toLocaleDateString(),password:B};T([...f,G])},M=(U,q)=>{T(f.map(B=>B.id===U?{...B,content:q}:B))},I=U=>{T(f.filter(q=>q.id!==U))},D=(U,q)=>{if(!U)return S.jsx("div",{className:"w-1/2"});const B=q==="prev";return S.jsxs(zt,{to:`/${U.categoryId}/${U.id}`,className:`w-1/2 p-4 border rounded-lg flex items-center gap-4 hover:bg-slate-50 hover:border-slate-300 transition-colors group ${B?"justify-start":"justify-end"}`,children:[B&&S.jsx(Sy,{className:"text-slate-400 group-hover:text-russia-blue"}),S.jsxs("div",{className:B?"text-left":"text-right",children:[S.jsx("div",{className:"text-xs text-slate-500",children:B?w.prevPost[g]:w.nextPost[g]}),S.jsx("div",{className:"font-serif font-bold text-slate-700 group-hover:text-russia-blue truncate",children:U.title})]}),!B&&S.jsx(Jr,{className:"text-slate-400 group-hover:text-russia-blue"})]})};return S.jsxs("article",{className:"max-w-3xl mx-auto animate-fadeIn pb-20",children:[u&&S.jsxs("button",{onClick:u,className:"mb-8 text-sm text-slate-500 hover:text-russia-blue flex items-center gap-1 transition-colors",children:["← ",w.backToList[g]]}),S.jsxs("header",{className:"mb-10 text-center",children:[S.jsx("span",{className:"inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold mb-4 tracking-wide",children:h[g]}),S.jsx("h1",{className:"text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 leading-tight",children:i.title[g]}),i.subtitle&&S.jsx("h2",{className:"text-lg md:text-xl text-slate-600 font-light italic mb-6",children:i.subtitle[g]})]}),i.imageUrl&&S.jsxs("div",{className:"mb-10 rounded-xl overflow-hidden shadow-lg aspect-video relative group",children:[S.jsx("img",{src:i.imageUrl,alt:i.title[g],className:"w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none"})]}),S.jsx("div",{className:"prose prose-lg prose-slate mx-auto font-serif text-slate-700 leading-loose",dangerouslySetInnerHTML:{__html:i.content[g]}}),S.jsxs("div",{className:"mt-16 pt-8 border-t border-slate-200 flex justify-between items-center gap-4",children:[D(r,"prev"),D(c,"next")]}),S.jsx("div",{className:"mt-16",children:S.jsx(Yy,{comments:f,onAddComment:p,onUpdateComment:M,onDeleteComment:I})})]})},Vy=()=>{const{language:i,setLanguage:h}=$a(),u=r=>{h(r)};return S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("button",{onClick:()=>u("ko"),className:`px-3 py-1 text-sm font-bold rounded-md transition-colors ${i==="ko"?"bg-russia-blue text-white":"bg-slate-200 text-slate-600 hover:bg-slate-300"}`,children:"KO"}),S.jsx("button",{onClick:()=>u("en"),className:`px-3 py-1 text-sm font-bold rounded-md transition-colors ${i==="en"?"bg-russia-blue text-white":"bg-slate-200 text-slate-600 hover:bg-slate-300"}`,children:"EN"})]})},Xy=({onCategoryClick:i,onPostClick:h})=>{const[u,r]=E.useState([]),{language:c}=$a(),g=f=>{r(T=>T.includes(f)?T.filter(w=>w!==f):[...T,f])};return S.jsxs("div",{className:"animate-fadeIn",children:[S.jsxs("div",{className:"relative h-96 bg-slate-900 rounded-2xl overflow-hidden mb-12 shadow-2xl",children:[S.jsx("img",{src:"https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",alt:"Books and Writing",className:"absolute inset-0 w-full h-full object-cover opacity-40"}),S.jsxs("div",{className:"absolute inset-0 flex flex-col justify-center items-center text-center p-6",children:[S.jsx("span",{className:"text-gold-accent font-serif italic mb-4 text-lg animate-pulse",children:"JNP's Memoir"}),S.jsx("h2",{className:"text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight",children:c==="ko"?"유라시아 견문록":"Eurasian Chronicles"})]})]}),S.jsxs("div",{className:"max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100",children:[S.jsx("div",{className:"flex items-center justify-center mb-8",children:S.jsx(Ny,{className:"text-russia-blue",size:32})}),S.jsx("h3",{className:"text-2xl font-serif font-bold text-center text-slate-800 mb-8",children:_r.title[c]}),S.jsx("div",{className:"prose prose-slate mx-auto text-slate-600 whitespace-pre-wrap leading-loose",dangerouslySetInnerHTML:{__html:_r.content[c]}}),S.jsxs("div",{className:"mt-10 text-right font-serif italic text-slate-500",children:["- ",_r.author]})]}),S.jsxs("div",{className:"max-w-2xl mx-auto mt-16 px-4",children:[S.jsxs("h3",{className:"text-2xl font-serif font-bold text-slate-800 mb-8 text-center flex items-center justify-center gap-2",children:[S.jsx(Ey,{size:24})," ",c==="ko"?"목차":"Table of Contents"]}),S.jsx("div",{className:"flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden divide-y divide-slate-100",children:Fa.filter(f=>f.id!=="home").map(f=>{const T=u.includes(f.id),w=f.isActive!==!1;if(f.isSinglePost){const p=f.posts[0];return S.jsxs(zt,{to:w&&p?`/${f.id}/${p.id}`:"#","aria-disabled":!w,onClick:M=>!w&&M.preventDefault(),className:`w-full px-6 py-5 flex items-center justify-between text-left transition-colors group
                              ${w?"hover:bg-slate-50 text-slate-800":"text-slate-300 cursor-not-allowed bg-slate-50/50"}
                          `,children:[S.jsx("span",{className:"font-serif font-bold text-lg group-hover:text-russia-blue transition-colors",children:f.title[c]}),w?S.jsx(Jr,{size:18,className:"text-slate-400 group-hover:text-russia-blue"}):S.jsx(Dn,{size:16})]},f.id)}return S.jsxs("div",{className:"flex flex-col",children:[S.jsxs("button",{disabled:!w,onClick:()=>w&&g(f.id),className:`w-full px-6 py-5 flex items-center justify-between text-left transition-colors group
                              ${w?"hover:bg-slate-50 text-slate-800":"text-slate-300 cursor-not-allowed bg-slate-50/50"}
                          `,children:[S.jsx(zt,{to:`/${f.id}`,className:"font-serif font-bold text-lg group-hover:text-russia-blue transition-colors",children:f.title[c]}),S.jsx("div",{className:"flex items-center gap-2 text-slate-400 group-hover:text-russia-blue",children:w?T?S.jsx(Iy,{size:18}):S.jsx(vy,{size:18}):S.jsx(Dn,{size:16})})]}),w&&T&&S.jsx("div",{className:"bg-slate-50 border-t border-slate-100 animate-fadeIn shadow-inner",children:f.posts.length>0?f.posts.map(p=>S.jsxs(zt,{to:p.isActive!==!1?`/${f.id}/${p.id}`:"#","aria-disabled":p.isActive===!1,onClick:M=>p.isActive===!1&&M.preventDefault(),className:`w-full px-8 py-4 text-left text-sm transition-colors border-b last:border-0 border-slate-100 flex items-center gap-3
                                        ${p.isActive===!1?"text-slate-300 cursor-not-allowed hover:bg-transparent":"text-slate-600 hover:text-russia-blue hover:bg-blue-50/50"}
                                      `,children:[S.jsx("span",{className:`w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.isActive===!1?"bg-slate-200":"bg-slate-300"}`}),S.jsx("span",{className:"truncate font-medium",children:p.title[c]}),p.isActive===!1&&S.jsx(Dn,{size:12,className:"ml-auto text-slate-300"})]},p.id)):S.jsx("div",{className:"px-8 py-4 text-sm text-slate-400 italic",children:c==="ko"?"게시글이 없습니다.":"No posts available."})})]},f.id)})})]})]})},Qy=()=>{const{categoryId:i}=jf(),{language:h}=$a(),u=Fa.find(r=>r.id===i);return u?S.jsxs("div",{className:"animate-fadeIn",children:[S.jsxs("header",{className:"mb-12 text-center",children:[S.jsx("h2",{className:"text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3",children:u.title[h]}),S.jsx("p",{className:"text-slate-500 font-light",children:u.description&&u.description[h]})]}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:u.posts.map(r=>S.jsxs(zt,{to:r.isActive!==!1?`/${u.id}/${r.id}`:"#","aria-disabled":r.isActive===!1,onClick:c=>r.isActive===!1&&c.preventDefault(),className:`group rounded-xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full
                          ${r.isActive===!1?"opacity-60 cursor-not-allowed bg-slate-50":"cursor-pointer hover:shadow-xl bg-white transition-all duration-300"}
                        `,children:[r.imageUrl&&S.jsxs("div",{className:"h-48 overflow-hidden relative",children:[S.jsx("img",{src:r.imageUrl,alt:r.title[h],className:`w-full h-full object-cover transform duration-700 ${r.isActive===!1?"grayscale":"group-hover:scale-110"}`}),S.jsx("div",{className:"absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"}),r.isActive===!1&&S.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/20",children:S.jsx(Dn,{className:"text-white/80",size:32})})]}),S.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[S.jsxs("div",{className:"mb-auto",children:[S.jsx("span",{className:"text-xs font-bold text-russia-blue uppercase tracking-wider mb-2 block",children:u.title[h]}),S.jsx("h3",{className:`text-xl font-serif font-bold mb-2 transition-colors ${r.isActive===!1?"text-slate-400":"text-slate-800 group-hover:text-russia-blue"}`,children:r.title[h]}),S.jsx("p",{className:"text-slate-500 text-sm line-clamp-2 leading-relaxed",children:r.subtitle&&r.subtitle[h]||(h==="ko"?"러시아에서의 기록...":"Records from Russia...")})]}),r.isActive!==!1&&S.jsx("div",{className:"mt-6 pt-4 border-t border-slate-100 flex justify-end items-center",children:S.jsxs("span",{className:"flex items-center text-xs font-semibold text-slate-600 group-hover:translate-x-1 transition-transform",children:[h==="ko"?"읽기":"Read"," ",S.jsx(Jr,{size:14})]})})]})]},r.id))})]}):S.jsx("div",{className:"text-center",children:h==="ko"?"카테고리를 찾을 수 없습니다.":"Category not found."})},Zy=()=>{const{categoryId:i,postId:h}=jf(),u=Wr(),{language:r}=$a(),c=Fa.filter(q=>q.isActive).flatMap(q=>q.posts.filter(B=>B.isActive).map(B=>({...B,categoryId:q.id,categoryTitle:q.title}))),g=c.findIndex(q=>q.id===h),f=g>0?c[g-1]:null,T=g<c.length-1?c[g+1]:null,w=Fa.find(q=>q.id===i),p=w==null?void 0:w.posts.find(q=>q.id===h);if(!w||!p)return S.jsx("div",{className:"text-center",children:r==="ko"?"포스트를 찾을 수 없습니다.":"Post not found."});const M=w.isSinglePost?void 0:()=>u(`/${i}`),I=q=>({id:q.id,title:q.title[r],categoryId:q.categoryId}),D=f?I(f):null,U=T?I(T):null;return S.jsx(Wy,{post:p,categoryTitle:w.title,onBack:M,prevPost:D,nextPost:U})};function Jy(){const[i,h]=E.useState(!1),u=za(),r=Wr(),{language:c}=$a();E.useEffect(()=>{h(!1),window.scrollTo(0,0)},[u.pathname]);const g=f=>{const T=Fa.find(w=>w.id===f);!T||T.isActive===!1||(T.isSinglePost&&T.posts.length>0?r(`/${T.id}/${T.posts[0].id}`):r(`/${T.id}`))};return S.jsxs("div",{className:"min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-russia-blue selection:text-white",children:[S.jsx("div",{className:"bg-russia-dark text-white py-2 px-4 text-center text-xs font-bold tracking-[0.2em] uppercase",children:"JNP Presents"}),S.jsx("nav",{className:"sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200",children:S.jsxs("div",{className:"container mx-auto px-4 md:px-6 h-16 flex items-center justify-between",children:[S.jsxs(zt,{to:"/",className:"font-serif font-bold text-xl md:text-2xl text-russia-blue cursor-pointer flex items-center gap-2",children:[S.jsx(by,{size:24}),S.jsx("span",{children:c==="ko"?"유라시아 견문록":"Eurasian Chronicles"})]}),S.jsx("div",{className:"hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600",children:Fa.filter(f=>f.id!=="home").map(f=>S.jsxs(zt,{to:f.isActive===!1?"#":f.isSinglePost&&f.posts.length>0?`/${f.id}/${f.posts[0].id}`:`/${f.id}`,"aria-disabled":f.isActive===!1,onClick:T=>f.isActive===!1&&T.preventDefault(),className:`relative py-2 group transition-colors 
                  ${f.isActive===!1?"text-slate-300 cursor-not-allowed":"hover:text-russia-blue"}
                  ${u.pathname.startsWith(`/${f.id}`)?"text-russia-blue":""}
                `,children:[S.jsxs("div",{className:"flex items-center gap-1",children:[f.shortTitle&&f.shortTitle[c]||f.title[c],f.isActive===!1&&S.jsx(Dn,{size:10})]}),f.isActive!==!1&&S.jsx("span",{className:`absolute bottom-0 left-0 w-full h-0.5 bg-russia-blue transform scale-x-0 group-hover:scale-x-100 transition-transform ${u.pathname.startsWith(`/${f.id}`)?"scale-x-100":""}`})]},f.id))}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(Vy,{}),S.jsx("button",{className:"lg:hidden p-2 text-slate-600",onClick:()=>h(!i),children:i?S.jsx(Lf,{}):S.jsx(Cy,{})})]})]})}),i&&S.jsx("div",{className:"lg:hidden fixed inset-0 z-40 bg-white pt-24 px-6 overflow-y-auto animate-fadeIn",children:S.jsxs("div",{className:"flex flex-col gap-6",children:[S.jsx(zt,{to:"/",className:"text-lg font-serif font-bold text-slate-800 text-left",children:c==="ko"?"홈으로":"Home"}),Fa.filter(f=>f.id!=="home").map(f=>S.jsxs(zt,{to:f.isActive===!1?"#":f.isSinglePost&&f.posts.length>0?`/${f.id}/${f.posts[0].id}`:`/${f.id}`,"aria-disabled":f.isActive===!1,onClick:T=>f.isActive===!1&&T.preventDefault(),className:`text-lg font-serif font-bold text-left flex items-center gap-2 
                  ${f.isActive===!1?"text-slate-300":"text-slate-500"} 
                  ${u.pathname.startsWith(`/${f.id}`)?"text-russia-blue":""}
                `,children:[f.shortTitle&&f.shortTitle[c]||f.title[c],f.isActive===!1&&S.jsx("span",{className:"text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-400 font-normal",children:c==="ko"?"작성 중":"In Progress"})]},f.id))]})}),S.jsx("main",{className:"container mx-auto px-4 md:px-6 py-12 min-h-[calc(100vh-200px)]",children:S.jsxs(kb,{children:[S.jsx(oo,{path:"/",element:S.jsx(Xy,{onCategoryClick:g,onPostClick:(f,T)=>r(`/${f}/${T}`)})}),S.jsx(oo,{path:"/:categoryId",element:S.jsx(Qy,{})}),S.jsx(oo,{path:"/:categoryId/:postId",element:S.jsx(Zy,{})})]})}),S.jsx("footer",{className:"bg-slate-900 text-slate-400 py-12 mt-12 border-t border-slate-800",children:S.jsxs("div",{className:"container mx-auto px-6 text-center",children:[S.jsx("h4",{className:"font-serif text-white text-lg mb-4",children:c==="ko"?"유라시아 견문록":"Eurasian Chronicles"}),S.jsxs("p",{className:"text-sm mb-8 max-w-md mx-auto",children:[c==="ko"?"러시아에서의 3년, 그리고 그 너머의 이야기. ":"Three years in Russia, and the story beyond. "," ",S.jsx("br",{}),c==="ko"?"JNP의 석사 생활과 여행의 기록을 담은 디지털 아카이브입니다.":"This is a digital archive of JNP's master's life and travel records."]}),S.jsxs("div",{className:"text-xs text-slate-600",children:["© ",new Date().getFullYear()," JNP. All rights reserved."]})]})})]})}const Yf=document.getElementById("root");if(!Yf)throw new Error("Could not find root element to mount to");const Fy=Rp.createRoot(Yf);Fy.render(S.jsx(bp.StrictMode,{children:S.jsx(Vb,{basename:"/",children:S.jsx(Gy,{children:S.jsx(Jy,{})})})}));
