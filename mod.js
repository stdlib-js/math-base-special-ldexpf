// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o,e="function"==typeof Symbol?Symbol:void 0,a="function"==typeof e?e.toStringTag:"";o=r&&"symbol"==typeof Symbol.toStringTag?function(r){var o,e,f,u,i;if(null==r)return t.call(r);e=r[a],i=a,o=null!=(u=r)&&n.call(u,i);try{r[a]=void 0}catch(n){return t.call(r)}return f=t.call(r),o?r[a]=e:delete r[a],f}:function(r){return t.call(r)};var f=o,u="function"==typeof Float32Array;var i=Number.POSITIVE_INFINITY,y="function"==typeof Float32Array?Float32Array:null;var c="function"==typeof Float32Array?Float32Array:void 0;var l=function(){var r,t,n;if("function"!=typeof y)return!1;try{t=new y([1,3.14,-3.14,5e40]),n=t,r=(u&&n instanceof Float32Array||"[object Float32Array]"===f(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===i}catch(t){r=!1}return r}()?c:function(){throw new Error("not implemented")},v="function"==typeof Uint32Array;var p="function"==typeof Uint32Array?Uint32Array:null;var b="function"==typeof Uint32Array?Uint32Array:void 0;var w=function(){var r,t,n;if("function"!=typeof p)return!1;try{t=new p(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(v&&n instanceof Uint32Array||"[object Uint32Array]"===f(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?b:function(){throw new Error("not implemented")},A=new l(1);new w(A.buffer)[0]=2139095040;var m=A[0],d=2147483648,S=2147483647,h="function"==typeof Math.fround?Math.fround:null,F=new l(1);var U="function"==typeof h?h:function(r){return F[0]=r,F[0]},s=new l(1),g=new w(s.buffer);function I(r){return s[0]=r,g[0]}var j=new w(1),O=new l(j.buffer);function T(r){return j[0]=r,O[0]}function E(r,t){var n,o;return r=U(r),t=U(t),n=I(r),n&=S,o=I(t),T(n|=o&=d)}var N=2139095040,M=2155872255;function P(r,t){var n,o;if(0===(o=((n=I(r=U(r)))&N)>>23)){if(0==(n&S))return r;if(o=(((n=I(r=U(33554432*r)))&N)>>23)-25,t<-5e4)return 0}return 255===o?U(r+r):(o=o+t|0)>254?E(m,r):o>0?r=T(n&M|o<<23):o<=-25?E(t>5e4?m:0,r):(r=T(n&M|(o+=25)<<23),U(2.9802322387695312e-8*r))}export{P as default};
//# sourceMappingURL=mod.js.map
