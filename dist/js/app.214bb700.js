(function(t){function e(e){for(var n,s,c=e[0],o=e[1],l=e[2],u=0,f=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r={app:0},i=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d22d746":"d138c0f3","chunk-55a2be92":"023e56ec"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={"chunk-55a2be92":1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise(function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-2d22d746":"31d6cfe0","chunk-55a2be92":"b914ccc3"}[t]+".css",r=o.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],u=l.getAttribute("data-href");if(u===n||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete s[t],d.parentNode.removeChild(d),a(i)},d.href=r;var _=document.getElementsByTagName("head")[0];_.appendChild(d)}).then(function(){s[t]=0}));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",f.name="ChunkLoadError",f.type=n,f.request=s,a[1](f)}r[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="vue-spotify/dist/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"282d":function(t,e,a){"use strict";var n=a("6cab"),s=a.n(n);s.a},"2d5d":function(t,e,a){},"46c8":function(t,e,a){"use strict";var n=a("4f9a"),s=a.n(n);s.a},"4f9a":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Layout")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("Header"),a("main",[a("Left"),a("Content"),a("Right")],1),a("Footer")],1)},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"nav-arrow"},[n("font-awesome-icon",{staticClass:"nav-arrow__item",attrs:{icon:"chevron-left"}}),n("font-awesome-icon",{staticClass:"nav-arrow__item",attrs:{icon:"chevron-right"}})],1),n("form",{staticClass:"search"},[n("font-awesome-icon",{staticClass:"search__icon",attrs:{icon:"search"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"search__input",attrs:{type:"search",placeholder:"搜尋"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}})],1),n("div",{staticClass:"account"},[n("img",{staticClass:"account__img",attrs:{src:a("ca70")}}),n("span",{staticClass:"account__name"},[t._v("王小明")]),n("font-awesome-icon",{staticClass:"account__icon",attrs:{icon:"chevron-down"}})],1)])},l=[],u={name:"Header",data:function(){return{searchText:""}},methods:{}},f=u,d=(a("ecfe"),a("2877")),_=Object(d["a"])(f,o,l,!1,null,"72dc9577",null),m=_.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar-left"},[a("nav",{staticClass:"menu"},[a("router-link",{staticClass:"menu__link",attrs:{to:{name:"Home"}}},[t._v("瀏覽")]),a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("電台")]),a("span",{staticClass:"menu__title"},[t._v("你的音樂")]),a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("你的 Daily Mix")]),a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("歌曲")]),a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("專輯")]),a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("藝人")]),a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("電台")]),a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("本機擋案")]),a("span",{staticClass:"menu__title"},[t._v("播放列表")]),a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("本週新發現")]),a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("本週新發現")]),a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("最Hit華語榜")]),a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("我的 Shazam 曲目")]),a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("Liked from Radio")])],1),a("a",{staticClass:"add-list",attrs:{href:"#"}},[a("font-awesome-icon",{staticClass:"add-list__icon",attrs:{icon:"plus"}}),t._v("新增播放列表\n  ")],1)])},h=[],p={name:"SidebarLeft",data:function(){return{}}},g=p,C=(a("ab27"),Object(d["a"])(g,v,h,!1,null,"33f70e4d",null)),b=C.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar-right"},[a("h3",{staticClass:"title-2nd"},[t._v("好友個人動態")]),a("div",{staticClass:"hr"}),t._l(t.list,function(e){return a("div",{key:e.name,staticClass:"friend"},[a("img",{staticClass:"friend__img",attrs:{src:e.img}}),a("div",{staticClass:"friend__info"},[a("div",{staticClass:"friend__name"},[t._v(t._s(e.name))]),a("div",{staticClass:"friend__song"},[t._v(t._s(e.song))]),a("div",{staticClass:"friend__singer"},[t._v(t._s(e.singer))]),a("div",{staticClass:"friend__album"},[a("font-awesome-icon",{attrs:{icon:"compact-disc"}}),t._v("\n        "+t._s(e.album)+"\n      ")],1)]),e.time?a("div",{staticClass:"friend__state"},[t._v(t._s(e.time))]):a("font-awesome-icon",{staticClass:"friend__state",attrs:{icon:"volume-up"}})],1)}),t._m(0)],2)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text--center"},[a("a",{staticClass:"btn btn--second",attrs:{href:"#"}},[t._v("尋找好友")])])}],k=a("ca70"),x=a.n(k),O={name:"SidebarRight",data:function(){return{list:[{img:x.a,name:"洪正一",song:"bad guy",singer:"Billie Eilish",album:"When we all fall asleep, where do we go ?",time:"14小時前"},{img:x.a,name:"李詠恩",song:"Never Really Over",singer:"Katy Perry",album:"Katy Perry",time:!1}]}}},j=O,E=(a("282d"),Object(d["a"])(j,y,w,!1,null,"51e73f5a",null)),A=E.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("router-view")],1)},S=[],T={name:"Container"},L=T,$=(a("a6c8"),Object(d["a"])(L,P,S,!1,null,"a36a3174",null)),H=$.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"info"},[n("img",{staticClass:"info__img",attrs:{src:a("ca70")}}),n("div",{staticClass:"info__wrap"},[n("h3",{staticClass:"info__song"},[t._v("慢靈魂efewfewfwsswdwefeww evew")]),n("p",{staticClass:"info__singer"},[t._v("盧廣仲")]),t.isAdd?t._e():n("font-awesome-icon",{staticClass:"info__icon text--primary",attrs:{icon:"check"},on:{click:t.toggleAdd}}),t.isAdd?n("font-awesome-icon",{staticClass:"info__icon",attrs:{icon:"plus"},on:{click:t.toggleAdd}}):t._e()],1)]),t._m(0)])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"play"},[a("div",{staticClass:"play__btns"}),a("div",{staticClass:"play__bar"})])}],R={name:"Footer",data:function(){return{isAdd:!1}},methods:{toggleAdd:function(){this.isAdd=!this.isAdd}}},B=R,F=(a("cf60"),Object(d["a"])(B,N,M,!1,null,"454ae41a",null)),D=F.exports,K={name:"Layout",components:{Header:m,Left:b,Right:A,Content:H,Footer:D}},q=K,J=(a("46c8"),Object(d["a"])(q,i,c,!1,null,"7d630bea",null)),z=J.exports,I={name:"App",components:{Layout:z}},U=I,W=Object(d["a"])(U,s,r,!1,null,null,null),G=W.exports,Q=a("8c4f");n["a"].use(Q["a"]);var V=new Q["a"]({base:"vue-spotify/dist/",mode:"history",routes:[{path:"/",name:"Home",component:function(){return a.e("chunk-55a2be92").then(a.bind(null,"bb51"))}},{path:"/about",name:"about",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}}]}),X=a("2f62");n["a"].use(X["a"]);var Y=new X["a"].Store({state:{},mutations:{},actions:{}}),Z=a("ecee"),tt=a("c074"),et=a("b702"),at=a("f2d1"),nt=a("ad3d");a("b107");Z["c"].add(tt["a"],et["a"],at["a"]),n["a"].component("font-awesome-icon",nt["a"]),n["a"].config.productionTip=!1,new n["a"]({router:V,store:Y,render:function(t){return t(G)}}).$mount("#app")},"6cab":function(t,e,a){},"89e8":function(t,e,a){},"92ed":function(t,e,a){},a6c8:function(t,e,a){"use strict";var n=a("92ed"),s=a.n(n);s.a},ab27:function(t,e,a){"use strict";var n=a("ec3f"),s=a.n(n);s.a},b107:function(t,e,a){},ca70:function(t,e,a){t.exports=a.p+"img/user.9a165639.jpeg"},cf60:function(t,e,a){"use strict";var n=a("89e8"),s=a.n(n);s.a},ec3f:function(t,e,a){},ecfe:function(t,e,a){"use strict";var n=a("2d5d"),s=a.n(n);s.a}});
//# sourceMappingURL=app.214bb700.js.map