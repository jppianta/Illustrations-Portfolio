(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{112:function(e,t,a){e.exports=a(229)},117:function(e,t,a){},118:function(e,t,a){},229:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),s=a.n(i),c=(a(117),a(87)),l=a(88),r=a(108),m=a(110),u=(a(118),a(89)),d=a.n(u),p=a(90),h=a.n(p),f=a(91),g=a.n(f),v=a(92),E=a.n(v),b=[{src:g.a,title:"Me"},{src:h.a,title:"Chinese Dragon"},{src:E.a,title:"Twitter"},{src:d.a,title:"Base Forms"}],w=a(93),N=a.n(w),C=a(232),O=a(39),k=a.n(O),I=C.a.Meta,P=function(e){Object(m.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).selectImg=function(e){var t=e.target,a=n.getImgElement(t).src,o=b.find((function(e){return a.endsWith(e.src)}));n.setState({selected:o,visible:!0})},n.handleCancel=function(){n.setState({visible:!1})},n.onMenuSelect=function(e){var t=e.target.innerHTML;n.setState({menuOption:t})},n.state={selected:null,menuOption:"Portfolio",modalVisible:!1},n}return Object(l.a)(a,[{key:"getImgElement",value:function(e){for(;!e.classList.contains("ant-card");)e=e.parentElement;return e.getElementsByClassName("cardImg")[0]}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"header"},o.a.createElement("img",{className:"logoImg",src:N.a,alt:"Joao Pedro Pianta"}),o.a.createElement("h1",null,"Jo\xe3o Pedro Pianta"),o.a.createElement("div",{className:"menu"},o.a.createElement("div",{className:"optionContainer"},o.a.createElement("span",{className:"menuOption ".concat("Portfolio"===this.state.menuOption?"selectedOption":""),onClick:this.onMenuSelect},"Portfolio")),o.a.createElement("hr",{className:"separator"}),o.a.createElement("div",{className:"optionContainer"},o.a.createElement("span",{className:"menuOption ".concat("About"===this.state.menuOption?"selectedOption":""),onClick:this.onMenuSelect},"About")))),"Portfolio"===this.state.menuOption?o.a.createElement("div",{className:"portfolio tabContent"},b.map((function(t){return o.a.createElement(C.a,{key:t.title,hoverable:!0,cover:o.a.createElement("img",{className:"cardImg",alt:t.title,src:t.src}),onClick:e.selectImg},o.a.createElement(I,{title:t.title}))}))):o.a.createElement("div",{className:"about tabContent"},"Hi, my name is Jo\xe3o Pedro Pianta. I am a brazillian Software Engineer who loves art. I started creating some illustrations just for fun, but since I am a good frontend engineer, why not combine the two skills and create this beatiful portfolio, right?"),o.a.createElement(k.a,{title:this.state.selected&&this.state.selected.title,width:800,visible:this.state.visible,onCancel:this.handleCancel,footer:null},this.state.selected?o.a.createElement("img",{className:"modalImg",alt:this.state.selected.title,src:this.state.selected.src}):null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,a){e.exports=a.p+"static/media/Background.a70fc984.png"},90:function(e,t,a){e.exports=a.p+"static/media/Dragon1600X1200.c57547cd.png"},91:function(e,t,a){e.exports=a.p+"static/media/SelfPortrait.43aa8557.png"},92:function(e,t,a){e.exports=a.p+"static/media/Twitter.1c419518.png"},93:function(e,t,a){e.exports=a.p+"static/media/me.3d2baa1d.jpg"}},[[112,1,2]]]);
//# sourceMappingURL=main.9fb90e71.chunk.js.map