(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{26:function(n,e,t){n.exports=t(49)},49:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(20),c=t.n(a),i=t(2),u=t(3),s=t.n(u),l=t(6),p=t(9),f=t(5),m=t(4);function d(){var n=Object(i.a)(["\n  background: ",";\n  color: #fff;\n  font-size: 14px;\n  text-align: center;\n  padding: 20px 0;\n  font-weight: bold;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  bottom: 0%;\n  opacity: ",";\n  transition: all 300ms;\n"]);return d=function(){return n},n}function b(){var n=Object(i.a)(["\n  font-size: 45px;\n  font-weight: 900;\n  margin: 0;\n  margin-bottom: 30px;\n"]);return b=function(){return n},n}function h(){var n=Object(i.a)(["\n  width: 100%;\n  max-width: 660px;\n  margin: 0 auto;\n  margin-top: 10vh;\n  form {\n    display: flex;\n    flex-direction: column;\n  }\n\n  input,\n  textarea {\n    -webkit-box-shadow: inset 1px 0px 8px 0px rgba(164, 183, 214, 1);\n    box-shadow: inset 1px 0px 8px 0px rgba(164, 183, 214, 1);\n    border-radius: 30px;\n    background: rgb(223, 234, 253);\n    padding: 15px 30px;\n    margin-bottom: 20px;\n    font-size: 16px;\n    color: #000;\n    border: none;\n    transition: 200ms;\n\n    &:valid {\n      background: #fff;\n    }\n\n    &::placeholder {\n      color: rgba(0, 0, 0, 0.2);\n    }\n\n    &:focus {\n      background: #fff;\n      outline: none;\n    }\n  }\n\n  button {\n    cursor: pointer;\n    box-shadow: 1px 0px 8px 0px rgba(164, 183, 214, 1);\n    border-radius: 30px;\n    background: #fff;\n    padding: 15px 30px;\n    margin-bottom: 20px;\n    font-size: 16px;\n    color: #000;\n    border: none;\n    font-weight: 600;\n\n    &:focus {\n      outline: none;\n    }\n  }\n"]);return h=function(){return n},n}var g=m.b.div(h()),x=m.b.h1(b()),w=m.b.div(d(),(function(n){return(n.error?"#f36453":"")||(n.success?"#16C72E":"")}),(function(n){return n.error||n.success?"1":"0"})),v=t(24),k=t.n(v).a.create({baseURL:"https://codechallenge-backend.herokuapp.com"}),E=function(){var n=Object(l.a)(s.a.mark((function n(e){var t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.post("/mail",e);case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function y(){var n=Object(r.useState)(!1),e=Object(p.a)(n,2),t=e[0],a=e[1],c=Object(r.useState)(!1),i=Object(p.a)(c,2),u=i[0],m=i[1];function d(){return(d=Object(l.a)(s.a.mark((function n(e){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E(e);case 3:m(!0),setTimeout((function(){m(!1)}),2e3),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),a(!0),setTimeout((function(){a(!1)}),2e3);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}return o.a.createElement(g,null,o.a.createElement(x,null,"Easy way to send email!"),o.a.createElement(w,{error:t,success:u},t?"Something went wrong!":"",u?"E-mail sent!":""),o.a.createElement(f.a,{onSubmit:function(n){return d.apply(this,arguments)},reset:!0},o.a.createElement(f.b,{name:"from",type:"text",placeholder:"From: Matheus <wolfzera@icloud.com>",autoComplete:"off",required:!0}),o.a.createElement(f.b,{name:"to",type:"email",placeholder:"To: hireme@thetacode.com",autoComplete:"off",required:!0}),o.a.createElement(f.b,{name:"subject",type:"text",placeholder:"Subject: <CodeChallenge />",autoComplete:"off",required:!0}),o.a.createElement(f.c,{name:"text",placeholder:"Message",autoComplete:"off",rows:"10",required:!0}),o.a.createElement("button",{type:"submit"},"send email")))}function j(){var n=Object(i.a)(["\n \n  body {\n    font-family: 'Nanum Gothic';\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background: rgb(223,234,253);\n    background: linear-gradient(180deg, rgba(223,234,253,1) 0%, rgba(243,248,255,1) 100%) no-repeat;\n    height: 100vh; \n  }\n"]);return j=function(){return n},n}var O=Object(m.a)(j());var C=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,null),o.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.c9446e39.chunk.js.map