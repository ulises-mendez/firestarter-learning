import{r as m,R as e,I as n}from"./app.91217be9.js";import{I as i}from"./Icon.a9c57278.js";const d=({data:l})=>{const{id:u,title:r,released:o,slug:a,thumbnail:c}=l,[s,t]=m.exports.useState(!1);return console.log(l),e.createElement("div",{className:"flex p-4 border rounded-lg w-full my-4"},e.createElement("div",null,e.createElement(n,{href:route("course.show",a)},e.createElement("img",{src:c,className:"rounded w-full max-w-xs"}))),e.createElement("div",{className:"p-4 flex-1 flex flex-col justify-between"},e.createElement("div",null,e.createElement(n,{href:route("course.show",a)},e.createElement("h4",{className:"font-semibold my-2"},r)),e.createElement("p",{className:"text-sm text-gray-500"},o)),e.createElement("div",{className:"flex items-center justify-between w-full"},e.createElement("div",{className:"relative"},e.createElement("button",{onClick:()=>t(!0)},e.createElement(i,{name:"dots",className:"w-6"})),e.createElement("div",null,e.createElement("div",{onClick:()=>t(!1),className:`origin-top-right z-20 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${s==!0?"":"hidden"}`},e.createElement("div",{className:"w-full text-left"},e.createElement("p",{className:"w-full text-left px-4 py-2 text-sm text-black select-none hover:bg-orange hover:text-white"},"Save"),e.createElement("p",{className:"w-full text-left px-4 py-2 text-sm text-black select-none hover:bg-orange hover:text-white"},"Add to Collection"),e.createElement("p",{className:"w-full text-left px-4 py-2 text-sm text-black select-none hover:bg-orange hover:text-white"},"Move to History"),e.createElement("p",{className:"w-full text-left px-4 py-2 text-sm text-black select-none hover:bg-orange hover:text-white"},"Remove"))),e.createElement("div",{onClick:()=>{t(!1)},className:`fixed inset-0 z-10 ${s==!0?"":"hidden"}`}))))))};export{d as C};