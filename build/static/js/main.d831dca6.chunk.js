(this["webpackJsonpsample-customization-minimizable-web-chat"]=this["webpackJsonpsample-customization-minimizable-web-chat"]||[]).push([[0],{1023:function(e,t){},1024:function(e,t){},1030:function(e,t){},141:function(e,t){},1705:function(e,t){},1758:function(e,t){},1760:function(e,t){},1765:function(e,t){},1766:function(e,t){},1767:function(e,t){},1768:function(e,t){},1772:function(e,t){},1886:function(e,t,a){},1887:function(e,t,a){},1888:function(e,t,a){},1889:function(e,t,a){},1890:function(e,t,a){},1891:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(86),r=a.n(o),i=(a(806),a(1)),s=a(2),l=a(4),u=a(5),m=a(39),f=a.n(m),b=a(419),p=a(164),d=a(18),g=a.n(d),h=a(138),x=a.n(h),E=a(1918),O=a(1922),j=a(1916),v=a(1920),I=a(1921),k=a(1919),w=(a(1886),a(1887),function(e){var t=e.className,a=e.onFetchToken,o=e.store,r=e.token,i=Object(n.useMemo)((function(){return Object(h.createDirectLine)({token:r})}),[r]),s=Object(n.useMemo)((function(){return Object(h.createStyleSet)({userAvatarBackgroundColor:"rgb(105,105,105)",botAvatarBackgroundColor:"rgba(193, 52, 52, 0.93)",bubbleBackground:"#EEEEEE",bubbleFromUserBackground:"#245BB2",botAvatarInitials:"Bot",userAvatarInitials:"User",backgroundColor:"#f5f5f5",bubbleFromUserBorderRadius:"15px 15px 2px 15px",bubbleBorderRadius:"15px 15px 15px 2px",bubbleTextColor:"#070707",bubbleFromUserTextColor:"white",suggestedActionBorderColor:"#245BB2",suggestedActionBorderRadius:"8px",suggestedActionBackground:"#245BB2",suggestedActionDisabledTextColor:"white",suggestedActionTextColor:"#ffffff",sendBoxTextColor:"black",avatarSize:40})}),[]);return Object(n.useEffect)((function(){a()}),[a]),r?c.a.createElement(x.a,{className:"".concat(t||""," web-chat "),directLine:i,store:o,styleSet:s}):c.a.createElement("div",{className:"".concat(t||""," connect-spinner")},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"icon"},c.a.createElement("span",{className:"ms-Icon ms-Icon--Robot"})),c.a.createElement("p",null,"Please wait while we are connecting.")))}),N=a.p+"static/media/avatar.c916259a.png",B=(a(1888),a(1889),Object(j.a)((function(e){return{root:{width:"100%"},title1:{margin:"0px 0px 0px 20px",fontFamily:"Inter, sans-serif",fontSize:"27px",color:"#fffff",fontWeight:"700"},title2:{margin:"5px 0px 5px 20px",fontFamily:"Inter, sans-serif",fontSize:"15px",color:"#b8b8b8",fontWeight:"400"},emptyMainTypography:{flexGrow:1},headerIconButton:{padding:"10px 10px 10px 10px"},avatarIcon:{width:"55px",height:"55px",margin:"0px 10px 0px 10px"}}}))),C=function(e){var t=B(),a=Object(n.useMemo)((function(){return Object(h.createStore)({},(function(e){var t=e.dispatch;return function(e){return function(a){return"DIRECT_LINE/CONNECT_FULFILLED"===a.type?t({type:"WEB_CHAT/SEND_EVENT",payload:{name:"webchat/join",value:{language:window.navigator.language}}}):"DIRECT_LINE/INCOMING_ACTIVITY"===a.type&&"bot"===a.payload.activity.from.role&&y(!0),e(a)}}}))}),[]),o=Object(n.useMemo)((function(){return Object(h.createStyleSet)({backgroundColor:"Transparent"})}),[]),r=Object(n.useState)(!1),i=Object(p.a)(r,2),s=i[0],l=i[1],u=Object(n.useState)(!0),m=Object(p.a)(u,2),d=m[0],x=m[1],j=Object(n.useState)(!1),C=Object(p.a)(j,2),T=C[0],y=C[1],S=Object(n.useState)("right"),A=Object(p.a)(S,2),F=A[0],M=A[1],z=Object(n.useState)(),L=Object(p.a)(z,2),D=L[0],R=L[1],U=Object(n.useCallback)(Object(b.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D){e.next=8;break}return e.next=3,fetch("https://webchat.botframework.com/api/tokens",{method:"GET",headers:{Authorization:"BotConnector KxH5mTB3KH0.GOS2JFASIiLQlZttpBQUsxBmHjn-SbtS73Q7gKlh8ZA"}});case 3:return t=e.sent,e.next=6,t.text();case 6:a=e.sent,R(a.substring(1,a.length-1));case 8:case"end":return e.stop()}}),e)}))),[R,D]),W=Object(n.useCallback)(Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(!0),x(!1),y(!1);case 3:case"end":return e.stop()}}),e)}))),[x,y]),_=Object(n.useCallback)((function(){x(!0),y(!1)}),[x,y]),G=Object(n.useCallback)((function(){M("left"===F?"right":"left")}),[M,F]);return c.a.createElement("div",{className:"minimizable-web-chat"},d&&c.a.createElement("button",{className:"maximize",onClick:W},c.a.createElement("span",{className:D?"ms-Icon ms-Icon--MessageFill":"ms-Icon ms-Icon--Message"}),T&&c.a.createElement("span",{className:"ms-Icon ms-Icon--CircleShapeSolid red-dot"})),s&&c.a.createElement("div",{className:g()("left"===F?"chat-box left":"chat-box right",d?"hide":"")},c.a.createElement("header",null,c.a.createElement(O.a,{style:{padding:"0px"}},c.a.createElement("div",null,c.a.createElement(E.a,{className:t.title1},"Wael"),c.a.createElement(E.a,{className:t.title2},"Your MoIAT digital assistant")),c.a.createElement(E.a,{className:t.emptyMainTypography}),c.a.createElement(k.a,{onClick:_,className:t.headerIconButton},c.a.createElement(v.a,{className:t.groupTitleLeftIcon})),c.a.createElement(k.a,{onClick:G,className:t.headerIconButton},c.a.createElement(I.a,{className:t.groupTitleLeftIcon})),c.a.createElement("img",{src:N,alt:"",className:t.avatarIcon}))),c.a.createElement(w,{className:"react-web-chat",onFetchToken:U,store:a,styleSet:o,token:D})))},T=a.p+"static/media/MoIAT.98d6c191.png",y=(a(1890),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("img",{alt:"product background",src:T}),c.a.createElement(C,null))}}]),a}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},206:function(e,t){},784:function(e,t){},786:function(e,t){},787:function(e,t){},788:function(e,t){},789:function(e,t){},790:function(e,t){},806:function(e,t,a){},970:function(e,t){},972:function(e,t){}},[[1891,1,2]]]);
//# sourceMappingURL=main.d831dca6.chunk.js.map