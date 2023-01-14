import{R as e,r as N}from"./app.44955430.js";import{I as x}from"./Icon.ca8c0097.js";import{V as B}from"./Video.2c19889d.js";import{c as C}from"./index.3812b6a5.js";import{_ as F}from"./use-isomorphic-layout-effect.browser.esm.fc919ca2.js";import{_ as J,c as A,a as L,v as q,b as T,g as z,d as G,u as H,S as K}from"./useStateManager-7e1e8489.esm.5b6d8da9.js";const ne=({handleFileChange:t,src:a})=>{const o=e.useRef(),[l,s]=e.useState(!1),[r,c]=e.useState(),v=n=>{const d=n.target.files[0],i=URL.createObjectURL(d);c(i),t(d,i)},m=n=>{o.current.click()},p=function(n){n.preventDefault(),n.stopPropagation(),n.type==="dragenter"||n.type==="dragover"?s(!0):n.type==="dragleave"&&s(!1)},u=function(n){if(n.preventDefault(),n.stopPropagation(),s(!1),n.dataTransfer.files&&n.dataTransfer.files[0]){console.log(n.dataTransfer.files);const d=n.dataTransfer.files[0],i=URL.createObjectURL(d);c(i),t(d,i)}};return e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement("h2",{className:"block font-semibold text-sm text-gray-800 mb-2"},"Video Lesson")),e.createElement("label",{className:"w-full",onDragEnter:p,onDragLeave:p,onDragOver:p,onDrop:u},e.createElement("input",{ref:o,className:"hidden",type:"file",onChange:v,accept:".mov,.mp4"}),a&&e.createElement("div",{className:"w-full"},e.createElement("div",{className:"flex items-end mb-2"},e.createElement("div",{className:"bg-gray-100 rounded-t-lg px-3 text-center text-black"},"Video"),e.createElement("div",{className:"bg-gray-100 h-0.5 w-full"})),e.createElement(B,{options:{autoplay:!1,controls:!0,responsive:!0,fluid:!0,sources:[{src:a,type:"video/mp4"}]}})),!a&&e.createElement("div",{className:"w-full bg-gray-50 shadow-sm border border-dashed border-gray-300 rounded-lg p-4"},e.createElement("div",{className:"w-full flex justify-center"},e.createElement("div",{onClick:m,className:"cursor-pointer p-4 text-gray-400 bg-white rounded-full"},e.createElement(x,{className:"fill-current w-6",name:"upload-video"}))),e.createElement("p",{className:"text-center text-gray-600 mt-4 select-none"},"Drag and drop a video, or ",e.createElement("button",{type:"button",className:"text-orange cursor-pointer",onClick:m},"Browse"))),a&&e.createElement("div",{className:"w-full flex justify-end my-2"},e.createElement("button",{type:"button",onClick:m,className:"bg-gray-100 rounded-lg flex p-2 px-4 border items-center text-gray-500"},e.createElement(x,{name:"upload-video",className:"w-4 h-4 mr-2"}),e.createElement("span",null,"Change Video")))))},oe=t=>{const{index:a,title:o,collapse:l,lessons:s}=t,[r,c]=N.exports.useState(l),v=C("cursor-pointer select-none flex items-center justify-between font-semibold text-left p-2",{"bg-gradient-to-t from-gray-100 to-white":r,"border-b":!r}),m=C("my-2 w-full overflow-hidden border-b",{"max-h-full pb-8 ":r,"max-h-10 ":!r}),p=C("text-gray-500 hover:bg-gray-200 rounded-full",{" ":r,"":!r}),u=C("w-6 h-6 fill-current p-1",{"rotate-90":r,"":!r});return e.createElement("div",{className:m},e.createElement("div",{className:v,onClick:()=>c(!r)},e.createElement("div",{className:"flex items-center"},e.createElement("div",{className:"text-orange"},e.createElement(x,{name:"chapters",className:"w-4 h-4 fill-current mr-2"})),e.createElement("span",null,o," ",e.createElement("span",{className:"text-gray-400"}," - ",s," lessons"))),e.createElement("div",{className:p},e.createElement(x,{name:"cheveron-right",className:u}))),t.children)};var Q=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],U=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1?arguments[1]:void 0,l=arguments.length>2?arguments[2]:void 0,s=String(a).toLowerCase(),r=String(l.getOptionValue(o)).toLowerCase(),c=String(l.getOptionLabel(o)).toLowerCase();return r===s||c===s},S={formatCreateLabel:function(a){return'Create "'.concat(a,'"')},isValidNewOption:function(a,o,l,s){return!(!a||o.some(function(r){return U(a,r,s)})||l.some(function(r){return U(a,r,s)}))},getNewOptionData:function(a,o){return{label:o,value:a,__isNew__:!0}}};function X(t){var a=t.allowCreateWhileLoading,o=a===void 0?!1:a,l=t.createOptionPosition,s=l===void 0?"last":l,r=t.formatCreateLabel,c=r===void 0?S.formatCreateLabel:r,v=t.isValidNewOption,m=v===void 0?S.isValidNewOption:v,p=t.getNewOptionData,u=p===void 0?S.getNewOptionData:p,n=t.onCreateOption,d=t.options,i=d===void 0?[]:d,O=t.onChange,g=J(t,Q),V=g.getOptionValue,D=V===void 0?z:V,$=g.getOptionLabel,P=$===void 0?G:$,f=g.inputValue,_=g.isLoading,k=g.isMulti,h=g.value,R=g.name,b=N.exports.useMemo(function(){return m(f,A(h),i,{getOptionValue:D,getOptionLabel:P})?u(f,c(f)):void 0},[c,u,P,D,f,m,i,h]),W=N.exports.useMemo(function(){return(o||!_)&&b?s==="first"?[b].concat(L(i)):[].concat(L(i),[b]):i},[o,s,_,b,i]),M=N.exports.useCallback(function(w,y){if(y.action!=="select-option")return O(w,y);var j=Array.isArray(w)?w:[w];if(j[j.length-1]===b){if(n)n(f);else{var E=u(f,f),I={action:"create-option",name:R,option:E};O(q(k,[].concat(L(A(h)),[E]),E),I)}return}O(w,y)},[u,f,k,R,b,n,O,h]);return T(T({},g),{},{options:W,onChange:M})}var se=N.exports.forwardRef(function(t,a){var o=H(t),l=X(o);return N.exports.createElement(K,F({ref:a},l))});export{se as C,oe as S,ne as V};
