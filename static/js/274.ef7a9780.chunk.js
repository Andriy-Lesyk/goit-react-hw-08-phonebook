"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[274],{2274:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r,a=t(2791),i=t(885),o=t(9434),s=new Uint8Array(16);function u(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(s)}var c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var l=function(e){return"string"===typeof e&&c.test(e)},m=[],d=0;d<256;++d)m.push((d+256).toString(16).substr(1));var f=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(m[e[n+0]]+m[e[n+1]]+m[e[n+2]]+m[e[n+3]]+"-"+m[e[n+4]]+m[e[n+5]]+"-"+m[e[n+6]]+m[e[n+7]]+"-"+m[e[n+8]]+m[e[n+9]]+"-"+m[e[n+10]]+m[e[n+11]]+m[e[n+12]]+m[e[n+13]]+m[e[n+14]]+m[e[n+15]]).toLowerCase();if(!l(t))throw TypeError("Stringified UUID is invalid");return t};var x=function(e,n,t){var r=(e=e||{}).random||(e.rng||u)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){t=t||0;for(var a=0;a<16;++a)n[t+a]=r[a];return n}return f(r)},h=t(6052),p=t(6151),v=t(4708),g=t(7946),Z=t(4554),j=t(890),b=t(1614),y=t(7107),w=t(7012),C=t(184),k=(0,y.Z)();function W(){var e=(0,o.I0)(),n=(0,o.v9)((function(e){return e.contacts.entities})),t=(0,a.useState)(""),r=(0,i.Z)(t,2),s=r[0],u=r[1],c=(0,a.useState)(""),l=(0,i.Z)(c,2),m=l[0],d=l[1];console.log(s);var f=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":return u(r);case"number":return d(r);default:return}};return(0,C.jsx)(w.Z,{theme:k,children:(0,C.jsxs)(b.Z,{component:"main",maxWidth:"xs",children:[(0,C.jsx)(v.ZP,{}),(0,C.jsxs)(Z.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,C.jsx)(j.Z,{component:"h1",variant:"h3",children:"Phonebook"}),(0,C.jsxs)(Z.Z,{component:"form",onSubmit:function(t){t.preventDefault();var r=x();n.find((function(e){return e.name.toLowerCase()===s.toLowerCase()}))?alert("".concat(s," is olready in contacts")):e((0,h.el)({id:r,name:s,number:m})),u(""),d("")},noValidate:!0,children:[(0,C.jsx)(g.Z,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",value:s,autoComplete:"name",autoFocus:!0,onChange:f}),(0,C.jsx)(g.Z,{margin:"normal",required:!0,fullWidth:!0,name:"number",label:"Number",id:"number",value:m,autoComplete:"number",onChange:f}),(0,C.jsx)(p.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})]})]})})}var D=t(3734),I=(0,y.Z)();function L(){var e=(0,o.I0)();return(0,C.jsx)(w.Z,{theme:I,children:(0,C.jsxs)(b.Z,{component:"main",maxWidth:"xs",children:[(0,C.jsx)(v.ZP,{}),(0,C.jsx)(Z.Z,{children:(0,C.jsx)(g.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Find contacts by name",name:"email",autoFocus:!0,onChange:function(n){return e((0,D.Wb)(n.currentTarget.value))}})})]})})}var S,T,V,F=t(5861),R=t(7757),_=t.n(R),q=t(168),E=t(9958),P=E.Z.ul(S||(S=(0,q.Z)(["\nmargin:0\n"]))),U=E.Z.li(T||(T=(0,q.Z)(["\nlist-style: none;\n"])));E.Z.button(V||(V=(0,q.Z)(["\n  margin-left: 30px;\n  background-color: orange;\n  border-radius: 5px;\n"])));var A=function(){var e=(0,o.I0)();(0,a.useEffect)((function(){e((0,h.yF)())}),[e]);var n=(0,o.v9)((function(e){return e.contacts.entities})),t=(0,o.v9)((function(e){return e.filter})),r=""===t?n:n.filter((function(e){return e.name.toLowerCase().includes(t.filter.toLowerCase())}));return(0,C.jsx)("div",{children:(0,C.jsxs)(Z.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,C.jsx)(j.Z,{component:"h1",variant:"h3",children:"Contacts"}),(0,C.jsx)(P,{children:r.length>0&&r.map((function(n){var t=n.name,r=n.number,a=n.id;return(0,C.jsx)(U,{children:(0,C.jsxs)(Z.Z,{sx:{marginTop:"18px",display:"flex",flexDirection:"raw",alignItems:"center"},children:[(0,C.jsx)(g.Z,{value:t}),(0,C.jsx)(g.Z,{value:r,sx:{marginLeft:"10px"}}),(0,C.jsx)(p.Z,{fullWidth:!0,variant:"contained",sx:{marginLeft:"10px",width:"30px",height:"54px"},onClick:(0,F.Z)(_().mark((function n(){return _().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e((0,h._f)(a));case 2:e((0,h.yF)());case 3:case"end":return n.stop()}}),n)}))),children:"Delete"})]})},a)}))})]})})};var N=function(){return(0,C.jsx)("div",{children:(0,C.jsxs)(Z.Z,{sx:{marginTop:2,display:"flex",flexDirection:"raw",justifyContent:"center"},children:[(0,C.jsxs)(Z.Z,{children:[(0,C.jsx)(W,{}),(0,C.jsx)(L,{})]}),(0,C.jsx)(A,{})]})})}}}]);
//# sourceMappingURL=274.ef7a9780.chunk.js.map