import{n as re}from"./cajas-depto-dc00f426.js";var C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},se={exports:{}},F={exports:{}},K={exports:{}};/*!
  * Bootstrap data.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var z;function ae(){return z||(z=1,function(v,x){(function(s,l){v.exports=l()})(C,function(){const s=new Map;return{set(p,n,t){s.has(p)||s.set(p,new Map);const r=s.get(p);if(!r.has(n)&&r.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(n,t)},get(p,n){return s.has(p)&&s.get(p).get(n)||null},remove(p,n){if(!s.has(p))return;const t=s.get(p);t.delete(n),t.size===0&&s.delete(p)}}})}(K)),K.exports}var U={exports:{}},P={exports:{}};/*!
  * Bootstrap index.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var G;function I(){return G||(G=1,function(v,x){(function(s,l){l(x)})(C,function(s){const n="transitionend",t=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(i,a)=>`#${CSS.escape(a)}`)),e),r=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),g=e=>{do e+=Math.floor(Math.random()*1e6);while(document.getElementById(e));return e},u=e=>{if(!e)return 0;let{transitionDuration:i,transitionDelay:a}=window.getComputedStyle(e);const m=Number.parseFloat(i),b=Number.parseFloat(a);return!m&&!b?0:(i=i.split(",")[0],a=a.split(",")[0],(Number.parseFloat(i)+Number.parseFloat(a))*1e3)},h=e=>{e.dispatchEvent(new Event(n))},E=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),O=e=>E(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(t(e)):null,D=e=>{if(!E(e)||e.getClientRects().length===0)return!1;const i=getComputedStyle(e).getPropertyValue("visibility")==="visible",a=e.closest("details:not([open])");if(!a)return i;if(a!==e){const m=e.closest("summary");if(m&&m.parentNode!==a||m===null)return!1}return i},q=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",w=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const i=e.getRootNode();return i instanceof ShadowRoot?i:null}return e instanceof ShadowRoot?e:e.parentNode?w(e.parentNode):null},S=()=>{},R=e=>{e.offsetHeight},k=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,_=[],M=e=>{document.readyState==="loading"?(_.length||document.addEventListener("DOMContentLoaded",()=>{for(const i of _)i()}),_.push(e)):e()},$=()=>document.documentElement.dir==="rtl",c=e=>{M(()=>{const i=k();if(i){const a=e.NAME,m=i.fn[a];i.fn[a]=e.jQueryInterface,i.fn[a].Constructor=e,i.fn[a].noConflict=()=>(i.fn[a]=m,e.jQueryInterface)}})},o=(e,i=[],a=e)=>typeof e=="function"?e(...i):a,d=(e,i,a=!0)=>{if(!a){o(e);return}const m=5,b=u(i)+m;let y=!1;const A=({target:T})=>{T===i&&(y=!0,i.removeEventListener(n,A),o(e))};i.addEventListener(n,A),setTimeout(()=>{y||h(i)},b)},f=(e,i,a,m)=>{const b=e.length;let y=e.indexOf(i);return y===-1?!a&&m?e[b-1]:e[0]:(y+=a?1:-1,m&&(y=(y+b)%b),e[Math.max(0,Math.min(y,b-1))])};s.defineJQueryPlugin=c,s.execute=o,s.executeAfterTransition=d,s.findShadowRoot=w,s.getElement=O,s.getNextActiveElement=f,s.getTransitionDurationFromElement=u,s.getUID=g,s.getjQuery=k,s.isDisabled=q,s.isElement=E,s.isRTL=$,s.isVisible=D,s.noop=S,s.onDOMContentLoaded=M,s.parseSelector=t,s.reflow=R,s.toType=r,s.triggerTransitionEnd=h,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})})}(P,P.exports)),P.exports}/*!
  * Bootstrap event-handler.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var W;function Q(){return W||(W=1,function(v,x){(function(s,l){v.exports=l(I())})(C,function(s){const l=/[^.]*(?=\..*)\.|.*/,p=/\..*/,n=/::\d+$/,t={};let r=1;const g={mouseenter:"mouseover",mouseleave:"mouseout"},u=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function h(c,o){return o&&`${o}::${r++}`||c.uidEvent||r++}function E(c){const o=h(c);return c.uidEvent=o,t[o]=t[o]||{},t[o]}function O(c,o){return function d(f){return $(f,{delegateTarget:c}),d.oneOff&&M.off(c,f.type,o),o.apply(c,[f])}}function D(c,o,d){return function f(e){const i=c.querySelectorAll(o);for(let{target:a}=e;a&&a!==this;a=a.parentNode)for(const m of i)if(m===a)return $(e,{delegateTarget:a}),f.oneOff&&M.off(c,e.type,o,d),d.apply(a,[e])}}function q(c,o,d=null){return Object.values(c).find(f=>f.callable===o&&f.delegationSelector===d)}function w(c,o,d){const f=typeof o=="string",e=f?d:o||d;let i=_(c);return u.has(i)||(i=c),[f,e,i]}function S(c,o,d,f,e){if(typeof o!="string"||!c)return;let[i,a,m]=w(o,d,f);o in g&&(a=(ne=>function(L){if(!L.relatedTarget||L.relatedTarget!==L.delegateTarget&&!L.delegateTarget.contains(L.relatedTarget))return ne.call(this,L)})(a));const b=E(c),y=b[m]||(b[m]={}),A=q(y,a,i?d:null);if(A){A.oneOff=A.oneOff&&e;return}const T=h(a,o.replace(l,"")),N=i?D(c,d,a):O(c,a);N.delegationSelector=i?d:null,N.callable=a,N.oneOff=e,N.uidEvent=T,y[T]=N,c.addEventListener(m,N,i)}function R(c,o,d,f,e){const i=q(o[d],f,e);i&&(c.removeEventListener(d,i,!!e),delete o[d][i.uidEvent])}function k(c,o,d,f){const e=o[d]||{};for(const[i,a]of Object.entries(e))i.includes(f)&&R(c,o,d,a.callable,a.delegationSelector)}function _(c){return c=c.replace(p,""),g[c]||c}const M={on(c,o,d,f){S(c,o,d,f,!1)},one(c,o,d,f){S(c,o,d,f,!0)},off(c,o,d,f){if(typeof o!="string"||!c)return;const[e,i,a]=w(o,d,f),m=a!==o,b=E(c),y=b[a]||{},A=o.startsWith(".");if(typeof i<"u"){if(!Object.keys(y).length)return;R(c,b,a,i,e?d:null);return}if(A)for(const T of Object.keys(b))k(c,b,T,o.slice(1));for(const[T,N]of Object.entries(y)){const B=T.replace(n,"");(!m||o.includes(B))&&R(c,b,a,N.callable,N.delegationSelector)}},trigger(c,o,d){if(typeof o!="string"||!c)return null;const f=s.getjQuery(),e=_(o),i=o!==e;let a=null,m=!0,b=!0,y=!1;i&&f&&(a=f.Event(o,d),f(c).trigger(a),m=!a.isPropagationStopped(),b=!a.isImmediatePropagationStopped(),y=a.isDefaultPrevented());const A=$(new Event(o,{bubbles:m,cancelable:!0}),d);return y&&A.preventDefault(),b&&c.dispatchEvent(A),A.defaultPrevented&&a&&a.preventDefault(),A}};function $(c,o={}){for(const[d,f]of Object.entries(o))try{c[d]=f}catch{Object.defineProperty(c,d,{configurable:!0,get(){return f}})}return c}return M})}(U)),U.exports}var V={exports:{}},Y={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var J;function oe(){return J||(J=1,function(v,x){(function(s,l){v.exports=l()})(C,function(){function s(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function l(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}return{setDataAttribute(n,t,r){n.setAttribute(`data-bs-${l(t)}`,r)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${l(t)}`)},getDataAttributes(n){if(!n)return{};const t={},r=Object.keys(n.dataset).filter(g=>g.startsWith("bs")&&!g.startsWith("bsConfig"));for(const g of r){let u=g.replace(/^bs/,"");u=u.charAt(0).toLowerCase()+u.slice(1,u.length),t[u]=s(n.dataset[g])}return t},getDataAttribute(n,t){return s(n.getAttribute(`data-bs-${l(t)}`))}}})}(Y)),Y.exports}/*!
  * Bootstrap config.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var X;function ie(){return X||(X=1,function(v,x){(function(s,l){v.exports=l(oe(),I())})(C,function(s,l){class p{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,r){const g=l.isElement(r)?s.getDataAttribute(r,"config"):{};return{...this.constructor.Default,...typeof g=="object"?g:{},...l.isElement(r)?s.getDataAttributes(r):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,r=this.constructor.DefaultType){for(const[g,u]of Object.entries(r)){const h=t[g],E=l.isElement(h)?"element":l.toType(h);if(!new RegExp(u).test(E))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${g}" provided type "${E}" but expected type "${u}".`)}}}return p})}(V)),V.exports}/*!
  * Bootstrap base-component.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Z;function ce(){return Z||(Z=1,function(v,x){(function(s,l){v.exports=l(ae(),Q(),ie(),I())})(C,function(s,l,p,n){const t="5.3.2";class r extends p{constructor(u,h){super(),u=n.getElement(u),u&&(this._element=u,this._config=this._getConfig(h),s.set(this._element,this.constructor.DATA_KEY,this))}dispose(){s.remove(this._element,this.constructor.DATA_KEY),l.off(this._element,this.constructor.EVENT_KEY);for(const u of Object.getOwnPropertyNames(this))this[u]=null}_queueCallback(u,h,E=!0){n.executeAfterTransition(u,h,E)}_getConfig(u){return u=this._mergeConfigObj(u,this._element),u=this._configAfterMerge(u),this._typeCheckConfig(u),u}static getInstance(u){return s.get(n.getElement(u),this.DATA_KEY)}static getOrCreateInstance(u,h={}){return this.getInstance(u)||new this(u,typeof h=="object"?h:null)}static get VERSION(){return t}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(u){return`${u}${this.EVENT_KEY}`}}return r})}(F)),F.exports}var j={exports:{}},H={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ee;function le(){return ee||(ee=1,function(v,x){(function(s,l){v.exports=l(I())})(C,function(s){const l=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let r=n.getAttribute("href");if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),t=r&&r!=="#"?s.parseSelector(r.trim()):null}return t},p={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(r=>r.matches(t))},parents(n,t){const r=[];let g=n.parentNode.closest(t);for(;g;)r.push(g),g=g.parentNode.closest(t);return r},prev(n,t){let r=n.previousElementSibling;for(;r;){if(r.matches(t))return[r];r=r.previousElementSibling}return[]},next(n,t){let r=n.nextElementSibling;for(;r;){if(r.matches(t))return[r];r=r.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(r=>`${r}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(r=>!s.isDisabled(r)&&s.isVisible(r))},getSelectorFromElement(n){const t=l(n);return t&&p.findOne(t)?t:null},getElementFromSelector(n){const t=l(n);return t?p.findOne(t):null},getMultipleElementsFromSelector(n){const t=l(n);return t?p.find(t):[]}};return p})}(H)),H.exports}/*!
  * Bootstrap component-functions.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var te;function ue(){return te||(te=1,function(v,x){(function(s,l){l(x,Q(),le(),I())})(C,function(s,l,p,n){const t=(r,g="hide")=>{const u=`click.dismiss${r.EVENT_KEY}`,h=r.NAME;l.on(document,u,`[data-bs-dismiss="${h}"]`,function(E){if(["A","AREA"].includes(this.tagName)&&E.preventDefault(),n.isDisabled(this))return;const O=p.getElementFromSelector(this)||this.closest(`.${h}`);r.getOrCreateInstance(O)[g]()})};s.enableDismissTrigger=t,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})})}(j,j.exports)),j.exports}/*!
  * Bootstrap alert.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(v,x){(function(s,l){v.exports=l(ce(),Q(),ue(),I())})(C,function(s,l,p,n){const t="alert",g=".bs.alert",u=`close${g}`,h=`closed${g}`,E="fade",O="show";class D extends s{static get NAME(){return t}close(){if(l.trigger(this._element,u).defaultPrevented)return;this._element.classList.remove(O);const S=this._element.classList.contains(E);this._queueCallback(()=>this._destroyElement(),this._element,S)}_destroyElement(){this._element.remove(),l.trigger(this._element,h),this.dispose()}static jQueryInterface(w){return this.each(function(){const S=D.getOrCreateInstance(this);if(typeof w=="string"){if(S[w]===void 0||w.startsWith("_")||w==="constructor")throw new TypeError(`No method named "${w}"`);S[w](this)}})}}return p.enableDismissTrigger(D,"close"),n.defineJQueryPlugin(D),D})})(se);const de=`<!doctype html>\r
<html lang="es">\r
\r
<head>\r
    <meta charset="utf-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1">\r
    <title>Aprende de Guatemala</title>\r
</head>\r
\r
<body class="max-vh-100">\r
    <!-- Barra de navegacion -->\r
    <nav class="navbar navbar-expand-lg bg-primary sticky-top py-3" id="navBar">\r
        <div class="container bg-primary">\r
            <a class="navbar-brand text-white" href="#">LOGO</a>\r
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"\r
                aria-controls="offcanvasNavbar" aria-label="Toggle navigation">\r
                <span class="navbar-toggler-icon"></span>\r
            </button>\r
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"\r
                aria-labelledby="offcanvasNavbarLabel">\r
                <div class="offcanvas-header">\r
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>\r
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>\r
                </div>\r
                <div class="offcanvas-body">\r
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 nav-underline ">\r
                        <li class="nav-item">\r
                            <a class="nav-link active fw-bold" aria-current="page" href="./index.html">Inicio</a>\r
                        </li>\r
                        <li class="nav-item dropdown">\r
                            <a class="nav-link fw-bold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                                Aprender\r
                            </a>\r
                            <ul class="dropdown-menu">\r
                                <li><a class="dropdown-item" href="#Aprender">Aprende y Explora</a></li>\r
                                <li><a class="dropdown-item" href="./depto.html">Aprender los Departamentos</a></li>\r
                                <li><a class="dropdown-item" href="./lugares.html">Explora lugares Turísticos</a></li>\r
                            </ul>\r
                        </li>\r
                        <li class="nav-item">\r
                            <a class="nav-link fw-bold" href="#">Acerca de</a>\r
                        </li>\r
                        <li class="nav-item">\r
                            <a class="nav-link theme" href="#">🌞</a>\r
                        </li>\r
                    </ul>\r
                </div>\r
            </div>\r
        </div>\r
    </nav>\r
    <header class="container-fluid p-0">\r
        <!-- Carrusel de imagenes -->\r
        <div id="carouselExampleAutoplaying" class="carousel slide p-0 dark-carousel" data-bs-ride="carousel">\r
            <div class="carousel-inner position-relative">\r
                <div class="carousel-item active">\r
                    <img src="assets/img/1.svg" class="d-block w-100" alt="...">\r
                </div>\r
                <div class="carousel-item">\r
                    <img src="assets/img/2.svg" class="d-block w-100" alt="...">\r
                </div>\r
                <div class="carousel-item">\r
                    <img src="assets/img/3.svg" class="d-block w-100" alt="...">\r
                </div>\r
                <div class="position-absolute w-75">\r
                    <h1 class="text-white text-center text-uppercase m-0">¡Descubre la riqueza y diversidad de los\r
                        departamentos de Guatemala con nosotros!</h1>\r
                    <div class="d-flex pb-5">\r
                        <hr class="border border-primary border-3 opacity-75 w-50">\r
                        <hr class="border border-light border-3 opacity-75 w-50">\r
                        <hr class="border border-primary border-3 opacity-75 w-50">\r
                    </div>\r
                </div>\r
            </div>\r
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"\r
                data-bs-slide="prev">\r
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>\r
                <span class="visually-hidden">Previous</span>\r
            </button>\r
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"\r
                data-bs-slide="next">\r
                <span class="carousel-control-next-icon" aria-hidden="true"></span>\r
                <span class="visually-hidden">Next</span>\r
            </button>\r
        </div>\r
    </header>\r
    <!-- Articulo de Explora y Aprende -->\r
    <article class="container py-5 text-center" id="Aprender">\r
        <h2 class="text-primary fs-1">Explora y Aprende</h2>\r
        <div class="row mt-5">\r
            <section class="col-6 d-flex flex-column align-items-center">\r
                <h2 class="text-success w-75">Aprende los Departamentos de Guatemala</h2>\r
                <div class="col-10">\r
                    <div class="card h-100">\r
                        <a href="./depto.html">\r
                            <section class="card-imagenes">\r
                                <img src="assets/img/5.svg" class="card-img-top" alt="mapa de Guatemala">\r
                                <img src="assets/img/4.svg" class="img-fluid" alt="">\r
                            </section>\r
                        </a>\r
                        <div class="card-body">\r
                            <p class="card-text fw-medium">¡Una forma divertida y educativa de aprender sobre la\r
                                geografía de este\r
                                hermoso país!.</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
            <section class="col-6 d-flex flex-column align-items-center">\r
                <h2 class="w-75 text-success">Explorar Lugares Emblemáticos de Guatemala</h2>\r
                <div class="col-10">\r
                    <div class="card h-100">\r
                    <a href="./lugares.html">\r
                        <section class="card-imagenes">\r
                            <img src="assets/img/Collage.svg" class="card-img-top" alt="mapa de Guatemala">\r
                            <img src="assets/img/4.svg" class="img-fluid" alt="">\r
                        </section>\r
                    </a>\r
                        <div class="card-body">\r
                            <p class="card-text fw-medium">¡Aventúrate en un viaje por los rincones más emblemáticos del país de la eterna primavera!</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
        </div>\r
    </article>\r
    <script type="module" src="./js/index.js"><\/script>\r
</body>\r
\r
</html>`,fe=v=>{(()=>{const x=document.querySelector(v);x.innerHTML=de})(),re()};fe("body");
