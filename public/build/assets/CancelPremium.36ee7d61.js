import{r as m,R as e,I as l,d as c}from"./app.44955430.js";import{I as r}from"./Icon.ca8c0097.js";import{M as o}from"./index.fe4006f1.js";import{L as i}from"./Auth.ce83d642.js";import"./index.1d0124c4.js";import"./index.3812b6a5.js";import"./Helmet.57f1bf76.js";import"./Logo.66b384ea.js";const u=()=>{const[t,s]=m.exports.useState(!1);function n(){c.Inertia.post(route("settings.cancel_now"))}function a(){s(!1)}return e.createElement("div",{className:"w-full h-full p-8 overflow-y-auto"},e.createElement("div",{className:"mx-auto w-full max-w-3xl rounded-lg"},e.createElement("div",{className:"border rounded-lg"},e.createElement(l,{className:"flex items-center p-4 text-gray-600",href:route("settings.manage_premium")},e.createElement(r,{name:"arrow-left",className:"w-6 h-6 fill-current"}),e.createElement("h3",{className:"font-semibold ml-2 text-sm"},"Back")),e.createElement("div",null,e.createElement("h1",{className:"text-xl font-semibold px-4"},"Manage Premium account")),e.createElement("div",{className:"p-4 py-2"},e.createElement("p",null,"You\xB4re currently subscribed to Learning Premium.")),e.createElement("div",{className:"p-4"},e.createElement("div",{className:"py-2"},e.createElement(l,{href:route("settings"),className:"text-orange font-semibold"},"Keep Premium"))),e.createElement("div",{className:"flex w-full"},e.createElement("div",null)),e.createElement("div",{className:"text-right p-4"},e.createElement("button",{className:"btn-orange",onClick:()=>s(!0)},"Continue to cancel")))),e.createElement(o,{isOpen:t,onRequestClose:a,className:"modal-collections bg-white",overlayClassName:"modal-lesson-overlay",contentLabel:"Cancel subscription"},e.createElement("div",{className:"flex justify-between items-center w-full bg-orange text-white p-3"},e.createElement("div",{className:"flex items-center"},e.createElement("h2",{className:"text-sm font-semibold"},"Premium benefits and credits that end with your subscription")),e.createElement("button",{onClick:a,className:"mr-2"},e.createElement(r,{name:"close",className:"w-3 h-3 fill-white"}))),e.createElement("div",{className:"grid md:grid-cols-2 gap-4 p-4"},e.createElement("div",{className:"bg-gray-100 rounded-lg w-full p-4"},e.createElement("img",{src:"/svg/learning.svg",className:"w-8 my-4"}),e.createElement("h3",{className:"font-semibold text-xs"},"Learning courses"),e.createElement("p",null,"Learning courses that will develop your professional skills")),e.createElement("div",{className:"bg-gray-100 rounded-lg w-full p-4"},e.createElement("img",{src:"/svg/unlock.svg",className:"w-8 my-4"}),e.createElement("h3",{className:"font-semibold text-xs"},"Unlimited Access"),e.createElement("p",null,"You have unlimited access to a library personalized to your interests"))),e.createElement("div",{className:"text-right p-4"},e.createElement(l,{href:route("courses")},e.createElement("button",{className:"border p-4 rounded-md mr-2 text-gray-500 hover:text-gray-800",onClick:a},"Keep Premium")),e.createElement("button",{onClick:n,className:"bg-orange p-4 text-white rounded-md"},"Cancel subscription"))))};u.layout=t=>e.createElement(i,{title:"My curriculum",children:t});export{u as default};
