(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,a){e.exports={divForm:"CreatePage_divForm__NC-jr",divsSmallImputs:"CreatePage_divsSmallImputs__3cGmd",bigTextContainer:"CreatePage_bigTextContainer__1U1XQ",textarea:"CreatePage_textarea__30wB4",steps:"CreatePage_steps__2XJFs",dietsOptions:"CreatePage_dietsOptions__1wNt-",sendButton:"CreatePage_sendButton__2uqwK"}},19:function(e,t,a){e.exports={LinkCreate:"StartButton_LinkCreate__1K8ex",span1:"StartButton_span1__SOy9b",span2:"StartButton_span2__3P_03",span3:"StartButton_span3__2dUDb",span4:"StartButton_span4__TWo7n"}},23:function(e,t,a){e.exports={divLanding:"LandingPage_divLanding__3JaEE",CONOCEME:"LandingPage_CONOCEME__1Bm9D"}},31:function(e,t,a){e.exports={header:"navBar_header__1UbjH",back:"navBar_back__2g7Fw",link:"navBar_link__1YJ6V",create:"navBar_create__2NkEh"}},36:function(e,t,a){e.exports={card:"Card_card__26JdX"}},41:function(e,t,a){e.exports={divCardsContainer:"CardsContainer_divCardsContainer__18eyK"}},46:function(e,t,a){e.exports={formSearchBar:"SearchBar_formSearchBar__1w8v-"}},53:function(e,t,a){},54:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(25),s=a.n(r),i=(a(53),a(54),a(23)),l=a.n(i),j=a(9),o=a(19),d=a.n(o),b=a(1),u=function(){return Object(b.jsxs)(j.b,{to:"/home",className:d.a.LinkCreate,children:[Object(b.jsx)("span",{className:d.a.span1}),Object(b.jsx)("span",{className:d.a.span2}),Object(b.jsx)("span",{className:d.a.span3}),Object(b.jsx)("span",{className:d.a.span4}),"START"]})},p=function(){return console.log("stylesland: ",l.a),Object(b.jsxs)("div",{className:l.a.divLanding,children:[Object(b.jsxs)("main",{children:[Object(b.jsxs)("section",{children:[Object(b.jsx)("h1",{children:"Ceasar Chef"}),Object(b.jsxs)("p",{children:["Para ti amante de la cocina, has llegado al lugar indicado. ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"En easy cook encontrar\xe1s las mejores recetas de cocina a la vez que podr\xe1s tambi\xe9n compartir tus recetas para que mucha m\xe1s gente la conozca."]})]}),Object(b.jsx)("aside",{children:Object(b.jsx)(u,{className:l.a.linkLanding,children:" "})})]}),Object(b.jsx)("footer",{children:Object(b.jsx)(j.b,{to:"/knowMe",className:l.a.CONOCEME,children:"CONOCEME"})})]})},h=a(12),O=a(13),x=a(40),m=a(48),f=a(36),_=a.n(f);var v=function(e){Object(x.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).myRef=c.a.createRef(),e.testRef=function(t){e.addBr(t)},e}return Object(O.a)(a,[{key:"addBr",value:function(e){var t="";if(e)if((t=e.innerText).length>36){for(var a=35;a>=0;a--)if(" "===t[a]){var n=t.split("");n.splice(a,0,"<br>");var c=n.join("");return void(e.innerHTML=c)}}else e.style.cssText="display:flex ; justify-content:center ; align-items:center"}},{key:"render",value:function(){return Object(b.jsxs)(j.b,{to:"/details",className:_.a.card,children:[Object(b.jsx)("h4",{ref:this.testRef,className:_.a.test,children:this.props.name}),Object(b.jsx)("img",{src:this.props.img,alt:"Recipe"}),Object(b.jsx)("span",{children:Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Diets: "}),(e=this.props.diets,(e=e.map((function(e){return e.name}))).join("  -  "))]})})]});var e}}]),a}(c.a.Component),g=v,C=a(41),y=a.n(C),N=a(17),S=function(){var e=Object(N.c)((function(e){return e.recipes}));return console.log(e),Object(b.jsx)("div",{className:y.a.divCardsContainer,children:e.map((function(e){return Object(b.jsx)(g,{name:e.name,img:e.img,diets:e.dietTypes})}))})},B=a(37),E=a(43),k="GET ALL RECIPES",F=a(70),P=function(){var e=Object(N.b)();return Object(n.useEffect)((function(){e(function(){var e=Object(E.a)(Object(B.a)().mark((function e(t){var a,n;return Object(B.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("http://localhost:3001/recipes");case 2:a=e.sent,n=a.data,t({type:k,payload:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(S,{})})},T=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"DetailsPage"}),Object(b.jsx)(g,{})]})},D=a(29),L=a(14),w=a(18),R=a(11),I=a.n(R),M=function(){var e=Object(n.useState)({name:"",resumenDelPlato:"",healthScore:"",stepByStep:"",dietTypes:[]}),t=Object(w.a)(e,2),a=t[0],c=t[1],r=function(e){var t=e.target.name,n=e.target.value;console.log(a),c(Object(L.a)(Object(L.a)({},a),{},Object(D.a)({},t,n))),console.log(a)};return Object(b.jsx)("div",{id:I.a.divForm,children:Object(b.jsxs)("form",{children:[Object(b.jsx)("h1",{children:"Create your Recipe"}),Object(b.jsxs)("divs",{children:[Object(b.jsxs)("div",{className:I.a.divsSmallImputs,children:[Object(b.jsx)("label",{htmlFor:"name",children:"Nombre de tu receta: "}),Object(b.jsx)("input",{onChange:function(e){return r(e)},placeholder:"Write your recipe Name...",type:"text",name:"name",autoComplete:"off"})]}),Object(b.jsxs)("div",{className:I.a.divsSmallImputs,children:[Object(b.jsx)("label",{htmlFor:"healthScore",children:"\xbfQu\xe9 tan saludable es?"}),Object(b.jsx)("input",{onChange:function(e){return r(e)},placeholder:"On a scale from 1 to 100...",type:"number",min:"0",max:"100",name:"healthScore",autoComplete:"off"})]}),Object(b.jsxs)("div",{className:I.a.divsSmallImputs,children:[Object(b.jsx)("label",{htmlFor:"imgUrl",children:"Imagen demostrativa"}),Object(b.jsx)("input",{onChange:function(e){return r(e)},placeholder:"Enter a url of a reference image...",type:"url",name:"imgUrl",autoComplete:"off"})]}),Object(b.jsxs)("div",{className:I.a.bigTextContainer,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"resumenDelPlato",children:"Resumen del plato"}),Object(b.jsx)("textarea",{onChange:function(e){return r(e)},placeholder:"Enter a quikly summary of your recipe...",type:"textarea",name:"resumenDelPlato",className:I.a.textarea})]}),Object(b.jsxs)("div",{id:I.a.steps,children:[Object(b.jsx)("label",{htmlFor:"stepByStep",children:"Step by Step"}),Object(b.jsx)("textarea",{onChange:function(e){return r(e)},placeholder:"Describe your recipe step by step...",type:"text",name:"stepByStep",className:I.a.textarea})]})]})]}),Object(b.jsxs)("ul",{id:I.a.dietsOptions,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"checkbox"}),Object(b.jsx)("label",{htmlFor:"",children:"Dieta"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"checkbox"}),Object(b.jsx)("label",{htmlFor:"",children:"Dieta"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"checkbox"}),Object(b.jsx)("label",{htmlFor:"",children:"Dieta"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"checkbox"}),Object(b.jsx)("label",{htmlFor:"",children:"Dieta"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"checkbox"}),Object(b.jsx)("label",{htmlFor:"",children:"Dieta"})]})]}),Object(b.jsx)("button",{id:I.a.sendButton,type:"submit",value:"Save",children:"Enviar"})]})})},A=a(46),J=a.n(A),U=a.p+"static/media/lupa.1b33b252.png",X=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{action:"",className:J.a.formSearchBar,children:[Object(b.jsx)("input",{type:"text",placeholder:"Busca una receta",name:"name"}),Object(b.jsx)("button",{type:"submit",children:Object(b.jsx)("img",{src:U,alt:"Lupa logo"})})]})})},q=a(31),K=a.n(q),z=function(){return Object(b.jsxs)("header",{className:K.a.header,children:[Object(b.jsx)(j.b,{className:K.a.back,to:"/",children:"BACK"}),Object(b.jsx)(X,{}),Object(b.jsx)(j.b,{to:"/create",className:K.a.create,children:Object(b.jsx)("span",{children:"CREATE"})})]})},G=a(5);var H=function(){var e=Object(G.e)();return Object(b.jsxs)("div",{className:"App",children:["/"!==e.pathname&&Object(b.jsx)(z,{}),Object(b.jsx)(G.a,{exact:!0,path:"/",component:p}),"   ",Object(b.jsx)(G.a,{exact:!0,path:"/home",render:function(){return Object(b.jsx)(P,{})}})," ",Object(b.jsx)(G.a,{path:"/details",render:function(){return Object(b.jsx)(T,{})}}),Object(b.jsx)(G.a,{path:"/create",render:function(){return Object(b.jsx)(M,{})}})]})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},V=a(32),W=a(38),Y={recipes:[]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;return console.log(t),t.type===k?Object(L.a)(Object(L.a)({},e),{},{recipes:[].concat(Object(W.a)(e.recipes),Object(W.a)(t.payload))}):(console.log("jajajadefalut"),Object(L.a)({},e))},$=a(47),ee=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.b)(Object(V.a)($.a)),te=Object(V.c)(Z,ee);s.a.render(Object(b.jsx)(N.a,{store:te,children:Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(H,{})})})}),document.getElementById("root")),Q()}},[[68,1,2]]]);
//# sourceMappingURL=main.b1797cd3.chunk.js.map