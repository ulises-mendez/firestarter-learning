import{u as p,r as f,R as e,H as E,L as g}from"./app.db968ba3.js";import{G as w,P as N}from"./PrimaryButton.15577303.js";import{T as m,I as l}from"./TextInput.fc4e9714.js";import{I as n}from"./InputLabel.34aed2be.js";import"./ApplicationLogo.05e16923.js";function I(){const{data:t,setData:o,post:c,processing:u,errors:r,reset:i}=p({name:"",email:"",password:"",password_confirmation:""});f.exports.useEffect(()=>()=>{i("password","password_confirmation")},[]);const s=a=>{o(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)},d=a=>{a.preventDefault(),c(route("register"))};return e.createElement(w,null,e.createElement(E,{title:"Register"}),e.createElement("form",{onSubmit:d},e.createElement("div",null,e.createElement(n,{forInput:"name",value:"Name"}),e.createElement(m,{type:"text",name:"name",value:t.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,handleChange:s,required:!0}),e.createElement(l,{message:r.name,className:"mt-2"})),e.createElement("div",{className:"mt-4"},e.createElement(n,{forInput:"email",value:"Email"}),e.createElement(m,{type:"email",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:s,required:!0}),e.createElement(l,{message:r.email,className:"mt-2"})),e.createElement("div",{className:"mt-4"},e.createElement(n,{forInput:"password",value:"Password"}),e.createElement(m,{type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:s,required:!0}),e.createElement(l,{message:r.password,className:"mt-2"})),e.createElement("div",{className:"mt-4"},e.createElement(n,{forInput:"password_confirmation",value:"Confirm Password"}),e.createElement(m,{type:"password",name:"password_confirmation",value:t.password_confirmation,className:"mt-1 block w-full",handleChange:s,required:!0}),e.createElement(l,{message:r.password_confirmation,className:"mt-2"})),e.createElement("div",{className:"flex items-center justify-end mt-4"},e.createElement(g,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900"},"Already registered?"),e.createElement(N,{className:"ml-4",processing:u},"Register"))))}export{I as default};
