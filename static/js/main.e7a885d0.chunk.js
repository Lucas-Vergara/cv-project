(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{27:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(3),s=n.n(a),c=n(14),r=n.n(c),l=n(4),d=(n(9),n(5)),j=n(6),b=n(1),o=n(8),h=n(7),u=n(15);function O(e){var t=e.target.name;this.setState(Object(u.a)({},t,e.target.value))}function m(e){e.preventDefault(),this.setState({editing:!1})}var x=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={editing:!1,title:"Puesto que ocupaste",place:"Empresa y lugar",years:"Fecha inicio - Fecha fin",description:"Descripci\xf3n del puesto y responsabilidades. En lugar de listar tareas, explica brevemente \xbfQue conseguiste en este puesto?, \xbfComo aplicaste tus conocimientos para el beneficio de la empresa?"},i.onChangeHandler=O.bind(Object(b.a)(i)),i.submitHandler=m.bind(Object(b.a)(i)),i}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.editing,a=t.title,s=t.place,c=t.years,r=t.description;return n?Object(i.jsx)("div",{id:"work",children:Object(i.jsxs)("form",{onSubmit:this.submitHandler,className:"form",children:[Object(i.jsx)("input",{type:"text",name:"title",value:a,onChange:this.onChangeHandler}),Object(i.jsx)("input",{type:"text",name:"place",value:s,onChange:this.onChangeHandler}),Object(i.jsx)("input",{type:"text",name:"years",value:c,onChange:this.onChangeHandler}),Object(i.jsx)("input",{type:"text",name:"description",value:r,onChange:this.onChangeHandler}),Object(i.jsx)("button",{type:"submit",children:"Aceptar"})]})}):Object(i.jsxs)("div",{id:"work",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("nav",{className:"highlight1",children:a}),Object(i.jsx)("nav",{children:s})]}),Object(i.jsx)("div",{className:"highlight2",children:c}),Object(i.jsxs)("div",{children:[r,Object(i.jsx)(l.a,{icon:"pencil-alt",className:"edit",onClick:function(){return e.setState({editing:!0})}})]})]})}}]),n}(a.Component),p=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={editing:!1,content:"Informaci\xf3n personal, metas, intereces, etc."},i.onChangeHandler=O.bind(Object(b.a)(i)),i.submitHandler=m.bind(Object(b.a)(i)),i}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.editing,a=t.content;return n?Object(i.jsx)("div",{id:"aboutMe",children:Object(i.jsxs)("form",{onSubmit:this.submitHandler,className:"form",children:[Object(i.jsx)("input",{type:"text",name:"content",value:a,onChange:this.onChangeHandler}),Object(i.jsx)("button",{type:"submit",children:"Aceptar"})]})}):Object(i.jsxs)("div",{id:"aboutMe",children:[a,Object(i.jsx)(l.a,{icon:"pencil-alt",className:"edit",onClick:function(){return e.setState({editing:!0})}})]})}}]),n}(a.Component),v=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={editing:!1,title:"Titulaci\xf3n que obtuviste",years:"Fecha inicio - Fecha fin",place:"Instituci\xf3n o centro educativo"},i.onChangeHandler=O.bind(Object(b.a)(i)),i.submitHandler=m.bind(Object(b.a)(i)),i}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.editing,a=t.title,s=t.years,c=t.place;return n?Object(i.jsx)("div",{id:"studies",children:Object(i.jsxs)("form",{onSubmit:this.submitHandler,className:"form",children:[Object(i.jsx)("input",{type:"text",name:"title",value:a,onChange:this.onChangeHandler}),Object(i.jsx)("input",{type:"text",name:"years",value:s,onChange:this.onChangeHandler}),Object(i.jsx)("input",{type:"text",name:"place",value:c,onChange:this.onChangeHandler}),Object(i.jsx)("button",{type:"submit",children:"Aceptar"})]})}):Object(i.jsxs)("div",{id:"studies",children:[Object(i.jsx)("div",{className:"highlight1",children:a}),Object(i.jsx)("div",{className:"highlight3",children:s}),Object(i.jsxs)("div",{className:"highlight2",children:[c,Object(i.jsx)(l.a,{icon:"pencil-alt",className:"edit",onClick:function(){return e.setState({editing:!0})}})]})]})}}]),n}(a.Component),g=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={editing:!1,title:"Nombre del curso",place:"Instituci\xf3n o centro educativo",years:"2018"},i.onChangeHandler=O.bind(Object(b.a)(i)),i.submitHandler=m.bind(Object(b.a)(i)),i}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.editing,a=t.title,s=t.place,c=t.years;return n?Object(i.jsx)("div",{id:"work",children:Object(i.jsxs)("form",{onSubmit:this.submitHandler,className:"form",children:[Object(i.jsx)("input",{type:"text",name:"title",value:a,onChange:this.onChangeHandler}),Object(i.jsx)("input",{type:"text",name:"place",value:s,onChange:this.onChangeHandler}),Object(i.jsx)("input",{type:"text",name:"years",value:c,onChange:this.onChangeHandler}),Object(i.jsx)("button",{type:"submit",children:"Aceptar"})]})}):Object(i.jsxs)("li",{id:"secondaryStudies",children:[Object(i.jsxs)("span",{className:"highlight1",children:[" ",a," - "]}),Object(i.jsxs)("span",{className:"highlight2",children:[" ",s," - "]}),Object(i.jsxs)("span",{children:[" ",c," "]}),Object(i.jsx)(l.a,{icon:"pencil-alt",className:"edit",onClick:function(){return e.setState({editing:!0})}})]})}}]),n}(a.Component),C=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={editing:!1,name:"Nombre",title:"T\xedtulo",adress:"Direcci\xf3n",email:"Correo Electr\xf3nico",phone:"N\xfamero Telef\xf3nico"},i.onChangeHandler=O.bind(Object(b.a)(i)),i.submitHandler=m.bind(Object(b.a)(i)),i}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.editing,a=t.name,s=t.title,c=t.adress,r=t.email,d=t.phone;return n?Object(i.jsx)("div",{id:"header",children:Object(i.jsxs)("form",{onSubmit:this.submitHandler,className:"form",children:[Object(i.jsx)("input",{type:"text",name:"name",value:a,onChange:this.onChangeHandler}),Object(i.jsx)("input",{type:"text",name:"title",value:s,onChange:this.onChangeHandler}),Object(i.jsx)("input",{type:"text",name:"adress",value:c,onChange:this.onChangeHandler}),Object(i.jsx)("input",{type:"text",name:"email",value:r,onChange:this.onChangeHandler}),Object(i.jsx)("input",{type:"text",name:"phone",value:d,onChange:this.onChangeHandler}),Object(i.jsx)("button",{type:"submit",children:"Aceptar"})]})}):Object(i.jsxs)("div",{id:"header",children:[Object(i.jsxs)("h1",{className:"highlight1",children:[" ",a," "]}),Object(i.jsxs)("h2",{className:"highlight2",children:[" ",s," "]}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("span",{children:[" ",Object(i.jsx)(l.a,{icon:"map-marker-alt"})," ",c," "]}),Object(i.jsxs)("span",{children:[" ",Object(i.jsx)(l.a,{icon:"envelope"})," ",r," "]}),Object(i.jsxs)("span",{children:[" ",Object(i.jsx)(l.a,{icon:"phone-alt"})," ",d," "]}),Object(i.jsx)(l.a,{icon:"pencil-alt",className:"edit",onClick:function(){return e.setState({editing:!0})}})]})]})}}]),n}(a.Component),f=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={editing:!1,content:"Habilidad t\xe9cnica"},i.onChangeHandler=O.bind(Object(b.a)(i)),i.submitHandler=m.bind(Object(b.a)(i)),i}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.editing,a=t.content;if(!n)return Object(i.jsxs)("div",{id:"abilities",children:[a,Object(i.jsx)(l.a,{icon:"pencil-alt",className:"edit",onClick:function(){return e.setState({editing:!0})}})]});this.submitHandler,this.onChangeHandler}}]),n}(a.Component),y=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={editing:!1,language:"Idioma",level:"Nivel de dominio"},i.onChangeHandler=O.bind(Object(b.a)(i)),i.submitHandler=m.bind(Object(b.a)(i)),i}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.editing,a=t.language,s=t.level;return n?Object(i.jsxs)("form",{onSubmit:this.submitHandler,className:"form",children:[Object(i.jsx)("input",{type:"text",name:"language",value:a,onChange:this.onChangeHandler}),Object(i.jsx)("input",{type:"text",name:"level",value:s,onChange:this.onChangeHandler}),Object(i.jsx)("button",{type:"submit",children:"Aceptar"})]}):Object(i.jsxs)("div",{id:"languages",children:[Object(i.jsxs)("span",{children:[" ",a," - "]})," ",Object(i.jsxs)("span",{children:[" ",s," "]}),Object(i.jsx)("div",{children:Object(i.jsx)(l.a,{icon:"pencil-alt",className:"edit",onClick:function(){return e.setState({editing:!0})}})})]})}}]),n}(a.Component),H=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={editing:!1,certificate:"Certificaci\xf3n",entity:"Entidad"},i.onChangeHandler=O.bind(Object(b.a)(i)),i.submitHandler=m.bind(Object(b.a)(i)),i}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.editing,a=t.certificate,s=t.entity;return n?Object(i.jsxs)("form",{onSubmit:this.submitHandler,className:"form",children:[Object(i.jsx)("input",{type:"text",name:"certificate",value:a,onChange:this.onChangeHandler}),Object(i.jsx)("input",{type:"text",name:"entity",value:s,onChange:this.onChangeHandler}),Object(i.jsx)("button",{type:"submit",children:"Aceptar"})]}):Object(i.jsxs)("div",{id:"certificates",children:[Object(i.jsxs)("div",{children:[" ",a," "]}),Object(i.jsxs)("div",{className:"highlight1",children:[" ",s," "]}),Object(i.jsx)(l.a,{icon:"pencil-alt",className:"edit",onClick:function(){return e.setState({editing:!0})}})]})}}]),n}(a.Component),N=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={editing:!1,icon:"Icono",content:"\xbfPorque esta es una de tus aficiones? \xbfQue te aporta?"},i.onChangeHandler=O.bind(Object(b.a)(i)),i.submitHandler=m.bind(Object(b.a)(i)),i}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.editing,a=t.icon,s=t.content;return n?Object(i.jsxs)("form",{onSubmit:this.submitHandler,className:"form",children:[Object(i.jsx)("input",{type:"text",name:"icon",value:a,onChange:this.onChangeHandler}),Object(i.jsx)("input",{type:"text",name:"content",value:s,onChange:this.onChangeHandler}),Object(i.jsx)("button",{type:"submit",children:"Aceptar"})]}):Object(i.jsxs)("div",{id:"otherInterests",children:[Object(i.jsxs)("div",{children:[" ",a," "]}),Object(i.jsxs)("div",{children:[" ",s," "]}),Object(i.jsx)(l.a,{icon:"pencil-alt",className:"edit",onClick:function(){return e.setState({editing:!0})}})]})}}]),n}(a.Component);var k=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("div",{id:"body",children:[Object(i.jsx)("div",{className:"module",children:Object(i.jsx)(C,{})}),Object(i.jsxs)("div",{id:"container",children:[Object(i.jsxs)("div",{id:"mainBody",children:[Object(i.jsxs)("div",{className:"module",children:[Object(i.jsx)("div",{className:"subtitle",children:"Sobre M\xed"}),Object(i.jsx)(p,{})]}),Object(i.jsxs)("div",{className:"module",children:[Object(i.jsxs)("div",{className:"subtitle",children:["Experiencia Laboral",Object(i.jsx)(l.a,{icon:"plus"})]}),Object(i.jsx)(x,{})]}),Object(i.jsxs)("div",{className:"module",children:[Object(i.jsxs)("div",{className:"subtitle",children:["Formaci\xf3n Acad\xe9mica",Object(i.jsx)(l.a,{icon:"plus"})]}),Object(i.jsx)(v,{})]}),Object(i.jsxs)("div",{className:"module",children:[Object(i.jsxs)("div",{className:"subtitle",children:["Formaci\xf3n Complementaria",Object(i.jsx)(l.a,{icon:"plus"})]}),Object(i.jsx)(g,{})]})]}),Object(i.jsxs)("div",{id:"secondBody",children:[Object(i.jsxs)("div",{className:"module",children:[Object(i.jsx)("div",{className:"subtitle",children:" Habilidades "}),Object(i.jsx)(f,{})]}),Object(i.jsxs)("div",{className:"module",children:[Object(i.jsx)("div",{className:"subtitle",children:" Idiomas "}),Object(i.jsx)(y,{})]}),Object(i.jsxs)("div",{className:"module",children:[Object(i.jsx)("div",{className:"subtitle",children:" Certificados "}),Object(i.jsx)(H,{})]}),Object(i.jsxs)("div",{className:"module",children:[Object(i.jsx)("div",{className:"subtitle",children:" Otros Intereses "}),Object(i.jsx)(N,{})]})]})]})]})})},S=n(11),A=n(16),I=n(10);S.b.add(A.a,I.a,I.b,I.e,I.g,I.f,I.c,I.d),r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(k,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[27,1,2]]]);
//# sourceMappingURL=main.e7a885d0.chunk.js.map