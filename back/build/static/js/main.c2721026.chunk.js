(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(21),r=c.n(i),s=(c(44),c(15)),o=c(4),l=c(104),j=c(105),u=(c(45),c(46),c(1)),d=function(){return Object(u.jsx)("img",{src:"logo.png",alt:"Logo"})},m=(c(48),function(e){var t=e.price,c=e.small,n=void 0===c||c,a=e.freeShipping,i=void 0!==a&&a;return Object(u.jsxs)("div",{className:"price",children:[Object(u.jsxs)("p",{className:n?"price--small":"price--big",children:[t.currency," ",t.amount,Object(u.jsx)("sup",{className:"price__cents "+(n?"price__cents--small":"price__cents--big"),children:t.decimals})]}),i&&n&&Object(u.jsx)("img",{className:"price__shipping",src:"ic_shipping.png"})]})}),p=(c(49),function(e){var t=e.changeHandler,c=e.value;return Object(u.jsx)("input",{onChange:t,className:"search-input",type:"text",value:c,placeholder:"Nunca dejes de buscar"})}),h=(c(50),function(e){var t=e.clickHandler,c=e.text;return Object(u.jsx)("a",{onClick:t,className:"text-button",children:c})}),b=(c(51),function(e){var t=e.clickHandler;return Object(u.jsx)("button",{className:"search-button",onClick:t})}),x=(c(52),function(e){var t=e.text,c=e.clickHandler;return Object(u.jsx)("button",{onClick:c,className:"primary-button",children:t})}),f=c(18),O=function(){var e=a.a.useState(""),t=Object(f.a)(e,2),c=t[0],n=t[1],i=Object(o.f)();return{handleInputChange:function(e){n(e.target.value)},handleSubmit:function(e){e.preventDefault(),i.push("/items?search=".concat(c))},query:c}},g=function(){var e=O(),t=e.handleInputChange,c=e.handleSubmit,n=e.query;return Object(u.jsxs)("form",{className:"search-form",children:[Object(u.jsx)(p,{value:n,changeHandler:t}),Object(u.jsx)(b,{clickHandler:c})]})},v=function(){return Object(u.jsx)("div",{className:"header",children:Object(u.jsx)(l.a,{children:Object(u.jsx)(j.a,{container:!0,justify:"center",children:Object(u.jsx)(j.a,{item:!0,xs:10,children:Object(u.jsxs)("div",{className:"header__content",children:[Object(u.jsx)(s.b,{to:"/",children:Object(u.jsx)(d,{})}),Object(u.jsx)(g,{})]})})})})})},_=c(106),N=(c(61),function(e){var t=e.item;return Object(u.jsxs)(_.a,{className:"item",children:[Object(u.jsx)("div",{className:"item__thumbnail",children:Object(u.jsx)("img",{src:t.picture,alt:"imagen de ".concat(t.title)})}),Object(u.jsxs)("div",{className:"item__content",children:[Object(u.jsx)("div",{className:"item__description",children:Object(u.jsxs)(j.a,{container:!0,alignItems:"baseline",children:[Object(u.jsx)(j.a,{xs:10,item:!0,children:Object(u.jsx)(m,{price:t.price,freeShipping:t.free_shipping})}),Object(u.jsx)(j.a,{xs:2,item:!0,children:Object(u.jsx)("p",{className:"item__place",children:t.condition})})]})}),Object(u.jsx)("p",{className:"item__title",children:t.title})]})]})}),w=c(37),k=c.n(w),y=(c(62),function(e){var t=e.categories,c=Object(o.f)();return Object(u.jsx)("div",{className:"breadcrumb-menu",children:t.map((function(e,n){return Object(u.jsxs)(a.a.Fragment,{children:[Object(u.jsx)(h,{clickHandler:function(){c.push("/items?category=".concat(e.id))},text:e.name}),n!==t.length-1&&Object(u.jsx)(k.a,{fontSize:"small"})]},e.id)}))})}),S=(c(67),function(e){var t=e.children;return Object(u.jsx)("div",{className:"content",children:Object(u.jsx)(l.a,{children:Object(u.jsx)(j.a,{container:!0,justify:"center",children:Object(u.jsx)(j.a,{item:!0,xs:10,children:t})})})})}),C=(c(68),c(20)),H=c.n(C),D=c(23),I=c(13),L=c.n(I),q={init:function(e){L.a.defaults.baseURL=e,L.a.defaults.headers.common["content-type"]="application/json",L.a.defaults.headers.common.Accept="application/json",L.a.defaults.timeout=3e4,L.a.interceptors.response.use((function(e){return e.data}))},get:function(e){return L.a.get(e)},post:function(e,t){return L.a.post(e,t)},put:function(e,t){return L.a.put(e,t)},patch:function(e,t){return L.a.patch(e,t)}},B="&limit=4",E="items",R={get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,c=t?"?category=".concat(t):"?search=".concat(e);return q.get("".concat(E+c+B))},getById:function(e){return q.get("".concat(E,"/").concat(e))}},U=function(){var e=a.a.useState([]),t=Object(f.a)(e,2),c=t[0],n=t[1],i=a.a.useState([]),r=Object(f.a)(i,2),s=r[0],o=r[1],l=new URLSearchParams(window.location.search).get("search"),j=new URLSearchParams(window.location.search).get("category");return a.a.useEffect(Object(D.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.get(l,j);case 3:t=e.sent,n(t.items),o(t.categories),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[l,j]),{items:c,categories:s}},J=function(){var e=U(),t=e.items,c=e.categories;return Object(u.jsxs)(S,{children:[Object(u.jsx)(y,{categories:c}),t.map((function(e){return Object(u.jsx)(s.b,{className:"items__link",to:"/items/".concat(e.id),children:Object(u.jsx)(N,{item:e})},e.id)}))]})},P=(c(88),function(e){var t=a.a.useState(null),c=Object(f.a)(t,2),n=c[0],i=c[1],r=a.a.useState([]),s=Object(f.a)(r,2),o=s[0],l=s[1];return a.a.useEffect(Object(D.a)(H.a.mark((function t(){var c;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.getById(e);case 3:c=t.sent,i(c.item),l(c.categories),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),[]),{itemDetail:n,itemDetailCategories:o}}),z=function(e){var t=e.match,c=P(t.params.id),n=c.itemDetail,a=c.itemDetailCategories;if(!n)return null;var i=n.picture,r=n.description,s=n.condition,o=n.sold_quantity,l=n.title,d=n.price,p=n.free_shipping;return Object(u.jsxs)(S,{children:[Object(u.jsx)(y,{categories:a}),Object(u.jsxs)(j.a,{container:!0,className:"item-detail",children:[Object(u.jsxs)(j.a,{item:!0,xs:9,children:[Object(u.jsx)("img",{src:i,alt:"imagen de ".concat(l),className:"item-detail__picture"}),Object(u.jsx)("h3",{className:"item-detail__description-title",children:"Descripci\xf3n del producto"}),Object(u.jsx)("p",{className:"item-detail__description-content",children:r})]}),Object(u.jsxs)(j.a,{item:!0,xs:10,sm:3,children:[Object(u.jsxs)("p",{className:"item-detail__condition",children:[s," - ",o," vendidos"]}),Object(u.jsx)("h1",{className:"item-detail__name",children:l}),Object(u.jsx)(m,{price:d,freeShipping:p,small:!1}),Object(u.jsx)(x,{text:"Comprar",clickHandler:function(){return console.log("compra")}})]})]})]})};var A=function(){return Object(u.jsxs)(s.a,{children:[Object(u.jsx)(v,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,component:S}),Object(u.jsx)(o.a,{path:"/items",exact:!0,component:J}),Object(u.jsx)(o.a,{path:"/items/:id",component:z})]})]})};q.init("".concat(window.location.protocol,"//").concat(window.location.hostname,":").concat(window.location.port,"/api/")),r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(A,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.c2721026.chunk.js.map