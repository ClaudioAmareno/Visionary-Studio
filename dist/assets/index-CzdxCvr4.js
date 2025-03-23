(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const m of r)if(m.type==="childList")for(const w of m.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&d(w)}).observe(document,{childList:!0,subtree:!0});function a(r){const m={};return r.integrity&&(m.integrity=r.integrity),r.referrerPolicy&&(m.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?m.credentials="include":r.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(r){if(r.ep)return;r.ep=!0;const m=a(r);fetch(r.href,m)}})();/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var E=Object.assign||function(s){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(s[d]=a[d])}return s},T=function(t){return t.tagName==="IMG"},we=function(t){return NodeList.prototype.isPrototypeOf(t)},I=function(t){return t&&t.nodeType===1},G=function(t){var a=t.currentSrc||t.src;return a.substr(-4).toLowerCase()===".svg"},Q=function(t){try{return Array.isArray(t)?t.filter(T):we(t)?[].slice.call(t).filter(T):I(t)?[t].filter(T):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(T):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Ee=function(t){var a=document.createElement("div");return a.classList.add("medium-zoom-overlay"),a.style.background=t,a},Le=function(t){var a=t.getBoundingClientRect(),d=a.top,r=a.left,m=a.width,w=a.height,y=t.cloneNode(),P=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,O=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return y.removeAttribute("id"),y.style.position="absolute",y.style.top=d+P+"px",y.style.left=r+O+"px",y.style.width=m+"px",y.style.height=w+"px",y.style.transform="",y},C=function(t,a){var d=E({bubbles:!1,cancelable:!1,detail:void 0},a);if(typeof window.CustomEvent=="function")return new CustomEvent(t,d);var r=document.createEvent("CustomEvent");return r.initCustomEvent(t,d.bubbles,d.cancelable,d.detail),r},Se=function s(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=window.Promise||function(o){function n(){}o(n,n)},r=function(o){var n=o.target;if(n===k){z();return}v.indexOf(n)!==-1&&_({target:n})},m=function(){if(!(L||!e.original)){var o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(K-o)>c.scrollOffset&&setTimeout(z,150)}},w=function(o){var n=o.key||o.keyCode;(n==="Escape"||n==="Esc"||n===27)&&z()},y=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=o;if(o.background&&(k.style.background=o.background),o.container&&o.container instanceof Object&&(n.container=E({},c.container,o.container)),o.template){var l=I(o.template)?o.template:document.querySelector(o.template);n.template=l}return c=E({},c,n),v.forEach(function(u){u.dispatchEvent(C("medium-zoom:update",{detail:{zoom:f}}))}),f},P=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return s(E({},c,o))},O=function(){for(var o=arguments.length,n=Array(o),l=0;l<o;l++)n[l]=arguments[l];var u=n.reduce(function(i,p){return[].concat(i,Q(p))},[]);return u.filter(function(i){return v.indexOf(i)===-1}).forEach(function(i){v.push(i),i.classList.add("medium-zoom-image")}),A.forEach(function(i){var p=i.type,h=i.listener,S=i.options;u.forEach(function(b){b.addEventListener(p,h,S)})}),f},re=function(){for(var o=arguments.length,n=Array(o),l=0;l<o;l++)n[l]=arguments[l];e.zoomed&&z();var u=n.length>0?n.reduce(function(i,p){return[].concat(i,Q(p))},[]):v;return u.forEach(function(i){i.classList.remove("medium-zoom-image"),i.dispatchEvent(C("medium-zoom:detach",{detail:{zoom:f}}))}),v=v.filter(function(i){return u.indexOf(i)===-1}),f},ie=function(o,n){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return v.forEach(function(u){u.addEventListener("medium-zoom:"+o,n,l)}),A.push({type:"medium-zoom:"+o,listener:n,options:l}),f},ae=function(o,n){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return v.forEach(function(u){u.removeEventListener("medium-zoom:"+o,n,l)}),A=A.filter(function(u){return!(u.type==="medium-zoom:"+o&&u.listener.toString()===n.toString())}),f},U=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=o.target,l=function(){var i={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},p=void 0,h=void 0;if(c.container)if(c.container instanceof Object)i=E({},i,c.container),p=i.width-i.left-i.right-c.margin*2,h=i.height-i.top-i.bottom-c.margin*2;else{var S=I(c.container)?c.container:document.querySelector(c.container),b=S.getBoundingClientRect(),B=b.width,le=b.height,me=b.left,ue=b.top;i=E({},i,{width:B,height:le,left:me,top:ue})}p=p||i.width-c.margin*2,h=h||i.height-c.margin*2;var H=e.zoomedHd||e.original,fe=G(H)?p:H.naturalWidth||p,ge=G(H)?h:H.naturalHeight||h,N=H.getBoundingClientRect(),pe=N.top,ve=N.left,M=N.width,Y=N.height,he=Math.min(Math.max(M,fe),p)/M,ye=Math.min(Math.max(Y,ge),h)/Y,F=Math.min(he,ye),ze=(-ve+(p-M)/2+c.margin+i.left)/F,be=(-pe+(h-Y)/2+c.margin+i.top)/F,X="scale("+F+") translate3d("+ze+"px, "+be+"px, 0)";e.zoomed.style.transform=X,e.zoomedHd&&(e.zoomedHd.style.transform=X)};return new d(function(u){if(n&&v.indexOf(n)===-1){u(f);return}var i=function B(){L=!1,e.zoomed.removeEventListener("transitionend",B),e.original.dispatchEvent(C("medium-zoom:opened",{detail:{zoom:f}})),u(f)};if(e.zoomed){u(f);return}if(n)e.original=n;else if(v.length>0){var p=v;e.original=p[0]}else{u(f);return}if(e.original.dispatchEvent(C("medium-zoom:open",{detail:{zoom:f}})),K=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,L=!0,e.zoomed=Le(e.original),document.body.appendChild(k),c.template){var h=I(c.template)?c.template:document.querySelector(c.template);e.template=document.createElement("div"),e.template.appendChild(h.content.cloneNode(!0)),document.body.appendChild(e.template)}if(e.original.parentElement&&e.original.parentElement.tagName==="PICTURE"&&e.original.currentSrc&&(e.zoomed.src=e.original.currentSrc),document.body.appendChild(e.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),e.original.classList.add("medium-zoom-image--hidden"),e.zoomed.classList.add("medium-zoom-image--opened"),e.zoomed.addEventListener("click",z),e.zoomed.addEventListener("transitionend",i),e.original.getAttribute("data-zoom-src")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("srcset"),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading"),e.zoomedHd.src=e.zoomed.getAttribute("data-zoom-src"),e.zoomedHd.onerror=function(){clearInterval(S),console.warn("Unable to reach the zoom image target "+e.zoomedHd.src),e.zoomedHd=null,l()};var S=setInterval(function(){e.zoomedHd.complete&&(clearInterval(S),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),l())},10)}else if(e.original.hasAttribute("srcset")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading");var b=e.zoomedHd.addEventListener("load",function(){e.zoomedHd.removeEventListener("load",b),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),l()})}else l()})},z=function(){return new d(function(o){if(L||!e.original){o(f);return}var n=function l(){e.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(e.zoomed),e.zoomedHd&&document.body.removeChild(e.zoomedHd),document.body.removeChild(k),e.zoomed.classList.remove("medium-zoom-image--opened"),e.template&&document.body.removeChild(e.template),L=!1,e.zoomed.removeEventListener("transitionend",l),e.original.dispatchEvent(C("medium-zoom:closed",{detail:{zoom:f}})),e.original=null,e.zoomed=null,e.zoomedHd=null,e.template=null,o(f)};L=!0,document.body.classList.remove("medium-zoom--opened"),e.zoomed.style.transform="",e.zoomedHd&&(e.zoomedHd.style.transform=""),e.template&&(e.template.style.transition="opacity 150ms",e.template.style.opacity=0),e.original.dispatchEvent(C("medium-zoom:close",{detail:{zoom:f}})),e.zoomed.addEventListener("transitionend",n)})},_=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=o.target;return e.original?z():U({target:n})},se=function(){return c},de=function(){return v},ce=function(){return e.original},v=[],A=[],L=!1,K=0,c=a,e={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?c=t:(t||typeof t=="string")&&O(t),c=E({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},c);var k=Ee(c.background);document.addEventListener("click",r),document.addEventListener("keyup",w),document.addEventListener("scroll",m),window.addEventListener("resize",z);var f={open:U,close:z,toggle:_,update:y,clone:P,attach:O,detach:re,on:ie,off:ae,getOptions:se,getImages:de,getZoomedImage:ce};return f};function Ce(s,t){t===void 0&&(t={});var a=t.insertAt;if(!(typeof document>"u")){var d=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",a==="top"&&d.firstChild?d.insertBefore(r,d.firstChild):d.appendChild(r),r.styleSheet?r.styleSheet.cssText=s:r.appendChild(document.createTextNode(s))}}var qe=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";Ce(qe);const xe=document.querySelector(".year"),W=document.querySelector(".nav");document.querySelectorAll(".nav-link");const te=document.querySelectorAll(".section"),He=document.querySelectorAll(".desktop-link"),Oe=document.querySelector(".burger"),Ae=document.querySelector(".first"),ke=document.querySelector(".second"),Ne=document.querySelector(".third"),Te=document.querySelector(".nav-screen"),R=document.querySelector("body"),Ie=document.querySelectorAll(".toggleBtn"),J=document.querySelector(".newsletter-input"),je=document.querySelector(".newsletter-button"),q=document.querySelector(".newsletter-error"),x=document.querySelector(".newsletter-accuracy"),j=document.querySelector(".mail-input"),Z=document.querySelector(".mail-error"),$=document.querySelector(".name-input"),V=document.querySelector(".name-error"),D=document.querySelector(".question-input"),ee=document.querySelector(".question-error"),Pe=document.querySelector(".form-button"),oe=document.querySelector(".popup"),Be=document.querySelector(".popup-btn"),Me=()=>{let s=window.scrollY;He.forEach(t=>{t.classList.add("after:scale-x-0","after:scale-y-0")});for(let t of te){let a=t.offsetTop-250,d=t.offsetHeight,r=t.getAttribute("id");if(s>=a&&s<a+d){let m=document.querySelector(`.desktop-link[href*="${r}"]`);m&&m.classList.remove("after:scale-x-0","after:scale-y-0");return}}},Ye=()=>{let s=W.offsetHeight,t=!1;te.forEach(a=>{const d=a.getBoundingClientRect();d.top<=s&&d.bottom>=0&&a.classList.contains("bg-gray")&&(t=!0)}),W.style.backgroundColor=t?"hsl(0, 0%, 18%)":"hsl(0, 0%, 27%)"};window.addEventListener("scroll",Ye);const ne=()=>{Te.classList.toggle("custom-active"),R.classList.toggle("stop-scrolling"),Ae.classList.toggle("rotate-bar-first"),ke.classList.toggle("rotate-bar-second"),Ne.classList.toggle("rotate-bar-third")},Fe=()=>{const s=new Date().getFullYear();xe.innerText=s},Ze=s=>{const t=document.querySelectorAll(`.${s}Images img.hidden`),a=document.querySelector(`.toggleBtn[data-section="${s}"]`),d=a.querySelector(".ti-arrow-down"),r=a.querySelector(".text-btn");t.forEach(m=>{m.classList.toggle("show")}),d.classList.toggle("rotate-180"),r.textContent=r.textContent==="Zobacz więcej"?"Zobacz mniej":"Zobacz więcej"},We=()=>{J.value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)?(q.textContent="",x.classList.add("show"),q.classList.remove("show"),x.textContent="Dziękujemy za zapis do naszego newslettera!"):J.value==""?(q.classList.add("show"),x.classList.remove("show"),x.textContent="",q.textContent="Musisz podać swój adres email!"):(q.classList.add("show"),x.classList.remove("show"),x.textContent="",q.textContent="Wpisz poprawny adres email!")},Re=()=>{j.value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)?Z.textContent="":j.value==""?Z.textContent="*Musisz podać swój adres email!":Z.textContent="*Wpisz poprawny adres email!"},$e=()=>{$.value==0?V.textContent="*Podaj swoje imię i nazwisko":V.textContent=""},De=()=>{D.value==0?ee.textContent="*Najpierw musisz zdać pytanie, aby otrzymać odpowiedź :)":ee.textContent=""},Ue=()=>{D.value!==""&&$.value!==""&&j.value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)&&(oe.classList.add("show-popup"),R.classList.add("stop-scrolling"))},_e=()=>{oe.classList.remove("show-popup"),R.classList.remove("stop-scrolling"),D.value="",$.value="",j.value=""};Se(".zoom",{margin:50});Ie.forEach(s=>{s.addEventListener("click",()=>{const t=s.getAttribute("data-section");Ze(t)})});Fe();window.addEventListener("scroll",Me);Oe.addEventListener("click",ne);W.addEventListener("click",s=>{s.target.classList.contains("nav-link")&&ne()});je.addEventListener("click",We);Pe.addEventListener("click",()=>{Re(),$e(),De(),Ue()});Be.addEventListener("click",_e);
