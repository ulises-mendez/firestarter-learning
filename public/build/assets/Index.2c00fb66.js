import{u as s,r as o,R as e,I as r}from"./app.91217be9.js";import{L as c}from"./Auth.c9e21709.js";import{I as l}from"./Icon.a9c57278.js";import"./index.1a7c34d6.js";import{T as i}from"./ToggleCheck.829158b5.js";/* empty css            */import"./Helmet.f8dabf9f.js";import"./index.1d0124c4.js";import"./Logo.54ebcf4a.js";const u=()=>{const{subscription:t}=s().props,[a,n]=o.exports.useState(!0);function m(){n(!a)}return console.log(a),e.createElement("div",{className:"w-full h-full p-8 overflow-y-auto"},e.createElement("div",{className:"mx-auto mb-4 w-full max-w-3xl rounded-lg"},e.createElement("div",{className:"border rounded-lg"},e.createElement("div",{className:"px-4 py-2"},e.createElement("h2",{className:"font-semibold text-xl"},"General preferences")),e.createElement("div",null,e.createElement("div",{className:"flex justify-between p-4"},e.createElement("div",null,e.createElement("h3",{className:"font-semibold"},"Autoplay"),e.createElement("p",null,"Automatically play media when learning content is opened")),e.createElement("div",null),e.createElement("div",null,e.createElement(i,{value:a,onChange:m})))))),e.createElement("div",{className:"mx-auto w-full max-w-3xl rounded-lg"},!t&&e.createElement("div",{className:"border rounded-lg p-4"},e.createElement("div",{className:"mb-6 font-semibold"},"Let's upgrade to PRO plan"),e.createElement("a",{href:"/plans/premium"},e.createElement("button",{className:"w-full bg-orange text-white text-center font-semibold p-4 rounded-lg"}," Get started"))),t&&e.createElement("div",{className:"border rounded-lg"},e.createElement("div",{className:"px-4 py-2"},e.createElement("h2",{className:"font-semibold text-xl"},"Subscriptions & payments")),e.createElement(r,{href:route("settings.billing")},e.createElement("div",{className:"flex justify-between border-b p-4"},e.createElement("h3",null,"Billing info"),e.createElement(l,{name:"arrow-right",className:"w-6 h-6"}))),e.createElement(r,{href:route("settings.manage_premium")},e.createElement("div",{className:"flex justify-between border-b p-4"},e.createElement("h3",null,"Manage Premium account"),e.createElement(l,{name:"arrow-right",className:"w-6 h-6"}))),e.createElement("a",{href:route("billing.portal"),target:"_blank"},e.createElement("div",{className:"flex justify-between p-4"},e.createElement("h3",null,"View purchase history"),e.createElement(l,{name:"arrow-right",className:"w-6 h-6"}))))))};u.layout=t=>e.createElement(c,{title:"Settings",children:t});export{u as default};
