import{a as d,r as f,R as e,H as w,L as g}from"./app.642c5782.js";import{G as E}from"./GuestLayout.a7cd8f91.js";import{I as m}from"./InputError.a80eaeed.js";import{I as o}from"./InputLabel.012336a1.js";import{P as h}from"./PrimaryButton.b0db06ee.js";import{T as l}from"./TextInput.97e240fd.js";import"./Logo.5230289a.js";function C(){const{data:a,setData:n,post:c,processing:i,errors:r,reset:u}=d({email:"",password:"",password_confirmation:""});f.exports.useEffect(()=>()=>{u("password","password_confirmation")},[]);const s=t=>{n(t.target.name,t.target.type==="checkbox"?t.target.checked:t.target.value)},p=t=>{t.preventDefault(),c(route("register"))};return e.createElement(E,null,e.createElement(w,{title:"Register"}),e.createElement("form",{onSubmit:p},e.createElement("div",{className:"mt-4"},e.createElement(o,{forInput:"email",value:"Email"}),e.createElement(l,{type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:s,required:!0}),e.createElement(m,{message:r.email,className:"mt-2"})),e.createElement("div",{className:"mt-4"},e.createElement(o,{forInput:"password",value:"Password"}),e.createElement(l,{type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:s,required:!0}),e.createElement(m,{message:r.password,className:"mt-2"})),e.createElement("div",{className:"mt-4"},e.createElement(o,{forInput:"password_confirmation",value:"Confirm Password"}),e.createElement(l,{type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",handleChange:s,required:!0}),e.createElement(m,{message:r.password_confirmation,className:"mt-2"})),e.createElement("div",{className:"flex items-center justify-end mt-4"},e.createElement(g,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900"},"Already registered?"),e.createElement(h,{type:"submit",className:"bg-black p-4 text-white font-semibold rounded ml-4",processing:i},"Register"))))}export{C as default};
