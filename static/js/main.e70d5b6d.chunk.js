(this.webpackJsonpv=this.webpackJsonpv||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var a=c(0),i=c.n(a),s=c(17),j=c.n(s);c(38),c(39);function d(e){e.constructor=function(e){this.x=Math.random(0,e.width),this.y=Math.random(0,e.height),this.r=Math.random(1,8),this.xSpeed=Math.random(-1,.4),this.ySpeed=Math.random(-1,.4)};var t=[];e.setup=function(){e.createCanvas(1520,3330),this.circles()},e.circles=function(e){for(var c=0;c<300;c++){var a={x:Math.floor(Math.random()*(window.innerWidth-80)+60),y:Math.floor(Math.random()*(window.innerHeight-80)+60),diameter:Math.floor(10*Math.random()+10),dx:4*(Math.random()-.5),dy:4*(Math.random()-.5)};t.push(a)}};e.draw=function(){e.background(255),t.forEach((function(c){e.noStroke(),e.fill("rgba(255,255,255)"),e.ellipse(c.x,c.y,c.diameter,c.diameter),function(e){(e.x+e.diameter/3>window.innerWidth||e.x-e.diameter/3<0)&&(e.dx=-e.dx),(e.y+e.diameter/2>window.innerHeight||e.y-e.diameter/2<0)&&(e.dy=-e.dy),e.x+=e.dx,e.y+=e.dy}(c),t.forEach((function(t){var a=Math.abs(c.x-t.x),i=Math.abs(c.y-t.y);Math.sqrt(a*a+i*i)<105&&(e.stroke("rgba(0,0,0,0.5)"),e.line(c.x,c.y,t.x,t.y))}))}))}}var r=c(30),n=c.n(r),h=c(18),x=c(6),l=c(7),o=c(27),b=c(15),O=c(26),m=c(53),g=c(54),u=c(55),f=(c(41),c(1));var p=function(){function e(){return Object(f.jsx)("div",{id:"texto",children:Object(f.jsx)("h1",{children:"camile.duhart@gmail.com"})})}function t(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{id:"colorbarra",children:Object(f.jsxs)(o.a,{bg:"",variant:"light",children:[Object(f.jsx)(o.a.Brand,{href:"#home"}),Object(f.jsxs)(b.a,{className:"mr-auto",children:[Object(f.jsx)("div",{id:"inicio",children:Object(f.jsx)(h.b,{to:"/menu",children:"INICIO"})}),Object(f.jsx)("div",{id:"contacto",children:Object(f.jsx)(h.b,{variant:"light",to:"/Contacto",children:"CONTACTO"})}),Object(f.jsx)(b.a.Link,{href:"#logo"})]}),Object(f.jsxs)(b.a,{children:[Object(f.jsx)(b.a.Link,{href:"https://www.instagram.com/camile_duhart/?hl=es",children:Object(f.jsx)(l.a.Image,{width:50,height:50,alt:"100x180",src:"/\xf1ek.png"})}),Object(f.jsx)(b.a.Link,{href:"https://open.spotify.com/playlist/3rqBjkbluVBIyF4V1vBcjB?si=5a1cc7a0ce8c4088",children:Object(f.jsx)(l.a.Image,{width:50,height:50,alt:"100x180",src:"/images/spot.png"})}),Object(f.jsx)(b.a.Link,{href:"https://vimeo.com/k1000duhart",children:Object(f.jsx)(l.a.Image,{width:50,height:30,alt:"100x180",src:"/vime.png"})})]})]})})})}function c(){return Object(f.jsx)("main",{children:Object(f.jsx)("div",{id:"T\xedtulo",children:Object(f.jsx)("h1",{children:"CAMILE DUHART DODE"})})})}function a(){return Object(f.jsx)("div",{id:"contenidomenu",children:Object(f.jsx)(m.a,{children:Object(f.jsxs)(g.a,{children:[Object(f.jsxs)(u.a,{xs:6,md:4,children:[Object(f.jsx)(l.a.Image,{width:900,height:380,alt:"100x180",src:"/emages/insecto.jpg",fluid:!0}),Object(f.jsx)(h.b,{to:"/insecto",children:"h"})]}),Object(f.jsxs)(u.a,{xs:6,md:4,children:[Object(f.jsx)(l.a.Image,{width:900,height:380,alt:"100x180",src:"/images/articulado.jpg",fluid:!0}),Object(f.jsx)(h.b,{to:"/articulado",children:"h"})]}),Object(f.jsx)(u.a,{xs:6,md:4,children:Object(f.jsx)(l.a.Image,{width:900,height:380,alt:"100x180",src:"/images/bailarina.jpg",fluid:!0})}),Object(f.jsx)(u.a,{xs:6,md:4,children:Object(f.jsx)(l.a.Image,{width:900,height:380,alt:"100x180",src:"/images/artefact.jpg",fluid:!0})}),Object(f.jsxs)(u.a,{xs:6,md:4,children:[Object(f.jsx)(l.a.Image,{width:900,height:380,alt:"100x180",src:"/images/cuadro.jpg",fluid:!0}),Object(f.jsx)(l.a.Image,{width:900,height:380,alt:"100x180",src:"/images/fachada.jpg",fluid:!0})]}),Object(f.jsx)(u.a,{xs:6,md:4,children:Object(f.jsx)(l.a.Image,{width:900,height:380,alt:"100x180",src:"/images/cuadroazul.jpg",fluid:!0})})]})})})}function i(){return Object(f.jsx)(m.a,{children:Object(f.jsxs)(g.a,{children:[Object(f.jsxs)(u.a,{xs:5,md:4,children:[Object(f.jsxs)("h1",{children:["INSECTOS ",Object(f.jsx)(O.a,{variant:"secondary"})]}),Object(f.jsx)("h2",{children:"artefactos personalizados "}),Object(f.jsx)(l.a.Image,{width:900,height:380,alt:"100x180",src:"/images/insecto.jpg",fluid:!0})]}),Object(f.jsx)("div",{id:"cuadro",children:Object(f.jsx)(u.a,{xs:2,md:9,children:Object(f.jsx)(l.a.Image,{src:"/images/particulas.jpg",fluid:!0})})}),Object(f.jsx)("div",{id:"cuadro",children:Object(f.jsx)(u.a,{xs:2,md:9,children:Object(f.jsx)(l.a.Image,{src:"/emages/particulas.jpg",fluid:!0})})})]})})}function s(){return Object(f.jsx)(m.a,{children:Object(f.jsxs)(g.a,{children:[Object(f.jsxs)(u.a,{xs:9,md:9,children:[Object(f.jsxs)("h1",{children:["INSECTOS ",Object(f.jsx)(O.a,{variant:"secondary"})]}),Object(f.jsx)("h2",{children:"artefactos personalizados "}),Object(f.jsx)(l.a.Image,{width:900,height:380,alt:"100x180",src:"/images/articulado_oscuro.jpg",fluid:!0})]}),Object(f.jsx)("div",{id:"arti",children:Object(f.jsx)(u.a,{xs:8,md:7,children:Object(f.jsx)(l.a.Image,{src:"/images/articulado.jpg",fluid:!0})})}),Object(f.jsx)("div",{id:"cuadro",children:Object(f.jsx)(u.a,{xs:2,md:9,children:Object(f.jsx)(l.a.Image,{src:"/images/uno.jpg",fluid:!0})})}),Object(f.jsx)("div",{id:"cuadro",children:Object(f.jsx)(u.a,{xs:2,md:9,children:Object(f.jsx)(l.a.Image,{src:"/images/dos.jpg",fluid:!0})})}),Object(f.jsx)("div",{id:"cuadro",children:Object(f.jsx)(u.a,{xs:2,md:9,children:Object(f.jsx)(l.a.Image,{src:"/images/tres.jpg",fluid:!0})})}),Object(f.jsx)("div",{id:"cuadro",children:Object(f.jsx)(u.a,{xs:2,md:9,children:Object(f.jsx)(l.a.Image,{src:"/images/cuatro.jpg",fluid:!0})})})]})})}return Object(f.jsxs)(h.a,{children:[Object(f.jsx)(n.a,{sketch:d}),Object(f.jsx)(t,{}),Object(f.jsx)(x.a,{exact:!0,path:"/contacto",children:Object(f.jsx)(e,{})}),Object(f.jsx)(a,{}),Object(f.jsx)(x.a,{exact:!0,path:"/insecto",children:Object(f.jsx)(i,{})}),Object(f.jsx)(x.a,{exact:!0,path:"/articulado",children:Object(f.jsx)(s,{})}),Object(f.jsx)(c,{})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,56)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,j=t.getTTFB;c(e),a(e),i(e),s(e),j(e)}))};j.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root")),v()}},[[50,1,2]]]);
//# sourceMappingURL=main.e70d5b6d.chunk.js.map