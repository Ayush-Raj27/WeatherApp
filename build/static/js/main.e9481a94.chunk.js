(this.webpackJsonpawesomeapp=this.webpackJsonpawesomeapp||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(6),n=c.n(s),i=c(7),r=c(5),d=(c(12),c(0)),j=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),j=Object(r.a)(n,2),l=j[0],o=j[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"main-div",children:Object(d.jsxs)("div",{className:"child-div",children:[Object(d.jsxs)("figure",{children:[Object(d.jsx)("img",{src:"./images/todo.png",alt:"ToDoLogo"}),Object(d.jsx)("figcaption",{children:"Add Your List Here \u270c"})]}),Object(d.jsxs)("div",{className:"addItems",children:[Object(d.jsx)("input",{type:"text",placeholder:"\u270d Add Item",className:"form-control",value:c,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("i",{className:"fa fa-plus add-btn",onClick:function(e){if(e){var t={id:(new Date).getTime().toString(),name:e};o([].concat(Object(i.a)(l),[t])),s("")}else alert("Please fill the data")}})]}),Object(d.jsx)("div",{className:"showItems",children:l.map((function(e){return Object(d.jsxs)("div",{className:"eachItem",children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsxs)("div",{className:"todo-btn",children:[Object(d.jsx)("i",{className:"far fa-edit add-btn"}),Object(d.jsx)("i",{className:"far fa-trash add-btn"}),Object(d.jsx)("i",{className:"far fa-edit",onClick:function(){return function(e){var t=l.filter((function(t){return t.id!==e}));o(t)}(e.id)}})]})]},e.id)}))}),Object(d.jsx)("div",{className:"showItems",children:Object(d.jsx)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){o([])},children:Object(d.jsx)("span",{children:"CHECK LIST"})})})]})})})},l=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(j,{})})};n.a.render(Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(l,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e9481a94.chunk.js.map