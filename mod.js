// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,l=n.__defineSetter__,u=n.__lookupGetter__,i=n.__lookupSetter__;var c=t,_=function(e,r,t){var c,_,p,f;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(u.call(e,r)||i.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),p="get"in t,f="set"in t,_&&(p||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,r,t.get),f&&l&&l.call(e,r,t.set),e},p=r()?c:_;var f=["throw","clamp","wrap"];var b=function(){return f.slice()};(function(e,r,t){p(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})})(b,"enum",(function(){return{throw:1,clamp:2,wrap:3}}));var v=b(),y=v.length;var d=function(e){var r;for(r=0;r<y;r++)if(e===v[r])return!0;return!1};export{d as default};
//# sourceMappingURL=mod.js.map
