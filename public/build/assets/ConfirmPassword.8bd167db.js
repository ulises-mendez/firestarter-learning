import{a as i,r as p,R as e,H as u}from"./app.16b08967.js";import{G as f}from"./GuestLayout.825c2c8b.js";import{I as d}from"./InputError.1c3d6dbb.js";import{I as w}from"./InputLabel.b63f133f.js";import{P as E}from"./PrimaryButton.48b3581b.js";import{T as g}from"./TextInput.0f4d1139.js";/* empty css            */import"./Logo.f400d5da.js";function C(){const{data:a,setData:r,post:s,processing:o,errors:m,reset:n}=i({password:""});p.exports.useEffect(()=>()=>{n("password")},[]);const l=t=>{r(t.target.name,t.target.value)},c=t=>{t.preventDefault(),s(route("password.confirm"))};return e.createElement(f,null,e.createElement(u,{title:"Confirm Password"}),e.createElement("div",{className:"mb-4 text-sm text-gray-600"},"This is a secure area of the application. Please confirm your password before continuing."),e.createElement("form",{onSubmit:c},e.createElement("div",{className:"mt-4"},e.createElement(w,{forInput:"password",value:"Password"}),e.createElement(g,{type:"password",name:"password",value:a.password,className:"mt-1 block w-full",isFocused:!0,handleChange:l}),e.createElement(d,{message:m.password,className:"mt-2"})),e.createElement("div",{className:"flex items-center justify-end mt-4"},e.createElement(E,{className:"ml-4",processing:o},"Confirm"))))}export{C as default};