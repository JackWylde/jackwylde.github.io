(function(t){function e(e){for(var s,c,i=e[0],r=e[1],l=e[2],u=0,f=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,c=1;c<n.length;c++){var r=n[c];0!==a[r]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},o=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"09c5e31a"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,s){n=a[t]=[e,s]}));e.push(n[2]=s);var o,r=document.createElement("script");r.charset="utf-8",r.timeout=120,i.nc&&r.setAttribute("nonce",i.nc),r.src=c(t);var l=new Error;o=function(e){r.onerror=r.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",l.name="ChunkLoadError",l.type=s,l.request=o,n[1](l)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:r})}),12e4);r.onerror=r.onload=o,document.head.appendChild(r)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"20ec":function(t,e,n){},"2e3a":function(t,e,n){t.exports=n.p+"img/thumbs_mid.fdee72aa.png"},"375e":function(t,e,n){t.exports=n.p+"img/mag.b0270037.png"},3843:function(t,e,n){},"3b67":function(t,e,n){t.exports=n.p+"img/hand_up.5d3ba013.png"},"41a4":function(t,e,n){},"4dca":function(t,e,n){t.exports=n.p+"img/thumbs_down.147ac4c6.png"},"53cf":function(t,e,n){"use strict";var s=n("f804"),a=n.n(s);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},o=[],c=(n("5c0b"),n("2877")),i={},r=Object(c["a"])(i,a,o,!1,null,null,null),l=r.exports,u=n("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Landing"),n("Footer")],1)},p=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"landing-wrap"},[t._m(0),t._m(1),n("router-link",{attrs:{to:"/QuestionOne"}},[n("button",{staticClass:"btn"},[t._v("Start")])])],1)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question-wrap"},[n("h3",{staticClass:"mag"},[t._v("Welcome to the NHS Children's Feedback System")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"char-containers"},[s("div",{staticClass:"char left-char",attrs:{id:"left-char"}},[s("img",{attrs:{src:n("c827")}})]),s("div",{staticClass:"char right-char",attrs:{id:"right-char"}},[s("img",{attrs:{src:n("70bc")}})])])}],h={name:"Landing",props:{}},v=h,b=(n("abc0"),Object(c["a"])(v,m,g,!1,null,"6ee5a69a",null)),C=b.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"flex-cont"},[s("img",{staticClass:"logo",attrs:{src:n("f1fb"),alt:"iic-logo"}}),s("img",{attrs:{src:n("9b46"),alt:"nhs-logo"}}),s("div",{staticClass:"footer-menu"},[s("img",{staticClass:"magnifier",attrs:{src:n("375e")},on:{click:function(e){return t.increaseFont()}}})])])])},w=[],k=(n("4160"),n("a630"),n("3ca3"),n("159b"),{name:"Footer",props:{},methods:{increaseFont:function(){var t=document.getElementsByClassName("mag"),e=Array.from(t);e.forEach((function(t){t.style.transform="scale(1.3)",t.style.fontFamily="Comic Sans"}))}}}),y=k,Q=(n("865e"),Object(c["a"])(y,_,w,!1,null,"3830beee",null)),x=Q.exports,A={name:"Home",components:{Landing:C,Footer:x}},E=A,$=Object(c["a"])(E,f,p,!1,null,null,null),T=$.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-wrap"},[t._m(0),n("div",{staticClass:"content-wrap"},[n("div",{staticClass:"button-wrap"},[n("button",{staticClass:"answer",attrs:{id:"good"},on:{"!click":function(e){return t.getAnswer(e)}}},[n("h3",{staticClass:"mag"},[t._v("Good")])])]),n("div",{staticClass:"button-wrap"},[n("button",{staticClass:"answer",attrs:{id:"excellent"},on:{"!click":function(e){return t.getAnswer(e)}}},[n("h3",{staticClass:"mag"},[t._v("Excellent")])])]),n("div",{staticClass:"button-wrap"},[n("button",{staticClass:"answer",attrs:{id:"okay"},on:{"!click":function(e){return t.getAnswer(e)}}},[n("h3",{staticClass:"mag"},[t._v("Okay")])])]),n("div",{staticClass:"button-wrap"},[n("button",{staticClass:"answer",attrs:{id:"poor"},on:{"!click":function(e){return t.getAnswer(e)}}},[n("h3",{staticClass:"mag"},[t._v("Poor")])])])]),n("app-footer")],1)},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question-wrap"},[n("div",{staticClass:"title"},[n("h3",{staticClass:"mag"},[t._v(" What word would you use to describe "),n("br"),t._v(" your health care appointment? ")])])])}],j={components:{"app-footer":x},data:function(){return{}},methods:{getAnswer:function(t){this.answer=t.target.innerText,console.log(this.answer),this.$router.push("QuestionTwo")}},name:"QuestionPage",props:{}},N=j,P=(n("c2be"),Object(c["a"])(N,O,F,!1,null,"32cf54d6",null)),S=P.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-wrap"},[t._m(0),n("div",{staticClass:"content-wrap",attrs:{id:"content"}},[n("div",{staticClass:"balloon a mag",class:{clicked:t.clickedA},on:{"!click":function(e){return t.getAnswer(e)}}},[n("h3",[t._v("I agree a lot")])]),n("div",{staticClass:"balloon b mag",class:{clicked:t.clickedB},on:{"!click":function(e){return t.getAnswer(e)}}},[n("h3",[t._v("I agree a bit")])]),n("div",{staticClass:"balloon c mag",class:{clicked:t.clickedC},on:{"!click":function(e){return t.getAnswer(e)}}},[n("h3",[t._v("I'm not sure")])]),n("div",{staticClass:"balloon d mag",class:{clicked:t.clickedD},on:{"!click":function(e){return t.getAnswer(e)}}},[n("h3",[t._v("I disagree a bit")])]),n("div",{staticClass:"balloon e mag",class:{clicked:t.clickedE},on:{"!click":function(e){return t.getAnswer(e)}}},[n("h3",[t._v("I disagree a lot")])])]),n("app-footer")],1)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question-wrap"},[n("h3",{staticClass:"mag"},[t._v(" The healthcare staff are listening to me... ")])])}],M={components:{"app-footer":x},data:function(){return{clickedA:!1,clickedB:!1,clickedC:!1,clickedD:!1,clickedE:!1}},methods:{moveQ3:function(){this.$router.push("QuestionThree")},getAnswer:function(t){var e=t.target;console.log(e),console.log(e.className),"balloon a mag"===e.className?(this.clickedA=!0,setTimeout(this.moveQ3,300)):"balloon b mag"===e.className?(this.clickedB=!0,setTimeout(this.moveQ3,300)):"balloon c mag"===e.className?(this.clickedC=!0,setTimeout(this.moveQ3,300)):"balloon d mag"===e.className?(this.clickedD=!0,setTimeout(this.moveQ3,300)):"balloon e mag"===e.className&&(this.clickedE=!0,setTimeout(this.moveQ3,300))}},name:"QuestionPage",props:{}},I=M,B=(n("bb0a"),Object(c["a"])(I,H,L,!1,null,"5893b0d2",null)),D=B.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-wrapper"},[t._m(0),s("div",{staticClass:"page-row has-buttons"},[s("div",{staticClass:"funky-btn",on:{click:function(e){return t.moveQ4()}}},[s("img",{attrs:{src:n("5cdb"),alt:"thumb"}})]),s("div",{staticClass:"funky-btn",on:{click:function(e){return t.moveQ4()}}},[s("img",{attrs:{src:n("2e3a"),alt:"thumb"}})]),s("div",{staticClass:"funky-btn",on:{click:function(e){return t.moveQ4()}}},[s("img",{attrs:{src:n("4dca"),alt:"thumb"}})])]),s("app-footer")],1)},W=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-row has-images"},[s("div",{staticClass:"flex-col"},[s("img",{attrs:{src:n("c827"),alt:"girl"}})]),s("div",{staticClass:"flex-col"},[s("img",{staticClass:"mag",attrs:{src:n("73dc"),alt:"cloud-icon"}}),s("h3",{staticClass:"mag"},[t._v("Would you tell your friends and family that the service is good?")])])])}],J={components:{"app-footer":x},data:function(){},methods:{moveQ4:function(){console.log("clicked"),this.$router.push("QuestionFour")}},name:"QuestionPage",props:{}},G=J,z=(n("e8f0"),Object(c["a"])(G,q,W,!1,null,"3137baad",null)),K=z.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-wrap"},[t._m(0),n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"button-wrap"},[n("button",{staticClass:"answer",attrs:{id:"agree"},on:{click:function(e){return t.moveQ5()}}},[n("h3",{staticClass:"mag"},[t._v("Agree")])]),n("button",{staticClass:"answer",attrs:{id:"disagree"},on:{click:function(e){return t.moveQ5()}}},[n("h3",{staticClass:"mag"},[t._v("Disagree")])])])]),t._m(1),n("app-footer")],1)},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question-wrap"},[n("h3",{staticClass:"mag"},[t._v(" I felt involved and included during my appointment... ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pointy-image"},[s("img",{attrs:{src:n("3b67"),alt:"Tyler pointing up"}})])}],V={components:{"app-footer":x},data:function(){},methods:{moveQ5:function(){console.log("clicked"),this.$router.push("QuestionFive"),window.location.reload()}},name:"QuestionPage",props:{}},X=V,Y=(n("53cf"),Object(c["a"])(X,R,U,!1,null,"20865ace",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-wrapper"},[t._m(0),n("div",{staticClass:"content-wrap",attrs:{id:"content"}},[n("div",{staticClass:"lego-a",class:{clicked:t.clickedA},on:{"!click":function(e){return t.getAnswer(e)}}},[n("h3",{staticClass:"mag"},[t._v("Happy")])]),n("div",{staticClass:"lego-b",class:{clicked:t.clickedB},on:{"!click":function(e){return t.getAnswer(e)}}},[n("h3",{staticClass:"mag"},[t._v("Safe")])]),n("div",{staticClass:"lego-c",class:{clicked:t.clickedC},on:{"!click":function(e){return t.getAnswer(e)}}},[n("h3",{staticClass:"mag"},[t._v("Included")])]),n("div",{staticClass:"lego-d",class:{clicked:t.clickedD},on:{"!click":function(e){return t.getAnswer(e)}}},[n("h3",{staticClass:"mag"},[t._v("Sad")])]),n("div",{staticClass:"lego-e",class:{clicked:t.clickedE},on:{"!click":function(e){return t.getAnswer(e)}}},[n("h3",{staticClass:"mag"},[t._v("Confused")])]),n("div",{staticClass:"lego-f",class:{clicked:t.clickedF},on:{"!click":function(e){return t.getAnswer(e)}}},[n("h3",{staticClass:"mag"},[t._v("Angry")])])]),n("app-footer")],1)},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question-wrap"},[n("h3",{staticClass:"mag"},[t._v(" When I come here I feel... ")])])}],nt={components:{"app-footer":x},el:"#app",data:function(){return{clickedA:!1,clickedB:!1,clickedC:!1,clickedD:!1,clickedE:!1}},methods:{getAnswer:function(t){var e=t.target;console.log(e),console.log(e.innerHTML),"Happy"===e.innerHTML||"lego-a"===e.className?(console.log("a"),this.$router.push("Finished")):"Safe"===e.innerHTML||"lego-b"===e.className?(console.log("b"),this.$router.push("Finished")):"Included"===e.innerHTML||"lego-c"===e.className?(console.log("c"),this.$router.push("Finished")):"Sad"===e.innerHTML||"lego-d"===e.className?(console.log("d"),this.$router.push("Finished")):"Confused"===e.innerHTML||"lego-e"===e.className?(console.log("e"),this.$router.push("Finished")):"Angry"!==e.innerHTML&&"lego-f"!==e.className||(console.log("f"),this.$router.push("Finished"))}},name:"QuestionPage",props:{}},st=nt,at=(n("9a29"),Object(c["a"])(st,tt,et,!1,null,"7fb83b34",null)),ot=at.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"finished-wrap"},[t._m(0),n("app-footer")],1)},it=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal"},[s("h3",[t._v("Thank you for your feedback!")]),s("p",[t._v(" Brought to you by... ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"column"},[s("div",{staticClass:"left-col"},[s("img",{attrs:{src:n("f1fb")}})])]),s("div",{staticClass:"column"},[s("div",{staticClass:"right-col"},[s("img",{attrs:{src:n("9b46")}})])])])])}],rt={name:"Finished",components:{"app-footer":x},props:{},methods:{reloadPage:function(){this.$router.push("/")}},mounted:function(){setTimeout(this.reloadPage,4e3)}},lt=rt,ut=(n("a858"),Object(c["a"])(lt,ct,it,!1,null,"5f69fd34",null)),dt=ut.exports;s["a"].use(d["a"]);var ft=[{path:"/",name:"Home",component:T},{path:"/QuestionOne",name:"QuestionOne",component:S},{path:"/QuestionTwo",name:"QuestionTwo",component:D},{path:"/QuestionThree",name:"QuestionThree",component:K},{path:"/QuestionFour",name:"QuestionFour",component:Z},{path:"/QuestionFive",name:"QuestionFive",component:ot},{path:"/Finished",name:"Finished",component:dt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],pt=new d["a"]({routes:ft}),mt=pt,gt=n("2f62");s["a"].use(gt["a"]);var ht=new gt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),vt=n("df76");s["a"].config.productionTip=!1,s["a"].component("drag",vt["Drag"]),s["a"].component("drop",vt["Drop"]),new s["a"]({router:mt,store:ht,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("9c0c"),a=n.n(s);a.a},"5cdb":function(t,e,n){t.exports=n.p+"img/thumbs_mid2.895d6d7c.png"},"70bc":function(t,e,n){t.exports=n.p+"img/boy.0957b9eb.png"},"73dc":function(t,e,n){t.exports=n.p+"img/picture5.5b913087.png"},8015:function(t,e,n){},"865e":function(t,e,n){"use strict";var s=n("20ec"),a=n.n(s);a.a},9104:function(t,e,n){},9489:function(t,e,n){},"9a29":function(t,e,n){"use strict";var s=n("8015"),a=n.n(s);a.a},"9b46":function(t,e,n){t.exports=n.p+"img/nhs-logo.25f91a8f.png"},"9c0c":function(t,e,n){},a858:function(t,e,n){"use strict";var s=n("ebc3"),a=n.n(s);a.a},abc0:function(t,e,n){"use strict";var s=n("9489"),a=n.n(s);a.a},bb0a:function(t,e,n){"use strict";var s=n("3843"),a=n.n(s);a.a},c2be:function(t,e,n){"use strict";var s=n("9104"),a=n.n(s);a.a},c827:function(t,e,n){t.exports=n.p+"img/girl.9f9e2da1.png"},e8f0:function(t,e,n){"use strict";var s=n("41a4"),a=n.n(s);a.a},ebc3:function(t,e,n){},f1fb:function(t,e,n){t.exports=n.p+"img/iic-logo.521bca50.png"},f804:function(t,e,n){}});
//# sourceMappingURL=app.d60d26c4.js.map