(this["webpackJsonpong-proyect"]=this["webpackJsonpong-proyect"]||[]).push([[9],{678:function(e,t,n){},679:function(e,t,n){"use strict";var r=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(36)),a=n(0),o=(0,c.default)((0,a.jsx)("path",{d:"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"}),"FormatQuote");t.default=o},680:function(e,t,n){"use strict";var r=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(36)),a=n(0),o=(0,c.default)((0,a.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");t.default=o},681:function(e,t,n){e.exports={commentsContainer:"NewsComments_commentsContainer__T7VE7",skeletonContainer:"NewsComments_skeletonContainer__2iiHw"}},707:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n(1),a=n(13),o=n(4),i=n.n(o),s=n(17),u=n.n(s),l=function(){var e=Object(a.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u()("http://ongapi.alkemy.org/api/comments");case 3:return t=e.sent,e.abrupt("return",t.data.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),d=n(525),j=n(162),b=n(589),p=n(679),h=n.n(p),x=n(680),f=n.n(x),m=(n(678),n(21)),v=n(0),O=function(e){var t=e.comment;Object(m.f)(t.created_at);return Object(v.jsxs)(d.a,{className:"comments-card__container",children:[Object(v.jsx)(d.a,{children:Object(v.jsx)(h.a,{sx:{fontSize:"80px",color:"#28527A"}})}),Object(v.jsx)(d.a,{children:Object(v.jsx)(j.a,{component:"p",style:{textAlign:"center",fontSize:"1.1rem"},variant:"p",children:t.text})}),Object(v.jsx)(d.a,{children:Object(v.jsx)(b.a,{alt:"imagen comentario",src:t.image,sx:{width:60,height:60}})}),Object(v.jsxs)(d.a,{children:[Object(v.jsx)(f.a,{sx:{fontSize:"20px",color:"#28527A"}}),Object(v.jsx)(f.a,{sx:{fontSize:"20px",color:"#28527A"}}),Object(v.jsx)(f.a,{sx:{fontSize:"20px",color:"#28527A"}}),Object(v.jsx)(f.a,{sx:{fontSize:"20px",color:"#28527A"}}),Object(v.jsx)(f.a,{sx:{fontSize:"20px",color:"#28527A"}})]})]})},g=n(681),w=n.n(g),y=function(e){var t,n=e.type,r=void 0===n?"text":n,c=e.width,a=void 0===c?"100%":c,o=e.height,i=void 0===o?"1rem":o,s=e.color,u=void 0===s?"#c1c1c1":s;return"text"===r?t=Object(v.jsx)(d.a,{sx:{marginBottom:"10px",marginTop:"10px",backgroundColor:u,width:a,height:i}}):"avatar"===r?t=Object(v.jsx)(d.a,{sx:{marginBottom:"10px",backgroundColor:u,width:a,height:i,borderRadius:"50%"}}):"rectangle"===r&&(t=Object(v.jsx)(d.a,{sx:{marginBottom:"10px",backgroundColor:u,width:a,height:i}})),t},k=n(3),S=n(5),C=n(2),_=n(42),z=n(50),A=n(563),M=n(199),B=n(7),N=n(11),R=["component","direction","spacing","divider","children"];function L(e,t){var n=c.Children.toArray(e).filter(Boolean);return n.reduce((function(e,r,a){return e.push(r),a<n.length-1&&e.push(c.cloneElement(t,{key:"separator-".concat(a)})),e}),[])}var E=Object(B.a)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,r=Object(C.a)({display:"flex"},Object(_.b)({theme:n},Object(_.d)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var c=Object(z.a)(n),a=Object.keys(n.breakpoints.values).reduce((function(e,n){return null==t.spacing[n]&&null==t.direction[n]||(e[n]=!0),e}),{}),o=Object(_.d)({values:t.direction,base:a}),i=Object(_.d)({values:t.spacing,base:a});r=Object(M.a)(r,Object(_.b)({theme:n},i,(function(e,n){return{"& > :not(style) + :not(style)":Object(k.a)({margin:0},"margin".concat((r=n?o[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),Object(z.d)(c,e))};var r})))}return r})),T=c.forwardRef((function(e,t){var n=Object(N.a)({props:e,name:"MuiStack"}),r=Object(A.a)(n),c=r.component,a=void 0===c?"div":c,o=r.direction,i=void 0===o?"column":o,s=r.spacing,u=void 0===s?0:s,l=r.divider,d=r.children,j=Object(S.a)(r,R),b={direction:i,spacing:u};return Object(v.jsx)(E,Object(C.a)({as:a,ownerState:b,ref:t},j,{children:l?L(d,l):d}))})),V=function(){return Object(v.jsxs)(T,{spacing:1,style:{maxWidth:"300px"},children:[Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",gap:"20px"},children:[Object(v.jsx)(y,{height:40,type:"avatar",width:40}),Object(v.jsx)(y,{height:20,variant:"text",width:200})]}),Object(v.jsx)(y,{height:118,variant:"rectangular",width:300})]})};t.default=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(!1),i=Object(r.a)(o,2),s=i[0],u=i[1];return Object(c.useEffect)((function(){u(!0),l().then((function(e){a(e.slice(e.length-3,e.length)),u(!1)})).catch((function(e){a(null)}))}),[]),Object(v.jsx)("div",{className:w.a.commentsContainer,children:s?Object(v.jsxs)("div",{className:w.a.skeletonContainer,children:[Object(v.jsx)(V,{}),Object(v.jsx)(V,{})]}):n.map((function(e){return Object(v.jsx)(O,{comment:e},e.id)}))})}}}]);
//# sourceMappingURL=9.0a25c1b7.chunk.js.map