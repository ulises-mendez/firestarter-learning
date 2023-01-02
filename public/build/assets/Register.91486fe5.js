import{u,r as d,R as e,H as p,L as f,I as E}from"./app.9fb965fa.js";import{G as w}from"./GuestLayout.b12da08d.js";import{I as m}from"./InputError.efc77ff8.js";import{I as l}from"./InputLabel.9565f6e9.js";import{T as n}from"./TextInput.6d179d8c.js";import"./Logo.69088756.js";function x(){const{data:a,setData:o,post:g,processing:c,errors:t,reset:i}=u({name:"",email:"",password:"",password_confirmation:""});d.exports.useEffect(()=>()=>{i("password","password_confirmation")},[]);const r=s=>{o(s.target.name,s.target.type==="checkbox"?s.target.checked:s.target.value)};return e.createElement(w,null,e.createElement(p,{title:"Register"}),e.createElement("form",null,e.createElement("div",null,e.createElement(l,{forInput:"name",value:"Name"}),e.createElement(n,{type:"text",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,handleChange:r,required:!0}),e.createElement(m,{message:t.name,className:"mt-2"})),e.createElement("div",{className:"mt-4"},e.createElement(l,{forInput:"email",value:"Email"}),e.createElement(n,{type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:r,required:!0}),e.createElement(m,{message:t.email,className:"mt-2"})),e.createElement("div",{className:"mt-4"},e.createElement(l,{forInput:"password",value:"Password"}),e.createElement(n,{type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:r,required:!0}),e.createElement(m,{message:t.password,className:"mt-2"})),e.createElement("div",{className:"mt-4"},e.createElement(l,{forInput:"password_confirmation",value:"Confirm Password"}),e.createElement(n,{type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",handleChange:r,required:!0}),e.createElement(m,{message:t.password_confirmation,className:"mt-2"})),e.createElement("div",{className:"flex items-center justify-end mt-4"},e.createElement(f,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900"},"Already registered?"),e.createElement(E,{href:route("subscription.checkout"),type:"button",className:"bg-black p-4 text-white font-semibold rounded ml-4",processing:c},"Register"))))}export{x as default};