import{u as r,R as e}from"./app.642c5782.js";import{L as s}from"./Auth.0ff6f4dc.js";import"./index.1a7c34d6.js";import{C as o}from"./CourseInstructor.38999c1b.js";import"./Helmet.43be54be.js";import"./index.1d0124c4.js";import"./Logo.5230289a.js";import"./Icon.e3dd0399.js";const n=()=>{const{instructor:t,courses:a}=r().props;return e.createElement("div",{className:"w-full h-full p-8 overflow-y-auto"},e.createElement("div",{className:"mx-auto flex justify-between items-center bg-gray-100 w-full max-w-4xl p-10 rounded-lg mt-10"},e.createElement("div",null,e.createElement("h1",{className:"text-xl font-semibold"},t.name),e.createElement("p",{className:"text-sm"},t.title)),e.createElement("div",{className:""},e.createElement("img",{src:t.avatar,className:"w-20 mx-auto rounded"}))),e.createElement("div",{className:"mx-auto bg-gray-100 w-full max-w-4xl p-10 rounded-lg mt-4"},e.createElement("div",null,e.createElement("p",{className:"text-sm"},t.description))),e.createElement("div",{className:"mx-auto  w-full max-w-4xl rounded-lg mt-4"},e.createElement("div",null,e.createElement("h2",{className:"text-sm font-semibold"},"Courses")),e.createElement("div",null,a.map((l,m)=>e.createElement(o,{data:l,key:m})))))};n.layout=t=>e.createElement(s,{title:"Instructor",children:t});export{n as default};