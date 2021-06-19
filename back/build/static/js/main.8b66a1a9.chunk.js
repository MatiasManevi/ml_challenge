(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),s=c(18),a=c.n(s),r=(c(44),c(17)),l=c(4),o=c(104),j=c(105),u=(c(45),c(46),c(1)),d=function(){return Object(u.jsx)("img",{src:"logo.png",alt:"Logo"})},m=(c(48),function(e){var t=e.price,c=e.small,n=void 0===c||c,i=e.freeShipping,s=void 0!==i&&i;return Object(u.jsxs)("div",{className:"price",children:[Object(u.jsxs)("p",{className:n?"price--small":"price--big",children:[t.currency," ",t.amount,Object(u.jsx)("sup",{className:"price__cents "+(n?"price__cents--small":"price__cents--big"),children:t.decimals})]}),s&&Object(u.jsx)("img",{className:"price__shipping",src:"ic_shipping.png"})]})}),b=(c(49),function(e){var t=e.changeHandler,c=e.value;return Object(u.jsx)("input",{onChange:t,className:"search-input",type:"text",value:c,placeholder:"Nunca dejes de buscar"})}),x=(c(50),function(e){var t=e.clickHandler,c=e.text;return Object(u.jsx)("a",{onClick:t,className:"text-button",children:c})}),h=(c(51),function(e){var t=e.clickHandler;return Object(u.jsx)("button",{className:"search-button",onClick:t})}),p=(c(52),function(e){var t=e.text,c=e.clickHandler;return Object(u.jsx)("button",{onClick:c,className:"primary-button",children:t})}),O=c(20),f=function(){var e=i.a.useState(""),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(l.f)();return{handleInputChange:function(e){n(e.target.value)},handleSubmit:function(e){e.preventDefault(),s.push("/items?search=".concat(c))},query:c}},v=function(){var e=f(),t=e.handleInputChange,c=e.handleSubmit,n=e.query;return Object(u.jsxs)("form",{className:"search-form",children:[Object(u.jsx)(b,{value:n,changeHandler:t}),Object(u.jsx)(h,{clickHandler:c})]})},_=function(){return Object(u.jsx)("div",{className:"header",children:Object(u.jsx)(o.a,{children:Object(u.jsx)(j.a,{container:!0,justify:"center",children:Object(u.jsx)(j.a,{item:!0,xs:10,children:Object(u.jsxs)("div",{className:"header__content",children:[Object(u.jsx)(r.b,{to:"/",children:Object(u.jsx)(d,{})}),Object(u.jsx)(v,{})]})})})})})},g=c(106),N=(c(61),function(e){var t=e.item;return Object(u.jsxs)(g.a,{className:"item",children:[Object(u.jsx)("div",{className:"item__thumbnail",children:Object(u.jsx)("img",{src:t.picture,alt:"imagen de ".concat(t.title)})}),Object(u.jsxs)("div",{className:"item__content",children:[Object(u.jsx)("div",{className:"item__description",children:Object(u.jsxs)(j.a,{container:!0,alignItems:"baseline",children:[Object(u.jsx)(j.a,{xs:10,item:!0,children:Object(u.jsx)(m,{price:t.price,freeShipping:t.free_shipping})}),Object(u.jsx)(j.a,{xs:2,item:!0,children:Object(u.jsx)("p",{className:"item__place",children:t.condition})})]})}),Object(u.jsx)("p",{className:"item__title",children:t.title})]})]})}),k=c(26),S=c.n(k),q=(c(62),function(){return Object(u.jsxs)("div",{className:"breadcrumb-menu",children:[Object(u.jsx)(x,{text:"Laptop"}),Object(u.jsx)(S.a,{fontSize:"small"}),Object(u.jsx)(x,{text:"Lenovo"}),Object(u.jsx)(S.a,{fontSize:"small"}),Object(u.jsx)(x,{text:"I7"})]})}),w=(c(67),function(e){var t=e.children;return Object(u.jsx)("div",{className:"content",children:Object(u.jsx)(o.a,{children:Object(u.jsx)(j.a,{container:!0,justify:"center",children:Object(u.jsx)(j.a,{item:!0,xs:10,children:t})})})})}),y=(c(68),c(27)),C=c.n(y),H=c(36),I=c(37),L=c.n(I),D=function(){var e=i.a.useState([]),t=Object(O.a)(e,2),c=t[0],n=t[1],s=new URLSearchParams(window.location.search).get("search");return i.a.useEffect(Object(H.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("".concat("http://localhost:5000/api","/items?search=").concat(s+"&limit=4"));case 3:t=e.sent,n(t.data.items),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[s]),{items:c}},E=function(){var e=D().items;return Object(u.jsx)(w,{children:Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)(q,{}),e.map((function(e){return Object(u.jsx)(r.b,{className:"items__link",to:"/items/".concat(e.id),children:Object(u.jsx)(N,{item:e})},e.id)}))]})})},P=(c(88),function(e){var t=e.match;return i.a.useEffect((function(){t.params.id}),[]),Object(u.jsxs)(w,{children:[Object(u.jsx)(q,{}),Object(u.jsxs)(j.a,{container:!0,className:"item-detail",children:[Object(u.jsxs)(j.a,{item:!0,xs:9,children:[Object(u.jsx)("img",{src:"https://www.revistaneo.com/sites/default/files/2020-01/Mercado%20Libre%20dio%20a%20conocer%20los%20productos%20m%C3%A1s%20vendidos%20en%202019.jpg",alt:"imagen detalle de producto",className:"item-detail__picture"}),Object(u.jsx)("h3",{className:"item-detail__description-title",children:"Descripci\xf3n del producto"}),Object(u.jsx)("p",{className:"item-detail__description-content",children:"In vehicula iaculis dolor quis tempor. Praesent vitae neque quis diam efficitur aliquet vel eu metus. Sed finibus lorem non efficitur dapibus. Ut sodales id nisl sed ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper ultricies laoreet. Vivamus dignissim finibus erat, ac mattis nulla scelerisque id. Proin ornare arcu velit, quis aliquam lorem molestie id. Nulla mattis gravida metus, et bibendum tortor scelerisque vitae."})]}),Object(u.jsxs)(j.a,{item:!0,xs:10,sm:3,children:[Object(u.jsx)("p",{className:"item-detail__condition",children:" Nuevo - 24 vendidos"}),Object(u.jsx)("h1",{className:"item-detail__name",children:" Deco Reverse Sombrero Oxford"}),Object(u.jsx)(m,{price:"1.980,00",small:!1}),Object(u.jsx)(p,{text:"Comprar",clickHandler:function(){return console.log("compra")}})]})]})]})});var z=function(){return Object(u.jsxs)(r.a,{children:[Object(u.jsx)(_,{}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/",exact:!0,component:w}),Object(u.jsx)(l.a,{path:"/items",exact:!0,component:E}),Object(u.jsx)(l.a,{path:"/items/:id",component:P})]})]})};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.8b66a1a9.chunk.js.map