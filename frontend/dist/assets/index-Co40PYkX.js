var bU=(n,o)=>()=>(o||n((o={exports:{}}).exports,o),o.exports);var xre=bU((mr,gr)=>{function GI(n,o){for(var a=0;a<o.length;a++){const d=o[a];if(typeof d!="string"&&!Array.isArray(d)){for(const h in d)if(h!=="default"&&!(h in n)){const p=Object.getOwnPropertyDescriptor(d,h);p&&Object.defineProperty(n,h,p.get?p:{enumerable:!0,get:()=>d[h]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))d(h);new MutationObserver(h=>{for(const p of h)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function a(h){const p={};return h.integrity&&(p.integrity=h.integrity),h.referrerPolicy&&(p.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?p.credentials="include":h.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function d(h){if(h.ep)return;h.ep=!0;const p=a(h);fetch(h.href,p)}})();var Bt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function np(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function wU(n){if(n.__esModule)return n;var o=n.default;if(typeof o=="function"){var a=function d(){return this instanceof d?Reflect.construct(o,arguments,this.constructor):o.apply(this,arguments)};a.prototype=o.prototype}else a={};return Object.defineProperty(a,"__esModule",{value:!0}),Object.keys(n).forEach(function(d){var h=Object.getOwnPropertyDescriptor(n,d);Object.defineProperty(a,d,h.get?h:{enumerable:!0,get:function(){return n[d]}})}),a}var KI={exports:{}},rp={},QI={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd=Symbol.for("react.element"),vU=Symbol.for("react.portal"),AU=Symbol.for("react.fragment"),_U=Symbol.for("react.strict_mode"),CU=Symbol.for("react.profiler"),yU=Symbol.for("react.provider"),xU=Symbol.for("react.context"),EU=Symbol.for("react.forward_ref"),SU=Symbol.for("react.suspense"),DU=Symbol.for("react.memo"),TU=Symbol.for("react.lazy"),ED=Symbol.iterator;function IU(n){return n===null||typeof n!="object"?null:(n=ED&&n[ED]||n["@@iterator"],typeof n=="function"?n:null)}var YI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ZI=Object.assign,JI={};function vl(n,o,a){this.props=n,this.context=o,this.refs=JI,this.updater=a||YI}vl.prototype.isReactComponent={};vl.prototype.setState=function(n,o){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,o,"setState")};vl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function XI(){}XI.prototype=vl.prototype;function Y0(n,o,a){this.props=n,this.context=o,this.refs=JI,this.updater=a||YI}var Z0=Y0.prototype=new XI;Z0.constructor=Y0;ZI(Z0,vl.prototype);Z0.isPureReactComponent=!0;var SD=Array.isArray,eM=Object.prototype.hasOwnProperty,J0={current:null},tM={key:!0,ref:!0,__self:!0,__source:!0};function nM(n,o,a){var d,h={},p=null,m=null;if(o!=null)for(d in o.ref!==void 0&&(m=o.ref),o.key!==void 0&&(p=""+o.key),o)eM.call(o,d)&&!tM.hasOwnProperty(d)&&(h[d]=o[d]);var w=arguments.length-2;if(w===1)h.children=a;else if(1<w){for(var g=Array(w),A=0;A<w;A++)g[A]=arguments[A+2];h.children=g}if(n&&n.defaultProps)for(d in w=n.defaultProps,w)h[d]===void 0&&(h[d]=w[d]);return{$$typeof:jd,type:n,key:p,ref:m,props:h,_owner:J0.current}}function MU(n,o){return{$$typeof:jd,type:n.type,key:o,ref:n.ref,props:n.props,_owner:n._owner}}function X0(n){return typeof n=="object"&&n!==null&&n.$$typeof===jd}function PU(n){var o={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(a){return o[a]})}var DD=/\/+/g;function _k(n,o){return typeof n=="object"&&n!==null&&n.key!=null?PU(""+n.key):o.toString(36)}function Gh(n,o,a,d,h){var p=typeof n;(p==="undefined"||p==="boolean")&&(n=null);var m=!1;if(n===null)m=!0;else switch(p){case"string":case"number":m=!0;break;case"object":switch(n.$$typeof){case jd:case vU:m=!0}}if(m)return m=n,h=h(m),n=d===""?"."+_k(m,0):d,SD(h)?(a="",n!=null&&(a=n.replace(DD,"$&/")+"/"),Gh(h,o,a,"",function(A){return A})):h!=null&&(X0(h)&&(h=MU(h,a+(!h.key||m&&m.key===h.key?"":(""+h.key).replace(DD,"$&/")+"/")+n)),o.push(h)),1;if(m=0,d=d===""?".":d+":",SD(n))for(var w=0;w<n.length;w++){p=n[w];var g=d+_k(p,w);m+=Gh(p,o,a,g,h)}else if(g=IU(n),typeof g=="function")for(n=g.call(n),w=0;!(p=n.next()).done;)p=p.value,g=d+_k(p,w++),m+=Gh(p,o,a,g,h);else if(p==="object")throw o=String(n),Error("Objects are not valid as a React child (found: "+(o==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.");return m}function wh(n,o,a){if(n==null)return n;var d=[],h=0;return Gh(n,d,"","",function(p){return o.call(a,p,h++)}),d}function BU(n){if(n._status===-1){var o=n._result;o=o(),o.then(function(a){(n._status===0||n._status===-1)&&(n._status=1,n._result=a)},function(a){(n._status===0||n._status===-1)&&(n._status=2,n._result=a)}),n._status===-1&&(n._status=0,n._result=o)}if(n._status===1)return n._result.default;throw n._result}var Vn={current:null},Kh={transition:null},NU={ReactCurrentDispatcher:Vn,ReactCurrentBatchConfig:Kh,ReactCurrentOwner:J0};function rM(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:wh,forEach:function(n,o,a){wh(n,function(){o.apply(this,arguments)},a)},count:function(n){var o=0;return wh(n,function(){o++}),o},toArray:function(n){return wh(n,function(o){return o})||[]},only:function(n){if(!X0(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ze.Component=vl;Ze.Fragment=AU;Ze.Profiler=CU;Ze.PureComponent=Y0;Ze.StrictMode=_U;Ze.Suspense=SU;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NU;Ze.act=rM;Ze.cloneElement=function(n,o,a){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var d=ZI({},n.props),h=n.key,p=n.ref,m=n._owner;if(o!=null){if(o.ref!==void 0&&(p=o.ref,m=J0.current),o.key!==void 0&&(h=""+o.key),n.type&&n.type.defaultProps)var w=n.type.defaultProps;for(g in o)eM.call(o,g)&&!tM.hasOwnProperty(g)&&(d[g]=o[g]===void 0&&w!==void 0?w[g]:o[g])}var g=arguments.length-2;if(g===1)d.children=a;else if(1<g){w=Array(g);for(var A=0;A<g;A++)w[A]=arguments[A+2];d.children=w}return{$$typeof:jd,type:n.type,key:h,ref:p,props:d,_owner:m}};Ze.createContext=function(n){return n={$$typeof:xU,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:yU,_context:n},n.Consumer=n};Ze.createElement=nM;Ze.createFactory=function(n){var o=nM.bind(null,n);return o.type=n,o};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(n){return{$$typeof:EU,render:n}};Ze.isValidElement=X0;Ze.lazy=function(n){return{$$typeof:TU,_payload:{_status:-1,_result:n},_init:BU}};Ze.memo=function(n,o){return{$$typeof:DU,type:n,compare:o===void 0?null:o}};Ze.startTransition=function(n){var o=Kh.transition;Kh.transition={};try{n()}finally{Kh.transition=o}};Ze.unstable_act=rM;Ze.useCallback=function(n,o){return Vn.current.useCallback(n,o)};Ze.useContext=function(n){return Vn.current.useContext(n)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(n){return Vn.current.useDeferredValue(n)};Ze.useEffect=function(n,o){return Vn.current.useEffect(n,o)};Ze.useId=function(){return Vn.current.useId()};Ze.useImperativeHandle=function(n,o,a){return Vn.current.useImperativeHandle(n,o,a)};Ze.useInsertionEffect=function(n,o){return Vn.current.useInsertionEffect(n,o)};Ze.useLayoutEffect=function(n,o){return Vn.current.useLayoutEffect(n,o)};Ze.useMemo=function(n,o){return Vn.current.useMemo(n,o)};Ze.useReducer=function(n,o,a){return Vn.current.useReducer(n,o,a)};Ze.useRef=function(n){return Vn.current.useRef(n)};Ze.useState=function(n){return Vn.current.useState(n)};Ze.useSyncExternalStore=function(n,o,a){return Vn.current.useSyncExternalStore(n,o,a)};Ze.useTransition=function(){return Vn.current.useTransition()};Ze.version="18.3.1";QI.exports=Ze;var q=QI.exports;const it=np(q),OU=GI({__proto__:null,default:it},[q]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RU=q,LU=Symbol.for("react.element"),jU=Symbol.for("react.fragment"),zU=Object.prototype.hasOwnProperty,FU=RU.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,VU={key:!0,ref:!0,__self:!0,__source:!0};function oM(n,o,a){var d,h={},p=null,m=null;a!==void 0&&(p=""+a),o.key!==void 0&&(p=""+o.key),o.ref!==void 0&&(m=o.ref);for(d in o)zU.call(o,d)&&!VU.hasOwnProperty(d)&&(h[d]=o[d]);if(n&&n.defaultProps)for(d in o=n.defaultProps,o)h[d]===void 0&&(h[d]=o[d]);return{$$typeof:LU,type:n,key:p,ref:m,props:h,_owner:FU.current}}rp.Fragment=jU;rp.jsx=oM;rp.jsxs=oM;KI.exports=rp;var U=KI.exports,Eb={},iM={exports:{}},vr={},sM={exports:{}},aM={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function o(G,le){var de=G.length;G.push(le);e:for(;0<de;){var fe=de-1>>>1,be=G[fe];if(0<h(be,le))G[fe]=le,G[de]=be,de=fe;else break e}}function a(G){return G.length===0?null:G[0]}function d(G){if(G.length===0)return null;var le=G[0],de=G.pop();if(de!==le){G[0]=de;e:for(var fe=0,be=G.length,Ee=be>>>1;fe<Ee;){var Ne=2*(fe+1)-1,Se=G[Ne],ve=Ne+1,We=G[ve];if(0>h(Se,de))ve<be&&0>h(We,Se)?(G[fe]=We,G[ve]=de,fe=ve):(G[fe]=Se,G[Ne]=de,fe=Ne);else if(ve<be&&0>h(We,de))G[fe]=We,G[ve]=de,fe=ve;else break e}}return le}function h(G,le){var de=G.sortIndex-le.sortIndex;return de!==0?de:G.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var m=Date,w=m.now();n.unstable_now=function(){return m.now()-w}}var g=[],A=[],C=1,y=null,v=3,x=!1,S=!1,I=!1,N=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(G){for(var le=a(A);le!==null;){if(le.callback===null)d(A);else if(le.startTime<=G)d(A),le.sortIndex=le.expirationTime,o(g,le);else break;le=a(A)}}function L(G){if(I=!1,O(G),!S)if(a(g)!==null)S=!0,ee(V);else{var le=a(A);le!==null&&se(L,le.startTime-G)}}function V(G,le){S=!1,I&&(I=!1,P(z),z=-1),x=!0;var de=v;try{for(O(le),y=a(g);y!==null&&(!(y.expirationTime>le)||G&&!Y());){var fe=y.callback;if(typeof fe=="function"){y.callback=null,v=y.priorityLevel;var be=fe(y.expirationTime<=le);le=n.unstable_now(),typeof be=="function"?y.callback=be:y===a(g)&&d(g),O(le)}else d(g);y=a(g)}if(y!==null)var Ee=!0;else{var Ne=a(A);Ne!==null&&se(L,Ne.startTime-le),Ee=!1}return Ee}finally{y=null,v=de,x=!1}}var F=!1,D=null,z=-1,W=5,$=-1;function Y(){return!(n.unstable_now()-$<W)}function re(){if(D!==null){var G=n.unstable_now();$=G;var le=!0;try{le=D(!0,G)}finally{le?te():(F=!1,D=null)}}else F=!1}var te;if(typeof B=="function")te=function(){B(re)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,Q=Z.port2;Z.port1.onmessage=re,te=function(){Q.postMessage(null)}}else te=function(){N(re,0)};function ee(G){D=G,F||(F=!0,te())}function se(G,le){z=N(function(){G(n.unstable_now())},le)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){S||x||(S=!0,ee(V))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return a(g)},n.unstable_next=function(G){switch(v){case 1:case 2:case 3:var le=3;break;default:le=v}var de=v;v=le;try{return G()}finally{v=de}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,le){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var de=v;v=G;try{return le()}finally{v=de}},n.unstable_scheduleCallback=function(G,le,de){var fe=n.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?fe+de:fe):de=fe,G){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=de+be,G={id:C++,callback:le,priorityLevel:G,startTime:de,expirationTime:be,sortIndex:-1},de>fe?(G.sortIndex=de,o(A,G),a(g)===null&&G===a(A)&&(I?(P(z),z=-1):I=!0,se(L,de-fe))):(G.sortIndex=be,o(g,G),S||x||(S=!0,ee(V))),G},n.unstable_shouldYield=Y,n.unstable_wrapCallback=function(G){var le=v;return function(){var de=v;v=le;try{return G.apply(this,arguments)}finally{v=de}}}})(aM);sM.exports=aM;var UU=sM.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HU=q,br=UU;function pe(n){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)o+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lM=new Set,dd={};function Zs(n,o){sl(n,o),sl(n+"Capture",o)}function sl(n,o){for(dd[n]=o,n=0;n<o.length;n++)lM.add(o[n])}var ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sb=Object.prototype.hasOwnProperty,$U=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,TD={},ID={};function WU(n){return Sb.call(ID,n)?!0:Sb.call(TD,n)?!1:$U.test(n)?ID[n]=!0:(TD[n]=!0,!1)}function qU(n,o,a,d){if(a!==null&&a.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return d?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function GU(n,o,a,d){if(o===null||typeof o>"u"||qU(n,o,a,d))return!0;if(d)return!1;if(a!==null)switch(a.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function Un(n,o,a,d,h,p,m){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=d,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=o,this.sanitizeURL=p,this.removeEmptyString=m}var En={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){En[n]=new Un(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var o=n[0];En[o]=new Un(o,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){En[n]=new Un(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){En[n]=new Un(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){En[n]=new Un(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){En[n]=new Un(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){En[n]=new Un(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){En[n]=new Un(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){En[n]=new Un(n,5,!1,n.toLowerCase(),null,!1,!1)});var ew=/[\-:]([a-z])/g;function tw(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var o=n.replace(ew,tw);En[o]=new Un(o,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var o=n.replace(ew,tw);En[o]=new Un(o,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var o=n.replace(ew,tw);En[o]=new Un(o,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){En[n]=new Un(n,1,!1,n.toLowerCase(),null,!1,!1)});En.xlinkHref=new Un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){En[n]=new Un(n,1,!1,n.toLowerCase(),null,!0,!0)});function nw(n,o,a,d){var h=En.hasOwnProperty(o)?En[o]:null;(h!==null?h.type!==0:d||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(GU(o,a,h,d)&&(a=null),d||h===null?WU(o)&&(a===null?n.removeAttribute(o):n.setAttribute(o,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(o=h.attributeName,d=h.attributeNamespace,a===null?n.removeAttribute(o):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,d?n.setAttributeNS(d,o,a):n.setAttribute(o,a))))}var li=HU.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vh=Symbol.for("react.element"),Fa=Symbol.for("react.portal"),Va=Symbol.for("react.fragment"),rw=Symbol.for("react.strict_mode"),Db=Symbol.for("react.profiler"),cM=Symbol.for("react.provider"),dM=Symbol.for("react.context"),ow=Symbol.for("react.forward_ref"),Tb=Symbol.for("react.suspense"),Ib=Symbol.for("react.suspense_list"),iw=Symbol.for("react.memo"),xi=Symbol.for("react.lazy"),uM=Symbol.for("react.offscreen"),MD=Symbol.iterator;function wc(n){return n===null||typeof n!="object"?null:(n=MD&&n[MD]||n["@@iterator"],typeof n=="function"?n:null)}var Lt=Object.assign,Ck;function Rc(n){if(Ck===void 0)try{throw Error()}catch(a){var o=a.stack.trim().match(/\n( *(at )?)/);Ck=o&&o[1]||""}return`
`+Ck+n}var yk=!1;function xk(n,o){if(!n||yk)return"";yk=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(A){var d=A}Reflect.construct(n,[],o)}else{try{o.call()}catch(A){d=A}n.call(o.prototype)}else{try{throw Error()}catch(A){d=A}n()}}catch(A){if(A&&d&&typeof A.stack=="string"){for(var h=A.stack.split(`
`),p=d.stack.split(`
`),m=h.length-1,w=p.length-1;1<=m&&0<=w&&h[m]!==p[w];)w--;for(;1<=m&&0<=w;m--,w--)if(h[m]!==p[w]){if(m!==1||w!==1)do if(m--,w--,0>w||h[m]!==p[w]){var g=`
`+h[m].replace(" at new "," at ");return n.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",n.displayName)),g}while(1<=m&&0<=w);break}}}finally{yk=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Rc(n):""}function KU(n){switch(n.tag){case 5:return Rc(n.type);case 16:return Rc("Lazy");case 13:return Rc("Suspense");case 19:return Rc("SuspenseList");case 0:case 2:case 15:return n=xk(n.type,!1),n;case 11:return n=xk(n.type.render,!1),n;case 1:return n=xk(n.type,!0),n;default:return""}}function Mb(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Va:return"Fragment";case Fa:return"Portal";case Db:return"Profiler";case rw:return"StrictMode";case Tb:return"Suspense";case Ib:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case dM:return(n.displayName||"Context")+".Consumer";case cM:return(n._context.displayName||"Context")+".Provider";case ow:var o=n.render;return n=n.displayName,n||(n=o.displayName||o.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case iw:return o=n.displayName||null,o!==null?o:Mb(n.type)||"Memo";case xi:o=n._payload,n=n._init;try{return Mb(n(o))}catch{}}return null}function QU(n){var o=n.type;switch(n.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=o.render,n=n.displayName||n.name||"",o.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mb(o);case 8:return o===rw?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Wi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function hM(n){var o=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function YU(n){var o=hM(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,o),d=""+n[o];if(!n.hasOwnProperty(o)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,p=a.set;return Object.defineProperty(n,o,{configurable:!0,get:function(){return h.call(this)},set:function(m){d=""+m,p.call(this,m)}}),Object.defineProperty(n,o,{enumerable:a.enumerable}),{getValue:function(){return d},setValue:function(m){d=""+m},stopTracking:function(){n._valueTracker=null,delete n[o]}}}}function Ah(n){n._valueTracker||(n._valueTracker=YU(n))}function fM(n){if(!n)return!1;var o=n._valueTracker;if(!o)return!0;var a=o.getValue(),d="";return n&&(d=hM(n)?n.checked?"true":"false":n.value),n=d,n!==a?(o.setValue(n),!0):!1}function ff(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Pb(n,o){var a=o.checked;return Lt({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function PD(n,o){var a=o.defaultValue==null?"":o.defaultValue,d=o.checked!=null?o.checked:o.defaultChecked;a=Wi(o.value!=null?o.value:a),n._wrapperState={initialChecked:d,initialValue:a,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function pM(n,o){o=o.checked,o!=null&&nw(n,"checked",o,!1)}function Bb(n,o){pM(n,o);var a=Wi(o.value),d=o.type;if(a!=null)d==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}o.hasOwnProperty("value")?Nb(n,o.type,a):o.hasOwnProperty("defaultValue")&&Nb(n,o.type,Wi(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(n.defaultChecked=!!o.defaultChecked)}function BD(n,o,a){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var d=o.type;if(!(d!=="submit"&&d!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+n._wrapperState.initialValue,a||o===n.value||(n.value=o),n.defaultValue=o}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Nb(n,o,a){(o!=="number"||ff(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Lc=Array.isArray;function Xa(n,o,a,d){if(n=n.options,o){o={};for(var h=0;h<a.length;h++)o["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=o.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&d&&(n[a].defaultSelected=!0)}else{for(a=""+Wi(a),o=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,d&&(n[h].defaultSelected=!0);return}o!==null||n[h].disabled||(o=n[h])}o!==null&&(o.selected=!0)}}function Ob(n,o){if(o.dangerouslySetInnerHTML!=null)throw Error(pe(91));return Lt({},o,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ND(n,o){var a=o.value;if(a==null){if(a=o.children,o=o.defaultValue,a!=null){if(o!=null)throw Error(pe(92));if(Lc(a)){if(1<a.length)throw Error(pe(93));a=a[0]}o=a}o==null&&(o=""),a=o}n._wrapperState={initialValue:Wi(a)}}function mM(n,o){var a=Wi(o.value),d=Wi(o.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),o.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),d!=null&&(n.defaultValue=""+d)}function OD(n){var o=n.textContent;o===n._wrapperState.initialValue&&o!==""&&o!==null&&(n.value=o)}function gM(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rb(n,o){return n==null||n==="http://www.w3.org/1999/xhtml"?gM(o):n==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var _h,kM=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,a,d,h){MSApp.execUnsafeLocalFunction(function(){return n(o,a,d,h)})}:n}(function(n,o){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=o;else{for(_h=_h||document.createElement("div"),_h.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=_h.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;o.firstChild;)n.appendChild(o.firstChild)}});function ud(n,o){if(o){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=o;return}}n.textContent=o}var $c={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ZU=["Webkit","ms","Moz","O"];Object.keys($c).forEach(function(n){ZU.forEach(function(o){o=o+n.charAt(0).toUpperCase()+n.substring(1),$c[o]=$c[n]})});function bM(n,o,a){return o==null||typeof o=="boolean"||o===""?"":a||typeof o!="number"||o===0||$c.hasOwnProperty(n)&&$c[n]?(""+o).trim():o+"px"}function wM(n,o){n=n.style;for(var a in o)if(o.hasOwnProperty(a)){var d=a.indexOf("--")===0,h=bM(a,o[a],d);a==="float"&&(a="cssFloat"),d?n.setProperty(a,h):n[a]=h}}var JU=Lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lb(n,o){if(o){if(JU[n]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(pe(137,n));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(pe(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(pe(61))}if(o.style!=null&&typeof o.style!="object")throw Error(pe(62))}}function jb(n,o){if(n.indexOf("-")===-1)return typeof o.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zb=null;function sw(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fb=null,el=null,tl=null;function RD(n){if(n=Vd(n)){if(typeof Fb!="function")throw Error(pe(280));var o=n.stateNode;o&&(o=lp(o),Fb(n.stateNode,n.type,o))}}function vM(n){el?tl?tl.push(n):tl=[n]:el=n}function AM(){if(el){var n=el,o=tl;if(tl=el=null,RD(n),o)for(n=0;n<o.length;n++)RD(o[n])}}function _M(n,o){return n(o)}function CM(){}var Ek=!1;function yM(n,o,a){if(Ek)return n(o,a);Ek=!0;try{return _M(n,o,a)}finally{Ek=!1,(el!==null||tl!==null)&&(CM(),AM())}}function hd(n,o){var a=n.stateNode;if(a===null)return null;var d=lp(a);if(d===null)return null;a=d[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(pe(231,o,typeof a));return a}var Vb=!1;if(ri)try{var vc={};Object.defineProperty(vc,"passive",{get:function(){Vb=!0}}),window.addEventListener("test",vc,vc),window.removeEventListener("test",vc,vc)}catch{Vb=!1}function XU(n,o,a,d,h,p,m,w,g){var A=Array.prototype.slice.call(arguments,3);try{o.apply(a,A)}catch(C){this.onError(C)}}var Wc=!1,pf=null,mf=!1,Ub=null,eH={onError:function(n){Wc=!0,pf=n}};function tH(n,o,a,d,h,p,m,w,g){Wc=!1,pf=null,XU.apply(eH,arguments)}function nH(n,o,a,d,h,p,m,w,g){if(tH.apply(this,arguments),Wc){if(Wc){var A=pf;Wc=!1,pf=null}else throw Error(pe(198));mf||(mf=!0,Ub=A)}}function Js(n){var o=n,a=n;if(n.alternate)for(;o.return;)o=o.return;else{n=o;do o=n,o.flags&4098&&(a=o.return),n=o.return;while(n)}return o.tag===3?a:null}function xM(n){if(n.tag===13){var o=n.memoizedState;if(o===null&&(n=n.alternate,n!==null&&(o=n.memoizedState)),o!==null)return o.dehydrated}return null}function LD(n){if(Js(n)!==n)throw Error(pe(188))}function rH(n){var o=n.alternate;if(!o){if(o=Js(n),o===null)throw Error(pe(188));return o!==n?null:n}for(var a=n,d=o;;){var h=a.return;if(h===null)break;var p=h.alternate;if(p===null){if(d=h.return,d!==null){a=d;continue}break}if(h.child===p.child){for(p=h.child;p;){if(p===a)return LD(h),n;if(p===d)return LD(h),o;p=p.sibling}throw Error(pe(188))}if(a.return!==d.return)a=h,d=p;else{for(var m=!1,w=h.child;w;){if(w===a){m=!0,a=h,d=p;break}if(w===d){m=!0,d=h,a=p;break}w=w.sibling}if(!m){for(w=p.child;w;){if(w===a){m=!0,a=p,d=h;break}if(w===d){m=!0,d=p,a=h;break}w=w.sibling}if(!m)throw Error(pe(189))}}if(a.alternate!==d)throw Error(pe(190))}if(a.tag!==3)throw Error(pe(188));return a.stateNode.current===a?n:o}function EM(n){return n=rH(n),n!==null?SM(n):null}function SM(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var o=SM(n);if(o!==null)return o;n=n.sibling}return null}var DM=br.unstable_scheduleCallback,jD=br.unstable_cancelCallback,oH=br.unstable_shouldYield,iH=br.unstable_requestPaint,Qt=br.unstable_now,sH=br.unstable_getCurrentPriorityLevel,aw=br.unstable_ImmediatePriority,TM=br.unstable_UserBlockingPriority,gf=br.unstable_NormalPriority,aH=br.unstable_LowPriority,IM=br.unstable_IdlePriority,op=null,Io=null;function lH(n){if(Io&&typeof Io.onCommitFiberRoot=="function")try{Io.onCommitFiberRoot(op,n,void 0,(n.current.flags&128)===128)}catch{}}var so=Math.clz32?Math.clz32:uH,cH=Math.log,dH=Math.LN2;function uH(n){return n>>>=0,n===0?32:31-(cH(n)/dH|0)|0}var Ch=64,yh=4194304;function jc(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function kf(n,o){var a=n.pendingLanes;if(a===0)return 0;var d=0,h=n.suspendedLanes,p=n.pingedLanes,m=a&268435455;if(m!==0){var w=m&~h;w!==0?d=jc(w):(p&=m,p!==0&&(d=jc(p)))}else m=a&~h,m!==0?d=jc(m):p!==0&&(d=jc(p));if(d===0)return 0;if(o!==0&&o!==d&&!(o&h)&&(h=d&-d,p=o&-o,h>=p||h===16&&(p&4194240)!==0))return o;if(d&4&&(d|=a&16),o=n.entangledLanes,o!==0)for(n=n.entanglements,o&=d;0<o;)a=31-so(o),h=1<<a,d|=n[a],o&=~h;return d}function hH(n,o){switch(n){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fH(n,o){for(var a=n.suspendedLanes,d=n.pingedLanes,h=n.expirationTimes,p=n.pendingLanes;0<p;){var m=31-so(p),w=1<<m,g=h[m];g===-1?(!(w&a)||w&d)&&(h[m]=hH(w,o)):g<=o&&(n.expiredLanes|=w),p&=~w}}function Hb(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function MM(){var n=Ch;return Ch<<=1,!(Ch&4194240)&&(Ch=64),n}function Sk(n){for(var o=[],a=0;31>a;a++)o.push(n);return o}function zd(n,o,a){n.pendingLanes|=o,o!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,o=31-so(o),n[o]=a}function pH(n,o){var a=n.pendingLanes&~o;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=o,n.mutableReadLanes&=o,n.entangledLanes&=o,o=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-so(a),p=1<<h;o[h]=0,d[h]=-1,n[h]=-1,a&=~p}}function lw(n,o){var a=n.entangledLanes|=o;for(n=n.entanglements;a;){var d=31-so(a),h=1<<d;h&o|n[d]&o&&(n[d]|=o),a&=~h}}var ut=0;function PM(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var BM,cw,NM,OM,RM,$b=!1,xh=[],Ni=null,Oi=null,Ri=null,fd=new Map,pd=new Map,Di=[],mH="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zD(n,o){switch(n){case"focusin":case"focusout":Ni=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":Ri=null;break;case"pointerover":case"pointerout":fd.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":pd.delete(o.pointerId)}}function Ac(n,o,a,d,h,p){return n===null||n.nativeEvent!==p?(n={blockedOn:o,domEventName:a,eventSystemFlags:d,nativeEvent:p,targetContainers:[h]},o!==null&&(o=Vd(o),o!==null&&cw(o)),n):(n.eventSystemFlags|=d,o=n.targetContainers,h!==null&&o.indexOf(h)===-1&&o.push(h),n)}function gH(n,o,a,d,h){switch(o){case"focusin":return Ni=Ac(Ni,n,o,a,d,h),!0;case"dragenter":return Oi=Ac(Oi,n,o,a,d,h),!0;case"mouseover":return Ri=Ac(Ri,n,o,a,d,h),!0;case"pointerover":var p=h.pointerId;return fd.set(p,Ac(fd.get(p)||null,n,o,a,d,h)),!0;case"gotpointercapture":return p=h.pointerId,pd.set(p,Ac(pd.get(p)||null,n,o,a,d,h)),!0}return!1}function LM(n){var o=Bs(n.target);if(o!==null){var a=Js(o);if(a!==null){if(o=a.tag,o===13){if(o=xM(a),o!==null){n.blockedOn=o,RM(n.priority,function(){NM(a)});return}}else if(o===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Qh(n){if(n.blockedOn!==null)return!1;for(var o=n.targetContainers;0<o.length;){var a=Wb(n.domEventName,n.eventSystemFlags,o[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var d=new a.constructor(a.type,a);zb=d,a.target.dispatchEvent(d),zb=null}else return o=Vd(a),o!==null&&cw(o),n.blockedOn=a,!1;o.shift()}return!0}function FD(n,o,a){Qh(n)&&a.delete(o)}function kH(){$b=!1,Ni!==null&&Qh(Ni)&&(Ni=null),Oi!==null&&Qh(Oi)&&(Oi=null),Ri!==null&&Qh(Ri)&&(Ri=null),fd.forEach(FD),pd.forEach(FD)}function _c(n,o){n.blockedOn===o&&(n.blockedOn=null,$b||($b=!0,br.unstable_scheduleCallback(br.unstable_NormalPriority,kH)))}function md(n){function o(h){return _c(h,n)}if(0<xh.length){_c(xh[0],n);for(var a=1;a<xh.length;a++){var d=xh[a];d.blockedOn===n&&(d.blockedOn=null)}}for(Ni!==null&&_c(Ni,n),Oi!==null&&_c(Oi,n),Ri!==null&&_c(Ri,n),fd.forEach(o),pd.forEach(o),a=0;a<Di.length;a++)d=Di[a],d.blockedOn===n&&(d.blockedOn=null);for(;0<Di.length&&(a=Di[0],a.blockedOn===null);)LM(a),a.blockedOn===null&&Di.shift()}var nl=li.ReactCurrentBatchConfig,bf=!0;function bH(n,o,a,d){var h=ut,p=nl.transition;nl.transition=null;try{ut=1,dw(n,o,a,d)}finally{ut=h,nl.transition=p}}function wH(n,o,a,d){var h=ut,p=nl.transition;nl.transition=null;try{ut=4,dw(n,o,a,d)}finally{ut=h,nl.transition=p}}function dw(n,o,a,d){if(bf){var h=Wb(n,o,a,d);if(h===null)Lk(n,o,d,wf,a),zD(n,d);else if(gH(h,n,o,a,d))d.stopPropagation();else if(zD(n,d),o&4&&-1<mH.indexOf(n)){for(;h!==null;){var p=Vd(h);if(p!==null&&BM(p),p=Wb(n,o,a,d),p===null&&Lk(n,o,d,wf,a),p===h)break;h=p}h!==null&&d.stopPropagation()}else Lk(n,o,d,null,a)}}var wf=null;function Wb(n,o,a,d){if(wf=null,n=sw(d),n=Bs(n),n!==null)if(o=Js(n),o===null)n=null;else if(a=o.tag,a===13){if(n=xM(o),n!==null)return n;n=null}else if(a===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;n=null}else o!==n&&(n=null);return wf=n,null}function jM(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sH()){case aw:return 1;case TM:return 4;case gf:case aH:return 16;case IM:return 536870912;default:return 16}default:return 16}}var Mi=null,uw=null,Yh=null;function zM(){if(Yh)return Yh;var n,o=uw,a=o.length,d,h="value"in Mi?Mi.value:Mi.textContent,p=h.length;for(n=0;n<a&&o[n]===h[n];n++);var m=a-n;for(d=1;d<=m&&o[a-d]===h[p-d];d++);return Yh=h.slice(n,1<d?1-d:void 0)}function Zh(n){var o=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&o===13&&(n=13)):n=o,n===10&&(n=13),32<=n||n===13?n:0}function Eh(){return!0}function VD(){return!1}function Ar(n){function o(a,d,h,p,m){this._reactName=a,this._targetInst=h,this.type=d,this.nativeEvent=p,this.target=m,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(a=n[w],this[w]=a?a(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Eh:VD,this.isPropagationStopped=VD,this}return Lt(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Eh)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Eh)},persist:function(){},isPersistent:Eh}),o}var Al={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hw=Ar(Al),Fd=Lt({},Al,{view:0,detail:0}),vH=Ar(Fd),Dk,Tk,Cc,ip=Lt({},Fd,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fw,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Cc&&(Cc&&n.type==="mousemove"?(Dk=n.screenX-Cc.screenX,Tk=n.screenY-Cc.screenY):Tk=Dk=0,Cc=n),Dk)},movementY:function(n){return"movementY"in n?n.movementY:Tk}}),UD=Ar(ip),AH=Lt({},ip,{dataTransfer:0}),_H=Ar(AH),CH=Lt({},Fd,{relatedTarget:0}),Ik=Ar(CH),yH=Lt({},Al,{animationName:0,elapsedTime:0,pseudoElement:0}),xH=Ar(yH),EH=Lt({},Al,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),SH=Ar(EH),DH=Lt({},Al,{data:0}),HD=Ar(DH),TH={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IH={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MH={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PH(n){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(n):(n=MH[n])?!!o[n]:!1}function fw(){return PH}var BH=Lt({},Fd,{key:function(n){if(n.key){var o=TH[n.key]||n.key;if(o!=="Unidentified")return o}return n.type==="keypress"?(n=Zh(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?IH[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fw,charCode:function(n){return n.type==="keypress"?Zh(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Zh(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),NH=Ar(BH),OH=Lt({},ip,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$D=Ar(OH),RH=Lt({},Fd,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fw}),LH=Ar(RH),jH=Lt({},Al,{propertyName:0,elapsedTime:0,pseudoElement:0}),zH=Ar(jH),FH=Lt({},ip,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),VH=Ar(FH),UH=[9,13,27,32],pw=ri&&"CompositionEvent"in window,qc=null;ri&&"documentMode"in document&&(qc=document.documentMode);var HH=ri&&"TextEvent"in window&&!qc,FM=ri&&(!pw||qc&&8<qc&&11>=qc),WD=" ",qD=!1;function VM(n,o){switch(n){case"keyup":return UH.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function UM(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ua=!1;function $H(n,o){switch(n){case"compositionend":return UM(o);case"keypress":return o.which!==32?null:(qD=!0,WD);case"textInput":return n=o.data,n===WD&&qD?null:n;default:return null}}function WH(n,o){if(Ua)return n==="compositionend"||!pw&&VM(n,o)?(n=zM(),Yh=uw=Mi=null,Ua=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return FM&&o.locale!=="ko"?null:o.data;default:return null}}var qH={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function GD(n){var o=n&&n.nodeName&&n.nodeName.toLowerCase();return o==="input"?!!qH[n.type]:o==="textarea"}function HM(n,o,a,d){vM(d),o=vf(o,"onChange"),0<o.length&&(a=new hw("onChange","change",null,a,d),n.push({event:a,listeners:o}))}var Gc=null,gd=null;function GH(n){e4(n,0)}function sp(n){var o=Wa(n);if(fM(o))return n}function KH(n,o){if(n==="change")return o}var $M=!1;if(ri){var Mk;if(ri){var Pk="oninput"in document;if(!Pk){var KD=document.createElement("div");KD.setAttribute("oninput","return;"),Pk=typeof KD.oninput=="function"}Mk=Pk}else Mk=!1;$M=Mk&&(!document.documentMode||9<document.documentMode)}function QD(){Gc&&(Gc.detachEvent("onpropertychange",WM),gd=Gc=null)}function WM(n){if(n.propertyName==="value"&&sp(gd)){var o=[];HM(o,gd,n,sw(n)),yM(GH,o)}}function QH(n,o,a){n==="focusin"?(QD(),Gc=o,gd=a,Gc.attachEvent("onpropertychange",WM)):n==="focusout"&&QD()}function YH(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return sp(gd)}function ZH(n,o){if(n==="click")return sp(o)}function JH(n,o){if(n==="input"||n==="change")return sp(o)}function XH(n,o){return n===o&&(n!==0||1/n===1/o)||n!==n&&o!==o}var co=typeof Object.is=="function"?Object.is:XH;function kd(n,o){if(co(n,o))return!0;if(typeof n!="object"||n===null||typeof o!="object"||o===null)return!1;var a=Object.keys(n),d=Object.keys(o);if(a.length!==d.length)return!1;for(d=0;d<a.length;d++){var h=a[d];if(!Sb.call(o,h)||!co(n[h],o[h]))return!1}return!0}function YD(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ZD(n,o){var a=YD(n);n=0;for(var d;a;){if(a.nodeType===3){if(d=n+a.textContent.length,n<=o&&d>=o)return{node:a,offset:o-n};n=d}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=YD(a)}}function qM(n,o){return n&&o?n===o?!0:n&&n.nodeType===3?!1:o&&o.nodeType===3?qM(n,o.parentNode):"contains"in n?n.contains(o):n.compareDocumentPosition?!!(n.compareDocumentPosition(o)&16):!1:!1}function GM(){for(var n=window,o=ff();o instanceof n.HTMLIFrameElement;){try{var a=typeof o.contentWindow.location.href=="string"}catch{a=!1}if(a)n=o.contentWindow;else break;o=ff(n.document)}return o}function mw(n){var o=n&&n.nodeName&&n.nodeName.toLowerCase();return o&&(o==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||o==="textarea"||n.contentEditable==="true")}function e$(n){var o=GM(),a=n.focusedElem,d=n.selectionRange;if(o!==a&&a&&a.ownerDocument&&qM(a.ownerDocument.documentElement,a)){if(d!==null&&mw(a)){if(o=d.start,n=d.end,n===void 0&&(n=o),"selectionStart"in a)a.selectionStart=o,a.selectionEnd=Math.min(n,a.value.length);else if(n=(o=a.ownerDocument||document)&&o.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,p=Math.min(d.start,h);d=d.end===void 0?p:Math.min(d.end,h),!n.extend&&p>d&&(h=d,d=p,p=h),h=ZD(a,p);var m=ZD(a,d);h&&m&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==m.node||n.focusOffset!==m.offset)&&(o=o.createRange(),o.setStart(h.node,h.offset),n.removeAllRanges(),p>d?(n.addRange(o),n.extend(m.node,m.offset)):(o.setEnd(m.node,m.offset),n.addRange(o)))}}for(o=[],n=a;n=n.parentNode;)n.nodeType===1&&o.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<o.length;a++)n=o[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var t$=ri&&"documentMode"in document&&11>=document.documentMode,Ha=null,qb=null,Kc=null,Gb=!1;function JD(n,o,a){var d=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gb||Ha==null||Ha!==ff(d)||(d=Ha,"selectionStart"in d&&mw(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Kc&&kd(Kc,d)||(Kc=d,d=vf(qb,"onSelect"),0<d.length&&(o=new hw("onSelect","select",null,o,a),n.push({event:o,listeners:d}),o.target=Ha)))}function Sh(n,o){var a={};return a[n.toLowerCase()]=o.toLowerCase(),a["Webkit"+n]="webkit"+o,a["Moz"+n]="moz"+o,a}var $a={animationend:Sh("Animation","AnimationEnd"),animationiteration:Sh("Animation","AnimationIteration"),animationstart:Sh("Animation","AnimationStart"),transitionend:Sh("Transition","TransitionEnd")},Bk={},KM={};ri&&(KM=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function ap(n){if(Bk[n])return Bk[n];if(!$a[n])return n;var o=$a[n],a;for(a in o)if(o.hasOwnProperty(a)&&a in KM)return Bk[n]=o[a];return n}var QM=ap("animationend"),YM=ap("animationiteration"),ZM=ap("animationstart"),JM=ap("transitionend"),XM=new Map,XD="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(n,o){XM.set(n,o),Zs(o,[n])}for(var Nk=0;Nk<XD.length;Nk++){var Ok=XD[Nk],n$=Ok.toLowerCase(),r$=Ok[0].toUpperCase()+Ok.slice(1);Ji(n$,"on"+r$)}Ji(QM,"onAnimationEnd");Ji(YM,"onAnimationIteration");Ji(ZM,"onAnimationStart");Ji("dblclick","onDoubleClick");Ji("focusin","onFocus");Ji("focusout","onBlur");Ji(JM,"onTransitionEnd");sl("onMouseEnter",["mouseout","mouseover"]);sl("onMouseLeave",["mouseout","mouseover"]);sl("onPointerEnter",["pointerout","pointerover"]);sl("onPointerLeave",["pointerout","pointerover"]);Zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o$=new Set("cancel close invalid load scroll toggle".split(" ").concat(zc));function e5(n,o,a){var d=n.type||"unknown-event";n.currentTarget=a,nH(d,o,void 0,n),n.currentTarget=null}function e4(n,o){o=(o&4)!==0;for(var a=0;a<n.length;a++){var d=n[a],h=d.event;d=d.listeners;e:{var p=void 0;if(o)for(var m=d.length-1;0<=m;m--){var w=d[m],g=w.instance,A=w.currentTarget;if(w=w.listener,g!==p&&h.isPropagationStopped())break e;e5(h,w,A),p=g}else for(m=0;m<d.length;m++){if(w=d[m],g=w.instance,A=w.currentTarget,w=w.listener,g!==p&&h.isPropagationStopped())break e;e5(h,w,A),p=g}}}if(mf)throw n=Ub,mf=!1,Ub=null,n}function xt(n,o){var a=o[Jb];a===void 0&&(a=o[Jb]=new Set);var d=n+"__bubble";a.has(d)||(t4(o,n,2,!1),a.add(d))}function Rk(n,o,a){var d=0;o&&(d|=4),t4(a,n,d,o)}var Dh="_reactListening"+Math.random().toString(36).slice(2);function bd(n){if(!n[Dh]){n[Dh]=!0,lM.forEach(function(a){a!=="selectionchange"&&(o$.has(a)||Rk(a,!1,n),Rk(a,!0,n))});var o=n.nodeType===9?n:n.ownerDocument;o===null||o[Dh]||(o[Dh]=!0,Rk("selectionchange",!1,o))}}function t4(n,o,a,d){switch(jM(o)){case 1:var h=bH;break;case 4:h=wH;break;default:h=dw}a=h.bind(null,o,a,n),h=void 0,!Vb||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(h=!0),d?h!==void 0?n.addEventListener(o,a,{capture:!0,passive:h}):n.addEventListener(o,a,!0):h!==void 0?n.addEventListener(o,a,{passive:h}):n.addEventListener(o,a,!1)}function Lk(n,o,a,d,h){var p=d;if(!(o&1)&&!(o&2)&&d!==null)e:for(;;){if(d===null)return;var m=d.tag;if(m===3||m===4){var w=d.stateNode.containerInfo;if(w===h||w.nodeType===8&&w.parentNode===h)break;if(m===4)for(m=d.return;m!==null;){var g=m.tag;if((g===3||g===4)&&(g=m.stateNode.containerInfo,g===h||g.nodeType===8&&g.parentNode===h))return;m=m.return}for(;w!==null;){if(m=Bs(w),m===null)return;if(g=m.tag,g===5||g===6){d=p=m;continue e}w=w.parentNode}}d=d.return}yM(function(){var A=p,C=sw(a),y=[];e:{var v=XM.get(n);if(v!==void 0){var x=hw,S=n;switch(n){case"keypress":if(Zh(a)===0)break e;case"keydown":case"keyup":x=NH;break;case"focusin":S="focus",x=Ik;break;case"focusout":S="blur",x=Ik;break;case"beforeblur":case"afterblur":x=Ik;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=UD;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=_H;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=LH;break;case QM:case YM:case ZM:x=xH;break;case JM:x=zH;break;case"scroll":x=vH;break;case"wheel":x=VH;break;case"copy":case"cut":case"paste":x=SH;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=$D}var I=(o&4)!==0,N=!I&&n==="scroll",P=I?v!==null?v+"Capture":null:v;I=[];for(var B=A,O;B!==null;){O=B;var L=O.stateNode;if(O.tag===5&&L!==null&&(O=L,P!==null&&(L=hd(B,P),L!=null&&I.push(wd(B,L,O)))),N)break;B=B.return}0<I.length&&(v=new x(v,S,null,a,C),y.push({event:v,listeners:I}))}}if(!(o&7)){e:{if(v=n==="mouseover"||n==="pointerover",x=n==="mouseout"||n==="pointerout",v&&a!==zb&&(S=a.relatedTarget||a.fromElement)&&(Bs(S)||S[oi]))break e;if((x||v)&&(v=C.window===C?C:(v=C.ownerDocument)?v.defaultView||v.parentWindow:window,x?(S=a.relatedTarget||a.toElement,x=A,S=S?Bs(S):null,S!==null&&(N=Js(S),S!==N||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=A),x!==S)){if(I=UD,L="onMouseLeave",P="onMouseEnter",B="mouse",(n==="pointerout"||n==="pointerover")&&(I=$D,L="onPointerLeave",P="onPointerEnter",B="pointer"),N=x==null?v:Wa(x),O=S==null?v:Wa(S),v=new I(L,B+"leave",x,a,C),v.target=N,v.relatedTarget=O,L=null,Bs(C)===A&&(I=new I(P,B+"enter",S,a,C),I.target=O,I.relatedTarget=N,L=I),N=L,x&&S)t:{for(I=x,P=S,B=0,O=I;O;O=ja(O))B++;for(O=0,L=P;L;L=ja(L))O++;for(;0<B-O;)I=ja(I),B--;for(;0<O-B;)P=ja(P),O--;for(;B--;){if(I===P||P!==null&&I===P.alternate)break t;I=ja(I),P=ja(P)}I=null}else I=null;x!==null&&t5(y,v,x,I,!1),S!==null&&N!==null&&t5(y,N,S,I,!0)}}e:{if(v=A?Wa(A):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var V=KH;else if(GD(v))if($M)V=JH;else{V=YH;var F=QH}else(x=v.nodeName)&&x.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(V=ZH);if(V&&(V=V(n,A))){HM(y,V,a,C);break e}F&&F(n,v,A),n==="focusout"&&(F=v._wrapperState)&&F.controlled&&v.type==="number"&&Nb(v,"number",v.value)}switch(F=A?Wa(A):window,n){case"focusin":(GD(F)||F.contentEditable==="true")&&(Ha=F,qb=A,Kc=null);break;case"focusout":Kc=qb=Ha=null;break;case"mousedown":Gb=!0;break;case"contextmenu":case"mouseup":case"dragend":Gb=!1,JD(y,a,C);break;case"selectionchange":if(t$)break;case"keydown":case"keyup":JD(y,a,C)}var D;if(pw)e:{switch(n){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Ua?VM(n,a)&&(z="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(z="onCompositionStart");z&&(FM&&a.locale!=="ko"&&(Ua||z!=="onCompositionStart"?z==="onCompositionEnd"&&Ua&&(D=zM()):(Mi=C,uw="value"in Mi?Mi.value:Mi.textContent,Ua=!0)),F=vf(A,z),0<F.length&&(z=new HD(z,n,null,a,C),y.push({event:z,listeners:F}),D?z.data=D:(D=UM(a),D!==null&&(z.data=D)))),(D=HH?$H(n,a):WH(n,a))&&(A=vf(A,"onBeforeInput"),0<A.length&&(C=new HD("onBeforeInput","beforeinput",null,a,C),y.push({event:C,listeners:A}),C.data=D))}e4(y,o)})}function wd(n,o,a){return{instance:n,listener:o,currentTarget:a}}function vf(n,o){for(var a=o+"Capture",d=[];n!==null;){var h=n,p=h.stateNode;h.tag===5&&p!==null&&(h=p,p=hd(n,a),p!=null&&d.unshift(wd(n,p,h)),p=hd(n,o),p!=null&&d.push(wd(n,p,h))),n=n.return}return d}function ja(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function t5(n,o,a,d,h){for(var p=o._reactName,m=[];a!==null&&a!==d;){var w=a,g=w.alternate,A=w.stateNode;if(g!==null&&g===d)break;w.tag===5&&A!==null&&(w=A,h?(g=hd(a,p),g!=null&&m.unshift(wd(a,g,w))):h||(g=hd(a,p),g!=null&&m.push(wd(a,g,w)))),a=a.return}m.length!==0&&n.push({event:o,listeners:m})}var i$=/\r\n?/g,s$=/\u0000|\uFFFD/g;function n5(n){return(typeof n=="string"?n:""+n).replace(i$,`
`).replace(s$,"")}function Th(n,o,a){if(o=n5(o),n5(n)!==o&&a)throw Error(pe(425))}function Af(){}var Kb=null,Qb=null;function Yb(n,o){return n==="textarea"||n==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Zb=typeof setTimeout=="function"?setTimeout:void 0,a$=typeof clearTimeout=="function"?clearTimeout:void 0,r5=typeof Promise=="function"?Promise:void 0,l$=typeof queueMicrotask=="function"?queueMicrotask:typeof r5<"u"?function(n){return r5.resolve(null).then(n).catch(c$)}:Zb;function c$(n){setTimeout(function(){throw n})}function jk(n,o){var a=o,d=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(d===0){n.removeChild(h),md(o);return}d--}else a!=="$"&&a!=="$?"&&a!=="$!"||d++;a=h}while(a);md(o)}function Li(n){for(;n!=null;n=n.nextSibling){var o=n.nodeType;if(o===1||o===3)break;if(o===8){if(o=n.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return n}function o5(n){n=n.previousSibling;for(var o=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(o===0)return n;o--}else a==="/$"&&o++}n=n.previousSibling}return null}var _l=Math.random().toString(36).slice(2),Do="__reactFiber$"+_l,vd="__reactProps$"+_l,oi="__reactContainer$"+_l,Jb="__reactEvents$"+_l,d$="__reactListeners$"+_l,u$="__reactHandles$"+_l;function Bs(n){var o=n[Do];if(o)return o;for(var a=n.parentNode;a;){if(o=a[oi]||a[Do]){if(a=o.alternate,o.child!==null||a!==null&&a.child!==null)for(n=o5(n);n!==null;){if(a=n[Do])return a;n=o5(n)}return o}n=a,a=n.parentNode}return null}function Vd(n){return n=n[Do]||n[oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Wa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(pe(33))}function lp(n){return n[vd]||null}var Xb=[],qa=-1;function Xi(n){return{current:n}}function Dt(n){0>qa||(n.current=Xb[qa],Xb[qa]=null,qa--)}function Ct(n,o){qa++,Xb[qa]=n.current,n.current=o}var qi={},Rn=Xi(qi),tr=Xi(!1),Us=qi;function al(n,o){var a=n.type.contextTypes;if(!a)return qi;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===o)return d.__reactInternalMemoizedMaskedChildContext;var h={},p;for(p in a)h[p]=o[p];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=o,n.__reactInternalMemoizedMaskedChildContext=h),h}function nr(n){return n=n.childContextTypes,n!=null}function _f(){Dt(tr),Dt(Rn)}function i5(n,o,a){if(Rn.current!==qi)throw Error(pe(168));Ct(Rn,o),Ct(tr,a)}function n4(n,o,a){var d=n.stateNode;if(o=o.childContextTypes,typeof d.getChildContext!="function")return a;d=d.getChildContext();for(var h in d)if(!(h in o))throw Error(pe(108,QU(n)||"Unknown",h));return Lt({},a,d)}function Cf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||qi,Us=Rn.current,Ct(Rn,n),Ct(tr,tr.current),!0}function s5(n,o,a){var d=n.stateNode;if(!d)throw Error(pe(169));a?(n=n4(n,o,Us),d.__reactInternalMemoizedMergedChildContext=n,Dt(tr),Dt(Rn),Ct(Rn,n)):Dt(tr),Ct(tr,a)}var Zo=null,cp=!1,zk=!1;function r4(n){Zo===null?Zo=[n]:Zo.push(n)}function h$(n){cp=!0,r4(n)}function es(){if(!zk&&Zo!==null){zk=!0;var n=0,o=ut;try{var a=Zo;for(ut=1;n<a.length;n++){var d=a[n];do d=d(!0);while(d!==null)}Zo=null,cp=!1}catch(h){throw Zo!==null&&(Zo=Zo.slice(n+1)),DM(aw,es),h}finally{ut=o,zk=!1}}return null}var Ga=[],Ka=0,yf=null,xf=0,Rr=[],Lr=0,Hs=null,Xo=1,ei="";function Ds(n,o){Ga[Ka++]=xf,Ga[Ka++]=yf,yf=n,xf=o}function o4(n,o,a){Rr[Lr++]=Xo,Rr[Lr++]=ei,Rr[Lr++]=Hs,Hs=n;var d=Xo;n=ei;var h=32-so(d)-1;d&=~(1<<h),a+=1;var p=32-so(o)+h;if(30<p){var m=h-h%5;p=(d&(1<<m)-1).toString(32),d>>=m,h-=m,Xo=1<<32-so(o)+h|a<<h|d,ei=p+n}else Xo=1<<p|a<<h|d,ei=n}function gw(n){n.return!==null&&(Ds(n,1),o4(n,1,0))}function kw(n){for(;n===yf;)yf=Ga[--Ka],Ga[Ka]=null,xf=Ga[--Ka],Ga[Ka]=null;for(;n===Hs;)Hs=Rr[--Lr],Rr[Lr]=null,ei=Rr[--Lr],Rr[Lr]=null,Xo=Rr[--Lr],Rr[Lr]=null}var kr=null,pr=null,Pt=!1,io=null;function i4(n,o){var a=zr(5,null,null,0);a.elementType="DELETED",a.stateNode=o,a.return=n,o=n.deletions,o===null?(n.deletions=[a],n.flags|=16):o.push(a)}function a5(n,o){switch(n.tag){case 5:var a=n.type;return o=o.nodeType!==1||a.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(n.stateNode=o,kr=n,pr=Li(o.firstChild),!0):!1;case 6:return o=n.pendingProps===""||o.nodeType!==3?null:o,o!==null?(n.stateNode=o,kr=n,pr=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(a=Hs!==null?{id:Xo,overflow:ei}:null,n.memoizedState={dehydrated:o,treeContext:a,retryLane:1073741824},a=zr(18,null,null,0),a.stateNode=o,a.return=n,n.child=a,kr=n,pr=null,!0):!1;default:return!1}}function e0(n){return(n.mode&1)!==0&&(n.flags&128)===0}function t0(n){if(Pt){var o=pr;if(o){var a=o;if(!a5(n,o)){if(e0(n))throw Error(pe(418));o=Li(a.nextSibling);var d=kr;o&&a5(n,o)?i4(d,a):(n.flags=n.flags&-4097|2,Pt=!1,kr=n)}}else{if(e0(n))throw Error(pe(418));n.flags=n.flags&-4097|2,Pt=!1,kr=n}}}function l5(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kr=n}function Ih(n){if(n!==kr)return!1;if(!Pt)return l5(n),Pt=!0,!1;var o;if((o=n.tag!==3)&&!(o=n.tag!==5)&&(o=n.type,o=o!=="head"&&o!=="body"&&!Yb(n.type,n.memoizedProps)),o&&(o=pr)){if(e0(n))throw s4(),Error(pe(418));for(;o;)i4(n,o),o=Li(o.nextSibling)}if(l5(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(pe(317));e:{for(n=n.nextSibling,o=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(o===0){pr=Li(n.nextSibling);break e}o--}else a!=="$"&&a!=="$!"&&a!=="$?"||o++}n=n.nextSibling}pr=null}}else pr=kr?Li(n.stateNode.nextSibling):null;return!0}function s4(){for(var n=pr;n;)n=Li(n.nextSibling)}function ll(){pr=kr=null,Pt=!1}function bw(n){io===null?io=[n]:io.push(n)}var f$=li.ReactCurrentBatchConfig;function yc(n,o,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(pe(309));var d=a.stateNode}if(!d)throw Error(pe(147,n));var h=d,p=""+n;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===p?o.ref:(o=function(m){var w=h.refs;m===null?delete w[p]:w[p]=m},o._stringRef=p,o)}if(typeof n!="string")throw Error(pe(284));if(!a._owner)throw Error(pe(290,n))}return n}function Mh(n,o){throw n=Object.prototype.toString.call(o),Error(pe(31,n==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":n))}function c5(n){var o=n._init;return o(n._payload)}function a4(n){function o(P,B){if(n){var O=P.deletions;O===null?(P.deletions=[B],P.flags|=16):O.push(B)}}function a(P,B){if(!n)return null;for(;B!==null;)o(P,B),B=B.sibling;return null}function d(P,B){for(P=new Map;B!==null;)B.key!==null?P.set(B.key,B):P.set(B.index,B),B=B.sibling;return P}function h(P,B){return P=Vi(P,B),P.index=0,P.sibling=null,P}function p(P,B,O){return P.index=O,n?(O=P.alternate,O!==null?(O=O.index,O<B?(P.flags|=2,B):O):(P.flags|=2,B)):(P.flags|=1048576,B)}function m(P){return n&&P.alternate===null&&(P.flags|=2),P}function w(P,B,O,L){return B===null||B.tag!==6?(B=qk(O,P.mode,L),B.return=P,B):(B=h(B,O),B.return=P,B)}function g(P,B,O,L){var V=O.type;return V===Va?C(P,B,O.props.children,L,O.key):B!==null&&(B.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===xi&&c5(V)===B.type)?(L=h(B,O.props),L.ref=yc(P,B,O),L.return=P,L):(L=of(O.type,O.key,O.props,null,P.mode,L),L.ref=yc(P,B,O),L.return=P,L)}function A(P,B,O,L){return B===null||B.tag!==4||B.stateNode.containerInfo!==O.containerInfo||B.stateNode.implementation!==O.implementation?(B=Gk(O,P.mode,L),B.return=P,B):(B=h(B,O.children||[]),B.return=P,B)}function C(P,B,O,L,V){return B===null||B.tag!==7?(B=Fs(O,P.mode,L,V),B.return=P,B):(B=h(B,O),B.return=P,B)}function y(P,B,O){if(typeof B=="string"&&B!==""||typeof B=="number")return B=qk(""+B,P.mode,O),B.return=P,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case vh:return O=of(B.type,B.key,B.props,null,P.mode,O),O.ref=yc(P,null,B),O.return=P,O;case Fa:return B=Gk(B,P.mode,O),B.return=P,B;case xi:var L=B._init;return y(P,L(B._payload),O)}if(Lc(B)||wc(B))return B=Fs(B,P.mode,O,null),B.return=P,B;Mh(P,B)}return null}function v(P,B,O,L){var V=B!==null?B.key:null;if(typeof O=="string"&&O!==""||typeof O=="number")return V!==null?null:w(P,B,""+O,L);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case vh:return O.key===V?g(P,B,O,L):null;case Fa:return O.key===V?A(P,B,O,L):null;case xi:return V=O._init,v(P,B,V(O._payload),L)}if(Lc(O)||wc(O))return V!==null?null:C(P,B,O,L,null);Mh(P,O)}return null}function x(P,B,O,L,V){if(typeof L=="string"&&L!==""||typeof L=="number")return P=P.get(O)||null,w(B,P,""+L,V);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case vh:return P=P.get(L.key===null?O:L.key)||null,g(B,P,L,V);case Fa:return P=P.get(L.key===null?O:L.key)||null,A(B,P,L,V);case xi:var F=L._init;return x(P,B,O,F(L._payload),V)}if(Lc(L)||wc(L))return P=P.get(O)||null,C(B,P,L,V,null);Mh(B,L)}return null}function S(P,B,O,L){for(var V=null,F=null,D=B,z=B=0,W=null;D!==null&&z<O.length;z++){D.index>z?(W=D,D=null):W=D.sibling;var $=v(P,D,O[z],L);if($===null){D===null&&(D=W);break}n&&D&&$.alternate===null&&o(P,D),B=p($,B,z),F===null?V=$:F.sibling=$,F=$,D=W}if(z===O.length)return a(P,D),Pt&&Ds(P,z),V;if(D===null){for(;z<O.length;z++)D=y(P,O[z],L),D!==null&&(B=p(D,B,z),F===null?V=D:F.sibling=D,F=D);return Pt&&Ds(P,z),V}for(D=d(P,D);z<O.length;z++)W=x(D,P,z,O[z],L),W!==null&&(n&&W.alternate!==null&&D.delete(W.key===null?z:W.key),B=p(W,B,z),F===null?V=W:F.sibling=W,F=W);return n&&D.forEach(function(Y){return o(P,Y)}),Pt&&Ds(P,z),V}function I(P,B,O,L){var V=wc(O);if(typeof V!="function")throw Error(pe(150));if(O=V.call(O),O==null)throw Error(pe(151));for(var F=V=null,D=B,z=B=0,W=null,$=O.next();D!==null&&!$.done;z++,$=O.next()){D.index>z?(W=D,D=null):W=D.sibling;var Y=v(P,D,$.value,L);if(Y===null){D===null&&(D=W);break}n&&D&&Y.alternate===null&&o(P,D),B=p(Y,B,z),F===null?V=Y:F.sibling=Y,F=Y,D=W}if($.done)return a(P,D),Pt&&Ds(P,z),V;if(D===null){for(;!$.done;z++,$=O.next())$=y(P,$.value,L),$!==null&&(B=p($,B,z),F===null?V=$:F.sibling=$,F=$);return Pt&&Ds(P,z),V}for(D=d(P,D);!$.done;z++,$=O.next())$=x(D,P,z,$.value,L),$!==null&&(n&&$.alternate!==null&&D.delete($.key===null?z:$.key),B=p($,B,z),F===null?V=$:F.sibling=$,F=$);return n&&D.forEach(function(re){return o(P,re)}),Pt&&Ds(P,z),V}function N(P,B,O,L){if(typeof O=="object"&&O!==null&&O.type===Va&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case vh:e:{for(var V=O.key,F=B;F!==null;){if(F.key===V){if(V=O.type,V===Va){if(F.tag===7){a(P,F.sibling),B=h(F,O.props.children),B.return=P,P=B;break e}}else if(F.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===xi&&c5(V)===F.type){a(P,F.sibling),B=h(F,O.props),B.ref=yc(P,F,O),B.return=P,P=B;break e}a(P,F);break}else o(P,F);F=F.sibling}O.type===Va?(B=Fs(O.props.children,P.mode,L,O.key),B.return=P,P=B):(L=of(O.type,O.key,O.props,null,P.mode,L),L.ref=yc(P,B,O),L.return=P,P=L)}return m(P);case Fa:e:{for(F=O.key;B!==null;){if(B.key===F)if(B.tag===4&&B.stateNode.containerInfo===O.containerInfo&&B.stateNode.implementation===O.implementation){a(P,B.sibling),B=h(B,O.children||[]),B.return=P,P=B;break e}else{a(P,B);break}else o(P,B);B=B.sibling}B=Gk(O,P.mode,L),B.return=P,P=B}return m(P);case xi:return F=O._init,N(P,B,F(O._payload),L)}if(Lc(O))return S(P,B,O,L);if(wc(O))return I(P,B,O,L);Mh(P,O)}return typeof O=="string"&&O!==""||typeof O=="number"?(O=""+O,B!==null&&B.tag===6?(a(P,B.sibling),B=h(B,O),B.return=P,P=B):(a(P,B),B=qk(O,P.mode,L),B.return=P,P=B),m(P)):a(P,B)}return N}var cl=a4(!0),l4=a4(!1),Ef=Xi(null),Sf=null,Qa=null,ww=null;function vw(){ww=Qa=Sf=null}function Aw(n){var o=Ef.current;Dt(Ef),n._currentValue=o}function n0(n,o,a){for(;n!==null;){var d=n.alternate;if((n.childLanes&o)!==o?(n.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),n===a)break;n=n.return}}function rl(n,o){Sf=n,ww=Qa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&o&&(Xn=!0),n.firstContext=null)}function Ur(n){var o=n._currentValue;if(ww!==n)if(n={context:n,memoizedValue:o,next:null},Qa===null){if(Sf===null)throw Error(pe(308));Qa=n,Sf.dependencies={lanes:0,firstContext:n}}else Qa=Qa.next=n;return o}var Ns=null;function _w(n){Ns===null?Ns=[n]:Ns.push(n)}function c4(n,o,a,d){var h=o.interleaved;return h===null?(a.next=a,_w(o)):(a.next=h.next,h.next=a),o.interleaved=a,ii(n,d)}function ii(n,o){n.lanes|=o;var a=n.alternate;for(a!==null&&(a.lanes|=o),a=n,n=n.return;n!==null;)n.childLanes|=o,a=n.alternate,a!==null&&(a.childLanes|=o),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Ei=!1;function Cw(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function d4(n,o){n=n.updateQueue,o.updateQueue===n&&(o.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ti(n,o){return{eventTime:n,lane:o,tag:0,payload:null,callback:null,next:null}}function ji(n,o,a){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,st&2){var h=d.pending;return h===null?o.next=o:(o.next=h.next,h.next=o),d.pending=o,ii(n,a)}return h=d.interleaved,h===null?(o.next=o,_w(d)):(o.next=h.next,h.next=o),d.interleaved=o,ii(n,a)}function Jh(n,o,a){if(o=o.updateQueue,o!==null&&(o=o.shared,(a&4194240)!==0)){var d=o.lanes;d&=n.pendingLanes,a|=d,o.lanes=a,lw(n,a)}}function d5(n,o){var a=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,a===d)){var h=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var m={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?h=p=m:p=p.next=m,a=a.next}while(a!==null);p===null?h=p=o:p=p.next=o}else h=p=o;a={baseState:d.baseState,firstBaseUpdate:h,lastBaseUpdate:p,shared:d.shared,effects:d.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=o:n.next=o,a.lastBaseUpdate=o}function Df(n,o,a,d){var h=n.updateQueue;Ei=!1;var p=h.firstBaseUpdate,m=h.lastBaseUpdate,w=h.shared.pending;if(w!==null){h.shared.pending=null;var g=w,A=g.next;g.next=null,m===null?p=A:m.next=A,m=g;var C=n.alternate;C!==null&&(C=C.updateQueue,w=C.lastBaseUpdate,w!==m&&(w===null?C.firstBaseUpdate=A:w.next=A,C.lastBaseUpdate=g))}if(p!==null){var y=h.baseState;m=0,C=A=g=null,w=p;do{var v=w.lane,x=w.eventTime;if((d&v)===v){C!==null&&(C=C.next={eventTime:x,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var S=n,I=w;switch(v=o,x=a,I.tag){case 1:if(S=I.payload,typeof S=="function"){y=S.call(x,y,v);break e}y=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=I.payload,v=typeof S=="function"?S.call(x,y,v):S,v==null)break e;y=Lt({},y,v);break e;case 2:Ei=!0}}w.callback!==null&&w.lane!==0&&(n.flags|=64,v=h.effects,v===null?h.effects=[w]:v.push(w))}else x={eventTime:x,lane:v,tag:w.tag,payload:w.payload,callback:w.callback,next:null},C===null?(A=C=x,g=y):C=C.next=x,m|=v;if(w=w.next,w===null){if(w=h.shared.pending,w===null)break;v=w,w=v.next,v.next=null,h.lastBaseUpdate=v,h.shared.pending=null}}while(!0);if(C===null&&(g=y),h.baseState=g,h.firstBaseUpdate=A,h.lastBaseUpdate=C,o=h.shared.interleaved,o!==null){h=o;do m|=h.lane,h=h.next;while(h!==o)}else p===null&&(h.shared.lanes=0);Ws|=m,n.lanes=m,n.memoizedState=y}}function u5(n,o,a){if(n=o.effects,o.effects=null,n!==null)for(o=0;o<n.length;o++){var d=n[o],h=d.callback;if(h!==null){if(d.callback=null,d=a,typeof h!="function")throw Error(pe(191,h));h.call(d)}}}var Ud={},Mo=Xi(Ud),Ad=Xi(Ud),_d=Xi(Ud);function Os(n){if(n===Ud)throw Error(pe(174));return n}function yw(n,o){switch(Ct(_d,o),Ct(Ad,n),Ct(Mo,Ud),n=o.nodeType,n){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Rb(null,"");break;default:n=n===8?o.parentNode:o,o=n.namespaceURI||null,n=n.tagName,o=Rb(o,n)}Dt(Mo),Ct(Mo,o)}function dl(){Dt(Mo),Dt(Ad),Dt(_d)}function u4(n){Os(_d.current);var o=Os(Mo.current),a=Rb(o,n.type);o!==a&&(Ct(Ad,n),Ct(Mo,a))}function xw(n){Ad.current===n&&(Dt(Mo),Dt(Ad))}var Ot=Xi(0);function Tf(n){for(var o=n;o!==null;){if(o.tag===13){var a=o.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Fk=[];function Ew(){for(var n=0;n<Fk.length;n++)Fk[n]._workInProgressVersionPrimary=null;Fk.length=0}var Xh=li.ReactCurrentDispatcher,Vk=li.ReactCurrentBatchConfig,$s=0,Rt=null,sn=null,hn=null,If=!1,Qc=!1,Cd=0,p$=0;function Mn(){throw Error(pe(321))}function Sw(n,o){if(o===null)return!1;for(var a=0;a<o.length&&a<n.length;a++)if(!co(n[a],o[a]))return!1;return!0}function Dw(n,o,a,d,h,p){if($s=p,Rt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Xh.current=n===null||n.memoizedState===null?b$:w$,n=a(d,h),Qc){p=0;do{if(Qc=!1,Cd=0,25<=p)throw Error(pe(301));p+=1,hn=sn=null,o.updateQueue=null,Xh.current=v$,n=a(d,h)}while(Qc)}if(Xh.current=Mf,o=sn!==null&&sn.next!==null,$s=0,hn=sn=Rt=null,If=!1,o)throw Error(pe(300));return n}function Tw(){var n=Cd!==0;return Cd=0,n}function So(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Rt.memoizedState=hn=n:hn=hn.next=n,hn}function Hr(){if(sn===null){var n=Rt.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var o=hn===null?Rt.memoizedState:hn.next;if(o!==null)hn=o,sn=n;else{if(n===null)throw Error(pe(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},hn===null?Rt.memoizedState=hn=n:hn=hn.next=n}return hn}function yd(n,o){return typeof o=="function"?o(n):o}function Uk(n){var o=Hr(),a=o.queue;if(a===null)throw Error(pe(311));a.lastRenderedReducer=n;var d=sn,h=d.baseQueue,p=a.pending;if(p!==null){if(h!==null){var m=h.next;h.next=p.next,p.next=m}d.baseQueue=h=p,a.pending=null}if(h!==null){p=h.next,d=d.baseState;var w=m=null,g=null,A=p;do{var C=A.lane;if(($s&C)===C)g!==null&&(g=g.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),d=A.hasEagerState?A.eagerState:n(d,A.action);else{var y={lane:C,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};g===null?(w=g=y,m=d):g=g.next=y,Rt.lanes|=C,Ws|=C}A=A.next}while(A!==null&&A!==p);g===null?m=d:g.next=w,co(d,o.memoizedState)||(Xn=!0),o.memoizedState=d,o.baseState=m,o.baseQueue=g,a.lastRenderedState=d}if(n=a.interleaved,n!==null){h=n;do p=h.lane,Rt.lanes|=p,Ws|=p,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[o.memoizedState,a.dispatch]}function Hk(n){var o=Hr(),a=o.queue;if(a===null)throw Error(pe(311));a.lastRenderedReducer=n;var d=a.dispatch,h=a.pending,p=o.memoizedState;if(h!==null){a.pending=null;var m=h=h.next;do p=n(p,m.action),m=m.next;while(m!==h);co(p,o.memoizedState)||(Xn=!0),o.memoizedState=p,o.baseQueue===null&&(o.baseState=p),a.lastRenderedState=p}return[p,d]}function h4(){}function f4(n,o){var a=Rt,d=Hr(),h=o(),p=!co(d.memoizedState,h);if(p&&(d.memoizedState=h,Xn=!0),d=d.queue,Iw(g4.bind(null,a,d,n),[n]),d.getSnapshot!==o||p||hn!==null&&hn.memoizedState.tag&1){if(a.flags|=2048,xd(9,m4.bind(null,a,d,h,o),void 0,null),pn===null)throw Error(pe(349));$s&30||p4(a,o,h)}return h}function p4(n,o,a){n.flags|=16384,n={getSnapshot:o,value:a},o=Rt.updateQueue,o===null?(o={lastEffect:null,stores:null},Rt.updateQueue=o,o.stores=[n]):(a=o.stores,a===null?o.stores=[n]:a.push(n))}function m4(n,o,a,d){o.value=a,o.getSnapshot=d,k4(o)&&b4(n)}function g4(n,o,a){return a(function(){k4(o)&&b4(n)})}function k4(n){var o=n.getSnapshot;n=n.value;try{var a=o();return!co(n,a)}catch{return!0}}function b4(n){var o=ii(n,1);o!==null&&ao(o,n,1,-1)}function h5(n){var o=So();return typeof n=="function"&&(n=n()),o.memoizedState=o.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yd,lastRenderedState:n},o.queue=n,n=n.dispatch=k$.bind(null,Rt,n),[o.memoizedState,n]}function xd(n,o,a,d){return n={tag:n,create:o,destroy:a,deps:d,next:null},o=Rt.updateQueue,o===null?(o={lastEffect:null,stores:null},Rt.updateQueue=o,o.lastEffect=n.next=n):(a=o.lastEffect,a===null?o.lastEffect=n.next=n:(d=a.next,a.next=n,n.next=d,o.lastEffect=n)),n}function w4(){return Hr().memoizedState}function ef(n,o,a,d){var h=So();Rt.flags|=n,h.memoizedState=xd(1|o,a,void 0,d===void 0?null:d)}function dp(n,o,a,d){var h=Hr();d=d===void 0?null:d;var p=void 0;if(sn!==null){var m=sn.memoizedState;if(p=m.destroy,d!==null&&Sw(d,m.deps)){h.memoizedState=xd(o,a,p,d);return}}Rt.flags|=n,h.memoizedState=xd(1|o,a,p,d)}function f5(n,o){return ef(8390656,8,n,o)}function Iw(n,o){return dp(2048,8,n,o)}function v4(n,o){return dp(4,2,n,o)}function A4(n,o){return dp(4,4,n,o)}function _4(n,o){if(typeof o=="function")return n=n(),o(n),function(){o(null)};if(o!=null)return n=n(),o.current=n,function(){o.current=null}}function C4(n,o,a){return a=a!=null?a.concat([n]):null,dp(4,4,_4.bind(null,o,n),a)}function Mw(){}function y4(n,o){var a=Hr();o=o===void 0?null:o;var d=a.memoizedState;return d!==null&&o!==null&&Sw(o,d[1])?d[0]:(a.memoizedState=[n,o],n)}function x4(n,o){var a=Hr();o=o===void 0?null:o;var d=a.memoizedState;return d!==null&&o!==null&&Sw(o,d[1])?d[0]:(n=n(),a.memoizedState=[n,o],n)}function E4(n,o,a){return $s&21?(co(a,o)||(a=MM(),Rt.lanes|=a,Ws|=a,n.baseState=!0),o):(n.baseState&&(n.baseState=!1,Xn=!0),n.memoizedState=a)}function m$(n,o){var a=ut;ut=a!==0&&4>a?a:4,n(!0);var d=Vk.transition;Vk.transition={};try{n(!1),o()}finally{ut=a,Vk.transition=d}}function S4(){return Hr().memoizedState}function g$(n,o,a){var d=Fi(n);if(a={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null},D4(n))T4(o,a);else if(a=c4(n,o,a,d),a!==null){var h=Fn();ao(a,n,d,h),I4(a,o,d)}}function k$(n,o,a){var d=Fi(n),h={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null};if(D4(n))T4(o,h);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=o.lastRenderedReducer,p!==null))try{var m=o.lastRenderedState,w=p(m,a);if(h.hasEagerState=!0,h.eagerState=w,co(w,m)){var g=o.interleaved;g===null?(h.next=h,_w(o)):(h.next=g.next,g.next=h),o.interleaved=h;return}}catch{}finally{}a=c4(n,o,h,d),a!==null&&(h=Fn(),ao(a,n,d,h),I4(a,o,d))}}function D4(n){var o=n.alternate;return n===Rt||o!==null&&o===Rt}function T4(n,o){Qc=If=!0;var a=n.pending;a===null?o.next=o:(o.next=a.next,a.next=o),n.pending=o}function I4(n,o,a){if(a&4194240){var d=o.lanes;d&=n.pendingLanes,a|=d,o.lanes=a,lw(n,a)}}var Mf={readContext:Ur,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},b$={readContext:Ur,useCallback:function(n,o){return So().memoizedState=[n,o===void 0?null:o],n},useContext:Ur,useEffect:f5,useImperativeHandle:function(n,o,a){return a=a!=null?a.concat([n]):null,ef(4194308,4,_4.bind(null,o,n),a)},useLayoutEffect:function(n,o){return ef(4194308,4,n,o)},useInsertionEffect:function(n,o){return ef(4,2,n,o)},useMemo:function(n,o){var a=So();return o=o===void 0?null:o,n=n(),a.memoizedState=[n,o],n},useReducer:function(n,o,a){var d=So();return o=a!==void 0?a(o):o,d.memoizedState=d.baseState=o,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:o},d.queue=n,n=n.dispatch=g$.bind(null,Rt,n),[d.memoizedState,n]},useRef:function(n){var o=So();return n={current:n},o.memoizedState=n},useState:h5,useDebugValue:Mw,useDeferredValue:function(n){return So().memoizedState=n},useTransition:function(){var n=h5(!1),o=n[0];return n=m$.bind(null,n[1]),So().memoizedState=n,[o,n]},useMutableSource:function(){},useSyncExternalStore:function(n,o,a){var d=Rt,h=So();if(Pt){if(a===void 0)throw Error(pe(407));a=a()}else{if(a=o(),pn===null)throw Error(pe(349));$s&30||p4(d,o,a)}h.memoizedState=a;var p={value:a,getSnapshot:o};return h.queue=p,f5(g4.bind(null,d,p,n),[n]),d.flags|=2048,xd(9,m4.bind(null,d,p,a,o),void 0,null),a},useId:function(){var n=So(),o=pn.identifierPrefix;if(Pt){var a=ei,d=Xo;a=(d&~(1<<32-so(d)-1)).toString(32)+a,o=":"+o+"R"+a,a=Cd++,0<a&&(o+="H"+a.toString(32)),o+=":"}else a=p$++,o=":"+o+"r"+a.toString(32)+":";return n.memoizedState=o},unstable_isNewReconciler:!1},w$={readContext:Ur,useCallback:y4,useContext:Ur,useEffect:Iw,useImperativeHandle:C4,useInsertionEffect:v4,useLayoutEffect:A4,useMemo:x4,useReducer:Uk,useRef:w4,useState:function(){return Uk(yd)},useDebugValue:Mw,useDeferredValue:function(n){var o=Hr();return E4(o,sn.memoizedState,n)},useTransition:function(){var n=Uk(yd)[0],o=Hr().memoizedState;return[n,o]},useMutableSource:h4,useSyncExternalStore:f4,useId:S4,unstable_isNewReconciler:!1},v$={readContext:Ur,useCallback:y4,useContext:Ur,useEffect:Iw,useImperativeHandle:C4,useInsertionEffect:v4,useLayoutEffect:A4,useMemo:x4,useReducer:Hk,useRef:w4,useState:function(){return Hk(yd)},useDebugValue:Mw,useDeferredValue:function(n){var o=Hr();return sn===null?o.memoizedState=n:E4(o,sn.memoizedState,n)},useTransition:function(){var n=Hk(yd)[0],o=Hr().memoizedState;return[n,o]},useMutableSource:h4,useSyncExternalStore:f4,useId:S4,unstable_isNewReconciler:!1};function no(n,o){if(n&&n.defaultProps){o=Lt({},o),n=n.defaultProps;for(var a in n)o[a]===void 0&&(o[a]=n[a]);return o}return o}function r0(n,o,a,d){o=n.memoizedState,a=a(d,o),a=a==null?o:Lt({},o,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var up={isMounted:function(n){return(n=n._reactInternals)?Js(n)===n:!1},enqueueSetState:function(n,o,a){n=n._reactInternals;var d=Fn(),h=Fi(n),p=ti(d,h);p.payload=o,a!=null&&(p.callback=a),o=ji(n,p,h),o!==null&&(ao(o,n,h,d),Jh(o,n,h))},enqueueReplaceState:function(n,o,a){n=n._reactInternals;var d=Fn(),h=Fi(n),p=ti(d,h);p.tag=1,p.payload=o,a!=null&&(p.callback=a),o=ji(n,p,h),o!==null&&(ao(o,n,h,d),Jh(o,n,h))},enqueueForceUpdate:function(n,o){n=n._reactInternals;var a=Fn(),d=Fi(n),h=ti(a,d);h.tag=2,o!=null&&(h.callback=o),o=ji(n,h,d),o!==null&&(ao(o,n,d,a),Jh(o,n,d))}};function p5(n,o,a,d,h,p,m){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,p,m):o.prototype&&o.prototype.isPureReactComponent?!kd(a,d)||!kd(h,p):!0}function M4(n,o,a){var d=!1,h=qi,p=o.contextType;return typeof p=="object"&&p!==null?p=Ur(p):(h=nr(o)?Us:Rn.current,d=o.contextTypes,p=(d=d!=null)?al(n,h):qi),o=new o(a,p),n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=up,n.stateNode=o,o._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=p),o}function m5(n,o,a,d){n=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(a,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(a,d),o.state!==n&&up.enqueueReplaceState(o,o.state,null)}function o0(n,o,a,d){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},Cw(n);var p=o.contextType;typeof p=="object"&&p!==null?h.context=Ur(p):(p=nr(o)?Us:Rn.current,h.context=al(n,p)),h.state=n.memoizedState,p=o.getDerivedStateFromProps,typeof p=="function"&&(r0(n,o,p,a),h.state=n.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(o=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),o!==h.state&&up.enqueueReplaceState(h,h.state,null),Df(n,a,h,d),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function ul(n,o){try{var a="",d=o;do a+=KU(d),d=d.return;while(d);var h=a}catch(p){h=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:o,stack:h,digest:null}}function $k(n,o,a){return{value:n,source:null,stack:a??null,digest:o??null}}function i0(n,o){try{console.error(o.value)}catch(a){setTimeout(function(){throw a})}}var A$=typeof WeakMap=="function"?WeakMap:Map;function P4(n,o,a){a=ti(-1,a),a.tag=3,a.payload={element:null};var d=o.value;return a.callback=function(){Bf||(Bf=!0,m0=d),i0(n,o)},a}function B4(n,o,a){a=ti(-1,a),a.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var h=o.value;a.payload=function(){return d(h)},a.callback=function(){i0(n,o)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){i0(n,o),typeof d!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var m=o.stack;this.componentDidCatch(o.value,{componentStack:m!==null?m:""})}),a}function g5(n,o,a){var d=n.pingCache;if(d===null){d=n.pingCache=new A$;var h=new Set;d.set(o,h)}else h=d.get(o),h===void 0&&(h=new Set,d.set(o,h));h.has(a)||(h.add(a),n=O$.bind(null,n,o,a),o.then(n,n))}function k5(n){do{var o;if((o=n.tag===13)&&(o=n.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return n;n=n.return}while(n!==null);return null}function b5(n,o,a,d,h){return n.mode&1?(n.flags|=65536,n.lanes=h,n):(n===o?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(o=ti(-1,1),o.tag=2,ji(a,o,1))),a.lanes|=1),n)}var _$=li.ReactCurrentOwner,Xn=!1;function zn(n,o,a,d){o.child=n===null?l4(o,null,a,d):cl(o,n.child,a,d)}function w5(n,o,a,d,h){a=a.render;var p=o.ref;return rl(o,h),d=Dw(n,o,a,d,p,h),a=Tw(),n!==null&&!Xn?(o.updateQueue=n.updateQueue,o.flags&=-2053,n.lanes&=~h,si(n,o,h)):(Pt&&a&&gw(o),o.flags|=1,zn(n,o,d,h),o.child)}function v5(n,o,a,d,h){if(n===null){var p=a.type;return typeof p=="function"&&!zw(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(o.tag=15,o.type=p,N4(n,o,p,d,h)):(n=of(a.type,null,d,o,o.mode,h),n.ref=o.ref,n.return=o,o.child=n)}if(p=n.child,!(n.lanes&h)){var m=p.memoizedProps;if(a=a.compare,a=a!==null?a:kd,a(m,d)&&n.ref===o.ref)return si(n,o,h)}return o.flags|=1,n=Vi(p,d),n.ref=o.ref,n.return=o,o.child=n}function N4(n,o,a,d,h){if(n!==null){var p=n.memoizedProps;if(kd(p,d)&&n.ref===o.ref)if(Xn=!1,o.pendingProps=d=p,(n.lanes&h)!==0)n.flags&131072&&(Xn=!0);else return o.lanes=n.lanes,si(n,o,h)}return s0(n,o,a,d,h)}function O4(n,o,a){var d=o.pendingProps,h=d.children,p=n!==null?n.memoizedState:null;if(d.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ct(Za,fr),fr|=a;else{if(!(a&1073741824))return n=p!==null?p.baseLanes|a:a,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:n,cachePool:null,transitions:null},o.updateQueue=null,Ct(Za,fr),fr|=n,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=p!==null?p.baseLanes:a,Ct(Za,fr),fr|=d}else p!==null?(d=p.baseLanes|a,o.memoizedState=null):d=a,Ct(Za,fr),fr|=d;return zn(n,o,h,a),o.child}function R4(n,o){var a=o.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(o.flags|=512,o.flags|=2097152)}function s0(n,o,a,d,h){var p=nr(a)?Us:Rn.current;return p=al(o,p),rl(o,h),a=Dw(n,o,a,d,p,h),d=Tw(),n!==null&&!Xn?(o.updateQueue=n.updateQueue,o.flags&=-2053,n.lanes&=~h,si(n,o,h)):(Pt&&d&&gw(o),o.flags|=1,zn(n,o,a,h),o.child)}function A5(n,o,a,d,h){if(nr(a)){var p=!0;Cf(o)}else p=!1;if(rl(o,h),o.stateNode===null)tf(n,o),M4(o,a,d),o0(o,a,d,h),d=!0;else if(n===null){var m=o.stateNode,w=o.memoizedProps;m.props=w;var g=m.context,A=a.contextType;typeof A=="object"&&A!==null?A=Ur(A):(A=nr(a)?Us:Rn.current,A=al(o,A));var C=a.getDerivedStateFromProps,y=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function";y||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==d||g!==A)&&m5(o,m,d,A),Ei=!1;var v=o.memoizedState;m.state=v,Df(o,d,m,h),g=o.memoizedState,w!==d||v!==g||tr.current||Ei?(typeof C=="function"&&(r0(o,a,C,d),g=o.memoizedState),(w=Ei||p5(o,a,w,d,v,g,A))?(y||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(o.flags|=4194308)):(typeof m.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=g),m.props=d,m.state=g,m.context=A,d=w):(typeof m.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{m=o.stateNode,d4(n,o),w=o.memoizedProps,A=o.type===o.elementType?w:no(o.type,w),m.props=A,y=o.pendingProps,v=m.context,g=a.contextType,typeof g=="object"&&g!==null?g=Ur(g):(g=nr(a)?Us:Rn.current,g=al(o,g));var x=a.getDerivedStateFromProps;(C=typeof x=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==y||v!==g)&&m5(o,m,d,g),Ei=!1,v=o.memoizedState,m.state=v,Df(o,d,m,h);var S=o.memoizedState;w!==y||v!==S||tr.current||Ei?(typeof x=="function"&&(r0(o,a,x,d),S=o.memoizedState),(A=Ei||p5(o,a,A,d,v,S,g)||!1)?(C||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(d,S,g),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(d,S,g)),typeof m.componentDidUpdate=="function"&&(o.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===n.memoizedProps&&v===n.memoizedState||(o.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&v===n.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=S),m.props=d,m.state=S,m.context=g,d=A):(typeof m.componentDidUpdate!="function"||w===n.memoizedProps&&v===n.memoizedState||(o.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&v===n.memoizedState||(o.flags|=1024),d=!1)}return a0(n,o,a,d,p,h)}function a0(n,o,a,d,h,p){R4(n,o);var m=(o.flags&128)!==0;if(!d&&!m)return h&&s5(o,a,!1),si(n,o,p);d=o.stateNode,_$.current=o;var w=m&&typeof a.getDerivedStateFromError!="function"?null:d.render();return o.flags|=1,n!==null&&m?(o.child=cl(o,n.child,null,p),o.child=cl(o,null,w,p)):zn(n,o,w,p),o.memoizedState=d.state,h&&s5(o,a,!0),o.child}function L4(n){var o=n.stateNode;o.pendingContext?i5(n,o.pendingContext,o.pendingContext!==o.context):o.context&&i5(n,o.context,!1),yw(n,o.containerInfo)}function _5(n,o,a,d,h){return ll(),bw(h),o.flags|=256,zn(n,o,a,d),o.child}var l0={dehydrated:null,treeContext:null,retryLane:0};function c0(n){return{baseLanes:n,cachePool:null,transitions:null}}function j4(n,o,a){var d=o.pendingProps,h=Ot.current,p=!1,m=(o.flags&128)!==0,w;if((w=m)||(w=n!==null&&n.memoizedState===null?!1:(h&2)!==0),w?(p=!0,o.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Ct(Ot,h&1),n===null)return t0(o),n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(o.mode&1?n.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(m=d.children,n=d.fallback,p?(d=o.mode,p=o.child,m={mode:"hidden",children:m},!(d&1)&&p!==null?(p.childLanes=0,p.pendingProps=m):p=pp(m,d,0,null),n=Fs(n,d,a,null),p.return=o,n.return=o,p.sibling=n,o.child=p,o.child.memoizedState=c0(a),o.memoizedState=l0,n):Pw(o,m));if(h=n.memoizedState,h!==null&&(w=h.dehydrated,w!==null))return C$(n,o,m,d,w,h,a);if(p){p=d.fallback,m=o.mode,h=n.child,w=h.sibling;var g={mode:"hidden",children:d.children};return!(m&1)&&o.child!==h?(d=o.child,d.childLanes=0,d.pendingProps=g,o.deletions=null):(d=Vi(h,g),d.subtreeFlags=h.subtreeFlags&14680064),w!==null?p=Vi(w,p):(p=Fs(p,m,a,null),p.flags|=2),p.return=o,d.return=o,d.sibling=p,o.child=d,d=p,p=o.child,m=n.child.memoizedState,m=m===null?c0(a):{baseLanes:m.baseLanes|a,cachePool:null,transitions:m.transitions},p.memoizedState=m,p.childLanes=n.childLanes&~a,o.memoizedState=l0,d}return p=n.child,n=p.sibling,d=Vi(p,{mode:"visible",children:d.children}),!(o.mode&1)&&(d.lanes=a),d.return=o,d.sibling=null,n!==null&&(a=o.deletions,a===null?(o.deletions=[n],o.flags|=16):a.push(n)),o.child=d,o.memoizedState=null,d}function Pw(n,o){return o=pp({mode:"visible",children:o},n.mode,0,null),o.return=n,n.child=o}function Ph(n,o,a,d){return d!==null&&bw(d),cl(o,n.child,null,a),n=Pw(o,o.pendingProps.children),n.flags|=2,o.memoizedState=null,n}function C$(n,o,a,d,h,p,m){if(a)return o.flags&256?(o.flags&=-257,d=$k(Error(pe(422))),Ph(n,o,m,d)):o.memoizedState!==null?(o.child=n.child,o.flags|=128,null):(p=d.fallback,h=o.mode,d=pp({mode:"visible",children:d.children},h,0,null),p=Fs(p,h,m,null),p.flags|=2,d.return=o,p.return=o,d.sibling=p,o.child=d,o.mode&1&&cl(o,n.child,null,m),o.child.memoizedState=c0(m),o.memoizedState=l0,p);if(!(o.mode&1))return Ph(n,o,m,null);if(h.data==="$!"){if(d=h.nextSibling&&h.nextSibling.dataset,d)var w=d.dgst;return d=w,p=Error(pe(419)),d=$k(p,d,void 0),Ph(n,o,m,d)}if(w=(m&n.childLanes)!==0,Xn||w){if(d=pn,d!==null){switch(m&-m){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=h&(d.suspendedLanes|m)?0:h,h!==0&&h!==p.retryLane&&(p.retryLane=h,ii(n,h),ao(d,n,h,-1))}return jw(),d=$k(Error(pe(421))),Ph(n,o,m,d)}return h.data==="$?"?(o.flags|=128,o.child=n.child,o=R$.bind(null,n),h._reactRetry=o,null):(n=p.treeContext,pr=Li(h.nextSibling),kr=o,Pt=!0,io=null,n!==null&&(Rr[Lr++]=Xo,Rr[Lr++]=ei,Rr[Lr++]=Hs,Xo=n.id,ei=n.overflow,Hs=o),o=Pw(o,d.children),o.flags|=4096,o)}function C5(n,o,a){n.lanes|=o;var d=n.alternate;d!==null&&(d.lanes|=o),n0(n.return,o,a)}function Wk(n,o,a,d,h){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:a,tailMode:h}:(p.isBackwards=o,p.rendering=null,p.renderingStartTime=0,p.last=d,p.tail=a,p.tailMode=h)}function z4(n,o,a){var d=o.pendingProps,h=d.revealOrder,p=d.tail;if(zn(n,o,d.children,a),d=Ot.current,d&2)d=d&1|2,o.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=o.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&C5(n,a,o);else if(n.tag===19)C5(n,a,o);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===o)break e;for(;n.sibling===null;){if(n.return===null||n.return===o)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(Ct(Ot,d),!(o.mode&1))o.memoizedState=null;else switch(h){case"forwards":for(a=o.child,h=null;a!==null;)n=a.alternate,n!==null&&Tf(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=o.child,o.child=null):(h=a.sibling,a.sibling=null),Wk(o,!1,h,a,p);break;case"backwards":for(a=null,h=o.child,o.child=null;h!==null;){if(n=h.alternate,n!==null&&Tf(n)===null){o.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Wk(o,!0,a,null,p);break;case"together":Wk(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function tf(n,o){!(o.mode&1)&&n!==null&&(n.alternate=null,o.alternate=null,o.flags|=2)}function si(n,o,a){if(n!==null&&(o.dependencies=n.dependencies),Ws|=o.lanes,!(a&o.childLanes))return null;if(n!==null&&o.child!==n.child)throw Error(pe(153));if(o.child!==null){for(n=o.child,a=Vi(n,n.pendingProps),o.child=a,a.return=o;n.sibling!==null;)n=n.sibling,a=a.sibling=Vi(n,n.pendingProps),a.return=o;a.sibling=null}return o.child}function y$(n,o,a){switch(o.tag){case 3:L4(o),ll();break;case 5:u4(o);break;case 1:nr(o.type)&&Cf(o);break;case 4:yw(o,o.stateNode.containerInfo);break;case 10:var d=o.type._context,h=o.memoizedProps.value;Ct(Ef,d._currentValue),d._currentValue=h;break;case 13:if(d=o.memoizedState,d!==null)return d.dehydrated!==null?(Ct(Ot,Ot.current&1),o.flags|=128,null):a&o.child.childLanes?j4(n,o,a):(Ct(Ot,Ot.current&1),n=si(n,o,a),n!==null?n.sibling:null);Ct(Ot,Ot.current&1);break;case 19:if(d=(a&o.childLanes)!==0,n.flags&128){if(d)return z4(n,o,a);o.flags|=128}if(h=o.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ct(Ot,Ot.current),d)break;return null;case 22:case 23:return o.lanes=0,O4(n,o,a)}return si(n,o,a)}var F4,d0,V4,U4;F4=function(n,o){for(var a=o.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};d0=function(){};V4=function(n,o,a,d){var h=n.memoizedProps;if(h!==d){n=o.stateNode,Os(Mo.current);var p=null;switch(a){case"input":h=Pb(n,h),d=Pb(n,d),p=[];break;case"select":h=Lt({},h,{value:void 0}),d=Lt({},d,{value:void 0}),p=[];break;case"textarea":h=Ob(n,h),d=Ob(n,d),p=[];break;default:typeof h.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=Af)}Lb(a,d);var m;a=null;for(A in h)if(!d.hasOwnProperty(A)&&h.hasOwnProperty(A)&&h[A]!=null)if(A==="style"){var w=h[A];for(m in w)w.hasOwnProperty(m)&&(a||(a={}),a[m]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(dd.hasOwnProperty(A)?p||(p=[]):(p=p||[]).push(A,null));for(A in d){var g=d[A];if(w=h!=null?h[A]:void 0,d.hasOwnProperty(A)&&g!==w&&(g!=null||w!=null))if(A==="style")if(w){for(m in w)!w.hasOwnProperty(m)||g&&g.hasOwnProperty(m)||(a||(a={}),a[m]="");for(m in g)g.hasOwnProperty(m)&&w[m]!==g[m]&&(a||(a={}),a[m]=g[m])}else a||(p||(p=[]),p.push(A,a)),a=g;else A==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,w=w?w.__html:void 0,g!=null&&w!==g&&(p=p||[]).push(A,g)):A==="children"?typeof g!="string"&&typeof g!="number"||(p=p||[]).push(A,""+g):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(dd.hasOwnProperty(A)?(g!=null&&A==="onScroll"&&xt("scroll",n),p||w===g||(p=[])):(p=p||[]).push(A,g))}a&&(p=p||[]).push("style",a);var A=p;(o.updateQueue=A)&&(o.flags|=4)}};U4=function(n,o,a,d){a!==d&&(o.flags|=4)};function xc(n,o){if(!Pt)switch(n.tailMode){case"hidden":o=n.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?o||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function Pn(n){var o=n.alternate!==null&&n.alternate.child===n.child,a=0,d=0;if(o)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,d|=h.subtreeFlags&14680064,d|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,d|=h.subtreeFlags,d|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=d,n.childLanes=a,o}function x$(n,o,a){var d=o.pendingProps;switch(kw(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(o),null;case 1:return nr(o.type)&&_f(),Pn(o),null;case 3:return d=o.stateNode,dl(),Dt(tr),Dt(Rn),Ew(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(Ih(o)?o.flags|=4:n===null||n.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,io!==null&&(b0(io),io=null))),d0(n,o),Pn(o),null;case 5:xw(o);var h=Os(_d.current);if(a=o.type,n!==null&&o.stateNode!=null)V4(n,o,a,d,h),n.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!d){if(o.stateNode===null)throw Error(pe(166));return Pn(o),null}if(n=Os(Mo.current),Ih(o)){d=o.stateNode,a=o.type;var p=o.memoizedProps;switch(d[Do]=o,d[vd]=p,n=(o.mode&1)!==0,a){case"dialog":xt("cancel",d),xt("close",d);break;case"iframe":case"object":case"embed":xt("load",d);break;case"video":case"audio":for(h=0;h<zc.length;h++)xt(zc[h],d);break;case"source":xt("error",d);break;case"img":case"image":case"link":xt("error",d),xt("load",d);break;case"details":xt("toggle",d);break;case"input":PD(d,p),xt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!p.multiple},xt("invalid",d);break;case"textarea":ND(d,p),xt("invalid",d)}Lb(a,p),h=null;for(var m in p)if(p.hasOwnProperty(m)){var w=p[m];m==="children"?typeof w=="string"?d.textContent!==w&&(p.suppressHydrationWarning!==!0&&Th(d.textContent,w,n),h=["children",w]):typeof w=="number"&&d.textContent!==""+w&&(p.suppressHydrationWarning!==!0&&Th(d.textContent,w,n),h=["children",""+w]):dd.hasOwnProperty(m)&&w!=null&&m==="onScroll"&&xt("scroll",d)}switch(a){case"input":Ah(d),BD(d,p,!0);break;case"textarea":Ah(d),OD(d);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(d.onclick=Af)}d=h,o.updateQueue=d,d!==null&&(o.flags|=4)}else{m=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=gM(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=m.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=m.createElement(a,{is:d.is}):(n=m.createElement(a),a==="select"&&(m=n,d.multiple?m.multiple=!0:d.size&&(m.size=d.size))):n=m.createElementNS(n,a),n[Do]=o,n[vd]=d,F4(n,o,!1,!1),o.stateNode=n;e:{switch(m=jb(a,d),a){case"dialog":xt("cancel",n),xt("close",n),h=d;break;case"iframe":case"object":case"embed":xt("load",n),h=d;break;case"video":case"audio":for(h=0;h<zc.length;h++)xt(zc[h],n);h=d;break;case"source":xt("error",n),h=d;break;case"img":case"image":case"link":xt("error",n),xt("load",n),h=d;break;case"details":xt("toggle",n),h=d;break;case"input":PD(n,d),h=Pb(n,d),xt("invalid",n);break;case"option":h=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},h=Lt({},d,{value:void 0}),xt("invalid",n);break;case"textarea":ND(n,d),h=Ob(n,d),xt("invalid",n);break;default:h=d}Lb(a,h),w=h;for(p in w)if(w.hasOwnProperty(p)){var g=w[p];p==="style"?wM(n,g):p==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&kM(n,g)):p==="children"?typeof g=="string"?(a!=="textarea"||g!=="")&&ud(n,g):typeof g=="number"&&ud(n,""+g):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(dd.hasOwnProperty(p)?g!=null&&p==="onScroll"&&xt("scroll",n):g!=null&&nw(n,p,g,m))}switch(a){case"input":Ah(n),BD(n,d,!1);break;case"textarea":Ah(n),OD(n);break;case"option":d.value!=null&&n.setAttribute("value",""+Wi(d.value));break;case"select":n.multiple=!!d.multiple,p=d.value,p!=null?Xa(n,!!d.multiple,p,!1):d.defaultValue!=null&&Xa(n,!!d.multiple,d.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Af)}switch(a){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Pn(o),null;case 6:if(n&&o.stateNode!=null)U4(n,o,n.memoizedProps,d);else{if(typeof d!="string"&&o.stateNode===null)throw Error(pe(166));if(a=Os(_d.current),Os(Mo.current),Ih(o)){if(d=o.stateNode,a=o.memoizedProps,d[Do]=o,(p=d.nodeValue!==a)&&(n=kr,n!==null))switch(n.tag){case 3:Th(d.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Th(d.nodeValue,a,(n.mode&1)!==0)}p&&(o.flags|=4)}else d=(a.nodeType===9?a:a.ownerDocument).createTextNode(d),d[Do]=o,o.stateNode=d}return Pn(o),null;case 13:if(Dt(Ot),d=o.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Pt&&pr!==null&&o.mode&1&&!(o.flags&128))s4(),ll(),o.flags|=98560,p=!1;else if(p=Ih(o),d!==null&&d.dehydrated!==null){if(n===null){if(!p)throw Error(pe(318));if(p=o.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(pe(317));p[Do]=o}else ll(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;Pn(o),p=!1}else io!==null&&(b0(io),io=null),p=!0;if(!p)return o.flags&65536?o:null}return o.flags&128?(o.lanes=a,o):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(o.child.flags|=8192,o.mode&1&&(n===null||Ot.current&1?an===0&&(an=3):jw())),o.updateQueue!==null&&(o.flags|=4),Pn(o),null);case 4:return dl(),d0(n,o),n===null&&bd(o.stateNode.containerInfo),Pn(o),null;case 10:return Aw(o.type._context),Pn(o),null;case 17:return nr(o.type)&&_f(),Pn(o),null;case 19:if(Dt(Ot),p=o.memoizedState,p===null)return Pn(o),null;if(d=(o.flags&128)!==0,m=p.rendering,m===null)if(d)xc(p,!1);else{if(an!==0||n!==null&&n.flags&128)for(n=o.child;n!==null;){if(m=Tf(n),m!==null){for(o.flags|=128,xc(p,!1),d=m.updateQueue,d!==null&&(o.updateQueue=d,o.flags|=4),o.subtreeFlags=0,d=a,a=o.child;a!==null;)p=a,n=d,p.flags&=14680066,m=p.alternate,m===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=m.childLanes,p.lanes=m.lanes,p.child=m.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=m.memoizedProps,p.memoizedState=m.memoizedState,p.updateQueue=m.updateQueue,p.type=m.type,n=m.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ct(Ot,Ot.current&1|2),o.child}n=n.sibling}p.tail!==null&&Qt()>hl&&(o.flags|=128,d=!0,xc(p,!1),o.lanes=4194304)}else{if(!d)if(n=Tf(m),n!==null){if(o.flags|=128,d=!0,a=n.updateQueue,a!==null&&(o.updateQueue=a,o.flags|=4),xc(p,!0),p.tail===null&&p.tailMode==="hidden"&&!m.alternate&&!Pt)return Pn(o),null}else 2*Qt()-p.renderingStartTime>hl&&a!==1073741824&&(o.flags|=128,d=!0,xc(p,!1),o.lanes=4194304);p.isBackwards?(m.sibling=o.child,o.child=m):(a=p.last,a!==null?a.sibling=m:o.child=m,p.last=m)}return p.tail!==null?(o=p.tail,p.rendering=o,p.tail=o.sibling,p.renderingStartTime=Qt(),o.sibling=null,a=Ot.current,Ct(Ot,d?a&1|2:a&1),o):(Pn(o),null);case 22:case 23:return Lw(),d=o.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(o.flags|=8192),d&&o.mode&1?fr&1073741824&&(Pn(o),o.subtreeFlags&6&&(o.flags|=8192)):Pn(o),null;case 24:return null;case 25:return null}throw Error(pe(156,o.tag))}function E$(n,o){switch(kw(o),o.tag){case 1:return nr(o.type)&&_f(),n=o.flags,n&65536?(o.flags=n&-65537|128,o):null;case 3:return dl(),Dt(tr),Dt(Rn),Ew(),n=o.flags,n&65536&&!(n&128)?(o.flags=n&-65537|128,o):null;case 5:return xw(o),null;case 13:if(Dt(Ot),n=o.memoizedState,n!==null&&n.dehydrated!==null){if(o.alternate===null)throw Error(pe(340));ll()}return n=o.flags,n&65536?(o.flags=n&-65537|128,o):null;case 19:return Dt(Ot),null;case 4:return dl(),null;case 10:return Aw(o.type._context),null;case 22:case 23:return Lw(),null;case 24:return null;default:return null}}var Bh=!1,On=!1,S$=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function Ya(n,o){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(d){Vt(n,o,d)}else a.current=null}function u0(n,o,a){try{a()}catch(d){Vt(n,o,d)}}var y5=!1;function D$(n,o){if(Kb=bf,n=GM(),mw(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var d=a.getSelection&&a.getSelection();if(d&&d.rangeCount!==0){a=d.anchorNode;var h=d.anchorOffset,p=d.focusNode;d=d.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var m=0,w=-1,g=-1,A=0,C=0,y=n,v=null;t:for(;;){for(var x;y!==a||h!==0&&y.nodeType!==3||(w=m+h),y!==p||d!==0&&y.nodeType!==3||(g=m+d),y.nodeType===3&&(m+=y.nodeValue.length),(x=y.firstChild)!==null;)v=y,y=x;for(;;){if(y===n)break t;if(v===a&&++A===h&&(w=m),v===p&&++C===d&&(g=m),(x=y.nextSibling)!==null)break;y=v,v=y.parentNode}y=x}a=w===-1||g===-1?null:{start:w,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qb={focusedElem:n,selectionRange:a},bf=!1,Ce=o;Ce!==null;)if(o=Ce,n=o.child,(o.subtreeFlags&1028)!==0&&n!==null)n.return=o,Ce=n;else for(;Ce!==null;){o=Ce;try{var S=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var I=S.memoizedProps,N=S.memoizedState,P=o.stateNode,B=P.getSnapshotBeforeUpdate(o.elementType===o.type?I:no(o.type,I),N);P.__reactInternalSnapshotBeforeUpdate=B}break;case 3:var O=o.stateNode.containerInfo;O.nodeType===1?O.textContent="":O.nodeType===9&&O.documentElement&&O.removeChild(O.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(L){Vt(o,o.return,L)}if(n=o.sibling,n!==null){n.return=o.return,Ce=n;break}Ce=o.return}return S=y5,y5=!1,S}function Yc(n,o,a){var d=o.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var h=d=d.next;do{if((h.tag&n)===n){var p=h.destroy;h.destroy=void 0,p!==void 0&&u0(o,a,p)}h=h.next}while(h!==d)}}function hp(n,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&n)===n){var d=a.create;a.destroy=d()}a=a.next}while(a!==o)}}function h0(n){var o=n.ref;if(o!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof o=="function"?o(n):o.current=n}}function H4(n){var o=n.alternate;o!==null&&(n.alternate=null,H4(o)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(o=n.stateNode,o!==null&&(delete o[Do],delete o[vd],delete o[Jb],delete o[d$],delete o[u$])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function $4(n){return n.tag===5||n.tag===3||n.tag===4}function x5(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||$4(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function f0(n,o,a){var d=n.tag;if(d===5||d===6)n=n.stateNode,o?a.nodeType===8?a.parentNode.insertBefore(n,o):a.insertBefore(n,o):(a.nodeType===8?(o=a.parentNode,o.insertBefore(n,a)):(o=a,o.appendChild(n)),a=a._reactRootContainer,a!=null||o.onclick!==null||(o.onclick=Af));else if(d!==4&&(n=n.child,n!==null))for(f0(n,o,a),n=n.sibling;n!==null;)f0(n,o,a),n=n.sibling}function p0(n,o,a){var d=n.tag;if(d===5||d===6)n=n.stateNode,o?a.insertBefore(n,o):a.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(p0(n,o,a),n=n.sibling;n!==null;)p0(n,o,a),n=n.sibling}var _n=null,ro=!1;function vi(n,o,a){for(a=a.child;a!==null;)W4(n,o,a),a=a.sibling}function W4(n,o,a){if(Io&&typeof Io.onCommitFiberUnmount=="function")try{Io.onCommitFiberUnmount(op,a)}catch{}switch(a.tag){case 5:On||Ya(a,o);case 6:var d=_n,h=ro;_n=null,vi(n,o,a),_n=d,ro=h,_n!==null&&(ro?(n=_n,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):_n.removeChild(a.stateNode));break;case 18:_n!==null&&(ro?(n=_n,a=a.stateNode,n.nodeType===8?jk(n.parentNode,a):n.nodeType===1&&jk(n,a),md(n)):jk(_n,a.stateNode));break;case 4:d=_n,h=ro,_n=a.stateNode.containerInfo,ro=!0,vi(n,o,a),_n=d,ro=h;break;case 0:case 11:case 14:case 15:if(!On&&(d=a.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){h=d=d.next;do{var p=h,m=p.destroy;p=p.tag,m!==void 0&&(p&2||p&4)&&u0(a,o,m),h=h.next}while(h!==d)}vi(n,o,a);break;case 1:if(!On&&(Ya(a,o),d=a.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(w){Vt(a,o,w)}vi(n,o,a);break;case 21:vi(n,o,a);break;case 22:a.mode&1?(On=(d=On)||a.memoizedState!==null,vi(n,o,a),On=d):vi(n,o,a);break;default:vi(n,o,a)}}function E5(n){var o=n.updateQueue;if(o!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new S$),o.forEach(function(d){var h=L$.bind(null,n,d);a.has(d)||(a.add(d),d.then(h,h))})}}function to(n,o){var a=o.deletions;if(a!==null)for(var d=0;d<a.length;d++){var h=a[d];try{var p=n,m=o,w=m;e:for(;w!==null;){switch(w.tag){case 5:_n=w.stateNode,ro=!1;break e;case 3:_n=w.stateNode.containerInfo,ro=!0;break e;case 4:_n=w.stateNode.containerInfo,ro=!0;break e}w=w.return}if(_n===null)throw Error(pe(160));W4(p,m,h),_n=null,ro=!1;var g=h.alternate;g!==null&&(g.return=null),h.return=null}catch(A){Vt(h,o,A)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)q4(o,n),o=o.sibling}function q4(n,o){var a=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(to(o,n),Eo(n),d&4){try{Yc(3,n,n.return),hp(3,n)}catch(I){Vt(n,n.return,I)}try{Yc(5,n,n.return)}catch(I){Vt(n,n.return,I)}}break;case 1:to(o,n),Eo(n),d&512&&a!==null&&Ya(a,a.return);break;case 5:if(to(o,n),Eo(n),d&512&&a!==null&&Ya(a,a.return),n.flags&32){var h=n.stateNode;try{ud(h,"")}catch(I){Vt(n,n.return,I)}}if(d&4&&(h=n.stateNode,h!=null)){var p=n.memoizedProps,m=a!==null?a.memoizedProps:p,w=n.type,g=n.updateQueue;if(n.updateQueue=null,g!==null)try{w==="input"&&p.type==="radio"&&p.name!=null&&pM(h,p),jb(w,m);var A=jb(w,p);for(m=0;m<g.length;m+=2){var C=g[m],y=g[m+1];C==="style"?wM(h,y):C==="dangerouslySetInnerHTML"?kM(h,y):C==="children"?ud(h,y):nw(h,C,y,A)}switch(w){case"input":Bb(h,p);break;case"textarea":mM(h,p);break;case"select":var v=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!p.multiple;var x=p.value;x!=null?Xa(h,!!p.multiple,x,!1):v!==!!p.multiple&&(p.defaultValue!=null?Xa(h,!!p.multiple,p.defaultValue,!0):Xa(h,!!p.multiple,p.multiple?[]:"",!1))}h[vd]=p}catch(I){Vt(n,n.return,I)}}break;case 6:if(to(o,n),Eo(n),d&4){if(n.stateNode===null)throw Error(pe(162));h=n.stateNode,p=n.memoizedProps;try{h.nodeValue=p}catch(I){Vt(n,n.return,I)}}break;case 3:if(to(o,n),Eo(n),d&4&&a!==null&&a.memoizedState.isDehydrated)try{md(o.containerInfo)}catch(I){Vt(n,n.return,I)}break;case 4:to(o,n),Eo(n);break;case 13:to(o,n),Eo(n),h=n.child,h.flags&8192&&(p=h.memoizedState!==null,h.stateNode.isHidden=p,!p||h.alternate!==null&&h.alternate.memoizedState!==null||(Ow=Qt())),d&4&&E5(n);break;case 22:if(C=a!==null&&a.memoizedState!==null,n.mode&1?(On=(A=On)||C,to(o,n),On=A):to(o,n),Eo(n),d&8192){if(A=n.memoizedState!==null,(n.stateNode.isHidden=A)&&!C&&n.mode&1)for(Ce=n,C=n.child;C!==null;){for(y=Ce=C;Ce!==null;){switch(v=Ce,x=v.child,v.tag){case 0:case 11:case 14:case 15:Yc(4,v,v.return);break;case 1:Ya(v,v.return);var S=v.stateNode;if(typeof S.componentWillUnmount=="function"){d=v,a=v.return;try{o=d,S.props=o.memoizedProps,S.state=o.memoizedState,S.componentWillUnmount()}catch(I){Vt(d,a,I)}}break;case 5:Ya(v,v.return);break;case 22:if(v.memoizedState!==null){D5(y);continue}}x!==null?(x.return=v,Ce=x):D5(y)}C=C.sibling}e:for(C=null,y=n;;){if(y.tag===5){if(C===null){C=y;try{h=y.stateNode,A?(p=h.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(w=y.stateNode,g=y.memoizedProps.style,m=g!=null&&g.hasOwnProperty("display")?g.display:null,w.style.display=bM("display",m))}catch(I){Vt(n,n.return,I)}}}else if(y.tag===6){if(C===null)try{y.stateNode.nodeValue=A?"":y.memoizedProps}catch(I){Vt(n,n.return,I)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===n)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;C===y&&(C=null),y=y.return}C===y&&(C=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:to(o,n),Eo(n),d&4&&E5(n);break;case 21:break;default:to(o,n),Eo(n)}}function Eo(n){var o=n.flags;if(o&2){try{e:{for(var a=n.return;a!==null;){if($4(a)){var d=a;break e}a=a.return}throw Error(pe(160))}switch(d.tag){case 5:var h=d.stateNode;d.flags&32&&(ud(h,""),d.flags&=-33);var p=x5(n);p0(n,p,h);break;case 3:case 4:var m=d.stateNode.containerInfo,w=x5(n);f0(n,w,m);break;default:throw Error(pe(161))}}catch(g){Vt(n,n.return,g)}n.flags&=-3}o&4096&&(n.flags&=-4097)}function T$(n,o,a){Ce=n,G4(n)}function G4(n,o,a){for(var d=(n.mode&1)!==0;Ce!==null;){var h=Ce,p=h.child;if(h.tag===22&&d){var m=h.memoizedState!==null||Bh;if(!m){var w=h.alternate,g=w!==null&&w.memoizedState!==null||On;w=Bh;var A=On;if(Bh=m,(On=g)&&!A)for(Ce=h;Ce!==null;)m=Ce,g=m.child,m.tag===22&&m.memoizedState!==null?T5(h):g!==null?(g.return=m,Ce=g):T5(h);for(;p!==null;)Ce=p,G4(p),p=p.sibling;Ce=h,Bh=w,On=A}S5(n)}else h.subtreeFlags&8772&&p!==null?(p.return=h,Ce=p):S5(n)}}function S5(n){for(;Ce!==null;){var o=Ce;if(o.flags&8772){var a=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:On||hp(5,o);break;case 1:var d=o.stateNode;if(o.flags&4&&!On)if(a===null)d.componentDidMount();else{var h=o.elementType===o.type?a.memoizedProps:no(o.type,a.memoizedProps);d.componentDidUpdate(h,a.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var p=o.updateQueue;p!==null&&u5(o,p,d);break;case 3:var m=o.updateQueue;if(m!==null){if(a=null,o.child!==null)switch(o.child.tag){case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}u5(o,m,a)}break;case 5:var w=o.stateNode;if(a===null&&o.flags&4){a=w;var g=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&a.focus();break;case"img":g.src&&(a.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var A=o.alternate;if(A!==null){var C=A.memoizedState;if(C!==null){var y=C.dehydrated;y!==null&&md(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}On||o.flags&512&&h0(o)}catch(v){Vt(o,o.return,v)}}if(o===n){Ce=null;break}if(a=o.sibling,a!==null){a.return=o.return,Ce=a;break}Ce=o.return}}function D5(n){for(;Ce!==null;){var o=Ce;if(o===n){Ce=null;break}var a=o.sibling;if(a!==null){a.return=o.return,Ce=a;break}Ce=o.return}}function T5(n){for(;Ce!==null;){var o=Ce;try{switch(o.tag){case 0:case 11:case 15:var a=o.return;try{hp(4,o)}catch(g){Vt(o,a,g)}break;case 1:var d=o.stateNode;if(typeof d.componentDidMount=="function"){var h=o.return;try{d.componentDidMount()}catch(g){Vt(o,h,g)}}var p=o.return;try{h0(o)}catch(g){Vt(o,p,g)}break;case 5:var m=o.return;try{h0(o)}catch(g){Vt(o,m,g)}}}catch(g){Vt(o,o.return,g)}if(o===n){Ce=null;break}var w=o.sibling;if(w!==null){w.return=o.return,Ce=w;break}Ce=o.return}}var I$=Math.ceil,Pf=li.ReactCurrentDispatcher,Bw=li.ReactCurrentOwner,Fr=li.ReactCurrentBatchConfig,st=0,pn=null,Xt=null,xn=0,fr=0,Za=Xi(0),an=0,Ed=null,Ws=0,fp=0,Nw=0,Zc=null,Jn=null,Ow=0,hl=1/0,Yo=null,Bf=!1,m0=null,zi=null,Nh=!1,Pi=null,Nf=0,Jc=0,g0=null,nf=-1,rf=0;function Fn(){return st&6?Qt():nf!==-1?nf:nf=Qt()}function Fi(n){return n.mode&1?st&2&&xn!==0?xn&-xn:f$.transition!==null?(rf===0&&(rf=MM()),rf):(n=ut,n!==0||(n=window.event,n=n===void 0?16:jM(n.type)),n):1}function ao(n,o,a,d){if(50<Jc)throw Jc=0,g0=null,Error(pe(185));zd(n,a,d),(!(st&2)||n!==pn)&&(n===pn&&(!(st&2)&&(fp|=a),an===4&&Ti(n,xn)),rr(n,d),a===1&&st===0&&!(o.mode&1)&&(hl=Qt()+500,cp&&es()))}function rr(n,o){var a=n.callbackNode;fH(n,o);var d=kf(n,n===pn?xn:0);if(d===0)a!==null&&jD(a),n.callbackNode=null,n.callbackPriority=0;else if(o=d&-d,n.callbackPriority!==o){if(a!=null&&jD(a),o===1)n.tag===0?h$(I5.bind(null,n)):r4(I5.bind(null,n)),l$(function(){!(st&6)&&es()}),a=null;else{switch(PM(d)){case 1:a=aw;break;case 4:a=TM;break;case 16:a=gf;break;case 536870912:a=IM;break;default:a=gf}a=t3(a,K4.bind(null,n))}n.callbackPriority=o,n.callbackNode=a}}function K4(n,o){if(nf=-1,rf=0,st&6)throw Error(pe(327));var a=n.callbackNode;if(ol()&&n.callbackNode!==a)return null;var d=kf(n,n===pn?xn:0);if(d===0)return null;if(d&30||d&n.expiredLanes||o)o=Of(n,d);else{o=d;var h=st;st|=2;var p=Y4();(pn!==n||xn!==o)&&(Yo=null,hl=Qt()+500,zs(n,o));do try{B$();break}catch(w){Q4(n,w)}while(!0);vw(),Pf.current=p,st=h,Xt!==null?o=0:(pn=null,xn=0,o=an)}if(o!==0){if(o===2&&(h=Hb(n),h!==0&&(d=h,o=k0(n,h))),o===1)throw a=Ed,zs(n,0),Ti(n,d),rr(n,Qt()),a;if(o===6)Ti(n,d);else{if(h=n.current.alternate,!(d&30)&&!M$(h)&&(o=Of(n,d),o===2&&(p=Hb(n),p!==0&&(d=p,o=k0(n,p))),o===1))throw a=Ed,zs(n,0),Ti(n,d),rr(n,Qt()),a;switch(n.finishedWork=h,n.finishedLanes=d,o){case 0:case 1:throw Error(pe(345));case 2:Ts(n,Jn,Yo);break;case 3:if(Ti(n,d),(d&130023424)===d&&(o=Ow+500-Qt(),10<o)){if(kf(n,0)!==0)break;if(h=n.suspendedLanes,(h&d)!==d){Fn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Zb(Ts.bind(null,n,Jn,Yo),o);break}Ts(n,Jn,Yo);break;case 4:if(Ti(n,d),(d&4194240)===d)break;for(o=n.eventTimes,h=-1;0<d;){var m=31-so(d);p=1<<m,m=o[m],m>h&&(h=m),d&=~p}if(d=h,d=Qt()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*I$(d/1960))-d,10<d){n.timeoutHandle=Zb(Ts.bind(null,n,Jn,Yo),d);break}Ts(n,Jn,Yo);break;case 5:Ts(n,Jn,Yo);break;default:throw Error(pe(329))}}}return rr(n,Qt()),n.callbackNode===a?K4.bind(null,n):null}function k0(n,o){var a=Zc;return n.current.memoizedState.isDehydrated&&(zs(n,o).flags|=256),n=Of(n,o),n!==2&&(o=Jn,Jn=a,o!==null&&b0(o)),n}function b0(n){Jn===null?Jn=n:Jn.push.apply(Jn,n)}function M$(n){for(var o=n;;){if(o.flags&16384){var a=o.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var d=0;d<a.length;d++){var h=a[d],p=h.getSnapshot;h=h.value;try{if(!co(p(),h))return!1}catch{return!1}}}if(a=o.child,o.subtreeFlags&16384&&a!==null)a.return=o,o=a;else{if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Ti(n,o){for(o&=~Nw,o&=~fp,n.suspendedLanes|=o,n.pingedLanes&=~o,n=n.expirationTimes;0<o;){var a=31-so(o),d=1<<a;n[a]=-1,o&=~d}}function I5(n){if(st&6)throw Error(pe(327));ol();var o=kf(n,0);if(!(o&1))return rr(n,Qt()),null;var a=Of(n,o);if(n.tag!==0&&a===2){var d=Hb(n);d!==0&&(o=d,a=k0(n,d))}if(a===1)throw a=Ed,zs(n,0),Ti(n,o),rr(n,Qt()),a;if(a===6)throw Error(pe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=o,Ts(n,Jn,Yo),rr(n,Qt()),null}function Rw(n,o){var a=st;st|=1;try{return n(o)}finally{st=a,st===0&&(hl=Qt()+500,cp&&es())}}function qs(n){Pi!==null&&Pi.tag===0&&!(st&6)&&ol();var o=st;st|=1;var a=Fr.transition,d=ut;try{if(Fr.transition=null,ut=1,n)return n()}finally{ut=d,Fr.transition=a,st=o,!(st&6)&&es()}}function Lw(){fr=Za.current,Dt(Za)}function zs(n,o){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,a$(a)),Xt!==null)for(a=Xt.return;a!==null;){var d=a;switch(kw(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&_f();break;case 3:dl(),Dt(tr),Dt(Rn),Ew();break;case 5:xw(d);break;case 4:dl();break;case 13:Dt(Ot);break;case 19:Dt(Ot);break;case 10:Aw(d.type._context);break;case 22:case 23:Lw()}a=a.return}if(pn=n,Xt=n=Vi(n.current,null),xn=fr=o,an=0,Ed=null,Nw=fp=Ws=0,Jn=Zc=null,Ns!==null){for(o=0;o<Ns.length;o++)if(a=Ns[o],d=a.interleaved,d!==null){a.interleaved=null;var h=d.next,p=a.pending;if(p!==null){var m=p.next;p.next=h,d.next=m}a.pending=d}Ns=null}return n}function Q4(n,o){do{var a=Xt;try{if(vw(),Xh.current=Mf,If){for(var d=Rt.memoizedState;d!==null;){var h=d.queue;h!==null&&(h.pending=null),d=d.next}If=!1}if($s=0,hn=sn=Rt=null,Qc=!1,Cd=0,Bw.current=null,a===null||a.return===null){an=1,Ed=o,Xt=null;break}e:{var p=n,m=a.return,w=a,g=o;if(o=xn,w.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var A=g,C=w,y=C.tag;if(!(C.mode&1)&&(y===0||y===11||y===15)){var v=C.alternate;v?(C.updateQueue=v.updateQueue,C.memoizedState=v.memoizedState,C.lanes=v.lanes):(C.updateQueue=null,C.memoizedState=null)}var x=k5(m);if(x!==null){x.flags&=-257,b5(x,m,w,p,o),x.mode&1&&g5(p,A,o),o=x,g=A;var S=o.updateQueue;if(S===null){var I=new Set;I.add(g),o.updateQueue=I}else S.add(g);break e}else{if(!(o&1)){g5(p,A,o),jw();break e}g=Error(pe(426))}}else if(Pt&&w.mode&1){var N=k5(m);if(N!==null){!(N.flags&65536)&&(N.flags|=256),b5(N,m,w,p,o),bw(ul(g,w));break e}}p=g=ul(g,w),an!==4&&(an=2),Zc===null?Zc=[p]:Zc.push(p),p=m;do{switch(p.tag){case 3:p.flags|=65536,o&=-o,p.lanes|=o;var P=P4(p,g,o);d5(p,P);break e;case 1:w=g;var B=p.type,O=p.stateNode;if(!(p.flags&128)&&(typeof B.getDerivedStateFromError=="function"||O!==null&&typeof O.componentDidCatch=="function"&&(zi===null||!zi.has(O)))){p.flags|=65536,o&=-o,p.lanes|=o;var L=B4(p,w,o);d5(p,L);break e}}p=p.return}while(p!==null)}J4(a)}catch(V){o=V,Xt===a&&a!==null&&(Xt=a=a.return);continue}break}while(!0)}function Y4(){var n=Pf.current;return Pf.current=Mf,n===null?Mf:n}function jw(){(an===0||an===3||an===2)&&(an=4),pn===null||!(Ws&268435455)&&!(fp&268435455)||Ti(pn,xn)}function Of(n,o){var a=st;st|=2;var d=Y4();(pn!==n||xn!==o)&&(Yo=null,zs(n,o));do try{P$();break}catch(h){Q4(n,h)}while(!0);if(vw(),st=a,Pf.current=d,Xt!==null)throw Error(pe(261));return pn=null,xn=0,an}function P$(){for(;Xt!==null;)Z4(Xt)}function B$(){for(;Xt!==null&&!oH();)Z4(Xt)}function Z4(n){var o=e3(n.alternate,n,fr);n.memoizedProps=n.pendingProps,o===null?J4(n):Xt=o,Bw.current=null}function J4(n){var o=n;do{var a=o.alternate;if(n=o.return,o.flags&32768){if(a=E$(a,o),a!==null){a.flags&=32767,Xt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{an=6,Xt=null;return}}else if(a=x$(a,o,fr),a!==null){Xt=a;return}if(o=o.sibling,o!==null){Xt=o;return}Xt=o=n}while(o!==null);an===0&&(an=5)}function Ts(n,o,a){var d=ut,h=Fr.transition;try{Fr.transition=null,ut=1,N$(n,o,a,d)}finally{Fr.transition=h,ut=d}return null}function N$(n,o,a,d){do ol();while(Pi!==null);if(st&6)throw Error(pe(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(pe(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(pH(n,p),n===pn&&(Xt=pn=null,xn=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Nh||(Nh=!0,t3(gf,function(){return ol(),null})),p=(a.flags&15990)!==0,a.subtreeFlags&15990||p){p=Fr.transition,Fr.transition=null;var m=ut;ut=1;var w=st;st|=4,Bw.current=null,D$(n,a),q4(a,n),e$(Qb),bf=!!Kb,Qb=Kb=null,n.current=a,T$(a),iH(),st=w,ut=m,Fr.transition=p}else n.current=a;if(Nh&&(Nh=!1,Pi=n,Nf=h),p=n.pendingLanes,p===0&&(zi=null),lH(a.stateNode),rr(n,Qt()),o!==null)for(d=n.onRecoverableError,a=0;a<o.length;a++)h=o[a],d(h.value,{componentStack:h.stack,digest:h.digest});if(Bf)throw Bf=!1,n=m0,m0=null,n;return Nf&1&&n.tag!==0&&ol(),p=n.pendingLanes,p&1?n===g0?Jc++:(Jc=0,g0=n):Jc=0,es(),null}function ol(){if(Pi!==null){var n=PM(Nf),o=Fr.transition,a=ut;try{if(Fr.transition=null,ut=16>n?16:n,Pi===null)var d=!1;else{if(n=Pi,Pi=null,Nf=0,st&6)throw Error(pe(331));var h=st;for(st|=4,Ce=n.current;Ce!==null;){var p=Ce,m=p.child;if(Ce.flags&16){var w=p.deletions;if(w!==null){for(var g=0;g<w.length;g++){var A=w[g];for(Ce=A;Ce!==null;){var C=Ce;switch(C.tag){case 0:case 11:case 15:Yc(8,C,p)}var y=C.child;if(y!==null)y.return=C,Ce=y;else for(;Ce!==null;){C=Ce;var v=C.sibling,x=C.return;if(H4(C),C===A){Ce=null;break}if(v!==null){v.return=x,Ce=v;break}Ce=x}}}var S=p.alternate;if(S!==null){var I=S.child;if(I!==null){S.child=null;do{var N=I.sibling;I.sibling=null,I=N}while(I!==null)}}Ce=p}}if(p.subtreeFlags&2064&&m!==null)m.return=p,Ce=m;else e:for(;Ce!==null;){if(p=Ce,p.flags&2048)switch(p.tag){case 0:case 11:case 15:Yc(9,p,p.return)}var P=p.sibling;if(P!==null){P.return=p.return,Ce=P;break e}Ce=p.return}}var B=n.current;for(Ce=B;Ce!==null;){m=Ce;var O=m.child;if(m.subtreeFlags&2064&&O!==null)O.return=m,Ce=O;else e:for(m=B;Ce!==null;){if(w=Ce,w.flags&2048)try{switch(w.tag){case 0:case 11:case 15:hp(9,w)}}catch(V){Vt(w,w.return,V)}if(w===m){Ce=null;break e}var L=w.sibling;if(L!==null){L.return=w.return,Ce=L;break e}Ce=w.return}}if(st=h,es(),Io&&typeof Io.onPostCommitFiberRoot=="function")try{Io.onPostCommitFiberRoot(op,n)}catch{}d=!0}return d}finally{ut=a,Fr.transition=o}}return!1}function M5(n,o,a){o=ul(a,o),o=P4(n,o,1),n=ji(n,o,1),o=Fn(),n!==null&&(zd(n,1,o),rr(n,o))}function Vt(n,o,a){if(n.tag===3)M5(n,n,a);else for(;o!==null;){if(o.tag===3){M5(o,n,a);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(zi===null||!zi.has(d))){n=ul(a,n),n=B4(o,n,1),o=ji(o,n,1),n=Fn(),o!==null&&(zd(o,1,n),rr(o,n));break}}o=o.return}}function O$(n,o,a){var d=n.pingCache;d!==null&&d.delete(o),o=Fn(),n.pingedLanes|=n.suspendedLanes&a,pn===n&&(xn&a)===a&&(an===4||an===3&&(xn&130023424)===xn&&500>Qt()-Ow?zs(n,0):Nw|=a),rr(n,o)}function X4(n,o){o===0&&(n.mode&1?(o=yh,yh<<=1,!(yh&130023424)&&(yh=4194304)):o=1);var a=Fn();n=ii(n,o),n!==null&&(zd(n,o,a),rr(n,a))}function R$(n){var o=n.memoizedState,a=0;o!==null&&(a=o.retryLane),X4(n,a)}function L$(n,o){var a=0;switch(n.tag){case 13:var d=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(pe(314))}d!==null&&d.delete(o),X4(n,a)}var e3;e3=function(n,o,a){if(n!==null)if(n.memoizedProps!==o.pendingProps||tr.current)Xn=!0;else{if(!(n.lanes&a)&&!(o.flags&128))return Xn=!1,y$(n,o,a);Xn=!!(n.flags&131072)}else Xn=!1,Pt&&o.flags&1048576&&o4(o,xf,o.index);switch(o.lanes=0,o.tag){case 2:var d=o.type;tf(n,o),n=o.pendingProps;var h=al(o,Rn.current);rl(o,a),h=Dw(null,o,d,n,h,a);var p=Tw();return o.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,nr(d)?(p=!0,Cf(o)):p=!1,o.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Cw(o),h.updater=up,o.stateNode=h,h._reactInternals=o,o0(o,d,n,a),o=a0(null,o,d,!0,p,a)):(o.tag=0,Pt&&p&&gw(o),zn(null,o,h,a),o=o.child),o;case 16:d=o.elementType;e:{switch(tf(n,o),n=o.pendingProps,h=d._init,d=h(d._payload),o.type=d,h=o.tag=z$(d),n=no(d,n),h){case 0:o=s0(null,o,d,n,a);break e;case 1:o=A5(null,o,d,n,a);break e;case 11:o=w5(null,o,d,n,a);break e;case 14:o=v5(null,o,d,no(d.type,n),a);break e}throw Error(pe(306,d,""))}return o;case 0:return d=o.type,h=o.pendingProps,h=o.elementType===d?h:no(d,h),s0(n,o,d,h,a);case 1:return d=o.type,h=o.pendingProps,h=o.elementType===d?h:no(d,h),A5(n,o,d,h,a);case 3:e:{if(L4(o),n===null)throw Error(pe(387));d=o.pendingProps,p=o.memoizedState,h=p.element,d4(n,o),Df(o,d,null,a);var m=o.memoizedState;if(d=m.element,p.isDehydrated)if(p={element:d,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},o.updateQueue.baseState=p,o.memoizedState=p,o.flags&256){h=ul(Error(pe(423)),o),o=_5(n,o,d,a,h);break e}else if(d!==h){h=ul(Error(pe(424)),o),o=_5(n,o,d,a,h);break e}else for(pr=Li(o.stateNode.containerInfo.firstChild),kr=o,Pt=!0,io=null,a=l4(o,null,d,a),o.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ll(),d===h){o=si(n,o,a);break e}zn(n,o,d,a)}o=o.child}return o;case 5:return u4(o),n===null&&t0(o),d=o.type,h=o.pendingProps,p=n!==null?n.memoizedProps:null,m=h.children,Yb(d,h)?m=null:p!==null&&Yb(d,p)&&(o.flags|=32),R4(n,o),zn(n,o,m,a),o.child;case 6:return n===null&&t0(o),null;case 13:return j4(n,o,a);case 4:return yw(o,o.stateNode.containerInfo),d=o.pendingProps,n===null?o.child=cl(o,null,d,a):zn(n,o,d,a),o.child;case 11:return d=o.type,h=o.pendingProps,h=o.elementType===d?h:no(d,h),w5(n,o,d,h,a);case 7:return zn(n,o,o.pendingProps,a),o.child;case 8:return zn(n,o,o.pendingProps.children,a),o.child;case 12:return zn(n,o,o.pendingProps.children,a),o.child;case 10:e:{if(d=o.type._context,h=o.pendingProps,p=o.memoizedProps,m=h.value,Ct(Ef,d._currentValue),d._currentValue=m,p!==null)if(co(p.value,m)){if(p.children===h.children&&!tr.current){o=si(n,o,a);break e}}else for(p=o.child,p!==null&&(p.return=o);p!==null;){var w=p.dependencies;if(w!==null){m=p.child;for(var g=w.firstContext;g!==null;){if(g.context===d){if(p.tag===1){g=ti(-1,a&-a),g.tag=2;var A=p.updateQueue;if(A!==null){A=A.shared;var C=A.pending;C===null?g.next=g:(g.next=C.next,C.next=g),A.pending=g}}p.lanes|=a,g=p.alternate,g!==null&&(g.lanes|=a),n0(p.return,a,o),w.lanes|=a;break}g=g.next}}else if(p.tag===10)m=p.type===o.type?null:p.child;else if(p.tag===18){if(m=p.return,m===null)throw Error(pe(341));m.lanes|=a,w=m.alternate,w!==null&&(w.lanes|=a),n0(m,a,o),m=p.sibling}else m=p.child;if(m!==null)m.return=p;else for(m=p;m!==null;){if(m===o){m=null;break}if(p=m.sibling,p!==null){p.return=m.return,m=p;break}m=m.return}p=m}zn(n,o,h.children,a),o=o.child}return o;case 9:return h=o.type,d=o.pendingProps.children,rl(o,a),h=Ur(h),d=d(h),o.flags|=1,zn(n,o,d,a),o.child;case 14:return d=o.type,h=no(d,o.pendingProps),h=no(d.type,h),v5(n,o,d,h,a);case 15:return N4(n,o,o.type,o.pendingProps,a);case 17:return d=o.type,h=o.pendingProps,h=o.elementType===d?h:no(d,h),tf(n,o),o.tag=1,nr(d)?(n=!0,Cf(o)):n=!1,rl(o,a),M4(o,d,h),o0(o,d,h,a),a0(null,o,d,!0,n,a);case 19:return z4(n,o,a);case 22:return O4(n,o,a)}throw Error(pe(156,o.tag))};function t3(n,o){return DM(n,o)}function j$(n,o,a,d){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zr(n,o,a,d){return new j$(n,o,a,d)}function zw(n){return n=n.prototype,!(!n||!n.isReactComponent)}function z$(n){if(typeof n=="function")return zw(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ow)return 11;if(n===iw)return 14}return 2}function Vi(n,o){var a=n.alternate;return a===null?(a=zr(n.tag,o,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=o,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,o=n.dependencies,a.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function of(n,o,a,d,h,p){var m=2;if(d=n,typeof n=="function")zw(n)&&(m=1);else if(typeof n=="string")m=5;else e:switch(n){case Va:return Fs(a.children,h,p,o);case rw:m=8,h|=8;break;case Db:return n=zr(12,a,o,h|2),n.elementType=Db,n.lanes=p,n;case Tb:return n=zr(13,a,o,h),n.elementType=Tb,n.lanes=p,n;case Ib:return n=zr(19,a,o,h),n.elementType=Ib,n.lanes=p,n;case uM:return pp(a,h,p,o);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case cM:m=10;break e;case dM:m=9;break e;case ow:m=11;break e;case iw:m=14;break e;case xi:m=16,d=null;break e}throw Error(pe(130,n==null?n:typeof n,""))}return o=zr(m,a,o,h),o.elementType=n,o.type=d,o.lanes=p,o}function Fs(n,o,a,d){return n=zr(7,n,d,o),n.lanes=a,n}function pp(n,o,a,d){return n=zr(22,n,d,o),n.elementType=uM,n.lanes=a,n.stateNode={isHidden:!1},n}function qk(n,o,a){return n=zr(6,n,null,o),n.lanes=a,n}function Gk(n,o,a){return o=zr(4,n.children!==null?n.children:[],n.key,o),o.lanes=a,o.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},o}function F$(n,o,a,d,h){this.tag=o,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sk(0),this.expirationTimes=Sk(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sk(0),this.identifierPrefix=d,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Fw(n,o,a,d,h,p,m,w,g){return n=new F$(n,o,a,w,g),o===1?(o=1,p===!0&&(o|=8)):o=0,p=zr(3,null,null,o),n.current=p,p.stateNode=n,p.memoizedState={element:d,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cw(p),n}function V$(n,o,a){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fa,key:d==null?null:""+d,children:n,containerInfo:o,implementation:a}}function n3(n){if(!n)return qi;n=n._reactInternals;e:{if(Js(n)!==n||n.tag!==1)throw Error(pe(170));var o=n;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(nr(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(pe(171))}if(n.tag===1){var a=n.type;if(nr(a))return n4(n,a,o)}return o}function r3(n,o,a,d,h,p,m,w,g){return n=Fw(a,d,!0,n,h,p,m,w,g),n.context=n3(null),a=n.current,d=Fn(),h=Fi(a),p=ti(d,h),p.callback=o??null,ji(a,p,h),n.current.lanes=h,zd(n,h,d),rr(n,d),n}function mp(n,o,a,d){var h=o.current,p=Fn(),m=Fi(h);return a=n3(a),o.context===null?o.context=a:o.pendingContext=a,o=ti(p,m),o.payload={element:n},d=d===void 0?null:d,d!==null&&(o.callback=d),n=ji(h,o,m),n!==null&&(ao(n,h,m,p),Jh(n,h,m)),m}function Rf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function P5(n,o){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<o?a:o}}function Vw(n,o){P5(n,o),(n=n.alternate)&&P5(n,o)}function U$(){return null}var o3=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uw(n){this._internalRoot=n}gp.prototype.render=Uw.prototype.render=function(n){var o=this._internalRoot;if(o===null)throw Error(pe(409));mp(n,o,null,null)};gp.prototype.unmount=Uw.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var o=n.containerInfo;qs(function(){mp(null,n,null,null)}),o[oi]=null}};function gp(n){this._internalRoot=n}gp.prototype.unstable_scheduleHydration=function(n){if(n){var o=OM();n={blockedOn:null,target:n,priority:o};for(var a=0;a<Di.length&&o!==0&&o<Di[a].priority;a++);Di.splice(a,0,n),a===0&&LM(n)}};function Hw(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function kp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function B5(){}function H$(n,o,a,d,h){if(h){if(typeof d=="function"){var p=d;d=function(){var A=Rf(m);p.call(A)}}var m=r3(o,d,n,0,null,!1,!1,"",B5);return n._reactRootContainer=m,n[oi]=m.current,bd(n.nodeType===8?n.parentNode:n),qs(),m}for(;h=n.lastChild;)n.removeChild(h);if(typeof d=="function"){var w=d;d=function(){var A=Rf(g);w.call(A)}}var g=Fw(n,0,!1,null,null,!1,!1,"",B5);return n._reactRootContainer=g,n[oi]=g.current,bd(n.nodeType===8?n.parentNode:n),qs(function(){mp(o,g,a,d)}),g}function bp(n,o,a,d,h){var p=a._reactRootContainer;if(p){var m=p;if(typeof h=="function"){var w=h;h=function(){var g=Rf(m);w.call(g)}}mp(o,m,n,h)}else m=H$(a,o,n,h,d);return Rf(m)}BM=function(n){switch(n.tag){case 3:var o=n.stateNode;if(o.current.memoizedState.isDehydrated){var a=jc(o.pendingLanes);a!==0&&(lw(o,a|1),rr(o,Qt()),!(st&6)&&(hl=Qt()+500,es()))}break;case 13:qs(function(){var d=ii(n,1);if(d!==null){var h=Fn();ao(d,n,1,h)}}),Vw(n,1)}};cw=function(n){if(n.tag===13){var o=ii(n,134217728);if(o!==null){var a=Fn();ao(o,n,134217728,a)}Vw(n,134217728)}};NM=function(n){if(n.tag===13){var o=Fi(n),a=ii(n,o);if(a!==null){var d=Fn();ao(a,n,o,d)}Vw(n,o)}};OM=function(){return ut};RM=function(n,o){var a=ut;try{return ut=n,o()}finally{ut=a}};Fb=function(n,o,a){switch(o){case"input":if(Bb(n,a),o=a.name,a.type==="radio"&&o!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<a.length;o++){var d=a[o];if(d!==n&&d.form===n.form){var h=lp(d);if(!h)throw Error(pe(90));fM(d),Bb(d,h)}}}break;case"textarea":mM(n,a);break;case"select":o=a.value,o!=null&&Xa(n,!!a.multiple,o,!1)}};_M=Rw;CM=qs;var $$={usingClientEntryPoint:!1,Events:[Vd,Wa,lp,vM,AM,Rw]},Ec={findFiberByHostInstance:Bs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W$={bundleType:Ec.bundleType,version:Ec.version,rendererPackageName:Ec.rendererPackageName,rendererConfig:Ec.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:li.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=EM(n),n===null?null:n.stateNode},findFiberByHostInstance:Ec.findFiberByHostInstance||U$,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oh.isDisabled&&Oh.supportsFiber)try{op=Oh.inject(W$),Io=Oh}catch{}}vr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$$;vr.createPortal=function(n,o){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hw(o))throw Error(pe(200));return V$(n,o,null,a)};vr.createRoot=function(n,o){if(!Hw(n))throw Error(pe(299));var a=!1,d="",h=o3;return o!=null&&(o.unstable_strictMode===!0&&(a=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(h=o.onRecoverableError)),o=Fw(n,1,!1,null,null,a,!1,d,h),n[oi]=o.current,bd(n.nodeType===8?n.parentNode:n),new Uw(o)};vr.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var o=n._reactInternals;if(o===void 0)throw typeof n.render=="function"?Error(pe(188)):(n=Object.keys(n).join(","),Error(pe(268,n)));return n=EM(o),n=n===null?null:n.stateNode,n};vr.flushSync=function(n){return qs(n)};vr.hydrate=function(n,o,a){if(!kp(o))throw Error(pe(200));return bp(null,n,o,!0,a)};vr.hydrateRoot=function(n,o,a){if(!Hw(n))throw Error(pe(405));var d=a!=null&&a.hydratedSources||null,h=!1,p="",m=o3;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(m=a.onRecoverableError)),o=r3(o,null,n,1,a??null,h,!1,p,m),n[oi]=o.current,bd(n),d)for(n=0;n<d.length;n++)a=d[n],h=a._getVersion,h=h(a._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[a,h]:o.mutableSourceEagerHydrationData.push(a,h);return new gp(o)};vr.render=function(n,o,a){if(!kp(o))throw Error(pe(200));return bp(null,n,o,!1,a)};vr.unmountComponentAtNode=function(n){if(!kp(n))throw Error(pe(40));return n._reactRootContainer?(qs(function(){bp(null,null,n,!1,function(){n._reactRootContainer=null,n[oi]=null})}),!0):!1};vr.unstable_batchedUpdates=Rw;vr.unstable_renderSubtreeIntoContainer=function(n,o,a,d){if(!kp(a))throw Error(pe(200));if(n==null||n._reactInternals===void 0)throw Error(pe(38));return bp(n,o,a,!1,d)};vr.version="18.3.1-next-f1338f8080-20240426";function i3(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i3)}catch(n){console.error(n)}}i3(),iM.exports=vr;var Hd=iM.exports;const q$=np(Hd),G$=GI({__proto__:null,default:q$},[Hd]);var N5=Hd;Eb.createRoot=N5.createRoot,Eb.hydrateRoot=N5.hydrateRoot;var s3={exports:{}},a3={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fl=q;function K$(n,o){return n===o&&(n!==0||1/n===1/o)||n!==n&&o!==o}var Q$=typeof Object.is=="function"?Object.is:K$,Y$=fl.useState,Z$=fl.useEffect,J$=fl.useLayoutEffect,X$=fl.useDebugValue;function eW(n,o){var a=o(),d=Y$({inst:{value:a,getSnapshot:o}}),h=d[0].inst,p=d[1];return J$(function(){h.value=a,h.getSnapshot=o,Kk(h)&&p({inst:h})},[n,a,o]),Z$(function(){return Kk(h)&&p({inst:h}),n(function(){Kk(h)&&p({inst:h})})},[n]),X$(a),a}function Kk(n){var o=n.getSnapshot;n=n.value;try{var a=o();return!Q$(n,a)}catch{return!0}}function tW(n,o){return o()}var nW=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?tW:eW;a3.useSyncExternalStore=fl.useSyncExternalStore!==void 0?fl.useSyncExternalStore:nW;s3.exports=a3;var rW=s3.exports,l3={exports:{}},c3={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp=q,oW=rW;function iW(n,o){return n===o&&(n!==0||1/n===1/o)||n!==n&&o!==o}var sW=typeof Object.is=="function"?Object.is:iW,aW=oW.useSyncExternalStore,lW=wp.useRef,cW=wp.useEffect,dW=wp.useMemo,uW=wp.useDebugValue;c3.useSyncExternalStoreWithSelector=function(n,o,a,d,h){var p=lW(null);if(p.current===null){var m={hasValue:!1,value:null};p.current=m}else m=p.current;p=dW(function(){function g(x){if(!A){if(A=!0,C=x,x=d(x),h!==void 0&&m.hasValue){var S=m.value;if(h(S,x))return y=S}return y=x}if(S=y,sW(C,x))return S;var I=d(x);return h!==void 0&&h(S,I)?S:(C=x,y=I)}var A=!1,C,y,v=a===void 0?null:a;return[function(){return g(o())},v===null?void 0:function(){return g(v())}]},[o,a,d,h]);var w=aW(n,p[0],p[1]);return cW(function(){m.hasValue=!0,m.value=w},[w]),uW(w),w};l3.exports=c3;var hW=l3.exports;function fW(n){n()}let d3=fW;const pW=n=>d3=n,mW=()=>d3,O5=Symbol.for("react-redux-context"),R5=typeof globalThis<"u"?globalThis:{};function gW(){var n;if(!q.createContext)return{};const o=(n=R5[O5])!=null?n:R5[O5]=new Map;let a=o.get(q.createContext);return a||(a=q.createContext(null),o.set(q.createContext,a)),a}const Gi=gW();function $w(n=Gi){return function(){return q.useContext(n)}}const u3=$w(),kW=()=>{throw new Error("uSES not initialized!")};let h3=kW;const bW=n=>{h3=n},wW=(n,o)=>n===o;function vW(n=Gi){const o=n===Gi?u3:$w(n);return function(d,h={}){const{equalityFn:p=wW,stabilityCheck:m=void 0,noopCheck:w=void 0}=typeof h=="function"?{equalityFn:h}:h,{store:g,subscription:A,getServerState:C,stabilityCheck:y,noopCheck:v}=o();q.useRef(!0);const x=q.useCallback({[d.name](I){return d(I)}}[d.name],[d,y,m]),S=h3(A.addNestedSub,g.getState,C||g.getState,x,p);return q.useDebugValue(S),S}}const $r=vW();var f3={exports:{}},ht={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mn=typeof Symbol=="function"&&Symbol.for,Ww=mn?Symbol.for("react.element"):60103,qw=mn?Symbol.for("react.portal"):60106,vp=mn?Symbol.for("react.fragment"):60107,Ap=mn?Symbol.for("react.strict_mode"):60108,_p=mn?Symbol.for("react.profiler"):60114,Cp=mn?Symbol.for("react.provider"):60109,yp=mn?Symbol.for("react.context"):60110,Gw=mn?Symbol.for("react.async_mode"):60111,xp=mn?Symbol.for("react.concurrent_mode"):60111,Ep=mn?Symbol.for("react.forward_ref"):60112,Sp=mn?Symbol.for("react.suspense"):60113,AW=mn?Symbol.for("react.suspense_list"):60120,Dp=mn?Symbol.for("react.memo"):60115,Tp=mn?Symbol.for("react.lazy"):60116,_W=mn?Symbol.for("react.block"):60121,CW=mn?Symbol.for("react.fundamental"):60117,yW=mn?Symbol.for("react.responder"):60118,xW=mn?Symbol.for("react.scope"):60119;function _r(n){if(typeof n=="object"&&n!==null){var o=n.$$typeof;switch(o){case Ww:switch(n=n.type,n){case Gw:case xp:case vp:case _p:case Ap:case Sp:return n;default:switch(n=n&&n.$$typeof,n){case yp:case Ep:case Tp:case Dp:case Cp:return n;default:return o}}case qw:return o}}}function p3(n){return _r(n)===xp}ht.AsyncMode=Gw;ht.ConcurrentMode=xp;ht.ContextConsumer=yp;ht.ContextProvider=Cp;ht.Element=Ww;ht.ForwardRef=Ep;ht.Fragment=vp;ht.Lazy=Tp;ht.Memo=Dp;ht.Portal=qw;ht.Profiler=_p;ht.StrictMode=Ap;ht.Suspense=Sp;ht.isAsyncMode=function(n){return p3(n)||_r(n)===Gw};ht.isConcurrentMode=p3;ht.isContextConsumer=function(n){return _r(n)===yp};ht.isContextProvider=function(n){return _r(n)===Cp};ht.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ww};ht.isForwardRef=function(n){return _r(n)===Ep};ht.isFragment=function(n){return _r(n)===vp};ht.isLazy=function(n){return _r(n)===Tp};ht.isMemo=function(n){return _r(n)===Dp};ht.isPortal=function(n){return _r(n)===qw};ht.isProfiler=function(n){return _r(n)===_p};ht.isStrictMode=function(n){return _r(n)===Ap};ht.isSuspense=function(n){return _r(n)===Sp};ht.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===vp||n===xp||n===_p||n===Ap||n===Sp||n===AW||typeof n=="object"&&n!==null&&(n.$$typeof===Tp||n.$$typeof===Dp||n.$$typeof===Cp||n.$$typeof===yp||n.$$typeof===Ep||n.$$typeof===CW||n.$$typeof===yW||n.$$typeof===xW||n.$$typeof===_W)};ht.typeOf=_r;f3.exports=ht;var EW=f3.exports,m3=EW,SW={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},DW={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},g3={};g3[m3.ForwardRef]=SW;g3[m3.Memo]=DW;var gt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kw=Symbol.for("react.element"),Qw=Symbol.for("react.portal"),Ip=Symbol.for("react.fragment"),Mp=Symbol.for("react.strict_mode"),Pp=Symbol.for("react.profiler"),Bp=Symbol.for("react.provider"),Np=Symbol.for("react.context"),TW=Symbol.for("react.server_context"),Op=Symbol.for("react.forward_ref"),Rp=Symbol.for("react.suspense"),Lp=Symbol.for("react.suspense_list"),jp=Symbol.for("react.memo"),zp=Symbol.for("react.lazy"),IW=Symbol.for("react.offscreen"),k3;k3=Symbol.for("react.module.reference");function Wr(n){if(typeof n=="object"&&n!==null){var o=n.$$typeof;switch(o){case Kw:switch(n=n.type,n){case Ip:case Pp:case Mp:case Rp:case Lp:return n;default:switch(n=n&&n.$$typeof,n){case TW:case Np:case Op:case zp:case jp:case Bp:return n;default:return o}}case Qw:return o}}}gt.ContextConsumer=Np;gt.ContextProvider=Bp;gt.Element=Kw;gt.ForwardRef=Op;gt.Fragment=Ip;gt.Lazy=zp;gt.Memo=jp;gt.Portal=Qw;gt.Profiler=Pp;gt.StrictMode=Mp;gt.Suspense=Rp;gt.SuspenseList=Lp;gt.isAsyncMode=function(){return!1};gt.isConcurrentMode=function(){return!1};gt.isContextConsumer=function(n){return Wr(n)===Np};gt.isContextProvider=function(n){return Wr(n)===Bp};gt.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===Kw};gt.isForwardRef=function(n){return Wr(n)===Op};gt.isFragment=function(n){return Wr(n)===Ip};gt.isLazy=function(n){return Wr(n)===zp};gt.isMemo=function(n){return Wr(n)===jp};gt.isPortal=function(n){return Wr(n)===Qw};gt.isProfiler=function(n){return Wr(n)===Pp};gt.isStrictMode=function(n){return Wr(n)===Mp};gt.isSuspense=function(n){return Wr(n)===Rp};gt.isSuspenseList=function(n){return Wr(n)===Lp};gt.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===Ip||n===Pp||n===Mp||n===Rp||n===Lp||n===IW||typeof n=="object"&&n!==null&&(n.$$typeof===zp||n.$$typeof===jp||n.$$typeof===Bp||n.$$typeof===Np||n.$$typeof===Op||n.$$typeof===k3||n.getModuleId!==void 0)};gt.typeOf=Wr;function MW(){const n=mW();let o=null,a=null;return{clear(){o=null,a=null},notify(){n(()=>{let d=o;for(;d;)d.callback(),d=d.next})},get(){let d=[],h=o;for(;h;)d.push(h),h=h.next;return d},subscribe(d){let h=!0,p=a={callback:d,next:null,prev:a};return p.prev?p.prev.next=p:o=p,function(){!h||o===null||(h=!1,p.next?p.next.prev=p.prev:a=p.prev,p.prev?p.prev.next=p.next:o=p.next)}}}}const L5={notify(){},get:()=>[]};function PW(n,o){let a,d=L5,h=0,p=!1;function m(I){C();const N=d.subscribe(I);let P=!1;return()=>{P||(P=!0,N(),y())}}function w(){d.notify()}function g(){S.onStateChange&&S.onStateChange()}function A(){return p}function C(){h++,a||(a=n.subscribe(g),d=MW())}function y(){h--,a&&h===0&&(a(),a=void 0,d.clear(),d=L5)}function v(){p||(p=!0,C())}function x(){p&&(p=!1,y())}const S={addNestedSub:m,notifyNestedSubs:w,handleChangeWrapper:g,isSubscribed:A,trySubscribe:v,tryUnsubscribe:x,getListeners:()=>d};return S}const BW=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",NW=BW?q.useLayoutEffect:q.useEffect;function j5(n,o){return n===o?n!==0||o!==0||1/n===1/o:n!==n&&o!==o}function Lf(n,o){if(j5(n,o))return!0;if(typeof n!="object"||n===null||typeof o!="object"||o===null)return!1;const a=Object.keys(n),d=Object.keys(o);if(a.length!==d.length)return!1;for(let h=0;h<a.length;h++)if(!Object.prototype.hasOwnProperty.call(o,a[h])||!j5(n[a[h]],o[a[h]]))return!1;return!0}function OW({store:n,context:o,children:a,serverState:d,stabilityCheck:h="once",noopCheck:p="once"}){const m=q.useMemo(()=>{const A=PW(n);return{store:n,subscription:A,getServerState:d?()=>d:void 0,stabilityCheck:h,noopCheck:p}},[n,d,h,p]),w=q.useMemo(()=>n.getState(),[n]);NW(()=>{const{subscription:A}=m;return A.onStateChange=A.notifyNestedSubs,A.trySubscribe(),w!==n.getState()&&A.notifyNestedSubs(),()=>{A.tryUnsubscribe(),A.onStateChange=void 0}},[m,w]);const g=o||Gi;return q.createElement(g.Provider,{value:m},a)}function b3(n=Gi){const o=n===Gi?u3:$w(n);return function(){const{store:d}=o();return d}}const w3=b3();function RW(n=Gi){const o=n===Gi?w3:b3(n);return function(){return o().dispatch}}const No=RW();bW(hW.useSyncExternalStoreWithSelector);pW(Hd.unstable_batchedUpdates);function v3(n){var o,a,d="";if(typeof n=="string"||typeof n=="number")d+=n;else if(typeof n=="object")if(Array.isArray(n))for(o=0;o<n.length;o++)n[o]&&(a=v3(n[o]))&&(d&&(d+=" "),d+=a);else for(o in n)n[o]&&(d&&(d+=" "),d+=o);return d}function Bi(){for(var n,o,a=0,d="";a<arguments.length;)(n=arguments[a++])&&(o=v3(n))&&(d&&(d+=" "),d+=o);return d}const Xc=n=>typeof n=="number"&&!isNaN(n),Gs=n=>typeof n=="string",er=n=>typeof n=="function",sf=n=>Gs(n)||er(n)?n:null,Qk=n=>q.isValidElement(n)||Gs(n)||er(n)||Xc(n);function LW(n,o,a){a===void 0&&(a=300);const{scrollHeight:d,style:h}=n;requestAnimationFrame(()=>{h.minHeight="initial",h.height=d+"px",h.transition=`all ${a}ms`,requestAnimationFrame(()=>{h.height="0",h.padding="0",h.margin="0",setTimeout(o,a)})})}function Fp(n){let{enter:o,exit:a,appendPosition:d=!1,collapse:h=!0,collapseDuration:p=300}=n;return function(m){let{children:w,position:g,preventExitTransition:A,done:C,nodeRef:y,isIn:v}=m;const x=d?`${o}--${g}`:o,S=d?`${a}--${g}`:a,I=q.useRef(0);return q.useLayoutEffect(()=>{const N=y.current,P=x.split(" "),B=O=>{O.target===y.current&&(N.dispatchEvent(new Event("d")),N.removeEventListener("animationend",B),N.removeEventListener("animationcancel",B),I.current===0&&O.type!=="animationcancel"&&N.classList.remove(...P))};N.classList.add(...P),N.addEventListener("animationend",B),N.addEventListener("animationcancel",B)},[]),q.useEffect(()=>{const N=y.current,P=()=>{N.removeEventListener("animationend",P),h?LW(N,C,p):C()};v||(A?P():(I.current=1,N.className+=` ${S}`,N.addEventListener("animationend",P)))},[v]),it.createElement(it.Fragment,null,w)}}function z5(n,o){return n!=null?{content:n.content,containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,status:o}:{}}const Or={list:new Map,emitQueue:new Map,on(n,o){return this.list.has(n)||this.list.set(n,[]),this.list.get(n).push(o),this},off(n,o){if(o){const a=this.list.get(n).filter(d=>d!==o);return this.list.set(n,a),this}return this.list.delete(n),this},cancelEmit(n){const o=this.emitQueue.get(n);return o&&(o.forEach(clearTimeout),this.emitQueue.delete(n)),this},emit(n){this.list.has(n)&&this.list.get(n).forEach(o=>{const a=setTimeout(()=>{o(...[].slice.call(arguments,1))},0);this.emitQueue.has(n)||this.emitQueue.set(n,[]),this.emitQueue.get(n).push(a)})}},Rh=n=>{let{theme:o,type:a,...d}=n;return it.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:o==="colored"?"currentColor":`var(--toastify-icon-color-${a})`,...d})},Yk={info:function(n){return it.createElement(Rh,{...n},it.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(n){return it.createElement(Rh,{...n},it.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(n){return it.createElement(Rh,{...n},it.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(n){return it.createElement(Rh,{...n},it.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return it.createElement("div",{className:"Toastify__spinner"})}};function jW(n){const[,o]=q.useReducer(x=>x+1,0),[a,d]=q.useState([]),h=q.useRef(null),p=q.useRef(new Map).current,m=x=>a.indexOf(x)!==-1,w=q.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:n,containerId:null,isToastActive:m,getToast:x=>p.get(x)}).current;function g(x){let{containerId:S}=x;const{limit:I}=w.props;!I||S&&w.containerId!==S||(w.count-=w.queue.length,w.queue=[])}function A(x){d(S=>x==null?[]:S.filter(I=>I!==x))}function C(){const{toastContent:x,toastProps:S,staleId:I}=w.queue.shift();v(x,S,I)}function y(x,S){let{delay:I,staleId:N,...P}=S;if(!Qk(x)||function(re){return!h.current||w.props.enableMultiContainer&&re.containerId!==w.props.containerId||p.has(re.toastId)&&re.updateId==null}(P))return;const{toastId:B,updateId:O,data:L}=P,{props:V}=w,F=()=>A(B),D=O==null;D&&w.count++;const z={...V,style:V.toastStyle,key:w.toastKey++,...Object.fromEntries(Object.entries(P).filter(re=>{let[te,Z]=re;return Z!=null})),toastId:B,updateId:O,data:L,closeToast:F,isIn:!1,className:sf(P.className||V.toastClassName),bodyClassName:sf(P.bodyClassName||V.bodyClassName),progressClassName:sf(P.progressClassName||V.progressClassName),autoClose:!P.isLoading&&(W=P.autoClose,$=V.autoClose,W===!1||Xc(W)&&W>0?W:$),deleteToast(){const re=z5(p.get(B),"removed");p.delete(B),Or.emit(4,re);const te=w.queue.length;if(w.count=B==null?w.count-w.displayedToast:w.count-1,w.count<0&&(w.count=0),te>0){const Z=B==null?w.props.limit:1;if(te===1||Z===1)w.displayedToast++,C();else{const Q=Z>te?te:Z;w.displayedToast=Q;for(let ee=0;ee<Q;ee++)C()}}else o()}};var W,$;z.iconOut=function(re){let{theme:te,type:Z,isLoading:Q,icon:ee}=re,se=null;const G={theme:te,type:Z};return ee===!1||(er(ee)?se=ee(G):q.isValidElement(ee)?se=q.cloneElement(ee,G):Gs(ee)||Xc(ee)?se=ee:Q?se=Yk.spinner():(le=>le in Yk)(Z)&&(se=Yk[Z](G))),se}(z),er(P.onOpen)&&(z.onOpen=P.onOpen),er(P.onClose)&&(z.onClose=P.onClose),z.closeButton=V.closeButton,P.closeButton===!1||Qk(P.closeButton)?z.closeButton=P.closeButton:P.closeButton===!0&&(z.closeButton=!Qk(V.closeButton)||V.closeButton);let Y=x;q.isValidElement(x)&&!Gs(x.type)?Y=q.cloneElement(x,{closeToast:F,toastProps:z,data:L}):er(x)&&(Y=x({closeToast:F,toastProps:z,data:L})),V.limit&&V.limit>0&&w.count>V.limit&&D?w.queue.push({toastContent:Y,toastProps:z,staleId:N}):Xc(I)?setTimeout(()=>{v(Y,z,N)},I):v(Y,z,N)}function v(x,S,I){const{toastId:N}=S;I&&p.delete(I);const P={content:x,props:S};p.set(N,P),d(B=>[...B,N].filter(O=>O!==I)),Or.emit(4,z5(P,P.props.updateId==null?"added":"updated"))}return q.useEffect(()=>(w.containerId=n.containerId,Or.cancelEmit(3).on(0,y).on(1,x=>h.current&&A(x)).on(5,g).emit(2,w),()=>{p.clear(),Or.emit(3,w)}),[]),q.useEffect(()=>{w.props=n,w.isToastActive=m,w.displayedToast=a.length}),{getToastToRender:function(x){const S=new Map,I=Array.from(p.values());return n.newestOnTop&&I.reverse(),I.forEach(N=>{const{position:P}=N.props;S.has(P)||S.set(P,[]),S.get(P).push(N)}),Array.from(S,N=>x(N[0],N[1]))},containerRef:h,isToastActive:m}}function F5(n){return n.targetTouches&&n.targetTouches.length>=1?n.targetTouches[0].clientX:n.clientX}function V5(n){return n.targetTouches&&n.targetTouches.length>=1?n.targetTouches[0].clientY:n.clientY}function zW(n){const[o,a]=q.useState(!1),[d,h]=q.useState(!1),p=q.useRef(null),m=q.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,w=q.useRef(n),{autoClose:g,pauseOnHover:A,closeToast:C,onClick:y,closeOnClick:v}=n;function x(L){if(n.draggable){L.nativeEvent.type==="touchstart"&&L.nativeEvent.preventDefault(),m.didMove=!1,document.addEventListener("mousemove",P),document.addEventListener("mouseup",B),document.addEventListener("touchmove",P),document.addEventListener("touchend",B);const V=p.current;m.canCloseOnClick=!0,m.canDrag=!0,m.boundingRect=V.getBoundingClientRect(),V.style.transition="",m.x=F5(L.nativeEvent),m.y=V5(L.nativeEvent),n.draggableDirection==="x"?(m.start=m.x,m.removalDistance=V.offsetWidth*(n.draggablePercent/100)):(m.start=m.y,m.removalDistance=V.offsetHeight*(n.draggablePercent===80?1.5*n.draggablePercent:n.draggablePercent/100))}}function S(L){if(m.boundingRect){const{top:V,bottom:F,left:D,right:z}=m.boundingRect;L.nativeEvent.type!=="touchend"&&n.pauseOnHover&&m.x>=D&&m.x<=z&&m.y>=V&&m.y<=F?N():I()}}function I(){a(!0)}function N(){a(!1)}function P(L){const V=p.current;m.canDrag&&V&&(m.didMove=!0,o&&N(),m.x=F5(L),m.y=V5(L),m.delta=n.draggableDirection==="x"?m.x-m.start:m.y-m.start,m.start!==m.x&&(m.canCloseOnClick=!1),V.style.transform=`translate${n.draggableDirection}(${m.delta}px)`,V.style.opacity=""+(1-Math.abs(m.delta/m.removalDistance)))}function B(){document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",B),document.removeEventListener("touchmove",P),document.removeEventListener("touchend",B);const L=p.current;if(m.canDrag&&m.didMove&&L){if(m.canDrag=!1,Math.abs(m.delta)>m.removalDistance)return h(!0),void n.closeToast();L.style.transition="transform 0.2s, opacity 0.2s",L.style.transform=`translate${n.draggableDirection}(0)`,L.style.opacity="1"}}q.useEffect(()=>{w.current=n}),q.useEffect(()=>(p.current&&p.current.addEventListener("d",I,{once:!0}),er(n.onOpen)&&n.onOpen(q.isValidElement(n.children)&&n.children.props),()=>{const L=w.current;er(L.onClose)&&L.onClose(q.isValidElement(L.children)&&L.children.props)}),[]),q.useEffect(()=>(n.pauseOnFocusLoss&&(document.hasFocus()||N(),window.addEventListener("focus",I),window.addEventListener("blur",N)),()=>{n.pauseOnFocusLoss&&(window.removeEventListener("focus",I),window.removeEventListener("blur",N))}),[n.pauseOnFocusLoss]);const O={onMouseDown:x,onTouchStart:x,onMouseUp:S,onTouchEnd:S};return g&&A&&(O.onMouseEnter=N,O.onMouseLeave=I),v&&(O.onClick=L=>{y&&y(L),m.canCloseOnClick&&C()}),{playToast:I,pauseToast:N,isRunning:o,preventExitTransition:d,toastRef:p,eventHandlers:O}}function A3(n){let{closeToast:o,theme:a,ariaLabel:d="close"}=n;return it.createElement("button",{className:`Toastify__close-button Toastify__close-button--${a}`,type:"button",onClick:h=>{h.stopPropagation(),o(h)},"aria-label":d},it.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},it.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function FW(n){let{delay:o,isRunning:a,closeToast:d,type:h="default",hide:p,className:m,style:w,controlledProgress:g,progress:A,rtl:C,isIn:y,theme:v}=n;const x=p||g&&A===0,S={...w,animationDuration:`${o}ms`,animationPlayState:a?"running":"paused",opacity:x?0:1};g&&(S.transform=`scaleX(${A})`);const I=Bi("Toastify__progress-bar",g?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${v}`,`Toastify__progress-bar--${h}`,{"Toastify__progress-bar--rtl":C}),N=er(m)?m({rtl:C,type:h,defaultClassName:I}):Bi(I,m);return it.createElement("div",{role:"progressbar","aria-hidden":x?"true":"false","aria-label":"notification timer",className:N,style:S,[g&&A>=1?"onTransitionEnd":"onAnimationEnd"]:g&&A<1?null:()=>{y&&d()}})}const VW=n=>{const{isRunning:o,preventExitTransition:a,toastRef:d,eventHandlers:h}=zW(n),{closeButton:p,children:m,autoClose:w,onClick:g,type:A,hideProgressBar:C,closeToast:y,transition:v,position:x,className:S,style:I,bodyClassName:N,bodyStyle:P,progressClassName:B,progressStyle:O,updateId:L,role:V,progress:F,rtl:D,toastId:z,deleteToast:W,isIn:$,isLoading:Y,iconOut:re,closeOnClick:te,theme:Z}=n,Q=Bi("Toastify__toast",`Toastify__toast-theme--${Z}`,`Toastify__toast--${A}`,{"Toastify__toast--rtl":D},{"Toastify__toast--close-on-click":te}),ee=er(S)?S({rtl:D,position:x,type:A,defaultClassName:Q}):Bi(Q,S),se=!!F||!w,G={closeToast:y,type:A,theme:Z};let le=null;return p===!1||(le=er(p)?p(G):q.isValidElement(p)?q.cloneElement(p,G):A3(G)),it.createElement(v,{isIn:$,done:W,position:x,preventExitTransition:a,nodeRef:d},it.createElement("div",{id:z,onClick:g,className:ee,...h,style:I,ref:d},it.createElement("div",{...$&&{role:V},className:er(N)?N({type:A}):Bi("Toastify__toast-body",N),style:P},re!=null&&it.createElement("div",{className:Bi("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!Y})},re),it.createElement("div",null,m)),le,it.createElement(FW,{...L&&!se?{key:`pb-${L}`}:{},rtl:D,theme:Z,delay:w,isRunning:o,isIn:$,closeToast:y,hide:C,type:A,style:O,className:B,controlledProgress:se,progress:F||0})))},Vp=function(n,o){return o===void 0&&(o=!1),{enter:`Toastify--animate Toastify__${n}-enter`,exit:`Toastify--animate Toastify__${n}-exit`,appendPosition:o}},UW=Fp(Vp("bounce",!0));Fp(Vp("slide",!0));Fp(Vp("zoom"));Fp(Vp("flip"));const w0=q.forwardRef((n,o)=>{const{getToastToRender:a,containerRef:d,isToastActive:h}=jW(n),{className:p,style:m,rtl:w,containerId:g}=n;function A(C){const y=Bi("Toastify__toast-container",`Toastify__toast-container--${C}`,{"Toastify__toast-container--rtl":w});return er(p)?p({position:C,rtl:w,defaultClassName:y}):Bi(y,sf(p))}return q.useEffect(()=>{o&&(o.current=d.current)},[]),it.createElement("div",{ref:d,className:"Toastify",id:g},a((C,y)=>{const v=y.length?{...m}:{...m,pointerEvents:"none"};return it.createElement("div",{className:A(C),style:v,key:`container-${C}`},y.map((x,S)=>{let{content:I,props:N}=x;return it.createElement(VW,{...N,isIn:h(N.toastId),style:{...N.style,"--nth":S+1,"--len":y.length},key:`toast-${N.key}`},I)}))}))});w0.displayName="ToastContainer",w0.defaultProps={position:"top-right",transition:UW,autoClose:5e3,closeButton:A3,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Zk,Is=new Map,Fc=[],HW=1;function _3(){return""+HW++}function $W(n){return n&&(Gs(n.toastId)||Xc(n.toastId))?n.toastId:_3()}function ed(n,o){return Is.size>0?Or.emit(0,n,o):Fc.push({content:n,options:o}),o.toastId}function jf(n,o){return{...o,type:o&&o.type||n,toastId:$W(o)}}function Lh(n){return(o,a)=>ed(o,jf(n,a))}function Ve(n,o){return ed(n,jf("default",o))}Ve.loading=(n,o)=>ed(n,jf("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...o})),Ve.promise=function(n,o,a){let d,{pending:h,error:p,success:m}=o;h&&(d=Gs(h)?Ve.loading(h,a):Ve.loading(h.render,{...a,...h}));const w={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},g=(C,y,v)=>{if(y==null)return void Ve.dismiss(d);const x={type:C,...w,...a,data:v},S=Gs(y)?{render:y}:y;return d?Ve.update(d,{...x,...S}):Ve(S.render,{...x,...S}),v},A=er(n)?n():n;return A.then(C=>g("success",m,C)).catch(C=>g("error",p,C)),A},Ve.success=Lh("success"),Ve.info=Lh("info"),Ve.error=Lh("error"),Ve.warning=Lh("warning"),Ve.warn=Ve.warning,Ve.dark=(n,o)=>ed(n,jf("default",{theme:"dark",...o})),Ve.dismiss=n=>{Is.size>0?Or.emit(1,n):Fc=Fc.filter(o=>n!=null&&o.options.toastId!==n)},Ve.clearWaitingQueue=function(n){return n===void 0&&(n={}),Or.emit(5,n)},Ve.isActive=n=>{let o=!1;return Is.forEach(a=>{a.isToastActive&&a.isToastActive(n)&&(o=!0)}),o},Ve.update=function(n,o){o===void 0&&(o={}),setTimeout(()=>{const a=function(d,h){let{containerId:p}=h;const m=Is.get(p||Zk);return m&&m.getToast(d)}(n,o);if(a){const{props:d,content:h}=a,p={delay:100,...d,...o,toastId:o.toastId||n,updateId:_3()};p.toastId!==n&&(p.staleId=n);const m=p.render||h;delete p.render,ed(m,p)}},0)},Ve.done=n=>{Ve.update(n,{progress:1})},Ve.onChange=n=>(Or.on(4,n),()=>{Or.off(4,n)}),Ve.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Ve.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Or.on(2,n=>{Zk=n.containerId||n,Is.set(Zk,n),Fc.forEach(o=>{Or.emit(0,o.content,o.options)}),Fc=[]}).on(3,n=>{Is.delete(n.containerId||n),Is.size===0&&Or.off(0).off(1).off(5)});var C3={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},U5=it.createContext&&it.createContext(C3),Ui=function(){return Ui=Object.assign||function(n){for(var o,a=1,d=arguments.length;a<d;a++){o=arguments[a];for(var h in o)Object.prototype.hasOwnProperty.call(o,h)&&(n[h]=o[h])}return n},Ui.apply(this,arguments)},WW=function(n,o){var a={};for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&o.indexOf(d)<0&&(a[d]=n[d]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,d=Object.getOwnPropertySymbols(n);h<d.length;h++)o.indexOf(d[h])<0&&Object.prototype.propertyIsEnumerable.call(n,d[h])&&(a[d[h]]=n[d[h]]);return a};function y3(n){return n&&n.map(function(o,a){return it.createElement(o.tag,Ui({key:a},o.attr),y3(o.child))})}function $d(n){return function(o){return it.createElement(qW,Ui({attr:Ui({},n.attr)},o),y3(n.child))}}function qW(n){var o=function(a){var d=n.attr,h=n.size,p=n.title,m=WW(n,["attr","size","title"]),w=h||a.size||"1em",g;return a.className&&(g=a.className),n.className&&(g=(g?g+" ":"")+n.className),it.createElement("svg",Ui({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,d,m,{className:g,style:Ui(Ui({color:n.color||a.color},a.style),n.style),height:w,width:w,xmlns:"http://www.w3.org/2000/svg"}),p&&it.createElement("title",null,p),n.children)};return U5!==void 0?it.createElement(U5.Consumer,null,function(a){return o(a)}):o(C3)}function x3(n){return $d({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"}}]})(n)}function H5(n){return $d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"}}]})(n)}function GW(n){return $d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"}}]})(n)}function KW(n){return $d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"}}]})(n)}/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nt(){return Nt=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(n[d]=a[d])}return n},Nt.apply(this,arguments)}var Jt;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Jt||(Jt={}));const $5="popstate";function QW(n){n===void 0&&(n={});function o(d,h){let{pathname:p,search:m,hash:w}=d.location;return Sd("",{pathname:p,search:m,hash:w},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function a(d,h){return typeof h=="string"?h:Ks(h)}return ZW(o,a,null,n)}function Ge(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}function pl(n,o){if(!n){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function YW(){return Math.random().toString(36).substr(2,8)}function W5(n,o){return{usr:n.state,key:n.key,idx:o}}function Sd(n,o,a,d){return a===void 0&&(a=null),Nt({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof o=="string"?ts(o):o,{state:a,key:o&&o.key||d||YW()})}function Ks(n){let{pathname:o="/",search:a="",hash:d=""}=n;return a&&a!=="?"&&(o+=a.charAt(0)==="?"?a:"?"+a),d&&d!=="#"&&(o+=d.charAt(0)==="#"?d:"#"+d),o}function ts(n){let o={};if(n){let a=n.indexOf("#");a>=0&&(o.hash=n.substr(a),n=n.substr(0,a));let d=n.indexOf("?");d>=0&&(o.search=n.substr(d),n=n.substr(0,d)),n&&(o.pathname=n)}return o}function ZW(n,o,a,d){d===void 0&&(d={});let{window:h=document.defaultView,v5Compat:p=!1}=d,m=h.history,w=Jt.Pop,g=null,A=C();A==null&&(A=0,m.replaceState(Nt({},m.state,{idx:A}),""));function C(){return(m.state||{idx:null}).idx}function y(){w=Jt.Pop;let N=C(),P=N==null?null:N-A;A=N,g&&g({action:w,location:I.location,delta:P})}function v(N,P){w=Jt.Push;let B=Sd(I.location,N,P);A=C()+1;let O=W5(B,A),L=I.createHref(B);try{m.pushState(O,"",L)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;h.location.assign(L)}p&&g&&g({action:w,location:I.location,delta:1})}function x(N,P){w=Jt.Replace;let B=Sd(I.location,N,P);A=C();let O=W5(B,A),L=I.createHref(B);m.replaceState(O,"",L),p&&g&&g({action:w,location:I.location,delta:0})}function S(N){let P=h.location.origin!=="null"?h.location.origin:h.location.href,B=typeof N=="string"?N:Ks(N);return B=B.replace(/ $/,"%20"),Ge(P,"No window.location.(origin|href) available to create URL for href: "+B),new URL(B,P)}let I={get action(){return w},get location(){return n(h,m)},listen(N){if(g)throw new Error("A history only accepts one active listener");return h.addEventListener($5,y),g=N,()=>{h.removeEventListener($5,y),g=null}},createHref(N){return o(h,N)},createURL:S,encodeLocation(N){let P=S(N);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:v,replace:x,go(N){return m.go(N)}};return I}var Mt;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Mt||(Mt={}));const JW=new Set(["lazy","caseSensitive","path","id","index","children"]);function XW(n){return n.index===!0}function v0(n,o,a,d){return a===void 0&&(a=[]),d===void 0&&(d={}),n.map((h,p)=>{let m=[...a,p],w=typeof h.id=="string"?h.id:m.join("-");if(Ge(h.index!==!0||!h.children,"Cannot specify children on an index route"),Ge(!d[w],'Found a route id collision on id "'+w+`".  Route id's must be globally unique within Data Router usages`),XW(h)){let g=Nt({},h,o(h),{id:w});return d[w]=g,g}else{let g=Nt({},h,o(h),{id:w,children:void 0});return d[w]=g,h.children&&(g.children=v0(h.children,o,m,d)),g}})}function Ja(n,o,a){a===void 0&&(a="/");let d=typeof o=="string"?ts(o):o,h=Cl(d.pathname||"/",a);if(h==null)return null;let p=E3(n);tq(p);let m=null;for(let w=0;m==null&&w<p.length;++w){let g=fq(h);m=dq(p[w],g)}return m}function eq(n,o){let{route:a,pathname:d,params:h}=n;return{id:a.id,pathname:d,params:h,data:o[a.id],handle:a.handle}}function E3(n,o,a,d){o===void 0&&(o=[]),a===void 0&&(a=[]),d===void 0&&(d="");let h=(p,m,w)=>{let g={relativePath:w===void 0?p.path||"":w,caseSensitive:p.caseSensitive===!0,childrenIndex:m,route:p};g.relativePath.startsWith("/")&&(Ge(g.relativePath.startsWith(d),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(d.length));let A=ni([d,g.relativePath]),C=a.concat(g);p.children&&p.children.length>0&&(Ge(p.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+A+'".')),E3(p.children,o,C,A)),!(p.path==null&&!p.index)&&o.push({path:A,score:lq(A,p.index),routesMeta:C})};return n.forEach((p,m)=>{var w;if(p.path===""||!((w=p.path)!=null&&w.includes("?")))h(p,m);else for(let g of S3(p.path))h(p,m,g)}),o}function S3(n){let o=n.split("/");if(o.length===0)return[];let[a,...d]=o,h=a.endsWith("?"),p=a.replace(/\?$/,"");if(d.length===0)return h?[p,""]:[p];let m=S3(d.join("/")),w=[];return w.push(...m.map(g=>g===""?p:[p,g].join("/"))),h&&w.push(...m),w.map(g=>n.startsWith("/")&&g===""?"/":g)}function tq(n){n.sort((o,a)=>o.score!==a.score?a.score-o.score:cq(o.routesMeta.map(d=>d.childrenIndex),a.routesMeta.map(d=>d.childrenIndex)))}const nq=/^:[\w-]+$/,rq=3,oq=2,iq=1,sq=10,aq=-2,q5=n=>n==="*";function lq(n,o){let a=n.split("/"),d=a.length;return a.some(q5)&&(d+=aq),o&&(d+=oq),a.filter(h=>!q5(h)).reduce((h,p)=>h+(nq.test(p)?rq:p===""?iq:sq),d)}function cq(n,o){return n.length===o.length&&n.slice(0,-1).every((d,h)=>d===o[h])?n[n.length-1]-o[o.length-1]:0}function dq(n,o){let{routesMeta:a}=n,d={},h="/",p=[];for(let m=0;m<a.length;++m){let w=a[m],g=m===a.length-1,A=h==="/"?o:o.slice(h.length)||"/",C=uq({path:w.relativePath,caseSensitive:w.caseSensitive,end:g},A);if(!C)return null;Object.assign(d,C.params);let y=w.route;p.push({params:d,pathname:ni([h,C.pathname]),pathnameBase:gq(ni([h,C.pathnameBase])),route:y}),C.pathnameBase!=="/"&&(h=ni([h,C.pathnameBase]))}return p}function uq(n,o){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[a,d]=hq(n.path,n.caseSensitive,n.end),h=o.match(a);if(!h)return null;let p=h[0],m=p.replace(/(.)\/+$/,"$1"),w=h.slice(1);return{params:d.reduce((A,C,y)=>{let{paramName:v,isOptional:x}=C;if(v==="*"){let I=w[y]||"";m=p.slice(0,p.length-I.length).replace(/(.)\/+$/,"$1")}const S=w[y];return x&&!S?A[v]=void 0:A[v]=(S||"").replace(/%2F/g,"/"),A},{}),pathname:p,pathnameBase:m,pattern:n}}function hq(n,o,a){o===void 0&&(o=!1),a===void 0&&(a=!0),pl(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let d=[],h="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,w,g)=>(d.push({paramName:w,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(d.push({paramName:"*"}),h+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?h+="\\/*$":n!==""&&n!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,o?void 0:"i"),d]}function fq(n){try{return n.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return pl(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+o+").")),n}}function Cl(n,o){if(o==="/")return n;if(!n.toLowerCase().startsWith(o.toLowerCase()))return null;let a=o.endsWith("/")?o.length-1:o.length,d=n.charAt(a);return d&&d!=="/"?null:n.slice(a)||"/"}function pq(n,o){o===void 0&&(o="/");let{pathname:a,search:d="",hash:h=""}=typeof n=="string"?ts(n):n;return{pathname:a?a.startsWith("/")?a:mq(a,o):o,search:kq(d),hash:bq(h)}}function mq(n,o){let a=o.replace(/\/+$/,"").split("/");return n.split("/").forEach(h=>{h===".."?a.length>1&&a.pop():h!=="."&&a.push(h)}),a.length>1?a.join("/"):"/"}function Jk(n,o,a,d){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+o+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function D3(n){return n.filter((o,a)=>a===0||o.route.path&&o.route.path.length>0)}function Up(n,o){let a=D3(n);return o?a.map((d,h)=>h===n.length-1?d.pathname:d.pathnameBase):a.map(d=>d.pathnameBase)}function Hp(n,o,a,d){d===void 0&&(d=!1);let h;typeof n=="string"?h=ts(n):(h=Nt({},n),Ge(!h.pathname||!h.pathname.includes("?"),Jk("?","pathname","search",h)),Ge(!h.pathname||!h.pathname.includes("#"),Jk("#","pathname","hash",h)),Ge(!h.search||!h.search.includes("#"),Jk("#","search","hash",h)));let p=n===""||h.pathname==="",m=p?"/":h.pathname,w;if(m==null)w=a;else{let y=o.length-1;if(!d&&m.startsWith("..")){let v=m.split("/");for(;v[0]==="..";)v.shift(),y-=1;h.pathname=v.join("/")}w=y>=0?o[y]:"/"}let g=pq(h,w),A=m&&m!=="/"&&m.endsWith("/"),C=(p||m===".")&&a.endsWith("/");return!g.pathname.endsWith("/")&&(A||C)&&(g.pathname+="/"),g}const ni=n=>n.join("/").replace(/\/\/+/g,"/"),gq=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),kq=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,bq=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;class Yw{constructor(o,a,d,h){h===void 0&&(h=!1),this.status=o,this.statusText=a||"",this.internal=h,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}}function Zw(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const T3=["post","put","patch","delete"],wq=new Set(T3),vq=["get",...T3],Aq=new Set(vq),_q=new Set([301,302,303,307,308]),Cq=new Set([307,308]),Xk={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},yq={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Sc={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Jw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xq=n=>({hasErrorBoundary:!!n.hasErrorBoundary}),I3="remix-router-transitions";function Eq(n){const o=n.window?n.window:typeof window<"u"?window:void 0,a=typeof o<"u"&&typeof o.document<"u"&&typeof o.document.createElement<"u",d=!a;Ge(n.routes.length>0,"You must provide a non-empty routes array to createRouter");let h;if(n.mapRouteProperties)h=n.mapRouteProperties;else if(n.detectErrorBoundary){let J=n.detectErrorBoundary;h=oe=>({hasErrorBoundary:J(oe)})}else h=xq;let p={},m=v0(n.routes,h,void 0,p),w,g=n.basename||"/",A=n.unstable_dataStrategy||Iq,C=Nt({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},n.future),y=null,v=new Set,x=null,S=null,I=null,N=n.hydrationData!=null,P=Ja(m,n.history.location,g),B=null;if(P==null){let J=Nr(404,{pathname:n.history.location.pathname}),{matches:oe,route:ie}=nT(m);P=oe,B={[ie.id]:J}}let O,L=P.some(J=>J.route.lazy),V=P.some(J=>J.route.loader);if(L)O=!1;else if(!V)O=!0;else if(C.v7_partialHydration){let J=n.hydrationData?n.hydrationData.loaderData:null,oe=n.hydrationData?n.hydrationData.errors:null,ie=me=>me.route.loader?typeof me.route.loader=="function"&&me.route.loader.hydrate===!0?!1:J&&J[me.route.id]!==void 0||oe&&oe[me.route.id]!==void 0:!0;if(oe){let me=P.findIndex(Ae=>oe[Ae.route.id]!==void 0);O=P.slice(0,me+1).every(ie)}else O=P.every(ie)}else O=n.hydrationData!=null;let F,D={historyAction:n.history.action,location:n.history.location,matches:P,initialized:O,navigation:Xk,restoreScrollPosition:n.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:n.hydrationData&&n.hydrationData.loaderData||{},actionData:n.hydrationData&&n.hydrationData.actionData||null,errors:n.hydrationData&&n.hydrationData.errors||B,fetchers:new Map,blockers:new Map},z=Jt.Pop,W=!1,$,Y=!1,re=new Map,te=null,Z=!1,Q=!1,ee=[],se=[],G=new Map,le=0,de=-1,fe=new Map,be=new Set,Ee=new Map,Ne=new Map,Se=new Set,ve=new Map,We=new Map,Ht=!1;function Dn(){if(y=n.history.listen(J=>{let{action:oe,location:ie,delta:me}=J;if(Ht){Ht=!1;return}pl(We.size===0||me!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Ae=Ml({currentLocation:D.location,nextLocation:ie,historyAction:oe});if(Ae&&me!=null){Ht=!0,n.history.go(me*-1),bn(Ae,{state:"blocked",location:ie,proceed(){bn(Ae,{state:"proceeding",proceed:void 0,reset:void 0,location:ie}),n.history.go(me)},reset(){let Le=new Map(D.blockers);Le.set(Ae,Sc),Xe({blockers:Le})}});return}return Ln(oe,ie)}),a){Uq(o,re);let J=()=>Hq(o,re);o.addEventListener("pagehide",J),te=()=>o.removeEventListener("pagehide",J)}return D.initialized||Ln(Jt.Pop,D.location,{initialHydration:!0}),F}function jt(){y&&y(),te&&te(),v.clear(),$&&$.abort(),D.fetchers.forEach((J,oe)=>ui(oe)),D.blockers.forEach((J,oe)=>Tn(oe))}function gn(J){return v.add(J),()=>v.delete(J)}function Xe(J,oe){oe===void 0&&(oe={}),D=Nt({},D,J);let ie=[],me=[];C.v7_fetcherPersist&&D.fetchers.forEach((Ae,Le)=>{Ae.state==="idle"&&(Se.has(Le)?me.push(Le):ie.push(Le))}),[...v].forEach(Ae=>Ae(D,{deletedFetchers:me,unstable_viewTransitionOpts:oe.viewTransitionOpts,unstable_flushSync:oe.flushSync===!0})),C.v7_fetcherPersist&&(ie.forEach(Ae=>D.fetchers.delete(Ae)),me.forEach(Ae=>ui(Ae)))}function Te(J,oe,ie){var me,Ae;let{flushSync:Le}=ie===void 0?{}:ie,Me=D.actionData!=null&&D.navigation.formMethod!=null&&oo(D.navigation.formMethod)&&D.navigation.state==="loading"&&((me=J.state)==null?void 0:me._isRedirect)!==!0,xe;oe.actionData?Object.keys(oe.actionData).length>0?xe=oe.actionData:xe=null:Me?xe=D.actionData:xe=null;let He=oe.loaderData?eT(D.loaderData,oe.loaderData,oe.matches||[],oe.errors):D.loaderData,ze=D.blockers;ze.size>0&&(ze=new Map(ze),ze.forEach((Pe,vt)=>ze.set(vt,Sc)));let en=W===!0||D.navigation.formMethod!=null&&oo(D.navigation.formMethod)&&((Ae=J.state)==null?void 0:Ae._isRedirect)!==!0;w&&(m=w,w=void 0),Z||z===Jt.Pop||(z===Jt.Push?n.history.push(J,J.state):z===Jt.Replace&&n.history.replace(J,J.state));let Tt;if(z===Jt.Pop){let Pe=re.get(D.location.pathname);Pe&&Pe.has(J.pathname)?Tt={currentLocation:D.location,nextLocation:J}:re.has(J.pathname)&&(Tt={currentLocation:J,nextLocation:D.location})}else if(Y){let Pe=re.get(D.location.pathname);Pe?Pe.add(J.pathname):(Pe=new Set([J.pathname]),re.set(D.location.pathname,Pe)),Tt={currentLocation:D.location,nextLocation:J}}Xe(Nt({},oe,{actionData:xe,loaderData:He,historyAction:z,location:J,initialized:!0,navigation:Xk,revalidation:"idle",restoreScrollPosition:Zd(J,oe.matches||D.matches),preventScrollReset:en,blockers:ze}),{viewTransitionOpts:Tt,flushSync:Le===!0}),z=Jt.Pop,W=!1,Y=!1,Z=!1,Q=!1,ee=[],se=[]}async function $n(J,oe){if(typeof J=="number"){n.history.go(J);return}let ie=A0(D.location,D.matches,g,C.v7_prependBasename,J,C.v7_relativeSplatPath,oe==null?void 0:oe.fromRouteId,oe==null?void 0:oe.relative),{path:me,submission:Ae,error:Le}=G5(C.v7_normalizeFormMethod,!1,ie,oe),Me=D.location,xe=Sd(D.location,me,oe&&oe.state);xe=Nt({},xe,n.history.encodeLocation(xe));let He=oe&&oe.replace!=null?oe.replace:void 0,ze=Jt.Push;He===!0?ze=Jt.Replace:He===!1||Ae!=null&&oo(Ae.formMethod)&&Ae.formAction===D.location.pathname+D.location.search&&(ze=Jt.Replace);let en=oe&&"preventScrollReset"in oe?oe.preventScrollReset===!0:void 0,Tt=(oe&&oe.unstable_flushSync)===!0,Pe=Ml({currentLocation:Me,nextLocation:xe,historyAction:ze});if(Pe){bn(Pe,{state:"blocked",location:xe,proceed(){bn(Pe,{state:"proceeding",proceed:void 0,reset:void 0,location:xe}),$n(J,oe)},reset(){let vt=new Map(D.blockers);vt.set(Pe,Sc),Xe({blockers:vt})}});return}return await Ln(ze,xe,{submission:Ae,pendingError:Le,preventScrollReset:en,replace:oe&&oe.replace,enableViewTransition:oe&&oe.unstable_viewTransition,flushSync:Tt})}function di(){if(ln(),Xe({revalidation:"loading"}),D.navigation.state!=="submitting"){if(D.navigation.state==="idle"){Ln(D.historyAction,D.location,{startUninterruptedRevalidation:!0});return}Ln(z||D.historyAction,D.navigation.location,{overrideNavigation:D.navigation})}}async function Ln(J,oe,ie){$&&$.abort(),$=null,z=J,Z=(ie&&ie.startUninterruptedRevalidation)===!0,dm(D.location,D.matches),W=(ie&&ie.preventScrollReset)===!0,Y=(ie&&ie.enableViewTransition)===!0;let me=w||m,Ae=ie&&ie.overrideNavigation,Le=Ja(me,oe,g),Me=(ie&&ie.flushSync)===!0;if(!Le){let Pe=Nr(404,{pathname:oe.pathname}),{matches:vt,route:Zt}=nT(me);In(),Te(oe,{matches:vt,loaderData:{},errors:{[Zt.id]:Pe}},{flushSync:Me});return}if(D.initialized&&!Q&&Rq(D.location,oe)&&!(ie&&ie.submission&&oo(ie.submission.formMethod))){Te(oe,{matches:Le},{flushSync:Me});return}$=new AbortController;let xe=za(n.history,oe,$.signal,ie&&ie.submission),He;if(ie&&ie.pendingError)He=[td(Le).route.id,{type:Mt.error,error:ie.pendingError}];else if(ie&&ie.submission&&oo(ie.submission.formMethod)){let Pe=await _e(xe,oe,ie.submission,Le,{replace:ie.replace,flushSync:Me});if(Pe.shortCircuited)return;He=Pe.pendingActionResult,Ae=eb(oe,ie.submission),Me=!1,xe=za(n.history,xe.url,xe.signal)}let{shortCircuited:ze,loaderData:en,errors:Tt}=await at(xe,oe,Le,Ae,ie&&ie.submission,ie&&ie.fetcherSubmission,ie&&ie.replace,ie&&ie.initialHydration===!0,Me,He);ze||($=null,Te(oe,Nt({matches:Le},tT(He),{loaderData:en,errors:Tt})))}async function _e(J,oe,ie,me,Ae){Ae===void 0&&(Ae={}),ln();let Le=Fq(oe,ie);Xe({navigation:Le},{flushSync:Ae.flushSync===!0});let Me,xe=C0(me,oe);if(!xe.route.action&&!xe.route.lazy)Me={type:Mt.error,error:Nr(405,{method:J.method,pathname:oe.pathname,routeId:xe.route.id})};else if(Me=(await qe("action",J,[xe],me))[0],J.signal.aborted)return{shortCircuited:!0};if(Ls(Me)){let He;return Ae&&Ae.replace!=null?He=Ae.replace:He=Z5(Me.response.headers.get("Location"),new URL(J.url),g)===D.location.pathname+D.location.search,await ye(J,Me,{submission:ie,replace:He}),{shortCircuited:!0}}if(Rs(Me))throw Nr(400,{type:"defer-action"});if(jr(Me)){let He=td(me,xe.route.id);return(Ae&&Ae.replace)!==!0&&(z=Jt.Push),{pendingActionResult:[He.route.id,Me]}}return{pendingActionResult:[xe.route.id,Me]}}async function at(J,oe,ie,me,Ae,Le,Me,xe,He,ze){let en=me||eb(oe,Ae),Tt=Ae||Le||iT(en),Pe=w||m,[vt,Zt]=K5(n.history,D,ie,Tt,oe,C.v7_partialHydration&&xe===!0,C.unstable_skipActionErrorRevalidation,Q,ee,se,Se,Ee,be,Pe,g,ze);if(In(Je=>!(ie&&ie.some(wn=>wn.route.id===Je))||vt&&vt.some(wn=>wn.route.id===Je)),de=++le,vt.length===0&&Zt.length===0){let Je=Ro();return Te(oe,Nt({matches:ie,loaderData:{},errors:ze&&jr(ze[1])?{[ze[0]]:ze[1].error}:null},tT(ze),Je?{fetchers:new Map(D.fetchers)}:{}),{flushSync:He}),{shortCircuited:!0}}if(!Z&&(!C.v7_partialHydration||!xe)){Zt.forEach(wn=>{let qn=D.fetchers.get(wn.key),tn=Dc(void 0,qn?qn.data:void 0);D.fetchers.set(wn.key,tn)});let Je;ze&&!jr(ze[1])?Je={[ze[0]]:ze[1].data}:D.actionData&&(Object.keys(D.actionData).length===0?Je=null:Je=D.actionData),Xe(Nt({navigation:en},Je!==void 0?{actionData:Je}:{},Zt.length>0?{fetchers:new Map(D.fetchers)}:{}),{flushSync:He})}Zt.forEach(Je=>{G.has(Je.key)&&Yt(Je.key),Je.controller&&G.set(Je.key,Je.controller)});let ss=()=>Zt.forEach(Je=>Yt(Je.key));$&&$.signal.addEventListener("abort",ss);let{loaderResults:bo,fetcherResults:Wn}=await kn(D.matches,ie,vt,Zt,J);if(J.signal.aborted)return{shortCircuited:!0};$&&$.signal.removeEventListener("abort",ss),Zt.forEach(Je=>G.delete(Je.key));let wo=rT([...bo,...Wn]);if(wo){if(wo.idx>=vt.length){let Je=Zt[wo.idx-vt.length].key;be.add(Je)}return await ye(J,wo.result,{replace:Me}),{shortCircuited:!0}}let{loaderData:jo,errors:xr}=X5(D,ie,vt,bo,ze,Zt,Wn,ve);ve.forEach((Je,wn)=>{Je.subscribe(qn=>{(qn||Je.done)&&ve.delete(wn)})}),C.v7_partialHydration&&xe&&D.errors&&Object.entries(D.errors).filter(Je=>{let[wn]=Je;return!vt.some(qn=>qn.route.id===wn)}).forEach(Je=>{let[wn,qn]=Je;xr=Object.assign(xr||{},{[wn]:qn})});let ia=Ro(),Er=Lo(de),sa=ia||Er||Zt.length>0;return Nt({loaderData:jo,errors:xr},sa?{fetchers:new Map(D.fetchers)}:{})}function Oe(J,oe,ie,me){if(d)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");G.has(J)&&Yt(J);let Ae=(me&&me.unstable_flushSync)===!0,Le=w||m,Me=A0(D.location,D.matches,g,C.v7_prependBasename,ie,C.v7_relativeSplatPath,oe,me==null?void 0:me.relative),xe=Ja(Le,Me,g);if(!xe){go(J,oe,Nr(404,{pathname:Me}),{flushSync:Ae});return}let{path:He,submission:ze,error:en}=G5(C.v7_normalizeFormMethod,!0,Me,me);if(en){go(J,oe,en,{flushSync:Ae});return}let Tt=C0(xe,He);if(W=(me&&me.preventScrollReset)===!0,ze&&oo(ze.formMethod)){Fe(J,oe,He,Tt,xe,Ae,ze);return}Ee.set(J,{routeId:oe,path:He}),De(J,oe,He,Tt,xe,Ae,ze)}async function Fe(J,oe,ie,me,Ae,Le,Me){if(ln(),Ee.delete(J),!me.route.action&&!me.route.lazy){let tn=Nr(405,{method:Me.formMethod,pathname:ie,routeId:oe});go(J,oe,tn,{flushSync:Le});return}let xe=D.fetchers.get(J);$t(J,Vq(Me,xe),{flushSync:Le});let He=new AbortController,ze=za(n.history,ie,He.signal,Me);G.set(J,He);let en=le,Pe=(await qe("action",ze,[me],Ae))[0];if(ze.signal.aborted){G.get(J)===He&&G.delete(J);return}if(C.v7_fetcherPersist&&Se.has(J)){if(Ls(Pe)||jr(Pe)){$t(J,yi(void 0));return}}else{if(Ls(Pe))if(G.delete(J),de>en){$t(J,yi(void 0));return}else return be.add(J),$t(J,Dc(Me)),ye(ze,Pe,{fetcherSubmission:Me});if(jr(Pe)){go(J,oe,Pe.error);return}}if(Rs(Pe))throw Nr(400,{type:"defer-action"});let vt=D.navigation.location||D.location,Zt=za(n.history,vt,He.signal),ss=w||m,bo=D.navigation.state!=="idle"?Ja(ss,D.navigation.location,g):D.matches;Ge(bo,"Didn't find any matches after fetcher action");let Wn=++le;fe.set(J,Wn);let wo=Dc(Me,Pe.data);D.fetchers.set(J,wo);let[jo,xr]=K5(n.history,D,bo,Me,vt,!1,C.unstable_skipActionErrorRevalidation,Q,ee,se,Se,Ee,be,ss,g,[me.route.id,Pe]);xr.filter(tn=>tn.key!==J).forEach(tn=>{let as=tn.key,Xd=D.fetchers.get(as),um=Dc(void 0,Xd?Xd.data:void 0);D.fetchers.set(as,um),G.has(as)&&Yt(as),tn.controller&&G.set(as,tn.controller)}),Xe({fetchers:new Map(D.fetchers)});let ia=()=>xr.forEach(tn=>Yt(tn.key));He.signal.addEventListener("abort",ia);let{loaderResults:Er,fetcherResults:sa}=await kn(D.matches,bo,jo,xr,Zt);if(He.signal.aborted)return;He.signal.removeEventListener("abort",ia),fe.delete(J),G.delete(J),xr.forEach(tn=>G.delete(tn.key));let Je=rT([...Er,...sa]);if(Je){if(Je.idx>=jo.length){let tn=xr[Je.idx-jo.length].key;be.add(tn)}return ye(Zt,Je.result)}let{loaderData:wn,errors:qn}=X5(D,D.matches,jo,Er,void 0,xr,sa,ve);if(D.fetchers.has(J)){let tn=yi(Pe.data);D.fetchers.set(J,tn)}Lo(Wn),D.navigation.state==="loading"&&Wn>de?(Ge(z,"Expected pending action"),$&&$.abort(),Te(D.navigation.location,{matches:bo,loaderData:wn,errors:qn,fetchers:new Map(D.fetchers)})):(Xe({errors:qn,loaderData:eT(D.loaderData,wn,bo,qn),fetchers:new Map(D.fetchers)}),Q=!1)}async function De(J,oe,ie,me,Ae,Le,Me){let xe=D.fetchers.get(J);$t(J,Dc(Me,xe?xe.data:void 0),{flushSync:Le});let He=new AbortController,ze=za(n.history,ie,He.signal);G.set(J,He);let en=le,Pe=(await qe("loader",ze,[me],Ae))[0];if(Rs(Pe)&&(Pe=await N3(Pe,ze.signal,!0)||Pe),G.get(J)===He&&G.delete(J),!ze.signal.aborted){if(Se.has(J)){$t(J,yi(void 0));return}if(Ls(Pe))if(de>en){$t(J,yi(void 0));return}else{be.add(J),await ye(ze,Pe);return}if(jr(Pe)){go(J,oe,Pe.error);return}Ge(!Rs(Pe),"Unhandled fetcher deferred data"),$t(J,yi(Pe.data))}}async function ye(J,oe,ie){let{submission:me,fetcherSubmission:Ae,replace:Le}=ie===void 0?{}:ie;oe.response.headers.has("X-Remix-Revalidate")&&(Q=!0);let Me=oe.response.headers.get("Location");Ge(Me,"Expected a Location header on the redirect Response"),Me=Z5(Me,new URL(J.url),g);let xe=Sd(D.location,Me,{_isRedirect:!0});if(a){let vt=!1;if(oe.response.headers.has("X-Remix-Reload-Document"))vt=!0;else if(Jw.test(Me)){const Zt=n.history.createURL(Me);vt=Zt.origin!==o.location.origin||Cl(Zt.pathname,g)==null}if(vt){Le?o.location.replace(Me):o.location.assign(Me);return}}$=null;let He=Le===!0?Jt.Replace:Jt.Push,{formMethod:ze,formAction:en,formEncType:Tt}=D.navigation;!me&&!Ae&&ze&&en&&Tt&&(me=iT(D.navigation));let Pe=me||Ae;if(Cq.has(oe.response.status)&&Pe&&oo(Pe.formMethod))await Ln(He,xe,{submission:Nt({},Pe,{formAction:Me}),preventScrollReset:W});else{let vt=eb(xe,me);await Ln(He,xe,{overrideNavigation:vt,fetcherSubmission:Ae,preventScrollReset:W})}}async function qe(J,oe,ie,me){try{let Ae=await Mq(A,J,oe,ie,me,p,h);return await Promise.all(Ae.map((Le,Me)=>{if(Lq(Le)){let xe=Le.result;return{type:Mt.redirect,response:Nq(xe,oe,ie[Me].route.id,me,g,C.v7_relativeSplatPath)}}return Bq(Le)}))}catch(Ae){return ie.map(()=>({type:Mt.error,error:Ae}))}}async function kn(J,oe,ie,me,Ae){let[Le,...Me]=await Promise.all([ie.length?qe("loader",Ae,ie,oe):[],...me.map(xe=>{if(xe.matches&&xe.match&&xe.controller){let He=za(n.history,xe.path,xe.controller.signal);return qe("loader",He,[xe.match],xe.matches).then(ze=>ze[0])}else return Promise.resolve({type:Mt.error,error:Nr(404,{pathname:xe.path})})})]);return await Promise.all([oT(J,ie,Le,Le.map(()=>Ae.signal),!1,D.loaderData),oT(J,me.map(xe=>xe.match),Me,me.map(xe=>xe.controller?xe.controller.signal:null),!0)]),{loaderResults:Le,fetcherResults:Me}}function ln(){Q=!0,ee.push(...In()),Ee.forEach((J,oe)=>{G.has(oe)&&(se.push(oe),Yt(oe))})}function $t(J,oe,ie){ie===void 0&&(ie={}),D.fetchers.set(J,oe),Xe({fetchers:new Map(D.fetchers)},{flushSync:(ie&&ie.flushSync)===!0})}function go(J,oe,ie,me){me===void 0&&(me={});let Ae=td(D.matches,oe);ui(J),Xe({errors:{[Ae.route.id]:ie},fetchers:new Map(D.fetchers)},{flushSync:(me&&me.flushSync)===!0})}function ra(J){return C.v7_fetcherPersist&&(Ne.set(J,(Ne.get(J)||0)+1),Se.has(J)&&Se.delete(J)),D.fetchers.get(J)||yq}function ui(J){let oe=D.fetchers.get(J);G.has(J)&&!(oe&&oe.state==="loading"&&fe.has(J))&&Yt(J),Ee.delete(J),fe.delete(J),be.delete(J),Se.delete(J),D.fetchers.delete(J)}function kt(J){if(C.v7_fetcherPersist){let oe=(Ne.get(J)||0)-1;oe<=0?(Ne.delete(J),Se.add(J)):Ne.set(J,oe)}else ui(J);Xe({fetchers:new Map(D.fetchers)})}function Yt(J){let oe=G.get(J);Ge(oe,"Expected fetch controller: "+J),oe.abort(),G.delete(J)}function yr(J){for(let oe of J){let ie=ra(oe),me=yi(ie.data);D.fetchers.set(oe,me)}}function Ro(){let J=[],oe=!1;for(let ie of be){let me=D.fetchers.get(ie);Ge(me,"Expected fetcher: "+ie),me.state==="loading"&&(be.delete(ie),J.push(ie),oe=!0)}return yr(J),oe}function Lo(J){let oe=[];for(let[ie,me]of fe)if(me<J){let Ae=D.fetchers.get(ie);Ge(Ae,"Expected fetcher: "+ie),Ae.state==="loading"&&(Yt(ie),fe.delete(ie),oe.push(ie))}return yr(oe),oe.length>0}function ko(J,oe){let ie=D.blockers.get(J)||Sc;return We.get(J)!==oe&&We.set(J,oe),ie}function Tn(J){D.blockers.delete(J),We.delete(J)}function bn(J,oe){let ie=D.blockers.get(J)||Sc;Ge(ie.state==="unblocked"&&oe.state==="blocked"||ie.state==="blocked"&&oe.state==="blocked"||ie.state==="blocked"&&oe.state==="proceeding"||ie.state==="blocked"&&oe.state==="unblocked"||ie.state==="proceeding"&&oe.state==="unblocked","Invalid blocker state transition: "+ie.state+" -> "+oe.state);let me=new Map(D.blockers);me.set(J,oe),Xe({blockers:me})}function Ml(J){let{currentLocation:oe,nextLocation:ie,historyAction:me}=J;if(We.size===0)return;We.size>1&&pl(!1,"A router only supports one blocker at a time");let Ae=Array.from(We.entries()),[Le,Me]=Ae[Ae.length-1],xe=D.blockers.get(Le);if(!(xe&&xe.state==="proceeding")&&Me({currentLocation:oe,nextLocation:ie,historyAction:me}))return Le}function In(J){let oe=[];return ve.forEach((ie,me)=>{(!J||J(me))&&(ie.cancel(),oe.push(me),ve.delete(me))}),oe}function Yd(J,oe,ie){if(x=J,I=oe,S=ie||null,!N&&D.navigation===Xk){N=!0;let me=Zd(D.location,D.matches);me!=null&&Xe({restoreScrollPosition:me})}return()=>{x=null,I=null,S=null}}function oa(J,oe){return S&&S(J,oe.map(me=>eq(me,D.loaderData)))||J.key}function dm(J,oe){if(x&&I){let ie=oa(J,oe);x[ie]=I()}}function Zd(J,oe){if(x){let ie=oa(J,oe),me=x[ie];if(typeof me=="number")return me}return null}function Jd(J){p={},w=v0(J,h,void 0,p)}return F={get basename(){return g},get future(){return C},get state(){return D},get routes(){return m},get window(){return o},initialize:Dn,subscribe:gn,enableScrollRestoration:Yd,navigate:$n,fetch:Oe,revalidate:di,createHref:J=>n.history.createHref(J),encodeLocation:J=>n.history.encodeLocation(J),getFetcher:ra,deleteFetcher:kt,dispose:jt,getBlocker:ko,deleteBlocker:Tn,_internalFetchControllers:G,_internalActiveDeferreds:ve,_internalSetRoutes:Jd},F}function Sq(n){return n!=null&&("formData"in n&&n.formData!=null||"body"in n&&n.body!==void 0)}function A0(n,o,a,d,h,p,m,w){let g,A;if(m){g=[];for(let y of o)if(g.push(y),y.route.id===m){A=y;break}}else g=o,A=o[o.length-1];let C=Hp(h||".",Up(g,p),Cl(n.pathname,a)||n.pathname,w==="path");return h==null&&(C.search=n.search,C.hash=n.hash),(h==null||h===""||h===".")&&A&&A.route.index&&!Xw(C.search)&&(C.search=C.search?C.search.replace(/^\?/,"?index&"):"?index"),d&&a!=="/"&&(C.pathname=C.pathname==="/"?a:ni([a,C.pathname])),Ks(C)}function G5(n,o,a,d){if(!d||!Sq(d))return{path:a};if(d.formMethod&&!zq(d.formMethod))return{path:a,error:Nr(405,{method:d.formMethod})};let h=()=>({path:a,error:Nr(400,{type:"invalid-body"})}),p=d.formMethod||"get",m=n?p.toUpperCase():p.toLowerCase(),w=P3(a);if(d.body!==void 0){if(d.formEncType==="text/plain"){if(!oo(m))return h();let v=typeof d.body=="string"?d.body:d.body instanceof FormData||d.body instanceof URLSearchParams?Array.from(d.body.entries()).reduce((x,S)=>{let[I,N]=S;return""+x+I+"="+N+`
`},""):String(d.body);return{path:a,submission:{formMethod:m,formAction:w,formEncType:d.formEncType,formData:void 0,json:void 0,text:v}}}else if(d.formEncType==="application/json"){if(!oo(m))return h();try{let v=typeof d.body=="string"?JSON.parse(d.body):d.body;return{path:a,submission:{formMethod:m,formAction:w,formEncType:d.formEncType,formData:void 0,json:v,text:void 0}}}catch{return h()}}}Ge(typeof FormData=="function","FormData is not available in this environment");let g,A;if(d.formData)g=_0(d.formData),A=d.formData;else if(d.body instanceof FormData)g=_0(d.body),A=d.body;else if(d.body instanceof URLSearchParams)g=d.body,A=J5(g);else if(d.body==null)g=new URLSearchParams,A=new FormData;else try{g=new URLSearchParams(d.body),A=J5(g)}catch{return h()}let C={formMethod:m,formAction:w,formEncType:d&&d.formEncType||"application/x-www-form-urlencoded",formData:A,json:void 0,text:void 0};if(oo(C.formMethod))return{path:a,submission:C};let y=ts(a);return o&&y.search&&Xw(y.search)&&g.append("index",""),y.search="?"+g,{path:Ks(y),submission:C}}function Dq(n,o){let a=n;if(o){let d=n.findIndex(h=>h.route.id===o);d>=0&&(a=n.slice(0,d))}return a}function K5(n,o,a,d,h,p,m,w,g,A,C,y,v,x,S,I){let N=I?jr(I[1])?I[1].error:I[1].data:void 0,P=n.createURL(o.location),B=n.createURL(h),O=I&&jr(I[1])?I[0]:void 0,L=O?Dq(a,O):a,V=I?I[1].statusCode:void 0,F=m&&V&&V>=400,D=L.filter((W,$)=>{let{route:Y}=W;if(Y.lazy)return!0;if(Y.loader==null)return!1;if(p)return typeof Y.loader!="function"||Y.loader.hydrate?!0:o.loaderData[Y.id]===void 0&&(!o.errors||o.errors[Y.id]===void 0);if(Tq(o.loaderData,o.matches[$],W)||g.some(Z=>Z===W.route.id))return!0;let re=o.matches[$],te=W;return Q5(W,Nt({currentUrl:P,currentParams:re.params,nextUrl:B,nextParams:te.params},d,{actionResult:N,unstable_actionStatus:V,defaultShouldRevalidate:F?!1:w||P.pathname+P.search===B.pathname+B.search||P.search!==B.search||M3(re,te)}))}),z=[];return y.forEach((W,$)=>{if(p||!a.some(Q=>Q.route.id===W.routeId)||C.has($))return;let Y=Ja(x,W.path,S);if(!Y){z.push({key:$,routeId:W.routeId,path:W.path,matches:null,match:null,controller:null});return}let re=o.fetchers.get($),te=C0(Y,W.path),Z=!1;v.has($)?Z=!1:A.includes($)?Z=!0:re&&re.state!=="idle"&&re.data===void 0?Z=w:Z=Q5(te,Nt({currentUrl:P,currentParams:o.matches[o.matches.length-1].params,nextUrl:B,nextParams:a[a.length-1].params},d,{actionResult:N,unstable_actionStatus:V,defaultShouldRevalidate:F?!1:w})),Z&&z.push({key:$,routeId:W.routeId,path:W.path,matches:Y,match:te,controller:new AbortController})}),[D,z]}function Tq(n,o,a){let d=!o||a.route.id!==o.route.id,h=n[a.route.id]===void 0;return d||h}function M3(n,o){let a=n.route.path;return n.pathname!==o.pathname||a!=null&&a.endsWith("*")&&n.params["*"]!==o.params["*"]}function Q5(n,o){if(n.route.shouldRevalidate){let a=n.route.shouldRevalidate(o);if(typeof a=="boolean")return a}return o.defaultShouldRevalidate}async function Y5(n,o,a){if(!n.lazy)return;let d=await n.lazy();if(!n.lazy)return;let h=a[n.id];Ge(h,"No route found in manifest");let p={};for(let m in d){let g=h[m]!==void 0&&m!=="hasErrorBoundary";pl(!g,'Route "'+h.id+'" has a static property "'+m+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+m+'" will be ignored.')),!g&&!JW.has(m)&&(p[m]=d[m])}Object.assign(h,p),Object.assign(h,Nt({},o(h),{lazy:void 0}))}function Iq(n){return Promise.all(n.matches.map(o=>o.resolve()))}async function Mq(n,o,a,d,h,p,m,w){let g=d.reduce((y,v)=>y.add(v.route.id),new Set),A=new Set,C=await n({matches:h.map(y=>{let v=g.has(y.route.id);return Nt({},y,{shouldLoad:v,resolve:S=>(A.add(y.route.id),v?Pq(o,a,y,p,m,S,w):Promise.resolve({type:Mt.data,result:void 0}))})}),request:a,params:h[0].params,context:w});return h.forEach(y=>Ge(A.has(y.route.id),'`match.resolve()` was not called for route id "'+y.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),C.filter((y,v)=>g.has(h[v].route.id))}async function Pq(n,o,a,d,h,p,m){let w,g,A=C=>{let y,v=new Promise((I,N)=>y=N);g=()=>y(),o.signal.addEventListener("abort",g);let x=I=>typeof C!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+n+'" [routeId: '+a.route.id+"]"))):C({request:o,params:a.params,context:m},...I!==void 0?[I]:[]),S;return p?S=p(I=>x(I)):S=(async()=>{try{return{type:"data",result:await x()}}catch(I){return{type:"error",result:I}}})(),Promise.race([S,v])};try{let C=a.route[n];if(a.route.lazy)if(C){let y,[v]=await Promise.all([A(C).catch(x=>{y=x}),Y5(a.route,h,d)]);if(y!==void 0)throw y;w=v}else if(await Y5(a.route,h,d),C=a.route[n],C)w=await A(C);else if(n==="action"){let y=new URL(o.url),v=y.pathname+y.search;throw Nr(405,{method:o.method,pathname:v,routeId:a.route.id})}else return{type:Mt.data,result:void 0};else if(C)w=await A(C);else{let y=new URL(o.url),v=y.pathname+y.search;throw Nr(404,{pathname:v})}Ge(w.result!==void 0,"You defined "+(n==="action"?"an action":"a loader")+" for route "+('"'+a.route.id+"\" but didn't return anything from your `"+n+"` ")+"function. Please return a value or `null`.")}catch(C){return{type:Mt.error,result:C}}finally{g&&o.signal.removeEventListener("abort",g)}return w}async function Bq(n){let{result:o,type:a,status:d}=n;if(B3(o)){let m;try{let w=o.headers.get("Content-Type");w&&/\bapplication\/json\b/.test(w)?o.body==null?m=null:m=await o.json():m=await o.text()}catch(w){return{type:Mt.error,error:w}}return a===Mt.error?{type:Mt.error,error:new Yw(o.status,o.statusText,m),statusCode:o.status,headers:o.headers}:{type:Mt.data,data:m,statusCode:o.status,headers:o.headers}}if(a===Mt.error)return{type:Mt.error,error:o,statusCode:Zw(o)?o.status:d};if(jq(o)){var h,p;return{type:Mt.deferred,deferredData:o,statusCode:(h=o.init)==null?void 0:h.status,headers:((p=o.init)==null?void 0:p.headers)&&new Headers(o.init.headers)}}return{type:Mt.data,data:o,statusCode:d}}function Nq(n,o,a,d,h,p){let m=n.headers.get("Location");if(Ge(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!Jw.test(m)){let w=d.slice(0,d.findIndex(g=>g.route.id===a)+1);m=A0(new URL(o.url),w,h,!0,m,p),n.headers.set("Location",m)}return n}function Z5(n,o,a){if(Jw.test(n)){let d=n,h=d.startsWith("//")?new URL(o.protocol+d):new URL(d),p=Cl(h.pathname,a)!=null;if(h.origin===o.origin&&p)return h.pathname+h.search+h.hash}return n}function za(n,o,a,d){let h=n.createURL(P3(o)).toString(),p={signal:a};if(d&&oo(d.formMethod)){let{formMethod:m,formEncType:w}=d;p.method=m.toUpperCase(),w==="application/json"?(p.headers=new Headers({"Content-Type":w}),p.body=JSON.stringify(d.json)):w==="text/plain"?p.body=d.text:w==="application/x-www-form-urlencoded"&&d.formData?p.body=_0(d.formData):p.body=d.formData}return new Request(h,p)}function _0(n){let o=new URLSearchParams;for(let[a,d]of n.entries())o.append(a,typeof d=="string"?d:d.name);return o}function J5(n){let o=new FormData;for(let[a,d]of n.entries())o.append(a,d);return o}function Oq(n,o,a,d,h,p){let m={},w=null,g,A=!1,C={},y=d&&jr(d[1])?d[1].error:void 0;return a.forEach((v,x)=>{let S=o[x].route.id;if(Ge(!Ls(v),"Cannot handle redirect results in processLoaderData"),jr(v)){let I=v.error;y!==void 0&&(I=y,y=void 0),w=w||{};{let N=td(n,S);w[N.route.id]==null&&(w[N.route.id]=I)}m[S]=void 0,A||(A=!0,g=Zw(v.error)?v.error.status:500),v.headers&&(C[S]=v.headers)}else Rs(v)?(h.set(S,v.deferredData),m[S]=v.deferredData.data,v.statusCode!=null&&v.statusCode!==200&&!A&&(g=v.statusCode),v.headers&&(C[S]=v.headers)):(m[S]=v.data,v.statusCode&&v.statusCode!==200&&!A&&(g=v.statusCode),v.headers&&(C[S]=v.headers))}),y!==void 0&&d&&(w={[d[0]]:y},m[d[0]]=void 0),{loaderData:m,errors:w,statusCode:g||200,loaderHeaders:C}}function X5(n,o,a,d,h,p,m,w){let{loaderData:g,errors:A}=Oq(o,a,d,h,w);for(let C=0;C<p.length;C++){let{key:y,match:v,controller:x}=p[C];Ge(m!==void 0&&m[C]!==void 0,"Did not find corresponding fetcher result");let S=m[C];if(!(x&&x.signal.aborted))if(jr(S)){let I=td(n.matches,v==null?void 0:v.route.id);A&&A[I.route.id]||(A=Nt({},A,{[I.route.id]:S.error})),n.fetchers.delete(y)}else if(Ls(S))Ge(!1,"Unhandled fetcher revalidation redirect");else if(Rs(S))Ge(!1,"Unhandled fetcher deferred data");else{let I=yi(S.data);n.fetchers.set(y,I)}}return{loaderData:g,errors:A}}function eT(n,o,a,d){let h=Nt({},o);for(let p of a){let m=p.route.id;if(o.hasOwnProperty(m)?o[m]!==void 0&&(h[m]=o[m]):n[m]!==void 0&&p.route.loader&&(h[m]=n[m]),d&&d.hasOwnProperty(m))break}return h}function tT(n){return n?jr(n[1])?{actionData:{}}:{actionData:{[n[0]]:n[1].data}}:{}}function td(n,o){return(o?n.slice(0,n.findIndex(d=>d.route.id===o)+1):[...n]).reverse().find(d=>d.route.hasErrorBoundary===!0)||n[0]}function nT(n){let o=n.length===1?n[0]:n.find(a=>a.index||!a.path||a.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:o}],route:o}}function Nr(n,o){let{pathname:a,routeId:d,method:h,type:p}=o===void 0?{}:o,m="Unknown Server Error",w="Unknown @remix-run/router error";return n===400?(m="Bad Request",h&&a&&d?w="You made a "+h+' request to "'+a+'" but '+('did not provide a `loader` for route "'+d+'", ')+"so there is no way to handle the request.":p==="defer-action"?w="defer() is not supported in actions":p==="invalid-body"&&(w="Unable to encode submission body")):n===403?(m="Forbidden",w='Route "'+d+'" does not match URL "'+a+'"'):n===404?(m="Not Found",w='No route matches URL "'+a+'"'):n===405&&(m="Method Not Allowed",h&&a&&d?w="You made a "+h.toUpperCase()+' request to "'+a+'" but '+('did not provide an `action` for route "'+d+'", ')+"so there is no way to handle the request.":h&&(w='Invalid request method "'+h.toUpperCase()+'"')),new Yw(n||500,m,new Error(w),!0)}function rT(n){for(let o=n.length-1;o>=0;o--){let a=n[o];if(Ls(a))return{result:a,idx:o}}}function P3(n){let o=typeof n=="string"?ts(n):n;return Ks(Nt({},o,{hash:""}))}function Rq(n,o){return n.pathname!==o.pathname||n.search!==o.search?!1:n.hash===""?o.hash!=="":n.hash===o.hash?!0:o.hash!==""}function Lq(n){return B3(n.result)&&_q.has(n.result.status)}function Rs(n){return n.type===Mt.deferred}function jr(n){return n.type===Mt.error}function Ls(n){return(n&&n.type)===Mt.redirect}function jq(n){let o=n;return o&&typeof o=="object"&&typeof o.data=="object"&&typeof o.subscribe=="function"&&typeof o.cancel=="function"&&typeof o.resolveData=="function"}function B3(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.headers=="object"&&typeof n.body<"u"}function zq(n){return Aq.has(n.toLowerCase())}function oo(n){return wq.has(n.toLowerCase())}async function oT(n,o,a,d,h,p){for(let m=0;m<a.length;m++){let w=a[m],g=o[m];if(!g)continue;let A=n.find(y=>y.route.id===g.route.id),C=A!=null&&!M3(A,g)&&(p&&p[g.route.id])!==void 0;if(Rs(w)&&(h||C)){let y=d[m];Ge(y,"Expected an AbortSignal for revalidating fetcher deferred result"),await N3(w,y,h).then(v=>{v&&(a[m]=v||a[m])})}}}async function N3(n,o,a){if(a===void 0&&(a=!1),!await n.deferredData.resolveData(o)){if(a)try{return{type:Mt.data,data:n.deferredData.unwrappedData}}catch(h){return{type:Mt.error,error:h}}return{type:Mt.data,data:n.deferredData.data}}}function Xw(n){return new URLSearchParams(n).getAll("index").some(o=>o==="")}function C0(n,o){let a=typeof o=="string"?ts(o).search:o.search;if(n[n.length-1].route.index&&Xw(a||""))return n[n.length-1];let d=D3(n);return d[d.length-1]}function iT(n){let{formMethod:o,formAction:a,formEncType:d,text:h,formData:p,json:m}=n;if(!(!o||!a||!d)){if(h!=null)return{formMethod:o,formAction:a,formEncType:d,formData:void 0,json:void 0,text:h};if(p!=null)return{formMethod:o,formAction:a,formEncType:d,formData:p,json:void 0,text:void 0};if(m!==void 0)return{formMethod:o,formAction:a,formEncType:d,formData:void 0,json:m,text:void 0}}}function eb(n,o){return o?{state:"loading",location:n,formMethod:o.formMethod,formAction:o.formAction,formEncType:o.formEncType,formData:o.formData,json:o.json,text:o.text}:{state:"loading",location:n,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Fq(n,o){return{state:"submitting",location:n,formMethod:o.formMethod,formAction:o.formAction,formEncType:o.formEncType,formData:o.formData,json:o.json,text:o.text}}function Dc(n,o){return n?{state:"loading",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:o}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:o}}function Vq(n,o){return{state:"submitting",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:o?o.data:void 0}}function yi(n){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n}}function Uq(n,o){try{let a=n.sessionStorage.getItem(I3);if(a){let d=JSON.parse(a);for(let[h,p]of Object.entries(d||{}))p&&Array.isArray(p)&&o.set(h,new Set(p||[]))}}catch{}}function Hq(n,o){if(o.size>0){let a={};for(let[d,h]of o)a[d]=[...h];try{n.sessionStorage.setItem(I3,JSON.stringify(a))}catch(d){pl(!1,"Failed to save applied view transitions in sessionStorage ("+d+").")}}}/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zf(){return zf=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(n[d]=a[d])}return n},zf.apply(this,arguments)}const $p=q.createContext(null),O3=q.createContext(null),ns=q.createContext(null),ev=q.createContext(null),Oo=q.createContext({outlet:null,matches:[],isDataRoute:!1}),R3=q.createContext(null);function $q(n,o){let{relative:a}=o===void 0?{}:o;yl()||Ge(!1);let{basename:d,navigator:h}=q.useContext(ns),{hash:p,pathname:m,search:w}=j3(n,{relative:a}),g=m;return d!=="/"&&(g=m==="/"?d:ni([d,m])),h.createHref({pathname:g,search:w,hash:p})}function yl(){return q.useContext(ev)!=null}function Wd(){return yl()||Ge(!1),q.useContext(ev).location}function L3(n){q.useContext(ns).static||q.useLayoutEffect(n)}function Cr(){let{isDataRoute:n}=q.useContext(Oo);return n?oG():Wq()}function Wq(){yl()||Ge(!1);let n=q.useContext($p),{basename:o,future:a,navigator:d}=q.useContext(ns),{matches:h}=q.useContext(Oo),{pathname:p}=Wd(),m=JSON.stringify(Up(h,a.v7_relativeSplatPath)),w=q.useRef(!1);return L3(()=>{w.current=!0}),q.useCallback(function(A,C){if(C===void 0&&(C={}),!w.current)return;if(typeof A=="number"){d.go(A);return}let y=Hp(A,JSON.parse(m),p,C.relative==="path");n==null&&o!=="/"&&(y.pathname=y.pathname==="/"?o:ni([o,y.pathname])),(C.replace?d.replace:d.push)(y,C.state,C)},[o,d,m,p,n])}const qq=q.createContext(null);function Gq(n){let o=q.useContext(Oo).outlet;return o&&q.createElement(qq.Provider,{value:n},o)}function tv(){let{matches:n}=q.useContext(Oo),o=n[n.length-1];return o?o.params:{}}function j3(n,o){let{relative:a}=o===void 0?{}:o,{future:d}=q.useContext(ns),{matches:h}=q.useContext(Oo),{pathname:p}=Wd(),m=JSON.stringify(Up(h,d.v7_relativeSplatPath));return q.useMemo(()=>Hp(n,JSON.parse(m),p,a==="path"),[n,m,p,a])}function Kq(n,o,a,d){yl()||Ge(!1);let{navigator:h}=q.useContext(ns),{matches:p}=q.useContext(Oo),m=p[p.length-1],w=m?m.params:{};m&&m.pathname;let g=m?m.pathnameBase:"/";m&&m.route;let A=Wd(),C;C=A;let y=C.pathname||"/",v=y;if(g!=="/"){let I=g.replace(/^\//,"").split("/");v="/"+y.replace(/^\//,"").split("/").slice(I.length).join("/")}let x=Ja(n,{pathname:v});return Xq(x&&x.map(I=>Object.assign({},I,{params:Object.assign({},w,I.params),pathname:ni([g,h.encodeLocation?h.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?g:ni([g,h.encodeLocation?h.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),p,a,d)}function Qq(){let n=rG(),o=Zw(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),a=n instanceof Error?n.stack:null,h={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},o),a?q.createElement("pre",{style:h},a):null,null)}const Yq=q.createElement(Qq,null);class Zq extends q.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,a){return a.location!==o.location||a.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:a.error,location:a.location,revalidation:o.revalidation||a.revalidation}}componentDidCatch(o,a){console.error("React Router caught the following error during render",o,a)}render(){return this.state.error!==void 0?q.createElement(Oo.Provider,{value:this.props.routeContext},q.createElement(R3.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Jq(n){let{routeContext:o,match:a,children:d}=n,h=q.useContext($p);return h&&h.static&&h.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(h.staticContext._deepestRenderedBoundaryId=a.route.id),q.createElement(Oo.Provider,{value:o},d)}function Xq(n,o,a,d){var h;if(o===void 0&&(o=[]),a===void 0&&(a=null),d===void 0&&(d=null),n==null){var p;if((p=a)!=null&&p.errors)n=a.matches;else return null}let m=n,w=(h=a)==null?void 0:h.errors;if(w!=null){let C=m.findIndex(y=>y.route.id&&(w==null?void 0:w[y.route.id])!==void 0);C>=0||Ge(!1),m=m.slice(0,Math.min(m.length,C+1))}let g=!1,A=-1;if(a&&d&&d.v7_partialHydration)for(let C=0;C<m.length;C++){let y=m[C];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(A=C),y.route.id){let{loaderData:v,errors:x}=a,S=y.route.loader&&v[y.route.id]===void 0&&(!x||x[y.route.id]===void 0);if(y.route.lazy||S){g=!0,A>=0?m=m.slice(0,A+1):m=[m[0]];break}}}return m.reduceRight((C,y,v)=>{let x,S=!1,I=null,N=null;a&&(x=w&&y.route.id?w[y.route.id]:void 0,I=y.route.errorElement||Yq,g&&(A<0&&v===0?(S=!0,N=null):A===v&&(S=!0,N=y.route.hydrateFallbackElement||null)));let P=o.concat(m.slice(0,v+1)),B=()=>{let O;return x?O=I:S?O=N:y.route.Component?O=q.createElement(y.route.Component,null):y.route.element?O=y.route.element:O=C,q.createElement(Jq,{match:y,routeContext:{outlet:C,matches:P,isDataRoute:a!=null},children:O})};return a&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?q.createElement(Zq,{location:a.location,revalidation:a.revalidation,component:I,error:x,children:B(),routeContext:{outlet:null,matches:P,isDataRoute:!0}}):B()},null)}var z3=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(z3||{}),Ff=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Ff||{});function eG(n){let o=q.useContext($p);return o||Ge(!1),o}function tG(n){let o=q.useContext(O3);return o||Ge(!1),o}function nG(n){let o=q.useContext(Oo);return o||Ge(!1),o}function F3(n){let o=nG(),a=o.matches[o.matches.length-1];return a.route.id||Ge(!1),a.route.id}function rG(){var n;let o=q.useContext(R3),a=tG(Ff.UseRouteError),d=F3(Ff.UseRouteError);return o!==void 0?o:(n=a.errors)==null?void 0:n[d]}function oG(){let{router:n}=eG(z3.UseNavigateStable),o=F3(Ff.UseNavigateStable),a=q.useRef(!1);return L3(()=>{a.current=!0}),q.useCallback(function(h,p){p===void 0&&(p={}),a.current&&(typeof h=="number"?n.navigate(h):n.navigate(h,zf({fromRouteId:o},p)))},[n,o])}function iG(n){let{to:o,replace:a,state:d,relative:h}=n;yl()||Ge(!1);let{future:p,static:m}=q.useContext(ns),{matches:w}=q.useContext(Oo),{pathname:g}=Wd(),A=Cr(),C=Hp(o,Up(w,p.v7_relativeSplatPath),g,h==="path"),y=JSON.stringify(C);return q.useEffect(()=>A(JSON.parse(y),{replace:a,state:d,relative:h}),[A,y,h,a,d]),null}function V3(n){return Gq(n.context)}function Bn(n){Ge(!1)}function sG(n){let{basename:o="/",children:a=null,location:d,navigationType:h=Jt.Pop,navigator:p,static:m=!1,future:w}=n;yl()&&Ge(!1);let g=o.replace(/^\/*/,"/"),A=q.useMemo(()=>({basename:g,navigator:p,static:m,future:zf({v7_relativeSplatPath:!1},w)}),[g,w,p,m]);typeof d=="string"&&(d=ts(d));let{pathname:C="/",search:y="",hash:v="",state:x=null,key:S="default"}=d,I=q.useMemo(()=>{let N=Cl(C,g);return N==null?null:{location:{pathname:N,search:y,hash:v,state:x,key:S},navigationType:h}},[g,C,y,v,x,S,h]);return I==null?null:q.createElement(ns.Provider,{value:A},q.createElement(ev.Provider,{children:a,value:I}))}new Promise(()=>{});function y0(n,o){o===void 0&&(o=[]);let a=[];return q.Children.forEach(n,(d,h)=>{if(!q.isValidElement(d))return;let p=[...o,h];if(d.type===q.Fragment){a.push.apply(a,y0(d.props.children,p));return}d.type!==Bn&&Ge(!1),!d.props.index||!d.props.children||Ge(!1);let m={id:d.props.id||p.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(m.children=y0(d.props.children,p)),a.push(m)}),a}function aG(n){let o={hasErrorBoundary:n.ErrorBoundary!=null||n.errorElement!=null};return n.Component&&Object.assign(o,{element:q.createElement(n.Component),Component:void 0}),n.HydrateFallback&&Object.assign(o,{hydrateFallbackElement:q.createElement(n.HydrateFallback),HydrateFallback:void 0}),n.ErrorBoundary&&Object.assign(o,{errorElement:q.createElement(n.ErrorBoundary),ErrorBoundary:void 0}),o}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dd(){return Dd=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(n[d]=a[d])}return n},Dd.apply(this,arguments)}function lG(n,o){if(n==null)return{};var a={},d=Object.keys(n),h,p;for(p=0;p<d.length;p++)h=d[p],!(o.indexOf(h)>=0)&&(a[h]=n[h]);return a}function cG(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function dG(n,o){return n.button===0&&(!o||o==="_self")&&!cG(n)}const uG=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],hG="6";try{window.__reactRouterVersion=hG}catch{}function fG(n,o){return Eq({basename:void 0,future:Dd({},void 0,{v7_prependBasename:!0}),history:QW({window:void 0}),hydrationData:pG(),routes:n,mapRouteProperties:aG,unstable_dataStrategy:void 0,window:void 0}).initialize()}function pG(){var n;let o=(n=window)==null?void 0:n.__staticRouterHydrationData;return o&&o.errors&&(o=Dd({},o,{errors:mG(o.errors)})),o}function mG(n){if(!n)return null;let o=Object.entries(n),a={};for(let[d,h]of o)if(h&&h.__type==="RouteErrorResponse")a[d]=new Yw(h.status,h.statusText,h.data,h.internal===!0);else if(h&&h.__type==="Error"){if(h.__subType){let p=window[h.__subType];if(typeof p=="function")try{let m=new p(h.message);m.stack="",a[d]=m}catch{}}if(a[d]==null){let p=new Error(h.message);p.stack="",a[d]=p}}else a[d]=h;return a}const gG=q.createContext({isTransitioning:!1}),kG=q.createContext(new Map),bG="startTransition",sT=OU[bG],wG="flushSync",aT=G$[wG];function vG(n){sT?sT(n):n()}function Tc(n){aT?aT(n):n()}class AG{constructor(){this.status="pending",this.promise=new Promise((o,a)=>{this.resolve=d=>{this.status==="pending"&&(this.status="resolved",o(d))},this.reject=d=>{this.status==="pending"&&(this.status="rejected",a(d))}})}}function _G(n){let{fallbackElement:o,router:a,future:d}=n,[h,p]=q.useState(a.state),[m,w]=q.useState(),[g,A]=q.useState({isTransitioning:!1}),[C,y]=q.useState(),[v,x]=q.useState(),[S,I]=q.useState(),N=q.useRef(new Map),{v7_startTransition:P}=d||{},B=q.useCallback(D=>{P?vG(D):D()},[P]),O=q.useCallback((D,z)=>{let{deletedFetchers:W,unstable_flushSync:$,unstable_viewTransitionOpts:Y}=z;W.forEach(te=>N.current.delete(te)),D.fetchers.forEach((te,Z)=>{te.data!==void 0&&N.current.set(Z,te.data)});let re=a.window==null||a.window.document==null||typeof a.window.document.startViewTransition!="function";if(!Y||re){$?Tc(()=>p(D)):B(()=>p(D));return}if($){Tc(()=>{v&&(C&&C.resolve(),v.skipTransition()),A({isTransitioning:!0,flushSync:!0,currentLocation:Y.currentLocation,nextLocation:Y.nextLocation})});let te=a.window.document.startViewTransition(()=>{Tc(()=>p(D))});te.finished.finally(()=>{Tc(()=>{y(void 0),x(void 0),w(void 0),A({isTransitioning:!1})})}),Tc(()=>x(te));return}v?(C&&C.resolve(),v.skipTransition(),I({state:D,currentLocation:Y.currentLocation,nextLocation:Y.nextLocation})):(w(D),A({isTransitioning:!0,flushSync:!1,currentLocation:Y.currentLocation,nextLocation:Y.nextLocation}))},[a.window,v,C,N,B]);q.useLayoutEffect(()=>a.subscribe(O),[a,O]),q.useEffect(()=>{g.isTransitioning&&!g.flushSync&&y(new AG)},[g]),q.useEffect(()=>{if(C&&m&&a.window){let D=m,z=C.promise,W=a.window.document.startViewTransition(async()=>{B(()=>p(D)),await z});W.finished.finally(()=>{y(void 0),x(void 0),w(void 0),A({isTransitioning:!1})}),x(W)}},[B,m,C,a.window]),q.useEffect(()=>{C&&m&&h.location.key===m.location.key&&C.resolve()},[C,v,h.location,m]),q.useEffect(()=>{!g.isTransitioning&&S&&(w(S.state),A({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),I(void 0))},[g.isTransitioning,S]),q.useEffect(()=>{},[]);let L=q.useMemo(()=>({createHref:a.createHref,encodeLocation:a.encodeLocation,go:D=>a.navigate(D),push:(D,z,W)=>a.navigate(D,{state:z,preventScrollReset:W==null?void 0:W.preventScrollReset}),replace:(D,z,W)=>a.navigate(D,{replace:!0,state:z,preventScrollReset:W==null?void 0:W.preventScrollReset})}),[a]),V=a.basename||"/",F=q.useMemo(()=>({router:a,navigator:L,static:!1,basename:V}),[a,L,V]);return q.createElement(q.Fragment,null,q.createElement($p.Provider,{value:F},q.createElement(O3.Provider,{value:h},q.createElement(kG.Provider,{value:N.current},q.createElement(gG.Provider,{value:g},q.createElement(sG,{basename:V,location:h.location,navigationType:h.historyAction,navigator:L,future:{v7_relativeSplatPath:a.future.v7_relativeSplatPath}},h.initialized||a.future.v7_partialHydration?q.createElement(CG,{routes:a.routes,future:a.future,state:h}):o))))),null)}function CG(n){let{routes:o,future:a,state:d}=n;return Kq(o,void 0,d,a)}const yG=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xG=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fn=q.forwardRef(function(o,a){let{onClick:d,relative:h,reloadDocument:p,replace:m,state:w,target:g,to:A,preventScrollReset:C,unstable_viewTransition:y}=o,v=lG(o,uG),{basename:x}=q.useContext(ns),S,I=!1;if(typeof A=="string"&&xG.test(A)&&(S=A,yG))try{let O=new URL(window.location.href),L=A.startsWith("//")?new URL(O.protocol+A):new URL(A),V=Cl(L.pathname,x);L.origin===O.origin&&V!=null?A=V+L.search+L.hash:I=!0}catch{}let N=$q(A,{relative:h}),P=EG(A,{replace:m,state:w,target:g,preventScrollReset:C,relative:h,unstable_viewTransition:y});function B(O){d&&d(O),O.defaultPrevented||P(O)}return q.createElement("a",Dd({},v,{href:S||N,onClick:I||p?d:B,ref:a,target:g}))});var lT;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(lT||(lT={}));var cT;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(cT||(cT={}));function EG(n,o){let{target:a,replace:d,state:h,preventScrollReset:p,relative:m,unstable_viewTransition:w}=o===void 0?{}:o,g=Cr(),A=Wd(),C=j3(n,{relative:m});return q.useCallback(y=>{if(dG(y,a)){y.preventDefault();let v=d!==void 0?d:Ks(A)===Ks(C);g(n,{replace:v,state:h,preventScrollReset:p,relative:m,unstable_viewTransition:w})}},[A,g,C,d,h,a,n,p,m,w])}function Cn(n){for(var o=arguments.length,a=Array(o>1?o-1:0),d=1;d<o;d++)a[d-1]=arguments[d];throw Error("[Immer] minified error nr: "+n+(a.length?" "+a.map(function(h){return"'"+h+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function uo(n){return!!n&&!!n[St]}function ho(n){var o;return!!n&&(function(a){if(!a||typeof a!="object")return!1;var d=Object.getPrototypeOf(a);if(d===null)return!0;var h=Object.hasOwnProperty.call(d,"constructor")&&d.constructor;return h===Object||typeof h=="function"&&Function.toString.call(h)===OG}(n)||Array.isArray(n)||!!n[nd]||!!(!((o=n.constructor)===null||o===void 0)&&o[nd])||Wp(n)||qp(n))}function SG(n){return uo(n)||Cn(23,n),n[St].t}function Ki(n,o,a){a===void 0&&(a=!1),Qi(n)===0?(a?Object.keys:il)(n).forEach(function(d){a&&typeof d=="symbol"||o(d,n[d],n)}):n.forEach(function(d,h){return o(h,d,n)})}function Qi(n){var o=n[St];return o?o.i>3?o.i-4:o.i:Array.isArray(n)?1:Wp(n)?2:qp(n)?3:0}function Hi(n,o){return Qi(n)===2?n.has(o):Object.prototype.hasOwnProperty.call(n,o)}function af(n,o){return Qi(n)===2?n.get(o):n[o]}function U3(n,o,a){var d=Qi(n);d===2?n.set(o,a):d===3?n.add(a):n[o]=a}function H3(n,o){return n===o?n!==0||1/n==1/o:n!=n&&o!=o}function Wp(n){return BG&&n instanceof Map}function qp(n){return NG&&n instanceof Set}function Ms(n){return n.o||n.t}function nv(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var o=W3(n);delete o[St];for(var a=il(o),d=0;d<a.length;d++){var h=a[d],p=o[h];p.writable===!1&&(p.writable=!0,p.configurable=!0),(p.get||p.set)&&(o[h]={configurable:!0,writable:!0,enumerable:p.enumerable,value:n[h]})}return Object.create(Object.getPrototypeOf(n),o)}function rv(n,o){return o===void 0&&(o=!1),ov(n)||uo(n)||!ho(n)||(Qi(n)>1&&(n.set=n.add=n.clear=n.delete=DG),Object.freeze(n),o&&Ki(n,function(a,d){return rv(d,!0)},!0)),n}function DG(){Cn(2)}function ov(n){return n==null||typeof n!="object"||Object.isFrozen(n)}function Po(n){var o=D0[n];return o||Cn(18,n),o}function $3(n,o){D0[n]||(D0[n]=o)}function x0(){return Td}function tb(n,o){o&&(Po("Patches"),n.u=[],n.s=[],n.v=o)}function Vf(n){E0(n),n.p.forEach(TG),n.p=null}function E0(n){n===Td&&(Td=n.l)}function dT(n){return Td={p:[],l:Td,h:n,m:!0,_:0}}function TG(n){var o=n[St];o.i===0||o.i===1?o.j():o.g=!0}function nb(n,o){o._=o.p.length;var a=o.p[0],d=n!==void 0&&n!==a;return o.h.O||Po("ES5").S(o,n,d),d?(a[St].P&&(Vf(o),Cn(4)),ho(n)&&(n=Uf(o,n),o.l||Hf(o,n)),o.u&&Po("Patches").M(a[St].t,n,o.u,o.s)):n=Uf(o,a,[]),Vf(o),o.u&&o.v(o.u,o.s),n!==sv?n:void 0}function Uf(n,o,a){if(ov(o))return o;var d=o[St];if(!d)return Ki(o,function(w,g){return uT(n,d,o,w,g,a)},!0),o;if(d.A!==n)return o;if(!d.P)return Hf(n,d.t,!0),d.t;if(!d.I){d.I=!0,d.A._--;var h=d.i===4||d.i===5?d.o=nv(d.k):d.o,p=h,m=!1;d.i===3&&(p=new Set(h),h.clear(),m=!0),Ki(p,function(w,g){return uT(n,d,h,w,g,a,m)}),Hf(n,h,!1),a&&n.u&&Po("Patches").N(d,a,n.u,n.s)}return d.o}function uT(n,o,a,d,h,p,m){if(uo(h)){var w=Uf(n,h,p&&o&&o.i!==3&&!Hi(o.R,d)?p.concat(d):void 0);if(U3(a,d,w),!uo(w))return;n.m=!1}else m&&a.add(h);if(ho(h)&&!ov(h)){if(!n.h.D&&n._<1)return;Uf(n,h),o&&o.A.l||Hf(n,h)}}function Hf(n,o,a){a===void 0&&(a=!1),!n.l&&n.h.D&&n.m&&rv(o,a)}function rb(n,o){var a=n[St];return(a?Ms(a):n)[o]}function hT(n,o){if(o in n)for(var a=Object.getPrototypeOf(n);a;){var d=Object.getOwnPropertyDescriptor(a,o);if(d)return d;a=Object.getPrototypeOf(a)}}function Ii(n){n.P||(n.P=!0,n.l&&Ii(n.l))}function ob(n){n.o||(n.o=nv(n.t))}function S0(n,o,a){var d=Wp(o)?Po("MapSet").F(o,a):qp(o)?Po("MapSet").T(o,a):n.O?function(h,p){var m=Array.isArray(h),w={i:m?1:0,A:p?p.A:x0(),P:!1,I:!1,R:{},l:p,t:h,k:null,o:null,j:null,C:!1},g=w,A=Id;m&&(g=[w],A=Vc);var C=Proxy.revocable(g,A),y=C.revoke,v=C.proxy;return w.k=v,w.j=y,v}(o,a):Po("ES5").J(o,a);return(a?a.A:x0()).p.push(d),d}function IG(n){return uo(n)||Cn(22,n),function o(a){if(!ho(a))return a;var d,h=a[St],p=Qi(a);if(h){if(!h.P&&(h.i<4||!Po("ES5").K(h)))return h.t;h.I=!0,d=fT(a,p),h.I=!1}else d=fT(a,p);return Ki(d,function(m,w){h&&af(h.t,m)===w||U3(d,m,o(w))}),p===3?new Set(d):d}(n)}function fT(n,o){switch(o){case 2:return new Map(n);case 3:return Array.from(n)}return nv(n)}function MG(){function n(p,m){var w=h[p];return w?w.enumerable=m:h[p]=w={configurable:!0,enumerable:m,get:function(){var g=this[St];return Id.get(g,p)},set:function(g){var A=this[St];Id.set(A,p,g)}},w}function o(p){for(var m=p.length-1;m>=0;m--){var w=p[m][St];if(!w.P)switch(w.i){case 5:d(w)&&Ii(w);break;case 4:a(w)&&Ii(w)}}}function a(p){for(var m=p.t,w=p.k,g=il(w),A=g.length-1;A>=0;A--){var C=g[A];if(C!==St){var y=m[C];if(y===void 0&&!Hi(m,C))return!0;var v=w[C],x=v&&v[St];if(x?x.t!==y:!H3(v,y))return!0}}var S=!!m[St];return g.length!==il(m).length+(S?0:1)}function d(p){var m=p.k;if(m.length!==p.t.length)return!0;var w=Object.getOwnPropertyDescriptor(m,m.length-1);if(w&&!w.get)return!0;for(var g=0;g<m.length;g++)if(!m.hasOwnProperty(g))return!0;return!1}var h={};$3("ES5",{J:function(p,m){var w=Array.isArray(p),g=function(C,y){if(C){for(var v=Array(y.length),x=0;x<y.length;x++)Object.defineProperty(v,""+x,n(x,!0));return v}var S=W3(y);delete S[St];for(var I=il(S),N=0;N<I.length;N++){var P=I[N];S[P]=n(P,C||!!S[P].enumerable)}return Object.create(Object.getPrototypeOf(y),S)}(w,p),A={i:w?5:4,A:m?m.A:x0(),P:!1,I:!1,R:{},l:m,t:p,k:g,o:null,g:!1,C:!1};return Object.defineProperty(g,St,{value:A,writable:!0}),g},S:function(p,m,w){w?uo(m)&&m[St].A===p&&o(p.p):(p.u&&function g(A){if(A&&typeof A=="object"){var C=A[St];if(C){var y=C.t,v=C.k,x=C.R,S=C.i;if(S===4)Ki(v,function(O){O!==St&&(y[O]!==void 0||Hi(y,O)?x[O]||g(v[O]):(x[O]=!0,Ii(C)))}),Ki(y,function(O){v[O]!==void 0||Hi(v,O)||(x[O]=!1,Ii(C))});else if(S===5){if(d(C)&&(Ii(C),x.length=!0),v.length<y.length)for(var I=v.length;I<y.length;I++)x[I]=!1;else for(var N=y.length;N<v.length;N++)x[N]=!0;for(var P=Math.min(v.length,y.length),B=0;B<P;B++)v.hasOwnProperty(B)||(x[B]=!0),x[B]===void 0&&g(v[B])}}}}(p.p[0]),o(p.p))},K:function(p){return p.i===4?a(p):d(p)}})}function PG(){function n(d){if(!ho(d))return d;if(Array.isArray(d))return d.map(n);if(Wp(d))return new Map(Array.from(d.entries()).map(function(m){return[m[0],n(m[1])]}));if(qp(d))return new Set(Array.from(d).map(n));var h=Object.create(Object.getPrototypeOf(d));for(var p in d)h[p]=n(d[p]);return Hi(d,nd)&&(h[nd]=d[nd]),h}function o(d){return uo(d)?n(d):d}var a="add";$3("Patches",{$:function(d,h){return h.forEach(function(p){for(var m=p.path,w=p.op,g=d,A=0;A<m.length-1;A++){var C=Qi(g),y=m[A];typeof y!="string"&&typeof y!="number"&&(y=""+y),C!==0&&C!==1||y!=="__proto__"&&y!=="constructor"||Cn(24),typeof g=="function"&&y==="prototype"&&Cn(24),typeof(g=af(g,y))!="object"&&Cn(15,m.join("/"))}var v=Qi(g),x=n(p.value),S=m[m.length-1];switch(w){case"replace":switch(v){case 2:return g.set(S,x);case 3:Cn(16);default:return g[S]=x}case a:switch(v){case 1:return S==="-"?g.push(x):g.splice(S,0,x);case 2:return g.set(S,x);case 3:return g.add(x);default:return g[S]=x}case"remove":switch(v){case 1:return g.splice(S,1);case 2:return g.delete(S);case 3:return g.delete(p.value);default:return delete g[S]}default:Cn(17,w)}}),d},N:function(d,h,p,m){switch(d.i){case 0:case 4:case 2:return function(w,g,A,C){var y=w.t,v=w.o;Ki(w.R,function(x,S){var I=af(y,x),N=af(v,x),P=S?Hi(y,x)?"replace":a:"remove";if(I!==N||P!=="replace"){var B=g.concat(x);A.push(P==="remove"?{op:P,path:B}:{op:P,path:B,value:N}),C.push(P===a?{op:"remove",path:B}:P==="remove"?{op:a,path:B,value:o(I)}:{op:"replace",path:B,value:o(I)})}})}(d,h,p,m);case 5:case 1:return function(w,g,A,C){var y=w.t,v=w.R,x=w.o;if(x.length<y.length){var S=[x,y];y=S[0],x=S[1];var I=[C,A];A=I[0],C=I[1]}for(var N=0;N<y.length;N++)if(v[N]&&x[N]!==y[N]){var P=g.concat([N]);A.push({op:"replace",path:P,value:o(x[N])}),C.push({op:"replace",path:P,value:o(y[N])})}for(var B=y.length;B<x.length;B++){var O=g.concat([B]);A.push({op:a,path:O,value:o(x[B])})}y.length<x.length&&C.push({op:"replace",path:g.concat(["length"]),value:y.length})}(d,h,p,m);case 3:return function(w,g,A,C){var y=w.t,v=w.o,x=0;y.forEach(function(S){if(!v.has(S)){var I=g.concat([x]);A.push({op:"remove",path:I,value:S}),C.unshift({op:a,path:I,value:S})}x++}),x=0,v.forEach(function(S){if(!y.has(S)){var I=g.concat([x]);A.push({op:a,path:I,value:S}),C.unshift({op:"remove",path:I,value:S})}x++})}(d,h,p,m)}},M:function(d,h,p,m){p.push({op:"replace",path:[],value:h===sv?void 0:h}),m.push({op:"replace",path:[],value:d})}})}var pT,Td,iv=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",BG=typeof Map<"u",NG=typeof Set<"u",mT=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",sv=iv?Symbol.for("immer-nothing"):((pT={})["immer-nothing"]=!0,pT),nd=iv?Symbol.for("immer-draftable"):"__$immer_draftable",St=iv?Symbol.for("immer-state"):"__$immer_state",OG=""+Object.prototype.constructor,il=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,W3=Object.getOwnPropertyDescriptors||function(n){var o={};return il(n).forEach(function(a){o[a]=Object.getOwnPropertyDescriptor(n,a)}),o},D0={},Id={get:function(n,o){if(o===St)return n;var a=Ms(n);if(!Hi(a,o))return function(h,p,m){var w,g=hT(p,m);return g?"value"in g?g.value:(w=g.get)===null||w===void 0?void 0:w.call(h.k):void 0}(n,a,o);var d=a[o];return n.I||!ho(d)?d:d===rb(n.t,o)?(ob(n),n.o[o]=S0(n.A.h,d,n)):d},has:function(n,o){return o in Ms(n)},ownKeys:function(n){return Reflect.ownKeys(Ms(n))},set:function(n,o,a){var d=hT(Ms(n),o);if(d!=null&&d.set)return d.set.call(n.k,a),!0;if(!n.P){var h=rb(Ms(n),o),p=h==null?void 0:h[St];if(p&&p.t===a)return n.o[o]=a,n.R[o]=!1,!0;if(H3(a,h)&&(a!==void 0||Hi(n.t,o)))return!0;ob(n),Ii(n)}return n.o[o]===a&&(a!==void 0||o in n.o)||Number.isNaN(a)&&Number.isNaN(n.o[o])||(n.o[o]=a,n.R[o]=!0),!0},deleteProperty:function(n,o){return rb(n.t,o)!==void 0||o in n.t?(n.R[o]=!1,ob(n),Ii(n)):delete n.R[o],n.o&&delete n.o[o],!0},getOwnPropertyDescriptor:function(n,o){var a=Ms(n),d=Reflect.getOwnPropertyDescriptor(a,o);return d&&{writable:!0,configurable:n.i!==1||o!=="length",enumerable:d.enumerable,value:a[o]}},defineProperty:function(){Cn(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){Cn(12)}},Vc={};Ki(Id,function(n,o){Vc[n]=function(){return arguments[0]=arguments[0][0],o.apply(this,arguments)}}),Vc.deleteProperty=function(n,o){return Vc.set.call(this,n,o,void 0)},Vc.set=function(n,o,a){return Id.set.call(this,n[0],o,a,n[0])};var RG=function(){function n(a){var d=this;this.O=mT,this.D=!0,this.produce=function(h,p,m){if(typeof h=="function"&&typeof p!="function"){var w=p;p=h;var g=d;return function(I){var N=this;I===void 0&&(I=w);for(var P=arguments.length,B=Array(P>1?P-1:0),O=1;O<P;O++)B[O-1]=arguments[O];return g.produce(I,function(L){var V;return(V=p).call.apply(V,[N,L].concat(B))})}}var A;if(typeof p!="function"&&Cn(6),m!==void 0&&typeof m!="function"&&Cn(7),ho(h)){var C=dT(d),y=S0(d,h,void 0),v=!0;try{A=p(y),v=!1}finally{v?Vf(C):E0(C)}return typeof Promise<"u"&&A instanceof Promise?A.then(function(I){return tb(C,m),nb(I,C)},function(I){throw Vf(C),I}):(tb(C,m),nb(A,C))}if(!h||typeof h!="object"){if((A=p(h))===void 0&&(A=h),A===sv&&(A=void 0),d.D&&rv(A,!0),m){var x=[],S=[];Po("Patches").M(h,A,x,S),m(x,S)}return A}Cn(21,h)},this.produceWithPatches=function(h,p){if(typeof h=="function")return function(A){for(var C=arguments.length,y=Array(C>1?C-1:0),v=1;v<C;v++)y[v-1]=arguments[v];return d.produceWithPatches(A,function(x){return h.apply(void 0,[x].concat(y))})};var m,w,g=d.produce(h,p,function(A,C){m=A,w=C});return typeof Promise<"u"&&g instanceof Promise?g.then(function(A){return[A,m,w]}):[g,m,w]},typeof(a==null?void 0:a.useProxies)=="boolean"&&this.setUseProxies(a.useProxies),typeof(a==null?void 0:a.autoFreeze)=="boolean"&&this.setAutoFreeze(a.autoFreeze)}var o=n.prototype;return o.createDraft=function(a){ho(a)||Cn(8),uo(a)&&(a=IG(a));var d=dT(this),h=S0(this,a,void 0);return h[St].C=!0,E0(d),h},o.finishDraft=function(a,d){var h=a&&a[St],p=h.A;return tb(p,d),nb(void 0,p)},o.setAutoFreeze=function(a){this.D=a},o.setUseProxies=function(a){a&&!mT&&Cn(20),this.O=a},o.applyPatches=function(a,d){var h;for(h=d.length-1;h>=0;h--){var p=d[h];if(p.path.length===0&&p.op==="replace"){a=p.value;break}}h>-1&&(d=d.slice(h+1));var m=Po("Patches").$;return uo(a)?m(a,d):this.produce(a,function(w){return m(w,d)})},n}(),wr=new RG,LG=wr.produce,q3=wr.produceWithPatches.bind(wr);wr.setAutoFreeze.bind(wr);wr.setUseProxies.bind(wr);var gT=wr.applyPatches.bind(wr);wr.createDraft.bind(wr);wr.finishDraft.bind(wr);const qd=LG;function Md(n){"@babel/helpers - typeof";return Md=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Md(n)}function jG(n,o){if(Md(n)!="object"||!n)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var d=a.call(n,o||"default");if(Md(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}function zG(n){var o=jG(n,"string");return Md(o)=="symbol"?o:o+""}function FG(n,o,a){return o=zG(o),o in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,n}function kT(n,o){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);o&&(d=d.filter(function(h){return Object.getOwnPropertyDescriptor(n,h).enumerable})),a.push.apply(a,d)}return a}function bT(n){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?kT(Object(a),!0).forEach(function(d){FG(n,d,a[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):kT(Object(a)).forEach(function(d){Object.defineProperty(n,d,Object.getOwnPropertyDescriptor(a,d))})}return n}function Nn(n){return"Minified Redux error #"+n+"; visit https://redux.js.org/Errors?code="+n+" for the full message or use the non-minified dev environment for full errors. "}var wT=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),ib=function(){return Math.random().toString(36).substring(7).split("").join(".")},$f={INIT:"@@redux/INIT"+ib(),REPLACE:"@@redux/REPLACE"+ib(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ib()}};function VG(n){if(typeof n!="object"||n===null)return!1;for(var o=n;Object.getPrototypeOf(o)!==null;)o=Object.getPrototypeOf(o);return Object.getPrototypeOf(n)===o}function G3(n,o,a){var d;if(typeof o=="function"&&typeof a=="function"||typeof a=="function"&&typeof arguments[3]=="function")throw new Error(Nn(0));if(typeof o=="function"&&typeof a>"u"&&(a=o,o=void 0),typeof a<"u"){if(typeof a!="function")throw new Error(Nn(1));return a(G3)(n,o)}if(typeof n!="function")throw new Error(Nn(2));var h=n,p=o,m=[],w=m,g=!1;function A(){w===m&&(w=m.slice())}function C(){if(g)throw new Error(Nn(3));return p}function y(I){if(typeof I!="function")throw new Error(Nn(4));if(g)throw new Error(Nn(5));var N=!0;return A(),w.push(I),function(){if(N){if(g)throw new Error(Nn(6));N=!1,A();var B=w.indexOf(I);w.splice(B,1),m=null}}}function v(I){if(!VG(I))throw new Error(Nn(7));if(typeof I.type>"u")throw new Error(Nn(8));if(g)throw new Error(Nn(9));try{g=!0,p=h(p,I)}finally{g=!1}for(var N=m=w,P=0;P<N.length;P++){var B=N[P];B()}return I}function x(I){if(typeof I!="function")throw new Error(Nn(10));h=I,v({type:$f.REPLACE})}function S(){var I,N=y;return I={subscribe:function(B){if(typeof B!="object"||B===null)throw new Error(Nn(11));function O(){B.next&&B.next(C())}O();var L=N(O);return{unsubscribe:L}}},I[wT]=function(){return this},I}return v({type:$f.INIT}),d={dispatch:v,subscribe:y,getState:C,replaceReducer:x},d[wT]=S,d}function UG(n){Object.keys(n).forEach(function(o){var a=n[o],d=a(void 0,{type:$f.INIT});if(typeof d>"u")throw new Error(Nn(12));if(typeof a(void 0,{type:$f.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Nn(13))})}function K3(n){for(var o=Object.keys(n),a={},d=0;d<o.length;d++){var h=o[d];typeof n[h]=="function"&&(a[h]=n[h])}var p=Object.keys(a),m;try{UG(a)}catch(w){m=w}return function(g,A){if(g===void 0&&(g={}),m)throw m;for(var C=!1,y={},v=0;v<p.length;v++){var x=p[v],S=a[x],I=g[x],N=S(I,A);if(typeof N>"u")throw A&&A.type,new Error(Nn(14));y[x]=N,C=C||N!==I}return C=C||p.length!==Object.keys(g).length,C?y:g}}function Wf(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return o.length===0?function(d){return d}:o.length===1?o[0]:o.reduce(function(d,h){return function(){return d(h.apply(void 0,arguments))}})}function HG(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return function(d){return function(){var h=d.apply(void 0,arguments),p=function(){throw new Error(Nn(15))},m={getState:h.getState,dispatch:function(){return p.apply(void 0,arguments)}},w=o.map(function(g){return g(m)});return p=Wf.apply(void 0,w)(h.dispatch),bT(bT({},h),{},{dispatch:p})}}}var qf="NOT_FOUND";function $G(n){var o;return{get:function(d){return o&&n(o.key,d)?o.value:qf},put:function(d,h){o={key:d,value:h}},getEntries:function(){return o?[o]:[]},clear:function(){o=void 0}}}function WG(n,o){var a=[];function d(w){var g=a.findIndex(function(C){return o(w,C.key)});if(g>-1){var A=a[g];return g>0&&(a.splice(g,1),a.unshift(A)),A.value}return qf}function h(w,g){d(w)===qf&&(a.unshift({key:w,value:g}),a.length>n&&a.pop())}function p(){return a}function m(){a=[]}return{get:d,put:h,getEntries:p,clear:m}}var qG=function(o,a){return o===a};function GG(n){return function(a,d){if(a===null||d===null||a.length!==d.length)return!1;for(var h=a.length,p=0;p<h;p++)if(!n(a[p],d[p]))return!1;return!0}}function T0(n,o){var a=typeof o=="object"?o:{equalityCheck:o},d=a.equalityCheck,h=d===void 0?qG:d,p=a.maxSize,m=p===void 0?1:p,w=a.resultEqualityCheck,g=GG(h),A=m===1?$G(g):WG(m,g);function C(){var y=A.get(arguments);if(y===qf){if(y=n.apply(null,arguments),w){var v=A.getEntries(),x=v.find(function(S){return w(S.value,y)});x&&(y=x.value)}A.put(arguments,y)}return y}return C.clearCache=function(){return A.clear()},C}function KG(n){var o=Array.isArray(n[0])?n[0]:n;if(!o.every(function(d){return typeof d=="function"})){var a=o.map(function(d){return typeof d=="function"?"function "+(d.name||"unnamed")+"()":typeof d}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+a+"]")}return o}function QG(n){for(var o=arguments.length,a=new Array(o>1?o-1:0),d=1;d<o;d++)a[d-1]=arguments[d];var h=function(){for(var m=arguments.length,w=new Array(m),g=0;g<m;g++)w[g]=arguments[g];var A=0,C,y={memoizeOptions:void 0},v=w.pop();if(typeof v=="object"&&(y=v,v=w.pop()),typeof v!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof v+"]");var x=y,S=x.memoizeOptions,I=S===void 0?a:S,N=Array.isArray(I)?I:[I],P=KG(w),B=n.apply(void 0,[function(){return A++,v.apply(null,arguments)}].concat(N)),O=n(function(){for(var V=[],F=P.length,D=0;D<F;D++)V.push(P[D].apply(null,arguments));return C=B.apply(null,V),C});return Object.assign(O,{resultFunc:v,memoizedResultFunc:B,dependencies:P,lastResult:function(){return C},recomputations:function(){return A},resetRecomputations:function(){return A=0}}),O};return h}var rd=QG(T0);function Q3(n){var o=function(d){var h=d.dispatch,p=d.getState;return function(m){return function(w){return typeof w=="function"?w(h,p,n):m(w)}}};return o}var I0=Q3();I0.withExtraArgument=Q3;var Y3=function(){var n=function(o,a){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,h){d.__proto__=h}||function(d,h){for(var p in h)Object.prototype.hasOwnProperty.call(h,p)&&(d[p]=h[p])},n(o,a)};return function(o,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");n(o,a);function d(){this.constructor=o}o.prototype=a===null?Object.create(a):(d.prototype=a.prototype,new d)}}(),YG=function(n,o){var a={label:0,sent:function(){if(p[0]&1)throw p[1];return p[1]},trys:[],ops:[]},d,h,p,m;return m={next:w(0),throw:w(1),return:w(2)},typeof Symbol=="function"&&(m[Symbol.iterator]=function(){return this}),m;function w(A){return function(C){return g([A,C])}}function g(A){if(d)throw new TypeError("Generator is already executing.");for(;a;)try{if(d=1,h&&(p=A[0]&2?h.return:A[0]?h.throw||((p=h.return)&&p.call(h),0):h.next)&&!(p=p.call(h,A[1])).done)return p;switch(h=0,p&&(A=[A[0]&2,p.value]),A[0]){case 0:case 1:p=A;break;case 4:return a.label++,{value:A[1],done:!1};case 5:a.label++,h=A[1],A=[0];continue;case 7:A=a.ops.pop(),a.trys.pop();continue;default:if(p=a.trys,!(p=p.length>0&&p[p.length-1])&&(A[0]===6||A[0]===2)){a=0;continue}if(A[0]===3&&(!p||A[1]>p[0]&&A[1]<p[3])){a.label=A[1];break}if(A[0]===6&&a.label<p[1]){a.label=p[1],p=A;break}if(p&&a.label<p[2]){a.label=p[2],a.ops.push(A);break}p[2]&&a.ops.pop(),a.trys.pop();continue}A=o.call(n,a)}catch(C){A=[6,C],h=0}finally{d=p=0}if(A[0]&5)throw A[1];return{value:A[0]?A[1]:void 0,done:!0}}},ml=function(n,o){for(var a=0,d=o.length,h=n.length;a<d;a++,h++)n[h]=o[a];return n},ZG=Object.defineProperty,JG=Object.defineProperties,XG=Object.getOwnPropertyDescriptors,vT=Object.getOwnPropertySymbols,eK=Object.prototype.hasOwnProperty,tK=Object.prototype.propertyIsEnumerable,AT=function(n,o,a){return o in n?ZG(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a},$i=function(n,o){for(var a in o||(o={}))eK.call(o,a)&&AT(n,a,o[a]);if(vT)for(var d=0,h=vT(o);d<h.length;d++){var a=h[d];tK.call(o,a)&&AT(n,a,o[a])}return n},sb=function(n,o){return JG(n,XG(o))},nK=function(n,o,a){return new Promise(function(d,h){var p=function(g){try{w(a.next(g))}catch(A){h(A)}},m=function(g){try{w(a.throw(g))}catch(A){h(A)}},w=function(g){return g.done?d(g.value):Promise.resolve(g.value).then(p,m)};w((a=a.apply(n,o)).next())})},rK=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Wf:Wf.apply(null,arguments)};function Yi(n){if(typeof n!="object"||n===null)return!1;var o=Object.getPrototypeOf(n);if(o===null)return!0;for(var a=o;Object.getPrototypeOf(a)!==null;)a=Object.getPrototypeOf(a);return o===a}var oK=function(n){return n&&typeof n.match=="function"};function or(n,o){function a(){for(var d=[],h=0;h<arguments.length;h++)d[h]=arguments[h];if(o){var p=o.apply(void 0,d);if(!p)throw new Error("prepareAction did not return an object");return $i($i({type:n,payload:p.payload},"meta"in p&&{meta:p.meta}),"error"in p&&{error:p.error})}return{type:n,payload:d[0]}}return a.toString=function(){return""+n},a.type=n,a.match=function(d){return d.type===n},a}var iK=function(n){Y3(o,n);function o(){for(var a=[],d=0;d<arguments.length;d++)a[d]=arguments[d];var h=n.apply(this,a)||this;return Object.setPrototypeOf(h,o.prototype),h}return Object.defineProperty(o,Symbol.species,{get:function(){return o},enumerable:!1,configurable:!0}),o.prototype.concat=function(){for(var a=[],d=0;d<arguments.length;d++)a[d]=arguments[d];return n.prototype.concat.apply(this,a)},o.prototype.prepend=function(){for(var a=[],d=0;d<arguments.length;d++)a[d]=arguments[d];return a.length===1&&Array.isArray(a[0])?new(o.bind.apply(o,ml([void 0],a[0].concat(this)))):new(o.bind.apply(o,ml([void 0],a.concat(this))))},o}(Array),sK=function(n){Y3(o,n);function o(){for(var a=[],d=0;d<arguments.length;d++)a[d]=arguments[d];var h=n.apply(this,a)||this;return Object.setPrototypeOf(h,o.prototype),h}return Object.defineProperty(o,Symbol.species,{get:function(){return o},enumerable:!1,configurable:!0}),o.prototype.concat=function(){for(var a=[],d=0;d<arguments.length;d++)a[d]=arguments[d];return n.prototype.concat.apply(this,a)},o.prototype.prepend=function(){for(var a=[],d=0;d<arguments.length;d++)a[d]=arguments[d];return a.length===1&&Array.isArray(a[0])?new(o.bind.apply(o,ml([void 0],a[0].concat(this)))):new(o.bind.apply(o,ml([void 0],a.concat(this))))},o}(Array);function M0(n){return ho(n)?qd(n,function(){}):n}function aK(n){return typeof n=="boolean"}function lK(){return function(o){return cK(o)}}function cK(n){n===void 0&&(n={});var o=n.thunk,a=o===void 0?!0:o;n.immutableCheck,n.serializableCheck,n.actionCreatorCheck;var d=new iK;return a&&(aK(a)?d.push(I0):d.push(I0.withExtraArgument(a.extraArgument))),d}var dK=!0;function uK(n){var o=lK(),a=n||{},d=a.reducer,h=d===void 0?void 0:d,p=a.middleware,m=p===void 0?o():p,w=a.devTools,g=w===void 0?!0:w,A=a.preloadedState,C=A===void 0?void 0:A,y=a.enhancers,v=y===void 0?void 0:y,x;if(typeof h=="function")x=h;else if(Yi(h))x=K3(h);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var S=m;typeof S=="function"&&(S=S(o));var I=HG.apply(void 0,S),N=Wf;g&&(N=rK($i({trace:!dK},typeof g=="object"&&g)));var P=new sK(I),B=P;Array.isArray(v)?B=ml([I],v):typeof v=="function"&&(B=v(P));var O=N.apply(void 0,B);return G3(x,C,O)}function Z3(n){var o={},a=[],d,h={addCase:function(p,m){var w=typeof p=="string"?p:p.type;if(!w)throw new Error("`builder.addCase` cannot be called with an empty action type");if(w in o)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return o[w]=m,h},addMatcher:function(p,m){return a.push({matcher:p,reducer:m}),h},addDefaultCase:function(p){return d=p,h}};return n(h),[o,a,d]}function hK(n){return typeof n=="function"}function fK(n,o,a,d){a===void 0&&(a=[]);var h=typeof o=="function"?Z3(o):[o,a,d],p=h[0],m=h[1],w=h[2],g;if(hK(n))g=function(){return M0(n())};else{var A=M0(n);g=function(){return A}}function C(y,v){y===void 0&&(y=g());var x=ml([p[v.type]],m.filter(function(S){var I=S.matcher;return I(v)}).map(function(S){var I=S.reducer;return I}));return x.filter(function(S){return!!S}).length===0&&(x=[w]),x.reduce(function(S,I){if(I)if(uo(S)){var N=S,P=I(N,v);return P===void 0?S:P}else{if(ho(S))return qd(S,function(B){return I(B,v)});var P=I(S,v);if(P===void 0){if(S===null)return S;throw Error("A case reducer on a non-draftable value must not return undefined")}return P}return S},y)}return C.getInitialState=g,C}function pK(n,o){return n+"/"+o}function Si(n){var o=n.name;if(!o)throw new Error("`name` is a required option for createSlice");typeof process<"u";var a=typeof n.initialState=="function"?n.initialState:M0(n.initialState),d=n.reducers||{},h=Object.keys(d),p={},m={},w={};h.forEach(function(C){var y=d[C],v=pK(o,C),x,S;"reducer"in y?(x=y.reducer,S=y.prepare):x=y,p[C]=x,m[v]=x,w[C]=S?or(v,S):or(v)});function g(){var C=typeof n.extraReducers=="function"?Z3(n.extraReducers):[n.extraReducers],y=C[0],v=y===void 0?{}:y,x=C[1],S=x===void 0?[]:x,I=C[2],N=I===void 0?void 0:I,P=$i($i({},v),m);return fK(a,function(B){for(var O in P)B.addCase(O,P[O]);for(var L=0,V=S;L<V.length;L++){var F=V[L];B.addMatcher(F.matcher,F.reducer)}N&&B.addDefaultCase(N)})}var A;return{name:o,reducer:function(C,y){return A||(A=g()),A(C,y)},actions:w,caseReducers:p,getInitialState:function(){return A||(A=g()),A.getInitialState()}}}var mK="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",J3=function(n){n===void 0&&(n=21);for(var o="",a=n;a--;)o+=mK[Math.random()*64|0];return o},gK=["name","message","stack","code"],ab=function(){function n(o,a){this.payload=o,this.meta=a}return n}(),_T=function(){function n(o,a){this.payload=o,this.meta=a}return n}(),kK=function(n){if(typeof n=="object"&&n!==null){for(var o={},a=0,d=gK;a<d.length;a++){var h=d[a];typeof n[h]=="string"&&(o[h]=n[h])}return o}return{message:String(n)}},CT=function(){function n(o,a,d){var h=or(o+"/fulfilled",function(A,C,y,v){return{payload:A,meta:sb($i({},v||{}),{arg:y,requestId:C,requestStatus:"fulfilled"})}}),p=or(o+"/pending",function(A,C,y){return{payload:void 0,meta:sb($i({},y||{}),{arg:C,requestId:A,requestStatus:"pending"})}}),m=or(o+"/rejected",function(A,C,y,v,x){return{payload:v,error:(d&&d.serializeError||kK)(A||"Rejected"),meta:sb($i({},x||{}),{arg:y,requestId:C,rejectedWithValue:!!v,requestStatus:"rejected",aborted:(A==null?void 0:A.name)==="AbortError",condition:(A==null?void 0:A.name)==="ConditionError"})}}),w=typeof AbortController<"u"?AbortController:function(){function A(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return A.prototype.abort=function(){},A}();function g(A){return function(C,y,v){var x=d!=null&&d.idGenerator?d.idGenerator(A):J3(),S=new w,I;function N(B){I=B,S.abort()}var P=function(){return nK(this,null,function(){var B,O,L,V,F,D,z;return YG(this,function(W){switch(W.label){case 0:return W.trys.push([0,4,,5]),V=(B=d==null?void 0:d.condition)==null?void 0:B.call(d,A,{getState:y,extra:v}),wK(V)?[4,V]:[3,2];case 1:V=W.sent(),W.label=2;case 2:if(V===!1||S.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return F=new Promise(function($,Y){return S.signal.addEventListener("abort",function(){return Y({name:"AbortError",message:I||"Aborted"})})}),C(p(x,A,(O=d==null?void 0:d.getPendingMeta)==null?void 0:O.call(d,{requestId:x,arg:A},{getState:y,extra:v}))),[4,Promise.race([F,Promise.resolve(a(A,{dispatch:C,getState:y,extra:v,requestId:x,signal:S.signal,abort:N,rejectWithValue:function($,Y){return new ab($,Y)},fulfillWithValue:function($,Y){return new _T($,Y)}})).then(function($){if($ instanceof ab)throw $;return $ instanceof _T?h($.payload,x,A,$.meta):h($,x,A)})])];case 3:return L=W.sent(),[3,5];case 4:return D=W.sent(),L=D instanceof ab?m(null,x,A,D.payload,D.meta):m(D,x,A),[3,5];case 5:return z=d&&!d.dispatchConditionRejection&&m.match(L)&&L.meta.condition,z||C(L),[2,L]}})})}();return Object.assign(P,{abort:N,requestId:x,arg:A,unwrap:function(){return P.then(bK)}})}}return Object.assign(g,{pending:p,rejected:m,fulfilled:h,typePrefix:o})}return n.withTypes=function(){return n},n}();function bK(n){if(n.meta&&n.meta.rejectedWithValue)throw n.payload;if(n.error)throw n.error;return n.payload}function wK(n){return n!==null&&typeof n=="object"&&typeof n.then=="function"}var X3=function(n,o){return oK(n)?n.match(o):n(o)};function xl(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return function(a){return n.some(function(d){return X3(d,a)})}}function od(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return function(a){return n.every(function(d){return X3(d,a)})}}function Gp(n,o){if(!n||!n.meta)return!1;var a=typeof n.meta.requestId=="string",d=o.indexOf(n.meta.requestStatus)>-1;return a&&d}function Gd(n){return typeof n[0]=="function"&&"pending"in n[0]&&"fulfilled"in n[0]&&"rejected"in n[0]}function av(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return n.length===0?function(a){return Gp(a,["pending"])}:Gd(n)?function(a){var d=n.map(function(p){return p.pending}),h=xl.apply(void 0,d);return h(a)}:av()(n[0])}function Pd(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return n.length===0?function(a){return Gp(a,["rejected"])}:Gd(n)?function(a){var d=n.map(function(p){return p.rejected}),h=xl.apply(void 0,d);return h(a)}:Pd()(n[0])}function Kp(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var a=function(d){return d&&d.meta&&d.meta.rejectedWithValue};return n.length===0?function(d){var h=od(Pd.apply(void 0,n),a);return h(d)}:Gd(n)?function(d){var h=od(Pd.apply(void 0,n),a);return h(d)}:Kp()(n[0])}function Xs(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return n.length===0?function(a){return Gp(a,["fulfilled"])}:Gd(n)?function(a){var d=n.map(function(p){return p.fulfilled}),h=xl.apply(void 0,d);return h(a)}:Xs()(n[0])}function P0(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return n.length===0?function(a){return Gp(a,["pending","fulfilled","rejected"])}:Gd(n)?function(a){for(var d=[],h=0,p=n;h<p.length;h++){var m=p[h];d.push(m.pending,m.rejected,m.fulfilled)}var w=xl.apply(void 0,d);return w(a)}:P0()(n[0])}var lv="listenerMiddleware";or(lv+"/add");or(lv+"/removeAll");or(lv+"/remove");var Uc="RTK_autoBatch",Ic=function(){return function(n){var o;return{payload:n,meta:(o={},o[Uc]=!0,o)}}},yT;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);MG();var Gf=function(n,o){var a={label:0,sent:function(){if(p[0]&1)throw p[1];return p[1]},trys:[],ops:[]},d,h,p,m;return m={next:w(0),throw:w(1),return:w(2)},typeof Symbol=="function"&&(m[Symbol.iterator]=function(){return this}),m;function w(A){return function(C){return g([A,C])}}function g(A){if(d)throw new TypeError("Generator is already executing.");for(;a;)try{if(d=1,h&&(p=A[0]&2?h.return:A[0]?h.throw||((p=h.return)&&p.call(h),0):h.next)&&!(p=p.call(h,A[1])).done)return p;switch(h=0,p&&(A=[A[0]&2,p.value]),A[0]){case 0:case 1:p=A;break;case 4:return a.label++,{value:A[1],done:!1};case 5:a.label++,h=A[1],A=[0];continue;case 7:A=a.ops.pop(),a.trys.pop();continue;default:if(p=a.trys,!(p=p.length>0&&p[p.length-1])&&(A[0]===6||A[0]===2)){a=0;continue}if(A[0]===3&&(!p||A[1]>p[0]&&A[1]<p[3])){a.label=A[1];break}if(A[0]===6&&a.label<p[1]){a.label=p[1],p=A;break}if(p&&a.label<p[2]){a.label=p[2],a.ops.push(A);break}p[2]&&a.ops.pop(),a.trys.pop();continue}A=o.call(n,a)}catch(C){A=[6,C],h=0}finally{d=p=0}if(A[0]&5)throw A[1];return{value:A[0]?A[1]:void 0,done:!0}}},Kf=function(n,o){for(var a=0,d=o.length,h=n.length;a<d;a++,h++)n[h]=o[a];return n},vK=Object.defineProperty,AK=Object.defineProperties,_K=Object.getOwnPropertyDescriptors,Qf=Object.getOwnPropertySymbols,eP=Object.prototype.hasOwnProperty,tP=Object.prototype.propertyIsEnumerable,xT=function(n,o,a){return o in n?vK(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a},Ut=function(n,o){for(var a in o||(o={}))eP.call(o,a)&&xT(n,a,o[a]);if(Qf)for(var d=0,h=Qf(o);d<h.length;d++){var a=h[d];tP.call(o,a)&&xT(n,a,o[a])}return n},To=function(n,o){return AK(n,_K(o))},ET=function(n,o){var a={};for(var d in n)eP.call(n,d)&&o.indexOf(d)<0&&(a[d]=n[d]);if(n!=null&&Qf)for(var h=0,p=Qf(n);h<p.length;h++){var d=p[h];o.indexOf(d)<0&&tP.call(n,d)&&(a[d]=n[d])}return a},Yf=function(n,o,a){return new Promise(function(d,h){var p=function(g){try{w(a.next(g))}catch(A){h(A)}},m=function(g){try{w(a.throw(g))}catch(A){h(A)}},w=function(g){return g.done?d(g.value):Promise.resolve(g.value).then(p,m)};w((a=a.apply(n,o)).next())})},It;(function(n){n.uninitialized="uninitialized",n.pending="pending",n.fulfilled="fulfilled",n.rejected="rejected"})(It||(It={}));function CK(n){return{status:n,isUninitialized:n===It.uninitialized,isLoading:n===It.pending,isSuccess:n===It.fulfilled,isError:n===It.rejected}}function yK(n){return new RegExp("(^|:)//").test(n)}var xK=function(n){return n.replace(/\/$/,"")},EK=function(n){return n.replace(/^\//,"")};function SK(n,o){if(!n)return o;if(!o)return n;if(yK(o))return o;var a=n.endsWith("/")||!o.startsWith("?")?"/":"";return n=xK(n),o=EK(o),""+n+a+o}var ST=function(n){return[].concat.apply([],n)};function DK(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}function TK(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}var DT=Yi;function nP(n,o){if(n===o||!(DT(n)&&DT(o)||Array.isArray(n)&&Array.isArray(o)))return o;for(var a=Object.keys(o),d=Object.keys(n),h=a.length===d.length,p=Array.isArray(o)?[]:{},m=0,w=a;m<w.length;m++){var g=w[m];p[g]=nP(n[g],o[g]),h&&(h=n[g]===p[g])}return h?n:p}var TT=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return fetch.apply(void 0,n)},IK=function(n){return n.status>=200&&n.status<=299},MK=function(n){return/ion\/(vnd\.api\+)?json/.test(n.get("content-type")||"")};function IT(n){if(!Yi(n))return n;for(var o=Ut({},n),a=0,d=Object.entries(o);a<d.length;a++){var h=d[a],p=h[0],m=h[1];m===void 0&&delete o[p]}return o}function PK(n){var o=this;n===void 0&&(n={});var a=n,d=a.baseUrl,h=a.prepareHeaders,p=h===void 0?function(O){return O}:h,m=a.fetchFn,w=m===void 0?TT:m,g=a.paramsSerializer,A=a.isJsonContentType,C=A===void 0?MK:A,y=a.jsonContentType,v=y===void 0?"application/json":y,x=a.jsonReplacer,S=a.timeout,I=a.responseHandler,N=a.validateStatus,P=ET(a,["baseUrl","prepareHeaders","fetchFn","paramsSerializer","isJsonContentType","jsonContentType","jsonReplacer","timeout","responseHandler","validateStatus"]);return typeof fetch>"u"&&w===TT&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),function(O,L){return Yf(o,null,function(){var V,F,D,z,W,$,Y,re,te,Z,Q,ee,se,G,le,de,fe,be,Ee,Ne,Se,ve,We,Ht,Dn,jt,gn,Xe,Te,$n,di,Ln,_e,at,Oe,Fe;return Gf(this,function(De){switch(De.label){case 0:return V=L.signal,F=L.getState,D=L.extra,z=L.endpoint,W=L.forced,$=L.type,re=typeof O=="string"?{url:O}:O,te=re.url,Z=re.headers,Q=Z===void 0?new Headers(P.headers):Z,ee=re.params,se=ee===void 0?void 0:ee,G=re.responseHandler,le=G===void 0?I??"json":G,de=re.validateStatus,fe=de===void 0?N??IK:de,be=re.timeout,Ee=be===void 0?S:be,Ne=ET(re,["url","headers","params","responseHandler","validateStatus","timeout"]),Se=Ut(To(Ut({},P),{signal:V}),Ne),Q=new Headers(IT(Q)),ve=Se,[4,p(Q,{getState:F,extra:D,endpoint:z,forced:W,type:$})];case 1:ve.headers=De.sent()||Q,We=function(ye){return typeof ye=="object"&&(Yi(ye)||Array.isArray(ye)||typeof ye.toJSON=="function")},!Se.headers.has("content-type")&&We(Se.body)&&Se.headers.set("content-type",v),We(Se.body)&&C(Se.headers)&&(Se.body=JSON.stringify(Se.body,x)),se&&(Ht=~te.indexOf("?")?"&":"?",Dn=g?g(se):new URLSearchParams(IT(se)),te+=Ht+Dn),te=SK(d,te),jt=new Request(te,Se),gn=new Request(te,Se),Y={request:gn},Te=!1,$n=Ee&&setTimeout(function(){Te=!0,L.abort()},Ee),De.label=2;case 2:return De.trys.push([2,4,5,6]),[4,w(jt)];case 3:return Xe=De.sent(),[3,6];case 4:return di=De.sent(),[2,{error:{status:Te?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(di)},meta:Y}];case 5:return $n&&clearTimeout($n),[7];case 6:Ln=Xe.clone(),Y.response=Ln,at="",De.label=7;case 7:return De.trys.push([7,9,,10]),[4,Promise.all([B(Xe,le).then(function(ye){return _e=ye},function(ye){return Oe=ye}),Ln.text().then(function(ye){return at=ye},function(){})])];case 8:if(De.sent(),Oe)throw Oe;return[3,10];case 9:return Fe=De.sent(),[2,{error:{status:"PARSING_ERROR",originalStatus:Xe.status,data:at,error:String(Fe)},meta:Y}];case 10:return[2,fe(Xe,_e)?{data:_e,meta:Y}:{error:{status:Xe.status,data:_e},meta:Y}]}})})};function B(O,L){return Yf(this,null,function(){var V;return Gf(this,function(F){switch(F.label){case 0:return typeof L=="function"?[2,L(O)]:(L==="content-type"&&(L=C(O.headers)?"json":"text"),L!=="json"?[3,2]:[4,O.text()]);case 1:return V=F.sent(),[2,V.length?JSON.parse(V):null];case 2:return[2,O.text()]}})})}}var MT=function(){function n(o,a){a===void 0&&(a=void 0),this.value=o,this.meta=a}return n}(),cv=or("__rtkq/focused"),rP=or("__rtkq/unfocused"),dv=or("__rtkq/online"),oP=or("__rtkq/offline"),Bo;(function(n){n.query="query",n.mutation="mutation"})(Bo||(Bo={}));function iP(n){return n.type===Bo.query}function BK(n){return n.type===Bo.mutation}function uv(n,o,a,d,h,p){return NK(n)?n(o,a,d,h).map(B0).map(p):Array.isArray(n)?n.map(B0).map(p):[]}function NK(n){return typeof n=="function"}function B0(n){return typeof n=="string"?{type:n}:n}function lb(n){return n!=null}var Bd=Symbol("forceQueryFn"),N0=function(n){return typeof n[Bd]=="function"};function OK(n){var o=n.serializeQueryArgs,a=n.queryThunk,d=n.mutationThunk,h=n.api,p=n.context,m=new Map,w=new Map,g=h.internalActions,A=g.unsubscribeQueryResult,C=g.removeMutationResult,y=g.updateSubscriptionOptions;return{buildInitiateQuery:B,buildInitiateMutation:O,getRunningQueryThunk:S,getRunningMutationThunk:I,getRunningQueriesThunk:N,getRunningMutationsThunk:P,getRunningOperationPromises:x,removalWarning:v};function v(){throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`)}function x(){typeof process<"u";var L=function(V){return Array.from(V.values()).flatMap(function(F){return F?Object.values(F):[]})};return Kf(Kf([],L(m)),L(w)).filter(lb)}function S(L,V){return function(F){var D,z=p.endpointDefinitions[L],W=o({queryArgs:V,endpointDefinition:z,endpointName:L});return(D=m.get(F))==null?void 0:D[W]}}function I(L,V){return function(F){var D;return(D=w.get(F))==null?void 0:D[V]}}function N(){return function(L){return Object.values(m.get(L)||{}).filter(lb)}}function P(){return function(L){return Object.values(w.get(L)||{}).filter(lb)}}function B(L,V){var F=function(D,z){var W=z===void 0?{}:z,$=W.subscribe,Y=$===void 0?!0:$,re=W.forceRefetch,te=W.subscriptionOptions,Z=Bd,Q=W[Z];return function(ee,se){var G,le,de=o({queryArgs:D,endpointDefinition:V,endpointName:L}),fe=a((G={type:"query",subscribe:Y,forceRefetch:re,subscriptionOptions:te,endpointName:L,originalArgs:D,queryCacheKey:de},G[Bd]=Q,G)),be=h.endpoints[L].select(D),Ee=ee(fe),Ne=be(se()),Se=Ee.requestId,ve=Ee.abort,We=Ne.requestId!==Se,Ht=(le=m.get(ee))==null?void 0:le[de],Dn=function(){return be(se())},jt=Object.assign(Q?Ee.then(Dn):We&&!Ht?Promise.resolve(Ne):Promise.all([Ht,Ee]).then(Dn),{arg:D,requestId:Se,subscriptionOptions:te,queryCacheKey:de,abort:ve,unwrap:function(){return Yf(this,null,function(){var Xe;return Gf(this,function(Te){switch(Te.label){case 0:return[4,jt];case 1:if(Xe=Te.sent(),Xe.isError)throw Xe.error;return[2,Xe.data]}})})},refetch:function(){return ee(F(D,{subscribe:!1,forceRefetch:!0}))},unsubscribe:function(){Y&&ee(A({queryCacheKey:de,requestId:Se}))},updateSubscriptionOptions:function(Xe){jt.subscriptionOptions=Xe,ee(y({endpointName:L,requestId:Se,queryCacheKey:de,options:Xe}))}});if(!Ht&&!We&&!Q){var gn=m.get(ee)||{};gn[de]=jt,m.set(ee,gn),jt.then(function(){delete gn[de],Object.keys(gn).length||m.delete(ee)})}return jt}};return F}function O(L){return function(V,F){var D=F===void 0?{}:F,z=D.track,W=z===void 0?!0:z,$=D.fixedCacheKey;return function(Y,re){var te=d({type:"mutation",endpointName:L,originalArgs:V,track:W,fixedCacheKey:$}),Z=Y(te),Q=Z.requestId,ee=Z.abort,se=Z.unwrap,G=Z.unwrap().then(function(be){return{data:be}}).catch(function(be){return{error:be}}),le=function(){Y(C({requestId:Q,fixedCacheKey:$}))},de=Object.assign(G,{arg:Z.arg,requestId:Q,abort:ee,unwrap:se,unsubscribe:le,reset:le}),fe=w.get(Y)||{};return w.set(Y,fe),fe[Q]=de,de.then(function(){delete fe[Q],Object.keys(fe).length||w.delete(Y)}),$&&(fe[$]=de,de.then(function(){fe[$]===de&&(delete fe[$],Object.keys(fe).length||w.delete(Y))})),de}}}}function PT(n){return n}function RK(n){var o=this,a=n.reducerPath,d=n.baseQuery,h=n.context.endpointDefinitions,p=n.serializeQueryArgs,m=n.api,w=n.assertTagType,g=function(L,V,F,D){return function(z,W){var $=h[L],Y=p({queryArgs:V,endpointDefinition:$,endpointName:L});if(z(m.internalActions.queryResultPatched({queryCacheKey:Y,patches:F})),!!D){var re=m.endpoints[L].select(V)(W()),te=uv($.providesTags,re.data,void 0,V,{},w);z(m.internalActions.updateProvidedBy({queryCacheKey:Y,providedTags:te}))}}},A=function(L,V,F,D){return D===void 0&&(D=!0),function(z,W){var $,Y,re=m.endpoints[L],te=re.select(V)(W()),Z={patches:[],inversePatches:[],undo:function(){return z(m.util.patchQueryData(L,V,Z.inversePatches,D))}};if(te.status===It.uninitialized)return Z;var Q;if("data"in te)if(ho(te.data)){var ee=q3(te.data,F),se=ee[0],G=ee[1],le=ee[2];($=Z.patches).push.apply($,G),(Y=Z.inversePatches).push.apply(Y,le),Q=se}else Q=F(te.data),Z.patches.push({op:"replace",path:[],value:Q}),Z.inversePatches.push({op:"replace",path:[],value:te.data});return z(m.util.patchQueryData(L,V,Z.patches,D)),Z}},C=function(L,V,F){return function(D){var z;return D(m.endpoints[L].initiate(V,(z={subscribe:!1,forceRefetch:!0},z[Bd]=function(){return{data:F}},z)))}},y=function(L,V){return Yf(o,[L,V],function(F,D){var z,W,$,Y,re,te,Z,Q,ee,se,G,le,de,fe,be,Ee,Ne,Se,ve=D.signal,We=D.abort,Ht=D.rejectWithValue,Dn=D.fulfillWithValue,jt=D.dispatch,gn=D.getState,Xe=D.extra;return Gf(this,function(Te){switch(Te.label){case 0:z=h[F.endpointName],Te.label=1;case 1:return Te.trys.push([1,8,,13]),W=PT,$=void 0,Y={signal:ve,abort:We,dispatch:jt,getState:gn,extra:Xe,endpoint:F.endpointName,type:F.type,forced:F.type==="query"?v(F,gn()):void 0},re=F.type==="query"?F[Bd]:void 0,re?($=re(),[3,6]):[3,2];case 2:return z.query?[4,d(z.query(F.originalArgs),Y,z.extraOptions)]:[3,4];case 3:return $=Te.sent(),z.transformResponse&&(W=z.transformResponse),[3,6];case 4:return[4,z.queryFn(F.originalArgs,Y,z.extraOptions,function($n){return d($n,Y,z.extraOptions)})];case 5:$=Te.sent(),Te.label=6;case 6:if(typeof process<"u",$.error)throw new MT($.error,$.meta);return G=Dn,[4,W($.data,$.meta,F.originalArgs)];case 7:return[2,G.apply(void 0,[Te.sent(),(Ne={fulfilledTimeStamp:Date.now(),baseQueryMeta:$.meta},Ne[Uc]=!0,Ne)])];case 8:if(le=Te.sent(),de=le,!(de instanceof MT))return[3,12];fe=PT,z.query&&z.transformErrorResponse&&(fe=z.transformErrorResponse),Te.label=9;case 9:return Te.trys.push([9,11,,12]),be=Ht,[4,fe(de.value,de.meta,F.originalArgs)];case 10:return[2,be.apply(void 0,[Te.sent(),(Se={baseQueryMeta:de.meta},Se[Uc]=!0,Se)])];case 11:return Ee=Te.sent(),de=Ee,[3,12];case 12:throw typeof process<"u",console.error(de),de;case 13:return[2]}})})};function v(L,V){var F,D,z,W,$=(D=(F=V[a])==null?void 0:F.queries)==null?void 0:D[L.queryCacheKey],Y=(z=V[a])==null?void 0:z.config.refetchOnMountOrArgChange,re=$==null?void 0:$.fulfilledTimeStamp,te=(W=L.forceRefetch)!=null?W:L.subscribe&&Y;return te?te===!0||(Number(new Date)-Number(re))/1e3>=te:!1}var x=CT(a+"/executeQuery",y,{getPendingMeta:function(){var L;return L={startedTimeStamp:Date.now()},L[Uc]=!0,L},condition:function(L,V){var F=V.getState,D,z,W,$=F(),Y=(z=(D=$[a])==null?void 0:D.queries)==null?void 0:z[L.queryCacheKey],re=Y==null?void 0:Y.fulfilledTimeStamp,te=L.originalArgs,Z=Y==null?void 0:Y.originalArgs,Q=h[L.endpointName];return N0(L)?!0:(Y==null?void 0:Y.status)==="pending"?!1:v(L,$)||iP(Q)&&((W=Q==null?void 0:Q.forceRefetch)!=null&&W.call(Q,{currentArg:te,previousArg:Z,endpointState:Y,state:$}))?!0:!re},dispatchConditionRejection:!0}),S=CT(a+"/executeMutation",y,{getPendingMeta:function(){var L;return L={startedTimeStamp:Date.now()},L[Uc]=!0,L}}),I=function(L){return"force"in L},N=function(L){return"ifOlderThan"in L},P=function(L,V,F){return function(D,z){var W=I(F)&&F.force,$=N(F)&&F.ifOlderThan,Y=function(Q){return Q===void 0&&(Q=!0),m.endpoints[L].initiate(V,{forceRefetch:Q})},re=m.endpoints[L].select(V)(z());if(W)D(Y());else if($){var te=re==null?void 0:re.fulfilledTimeStamp;if(!te){D(Y());return}var Z=(Number(new Date)-Number(new Date(te)))/1e3>=$;Z&&D(Y())}else D(Y(!1))}};function B(L){return function(V){var F,D;return((D=(F=V==null?void 0:V.meta)==null?void 0:F.arg)==null?void 0:D.endpointName)===L}}function O(L,V){return{matchPending:od(av(L),B(V)),matchFulfilled:od(Xs(L),B(V)),matchRejected:od(Pd(L),B(V))}}return{queryThunk:x,mutationThunk:S,prefetch:P,updateQueryData:A,upsertQueryData:C,patchQueryData:g,buildMatchThunkActions:O}}function sP(n,o,a,d){return uv(a[n.meta.arg.endpointName][o],Xs(n)?n.payload:void 0,Kp(n)?n.payload:void 0,n.meta.arg.originalArgs,"baseQueryMeta"in n.meta?n.meta.baseQueryMeta:void 0,d)}function jh(n,o,a){var d=n[o];d&&a(d)}function Nd(n){var o;return(o="arg"in n?n.arg.fixedCacheKey:n.fixedCacheKey)!=null?o:n.requestId}function BT(n,o,a){var d=n[Nd(o)];d&&a(d)}var Mc={};function LK(n){var o=n.reducerPath,a=n.queryThunk,d=n.mutationThunk,h=n.context,p=h.endpointDefinitions,m=h.apiUid,w=h.extractRehydrationInfo,g=h.hasRehydrationInfo,A=n.assertTagType,C=n.config,y=or(o+"/resetApiState"),v=Si({name:o+"/queries",initialState:Mc,reducers:{removeQueryResult:{reducer:function(V,F){var D=F.payload.queryCacheKey;delete V[D]},prepare:Ic()},queryResultPatched:{reducer:function(V,F){var D=F.payload,z=D.queryCacheKey,W=D.patches;jh(V,z,function($){$.data=gT($.data,W.concat())})},prepare:Ic()}},extraReducers:function(V){V.addCase(a.pending,function(F,D){var z=D.meta,W=D.meta.arg,$,Y,re=N0(W);(W.subscribe||re)&&((Y=F[$=W.queryCacheKey])!=null||(F[$]={status:It.uninitialized,endpointName:W.endpointName})),jh(F,W.queryCacheKey,function(te){te.status=It.pending,te.requestId=re&&te.requestId?te.requestId:z.requestId,W.originalArgs!==void 0&&(te.originalArgs=W.originalArgs),te.startedTimeStamp=z.startedTimeStamp})}).addCase(a.fulfilled,function(F,D){var z=D.meta,W=D.payload;jh(F,z.arg.queryCacheKey,function($){var Y;if(!($.requestId!==z.requestId&&!N0(z.arg))){var re=p[z.arg.endpointName].merge;if($.status=It.fulfilled,re)if($.data!==void 0){var te=z.fulfilledTimeStamp,Z=z.arg,Q=z.baseQueryMeta,ee=z.requestId,se=qd($.data,function(G){return re(G,W,{arg:Z.originalArgs,baseQueryMeta:Q,fulfilledTimeStamp:te,requestId:ee})});$.data=se}else $.data=W;else $.data=(Y=p[z.arg.endpointName].structuralSharing)==null||Y?nP(uo($.data)?SG($.data):$.data,W):W;delete $.error,$.fulfilledTimeStamp=z.fulfilledTimeStamp}})}).addCase(a.rejected,function(F,D){var z=D.meta,W=z.condition,$=z.arg,Y=z.requestId,re=D.error,te=D.payload;jh(F,$.queryCacheKey,function(Z){if(!W){if(Z.requestId!==Y)return;Z.status=It.rejected,Z.error=te??re}})}).addMatcher(g,function(F,D){for(var z=w(D).queries,W=0,$=Object.entries(z);W<$.length;W++){var Y=$[W],re=Y[0],te=Y[1];((te==null?void 0:te.status)===It.fulfilled||(te==null?void 0:te.status)===It.rejected)&&(F[re]=te)}})}}),x=Si({name:o+"/mutations",initialState:Mc,reducers:{removeMutationResult:{reducer:function(V,F){var D=F.payload,z=Nd(D);z in V&&delete V[z]},prepare:Ic()}},extraReducers:function(V){V.addCase(d.pending,function(F,D){var z=D.meta,W=D.meta,$=W.requestId,Y=W.arg,re=W.startedTimeStamp;Y.track&&(F[Nd(z)]={requestId:$,status:It.pending,endpointName:Y.endpointName,startedTimeStamp:re})}).addCase(d.fulfilled,function(F,D){var z=D.payload,W=D.meta;W.arg.track&&BT(F,W,function($){$.requestId===W.requestId&&($.status=It.fulfilled,$.data=z,$.fulfilledTimeStamp=W.fulfilledTimeStamp)})}).addCase(d.rejected,function(F,D){var z=D.payload,W=D.error,$=D.meta;$.arg.track&&BT(F,$,function(Y){Y.requestId===$.requestId&&(Y.status=It.rejected,Y.error=z??W)})}).addMatcher(g,function(F,D){for(var z=w(D).mutations,W=0,$=Object.entries(z);W<$.length;W++){var Y=$[W],re=Y[0],te=Y[1];((te==null?void 0:te.status)===It.fulfilled||(te==null?void 0:te.status)===It.rejected)&&re!==(te==null?void 0:te.requestId)&&(F[re]=te)}})}}),S=Si({name:o+"/invalidation",initialState:Mc,reducers:{updateProvidedBy:{reducer:function(V,F){for(var D,z,W,$,Y=F.payload,re=Y.queryCacheKey,te=Y.providedTags,Z=0,Q=Object.values(V);Z<Q.length;Z++)for(var ee=Q[Z],se=0,G=Object.values(ee);se<G.length;se++){var le=G[se],de=le.indexOf(re);de!==-1&&le.splice(de,1)}for(var fe=0,be=te;fe<be.length;fe++){var Ee=be[fe],Ne=Ee.type,Se=Ee.id,ve=($=(z=(D=V[Ne])!=null?D:V[Ne]={})[W=Se||"__internal_without_id"])!=null?$:z[W]=[],We=ve.includes(re);We||ve.push(re)}},prepare:Ic()}},extraReducers:function(V){V.addCase(v.actions.removeQueryResult,function(F,D){for(var z=D.payload.queryCacheKey,W=0,$=Object.values(F);W<$.length;W++)for(var Y=$[W],re=0,te=Object.values(Y);re<te.length;re++){var Z=te[re],Q=Z.indexOf(z);Q!==-1&&Z.splice(Q,1)}}).addMatcher(g,function(F,D){for(var z,W,$,Y,re=w(D).provided,te=0,Z=Object.entries(re);te<Z.length;te++)for(var Q=Z[te],ee=Q[0],se=Q[1],G=0,le=Object.entries(se);G<le.length;G++)for(var de=le[G],fe=de[0],be=de[1],Ee=(Y=(W=(z=F[ee])!=null?z:F[ee]={})[$=fe||"__internal_without_id"])!=null?Y:W[$]=[],Ne=0,Se=be;Ne<Se.length;Ne++){var ve=Se[Ne],We=Ee.includes(ve);We||Ee.push(ve)}}).addMatcher(xl(Xs(a),Kp(a)),function(F,D){var z=sP(D,"providesTags",p,A),W=D.meta.arg.queryCacheKey;S.caseReducers.updateProvidedBy(F,S.actions.updateProvidedBy({queryCacheKey:W,providedTags:z}))})}}),I=Si({name:o+"/subscriptions",initialState:Mc,reducers:{updateSubscriptionOptions:function(V,F){},unsubscribeQueryResult:function(V,F){},internal_probeSubscription:function(V,F){}}}),N=Si({name:o+"/internalSubscriptions",initialState:Mc,reducers:{subscriptionsUpdated:{reducer:function(V,F){return gT(V,F.payload)},prepare:Ic()}}}),P=Si({name:o+"/config",initialState:Ut({online:DK(),focused:TK(),middlewareRegistered:!1},C),reducers:{middlewareRegistered:function(V,F){var D=F.payload;V.middlewareRegistered=V.middlewareRegistered==="conflict"||m!==D?"conflict":!0}},extraReducers:function(V){V.addCase(dv,function(F){F.online=!0}).addCase(oP,function(F){F.online=!1}).addCase(cv,function(F){F.focused=!0}).addCase(rP,function(F){F.focused=!1}).addMatcher(g,function(F){return Ut({},F)})}}),B=K3({queries:v.reducer,mutations:x.reducer,provided:S.reducer,subscriptions:N.reducer,config:P.reducer}),O=function(V,F){return B(y.match(F)?void 0:V,F)},L=To(Ut(Ut(Ut(Ut(Ut(Ut({},P.actions),v.actions),I.actions),N.actions),x.actions),S.actions),{unsubscribeMutationResult:x.actions.removeMutationResult,resetApiState:y});return{reducer:O,actions:L}}var js=Symbol.for("RTKQ/skipToken"),aP={status:It.uninitialized},NT=qd(aP,function(){}),OT=qd(aP,function(){});function jK(n){var o=n.serializeQueryArgs,a=n.reducerPath,d=function(C){return NT},h=function(C){return OT};return{buildQuerySelector:w,buildMutationSelector:g,selectInvalidatedBy:A};function p(C){return Ut(Ut({},C),CK(C.status))}function m(C){var y=C[a];return y}function w(C,y){return function(v){var x=o({queryArgs:v,endpointDefinition:y,endpointName:C}),S=function(N){var P,B,O;return(O=(B=(P=m(N))==null?void 0:P.queries)==null?void 0:B[x])!=null?O:NT},I=v===js?d:S;return rd(I,p)}}function g(){return function(C){var y,v;typeof C=="object"?v=(y=Nd(C))!=null?y:js:v=C;var x=function(I){var N,P,B;return(B=(P=(N=m(I))==null?void 0:N.mutations)==null?void 0:P[v])!=null?B:OT},S=v===js?h:x;return rd(S,p)}}function A(C,y){for(var v,x=C[a],S=new Set,I=0,N=y.map(B0);I<N.length;I++){var P=N[I],B=x.provided[P.type];if(B)for(var O=(v=P.id!==void 0?B[P.id]:ST(Object.values(B)))!=null?v:[],L=0,V=O;L<V.length;L++){var F=V[L];S.add(F)}}return ST(Array.from(S.values()).map(function(D){var z=x.queries[D];return z?[{queryCacheKey:D,endpointName:z.endpointName,originalArgs:z.originalArgs}]:[]}))}}var zh=WeakMap?new WeakMap:void 0,RT=function(n){var o=n.endpointName,a=n.queryArgs,d="",h=zh==null?void 0:zh.get(a);if(typeof h=="string")d=h;else{var p=JSON.stringify(a,function(m,w){return Yi(w)?Object.keys(w).sort().reduce(function(g,A){return g[A]=w[A],g},{}):w});Yi(a)&&(zh==null||zh.set(a,p)),d=p}return o+"("+d+")"};function zK(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return function(d){var h=T0(function(C){var y,v;return(v=d.extractRehydrationInfo)==null?void 0:v.call(d,C,{reducerPath:(y=d.reducerPath)!=null?y:"api"})}),p=To(Ut({reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1},d),{extractRehydrationInfo:h,serializeQueryArgs:function(C){var y=RT;if("serializeQueryArgs"in C.endpointDefinition){var v=C.endpointDefinition.serializeQueryArgs;y=function(x){var S=v(x);return typeof S=="string"?S:RT(To(Ut({},x),{queryArgs:S}))}}else d.serializeQueryArgs&&(y=d.serializeQueryArgs);return y(C)},tagTypes:Kf([],d.tagTypes||[])}),m={endpointDefinitions:{},batch:function(C){C()},apiUid:J3(),extractRehydrationInfo:h,hasRehydrationInfo:T0(function(C){return h(C)!=null})},w={injectEndpoints:A,enhanceEndpoints:function(C){var y=C.addTagTypes,v=C.endpoints;if(y)for(var x=0,S=y;x<S.length;x++){var I=S[x];p.tagTypes.includes(I)||p.tagTypes.push(I)}if(v)for(var N=0,P=Object.entries(v);N<P.length;N++){var B=P[N],O=B[0],L=B[1];typeof L=="function"?L(m.endpointDefinitions[O]):Object.assign(m.endpointDefinitions[O]||{},L)}return w}},g=n.map(function(C){return C.init(w,p,m)});function A(C){for(var y=C.endpoints({query:function(L){return To(Ut({},L),{type:Bo.query})},mutation:function(L){return To(Ut({},L),{type:Bo.mutation})}}),v=0,x=Object.entries(y);v<x.length;v++){var S=x[v],I=S[0],N=S[1];if(!C.overrideExisting&&I in m.endpointDefinitions){typeof process<"u";continue}m.endpointDefinitions[I]=N;for(var P=0,B=g;P<B.length;P++){var O=B[P];O.injectEndpoint(I,N)}}return w}return w.injectEndpoints({endpoints:d.endpoints})}}function FK(n){for(var o in n)return!1;return!0}var VK=2147483647/1e3-1,UK=function(n){var o=n.reducerPath,a=n.api,d=n.context,h=n.internalState,p=a.internalActions,m=p.removeQueryResult,w=p.unsubscribeQueryResult;function g(v){var x=h.currentSubscriptions[v];return!!x&&!FK(x)}var A={},C=function(v,x,S){var I;if(w.match(v)){var N=x.getState()[o],P=v.payload.queryCacheKey;y(P,(I=N.queries[P])==null?void 0:I.endpointName,x,N.config)}if(a.util.resetApiState.match(v))for(var B=0,O=Object.entries(A);B<O.length;B++){var L=O[B],V=L[0],F=L[1];F&&clearTimeout(F),delete A[V]}if(d.hasRehydrationInfo(v))for(var N=x.getState()[o],D=d.extractRehydrationInfo(v).queries,z=0,W=Object.entries(D);z<W.length;z++){var $=W[z],P=$[0],Y=$[1];y(P,Y==null?void 0:Y.endpointName,x,N.config)}};function y(v,x,S,I){var N,P=d.endpointDefinitions[x],B=(N=P==null?void 0:P.keepUnusedDataFor)!=null?N:I.keepUnusedDataFor;if(B!==1/0){var O=Math.max(0,Math.min(B,VK));if(!g(v)){var L=A[v];L&&clearTimeout(L),A[v]=setTimeout(function(){g(v)||S.dispatch(m({queryCacheKey:v})),delete A[v]},O*1e3)}}}return C},HK=function(n){var o=n.reducerPath,a=n.context,d=n.context.endpointDefinitions,h=n.mutationThunk,p=n.api,m=n.assertTagType,w=n.refetchQuery,g=p.internalActions.removeQueryResult,A=xl(Xs(h),Kp(h)),C=function(v,x){A(v)&&y(sP(v,"invalidatesTags",d,m),x),p.util.invalidateTags.match(v)&&y(uv(v.payload,void 0,void 0,void 0,void 0,m),x)};function y(v,x){var S=x.getState(),I=S[o],N=p.util.selectInvalidatedBy(S,v);a.batch(function(){for(var P,B=Array.from(N.values()),O=0,L=B;O<L.length;O++){var V=L[O].queryCacheKey,F=I.queries[V],D=(P=I.subscriptions[V])!=null?P:{};F&&(Object.keys(D).length===0?x.dispatch(g({queryCacheKey:V})):F.status!==It.uninitialized&&x.dispatch(w(F,V)))}})}return C},$K=function(n){var o=n.reducerPath,a=n.queryThunk,d=n.api,h=n.refetchQuery,p=n.internalState,m={},w=function(x,S){(d.internalActions.updateSubscriptionOptions.match(x)||d.internalActions.unsubscribeQueryResult.match(x))&&A(x.payload,S),(a.pending.match(x)||a.rejected.match(x)&&x.meta.condition)&&A(x.meta.arg,S),(a.fulfilled.match(x)||a.rejected.match(x)&&!x.meta.condition)&&g(x.meta.arg,S),d.util.resetApiState.match(x)&&y()};function g(x,S){var I=x.queryCacheKey,N=S.getState()[o],P=N.queries[I],B=p.currentSubscriptions[I];if(!(!P||P.status===It.uninitialized)){var O=v(B);if(Number.isFinite(O)){var L=m[I];L!=null&&L.timeout&&(clearTimeout(L.timeout),L.timeout=void 0);var V=Date.now()+O,F=m[I]={nextPollTimestamp:V,pollingInterval:O,timeout:setTimeout(function(){F.timeout=void 0,S.dispatch(h(P,I))},O)}}}}function A(x,S){var I=x.queryCacheKey,N=S.getState()[o],P=N.queries[I],B=p.currentSubscriptions[I];if(!(!P||P.status===It.uninitialized)){var O=v(B);if(!Number.isFinite(O)){C(I);return}var L=m[I],V=Date.now()+O;(!L||V<L.nextPollTimestamp)&&g({queryCacheKey:I},S)}}function C(x){var S=m[x];S!=null&&S.timeout&&clearTimeout(S.timeout),delete m[x]}function y(){for(var x=0,S=Object.keys(m);x<S.length;x++){var I=S[x];C(I)}}function v(x){x===void 0&&(x={});var S=Number.POSITIVE_INFINITY;for(var I in x)x[I].pollingInterval&&(S=Math.min(x[I].pollingInterval,S));return S}return w},WK=function(n){var o=n.reducerPath,a=n.context,d=n.api,h=n.refetchQuery,p=n.internalState,m=d.internalActions.removeQueryResult,w=function(A,C){cv.match(A)&&g(C,"refetchOnFocus"),dv.match(A)&&g(C,"refetchOnReconnect")};function g(A,C){var y=A.getState()[o],v=y.queries,x=p.currentSubscriptions;a.batch(function(){for(var S=0,I=Object.keys(x);S<I.length;S++){var N=I[S],P=v[N],B=x[N];if(!(!B||!P)){var O=Object.values(B).some(function(L){return L[C]===!0})||Object.values(B).every(function(L){return L[C]===void 0})&&y.config[C];O&&(Object.keys(B).length===0?A.dispatch(m({queryCacheKey:N})):P.status!==It.uninitialized&&A.dispatch(h(P,N)))}}})}return w},LT=new Error("Promise never resolved before cacheEntryRemoved."),qK=function(n){var o=n.api,a=n.reducerPath,d=n.context,h=n.queryThunk,p=n.mutationThunk;n.internalState;var m=P0(h),w=P0(p),g=Xs(h,p),A={},C=function(x,S,I){var N=y(x);if(h.pending.match(x)){var P=I[a].queries[N],B=S.getState()[a].queries[N];!P&&B&&v(x.meta.arg.endpointName,x.meta.arg.originalArgs,N,S,x.meta.requestId)}else if(p.pending.match(x)){var B=S.getState()[a].mutations[N];B&&v(x.meta.arg.endpointName,x.meta.arg.originalArgs,N,S,x.meta.requestId)}else if(g(x)){var O=A[N];O!=null&&O.valueResolved&&(O.valueResolved({data:x.payload,meta:x.meta.baseQueryMeta}),delete O.valueResolved)}else if(o.internalActions.removeQueryResult.match(x)||o.internalActions.removeMutationResult.match(x)){var O=A[N];O&&(delete A[N],O.cacheEntryRemoved())}else if(o.util.resetApiState.match(x))for(var L=0,V=Object.entries(A);L<V.length;L++){var F=V[L],D=F[0],O=F[1];delete A[D],O.cacheEntryRemoved()}};function y(x){return m(x)?x.meta.arg.queryCacheKey:w(x)?x.meta.requestId:o.internalActions.removeQueryResult.match(x)?x.payload.queryCacheKey:o.internalActions.removeMutationResult.match(x)?Nd(x.payload):""}function v(x,S,I,N,P){var B=d.endpointDefinitions[x],O=B==null?void 0:B.onCacheEntryAdded;if(O){var L={},V=new Promise(function(Y){L.cacheEntryRemoved=Y}),F=Promise.race([new Promise(function(Y){L.valueResolved=Y}),V.then(function(){throw LT})]);F.catch(function(){}),A[I]=L;var D=o.endpoints[x].select(B.type===Bo.query?S:I),z=N.dispatch(function(Y,re,te){return te}),W=To(Ut({},N),{getCacheEntry:function(){return D(N.getState())},requestId:P,extra:z,updateCachedData:B.type===Bo.query?function(Y){return N.dispatch(o.util.updateQueryData(x,S,Y))}:void 0,cacheDataLoaded:F,cacheEntryRemoved:V}),$=O(S,W);Promise.resolve($).catch(function(Y){if(Y!==LT)throw Y})}}return C},GK=function(n){var o=n.api,a=n.context,d=n.queryThunk,h=n.mutationThunk,p=av(d,h),m=Pd(d,h),w=Xs(d,h),g={},A=function(C,y){var v,x,S;if(p(C)){var I=C.meta,N=I.requestId,P=I.arg,B=P.endpointName,O=P.originalArgs,L=a.endpointDefinitions[B],V=L==null?void 0:L.onQueryStarted;if(V){var F={},D=new Promise(function(Q,ee){F.resolve=Q,F.reject=ee});D.catch(function(){}),g[N]=F;var z=o.endpoints[B].select(L.type===Bo.query?O:N),W=y.dispatch(function(Q,ee,se){return se}),$=To(Ut({},y),{getCacheEntry:function(){return z(y.getState())},requestId:N,extra:W,updateCachedData:L.type===Bo.query?function(Q){return y.dispatch(o.util.updateQueryData(B,O,Q))}:void 0,queryFulfilled:D});V(O,$)}}else if(w(C)){var Y=C.meta,N=Y.requestId,re=Y.baseQueryMeta;(v=g[N])==null||v.resolve({data:C.payload,meta:re}),delete g[N]}else if(m(C)){var te=C.meta,N=te.requestId,Z=te.rejectedWithValue,re=te.baseQueryMeta;(S=g[N])==null||S.reject({error:(x=C.payload)!=null?x:C.error,isUnhandledError:!Z,meta:re}),delete g[N]}};return A},KK=function(n){var o=n.api,a=n.context.apiUid,d=n.reducerPath;return function(h,p){var m,w;o.util.resetApiState.match(h)&&p.dispatch(o.internalActions.middlewareRegistered(a)),typeof process<"u"}},jT,QK=typeof queueMicrotask=="function"?queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis):function(n){return(jT||(jT=Promise.resolve())).then(n).catch(function(o){return setTimeout(function(){throw o},0)})},YK=function(n){var o=n.api,a=n.queryThunk,d=n.internalState,h=o.reducerPath+"/subscriptions",p=null,m=!1,w=o.internalActions,g=w.updateSubscriptionOptions,A=w.unsubscribeQueryResult,C=function(y,v){var x,S,I,N,P,B,O,L,V;if(g.match(v)){var F=v.payload,D=F.queryCacheKey,z=F.requestId,W=F.options;return(x=y==null?void 0:y[D])!=null&&x[z]&&(y[D][z]=W),!0}if(A.match(v)){var $=v.payload,D=$.queryCacheKey,z=$.requestId;return y[D]&&delete y[D][z],!0}if(o.internalActions.removeQueryResult.match(v))return delete y[v.payload.queryCacheKey],!0;if(a.pending.match(v)){var Y=v.meta,re=Y.arg,z=Y.requestId;if(re.subscribe){var te=(I=y[S=re.queryCacheKey])!=null?I:y[S]={};return te[z]=(P=(N=re.subscriptionOptions)!=null?N:te[z])!=null?P:{},!0}}if(a.rejected.match(v)){var Z=v.meta,Q=Z.condition,re=Z.arg,z=Z.requestId;if(Q&&re.subscribe){var te=(O=y[B=re.queryCacheKey])!=null?O:y[B]={};return te[z]=(V=(L=re.subscriptionOptions)!=null?L:te[z])!=null?V:{},!0}}return!1};return function(y,v){var x,S;if(p||(p=JSON.parse(JSON.stringify(d.currentSubscriptions))),o.util.resetApiState.match(y))return p=d.currentSubscriptions={},[!0,!1];if(o.internalActions.internal_probeSubscription.match(y)){var I=y.payload,N=I.queryCacheKey,P=I.requestId,B=!!((x=d.currentSubscriptions[N])!=null&&x[P]);return[!1,B]}var O=C(d.currentSubscriptions,y);if(O){m||(QK(function(){var D=JSON.parse(JSON.stringify(d.currentSubscriptions)),z=q3(p,function(){return D}),W=z[1];v.next(o.internalActions.subscriptionsUpdated(W)),p=D,m=!1}),m=!0);var L=!!((S=y.type)!=null&&S.startsWith(h)),V=a.rejected.match(y)&&y.meta.condition&&!!y.meta.arg.subscribe,F=!L&&!V;return[F,!1]}return[!0,!1]}};function ZK(n){var o=n.reducerPath,a=n.queryThunk,d=n.api,h=n.context,p=h.apiUid,m={invalidateTags:or(o+"/invalidateTags")},w=function(y){return!!y&&typeof y.type=="string"&&y.type.startsWith(o+"/")},g=[KK,UK,HK,$K,qK,GK],A=function(y){var v=!1,x={currentSubscriptions:{}},S=To(Ut({},n),{internalState:x,refetchQuery:C}),I=g.map(function(B){return B(S)}),N=YK(S),P=WK(S);return function(B){return function(O){v||(v=!0,y.dispatch(d.internalActions.middlewareRegistered(p)));var L=To(Ut({},y),{next:B}),V=y.getState(),F=N(O,L,V),D=F[0],z=F[1],W;if(D?W=B(O):W=z,y.getState()[o]&&(P(O,L,V),w(O)||h.hasRehydrationInfo(O)))for(var $=0,Y=I;$<Y.length;$++){var re=Y[$];re(O,L,V)}return W}}};return{middleware:A,actions:m};function C(y,v,x){return x===void 0&&(x={}),a(Ut({type:"query",endpointName:y.endpointName,originalArgs:y.originalArgs,subscribe:!1,forceRefetch:!0,queryCacheKey:v},x))}}function Ai(n){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];Object.assign.apply(Object,Kf([n],o))}var zT=Symbol(),JK=function(){return{name:zT,init:function(n,o,a){var d=o.baseQuery,h=o.tagTypes,p=o.reducerPath,m=o.serializeQueryArgs,w=o.keepUnusedDataFor,g=o.refetchOnMountOrArgChange,A=o.refetchOnFocus,C=o.refetchOnReconnect;PG();var y=function(Ee){return typeof process<"u",Ee};Object.assign(n,{reducerPath:p,endpoints:{},internalActions:{onOnline:dv,onOffline:oP,onFocus:cv,onFocusLost:rP},util:{}});var v=RK({baseQuery:d,reducerPath:p,context:a,api:n,serializeQueryArgs:m,assertTagType:y}),x=v.queryThunk,S=v.mutationThunk,I=v.patchQueryData,N=v.updateQueryData,P=v.upsertQueryData,B=v.prefetch,O=v.buildMatchThunkActions,L=LK({context:a,queryThunk:x,mutationThunk:S,reducerPath:p,assertTagType:y,config:{refetchOnFocus:A,refetchOnReconnect:C,refetchOnMountOrArgChange:g,keepUnusedDataFor:w,reducerPath:p}}),V=L.reducer,F=L.actions;Ai(n.util,{patchQueryData:I,updateQueryData:N,upsertQueryData:P,prefetch:B,resetApiState:F.resetApiState}),Ai(n.internalActions,F);var D=ZK({reducerPath:p,context:a,queryThunk:x,mutationThunk:S,api:n,assertTagType:y}),z=D.middleware,W=D.actions;Ai(n.util,W),Ai(n,{reducer:V,middleware:z});var $=jK({serializeQueryArgs:m,reducerPath:p}),Y=$.buildQuerySelector,re=$.buildMutationSelector,te=$.selectInvalidatedBy;Ai(n.util,{selectInvalidatedBy:te});var Z=OK({queryThunk:x,mutationThunk:S,api:n,serializeQueryArgs:m,context:a}),Q=Z.buildInitiateQuery,ee=Z.buildInitiateMutation,se=Z.getRunningMutationThunk,G=Z.getRunningMutationsThunk,le=Z.getRunningQueriesThunk,de=Z.getRunningQueryThunk,fe=Z.getRunningOperationPromises,be=Z.removalWarning;return Ai(n.util,{getRunningOperationPromises:fe,getRunningOperationPromise:be,getRunningMutationThunk:se,getRunningMutationsThunk:G,getRunningQueryThunk:de,getRunningQueriesThunk:le}),{name:zT,injectEndpoint:function(Ee,Ne){var Se,ve,We=n;(ve=(Se=We.endpoints)[Ee])!=null||(Se[Ee]={}),iP(Ne)?Ai(We.endpoints[Ee],{name:Ee,select:Y(Ee,Ne),initiate:Q(Ee,Ne)},O(x,Ee)):BK(Ne)&&Ai(We.endpoints[Ee],{name:Ee,select:re(),initiate:ee(Ee)},O(S,Ee))}}}}},XK=function(n,o){for(var a=0,d=o.length,h=n.length;a<d;a++,h++)n[h]=o[a];return n},eQ=Object.defineProperty,tQ=Object.defineProperties,nQ=Object.getOwnPropertyDescriptors,FT=Object.getOwnPropertySymbols,rQ=Object.prototype.hasOwnProperty,oQ=Object.prototype.propertyIsEnumerable,VT=function(n,o,a){return o in n?eQ(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a},Qo=function(n,o){for(var a in o||(o={}))rQ.call(o,a)&&VT(n,a,o[a]);if(FT)for(var d=0,h=FT(o);d<h.length;d++){var a=h[d];oQ.call(o,a)&&VT(n,a,o[a])}return n},lf=function(n,o){return tQ(n,nQ(o))};function UT(n,o,a,d){var h=q.useMemo(function(){return{queryArgs:n,serialized:typeof n=="object"?o({queryArgs:n,endpointDefinition:a,endpointName:d}):n}},[n,o,a,d]),p=q.useRef(h);return q.useEffect(function(){p.current.serialized!==h.serialized&&(p.current=h)},[h]),p.current.serialized===h.serialized?p.current.queryArgs:n}var cb=Symbol();function db(n){var o=q.useRef(n);return q.useEffect(function(){Lf(o.current,n)||(o.current=n)},[n]),Lf(o.current,n)?o.current:n}var Fh=WeakMap?new WeakMap:void 0,iQ=function(n){var o=n.endpointName,a=n.queryArgs,d="",h=Fh==null?void 0:Fh.get(a);if(typeof h=="string")d=h;else{var p=JSON.stringify(a,function(m,w){return Yi(w)?Object.keys(w).sort().reduce(function(g,A){return g[A]=w[A],g},{}):w});Yi(a)&&(Fh==null||Fh.set(a,p)),d=p}return o+"("+d+")"},sQ=typeof window<"u"&&window.document&&window.document.createElement?q.useLayoutEffect:q.useEffect,aQ=function(n){return n},lQ=function(n){return n.isUninitialized?lf(Qo({},n),{isUninitialized:!1,isFetching:!0,isLoading:n.data===void 0,status:It.pending}):n};function cQ(n){var o=n.api,a=n.moduleOptions,d=a.batch,h=a.useDispatch,p=a.useSelector,m=a.useStore,w=a.unstable__sideEffectsInRender,g=n.serializeQueryArgs,A=n.context,C=w?function(I){return I()}:q.useEffect;return{buildQueryHooks:x,buildMutationHook:S,usePrefetch:v};function y(I,N,P){if(N!=null&&N.endpointName&&I.isUninitialized){var B=N.endpointName,O=A.endpointDefinitions[B];g({queryArgs:N.originalArgs,endpointDefinition:O,endpointName:B})===g({queryArgs:P,endpointDefinition:O,endpointName:B})&&(N=void 0)}var L=I.isSuccess?I.data:N==null?void 0:N.data;L===void 0&&(L=I.data);var V=L!==void 0,F=I.isLoading,D=!V&&F,z=I.isSuccess||F&&V;return lf(Qo({},I),{data:L,currentData:I.data,isFetching:F,isLoading:D,isSuccess:z})}function v(I,N){var P=h(),B=db(N);return q.useCallback(function(O,L){return P(o.util.prefetch(I,O,Qo(Qo({},B),L)))},[I,P,B])}function x(I){var N=function(O,L){var V=L===void 0?{}:L,F=V.refetchOnReconnect,D=V.refetchOnFocus,z=V.refetchOnMountOrArgChange,W=V.skip,$=W===void 0?!1:W,Y=V.pollingInterval,re=Y===void 0?0:Y,te=o.endpoints[I].initiate,Z=h(),Q=UT($?js:O,iQ,A.endpointDefinitions[I],I),ee=db({refetchOnReconnect:F,refetchOnFocus:D,pollingInterval:re}),se=q.useRef(!1),G=q.useRef(),le=G.current||{},de=le.queryCacheKey,fe=le.requestId,be=!1;if(de&&fe){var Ee=Z(o.internalActions.internal_probeSubscription({queryCacheKey:de,requestId:fe}));be=!!Ee}var Ne=!be&&se.current;return C(function(){se.current=be}),C(function(){Ne&&(G.current=void 0)},[Ne]),C(function(){var Se,ve=G.current;if(typeof process<"u",Q===js){ve==null||ve.unsubscribe(),G.current=void 0;return}var We=(Se=G.current)==null?void 0:Se.subscriptionOptions;if(!ve||ve.arg!==Q){ve==null||ve.unsubscribe();var Ht=Z(te(Q,{subscriptionOptions:ee,forceRefetch:z}));G.current=Ht}else ee!==We&&ve.updateSubscriptionOptions(ee)},[Z,te,z,Q,ee,Ne]),q.useEffect(function(){return function(){var Se;(Se=G.current)==null||Se.unsubscribe(),G.current=void 0}},[]),q.useMemo(function(){return{refetch:function(){var Se;if(!G.current)throw new Error("Cannot refetch a query that has not been started yet.");return(Se=G.current)==null?void 0:Se.refetch()}}},[])},P=function(O){var L=O===void 0?{}:O,V=L.refetchOnReconnect,F=L.refetchOnFocus,D=L.pollingInterval,z=D===void 0?0:D,W=o.endpoints[I].initiate,$=h(),Y=q.useState(cb),re=Y[0],te=Y[1],Z=q.useRef(),Q=db({refetchOnReconnect:V,refetchOnFocus:F,pollingInterval:z});C(function(){var G,le,de=(G=Z.current)==null?void 0:G.subscriptionOptions;Q!==de&&((le=Z.current)==null||le.updateSubscriptionOptions(Q))},[Q]);var ee=q.useRef(Q);C(function(){ee.current=Q},[Q]);var se=q.useCallback(function(G,le){le===void 0&&(le=!1);var de;return d(function(){var fe;(fe=Z.current)==null||fe.unsubscribe(),Z.current=de=$(W(G,{subscriptionOptions:ee.current,forceRefetch:!le})),te(G)}),de},[$,W]);return q.useEffect(function(){return function(){var G;(G=Z==null?void 0:Z.current)==null||G.unsubscribe()}},[]),q.useEffect(function(){re!==cb&&!Z.current&&se(re,!0)},[re,se]),q.useMemo(function(){return[se,re]},[se,re])},B=function(O,L){var V=L===void 0?{}:L,F=V.skip,D=F===void 0?!1:F,z=V.selectFromResult,W=o.endpoints[I].select,$=UT(D?js:O,g,A.endpointDefinitions[I],I),Y=q.useRef(),re=q.useMemo(function(){return rd([W($),function(se,G){return G},function(se){return $}],y)},[W,$]),te=q.useMemo(function(){return z?rd([re],z):re},[re,z]),Z=p(function(se){return te(se,Y.current)},Lf),Q=m(),ee=re(Q.getState(),Y.current);return sQ(function(){Y.current=ee},[ee]),Z};return{useQueryState:B,useQuerySubscription:N,useLazyQuerySubscription:P,useLazyQuery:function(O){var L=P(O),V=L[0],F=L[1],D=B(F,lf(Qo({},O),{skip:F===cb})),z=q.useMemo(function(){return{lastArg:F}},[F]);return q.useMemo(function(){return[V,D,z]},[V,D,z])},useQuery:function(O,L){var V=N(O,L),F=B(O,Qo({selectFromResult:O===js||L!=null&&L.skip?void 0:lQ},L)),D=F.data,z=F.status,W=F.isLoading,$=F.isSuccess,Y=F.isError,re=F.error;return q.useDebugValue({data:D,status:z,isLoading:W,isSuccess:$,isError:Y,error:re}),q.useMemo(function(){return Qo(Qo({},F),V)},[F,V])}}}function S(I){return function(N){var P=N===void 0?{}:N,B=P.selectFromResult,O=B===void 0?aQ:B,L=P.fixedCacheKey,V=o.endpoints[I],F=V.select,D=V.initiate,z=h(),W=q.useState(),$=W[0],Y=W[1];q.useEffect(function(){return function(){$!=null&&$.arg.fixedCacheKey||$==null||$.reset()}},[$]);var re=q.useCallback(function(ve){var We=z(D(ve,{fixedCacheKey:L}));return Y(We),We},[z,D,L]),te=($||{}).requestId,Z=q.useMemo(function(){return rd([F({fixedCacheKey:L,requestId:$==null?void 0:$.requestId})],O)},[F,$,O,L]),Q=p(Z,Lf),ee=L==null?$==null?void 0:$.arg.originalArgs:void 0,se=q.useCallback(function(){d(function(){$&&Y(void 0),L&&z(o.internalActions.removeMutationResult({requestId:te,fixedCacheKey:L}))})},[z,L,$,te]),G=Q.endpointName,le=Q.data,de=Q.status,fe=Q.isLoading,be=Q.isSuccess,Ee=Q.isError,Ne=Q.error;q.useDebugValue({endpointName:G,data:le,status:de,isLoading:fe,isSuccess:be,isError:Ee,error:Ne});var Se=q.useMemo(function(){return lf(Qo({},Q),{originalArgs:ee,reset:se})},[Q,ee,se]);return q.useMemo(function(){return[re,Se]},[re,Se])}}}var Zf;(function(n){n.query="query",n.mutation="mutation"})(Zf||(Zf={}));function dQ(n){return n.type===Zf.query}function uQ(n){return n.type===Zf.mutation}function ub(n){return n.replace(n[0],n[0].toUpperCase())}function Vh(n){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];Object.assign.apply(Object,XK([n],o))}var hQ=Symbol(),fQ=function(n){var o={},a=o.batch,d=a===void 0?Hd.unstable_batchedUpdates:a,h=o.useDispatch,p=h===void 0?No:h,m=o.useSelector,w=m===void 0?$r:m,g=o.useStore,A=g===void 0?w3:g,C=o.unstable__sideEffectsInRender,y=C===void 0?!1:C;return{name:hQ,init:function(v,x,S){var I=x.serializeQueryArgs,N=v,P=cQ({api:v,moduleOptions:{batch:d,useDispatch:p,useSelector:w,useStore:A,unstable__sideEffectsInRender:y},serializeQueryArgs:I,context:S}),B=P.buildQueryHooks,O=P.buildMutationHook,L=P.usePrefetch;return Vh(N,{usePrefetch:L}),Vh(S,{batch:d}),{injectEndpoint:function(V,F){if(dQ(F)){var D=B(V),z=D.useQuery,W=D.useLazyQuery,$=D.useLazyQuerySubscription,Y=D.useQueryState,re=D.useQuerySubscription;Vh(N.endpoints[V],{useQuery:z,useLazyQuery:W,useLazyQuerySubscription:$,useQueryState:Y,useQuerySubscription:re}),v["use"+ub(V)+"Query"]=z,v["useLazy"+ub(V)+"Query"]=W}else if(uQ(F)){var te=O(V);Vh(N.endpoints[V],{useMutation:te}),v["use"+ub(V)+"Mutation"]=te}}}}}},pQ=zK(JK(),fQ());const mQ=PK({baseUrl:""}),id=pQ({baseQuery:mQ,tagTypes:["User"],endpoints:n=>({})}),_i="/api/v1/users",gQ=id.injectEndpoints({endpoints:n=>({login:n.mutation({query:o=>({url:`${_i}/login`,method:"POST",body:o})}),logout:n.mutation({query:()=>({url:`${_i}/logout`,method:"POST"})}),register:n.mutation({query:o=>({url:`${_i}/register`,method:"POST",body:o})}),updateUser:n.mutation({query:o=>({url:`${_i}/updatedetails`,method:"PATCH",body:o})}),getUserInfo:n.query({query:()=>({url:`${_i}/getcurrentuser`,method:"GET"})}),updateAvatar:n.mutation({query:o=>({url:`${_i}/avatar`,method:"PATCH",body:o})}),updateCoverImage:n.mutation({query:o=>({url:`${_i}/coverImage`,method:"PATCH",body:o})}),changePassword:n.mutation({query:o=>({url:`${_i}/changepassword`,method:"PATCH",body:o})})})}),{useLoginMutation:kQ,useLogoutMutation:bQ,useRegisterMutation:wQ,useUpdateUserMutation:vQ,useGetUserInfoQuery:Dre,useChangePasswordMutation:Tre,useUpdateAvatarMutation:AQ,useUpdateCoverImageMutation:_Q}=gQ,CQ={userInfo:sessionStorage.getItem("userInfo")?JSON.parse(sessionStorage.getItem("userInfo")):null},lP=Si({name:"auth",initialState:CQ,reducers:{setCredentials:(n,o)=>{n.userInfo=o.payload,sessionStorage.setItem("userInfo",JSON.stringify(o.payload))},logout:n=>{n.userInfo=null,sessionStorage.removeItem("userInfo")}}}),{setCredentials:El,logout:yQ}=lP.actions,xQ=lP.reducer,EQ=()=>{const{userInfo:n}=$r(g=>g.auth),o=No(),a=Cr(),[d]=bQ(),[h,p]=q.useState(!1),m=async()=>{if(window.confirm("Are you sure you want to logout?"))try{await d().unwrap(),o(yQ()),a("/login")}catch(g){console.error(g)}},w=()=>{p(!1)};return U.jsx("header",{className:"fixed top-0 text-white z-40 bg-opacity-50 backdrop-filter backdrop-blur-lg border-b-[1.1px] w-full",children:U.jsx("div",{className:"container mx-auto px-3",children:U.jsxs("div",{className:"flex items-center justify-between py-4",children:[U.jsx(fn,{to:"/",className:"text-white no-underline",children:U.jsx("span",{className:"text-2xl font-medium text-white",onClick:()=>w(),children:"Gwitter"})}),U.jsx("button",{className:"md:hidden text-white",onClick:()=>p(!h),children:U.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:U.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16m-7 6h7"})})}),U.jsx("nav",{className:`${h?"flex flex-col gap-3 absolute top-[100%] left-0 w-full bg-[#0f172a]  text-white z-40 bg-opacity-80 backdrop-filter backdrop-blur-lg border-b-[1.1px] h":"hidden"} md:flex md:flex-row md:items-center md:gap-6 md:relative`,children:n?U.jsxs(U.Fragment,{children:[U.jsx(fn,{to:"/profile",className:" no-underline py-3 px-4 md:py-0 hover:bg-blue-500 hover:py-1 rounded-md text-white",onClick:w,children:"Profile"}),U.jsx(fn,{to:"/addpost",className:"text-white no-underline py-2 px-4 md:py-0 hover:bg-blue-500 rounded-md hover:py-1",onClick:w,children:"Add Post"}),U.jsx(fn,{to:"/",className:"text-white no-underline py-2 px-4 md:py-0 hover:bg-blue-500 rounded-md hover:py-1",onClick:w,children:"All Posts"}),U.jsx("span",{onClick:()=>{m(),w()},className:"cursor-pointer text-white no-underline py-2 px-4 md:py-0 hover:bg-blue-500 rounded-md hover:py-1",children:"Logout"})]}):U.jsxs(U.Fragment,{children:[U.jsxs(fn,{to:"/login",className:"flex items-center gap-2 text-white no-underline py-2 px-4 md:py-0 hover:bg-blue-500  hover:py-1 rounded-md",onClick:w,children:[U.jsx(GW,{})," Sign In"]}),U.jsxs(fn,{to:"/register",className:"flex items-center gap-2 text-white no-underline hover:py-1 py-2 px-4 md:py-0 hover:bg-blue-500 rounded-md",onClick:w,children:[U.jsx(KW,{})," Sign Up"]})]})})]})})})};function cP(n,o){return function(){return n.apply(o,arguments)}}const{toString:SQ}=Object.prototype,{getPrototypeOf:hv}=Object,Qp=(n=>o=>{const a=SQ.call(o);return n[a]||(n[a]=a.slice(8,-1).toLowerCase())})(Object.create(null)),fo=n=>(n=n.toLowerCase(),o=>Qp(o)===n),Yp=n=>o=>typeof o===n,{isArray:Sl}=Array,Od=Yp("undefined");function DQ(n){return n!==null&&!Od(n)&&n.constructor!==null&&!Od(n.constructor)&&Vr(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const dP=fo("ArrayBuffer");function TQ(n){let o;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?o=ArrayBuffer.isView(n):o=n&&n.buffer&&dP(n.buffer),o}const IQ=Yp("string"),Vr=Yp("function"),uP=Yp("number"),Zp=n=>n!==null&&typeof n=="object",MQ=n=>n===!0||n===!1,cf=n=>{if(Qp(n)!=="object")return!1;const o=hv(n);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},PQ=fo("Date"),BQ=fo("File"),NQ=fo("Blob"),OQ=fo("FileList"),RQ=n=>Zp(n)&&Vr(n.pipe),LQ=n=>{let o;return n&&(typeof FormData=="function"&&n instanceof FormData||Vr(n.append)&&((o=Qp(n))==="formdata"||o==="object"&&Vr(n.toString)&&n.toString()==="[object FormData]"))},jQ=fo("URLSearchParams"),[zQ,FQ,VQ,UQ]=["ReadableStream","Request","Response","Headers"].map(fo),HQ=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Kd(n,o,{allOwnKeys:a=!1}={}){if(n===null||typeof n>"u")return;let d,h;if(typeof n!="object"&&(n=[n]),Sl(n))for(d=0,h=n.length;d<h;d++)o.call(null,n[d],d,n);else{const p=a?Object.getOwnPropertyNames(n):Object.keys(n),m=p.length;let w;for(d=0;d<m;d++)w=p[d],o.call(null,n[w],w,n)}}function hP(n,o){o=o.toLowerCase();const a=Object.keys(n);let d=a.length,h;for(;d-- >0;)if(h=a[d],o===h.toLowerCase())return h;return null}const fP=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,pP=n=>!Od(n)&&n!==fP;function O0(){const{caseless:n}=pP(this)&&this||{},o={},a=(d,h)=>{const p=n&&hP(o,h)||h;cf(o[p])&&cf(d)?o[p]=O0(o[p],d):cf(d)?o[p]=O0({},d):Sl(d)?o[p]=d.slice():o[p]=d};for(let d=0,h=arguments.length;d<h;d++)arguments[d]&&Kd(arguments[d],a);return o}const $Q=(n,o,a,{allOwnKeys:d}={})=>(Kd(o,(h,p)=>{a&&Vr(h)?n[p]=cP(h,a):n[p]=h},{allOwnKeys:d}),n),WQ=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),qQ=(n,o,a,d)=>{n.prototype=Object.create(o.prototype,d),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:o.prototype}),a&&Object.assign(n.prototype,a)},GQ=(n,o,a,d)=>{let h,p,m;const w={};if(o=o||{},n==null)return o;do{for(h=Object.getOwnPropertyNames(n),p=h.length;p-- >0;)m=h[p],(!d||d(m,n,o))&&!w[m]&&(o[m]=n[m],w[m]=!0);n=a!==!1&&hv(n)}while(n&&(!a||a(n,o))&&n!==Object.prototype);return o},KQ=(n,o,a)=>{n=String(n),(a===void 0||a>n.length)&&(a=n.length),a-=o.length;const d=n.indexOf(o,a);return d!==-1&&d===a},QQ=n=>{if(!n)return null;if(Sl(n))return n;let o=n.length;if(!uP(o))return null;const a=new Array(o);for(;o-- >0;)a[o]=n[o];return a},YQ=(n=>o=>n&&o instanceof n)(typeof Uint8Array<"u"&&hv(Uint8Array)),ZQ=(n,o)=>{const d=(n&&n[Symbol.iterator]).call(n);let h;for(;(h=d.next())&&!h.done;){const p=h.value;o.call(n,p[0],p[1])}},JQ=(n,o)=>{let a;const d=[];for(;(a=n.exec(o))!==null;)d.push(a);return d},XQ=fo("HTMLFormElement"),eY=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(a,d,h){return d.toUpperCase()+h}),HT=(({hasOwnProperty:n})=>(o,a)=>n.call(o,a))(Object.prototype),tY=fo("RegExp"),mP=(n,o)=>{const a=Object.getOwnPropertyDescriptors(n),d={};Kd(a,(h,p)=>{let m;(m=o(h,p,n))!==!1&&(d[p]=m||h)}),Object.defineProperties(n,d)},nY=n=>{mP(n,(o,a)=>{if(Vr(n)&&["arguments","caller","callee"].indexOf(a)!==-1)return!1;const d=n[a];if(Vr(d)){if(o.enumerable=!1,"writable"in o){o.writable=!1;return}o.set||(o.set=()=>{throw Error("Can not rewrite read-only method '"+a+"'")})}})},rY=(n,o)=>{const a={},d=h=>{h.forEach(p=>{a[p]=!0})};return Sl(n)?d(n):d(String(n).split(o)),a},oY=()=>{},iY=(n,o)=>n!=null&&Number.isFinite(n=+n)?n:o,hb="abcdefghijklmnopqrstuvwxyz",$T="0123456789",gP={DIGIT:$T,ALPHA:hb,ALPHA_DIGIT:hb+hb.toUpperCase()+$T},sY=(n=16,o=gP.ALPHA_DIGIT)=>{let a="";const{length:d}=o;for(;n--;)a+=o[Math.random()*d|0];return a};function aY(n){return!!(n&&Vr(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const lY=n=>{const o=new Array(10),a=(d,h)=>{if(Zp(d)){if(o.indexOf(d)>=0)return;if(!("toJSON"in d)){o[h]=d;const p=Sl(d)?[]:{};return Kd(d,(m,w)=>{const g=a(m,h+1);!Od(g)&&(p[w]=g)}),o[h]=void 0,p}}return d};return a(n,0)},cY=fo("AsyncFunction"),dY=n=>n&&(Zp(n)||Vr(n))&&Vr(n.then)&&Vr(n.catch),ae={isArray:Sl,isArrayBuffer:dP,isBuffer:DQ,isFormData:LQ,isArrayBufferView:TQ,isString:IQ,isNumber:uP,isBoolean:MQ,isObject:Zp,isPlainObject:cf,isReadableStream:zQ,isRequest:FQ,isResponse:VQ,isHeaders:UQ,isUndefined:Od,isDate:PQ,isFile:BQ,isBlob:NQ,isRegExp:tY,isFunction:Vr,isStream:RQ,isURLSearchParams:jQ,isTypedArray:YQ,isFileList:OQ,forEach:Kd,merge:O0,extend:$Q,trim:HQ,stripBOM:WQ,inherits:qQ,toFlatObject:GQ,kindOf:Qp,kindOfTest:fo,endsWith:KQ,toArray:QQ,forEachEntry:ZQ,matchAll:JQ,isHTMLForm:XQ,hasOwnProperty:HT,hasOwnProp:HT,reduceDescriptors:mP,freezeMethods:nY,toObjectSet:rY,toCamelCase:eY,noop:oY,toFiniteNumber:iY,findKey:hP,global:fP,isContextDefined:pP,ALPHABET:gP,generateString:sY,isSpecCompliantForm:aY,toJSONObject:lY,isAsyncFn:cY,isThenable:dY};function $e(n,o,a,d,h){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",o&&(this.code=o),a&&(this.config=a),d&&(this.request=d),h&&(this.response=h)}ae.inherits($e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ae.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const kP=$e.prototype,bP={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{bP[n]={value:n}});Object.defineProperties($e,bP);Object.defineProperty(kP,"isAxiosError",{value:!0});$e.from=(n,o,a,d,h,p)=>{const m=Object.create(kP);return ae.toFlatObject(n,m,function(g){return g!==Error.prototype},w=>w!=="isAxiosError"),$e.call(m,n.message,o,a,d,h),m.cause=n,m.name=n.name,p&&Object.assign(m,p),m};const uY=null;function R0(n){return ae.isPlainObject(n)||ae.isArray(n)}function wP(n){return ae.endsWith(n,"[]")?n.slice(0,-2):n}function WT(n,o,a){return n?n.concat(o).map(function(h,p){return h=wP(h),!a&&p?"["+h+"]":h}).join(a?".":""):o}function hY(n){return ae.isArray(n)&&!n.some(R0)}const fY=ae.toFlatObject(ae,{},null,function(o){return/^is[A-Z]/.test(o)});function Jp(n,o,a){if(!ae.isObject(n))throw new TypeError("target must be an object");o=o||new FormData,a=ae.toFlatObject(a,{metaTokens:!0,dots:!1,indexes:!1},!1,function(I,N){return!ae.isUndefined(N[I])});const d=a.metaTokens,h=a.visitor||C,p=a.dots,m=a.indexes,g=(a.Blob||typeof Blob<"u"&&Blob)&&ae.isSpecCompliantForm(o);if(!ae.isFunction(h))throw new TypeError("visitor must be a function");function A(S){if(S===null)return"";if(ae.isDate(S))return S.toISOString();if(!g&&ae.isBlob(S))throw new $e("Blob is not supported. Use a Buffer instead.");return ae.isArrayBuffer(S)||ae.isTypedArray(S)?g&&typeof Blob=="function"?new Blob([S]):Buffer.from(S):S}function C(S,I,N){let P=S;if(S&&!N&&typeof S=="object"){if(ae.endsWith(I,"{}"))I=d?I:I.slice(0,-2),S=JSON.stringify(S);else if(ae.isArray(S)&&hY(S)||(ae.isFileList(S)||ae.endsWith(I,"[]"))&&(P=ae.toArray(S)))return I=wP(I),P.forEach(function(O,L){!(ae.isUndefined(O)||O===null)&&o.append(m===!0?WT([I],L,p):m===null?I:I+"[]",A(O))}),!1}return R0(S)?!0:(o.append(WT(N,I,p),A(S)),!1)}const y=[],v=Object.assign(fY,{defaultVisitor:C,convertValue:A,isVisitable:R0});function x(S,I){if(!ae.isUndefined(S)){if(y.indexOf(S)!==-1)throw Error("Circular reference detected in "+I.join("."));y.push(S),ae.forEach(S,function(P,B){(!(ae.isUndefined(P)||P===null)&&h.call(o,P,ae.isString(B)?B.trim():B,I,v))===!0&&x(P,I?I.concat(B):[B])}),y.pop()}}if(!ae.isObject(n))throw new TypeError("data must be an object");return x(n),o}function qT(n){const o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(d){return o[d]})}function fv(n,o){this._pairs=[],n&&Jp(n,this,o)}const vP=fv.prototype;vP.append=function(o,a){this._pairs.push([o,a])};vP.toString=function(o){const a=o?function(d){return o.call(this,d,qT)}:qT;return this._pairs.map(function(h){return a(h[0])+"="+a(h[1])},"").join("&")};function pY(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function AP(n,o,a){if(!o)return n;const d=a&&a.encode||pY,h=a&&a.serialize;let p;if(h?p=h(o,a):p=ae.isURLSearchParams(o)?o.toString():new fv(o,a).toString(d),p){const m=n.indexOf("#");m!==-1&&(n=n.slice(0,m)),n+=(n.indexOf("?")===-1?"?":"&")+p}return n}class GT{constructor(){this.handlers=[]}use(o,a,d){return this.handlers.push({fulfilled:o,rejected:a,synchronous:d?d.synchronous:!1,runWhen:d?d.runWhen:null}),this.handlers.length-1}eject(o){this.handlers[o]&&(this.handlers[o]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(o){ae.forEach(this.handlers,function(d){d!==null&&o(d)})}}const _P={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},mY=typeof URLSearchParams<"u"?URLSearchParams:fv,gY=typeof FormData<"u"?FormData:null,kY=typeof Blob<"u"?Blob:null,bY={isBrowser:!0,classes:{URLSearchParams:mY,FormData:gY,Blob:kY},protocols:["http","https","file","blob","url","data"]},pv=typeof window<"u"&&typeof document<"u",wY=(n=>pv&&["ReactNative","NativeScript","NS"].indexOf(n)<0)(typeof navigator<"u"&&navigator.product),vY=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",AY=pv&&window.location.href||"http://localhost",_Y=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pv,hasStandardBrowserEnv:wY,hasStandardBrowserWebWorkerEnv:vY,origin:AY},Symbol.toStringTag,{value:"Module"})),lo={..._Y,...bY};function CY(n,o){return Jp(n,new lo.classes.URLSearchParams,Object.assign({visitor:function(a,d,h,p){return lo.isNode&&ae.isBuffer(a)?(this.append(d,a.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)}},o))}function yY(n){return ae.matchAll(/\w+|\[(\w*)]/g,n).map(o=>o[0]==="[]"?"":o[1]||o[0])}function xY(n){const o={},a=Object.keys(n);let d;const h=a.length;let p;for(d=0;d<h;d++)p=a[d],o[p]=n[p];return o}function CP(n){function o(a,d,h,p){let m=a[p++];if(m==="__proto__")return!0;const w=Number.isFinite(+m),g=p>=a.length;return m=!m&&ae.isArray(h)?h.length:m,g?(ae.hasOwnProp(h,m)?h[m]=[h[m],d]:h[m]=d,!w):((!h[m]||!ae.isObject(h[m]))&&(h[m]=[]),o(a,d,h[m],p)&&ae.isArray(h[m])&&(h[m]=xY(h[m])),!w)}if(ae.isFormData(n)&&ae.isFunction(n.entries)){const a={};return ae.forEachEntry(n,(d,h)=>{o(yY(d),h,a,0)}),a}return null}function EY(n,o,a){if(ae.isString(n))try{return(o||JSON.parse)(n),ae.trim(n)}catch(d){if(d.name!=="SyntaxError")throw d}return(a||JSON.stringify)(n)}const Qd={transitional:_P,adapter:["xhr","http","fetch"],transformRequest:[function(o,a){const d=a.getContentType()||"",h=d.indexOf("application/json")>-1,p=ae.isObject(o);if(p&&ae.isHTMLForm(o)&&(o=new FormData(o)),ae.isFormData(o))return h?JSON.stringify(CP(o)):o;if(ae.isArrayBuffer(o)||ae.isBuffer(o)||ae.isStream(o)||ae.isFile(o)||ae.isBlob(o)||ae.isReadableStream(o))return o;if(ae.isArrayBufferView(o))return o.buffer;if(ae.isURLSearchParams(o))return a.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();let w;if(p){if(d.indexOf("application/x-www-form-urlencoded")>-1)return CY(o,this.formSerializer).toString();if((w=ae.isFileList(o))||d.indexOf("multipart/form-data")>-1){const g=this.env&&this.env.FormData;return Jp(w?{"files[]":o}:o,g&&new g,this.formSerializer)}}return p||h?(a.setContentType("application/json",!1),EY(o)):o}],transformResponse:[function(o){const a=this.transitional||Qd.transitional,d=a&&a.forcedJSONParsing,h=this.responseType==="json";if(ae.isResponse(o)||ae.isReadableStream(o))return o;if(o&&ae.isString(o)&&(d&&!this.responseType||h)){const m=!(a&&a.silentJSONParsing)&&h;try{return JSON.parse(o)}catch(w){if(m)throw w.name==="SyntaxError"?$e.from(w,$e.ERR_BAD_RESPONSE,this,null,this.response):w}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:lo.classes.FormData,Blob:lo.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ae.forEach(["delete","get","head","post","put","patch"],n=>{Qd.headers[n]={}});const SY=ae.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),DY=n=>{const o={};let a,d,h;return n&&n.split(`
`).forEach(function(m){h=m.indexOf(":"),a=m.substring(0,h).trim().toLowerCase(),d=m.substring(h+1).trim(),!(!a||o[a]&&SY[a])&&(a==="set-cookie"?o[a]?o[a].push(d):o[a]=[d]:o[a]=o[a]?o[a]+", "+d:d)}),o},KT=Symbol("internals");function Pc(n){return n&&String(n).trim().toLowerCase()}function df(n){return n===!1||n==null?n:ae.isArray(n)?n.map(df):String(n)}function TY(n){const o=Object.create(null),a=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let d;for(;d=a.exec(n);)o[d[1]]=d[2];return o}const IY=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function fb(n,o,a,d,h){if(ae.isFunction(d))return d.call(this,o,a);if(h&&(o=a),!!ae.isString(o)){if(ae.isString(d))return o.indexOf(d)!==-1;if(ae.isRegExp(d))return d.test(o)}}function MY(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(o,a,d)=>a.toUpperCase()+d)}function PY(n,o){const a=ae.toCamelCase(" "+o);["get","set","has"].forEach(d=>{Object.defineProperty(n,d+a,{value:function(h,p,m){return this[d].call(this,o,h,p,m)},configurable:!0})})}class ir{constructor(o){o&&this.set(o)}set(o,a,d){const h=this;function p(w,g,A){const C=Pc(g);if(!C)throw new Error("header name must be a non-empty string");const y=ae.findKey(h,C);(!y||h[y]===void 0||A===!0||A===void 0&&h[y]!==!1)&&(h[y||g]=df(w))}const m=(w,g)=>ae.forEach(w,(A,C)=>p(A,C,g));if(ae.isPlainObject(o)||o instanceof this.constructor)m(o,a);else if(ae.isString(o)&&(o=o.trim())&&!IY(o))m(DY(o),a);else if(ae.isHeaders(o))for(const[w,g]of o.entries())p(g,w,d);else o!=null&&p(a,o,d);return this}get(o,a){if(o=Pc(o),o){const d=ae.findKey(this,o);if(d){const h=this[d];if(!a)return h;if(a===!0)return TY(h);if(ae.isFunction(a))return a.call(this,h,d);if(ae.isRegExp(a))return a.exec(h);throw new TypeError("parser must be boolean|regexp|function")}}}has(o,a){if(o=Pc(o),o){const d=ae.findKey(this,o);return!!(d&&this[d]!==void 0&&(!a||fb(this,this[d],d,a)))}return!1}delete(o,a){const d=this;let h=!1;function p(m){if(m=Pc(m),m){const w=ae.findKey(d,m);w&&(!a||fb(d,d[w],w,a))&&(delete d[w],h=!0)}}return ae.isArray(o)?o.forEach(p):p(o),h}clear(o){const a=Object.keys(this);let d=a.length,h=!1;for(;d--;){const p=a[d];(!o||fb(this,this[p],p,o,!0))&&(delete this[p],h=!0)}return h}normalize(o){const a=this,d={};return ae.forEach(this,(h,p)=>{const m=ae.findKey(d,p);if(m){a[m]=df(h),delete a[p];return}const w=o?MY(p):String(p).trim();w!==p&&delete a[p],a[w]=df(h),d[w]=!0}),this}concat(...o){return this.constructor.concat(this,...o)}toJSON(o){const a=Object.create(null);return ae.forEach(this,(d,h)=>{d!=null&&d!==!1&&(a[h]=o&&ae.isArray(d)?d.join(", "):d)}),a}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([o,a])=>o+": "+a).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(o){return o instanceof this?o:new this(o)}static concat(o,...a){const d=new this(o);return a.forEach(h=>d.set(h)),d}static accessor(o){const d=(this[KT]=this[KT]={accessors:{}}).accessors,h=this.prototype;function p(m){const w=Pc(m);d[w]||(PY(h,m),d[w]=!0)}return ae.isArray(o)?o.forEach(p):p(o),this}}ir.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ae.reduceDescriptors(ir.prototype,({value:n},o)=>{let a=o[0].toUpperCase()+o.slice(1);return{get:()=>n,set(d){this[a]=d}}});ae.freezeMethods(ir);function pb(n,o){const a=this||Qd,d=o||a,h=ir.from(d.headers);let p=d.data;return ae.forEach(n,function(w){p=w.call(a,p,h.normalize(),o?o.status:void 0)}),h.normalize(),p}function yP(n){return!!(n&&n.__CANCEL__)}function Dl(n,o,a){$e.call(this,n??"canceled",$e.ERR_CANCELED,o,a),this.name="CanceledError"}ae.inherits(Dl,$e,{__CANCEL__:!0});function xP(n,o,a){const d=a.config.validateStatus;!a.status||!d||d(a.status)?n(a):o(new $e("Request failed with status code "+a.status,[$e.ERR_BAD_REQUEST,$e.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))}function BY(n){const o=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return o&&o[1]||""}function NY(n,o){n=n||10;const a=new Array(n),d=new Array(n);let h=0,p=0,m;return o=o!==void 0?o:1e3,function(g){const A=Date.now(),C=d[p];m||(m=A),a[h]=g,d[h]=A;let y=p,v=0;for(;y!==h;)v+=a[y++],y=y%n;if(h=(h+1)%n,h===p&&(p=(p+1)%n),A-m<o)return;const x=C&&A-C;return x?Math.round(v*1e3/x):void 0}}function OY(n,o){let a=0;const d=1e3/o;let h=null;return function(){const m=this===!0,w=Date.now();if(m||w-a>d)return h&&(clearTimeout(h),h=null),a=w,n.apply(null,arguments);h||(h=setTimeout(()=>(h=null,a=Date.now(),n.apply(null,arguments)),d-(w-a)))}}const Jf=(n,o,a=3)=>{let d=0;const h=NY(50,250);return OY(p=>{const m=p.loaded,w=p.lengthComputable?p.total:void 0,g=m-d,A=h(g),C=m<=w;d=m;const y={loaded:m,total:w,progress:w?m/w:void 0,bytes:g,rate:A||void 0,estimated:A&&w&&C?(w-m)/A:void 0,event:p,lengthComputable:w!=null};y[o?"download":"upload"]=!0,n(y)},a)},RY=lo.hasStandardBrowserEnv?function(){const o=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");let d;function h(p){let m=p;return o&&(a.setAttribute("href",m),m=a.href),a.setAttribute("href",m),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return d=h(window.location.href),function(m){const w=ae.isString(m)?h(m):m;return w.protocol===d.protocol&&w.host===d.host}}():function(){return function(){return!0}}(),LY=lo.hasStandardBrowserEnv?{write(n,o,a,d,h,p){const m=[n+"="+encodeURIComponent(o)];ae.isNumber(a)&&m.push("expires="+new Date(a).toGMTString()),ae.isString(d)&&m.push("path="+d),ae.isString(h)&&m.push("domain="+h),p===!0&&m.push("secure"),document.cookie=m.join("; ")},read(n){const o=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return o?decodeURIComponent(o[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function jY(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function zY(n,o){return o?n.replace(/\/?\/$/,"")+"/"+o.replace(/^\/+/,""):n}function EP(n,o){return n&&!jY(o)?zY(n,o):o}const QT=n=>n instanceof ir?{...n}:n;function Qs(n,o){o=o||{};const a={};function d(A,C,y){return ae.isPlainObject(A)&&ae.isPlainObject(C)?ae.merge.call({caseless:y},A,C):ae.isPlainObject(C)?ae.merge({},C):ae.isArray(C)?C.slice():C}function h(A,C,y){if(ae.isUndefined(C)){if(!ae.isUndefined(A))return d(void 0,A,y)}else return d(A,C,y)}function p(A,C){if(!ae.isUndefined(C))return d(void 0,C)}function m(A,C){if(ae.isUndefined(C)){if(!ae.isUndefined(A))return d(void 0,A)}else return d(void 0,C)}function w(A,C,y){if(y in o)return d(A,C);if(y in n)return d(void 0,A)}const g={url:p,method:p,data:p,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutMessage:m,withCredentials:m,withXSRFToken:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,responseEncoding:m,validateStatus:w,headers:(A,C)=>h(QT(A),QT(C),!0)};return ae.forEach(Object.keys(Object.assign({},n,o)),function(C){const y=g[C]||h,v=y(n[C],o[C],C);ae.isUndefined(v)&&y!==w||(a[C]=v)}),a}const SP=n=>{const o=Qs({},n);let{data:a,withXSRFToken:d,xsrfHeaderName:h,xsrfCookieName:p,headers:m,auth:w}=o;o.headers=m=ir.from(m),o.url=AP(EP(o.baseURL,o.url),n.params,n.paramsSerializer),w&&m.set("Authorization","Basic "+btoa((w.username||"")+":"+(w.password?unescape(encodeURIComponent(w.password)):"")));let g;if(ae.isFormData(a)){if(lo.hasStandardBrowserEnv||lo.hasStandardBrowserWebWorkerEnv)m.setContentType(void 0);else if((g=m.getContentType())!==!1){const[A,...C]=g?g.split(";").map(y=>y.trim()).filter(Boolean):[];m.setContentType([A||"multipart/form-data",...C].join("; "))}}if(lo.hasStandardBrowserEnv&&(d&&ae.isFunction(d)&&(d=d(o)),d||d!==!1&&RY(o.url))){const A=h&&p&&LY.read(p);A&&m.set(h,A)}return o},FY=typeof XMLHttpRequest<"u",VY=FY&&function(n){return new Promise(function(a,d){const h=SP(n);let p=h.data;const m=ir.from(h.headers).normalize();let{responseType:w}=h,g;function A(){h.cancelToken&&h.cancelToken.unsubscribe(g),h.signal&&h.signal.removeEventListener("abort",g)}let C=new XMLHttpRequest;C.open(h.method.toUpperCase(),h.url,!0),C.timeout=h.timeout;function y(){if(!C)return;const x=ir.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),I={data:!w||w==="text"||w==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:x,config:n,request:C};xP(function(P){a(P),A()},function(P){d(P),A()},I),C=null}"onloadend"in C?C.onloadend=y:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(y)},C.onabort=function(){C&&(d(new $e("Request aborted",$e.ECONNABORTED,h,C)),C=null)},C.onerror=function(){d(new $e("Network Error",$e.ERR_NETWORK,h,C)),C=null},C.ontimeout=function(){let S=h.timeout?"timeout of "+h.timeout+"ms exceeded":"timeout exceeded";const I=h.transitional||_P;h.timeoutErrorMessage&&(S=h.timeoutErrorMessage),d(new $e(S,I.clarifyTimeoutError?$e.ETIMEDOUT:$e.ECONNABORTED,h,C)),C=null},p===void 0&&m.setContentType(null),"setRequestHeader"in C&&ae.forEach(m.toJSON(),function(S,I){C.setRequestHeader(I,S)}),ae.isUndefined(h.withCredentials)||(C.withCredentials=!!h.withCredentials),w&&w!=="json"&&(C.responseType=h.responseType),typeof h.onDownloadProgress=="function"&&C.addEventListener("progress",Jf(h.onDownloadProgress,!0)),typeof h.onUploadProgress=="function"&&C.upload&&C.upload.addEventListener("progress",Jf(h.onUploadProgress)),(h.cancelToken||h.signal)&&(g=x=>{C&&(d(!x||x.type?new Dl(null,n,C):x),C.abort(),C=null)},h.cancelToken&&h.cancelToken.subscribe(g),h.signal&&(h.signal.aborted?g():h.signal.addEventListener("abort",g)));const v=BY(h.url);if(v&&lo.protocols.indexOf(v)===-1){d(new $e("Unsupported protocol "+v+":",$e.ERR_BAD_REQUEST,n));return}C.send(p||null)})},UY=(n,o)=>{let a=new AbortController,d;const h=function(g){if(!d){d=!0,m();const A=g instanceof Error?g:this.reason;a.abort(A instanceof $e?A:new Dl(A instanceof Error?A.message:A))}};let p=o&&setTimeout(()=>{h(new $e(`timeout ${o} of ms exceeded`,$e.ETIMEDOUT))},o);const m=()=>{n&&(p&&clearTimeout(p),p=null,n.forEach(g=>{g&&(g.removeEventListener?g.removeEventListener("abort",h):g.unsubscribe(h))}),n=null)};n.forEach(g=>g&&g.addEventListener&&g.addEventListener("abort",h));const{signal:w}=a;return w.unsubscribe=m,[w,()=>{p&&clearTimeout(p),p=null}]},HY=function*(n,o){let a=n.byteLength;if(!o||a<o){yield n;return}let d=0,h;for(;d<a;)h=d+o,yield n.slice(d,h),d=h},$Y=async function*(n,o,a){for await(const d of n)yield*HY(ArrayBuffer.isView(d)?d:await a(String(d)),o)},YT=(n,o,a,d,h)=>{const p=$Y(n,o,h);let m=0;return new ReadableStream({type:"bytes",async pull(w){const{done:g,value:A}=await p.next();if(g){w.close(),d();return}let C=A.byteLength;a&&a(m+=C),w.enqueue(new Uint8Array(A))},cancel(w){return d(w),p.return()}},{highWaterMark:2})},ZT=(n,o)=>{const a=n!=null;return d=>setTimeout(()=>o({lengthComputable:a,total:n,loaded:d}))},Xp=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",DP=Xp&&typeof ReadableStream=="function",L0=Xp&&(typeof TextEncoder=="function"?(n=>o=>n.encode(o))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),WY=DP&&(()=>{let n=!1;const o=new Request(lo.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!o})(),JT=64*1024,j0=DP&&!!(()=>{try{return ae.isReadableStream(new Response("").body)}catch{}})(),Xf={stream:j0&&(n=>n.body)};Xp&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(o=>{!Xf[o]&&(Xf[o]=ae.isFunction(n[o])?a=>a[o]():(a,d)=>{throw new $e(`Response type '${o}' is not supported`,$e.ERR_NOT_SUPPORT,d)})})})(new Response);const qY=async n=>{if(n==null)return 0;if(ae.isBlob(n))return n.size;if(ae.isSpecCompliantForm(n))return(await new Request(n).arrayBuffer()).byteLength;if(ae.isArrayBufferView(n))return n.byteLength;if(ae.isURLSearchParams(n)&&(n=n+""),ae.isString(n))return(await L0(n)).byteLength},GY=async(n,o)=>{const a=ae.toFiniteNumber(n.getContentLength());return a??qY(o)},KY=Xp&&(async n=>{let{url:o,method:a,data:d,signal:h,cancelToken:p,timeout:m,onDownloadProgress:w,onUploadProgress:g,responseType:A,headers:C,withCredentials:y="same-origin",fetchOptions:v}=SP(n);A=A?(A+"").toLowerCase():"text";let[x,S]=h||p||m?UY([h,p],m):[],I,N;const P=()=>{!I&&setTimeout(()=>{x&&x.unsubscribe()}),I=!0};let B;try{if(g&&WY&&a!=="get"&&a!=="head"&&(B=await GY(C,d))!==0){let F=new Request(o,{method:"POST",body:d,duplex:"half"}),D;ae.isFormData(d)&&(D=F.headers.get("content-type"))&&C.setContentType(D),F.body&&(d=YT(F.body,JT,ZT(B,Jf(g)),null,L0))}ae.isString(y)||(y=y?"cors":"omit"),N=new Request(o,{...v,signal:x,method:a.toUpperCase(),headers:C.normalize().toJSON(),body:d,duplex:"half",withCredentials:y});let O=await fetch(N);const L=j0&&(A==="stream"||A==="response");if(j0&&(w||L)){const F={};["status","statusText","headers"].forEach(z=>{F[z]=O[z]});const D=ae.toFiniteNumber(O.headers.get("content-length"));O=new Response(YT(O.body,JT,w&&ZT(D,Jf(w,!0)),L&&P,L0),F)}A=A||"text";let V=await Xf[ae.findKey(Xf,A)||"text"](O,n);return!L&&P(),S&&S(),await new Promise((F,D)=>{xP(F,D,{data:V,headers:ir.from(O.headers),status:O.status,statusText:O.statusText,config:n,request:N})})}catch(O){throw P(),O&&O.name==="TypeError"&&/fetch/i.test(O.message)?Object.assign(new $e("Network Error",$e.ERR_NETWORK,n,N),{cause:O.cause||O}):$e.from(O,O&&O.code,n,N)}}),z0={http:uY,xhr:VY,fetch:KY};ae.forEach(z0,(n,o)=>{if(n){try{Object.defineProperty(n,"name",{value:o})}catch{}Object.defineProperty(n,"adapterName",{value:o})}});const XT=n=>`- ${n}`,QY=n=>ae.isFunction(n)||n===null||n===!1,TP={getAdapter:n=>{n=ae.isArray(n)?n:[n];const{length:o}=n;let a,d;const h={};for(let p=0;p<o;p++){a=n[p];let m;if(d=a,!QY(a)&&(d=z0[(m=String(a)).toLowerCase()],d===void 0))throw new $e(`Unknown adapter '${m}'`);if(d)break;h[m||"#"+p]=d}if(!d){const p=Object.entries(h).map(([w,g])=>`adapter ${w} `+(g===!1?"is not supported by the environment":"is not available in the build"));let m=o?p.length>1?`since :
`+p.map(XT).join(`
`):" "+XT(p[0]):"as no adapter specified";throw new $e("There is no suitable adapter to dispatch the request "+m,"ERR_NOT_SUPPORT")}return d},adapters:z0};function mb(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Dl(null,n)}function eI(n){return mb(n),n.headers=ir.from(n.headers),n.data=pb.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),TP.getAdapter(n.adapter||Qd.adapter)(n).then(function(d){return mb(n),d.data=pb.call(n,n.transformResponse,d),d.headers=ir.from(d.headers),d},function(d){return yP(d)||(mb(n),d&&d.response&&(d.response.data=pb.call(n,n.transformResponse,d.response),d.response.headers=ir.from(d.response.headers))),Promise.reject(d)})}const IP="1.7.2",mv={};["object","boolean","number","function","string","symbol"].forEach((n,o)=>{mv[n]=function(d){return typeof d===n||"a"+(o<1?"n ":" ")+n}});const tI={};mv.transitional=function(o,a,d){function h(p,m){return"[Axios v"+IP+"] Transitional option '"+p+"'"+m+(d?". "+d:"")}return(p,m,w)=>{if(o===!1)throw new $e(h(m," has been removed"+(a?" in "+a:"")),$e.ERR_DEPRECATED);return a&&!tI[m]&&(tI[m]=!0,console.warn(h(m," has been deprecated since v"+a+" and will be removed in the near future"))),o?o(p,m,w):!0}};function YY(n,o,a){if(typeof n!="object")throw new $e("options must be an object",$e.ERR_BAD_OPTION_VALUE);const d=Object.keys(n);let h=d.length;for(;h-- >0;){const p=d[h],m=o[p];if(m){const w=n[p],g=w===void 0||m(w,p,n);if(g!==!0)throw new $e("option "+p+" must be "+g,$e.ERR_BAD_OPTION_VALUE);continue}if(a!==!0)throw new $e("Unknown option "+p,$e.ERR_BAD_OPTION)}}const F0={assertOptions:YY,validators:mv},Ci=F0.validators;class Vs{constructor(o){this.defaults=o,this.interceptors={request:new GT,response:new GT}}async request(o,a){try{return await this._request(o,a)}catch(d){if(d instanceof Error){let h;Error.captureStackTrace?Error.captureStackTrace(h={}):h=new Error;const p=h.stack?h.stack.replace(/^.+\n/,""):"";try{d.stack?p&&!String(d.stack).endsWith(p.replace(/^.+\n.+\n/,""))&&(d.stack+=`
`+p):d.stack=p}catch{}}throw d}}_request(o,a){typeof o=="string"?(a=a||{},a.url=o):a=o||{},a=Qs(this.defaults,a);const{transitional:d,paramsSerializer:h,headers:p}=a;d!==void 0&&F0.assertOptions(d,{silentJSONParsing:Ci.transitional(Ci.boolean),forcedJSONParsing:Ci.transitional(Ci.boolean),clarifyTimeoutError:Ci.transitional(Ci.boolean)},!1),h!=null&&(ae.isFunction(h)?a.paramsSerializer={serialize:h}:F0.assertOptions(h,{encode:Ci.function,serialize:Ci.function},!0)),a.method=(a.method||this.defaults.method||"get").toLowerCase();let m=p&&ae.merge(p.common,p[a.method]);p&&ae.forEach(["delete","get","head","post","put","patch","common"],S=>{delete p[S]}),a.headers=ir.concat(m,p);const w=[];let g=!0;this.interceptors.request.forEach(function(I){typeof I.runWhen=="function"&&I.runWhen(a)===!1||(g=g&&I.synchronous,w.unshift(I.fulfilled,I.rejected))});const A=[];this.interceptors.response.forEach(function(I){A.push(I.fulfilled,I.rejected)});let C,y=0,v;if(!g){const S=[eI.bind(this),void 0];for(S.unshift.apply(S,w),S.push.apply(S,A),v=S.length,C=Promise.resolve(a);y<v;)C=C.then(S[y++],S[y++]);return C}v=w.length;let x=a;for(y=0;y<v;){const S=w[y++],I=w[y++];try{x=S(x)}catch(N){I.call(this,N);break}}try{C=eI.call(this,x)}catch(S){return Promise.reject(S)}for(y=0,v=A.length;y<v;)C=C.then(A[y++],A[y++]);return C}getUri(o){o=Qs(this.defaults,o);const a=EP(o.baseURL,o.url);return AP(a,o.params,o.paramsSerializer)}}ae.forEach(["delete","get","head","options"],function(o){Vs.prototype[o]=function(a,d){return this.request(Qs(d||{},{method:o,url:a,data:(d||{}).data}))}});ae.forEach(["post","put","patch"],function(o){function a(d){return function(p,m,w){return this.request(Qs(w||{},{method:o,headers:d?{"Content-Type":"multipart/form-data"}:{},url:p,data:m}))}}Vs.prototype[o]=a(),Vs.prototype[o+"Form"]=a(!0)});class gv{constructor(o){if(typeof o!="function")throw new TypeError("executor must be a function.");let a;this.promise=new Promise(function(p){a=p});const d=this;this.promise.then(h=>{if(!d._listeners)return;let p=d._listeners.length;for(;p-- >0;)d._listeners[p](h);d._listeners=null}),this.promise.then=h=>{let p;const m=new Promise(w=>{d.subscribe(w),p=w}).then(h);return m.cancel=function(){d.unsubscribe(p)},m},o(function(p,m,w){d.reason||(d.reason=new Dl(p,m,w),a(d.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(o){if(this.reason){o(this.reason);return}this._listeners?this._listeners.push(o):this._listeners=[o]}unsubscribe(o){if(!this._listeners)return;const a=this._listeners.indexOf(o);a!==-1&&this._listeners.splice(a,1)}static source(){let o;return{token:new gv(function(h){o=h}),cancel:o}}}function ZY(n){return function(a){return n.apply(null,a)}}function JY(n){return ae.isObject(n)&&n.isAxiosError===!0}const V0={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(V0).forEach(([n,o])=>{V0[o]=n});function MP(n){const o=new Vs(n),a=cP(Vs.prototype.request,o);return ae.extend(a,Vs.prototype,o,{allOwnKeys:!0}),ae.extend(a,o,null,{allOwnKeys:!0}),a.create=function(h){return MP(Qs(n,h))},a}const lt=MP(Qd);lt.Axios=Vs;lt.CanceledError=Dl;lt.CancelToken=gv;lt.isCancel=yP;lt.VERSION=IP;lt.toFormData=Jp;lt.AxiosError=$e;lt.Cancel=lt.CanceledError;lt.all=function(o){return Promise.all(o)};lt.spread=ZY;lt.isAxiosError=JY;lt.mergeConfig=Qs;lt.AxiosHeaders=ir;lt.formToJSON=n=>CP(ae.isHTMLForm(n)?new FormData(n):n);lt.getAdapter=TP.getAdapter;lt.HttpStatusCode=V0;lt.default=lt;const XY=()=>{const n=No();return q.useEffect(()=>{const o=async()=>{try{const{data:d}=await lt.post("/api/v1/users/refresh-token")}catch(d){console.error("Error refreshing access token:",d)}};o();const a=setInterval(o,30*60*1e3);return()=>{clearInterval(a)}},[n]),U.jsxs("div",{className:"bg-black",children:[U.jsx("div",{className:"",children:U.jsx(EQ,{})}),U.jsxs("div",{className:"",children:[U.jsx(w0,{className:"px-[1rem] h-[2rem] py-[2rem]"}),U.jsx(V3,{})]})]})},eZ={posts:[]},tZ=Si({name:"posts",initialState:eZ,reducers:{addPost:(n,o)=>{n.posts.push(o.payload)},deletePost:(n,o)=>{n.posts=n.posts.filter(a=>a.id!==o.payload)},setPosts:(n,o)=>{n.posts=o.payload}}}),nZ=tZ.reducer,rZ=uK({reducer:{auth:xQ,[id.reducerPath]:id.reducer,posts:nZ},middleware:n=>n().concat(id.middleware),devTools:!0});function Zi(){return U.jsx("div",{children:U.jsx("h1",{className:"text-white",children:"Wait loading your data"})})}const oZ=()=>{const[n,o]=q.useState(""),[a,d]=q.useState(""),[h,p]=q.useState(!1),m=No(),w=Cr(),[g,{isLoading:A}]=kQ(),{userInfo:C}=$r(v=>v.auth);q.useEffect(()=>{C&&w("/profile")},[w,C]);const y=async v=>{v.preventDefault();try{const x=await g({email:n,password:a}).unwrap();console.log(x),m(El({...x})),w("/profile"),Ve.success("login successfully"),p(!0)}catch(x){x.status===401?Ve.error("Invalid Password"):Ve.error("User does not exist"),p(!1)}};return U.jsx("div",{className:" flex items-center justify-center mt-[5rem] md:w-[100%] md:h-[100%]",children:U.jsxs("div",{className:"md:w-[100%]  md:max-w-[25%] space-y-6 bg-black shadow-md rounded-md text-white",children:[U.jsx("h1",{className:"text-2xl font-bold text-center",children:"Sign In"}),U.jsxs("form",{onSubmit:y,children:[U.jsxs("div",{className:"mb-2",children:[U.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-400",children:"Email Address"}),U.jsx("input",{type:"email",id:"email",className:"w-full p-2 mt-1 border border-gray-300 rounded-md text-black",placeholder:"Enter email",value:n,onChange:v=>o(v.target.value)})]}),U.jsxs("div",{className:"mb-3",children:[U.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-400",children:"Password"}),U.jsx("input",{type:"password",id:"password",className:"w-full p-2 mt-1 border border-gray-300 rounded-md text-black",placeholder:"Enter password",value:a,onChange:v=>d(v.target.value)})]}),h?"Loging....":U.jsx("button",{type:"submit",disabled:A,className:"w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 md:max-w-[40%] md:ml-[8vw]",children:"Sign In"})]}),A&&U.jsx(Zi,{}),U.jsx("div",{className:"text-center",children:U.jsxs("p",{children:["New Customer?"," ",U.jsx(fn,{to:"/register",className:"text-blue-600",children:"Register"})]})})]})})},iZ=()=>{const[n,o]=q.useState(""),[a,d]=q.useState(""),[h,p]=q.useState(""),[m,w]=q.useState(""),[g,A]=q.useState(""),[C,y]=q.useState(null);No();const v=Cr(),[x,{isLoading:S}]=wQ(),{userInfo:I}=$r(P=>P.auth);q.useEffect(()=>{I&&v("/login")},[v,I]);const N=async P=>{var B;if(P.preventDefault(),h!==m)Ve.error("Passwords do not match");else try{const O=new FormData;O.append("fullName",n),O.append("email",a),O.append("password",h),O.append("username",g),C&&O.append("avatar",C);const L=await x(O).unwrap();Ve.success("User registered successfully"),v("/login")}catch(O){Ve.error(((B=O==null?void 0:O.data)==null?void 0:B.message)||O.error)}};return U.jsx("div",{className:"grid place-content-center min-h-screen  text-white px-[4vw] md:mt-[5rem]",children:U.jsxs("div",{className:"w-full max-w-md p-6 space-y-6  rounded-lg shadow-lg",children:[U.jsx("h1",{className:"text-2xl font-bold text-center",children:"Sign-Up"}),U.jsxs("form",{onSubmit:N,className:"space-y-4",children:[U.jsxs("div",{children:[U.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Full Name"}),U.jsx("input",{type:"text",placeholder:"Enter name",value:n,onChange:P=>o(P.target.value),className:"w-full p-2 mt-1 border border-gray-600 rounded  text-black"})]}),U.jsxs("div",{children:[U.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Email Address"}),U.jsx("input",{type:"email",placeholder:"Enter email",value:a,onChange:P=>d(P.target.value),className:"w-full p-2 mt-1 border border-gray-600 rounded text-black "})]}),U.jsxs("div",{children:[U.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Username"}),U.jsx("input",{type:"text",placeholder:"Enter username",value:g,onChange:P=>A(P.target.value),className:"w-full p-2 mt-1 border border-gray-600 rounded text-black"})]}),U.jsxs("div",{children:[U.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Password"}),U.jsx("input",{type:"password",placeholder:"Enter password",value:h,onChange:P=>p(P.target.value),className:"w-full p-2 mt-1 border border-gray-600 rounded text-black"})]}),U.jsxs("div",{children:[U.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Confirm Password"}),U.jsx("input",{type:"password",placeholder:"Confirm password",value:m,onChange:P=>w(P.target.value),className:"w-full p-2 mt-1 border border-gray-600 rounded text-black"})]}),U.jsxs("div",{children:[U.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Avatar"}),U.jsx("input",{type:"file",onChange:P=>y(P.target.files[0]),className:"w-full p-2 mt-1 border border-gray-600 rounded bg-gray-300 text-black"})]}),U.jsx("button",{type:"submit",className:"w-full py-2 px-4 mt-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 disabled:opacity-50",disabled:S,children:"Register"}),S&&U.jsx(Zi,{})]}),U.jsx("div",{className:"pt-4 text-center",children:U.jsxs("span",{className:"text-sm text-gray-400",children:["Already have an account?"," ",U.jsx(fn,{to:"/login",className:"text-blue-500",children:"Login"})]})})]})})};var PP={},kv={},bv={};Object.defineProperty(bv,"__esModule",{value:!0});var nI="html",rI="head",Uh="body",sZ=/<([a-zA-Z]+[0-9]?)/,oI=/<head[^]*>/i,iI=/<body[^]*>/i,ep=function(n,o){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},U0=function(n,o){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},sI=typeof window=="object"&&window.DOMParser;if(typeof sI=="function"){var aZ=new sI,lZ="text/html";U0=function(n,o){return o&&(n="<".concat(o,">").concat(n,"</").concat(o,">")),aZ.parseFromString(n,lZ)},ep=U0}if(typeof document=="object"&&document.implementation){var Hh=document.implementation.createHTMLDocument();ep=function(n,o){if(o){var a=Hh.documentElement.querySelector(o);return a&&(a.innerHTML=n),Hh}return Hh.documentElement.innerHTML=n,Hh}}var $h=typeof document=="object"&&document.createElement("template"),H0;$h&&$h.content&&(H0=function(n){return $h.innerHTML=n,$h.content.childNodes});function cZ(n){var o,a,d=n.match(sZ),h=d&&d[1]?d[1].toLowerCase():"";switch(h){case nI:{var p=U0(n);if(!oI.test(n)){var m=p.querySelector(rI);(o=m==null?void 0:m.parentNode)===null||o===void 0||o.removeChild(m)}if(!iI.test(n)){var m=p.querySelector(Uh);(a=m==null?void 0:m.parentNode)===null||a===void 0||a.removeChild(m)}return p.querySelectorAll(nI)}case rI:case Uh:{var w=ep(n).querySelectorAll(h);return iI.test(n)&&oI.test(n)?w[0].parentNode.childNodes:w}default:{if(H0)return H0(n);var m=ep(n,Uh).querySelector(Uh);return m.childNodes}}}bv.default=cZ;var gl={},wv={},vv={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.Doctype=n.CDATA=n.Tag=n.Style=n.Script=n.Comment=n.Directive=n.Text=n.Root=n.isTag=n.ElementType=void 0;var o;(function(d){d.Root="root",d.Text="text",d.Directive="directive",d.Comment="comment",d.Script="script",d.Style="style",d.Tag="tag",d.CDATA="cdata",d.Doctype="doctype"})(o=n.ElementType||(n.ElementType={}));function a(d){return d.type===o.Tag||d.type===o.Script||d.type===o.Style}n.isTag=a,n.Root=o.Root,n.Text=o.Text,n.Directive=o.Directive,n.Comment=o.Comment,n.Script=o.Script,n.Style=o.Style,n.Tag=o.Tag,n.CDATA=o.CDATA,n.Doctype=o.Doctype})(vv);var Ye={},rs=Bt&&Bt.__extends||function(){var n=function(o,a){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,h){d.__proto__=h}||function(d,h){for(var p in h)Object.prototype.hasOwnProperty.call(h,p)&&(d[p]=h[p])},n(o,a)};return function(o,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");n(o,a);function d(){this.constructor=o}o.prototype=a===null?Object.create(a):(d.prototype=a.prototype,new d)}}(),sd=Bt&&Bt.__assign||function(){return sd=Object.assign||function(n){for(var o,a=1,d=arguments.length;a<d;a++){o=arguments[a];for(var h in o)Object.prototype.hasOwnProperty.call(o,h)&&(n[h]=o[h])}return n},sd.apply(this,arguments)};Object.defineProperty(Ye,"__esModule",{value:!0});Ye.cloneNode=Ye.hasChildren=Ye.isDocument=Ye.isDirective=Ye.isComment=Ye.isText=Ye.isCDATA=Ye.isTag=Ye.Element=Ye.Document=Ye.CDATA=Ye.NodeWithChildren=Ye.ProcessingInstruction=Ye.Comment=Ye.Text=Ye.DataNode=Ye.Node=void 0;var sr=vv,Av=function(){function n(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(n.prototype,"parentNode",{get:function(){return this.parent},set:function(o){this.parent=o},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"previousSibling",{get:function(){return this.prev},set:function(o){this.prev=o},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"nextSibling",{get:function(){return this.next},set:function(o){this.next=o},enumerable:!1,configurable:!0}),n.prototype.cloneNode=function(o){return o===void 0&&(o=!1),_v(this,o)},n}();Ye.Node=Av;var em=function(n){rs(o,n);function o(a){var d=n.call(this)||this;return d.data=a,d}return Object.defineProperty(o.prototype,"nodeValue",{get:function(){return this.data},set:function(a){this.data=a},enumerable:!1,configurable:!0}),o}(Av);Ye.DataNode=em;var BP=function(n){rs(o,n);function o(){var a=n!==null&&n.apply(this,arguments)||this;return a.type=sr.ElementType.Text,a}return Object.defineProperty(o.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),o}(em);Ye.Text=BP;var NP=function(n){rs(o,n);function o(){var a=n!==null&&n.apply(this,arguments)||this;return a.type=sr.ElementType.Comment,a}return Object.defineProperty(o.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),o}(em);Ye.Comment=NP;var OP=function(n){rs(o,n);function o(a,d){var h=n.call(this,d)||this;return h.name=a,h.type=sr.ElementType.Directive,h}return Object.defineProperty(o.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),o}(em);Ye.ProcessingInstruction=OP;var tm=function(n){rs(o,n);function o(a){var d=n.call(this)||this;return d.children=a,d}return Object.defineProperty(o.prototype,"firstChild",{get:function(){var a;return(a=this.children[0])!==null&&a!==void 0?a:null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"childNodes",{get:function(){return this.children},set:function(a){this.children=a},enumerable:!1,configurable:!0}),o}(Av);Ye.NodeWithChildren=tm;var RP=function(n){rs(o,n);function o(){var a=n!==null&&n.apply(this,arguments)||this;return a.type=sr.ElementType.CDATA,a}return Object.defineProperty(o.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),o}(tm);Ye.CDATA=RP;var LP=function(n){rs(o,n);function o(){var a=n!==null&&n.apply(this,arguments)||this;return a.type=sr.ElementType.Root,a}return Object.defineProperty(o.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),o}(tm);Ye.Document=LP;var jP=function(n){rs(o,n);function o(a,d,h,p){h===void 0&&(h=[]),p===void 0&&(p=a==="script"?sr.ElementType.Script:a==="style"?sr.ElementType.Style:sr.ElementType.Tag);var m=n.call(this,h)||this;return m.name=a,m.attribs=d,m.type=p,m}return Object.defineProperty(o.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"tagName",{get:function(){return this.name},set:function(a){this.name=a},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"attributes",{get:function(){var a=this;return Object.keys(this.attribs).map(function(d){var h,p;return{name:d,value:a.attribs[d],namespace:(h=a["x-attribsNamespace"])===null||h===void 0?void 0:h[d],prefix:(p=a["x-attribsPrefix"])===null||p===void 0?void 0:p[d]}})},enumerable:!1,configurable:!0}),o}(tm);Ye.Element=jP;function zP(n){return(0,sr.isTag)(n)}Ye.isTag=zP;function FP(n){return n.type===sr.ElementType.CDATA}Ye.isCDATA=FP;function VP(n){return n.type===sr.ElementType.Text}Ye.isText=VP;function UP(n){return n.type===sr.ElementType.Comment}Ye.isComment=UP;function HP(n){return n.type===sr.ElementType.Directive}Ye.isDirective=HP;function $P(n){return n.type===sr.ElementType.Root}Ye.isDocument=$P;function dZ(n){return Object.prototype.hasOwnProperty.call(n,"children")}Ye.hasChildren=dZ;function _v(n,o){o===void 0&&(o=!1);var a;if(VP(n))a=new BP(n.data);else if(UP(n))a=new NP(n.data);else if(zP(n)){var d=o?gb(n.children):[],h=new jP(n.name,sd({},n.attribs),d);d.forEach(function(g){return g.parent=h}),n.namespace!=null&&(h.namespace=n.namespace),n["x-attribsNamespace"]&&(h["x-attribsNamespace"]=sd({},n["x-attribsNamespace"])),n["x-attribsPrefix"]&&(h["x-attribsPrefix"]=sd({},n["x-attribsPrefix"])),a=h}else if(FP(n)){var d=o?gb(n.children):[],p=new RP(d);d.forEach(function(A){return A.parent=p}),a=p}else if($P(n)){var d=o?gb(n.children):[],m=new LP(d);d.forEach(function(A){return A.parent=m}),n["x-mode"]&&(m["x-mode"]=n["x-mode"]),a=m}else if(HP(n)){var w=new OP(n.name,n.data);n["x-name"]!=null&&(w["x-name"]=n["x-name"],w["x-publicId"]=n["x-publicId"],w["x-systemId"]=n["x-systemId"]),a=w}else throw new Error("Not implemented yet: ".concat(n.type));return a.startIndex=n.startIndex,a.endIndex=n.endIndex,n.sourceCodeLocation!=null&&(a.sourceCodeLocation=n.sourceCodeLocation),a}Ye.cloneNode=_v;function gb(n){for(var o=n.map(function(d){return _v(d,!0)}),a=1;a<o.length;a++)o[a].prev=o[a-1],o[a-1].next=o[a];return o}(function(n){var o=Bt&&Bt.__createBinding||(Object.create?function(w,g,A,C){C===void 0&&(C=A);var y=Object.getOwnPropertyDescriptor(g,A);(!y||("get"in y?!g.__esModule:y.writable||y.configurable))&&(y={enumerable:!0,get:function(){return g[A]}}),Object.defineProperty(w,C,y)}:function(w,g,A,C){C===void 0&&(C=A),w[C]=g[A]}),a=Bt&&Bt.__exportStar||function(w,g){for(var A in w)A!=="default"&&!Object.prototype.hasOwnProperty.call(g,A)&&o(g,w,A)};Object.defineProperty(n,"__esModule",{value:!0}),n.DomHandler=void 0;var d=vv,h=Ye;a(Ye,n);var p={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},m=function(){function w(g,A,C){this.dom=[],this.root=new h.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof A=="function"&&(C=A,A=p),typeof g=="object"&&(A=g,g=void 0),this.callback=g??null,this.options=A??p,this.elementCB=C??null}return w.prototype.onparserinit=function(g){this.parser=g},w.prototype.onreset=function(){this.dom=[],this.root=new h.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},w.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},w.prototype.onerror=function(g){this.handleCallback(g)},w.prototype.onclosetag=function(){this.lastNode=null;var g=this.tagStack.pop();this.options.withEndIndices&&(g.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(g)},w.prototype.onopentag=function(g,A){var C=this.options.xmlMode?d.ElementType.Tag:void 0,y=new h.Element(g,A,void 0,C);this.addNode(y),this.tagStack.push(y)},w.prototype.ontext=function(g){var A=this.lastNode;if(A&&A.type===d.ElementType.Text)A.data+=g,this.options.withEndIndices&&(A.endIndex=this.parser.endIndex);else{var C=new h.Text(g);this.addNode(C),this.lastNode=C}},w.prototype.oncomment=function(g){if(this.lastNode&&this.lastNode.type===d.ElementType.Comment){this.lastNode.data+=g;return}var A=new h.Comment(g);this.addNode(A),this.lastNode=A},w.prototype.oncommentend=function(){this.lastNode=null},w.prototype.oncdatastart=function(){var g=new h.Text(""),A=new h.CDATA([g]);this.addNode(A),g.parent=A,this.lastNode=g},w.prototype.oncdataend=function(){this.lastNode=null},w.prototype.onprocessinginstruction=function(g,A){var C=new h.ProcessingInstruction(g,A);this.addNode(C)},w.prototype.handleCallback=function(g){if(typeof this.callback=="function")this.callback(g,this.dom);else if(g)throw g},w.prototype.addNode=function(g){var A=this.tagStack[this.tagStack.length-1],C=A.children[A.children.length-1];this.options.withStartIndices&&(g.startIndex=this.parser.startIndex),this.options.withEndIndices&&(g.endIndex=this.parser.endIndex),A.children.push(g),C&&(g.prev=C,C.next=g),g.parent=A,this.lastNode=null},w}();n.DomHandler=m,n.default=m})(wv);var WP={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.CASE_SENSITIVE_TAG_NAMES_MAP=n.CASE_SENSITIVE_TAG_NAMES=void 0,n.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],n.CASE_SENSITIVE_TAG_NAMES_MAP=n.CASE_SENSITIVE_TAG_NAMES.reduce(function(o,a){return o[a.toLowerCase()]=a,o},{})})(WP);Object.defineProperty(gl,"__esModule",{value:!0});gl.formatDOM=gl.formatAttributes=void 0;var Wh=wv,uZ=WP;function hZ(n){return uZ.CASE_SENSITIVE_TAG_NAMES_MAP[n]}function qP(n){for(var o={},a=0,d=n.length;a<d;a++){var h=n[a];o[h.name]=h.value}return o}gl.formatAttributes=qP;function fZ(n){n=n.toLowerCase();var o=hZ(n);return o||n}function GP(n,o,a){o===void 0&&(o=null);for(var d=[],h,p=0,m=n.length;p<m;p++){var w=n[p];switch(w.nodeType){case 1:{var g=fZ(w.nodeName);h=new Wh.Element(g,qP(w.attributes)),h.children=GP(g==="template"?w.content.childNodes:w.childNodes,h);break}case 3:h=new Wh.Text(w.nodeValue);break;case 8:h=new Wh.Comment(w.nodeValue);break;default:continue}var A=d[p-1]||null;A&&(A.next=h),h.parent=o,h.prev=A,h.next=null,d.push(h)}return a&&(h=new Wh.ProcessingInstruction(a.substring(0,a.indexOf(" ")).toLowerCase(),a),h.next=d[0]||null,h.parent=o,d.unshift(h),d[1]&&(d[1].prev=d[0])),d}gl.formatDOM=GP;var pZ=Bt&&Bt.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(kv,"__esModule",{value:!0});var mZ=pZ(bv),gZ=gl,kZ=/<(![a-zA-Z\s]+)>/;function bZ(n){if(typeof n!="string")throw new TypeError("First argument must be a string");if(!n)return[];var o=n.match(kZ),a=o?o[1]:void 0;return(0,gZ.formatDOM)((0,mZ.default)(n),null,a)}kv.default=bZ;var nm={},po={},rm={},wZ=0;rm.SAME=wZ;var vZ=1;rm.CAMELCASE=vZ;rm.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1};const KP=0,os=1,om=2,im=3,Cv=4,QP=5,YP=6;function AZ(n){return Sn.hasOwnProperty(n)?Sn[n]:null}function Hn(n,o,a,d,h,p,m){this.acceptsBooleans=o===om||o===im||o===Cv,this.attributeName=d,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=o,this.sanitizeURL=p,this.removeEmptyString=m}const Sn={},_Z=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];_Z.forEach(n=>{Sn[n]=new Hn(n,KP,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([n,o])=>{Sn[n]=new Hn(n,os,!1,o,null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(n=>{Sn[n]=new Hn(n,om,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(n=>{Sn[n]=new Hn(n,om,!1,n,null,!1,!1)});["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(n=>{Sn[n]=new Hn(n,im,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(n=>{Sn[n]=new Hn(n,im,!0,n,null,!1,!1)});["capture","download"].forEach(n=>{Sn[n]=new Hn(n,Cv,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(n=>{Sn[n]=new Hn(n,YP,!1,n,null,!1,!1)});["rowSpan","start"].forEach(n=>{Sn[n]=new Hn(n,QP,!1,n.toLowerCase(),null,!1,!1)});const yv=/[\-\:]([a-z])/g,xv=n=>n[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(n=>{const o=n.replace(yv,xv);Sn[o]=new Hn(o,os,!1,n,null,!1,!1)});["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(n=>{const o=n.replace(yv,xv);Sn[o]=new Hn(o,os,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(n=>{const o=n.replace(yv,xv);Sn[o]=new Hn(o,os,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(n=>{Sn[n]=new Hn(n,os,!1,n.toLowerCase(),null,!1,!1)});const CZ="xlinkHref";Sn[CZ]=new Hn("xlinkHref",os,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(n=>{Sn[n]=new Hn(n,os,!1,n.toLowerCase(),null,!0,!0)});const{CAMELCASE:yZ,SAME:xZ,possibleStandardNames:aI}=rm,EZ=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",SZ=EZ+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",DZ=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+SZ+"]*$")),TZ=Object.keys(aI).reduce((n,o)=>{const a=aI[o];return a===xZ?n[o]=o:a===yZ?n[o.toLowerCase()]=o:n[o]=a,n},{});po.BOOLEAN=im;po.BOOLEANISH_STRING=om;po.NUMERIC=QP;po.OVERLOADED_BOOLEAN=Cv;po.POSITIVE_NUMERIC=YP;po.RESERVED=KP;po.STRING=os;po.getPropertyInfo=AZ;po.isCustomAttribute=DZ;po.possibleStandardNames=TZ;var Ev={},Sv={},lI=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,IZ=/\n/g,MZ=/^\s*/,PZ=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,BZ=/^:\s*/,NZ=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,OZ=/^[;\s]*/,RZ=/^\s+|\s+$/g,LZ=`
`,cI="/",dI="*",Ps="",jZ="comment",zZ="declaration",FZ=function(n,o){if(typeof n!="string")throw new TypeError("First argument must be a string");if(!n)return[];o=o||{};var a=1,d=1;function h(S){var I=S.match(IZ);I&&(a+=I.length);var N=S.lastIndexOf(LZ);d=~N?S.length-N:d+S.length}function p(){var S={line:a,column:d};return function(I){return I.position=new m(S),A(),I}}function m(S){this.start=S,this.end={line:a,column:d},this.source=o.source}m.prototype.content=n;function w(S){var I=new Error(o.source+":"+a+":"+d+": "+S);if(I.reason=S,I.filename=o.source,I.line=a,I.column=d,I.source=n,!o.silent)throw I}function g(S){var I=S.exec(n);if(I){var N=I[0];return h(N),n=n.slice(N.length),I}}function A(){g(MZ)}function C(S){var I;for(S=S||[];I=y();)I!==!1&&S.push(I);return S}function y(){var S=p();if(!(cI!=n.charAt(0)||dI!=n.charAt(1))){for(var I=2;Ps!=n.charAt(I)&&(dI!=n.charAt(I)||cI!=n.charAt(I+1));)++I;if(I+=2,Ps===n.charAt(I-1))return w("End of comment missing");var N=n.slice(2,I-2);return d+=2,h(N),n=n.slice(I),d+=2,S({type:jZ,comment:N})}}function v(){var S=p(),I=g(PZ);if(I){if(y(),!g(BZ))return w("property missing ':'");var N=g(NZ),P=S({type:zZ,property:uI(I[0].replace(lI,Ps)),value:N?uI(N[0].replace(lI,Ps)):Ps});return g(OZ),P}}function x(){var S=[];C(S);for(var I;I=v();)I!==!1&&(S.push(I),C(S));return S}return A(),x()};function uI(n){return n?n.replace(RZ,Ps):Ps}var VZ=Bt&&Bt.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Sv,"__esModule",{value:!0});var UZ=VZ(FZ);function HZ(n,o){var a=null;if(!n||typeof n!="string")return a;var d=(0,UZ.default)(n),h=typeof o=="function";return d.forEach(function(p){if(p.type==="declaration"){var m=p.property,w=p.value;h?o(m,w,p):w&&(a=a||{},a[m]=w)}}),a}Sv.default=HZ;var sm={};Object.defineProperty(sm,"__esModule",{value:!0});sm.camelCase=void 0;var $Z=/^--[a-zA-Z0-9-]+$/,WZ=/-([a-z])/g,qZ=/^[^-]+$/,GZ=/^-(webkit|moz|ms|o|khtml)-/,KZ=/^-(ms)-/,QZ=function(n){return!n||qZ.test(n)||$Z.test(n)},YZ=function(n,o){return o.toUpperCase()},hI=function(n,o){return"".concat(o,"-")},ZZ=function(n,o){return o===void 0&&(o={}),QZ(n)?n:(n=n.toLowerCase(),o.reactCompat?n=n.replace(KZ,hI):n=n.replace(GZ,hI),n.replace(WZ,YZ))};sm.camelCase=ZZ;var JZ=Bt&&Bt.__importDefault||function(n){return n&&n.__esModule?n:{default:n}},XZ=JZ(Sv),eJ=sm;function $0(n,o){var a={};return!n||typeof n!="string"||(0,XZ.default)(n,function(d,h){d&&h&&(a[(0,eJ.camelCase)(d,o)]=h)}),a}$0.default=$0;var tJ=$0;(function(n){var o=Bt&&Bt.__importDefault||function(C){return C&&C.__esModule?C:{default:C}};Object.defineProperty(n,"__esModule",{value:!0}),n.returnFirstArg=n.canTextBeChildOfNode=n.ELEMENTS_WITH_NO_TEXT_CHILDREN=n.PRESERVE_CUSTOM_ATTRIBUTES=n.setStyleProp=n.isCustomComponent=void 0;var a=q,d=o(tJ),h=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function p(C,y){return C.includes("-")?!h.has(C):!!(y&&typeof y.is=="string")}n.isCustomComponent=p;var m={reactCompat:!0};function w(C,y){if(typeof C=="string"){if(!C.trim()){y.style={};return}try{y.style=(0,d.default)(C,m)}catch{y.style={}}}}n.setStyleProp=w,n.PRESERVE_CUSTOM_ATTRIBUTES=Number(a.version.split(".")[0])>=16,n.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);var g=function(C){return!n.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(C.name)};n.canTextBeChildOfNode=g;var A=function(C){return C};n.returnFirstArg=A})(Ev);Object.defineProperty(nm,"__esModule",{value:!0});var Hc=po,fI=Ev,nJ=["checked","value"],rJ=["input","select","textarea"],oJ={reset:!0,submit:!0};function iJ(n,o){n===void 0&&(n={});var a={},d=!!(n.type&&oJ[n.type]);for(var h in n){var p=n[h];if((0,Hc.isCustomAttribute)(h)){a[h]=p;continue}var m=h.toLowerCase(),w=pI(m);if(w){var g=(0,Hc.getPropertyInfo)(w);switch(nJ.includes(w)&&rJ.includes(o)&&!d&&(w=pI("default"+m)),a[w]=p,g&&g.type){case Hc.BOOLEAN:a[w]=!0;break;case Hc.OVERLOADED_BOOLEAN:p===""&&(a[w]=!0);break}continue}fI.PRESERVE_CUSTOM_ATTRIBUTES&&(a[h]=p)}return(0,fI.setStyleProp)(n.style,a),a}nm.default=iJ;function pI(n){return Hc.possibleStandardNames[n]}var Dv={},sJ=Bt&&Bt.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Dv,"__esModule",{value:!0});var kb=q,aJ=sJ(nm),ad=Ev,lJ={cloneElement:kb.cloneElement,createElement:kb.createElement,isValidElement:kb.isValidElement};function ZP(n,o){o===void 0&&(o={});for(var a=[],d=typeof o.replace=="function",h=o.transform||ad.returnFirstArg,p=o.library||lJ,m=p.cloneElement,w=p.createElement,g=p.isValidElement,A=n.length,C=0;C<A;C++){var y=n[C];if(d){var v=o.replace(y,C);if(g(v)){A>1&&(v=m(v,{key:v.key||C})),a.push(h(v,y,C));continue}}if(y.type==="text"){var x=!y.data.trim().length;if(x&&y.parent&&!(0,ad.canTextBeChildOfNode)(y.parent)||o.trim&&x)continue;a.push(h(y.data,y,C));continue}var S=y,I={};cJ(S)?((0,ad.setStyleProp)(S.attribs.style,S.attribs),I=S.attribs):S.attribs&&(I=(0,aJ.default)(S.attribs,S.name));var N=void 0;switch(y.type){case"script":case"style":y.children[0]&&(I.dangerouslySetInnerHTML={__html:y.children[0].data});break;case"tag":y.name==="textarea"&&y.children[0]?I.defaultValue=y.children[0].data:y.children&&y.children.length&&(N=ZP(y.children,o));break;default:continue}A>1&&(I.key=C),a.push(h(w(y.name,I,N),y,C))}return a.length===1?a[0]:a}Dv.default=ZP;function cJ(n){return ad.PRESERVE_CUSTOM_ATTRIBUTES&&n.type==="tag"&&(0,ad.isCustomComponent)(n.name,n.attribs)}(function(n){var o=Bt&&Bt.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(n,"__esModule",{value:!0}),n.htmlToDOM=n.domToReact=n.attributesToProps=n.Text=n.ProcessingInstruction=n.Element=n.Comment=void 0;var a=o(kv);n.htmlToDOM=a.default;var d=o(nm);n.attributesToProps=d.default;var h=o(Dv);n.domToReact=h.default;var p=wv;Object.defineProperty(n,"Comment",{enumerable:!0,get:function(){return p.Comment}}),Object.defineProperty(n,"Element",{enumerable:!0,get:function(){return p.Element}}),Object.defineProperty(n,"ProcessingInstruction",{enumerable:!0,get:function(){return p.ProcessingInstruction}}),Object.defineProperty(n,"Text",{enumerable:!0,get:function(){return p.Text}});var m={lowerCaseAttributeNames:!1};function w(g,A){if(typeof g!="string")throw new TypeError("First argument must be a string");return g?(0,h.default)((0,a.default)(g,(A==null?void 0:A.htmlparser2)||m),A):[]}n.default=w})(PP);const mI=np(PP),kl=mI.default||mI;function yn(n){const o=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&o==="[object Date]"?new n.constructor(+n):typeof n=="number"||o==="[object Number]"||typeof n=="string"||o==="[object String]"?new Date(n):new Date(NaN)}function dJ(n,o){return n instanceof Date?new n.constructor(o):new Date(o)}const qh=43200,gI=1440;let uJ={};function hJ(){return uJ}function kI(n){const o=yn(n),a=new Date(Date.UTC(o.getFullYear(),o.getMonth(),o.getDate(),o.getHours(),o.getMinutes(),o.getSeconds(),o.getMilliseconds()));return a.setUTCFullYear(o.getFullYear()),+n-+a}function uf(n,o){const a=yn(n),d=yn(o),h=a.getTime()-d.getTime();return h<0?-1:h>0?1:h}function fJ(n){return dJ(n,Date.now())}function pJ(n,o){const a=yn(n),d=yn(o),h=a.getFullYear()-d.getFullYear(),p=a.getMonth()-d.getMonth();return h*12+p}function mJ(n){return o=>{const d=(n?Math[n]:Math.trunc)(o);return d===0?0:d}}function gJ(n,o){return+yn(n)-+yn(o)}function kJ(n){const o=yn(n);return o.setHours(23,59,59,999),o}function bJ(n){const o=yn(n),a=o.getMonth();return o.setFullYear(o.getFullYear(),a+1,0),o.setHours(23,59,59,999),o}function wJ(n){const o=yn(n);return+kJ(o)==+bJ(o)}function vJ(n,o){const a=yn(n),d=yn(o),h=uf(a,d),p=Math.abs(pJ(a,d));let m;if(p<1)m=0;else{a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-h*p);let w=uf(a,d)===-h;wJ(yn(n))&&p===1&&uf(n,d)===1&&(w=!1),m=h*(p-Number(w))}return m===0?0:m}function AJ(n,o,a){const d=gJ(n,o)/1e3;return mJ(a==null?void 0:a.roundingMethod)(d)}const _J={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},CJ=(n,o,a)=>{let d;const h=_J[n];return typeof h=="string"?d=h:o===1?d=h.one:d=h.other.replace("{{count}}",o.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+d:d+" ago":d};function bb(n){return(o={})=>{const a=o.width?String(o.width):n.defaultWidth;return n.formats[a]||n.formats[n.defaultWidth]}}const yJ={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},xJ={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},EJ={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},SJ={date:bb({formats:yJ,defaultWidth:"full"}),time:bb({formats:xJ,defaultWidth:"full"}),dateTime:bb({formats:EJ,defaultWidth:"full"})},DJ={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},TJ=(n,o,a,d)=>DJ[n];function Bc(n){return(o,a)=>{const d=a!=null&&a.context?String(a.context):"standalone";let h;if(d==="formatting"&&n.formattingValues){const m=n.defaultFormattingWidth||n.defaultWidth,w=a!=null&&a.width?String(a.width):m;h=n.formattingValues[w]||n.formattingValues[m]}else{const m=n.defaultWidth,w=a!=null&&a.width?String(a.width):n.defaultWidth;h=n.values[w]||n.values[m]}const p=n.argumentCallback?n.argumentCallback(o):o;return h[p]}}const IJ={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},MJ={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},PJ={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},BJ={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},NJ={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},OJ={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},RJ=(n,o)=>{const a=Number(n),d=a%100;if(d>20||d<10)switch(d%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},LJ={ordinalNumber:RJ,era:Bc({values:IJ,defaultWidth:"wide"}),quarter:Bc({values:MJ,defaultWidth:"wide",argumentCallback:n=>n-1}),month:Bc({values:PJ,defaultWidth:"wide"}),day:Bc({values:BJ,defaultWidth:"wide"}),dayPeriod:Bc({values:NJ,defaultWidth:"wide",formattingValues:OJ,defaultFormattingWidth:"wide"})};function Nc(n){return(o,a={})=>{const d=a.width,h=d&&n.matchPatterns[d]||n.matchPatterns[n.defaultMatchWidth],p=o.match(h);if(!p)return null;const m=p[0],w=d&&n.parsePatterns[d]||n.parsePatterns[n.defaultParseWidth],g=Array.isArray(w)?zJ(w,y=>y.test(m)):jJ(w,y=>y.test(m));let A;A=n.valueCallback?n.valueCallback(g):g,A=a.valueCallback?a.valueCallback(A):A;const C=o.slice(m.length);return{value:A,rest:C}}}function jJ(n,o){for(const a in n)if(Object.prototype.hasOwnProperty.call(n,a)&&o(n[a]))return a}function zJ(n,o){for(let a=0;a<n.length;a++)if(o(n[a]))return a}function FJ(n){return(o,a={})=>{const d=o.match(n.matchPattern);if(!d)return null;const h=d[0],p=o.match(n.parsePattern);if(!p)return null;let m=n.valueCallback?n.valueCallback(p[0]):p[0];m=a.valueCallback?a.valueCallback(m):m;const w=o.slice(h.length);return{value:m,rest:w}}}const VJ=/^(\d+)(th|st|nd|rd)?/i,UJ=/\d+/i,HJ={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},$J={any:[/^b/i,/^(a|c)/i]},WJ={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},qJ={any:[/1/i,/2/i,/3/i,/4/i]},GJ={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},KJ={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},QJ={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},YJ={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ZJ={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},JJ={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},XJ={ordinalNumber:FJ({matchPattern:VJ,parsePattern:UJ,valueCallback:n=>parseInt(n,10)}),era:Nc({matchPatterns:HJ,defaultMatchWidth:"wide",parsePatterns:$J,defaultParseWidth:"any"}),quarter:Nc({matchPatterns:WJ,defaultMatchWidth:"wide",parsePatterns:qJ,defaultParseWidth:"any",valueCallback:n=>n+1}),month:Nc({matchPatterns:GJ,defaultMatchWidth:"wide",parsePatterns:KJ,defaultParseWidth:"any"}),day:Nc({matchPatterns:QJ,defaultMatchWidth:"wide",parsePatterns:YJ,defaultParseWidth:"any"}),dayPeriod:Nc({matchPatterns:ZJ,defaultMatchWidth:"any",parsePatterns:JJ,defaultParseWidth:"any"})},eX={code:"en-US",formatDistance:CJ,formatLong:SJ,formatRelative:TJ,localize:LJ,match:XJ,options:{weekStartsOn:0,firstWeekContainsDate:1}};function tX(n,o,a){const d=hJ(),h=(a==null?void 0:a.locale)??d.locale??eX,p=2520,m=uf(n,o);if(isNaN(m))throw new RangeError("Invalid time value");const w=Object.assign({},a,{addSuffix:a==null?void 0:a.addSuffix,comparison:m});let g,A;m>0?(g=yn(o),A=yn(n)):(g=yn(n),A=yn(o));const C=AJ(A,g),y=(kI(A)-kI(g))/1e3,v=Math.round((C-y)/60);let x;if(v<2)return a!=null&&a.includeSeconds?C<5?h.formatDistance("lessThanXSeconds",5,w):C<10?h.formatDistance("lessThanXSeconds",10,w):C<20?h.formatDistance("lessThanXSeconds",20,w):C<40?h.formatDistance("halfAMinute",0,w):C<60?h.formatDistance("lessThanXMinutes",1,w):h.formatDistance("xMinutes",1,w):v===0?h.formatDistance("lessThanXMinutes",1,w):h.formatDistance("xMinutes",v,w);if(v<45)return h.formatDistance("xMinutes",v,w);if(v<90)return h.formatDistance("aboutXHours",1,w);if(v<gI){const S=Math.round(v/60);return h.formatDistance("aboutXHours",S,w)}else{if(v<p)return h.formatDistance("xDays",1,w);if(v<qh){const S=Math.round(v/gI);return h.formatDistance("xDays",S,w)}else if(v<qh*2)return x=Math.round(v/qh),h.formatDistance("aboutXMonths",x,w)}if(x=vJ(A,g),x<12){const S=Math.round(v/qh);return h.formatDistance("xMonths",S,w)}else{const S=x%12,I=Math.trunc(x/12);return S<3?h.formatDistance("aboutXYears",I,w):S<9?h.formatDistance("overXYears",I,w):h.formatDistance("almostXYears",I+1,w)}}function Tv(n,o){return tX(n,fJ(n),o)}const nX=()=>{var A,C;const[n,o]=q.useState(null),[a,d]=q.useState(!0),[h,p]=q.useState([]),{userInfo:m}=$r(y=>y.auth);Cr(),q.useEffect(()=>{(async()=>{d(!0);try{const{data:v}=await lt.get("api/v1/users/posts");console.log(v.data[0]),o(v.data[0]),p(v.data[0].posts),d(!1)}catch(v){console.error(v),d(!1)}})()},[m]);const w=y=>{const v=["January","February","March","April","May","June","July","August","September","October","November","December"],x=new Date(y),S=v[x.getMonth()],I=x.getFullYear().toString().slice(2);return`${S} ${I}`},g=y=>Tv(new Date(y),{addSuffix:!0});return U.jsx("div",{className:"Profile",children:a?U.jsx("div",{className:"text-white",children:U.jsx("h1",{children:"Waiting... fetch your data "})}):U.jsxs("div",{children:[U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:"",children:[U.jsxs("div",{className:"relative",style:{height:"15rem "},children:[n!=null&&n.coverImage?U.jsx("img",{src:n==null?void 0:n.coverImage,alt:"Cover",className:"w-full h-full object-cover border-b-[1.5px] border-gray-300 rounded-[1rem]"}):U.jsx("div",{className:"w-full h-full bg-blue-500 border-b-[1.5px] border-gray-300 rounded-[1rem] blur-lg"}),U.jsx("span",{className:"absolute bottom-1 right-2",children:U.jsx(fn,{to:"/editcover",className:"bg-white text-black grid place-content-center rounded-full w-[3rem] h-[3rem]",children:U.jsx(H5,{})})})]}),U.jsxs("div",{className:"Avatar",children:[U.jsx("img",{src:(n==null?void 0:n.avatar)||"",alt:"Avatar",className:"border-4 rounded-full w-20 h-20 object-cover border-gray-500"}),U.jsx("span",{className:"ml-2",children:U.jsx(fn,{to:"/editavatar",className:"bg-white text-black rounded-full Pen ",children:U.jsx(H5,{})})})]})]}),U.jsxs("div",{className:"",children:[U.jsxs("section",{className:"Info  md:mt-[2rem] md:mx-[2rem]",children:[U.jsxs("div",{children:[U.jsx("h1",{className:"text-white text-2xl font-semibold",children:n==null?void 0:n.fullName}),U.jsxs("p",{className:"text-gray-400 text-[1.2rem]",children:["@",n==null?void 0:n.username]})]}),U.jsx("button",{className:"bg-blue-500 text-white rounded Edit-btn md:px-[2rem] md:mt-[1rem] md:py-[.4rem]",children:U.jsx(fn,{to:"/editprofile",className:"text-white no-underline",children:"Edit Profile"})})]}),U.jsx("section",{className:"Bio md:mt-[2rem] md:mx-[2rem]",children:U.jsx("div",{className:"text-white rounded shadow-md Bio-area",children:kl((n==null?void 0:n.bio)||"")})}),U.jsxs("section",{className:"text-gray-500 Joined md:mt-[2rem] md:mx-[2rem] md:flex md:items-center",children:[U.jsx(x3,{className:"mr-2"}),"Joined ",w(n==null?void 0:n.createdAt)]}),U.jsxs("section",{className:"text-gray-500 Follow md:mt-[2rem] md:mx-[2rem] md:flex md:items-center md:gap-5",children:[U.jsxs("div",{children:[U.jsx("span",{className:"font-bold text-white",children:(A=n==null?void 0:n.following)==null?void 0:A.length})," ","Following"]}),U.jsxs("div",{children:[U.jsx("span",{className:"font-bold text-white",children:(C=n==null?void 0:n.followers)==null?void 0:C.length})," ","Followers"]})]})]})]}),U.jsx("hr",{}),U.jsxs(U.Fragment,{children:[U.jsx("h1",{className:"text-center text-white",children:"Posts"}),U.jsxs("div",{className:"text-white h-auto w-auto",children:[U.jsx("br",{}),h.slice().reverse().map(y=>U.jsxs("div",{className:"mb-[2rem] md:mx-[2rem] flex h-auto mx-[1rem]",children:[U.jsx("div",{className:"Avatar-Image",children:U.jsx("img",{src:y.owner.avatar,alt:"",className:"avatarImg rounded-full object-cover w-[2.5rem] h-[2.5rem]"})}),U.jsx("div",{className:"upload-posts",children:U.jsxs("div",{className:"Name flex flex-col",children:[U.jsx("span",{className:"text-[1.2rem] font-semibold",children:y.owner.fullName}),U.jsxs("span",{className:"text-gray-500 text-[1rem] flex items-center gap-4",children:["@",y.owner.username,U.jsx("p",{className:"text-gray-400 text-sm",children:g(y.createdAt)})]}),U.jsxs(fn,{to:`post/${y._id}`,className:"text-white no-underline",children:[U.jsx("p",{className:"md:my-5 my-4",children:kl(y.caption||"")}),U.jsx("div",{className:"overflow-hidden",children:U.jsx("img",{src:y.image||"",alt:"",className:`${y.image?"border object-cover h-[18rem] w-[20rem] rounded-md":""}`})})]})]})})]},y._id))]})]})]})})},rX=()=>{const{userInfo:n}=$r(o=>o.auth);return n?U.jsx(V3,{}):U.jsx(iG,{to:"/login",replace:!0})},oX=()=>{const[n,o]=q.useState(""),[a,d]=q.useState(""),[h,p]=q.useState(""),[m,w]=q.useState(!1),g=No(),A=Cr(),{userInfo:C}=$r(S=>S.auth),[y,{isLoading:v}]=vQ();q.useEffect(()=>{var I;const S=((I=C.data)==null?void 0:I.user)||C.data||C;d(S.fullName),o(S.email),p(S.bio)},[C]);const x=async S=>{var I;S.preventDefault();try{const N=await y({_id:C._id,fullName:a,email:n,bio:h}).unwrap();g(El(N)),Ve.success("Profile updated successfully"),w(!0),A("/profile")}catch(N){Ve.error(((I=N==null?void 0:N.data)==null?void 0:I.message)||N.error),w(!1)}w(!1)};return U.jsxs("div",{className:"bg-black px-[2rem] text-white md:mx-[15rem] mt-[5.5rem]",children:[U.jsx("h1",{className:"text-3xl font-bold mb-4 mt-2",children:"Update Profile"}),U.jsxs("form",{onSubmit:x,children:[U.jsxs("div",{className:"mb-2",children:[U.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),U.jsx("input",{type:"name",id:"name",className:"mt-1 p-2 block w-full border rounded-md text-black",placeholder:"Enter name",value:a,onChange:S=>d(S.target.value)})]}),U.jsxs("div",{className:"mb-2",children:[U.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email Address"}),U.jsx("input",{type:"email",id:"email",className:"mt-1 p-2 block w-full border rounded-md text-black",placeholder:"Enter email",value:n,onChange:S=>o(S.target.value)})]}),U.jsxs("div",{className:"mb-1",children:[U.jsx("label",{htmlFor:"bio",className:"block text-sm font-medium text-gray-700",children:"Bio"}),U.jsx("textarea",{id:"bio",className:"mt-1 p-2 block w-full border rounded-md text-black",placeholder:"Bio",value:h,onChange:S=>p(S.target.value)})]}),U.jsx("br",{}),U.jsx("button",{type:"submit",className:"w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none ",disabled:v||m,children:v||m?"Updating...":"Update"})]}),U.jsx("br",{})]})},iX=()=>{const[n,o]=q.useState(null),[a,d]=q.useState(!1),h=Cr(),p=No(),m=$r(y=>y.auth.userInfo),[w,{isLoading:g}]=AQ(),A=y=>{o(y.target.files[0])},C=async y=>{var v;if(y.preventDefault(),!n){Ve.error("Please select an avatar image.");return}d(!0);try{const x=new FormData;x.append("avatar",n),x.append("_id",m._id);const S=await w(x).unwrap();p(El(S)),Ve.success("Avatar updated successfully."),h("/profile")}catch(x){Ve.error(((v=x==null?void 0:x.data)==null?void 0:v.message)||"Failed to update avatar.")}d(!1)};return U.jsx("div",{className:"mt-24 Cover-Image ",children:U.jsxs("div",{className:"max-w-md mx-auto mt-20 p-6  rounded-lg shadow-md text-white bg-black",children:[U.jsx("h1",{className:"text-2xl font-semibold mb-6",children:"Update Avatar Image"}),U.jsxs("form",{onSubmit:C,children:[U.jsxs("div",{className:"mb-4",children:[U.jsx("label",{className:"block text-gray-700",children:"Select Avatar"}),U.jsx("input",{type:"file",accept:"image/*",onChange:A,className:"mt-2 block w-full text-sm text-white bg-black rounded-lg border border-gray-300 cursor-pointer focus:outline-none p-2"})]}),U.jsx("button",{type:"submit",className:`w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none ${g||a?"cursor-not-allowed opacity-50":""}`,disabled:g||a,children:g||a?"Updating...":"Update"}),(g||a)&&U.jsx("div",{className:"mt-4",children:U.jsx(Zi,{})})]})]})})},sX=()=>{const[n,o]=q.useState(null),[a,d]=q.useState(!1),h=Cr(),p=No(),m=$r(y=>y.auth.userInfo),[w,{isLoading:g}]=_Q(),A=y=>{o(y.target.files[0])},C=async y=>{var v;if(y.preventDefault(),!n){Ve.error("Please select a cover image.");return}d(!0);try{const x=new FormData;x.append("coverImage",n),x.append("_id",m._id);const S=await w(x).unwrap();p(El(S)),Ve.success("Cover image updated successfully."),h("/profile")}catch(x){Ve.error(((v=x==null?void 0:x.data)==null?void 0:v.message)||"Failed to update cover image.")}d(!1)};return U.jsx("div",{className:"mt-24 Cover-Image",children:U.jsxs("div",{className:"max-w-md mx-auto mt-20 p-6 text-white bg-black rounded-lg shadow-md",children:[U.jsx("h1",{className:"text-2xl font-semibold mb-6",children:"Update Cover Image"}),U.jsxs("form",{onSubmit:C,children:[U.jsxs("div",{className:"mb-4",children:[U.jsx("label",{className:"block text-gray-700",children:"Select Cover Image"}),U.jsx("input",{type:"file",accept:"image/*",onChange:A,className:"mt-2 block w-full text-sm text-white bg-black p-2 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"})]}),U.jsx("button",{type:"submit",className:`w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none ${g||a?"cursor-not-allowed opacity-50":""}`,disabled:g||a,children:g||a?"Updating...":"Update"})]})]})})};var JP={exports:{}},wb={exports:{}},vb,bI;function aX(){if(bI)return vb;bI=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return vb=n,vb}var Ab,wI;function lX(){if(wI)return Ab;wI=1;var n=aX();function o(){}function a(){}return a.resetWarningCache=o,Ab=function(){function d(m,w,g,A,C,y){if(y!==n){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}d.isRequired=d;function h(){return d}var p={array:d,bigint:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:h,element:d,elementType:d,instanceOf:h,node:d,objectOf:h,oneOf:h,oneOfType:h,shape:h,exact:h,checkPropTypes:a,resetWarningCache:o};return p.PropTypes=p,p},Ab}var vI;function cX(){return vI||(vI=1,wb.exports=lX()()),wb.exports}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class Iv{constructor(o){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof o.crashNumberLimit=="number"?o.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof o.minimumNonErrorTimePeriod=="number"?o.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=a=>{const d="error"in a?a.error:a.reason;d instanceof Error&&this._handleError(d,a)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(o,a){this._listeners[o]||(this._listeners[o]=[]),this._listeners[o].push(a)}off(o,a){this._listeners[o]=this._listeners[o].filter(d=>d!==a)}_fire(o,...a){const d=this._listeners[o]||[];for(const h of d)h.apply(this,[null,...a])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(o,a){if(this._shouldReactToError(o)){this.crashes.push({message:o.message,stack:o.stack,filename:a instanceof ErrorEvent?a.filename:void 0,lineno:a instanceof ErrorEvent?a.lineno:void 0,colno:a instanceof ErrorEvent?a.colno:void 0,date:this._now()});const d=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:o,causesRestart:d}),d?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(o){return o.is&&o.is("CKEditorError")&&o.context!==void 0&&o.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(o)}_shouldRestart(){if(this.crashes.length<=this._crashNumberLimit)return!0;const o=this.crashes[this.crashes.length-1].date,a=this.crashes[this.crashes.length-1-this._crashNumberLimit].date;return(o-a)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function W0(n,o=new Set){const a=[n],d=new Set;let h=0;for(;a.length>h;){const p=a[h++];if(!(d.has(p)||!dX(p)||o.has(p)))if(d.add(p),Symbol.iterator in p)try{for(const m of p)a.push(m)}catch{}else for(const m in p)m!=="defaultValue"&&a.push(p[m])}return d}function dX(n){const o=Object.prototype.toString.call(n),a=typeof n;return!(a==="number"||a==="boolean"||a==="string"||a==="symbol"||a==="function"||o==="[object Date]"||o==="[object RegExp]"||o==="[object Module]"||n===void 0||n===null||n._watchdogExcluded||n instanceof EventTarget||n instanceof Event)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function XP(n,o,a=new Set){if(n===o&&uX(n))return!0;const d=W0(n,a),h=W0(o,a);for(const p of d)if(h.has(p))return!0;return!1}function uX(n){return typeof n=="object"&&n!==null}var eB=typeof global=="object"&&global&&global.Object===Object&&global,hX=typeof self=="object"&&self&&self.Object===Object&&self,mo=eB||hX||Function("return this")(),bl=mo.Symbol,tB=Object.prototype,fX=tB.hasOwnProperty,pX=tB.toString,Oc=bl?bl.toStringTag:void 0;function mX(n){var o=fX.call(n,Oc),a=n[Oc];try{n[Oc]=void 0;var d=!0}catch{}var h=pX.call(n);return d&&(o?n[Oc]=a:delete n[Oc]),h}var gX=Object.prototype,kX=gX.toString;function bX(n){return kX.call(n)}var wX="[object Null]",vX="[object Undefined]",AI=bl?bl.toStringTag:void 0;function ea(n){return n==null?n===void 0?vX:wX:AI&&AI in Object(n)?mX(n):bX(n)}function is(n){return n!=null&&typeof n=="object"}var AX="[object Symbol]";function _X(n){return typeof n=="symbol"||is(n)&&ea(n)==AX}var Mv=Array.isArray,CX=/\s/;function yX(n){for(var o=n.length;o--&&CX.test(n.charAt(o)););return o}var xX=/^\s+/;function EX(n){return n&&n.slice(0,yX(n)+1).replace(xX,"")}function ai(n){var o=typeof n;return n!=null&&(o=="object"||o=="function")}var _I=NaN,SX=/^[-+]0x[0-9a-f]+$/i,DX=/^0b[01]+$/i,TX=/^0o[0-7]+$/i,IX=parseInt;function CI(n){if(typeof n=="number")return n;if(_X(n))return _I;if(ai(n)){var o=typeof n.valueOf=="function"?n.valueOf():n;n=ai(o)?o+"":o}if(typeof n!="string")return n===0?n:+n;n=EX(n);var a=DX.test(n);return a||TX.test(n)?IX(n.slice(2),a?2:8):SX.test(n)?_I:+n}var MX="[object AsyncFunction]",PX="[object Function]",BX="[object GeneratorFunction]",NX="[object Proxy]";function nB(n){if(!ai(n))return!1;var o=ea(n);return o==PX||o==BX||o==MX||o==NX}var _b=mo["__core-js_shared__"],yI=function(){var n=/[^.]+$/.exec(_b&&_b.keys&&_b.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function OX(n){return!!yI&&yI in n}var RX=Function.prototype,LX=RX.toString;function ta(n){if(n!=null){try{return LX.call(n)}catch{}try{return n+""}catch{}}return""}var jX=/[\\^$.*+?()[\]{}|]/g,zX=/^\[object .+?Constructor\]$/,FX=Function.prototype,VX=Object.prototype,UX=FX.toString,HX=VX.hasOwnProperty,$X=RegExp("^"+UX.call(HX).replace(jX,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function WX(n){if(!ai(n)||OX(n))return!1;var o=nB(n)?$X:zX;return o.test(ta(n))}function qX(n,o){return n==null?void 0:n[o]}function na(n,o){var a=qX(n,o);return WX(a)?a:void 0}var q0=na(mo,"WeakMap"),xI=Object.create,GX=function(){function n(){}return function(o){if(!ai(o))return{};if(xI)return xI(o);n.prototype=o;var a=new n;return n.prototype=void 0,a}}();function KX(n,o){var a=-1,d=n.length;for(o||(o=Array(d));++a<d;)o[a]=n[a];return o}var EI=function(){try{var n=na(Object,"defineProperty");return n({},"",{}),n}catch{}}();function QX(n,o){for(var a=-1,d=n==null?0:n.length;++a<d&&o(n[a],a,n)!==!1;);return n}var YX=9007199254740991,ZX=/^(?:0|[1-9]\d*)$/;function JX(n,o){var a=typeof n;return o=o??YX,!!o&&(a=="number"||a!="symbol"&&ZX.test(n))&&n>-1&&n%1==0&&n<o}function rB(n,o,a){o=="__proto__"&&EI?EI(n,o,{configurable:!0,enumerable:!0,value:a,writable:!0}):n[o]=a}function oB(n,o){return n===o||n!==n&&o!==o}var XX=Object.prototype,eee=XX.hasOwnProperty;function iB(n,o,a){var d=n[o];(!(eee.call(n,o)&&oB(d,a))||a===void 0&&!(o in n))&&rB(n,o,a)}function am(n,o,a,d){var h=!a;a||(a={});for(var p=-1,m=o.length;++p<m;){var w=o[p],g=void 0;g===void 0&&(g=n[w]),h?rB(a,w,g):iB(a,w,g)}return a}var tee=9007199254740991;function sB(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=tee}function aB(n){return n!=null&&sB(n.length)&&!nB(n)}var nee=Object.prototype;function Pv(n){var o=n&&n.constructor,a=typeof o=="function"&&o.prototype||nee;return n===a}function ree(n,o){for(var a=-1,d=Array(n);++a<n;)d[a]=o(a);return d}var oee="[object Arguments]";function SI(n){return is(n)&&ea(n)==oee}var lB=Object.prototype,iee=lB.hasOwnProperty,see=lB.propertyIsEnumerable,aee=SI(function(){return arguments}())?SI:function(n){return is(n)&&iee.call(n,"callee")&&!see.call(n,"callee")};function lee(){return!1}var cB=typeof mr=="object"&&mr&&!mr.nodeType&&mr,DI=cB&&typeof gr=="object"&&gr&&!gr.nodeType&&gr,cee=DI&&DI.exports===cB,TI=cee?mo.Buffer:void 0,dee=TI?TI.isBuffer:void 0,dB=dee||lee,uee="[object Arguments]",hee="[object Array]",fee="[object Boolean]",pee="[object Date]",mee="[object Error]",gee="[object Function]",kee="[object Map]",bee="[object Number]",wee="[object Object]",vee="[object RegExp]",Aee="[object Set]",_ee="[object String]",Cee="[object WeakMap]",yee="[object ArrayBuffer]",xee="[object DataView]",Eee="[object Float32Array]",See="[object Float64Array]",Dee="[object Int8Array]",Tee="[object Int16Array]",Iee="[object Int32Array]",Mee="[object Uint8Array]",Pee="[object Uint8ClampedArray]",Bee="[object Uint16Array]",Nee="[object Uint32Array]",Et={};Et[Eee]=Et[See]=Et[Dee]=Et[Tee]=Et[Iee]=Et[Mee]=Et[Pee]=Et[Bee]=Et[Nee]=!0;Et[uee]=Et[hee]=Et[yee]=Et[fee]=Et[xee]=Et[pee]=Et[mee]=Et[gee]=Et[kee]=Et[bee]=Et[wee]=Et[vee]=Et[Aee]=Et[_ee]=Et[Cee]=!1;function Oee(n){return is(n)&&sB(n.length)&&!!Et[ea(n)]}function Bv(n){return function(o){return n(o)}}var uB=typeof mr=="object"&&mr&&!mr.nodeType&&mr,ld=uB&&typeof gr=="object"&&gr&&!gr.nodeType&&gr,Ree=ld&&ld.exports===uB,Cb=Ree&&eB.process,wl=function(){try{var n=ld&&ld.require&&ld.require("util").types;return n||Cb&&Cb.binding&&Cb.binding("util")}catch{}}(),II=wl&&wl.isTypedArray,Lee=II?Bv(II):Oee,jee=Object.prototype,zee=jee.hasOwnProperty;function hB(n,o){var a=Mv(n),d=!a&&aee(n),h=!a&&!d&&dB(n),p=!a&&!d&&!h&&Lee(n),m=a||d||h||p,w=m?ree(n.length,String):[],g=w.length;for(var A in n)(o||zee.call(n,A))&&!(m&&(A=="length"||h&&(A=="offset"||A=="parent")||p&&(A=="buffer"||A=="byteLength"||A=="byteOffset")||JX(A,g)))&&w.push(A);return w}function fB(n,o){return function(a){return n(o(a))}}var Fee=fB(Object.keys,Object),Vee=Object.prototype,Uee=Vee.hasOwnProperty;function Hee(n){if(!Pv(n))return Fee(n);var o=[];for(var a in Object(n))Uee.call(n,a)&&a!="constructor"&&o.push(a);return o}function Nv(n){return aB(n)?hB(n):Hee(n)}function $ee(n){var o=[];if(n!=null)for(var a in Object(n))o.push(a);return o}var Wee=Object.prototype,qee=Wee.hasOwnProperty;function Gee(n){if(!ai(n))return $ee(n);var o=Pv(n),a=[];for(var d in n)d=="constructor"&&(o||!qee.call(n,d))||a.push(d);return a}function Ov(n){return aB(n)?hB(n,!0):Gee(n)}var Rd=na(Object,"create");function Kee(){this.__data__=Rd?Rd(null):{},this.size=0}function Qee(n){var o=this.has(n)&&delete this.__data__[n];return this.size-=o?1:0,o}var Yee="__lodash_hash_undefined__",Zee=Object.prototype,Jee=Zee.hasOwnProperty;function Xee(n){var o=this.__data__;if(Rd){var a=o[n];return a===Yee?void 0:a}return Jee.call(o,n)?o[n]:void 0}var ete=Object.prototype,tte=ete.hasOwnProperty;function nte(n){var o=this.__data__;return Rd?o[n]!==void 0:tte.call(o,n)}var rte="__lodash_hash_undefined__";function ote(n,o){var a=this.__data__;return this.size+=this.has(n)?0:1,a[n]=Rd&&o===void 0?rte:o,this}function Ys(n){var o=-1,a=n==null?0:n.length;for(this.clear();++o<a;){var d=n[o];this.set(d[0],d[1])}}Ys.prototype.clear=Kee;Ys.prototype.delete=Qee;Ys.prototype.get=Xee;Ys.prototype.has=nte;Ys.prototype.set=ote;function ite(){this.__data__=[],this.size=0}function lm(n,o){for(var a=n.length;a--;)if(oB(n[a][0],o))return a;return-1}var ste=Array.prototype,ate=ste.splice;function lte(n){var o=this.__data__,a=lm(o,n);if(a<0)return!1;var d=o.length-1;return a==d?o.pop():ate.call(o,a,1),--this.size,!0}function cte(n){var o=this.__data__,a=lm(o,n);return a<0?void 0:o[a][1]}function dte(n){return lm(this.__data__,n)>-1}function ute(n,o){var a=this.__data__,d=lm(a,n);return d<0?(++this.size,a.push([n,o])):a[d][1]=o,this}function ci(n){var o=-1,a=n==null?0:n.length;for(this.clear();++o<a;){var d=n[o];this.set(d[0],d[1])}}ci.prototype.clear=ite;ci.prototype.delete=lte;ci.prototype.get=cte;ci.prototype.has=dte;ci.prototype.set=ute;var Ld=na(mo,"Map");function hte(){this.size=0,this.__data__={hash:new Ys,map:new(Ld||ci),string:new Ys}}function fte(n){var o=typeof n;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?n!=="__proto__":n===null}function cm(n,o){var a=n.__data__;return fte(o)?a[typeof o=="string"?"string":"hash"]:a.map}function pte(n){var o=cm(this,n).delete(n);return this.size-=o?1:0,o}function mte(n){return cm(this,n).get(n)}function gte(n){return cm(this,n).has(n)}function kte(n,o){var a=cm(this,n),d=a.size;return a.set(n,o),this.size+=a.size==d?0:1,this}function Tl(n){var o=-1,a=n==null?0:n.length;for(this.clear();++o<a;){var d=n[o];this.set(d[0],d[1])}}Tl.prototype.clear=hte;Tl.prototype.delete=pte;Tl.prototype.get=mte;Tl.prototype.has=gte;Tl.prototype.set=kte;function pB(n,o){for(var a=-1,d=o.length,h=n.length;++a<d;)n[h+a]=o[a];return n}var Rv=fB(Object.getPrototypeOf,Object),bte="[object Object]",wte=Function.prototype,vte=Object.prototype,mB=wte.toString,Ate=vte.hasOwnProperty,_te=mB.call(Object);function Cte(n){if(!is(n)||ea(n)!=bte)return!1;var o=Rv(n);if(o===null)return!0;var a=Ate.call(o,"constructor")&&o.constructor;return typeof a=="function"&&a instanceof a&&mB.call(a)==_te}function yte(){this.__data__=new ci,this.size=0}function xte(n){var o=this.__data__,a=o.delete(n);return this.size=o.size,a}function Ete(n){return this.__data__.get(n)}function Ste(n){return this.__data__.has(n)}var Dte=200;function Tte(n,o){var a=this.__data__;if(a instanceof ci){var d=a.__data__;if(!Ld||d.length<Dte-1)return d.push([n,o]),this.size=++a.size,this;a=this.__data__=new Tl(d)}return a.set(n,o),this.size=a.size,this}function Il(n){var o=this.__data__=new ci(n);this.size=o.size}Il.prototype.clear=yte;Il.prototype.delete=xte;Il.prototype.get=Ete;Il.prototype.has=Ste;Il.prototype.set=Tte;function Ite(n,o){return n&&am(o,Nv(o),n)}function Mte(n,o){return n&&am(o,Ov(o),n)}var gB=typeof mr=="object"&&mr&&!mr.nodeType&&mr,MI=gB&&typeof gr=="object"&&gr&&!gr.nodeType&&gr,Pte=MI&&MI.exports===gB,PI=Pte?mo.Buffer:void 0,BI=PI?PI.allocUnsafe:void 0;function Bte(n,o){if(o)return n.slice();var a=n.length,d=BI?BI(a):new n.constructor(a);return n.copy(d),d}function Nte(n,o){for(var a=-1,d=n==null?0:n.length,h=0,p=[];++a<d;){var m=n[a];o(m,a,n)&&(p[h++]=m)}return p}function kB(){return[]}var Ote=Object.prototype,Rte=Ote.propertyIsEnumerable,NI=Object.getOwnPropertySymbols,Lv=NI?function(n){return n==null?[]:(n=Object(n),Nte(NI(n),function(o){return Rte.call(n,o)}))}:kB;function Lte(n,o){return am(n,Lv(n),o)}var jte=Object.getOwnPropertySymbols,bB=jte?function(n){for(var o=[];n;)pB(o,Lv(n)),n=Rv(n);return o}:kB;function zte(n,o){return am(n,bB(n),o)}function wB(n,o,a){var d=o(n);return Mv(n)?d:pB(d,a(n))}function Fte(n){return wB(n,Nv,Lv)}function Vte(n){return wB(n,Ov,bB)}var G0=na(mo,"DataView"),K0=na(mo,"Promise"),Q0=na(mo,"Set"),OI="[object Map]",Ute="[object Object]",RI="[object Promise]",LI="[object Set]",jI="[object WeakMap]",zI="[object DataView]",Hte=ta(G0),$te=ta(Ld),Wte=ta(K0),qte=ta(Q0),Gte=ta(q0),Jo=ea;(G0&&Jo(new G0(new ArrayBuffer(1)))!=zI||Ld&&Jo(new Ld)!=OI||K0&&Jo(K0.resolve())!=RI||Q0&&Jo(new Q0)!=LI||q0&&Jo(new q0)!=jI)&&(Jo=function(n){var o=ea(n),a=o==Ute?n.constructor:void 0,d=a?ta(a):"";if(d)switch(d){case Hte:return zI;case $te:return OI;case Wte:return RI;case qte:return LI;case Gte:return jI}return o});var Kte=Object.prototype,Qte=Kte.hasOwnProperty;function Yte(n){var o=n.length,a=new n.constructor(o);return o&&typeof n[0]=="string"&&Qte.call(n,"index")&&(a.index=n.index,a.input=n.input),a}var FI=mo.Uint8Array;function jv(n){var o=new n.constructor(n.byteLength);return new FI(o).set(new FI(n)),o}function Zte(n,o){var a=o?jv(n.buffer):n.buffer;return new n.constructor(a,n.byteOffset,n.byteLength)}var Jte=/\w*$/;function Xte(n){var o=new n.constructor(n.source,Jte.exec(n));return o.lastIndex=n.lastIndex,o}var VI=bl?bl.prototype:void 0,UI=VI?VI.valueOf:void 0;function ene(n){return UI?Object(UI.call(n)):{}}function tne(n,o){var a=o?jv(n.buffer):n.buffer;return new n.constructor(a,n.byteOffset,n.length)}var nne="[object Boolean]",rne="[object Date]",one="[object Map]",ine="[object Number]",sne="[object RegExp]",ane="[object Set]",lne="[object String]",cne="[object Symbol]",dne="[object ArrayBuffer]",une="[object DataView]",hne="[object Float32Array]",fne="[object Float64Array]",pne="[object Int8Array]",mne="[object Int16Array]",gne="[object Int32Array]",kne="[object Uint8Array]",bne="[object Uint8ClampedArray]",wne="[object Uint16Array]",vne="[object Uint32Array]";function Ane(n,o,a){var d=n.constructor;switch(o){case dne:return jv(n);case nne:case rne:return new d(+n);case une:return Zte(n,a);case hne:case fne:case pne:case mne:case gne:case kne:case bne:case wne:case vne:return tne(n,a);case one:return new d;case ine:case lne:return new d(n);case sne:return Xte(n);case ane:return new d;case cne:return ene(n)}}function _ne(n){return typeof n.constructor=="function"&&!Pv(n)?GX(Rv(n)):{}}var Cne="[object Map]";function yne(n){return is(n)&&Jo(n)==Cne}var HI=wl&&wl.isMap,xne=HI?Bv(HI):yne,Ene="[object Set]";function Sne(n){return is(n)&&Jo(n)==Ene}var $I=wl&&wl.isSet,Dne=$I?Bv($I):Sne,Tne=1,Ine=2,Mne=4,vB="[object Arguments]",Pne="[object Array]",Bne="[object Boolean]",Nne="[object Date]",One="[object Error]",AB="[object Function]",Rne="[object GeneratorFunction]",Lne="[object Map]",jne="[object Number]",_B="[object Object]",zne="[object RegExp]",Fne="[object Set]",Vne="[object String]",Une="[object Symbol]",Hne="[object WeakMap]",$ne="[object ArrayBuffer]",Wne="[object DataView]",qne="[object Float32Array]",Gne="[object Float64Array]",Kne="[object Int8Array]",Qne="[object Int16Array]",Yne="[object Int32Array]",Zne="[object Uint8Array]",Jne="[object Uint8ClampedArray]",Xne="[object Uint16Array]",ere="[object Uint32Array]",_t={};_t[vB]=_t[Pne]=_t[$ne]=_t[Wne]=_t[Bne]=_t[Nne]=_t[qne]=_t[Gne]=_t[Kne]=_t[Qne]=_t[Yne]=_t[Lne]=_t[jne]=_t[_B]=_t[zne]=_t[Fne]=_t[Vne]=_t[Une]=_t[Zne]=_t[Jne]=_t[Xne]=_t[ere]=!0;_t[One]=_t[AB]=_t[Hne]=!1;function hf(n,o,a,d,h,p){var m,w=o&Tne,g=o&Ine,A=o&Mne;if(a&&(m=h?a(n,d,h,p):a(n)),m!==void 0)return m;if(!ai(n))return n;var C=Mv(n);if(C){if(m=Yte(n),!w)return KX(n,m)}else{var y=Jo(n),v=y==AB||y==Rne;if(dB(n))return Bte(n,w);if(y==_B||y==vB||v&&!h){if(m=g||v?{}:_ne(n),!w)return g?zte(n,Mte(m,n)):Lte(n,Ite(m,n))}else{if(!_t[y])return h?n:{};m=Ane(n,y,w)}}p||(p=new Il);var x=p.get(n);if(x)return x;p.set(n,m),Dne(n)?n.forEach(function(N){m.add(hf(N,o,a,N,n,p))}):xne(n)&&n.forEach(function(N,P){m.set(P,hf(N,o,a,P,n,p))});var S=A?g?Vte:Fte:g?Ov:Nv,I=C?void 0:S(n);return QX(I||n,function(N,P){I&&(P=N,N=n[P]),iB(m,P,hf(N,o,a,P,n,p))}),m}var tre=1,nre=4;function rre(n,o){return o=typeof o=="function"?o:void 0,hf(n,tre|nre,o)}var yb=function(){return mo.Date.now()},ore="Expected a function",ire=Math.max,sre=Math.min;function are(n,o,a){var d,h,p,m,w,g,A=0,C=!1,y=!1,v=!0;if(typeof n!="function")throw new TypeError(ore);o=CI(o)||0,ai(a)&&(C=!!a.leading,y="maxWait"in a,p=y?ire(CI(a.maxWait)||0,o):p,v="trailing"in a?!!a.trailing:v);function x(F){var D=d,z=h;return d=h=void 0,A=F,m=n.apply(z,D),m}function S(F){return A=F,w=setTimeout(P,o),C?x(F):m}function I(F){var D=F-g,z=F-A,W=o-D;return y?sre(W,p-z):W}function N(F){var D=F-g,z=F-A;return g===void 0||D>=o||D<0||y&&z>=p}function P(){var F=yb();if(N(F))return B(F);w=setTimeout(P,I(F))}function B(F){return w=void 0,v&&d?x(F):(d=h=void 0,m)}function O(){w!==void 0&&clearTimeout(w),A=0,d=g=h=w=void 0}function L(){return w===void 0?m:B(yb())}function V(){var F=yb(),D=N(F);if(d=arguments,h=this,g=F,D){if(w===void 0)return S(g);if(y)return clearTimeout(w),w=setTimeout(P,o),x(g)}return w===void 0&&(w=setTimeout(P,o)),m}return V.cancel=O,V.flush=L,V}function WI(n){return is(n)&&n.nodeType===1&&!Cte(n)}var lre="Expected a function";function cre(n,o,a){var d=!0,h=!0;if(typeof n!="function")throw new TypeError(lre);return ai(a)&&(d="leading"in a?!!a.leading:d,h="trailing"in a?!!a.trailing:h),are(n,o,{leading:d,maxWait:o,trailing:h})}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class CB extends Iv{constructor(o,a={}){super(a),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=cre(this._save.bind(this),typeof a.saveInterval=="number"?a.saveInterval:5e3),o&&(this._creator=(d,h)=>o.create(d,h)),this._destructor=d=>d.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(o){this._creator=o}setDestructor(o){this._destructor=o}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(o=>{console.error("An error happened during the editor destroying.",o)}).then(()=>{const o={},a=[],d=this._config.rootsAttributes||{},h={};for(const[m,w]of Object.entries(this._data.roots))w.isLoaded?(o[m]="",h[m]=d[m]||{}):a.push(m);const p={...this._config,extraPlugins:this._config.extraPlugins||[],lazyRoots:a,rootsAttributes:h,_watchdogInitialData:this._data};return delete p.initialData,p.extraPlugins.push(dre),this._initUsingData?this.create(o,p,p.context):WI(this._elementOrData)?this.create(this._elementOrData,p,p.context):this.create(this._editables,p,p.context)}).then(()=>{this._fire("restart")})}create(o=this._elementOrData,a=this._config,d){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=o,this._initUsingData=typeof o=="string"||Object.keys(o).length>0&&typeof Object.values(o)[0]=="string",this._config=this._cloneEditorConfiguration(a)||{},this._config.context=d,this._creator(o,this._config))).then(h=>{this._editor=h,h.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=h.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const o=this._editor;return this._editor=null,o.model.document.off("change:data",this._throttledSave),this._destructor(o)})}_save(){const o=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=o}catch(a){console.error(a,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(o){this._excludedProps=o}_getData(){const o=this._editor,a=o.model.document.roots.filter(w=>w.isAttached()&&w.rootName!="$graveyard"),{plugins:d}=o,h=d.has("CommentsRepository")&&d.get("CommentsRepository"),p=d.has("TrackChanges")&&d.get("TrackChanges"),m={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};a.forEach(w=>{m.roots[w.rootName]={content:JSON.stringify(Array.from(w.getChildren())),attributes:JSON.stringify(Array.from(w.getAttributes())),isLoaded:w._isLoaded}});for(const w of o.model.markers)w._affectsData&&(m.markers[w.name]={rangeJSON:w.getRange().toJSON(),usingOperation:w._managedUsingOperations,affectsData:w._affectsData});return h&&(m.commentThreads=JSON.stringify(h.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),p&&(m.suggestions=JSON.stringify(p.getSuggestions({toJSON:!0,skipNotAttached:!0}))),m}_getEditables(){const o={};for(const a of this.editor.model.document.getRootNames()){const d=this.editor.ui.getEditableElement(a);d&&(o[a]=d)}return o}_isErrorComingFromThisItem(o){return XP(this._editor,o.context,this._excludedProps)}_cloneEditorConfiguration(o){return rre(o,(a,d)=>{if(WI(a)||d==="context")return a})}}class dre{constructor(o){this.editor=o,this._data=o.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",o=>{o.stop(),this.editor.model.enqueueChange({isUndoable:!1},a=>{this._restoreCollaborationData(),this._restoreEditorData(a)}),this.editor.data.fire("ready")},{priority:999})}_createNode(o,a){if("name"in a){const d=o.createElement(a.name,a.attributes);if(a.children)for(const h of a.children)d._appendChild(this._createNode(o,h));return d}else return o.createText(a.data,a.attributes)}_restoreEditorData(o){const a=this.editor;Object.entries(this._data.roots).forEach(([d,{content:h,attributes:p}])=>{const m=JSON.parse(h),w=JSON.parse(p),g=a.model.document.getRoot(d);for(const[A,C]of w)o.setAttribute(A,C,g);for(const A of m){const C=this._createNode(o,A);o.insert(C,g,"end")}}),Object.entries(this._data.markers).forEach(([d,h])=>{const{document:p}=a.model,{rangeJSON:{start:m,end:w},...g}=h,A=p.getRoot(m.root),C=o.createPositionFromPath(A,m.path,m.stickiness),y=o.createPositionFromPath(A,w.path,w.stickiness),v=o.createRange(C,y);o.addMarker(d,{range:v,...g})})}_restoreCollaborationData(){const o=JSON.parse(this._data.commentThreads),a=JSON.parse(this._data.suggestions);o.forEach(d=>{const h=this.editor.config.get("collaboration.channelId"),p=this.editor.plugins.get("CommentsRepository");p.hasCommentThread(d.threadId)&&p.getCommentThread(d.threadId).remove(),p.addCommentThread({channelId:h,...d})}),a.forEach(d=>{const h=this.editor.plugins.get("TrackChangesEditing");if(h.hasSuggestion(d.id)){const p=h.getSuggestion(d.id);p.attributes=d.attributes}else h.addSuggestionData(d)})}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const cd=Symbol("MainQueueId");class ure extends Iv{constructor(o,a={}){super(a),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new hre,this._watchdogConfig=a,this._creator=d=>o.create(d),this._destructor=d=>d.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(o){this._creator=o}setDestructor(o){this._destructor=o}get context(){return this._context}create(o={}){return this._actionQueues.enqueue(cd,()=>(this._contextConfig=o,this._create()))}getItem(o){return this._getWatchdog(o)._item}getItemState(o){return this._getWatchdog(o).state}add(o){const a=qI(o);return Promise.all(a.map(d=>this._actionQueues.enqueue(d.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let h;if(this._watchdogs.has(d.id))throw new Error(`Item with the given id is already added: '${d.id}'.`);if(d.type==="editor")return h=new CB(null,this._watchdogConfig),h.setCreator(d.creator),h._setExcludedProperties(this._contextProps),d.destructor&&h.setDestructor(d.destructor),this._watchdogs.set(d.id,h),h.on("error",(p,{error:m,causesRestart:w})=>{this._fire("itemError",{itemId:d.id,error:m}),w&&this._actionQueues.enqueue(d.id,()=>new Promise(g=>{const A=()=>{h.off("restart",A),this._fire("itemRestart",{itemId:d.id}),g()};h.on("restart",A)}))}),h.create(d.sourceElementOrData,d.config,this._context);throw new Error(`Not supported item type: '${d.type}'.`)})))}remove(o){const a=qI(o);return Promise.all(a.map(d=>this._actionQueues.enqueue(d,()=>{const h=this._getWatchdog(d);return this._watchdogs.delete(d),h.destroy()})))}destroy(){return this._actionQueues.enqueue(cd,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(cd,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(o=>{console.error("An error happened during destroying the context or items.",o)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(o=>(this._context=o,this._contextProps=W0(this._context),Promise.all(Array.from(this._watchdogs.values()).map(a=>(a._setExcludedProperties(this._contextProps),a.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const o=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(a=>a.destroy())).then(()=>this._destructor(o))})}_getWatchdog(o){const a=this._watchdogs.get(o);if(!a)throw new Error(`Item with the given id was not registered: ${o}.`);return a}_isErrorComingFromThisItem(o){for(const a of this._watchdogs.values())if(a._isErrorComingFromThisItem(o))return!1;return XP(this._context,o.context)}}class hre{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(o){this._onEmptyCallbacks.push(o)}enqueue(o,a){const d=o===cd;this._activeActions++,this._queues.get(o)||this._queues.set(o,Promise.resolve());const p=(d?Promise.all(this._queues.values()):Promise.all([this._queues.get(cd),this._queues.get(o)])).then(a),m=p.catch(()=>{});return this._queues.set(o,m),p.finally(()=>{this._activeActions--,this._queues.get(o)===m&&this._activeActions===0&&this._onEmptyCallbacks.forEach(w=>w())})}}function qI(n){return Array.isArray(n)?n:[n]}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const fre=Object.freeze(Object.defineProperty({__proto__:null,ContextWatchdog:ure,EditorWatchdog:CB,Watchdog:Iv},Symbol.toStringTag,{value:"Module"})),pre=wU(fre);/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(n,o){(function(a,d){n.exports=d(q,cX(),pre)})(self,(a,d,h)=>(()=>{var p={546:A=>{A.exports=h},949:A=>{A.exports=d},155:A=>{A.exports=a}},m={};function w(A){var C=m[A];if(C!==void 0)return C.exports;var y=m[A]={exports:{}};return p[A](y,y.exports,w),y.exports}w.n=A=>{var C=A&&A.__esModule?()=>A.default:()=>A;return w.d(C,{a:C}),C},w.d=(A,C)=>{for(var y in C)w.o(C,y)&&!w.o(A,y)&&Object.defineProperty(A,y,{enumerable:!0,get:C[y]})},w.o=(A,C)=>Object.prototype.hasOwnProperty.call(A,C),w.r=A=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})};var g={};return(()=>{w.r(g),w.d(g,{CKEditor:()=>O,CKEditorContext:()=>N,useMultiRootEditor:()=>te});var A=w(155),C=w.n(A),y=w(949),v=w.n(y);const x=new Array(256).fill("").map((Z,Q)=>("0"+Q.toString(16)).slice(-2));var S=w(546);const I=C().createContext("contextWatchdog");class N extends C().Component{constructor(Q,ee){super(Q,ee),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(Q){return this._shouldComponentUpdate(Q)}async _shouldComponentUpdate(Q){return Q.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(Q.config)),Q.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(Q.config),!0):this.props.children!==Q.children}render(){return C().createElement(I.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(Q){this.contextWatchdog=new S.ContextWatchdog(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(ee,se)=>{this.props.onError(se.error,{phase:"runtime",willContextRestart:se.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(Q).catch(ee=>{this.props.onError(ee,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}N.defaultProps={isLayoutReady:!0,onError:(Z,Q)=>console.error(Z,Q)},N.propTypes={id:v().string,isLayoutReady:v().bool,context:v().func,watchdogConfig:v().object,config:v().object,onReady:v().func,onError:v().func};class P{constructor(Q,ee){this._releaseLock=null,this._value=null,this._afterMountCallbacks=[],this._state={destroyedBeforeInitialization:!1,mountingInProgress:null},this.release=function(se){let G=null;return(...le)=>(G||(G={current:se(...le)}),G.current)}(()=>{const{_releaseLock:se,_state:G,_element:le,_lifecycle:de}=this;G.mountingInProgress?G.mountingInProgress.then(()=>de.unmount({element:le,mountResult:this.value})).catch(fe=>{console.error("Semaphore unmounting error:",fe)}).then(se.resolve).then(()=>{this._value=null}):(G.destroyedBeforeInitialization=!0,se.resolve())}),this._element=Q,this._lifecycle=ee,this._lock()}get value(){return this._value}unsafeSetValue(Q){this._value=Q,this._afterMountCallbacks.forEach(ee=>ee(Q)),this._afterMountCallbacks=[]}runAfterMount(Q){const{_value:ee,_afterMountCallbacks:se}=this;ee?Q(ee):se.push(Q)}_lock(){const{_semaphores:Q}=P,{_state:ee,_element:se,_lifecycle:G}=this,le=Q.get(se)||Promise.resolve(null),de=function(){const be={resolve:null,promise:null};return be.promise=new Promise(Ee=>{be.resolve=Ee}),be}();this._releaseLock=de;const fe=le.then(()=>ee.destroyedBeforeInitialization?Promise.resolve(void 0):(ee.mountingInProgress=G.mount().then(be=>(be&&this.unsafeSetValue(be),be)),ee.mountingInProgress)).then(async be=>{be&&G.afterMount&&await G.afterMount({element:se,mountResult:be})}).then(()=>de.promise).catch(be=>{console.error("Semaphore mounting error:",be)}).then(()=>{Q.get(se)===fe&&Q.delete(se)});Q.set(se,fe)}}P._semaphores=new Map;const B="Lock from React integration (@ckeditor/ckeditor5-react)";class O extends C().Component{constructor(Q){super(Q),this.domContainer=C().createRef(),this.editorSemaphore=null;const{CKEDITOR_VERSION:ee}=window;if(ee){const[se]=ee.split(".").map(Number);se<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get _semaphoreValue(){const{editorSemaphore:Q}=this;return Q?Q.value:null}get watchdog(){const{_semaphoreValue:Q}=this;return Q?Q.watchdog:null}get editor(){const{_semaphoreValue:Q}=this;return Q?Q.instance:null}shouldComponentUpdate(Q){const{props:ee,editorSemaphore:se}=this;return Q.id!==ee.id||Q.disableWatchdog!==ee.disableWatchdog||(se&&(se.runAfterMount(({instance:G})=>{this._shouldUpdateEditorData(ee,Q,G)&&G.data.set(Q.data)}),"disabled"in Q&&se.runAfterMount(({instance:G})=>{Q.disabled?G.enableReadOnlyMode(B):G.disableReadOnlyMode(B)})),!1)}componentDidMount(){this._initLifeCycleSemaphore()}componentDidUpdate(){this._initLifeCycleSemaphore()}componentWillUnmount(){this._unlockLifeCycleSemaphore()}_unlockLifeCycleSemaphore(){this.editorSemaphore&&(this.editorSemaphore.release(),this.editorSemaphore=null)}_initLifeCycleSemaphore(){this._unlockLifeCycleSemaphore(),this.editorSemaphore=new P(this.domContainer.current,{mount:async()=>this._initializeEditor(),afterMount:({mountResult:Q})=>{const{onReady:ee}=this.props;ee&&this.domContainer.current!==null&&ee(Q.instance)},unmount:async({element:Q,mountResult:ee})=>{const{onAfterDestroy:se}=this.props;try{await this._destroyEditor(ee),Q.innerHTML=""}finally{se&&se(ee.instance)}}})}render(){return C().createElement("div",{ref:this.domContainer})}async _initializeEditor(){if(this.props.disableWatchdog)return{instance:await this._createEditor(this.domContainer.current,this._getConfig()),watchdog:null};const Q=this.context instanceof S.ContextWatchdog?new L(this.context):new O._EditorWatchdog(this.props.editor,this.props.watchdogConfig),ee={current:0};return Q.setCreator(async(se,G)=>{const{editorSemaphore:le}=this,{onAfterDestroy:de}=this.props;ee.current>0&&de&&le&&le.value&&le.value.instance&&de(le.value.instance);const fe=await this._createEditor(se,G);return ee.current>0&&(le.unsafeSetValue({instance:fe,watchdog:Q}),setTimeout(()=>{this.props.onReady&&this.props.onReady(Q.editor)})),ee.current++,fe}),Q.on("error",(se,{error:G,causesRestart:le})=>{(this.props.onError||console.error)(G,{phase:"runtime",willEditorRestart:le})}),await Q.create(this.domContainer.current,this._getConfig()).catch(se=>{(this.props.onError||console.error)(se,{phase:"initialization",willEditorRestart:!1})}),{watchdog:Q,instance:Q.editor}}_createEditor(Q,ee){return this.props.editor.create(Q,ee).then(se=>{"disabled"in this.props&&this.props.disabled&&se.enableReadOnlyMode(B);const G=se.model.document,le=se.editing.view.document;return G.on("change:data",de=>{this.props.onChange&&this.props.onChange(de,se)}),le.on("focus",de=>{this.props.onFocus&&this.props.onFocus(de,se)}),le.on("blur",de=>{this.props.onBlur&&this.props.onBlur(de,se)}),se})}async _destroyEditor(Q){const{watchdog:ee,instance:se}=Q;return new Promise((G,le)=>{setTimeout(async()=>{try{if(ee)return await ee.destroy(),G();if(se)return await se.destroy(),G();G()}catch(de){console.error(de),le(de)}})})}_shouldUpdateEditorData(Q,ee,se){return Q.data!==ee.data&&se.data.get()!==ee.data}_getConfig(){const Q=this.props.config||{};return this.props.data&&Q.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `content` property. The config value takes precedence over `content` property and will be used when both are specified."),{...Q,initialData:Q.initialData||this.props.data||""}}}O.contextType=I,O.propTypes={editor:v().func.isRequired,data:v().string,config:v().object,disableWatchdog:v().bool,watchdogConfig:v().object,onChange:v().func,onReady:v().func,onFocus:v().func,onBlur:v().func,onError:v().func,disabled:v().bool,id:v().any},O._EditorWatchdog=S.EditorWatchdog;class L{constructor(Q){this._contextWatchdog=Q,this._id=function(){const ee=4294967296*Math.random()>>>0,se=4294967296*Math.random()>>>0,G=4294967296*Math.random()>>>0,le=4294967296*Math.random()>>>0;return"e"+x[255&ee]+x[ee>>8&255]+x[ee>>16&255]+x[ee>>24&255]+x[255&se]+x[se>>8&255]+x[se>>16&255]+x[se>>24&255]+x[255&G]+x[G>>8&255]+x[G>>16&255]+x[G>>24&255]+x[255&le]+x[le>>8&255]+x[le>>16&255]+x[le>>24&255]}()}setCreator(Q){this._creator=Q}create(Q,ee){return this._contextWatchdog.add({sourceElementOrData:Q,config:ee,creator:this._creator,id:this._id,type:"editor"})}on(Q,ee){this._contextWatchdog.on("itemError",(se,{itemId:G,error:le})=>{G===this._id&&ee(null,{error:le,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}function V(...Z){return Q=>{Z.forEach(ee=>{typeof ee=="function"?ee(Q):ee!=null&&(ee.current=Q)})}}function F(Z,Q){for(const ee of Object.getOwnPropertyNames(Q))delete Q[ee];for(const[ee,se]of Object.entries(Z))se!==Q&&ee!=="prototype"&&ee!=="__proto__"&&(Q[ee]=se);return Q}const D=Z=>{const Q=(0,A.useRef)();return Q.current=Z,(0,A.useCallback)((...ee)=>Q.current(...ee),[])};function z(Z,Q){return Q.length=0,Q.push(...Z),Q}const W=(Z,Q,ee)=>{((se,G)=>{const le=(0,A.useRef)(null);((de,fe)=>{if(de===fe)return!0;if(!de||!fe)return!1;for(let be=0;be<de.length;++be)if(de[be]!==fe[be])return!1;return!0})(le.current,G)||(le.current=[...G],se())})(()=>{Z&&Z.runAfterMount(Q)},[Z,...ee])},$="Lock from React integration (@ckeditor/ckeditor5-react)",Y=(0,A.memo)((0,A.forwardRef)(({id:Z,semaphore:Q,rootName:ee},se)=>{const G=(0,A.useRef)(null);return(0,A.useEffect)(()=>{let le,de;return Q.runAfterMount(({instance:fe})=>{G.current&&(de=fe,le=fe.ui.view.createEditable(ee,G.current),fe.ui.addEditable(le),fe.editing.view.forceRender())}),()=>{le&&G.current&&de&&de.state!=="destroyed"&&de.ui.removeEditable(le)}},[Q.revision]),C().createElement("div",{key:Q.revision,id:Z,ref:V(se,G)})}));Y.displayName="EditorEditable";const re=(0,A.forwardRef)(({editor:Z},Q)=>{const ee=(0,A.useRef)(null);return(0,A.useEffect)(()=>{const se=ee.current;if(!Z||!se)return;const G=Z.ui.view.toolbar.element;return se&&se.appendChild(G),()=>{se&&se.removeChild(G)}},[Z&&Z.id]),C().createElement("div",{ref:V(ee,Q)})});re.displayName="EditorToolbarWrapper";const te=Z=>{const Q=(0,A.useRef)(Z.semaphoreElement||null),ee=(()=>{const _e=(0,A.useRef)(null),[at,Oe]=(0,A.useState)(()=>Date.now()),Fe=()=>{Oe(Date.now())},De=(qe=!0)=>{_e.current&&(_e.current.release(),_e.current=null),qe&&Oe(Date.now())},ye=qe=>{_e.current&&_e.current.runAfterMount(qe)};return{get current(){return _e.current},revision:at,createAttributeRef:qe=>({get current(){return _e.current&&_e.current.value?_e.current.value[qe]:null}}),unsafeSetValue:qe=>{var kn;(kn=_e.current)===null||kn===void 0||kn.unsafeSetValue(qe),Fe()},release:De,replace:qe=>{De(!1),_e.current=qe(),Fe(),ye(Fe)},runAfterMount:ye}})(),se={watchdog:ee.createAttributeRef("watchdog"),instance:ee.createAttributeRef("instance")},G=(0,A.useContext)(I),[le,de]=(0,A.useState)(()=>Object.keys(Z.data)),[fe,be]=(0,A.useState)({...Z.data}),[Ee,Ne]=(0,A.useState)({...Z.rootsAttributes}),Se=(0,A.useRef)(!0);(0,A.useEffect)(()=>{const _e=Q.current;if(_e&&Z.isLayoutReady!==!1)return ee.replace(()=>new P(_e,{mount:Xe,afterMount:({mountResult:at})=>{const{onReady:Oe}=Z;Oe&&Q.current!==null&&Oe(at.instance)},unmount:async({element:at,mountResult:Oe})=>{const{onAfterDestroy:Fe}=Z;try{await gn(Oe),at.innerHTML=""}finally{Fe&&Fe(Oe.instance)}}})),()=>{ee.release(!1)}},[Z.id,Z.isLayoutReady]);const ve=()=>{const _e=Z.config||{};return Z.data&&_e.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` property. The config value takes precedence over `data` property and will be used when both are specified."),{..._e,rootsAttributes:Ee}},We=D((_e,at)=>{const Oe=_e.model.document;if(!Z.disableTwoWayDataBinding){const Fe={},De={};Oe.differ.getChanges().forEach(ye=>{let qe;if(qe=ye.type=="insert"||ye.type=="remove"?ye.position.root:ye.range.root,!qe.isAttached())return;const{rootName:kn}=qe;Fe[kn]=_e.getData({rootName:kn})}),Oe.differ.getChangedRoots().forEach(ye=>{if(ye.state)return void(Fe[ye.name]!==void 0&&delete Fe[ye.name]);const qe=ye.name;De[qe]=_e.getRootAttributes(qe)}),Object.keys(Fe).length&&be(ye=>({...ye,...Fe})),Object.keys(De).length&&Ne(ye=>({...ye,...De}))}Z.onChange&&Z.onChange(at,_e)}),Ht=D((_e,at,Oe)=>{const Fe=Oe.rootName;Z.disableTwoWayDataBinding||(be(De=>({...De,[Fe]:_e.getData({rootName:Fe})})),Ne(De=>({...De,[Fe]:_e.getRootAttributes(Fe)}))),de(De=>{return ye=[...De,Oe.rootName],Array.from(new Set(ye));var ye})}),Dn=D((_e,at,Oe)=>{const Fe=Oe.rootName;Z.disableTwoWayDataBinding||(be(De=>{const{[Fe]:ye,...qe}=De;return{...qe}}),Ne(De=>{const{[Fe]:ye,...qe}=De;return{...qe}})),de(De=>De.filter(ye=>ye!==Fe))}),jt=D((_e,at)=>(F({...Z.rootsAttributes},Ee),F({...Z.data},fe),z(Object.keys(Z.data),le),Z.editor.create(_e,at).then(Oe=>{const Fe=Oe.getFullData();F({...Fe},fe),F({...Oe.getRootsAttributes()},Ee),z(Object.keys(Fe),le),Z.disabled&&Oe.enableReadOnlyMode($);const De=Oe.model.document,ye=Oe.editing.view.document;return De.on("change:data",qe=>We(Oe,qe)),Oe.on("addRoot",(qe,kn)=>Ht(Oe,qe,kn)),Oe.on("detachRoot",(qe,kn)=>Dn(Oe,qe,kn)),ye.on("focus",qe=>{Z.onFocus&&Z.onFocus(qe,Oe)}),ye.on("blur",qe=>{Z.onBlur&&Z.onBlur(qe,Oe)}),Oe}))),gn=_e=>{const{watchdog:at,instance:Oe}=_e;return new Promise((Fe,De)=>{setTimeout(async()=>{try{if(at)return await at.destroy(),Fe();if(Oe)return await Oe.destroy(),Fe();Fe()}catch(ye){console.error(ye),De(ye)}})})},Xe=async()=>{if(Z.disableWatchdog)return{instance:await jt(Z.data,ve()),watchdog:null};const _e=G instanceof S.ContextWatchdog?new L(G):new S.EditorWatchdog(Z.editor,Z.watchdogConfig),at={current:0};return _e.setCreator(async(Oe,Fe)=>{const{onAfterDestroy:De}=Z;at.current>0&&De&&se.instance.current&&De(se.instance.current);const ye=await jt(Oe,Fe);return at.current>0&&(ee.unsafeSetValue({instance:ye,watchdog:_e}),setTimeout(()=>{Z.onReady&&Z.onReady(_e.editor)})),at.current++,ye}),_e.on("error",(Oe,{error:Fe,causesRestart:De})=>{(Z.onError||console.error)(Fe,{phase:"runtime",willEditorRestart:De})}),await _e.create(fe,ve()).catch(Oe=>{throw(Z.onError||console.error)(Oe,{phase:"initialization",willEditorRestart:!1}),Oe}),{watchdog:_e,instance:_e.editor}},Te=(0,A.useCallback)(_e=>{ee.runAfterMount(()=>{Se.current=!0,be(_e)})},[be]),$n=(0,A.useCallback)(_e=>{ee.runAfterMount(()=>{Se.current=!0,Ne(_e)})},[Ne]),di=C().createElement(re,{ref:Q,editor:se.instance.current});W(ee.current,({instance:_e})=>{Z.disabled?_e.enableReadOnlyMode($):_e.disableReadOnlyMode($)},[Z.disabled]),W(ee.current,({instance:_e})=>{if(Se.current){Se.current=!1;const at=Object.keys(fe),Oe=Object.keys(Ee);if(!at.every(kt=>Oe.includes(kt)))throw console.error("`data` and `attributes` objects must have the same keys (roots)."),new Error("`data` and `attributes` objects must have the same keys (roots).");const Fe=_e.getFullData(),De=_e.getRootsAttributes(),{addedKeys:ye,removedKeys:qe}=((kt,Yt)=>{const yr=Object.keys(kt),Ro=Object.keys(Yt);return{addedKeys:Ro.filter(Lo=>!yr.includes(Lo)),removedKeys:yr.filter(Lo=>!Ro.includes(Lo))}})(Fe,fe||{}),kn=at.some(kt=>Fe[kt]!==void 0&&JSON.stringify(Fe[kt])!==JSON.stringify(fe[kt])),ln=Oe.filter(kt=>JSON.stringify(De[kt])!==JSON.stringify(Ee[kt])),$t=kt=>{kt.forEach(Yt=>{_e.addRoot(Yt,{data:fe[Yt]||"",attributes:(Ee==null?void 0:Ee[Yt])||{},isUndoable:!0})})},go=kt=>{kt.forEach(Yt=>{_e.detachRoot(Yt,!0)})},ra=()=>{_e.data.set(fe,{suppressErrorInCollaboration:!0})},ui=(kt,Yt)=>{Yt.forEach(yr=>{Object.keys(Ee[yr]).forEach(Ro=>{_e.registerRootAttribute(Ro)}),kt.clearAttributes(_e.model.document.getRoot(yr)),kt.setAttributes(Ee[yr],_e.model.document.getRoot(yr))})};setTimeout(()=>{_e.model.change(kt=>{$t(ye),go(qe),kn&&ra(),ln.length&&ui(kt,ln)})})}},[fe,Ee]);const Ln=le.map(_e=>C().createElement(Y,{key:_e,id:_e,rootName:_e,semaphore:ee}));return{editor:se.instance.current,editableElements:Ln,toolbarElement:di,data:fe,setData:Te,attributes:Ee,setAttributes:$n}}})(),g})())})(JP);var yB=JP.exports,tp={exports:{}};tp.exports;(function(n,o){(function(a){const d=a.en=a.en||{};d.dictionary=Object.assign(d.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(may require <kbd>Fn</kbd>)","%0 of %1":"%0 of %1",Accept:"Accept",Accessibility:"Accessibility","Accessibility help":"Accessibility help","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Below, you can find a list of keyboard shortcuts that can be used in the editor.",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bold text":"Bold text",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close","Close contextual balloons, dropdowns, and dialogs":"Close contextual balloons, dropdowns, and dialogs",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Content editing keystrokes":"Content editing keystrokes","Copy selected content":"Copy selected content","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Create link":"Create link",Custom:"Custom","Custom image size":"Custom image size",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Decrease list item indent":"Decrease list item indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor editing area: %0":"Editor editing area: %0","Editor menu bar":"Editor menu bar","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Entering a to-do list":"Entering a to-do list","Error during image upload":"Error during image upload","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.","Failed to determine category of edited image.":"Failed to determine category of edited image.","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Help Contents. To close this dialog press ESC.":"Help Contents. To close this dialog press ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image from computer":"Image from computer","Image resize list":"Image resize list","Image toolbar":"Image toolbar","Image upload complete":"Image upload complete","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Increase list item indent":"Increase list item indent",Insert:"Insert","Insert a hard break (a new paragraph)":"Insert a hard break (a new paragraph)","Insert a new paragraph directly after a widget":"Insert a new paragraph directly after a widget","Insert a new paragraph directly before a widget":"Insert a new paragraph directly before a widget","Insert a new table row (when in the last cell of a table)":"Insert a new table row (when in the last cell of a table)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Insert a soft break (a <code>&lt;br&gt;</code> element)","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset","Invalid start index value.":"Invalid start index value.",Italic:"Italic","Italic text":"Italic text","Justify cell text":"Justify cell text","Keystrokes that can be used in a list":"Keystrokes that can be used in a list","Keystrokes that can be used in a table cell":"Keystrokes that can be used in a table cell","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Keystrokes that can be used when a widget is selected (for example: image, table, etc.)","Leaving a to-do list":"Leaving a to-do list","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","Link URL must not be empty.":"Link URL must not be empty.","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",MENU_BAR_MENU_EDIT:"Edit",MENU_BAR_MENU_FILE:"File",MENU_BAR_MENU_FONT:"Font",MENU_BAR_MENU_FORMAT:"Format",MENU_BAR_MENU_HELP:"Help",MENU_BAR_MENU_INSERT:"Insert",MENU_BAR_MENU_TEXT:"Text",MENU_BAR_MENU_TOOLS:"Tools",MENU_BAR_MENU_VIEW:"View","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Move focus between form fields (inputs, buttons, etc.)":"Move focus between form fields (inputs, buttons, etc.)","Move focus in and out of an active dialog window":"Move focus in and out of an active dialog window","Move focus to the menu bar, navigate between menu bars":"Move focus to the menu bar, navigate between menu bars","Move focus to the toolbar, navigate between toolbars":"Move focus to the toolbar, navigate between toolbars","Move out of a link":"Move out of a link","Move out of an inline code style":"Move out of an inline code style","Move the caret to allow typing directly after a widget":"Move the caret to allow typing directly after a widget","Move the caret to allow typing directly before a widget":"Move the caret to allow typing directly before a widget","Move the selection to the next cell":"Move the selection to the next cell","Move the selection to the previous cell":"Move the selection to the previous cell","Navigate through the table":"Navigate through the table","Navigate through the toolbar or menu bar":"Navigate through the toolbar or menu bar",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab","Open the accessibility help dialog":"Open the accessibility help dialog",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste content":"Paste content","Paste content as plain text":"Paste content as plain text","Paste the media URL in the input.":"Paste the media URL in the input.",'Please enter a valid color (e.g. "ff0000").':'Please enter a valid color (e.g. "ff0000").',"Press %0 for help.":"Press %0 for help.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image (in %0)":"Resize image (in %0)","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Revert autoformatting action":"Revert autoformatting action","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Strikethrough text":"Strikethrough text",Style:"Style",Subscript:"Subscript",Superscript:"Superscript",Table:"Table","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"The value must not be empty.":"The value must not be empty.","The value should be a plain number.":"The value should be a plain number.","These keyboard shortcuts allow for quick access to content editing features.":"These keyboard shortcuts allow for quick access to content editing features.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline","Underline text":"Underline text",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Uploading image":"Uploading image","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.","User interface and content navigation keystrokes":"User interface and content navigation keystrokes","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(a,d){n.exports=d()}(self,()=>(()=>{var a={9246:(m,w,g)=>{const A=g(6931),C={};for(const v of Object.keys(A))C[A[v]]=v;const y={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};m.exports=y;for(const v of Object.keys(y)){if(!("channels"in y[v]))throw new Error("missing channels property: "+v);if(!("labels"in y[v]))throw new Error("missing channel labels property: "+v);if(y[v].labels.length!==y[v].channels)throw new Error("channel and label counts mismatch: "+v);const{channels:x,labels:S}=y[v];delete y[v].channels,delete y[v].labels,Object.defineProperty(y[v],"channels",{value:x}),Object.defineProperty(y[v],"labels",{value:S})}y.rgb.hsl=function(v){const x=v[0]/255,S=v[1]/255,I=v[2]/255,N=Math.min(x,S,I),P=Math.max(x,S,I),B=P-N;let O,L;P===N?O=0:x===P?O=(S-I)/B:S===P?O=2+(I-x)/B:I===P&&(O=4+(x-S)/B),O=Math.min(60*O,360),O<0&&(O+=360);const V=(N+P)/2;return L=P===N?0:V<=.5?B/(P+N):B/(2-P-N),[O,100*L,100*V]},y.rgb.hsv=function(v){let x,S,I,N,P;const B=v[0]/255,O=v[1]/255,L=v[2]/255,V=Math.max(B,O,L),F=V-Math.min(B,O,L),D=function(z){return(V-z)/6/F+.5};return F===0?(N=0,P=0):(P=F/V,x=D(B),S=D(O),I=D(L),B===V?N=I-S:O===V?N=.3333333333333333+x-I:L===V&&(N=.6666666666666666+S-x),N<0?N+=1:N>1&&(N-=1)),[360*N,100*P,100*V]},y.rgb.hwb=function(v){const x=v[0],S=v[1];let I=v[2];const N=y.rgb.hsl(v)[0],P=1/255*Math.min(x,Math.min(S,I));return I=1-.00392156862745098*Math.max(x,Math.max(S,I)),[N,100*P,100*I]},y.rgb.cmyk=function(v){const x=v[0]/255,S=v[1]/255,I=v[2]/255,N=Math.min(1-x,1-S,1-I);return[100*((1-x-N)/(1-N)||0),100*((1-S-N)/(1-N)||0),100*((1-I-N)/(1-N)||0),100*N]},y.rgb.keyword=function(v){const x=C[v];if(x)return x;let S,I=1/0;for(const B of Object.keys(A)){const O=A[B],L=(P=O,((N=v)[0]-P[0])**2+(N[1]-P[1])**2+(N[2]-P[2])**2);L<I&&(I=L,S=B)}var N,P;return S},y.keyword.rgb=function(v){return A[v]},y.rgb.xyz=function(v){let x=v[0]/255,S=v[1]/255,I=v[2]/255;return x=x>.04045?((x+.055)/1.055)**2.4:x/12.92,S=S>.04045?((S+.055)/1.055)**2.4:S/12.92,I=I>.04045?((I+.055)/1.055)**2.4:I/12.92,[100*(.4124*x+.3576*S+.1805*I),100*(.2126*x+.7152*S+.0722*I),100*(.0193*x+.1192*S+.9505*I)]},y.rgb.lab=function(v){const x=y.rgb.xyz(v);let S=x[0],I=x[1],N=x[2];return S/=95.047,I/=100,N/=108.883,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,I=I>.008856?I**.3333333333333333:7.787*I+.13793103448275862,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,[116*I-16,500*(S-I),200*(I-N)]},y.hsl.rgb=function(v){const x=v[0]/360,S=v[1]/100,I=v[2]/100;let N,P,B;if(S===0)return B=255*I,[B,B,B];N=I<.5?I*(1+S):I+S-I*S;const O=2*I-N,L=[0,0,0];for(let V=0;V<3;V++)P=x+.3333333333333333*-(V-1),P<0&&P++,P>1&&P--,B=6*P<1?O+6*(N-O)*P:2*P<1?N:3*P<2?O+(N-O)*(.6666666666666666-P)*6:O,L[V]=255*B;return L},y.hsl.hsv=function(v){const x=v[0];let S=v[1]/100,I=v[2]/100,N=S;const P=Math.max(I,.01);return I*=2,S*=I<=1?I:2-I,N*=P<=1?P:2-P,[x,100*(I===0?2*N/(P+N):2*S/(I+S)),100*((I+S)/2)]},y.hsv.rgb=function(v){const x=v[0]/60,S=v[1]/100;let I=v[2]/100;const N=Math.floor(x)%6,P=x-Math.floor(x),B=255*I*(1-S),O=255*I*(1-S*P),L=255*I*(1-S*(1-P));switch(I*=255,N){case 0:return[I,L,B];case 1:return[O,I,B];case 2:return[B,I,L];case 3:return[B,O,I];case 4:return[L,B,I];case 5:return[I,B,O]}},y.hsv.hsl=function(v){const x=v[0],S=v[1]/100,I=v[2]/100,N=Math.max(I,.01);let P,B;B=(2-S)*I;const O=(2-S)*N;return P=S*N,P/=O<=1?O:2-O,P=P||0,B/=2,[x,100*P,100*B]},y.hwb.rgb=function(v){const x=v[0]/360;let S=v[1]/100,I=v[2]/100;const N=S+I;let P;N>1&&(S/=N,I/=N);const B=Math.floor(6*x),O=1-I;P=6*x-B,1&B&&(P=1-P);const L=S+P*(O-S);let V,F,D;switch(B){default:case 6:case 0:V=O,F=L,D=S;break;case 1:V=L,F=O,D=S;break;case 2:V=S,F=O,D=L;break;case 3:V=S,F=L,D=O;break;case 4:V=L,F=S,D=O;break;case 5:V=O,F=S,D=L}return[255*V,255*F,255*D]},y.cmyk.rgb=function(v){const x=v[0]/100,S=v[1]/100,I=v[2]/100,N=v[3]/100;return[255*(1-Math.min(1,x*(1-N)+N)),255*(1-Math.min(1,S*(1-N)+N)),255*(1-Math.min(1,I*(1-N)+N))]},y.xyz.rgb=function(v){const x=v[0]/100,S=v[1]/100,I=v[2]/100;let N,P,B;return N=3.2406*x+-1.5372*S+-.4986*I,P=-.9689*x+1.8758*S+.0415*I,B=.0557*x+-.204*S+1.057*I,N=N>.0031308?1.055*N**.4166666666666667-.055:12.92*N,P=P>.0031308?1.055*P**.4166666666666667-.055:12.92*P,B=B>.0031308?1.055*B**.4166666666666667-.055:12.92*B,N=Math.min(Math.max(0,N),1),P=Math.min(Math.max(0,P),1),B=Math.min(Math.max(0,B),1),[255*N,255*P,255*B]},y.xyz.lab=function(v){let x=v[0],S=v[1],I=v[2];return x/=95.047,S/=100,I/=108.883,x=x>.008856?x**.3333333333333333:7.787*x+.13793103448275862,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,I=I>.008856?I**.3333333333333333:7.787*I+.13793103448275862,[116*S-16,500*(x-S),200*(S-I)]},y.lab.xyz=function(v){let x,S,I;S=(v[0]+16)/116,x=v[1]/500+S,I=S-v[2]/200;const N=S**3,P=x**3,B=I**3;return S=N>.008856?N:(S-.13793103448275862)/7.787,x=P>.008856?P:(x-.13793103448275862)/7.787,I=B>.008856?B:(I-.13793103448275862)/7.787,x*=95.047,S*=100,I*=108.883,[x,S,I]},y.lab.lch=function(v){const x=v[0],S=v[1],I=v[2];let N;return N=360*Math.atan2(I,S)/2/Math.PI,N<0&&(N+=360),[x,Math.sqrt(S*S+I*I),N]},y.lch.lab=function(v){const x=v[0],S=v[1],I=v[2]/360*2*Math.PI;return[x,S*Math.cos(I),S*Math.sin(I)]},y.rgb.ansi16=function(v,x=null){const[S,I,N]=v;let P=x===null?y.rgb.hsv(v)[2]:x;if(P=Math.round(P/50),P===0)return 30;let B=30+(Math.round(N/255)<<2|Math.round(I/255)<<1|Math.round(S/255));return P===2&&(B+=60),B},y.hsv.ansi16=function(v){return y.rgb.ansi16(y.hsv.rgb(v),v[2])},y.rgb.ansi256=function(v){const x=v[0],S=v[1],I=v[2];return x===S&&S===I?x<8?16:x>248?231:Math.round((x-8)/247*24)+232:16+36*Math.round(x/255*5)+6*Math.round(S/255*5)+Math.round(I/255*5)},y.ansi16.rgb=function(v){let x=v%10;if(x===0||x===7)return v>50&&(x+=3.5),x=x/10.5*255,[x,x,x];const S=.5*(1+~~(v>50));return[(1&x)*S*255,(x>>1&1)*S*255,(x>>2&1)*S*255]},y.ansi256.rgb=function(v){if(v>=232){const S=10*(v-232)+8;return[S,S,S]}let x;return v-=16,[Math.floor(v/36)/5*255,Math.floor((x=v%36)/6)/5*255,x%6/5*255]},y.rgb.hex=function(v){const x=(((255&Math.round(v[0]))<<16)+((255&Math.round(v[1]))<<8)+(255&Math.round(v[2]))).toString(16).toUpperCase();return"000000".substring(x.length)+x},y.hex.rgb=function(v){const x=v.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!x)return[0,0,0];let S=x[0];x[0].length===3&&(S=S.split("").map(N=>N+N).join(""));const I=parseInt(S,16);return[I>>16&255,I>>8&255,255&I]},y.rgb.hcg=function(v){const x=v[0]/255,S=v[1]/255,I=v[2]/255,N=Math.max(Math.max(x,S),I),P=Math.min(Math.min(x,S),I),B=N-P;let O,L;return O=B<1?P/(1-B):0,L=B<=0?0:N===x?(S-I)/B%6:N===S?2+(I-x)/B:4+(x-S)/B,L/=6,L%=1,[360*L,100*B,100*O]},y.hsl.hcg=function(v){const x=v[1]/100,S=v[2]/100,I=S<.5?2*x*S:2*x*(1-S);let N=0;return I<1&&(N=(S-.5*I)/(1-I)),[v[0],100*I,100*N]},y.hsv.hcg=function(v){const x=v[1]/100,S=v[2]/100,I=x*S;let N=0;return I<1&&(N=(S-I)/(1-I)),[v[0],100*I,100*N]},y.hcg.rgb=function(v){const x=v[0]/360,S=v[1]/100,I=v[2]/100;if(S===0)return[255*I,255*I,255*I];const N=[0,0,0],P=x%1*6,B=P%1,O=1-B;let L=0;switch(Math.floor(P)){case 0:N[0]=1,N[1]=B,N[2]=0;break;case 1:N[0]=O,N[1]=1,N[2]=0;break;case 2:N[0]=0,N[1]=1,N[2]=B;break;case 3:N[0]=0,N[1]=O,N[2]=1;break;case 4:N[0]=B,N[1]=0,N[2]=1;break;default:N[0]=1,N[1]=0,N[2]=O}return L=(1-S)*I,[255*(S*N[0]+L),255*(S*N[1]+L),255*(S*N[2]+L)]},y.hcg.hsv=function(v){const x=v[1]/100,S=x+v[2]/100*(1-x);let I=0;return S>0&&(I=x/S),[v[0],100*I,100*S]},y.hcg.hsl=function(v){const x=v[1]/100,S=v[2]/100*(1-x)+.5*x;let I=0;return S>0&&S<.5?I=x/(2*S):S>=.5&&S<1&&(I=x/(2*(1-S))),[v[0],100*I,100*S]},y.hcg.hwb=function(v){const x=v[1]/100,S=x+v[2]/100*(1-x);return[v[0],100*(S-x),100*(1-S)]},y.hwb.hcg=function(v){const x=v[1]/100,S=1-v[2]/100,I=S-x;let N=0;return I<1&&(N=(S-I)/(1-I)),[v[0],100*I,100*N]},y.apple.rgb=function(v){return[v[0]/65535*255,v[1]/65535*255,v[2]/65535*255]},y.rgb.apple=function(v){return[v[0]/255*65535,v[1]/255*65535,v[2]/255*65535]},y.gray.rgb=function(v){return[v[0]/100*255,v[0]/100*255,v[0]/100*255]},y.gray.hsl=function(v){return[0,0,v[0]]},y.gray.hsv=y.gray.hsl,y.gray.hwb=function(v){return[0,100,v[0]]},y.gray.cmyk=function(v){return[0,0,0,v[0]]},y.gray.lab=function(v){return[v[0],0,0]},y.gray.hex=function(v){const x=255&Math.round(v[0]/100*255),S=((x<<16)+(x<<8)+x).toString(16).toUpperCase();return"000000".substring(S.length)+S},y.rgb.gray=function(v){return[(v[0]+v[1]+v[2])/3/255*100]}},9047:(m,w,g)=>{const A=g(9246),C=g(802),y={};Object.keys(A).forEach(v=>{y[v]={},Object.defineProperty(y[v],"channels",{value:A[v].channels}),Object.defineProperty(y[v],"labels",{value:A[v].labels});const x=C(v);Object.keys(x).forEach(S=>{const I=x[S];y[v][S]=function(N){const P=function(...B){const O=B[0];if(O==null)return O;O.length>1&&(B=O);const L=N(B);if(typeof L=="object")for(let V=L.length,F=0;F<V;F++)L[F]=Math.round(L[F]);return L};return"conversion"in N&&(P.conversion=N.conversion),P}(I),y[v][S].raw=function(N){const P=function(...B){const O=B[0];return O==null?O:(O.length>1&&(B=O),N(B))};return"conversion"in N&&(P.conversion=N.conversion),P}(I)})}),m.exports=y},802:(m,w,g)=>{const A=g(9246);function C(x){const S=function(){const N={},P=Object.keys(A);for(let B=P.length,O=0;O<B;O++)N[P[O]]={distance:-1,parent:null};return N}(),I=[x];for(S[x].distance=0;I.length;){const N=I.pop(),P=Object.keys(A[N]);for(let B=P.length,O=0;O<B;O++){const L=P[O],V=S[L];V.distance===-1&&(V.distance=S[N].distance+1,V.parent=N,I.unshift(L))}}return S}function y(x,S){return function(I){return S(x(I))}}function v(x,S){const I=[S[x].parent,x];let N=A[S[x].parent][x],P=S[x].parent;for(;S[P].parent;)I.unshift(S[P].parent),N=y(A[S[P].parent][P],N),P=S[P].parent;return N.conversion=I,N}m.exports=function(x){const S=C(x),I={},N=Object.keys(S);for(let P=N.length,B=0;B<P;B++){const O=N[B];S[O].parent!==null&&(I[O]=v(O,S))}return I}},6931:m=>{m.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},4199:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const x=v},8708:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const x=v},1866:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,':root{--ck-image-processing-highlight-color:#f9fafa;--ck-image-processing-background-color:#e3e5e8}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{animation:ck-image-processing-animation 2s linear infinite;background:linear-gradient(90deg,var(--ck-image-processing-background-color),var(--ck-image-processing-highlight-color),var(--ck-image-processing-background-color));background-size:200% 100%;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}to{background-position:-200% 0}}',"",{version:3,sources:["webpack://./../ckeditor5-ckbox/theme/ckboximageedit.css"],names:[],mappings:"AAKA,MAEC,6CAAyD,CACzD,8CACD,CAIE,gDACC,iBA2BD,CAzBC,uDAmBC,0DAA2D,CAR3D,oKAKC,CACD,yBAA0B,CAhB1B,UAAW,CAOX,WAAY,CAHZ,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAKN,UAAW,CAHX,SAcD,CAEA,oDACC,WACD,CAKH,yCACC,GACC,0BACD,CACA,GACC,2BACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Based on default CKBox theme colors */
	--ck-image-processing-highlight-color: hsl(220, 10%, 98%);
	--ck-image-processing-background-color: hsl(220, 10%, 90%);
}

.ck.ck-editor__editable {
	& .image {
		&.image-processing {
			position: relative;

			&:before {
				content: '';

				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;

				height: 100%;
				width: 100%;

				background: linear-gradient(
					90deg,
					var(--ck-image-processing-background-color),
					var(--ck-image-processing-highlight-color),
					var(--ck-image-processing-background-color)
				);
				background-size: 200% 100%;

				animation: ck-image-processing-animation 2s linear infinite;
			}

			& img {
				height: 100%;
			}
		}
	}
}

@keyframes ck-image-processing-animation {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}
`],sourceRoot:""}]);const x=v},7793:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const x=v},7388:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border:solid var(--ck-color-base-border);border-width:1px 1px 0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{border-bottom-width:1px}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar{border:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,8DCED,eDeC,CAjBA,mKCMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAcF,CAjBA,8DAOC,wCAAsB,CAAtB,sBAUD,CARC,8FACC,uBACD,CAEA,qJAEC,QACD,CAMH,yCAEC,0CAA2C,CCtB3C,eDgCD,CAZA,yHChBE,qCAAsC,CDqBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-panel);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-sticky-panel__content {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border: 1px solid var(--ck-color-base-border);
			border-bottom-width: 0;

			&.ck-sticky-panel__content_sticky {
				border-bottom-width: 1px;
			}

			& .ck-menu-bar,
			& .ck-toolbar {
				border: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const x=v},4098:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}@media (forced-colors:active){.ck .ck-placeholder,.ck.ck-placeholder{forced-color-adjust:preserve-parent-color}}.ck .ck-placeholder:before,.ck.ck-placeholder:before{cursor:text}@media (forced-colors:none){.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text)}}@media (forced-colors:active){.ck .ck-placeholder:before,.ck.ck-placeholder:before{font-style:italic;margin-left:1px}}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC7BC,8BACC,uCCOA,yCDLA,CACD,CCOA,qDACC,WAmBD,CDvBA,4BACC,qDCMC,6CDJD,CACD,CAZA,8BACC,qDCsBC,iBAAkB,CAMlB,eD1BD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	@mixin ck-media-forced-colors {
		/*
		 * This is needed for Edge on Windows to use the right color for the placeholder content (::before).
		 * See https://github.com/ckeditor/ckeditor5/issues/14907.
		 */
		forced-color-adjust: preserve-parent-color;
	}

	&::before {
		cursor: text;

		@mixin ck-media-default-colors {
			color: var(--ck-color-engine-placeholder-text);
		}

		@mixin ck-media-forced-colors {
			/*
			 * In the high contrast mode there is no telling between regular and placeholder text. Using
			 * italic text to address that issue. See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			font-style: italic;

			/*
			 * Without this margin, the caret will not show up and blink when the user puts the selection
			 * in the placeholder (Edge on Windows). See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			margin-left: 1px;
		}
	}
}
`],sourceRoot:""}]);const x=v},8264:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const x=v},6269:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const x=v},265:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const x=v},5247:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highlighted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}@media (forced-colors:active){.ck-content .image>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:none}}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highlighted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAYD,CAJC,8BAXD,8BAYE,sBAAuB,CACvB,WAEF,CADC,CCdA,4BACC,qEDmBA,iDCjBA,CACD,CDmBA,uCALD,qEAME,cAEF,CADC,CAGD,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
	@media (forced-colors: active) {
		background-color: unset;
		color: unset;
	}
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	@mixin ck-media-default-colors {
		animation: ck-image-caption-highlight .6s ease-out;
	}

	@media (prefers-reduced-motion: reduce) {
		animation: none;
	}
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const x=v},4642:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-image-custom-resize-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{display:inline-block}.ck.ck-image-custom-resize-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-image-custom-resize-form{flex-wrap:wrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-image-custom-resize-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecustomresizeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,gCAIC,sBAAuB,CAHvB,YAAa,CACb,kBAAmB,CACnB,gBAsBD,CAnBC,uDACC,oBACD,CAEA,0CACC,YACD,CCbA,oCDCD,gCAeE,cAUF,CARE,uDACC,eACD,CAEA,2CACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-image-custom-resize-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: flex-start;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const x=v},3350:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAMC,yDACC,YAAa,CACb,mCACD,CCFD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-url {
	& .ck-image-insert-url__action-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-image-insert-insert-by-url-width: 250px;
}

.ck.ck-image-insert-url {
	--ck-input-width: 100%;

	& .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}

.ck.ck-image-insert-form {
	& > .ck.ck-button {
		display: block;
		width: 100%;
		padding: var(--ck-list-button-padding);

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& > .ck.ck-collapsible {
		&:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}

		min-width: var(--ck-image-insert-insert-by-url-width);
	}

	/* This is the case when there are no other integrations configured than insert by URL */
	& > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}

	&:focus {
		outline: none;
	}
}
`],sourceRoot:""}]);const x=v},7378:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const x=v},3469:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const x=v},6386:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const x=v},7693:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@media (prefers-reduced-motion:reduce){.ck-image-upload-complete-icon{animation-duration:0ms}.ck-image-upload-complete-icon:after{animation:none;height:.45em;opacity:1;width:.3em}}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFAqCD,CAjCC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAEA,uCA7CD,+BA8CE,sBASF,CAPE,qCACC,cAAe,CAGf,YAAc,CAFd,SAAU,CACV,UAED,CACD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}

	@media (prefers-reduced-motion: reduce) {
		animation-duration: 0ms;

		&::after {
			animation: none;
			opacity: 1;
			width: 0.3em;
			height: 0.45em;
		}
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const x=v},1559:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const x=v},2267:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:none;opacity:1}}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBAMD,CAJC,uCAHD,yFAKE,cAAe,CADf,SAGF,CADC,CAKF,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;

			@media (prefers-reduced-motion: reduce) {
				opacity: 1;
				animation: none;
			}
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const x=v},4062:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const x=v},7719:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const x=v},8762:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const x=v},3817:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-link-form{align-items:flex-start;display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBAEC,sBAAuB,CADvB,YAkBD,CAfC,2BACC,YACD,CCPA,oCDCD,iBASE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CChBD,CDwBD,iCACC,aAYD,CALE,wHAEC,mCACD,CEhCF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;
	align-items: flex-start;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const x=v},4808:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzUuNzUgMCAwIDEtLjIxNy4yMDYgNS4yNTEgNS4yNTEgMCAwIDEtOC41MDMtNS45NTUuNy43IDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NHptNS40OTQtNS4zMzVhLjc1Ljc1IDAgMCAxLS4xMi4yNzRsLTEuMTQ3IDEuNjM5YS43NS43NSAwIDEgMS0xLjIyOC0uODZsLjg2LTEuMjNhMy43NSAzLjc1IDAgMCAwLTYuMTQ0LTQuMzAxbC0uODYgMS4yMjlhLjc1Ljc1IDAgMCAxLTEuMjI5LS44NmwxLjE0OC0xLjY0YS43NS43NSAwIDAgMSAuMjE3LS4yMDYgNS4yNTEgNS4yNTEgMCAwIDEgOC41MDMgNS45NTVtLTQuNTYzLTIuNTMyYS43NS43NSAwIDAgMSAuMTg0IDEuMDQ1bC0zLjE1NSA0LjUwNWEuNzUuNzUgMCAxIDEtMS4yMjktLjg2bDMuMTU1LTQuNTA2YS43NS43NSAwIDAgMSAxLjA0NS0uMTg0Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,k2BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const x=v},1232:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const x=v},6903:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const x=v},9968:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const x=v},7141:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const x=v},8991:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-content .todo-list .todo-list__label>input:before{transition:none}}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{transition:none}}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CA4EA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAtFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqFC,CAFA,wDApEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAoEA,CAhED,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sDAYE,eAEF,CADC,CAGD,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FAxHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAuHA,CAFA,wGAtGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAsGD,CAlGA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sGAYE,eAEF,CADC,CAGD,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const x=v},70:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const x=v},7048:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSlzY2FsZSguOTgwMTIpIj48cmVjdCB3aWR0aD0iNjAuMDk5IiBoZWlnaHQ9IjYwLjA5OSIgeD0iMTc2LjAzMSIgeT0iMjMxLjM5OSIgZmlsbD0iIzM0YTY2OCIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiIHJ4PSI1LjIzOCIgcnk9IjUuMjM4Ii8+PHBhdGggZmlsbD0iIzVjODhjNSIgZD0ibTIwNi40NzcgMjYwLjktMjguOTg3IDI4Ljk4N2E1LjIyIDUuMjIgMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiLz48cGF0aCBmaWxsPSIjZGQ0YjNlIiBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwN3EuNS43NTMuOTUgMS41MDguNTE1LjcxNS45ODggMS40NGMxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5cS40NzMtLjcyMy45ODgtMS40MzkuNDUtLjc1NS45NS0xLjUwOGMuMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIGN4PSIyMjYuNzQyIiBjeT0iMjM5LjAwMiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiIHJ4PSI1LjgyOCIgcnk9IjUuNTY0Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjlxLS4wMDEtLjU0My0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhxLS4wMDEtLjAwMy0uMDA0LS4wMDVjLTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTVtNC40MyA1LjY2LjAwMy4wMDZ2LS4wMDN6IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGZpbGw9IiNjM2MzYzMiIGQ9Im0yMTUuMTg0IDI1MS45MjktNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMiA1LjIgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjl6Ii8+PHBhdGggZmlsbD0iI2ZkZGM0ZiIgZD0ibTIxMi45ODMgMjQ4LjQ5NS0zNi45NTIgMzYuOTUzdi44MTJhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYgMTM2IDAgMCAwLTIuNzY0LTMuOSAzOCAzOCAwIDAgMC0uOTg5LTEuNDQgMzUgMzUgMCAwIDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiPjxwYXRoIGZpbGw9IiNGRkZGRkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTk2Ny40ODQgMEg1Ni41MTdDMjUuMzA0IDAgMCAyNS4zMDQgMCA1Ni41MTd2OTEwLjk2NkMwIDk5OC42OTQgMjUuMjk3IDEwMjQgNTYuNTIyIDEwMjRINTQ3VjYyOEg0MTRWNDczaDEzM1YzNTkuMDI5YzAtMTMyLjI2MiA4MC43NzMtMjA0LjI4MiAxOTguNzU2LTIwNC4yODIgNTYuNTEzIDAgMTA1LjA4NiA0LjIwOCAxMTkuMjQ0IDYuMDg5VjI5OWwtODEuNjE2LjAzN2MtNjMuOTkzIDAtNzYuMzg0IDMwLjQ5Mi03Ni4zODQgNzUuMjM2VjQ3M2gxNTMuNDg3bC0xOS45ODYgMTU1SDcwN3YzOTZoMjYwLjQ4NGMzMS4yMTMgMCA1Ni41MTYtMjUuMzAzIDU2LjUxNi01Ni41MTZWNTYuNTE1QzEwMjQgMjUuMzAzIDk5OC42OTcgMCA5NjcuNDg0IDAiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OW0wIDQ1LjM5MWM2Ny4yNjUgMCA3NS4yMzMuMjU3IDEwMS43OTcgMS40NjkgMjQuNTYyIDEuMTIgMzcuOTAxIDUuMjI0IDQ2Ljc3OCA4LjY3NCAxMS43NTkgNC41NyAyMC4xNTEgMTAuMDI5IDI4Ljk2NiAxOC44NDVzMTQuMjc1IDE3LjIwNyAxOC44NDUgMjguOTY2YzMuNDUgOC44NzcgNy41NTQgMjIuMjE2IDguNjc0IDQ2Ljc3OCAxLjIxMiAyNi41NjQgMS40NjkgMzQuNTMyIDEuNDY5IDEwMS43OTggMCA2Ny4yNjUtLjI1NyA3NS4yMzMtMS40NjkgMTAxLjc5Ny0xLjEyIDI0LjU2Mi01LjIyNCAzNy45MDEtOC42NzQgNDYuNzc4LTQuNTcgMTEuNzU5LTEwLjAyOSAyMC4xNTEtMTguODQ1IDI4Ljk2NnMtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1Yy04Ljg3NyAzLjQ1LTIyLjIxNiA3LjU1NC00Ni43NzggOC42NzQtMjYuNTYgMS4yMTItMzQuNTI3IDEuNDY5LTEwMS43OTcgMS40NjktNjcuMjcxIDAtNzUuMjM3LS4yNTctMTAxLjc5OC0xLjQ2OS0yNC41NjItMS4xMi0zNy45MDEtNS4yMjQtNDYuNzc4LTguNjc0LTExLjc1OS00LjU3LTIwLjE1MS0xMC4wMjktMjguOTY2LTE4Ljg0NXMtMTQuMjc1LTE3LjIwNy0xOC44NDUtMjguOTY2Yy0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NnMxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDVjOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OSIgbWFzaz0idXJsKCNiKSIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0yNTEuOTIxIDMzNi4wNTNjLTQ2LjM3OCAwLTgzLjk3NC0zNy41OTYtODMuOTc0LTgzLjk3M3MzNy41OTYtODMuOTc0IDgzLjk3NC04My45NzRjNDYuMzc3IDAgODMuOTczIDM3LjU5NiA4My45NzMgODMuOTc0IDAgNDYuMzc3LTM3LjU5NiA4My45NzMtODMuOTczIDgzLjk3M20wLTIxMy4zMzhjLTcxLjQ0NyAwLTEyOS4zNjUgNTcuOTE4LTEyOS4zNjUgMTI5LjM2NSAwIDcxLjQ0NiA1Ny45MTggMTI5LjM2NCAxMjkuMzY1IDEyOS4zNjQgNzEuNDQ2IDAgMTI5LjM2NC01Ny45MTggMTI5LjM2NC0xMjkuMzY0IDAtNzEuNDQ3LTU3LjkxOC0xMjkuMzY1LTEyOS4zNjQtMTI5LjM2NU00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjNzMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzFjMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwME0xNjMuNCAzMDUuNWM4OC43IDAgMTM3LjItNzMuNSAxMzcuMi0xMzcuMiAwLTIuMSAwLTQuMi0uMS02LjIgOS40LTYuOCAxNy42LTE1LjMgMjQuMS0yNS04LjYgMy44LTE3LjkgNi40LTI3LjcgNy42IDEwLTYgMTcuNi0xNS40IDIxLjItMjYuNy05LjMgNS41LTE5LjYgOS41LTMwLjYgMTEuNy04LjgtOS40LTIxLjMtMTUuMi0zNS4yLTE1LjItMjYuNiAwLTQ4LjIgMjEuNi00OC4yIDQ4LjIgMCAzLjguNCA3LjUgMS4zIDExLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40LTQuMSA3LjEtNi41IDE1LjQtNi41IDI0LjIgMCAxNi43IDguNSAzMS41IDIxLjUgNDAuMS03LjktLjItMTUuMy0yLjQtMjEuOC02di42YzAgMjMuNCAxNi42IDQyLjggMzguNyA0Ny4zLTQgMS4xLTguMyAxLjctMTIuNyAxLjctMy4xIDAtNi4xLS4zLTkuMS0uOSA2LjEgMTkuMiAyMy45IDMzLjEgNDUgMzMuNS0xNi41IDEyLjktMzcuMyAyMC42LTU5LjkgMjAuNi0zLjkgMC03LjctLjItMTEuNS0uNyAyMS4xIDEzLjggNDYuNSAyMS44IDczLjcgMjEuOCIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,goGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,o+GACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,g/BACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const x=v},5651:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const x=v},5506:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const x=v},4043:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const x=v},2655:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const x=v},5032:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}@media (prefers-reduced-motion:reduce){.ck .ck-insert-table-dropdown-grid-box{transition:none}}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAcD,CAZC,uCATD,uCAUE,eAWF,CAVC,CAEA,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const x=v},2329:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const x=v},4143:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}@media (forced-colors:active){.ck-content .table>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAaD,CCxBC,8BACC,8BDoBA,sBAAuB,CACvB,WCnBA,CACD,CAIA,4BDqBC,qEACC,iDACD,CCnBD,CDsBA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
	@mixin ck-media-forced-colors {
		background-color: unset;
		color: unset;
	}
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	@mixin ck-media-default-colors {
		&.table__caption_highlighted {
			animation: ck-table-caption-highlight .6s ease-out;
		}
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const x=v},8986:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const x=v},8795:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const x=v},8137:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const x=v},1623:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}@media (prefers-reduced-motion:reduce){.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:none}}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCA6BD,CA3BC,8ECxCD,eD6DC,CArBA,mMCpCA,qCDyDA,CArBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAcD,CAXC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEAKD,CAHC,uCAlBD,8EAmBE,cAEF,CADC,CAID,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;

			@media (prefers-reduced-motion: reduce) {
				animation: none;
			}
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const x=v},5562:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const x=v},8423:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const x=v},1801:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}.ck.ck-aria-live-region-list{list-style-type:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD,CAEA,6BACC,oBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}

.ck.ck-aria-live-region-list {
	list-style-type: none;
}
`],sourceRoot:""}]);const x=v},5727:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-panel);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const x=v},9715:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}@media (prefers-reduced-motion:reduce){.ck.ck-button,a.ck.ck-button{transition:none}}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{opacity:.5}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CA9BA,iDASE,oBAqBF,CA9BA,iDAaE,qBAiBF,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEzBD,6BCAC,oDD+ID,CC5IE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eFgJD,CA/IA,wIEGE,qCF4IF,CA/IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBA0ID,CAhHC,uCA/BD,6BAgCE,eA+GF,CA9GC,CAEA,oFGpCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHyCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAWD,CAZA,6FAIE,mCAQF,CAZA,6FAQE,oCAIF,CAZA,yEAWC,UACD,CAIC,oIIxFD,oDJ4FC,CAOA,gLKnGD,kCLqGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCClIA,+CDsIA,CCnIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDmHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CClJC,mDDuJD,CCpJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDmID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../../mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;

	@mixin ck-dir ltr {
		justify-content: left;
	}

	@mixin ck-dir rtl {
		justify-content: right;
	}

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		opacity: .5;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const x=v},4391:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}@media (prefers-reduced-motion:reduce){.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{transition:none}}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eDgFA,CA5CA,yIChCC,qCD4ED,CA5CA,2DAKE,gBAuCF,CA5CA,2DAUE,iBAkCF,CA5CA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CA2BD,CAxBC,2ECxDD,eDuEC,CAfA,6LCpDA,qCAAsC,CDsDpC,8CAaF,CAfA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAUD,CAHC,uCAZD,2EAaE,eAEF,CADC,CAGD,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEpFA,kCFsFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const x=v},25:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-list-button-padding);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,qCAAsC,CAFtC,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-list-button-padding);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const x=v},7317:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{transition:box-shadow .2s ease}@media (forced-colors:none){.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}}@media (forced-colors:active){.ck.ck-color-grid__tile{height:unset;min-height:unset;min-width:unset;padding:0 var(--ck-spacing-small);width:unset}.ck.ck-color-grid__tile .ck-button__label{display:inline-block}}@media (prefers-reduced-motion:reduce){.ck.ck-color-grid__tile{transition:none}}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAKA,kBACC,YACD,CCCA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBACC,8BAkED,CC3EC,4BACC,wBDgBA,QAAS,CAJT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CAJV,oCCTA,CDgBA,8HAIC,QACD,CAEA,+DACC,gDACD,CAEA,8BACC,8FACD,CAEA,gGAEC,iGACD,CCjCD,CAZA,8BACC,wBDqDA,YAAa,CAEb,gBAAiB,CADjB,eAAgB,CAEhB,iCAAkC,CAJlC,WClDA,CDwDA,0CACC,oBACD,CCzDD,CD4DA,uCAhDD,wBAiDE,eAkBF,CAjBC,CAEA,oCACC,YAAa,CACb,gBACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAGC,0CACC,aACD,CAIF,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	transition: .2s ease box-shadow;

	@mixin ck-media-default-colors {
		width: var(--ck-color-grid-tile-size);
		height: var(--ck-color-grid-tile-size);
		min-width: var(--ck-color-grid-tile-size);
		min-height: var(--ck-color-grid-tile-size);
		padding: 0;
		border: 0;

		&.ck-on,
		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			/* Disable the default .ck-button's border ring. */
			border: 0;
		}

		&.ck-color-selector__color-tile_bordered {
			box-shadow: 0 0 0 1px var(--ck-color-base-border);
		}

		&.ck-on {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);
		}

		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
		}
	}

	/*
	 * In high contrast mode, the colors are replaced with text labels.
	 * See https://github.com/ckeditor/ckeditor5/issues/14907.
	 */
	@mixin ck-media-forced-colors {
		width: unset;
		height: unset;
		min-width: unset;
		min-height: unset;
		padding: 0 var(--ck-spacing-small);

		& .ck-button__label {
			display: inline-block;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		& .ck.ck-icon {
			display: block;
		}
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const x=v},1905:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const x=v},6309:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const x=v},9819:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{box-shadow:var(--ck-drop-shadow),0 0;--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);border:1px solid var(--ck-color-base-border);max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width)}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAcD,CAXC,kCACC,aAKD,CAHC,0DACC,WACD,CAVF,mEAcE,kBAEF,CC7BA,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BAA4B,CAC5B,4DAA6D,CAC7D,gEACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCbC,eD2BD,CAdA,mECTE,qCDuBF,CAdA,cEfC,oCAA8B,CFmB9B,6CAA8C,CAE9C,4CAA6C,CAG7C,4CAA6C,CAF7C,sCAAuC,CACvC,oCAMD,CAHC,kCACC,iEACD,CAGD,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog-overlay {
	user-select: none;
	overscroll-behavior: none;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	&.ck-dialog-overlay__transparent {
		pointer-events: none;
		animation: none;
		background: none;
	}
}

.ck.ck-dialog {
	overscroll-behavior: none;
	width: fit-content;
	position: absolute;

	& .ck.ck-form__header  {
		flex-shrink: 0;

		& .ck-form__header__label {
			cursor: grab;
		}
	}

	@nest .ck.ck-dialog-overlay.ck-dialog-overlay__transparent & {
		pointer-events: all;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

:root {
	--ck-dialog-overlay-background-color: hsla( 0, 0%, 0%, .5 );
	--ck-dialog-drop-shadow: 0px 0px 6px 2px hsl(0deg 0% 0% / 15%);
	--ck-dialog-max-width: 100vw;
	--ck-dialog-max-height: 90vh;
	--ck-color-dialog-background: var(--ck-color-base-background);
	--ck-color-dialog-form-header-border: var(--ck-color-base-border);
}

.ck.ck-dialog-overlay {
	animation: ck-dialog-fade-in .3s;
	background: var(--ck-dialog-overlay-background-color);
	z-index: var(--ck-z-dialog);
}

.ck.ck-dialog {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	--ck-drop-shadow: var(--ck-dialog-drop-shadow);

	background: var(--ck-color-dialog-background);
	max-height: var(--ck-dialog-max-height);
	max-width: var(--ck-dialog-max-width);
	border: 1px solid var(--ck-color-base-border);

	& .ck.ck-form__header {
		border-bottom: 1px solid var(--ck-color-dialog-form-header-border);
	}
}

@keyframes ck-dialog-fade-in {
	0% {
		background: hsla( 0, 0%, 0%, 0 );
	}

	100% {
		background: var(--ck-dialog-overlay-background-color);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const x=v},9822:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		display: flex;
		justify-content: flex-end;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		padding: var(--ck-spacing-large);

		& > * + * {
			margin-left: var(--ck-spacing-large);
		}
	}
}
`],sourceRoot:""}]);const x=v},8149:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-panel);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-panel) + 1 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const x=v},3629:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-dropdown>.ck-dropdown__panel>.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown > .ck-dropdown__panel > .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const x=v},1792:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const x=v},1666:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const x=v},8527:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,":root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:#ccced1;--ck-accessibility-help-dialog-code-background-color:#ededed;--ck-accessibility-help-dialog-kbd-shadow-color:#9c9c9c}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{border:1px solid transparent;max-height:var(--ck-accessibility-help-dialog-max-height);max-width:var(--ck-accessibility-help-dialog-max-width);overflow:auto;padding:var(--ck-spacing-large);user-select:text}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{*{white-space:normal}}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-size:1.2em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-size:1em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{border-bottom:none;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);display:grid;grid-template-columns:2fr 1fr}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{background:var(--ck-accessibility-help-dialog-code-background-color);border-radius:2px;display:inline-block;font-size:.9em;line-height:1;padding:.4em;text-align:center;vertical-align:middle}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{box-shadow:0 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px;min-width:1.8em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/accessibilityhelp.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAQA,MACC,8CAA+C,CAC/C,+CAAgD,CAChD,mDAA8D,CAC9D,4DAAyE,CACzE,uDACD,CAEA,wEAOC,4BAA6B,CAJ7B,yDAA0D,CAD1D,uDAAwD,CAExD,aAAc,CAHd,+BAAgC,CAIhC,gBAgFD,CA5EC,8ECdA,2BAA2B,CCF3B,2CAA8B,CDC9B,YDkBA,CAZD,wEAcC,EACC,kBACD,CAqED,CAlEC,kFACC,YACD,CAEA,2EAEC,eAAgB,CADhB,eAED,CAEA,2EAEC,aAAc,CADd,eAED,CAEA,8SAIC,YACD,CAEA,2EAIC,kBAAmB,CADnB,qEAAsE,CAFtE,YAAa,CACb,6BAiBD,CAbC,4JACC,wEAAyE,CACzE,cACD,CAEA,8EACC,mBACD,CAEA,8EACC,mBAAoB,CACpB,gBACD,CAGD,yJAEC,oEAAqE,CAIrE,iBAAkB,CALlB,oBAAqB,CAOrB,cAAe,CAHf,aAAc,CAFd,YAAa,CAIb,iBAAkB,CAHlB,qBAKD,CAEA,6EACC,qBACD,CAEA,4EAEC,yEAA4E,CAC5E,YAAa,CAFb,eAOD,CAHC,gFACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-accessibility-help-dialog-max-width: 600px;
	--ck-accessibility-help-dialog-max-height: 400px;
	--ck-accessibility-help-dialog-border-color: hsl(220, 6%, 81%);
	--ck-accessibility-help-dialog-code-background-color: hsl(0deg 0% 92.94%);
	--ck-accessibility-help-dialog-kbd-shadow-color: hsl(0deg 0% 61%);
}

.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content {
	padding: var(--ck-spacing-large);
	max-width: var(--ck-accessibility-help-dialog-max-width);
	max-height: var(--ck-accessibility-help-dialog-max-height);
	overflow: auto;
	user-select: text;

	border: 1px solid transparent;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	* {
		white-space: normal;
	}

	/* Hide the main label of the content container. */
	& .ck-label {
		display: none;
	}

	& h3 {
		font-weight: bold;
		font-size: 1.2em;
	}

	& h4 {
		font-weight: bold;
		font-size: 1em;
	}

	& p,
	& h3,
	& h4,
	& table {
		margin: 1em 0;
	}

	& dl {
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-top: 1px solid var(--ck-accessibility-help-dialog-border-color);
		border-bottom: none;

		& dt, & dd {
			border-bottom: 1px solid var(--ck-accessibility-help-dialog-border-color);
			padding: .4em 0;
		}

		& dt {
			grid-column-start: 1;
		}

		& dd {
			grid-column-start: 2;
			text-align: right;
		}
	}

	& kbd, & code {
		display: inline-block;
		background: var(--ck-accessibility-help-dialog-code-background-color);
		padding: .4em;
		vertical-align: middle;
		line-height: 1;
		border-radius: 2px;
		text-align: center;
		font-size: .9em;
	}

	& code {
		font-family: monospace;
	}

	& kbd {
		min-width: 1.8em;
		box-shadow: 0px 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);
		margin: 0 1px;

		& + kbd {
			margin-left: 2px;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const x=v},1185:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const x=v},7913:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CAdC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 44px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& > .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		--ck-font-size-base: 15px;
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const x=v},9529:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const x=v},7621:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const x=v},253:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}@media (prefers-reduced-motion:reduce){.ck.ck-input{transition:none}}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}@media (prefers-reduced-motion:reduce){.ck.ck-input.ck-error{animation:none}}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eDmDD,CA9CA,iECDE,qCD+CF,CA9CA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DAkCD,CAhCC,uCAdD,aAeE,eA+BF,CA9BC,CAEA,mBEvBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YF2BA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BGnCD,oDHsCC,CAGD,sBAEC,sCAAuC,CADvC,+CAUD,CAPC,uCAJD,sBAKE,cAMF,CALC,CAEA,4BGjDD,iDHmDC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		@media (prefers-reduced-motion: reduce) {
			animation: none;
		}

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const x=v},7801:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const x=v},4962:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}@media (prefers-reduced-motion:reduce){.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transition:none}}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eDmHD,CA9GA,2FCDE,qCD+GF,CA3GC,mEACC,UAwCD,CAtCC,gFACC,KAoCD,CArCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBAgCF,CArCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAyBF,CArCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAQD,CAHC,uCAlCD,gFAmCE,eAEF,CADC,CASD,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,2XAGE,+HAYF,CAfA,2XAOE,wIAQF,CAfA,uWAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const x=v},5199:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.11*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item>.ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item>.ck-button{text-align:left}[dir=rtl] .ck.ck-list__item>.ck-button{text-align:right}.ck.ck-list__item>.ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item>.ck-button:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item>.ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item>.ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item>.ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item>.ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item>.ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,qJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UAwCD,CA1CA,uCAME,eAoCF,CA1CA,uCAUE,gBAgCF,CA1CA,6BAgBC,qCA0BD,CAxBC,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-list-button-padding:
		calc(.11 * var(--ck-line-height-base) * var(--ck-font-size-base))
		calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));
}

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& > .ck-button {
		min-height: unset;
		width: 100%;
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding: var(--ck-list-button-padding);

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& > .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const x=v},497:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-menu-bar{background:var(--ck-color-base-background);border:1px solid var(--ck-color-toolbar-border);display:flex;flex-wrap:wrap;gap:var(--ck-spacing-small);justify-content:flex-start;padding:var(--ck-spacing-small);width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubar.css"],names:[],mappings:"AAKA,gBAIC,0CAA2C,CAG3C,+CAAgD,CANhD,YAAa,CACb,cAAe,CAIf,2BAA4B,CAH5B,0BAA2B,CAE3B,+BAAgC,CAGhC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	background: var(--ck-color-base-background);
	padding: var(--ck-spacing-small);
	gap: var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);
	width: 100%;
}
`],sourceRoot:""}]);const x=v},4:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-menu-bar__menu{display:block;font-size:inherit;position:relative}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level{max-width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenu.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenu.css"],names:[],mappings:"AAKA,sBACC,aAAc,CCCd,iBAAkB,CDAlB,iBACD,CCCC,kDACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	display: block;
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	&.ck-menu-bar__menu_top-level {
		max-width: 100%;
	}
}
`],sourceRoot:""}]);const x=v},3344:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button{padding:var(--ck-list-button-padding);width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button{min-height:unset;padding:var(--ck-spacing-small) var(--ck-spacing-medium)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-button__label{line-height:unset;width:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-icon{display:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button{border-radius:0}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(-90deg)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(90deg)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled>.ck-menu-bar__menu__button__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAMC,mFACC,mBAAoB,CACpB,2BACD,CCIA,iDACC,qCAAsC,CACtC,UAuBD,CArBC,mEACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,+ECdD,kCDgBC,CAGC,qFACC,oCACD,CAIA,qFACC,qCACD,CAOF,6EAEC,gBAAiB,CADjB,wDAgBD,CAbC,+FAEC,iBAAkB,CADlB,WAED,CAEA,mFACC,2BAA4B,CAC5B,4BACD,CAEA,sFACC,YACD,CAMD,mFACC,eAiDD,CA/CC,yFACC,wBAAyB,CACzB,eAKD,CAHC,qGACC,0DACD,CAID,iIACC,+DACD,CAEA,qHACC,mCASD,CAVA,+HAIE,wBAMF,CAVA,+HAQE,uBAEF,CAEA,iICrFD,kCDuFC,CAGC,+HAIC,sCAAuC,CAHvC,gCAID,CAIA,+HACC,+BAAgC,CAGhC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu  {
	& > .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-menu-bar__menu {
	/*
	 * All menu buttons.
	 */
	& > .ck-menu-bar__menu__button {
		padding: var(--ck-list-button-padding);
		width: 100%;

		& > .ck-button__label {
			flex-grow: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&.ck-disabled > .ck-button__label {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				padding-right: var(--ck-spacing-small);
			}
		}
	}

	/*
	 * Top-level menu buttons only.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button {
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		min-height: unset;

		& .ck-button__label {
			width: unset;
			line-height: unset;
		}

		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		& .ck-icon {
			display: none;
		}
	}

	/*
	 * Sub-menu buttons.
	 */
	&:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button {
		border-radius: 0;

		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}

		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}

		& > .ck-menu-bar__menu__button__arrow {
			width: var(--ck-dropdown-arrow-size);

			@mixin ck-dir ltr {
				transform: rotate(-90deg);
			}

			@mixin ck-dir rtl {
				transform: rotate(90deg);
			}
		}

		&.ck-disabled > .ck-menu-bar__menu__button__arrow {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			& > .ck-menu-bar__menu__button__arrow {
				right: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-left: var(--ck-spacing-standard);
			}
		}

		@mixin ck-dir rtl {
			& > .ck-menu-bar__menu__button__arrow {
				left: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-right: var(--ck-spacing-small);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const x=v},9481:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,":root{--ck-menu-bar-menu-item-min-width:18em}.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item{min-width:var(--ck-menu-bar-menu-item-min-width)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitem.css"],names:[],mappings:"AAKA,MACC,sCACD,CAEA,kDACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-item-min-width: 18em;
}

.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item {
	min-width: var(--ck-menu-bar-menu-item-min-width);
}
`],sourceRoot:""}]);const x=v},977:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button{border-radius:0}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container,.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__panel>ul>.ck-menu-bar__menu__item>.ck-menu-bar__menu__item__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitembutton.css"],names:[],mappings:"AASC,iEACC,eA0BD,CAxBC,0LAGC,8BACD,CAEA,uFAEC,4CAA+C,CAC/C,oCACD,CAMA,uEACC,wBAAyB,CACzB,eAKD,CAHC,mFACC,0DACD,CASD,uLACC,+DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/*
	 * List item buttons.
	 */
	& .ck-button.ck-menu-bar__menu__item__button {
		border-radius: 0;

		& > .ck-spinner-container,
		& > .ck-spinner-container .ck-spinner {
			/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
			--ck-toolbar-spinner-size: 20px;
		}

		& > .ck-spinner-container {
			/* These margins are the same as for .ck-icon. */
			margin-left: calc(-1 * var(--ck-spacing-small));
			margin-right: var(--ck-spacing-small);
		}

		/*
		 * Hovered items automatically get focused. Default focus styles look odd
		 * while moving across a huge list of items so let's get rid of them
		 */
		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}
	}

	/*
	 * First-level sub-menu item buttons.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__panel > ul > .ck-menu-bar__menu__item > .ck-menu-bar__menu__item__button {
		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}
	}
}


`],sourceRoot:""}]);const x=v},9108:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,":root{--ck-menu-bar-menu-max-width:75vw;--ck-menu-bar-nested-menu-horizontal-offset:5px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{max-width:var(--ck-menu-bar-menu-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{bottom:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{bottom:auto;top:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{left:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{right:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{left:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{bottom:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{right:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{bottom:0}:root{--ck-menu-bar-menu-panel-max-width:75vw}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{border-radius:0}.ck-rounded-corners .ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;height:fit-content;max-width:var(--ck-menu-bar-menu-panel-max-width)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{border-top-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{border-top-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne{border-bottom-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{border-bottom-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,iCAAkC,CAClC,+CACD,CAEA,mDAEC,2CAA4C,CAC5C,iBAAkB,CAFlB,yBAkDD,CA9CC,gLAEC,WACD,CAEA,gLAGC,WAAY,CADZ,QAED,CAEA,gLAEC,MACD,CAEA,gLAEC,OACD,CAEA,gLAEC,kEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CAEA,gLAEC,mEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CCpDD,MACC,uCACD,CAEA,mDCDC,eDmCD,CAlCA,6ICGE,qCD+BF,CAlCA,mDAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CETT,oCAA8B,CFU9B,kBAAmB,CACnB,iDA0BD,CAvBC,gLAEC,wBACD,CAEA,gLAEC,yBACD,CAEA,gLAEC,2BACD,CAEA,gLAEC,4BACD,CAEA,yDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-max-width: 75vw;
	--ck-menu-bar-nested-menu-horizontal-offset: 5px;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	z-index: var(--ck-z-panel);
	max-width: var(--ck-menu-bar-menu-max-width);
	position: absolute;

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_nw {
		bottom: 100%;
	}

	&.ck-menu-bar__menu__panel_position_se,
	&.ck-menu-bar__menu__panel_position_sw {
		top: 100%;
		bottom: auto;
	}

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_se {
		left: 0px;
	}

	&.ck-menu-bar__menu__panel_position_nw,
	&.ck-menu-bar__menu__panel_position_sw {
		right: 0px;
	}

	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_en {
		left: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_es {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_en {
		bottom: 0px;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_wn {
		right: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_ws {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_wn {
		bottom: 0px;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-menu-bar-menu-panel-max-width: 75vw;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-menu-bar-menu-panel-max-width);

	/* Corner border radius consistent with the button. */
	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_se {
		border-top-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_sw {
		border-top-right-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_en,
	&.ck-menu-bar__menu__panel_position_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_wn,
	&.ck-menu-bar__menu__panel_position_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const x=v},3710:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-panel);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const x=v},991:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const x=v},5380:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-panel) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const x=v},8298:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-panel); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const x=v},2722:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-number,.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAoED,CAlEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA+CF,CA7CE,8CACC,wDAYD,CAVC,4HAEC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDrEH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text,
			& .ck-input-number {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const x=v},8107:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const x=v},109:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@media (prefers-reduced-motion:reduce){.ck.ck-spinner-container{animation-duration:3s}}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCAAsC,CADtC,qCAAsC,CADtC,oCAOD,CAHC,uCALD,yBAME,qBAEF,CADC,CAGD,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCAA6B,CAH7B,qCAAsC,CADtC,oCAKD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;

	@media (prefers-reduced-motion: reduce) {
		animation-duration: 3s;
	}
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}
`],sourceRoot:""}]);const x=v},1671:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const x=v},2710:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const x=v},9677:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const x=v},9205:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck.ck-balloon-panel.ck-tooltip{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;z-index:calc(var(--ck-z-dialog) + 100);--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;max-width:200px;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAOA,gCCEC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBAAgB,CDFhB,sCAAyC,CEFzC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCFJD,CEMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CAErB,eAAgB,CADhB,wCAAyC,CAFzC,wBAID,CArBD,gCAwBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-balloon-panel.ck-tooltip {
	@mixin ck-unselectable;

	z-index: calc( var(--ck-z-dialog) + 100 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
		max-width: 200px;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const x=v},7676:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck-hidden{display:none!important}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{background:transparent;border:0;box-sizing:border-box;height:auto;margin:0;padding:0;position:static;text-decoration:none;transition:none;vertical-align:middle;width:auto;word-wrap:break-word}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,wDAAiE,CACjE,4DAAmE,CAInE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CChHhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJgHD,CI1GA,2EAYC,sBAAuB,CADvB,QAAS,CART,qBAAsB,CAEtB,WAAY,CAIZ,QAAS,CACT,SAAU,CAJV,eAAgB,CAOhB,oBAAqB,CAErB,eAAgB,CADhB,qBAAsB,CAVtB,UAAW,CAcX,oBACD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCxFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-panel: calc( var(--ck-z-default) + 999 );
	--ck-z-dialog: 9999;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-panel) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Dialog -------------------------------------------------------------------------------- */

	--ck-color-dialog-background: 								var(--ck-custom-background);
	--ck-color-dialog-form-header-border: 						var(--ck-custom-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;

	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const x=v},695:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget{transition:none}}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}@media (forced-colors:none){.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background)}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CChFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAcD,CAZC,uCAND,eAOE,eAWF,CAVC,CAEA,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAYD,CARC,yGCnCA,2BAA2B,CCF3B,qCAA8B,CDC9B,YD2CA,CGvCA,4BACC,yGHoCC,iEGlCD,CACD,CHuCA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAwCD,CA3BC,uCAzBD,4EA0BE,eA0BF,CAzBC,CAEA,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAeD,CAVC,kHACC,SAAU,CAGV,+DAKD,CAHC,uCAND,kHAOE,eAEF,CADC,CAKF,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
		@mixin ck-media-default-colors {
			background-color: var(--ck-color-widget-editable-focus-background);
		}
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);

				@media (prefers-reduced-motion: reduce) {
					transition: none;
				}
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const x=v},4095:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const x=v},8508:(m,w,g)=>{g.d(w,{A:()=>x});var A=g(9372),C=g.n(A),y=g(935),v=g.n(y)()(C());v.push([m.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button svg{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button:hover,.ck .ck-widget .ck-widget__type-around__button:hover svg line,.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:none}}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAwED,CAhEC,uCATD,+CAUE,eA+DF,CA9DC,CAEA,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAwBD,CAlBC,uCAPD,mDAQE,eAiBF,CAhBC,CAEA,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DA4BD,CAtBE,kEACC,oDACD,CAEA,8DACC,wDACD,CAGD,uCAQE,qLACC,cACD,CAEF,CASD,uKA7FD,SAAU,CACV,mBA8FC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAxKD,SAAU,CACV,mBAyKC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAxNF,SAAU,CACV,mBAyNE,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}

			@media (prefers-reduced-motion: reduce) {
				animation: none;

				& svg {
					& polyline {
						animation: none;
					}

					& line {
						animation: none;
					}
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const x=v},935:m=>{m.exports=function(w){var g=[];return g.toString=function(){return this.map(function(A){var C=w(A);return A[2]?"@media ".concat(A[2]," {").concat(C,"}"):C}).join("")},g.i=function(A,C,y){typeof A=="string"&&(A=[[null,A,""]]);var v={};if(y)for(var x=0;x<this.length;x++){var S=this[x][0];S!=null&&(v[S]=!0)}for(var I=0;I<A.length;I++){var N=[].concat(A[I]);y&&v[N[0]]||(C&&(N[2]?N[2]="".concat(C," and ").concat(N[2]):N[2]=C),g.push(N))}},g}},9372:m=>{function w(A,C){return function(y){if(Array.isArray(y))return y}(A)||function(y,v){var x=y&&(typeof Symbol<"u"&&y[Symbol.iterator]||y["@@iterator"]);if(x!=null){var S,I,N=[],P=!0,B=!1;try{for(x=x.call(y);!(P=(S=x.next()).done)&&(N.push(S.value),!v||N.length!==v);P=!0);}catch(O){B=!0,I=O}finally{try{P||x.return==null||x.return()}finally{if(B)throw I}}return N}}(A,C)||function(y,v){if(y){if(typeof y=="string")return g(y,v);var x=Object.prototype.toString.call(y).slice(8,-1);if(x==="Object"&&y.constructor&&(x=y.constructor.name),x==="Map"||x==="Set")return Array.from(y);if(x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))return g(y,v)}}(A,C)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function g(A,C){(C==null||C>A.length)&&(C=A.length);for(var y=0,v=new Array(C);y<C;y++)v[y]=A[y];return v}m.exports=function(A){var C=w(A,4),y=C[1],v=C[3];if(!v)return y;if(typeof btoa=="function"){var x=btoa(unescape(encodeURIComponent(JSON.stringify(v)))),S="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(x),I="/*# ".concat(S," */"),N=v.sources.map(function(P){return"/*# sourceURL=".concat(v.sourceRoot||"").concat(P," */")});return[y].concat(N).concat([I]).join(`
`)}return[y].join(`
`)}},2591:(m,w,g)=>{var A,C=function(){return A===void 0&&(A=!!(window&&document&&document.all&&!window.atob)),A},y=function(){var D={};return function(z){if(D[z]===void 0){var W=document.querySelector(z);if(window.HTMLIFrameElement&&W instanceof window.HTMLIFrameElement)try{W=W.contentDocument.head}catch{W=null}D[z]=W}return D[z]}}(),v=[];function x(D){for(var z=-1,W=0;W<v.length;W++)if(v[W].identifier===D){z=W;break}return z}function S(D,z){for(var W={},$=[],Y=0;Y<D.length;Y++){var re=D[Y],te=z.base?re[0]+z.base:re[0],Z=W[te]||0,Q="".concat(te," ").concat(Z);W[te]=Z+1;var ee=x(Q),se={css:re[1],media:re[2],sourceMap:re[3]};ee!==-1?(v[ee].references++,v[ee].updater(se)):v.push({identifier:Q,updater:F(se,z),references:1}),$.push(Q)}return $}function I(D){var z=document.createElement("style"),W=D.attributes||{};if(W.nonce===void 0){var $=g.nc;$&&(W.nonce=$)}if(Object.keys(W).forEach(function(re){z.setAttribute(re,W[re])}),typeof D.insert=="function")D.insert(z);else{var Y=y(D.insert||"head");if(!Y)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Y.appendChild(z)}return z}var N,P=(N=[],function(D,z){return N[D]=z,N.filter(Boolean).join(`
`)});function B(D,z,W,$){var Y=W?"":$.media?"@media ".concat($.media," {").concat($.css,"}"):$.css;if(D.styleSheet)D.styleSheet.cssText=P(z,Y);else{var re=document.createTextNode(Y),te=D.childNodes;te[z]&&D.removeChild(te[z]),te.length?D.insertBefore(re,te[z]):D.appendChild(re)}}function O(D,z,W){var $=W.css,Y=W.media,re=W.sourceMap;if(Y?D.setAttribute("media",Y):D.removeAttribute("media"),re&&typeof btoa<"u"&&($+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(re))))," */")),D.styleSheet)D.styleSheet.cssText=$;else{for(;D.firstChild;)D.removeChild(D.firstChild);D.appendChild(document.createTextNode($))}}var L=null,V=0;function F(D,z){var W,$,Y;if(z.singleton){var re=V++;W=L||(L=I(z)),$=B.bind(null,W,re,!1),Y=B.bind(null,W,re,!0)}else W=I(z),$=O.bind(null,W,z),Y=function(){(function(te){if(te.parentNode===null)return!1;te.parentNode.removeChild(te)})(W)};return $(D),function(te){if(te){if(te.css===D.css&&te.media===D.media&&te.sourceMap===D.sourceMap)return;$(D=te)}else Y()}}m.exports=function(D,z){(z=z||{}).singleton||typeof z.singleton=="boolean"||(z.singleton=C());var W=S(D=D||[],z);return function($){if($=$||[],Object.prototype.toString.call($)==="[object Array]"){for(var Y=0;Y<W.length;Y++){var re=x(W[Y]);v[re].references--}for(var te=S($,z),Z=0;Z<W.length;Z++){var Q=x(W[Z]);v[Q].references===0&&(v[Q].updater(),v.splice(Q,1))}W=te}}}}},d={};function h(m){var w=d[m];if(w!==void 0)return w.exports;var g=d[m]={id:m,exports:{}};return a[m](g,g.exports,h),g.exports}h.n=m=>{var w=m&&m.__esModule?()=>m.default:()=>m;return h.d(w,{a:w}),w},h.d=(m,w)=>{for(var g in w)h.o(w,g)&&!h.o(m,g)&&Object.defineProperty(m,g,{enumerable:!0,get:w[g]})},h.o=(m,w)=>Object.prototype.hasOwnProperty.call(m,w),h.nc=void 0;var p={};return(()=>{let m;h.d(p,{default:()=>Ak});try{m={window,document}}catch{m={window:{},document:{}}}const w=m,g=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var A;const C={isMac:y(g),isWindows:(A=g,A.indexOf("windows")>-1),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(g),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(g),isiOS:function(i){return!!i.match(/iphone|ipad/i)||y(i)&&navigator.maxTouchPoints>0}(g),isAndroid:function(i){return i.indexOf("android")>-1}(g),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(g),get isMediaForcedColors(){return!!w.window.matchMedia&&w.window.matchMedia("(forced-colors: active)").matches},get isMotionReduced(){return!!w.window.matchMedia&&w.window.matchMedia("(prefers-reduced-motion)").matches},features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}};function y(i){return i.indexOf("macintosh")>-1}function v(i,e,t,r){t=t||function(f,k){return f===k};const s=Array.isArray(i)?i:Array.prototype.slice.call(i),l=Array.isArray(e)?e:Array.prototype.slice.call(e),c=function(f,k,b){const _=x(f,k,b);if(_===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const E=S(f,_),T=S(k,_),M=x(E,T,b),R=f.length-M,j=k.length-M;return{firstIndex:_,lastIndexOld:R,lastIndexNew:j}}(s,l,t);return r?function(f,k){const{firstIndex:b,lastIndexOld:_,lastIndexNew:E}=f;if(b===-1)return Array(k).fill("equal");let T=[];return b>0&&(T=T.concat(Array(b).fill("equal"))),E-b>0&&(T=T.concat(Array(E-b).fill("insert"))),_-b>0&&(T=T.concat(Array(_-b).fill("delete"))),E<k&&(T=T.concat(Array(k-E).fill("equal"))),T}(c,l.length):function(f,k){const b=[],{firstIndex:_,lastIndexOld:E,lastIndexNew:T}=k;return T-_>0&&b.push({index:_,type:"insert",values:f.slice(_,T)}),E-_>0&&b.push({index:_+(T-_),type:"delete",howMany:E-_}),b}(l,c)}function x(i,e,t){for(let r=0;r<Math.max(i.length,e.length);r++)if(i[r]===void 0||e[r]===void 0||!t(i[r],e[r]))return r;return-1}function S(i,e){return i.slice(e).reverse()}function I(i,e,t){t=t||function(R,j){return R===j};const r=i.length,s=e.length;if(r>200||s>200||r+s>300)return I.fastDiff(i,e,t,!0);let l,c;if(s<r){const R=i;i=e,e=R,l="delete",c="insert"}else l="insert",c="delete";const u=i.length,f=e.length,k=f-u,b={},_={};function E(R){const j=(_[R-1]!==void 0?_[R-1]:-1)+1,H=_[R+1]!==void 0?_[R+1]:-1,K=j>H?-1:1;b[R+K]&&(b[R]=b[R+K].slice(0)),b[R]||(b[R]=[]),b[R].push(j>H?l:c);let X=Math.max(j,H),ce=X-R;for(;ce<u&&X<f&&t(i[ce],e[X]);)ce++,X++,b[R].push("equal");return X}let T,M=0;do{for(T=-M;T<k;T++)_[T]=E(T);for(T=k+M;T>k;T--)_[T]=E(T);_[k]=E(k),M++}while(_[k]!==f);return b[k].slice(1)}I.fastDiff=v;const N=function(){return function i(){i.called=!0}};class P{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=N(),this.off=N()}}const B=new Array(256).fill("").map((i,e)=>("0"+e.toString(16)).slice(-2));function O(){const i=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0;return"e"+B[255&i]+B[i>>8&255]+B[i>>16&255]+B[i>>24&255]+B[255&e]+B[e>>8&255]+B[e>>16&255]+B[e>>24&255]+B[255&t]+B[t>>8&255]+B[t>>16&255]+B[t>>24&255]+B[255&r]+B[r>>8&255]+B[r>>16&255]+B[r>>24&255]}const L={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function V(i,e){const t=L.get(e.priority);for(let r=0;r<i.length;r++)if(L.get(i[r].priority)<t)return void i.splice(r,0,e);i.push(e)}const F="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class D extends Error{constructor(e,t,r){super(function(s,l){const c=new WeakSet,u=(b,_)=>{if(typeof _=="object"&&_!==null){if(c.has(_))return`[object ${_.constructor.name}]`;c.add(_)}return _},f=l?` ${JSON.stringify(l,u)}`:"",k=$(s);return s+f+k}(e,r)),this.name="CKEditorError",this.context=t,this.data=r}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const r=new D(e.message,t);throw r.stack=e.stack,r}}function z(i,e){console.warn(...Y(i,e))}function W(i,e){console.error(...Y(i,e))}function $(i){return`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[r.createRange(u[0].end)]});else if(e.inputType=="insertText"&&c&&c.includes(`
`,isColorInherited:!1}),r.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],r],on:{dragstart:s.to(l=>l.preventDefault())}}]})}}function i1(i,e,t){return(r,s)=>{const l=new Qe(i);if(l.width<vz||l.height<wz)return null;let c;c=e.position==="inside"?l.bottom-s.height:l.bottom-s.height/2,c-=e.verticalOffset;const u=t(l,s),f=r.clone().moveTo(u,c).getIntersection(s.clone().moveTo(u,c)).getVisible();return!f||f.getArea()<s.getArea()?null:{top:c,left:u,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function s1(i){const e=i.config.get("ui.poweredBy"),t=e&&e.position||"border";return bz({position:t,label:Az,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:i.locale.contentLanguageDirection==="ltr"?"right":"left"},e)}var a1=h(1801),yz={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ge()(a1.A,yz),a1.A.locals;const l1={POLITE:"polite",ASSERTIVE:"assertive"};class xz{constructor(e){this.editor=e,e.once("ready",()=>{for(const t of Object.values(l1))this.announce("",t)})}announce(e,t=l1.POLITE){const r=this.editor;if(!r.ui.view)return;this.view||(this.view=new Ez(r.locale),r.ui.view.body.add(this.view));const{politeness:s,isUnsafeHTML:l}=typeof t=="string"?{politeness:t}:t;let c=this.view.regionViews.find(u=>u.politeness===s);c||(c=new Sz(r,s),this.view.regionViews.add(c)),c.announce({announcement:e,isUnsafeHTML:l})}}class Ez extends Ie{constructor(e){super(e),this.regionViews=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-aria-live-announcer"]},children:this.regionViews})}}class Sz extends Ie{constructor(e,t){super(e.locale),this.setTemplate({tag:"div",attributes:{role:"region","aria-live":t,"aria-relevant":"additions"},children:[{tag:"ul",attributes:{class:["ck","ck-aria-live-region-list"]}}]}),e.on("destroy",()=>{this._pruneAnnouncementsInterval!==null&&(clearInterval(this._pruneAnnouncementsInterval),this._pruneAnnouncementsInterval=null)}),this.politeness=t,this._domConverter=e.data.htmlProcessor.domConverter,this._pruneAnnouncementsInterval=setInterval(()=>{this.element&&this._listElement.firstChild&&this._listElement.firstChild.remove()},5e3)}announce({announcement:e,isUnsafeHTML:t}){if(!e.trim().length)return;const r=document.createElement("li");t?this._domConverter.setContentOf(r,e):r.innerText=e,this._listElement.appendChild(r)}get _listElement(){return this.element.querySelector("ul")}}var Dz=Object.defineProperty,c1=Object.getOwnPropertySymbols,Tz=Object.prototype.hasOwnProperty,Iz=Object.prototype.propertyIsEnumerable,d1=(i,e,t)=>e in i?Dz(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;class Mz extends Te(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new Zj(e),this.focusTracker=new dn,this.tooltipManager=new $u(e),this.poweredBy=new _z(e),this.ariaLiveAnnouncer=new xz(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const r=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?r():this.once("ready",r)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const r=e.config.get("toolbar.viewportTopOffset");return r?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:r}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let r,s;e.keystrokes.set("Alt+F10",(l,c)=>{const u=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(u)&&!Array.from(t.domRoots.values()).includes(u)&&(r=u);const f=this._getCurrentFocusedToolbarDefinition();f&&s||(s=this._getFocusableCandidateToolbarDefinitions());for(let k=0;k<s.length;k++){const b=s.shift();if(s.push(b),b!==f&&this._focusFocusableCandidateToolbar(b)){f&&f.options.afterBlur&&f.options.afterBlur();break}}c()}),e.keystrokes.set("Esc",(l,c)=>{const u=this._getCurrentFocusedToolbarDefinition();u&&(r?(r.focus(),r=null):e.editing.view.focus(),u.options.afterBlur&&u.options.afterBlur(),c())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:r,options:s}=t;(us(r.element)||s.beforeFocus)&&e.push(t)}return e.sort((t,r)=>u1(t)-u1(r)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:r}}=e;return r&&r(),!!us(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const r=((s,l)=>{for(var c in l||(l={}))Tz.call(l,c)&&d1(s,c,l[c]);if(c1)for(var c of c1(l))Iz.call(l,c)&&d1(s,c,l[c]);return s})({top:0,bottom:0,left:0,right:0},this.viewportOffset);t.viewportOffset.top+=r.top,t.viewportOffset.bottom+=r.bottom,t.viewportOffset.left+=r.left,t.viewportOffset.right+=r.right}}function u1(i){const{toolbarView:e,options:t}=i;let r=10;return us(e.element)&&r--,t.isContextual&&r--,r}var h1=h(1185),Pz={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ge()(h1.A,Pz),h1.A.locals;class Bz extends Ie{constructor(e){super(e),this.body=new bj(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class Nz extends Bz{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new Ou;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class Oz extends Ie{constructor(e,t,r){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=r,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(r){e.change(s=>{const l=e.document.getRoot(r.name);s.addClass(r.isFocused?"ck-focused":"ck-blurred",l),s.removeClass(r.isFocused?"ck-blurred":"ck-focused",l)})}e.isRenderingInProgress?function r(s){e.once("change:isRenderingInProgress",(l,c,u)=>{u?r(s):t(s)})}(this):t(this)}}class Rz extends Oz{constructor(e,t,r,s={}){super(e,t,r);const l=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=s.label||(()=>l("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const r=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),r)})}}class Ig extends ku{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class f1 extends Te(){constructor(e,t){super(),t&&z_(this,t),e&&this.set(e)}}var p1=h(991),Lz={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ge()(p1.A,Lz),p1.A.locals;var m1=h(5380),jz={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ge()(m1.A,jz),m1.A.locals;const qu=pa("px");class Gu extends he{constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,r=t.document.selection.editableElement;return r?t.domConverter.mapViewToDom(r.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new D("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const r=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),r.set(e.view,e),this._viewToStack.set(e.view,r),r===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new D("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new D("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new Qn(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new zz(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(r,s)=>!s&&r>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(r,s)=>{if(s<2)return"";const l=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[l,s])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new Fz(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,r)=>!r&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:r=!0,singleViewMode:s=!1}){this.view.class=t,this.view.withArrow=r,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),s&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class zz extends Ie{constructor(e){super(e);const t=e.t,r=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new dn,this.buttonPrevView=this._createButtonView(t("Previous"),je.previousArrow),this.buttonNextView=this._createButtonView(t("Next"),je.nextArrow),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",r.to("isNavigationVisible",s=>s?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:r.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const r=new rt(this.locale);return r.set({label:e,icon:t,tooltip:!0}),r}}class Fz extends Ie{constructor(e,t){super(e);const r=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",r.to("numberOfPanels",s=>s?"":"ck-hidden")],style:{top:r.to("top",qu),left:r.to("left",qu),width:r.to("width",qu),height:r.to("height",qu)}},children:this.content}),this.on("change:numberOfPanels",(s,l,c,u)=>{c>u?this._addPanels(c-u):this._removePanels(u-c),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new Ie;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:r,height:s}=new Qe(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:r,height:s})}}}var g1=h(8298),Vz={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ge()(g1.A,Vz),g1.A.locals;const Sa=pa("px");class Uz extends Ie{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new Gr({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",r=>r?"block":"none"),height:t.to("isSticky",r=>r?Sa(this._contentPanelRect.height):null)}}}).render(),this.contentPanelElement=new Gr({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",r=>r?Sa(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_stickyTopOffset",r=>r&&Sa(r)),bottom:t.to("_stickyBottomOffset",r=>r&&Sa(r)),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this.contentPanelElement]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(w.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const e=new Qe(this.limiterElement);let t=e.getVisible();if(t){const r=new Qe(w.window);r.top+=this.viewportTopOffset,r.height-=this.viewportTopOffset,t=t.getIntersection(r)}if(t&&e.top<t.top){const r=t.top;if(r+this._contentPanelRect.height+this.limiterBottomOffset>t.bottom){const s=Math.max(e.bottom-t.bottom,0)+this.limiterBottomOffset;e.bottom-s>e.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(s):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<e.height?this._stickToTopOfAncestors(r):this._unstick()}else this._unstick()}_stickToTopOfAncestors(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=e,this._stickyBottomOffset=null,this._marginLeft=Sa(-w.window.scrollX)}_stickToBottomOfLimiter(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=e,this._marginLeft=Sa(-w.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new Qe(this.contentPanelElement)}}class Hz extends ju{constructor(e,t){const r=e.t,s=Object.assign({},{showResetButton:!0,showIcon:!0,creator:Vu},t);super(e,s.creator),this.label=t.label,this._viewConfig=s,this._viewConfig.showIcon&&(this.iconView=new Ho,this.iconView.content=je.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new rt(e),this.resetButtonView.set({label:r("Clear"),icon:je.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",l=>!l),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class $z extends Ie{constructor(){super();const e=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",e.if("isVisible","ck-hidden",t=>!t)],tabindex:-1},children:[{tag:"span",children:[{text:[e.to("primaryText")]}]},{tag:"span",children:[{text:[e.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class Wz extends Ie{constructor(e){super(e),this.children=this.createCollection(),this.focusTracker=new dn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new Ir({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const e of this.children)this.focusTracker.add(e.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var k1=/[\\^$.*+?()[\]{}|]/g,qz=RegExp(k1.source);const b1=function(i){return(i=Um(i))&&qz.test(i)?i.replace(k1,"\\$&"):i};var w1=h(8107),Gz={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ge()(w1.A,Gz),w1.A.locals;var Kz=Object.defineProperty,v1=Object.getOwnPropertySymbols,Qz=Object.prototype.hasOwnProperty,Yz=Object.prototype.propertyIsEnumerable,A1=(i,e,t)=>e in i?Kz(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;class Zz extends Ie{constructor(e,t){super(e),this._config=t,this.filteredView=t.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new dn,this.keystrokes=new jn,this.resultsView=new Wz(e),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),t.infoView&&t.infoView.instance?this.infoView=t.infoView.instance:(this.infoView=new $z,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new Ir({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(r,{resultsCount:s,totalItemsCount:l})=>{this.resultsCount=s,this.totalItemsCount=l}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",t.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const e=t=>t.stopPropagation();for(const t of this.focusableChildren)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(e){const t=e?new RegExp(b1(e),"ig"):null,r=this.filteredView.filter(t);this.fire("search",((s,l)=>{for(var c in l||(l={}))Qz.call(l,c)&&A1(s,c,l[c]);if(v1)for(var c of v1(l))Yz.call(l,c)&&A1(s,c,l[c]);return s})({query:e},r))}_createSearchTextQueryView(){const e=new Hz(this.locale,this._config.queryView);return this.listenTo(e.fieldView,"input",()=>{this.search(e.fieldView.element.value)}),e.on("reset",()=>this.reset()),e.bind("isEnabled").to(this),e}_enableDefaultInfoViewBehavior(){const e=this.locale.t,t=this.infoView;function r(s,{query:l,resultsCount:c,totalItemsCount:u}){return typeof s=="function"?s(l,c,u):s}this.on("search",(s,l)=>{if(l.resultsCount)t.set({isVisible:!1});else{const c=this._config.infoView&&this._config.infoView.text;let u,f;l.totalItemsCount?c&&c.notFound?(u=c.notFound.primary,f=c.notFound.secondary):(u=e("No results found"),f=""):c&&c.noSearchableItems?(u=c.noSearchableItems.primary,f=c.noSearchableItems.secondary):(u=e("No searchable items"),f=""),t.set({primaryText:r(u,l),secondaryText:r(f,l),isVisible:!0})}})}}var _1=h(5727),Jz={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ge()(_1.A,Jz),_1.A.locals;const Mg=class extends Zz{constructor(i,e){super(i,e),this._config=e;const t=pa("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const r=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[r.if("isVisible","ck-hidden",s=>!s),r.to("_position",s=>`ck-search__results_${s}`)],style:{width:r.to("_width",t)}}}),this.focusTracker.on("change:isFocused",(s,l,c)=>{this._updateResultsVisibility(),c?this.resultsView.element.scrollTop=0:e.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(s,l)=>{this.resultsView.isVisible&&(this.queryView.focus(),this.resultsView.isVisible=!1,l())}),this.listenTo(w.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(s,{value:l})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=l,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new Qe(this.queryView.fieldView.element).width;const i=Mg._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:Mg.defaultResultsPositions});this.resultsView._position=i?i.name:"s"}_updateResultsVisibility(){const i=this._config.queryMinChars===void 0?0:this._config.queryMinChars,e=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&e>=i}};let C1=Mg;C1.defaultResultsPositions=[i=>({top:i.bottom,left:i.left,name:"s"}),(i,e)=>({top:i.top-e.height,left:i.left,name:"n"})],C1._getOptimalPosition=uu;var y1=h(9529),Xz={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ge()(y1.A,Xz),y1.A.locals;var x1=h(109),e6={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ge()(x1.A,e6),x1.A.locals;var E1=h(2710),t6={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ge()(E1.A,t6),E1.A.locals;var S1=h(3344),n6={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ge()(S1.A,n6),S1.A.locals;class r6 extends rt{constructor(e){super(e);const t=this.bindTemplate;this.set({withText:!0,role:"menuitem"}),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__button"],"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",r=>String(r)),"data-cke-tooltip-disabled":t.to("isOn")},on:{mouseenter:t.to("mouseenter")}})}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new Ho;return e.content=Lu,e.extendTemplate({attributes:{class:"ck-menu-bar__menu__button__arrow"}}),e}}var D1=h(9481),o6={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ge()(D1.A,o6),D1.A.locals;class Pg extends Ea{constructor(e,t){super(e);const r=this.bindTemplate;this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item"]},on:{mouseenter:r.to("mouseenter")}}),this.delegate("mouseenter").to(t)}}var i6=Object.defineProperty,T1=Object.getOwnPropertySymbols,s6=Object.prototype.hasOwnProperty,a6=Object.prototype.propertyIsEnumerable,I1=(i,e,t)=>e in i?i6(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,M1=(i,e)=>{for(var t in e||(e={}))s6.call(e,t)&&I1(i,t,e[t]);if(T1)for(var t of T1(e))a6.call(e,t)&&I1(i,t,e[t]);return i};const oc={toggleMenusAndFocusItemsOnHover(i){i.on("menu:mouseenter",e=>{if(i.isOpen){for(const t of i.menus){const r=e.path[0],s=r instanceof Pg&&r.children.first===t;t.isOpen=(e.path.includes(t)||s)&&t.isEnabled}e.source.focus()}})},focusCycleMenusOnArrows(i){const e=i.locale.uiLanguageDirection==="rtl";function t(r,s){const l=i.children.getIndex(r),c=r.isOpen,u=i.children.length,f=i.children.get((l+u+s)%u);r.isOpen=!1,c&&(f.isOpen=!0),f.buttonView.focus()}i.on("menu:arrowright",r=>{t(r.source,e?-1:1)}),i.on("menu:arrowleft",r=>{t(r.source,e?1:-1)})},closeMenusWhenTheBarCloses(i){i.on("change:isOpen",()=>{i.isOpen||i.menus.forEach(e=>{e.isOpen=!1})})},closeMenuWhenAnotherOnTheSameLevelOpens(i){i.on("menu:change:isOpen",(e,t,r)=>{r&&i.menus.filter(s=>e.source.parentMenuView===s.parentMenuView&&e.source!==s&&s.isOpen).forEach(s=>{s.isOpen=!1})})},closeOnClickOutside(i){mu({emitter:i,activator:()=>i.isOpen,callback:()=>i.close(),contextElements:()=>i.children.map(e=>e.element)})}},As={openAndFocusPanelOnArrowDownKey(i){i.keystrokes.set("arrowdown",(e,t)=>{i.focusTracker.focusedElement===i.buttonView.element&&(i.isOpen||(i.isOpen=!0),i.panelView.focus(),t())})},openOnArrowRightKey(i){const e=i.locale.uiLanguageDirection==="rtl"?"arrowleft":"arrowright";i.keystrokes.set(e,(t,r)=>{i.focusTracker.focusedElement===i.buttonView.element&&i.isEnabled&&(i.isOpen||(i.isOpen=!0),i.panelView.focus(),r())})},openOnButtonClick(i){i.buttonView.on("execute",()=>{i.isOpen=!0,i.panelView.focus()})},toggleOnButtonClick(i){i.buttonView.on("execute",()=>{i.isOpen=!i.isOpen,i.isOpen&&i.panelView.focus()})},closeOnArrowLeftKey(i){const e=i.locale.uiLanguageDirection==="rtl"?"arrowright":"arrowleft";i.keystrokes.set(e,(t,r)=>{i.isOpen&&(i.isOpen=!1,i.focus(),r())})},closeOnEscKey(i){i.keystrokes.set("esc",(e,t)=>{i.isOpen&&(i.isOpen=!1,i.focus(),t())})},closeOnParentClose(i){i.parentMenuView.on("change:isOpen",(e,t,r)=>{r||e.source!==i.parentMenuView||(i.isOpen=!1)})}},l6={southEast:i=>({top:i.bottom,left:i.left,name:"se"}),southWest:(i,e)=>({top:i.bottom,left:i.left-e.width+i.width,name:"sw"}),northEast:(i,e)=>({top:i.top-e.height,left:i.left,name:"ne"}),northWest:(i,e)=>({top:i.top-e.height,left:i.left-e.width+i.width,name:"nw"}),eastSouth:i=>({top:i.top,left:i.right-5,name:"es"}),eastNorth:(i,e)=>({top:i.top-e.height,left:i.right-5,name:"en"}),westSouth:(i,e)=>({top:i.top,left:i.left-e.width+5,name:"ws"}),westNorth:(i,e)=>({top:i.top-e.height,left:i.left-e.width+5,name:"wn"})},c6=[{menuId:"file",label:"File",groups:[{groupId:"export",items:["menuBar:exportPdf","menuBar:exportWord"]},{groupId:"import",items:["menuBar:importWord"]},{groupId:"revisionHistory",items:["menuBar:revisionHistory"]}]},{menuId:"edit",label:"Edit",groups:[{groupId:"undo",items:["menuBar:undo","menuBar:redo"]},{groupId:"selectAll",items:["menuBar:selectAll"]},{groupId:"findAndReplace",items:["menuBar:findAndReplace"]}]},{menuId:"view",label:"View",groups:[{groupId:"sourceEditing",items:["menuBar:sourceEditing"]},{groupId:"showBlocks",items:["menuBar:showBlocks"]},{groupId:"restrictedEditingException",items:["menuBar:restrictedEditingException"]}]},{menuId:"insert",label:"Insert",groups:[{groupId:"insertMainWidgets",items:["menuBar:uploadImage","menuBar:ckbox","menuBar:ckfinder","menuBar:insertTable"]},{groupId:"insertInline",items:["menuBar:link","menuBar:comment"]},{groupId:"insertMinorWidgets",items:["menuBar:insertTemplate","menuBar:blockQuote","menuBar:codeBlock","menuBar:htmlEmbed"]},{groupId:"insertStructureWidgets",items:["menuBar:horizontalLine","menuBar:pageBreak","menuBar:tableOfContents"]},{groupId:"restrictedEditing",items:["menuBar:restrictedEditing"]}]},{menuId:"format",label:"Format",groups:[{groupId:"textAndFont",items:[{menuId:"text",label:"Text",groups:[{groupId:"basicStyles",items:["menuBar:bold","menuBar:italic","menuBar:underline","menuBar:strikethrough","menuBar:superscript","menuBar:subscript","menuBar:code"]},{groupId:"textPartLanguage",items:["menuBar:textPartLanguage"]}]},{menuId:"font",label:"Font",groups:[{groupId:"fontProperties",items:["menuBar:fontSize","menuBar:fontFamily"]},{groupId:"fontColors",items:["menuBar:fontColor","menuBar:fontBackgroundColor"]},{groupId:"highlight",items:["menuBar:highlight"]}]},"menuBar:heading"]},{groupId:"list",items:["menuBar:bulletedList","menuBar:numberedList","menuBar:todoList"]},{groupId:"indent",items:["menuBar:alignment","menuBar:indent","menuBar:outdent"]},{groupId:"caseChange",items:["menuBar:caseChange"]},{groupId:"removeFormat",items:["menuBar:removeFormat"]}]},{menuId:"tools",label:"Tools",groups:[{groupId:"aiTools",items:["menuBar:aiAssistant","menuBar:aiCommands"]},{groupId:"tools",items:["menuBar:trackChanges","menuBar:commentsArchive"]}]},{menuId:"help",label:"Help",groups:[{groupId:"help",items:["menuBar:accessibilityHelp"]}]}];function d6({normalizedConfig:i,locale:e,componentFactory:t}){const r=Yr(i);return function(s,l){const c=l.removeItems,u=[];l.items=l.items.filter(({menuId:f})=>!c.includes(f)||(u.push(f),!1)),Da(l.items,f=>{f.groups=f.groups.filter(({groupId:k})=>!c.includes(k)||(u.push(k),!1));for(const k of f.groups)k.items=k.items.filter(b=>{const _=N1(b);return!c.includes(_)||(u.push(_),!1)})});for(const f of c)u.includes(f)||z("menu-bar-item-could-not-be-removed",{menuBarConfig:s,itemName:f})}(i,r),function(s,l){const c=l.addItems,u=[];for(const f of c){const k=f6(f.position),b=p6(f.position);if(u6(f))if(b){const _=l.items.findIndex(E=>E.menuId===b);_!=-1?k==="before"?(l.items.splice(_,0,f.menu),u.push(f)):k==="after"&&(l.items.splice(_+1,0,f.menu),u.push(f)):P1(l,f.menu,b,k)&&u.push(f)}else k==="start"?(l.items.unshift(f.menu),u.push(f)):k==="end"&&(l.items.push(f.menu),u.push(f));else h6(f)?Da(l.items,_=>{if(_.menuId===b)k==="start"?(_.groups.unshift(f.group),u.push(f)):k==="end"&&(_.groups.push(f.group),u.push(f));else{const E=_.groups.findIndex(T=>T.groupId===b);E!==-1&&(k==="before"?(_.groups.splice(E,0,f.group),u.push(f)):k==="after"&&(_.groups.splice(E+1,0,f.group),u.push(f)))}}):P1(l,f.item,b,k)&&u.push(f)}for(const f of c)u.includes(f)||z("menu-bar-item-could-not-be-added",{menuBarConfig:s,addedItemConfig:f})}(i,r),function(s,l,c){Da(l.items,u=>{for(const f of u.groups)f.items=f.items.filter(k=>{const b=typeof k=="string"&&!c.has(k);return b&&!l.isUsingDefaultConfig&&z("menu-bar-item-unavailable",{menuBarConfig:s,parentMenuConfig:Yr(u),componentName:k}),!b})})}(i,r,t),B1(i,r),function(s,l){const c=l.t,u={File:c({string:"File",id:"MENU_BAR_MENU_FILE"}),Edit:c({string:"Edit",id:"MENU_BAR_MENU_EDIT"}),View:c({string:"View",id:"MENU_BAR_MENU_VIEW"}),Insert:c({string:"Insert",id:"MENU_BAR_MENU_INSERT"}),Format:c({string:"Format",id:"MENU_BAR_MENU_FORMAT"}),Tools:c({string:"Tools",id:"MENU_BAR_MENU_TOOLS"}),Help:c({string:"Help",id:"MENU_BAR_MENU_HELP"}),Text:c({string:"Text",id:"MENU_BAR_MENU_TEXT"}),Font:c({string:"Font",id:"MENU_BAR_MENU_FONT"})};Da(s.items,f=>{f.label in u&&(f.label=u[f.label])})}(r,e),r}function P1(i,e,t,r){let s=!1;return Da(i.items,l=>{for(const{groupId:c,items:u}of l.groups){if(s)return;if(c===t)r==="start"?(u.unshift(e),s=!0):r==="end"&&(u.push(e),s=!0);else{const f=u.findIndex(k=>N1(k)===t);f!==-1&&(r==="before"?(u.splice(f,0,e),s=!0):r==="after"&&(u.splice(f+1,0,e),s=!0))}}}),s}function B1(i,e){const t=e.isUsingDefaultConfig;let r=!1;e.items=e.items.filter(s=>!!s.groups.length||(Bg(i,s,t),!1)),e.items.length?(Da(e.items,s=>{s.groups=s.groups.filter(l=>!!l.items.length||(r=!0,!1));for(const l of s.groups)l.items=l.items.filter(c=>!(O1(c)&&!c.groups.length)||(Bg(i,c,t),r=!0,!1))}),r&&B1(i,e)):Bg(i,i,t)}function Bg(i,e,t){t||z("menu-bar-menu-empty",{menuBarConfig:i,emptyMenuConfig:e})}function Da(i,e){if(Array.isArray(i))for(const r of i)t(r);function t(r){e(r);for(const s of r.groups)for(const l of s.items)O1(l)&&t(l)}}function u6(i){return typeof i=="object"&&"menu"in i}function h6(i){return typeof i=="object"&&"group"in i}function f6(i){return i.startsWith("start")?"start":i.startsWith("end")?"end":i.startsWith("after")?"after":"before"}function p6(i){const e=i.match(/^[^:]+:(.+)/);return e?e[1]:null}function N1(i){return typeof i=="string"?i:i.menuId}function O1(i){return typeof i=="object"&&"menuId"in i}function m6(i,e){const t=e.element;i.ui.focusTracker.add(t),i.keystrokes.listenTo(t);const r=function(s){let l;return l="items"in s&&s.items?M1({items:s.items,removeItems:[],addItems:[],isVisible:!0,isUsingDefaultConfig:!1},s):M1({items:Yr(c6),addItems:[],removeItems:[],isVisible:!0,isUsingDefaultConfig:!0},s),l}(i.config.get("menuBar")||{});e.fillFromConfig(r,i.ui.componentFactory),i.keystrokes.set("Esc",(s,l)=>{t.contains(i.ui.focusTracker.focusedElement)&&(i.editing.view.focus(),l())}),i.keystrokes.set("Alt+F9",(s,l)=>{t.contains(i.ui.focusTracker.focusedElement)||(e.focus(),l())})}var R1=h(9108),g6={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ge()(R1.A,g6),R1.A.locals;class k6 extends Ie{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-menu-bar__menu__panel",t.to("position",r=>`ck-menu-bar__menu__panel_position_${r}`),t.if("isVisible","ck-hidden",r=>!r)],tabindex:"-1"},children:this.children,on:{selectstart:t.to(r=>{r.target.tagName.toLocaleLowerCase()!=="input"&&r.preventDefault()})}})}focus(e=1){this.children.length&&(e===1?this.children.first.focus():this.children.last.focus())}}var L1=h(4),b6={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ge()(L1.A,b6),L1.A.locals;const j1=class extends Ie{constructor(i){super(i);const e=this.bindTemplate;this.buttonView=new r6(i),this.buttonView.delegate("mouseenter").to(this),this.buttonView.bind("isOn","isEnabled").to(this,"isOpen","isEnabled"),this.panelView=new k6(i),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new jn,this.focusTracker=new dn,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("panelPosition","w"),this.set("class",void 0),this.set("parentMenuView",null),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar__menu",e.to("class"),e.if("isEnabled","ck-disabled",t=>!t),e.if("parentMenuView","ck-menu-bar__menu_top-level",t=>!t)]},children:[this.buttonView,this.panelView]})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.keystrokes.listenTo(this.element),As.closeOnEscKey(this),this._repositionPanelOnOpen()}_attachBehaviors(){this.parentMenuView?(As.openOnButtonClick(this),As.openOnArrowRightKey(this),As.closeOnArrowLeftKey(this),As.closeOnParentClose(this)):(this._propagateArrowKeystrokeEvents(),As.openAndFocusPanelOnArrowDownKey(this),As.toggleOnButtonClick(this))}_propagateArrowKeystrokeEvents(){this.keystrokes.set("arrowright",(i,e)=>{this.fire("arrowright"),e()}),this.keystrokes.set("arrowleft",(i,e)=>{this.fire("arrowleft"),e()})}_repositionPanelOnOpen(){this.on("change:isOpen",(i,e,t)=>{if(!t)return;const r=j1._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=r?r.name:this._panelPositions[0].name})}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:i,southWest:e,northEast:t,northWest:r,westSouth:s,eastSouth:l,westNorth:c,eastNorth:u}=l6;return this.locale.uiLanguageDirection==="ltr"?this.parentMenuView?[l,u,s,c]:[i,e,t,r]:this.parentMenuView?[s,c,l,u]:[e,i,r,t]}};let Ta=j1;Ta._getOptimalPosition=uu;class Ng extends yg{constructor(e){super(e),this.role="menu"}}var z1=h(977),w6={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ge()(z1.A,w6),z1.A.locals;class hr extends rt{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}class F1 extends by{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}var V1=h(497),v6={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ge()(V1.A,v6),V1.A.locals;const U1=["mouseenter","arrowleft","arrowright","change:isOpen"];class A6 extends Ie{constructor(e){super(e),this.menus=[];const t=e.t;this.set("isOpen",!1),this._setupIsOpenUpdater(),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar"],"aria-label":t("Editor menu bar"),role:"menubar"},children:this.children})}fillFromConfig(e,t){const r=d6({normalizedConfig:e,locale:this.locale,componentFactory:t}).items.map(s=>this._createMenu({componentFactory:t,menuDefinition:s}));this.children.addMany(r)}render(){super.render(),oc.toggleMenusAndFocusItemsOnHover(this),oc.closeMenusWhenTheBarCloses(this),oc.closeMenuWhenAnotherOnTheSameLevelOpens(this),oc.focusCycleMenusOnArrows(this),oc.closeOnClickOutside(this)}focus(){this.children.first&&this.children.first.focus()}close(){for(const e of this.children)e.isOpen=!1}registerMenu(e,t=null){t?(e.delegate(...U1).to(t),e.parentMenuView=t):e.delegate(...U1).to(this,r=>"menu:"+r),e._attachBehaviors(),this.menus.push(e)}_createMenu({componentFactory:e,menuDefinition:t,parentMenuView:r}){const s=this.locale,l=new Ta(s);return this.registerMenu(l,r),l.buttonView.set({label:t.label}),l.once("change:isOpen",()=>{const c=new Ng(s);c.ariaLabel=t.label,l.panelView.children.add(c),c.items.addMany(this._createMenuItems({menuDefinition:t,parentMenuView:l,componentFactory:e}))}),l}_createMenuItems({menuDefinition:e,parentMenuView:t,componentFactory:r}){const s=this.locale,l=[];for(const c of e.groups){for(const u of c.items){const f=new Pg(s,t);if(ve(u))f.children.add(this._createMenu({componentFactory:r,menuDefinition:u,parentMenuView:t}));else{const k=this._createMenuItemContentFromFactory({componentName:u,componentFactory:r,parentMenuView:t});if(!k)continue;f.children.add(k)}l.push(f)}c!==e.groups[e.groups.length-1]&&l.push(new Cg(s))}return l}_createMenuItemContentFromFactory({componentName:e,parentMenuView:t,componentFactory:r}){const s=r.create(e);return s instanceof Ta||s instanceof hr||s instanceof F1?(this._registerMenuTree(s,t),s.on("execute",()=>{this.close()}),s):(z("menu-bar-component-unsupported",{componentName:e,componentView:s}),null)}_registerMenuTree(e,t){if(!(e instanceof Ta))return void e.delegate("mouseenter").to(t);this.registerMenu(e,t);const r=e.panelView.children.filter(l=>l instanceof Ng)[0];if(!r)return void e.delegate("mouseenter").to(t);const s=r.items.filter(l=>l instanceof Ea);for(const l of s)this._registerMenuTree(l.children.get(0),e)}_setupIsOpenUpdater(){let e;this.on("menu:change:isOpen",(t,r,s)=>{clearTimeout(e),s?this.isOpen=!0:e=setTimeout(()=>{this.isOpen=Array.from(this.children).some(l=>l.isOpen)},0)})}}class _6 extends Mz{constructor(e,t){super(e),this.view=t,this._toolbarConfig=Ty(e.config.get("toolbar")),this._elementReplacer=new Oe,this.listenTo(e.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(e){const t=this.editor,r=this.view,s=t.editing.view,l=r.editable,c=s.document.getRoot();l.name=c.rootName,r.render();const u=l.element;this.setEditableElement(l.name,u),r.editable.bind("isFocused").to(this.focusTracker),s.attachDomRoot(u),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),r.menuBarView&&m6(t,r.menuBarView),this._initDialogPluginIntegration(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,r=t.document.getRoot(),s=e.sourceElement;let l;const c=e.config.get("placeholder");c&&(l=typeof c=="string"?c:c[this.view.editable.name]),!l&&s&&s.tagName.toLowerCase()==="textarea"&&(l=s.getAttribute("placeholder")),l&&(r.placeholder=l),h_({view:t,element:r,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(e,t,r){const s=this.view.stickyPanel;if(s.isSticky){const l=new Qe(s.element).height;t.viewportOffset.top+=l}else{const l=()=>{this.editor.editing.view.scrollToTheSelection(r)};this.listenTo(s,"change:isSticky",l),setTimeout(()=>{this.stopListening(s,"change:isSticky",l)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const e=this.view.stickyPanel,t=this.editor.plugins.get("Dialog");t.on("show",()=>{const r=t.view;r.on("moveTo",(s,l)=>{if(!e.isSticky||r.wasMoved)return;const c=new Qe(e.contentPanelElement);l[1]<c.bottom+Hu.defaultOffset&&(l[1]=c.bottom+Hu.defaultOffset)},{priority:"high"})},{priority:"low"})}}var H1=h(7388),C6={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ge()(H1.A,C6),H1.A.locals;class y6 extends Nz{constructor(e,t,r={}){super(e),this.stickyPanel=new Uz(e),this.toolbar=new _g(e,{shouldGroupWhenFull:r.shouldToolbarGroupWhenFull}),r.useMenuBar&&(this.menuBarView=new A6(e)),this.editable=new Rz(e,t)}render(){super.render(),this.menuBarView?this.stickyPanel.content.addMany([this.menuBarView,this.toolbar]):this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class $1{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const r="error"in t?t.error:t.reason;r instanceof Error&&this._handleError(r,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}off(e,t){this._listeners[e]=this._listeners[e].filter(r=>r!==t)}_fire(e,...t){const r=this._listeners[e]||[];for(const s of r)s.apply(this,[null,...t])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,t){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:t instanceof ErrorEvent?t.filename:void 0,lineno:t instanceof ErrorEvent?t.lineno:void 0,colno:t instanceof ErrorEvent?t.colno:void 0,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function Og(i,e=new Set){const t=[i],r=new Set;let s=0;for(;t.length>s;){const l=t[s++];if(!r.has(l)&&x6(l)&&!e.has(l))if(r.add(l),Symbol.iterator in l)try{for(const c of l)t.push(c)}catch{}else for(const c in l)c!=="defaultValue"&&t.push(l[c])}return r}function x6(i){const e=Object.prototype.toString.call(i),t=typeof i;return!(t==="number"||t==="boolean"||t==="string"||t==="symbol"||t==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||i==null||i._watchdogExcluded||i instanceof EventTarget||i instanceof Event)}function W1(i,e,t=new Set){if(i===e&&typeof(r=i)=="object"&&r!==null)return!0;var r;const s=Og(i,t),l=Og(e,t);for(const c of s)if(l.has(c))return!0;return!1}var E6=Object.defineProperty,S6=Object.defineProperties,D6=Object.getOwnPropertyDescriptors,Ku=Object.getOwnPropertySymbols,q1=Object.prototype.hasOwnProperty,G1=Object.prototype.propertyIsEnumerable,K1=(i,e,t)=>e in i?E6(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Rg=(i,e)=>{for(var t in e||(e={}))q1.call(e,t)&&K1(i,t,e[t]);if(Ku)for(var t of Ku(e))G1.call(e,t)&&K1(i,t,e[t]);return i};class Q1 extends $1{constructor(e,t={}){super(t),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=Wu(this._save.bind(this),typeof t.saveInterval=="number"?t.saveInterval:5e3),e&&(this._creator=(r,s)=>e.create(r,s)),this._destructor=r=>r.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{const e={},t=[],r=this._config.rootsAttributes||{},s={};for(const[f,k]of Object.entries(this._data.roots))k.isLoaded?(e[f]="",s[f]=r[f]||{}):t.push(f);const l=(c=Rg({},this._config),u={extraPlugins:this._config.extraPlugins||[],lazyRoots:t,rootsAttributes:s,_watchdogInitialData:this._data},S6(c,D6(u)));var c,u;return delete l.initialData,l.extraPlugins.push(T6),this._initUsingData?this.create(e,l,l.context):ds(this._elementOrData)?this.create(this._elementOrData,l,l.context):this.create(this._editables,l,l.context)}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,t=this._config,r){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=e,this._initUsingData=typeof e=="string"||Object.keys(e).length>0&&typeof Object.values(e)[0]=="string",this._config=this._cloneEditorConfiguration(t)||{},this._config.context=r,this._creator(e,this._config))).then(s=>{this._editor=s,s.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=s.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=e}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e=this._editor,t=e.model.document.roots.filter(u=>u.isAttached()&&u.rootName!="$graveyard"),{plugins:r}=e,s=r.has("CommentsRepository")&&r.get("CommentsRepository"),l=r.has("TrackChanges")&&r.get("TrackChanges"),c={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};t.forEach(u=>{c.roots[u.rootName]={content:JSON.stringify(Array.from(u.getChildren())),attributes:JSON.stringify(Array.from(u.getAttributes())),isLoaded:u._isLoaded}});for(const u of e.model.markers)u._affectsData&&(c.markers[u.name]={rangeJSON:u.getRange().toJSON(),usingOperation:u._managedUsingOperations,affectsData:u._affectsData});return s&&(c.commentThreads=JSON.stringify(s.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),l&&(c.suggestions=JSON.stringify(l.getSuggestions({toJSON:!0,skipNotAttached:!0}))),c}_getEditables(){const e={};for(const t of this.editor.model.document.getRootNames()){const r=this.editor.ui.getEditableElement(t);r&&(e[t]=r)}return e}_isErrorComingFromThisItem(e){return W1(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return Em(e,(t,r)=>ds(t)||r==="context"?t:void 0)}}class T6{constructor(e){this.editor=e,this._data=e.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",e=>{e.stop(),this.editor.model.enqueueChange({isUndoable:!1},t=>{this._restoreCollaborationData(),this._restoreEditorData(t)}),this.editor.data.fire("ready")},{priority:999})}_createNode(e,t){if("name"in t){const r=e.createElement(t.name,t.attributes);if(t.children)for(const s of t.children)r._appendChild(this._createNode(e,s));return r}return e.createText(t.data,t.attributes)}_restoreEditorData(e){const t=this.editor;Object.entries(this._data.roots).forEach(([r,{content:s,attributes:l}])=>{const c=JSON.parse(s),u=JSON.parse(l),f=t.model.document.getRoot(r);for(const[k,b]of u)e.setAttribute(k,b,f);for(const k of c){const b=this._createNode(e,k);e.insert(b,f,"end")}}),Object.entries(this._data.markers).forEach(([r,s])=>{const{document:l}=t.model,c=s,{rangeJSON:{start:u,end:f}}=c,k=((M,R)=>{var j={};for(var H in M)q1.call(M,H)&&R.indexOf(H)<0&&(j[H]=M[H]);if(M!=null&&Ku)for(var H of Ku(M))R.indexOf(H)<0&&G1.call(M,H)&&(j[H]=M[H]);return j})(c,["rangeJSON"]),b=l.getRoot(u.root),_=e.createPositionFromPath(b,u.path,u.stickiness),E=e.createPositionFromPath(b,f.path,f.stickiness),T=e.createRange(_,E);e.addMarker(r,Rg({range:T},k))})}_restoreCollaborationData(){const e=JSON.parse(this._data.commentThreads),t=JSON.parse(this._data.suggestions);e.forEach(r=>{const s=this.editor.config.get("collaboration.channelId"),l=this.editor.plugins.get("CommentsRepository");l.hasCommentThread(r.threadId)&&l.getCommentThread(r.threadId).remove(),l.addCommentThread(Rg({channelId:s},r))}),t.forEach(r=>{const s=this.editor.plugins.get("TrackChangesEditing");s.hasSuggestion(r.id)?s.getSuggestion(r.id).attributes=r.attributes:s.addSuggestionData(r)})}}const ic=Symbol("MainQueueId");class I6{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,t){const r=e===ic;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const s=(r?Promise.all(this._queues.values()):Promise.all([this._queues.get(ic),this._queues.get(e)])).then(t),l=s.catch(()=>{});return this._queues.set(e,l),s.finally(()=>{this._activeActions--,this._queues.get(e)===l&&this._activeActions===0&&this._onEmptyCallbacks.forEach(c=>c())})}}function Y1(i){return Array.isArray(i)?i:[i]}class Qu extends bg(hj){constructor(e,t={}){if(!Yu(e)&&t.initialData!==void 0)throw new D("editor-create-initial-data",null);super(t),this.config.define("menuBar.isVisible",!1),this.config.get("initialData")===void 0&&this.config.set("initialData",function(c){return Yu(c)?(u=c,u instanceof HTMLTextAreaElement?u.value:u.innerHTML):c;var u}(e)),Yu(e)&&(this.sourceElement=e),this.model.document.createRoot();const r=!this.config.get("toolbar.shouldNotGroupWhenFull"),s=this.config.get("menuBar"),l=new y6(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:r,useMenuBar:s.isVisible});this.ui=new _6(this,l),function(c){if(!Wn(c.updateSourceElement))throw new D("attachtoform-missing-elementapi-interface",c);const u=c.sourceElement;if(function(f){return!!f&&f.tagName.toLowerCase()==="textarea"}(u)&&u.form){let f;const k=u.form,b=()=>c.updateSourceElement();Wn(k.submit)&&(f=k.submit,k.submit=()=>{b(),f.apply(k)}),k.addEventListener("submit",b),c.on("destroy",()=>{k.removeEventListener("submit",b),f&&(k.submit=f)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(r=>{const s=new this(e,t);r(s.initPlugins().then(()=>s.ui.init(Yu(e)?e:null)).then(()=>s.data.init(s.config.get("initialData"))).then(()=>s.fire("ready")).then(()=>s))})}}function Yu(i){return ds(i)}Qu.Context=c_,Qu.EditorWatchdog=Q1,Qu.ContextWatchdog=class extends $1{constructor(i,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new I6,this._watchdogConfig=e,this._creator=t=>i.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(i){this._creator=i}setDestructor(i){this._destructor=i}get context(){return this._context}create(i={}){return this._actionQueues.enqueue(ic,()=>(this._contextConfig=i,this._create()))}getItem(i){return this._getWatchdog(i)._item}getItemState(i){return this._getWatchdog(i).state}add(i){const e=Y1(i);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let r;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return r=new Q1(null,this._watchdogConfig),r.setCreator(t.creator),r._setExcludedProperties(this._contextProps),t.destructor&&r.setDestructor(t.destructor),this._watchdogs.set(t.id,r),r.on("error",(s,{error:l,causesRestart:c})=>{this._fire("itemError",{itemId:t.id,error:l}),c&&this._actionQueues.enqueue(t.id,()=>new Promise(u=>{const f=()=>{r.off("restart",f),this._fire("itemRestart",{itemId:t.id}),u()};r.on("restart",f)}))}),r.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(i){const e=Y1(i);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const r=this._getWatchdog(t);return this._watchdogs.delete(t),r.destroy()})))}destroy(){return this._actionQueues.enqueue(ic,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(ic,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(i=>{console.error("An error happened during destroying the context or items.",i)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(i=>(this._context=i,this._contextProps=Og(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const i=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(i))})}_getWatchdog(i){const e=this._watchdogs.get(i);if(!e)throw new Error(`Item with the given id was not registered: ${i}.`);return e}_isErrorComingFromThisItem(i){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(i))return!1;return W1(this._context,i.context)}};class sc extends pi{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function r(s){return(l,c)=>{c.preventDefault();const u=c.dropRange?[c.dropRange]:null,f=new P(t,s);t.fire(f,{dataTransfer:c.dataTransfer,method:l.name,targetRanges:u,target:c.target,domEvent:c.domEvent}),f.stop.called&&c.stopPropagation()}}this.listenTo(t,"paste",r("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",r("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",r("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,r=e.type=="drop"||e.type=="paste",s={dataTransfer:new G_(t,{cacheFiles:r})};e.type!="drop"&&e.type!="dragover"||(s.dropRange=function(l,c){const u=c.target.ownerDocument,f=c.clientX,k=c.clientY;let b;return u.caretRangeFromPoint&&u.caretRangeFromPoint(f,k)?b=u.caretRangeFromPoint(f,k):c.rangeParent&&(b=u.createRange(),b.setStart(c.rangeParent,c.rangeOffset),b.collapse(!0)),b?l.domConverter.domRangeToView(b):null}(this.view,e)),this.fire(e.type,e,s)}}const Z1=["figcaption","li"],J1=["ol","ul"];function X1(i){if(i.is("$text")||i.is("$textProxy"))return i.data;if(i.is("element","img")&&i.hasAttribute("alt"))return i.getAttribute("alt");if(i.is("element","br"))return`
`;let e="",t=null;for(const r of i.getChildren())e+=M6(r,t)+X1(r),t=r;return e}function M6(i,e){return e?i.is("element","li")&&!i.isEmpty&&i.getChild(0).is("containerElement")||J1.includes(i.name)&&J1.includes(e.name)?`

`:i.is("containerElement")||e.is("containerElement")?Z1.includes(i.name)||Z1.includes(e.name)?`
`:`
