!function(e){function t(t){for(var n,o,i=t[0],c=t[1],d=t[2],f=0,m=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);m.length;)m.shift()();return l.push.apply(l,d||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={1:0},l=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=c;l.push([112,0,2]),r()}({112:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(24),o=r.n(l),i=r(26),c=r(37),d=r(15);var u={name:"dark"};var f=Object(d.b)({theme:(e=u,t)=>{switch(t.type){case"THEME_SET_DARK":return{name:"dark"};case"THEME_SET_LIGHT":return{name:"light"};default:return e}}});const m=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.c;var p=Object(d.d)(f,m()),s=r(1),g=r.n(s),h=r(4);const b=e=>e.theme.name;var v={dark:{colours:{global_background_primary:"#121212",global_content_primary:"#fff"}},light:{colours:{global_background_primary:"#fff",global_content_primary:"#000"}}};const y={children:g.a.node.isRequired},w=({children:e})=>{const t=Object(i.b)(b);return a.a.createElement(h.a,{theme:v[t]},e)};w.propTypes=y;var E=w,x=(r(80),r.p+"f57a62e9efddf6ace18b15572f81905b.woff2"),O=r.p+"347639ec49f4b2884a9657afded83ace.woff";let _;var S=Object(h.b)(_||(_=(e=>e)`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src:
      local('Open Sans Regular'),
      local('OpenSans-Regular'),
      url('${0}') format('woff2'),
      url('${0}') format('woff');
  }

  body {
    font-family: Open Sans, Segoe UI, Tahoma, sans-serif !important;
    background-color: #121212;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word;
    padding: 0;
    margin: 0;

    & > div#app {
      height: 100vh;
      display: flex;
    }
  }
`),x,O),j=r(25),T=r(3),k=r.p+"public/5dd3a5b29930771e95a1124dfcdeeb76.svg";var R={Wrapper:h.d.main(["flex-grow:1;display:flex;flex-direction:column;overflow:hidden;"])};const P={children:g.a.node.isRequired,title:g.a.string.isRequired},M=({children:e,title:t})=>a.a.createElement(R.Wrapper,null,a.a.createElement(j.a,{title:t}),e);M.propTypes=P;var W=M;r(42),r(101),r(109);const I={huge:1440,large:1170,medium:768,small:450};var N=Object.keys(I).reduce(((e,t)=>(e[t]=(...e)=>Object(h.c)(["@media (max-width:","em){","}"],I[t]/16,Object(h.c)(...e)),e)),{});let U,C,D,L,q=e=>e;var H={Wrapper:h.d.div(["flex-grow:1;display:flex;flex-direction:column;justify-content:center;align-items:center;user-select:none;"]),Logo:h.d.div(["position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;& > img{margin:.5rem .5rem .25rem .5rem;}"]),Status:h.d.h2(["min-width:10rem;max-width:100%;text-align:center;margin:.5rem;"," "," "," ",""],N.small(U||(U=q`
    max-width: 30rem;
  `)),N.medium(C||(C=q`
    max-width: 45rem;
  `)),N.large(D||(D=q`
    max-width: 70rem;
  `)),N.huge(L||(L=q`
    max-width: 100%;
  `)))};var J=()=>a.a.createElement(W,{title:"Under Construction"},a.a.createElement(H.Wrapper,null,a.a.createElement(H.Logo,null,a.a.createElement("img",{alt:"smiosoft",src:k,width:"80px",height:"80px",draggable:"false"})),a.a.createElement(H.Status,null,"UNDER CONSTRUCTION")));var X=()=>a.a.createElement(T.d,null,a.a.createElement(T.b,{exact:!0,path:"/",component:J}),a.a.createElement(T.b,{exact:!0,path:"/under-construction",component:J}),a.a.createElement(T.a,{to:"/under-construction"}));var $={Wrapper:h.d.div(["height:100%;width:100%;display:flex;flex-direction:column;flex-wrap:nowrap;"])};var z=()=>a.a.createElement($.Wrapper,null,a.a.createElement(j.a,{titleTemplate:"%s / Smiosoft",defaultTitle:"Smiosoft"}),a.a.createElement(X,null));const A=a.a.createElement(i.a,{store:p},a.a.createElement(E,null,a.a.createElement(c.a,null,a.a.createElement(z,null)),a.a.createElement(S,null))),B=document.getElementById("app");o.a.render(A,B)}});