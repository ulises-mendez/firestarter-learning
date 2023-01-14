import{R as e,u as H,r as x,a as K,e as P}from"./app.44955430.js";import{L as W}from"./Auth.ce83d642.js";import{T as y}from"./TextInput.26e5187c.js";import{I as S}from"./InputLabel.63db4971.js";import{I as p}from"./InputError.c30d59a2.js";import{S as Y,V as $,C as q}from"./react-select-creatable.esm.be3df6d9.js";import{I as f}from"./Icon.ca8c0097.js";import"./Video.2c19889d.js";import{M as F}from"./MultiFiles.3b8ff7d4.js";import{c as G}from"./index.3812b6a5.js";import{_ as J,f as Q}from"./fileSize.9e1a2969.js";import"./Helmet.57f1bf76.js";import"./index.1d0124c4.js";import"./Logo.66b384ea.js";import"./use-isomorphic-layout-effect.browser.esm.fc919ca2.js";import"./useStateManager-7e1e8489.esm.5b6d8da9.js";import"video.js";const X=({handleFileChange:d,source:o})=>{const u=e.useRef(),E=b=>{u.current.click()};return e.createElement("div",{className:"w-full"},e.createElement("div",{className:"w-full"},e.createElement("input",{ref:u,className:"hidden",type:"file",onChange:d,accept:".vtt"})),o&&e.createElement(e.Fragment,null,e.createElement("div",{className:"bg-gray-100 p-2 rounded-lg flex justify-between"},e.createElement("p",null,"Transcript file:"),e.createElement("p",{className:"font-semibold"},o.name))),!o&&e.createElement("div",{className:"flex w-full justify-between items-center"},e.createElement("button",{type:"button",onClick:E,className:"bg-white rounded-lg flex p-2 px-4 border items-center"},e.createElement(f,{name:"transcription",className:"w-3 h-3 mr-2"}),e.createElement("span",null,"Add Transciption File")),e.createElement("p",{className:"text-gray-400"},"No file selected")),o&&e.createElement("div",{className:"w-full flex justify-end my-2"},e.createElement("button",{type:"button",onClick:E,className:"bg-gray-100 rounded-lg flex p-2 px-4 border items-center text-gray-500"},e.createElement(f,{name:"transcription",className:"w-4 h-4 mr-2"}),e.createElement("span",null,"Change File"))))},v=d=>{const{text:o,checked:u,onClick:E}=d,b=G("w-full p-2 px-4 rounded-lg border focus:ring-orange focus:ring-opacity-10",{"bg-orange text-white":u,"bg-white":!u});return e.createElement("div",{className:"w-full md:w-48 md:mr-2 p-1"},e.createElement("button",{type:"button",className:b,onClick:E},o))},Z=()=>{const{skills:d,csrf:o}=H().props,[u,E]=x.exports.useState([]),[b,A]=x.exports.useState([]),L=1,{data:c,setData:r,errors:g,post:T,processing:ee}=K({title:"",level:"",details:EditorState.createEmpty(),video:"",skills:[],category_id:1,topic_id:1,section:[]}),j=()=>{const t=[...c.section];r("section",t.concat({title:"",lessons:[]}))},w=t=>{r(t.target.name,t.target.type==="checkbox"?t.target.checked:t.target.value)},R=(t,l)=>{const n=t.target.value,a=[...c.section];a[l].title=n,r("section",a)},_=(t,l,n)=>{const a=t.target.value,s=[...c.section];s[l].lessons[n].title=a,r("section",s)},D=t=>{const l=[...c.section],a=l[t].lessons.concat({title:"",video:{file:"",url:""},attachments:""});l[t].lessons=a,r("section",l)},B=(t,l,n)=>{const a=t.target.files[0],s=URL.createObjectURL(a),m=[...c.section];m[l].lessons[n].video.file=a,m[l].lessons[n].video.url=s,r("section",m)},M=(t,l,n)=>{const a=[...c.section],s=t.target.files[0];a[l].lessons[n].transcription=s,r("section",a)},k=(t,l,n)=>{const a=[...c.section],s=Array.prototype.slice.call(t.target.files);return a[l].lessons[n].attachments=s,r("section",a),s},U=(t,l)=>{const n=t;A(n);const a=n.map(s=>s.file);r("thumbnail",a),console.log(n)},V=t=>{t.preventDefault(),T(route("course.store"))},[C,I]=x.exports.useState([]);function z(t){P.post(route("skill.store"),{_token:o,title:t}).then(l=>{console.log(l.data);const n=l.data,a={label:n.title,id:n.id};I(m=>[...m,a]);const s=C.map(m=>m.value);r("skills",[...s,a.id])}).catch(l=>console.log(l)),console.log(t)}return console.log(c),e.createElement(e.Fragment,null,e.createElement("form",{className:"p-4",onSubmit:V},e.createElement("div",{className:"max-w-4xl mx-auto"},e.createElement("div",{className:"text-left mb-2 bg-orange rounded-lg p-3"},e.createElement(y,{type:"text",name:"title",value:c.title,className:"text-white text-2xl p-2 bg-orange border-none w-full focus:border-none placeholder-white focus:ring-0 shadow-none",isFocused:!0,handleChange:w,placeholder:"Your course title goes here..."}),e.createElement(p,{message:g.title,className:"mt-2 text-white"})),e.createElement("div",{className:"flex items-center mb-4"},e.createElement("div",{className:"h-4 w-2 rounded-r bg-orange mr-2"}),e.createElement("h2",{className:"font-semibold"},"Description")),e.createElement("div",{className:"text-left my-4 bg-gray-100 rounded-lg p-3"},e.createElement("textarea",{className:"w-full bg-gray-100 focus:ring-0 border-none",onChange:w,name:"description",rows:8,placeholder:"Type description here...",value:c.description})),e.createElement("div",null,e.createElement(p,{message:g.description,className:"mt-2"})),e.createElement("div",{className:"w-full"},e.createElement("div",{className:"flex items-center mb-4"},e.createElement("div",{className:"h-4 w-2 rounded-r bg-orange mr-2"}),e.createElement("h2",{className:"font-semibold"},"Level")),e.createElement("div",{className:"flex flex-wrap mb-4 bg-gray-100 rounded-lg p-2"},e.createElement(v,{checked:c.level=="All level",text:"All level",onClick:()=>r("level","All level")}),e.createElement(v,{checked:c.level=="Begginer",text:"Begginer",onClick:()=>r("level","Begginer")}),e.createElement(v,{checked:c.level=="Intermediate",text:"Intermediate",onClick:()=>r("level","Intermediate")}),e.createElement(v,{checked:c.level=="Expert",text:"Expert",onClick:()=>r("level","Expert")}))),e.createElement("div",null,e.createElement(p,{message:g.level,className:"mt-2"})),e.createElement("div",{className:"w-full"},e.createElement("div",{className:"flex items-center mb-4"},e.createElement("div",{className:"h-4 w-2 rounded-r bg-orange mr-2"}),e.createElement("h2",{className:"font-semibold"},"Content")),c.section.map((t,l)=>e.createElement(Y,{key:l,index:l,title:t.title,collapse:!0},e.createElement("div",{key:l,className:"mb-6 rounded-b-lg shadow-md p-4 text-right bg-gray-100"},e.createElement("div",{className:"text-left my-2"},e.createElement("div",{className:"flex items-center mb-2"},e.createElement(S,{forInput:"title",value:"Section title"})),e.createElement(y,{type:"text",name:"title",value:t.title,className:"mt-1 block w-full",handleChange:n=>R(n,l)}),e.createElement(p,{message:g.section,className:"mt-2"})),e.createElement("div",{className:"flex items-center"},e.createElement("div",{className:"bg-black h-0.5 w-full"}),e.createElement("div",{className:"p-2 px-4 text-center text-white bg-black rounded-lg"},"Lessons"),e.createElement("div",{className:"bg-black h-0.5 w-full"})),t.lessons.map((n,a)=>e.createElement("div",{key:a,className:"bg-white shadow-sm p-2 my-8 rounded-lg text-left"},e.createElement("div",{className:"text-left my-2"},e.createElement(S,{forInput:"title",value:"Lesson Title"}),e.createElement(y,{type:"text",name:"title",value:n.title,className:"mt-1 block w-full",handleChange:s=>_(s,l,a)}),e.createElement(p,{message:g.lesson,className:"mt-2"})),e.createElement("div",{className:"flex items-end mb-2"},e.createElement("div",{className:"bg-gray-100 rounded-t-lg px-3 text-center text-black"},"Video"),e.createElement("div",{className:"bg-gray-100 h-0.5 w-full"})),e.createElement("div",{className:"text-left my-2"},e.createElement($,{handleFileChange:s=>B(s,l,a),source:n.video.url})),e.createElement("div",{className:"flex items-end my-2"},e.createElement("div",{className:"bg-gray-100 rounded-t-lg px-3 text-center text-black"},"Transcription"),e.createElement("div",{className:"bg-gray-100 h-0.5 w-full"})),e.createElement("div",null,e.createElement(X,{handleFileChange:s=>M(s,l,a),source:n.transcription})),e.createElement("div",{className:"flex items-end my-2"},e.createElement("div",{className:"bg-gray-100 rounded-t-lg px-3 text-center text-black"},"Attatchments"),e.createElement("div",{className:"bg-gray-100 h-0.5 w-full"})),e.createElement("div",null,e.createElement(F,{uploads:n.attachments,handleFileChange:s=>k(s,l,a),i:l,i2:a})))),e.createElement("button",{type:"button",className:"bg-black p-4 rounded-lg text-white",onClick:()=>D(l)},"Add Lesson")),e.createElement("div",null,"Delete"))),c.section.length===0&&e.createElement("div",{className:"bg-gray-100 p-4 text-center rounded-lg"},"No sections were added"),e.createElement("div",{className:"my-4 py-2 text-right"},e.createElement("button",{type:"button",className:"bg-gray-100 p-4 rounded-lg",onClick:j},"Add Section"))),e.createElement("div",{className:"w-full"},e.createElement("div",{className:"flex items-center mb-4"},e.createElement("div",{className:"h-4 w-2 rounded-r bg-orange mr-2"}),e.createElement("h2",{className:"font-semibold"},"What students will learn")),e.createElement("div",null,e.createElement(q,{onCreateOption:t=>{z(t)},value:C.map(t=>({label:t.label,value:t.id})),options:d.map(t=>({label:t.title,value:t.id})),onChange:t=>{I(t.map(l=>({label:l.label,id:l.value}))),r("skills",t.map(l=>l.value))},isMulti:!0})),e.createElement("div",null,e.createElement(p,{message:g.skills,className:"mt-2"}))),e.createElement("div",{className:"w-full my-4"},e.createElement("div",{className:"flex items-center mb-4"},e.createElement("div",{className:"h-4 w-2 rounded-r bg-orange mr-2"}),e.createElement("h2",{className:"font-semibold"},"Cover Image")),e.createElement("div",null,e.createElement(J,{multiple:!1,value:b,onChange:U,maxNumber:L,dataURLKey:"data_url"},({imageList:t,onImageUpload:l,onImageRemoveAll:n,onImageUpdate:a,onImageRemove:s,isDragging:m,dragProps:O})=>e.createElement("div",{className:`w-full rounded-xl bg-gray-100 border-gray-200 ${m?"bg-gray-100":"bg-white"}`},e.createElement("div",{className:"w-full p-4",...O},t.length==0?e.createElement("div",{className:"w-full"},e.createElement("div",{className:"w-full flex justify-center"},e.createElement("div",{onClick:l,className:"cursor-pointer p-8 text-gray-400 bg-white rounded-full"},e.createElement(f,{className:"fill-current w-8",name:"image"}))),e.createElement("p",{className:"text-center text-gray-400 mt-4 select-none"},"Drag and drop an image, or ",e.createElement("span",{className:"text-orange cursor-pointer",onClick:l},"Browse")),e.createElement("p",{className:"text-center"},"1200 x 675 or higher recommended. Max 2MB (png, jpg )")):null,t.map((N,h)=>e.createElement("div",{key:h},e.createElement("div",{className:"flex flex-wrap justify-center items-end"},e.createElement("div",{className:"w-full md:w-80"},e.createElement("img",{src:N.data_url})),e.createElement("div",{className:"py-1 px-3 w-full md:w-auto"},e.createElement("h4",{className:"font-semibold mb-2"},N.file.name),e.createElement("p",{className:"text-gray-500 mb-4"},"Size: ",Q(N.file.size,!0)),e.createElement("div",{className:"flex"},e.createElement("button",{type:"button",onClick:()=>a(h),className:"flex items-center py-2 px-4 mr-2 text-blue rounded-lg border bg-gray-50"},e.createElement(f,{className:"fill-current w-4 h-4 mr-2",name:"images"}),e.createElement("span",null,"Change Image")),e.createElement("button",{type:"button",onClick:()=>s(h),className:"p-4 text-white rounded-lg border border-red-500 bg-red-600"},e.createElement(f,{className:"fill-current w-2 h-2",name:"close"}))))))))))),e.createElement("div",null,e.createElement(p,{message:g.thumbnail,className:"mt-2"}))),e.createElement("div",null,"Attatchments",e.createElement(F,{uploads:u,handleFileChange:t=>k(t,i,i2)})),e.createElement("div",{className:"w-full max-w-lg mx-auto flex justify-center"},e.createElement("button",{className:"btn-orange w-full"},"Save")))))};Z.layout=d=>e.createElement(W,{title:"Create Course",children:d});export{Z as default};
