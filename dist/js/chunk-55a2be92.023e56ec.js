(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55a2be92"],{"02f4":function(t,e,n){var a=n("4588"),r=n("be13");t.exports=function(t){return function(e,n){var i,c,s=String(r(e)),o=a(n),l=s.length;return o<0||o>=l?t?"":void 0:(i=s.charCodeAt(o),i<55296||i>56319||o+1===l||(c=s.charCodeAt(o+1))<56320||c>57343?t?s.charAt(o):i:t?s.slice(o,o+2):c-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var a=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},"0463":function(t,e,n){"use strict";var a=n("147f"),r=n.n(a);r.a},"0bfb":function(t,e,n){"use strict";var a=n("cb7c");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"147f":function(t,e,n){},"214f":function(t,e,n){"use strict";n("b0c5");var a=n("2aba"),r=n("32e9"),i=n("79e5"),c=n("be13"),s=n("2b4c"),o=n("520a"),l=s("species"),u=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=s(t),b=!i(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)}),v=b?!i(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[d](""),!e}):void 0;if(!b||!v||"replace"===t&&!u||"split"===t&&!f){var p=/./[d],h=n(c,d,""[t],function(t,e,n,a,r){return e.exec===o?b&&!r?{done:!0,value:p.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),g=h[0],_=h[1];a(String.prototype,t,g),r(RegExp.prototype,d,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}}},"33cf":function(t,e,n){"use strict";var a=n("8b87"),r=n.n(a);r.a},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"520a":function(t,e,n){"use strict";var a=n("0bfb"),r=RegExp.prototype.exec,i=String.prototype.replace,c=r,s="lastIndex",o=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t[s]||0!==e[s]}(),l=void 0!==/()??/.exec("")[1],u=o||l;u&&(c=function(t){var e,n,c,u,f=this;return l&&(n=new RegExp("^"+f.source+"$(?!\\s)",a.call(f))),o&&(e=f[s]),c=r.call(f,t),o&&c&&(f[s]=f.global?c.index+c[0].length:e),l&&c&&c.length>1&&i.call(c[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)}),c}),t.exports=c},"5f1b":function(t,e,n){"use strict";var a=n("23c6"),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"6b54":function(t,e,n){"use strict";n("3846");var a=n("cb7c"),r=n("0bfb"),i=n("9e1e"),c="toString",s=/./[c],o=function(t){n("2aba")(RegExp.prototype,c,t,!0)};n("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?o(function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?r.call(t):void 0)}):s.name!=c&&o(function(){return s.call(this)})},"8b87":function(t,e,n){},a481:function(t,e,n){"use strict";var a=n("cb7c"),r=n("4bf8"),i=n("9def"),c=n("4588"),s=n("0390"),o=n("5f1b"),l=Math.max,u=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,b=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,p){return[function(a,r){var i=t(this),c=void 0==a?void 0:a[e];return void 0!==c?c.call(a,i,r):n.call(String(i),a,r)},function(t,e){var r=p(n,t,this,e);if(r.done)return r.value;var f=a(t),d=String(this),b="function"===typeof e;b||(e=String(e));var g=f.global;if(g){var _=f.unicode;f.lastIndex=0}var m=[];while(1){var x=o(f,d);if(null===x)break;if(m.push(x),!g)break;var C=String(x[0]);""===C&&(f.lastIndex=s(d,i(f.lastIndex),_))}for(var E="",y=0,w=0;w<m.length;w++){x=m[w];for(var j=String(x[0]),A=l(u(c(x.index),d.length),0),R=[],S=1;S<x.length;S++)R.push(v(x[S]));var $=x.groups;if(b){var G=[j].concat(R,A,d);void 0!==$&&G.push($);var L=String(e.apply(void 0,G))}else L=h(j,d,A,R,$,e);A>=y&&(E+=d.slice(y,A)+L,y=A+j.length)}return E+d.slice(y)}];function h(t,e,a,i,c,s){var o=a+t.length,l=i.length,u=b;return void 0!==c&&(c=r(c),u=d),n.call(s,u,function(n,r){var s;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(o);case"<":s=c[r.slice(1,-1)];break;default:var u=+r;if(0===u)return n;if(u>l){var d=f(u/10);return 0===d?n:d<=l?void 0===i[d-1]?r.charAt(1):i[d-1]+r.charAt(1):n}s=i[u-1]}return void 0===s?"":s})}})},b0c5:function(t,e,n){"use strict";var a=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",{staticClass:"title-1st mb-2"},[t._v("瀏覽")]),n("Tabs",{attrs:{tabs:t.tabs}},[n("div",{attrs:{slot:"0"},slot:"0"},[n("h3",{staticClass:"title-border-b mt-2"},[t._v(t._s(t.tabs[0].name))]),n("Grid",t._l(t.musicStyle,function(e){return n("GItem",{staticClass:"card-1st"},[n("img",{attrs:{src:e.thumbnail}}),n("span",{staticClass:"card-1st__text"},[t._v(t._s(e.title))])])}),1)],1),n("div",{attrs:{slot:"1"},slot:"1"},[n("h3",{staticClass:"title-border-b mt-2"},[t._v("精選排行榜")]),n("div",{staticClass:"grid"},t._l(t.tops,function(e){return n("div",{staticClass:"grid__item card-2nd"},[n("img",{staticClass:"card-2nd__thumbnail",attrs:{src:e.thumbnail}}),n("div",{staticClass:"card-2nd__title"},[t._v(t._s(e.title))]),n("div",{staticClass:"card-2nd__description"},[t._v(t._s(e.description))]),n("div",{staticClass:"card-2nd__fans"},[t._v(t._s(t.numberWithCommas(e.fans))+" 位粉絲")])])}),0)]),n("div",{attrs:{slot:"2"},slot:"2"},[n("h3",{staticClass:"title-border-b mt-2"},[t._v("最棒的最新發行音樂")])]),n("div",{attrs:{slot:"3"},slot:"3"},[n("h3",{staticClass:"title-border-b mt-2"},[t._v("為您打造的播放清單")])]),n("div",{attrs:{slot:"4"},slot:"4"},[n("h3",{staticClass:"title-border-b mt-2"},[t._v(t._s(t.tabs[4].name))])])])],1)},r=[],i=(n("6b54"),n("a481"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs"},[n("div",{ref:"header",staticClass:"tabs__header"},t._l(t.tabs,function(e,a){return n("a",{key:e.name,staticClass:"tabs__header__item",class:{active:t.nowtab===a},attrs:{href:"#"},on:{click:function(e){return t.select(a)}}},[t._v(t._s(e.name))])}),0),n("div",{staticClass:"tabs__content"},t._l(t.tabs,function(e,a){return n("div",{staticClass:"tabs__content__item",class:{active:t.nowtab===a}},[t._t(a)],2)}),0)])}),c=[],s={name:"Tabs",props:["tabs"],data:function(){return{nowtab:0}},methods:{select:function(t){this.nowtab=t}}},o=s,l=(n("33cf"),n("2877")),u=Object(l["a"])(o,i,c,!1,null,"1f331aa4",null),f=u.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid"},[t._t("default")],2)},b=[],v={name:"Grid",components:{}},p=v,h=Object(l["a"])(p,d,b,!1,null,null,null),g=h.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid__item"},[t._t("default")],2)},m=[],x={name:"Grid-item"},C=x,E=Object(l["a"])(C,_,m,!1,null,null,null),y=E.exports,w={name:"Home",data:function(){return{tabs:[{name:"曲風與情調"},{name:"排行榜"},{name:"最新發行"},{name:"發掘"},{name:"演唱會"}],musicStyle:[{thumbnail:"https://t.scdn.co/images/fd2cdde10ea04ccfb10c902274be8815.jpeg",title:"華語流行"},{thumbnail:"https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",title:"流行樂"},{thumbnail:"https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg",title:"情調"},{thumbnail:"https://t.scdn.co/media/derived/chill-274x274_4c46374f007813dd10b37e8d8fd35b4b_0_0_274_274.jpg",title:"弛放"},{thumbnail:"https://t.scdn.co/images/69c728f3bd9643a5ab0f4ef5a79919f1.jpeg",title:"韓風流行"},{thumbnail:"https://t.scdn.co/media/original/genre-images-square-274x274_5e50d72b846a198fcd2ca9b3aef5f0c8_274x274.jpg",title:"專注"}],tops:[{title:"台灣前50名",description:"每日為你更新目前台灣最熱播的歌曲",thumbnail:"https://charts-images.scdn.co/REGIONAL_TW_DEFAULT.jpg",fans:117400},{title:"全球前50名",description:"每日為你更新目前最熱播的歌曲",thumbnail:"https://charts-images.scdn.co/REGIONAL_GLOBAL_DEFAULT.jpg",fans:13961596},{title:"全球瘋傳前50名",description:"每日為你更新全球最為轉傳討論的歌曲",thumbnail:"https://charts-images.scdn.co/VIRAL_GLOBAL_DEFAULT.jpg",fans:1514101}]}},methods:{numberWithCommas:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},components:{Tabs:f,Grid:g,GItem:y}},j=w,A=(n("0463"),Object(l["a"])(j,a,r,!1,null,"2fc3c27b",null));e["default"]=A.exports}}]);
//# sourceMappingURL=chunk-55a2be92.023e56ec.js.map