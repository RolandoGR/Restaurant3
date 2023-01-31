(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),s=t.n(a)()(r());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap);"]),s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Roboto:wght@300&display=swap);"]),s.push([e.id,'body {\n  background-color: rgb(255, 255, 255);\n}\n\np {\n  font-family: "Montserrat", Haettenschweiler, "Arial Narrow Bold", sans-serif;\n}\n\nh1 {\n  text-align: center;\n  font-family: "Montserrat", Haettenschweiler, "Arial Narrow Bold", sans-serif;\n}\n\n.headerImg {\n  display: flex;\n  height: 500px;\n  width: auto;\n}\n\n.navBar {\n  display: flex;\n  justify-content: right;\n  padding: 0px 15px;\n  height: 5vh;\n  border-style: solid;\n  border-color: black;\n}\n\na {\n  display: flex;\n  padding: 0px 15px;\n}\n\na:link {\n  color: rgb(0, 92, 0);\n  font-family: "Montserrat", Impact, Haettenschweiler, "Arial Narrow Bold",\n    sans-serif;\n  text-decoration: none;\n}\n\na:visited {\n  color: rgb(0, 92, 0);\n  text-decoration: none;\n}\n\na:hover {\n  color: rgb(2, 138, 138);\n}\n\n.btn {\n  flex-direction: column;\n  font-family: "Montserrat", Impact, Haettenschweiler, "Arial Narrow Bold",\n    sans-serif;\n  font-weight: 600;\n  background-color: wheat;\n  align-self: center;\n  border-style: solid;\n  border-width: thin;\n  margin: 0px 5px;\n}\n',""]);const c=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},s=[],c=0;c<e.length;c++){var i=e[c],l=o.base?i[0]+o.base:i[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var c=t(a[s]);n[c].references--}for(var i=o(e,r),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=i}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{function e(){const e=document.getElementById("content");e.replaceChildren();const n=document.createElement("h1");n.textContent+="Earth Balance",e.appendChild(n);const t=document.createElement("p");t.textContent+="Salud a la mesa",e.appendChild(t);const o=document.createElement("img");o.setAttribute("src","../src/img/pexels-photo-2377164.jpeg"),o.classList.add("headerImg"),e.appendChild(o)}var n=t(379),o=t.n(n),r=t(795),a=t.n(r),s=t(569),c=t.n(s),i=t(565),l=t.n(i),d=t(216),u=t.n(d),p=t(589),m=t.n(p),f=t(426),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),o()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const v=document.createElement("div");let g=[e,function(){const e=document.getElementById("content");e.replaceChildren();const n=document.createElement("h1");n.textContent+="About Us",e.appendChild(n);const t=document.createElement("p");t.textContent+="¡Ven y disfruta de una experiencia culinaria única en nuestro\n    restaurante vegano moderno al norte de Hermosillo! Ofrecemos una amplia\n    variedad de platos deliciosos y saludables, todos hechos con\n    ingredientes frescos y orgánicos. Nuestra cocina se basa en la\n    creatividad y el sabor, y estamos seguros de que encontrarás algo que te\n    encantará. Nuestro ambiente es acogedor y moderno, con una decoración\n    elegante y un servicio amable. Además, nuestra carta cambia regularmente\n    para aprovechar los ingredientes de temporada y ofrecer siempre algo\n    nuevo y emocionante. No importa si eres vegano o simplemente estás\n    buscando opciones saludables, nuestro restaurante es el lugar perfecto\n    para disfrutar de una comida deliciosa y sostenible. ¡Te esperamos!",e.appendChild(t)},function(){const e=document.getElementById("content");e.replaceChildren();const n=document.createElement("h1");n.textContent+="Menu",e.appendChild(n);const t=document.createElement("p");t.textContent+="Salud a la mesa",e.appendChild(t)},function(){const e=document.getElementById("content");e.replaceChildren();const n=document.createElement("h1");n.textContent+="Locations",e.appendChild(n);const t=document.createElement("p");t.textContent+="Salud a la mesa",e.appendChild(t)}];["Home","About Us","Menu","Locations"].forEach((e=>{const n=document.createElement("button");n.textContent=e,n.classList.add("btn"),n.addEventListener("click",g.shift()),v.appendChild(n)})),v.classList.add("navBar"),document.body.prepend(v),e()})()})();