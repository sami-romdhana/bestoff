(this.webpackJsonpbestoff=this.webpackJsonpbestoff||[]).push([[4],{36:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(0);function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(n.useEffect)((function(){document.title=t?(e.replace?"":"Bestoff "+(e.hyphen?"- ":""))+t:"Bestoff"}),[t,e.hyphen,e.replace])}},37:function(t,e,r){"use strict";function n(t){return JSON.parse(atob(t.replace(/_/g,"/").replace(/-/g,"+")))}r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var a=function(t,e){return e.toFixed?Number(e.toFixed(3)):e};function o(t){return btoa(JSON.stringify(t,a)).replace(/\//g,"_").replace(/\+/g,"-")}},38:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(40),a=Object(n.memoize)((function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e<0)throw new Error("Negative number are not supported");return e<60&&!r.forceMinutes?Math.floor(e).toString().padStart(2,"0")+"s":e<3600?Math.floor(e/60).toString().padStart(2,"0")+"m"+t(e%60):Math.floor(e/3600)+"h"+t(e%3600,{forceMinutes:!0})}))},39:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(35),a=r(0);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=Object(a.useState)(t),r=Object(n.a)(e,2),o=r[0],i=r[1],c=function(t){i(t.target.value)},u={value:o,onChange:c};return[o,u,i]}},68:function(t,e,r){t.exports=r(69)},69:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return x()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=g(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var s={};function f(){}function p(){}function h(){}var d={};d[a]=function(){return this};var v=Object.getPrototypeOf,m=v&&v(v(k([])));m&&m!==e&&r.call(m,a)&&(d=m);var y=h.prototype=f.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function g(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,g(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return p.prototype=y.constructor=h,h.constructor=p,p.displayName=c(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(E.prototype),E.prototype[o]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),c(y,i,"Generator"),y[a]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;w(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},70:function(t,e,r){},71:function(t,e,r){},72:function(t,e,r){},76:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return w}));var n=r(68),a=r.n(n);function o(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,a)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function c(t){o(i,n,a,c,u,"next",t)}function u(t){o(i,n,a,c,u,"throw",t)}c(void 0)}))}}var c=r(35),u=r(0),l=r.n(u),s=r(1),f=r(41),p=r.n(f),h=r(37),d=r(36),v=r(39);function m(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var y=r(38);r(70);function b(t){var e=t.entries,r=m(t,["entries"]);return l.a.createElement(l.a.Fragment,null,e.map((function(t){var e=Object(c.a)(t,2),n=e[0],a=e[1];return l.a.createElement(E,Object.assign({video:n,clips:a},r))})))}function E(t){var e=t.video,r=t.clips,n=t.setVideo,a=t.skipTo,o=t.editClip,i=t.deleteClip,s=Object(u.useState)(!1),f=Object(c.a)(s,2),p=f[0],h=f[1];return l.a.createElement("div",{className:"Playlist--video",key:e},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("span",{className:"Playlist--link",title:"Load this video",onClick:function(){return n(e)}},e)," ","(",r.length," clips)"),0!==r.length&&l.a.createElement("span",{className:"Playlist--video-expand",title:p?"Collapse":"Expand",onClick:function(){return h(!p)}},p?"\u25bc":"\u25b6")),p&&l.a.createElement("ul",null,r.map((function(t){return l.a.createElement("li",{className:"Playlist--clip",key:t[0]+"_"+t[1]},l.a.createElement("div",null,l.a.createElement(g,{video:e,moment:t[0],skipTo:a})," ","\u2013"," ",l.a.createElement(g,{video:e,moment:t[1],skipTo:a})),l.a.createElement("div",null,l.a.createElement("button",{className:"small",onClick:function(){return o(e,t)}},"Edit"),l.a.createElement("button",{className:"small",onClick:function(){return i(e,t)}},"Delete")))}))))}function g(t){var e=t.video,r=t.moment,n=t.skipTo;return l.a.createElement("span",{className:"Playlist--link",title:"Jump to this moment",onClick:function(){return n(e,r)}},Object(y.a)(r))}r(71);function O(t){var e=t.youtubeID,r=t.setStart,n=t.setEnd,a=t.clipStart,o=t.clipEnd,i=t.skipTo,c=t.done;return l.a.createElement("div",{className:"Cutter"},l.a.createElement("div",{className:"Cutter--clippers"},l.a.createElement("button",{onClick:r},"Start clip here"),l.a.createElement("div",{className:"Cutter--boundaries"},"[",a?l.a.createElement("span",{onClick:function(){return i(e,a)}},Object(y.a)(a)):"?",", ",o?Object(y.a)(o):"?","]"),l.a.createElement("button",{onClick:n},"End clip here")),l.a.createElement("div",{className:"Cutter--add"},l.a.createElement("button",{onClick:c,disabled:!e||!a||!o||a>=o},"Add to playlist")))}r(72);function w(){Object(d.a)("Editor");var t=Object(s.f)(),e=Object(s.g)().data,r=Object(u.useMemo)((function(){return Object(h.a)(e)}),[e]),n=Object(v.a)(r.data.title),o=Object(c.a)(n,2),f=o[0],m=o[1],y=Object(v.a)(r.data.author),E=Object(c.a)(y,2),g=E[0],w=E[1],k=Object(v.a)(),C=Object(c.a)(k,3),L=C[0],S=C[1],P=C[2],T=Object(u.useMemo)((function(){return function(t){var e=t.match(x);if(e&&e[2].length>=11)return e[2];return null}(L)}),[L]),_=Object(u.useRef)(null),M=Object(u.useState)(),F=Object(c.a)(M,2),G=F[0],I=F[1],J=Object(u.useState)(),A=Object(c.a)(J,2),D=A[0],R=A[1],V=Object(u.useState)(r.data.playlist),Y=Object(c.a)(V,2),B=Y[0],z=Y[1],U=Object(u.useMemo)((function(){return Object.entries(B)}),[B]),q=Object(u.useCallback)((function(){_.current&&I(_.current.getCurrentTime())}),[I]),H=Object(u.useCallback)((function(){_.current&&R(_.current.getCurrentTime())}),[R]),K=Object(u.useCallback)((function(){if(T&&G&&D)if(G>=D)alert("Clip can't start after its end");else{var t=N(B);t[T]||(t[T]=[]),t[T].push([G,D]),t[T]=t[T].sort((function(t,e){return t[0]-e[0]})),z(t),I(void 0),R(void 0)}}),[T,B,G,D]),Q=Object(u.useMemo)((function(){return Object(h.b)({version:"1.0.0",data:{title:f,author:g,playlist:B}})}),[f,g,B]);Object(u.useEffect)((function(){t.replace("/editor/"+Q)}),[t,Q]);var W=Object(u.useMemo)((function(){return window.location.protocol+"//"+window.location.host+"/#/compilation/"+Q}),[Q]),X=Object(u.useCallback)((function(t){P("https://youtube.com/watch?v="+t)}),[P]),Z=Object(u.useCallback)(function(){var t=i(a.a.mark((function t(e,r){var n,o,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return X(e),t.next=3,j((function(){return null===_.current}),1e3);case 3:null===(n=_.current)||void 0===n||n.seekTo(r),null===(o=null===(i=_.current)||void 0===i?void 0:i.getInternalPlayer())||void 0===o||o.playVideo();case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),[X]),$=Object(u.useCallback)((function(t,e){var r=N(B);r[t]=r[t].filter((function(t){return t[0]!==e[0]&&t[1]!==e[1]})),z(r)}),[B,z]),tt=Object(u.useCallback)((function(t,e){$(t,e),X(t),I(e[0]),R(e[1])}),[$,X,I,R]);return l.a.createElement("div",{className:"Editor"},l.a.createElement("div",{className:"Editor--video"},l.a.createElement("div",null,T?l.a.createElement("div",{className:"Editor--player"},l.a.createElement(p.a,{ref:_,controls:!0,width:"100%",height:"100%",url:"https://youtube.com/watch?v="+T,config:{youtube:{playerVars:{showinfo:0}}}})):l.a.createElement("div",{className:"Editor--video-placeholder"},l.a.createElement("div",null,"Enter a video first")),l.a.createElement("div",{className:"Editor--video-input"},l.a.createElement("input",Object.assign({type:"url"},S,{placeholder:"Paste a YouTube video URL here"})),!!L.length&&null===T&&l.a.createElement("span",null,"\xd7")),!!T&&l.a.createElement(O,{youtubeID:T,setStart:q,setEnd:H,clipStart:G,clipEnd:D,skipTo:Z,done:K}))),l.a.createElement("div",{className:"Editor--content"},l.a.createElement("div",{className:"Editor--content-part"},l.a.createElement("h2",null,"Details"),l.a.createElement("label",null,l.a.createElement("span",null,"Title"),l.a.createElement("input",Object.assign({type:"text"},m,{placeholder:"Compilation title"}))),l.a.createElement("label",null,l.a.createElement("span",null,"Author"),l.a.createElement("input",Object.assign({type:"text"},w,{placeholder:"Your name"})))),l.a.createElement("div",{className:"Editor--content-part Editor--share"},l.a.createElement("h2",null,"Share"),l.a.createElement("input",{type:"text",value:W,readOnly:!0})),l.a.createElement("div",{className:"Editor--content-part"},l.a.createElement("h2",null,"Playlist"),U.length?l.a.createElement(b,{entries:U,setVideo:X,skipTo:Z,editClip:tt,deleteClip:$}):l.a.createElement("div",{className:"Editor--playlist-empty"},"No clips added"))))}function j(t,e){return k.apply(this,arguments)}function k(){return(k=i(a.a.mark((function t(e,r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=!1,setTimeout((function(){n=!0}),r);case 2:return t.next=4,e();case 4:if(!t.sent){t.next=9;break}if(!n){t.next=7;break}return t.abrupt("break",9);case 7:t.next=2;break;case 9:return t.abrupt("return");case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var x=/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;function N(t){return JSON.parse(JSON.stringify(t))}}}]);
//# sourceMappingURL=4.ab4f1aa9.chunk.js.map