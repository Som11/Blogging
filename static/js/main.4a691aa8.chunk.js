(this.webpackJsonpblogging=this.webpackJsonpblogging||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(16),i=c.n(s),o=(c(22),c(7)),l=c(0),j=function(){return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)("h1",{children:"Blogging"}),Object(l.jsxs)("div",{className:"links",children:[Object(l.jsx)(o.b,{to:"/",children:"Home"}),Object(l.jsx)(o.b,{to:"/create",children:"New Blog"})]})]})},a=function(e){var t=e.blogs;return Object(l.jsx)("div",{className:"blog-list",children:t.map((function(e){return Object(l.jsx)("div",{className:"blog-preview",children:Object(l.jsxs)(o.b,{to:"/blogs/".concat(e.id),children:[Object(l.jsx)("h2",{children:e.title}),Object(l.jsxs)("p",{children:["Written by ",e.author]})]})},e.id)}))})},b=c(8),d=function(e){var t=Object(n.useState)(null),c=Object(b.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(!0),o=Object(b.a)(i,2),l=o[0],j=o[1],a=Object(n.useState)(null),d=Object(b.a)(a,2),h=d[0],u=d[1];return Object(n.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resource");return e.json()})).then((function(e){j(!1),s(e),u(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(j(!1),u(e.message))}))}),1e3),function(){return t.abort()}}),[e]),{data:r,isPending:l,error:h}},h=function(){var e=d("http://localhost:8000/blogs"),t=e.data,c=e.isPending,n=e.error;return Object(l.jsxs)("div",{className:"home",children:[n&&Object(l.jsxs)("div",{children:[n," "]}),c&&Object(l.jsx)("div",{children:"Loading... "}),t&&Object(l.jsx)(a,{blogs:t,title:"All blogs!"})]})},u=c(2),O=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),i=Object(b.a)(s,2),o=i[0],j=i[1],a=Object(n.useState)("mario"),d=Object(b.a)(a,2),h=d[0],O=d[1],x=Object(n.useState)(!1),g=Object(b.a)(x,2),f=(g[0],g[1]),v=Object(u.f)();return Object(l.jsxs)("div",{className:"create",children:[Object(l.jsx)("h2",{children:"Add a new Blog"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,body:o,author:h};f(!0),fetch("http://localhost:8000/blogs",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("new blog added"),f(!1),v.push("/")}))},children:[Object(l.jsx)("label",{children:"Blog title:"}),Object(l.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return r(e.target.value)}}),Object(l.jsx)("label",{children:"Blog body:"}),Object(l.jsx)("textarea",{required:!0,value:o,onChange:function(e){return j(e.target.value)}}),Object(l.jsx)("label",{children:"Blog author:"}),Object(l.jsxs)("select",{value:h,onChange:function(e){return O(e.target.value)},children:[Object(l.jsx)("option",{value:"mario",children:"mario"}),Object(l.jsx)("option",{value:"yoshi",children:"yoshi"})]}),Object(l.jsx)("button",{children:"Add blog"})]})]})},x=function(){var e=Object(u.g)().id,t=d("http://localhost:8000/blogs/"+e),c=t.data,n=t.error,r=t.isPending,s=Object(u.f)();return Object(l.jsxs)("div",{className:"blog-details",children:[r&&Object(l.jsx)("div",{children:"Loading..."}),n&&Object(l.jsx)("div",{children:n}),c&&Object(l.jsxs)("article",{children:[Object(l.jsx)("h2",{children:c.title}),Object(l.jsxs)("p",{children:["Written by ",c.author]}),Object(l.jsx)("div",{children:c.body}),Object(l.jsx)("button",{onClick:function(){fetch("http://localhost:8000/blogs/"+c.id,{method:"DELETE"}).then((function(){s.push("/")}))},children:"delete"})]})]})},g=function(){return Object(l.jsxs)("div",{className:"not-found",children:[Object(l.jsx)("h2",{children:"Sorry"}),Object(l.jsx)("p",{children:"That page cannot be found"}),Object(l.jsx)(o.b,{to:"/",children:"Back to Home"})]})};var f=function(){return Object(l.jsx)(o.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"/",children:Object(l.jsx)(h,{})}),Object(l.jsx)(u.a,{path:"/create",children:Object(l.jsx)(O,{})}),Object(l.jsx)(u.a,{path:"/blogs/:id",children:Object(l.jsx)(x,{})}),Object(l.jsx)(u.a,{path:"*",children:Object(l.jsx)(g,{})})]})})]})})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.4a691aa8.chunk.js.map