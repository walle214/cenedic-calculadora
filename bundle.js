!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),n(1);var c=document.getElementById("display-result"),o=document.getElementById("display-text"),d=document.getElementById("display-delete");document.getElementById("result-clear").addEventListener("click",(function(){o.textContent="",c.textContent=""})),d.addEventListener("click",(function(){o.textContent=o.textContent.slice(0,-1)}));var r=function(e){o.textContent+=e,o.scrollLeft=o.scrollWidth},i=document.getElementById("operation-divide"),u=document.getElementById("operation-multiply"),l=document.getElementById("operation-substract"),m=document.getElementById("number-dot"),a=document.getElementById("operation-add"),f=document.getElementById("operation-equals");i.addEventListener("click",(function(){r("/")})),u.addEventListener("click",(function(){r("*")})),l.addEventListener("click",(function(){r("-")})),m.addEventListener("click",(function(){r(".")})),a.addEventListener("click",(function(){r("+")})),f.addEventListener("click",(function(){}));var s=document.getElementById("number-9"),y=document.getElementById("number-8"),E=document.getElementById("number-7"),g=document.getElementById("number-6"),v=document.getElementById("number-5"),b=document.getElementById("number-4"),I=document.getElementById("number-3"),p=document.getElementById("number-2"),B=document.getElementById("number-1"),L=document.getElementById("number-0");s.addEventListener("click",(function(){console.log("9"),r("9")})),y.addEventListener("click",(function(){r("8")})),E.addEventListener("click",(function(){r("7")})),g.addEventListener("click",(function(){r("6")})),v.addEventListener("click",(function(){r("5")})),b.addEventListener("click",(function(){r("4")})),I.addEventListener("click",(function(){r("3")})),p.addEventListener("click",(function(){r("2")})),B.addEventListener("click",(function(){r("1")})),L.addEventListener("click",(function(){r("0")}));var k=document.getElementById("memory-read"),x=document.getElementById("memory-add"),S=document.getElementById("memory-delete");k.addEventListener("click",(function(){r(Number(localStorage.getItem("memory")||""))})),x.addEventListener("click",(function(){localStorage.setItem("memory",c.textContent)})),S.addEventListener("click",(function(){localStorage.setItem("memory","")}))}]);