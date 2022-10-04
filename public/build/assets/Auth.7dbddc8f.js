import{r as re,R as T,o as ne,I as G}from"./app.623e390a.js";import{I as W}from"./Icon.851fcee9.js";var h={exports:{}},oe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ae=oe,ie=ae;function z(){}function V(){}V.resetWarningCache=z;var se=function(){function t(r,o,a,u,s,i){if(i!==ie){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:V,resetWarningCache:z};return n.PropTypes=n,n};h.exports=se();function ce(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var X=re.exports,ue=ce(X);function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function le(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var fe=!!(typeof window<"u"&&window.document&&window.document.createElement);function pe(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(o){return o.displayName||o.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var u=[],s;function i(){s=t(u.map(function(l){return l.props})),c.canUseDOM?e(s):n&&(s=n(s))}var c=function(l){le(p,l);function p(){return l.apply(this,arguments)||this}p.peek=function(){return s},p.rewind=function(){if(p.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var E=s;return s=void 0,u=[],E};var d=p.prototype;return d.UNSAFE_componentWillMount=function(){u.push(this),i()},d.componentDidUpdate=function(){i()},d.componentWillUnmount=function(){var E=u.indexOf(this);u.splice(E,1),i()},d.render=function(){return ue.createElement(a,this.props)},p}(X.PureComponent);return B(c,"displayName","SideEffect("+r(a)+")"),B(c,"canUseDOM",fe),c}}var de=pe,me=typeof Element<"u",Te=typeof Map=="function",he=typeof Set=="function",ve=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function _(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,o;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!_(t[r],e[r]))return!1;return!0}var a;if(Te&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;for(a=t.entries();!(r=a.next()).done;)if(!_(r.value[1],e.get(r.value[0])))return!1;return!0}if(he&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(ve&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[r]))return!1;if(me&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&t.$$typeof)&&!_(t[o[r]],e[o[r]]))return!1;return!0}return t!==t&&e!==e}var ye=function(e,n){try{return _(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},w={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},f={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(f).map(function(t){return f[t]});var v={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},Ee=Object.keys(L).reduce(function(t,e){return t[L[e]]=e,t},{}),ge=[f.NOSCRIPT,f.SCRIPT,f.STYLE],g="data-react-helmet",Ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Se=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},be=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ce=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Y=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(t,r)||(n[r]=t[r]);return n},we=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},j=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Oe=function(e){var n=P(e,f.TITLE),r=P(e,I.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var o=P(e,I.DEFAULT_TITLE);return n||o||void 0},Pe=function(e){return P(e,I.ON_CHANGE_CLIENT_STATE)||function(){}},M=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,o){return y({},r,o)},{})},xe=function(e,n){return n.filter(function(r){return typeof r[f.BASE]<"u"}).map(function(r){return r[f.BASE]}).reverse().reduce(function(r,o){if(!r.length)for(var a=Object.keys(o),u=0;u<a.length;u++){var s=a[u],i=s.toLowerCase();if(e.indexOf(i)!==-1&&o[i])return r.concat(o)}return r},[])},R=function(e,n,r){var o={};return r.filter(function(a){return Array.isArray(a[e])?!0:(typeof a[e]<"u"&&_e("Helmet: "+e+' should be of type "Array". Instead found type "'+Ae(a[e])+'"'),!1)}).map(function(a){return a[e]}).reverse().reduce(function(a,u){var s={};u.filter(function(d){for(var m=void 0,E=Object.keys(d),A=0;A<E.length;A++){var S=E[A],b=S.toLowerCase();n.indexOf(b)!==-1&&!(m===v.REL&&d[m].toLowerCase()==="canonical")&&!(b===v.REL&&d[b].toLowerCase()==="stylesheet")&&(m=b),n.indexOf(S)!==-1&&(S===v.INNER_HTML||S===v.CSS_TEXT||S===v.ITEM_PROP)&&(m=S)}if(!m||!d[m])return!1;var x=d[m].toLowerCase();return o[m]||(o[m]={}),s[m]||(s[m]={}),o[m][x]?!1:(s[m][x]=!0,!0)}).reverse().forEach(function(d){return a.push(d)});for(var i=Object.keys(s),c=0;c<i.length;c++){var l=i[c],p=ne({},o[l],s[l]);o[l]=p}return a},[]).reverse()},P=function(e,n){for(var r=e.length-1;r>=0;r--){var o=e[r];if(o.hasOwnProperty(n))return o[n]}return null},Re=function(e){return{baseTag:xe([v.HREF,v.TARGET],e),bodyAttributes:M(w.BODY,e),defer:P(e,I.DEFER),encode:P(e,I.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:M(w.HTML,e),linkTags:R(f.LINK,[v.REL,v.HREF],e),metaTags:R(f.META,[v.NAME,v.CHARSET,v.HTTPEQUIV,v.PROPERTY,v.ITEM_PROP],e),noscriptTags:R(f.NOSCRIPT,[v.INNER_HTML],e),onChangeClientState:Pe(e),scriptTags:R(f.SCRIPT,[v.SRC,v.INNER_HTML],e),styleTags:R(f.STYLE,[v.CSS_TEXT],e),title:Oe(e),titleAttributes:M(w.TITLE,e)}},F=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){F(e)},0)}}(),q=function(e){return clearTimeout(e)},Ne=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||F:global.requestAnimationFrame||F,Ie=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||q:global.cancelAnimationFrame||q,_e=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},N=null,Le=function(e){N&&Ie(N),e.defer?N=Ne(function(){$(e,function(){N=null})}):($(e),N=null)},$=function(e,n){var r=e.baseTag,o=e.bodyAttributes,a=e.htmlAttributes,u=e.linkTags,s=e.metaTags,i=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,p=e.styleTags,d=e.title,m=e.titleAttributes;k(f.BODY,o),k(f.HTML,a),Me(d,m);var E={baseTag:O(f.BASE,r),linkTags:O(f.LINK,u),metaTags:O(f.META,s),noscriptTags:O(f.NOSCRIPT,i),scriptTags:O(f.SCRIPT,l),styleTags:O(f.STYLE,p)},A={},S={};Object.keys(E).forEach(function(b){var x=E[b],U=x.newTags,te=x.oldTags;U.length&&(A[b]=U),te.length&&(S[b]=E[b].oldTags)}),n&&n(),c(e,A,S)},Q=function(e){return Array.isArray(e)?e.join(""):e},Me=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=Q(e)),k(f.TITLE,n)},k=function(e,n){var r=document.getElementsByTagName(e)[0];if(!!r){for(var o=r.getAttribute(g),a=o?o.split(","):[],u=[].concat(a),s=Object.keys(n),i=0;i<s.length;i++){var c=s[i],l=n[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),a.indexOf(c)===-1&&a.push(c);var p=u.indexOf(c);p!==-1&&u.splice(p,1)}for(var d=u.length-1;d>=0;d--)r.removeAttribute(u[d]);a.length===u.length?r.removeAttribute(g):r.getAttribute(g)!==s.join(",")&&r.setAttribute(g,s.join(","))}},O=function(e,n){var r=document.head||document.querySelector(f.HEAD),o=r.querySelectorAll(e+"["+g+"]"),a=Array.prototype.slice.call(o),u=[],s=void 0;return n&&n.length&&n.forEach(function(i){var c=document.createElement(e);for(var l in i)if(i.hasOwnProperty(l))if(l===v.INNER_HTML)c.innerHTML=i.innerHTML;else if(l===v.CSS_TEXT)c.styleSheet?c.styleSheet.cssText=i.cssText:c.appendChild(document.createTextNode(i.cssText));else{var p=typeof i[l]>"u"?"":i[l];c.setAttribute(l,p)}c.setAttribute(g,"true"),a.some(function(d,m){return s=m,c.isEqualNode(d)})?a.splice(s,1):u.push(c)}),a.forEach(function(i){return i.parentNode.removeChild(i)}),u.forEach(function(i){return r.appendChild(i)}),{oldTags:a,newTags:u}},J=function(e){return Object.keys(e).reduce(function(n,r){var o=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+o:o},"")},He=function(e,n,r,o){var a=J(r),u=Q(n);return a?"<"+e+" "+g+'="true" '+a+">"+j(u,o)+"</"+e+">":"<"+e+" "+g+'="true">'+j(u,o)+"</"+e+">"},je=function(e,n,r){return n.reduce(function(o,a){var u=Object.keys(a).filter(function(c){return!(c===v.INNER_HTML||c===v.CSS_TEXT)}).reduce(function(c,l){var p=typeof a[l]>"u"?l:l+'="'+j(a[l],r)+'"';return c?c+" "+p:p},""),s=a.innerHTML||a.cssText||"",i=ge.indexOf(e)===-1;return o+"<"+e+" "+g+'="true" '+u+(i?"/>":">"+s+"</"+e+">")},"")},Z=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[L[o]||o]=e[o],r},n)},Fe=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[Ee[o]||o]=e[o],r},n)},ke=function(e,n,r){var o,a=(o={key:n},o[g]=!0,o),u=Z(r,a);return[T.createElement(f.TITLE,u,n)]},De=function(e,n){return n.map(function(r,o){var a,u=(a={key:o},a[g]=!0,a);return Object.keys(r).forEach(function(s){var i=L[s]||s;if(i===v.INNER_HTML||i===v.CSS_TEXT){var c=r.innerHTML||r.cssText;u.dangerouslySetInnerHTML={__html:c}}else u[i]=r[s]}),T.createElement(e,u)})},C=function(e,n,r){switch(e){case f.TITLE:return{toComponent:function(){return ke(e,n.title,n.titleAttributes)},toString:function(){return He(e,n.title,n.titleAttributes,r)}};case w.BODY:case w.HTML:return{toComponent:function(){return Z(n)},toString:function(){return J(n)}};default:return{toComponent:function(){return De(e,n)},toString:function(){return je(e,n,r)}}}},K=function(e){var n=e.baseTag,r=e.bodyAttributes,o=e.encode,a=e.htmlAttributes,u=e.linkTags,s=e.metaTags,i=e.noscriptTags,c=e.scriptTags,l=e.styleTags,p=e.title,d=p===void 0?"":p,m=e.titleAttributes;return{base:C(f.BASE,n,o),bodyAttributes:C(w.BODY,r,o),htmlAttributes:C(w.HTML,a,o),link:C(f.LINK,u,o),meta:C(f.META,s,o),noscript:C(f.NOSCRIPT,i,o),script:C(f.SCRIPT,c,o),style:C(f.STYLE,l,o),title:C(f.TITLE,{title:d,titleAttributes:m},o)}},Ue=function(e){var n,r;return r=n=function(o){Ce(a,o);function a(){return Se(this,a),we(this,o.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(s){return!ye(this.props,s)},a.prototype.mapNestedChildrenToProps=function(s,i){if(!i)return null;switch(s.type){case f.SCRIPT:case f.NOSCRIPT:return{innerHTML:i};case f.STYLE:return{cssText:i}}throw new Error("<"+s.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(s){var i,c=s.child,l=s.arrayTypeChildren,p=s.newChildProps,d=s.nestedChildren;return y({},l,(i={},i[c.type]=[].concat(l[c.type]||[],[y({},p,this.mapNestedChildrenToProps(c,d))]),i))},a.prototype.mapObjectTypeChildren=function(s){var i,c,l=s.child,p=s.newProps,d=s.newChildProps,m=s.nestedChildren;switch(l.type){case f.TITLE:return y({},p,(i={},i[l.type]=m,i.titleAttributes=y({},d),i));case f.BODY:return y({},p,{bodyAttributes:y({},d)});case f.HTML:return y({},p,{htmlAttributes:y({},d)})}return y({},p,(c={},c[l.type]=y({},d),c))},a.prototype.mapArrayTypeChildrenToProps=function(s,i){var c=y({},i);return Object.keys(s).forEach(function(l){var p;c=y({},c,(p={},p[l]=s[l],p))}),c},a.prototype.warnOnInvalidChildren=function(s,i){return!0},a.prototype.mapChildrenToProps=function(s,i){var c=this,l={};return T.Children.forEach(s,function(p){if(!(!p||!p.props)){var d=p.props,m=d.children,E=Y(d,["children"]),A=Fe(E);switch(c.warnOnInvalidChildren(p,m),p.type){case f.LINK:case f.META:case f.NOSCRIPT:case f.SCRIPT:case f.STYLE:l=c.flattenArrayTypeChildren({child:p,arrayTypeChildren:l,newChildProps:A,nestedChildren:m});break;default:i=c.mapObjectTypeChildren({child:p,newProps:i,newChildProps:A,nestedChildren:m});break}}}),i=this.mapArrayTypeChildrenToProps(l,i),i},a.prototype.render=function(){var s=this.props,i=s.children,c=Y(s,["children"]),l=y({},c);return i&&(l=this.mapChildrenToProps(i,l)),T.createElement(e,l)},be(a,null,[{key:"canUseDOM",set:function(s){e.canUseDOM=s}}]),a}(T.Component),n.propTypes={base:h.exports.object,bodyAttributes:h.exports.object,children:h.exports.oneOfType([h.exports.arrayOf(h.exports.node),h.exports.node]),defaultTitle:h.exports.string,defer:h.exports.bool,encodeSpecialCharacters:h.exports.bool,htmlAttributes:h.exports.object,link:h.exports.arrayOf(h.exports.object),meta:h.exports.arrayOf(h.exports.object),noscript:h.exports.arrayOf(h.exports.object),onChangeClientState:h.exports.func,script:h.exports.arrayOf(h.exports.object),style:h.exports.arrayOf(h.exports.object),title:h.exports.string,titleAttributes:h.exports.object,titleTemplate:h.exports.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var o=e.rewind();return o||(o=K({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},r},Be=function(){return null},Ye=de(Re,Le,K)(Be),D=Ue(Ye);D.renderStatic=D.rewind;var ee={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],o=0;o<arguments.length;o++){var a=arguments[o];if(!!a){var u=typeof a;if(u==="string"||u==="number")r.push(a);else if(Array.isArray(a)){if(a.length){var s=n.apply(null,a);s&&r.push(s)}}else if(u==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){r.push(a.toString());continue}for(var i in a)e.call(a,i)&&a[i]&&r.push(i)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(ee);const qe=ee.exports,H=({icon:t,link:e,text:n,...r})=>{const o=route().current(e+"*"),a=qe({"text-orange":o,"text-black":!o});return T.createElement("div",{className:"w-full text-center my-4"},T.createElement(G,{href:route(e),className:a},T.createElement(W,{name:t,className:"w-4 h-4 mx-auto fill-current"}),T.createElement("p",{className:"text-xs"},n)))};function We({title:t,children:e}){return T.createElement("div",{className:"h-screen w-full bg-darkGray  md:flex flex-wrap items-center overflow-hidden"},T.createElement(D,{titleTemplate:"%s | Firestarter Club",title:t}),T.createElement("div",{className:"p-2 font-semibold flex flex-wrap items-between md:h-full",style:{width:"100%",maxWidth:"90px"}},T.createElement("div",{className:"text-center p-1 w-full"},T.createElement(G,{href:"/"},T.createElement("img",{src:"/svg/logo.svg",className:"w-10 mx-auto"}))),T.createElement("div",{className:"hidden md:flex flex-col w-full  items-start text-xs"},T.createElement(H,{icon:"courses",link:"course",text:"Courses"}),T.createElement(H,{icon:"user",link:"me",text:"Me"}),T.createElement(H,{icon:"cv",link:"curriculum",text:"Curriculum"})),T.createElement("div",{className:"hidden md:flex w-full flex-wrap items-end"},T.createElement("div",{className:"w-full text-center"},T.createElement("div",{className:"text-black"},T.createElement(W,{name:"log-out",className:"w-4 mb-2 h-4 mx-auto fill-current"}),T.createElement("p",{className:"text-xs"},"Log out"))))),T.createElement("div",{className:"h-full md:p-2 md:pl-0 flex-1 "},T.createElement("div",{className:"bg-white h-full w-full rounded-xl overflow-hidden"},e)))}export{We as L,qe as c};
