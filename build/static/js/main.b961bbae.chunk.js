(this["webpackJsonpsample-customization-minimizable-web-chat"]=this["webpackJsonpsample-customization-minimizable-web-chat"]||[]).push([[0],{1019:function(e,t){},1020:function(e,t){},1026:function(e,t){},140:function(e,t){},1701:function(e,t){},1754:function(e,t){},1756:function(e,t){},1761:function(e,t){},1762:function(e,t){},1763:function(e,t){},1764:function(e,t){},1768:function(e,t){},1882:function(e,t,n){},1883:function(e,t,n){},1884:function(e,t,n){},1885:function(e,t,n){},1886:function(e,t,n){},1887:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(108),c=n.n(r),i=(n(802),n(1)),l=n(2),u=n(4),s=n(5),p=n(34),g=n.n(p),m=n(199),f=n(162),A=n(18),b=n.n(A),d=n(156),x=n.n(d),w=n(1914),h=n(1912),F=n(1915),B=n(1916),O=(n(1882),n(1883),function(e){var t=e.className,n=e.onFetchToken,r=e.store,c=e.token,i=Object(a.useMemo)((function(){return Object(d.createDirectLine)({token:c})}),[c]),l=Object(a.useMemo)((function(){return Object(d.createStyleSet)({userAvatarBackgroundColor:"rgb(105,105,105)",botAvatarBackgroundColor:"rgba(193, 52, 52, 0.93)",bubbleBackground:"#E0E0E0",bubbleFromUserBackground:"#141726",botAvatarInitials:"Bot",userAvatarInitials:"User",backgroundColor:"#f5f5f5",bubbleBorderRadius:"20px 20px 20px 20px",bubbleFromUserBorderRadius:"20px 20px 20px 20px",bubbleTextColor:"#070707",bubbleFromUserTextColor:"white",suggestedActionBorderColor:"#D4B678",suggestedActionBorderRadius:"4px",suggestedActionBackground:"#D4B678",suggestedActionDisabledTextColor:"white",suggestedActionTextColor:"#ffffff",sendBoxTextColor:"#000000",avatarSize:40})}),[]),u=Object(a.useState)("English"),s=Object(f.a)(u,2),p=s[0],A=s[1];return Object(a.useEffect)((function(){n()}),[n]),console.log("response",p),c?o.a.createElement(x.a,{className:"".concat(t||""," web-chat ").concat("English"!==p?"roula":""),directLine:i,store:r,styleSet:l,cardActionMiddleware:function(){return function(e){return function(){var t=Object(m.a)(g.a.mark((function t(n){var a,o,r,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.cardAction,o=n.getSignInUrl,r=a.type,c=a.value,"imBack"===r&&"English"===c?(console.log("openUrl: ",r),console.log("supportteam: ",c),A("English")):"imBack"===r&&"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"===c&&(console.log("openUrl: ",r),console.log("supportteam: ",c),A("\u0627\u0644\u0639\u0631\u0628\u064a\u0629")),t.abrupt("return",e({cardAction:a,getSignInUrl:o}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}}):o.a.createElement("div",{className:"".concat(t||""," connect-spinner")},o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"icon"},o.a.createElement("span",{className:"ms-Icon ms-Icon--Robot"})),o.a.createElement("p",null,"Please wait while we are connecting.")))}),C="data:image/png;base64,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",D=(n(1884),n(1885),Object(h.a)((function(e){return{root:{width:"100%"},title1:{margin:"0px 0px 0px 20px",fontFamily:"Proxima Nova, sans-serif",fontSize:"27px",color:"#FFFFFF",fontWeight:"700"},title2:{margin:"5px 0px 5px 20px",fontFamily:"Proxima Nova, sans-serif",fontSize:"15px",color:"#FFFFFF",fontWeight:"200"},emptyMainTypography:{flexGrow:1},headerIconButton:{padding:"10px 10px 10px 10px"},avatarIcon:{width:"55px",height:"55px",margin:"0px 10px 0px 10px"},messageCloud:{width:"80px",height:"80px",position:"absolute",zIndex:"1500",bottom:"50px",right:"50px"},messageCloudHeader:{margin:"15px 0px 10px 40px ",width:"60px",height:"60px"}}}))),j=function(e){var t=D(),n=Object(a.useMemo)((function(){return Object(d.createStore)({},(function(e){var t=e.dispatch;return function(e){return function(n){return"DIRECT_LINE/CONNECT_FULFILLED"===n.type&&t({type:"WEB_CHAT/SEND_EVENT",payload:{name:"webchat/join",value:{language:"window.navigator.language"}}}),e(n)}}}))}),[]),r=Object(a.useState)(!1),c=Object(f.a)(r,2),i=c[0],l=c[1],u=Object(a.useState)(!0),s=Object(f.a)(u,2),p=s[0],A=s[1],x=Object(a.useState)(),h=Object(f.a)(x,2),j=h[0],E=h[1],Y=Object(a.useCallback)(Object(m.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=8;break}return e.next=3,fetch("https://webchat.botframework.com/api/tokens",{method:"GET",headers:{Authorization:"BotConnector KxH5mTB3KH0.GOS2JFASIiLQlZttpBQUsxBmHjn-SbtS73Q7gKlh8ZA"}});case 3:return t=e.sent,e.next=6,t.text();case 6:n=e.sent,E(n.substring(1,n.length-1));case 8:case"end":return e.stop()}}),e)}))),[E,j]),N=Object(a.useCallback)(Object(m.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(!0),A(!1);case 2:case"end":return e.stop()}}),e)}))),[A]),M=Object(a.useCallback)((function(){A(!0)}),[A]);return o.a.createElement("div",{className:"minimizable-web-chat"},p&&o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:C,alt:"",className:t.messageCloud,onClick:N})),i&&o.a.createElement("div",{className:b()("chat-box right",p?"hide":"")},o.a.createElement("header",null,o.a.createElement("div",null,o.a.createElement(F.a,{onClick:M,style:{margin:"10px 10px 0px 0px",padding:"0px 0px 0px 0px",float:"right"}},o.a.createElement(B.a,{style:{color:"#ffffff",fontSize:"24px"}}))),o.a.createElement("div",null,o.a.createElement("img",{src:C,alt:"",className:t.messageCloudHeader})),o.a.createElement(w.a,{className:t.title1},"Wael"),o.a.createElement(w.a,{className:t.title2},"Your MOIAT Digital Assistant"),o.a.createElement("div",{style:{height:"20px",background:"#f5f5f5",bottom:"0px",marginTop:"35px",borderRadius:"20px 20px 0px 0px"}})),o.a.createElement(O,{className:"react-web-chat",onFetchToken:Y,store:n,token:j})))},E=n.p+"static/media/MoIAT.60c24bf4.png",Y=(n(1886),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("img",{className:"bg",alt:"product background",src:E}),o.a.createElement(j,null))}}]),n}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},206:function(e,t){},783:function(e,t){},785:function(e,t){},786:function(e,t){},787:function(e,t){},788:function(e,t){},789:function(e,t){},802:function(e,t,n){},966:function(e,t){},968:function(e,t){}},[[1887,1,2]]]);
//# sourceMappingURL=main.b961bbae.chunk.js.map