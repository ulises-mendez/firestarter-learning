import{u as Q,r,R as e,H as q,I as $,e as u}from"./app.91217be9.js";import{L as I}from"./Auth.c9e21709.js";import{I as n}from"./Icon.a9c57278.js";import{c as D}from"./index.1a7c34d6.js";import{S as M}from"./Section.9119ac5c.js";import"./Context.77b8cacd.js";import"./Video.70f38d55.js";import{M as _}from"./index.8d9d6aba.js";/* empty css            */import"./Helmet.f8dabf9f.js";import"./index.1d0124c4.js";import"./Logo.54ebcf4a.js";import"./TimeFormat.f455bd8c.js";import"./extends.cc011e2f.js";import"./inherits.1a00cd6c.js";_.setAppElement("*");const j=()=>{const{acknowledged:l,course:s,finished:d,quiz:f,quiz_question:p,question:i,questions:E}=Q().props,{chapters:v}=s,[c,g]=r.exports.useState(s.like?1==!0:!1),[N,h]=r.exports.useState(s.likes||0),[m,x]=r.exports.useState(s.save?1==!0:!1),[w,b]=r.exports.useState(s.saves||0),[A,k]=r.exports.useState(!1),[o,y]=r.exports.useState(!0),[S,F]=r.exports.useState(!1),C=D("relative p-4 h-full bg-lightGray hidden overflow-y-auto",{"w-1/3 lg:block":o,"w-0":!o});function L(){const a=new FormData;a.append("course_id",s.id),u.post(route("course.like"),a).then(t=>{g(t.data.liked),h(t.data.likes)}).catch(t=>console.log(t))}function z(){const a=new FormData;a.append("course_id",s.id),u.post(route("course.save"),a).then(t=>{x(t.data.save),b(t.data.saves)}).catch(t=>console.log(t))}return e.createElement("div",null,e.createElement("div",{className:"w-full h-full flex items-stretch"},e.createElement(q,{title:"Quiz"}),e.createElement("div",{className:C},e.createElement("h1",{className:"font-bold text-xl"},"Contents"),v.map((a,t)=>e.createElement(M,{key:t,data:a,slug:s.slug}))),S==!1?e.createElement("div",{className:"w-full flex-1 h-full bg-white p-6 overflow-auto relative"},e.createElement("div",{onClick:()=>y(!o),className:"content-toggle"},e.createElement(n,{name:"cheveron-left",className:`w-5 -ml-0.5 fill-current transition-all duration-500 ${o?"":"rotate-180"}`})),e.createElement("div",{className:"border-b"},e.createElement("div",{className:"w-full flex justify-between items-center p-2"},e.createElement("div",null,e.createElement("p",{className:"font-semibold text-sm"},s.title)),e.createElement("div",{className:"flex"},e.createElement("div",{className:"flex items-center px-2"},e.createElement("button",{tooltip:c?"Liked":"Like",flow:"down",className:"p-2 hover:bg-gray-800 rounded-full mr-2",onClick:L},e.createElement(n,{className:`w-4 h-4 fill-current ${c&&"fill-yellow"}`,name:`${c==!1?"thumbs-up":"thumbs-up-fill"}`})),e.createElement("p",{className:"text-sm"},N)),e.createElement("div",{className:"flex items-center px-2"},e.createElement("button",{tooltip:m?"Saved":"Save",flow:"down",className:"p-2 hover:bg-gray-800 rounded-full mr-2",onClick:z},e.createElement(n,{name:`${m==!0?"bookmark-fill":"bookmark"}`,className:`w-4 h-4 fill-current ${m&&"fill-yellow"}`})),e.createElement("p",{className:"text-sm"},w)),e.createElement("div",{className:"flex items-center pl-2  border-white"},e.createElement("button",{tooltip:"Add to...",flow:"down",onClick:()=>k(!0),className:"p-2 hover:bg-gray-800 hover:text-white rounded-full mr-2"},e.createElement(n,{name:"plus",className:"w-3 h-3 fill-current"})))))),e.createElement("div",{className:"my-3 text-center"},e.createElement("h1",{className:"title"},"Quiz Chapter")),e.createElement("div",{className:"text-sm text-gray-500"},"Question ",p+1," of ",E),e.createElement("div",{className:"my-4"},i.text),e.createElement("div",null,i.options.map((a,t)=>e.createElement("div",{className:"border p-2",key:t},e.createElement("label",{className:"flex items-center group w-full  checked:bg-slate-400"},e.createElement("div",{className:`border rounded-full w-4 h-4 flex items-center justify-center mr-2 ${a.id==l.id?l.value==1?"bg-green-600 border-green-600":"bg-red-600 border-red-600":""}`},a.id==l.id?l.value==1?e.createElement(n,{name:"check",className:"w-2 h-2 fill-white"}):e.createElement(n,{name:"close",className:"w-2 h-2 fill-white"}):null),e.createElement("p",null,a.text)),l&&a.id==l.id&&e.createElement("div",{className:"p-2"},l.value==1?e.createElement("p",{className:"font-semibold text-green-600"},"Correct"):e.createElement("p",{className:"font-semibold text-red-600"},"Incorrect"),e.createElement("p",null,l.message)))),e.createElement("div",{className:"mt-4 text-right"},d?e.createElement("button",{className:"btn-orange"},"Next"):e.createElement($,{href:route("course.quiz",[s.slug,f.id])},e.createElement("button",{className:"btn-orange"},"Next "))))):e.createElement("div",{className:"bg-gray-100 mx-auto p-4 rounded-lg"},e.createElement("img",{src:"/svg/welcome.svg",className:"w-[300px]",alt:"Women Learning"}))))};j.layout=l=>e.createElement(I,{children:l});export{j as default};
