(this.webpackJsonpbestoff=this.webpackJsonpbestoff||[]).push([[4],{37:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(0);function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(r.useEffect)((function(){document.title=t?(e.replace?"":"Bestoff "+(e.hyphen?"- ":""))+t:"Bestoff"}),[t,e.hyphen,e.replace])}},38:function(t,e,n){"use strict";function r(t){return JSON.parse(atob(t.replace(/_/g,"/").replace(/-/g,"+")))}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var i=function(t,e){return e.toFixed?Number(e.toFixed(3)):e};function c(t){return btoa(JSON.stringify(t,i)).replace(/\//g,"_").replace(/\+/g,"-")}},40:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(42),i=Object(r.memoize)((function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e<0)throw new Error("Negative number are not supported");return e<60&&!n.forceMinutes?Math.floor(e).toString().padStart(2,"0")+"s":e<3600?Math.floor(e/60).toString().padStart(2,"0")+"m"+t(e%60):Math.floor(e/3600)+"h"+t(e%3600,{forceMinutes:!0})}))},41:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(36),i=n(0);function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=Object(i.useState)(t),n=Object(r.a)(e,2),c=n[0],o=n[1],a=function(t){o(t.target.value)},s={value:c,onChange:a};return[c,s,o]}},70:function(t,e,n){t.exports=n(71)},71:function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof b?e:b,c=Object.create(i.prototype),o=new L(r||[]);return c._invoke=function(t,e,n){var r=h;return function(i,c){if(r===f)throw new Error("Generator is already running");if(r===j){if("throw"===i)throw c;return _()}for(n.method=i,n.arg=c;;){var o=n.delegate;if(o){var a=k(o,n);if(a){if(a===p)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=j,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?j:d,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=j,n.method="throw",n.arg=s.arg)}}}(t,n,o),c}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",j="completed",p={};function b(){}function v(){}function O(){}var m={};m[c]=function(){return this};var x=Object.getPrototypeOf,y=x&&x(x(S([])));y&&y!==n&&r.call(y,c)&&(m=y);var g=O.prototype=b.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(i,c,o,a){var s=l(t[i],t,c);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,o,a)}),(function(t){n("throw",t,o,a)})):e.resolve(h).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,a)}))}a(s.arg)}var i;this._invoke=function(t,r){function c(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(c,c):c()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var c=i.arg;return c?c.done?(n[t.resultName]=c.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function S(t){if(t){var n=t[c];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:_}}function _(){return{value:e,done:!0}}return v.prototype=g.constructor=O,O.constructor=v,v.displayName=s(O,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,s(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(E.prototype),E.prototype[o]=function(){return this},t.AsyncIterator=E,t.async=function(e,n,r,i,c){void 0===c&&(c=Promise);var o=new E(u(e,n,r,i),c);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(g),s(g,a,"Generator"),g[c]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var c=this.tryEntries.length-1;c>=0;--c){var o=this.tryEntries[c],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var c=i;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=t,o.arg=e,c?(this.method="next",this.next=c.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},72:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return E}));var r=n(39),i=n(70),c=n.n(i);function o(t,e,n,r,i,c,o){try{var a=t[c](o),s=a.value}catch(u){return void n(u)}a.done?e(s):Promise.resolve(s).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var c=t.apply(e,n);function a(t){o(c,r,i,a,s,"next",t)}function s(t){o(c,r,i,a,s,"throw",t)}a(void 0)}))}}var s=n(36),u=n(1),l=n(0),h=n(2),d=n(43),f=n.n(d),j=n(38),p=n(37),b=n(41),v=Object(l.createContext)({youtubeID:null,playlist:{},clipStart:void 0,clipEnd:void 0,setVideo:function(){},skipTo:function(){},setStart:function(){},setEnd:function(){},done:function(){},editClip:function(){},deleteClip:function(){}}),O=n(40);n(72);function m(t){return Object(u.jsx)("div",{className:"Icon",children:Object(u.jsx)("div",{children:Object(u.jsx)("i",{className:"icon-"+t.name})})})}n(73);function x(){var t=Object(l.useContext)(v).playlist,e=Object.entries(t);return Object(u.jsx)(u.Fragment,{children:e.map((function(t){var e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(u.jsx)(y,{video:n,clips:r},n)}))})}function y(t){var e=t.video,n=t.clips,r=Object(l.useContext)(v),i=r.setVideo,c=r.editClip,o=r.deleteClip,a=Object(l.useState)(!1),h=Object(s.a)(a,2),d=h[0],f=h[1];return Object(u.jsxs)("div",{className:"Playlist--video",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"Playlist--video-expand",title:d?"Collapse":"Expand",onClick:function(){return f(!d)},disabled:0===n.length,children:Object(u.jsx)(m,{name:d?"chevron-down":"chevron-right"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"Playlist--link",title:"Load this video",onClick:function(){return i(e)},children:e})," ","(",n.length," clips)"]})]}),d&&Object(u.jsx)("ul",{children:n.map((function(t){return Object(u.jsxs)("li",{className:"Playlist--clip",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{video:e,moment:t[0]})," \u2013"," ",Object(u.jsx)(g,{video:e,moment:t[1]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"small",onClick:function(){return c(e,t)},title:"Edit",children:Object(u.jsx)(m,{name:"edit"})}),Object(u.jsx)("button",{className:"small",onClick:function(){return o(e,t)},title:"Delete",children:Object(u.jsx)(m,{name:"delete"})})]})]},t[0]+"_"+t[1])}))})]},e)}function g(t){var e=t.video,n=t.moment,r=Object(l.useContext)(v).skipTo;return Object(u.jsx)("span",{className:"Playlist--link",title:"Jump to this moment",onClick:function(){return r(e,n)},children:Object(O.a)(n)})}n(74);function w(){var t=Object(l.useContext)(v),e=t.youtubeID,n=t.setStart,r=t.setEnd,i=t.clipStart,c=t.clipEnd,o=t.skipTo,a=t.done;return e?Object(u.jsxs)("div",{className:"Cutter",children:[Object(u.jsxs)("div",{className:"Cutter--clippers",children:[Object(u.jsx)("button",{className:"global--button",onClick:n,children:"Start clip here"}),Object(u.jsxs)("div",{className:"Cutter--boundaries",children:["[",i?Object(u.jsx)("span",{onClick:function(){return o(e,i)},children:Object(O.a)(i)}):"?",", ",c?Object(O.a)(c):"?","]"]}),Object(u.jsx)("button",{className:"global--button",onClick:r,children:"End clip here"})]}),Object(u.jsx)("div",{className:"Cutter--add",children:Object(u.jsx)("button",{className:"global--button",onClick:a,disabled:!e||!i||!c||i>=c,children:"Add to playlist"})})]}):null}n(75);function E(){Object(p.a)("Editor");var t=Object(h.f)(),e=Object(h.g)().data,n=Object(l.useMemo)((function(){return Object(j.a)(e)}),[e]),i=Object(b.a)(n.data.title),o=Object(s.a)(i,2),d=o[0],O=o[1],y=Object(b.a)(n.data.author),g=Object(s.a)(y,2),E=g[0],N=g[1],S=Object(b.a)(),_=Object(s.a)(S,3),P=_[0],T=_[1],M=_[2],F=Object(l.useMemo)((function(){return function(t){var e=t.match(C);if(e&&e[2].length>=11)return e[2];return null}(P)}),[P]),G=Object(l.useRef)(null),I=Object(l.useState)(),J=Object(s.a)(I,2),D=J[0],R=J[1],V=Object(l.useState)(),A=Object(s.a)(V,2),Y=A[0],B=A[1],U=Object(l.useState)(n.data.playlist),z=Object(s.a)(U,2),q=z[0],H=z[1],K=Object(l.useMemo)((function(){return Object.entries(q)}),[q]),Q=Object(l.useCallback)((function(){G.current&&R(G.current.getCurrentTime())}),[R]),W=Object(l.useCallback)((function(){G.current&&B(G.current.getCurrentTime())}),[B]),X=Object(l.useCallback)((function(){if(F&&D&&Y)if(D>=Y)alert("Clip can't start after its end");else{var t=L(q);t[F]||(t[F]=[]),t[F].push([D,Y]),t[F]=t[F].sort((function(t,e){return t[0]-e[0]})),H(t),R(void 0),B(void 0)}}),[F,q,D,Y]),Z=Object(l.useMemo)((function(){return Object(j.b)({version:"1.0.0",data:{title:d,author:E,playlist:q}})}),[d,E,q]);Object(l.useEffect)((function(){t.replace("/editor/"+Z)}),[t,Z]);var $=Object(l.useMemo)((function(){return window.location.protocol+"//"+window.location.host+"/#/compilation/"+Z}),[Z]),tt=Object(l.useCallback)((function(t){M("https://youtube.com/watch?v="+t)}),[M]),et=Object(l.useCallback)(function(){var t=a(c.a.mark((function t(e,n){var r,i,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return tt(e),t.next=3,k((function(){return null===G.current}),1e3);case 3:null===(r=G.current)||void 0===r||r.seekTo(n),null===(i=G.current)||void 0===i||null===(o=i.getInternalPlayer())||void 0===o||o.playVideo();case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),[tt]),nt=Object(l.useCallback)((function(t,e){var n=L(q);n[t]=n[t].filter((function(t){return t[0]!==e[0]&&t[1]!==e[1]})),H(n)}),[q,H]),rt=Object(l.useCallback)((function(t,e){nt(t,e),tt(t),R(e[0]),B(e[1])}),[nt,tt,R,B]),it=Object(l.useCallback)((function(){navigator.clipboard.writeText($)}),[$]);return Object(u.jsx)(v.Provider,{value:{youtubeID:F,playlist:q,clipStart:D,clipEnd:Y,setVideo:tt,skipTo:et,setStart:Q,setEnd:W,done:X,editClip:rt,deleteClip:nt},children:Object(u.jsxs)("div",{className:"Editor",children:[Object(u.jsx)("div",{className:"Editor--video",children:Object(u.jsxs)("div",{children:[F?Object(u.jsx)("div",{className:"Editor--player",children:Object(u.jsx)(f.a,{ref:G,controls:!0,width:"100%",height:"100%",url:"https://youtube.com/watch?v="+F,config:{youtube:{playerVars:{showinfo:0}}}})}):Object(u.jsx)("div",{className:"Editor--video-placeholder",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"Enter a video first"}),Object(u.jsx)("div",{children:Object(u.jsx)(m,{name:"arrow-down"})})]})}),Object(u.jsxs)("div",{className:"Editor--video-input",children:[Object(u.jsx)("input",Object(r.a)(Object(r.a)({type:"url"},T),{},{placeholder:"Paste a YouTube video URL here"})),!!P.length&&null===F&&Object(u.jsx)("span",{children:"\xd7"})]}),!!F&&Object(u.jsx)(w,{})]})}),Object(u.jsxs)("div",{className:"Editor--content",children:[Object(u.jsxs)("div",{className:"Editor--content-part",children:[Object(u.jsxs)("h2",{children:[Object(u.jsx)("span",{children:Object(u.jsx)(m,{name:"circle-information"})}),Object(u.jsx)("span",{children:"Details"})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Title"}),Object(u.jsx)("input",Object(r.a)(Object(r.a)({type:"text"},O),{},{placeholder:"Compilation title"}))]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Author"}),Object(u.jsx)("input",Object(r.a)(Object(r.a)({type:"text"},N),{},{placeholder:"Your name"}))]})]}),Object(u.jsxs)("div",{className:"Editor--content-part Editor--share",children:[Object(u.jsxs)("h2",{children:[Object(u.jsx)("span",{children:Object(u.jsx)(m,{name:"link"})}),Object(u.jsx)("span",{children:"Share"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text",value:$,readOnly:!0}),Object(u.jsx)("button",{onClick:it,title:"Copy URL",children:Object(u.jsx)(m,{name:"copy"})}),Object(u.jsx)("a",{href:$,target:"_blank",rel:"noopener noreferrer",title:"Open compilation in a new tab",children:Object(u.jsx)(m,{name:"external-link"})})]})]}),Object(u.jsxs)("div",{className:"Editor--content-part",children:[Object(u.jsxs)("h2",{children:[Object(u.jsx)("span",{children:Object(u.jsx)(m,{name:"list"})}),Object(u.jsx)("span",{children:"Playlist"})]}),K.length?Object(u.jsx)(x,{}):Object(u.jsx)("div",{className:"Editor--playlist-empty",children:"No clips added"})]})]})]})})}function k(t,e){return N.apply(this,arguments)}function N(){return(N=a(c.a.mark((function t(e,n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=!1,setTimeout((function(){r=!0}),n);case 2:return t.next=4,e();case 4:if(!t.sent){t.next=9;break}if(!r){t.next=7;break}return t.abrupt("break",9);case 7:t.next=2;break;case 9:return t.abrupt("return");case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var C=/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;function L(t){return JSON.parse(JSON.stringify(t))}}}]);
//# sourceMappingURL=4.fdd5f058.chunk.js.map