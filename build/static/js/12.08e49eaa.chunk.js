(this["webpackJsonpong-proyect"]=this["webpackJsonpong-proyect"]||[]).push([[12],{618:function(e,t,r){"use strict";r(1);var a=r(620),n=r.n(a),i=r(162),c=r(39),o=r(0);t.a=function(e){var t=e.titleText,r=e.titleTextColor,a=void 0===r?"black":r,s=e.titleMuiVariant,l=void 0===s?"h2":s,d=e.imageUrl,b=e.bckgColor,j=void 0===b?"#FAFA88":b,u=e.bckgOpacity,v=void 0===u?"0.7":u,m=e.titlePadding,h=void 0===m?"6rem":m,O=e.isLoading,f={paddingBlock:h,background:!d&&j};return Object(o.jsxs)("div",{className:n.a.container,style:f,children:[Object(o.jsx)(i.a,{align:"center",color:a,sx:{fontFamily:"Product Sans",fontSize:{xs:"2rem",md:"3rem",lg:"3.5rem"}},variant:l,children:O?Object(o.jsx)(c.a,{}):t}),d&&Object(o.jsx)("img",{alt:"",className:n.a.bckg,src:d,style:{opacity:"".concat(v)}})]})}},620:function(e,t,r){e.exports={container:"Title_container__3JBI3",bckg:"Title_bckg__3VhN2"}},622:function(e,t,r){"use strict";var a=r(201),n=r.n(a),i=r(0);t.a=function(e){var t=e.content;return Object(i.jsx)(i.Fragment,{children:n()(t)})}},712:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return W}));var a=r(6),n=r(1),i=r(618),c=r(622),o=r(597),s=r(124),l=r(5),d=r(2),b=r(8),j=r(160),u=r(89),v=r(10),m=r(11),h=r(7),O=r(127),f=r(161);function x(e){return Object(O.a)("MuiCircularProgress",e)}Object(f.a)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var g,k,p,y,S,w,P,C,D=r(0),M=["className","color","disableShrink","size","style","thickness","value","variant"],N=44,F=Object(u.c)(S||(S=g||(g=Object(s.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),T=Object(u.c)(w||(w=k||(k=Object(s.a)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),_=Object(h.a)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],t["color".concat(Object(v.a)(r.color))]]}})((function(e){var t=e.ownerState,r=e.theme;return Object(d.a)({display:"inline-block"},"determinate"===t.variant&&{transition:r.transitions.create("transform")},"inherit"!==t.color&&{color:r.palette[t.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&Object(u.b)(P||(P=p||(p=Object(s.a)(["\n      animation: "," 1.4s linear infinite;\n    "]))),F)})),z=Object(h.a)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,t){return t.svg}})({display:"block"}),R=Object(h.a)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,t){var r=e.ownerState;return[t.circle,t["circle".concat(Object(v.a)(r.variant))],r.disableShrink&&t.circleDisableShrink]}})((function(e){var t=e.ownerState,r=e.theme;return Object(d.a)({stroke:"currentColor"},"determinate"===t.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var t=e.ownerState;return"indeterminate"===t.variant&&!t.disableShrink&&Object(u.b)(C||(C=y||(y=Object(s.a)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),T)})),B=n.forwardRef((function(e,t){var r=Object(m.a)({props:e,name:"MuiCircularProgress"}),a=r.className,n=r.color,i=void 0===n?"primary":n,c=r.disableShrink,o=void 0!==c&&c,s=r.size,u=void 0===s?40:s,h=r.style,O=r.thickness,f=void 0===O?3.6:O,g=r.value,k=void 0===g?0:g,p=r.variant,y=void 0===p?"indeterminate":p,S=Object(l.a)(r,M),w=Object(d.a)({},r,{color:i,disableShrink:o,size:u,thickness:f,value:k,variant:y}),P=function(e){var t=e.classes,r=e.variant,a=e.color,n=e.disableShrink,i={root:["root",r,"color".concat(Object(v.a)(a))],svg:["svg"],circle:["circle","circle".concat(Object(v.a)(r)),n&&"circleDisableShrink"]};return Object(j.a)(i,x,t)}(w),C={},F={},T={};if("determinate"===y){var B=2*Math.PI*((N-f)/2);C.strokeDasharray=B.toFixed(3),T["aria-valuenow"]=Math.round(k),C.strokeDashoffset="".concat(((100-k)/100*B).toFixed(3),"px"),F.transform="rotate(-90deg)"}return Object(D.jsx)(_,Object(d.a)({className:Object(b.a)(P.root,a),style:Object(d.a)({width:u,height:u},F,h),ownerState:w,ref:t,role:"progressbar"},T,S,{children:Object(D.jsx)(z,{className:P.svg,ownerState:w,viewBox:"".concat(22," ").concat(22," ").concat(N," ").concat(N),children:Object(D.jsx)(R,{className:P.circle,style:C,ownerState:w,cx:N,cy:N,r:(N-f)/2,fill:"none",strokeWidth:f})})}))})),I=r(162),A=r(525),J=r(189);function W(e){var t=e.match,r=Object(n.useState)({}),s=Object(a.a)(r,2),l=s[0],d=s[1],b=Object(n.useState)(!1),j=Object(a.a)(b,2),u=j[0],v=j[1],m=Object(n.useState)(!0),h=Object(a.a)(m,2),O=h[0],f=h[1],x=t.params.id;return Object(n.useEffect)((function(){Object(J.b)(x).then((function(e){!0===e.success?(v(!0),d(e.data)):!1===e.response.data.success&&v(!1)})).finally((function(){return f(!1)}))}),[x]),O?Object(D.jsx)(o.a,{maxWidth:"md",sx:{display:"flex",minHeight:"100vh",justifyContent:"center",alignItems:"center"},children:Object(D.jsx)(B,{})}):Object(D.jsx)(D.Fragment,{children:u?Object(D.jsxs)("div",{children:[Object(D.jsx)(i.a,{bckgOpacity:"0.5",imageUrl:l.image,titlePadding:"10rem",titleText:l.name}),Object(D.jsxs)(o.a,{maxWidth:"md",sx:{marginTop:"3rem"},children:[Object(D.jsx)(I.a,{color:"initial",sx:{marginBlock:"1rem"},variant:"h4",children:"Detalle de actividad"}),Object(D.jsx)(A.a,{fontSize:24,mb:"3rem",children:Object(D.jsx)(c.a,{content:l.description})})]})]}):Object(D.jsx)(i.a,{titlePadding:"12rem",titleText:"Actividad no encontrada",variant:"h3"})})}}}]);
//# sourceMappingURL=12.08e49eaa.chunk.js.map