import{f as g,r as de}from"./app.642c5782.js";var x={},K={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.getListFiles=t.getImage=t.getBase64=t.getAcceptTypeString=t.openFileDialog=void 0,t.openFileDialog=function(a){a.current&&a.current.click()},t.getAcceptTypeString=function(a,n){return a!=null&&a.length?a.map(function(u){return"."+u}).join(", "):n?"":"image/*"},t.getBase64=function(a){var n=new FileReader;return new Promise(function(u){n.addEventListener("load",function(){return u(String(n.result))}),n.readAsDataURL(a)})},t.getImage=function(a){var n=new Image;return new Promise(function(u){n.addEventListener("load",function(){return u(n)}),n.src=URL.createObjectURL(a)})},t.getListFiles=function(a,n){for(var u=[],s=0;s<a.length;s+=1)u.push(t.getBase64(a[s]));return Promise.all(u).then(function(e){var o=e.map(function(l,d){var r;return r={},r[n]=l,r.file=a[d],r});return o})}})(K);var H={},L={};Object.defineProperty(L,"__esModule",{value:!0});L.DEFAULT_DATA_URL_KEY=L.INIT_MAX_NUMBER=L.DEFAULT_NULL_INDEX=void 0;L.DEFAULT_NULL_INDEX=-1;L.INIT_MAX_NUMBER=1e3;L.DEFAULT_DATA_URL_KEY="dataURL";(function(t){var a=g&&g.__awaiter||function(e,o,l,d){function r(i){return i instanceof l?i:new l(function(h){h(i)})}return new(l||(l=Promise))(function(i,h){function p(y){try{f(d.next(y))}catch(_){h(_)}}function T(y){try{f(d.throw(y))}catch(_){h(_)}}function f(y){y.done?i(y.value):r(y.value).then(p,T)}f((d=d.apply(e,o||[])).next())})},n=g&&g.__generator||function(e,o){var l={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},d,r,i,h;return h={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(h[Symbol.iterator]=function(){return this}),h;function p(f){return function(y){return T([f,y])}}function T(f){if(d)throw new TypeError("Generator is already executing.");for(;l;)try{if(d=1,r&&(i=f[0]&2?r.return:f[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,f[1])).done)return i;switch(r=0,i&&(f=[f[0]&2,i.value]),f[0]){case 0:case 1:i=f;break;case 4:return l.label++,{value:f[1],done:!1};case 5:l.label++,r=f[1],f=[0];continue;case 7:f=l.ops.pop(),l.trys.pop();continue;default:if(i=l.trys,!(i=i.length>0&&i[i.length-1])&&(f[0]===6||f[0]===2)){l=0;continue}if(f[0]===3&&(!i||f[1]>i[0]&&f[1]<i[3])){l.label=f[1];break}if(f[0]===6&&l.label<i[1]){l.label=i[1],i=f;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(f);break}i[2]&&l.ops.pop(),l.trys.pop();continue}f=o.call(e,l)}catch(y){f=[6,y],r=0}finally{d=i=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getErrorValidation=t.isMaxNumberValid=t.isAcceptTypeValid=t.isMaxFileSizeValid=t.isImageValid=t.isResolutionValid=void 0;var u=L,s=K;t.isResolutionValid=function(e,o,l,d){if(l===void 0&&(l=0),d===void 0&&(d=1),!l||!d||!e.width||!e.height)return!0;switch(o){case"absolute":{if(e.width===l&&e.height===d)return!0;break}case"ratio":{var r=l/d;if(e.width/e.height===r)return!0;break}case"less":{if(e.width<=l&&e.height<=d)return!0;break}case"more":{if(e.width>=l&&e.height>=d)return!0;break}}return!1},t.isImageValid=function(e){return!!e.includes("image")},t.isMaxFileSizeValid=function(e,o){return o?e<=o:!0},t.isAcceptTypeValid=function(e,o){if(e&&e.length>0){var l=o.split(".").pop()||"";if(e.findIndex(function(d){return d.toLowerCase()===l.toLowerCase()})<0)return!1}return!0},t.isMaxNumberValid=function(e,o,l){if(o!==0&&!o)return!0;if(l===u.DEFAULT_NULL_INDEX){if(e<=o)return!0}else if(e<=o+1)return!0;return!1},t.getErrorValidation=function(e){var o=e.fileList,l=e.value,d=e.maxNumber,r=e.keyUpdate,i=e.acceptType,h=e.maxFileSize,p=e.resolutionType,T=e.resolutionWidth,f=e.resolutionHeight,y=e.allowNonImageType;return a(void 0,void 0,void 0,function(){var _,E,w,F,I;return n(this,function(m){switch(m.label){case 0:return _={},t.isMaxNumberValid(o.length+l.length,d,r)?[3,1]:(_.maxNumber=!0,[3,5]);case 1:E=0,m.label=2;case 2:return E<o.length?(w=o[E].file,w?!y&&!t.isImageValid(w.type)?(_.acceptType=!0,[3,5]):t.isAcceptTypeValid(i,w.name)?t.isMaxFileSizeValid(w.size,h)?p?[4,s.getImage(w)]:[3,4]:(_.maxFileSize=!0,[3,5]):(_.acceptType=!0,[3,5]):[3,4]):[3,5];case 3:if(F=m.sent(),I=t.isResolutionValid(F,p,T,f),!I)return _.resolution=!0,[3,5];m.label=4;case 4:return E+=1,[3,2];case 5:return Object.values(_).find(Boolean)?[2,_]:[2,null]}})})}})(H);var z=g&&g.__assign||function(){return z=Object.assign||function(t){for(var a,n=1,u=arguments.length;n<u;n++){a=arguments[n];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},z.apply(this,arguments)},ve=g&&g.__createBinding||(Object.create?function(t,a,n,u){u===void 0&&(u=n),Object.defineProperty(t,u,{enumerable:!0,get:function(){return a[n]}})}:function(t,a,n,u){u===void 0&&(u=n),t[u]=a[n]}),ge=g&&g.__setModuleDefault||(Object.create?function(t,a){Object.defineProperty(t,"default",{enumerable:!0,value:a})}:function(t,a){t.default=a}),he=g&&g.__importStar||function(t){if(t&&t.__esModule)return t;var a={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&ve(a,t,n);return ge(a,t),a},k=g&&g.__awaiter||function(t,a,n,u){function s(e){return e instanceof n?e:new n(function(o){o(e)})}return new(n||(n=Promise))(function(e,o){function l(i){try{r(u.next(i))}catch(h){o(h)}}function d(i){try{r(u.throw(i))}catch(h){o(h)}}function r(i){i.done?e(i.value):s(i.value).then(l,d)}r((u=u.apply(t,a||[])).next())})},j=g&&g.__generator||function(t,a){var n={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},u,s,e,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(r){return function(i){return d([r,i])}}function d(r){if(u)throw new TypeError("Generator is already executing.");for(;n;)try{if(u=1,s&&(e=r[0]&2?s.return:r[0]?s.throw||((e=s.return)&&e.call(s),0):s.next)&&!(e=e.call(s,r[1])).done)return e;switch(s=0,e&&(r=[r[0]&2,e.value]),r[0]){case 0:case 1:e=r;break;case 4:return n.label++,{value:r[1],done:!1};case 5:n.label++,s=r[1],r=[0];continue;case 7:r=n.ops.pop(),n.trys.pop();continue;default:if(e=n.trys,!(e=e.length>0&&e[e.length-1])&&(r[0]===6||r[0]===2)){n=0;continue}if(r[0]===3&&(!e||r[1]>e[0]&&r[1]<e[3])){n.label=r[1];break}if(r[0]===6&&n.label<e[1]){n.label=e[1],e=r;break}if(e&&n.label<e[2]){n.label=e[2],n.ops.push(r);break}e[2]&&n.ops.pop(),n.trys.pop();continue}r=a.call(t,n)}catch(i){r=[6,i],s=0}finally{u=e=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},X=g&&g.__spreadArrays||function(){for(var t=0,a=0,n=arguments.length;a<n;a++)t+=arguments[a].length;for(var u=Array(t),s=0,a=0;a<n;a++)for(var e=arguments[a],o=0,l=e.length;o<l;o++,s++)u[s]=e[o];return u};Object.defineProperty(x,"__esModule",{value:!0});var b=he(de.exports),C=K,ye=H,D=L,_e=function(t){var a=t.value,n=a===void 0?[]:a,u=t.onChange,s=t.onError,e=t.children,o=t.dataURLKey,l=o===void 0?D.DEFAULT_DATA_URL_KEY:o,d=t.multiple,r=d===void 0?!1:d,i=t.maxNumber,h=i===void 0?D.INIT_MAX_NUMBER:i,p=t.acceptType,T=t.maxFileSize,f=t.resolutionWidth,y=t.resolutionHeight,_=t.resolutionType,E=t.inputProps,w=E===void 0?{}:E,F=t.allowNonImageType,I=F===void 0?!1:F,m=n||[],B=b.useRef(null),G=b.useState(D.DEFAULT_NULL_INDEX),A=G[0],R=G[1],Y=b.useState(null),Z=Y[0],q=Y[1],J=b.useState(!1),W=J[0],V=J[1],O=b.useCallback(function(){return C.openFileDialog(B)},[B]),ee=b.useCallback(function(){R(D.DEFAULT_NULL_INDEX),O()},[O]),te=b.useCallback(function(){u==null||u([])},[u]),ne=function(c){var v=X(m);Array.isArray(c)?c.forEach(function(U){v.splice(U,1)}):v.splice(c,1),u==null||u(v)},re=function(c){R(c),O()},ae=function(c){return k(void 0,void 0,void 0,function(){var v;return j(this,function(U){switch(U.label){case 0:return[4,ye.getErrorValidation({fileList:c,maxFileSize:T,maxNumber:h,acceptType:p,keyUpdate:A,resolutionType:_,resolutionWidth:f,resolutionHeight:y,value:m,allowNonImageType:I})];case 1:return v=U.sent(),v?(q(v),s==null||s(v,c),[2,!1]):(Z&&q(null),[2,!0])}})})},Q=function(c){return k(void 0,void 0,void 0,function(){var v,U,N,M,$,S;return j(this,function(P){switch(P.label){case 0:return c?[4,C.getListFiles(c,l)]:[2];case 1:return v=P.sent(),v.length?[4,ae(v)]:[2];case 2:if(U=P.sent(),!U)return[2];if(M=[],A>D.DEFAULT_NULL_INDEX)$=v[0],N=X(m),N[A]=$,M.push(A);else if(r)for(N=X(m,v),S=m.length;S<N.length;S+=1)M.push(S);else N=[v[0]],M.push(0);return u==null||u(N,M),[2]}})})},ie=function(c){return k(void 0,void 0,void 0,function(){return j(this,function(v){switch(v.label){case 0:return[4,Q(c.target.files)];case 1:return v.sent(),A>D.DEFAULT_NULL_INDEX&&R(D.DEFAULT_NULL_INDEX),B.current&&(B.current.value=""),[2]}})})},ue=b.useMemo(function(){return C.getAcceptTypeString(p,I)},[p,I]),le=function(c){c.preventDefault(),c.stopPropagation()},oe=function(c){c.preventDefault(),c.stopPropagation(),c.dataTransfer.items&&c.dataTransfer.items.length>0&&V(!0)},fe=function(c){c.preventDefault(),c.stopPropagation(),V(!1)},ce=function(c){c.preventDefault(),c.stopPropagation(),V(!1),c.dataTransfer.files&&c.dataTransfer.files.length>0&&Q(c.dataTransfer.files)},se=function(c){c.preventDefault(),c.stopPropagation(),c.dataTransfer.clearData()};return b.default.createElement(b.default.Fragment,null,b.default.createElement("input",z({type:"file",accept:ue,ref:B,multiple:r&&A===D.DEFAULT_NULL_INDEX,onChange:ie,style:{display:"none"}},w)),e==null?void 0:e({imageList:m,onImageUpload:ee,onImageRemoveAll:te,onImageUpdate:re,onImageRemove:ne,errors:Z,dragProps:{onDrop:ce,onDragEnter:oe,onDragLeave:fe,onDragOver:le,onDragStart:se},isDragging:W}))},me=x.default=_e;function be(t,a=!1,n=1){const u=a?1e3:1024;if(Math.abs(t)<u)return t+" B";const s=a?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let e=-1;const o=10**n;do t/=u,++e;while(Math.round(Math.abs(t)*o)/o>=u&&e<s.length-1);return t.toFixed(n)+" "+s[e]}export{me as _,be as f};