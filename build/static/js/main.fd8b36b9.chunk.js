(this["webpackJsonppart2-tut"]=this["webpackJsonppart2-tut"]||[]).push([[0],{42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var r=n(17),a=n.n(r),c=n(8),u=n(4),o=n(2),i=n(0),s=function(t){var e=t.note,n=t.toggleImportance,r=e.important?"make not important":"make important";return Object(i.jsxs)("li",{className:"note",children:[e.content,Object(i.jsx)("button",{onClick:n,children:r})]})},p=n(3),f=n.n(p),j=n(5),l=n(6),b=n.n(l),d="https://young-tundra-13164.herokuapp.com/api/notes",h={getAll:function(){var t=Object(j.a)(f.a.mark((function t(){var e,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=b.a.get(d),t.next=3,e;case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),create:function(){var t=Object(j.a)(f.a.mark((function t(e){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=b.a.post(d,e),t.next=3,n;case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),update:function(){var t=Object(j.a)(f.a.mark((function t(e,n){var r,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=b.a.put("".concat(d,"/").concat(e),n),t.next=3,r;case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},m=function(t){var e=Object(o.useState)([]),n=Object(u.a)(e,2),r=n[0],a=n[1],p=Object(o.useState)(""),f=Object(u.a)(p,2),j=f[0],l=f[1],b=Object(o.useState)(!0),d=Object(u.a)(b,2),m=d[0],O=d[1],v=Object(o.useState)("some error happened"),x=Object(u.a)(v,2),g=(x[0],x[1]);Object(o.useEffect)((function(){h.getAll().then((function(t){a(t)}))}),[]);var k=m?r:r.filter((function(t){return!0===t.important}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Notes"}),Object(i.jsx)("div",{children:Object(i.jsxs)("button",{onClick:function(){return O(!m)},children:["show ",m?"important":"all"]})}),Object(i.jsx)("ul",{children:k.map((function(t){return Object(i.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=r.find((function(e){return e.id===t})),n=Object(c.a)(Object(c.a)({},e),{},{important:!e.important});h.update(t,n).then((function(e){a(r.map((function(n){return n.id!==t?n:e})))})).catch((function(n){g("Note '".concat(e.content,"' was already removed from the server")),setTimeout((function(){g(null)}),5e3),a(r.filter((function(e){return e.id!==t})))}))}(t.id)}},t.id)}))}),Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:j,date:(new Date).toISOString(),important:Math.random()<.5,id:r.length+1};h.create(e).then((function(t){a(r.concat(t)),l("")}))},children:[Object(i.jsx)("input",{value:j,onChange:function(t){return l(t.target.value)}}),Object(i.jsx)("button",{children:"save"})]}),Object(i.jsx)("div",{className:"ebro",children:"First fullstack project deployed by ebroTech"})]})};n(42);a.a.render(Object(i.jsx)(m,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.fd8b36b9.chunk.js.map