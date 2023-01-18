import{R as e,H as s,I as a}from"./app.642c5782.js";import{G as m}from"./Guest.38d41293.js";import{I as c}from"./Icon.e3dd0399.js";import"./Logo.5230289a.js";const i=()=>e.createElement(e.Fragment,null,e.createElement(s,{title:"Getting Started"}),e.createElement("div",{className:"bg-gray-100 py-4"},e.createElement("div",{className:"max-w-6xl mx-auto p-4 md:px-2"},e.createElement("div",{className:"flex flex-wrap justify-between"},e.createElement("div",{className:"flex items-center"},e.createElement(a,{href:route("help.index"),className:"font-semibold text-orange"},"FireStarter"),e.createElement(c,{name:"cheveron-right",className:"w-4"}),e.createElement("p",null,"Getting Started")),e.createElement("div",{className:"w-full md:w-1/3"},e.createElement("input",{className:"bg-white rounded-full p-2 px-4 w-full",placeholder:"Search"}))),e.createElement("h1",{className:"text-3xl  font-semibold my-4"},"Getting Started"))),e.createElement("div",{className:"w-full"},e.createElement("div",{className:"max-w-6xl mx-auto w-full flex sm:p-4 gap-4 my-8"},e.createElement("div",{className:"hidden md:block md:w-1/4"},e.createElement("p",{className:"font-bold text-gray-800"},"Main Topics"),e.createElement("p",{className:"font-semibold text-orange"},"Getting Started"),e.createElement("p",{className:"text-orange"},"Account/Profile"),e.createElement("p",{className:"text-orange"},"Troubleshooting"),e.createElement("p",{className:"text-orange"},"Learning Experience"),e.createElement("p",{className:"text-orange"},"Purchase/Refunds"),e.createElement("p",{className:"text-orange"},"Mobile")),e.createElement("div",{className:"w-full md:w-3/4"},o.topics.map((t,r)=>e.createElement("section",{key:r,className:"mb-4 mx-2"},e.createElement("h2",{className:"text-2xl font-bold mb-2"},t.title),e.createElement("ul",null,t.content.map((l,n)=>e.createElement("li",{key:n,className:"py-1"},e.createElement(a,{href:route("help.article"),className:"text-orange underline"},l.title)))))))))),o={topics:[{title:"How to Get Started With FireStarter",content:[{title:"How to Sign up With FireStarter and Log in (on a Browser)"},{title:"FireStarter Platforms and Features"},{title:"System Requirements"}]},{title:"Learn More About FireStarter",content:[{title:"Learning With FireStarter: FAQ"},{title:"Lifetime Access"}]},{title:"FireStarter's Instructors",content:[{title:"FireStarter Instructor Partner Badges: What do Learners Need to Know?"},{title:"Course Instructors and Teaching Assistants"}]}]};i.layout=t=>e.createElement(m,{title:"Course",children:t});export{i as default};