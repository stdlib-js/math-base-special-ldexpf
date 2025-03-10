"use strict";var S=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var N=S(function(E,I){
var o=require('@stdlib/constants-float32-pinf/dist'),n=require('@stdlib/math-base-special-copysignf/dist'),A=require('@stdlib/number-float32-base-to-word/dist'),_=require('@stdlib/number-float32-base-from-word/dist'),t=require('@stdlib/number-float64-base-to-float32/dist'),q=require('@stdlib/constants-float32-exponent-mask/dist'),v=require('@stdlib/constants-float32-precision/dist'),s=require('@stdlib/constants-float32-abs-mask/dist'),F=33554432,L=29802322387695312e-24,O=2155872255,T=255;function f(r,i){var u,e;if(r=t(r),u=A(r),e=(u&q)>>v-1,e===0){if((u&s)===0)return r;if(r=t(r*F),u=A(r),e=((u&q)>>v-1)-25,i<-5e4)return 0}return e===T?t(r+r):(e=e+i|0,e>T-1?n(o,r):e>0?(r=_(u&O|e<<v-1),r):e<=-25?i>5e4?n(o,r):n(0,r):(e+=25,r=_(u&O|e<<v-1),t(r*L)))}I.exports=f
});var W=N();module.exports=W;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
