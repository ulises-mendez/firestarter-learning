import{u as r,R as e,H as i,I as m}from"./app.44955430.js";import{G as o}from"./Guest.06977782.js";import"./index.3812b6a5.js";import"./Context.896cb105.js";import"./Logo.66b384ea.js";import"./Icon.ca8c0097.js";const c=()=>{const{courses:s,topic:d,topics:g,trending:p,filters:t,results:a}=r().props;return console.log(t),e.createElement(e.Fragment,null,e.createElement(i,{title:u.title+" Online Training Courses"}),e.createElement("div",{className:"max-w-5xl mx-auto w-full flex flex-wrap"},e.createElement("div",{className:"w-full p-2 md:w-2/3"},a.length===0?e.createElement(e.Fragment,null,e.createElement("p",null,'No results were found for "',t.keywords,'".'),e.createElement("p",null,"Search suggestions:"),e.createElement("ul",{className:"list-disc"},e.createElement("li",null,"Make sure keywords are spelled correctly."),e.createElement("li",null,"Try rephrasing or using synonyms."),e.createElement("li",null,"Use less specific keywords."))):e.createElement(e.Fragment,null,e.createElement("h1",{className:"text-xl mb-4"},e.createElement("span",{className:"font-semibold"},'"',t.keywords,'"')," ",e.createElement("span",{className:"font-normal"},"Online Training Courses and tutorials on Firestarter Learning")),e.createElement("p",null,e.createElement("span",null,a.length),' results for you search "',t.keywords,'"'),e.createElement("div",{className:"p-2"},a.map((l,n)=>e.createElement(m,{href:route("course.show",l.slug),key:n},e.createElement("div",{className:"w-full flex py-8 border-b"},e.createElement("div",{className:"relative w-48"},e.createElement("img",{src:l.thumbnail,className:"w-full"})),e.createElement("div",{className:"px-2 flex-1"},e.createElement("p",{className:"font-semibold text-sm text-gray-600"},"Course"),e.createElement("h4",{className:"font-semibold mb-2"},l.title)))))))),e.createElement("div",{className:"w-full md:w-1/3 p-2"})),e.createElement("div",{className:"bg-orange text-white p-4"},e.createElement("div",{className:"max-w-5xl mx-auto flex justify-between"},e.createElement("h3",{className:"text-2xl font-semibold"},"Start learning today."),e.createElement("button",{className:"bg-white text-orange rounded-lg p-2 font-semibold"},"Start my free month"))))},u={title:"Business Analysis",desc:"Enhance your business analysis skills with expert-led courses on critical thinking, business analytics, project management, requirements gathering, and data presentation.",trending:[{thumb:"/img/thumbnails/develop.jpeg",title:"Ultralearning: Accelerate Your Career and Outsmart the Competition (Blinkist Summary)",by:"Blinkist",released:"Released Aug 21, 2020"},{thumb:"/img/thumbnails/sales.jpeg",title:"Women in STEM",by:"Blinkist",released:"Released Aug 21, 2020"}],results:[{type:"Video",thumb:"/img/thumbnails/develop.jpeg",title:"Ultralearning: Accelerate Your Career and Outsmart the Competition (Blinkist Summary)",by:"Blinkist",released:"Released Aug 21, 2020"},{type:"Course",thumb:"/img/thumbnails/sales.jpeg",title:"Women in STEM",by:"Jess Stratton, Peggy Fisher, and Sheeri Cabral",released:"Released Jun 13, 2022"},{type:"VIDEO",thumb:"/img/thumbnails/sales.jpeg",title:"Being strategic with memorization sessions 2m",by:"Jess Stratton, Peggy Fisher, and Sheeri Cabral",released:"Released Jun 13, 2022"},{type:"Video",thumb:"/img/thumbnails/develop.jpeg",title:"Ultralearning: Accelerate Your Career and Outsmart the Competition (Blinkist Summary)",by:"Blinkist",released:"Released Aug 21, 2020"}],topics:["AdSense","Corporate Training","E-Learning Software","Educational Technology","HR Administration","Leadership Skills","Leadership and Management","Teaching","Training and Education","WordPress"]};c.layout=s=>e.createElement(o,{title:"Course",children:s});export{c as default};
