"use strict";var q=function(r,f){return function(){return f||r((f={exports:{}}).exports,f),f.exports}};var s=q(function(p,x){
var n=require('@stdlib/constants-float32-pinf/dist'),u=require('@stdlib/math-base-special-copysignf/dist'),o=require('@stdlib/number-float32-base-to-word/dist'),v=require('@stdlib/number-float32-base-from-word/dist'),t=require('@stdlib/number-float64-base-to-float32/dist'),W=33554432,d=29802322387695312e-24;function l(r,f){var i,e;if(r=t(r),i=o(r),e=(i&2139095040)>>23,e===0){if(!(i&2147483647))return r;if(r=t(r*W),i=o(r),e=((i&2139095040)>>23)-25,f<-5e4)return 0}return e===255?t(r+r):(e+=f,e>254?u(n,r):e>0?(r=v(i&2155872255|e<<23),r):e<=-25?f>5e4?u(n,r):u(0,r):(e+=25,r=v(i&2155872255|e<<23),t(r*d)))}x.exports=l
});var T=s();module.exports=T;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
