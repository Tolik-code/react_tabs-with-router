(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),o=a(6),u=(a(21),a(1)),i=function(){return c.a.createElement("header",null,c.a.createElement(o.c,{to:""},"Home page"),c.a.createElement(o.c,{to:"/tabs"},"Tabs page"))},m=(a(27),function(e){var t=e.tabs,a=Object(u.f)(),n=function(e){return":".concat(e)===a.params.tabId};return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Tabs with router"),t.map((function(e){var t="/tabs/:".concat(e.id);return c.a.createElement("div",{className:"tabTitle",key:e.id},c.a.createElement(o.b,{to:t,className:n(e.id)?"activeTab":""},e.title))})),c.a.createElement("p",{className:"tabContent"},function(){var e=t.find((function(e){return n(e.id)}));return e?e.content:"select tab please :]"}()))}),s=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],b=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i,null),c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",exact:!0},c.a.createElement("h1",null,"Home page")),c.a.createElement(u.a,{path:"/tabs/:tabId?"},c.a.createElement(m,{tabs:s})),c.a.createElement("h2",null,"Not found")))};l.a.render(c.a.createElement(o.a,null,c.a.createElement(b,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ff897b4e.chunk.js.map