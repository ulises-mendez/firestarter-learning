import{r as s,R as e,I as x,u as y,a as b}from"./app.642c5782.js";import{T as w}from"./TextInput.97e240fd.js";import{I as h}from"./InputLabel.012336a1.js";import{I as v}from"./InputError.a80eaeed.js";import{I}from"./Icon.e3dd0399.js";import{d as k}from"./Date.384df194.js";import{L as C}from"./Auth.0ff6f4dc.js";import{P as S}from"./Pagination.6d3be3c9.js";import{M as c}from"./index.17bbae15.js";import"./index.1a7c34d6.js";import"./Helmet.43be54be.js";import"./index.1d0124c4.js";import"./Logo.5230289a.js";const T=a=>{const{id:l,title:r,created_at:m}=a;return s.exports.useState(!1),s.exports.useState([]),e.createElement(s.exports.Fragment,null,e.createElement("tr",{className:"border-t"},e.createElement("td",{className:"p-4"},e.createElement(x,{href:route("edit.topic",l)},r)),e.createElement("td",{className:"p-4"},k(m)),e.createElement("td",{className:"p-4 flex justify-end"},e.createElement(I,{className:"h-4 w-4",name:"trash"}))))};c.setAppElement("#app");const L=()=>{const[a,l]=s.exports.useState(!1),{topics:r}=y().props,{meta:{links:m}}=r,{data:n,setData:o,errors:i,post:d,processing:M}=b({title:""}),p=t=>{o(t.target.name,t.target.type==="checkbox"?t.target.checked:t.target.value)};function u(){l(!1)}const f=t=>{t.preventDefault(),d(route("category.store"),{onSuccess:()=>{o({title:""}),l(!1)}})};return e.createElement(e.Fragment,null,e.createElement("div",{className:"w-full h-full p-2 md:p-8 overflow-y-auto"},e.createElement("div",{className:"mx-auto mb-4 w-full max-w-7xl rounded-lg"},e.createElement("div",{className:"flex flex-wrap justify-between items-center w-full"},e.createElement("div",{className:"px-4 py-2 w-full md:w-auto"},e.createElement("h2",{className:"font-semibold text-xl"},"Categories"),e.createElement("p",null,"Manage course categories here.")),e.createElement("div",{className:"px-4 py-2 w-full md:w-auto"},e.createElement("button",{onClick:()=>l(!0),className:"btn-orange"},"Add category")))),e.createElement("div",{className:"p-1 md:p-8 flex flex-wrap w-full max-w-7xl mx-auto"},e.createElement("div",{className:"w-full"},e.createElement("table",{className:"w-full bg-gray-50 rounded-lg"},e.createElement("thead",{className:"text-gray-600 "},e.createElement("tr",null,e.createElement("th",{className:"text-left p-4 font-semibold"},"Name"),e.createElement("th",{className:"text-left p-4 font-semibold"},"Date added"),e.createElement("th",{className:"text-right p-4 font-semibold"},"Edit"))),e.createElement("tbody",null,r.data.map(({id:t,title:E,created_at:g},N)=>e.createElement(T,{key:N,id:t,title:E,created_at:g})),r.data.length===0&&e.createElement("tr",null,e.createElement("td",{className:"px-6 py-4 border-t border-gray-100",colSpan:"4"},"No categories were added"))))),e.createElement(S,{links:m}))),e.createElement(c,{isOpen:a,onRequestClose:u,className:"modal-category",overlayClassName:"modal-category-overlay",contentLabel:"New category"},e.createElement("div",{className:"p-4"},e.createElement("h1",{className:"text-xl font-semibold"},"Create new category"),e.createElement("form",{className:"mt-4",onSubmit:f},e.createElement("div",{className:"text-left my-2"},e.createElement(h,{forInput:"title",value:"Title"}),e.createElement(w,{type:"text",name:"title",value:n.title,className:"mt-1 block w-full",handleChange:p}),e.createElement(v,{message:i.title,className:"mt-2"})),e.createElement("div",{className:"text-right"},e.createElement("button",{className:"btn-orange"},"Submit"))))))};L.layout=a=>e.createElement(C,{title:"Topics",children:a});export{L as default};
