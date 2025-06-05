import{y as t,J as P,V as b,P as x,X as s,Y as E,Z as O,Q as V,$ as R,_ as m,a0 as H}from"./vendor-react-CTURZAkq.js";import{U,u as D,V as J}from"./vendor-react-dom-CVPC-BA4.js";var k=t.createContext({});function Q(n){return n.replace(/-(.)/g,function(e,o){return o.toUpperCase()})}function W(n,e){J(n,"[@ant-design/icons] ".concat(e))}function z(n){return b(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(b(n.icon)==="object"||typeof n.icon=="function")}function I(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(e,o){var a=n[o];switch(o){case"class":e.className=a,delete e.class;break;default:delete e[o],e[Q(o)]=a}return e},{})}function w(n,e,o){return o?x.createElement(n.tag,s(s({key:e},I(n.attrs)),o),(n.children||[]).map(function(a,r){return w(a,"".concat(e,"-").concat(n.tag,"-").concat(r))})):x.createElement(n.tag,s({key:e},I(n.attrs)),(n.children||[]).map(function(a,r){return w(a,"".concat(e,"-").concat(n.tag,"-").concat(r))}))}function _(n){return P(n)[0]}function $(n){return n?Array.isArray(n)?n:[n]:[]}var X=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,Y=function(e){var o=t.useContext(k),a=o.csp,r=o.prefixCls,l=o.layer,i=X;r&&(i=i.replace(/anticon/g,r)),l&&(i="@layer ".concat(l,` {
`).concat(i,`
}`)),t.useEffect(function(){var f=e.current,g=U(f);D(i,"@ant-design-icons",{prepend:!l,csp:a,attachTo:g})},[])},Z=["icon","className","onClick","style","primaryColor","secondaryColor"],v={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function q(n){var e=n.primaryColor,o=n.secondaryColor;v.primaryColor=e,v.secondaryColor=o||_(e),v.calculated=!!o}function F(){return s({},v)}var C=function(e){var o=e.icon,a=e.className,r=e.onClick,l=e.style,i=e.primaryColor,f=e.secondaryColor,g=E(e,Z),y=t.useRef(),u=v;if(i&&(u={primaryColor:i,secondaryColor:f||_(i)}),Y(y),W(z(o),"icon should be icon definiton, but got ".concat(o)),!z(o))return null;var c=o;return c&&typeof c.icon=="function"&&(c=s(s({},c),{},{icon:c.icon(u.primaryColor,u.secondaryColor)})),w(c.icon,"svg-".concat(c.name),s(s({className:a,onClick:r,style:l,"data-icon":c.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},g),{},{ref:y}))};C.displayName="IconReact";C.getTwoToneColors=F;C.setTwoToneColors=q;function N(n){var e=$(n),o=O(e,2),a=o[0],r=o[1];return C.setTwoToneColors({primaryColor:a,secondaryColor:r})}function G(){var n=C.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var K=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];N(H.primary);var d=t.forwardRef(function(n,e){var o=n.className,a=n.icon,r=n.spin,l=n.rotate,i=n.tabIndex,f=n.onClick,g=n.twoToneColor,y=E(n,K),u=t.useContext(k),c=u.prefixCls,p=c===void 0?"anticon":c,S=u.rootClassName,B=V(S,p,R(R({},"".concat(p,"-").concat(a.name),!!a.name),"".concat(p,"-spin"),!!r||a.name==="loading"),o),h=i;h===void 0&&f&&(h=-1);var L=l?{msTransform:"rotate(".concat(l,"deg)"),transform:"rotate(".concat(l,"deg)")}:void 0,A=$(g),T=O(A,2),M=T[0],j=T[1];return t.createElement("span",m({role:"img","aria-label":a.name},y,{ref:e,tabIndex:h,onClick:f,className:B}),t.createElement(C,{icon:a,primaryColor:M,secondaryColor:j,style:L}))});d.displayName="AntdIcon";d.getTwoToneColor=G;d.setTwoToneColor=N;var nn={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},en=function(e,o){return t.createElement(d,m({},e,{ref:o,icon:nn}))},mn=t.forwardRef(en),on={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},an=function(e,o){return t.createElement(d,m({},e,{ref:o,icon:on}))},Cn=t.forwardRef(an),tn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},rn=function(e,o){return t.createElement(d,m({},e,{ref:o,icon:tn}))},gn=t.forwardRef(rn),cn={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},ln=function(e,o){return t.createElement(d,m({},e,{ref:o,icon:cn}))},vn=t.forwardRef(ln),sn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},dn=function(e,o){return t.createElement(d,m({},e,{ref:o,icon:sn}))},yn=t.forwardRef(dn);export{k as I,mn as R,vn as a,gn as b,Cn as c,yn as d};
