import{u as B,a as G,r as c,R as e,d as Q}from"./app.44955430.js";import{I as g}from"./Icon.ca8c0097.js";import{I as m}from"./InputError.c30d59a2.js";import{L as H}from"./Auth.ce83d642.js";import{M as v}from"./index.fe4006f1.js";import{T as b}from"./TextArea.49510538.js";import"./index.3812b6a5.js";import"./Helmet.57f1bf76.js";import"./index.1d0124c4.js";import"./Logo.66b384ea.js";import"./use-isomorphic-layout-effect.browser.esm.fc919ca2.js";v.setAppElement("#app");const J=()=>{const{questions:i,quiz:u}=B().props,{data:l,setData:o,errors:n,clearErrors:C,setError:k,post:q,put:I}=G({text:"",options:[{value:0,text:"",message:""}]}),[S,N]=c.exports.useState(null),[h,x]=c.exports.useState(!1),[z,d]=c.exports.useState(!1),[K,D]=c.exports.useState([]),[M,p]=c.exports.useState(!1);function A(){const t=[...l.options];o({...l,options:t.concat({value:0,text:"",message:""})})}function E(){o({text:"",section:"",options:[{value:0,text:"",message:""}]}),D([]),p(!1),x(!1)}function w(t,a){const s=t.target.name,r=t.target.value,f=[...l.options],U=l;f[a][s]=r,o({...U,options:f})}function O(t){const a=[...l.options];a.map((r,f)=>a[f].value=0);const s=l;a[t].value=1,o({...s,options:a})}function T(){d(!1)}function y(){o({text:"",section:"",options:[{value:0,text:"",message:""}]}),N(null),x(!1),p(!1),C()}function j(t,a){if(t===void 0){const s=[...l.options];s.splice(a,1),o({...l,options:s})}if(t!==void 0){const s=[...l.options];s.splice(a,1),Q.Inertia.delete(route("quiz.question.option.delete",t),{onSuccess:()=>{o({...l,options:s})}})}}function L(){Q.Inertia.delete(route("quiz.question.delete",S),{onSuccess:()=>{d(!1)}})}function R(t){N(t),d(!0)}function $(t){x(!0),o(t),p(!0)}function F(){const t=l.options;var a=!1;if(t.map((s,r)=>{s.value==1&&(a=!0)}),a==!1){k("answer","Check the answer option.");return}q(route("quiz.question.store",u.id),{onSuccess:()=>{E()}})}function P(){I(route("quiz.question.update",l.id),{onSuccess:()=>{E()}})}return e.createElement(e.Fragment,null,e.createElement("div",{className:"w-full h-full p-2 md:p-8 overflow-y-auto"},e.createElement("div",{className:"mx-auto mb-4 w-full max-w-7xl rounded-lg"},e.createElement("div",{className:"flex flex-wrap justify-between items-center w-full"},e.createElement("div",{className:"px-4 py-2 w-full md:w-auto"},e.createElement("h2",{className:"text-xl"},"Quiz from course ",e.createElement("span",{className:"font-semibold"},u.course.title)),u.chapter&&e.createElement("p",null,"Chapter: ",u.chapter.title)),e.createElement("div",{className:"px-4 py-2 w-full md:w-auto"}))),e.createElement("div",{className:"mx-auto mb-4 w-full max-w-2xl rounded-lg"},i.map((t,a)=>e.createElement("div",{key:a,className:"border p-2 rounded-lg mb-2"},e.createElement("div",{className:"flex justify-between"},e.createElement("h4",{className:"text-xs"},"Question ",a+1," of ",i.length),e.createElement("div",null,e.createElement("button",{className:"hover:bg-gray-100 mr-2 p-2 rounded-full",onClick:()=>$(t)},e.createElement(g,{name:"edit",className:"w-4 h-4"})),e.createElement("button",{className:"hover:bg-gray-100 hover:text-red-500 p-2 rounded-full",onClick:()=>R(t.id)},e.createElement(g,{name:"trash",className:"w-4 h-4 fill-current"})))),e.createElement("h3",{className:"font-semibold text-sm mb-2"},t.text),e.createElement("div",null,t.options.map((s,r)=>e.createElement("div",{key:r},e.createElement("div",{className:"flex items-start mb-2"},e.createElement("div",{className:`w-5 h-5  rounded-full mr-1 ${s.value==!0?"bg-white border-4 border-orange":"border bg-gray-100"}`}),e.createElement("div",{className:"flex-1"},e.createElement("p",{className:`text-sm ${s.value==!0?"text-black font-semibold":"text-gray-600"}`},s.text),e.createElement("p",{className:"text-xs text-gray-500"},s.message)))))))),e.createElement("div",{className:"w-full text-right"},e.createElement("button",{className:"btn-orange",onClick:()=>p(!0)},"Add Question")))),e.createElement(v,{isOpen:M,onRequestClose:y,className:"modal-lesson",overlayClassName:"modal-lesson-overlay",contentLabel:"Quiz Info"},e.createElement("div",{className:"w-full bg-orange text-white p-3 flex justify-between items-center"},e.createElement("h2",{className:"text-lg font-semibold"},h?"Edit":"Add New"," Question"),e.createElement("button",{onClick:y,className:"cursor-pointer mr-2"},e.createElement(g,{name:"close",className:"w-3 h-3 fill-white"}))),e.createElement("div",{className:"w-full bg-white p-2"},e.createElement("div",{className:"p-2 w-full"},e.createElement(b,{className:"w-full",placeholder:"Type your question here...",handleChange:t=>o({...l,text:t.target.value}),value:l.text}),e.createElement(m,{className:"text-xs py-2",message:n.text}),e.createElement("p",{className:"text-xs text-gray-500 my-2 uppercase"},"OPTIONS"),e.createElement("div",{className:" rounded-lg"},l.options.map((t,a)=>e.createElement("div",{key:a,className:"flex items-start w-full mb-2"},e.createElement("div",null,e.createElement("input",{checked:t.value,type:"radio",name:"val",onChange:s=>O(a),className:"checked:bg-orange focus-checked: active:bg-orange hover:bg-orange focus:bg-orange focus-visible:bg-orange w-6 h-6 rounded-full border border-gray-200 mr-2 focus:ring-orange",tooltip:"Check correct option",flow:"right"}),e.createElement("div",{className:"mt-3 w-full pl-1"},e.createElement("button",{className:"hover:bg-gray-100 hover:text-orange text-gray-400  rounded-full",onClick:()=>j(t.id,a),tooltip:"Delete option",flow:"right"},e.createElement(g,{className:"w-4 h-4 fill-current",name:"trash"})))),e.createElement("div",{className:"flex-1"},e.createElement(b,{className:"w-full mb-2",handleChange:s=>w(s,a),name:"text",placeholder:"Text",value:t.text}),e.createElement(m,{className:"text-xs py-2",message:n[`options.${a}.text`]}),e.createElement(b,{className:"w-full",handleChange:s=>w(s,a),name:"message",placeholder:"Message",value:t.message}),e.createElement(m,{className:"text-xs py-2",message:n[`options.${a}.message`]})))),e.createElement("div",null,e.createElement(m,{className:"text-xs py-2",message:n.answer}),e.createElement(m,{className:"text-xs py-2",message:n.options})),e.createElement("div",{className:"flex justify-between my-2 text-left w-full"},e.createElement("button",{onClick:A,className:"border border-orange font-semibold p-4 text-orange rounded-lg text-xs hover:bg-orange hover:text-white"},"Add Option"),e.createElement("div",null,e.createElement("button",{className:"border border-white hover:border-gray-100 font-semibold p-4 text-orange rounded-lg text-xs hover:bg-gray-100 mr-2",onClick:E},"Cancel"),h?e.createElement("button",{className:"border border-orange bg-orange font-semibold p-4 rounded-lg text-white text-xs",onClick:P},"Update Question"):e.createElement("button",{className:"border border-orange bg-orange font-semibold p-4 rounded-lg text-white text-xs",onClick:F},"Add Question"))))))),e.createElement(v,{isOpen:z,onRequestClose:T,className:"modal-lesson",overlayClassName:"modal-lesson-overlay",contentLabel:"Delete Lesson"},e.createElement("div",{className:"w-full p-4"},e.createElement("div",{className:"text-gray-500"},e.createElement("p",{className:"text-lg font-semibold"},"Are you sure you want to delete this question?"),e.createElement("p",null,"This action is irreversible")),e.createElement("div",{className:"w-full flex justify-between"},e.createElement("button",{onClick:()=>d(!1),className:"btn-white mr-2"},"Cancel"),e.createElement("button",{type:"button",onClick:L,className:"btn-delete"},"Delete Question")))))};J.layout=i=>e.createElement(H,{title:"Quiz edition",children:i});export{J as default};
