import{a as i,r as p,R as e,H as u}from"./app.91217be9.js";import{G as f}from"./GuestLayout.a80515d4.js";import{I as d}from"./InputError.1fb88d28.js";import{I as w}from"./InputLabel.95fc6d59.js";import{P as E}from"./PrimaryButton.9273afdc.js";import{T as g}from"./TextInput.ef395053.js";/* empty css            */import"./Logo.54ebcf4a.js";function C(){const{data:a,setData:r,post:s,processing:o,errors:m,reset:n}=i({password:""});p.exports.useEffect(()=>()=>{n("password")},[]);const l=t=>{r(t.target.name,t.target.value)},c=t=>{t.preventDefault(),s(route("password.confirm"))};return e.createElement(f,null,e.createElement(u,{title:"Confirm Password"}),e.createElement("div",{className:"mb-4 text-sm text-gray-600"},"This is a secure area of the application. Please confirm your password before continuing."),e.createElement("form",{onSubmit:c},e.createElement("div",{className:"mt-4"},e.createElement(w,{forInput:"password",value:"Password"}),e.createElement(g,{type:"password",name:"password",value:a.password,className:"mt-1 block w-full",isFocused:!0,handleChange:l}),e.createElement(d,{message:m.password,className:"mt-2"})),e.createElement("div",{className:"flex items-center justify-end mt-4"},e.createElement(E,{className:"ml-4",processing:o},"Confirm"))))}export{C as default};
