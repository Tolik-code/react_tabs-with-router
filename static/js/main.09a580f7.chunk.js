(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),o=a(6),u=(a(21),a(1)),i=function(){return r.a.createElement("header",null,r.a.createElement(o.b,{to:"/"},"Home page"),r.a.createElement(o.b,{to:"/tabs"},"Tabs page"))},m=(a(27),function(e){var t=e.tabs,a=Object(u.g)("/tabs/:tabId?");if(null===a)return r.a.createElement("div",null,"Not found");var n=function(e){return"".concat(e)===a.params.tabId};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Tabs with router"),t.map((function(e){var t="/tabs/".concat(e.id);return r.a.createElement("div",{className:"tabTitle",key:e.id},r.a.createElement(o.b,{to:t,className:n(e.id)?"activeTab":""},e.title))})),r.a.createElement("p",{className:"tabContent"},function(){var e=t.find((function(e){return n(e.id)}));return e?e.content:"select tab please :]"}()))}),b=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],s=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0},r.a.createElement("h1",null,"Home page")),r.a.createElement(u.b,{path:"/tabs/:tabId?"},r.a.createElement(m,{tabs:b})),r.a.createElement(u.a,{path:"/home",to:"/"}),r.a.createElement("h2",null,"Not found")))};c.a.render(r.a.createElement(o.a,null,r.a.createElement(s,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.09a580f7.chunk.js.map