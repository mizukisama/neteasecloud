(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],h=0,u=[];h<i.length;h++)o=i[h],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(u.length)u.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],r=!0,i=1;i<s.length;i++){var c=s[i];0!==a[c]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=s[0]))}return e}var r={},a={app:0},n=[];function o(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=r,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(s,r,function(t){return e[t]}.bind(null,r));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("cd49")},"1d71":function(e,t,s){},"39b3":function(e,t,s){},"6c7d":function(e,t,s){},"7a06":function(e,t,s){},a11d:function(e,t,s){},a1a3:function(e,t,s){},cd49:function(e,t,s){"use strict";s.r(t);s("e6cf"),s("cca6"),s("a79d"),s("b429"),s("f5df1"),s("a7a3"),s("f57e");var r=s("2b0e");const a={transitions:{pages:"fade"}};r["default"].prototype.$state=r["default"].observable(a);var n=s("8c4f"),o=s("9ab4"),i=s("48d3"),c=s("60a3");s("7a06");let l=class extends i["Component"]{render(){const e=arguments[0];return e("div",{class:"page-home"},["home"])}};l=Object(o["a"])([c["a"]],l);var d=l;let h=class extends i["Component"]{render(){const e=arguments[0];return e("div",{class:"page-mine"},["mine"])}};h=Object(o["a"])([c["a"]],h);var u,p=h;(function(e){e["Home"]="home",e["Mine"]="mine"})(u||(u={})),r["default"].use(n["a"]);const f=[{path:"/"+u.Home,name:u.Home,component:d},{path:"/"+u.Mine,name:u.Mine,component:p},{path:"*",redirect:{name:u.Home}}],v=new n["a"]({mode:"hash",base:"",routes:f});var m=v,b=s("2b88"),w=(s("5319"),s("ddb0"),s("5530")),g=s("7212"),y=s("6dd8");s("39b3");let S=class extends i["Component"]{get swiperScroll(){return this.$refs.mySwiper.$swiper}mounted(){this.initClickHandel(),setTimeout(()=>{this.updateScroll(),this.observeResize()})}observeResize(){const e=this.$el,t=this.$el.querySelector(".swiper-slide"),s=new y["a"](e=>{for(const t of e)setTimeout(()=>{this.updateScroll()},100)});s.observe(e),s.observe(t)}initClickHandel(){this.swiperScroll.el.addEventListener("click",()=>{this.stopScroll()})}addNoSwipingToTextNode(e){const t=e.childNodes;t.forEach(e=>{if(1==e.nodeType)this.addNoSwipingToTextNode(e);else if(3==e.nodeType&&e.nodeValue.replace(/(^\s*)|(\s*$)/g,"")){const t=e.parentNode;t.classList.remove("swiper-no-swiping"),t.classList.add("swiper-no-swiping")}})}updateScroll(){this.swiperScroll.update(),this.swiperScroll.scrollbar&&this.swiperScroll.scrollbar.updateSize()}stopScroll(){const e=this.swiperScroll;this.scrollTo(e.getTranslate(),0)}scrollTo(e,t){const s=this.swiperScroll;s.touchEventsData.allowMomentumBounce=!1,s.transitionEnd(),s.setTransition(t),s.setTranslate(e)}render(){const e=arguments[0];return e(g["Swiper"],{ref:"mySwiper",class:"scroll-container",attrs:{options:Object(w["a"])(Object(w["a"])({},this.options),{},{scrollbar:Object(w["a"])(Object(w["a"])({},this.options.scrollbar),{},{el:this.options.scrollbar.el+"-"+this._uid})})}},[e(g["SwiperSlide"],{ref:"scroller",class:this.scrollerClass},[this.$scopedSlots.default()]),e("div",{class:["swiper-scrollbar",(this.options.scrollbar.el+"-"+this._uid).replace(".","").replace("#","")],slot:"scrollbar"})])}};Object(o["a"])([Object(c["d"])({default:()=>({direction:"vertical",slidesPerView:"auto",freeMode:!0,noSwiping:!0,observer:!0,observeParents:!0,scrollbar:{el:".swiper-scrollbar",draggable:!0,snapOnRelease:!1,hide:!0},mousewheel:!0})})],S.prototype,"options",void 0),Object(o["a"])([Object(c["d"])({default:""})],S.prototype,"scrollerClass",void 0),S=Object(o["a"])([c["a"]],S);var O=S,j=(s("841c"),s("2638")),x=s.n(j);class k{constructor(){this.events={}}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}emit(e,...t){if(!this.events[e])return this;const s=this.events[e];return s.map(e=>e).forEach(e=>e.apply(this,t)),this}off(e,t){if(!this.events[e])return this;if(!t)return this.events[e]=null,this;const s=this.events[e].indexOf(t);return this.events[e].splice(s,1),this}once(e,t){const s=(...r)=>{t.apply(this,r),this.off(e,s)};return this.on(e,s),this}}var A,T=s("bc3a"),C=s.n(T);C.a.defaults.withCredentials=!0;class ${}class P extends k{constructor(e,t){super(),this.timeout=6e4,this.url=e,this.timeout=t||this.timeout,C.a.defaults.timeout=this.timeout}send(e,t,s){return t.timestamp=+new Date,console.log(`ajax Request: ${e} `+JSON.stringify(t)),new Promise(async(r,a)=>{let n=null,o=null;const i=C.a.post(this.url+"/"+e,t);i.catch(t=>{console.error(t.message),n={command:e,err:t},this.emit("http-error",n),s&&s(n,o),a(n)}),o=(await i).data,console.log(`ajax Response: ${e} `+JSON.stringify(o)),200==o.code?(s&&s(n,o),r(o)):(n={command:e,err:o},this.emit("res-error",n),s&&s(n,null),a(n))})}}(function(e){e["SearchAdvice"]="search/default",e["Search"]="search"})(A||(A={}));class V extends P{searchAdvice(e){return this.send(A.SearchAdvice,new $,e)}search(e,t){return this.send(A.Search,e,t)}}const M=new V("http://localhost:3000");new k;s("f7c0");class N extends ${}let _=class extends i["Component"]{constructor(){super(...arguments),this.enterSearch=!1,this.searchValue="",this.searchAdvice={showKeyword:"",realkeyword:""}}async initSearchAdvice(){const e=await M.searchAdvice();this.searchAdvice=e.data}async initSearch(){let e=new N;e.keywords=this.searchValue||this.searchAdvice.realkeyword;await M.search(e)}onSearchValueChange(){this.searchValue||this.initSearchAdvice()}onLeave(){this.enterSearch=!1,console.log(this.inputDom),this.inputDom.blur()}created(){this.initSearchAdvice()}render(){const e=arguments[0];return e("div",{class:"search-component",attrs:{"data-status":this.enterSearch?"enter":"leave"}},[e("v-touch",{attrs:{tag:"i"},class:"icon-search",on:{tap:()=>{this.initSearch()}}}),e("input",x()([{on:{input:e=>{e.target.composing||(this.searchValue=e.target.value)},focus:()=>{this.enterSearch=!0},keydown:i["modifiers"].enter(this.initSearch)},ref:"input-dom",attrs:{type:"text",placeholder:this.searchAdvice.showKeyword},domProps:{value:this.searchValue}},{directives:[{name:"model",value:this.searchValue,modifiers:{}}]}])),e("transition",{attrs:{name:"fade"}},[e("v-touch",{attrs:{tag:"span"},on:{tap:()=>{this.onLeave()}},directives:[{name:"show",value:this.enterSearch}],class:"btn-leave"},["取消"])])])}};Object(o["a"])([Object(c["e"])("input-dom")],_.prototype,"inputDom",void 0),Object(o["a"])([Object(c["f"])("searchValue")],_.prototype,"onSearchValueChange",null),_=Object(o["a"])([c["a"]],_);var H=_;s("6c7d");let E=class extends i["Component"]{render(){const e=arguments[0];return e("div",{class:"header-component"},[e(H)])}};E=Object(o["a"])([c["a"]],E);var D=E;s("a11d");let L=class extends i["Component"]{toggleIndex(e){this.active}render(){const e=arguments[0];return e("ul",{class:"tabs-wrapper"},[Array.from({length:this.length}).map((t,s)=>e("v-touch",{key:s,attrs:{tag:"li"},class:["tabs-item",this.active==s?"active":""],on:{tap:()=>{this.toggleIndex(s)}}},[this.$scopedSlots.default({i:s,isActive:this.active==s})]))])}};Object(o["a"])([Object(c["c"])("change",{type:Number})],L.prototype,"active",void 0),Object(o["a"])([Object(c["d"])({default:0})],L.prototype,"length",void 0),Object(o["a"])([Object(c["b"])("change")],L.prototype,"toggleIndex",null),L=Object(o["a"])([c["a"]],L);var R=L;s("1d71");let I=class extends i["Component"]{constructor(){super(...arguments),this.list=[{key:u.Home,value:"发现"},{key:u.Mine,value:"我的"}]}get active(){const e=this.list.findIndex(e=>e.key==this.$route.name);return~e?e:0}set active(e){this.$router.replace({name:this.list[e].key})}render(){const e=arguments[0];return e("div",{class:"footer-component"},[e(R,{class:"footer-navs",attrs:{length:this.list.length},scopedSlots:{default:({i:t,isActive:s})=>e("div",{class:"footer-nav-item"},[e("div",{class:"icon-box-container"},[e("transition",{attrs:{name:"scale"}},[e("div",{key:s?"on":"off",class:"icon-box",attrs:{"data-status":s?"on":"off"}},[e("i",{class:"icon-"+this.list[t].key})])])]),e("span",[" ",this.list[t].value])])},model:{value:this.active,callback:e=>{this.active=e}}})])}};I=Object(o["a"])([c["a"]],I);var J=I;s("a1a3");let q=class extends i["Component"]{render(){const e=arguments[0];return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"pages-box"}},[e(O,{class:"pages-scroll-view",scopedSlots:{default:()=>e("transition",{attrs:{name:this.$state.transitions.pages}},[e("div",{class:"page-box-container",key:this.$route.name},[e("router-view")])])}})]),e("div",{attrs:{id:"fixed-box"}},[e(D),e(J),e(b["PortalTarget"],{attrs:{name:"fixed",multiple:!0}})])])}};q=Object(o["a"])([c["a"]],q);var z=q;s("25f0"),s("2532"),s("466d"),s("1276"),s("2b3d");const B=async(e,t=!1)=>{e=Array.isArray(e)?e:[e];const s=e=>new Promise((t,s)=>{const r=document.createElement("script"),a=document.querySelector("script");for(const n in e)r.setAttribute(n,e[n]);a.parentNode.insertBefore(r,a),Object.keys(e).includes("for")&&Object.keys(e).includes("event")&&t(r),r.onload=()=>{t(r)}});if(t)return Promise.all(e.map(e=>s(e)));{const t=[];for(let r=0;r<e.length;r++)t[r]=await s(e[r]);return t}};var K=s("ca95"),F=s.n(K);B({id:"font-icon",src:"//at.alicdn.com/t/font_1955919_p3gh301jc.js"}).then(()=>{r["default"].config.productionTip=!1,r["default"].use(F.a,{name:"v-touch"}),new r["default"]({router:m,render:e=>e(z)}).$mount("#app")})},f57e:function(e,t,s){},f7c0:function(e,t,s){}});
//# sourceMappingURL=app.9a91ae86.js.map