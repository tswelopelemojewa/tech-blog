(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),o=(a(16),a(4)),u=function(){return l.a.createElement("nav",{className:"Navbar"},l.a.createElement("h1",null,"TSWELOPELE TECH BLOG"),l.a.createElement("div",{className:"links"},l.a.createElement(o.b,{to:"/"},"Home"),l.a.createElement(o.b,{to:"/create"},"create")))},i=function(e){var t=e.blogs,a=e.title;return l.a.createElement("div",{className:"blog-list"},l.a.createElement("h2",null,a),t.map(function(e){return l.a.createElement("div",{className:"blog-preview",key:e.id},l.a.createElement(o.b,{to:"blog/".concat(e.id)},l.a.createElement("h2",null,e.title)),l.a.createElement("p",null,e.author))}))},m=a(3),s=function(e){var t=Object(n.useState)(null),a=Object(m.a)(t,2),l=a[0],r=a[1],c=Object(n.useState)(!0),o=Object(m.a)(c,2),u=o[0],i=o[1],s=Object(n.useState)(null),E=Object(m.a)(s,2),d=E[0],b=E[1];return Object(n.useEffect)(function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then(function(e){if(!e.ok)throw Error("Error!! could not fetch data");return e.json()}).then(function(e){r(e),i(!1),b(null)}).catch(function(e){"AbortError"===e.name?console.log("fetch aborted"):(i(!1),b(e.message))}),function(){return t.abort()}},[e]),{data:l,isPending:u,error:d}},E=function(){var e=s("http://localhost:8000/blogs"),t=e.data,a=e.isPending,n=e.error;return l.a.createElement("div",{className:"home-div"},n&&l.a.createElement("div",null,n),a&&l.a.createElement("div",null,"Loading..."),t&&l.a.createElement(i,{blogs:t,title:"all blogs"}))},d=a(1),b=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(m.a)(c,2),u=o[0],i=o[1],s=Object(n.useState)("Tswelopele"),E=Object(m.a)(s,2),b=E[0],h=E[1],f=Object(n.useState)(!1),g=Object(m.a)(f,2),v=(g[0],g[1]),p=Object(d.f)();return l.a.createElement("div",{className:"create"},l.a.createElement("h2",null,"Add new Blog"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={title:a,body:u,author:b};v(!0),fetch("http://localhost:8000/blogs/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(){v(!1),console.log("new blog added"),p("/")})}},l.a.createElement("label",null,"Blog Title"),l.a.createElement("input",{type:"text",required:!0,value:a,onChange:function(e){return r(e.target.value)}}),l.a.createElement("label",null,"Blog Body"),l.a.createElement("textarea",{required:!0,value:u,onChange:function(e){return i(e.target.value)}}),l.a.createElement("label",null,"author"),l.a.createElement("select",{value:b,onChange:function(e){return h(e.target.value)}},l.a.createElement("option",{value:"Tswelopele"},"Tswelopele"),l.a.createElement("option",{value:"Junior"},"Junior")),l.a.createElement("button",null,"Add Blog")))},h=function(){var e=Object(d.g)().id,t=Object(d.f)(),a=s("http://localhost:8000/blogs/"+e),n=a.data,r=a.error,c=a.isPending;return l.a.createElement("div",{className:"blog-detail"},c&&l.a.createElement("div",null,"Loading..."),n&&l.a.createElement("article",null,l.a.createElement("h2",null,n.title),l.a.createElement("p",null,"written by ",n.author),l.a.createElement("div",null,n.body),l.a.createElement("button",{onClick:function(){fetch("http://localhost:8000/blogs/"+e,{method:"DELETE"}).then(function(){t("/")})},className:"del-btn"},"Delete")),r&&l.a.createElement("div",null,r))},f=function(){return l.a.createElement("div",{className:"not-found"},l.a.createElement("h1",null,"Sorry"),l.a.createElement("p",null,"That page cannot be found..."),l.a.createElement(o.b,{to:"/"},"Go to Home..."))};var g=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(u,null),l.a.createElement("div",{className:"content"},l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/",element:l.a.createElement(E,null)}),l.a.createElement(d.a,{path:"/create",element:l.a.createElement(b,null)}),l.a.createElement(d.a,{path:"/blog/:id",element:l.a.createElement(h,null)}),l.a.createElement(d.a,{path:"*",element:l.a.createElement(f,null)})))))};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)))},7:function(e,t,a){e.exports=a(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.ce8aeae4.chunk.js.map