import{u as d,r as f,R as e,H as E,L as g}from"./app.623e390a.js";import{G as w}from"./GuestLayout.01c8d17a.js";import{T as m,I as l}from"./TextInput.8bc471f9.js";import{I as n}from"./InputLabel.5109c190.js";import{P as N}from"./PrimaryButton.ce4995ab.js";import"./Logo.221da5ab.js";function b(){const{data:t,setData:o,post:c,processing:i,errors:r,reset:u}=d({name:"",email:"",password:"",password_confirmation:""});f.exports.useEffect(()=>()=>{u("password","password_confirmation")},[]);const s=a=>{o(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)},p=a=>{a.preventDefault(),c(route("register"))};return e.createElement(w,null,e.createElement(E,{title:"Register"}),e.createElement("form",{onSubmit:p},e.createElement("div",null,e.createElement(n,{forInput:"name",value:"Name"}),e.createElement(m,{type:"text",name:"name",value:t.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,handleChange:s,required:!0}),e.createElement(l,{message:r.name,className:"mt-2"})),e.createElement("div",{className:"mt-4"},e.createElement(n,{forInput:"email",value:"Email"}),e.createElement(m,{type:"email",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:s,required:!0}),e.createElement(l,{message:r.email,className:"mt-2"})),e.createElement("div",{className:"mt-4"},e.createElement(n,{forInput:"password",value:"Password"}),e.createElement(m,{type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:s,required:!0}),e.createElement(l,{message:r.password,className:"mt-2"})),e.createElement("div",{className:"mt-4"},e.createElement(n,{forInput:"password_confirmation",value:"Confirm Password"}),e.createElement(m,{type:"password",name:"password_confirmation",value:t.password_confirmation,className:"mt-1 block w-full",handleChange:s,required:!0}),e.createElement(l,{message:r.password_confirmation,className:"mt-2"})),e.createElement("div",{className:"flex items-center justify-end mt-4"},e.createElement(g,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900"},"Already registered?"),e.createElement(N,{className:"ml-4",processing:i},"Register"))))}export{b as default};