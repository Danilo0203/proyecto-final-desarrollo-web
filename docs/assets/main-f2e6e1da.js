import{r as $,a as ct,b as X,c as G,d as dt,e as ut,f as ht,n as _t}from"./nav-opacity-753324be.js";var pt={exports:{}},O={exports:{}};/*!
  * Bootstrap swipe.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var M;function mt(){return M||(M=1,function(v,y){(function(a,r){v.exports=r($(),ct(),X())})(G,function(a,r,E){const l="swipe",i=".bs.swipe",g=`touchstart${i}`,I=`touchmove${i}`,S=`touchend${i}`,o=`pointerdown${i}`,b=`pointerup${i}`,C="touch",N="pen",w="pointer-event",_=40,d={endCallback:null,leftCallback:null,rightCallback:null},u={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class h extends r{constructor(e,m){super(),this._element=e,!(!e||!h.isSupported())&&(this._config=this._getConfig(m),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return d}static get DefaultType(){return u}static get NAME(){return l}dispose(){a.off(this._element,i)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),E.execute(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=_)return;const m=e/this._deltaX;this._deltaX=0,m&&E.execute(m>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(a.on(this._element,o,e=>this._start(e)),a.on(this._element,b,e=>this._end(e)),this._element.classList.add(w)):(a.on(this._element,g,e=>this._start(e)),a.on(this._element,I,e=>this._move(e)),a.on(this._element,S,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===N||e.pointerType===C)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}return h})}(O)),O.exports}/*!
  * Bootstrap carousel.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(v,y){(function(a,r){v.exports=r(dt(),$(),ut(),ht(),X(),mt())})(G,function(a,r,E,l,i,g){const I="carousel",o=".bs.carousel",b=".data-api",C="ArrowLeft",N="ArrowRight",w=500,_="next",d="prev",u="left",h="right",q=`slide${o}`,e=`slid${o}`,m=`keydown${o}`,U=`mouseenter${o}`,Y=`mouseleave${o}`,K=`dragstart${o}`,B=`load${o}${b}`,W=`click${o}${b}`,D="carousel",T="active",F="slide",H="carousel-item-end",Q="carousel-item-start",z="carousel-item-next",J="carousel-item-prev",R=".active",k=".carousel-item",Z=R+k,j=".carousel-item img",tt=".carousel-indicators",et="[data-bs-slide], [data-bs-slide-to]",st='[data-bs-ride="carousel"]',nt={[C]:h,[N]:u},rt={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},it={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class f extends a{constructor(t,s){super(t,s),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=l.findOne(tt,this._element),this._addEventListeners(),this._config.ride===D&&this.cycle()}static get Default(){return rt}static get DefaultType(){return it}static get NAME(){return I}next(){this._slide(_)}nextWhenVisible(){!document.hidden&&i.isVisible(this._element)&&this.next()}prev(){this._slide(d)}pause(){this._isSliding&&i.triggerTransitionEnd(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){r.one(this._element,e,()=>this.cycle());return}this.cycle()}}to(t){const s=this._getItems();if(t>s.length-1||t<0)return;if(this._isSliding){r.one(this._element,e,()=>this.to(t));return}const n=this._getItemIndex(this._getActive());if(n===t)return;const p=t>n?_:d;this._slide(p,s[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&r.on(this._element,m,t=>this._keydown(t)),this._config.pause==="hover"&&(r.on(this._element,U,()=>this.pause()),r.on(this._element,Y,()=>this._maybeEnableCycle())),this._config.touch&&g.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of l.find(j,this._element))r.on(n,K,p=>p.preventDefault());const s={leftCallback:()=>this._slide(this._directionToOrder(u)),rightCallback:()=>this._slide(this._directionToOrder(h)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),w+this._config.interval))}};this._swipeHelper=new g(this._element,s)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const s=nt[t.key];s&&(t.preventDefault(),this._slide(this._directionToOrder(s)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const s=l.findOne(R,this._indicatorsElement);s.classList.remove(T),s.removeAttribute("aria-current");const n=l.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);n&&(n.classList.add(T),n.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const s=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=s||this._config.defaultInterval}_slide(t,s=null){if(this._isSliding)return;const n=this._getActive(),p=t===_,c=s||i.getNextActiveElement(this._getItems(),n,p,this._config.wrap);if(c===n)return;const P=this._getItemIndex(c),V=ot=>r.trigger(this._element,ot,{relatedTarget:c,direction:this._orderToDirection(t),from:this._getItemIndex(n),to:P});if(V(q).defaultPrevented||!n||!c)return;const at=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(P),this._activeElement=c;const A=p?Q:H,L=p?z:J;c.classList.add(L),i.reflow(c),n.classList.add(A),c.classList.add(A);const lt=()=>{c.classList.remove(A,L),c.classList.add(T),n.classList.remove(T,L,A),this._isSliding=!1,V(e)};this._queueCallback(lt,n,this._isAnimated()),at&&this.cycle()}_isAnimated(){return this._element.classList.contains(F)}_getActive(){return l.findOne(Z,this._element)}_getItems(){return l.find(k,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return i.isRTL()?t===u?d:_:t===u?_:d}_orderToDirection(t){return i.isRTL()?t===d?u:h:t===d?h:u}static jQueryInterface(t){return this.each(function(){const s=f.getOrCreateInstance(this,t);if(typeof t=="number"){s.to(t);return}if(typeof t=="string"){if(s[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);s[t]()}})}}return r.on(document,W,et,function(x){const t=l.getElementFromSelector(this);if(!t||!t.classList.contains(D))return;x.preventDefault();const s=f.getOrCreateInstance(t),n=this.getAttribute("data-bs-slide-to");if(n){s.to(n),s._maybeEnableCycle();return}if(E.getDataAttribute(this,"slide")==="next"){s.next(),s._maybeEnableCycle();return}s.prev(),s._maybeEnableCycle()}),r.on(window,B,()=>{const x=l.find(st);for(const t of x)f.getOrCreateInstance(t)}),i.defineJQueryPlugin(f),f})})(pt);const ft=`<!doctype html>\r
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
                            <a class="nav-link fw-bold" href="./acercaDe.html">Acerca de</a>\r
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
                    <img src="assets/img/1.png" class="d-block w-100" alt="...">\r
                </div>\r
                <div class="carousel-item">\r
                    <img src="assets/img/2.png" class="d-block w-100" alt="...">\r
                </div>\r
                <div class="carousel-item">\r
                    <img src="assets/img/3.png" class="d-block w-100" alt="...">\r
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
        <h2 class="text-primary fs-1">Aprende y Explora</h2>\r
        <div class="row mt-5">\r
            <section class="col-6 d-flex flex-column align-items-center">\r
                <h2 class="text-success w-75">Aprende los Departamentos de Guatemala</h2>\r
                <div class="col-10">\r
                    <div class="card h-100">\r
                        <a href="./depto.html">\r
                            <section class="card-imagenes">\r
                                <img src="assets/img/5.png" class="card-img-top" alt="mapa de Guatemala">\r
                                <img src="assets/img/4.png" class="img-fluid" alt="">\r
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
                            <img src="assets/img/Collage.png" class="card-img-top" alt="mapa de Guatemala">\r
                            <img src="assets/img/4.png" class="img-fluid" alt="">\r
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
</html>`,vt=v=>{(()=>{const y=document.querySelector(v);y.innerHTML=ft})(),_t()};vt("body");
