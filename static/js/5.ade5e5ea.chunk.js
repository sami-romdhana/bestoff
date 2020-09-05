(this.webpackJsonpbestoff=this.webpackJsonpbestoff||[]).push([[5],{36:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(n.useEffect)((function(){document.title=e?(t.replace?"":"Bestoff "+(t.hyphen?"- ":""))+e:"Bestoff"}),[e,t.hyphen,t.replace])}},37:function(e,t,a){"use strict";function n(e){return JSON.parse(atob(e.replace(/_/g,"/").replace(/-/g,"+")))}function r(e){return btoa(JSON.stringify(e)).replace(/\//g,"_").replace(/\+/g,"-")}a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}))},38:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(40),r=Object(n.memoize)((function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t<0)throw new Error("Negative number are not supported");return t<60&&!a.forceMinutes?Math.floor(t).toString().padStart(2,"0")+"s":t<3600?Math.floor(t/60).toString().padStart(2,"0")+"m"+e(t%60):Math.floor(t/3600)+"h"+e(t%3600,{forceMinutes:!0})}))},39:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(35),r=a(0);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(r.useState)(e),a=Object(n.a)(t,2),c=a[0],l=a[1],i=function(e){l(e.target.value)},o={value:c,onChange:i};return[c,o,l]}},68:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(35),r=a(0),c=a.n(r),l=a(1),i=a(41),o=a.n(i),u=a(38),s=a(37),d=a(36),m=a(39);a(68);function b(){Object(d.a)("Editor");var e=Object(l.f)(),t=Object(l.g)().data,a=Object(r.useMemo)((function(){return Object(s.a)(t)}),[t]),i=Object(m.a)(a.data.title),b=Object(n.a)(i,2),E=b[0],v=b[1],O=Object(m.a)(a.data.author),h=Object(n.a)(O,2),j=h[0],g=h[1],y=Object(m.a)(),k=Object(n.a)(y,3),C=k[0],N=k[1],w=k[2],S=Object(r.useMemo)((function(){return function(e){var t=e.match(f);if(t&&t[2].length>=11)return t[2];return null}(C)}),[C]),M=Object(r.useRef)(null),T=Object(r.useState)(),J=Object(n.a)(T,2),x=J[0],V=J[1],_=Object(r.useState)(),P=Object(n.a)(_,2),R=P[0],A=P[1],B=Object(r.useState)(a.data.playlist),L=Object(n.a)(B,2),U=L[0],Y=L[1],z=Object(r.useMemo)((function(){return Object.entries(U)}),[U]),D=Object(r.useCallback)((function(){M.current&&V(M.current.getCurrentTime())}),[V]),F=Object(r.useCallback)((function(){M.current&&A(M.current.getCurrentTime())}),[A]),I=Object(r.useCallback)((function(){if(S&&x&&R)if(x>=R)alert("Clip can't start after its end");else{var e,t=(e=U,JSON.parse(JSON.stringify(e)));t[S]||(t[S]=[]),t[S].push([x,R]),Y(t),V(void 0),A(void 0)}}),[S,U,x,R]),q=Object(r.useMemo)((function(){return Object(s.b)({version:"1.0.0",data:{title:E,author:j,playlist:U}})}),[E,j,U]);Object(r.useEffect)((function(){e.replace("/editor/"+q)}),[e,q]);var G=Object(r.useMemo)((function(){return window.location.protocol+"//"+window.location.host+"/#/compilation/"+q}),[q]),H=Object(r.useCallback)((function(){navigator.clipboard.writeText(G)}),[G]),K=Object(r.useCallback)((function(e){w("https://youtube.com/watch?v="+e)}),[w]),Q=Object(r.useCallback)((function(e){var t,a,n;null===(t=M.current)||void 0===t||t.seekTo(e),null===(a=null===(n=M.current)||void 0===n?void 0:n.getInternalPlayer())||void 0===a||a.playVideo()}),[]);return c.a.createElement("div",{className:"Editor"},c.a.createElement("div",{className:"Editor--video"},c.a.createElement("div",null,c.a.createElement("div",{className:"Editor--video-input"},c.a.createElement("input",Object.assign({type:"url"},N,{placeholder:"Paste a YouTube video URL here"})),!!C.length&&null===S&&c.a.createElement("span",null,"\xd7")),S?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"Editor--player"},c.a.createElement(o.a,{ref:M,controls:!0,width:"100%",height:"100%",url:"https://youtube.com/watch?v="+S,config:{youtube:{playerVars:{showinfo:0}}}})),c.a.createElement("div",{className:"Editor--clippers"},c.a.createElement("button",{onClick:D},"Start clip here"),c.a.createElement("div",{className:"Editor--boundaries"},"[",x?c.a.createElement("span",{onClick:function(){return Q(x)}},Object(u.a)(x)):"?",", ",R?Object(u.a)(R):"?","]"),c.a.createElement("button",{onClick:F},"End clip here")),c.a.createElement("div",{className:"Editor--add"},c.a.createElement("button",{onClick:I},"Add to playlist"))):c.a.createElement("div",{className:"Editor--video-placeholder"},c.a.createElement("div",null,"Enter a video first")))),c.a.createElement("div",{className:"Editor--content"},c.a.createElement("div",{className:"Editor--content-part"},c.a.createElement("h2",null,"Details"),c.a.createElement("label",null,c.a.createElement("span",null,"Title"),c.a.createElement("input",Object.assign({type:"text"},v,{placeholder:"Compilation title"}))),c.a.createElement("label",null,c.a.createElement("span",null,"Author"),c.a.createElement("input",Object.assign({type:"text"},g,{placeholder:"Your name"})))),c.a.createElement("div",{className:"Editor--content-part Editor--share"},c.a.createElement("h2",null,"Share"),c.a.createElement("input",{type:"text",value:G})," ",c.a.createElement("div",null,c.a.createElement("button",{onClick:H},"Copy URL")," ",c.a.createElement("a",{href:G,target:"_blank",rel:"noopener noreferrer"},"Open"))),c.a.createElement("div",{className:"Editor--content-part"},c.a.createElement("h2",null,"Playlist"),z.length?z.map((function(e){var t=Object(n.a)(e,2),a=t[0],r=t[1];return c.a.createElement(p,{video:a,clips:r,setVideo:K,skipTo:Q})})):c.a.createElement("div",{className:"Editor--playlist-empty"},"No clips added"))))}function p(e){var t=e.video,a=e.clips,l=e.setVideo,i=e.skipTo,o=Object(r.useState)(!1),s=Object(n.a)(o,2),d=s[0],m=s[1];return c.a.createElement("div",{className:"Editor--playlist-video",key:t},c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("pre",{onClick:function(){return l(t)}},t)," (",a.length," ","clips)"),c.a.createElement("button",{onClick:function(){return m(!d)},disabled:0===a.length},d?"-":"+")),d&&c.a.createElement("ul",null,a.map((function(e){return c.a.createElement("li",{className:"Editor--playlist-clip",key:e[0]+"_"+e[1]},c.a.createElement("pre",{onClick:function(){return i(e[0])}},Object(u.a)(e[0]))," ","-"," ",c.a.createElement("pre",{onClick:function(){return i(e[1])}},Object(u.a)(e[1])))}))))}var f=/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/}}]);
//# sourceMappingURL=5.ade5e5ea.chunk.js.map