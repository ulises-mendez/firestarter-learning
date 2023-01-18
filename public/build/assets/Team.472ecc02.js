import{R as e,r as s,u as k,e as A,d as R}from"./app.642c5782.js";import{L as D}from"./Auth.0ff6f4dc.js";import{M}from"./index.17bbae15.js";import{u as O,p as S}from"./pickBy.251dddce.js";import"./index.1a7c34d6.js";import"./Helmet.43be54be.js";import"./index.1d0124c4.js";import"./Logo.5230289a.js";import"./Icon.e3dd0399.js";const C=e.createContext(null),I=()=>{const{values:a,handleChange:n,reset:m}=s.exports.useContext(C);return e.createElement("div",{className:"flex items-center w-full mr-4"},e.createElement("div",{className:"relative flex w-full bg-white rounded "},e.createElement("input",{className:"relative font-bold border-white w-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-orange",autoComplete:"off",type:"text",name:"search",value:a.search,onChange:n,placeholder:"Type name or email"})),e.createElement("button",{onClick:m,className:"p-4 font-bold text-sm text-white bg-orange focus:outline-none",type:"button"},"DELETE"))},L=a=>{const n=new Date(a),m=("0"+n.getDate()).slice(-2),f=n.getMonth(),d=n.getFullYear(),r=["Jun","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return e.createElement("span",null,r[f]," ",m,", ",d)},b=({user:a})=>{const{id:n,created_at:m,email:f,name:d,roles:r}=a,{csrf:g}=k().props,{reset:x,prevTeam:i,setTeam:h,closeModal:w}=s.exports.useContext(C),[N,o]=s.exports.useState(r||["student"]);function p(c,v){console.log(c.target.value),console.log(v);const u=c.target.value;A.put(route("user.role.update",v),{_token:g,roles:[u]}).then(E=>{o([u]);const t=[...i];if(console.log(t.filter(l=>l.id===a.id)),t.filter(l=>l.id===a.id).length>0){const l=t.map(y=>y.id).indexOf(a.id);t[l]={...a,roles:[u]},h(t),w(),x()}else console.log("new"),h(t.concat({...a,roles:[u]}))}).catch(E=>console.log(E))}return e.createElement("tr",{className:"border-t"},e.createElement("td",{className:"px-4 py-2"},e.createElement("p",{className:"font-semibold"},d),e.createElement("p",{className:"text-xs"},f)),e.createElement("td",{className:"px-4 py-2 text-sm"},L(m)),e.createElement("td",{className:"text-right py-2 px-4"},e.createElement("select",{value:N[0],onChange:c=>p(c,n),className:"border border-gray-300 rounded"},e.createElement("option",{value:"student"},"Student"),e.createElement("option",{value:"instructor"},"Instructor"),e.createElement("option",{value:"editor"},"Editor"),e.createElement("option",{value:"admin"},"Administrator"))))};M.setAppElement("*");const J=()=>{const{users:a,csrf:n,admins:m,instructors:f,team:d,filters:r}=k().props,[g,x]=s.exports.useState(!1),[i,h]=s.exports.useState(d),[w,N]=s.exports.useState(!1),[o,p]=s.exports.useState({role:r.role||"",search:r.search||"",trashed:r.trashed||""}),c=O(o);function v(){p({role:"",search:"",trashed:""})}s.exports.useEffect(()=>{if(c){const t=Object.keys(S(o)).length?S(o):{remember:"forget"};R.Inertia.get(route(route().current()),t,{replace:!0,preserveState:!0})}},[o]);function u(t){const l=t.target.name,y=t.target.value;p(T=>({...T,[l]:y})),g&&x(!1)}function E(){N(!1)}return e.createElement(C.Provider,{value:{prevTeam:i,setTeam:h,opened:g,setOpened:x,values:o,setValues:p,handleChange:u,prevValues:c,reset:v,closeModal:E}},e.createElement("div",{className:"w-full h-full p-2 md:p-8 overflow-y-auto"},e.createElement("div",{className:"mx-auto mb-4 w-full max-w-7xl rounded-lg"},e.createElement("div",{className:"flex flex-wrap justify-between items-center w-full"},e.createElement("div",{className:"px-4 py-2 w-full md:w-auto"},e.createElement("h2",{className:"font-semibold text-xl"},"Team members"),e.createElement("p",null,"Manage your team members and their account permissions here.")),e.createElement("div",{className:"px-4 py-2 w-full md:w-auto"},e.createElement("button",{onClick:()=>N(!0),className:"btn-orange"},"Add member")))),e.createElement("div",null),e.createElement("div",{className:"p-8 flex flex-wrap max-w-7xl mx-auto"},e.createElement("div",{className:"w-full lg:w-1/3 pr-4"},e.createElement("h2",{className:"font-semibold"},"Admin users"),e.createElement("p",null,"Admins can add and remove users and manage organization-level settings.")),e.createElement("div",{className:"w-full lg:w-2/3 "},e.createElement("table",{className:"w-full bg-gray-50 rounded-lg overflow-hidden"},e.createElement("thead",{className:"bg-gray-700 rounded-t-lg text-white"},e.createElement("tr",null,e.createElement("th",{className:"text-left p-4"},"Name"),e.createElement("th",{className:"text-left p-4"},"Date added"),e.createElement("th",{className:"p-4"},"Role"))),e.createElement("tbody",null,i.map((t,l)=>t.roles[0]==="admin"?e.createElement(b,{key:l,user:t}):null))))),e.createElement("div",{className:"p-8 flex flex-wrap max-w-7xl mx-auto"},e.createElement("div",{className:"w-full lg:w-1/3 pr-4"},e.createElement("h2",{className:"font-semibold"},"Instructors users"),e.createElement("p",null,"Instructors can add and manage course contents.")),e.createElement("div",{className:"w-full lg:w-2/3"},e.createElement("table",{className:"w-full bg-gray-50 rounded-lg overflow-hidden"},e.createElement("thead",{className:"bg-gray-700 rounded-t-lg text-white"},e.createElement("tr",null,e.createElement("th",{className:"text-left p-4"},"Name"),e.createElement("th",{className:"text-left p-4"},"Date added"),e.createElement("th",{className:"p-4"},"Role"))),e.createElement("tbody",null,i.map((t,l)=>t.roles[0]==="instructor"?e.createElement(b,{key:l,user:t}):null))))),e.createElement(M,{isOpen:w,onRequestClose:E,className:"modal-search",overlayClassName:"modal-lesson-overlay",contentLabel:"New category"},e.createElement("div",{className:"w-full"},e.createElement(I,null)),e.createElement("div",{className:"w-full"},a!==null&&e.createElement("table",{className:"w-full bg-white"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{className:"text-left p-2 py-4"},"Name"),e.createElement("th",{className:"text-left p-2 py-4"},"Email"),e.createElement("th",null,e.createElement("span",{className:"sr-only p-2 py-4"},"Action")))),e.createElement("tbody",null,a.data.map((t,l)=>e.createElement(b,{key:l,user:t})),a.data.length===0&&e.createElement("tr",null,e.createElement("td",{className:"px-6 py-4 border-t border-gray-100",colSpan:"3"},"No users found"))))))))};J.layout=a=>e.createElement(D,{title:"Team",children:a});export{J as default};
