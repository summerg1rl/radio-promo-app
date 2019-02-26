!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2),i=n(3);o.render(r.createElement(i.App,null),document.getElementById("root"))},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=n(4),l=n(5),u=n(12),s=function(e){function t(t){var n=e.call(this,t)||this;return n.state={countries:null,selectedCountry:null,stations:null},n}return o(t,e),t.prototype.componentDidMount=function(){var e=this;google.script.run.withSuccessHandler(function(t){e.setState({countries:t})}).getCountrySummaries()},t.prototype.countrySelected=function(e){var t=this;this.setState({selectedCountry:e}),google.script.run.withSuccessHandler(function(e){t.setState({stations:e})}).getStationsByCountry(e.id)},t.prototype.render=function(){return i.createElement("div",null,i.createElement(a.Intro,null),null!=this.state.countries&&i.createElement(l.CountryDropdown,{countries:this.state.countries,onChange:this.countrySelected}),null!=this.state.selectedCountry&&i.createElement(u.Stations,{stations:this.state.stations}))},t}(i.Component);t.App=s},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}return o(t,e),t.prototype.render=function(){return i.createElement("div",{className:"jumbotron"},i.createElement("h1",{className:"display-4"},"Radio Promo App"),i.createElement("p",{className:"lead"},"Explain things here..."),i.createElement("hr",{className:"my-4"}),i.createElement("p",null,"Maybe some more text here/"))},t}(i.Component);t.Intro=a},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=n(6),l=n(8),u=n(11),s=function(e){function t(t){var n=e.call(this,t)||this;return n.state={selectedCountry:null},n}return o(t,e),t.prototype.formatCountry=function(e){if(!e.id)return e.text;var t=e.code.toLowerCase();return"uk"===t&&(t="gb"),$(l.renderToStaticMarkup(i.createElement("span",{key:e.id,className:u.countrySelector},i.createElement("img",{className:"mr-3",src:"http://files.stevenskelton.ca/flag-icon/flag-icon/svg/country-4x3/"+t+".svg",alt:"Card image cap"}),i.createElement("span",null,e.name," - ",e.stations," stations"))))},t.prototype.formatCountrySelection=function(e){if(!e.id)return e.text;var t=e.code.toLowerCase();return"uk"===t&&(t="gb"),$(l.renderToStaticMarkup(i.createElement("span",{key:e.id,className:u.countrySelector},i.createElement("img",{className:"mr-3",src:"http://files.stevenskelton.ca/flag-icon/flag-icon/svg/country-4x3/"+t+".svg",alt:"Card image cap"}),i.createElement("span",null,e.name))))},t.prototype.countrySelected=function(e){var t=e.params.data;this.props.onChange(t)},t.prototype.render=function(){var e=$.fn.select2.amd.require("select2/data/customDataAdapter"),t={"select2:select":this.countrySelected};return i.createElement(a.Select2,{width:"100%",data:this.props.countries,templateResult:this.formatCountry,templateSelection:this.formatCountrySelection,dataAdapter:e,events:t})},t}(i.Component);t.CountryDropdown=s},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=n(7);!function(){function e(e,t){}e.prototype.addOptions=function(e){},e.prototype.convertToOptions=function(e){return null}}();a.fn.select2.amd.define("select2/data/customDataAdapter",["select2/data/array"],function(e){return function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.$element=t,r}return o(t,e),t.prototype.updateOptions=function(e){this.$element.find("option").remove();this.addOptions(this.convertToOptions(e.data))},t}(e)});var l=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}return o(t,e),t.prototype.componentDidMount=function(){var e=this;console.log("did mount",this.props.dataAdapter),this.$el=a(this.el),this.$el.select2(this.props),Object.keys(this.props.events).forEach(function(t){return a(e.el).on(t,function(n){console.log("listened for "+t),e.props.events[t](n)})})},t.prototype.componentWillUnmount=function(){this.$el.select2("destroy")},t.prototype.componentDidUpdate=function(e){(console.log("did update",a(a(this.el).data("select2"))),JSON.stringify(e)!==JSON.stringify(this.props))&&(a(this.el).data("select2").dataAdapter.updateOptions(this.props),a(this.el).trigger("change"))},t.prototype.render=function(){var e=this;return i.createElement("div",null,i.createElement("select",{className:"select2",ref:function(t){return e.el=t}}))},t}(i.Component);t.Select2=l},function(e,t){e.exports=jQuery},function(e,t,n){"use strict";e.exports=n(9)},function(e,t,n){"use strict";
/** @license React v16.8.3
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(10),o=n(0);function i(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,i,a,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,l],s=0;(e=Error(t.replace(/%s/g,function(){return u[s++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var a="function"==typeof Symbol&&Symbol.for,l=a?Symbol.for("react.portal"):60106,u=a?Symbol.for("react.fragment"):60107,s=a?Symbol.for("react.strict_mode"):60108,c=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,f=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.concurrent_mode"):60111,h=a?Symbol.for("react.forward_ref"):60112,y=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.memo"):60115,v=a?Symbol.for("react.lazy"):60116;function g(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case d:return"ConcurrentMode";case u:return"Fragment";case l:return"Portal";case c:return"Profiler";case s:return"StrictMode";case y:return"Suspense"}if("object"==typeof e)switch(e.$$typeof){case f:return"Context.Consumer";case p:return"Context.Provider";case h:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case m:return g(e.type);case v:if(e=1===e._status?e._result:null)return g(e)}return null}var w=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;w.hasOwnProperty("ReactCurrentDispatcher")||(w.ReactCurrentDispatcher={current:null});var x={};function b(e,t){for(var n=0|e._threadCount;n<=t;n++)e[n]=e._currentValue2,e._threadCount=n+1}for(var S=new Uint16Array(16),_=0;15>_;_++)S[_]=_+1;S[15]=0;var O=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k=Object.prototype.hasOwnProperty,C={},E={};function F(e){return!!k.call(E,e)||!k.call(C,e)&&(O.test(e)?E[e]=!0:(C[e]=!0,!1))}function j(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function P(e,t,n,r,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){M[e]=new P(e,0,!1,e,null)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];M[t]=new P(t,1,!1,e[1],null)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){M[e]=new P(e,2,!1,e.toLowerCase(),null)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){M[e]=new P(e,2,!1,e,null)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){M[e]=new P(e,3,!1,e.toLowerCase(),null)}),["checked","multiple","muted","selected"].forEach(function(e){M[e]=new P(e,3,!0,e,null)}),["capture","download"].forEach(function(e){M[e]=new P(e,4,!1,e,null)}),["cols","rows","size","span"].forEach(function(e){M[e]=new P(e,6,!1,e,null)}),["rowSpan","start"].forEach(function(e){M[e]=new P(e,5,!1,e.toLowerCase(),null)});var D=/[\-:]([a-z])/g;function N(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(D,N);M[t]=new P(t,1,!1,e,null)}),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(D,N);M[t]=new P(t,1,!1,e,"http://www.w3.org/1999/xlink")}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(D,N);M[t]=new P(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")}),["tabIndex","crossOrigin"].forEach(function(e){M[e]=new P(e,1,!1,e.toLowerCase(),null)});var I=/["'&<>]/;function A(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=I.exec(e);if(t){var n,r="",o=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==n&&(r+=e.substring(o,n)),o=n+1,r+=t}e=o!==n?r+e.substring(o,n):r}return e}var T=null,z=null,L=null,R=!1,V=!1,W=null,$=0;function H(){return null===T&&i("307"),T}function U(){return 0<$&&i("312"),{memoizedState:null,queue:null,next:null}}function q(){return null===L?null===z?(R=!1,z=L=U()):(R=!0,L=z):null===L.next?(R=!1,L=L.next=U()):(R=!0,L=L.next),L}function B(e,t,n,r){for(;V;)V=!1,$+=1,L=null,n=e(t,r);return z=T=null,$=0,L=W=null,n}function Z(e,t){return"function"==typeof t?t(e):t}function J(e,t,n){if(T=H(),L=q(),R){var r=L.queue;if(t=r.dispatch,null!==W&&void 0!==(n=W.get(r))){W.delete(r),r=L.memoizedState;do{r=e(r,n.action),n=n.next}while(null!==n);return L.memoizedState=r,[r,t]}return[L.memoizedState,t]}return e=e===Z?"function"==typeof t?t():t:void 0!==n?n(t):t,L.memoizedState=e,e=(e=L.queue={last:null,dispatch:null}).dispatch=function(e,t,n){if(25>$||i("301"),e===T)if(V=!0,e={action:n,next:null},null===W&&(W=new Map),void 0===(n=W.get(t)))W.set(t,e);else{for(t=n;null!==t.next;)t=t.next;t.next=e}}.bind(null,T,e),[L.memoizedState,e]}function G(){}var Q=0,X={readContext:function(e){var t=Q;return b(e,t),e[t]},useContext:function(e){H();var t=Q;return b(e,t),e[t]},useMemo:function(e,t){if(T=H(),t=void 0===t?null:t,null!==(L=q())){var n=L.memoizedState;if(null!==n&&null!==t){e:{var r=n[1];if(null===r)r=!1;else{for(var o=0;o<r.length&&o<t.length;o++){var i=t[o],a=r[o];if((i!==a||0===i&&1/i!=1/a)&&(i==i||a==a)){r=!1;break e}}r=!0}}if(r)return n[0]}}return e=e(),L.memoizedState=[e,t],e},useReducer:J,useRef:function(e){T=H();var t=(L=q()).memoizedState;return null===t?(e={current:e},L.memoizedState=e):t},useState:function(e){return J(Z,e)},useLayoutEffect:function(){},useCallback:function(e){return e},useImperativeHandle:G,useEffect:G,useDebugValue:G},Y={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function K(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var ee={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},te=r({menuitem:!0},ee),ne={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},re=["Webkit","ms","Moz","O"];Object.keys(ne).forEach(function(e){re.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ne[t]=ne[e]})});var oe=/([A-Z])/g,ie=/^ms-/,ae=o.Children.toArray,le=w.ReactCurrentDispatcher,ue={listing:!0,pre:!0,textarea:!0},se=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,ce={},pe={};var fe=Object.prototype.hasOwnProperty,de={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function he(e,t){void 0===e&&i("152",g(t)||"Component")}function ye(e,t,n){function a(o,a){var l=function(e,t,n){var r=e.contextType;if("object"==typeof r&&null!==r)return b(r,n),r[n];if(e=e.contextTypes){for(var o in n={},e)n[o]=t[o];t=n}else t=x;return t}(a,t,n),u=[],s=!1,c={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===u)return null},enqueueReplaceState:function(e,t){s=!0,u=[t]},enqueueSetState:function(e,t){if(null===u)return null;u.push(t)}},p=void 0;if(a.prototype&&a.prototype.isReactComponent){if(p=new a(o.props,l,c),"function"==typeof a.getDerivedStateFromProps){var f=a.getDerivedStateFromProps.call(null,o.props,p.state);null!=f&&(p.state=r({},p.state,f))}}else if(T={},p=a(o.props,l,c),null==(p=B(a,o.props,p,l))||null==p.render)return void he(e=p,a);if(p.props=o.props,p.context=l,p.updater=c,void 0===(c=p.state)&&(p.state=c=null),"function"==typeof p.UNSAFE_componentWillMount||"function"==typeof p.componentWillMount)if("function"==typeof p.componentWillMount&&"function"!=typeof a.getDerivedStateFromProps&&p.componentWillMount(),"function"==typeof p.UNSAFE_componentWillMount&&"function"!=typeof a.getDerivedStateFromProps&&p.UNSAFE_componentWillMount(),u.length){c=u;var d=s;if(u=null,s=!1,d&&1===c.length)p.state=c[0];else{f=d?c[0]:p.state;var h=!0;for(d=d?1:0;d<c.length;d++){var y=c[d];null!=(y="function"==typeof y?y.call(p,f,o.props,l):y)&&(h?(h=!1,f=r({},f,y)):r(f,y))}p.state=f}}else u=null;if(he(e=p.render(),a),o=void 0,"function"==typeof p.getChildContext&&"object"==typeof(l=a.childContextTypes))for(var m in o=p.getChildContext())m in l||i("108",g(a)||"Unknown",m);o&&(t=r({},t,o))}for(;o.isValidElement(e);){var l=e,u=l.type;if("function"!=typeof u)break;a(l,u)}return{child:e,context:t}}var me=function(){function e(t,n){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");o.isValidElement(t)?t.type!==u?t=[t]:(t=t.props.children,t=o.isValidElement(t)?[t]:ae(t)):t=ae(t),t={type:null,domNamespace:Y.html,children:t,childIndex:0,context:x,footer:""};var r=S[0];if(0===r){var a=S,l=2*(r=a.length);65536>=l||i("304");var s=new Uint16Array(l);for(s.set(a),(S=s)[0]=r+1,a=r;a<l-1;a++)S[a]=a+1;S[l-1]=0}else S[0]=S[r];this.threadID=r,this.stack=[t],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=n,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[]}return e.prototype.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;S[e]=S[0],S[0]=e}},e.prototype.pushProvider=function(e){var t=++this.contextIndex,n=e.type._context,r=this.threadID;b(n,r);var o=n[r];this.contextStack[t]=n,this.contextValueStack[t]=o,n[r]=e.props.value},e.prototype.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],n=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=n},e.prototype.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},e.prototype.read=function(e){if(this.exhausted)return null;var t=Q;Q=this.threadID;var n=le.current;le.current=X;try{for(var r=[""],o=!1;r[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var a=this.threadID;S[a]=S[0],S[0]=a;break}var l=this.stack[this.stack.length-1];if(o||l.childIndex>=l.children.length){var u=l.footer;if(""!==u&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===l.type)this.currentSelectValue=null;else if(null!=l.type&&null!=l.type.type&&l.type.type.$$typeof===p)this.popProvider(l.type);else if(l.type===y){this.suspenseDepth--;var s=r.pop();if(o){o=!1;var c=l.fallbackFrame;c||i("303"),this.stack.push(c);continue}r[this.suspenseDepth]+=s}r[this.suspenseDepth]+=u}else{var f=l.children[l.childIndex++],d="";try{d+=this.render(f,l.context,l.domNamespace)}catch(e){throw e}r.length<=this.suspenseDepth&&r.push(""),r[this.suspenseDepth]+=d}}return r[0]}finally{le.current=n,Q=t}},e.prototype.render=function(e,t,n){if("string"==typeof e||"number"==typeof e)return""===(n=""+e)?"":this.makeStaticMarkup?A(n):this.previousWasTextNode?"\x3c!-- --\x3e"+A(n):(this.previousWasTextNode=!0,A(n));if(e=(t=ye(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return"";if(!o.isValidElement(e)){if(null!=e&&null!=e.$$typeof){var a=e.$$typeof;a===l&&i("257"),i("258",a.toString())}return e=ae(e),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}if("string"==typeof(a=e.type))return this.renderDOM(e,t,n);switch(a){case s:case d:case c:case u:return e=ae(e.props.children),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case y:i("294")}if("object"==typeof a&&null!==a)switch(a.$$typeof){case h:T={};var g=a.render(e.props,e.ref);return g=B(a.render,e.props,g,e.ref),g=ae(g),this.stack.push({type:null,domNamespace:n,children:g,childIndex:0,context:t,footer:""}),"";case m:return e=[o.createElement(a.type,r({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case p:return n={type:e,domNamespace:n,children:a=ae(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(n),"";case f:a=e.type,g=e.props;var w=this.threadID;return b(a,w),a=ae(g.children(a[w])),this.stack.push({type:e,domNamespace:n,children:a,childIndex:0,context:t,footer:""}),"";case v:i("295")}i("130",null==a?a:typeof a,"")},e.prototype.renderDOM=function(e,t,n){var a=e.type.toLowerCase();n===Y.html&&K(a),ce.hasOwnProperty(a)||(se.test(a)||i("65",a),ce[a]=!0);var l=e.props;if("input"===a)l=r({type:void 0},l,{defaultChecked:void 0,defaultValue:void 0,value:null!=l.value?l.value:l.defaultValue,checked:null!=l.checked?l.checked:l.defaultChecked});else if("textarea"===a){var u=l.value;if(null==u){u=l.defaultValue;var s=l.children;null!=s&&(null!=u&&i("92"),Array.isArray(s)&&(1>=s.length||i("93"),s=s[0]),u=""+s),null==u&&(u="")}l=r({},l,{value:void 0,children:""+u})}else if("select"===a)this.currentSelectValue=null!=l.value?l.value:l.defaultValue,l=r({},l,{value:void 0});else if("option"===a){s=this.currentSelectValue;var c=function(e){if(null==e)return e;var t="";return o.Children.forEach(e,function(e){null!=e&&(t+=e)}),t}(l.children);if(null!=s){var p=null!=l.value?l.value+"":c;if(u=!1,Array.isArray(s)){for(var f=0;f<s.length;f++)if(""+s[f]===p){u=!0;break}}else u=""+s===p;l=r({selected:void 0,children:void 0},l,{selected:u,children:c})}}for(x in(u=l)&&(te[a]&&(null!=u.children||null!=u.dangerouslySetInnerHTML)&&i("137",a,""),null!=u.dangerouslySetInnerHTML&&(null!=u.children&&i("60"),"object"==typeof u.dangerouslySetInnerHTML&&"__html"in u.dangerouslySetInnerHTML||i("61")),null!=u.style&&"object"!=typeof u.style&&i("62","")),u=l,s=this.makeStaticMarkup,c=1===this.stack.length,p="<"+e.type,u)if(fe.call(u,x)){var d=u[x];if(null!=d){if("style"===x){f=void 0;var h="",y="";for(f in d)if(d.hasOwnProperty(f)){var m=0===f.indexOf("--"),v=d[f];if(null!=v){var g=f;if(pe.hasOwnProperty(g))g=pe[g];else{var w=g.replace(oe,"-$1").toLowerCase().replace(ie,"-ms-");g=pe[g]=w}h+=y+g+":",y=f,h+=m=null==v||"boolean"==typeof v||""===v?"":m||"number"!=typeof v||0===v||ne.hasOwnProperty(y)&&ne[y]?(""+v).trim():v+"px",y=";"}}d=h||null}f=null;e:if(m=a,v=u,-1===m.indexOf("-"))m="string"==typeof v.is;else switch(m){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":m=!1;break e;default:m=!0}m?de.hasOwnProperty(x)||(f=F(f=x)&&null!=d?f+'="'+A(d)+'"':""):(m=x,f=d,d=M.hasOwnProperty(m)?M[m]:null,(v="style"!==m)&&(v=null!==d?0===d.type:2<m.length&&("o"===m[0]||"O"===m[0])&&("n"===m[1]||"N"===m[1])),v||j(m,f,d,!1)?f="":null!==d?(m=d.attributeName,f=3===(d=d.type)||4===d&&!0===f?m+'=""':m+'="'+A(f)+'"'):f=F(m)?m+'="'+A(f)+'"':""),f&&(p+=" "+f)}}s||c&&(p+=' data-reactroot=""');var x=p;u="",ee.hasOwnProperty(a)?x+="/>":(x+=">",u="</"+e.type+">");e:{if(null!=(s=l.dangerouslySetInnerHTML)){if(null!=s.__html){s=s.__html;break e}}else if("string"==typeof(s=l.children)||"number"==typeof s){s=A(s);break e}s=null}return null!=s?(l=[],ue[a]&&"\n"===s.charAt(0)&&(x+="\n"),x+=s):l=ae(l.children),e=e.type,n=null==n||"http://www.w3.org/1999/xhtml"===n?K(e):"http://www.w3.org/2000/svg"===n&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":n,this.stack.push({domNamespace:n,type:a,children:l,childIndex:0,context:t,footer:u}),this.previousWasTextNode=!1,x},e}(),ve={renderToString:function(e){e=new me(e,!1);try{return e.read(1/0)}finally{e.destroy()}},renderToStaticMarkup:function(e){e=new me(e,!0);try{return e.read(1/0)}finally{e.destroy()}},renderToNodeStream:function(){i("207")},renderToStaticNodeStream:function(){i("208")},version:"16.8.3"},ge={default:ve},we=ge&&ve||ge;e.exports=we.default||we},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(l[s]=n[s]);if(r){a=r(n);for(var c=0;c<a.length;c++)i.call(n,a[c])&&(l[a[c]]=n[a[c]])}}return l}},function(e,t,n){e.exports={"card-img-overlay":"card-img-overlay",cardImgOverlay:"card-img-overlay","country-selector":"country-selector",countrySelector:"country-selector"}},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=n(13),l=function(e){function t(t){var n=e.call(this,t)||this;return n.state={stations:[]},n}return o(t,e),t.prototype.componentDidMount=function(){var e=this;google.script.run.withSuccessHandler(function(t){e.setState({stations:t})}).getAllStations()},t.prototype.render=function(){return null==this.props.stations?i.createElement("div",null,"Loading stations..."):i.createElement("div",null,i.createElement("div",null,"There are ",this.props.stations.length," stations"),this.props.stations.map(function(e){return i.createElement("div",null,i.createElement(a.Summary,{station:e}))}))},t}(i.Component);t.Stations=l},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=n(14),l=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}return o(t,e),t.prototype.render=function(){return a.Util.isEmpty(this.props)?i.createElement("div",null,"Loading station..."):i.createElement("div",{className:"station-summary"},this.props.station.name)},t}(i.Component);t.Summary=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.isEmpty=function(e){return[Object,Array].includes((e||{}).constructor)&&!Object.entries(e||{}).length},e.createJSONOutput=function(e){return HtmlService.createHtmlOutput("<pre>"+JSON.stringify(e,null,4)+"</pre>")},e}();t.Util=r}]);
//# sourceMappingURL=index_bundle.js.map