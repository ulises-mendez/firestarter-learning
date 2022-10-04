import{R as e,u as f,r as E,H as b,L as o}from"./app.623e390a.js";import{G as x}from"./GuestLayout.01c8d17a.js";import{T as c,I as u}from"./TextInput.8bc471f9.js";import{I as i}from"./InputLabel.5109c190.js";import"./Logo.221da5ab.js";function h({name:r,value:s,handleChange:a}){return e.createElement("input",{type:"checkbox",name:r,value:s,className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",onChange:m=>a(m)})}function I({status:r,canResetPassword:s}){const{data:a,setData:m,post:d,processing:w,errors:n,reset:p}=f({email:"user@example.com",password:"firestarter",remember:""});E.exports.useEffect(()=>()=>{p("password")},[]);const l=t=>{m(t.target.name,t.target.type==="checkbox"?t.target.checked:t.target.value)},g=t=>{t.preventDefault(),d(route("login"))};return e.createElement(x,null,e.createElement(b,{title:"Log in"}),r&&e.createElement("div",{className:"mb-4 font-medium text-sm text-green-600"},r),e.createElement("form",{onSubmit:g},e.createElement("div",null,e.createElement(i,{forInput:"email",value:"Email"}),e.createElement(c,{type:"text",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,handleChange:l}),e.createElement(u,{message:n.email,className:"mt-2"})),e.createElement("div",{className:"mt-4"},e.createElement(i,{forInput:"password",value:"Password"}),e.createElement(c,{type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"current-password",handleChange:l}),e.createElement(u,{message:n.password,className:"mt-2"})),e.createElement("div",{className:"block mt-4"},e.createElement("label",{className:"flex items-center"},e.createElement(h,{name:"remember",value:a.remember,handleChange:l}),e.createElement("span",{className:"ml-2 text-sm text-gray-600"},"Remember me"))),e.createElement("div",{className:"flex items-center justify-end mt-4"},s&&e.createElement(o,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900"},"Forgot your password?"),e.createElement(o,{href:route("me"),className:"ml-4 bg-black p-2 rounded-lg text-white"},"Log in"))))}export{I as default};
