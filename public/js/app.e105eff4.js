(function(e){function t(t){for(var r,a,i=t[0],c=t[1],u=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-057a29c7":"15215dbe","chunk-0a139f70":"874e7a71","chunk-3ffba886":"830bda6a","chunk-4700863c":"05b6a6b9","chunk-4b45293c":"a17cea3c"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-057a29c7":1,"chunk-0a139f70":1,"chunk-3ffba886":1,"chunk-4700863c":1,"chunk-4b45293c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-057a29c7":"40cd3cec","chunk-0a139f70":"3dd760ce","chunk-3ffba886":"c53dee54","chunk-4700863c":"52e07544","chunk-4b45293c":"d34db66b"}[e]+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],d.parentNode.removeChild(d),n(s)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2b06":function(e,t,n){e.exports=n.p+"img/main-logo.eb73169d.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("routerView")],1)},o=[],s=n("2877"),i={},c=Object(s["a"])(i,a,o,!1,null,null,null),u=c.exports,l=(n("96cf"),n("1da1")),f=n("2f62"),d=(n("d3b7"),n("8c4f")),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home text-white"},[e._m(0),e._m(1),n("div",[n("form",[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],class:["form-control form-rounded mb-4",e.errs.username?"is-invalid":""],attrs:{type:"text",placeholder:"Name"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e.errs.username?n("div",{staticClass:"invalid-feedback",style:{marginTop:"-15px",marginLeft:"10px"}},[e._v(" "+e._s(e.errs.username)+" ")]):e._e()]),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:["form-control form-rounded mb-4",e.errs.email?"is-invalid":""],attrs:{type:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e.errs.email?n("div",{staticClass:"invalid-feedback",style:{marginTop:"-15px",marginLeft:"10px"}},[e._v(" "+e._s(e.errs.email)+" ")]):e._e()]),e._m(2)])]),n("div",{class:"\n    d-flex \n    text-center \n    text-uppercase \n    continue-footer \n    justify-content-between\n    pt-4 font-weight-bolder \n    ",on:{click:e.setUserProfile}},[n("div",{staticClass:"footer-block"}),n("div",{staticClass:"footer-block font-weight-bold"},[e._v("CONTINUE")]),e._m(3)])])},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex justify-content-center p-5"},[r("img",{staticClass:"main-logo mt-3",attrs:{src:n("2b06")}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-white text-center"},[n("h4",[e._v("Welcome to")]),n("h4",{staticClass:"mb-3"},[e._v("#CovidYogaChallenge")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"intro-text"},[e._v(" By signing up for challenge, you agree that you have understood the "),n("a",{attrs:{href:""}},[e._v("terms and conditions")]),e._v(" , "),n("a",{attrs:{href:""}},[e._v("privacy policy")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer-block pr-4"},[n("button",{staticClass:"btn btn-transparent text-white"},[n("i",{staticClass:"ti-arrow-right footer-icon"})])])}],h=n("5530"),g={name:"Home",data:function(){return{email:"",username:"",errs:{email:"",username:"",status:!1}}},methods:Object(h["a"])(Object(h["a"])({},Object(f["b"])({setUser:"setUser"})),{},{setUserProfile:function(){if(this.validateUser(),!this.errs.status){this.errs={email:"",username:"",status:!1};var e=this.username,t=this.email;this.setUser({username:e,email:t})}},validateUser:function(){var e=this.username,t=this.email;e||(this.errs.status=!0,this.errs.username="Name is required."),t||(this.errs.status=!0,this.errs.email="Email is required.")}})},v=g,b=(n("56f6"),Object(s["a"])(v,m,p,!1,null,"39a90c7a",null)),y=b.exports;r["default"].use(d["a"]);var _=[{path:"/",name:"Home",component:y,beforeEnter:function(e,t,n){E.getters["user"]?n("/page-1"):n()}},{path:"/page-1",name:"Page1",component:function(){return n.e("chunk-3ffba886").then(n.bind(null,"2b0b"))},beforeEnter:function(e,t,n){E.getters["user"]?n():n("/")}},{path:"/page-2",name:"Page2",component:function(){return n.e("chunk-057a29c7").then(n.bind(null,"223d"))},beforeEnter:function(e,t,n){E.getters["user"]?n():n("/")}},{path:"/page-3",name:"Page3",component:function(){return n.e("chunk-4b45293c").then(n.bind(null,"e0b6"))},beforeEnter:function(e,t,n){E.getters["user"]?n():n("/")}},{path:"/page-4",name:"Page4",component:function(){return n.e("chunk-4700863c").then(n.bind(null,"f7b2"))},beforeEnter:function(e,t,n){E.getters["user"]?n():n("/")}},{path:"/page-5",name:"Page5",component:function(){return n.e("chunk-0a139f70").then(n.bind(null,"e094"))},beforeEnter:function(e,t,n){E.getters["user"]?n():n("/")}}],k=new d["a"]({mode:"history",base:"/",routes:_}),w=k;r["default"].use(f["a"]);var E=new f["a"].Store({modules:{},state:{user:JSON.parse(localStorage.getItem("user"))||null,count:0},getters:{user:function(e){return e.user},count:function(e){return e.count}},actions:{setUser:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,localStorage.setItem("user",JSON.stringify(t));case 3:r("SET_USER",t);case 4:case"end":return n.stop()}}),n)})))()}},mutations:{SET_USER:function(e,t){e.user=t,w.push("page-1")},SET_SCORE:function(e,t){var n=t.count;e.count=n}}}),x=n("9483");Object(x["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var C=n("531a"),O=n.n(C),j=n("c9d0"),S=n.n(j),P=n("5f5b"),N=n("b1e0");n("f9e3"),n("2dd8"),n("c591"),n("bb35");r["default"].use(P["a"]),r["default"].use(N["a"]),r["default"].use(S.a),r["default"].component("RadialProgress",O.a),r["default"].config.productionTip=!1,new r["default"]({router:w,store:E,render:function(e){return e(u)}}).$mount("#app")},"56f6":function(e,t,n){"use strict";var r=n("c9c4"),a=n.n(r);a.a},bb35:function(e,t,n){},c591:function(e,t,n){},c9c4:function(e,t,n){}});
//# sourceMappingURL=app.e105eff4.js.map