import{r as s,R as e,e as L,u as Qe,a as Xe,d as Ye}from"./app.b96ee58b.js";import{T as Je,W as et}from"./TranscriptionFile.f1a50348.js";import{L as tt}from"./Auth.9c9fd660.js";import{T as q}from"./TextInput.2efe2de3.js";import{I as S}from"./InputError.2adf2e68.js";import{I as A}from"./Icon.9ed4a856.js";import"./Video.18d7694a.js";import{V as at,C as me,S as lt}from"./react-select-creatable.esm.9f7cbe28.js";import{c as ie}from"./index.1a7c34d6.js";import{_ as st,f as nt}from"./fileSize.5ea208c5.js";import{M as F}from"./index.078cab15.js";import{I as J}from"./InputLabel.6e3a2024.js";import{C as V}from"./Context.f646f3d0.js";import{T as de}from"./ToggleCheck.65e08a87.js";import{t as rt}from"./TimeFormat.29b70963.js";import"./Helmet.3cdb19ce.js";import"./index.1d0124c4.js";import"./Logo.33a2fec1.js";import"./extends.cc011e2f.js";import"./inherits.1a00cd6c.js";import"./useStateManager-7e1e8489.esm.b13c629d.js";import"./use-isomorphic-layout-effect.browser.esm.a22cb103.js";const ct=()=>{const{data:v,sections:r,setSections:i,sectionSelect:y,indexSection:N,setModalLesson:C}=s.exports.useContext(V),[l,n]=s.exports.useState({}),x=r[N].lessons.length+1,[T,_]=s.exports.useState(1),[d,E]=s.exports.useState({course_id:v.id,chapter_id:y,order:x,title:"",transcription:null,transcription_url:"",url:"",video:""});function g(){_(T==1?0:1)}function b(w,o){E({...d,video:w,url:o})}function D(w,o){E({...d,transcription:w,transcription_url:o})}function R(w){const o=w.target.name,u=w.target.value;E({...d,[o]:u})}function B(w){w.preventDefault();var o=new FormData;o.append("course_id",v.id),o.append("chapter_id",y),o.append("order",d.order),o.append("title",d.title),o.append("video",d.video),o.append("premium",T),d.transcription!==null&&o.append("transcription",d.transcription),L.post(route("lesson.store"),o,{headers:{"Content-Type":"multipart/form-data"}}).then(u=>{n({});const I=[...r],j=I[N].lessons,P=u.data.lesson;console.log("new",P),I[N].lessons=j.concat(P),console.log(j),i(I),C(!1)}).catch(u=>{console.log(u),n(u.response.data.errors)})}return e.createElement(e.Fragment,null,e.createElement("div",{className:"w-full bg-orange text-white p-3"},e.createElement("h2",{className:"text-lg font-semibold"},"Create lesson")),e.createElement("form",{className:"p-4",onSubmit:B},e.createElement("div",{className:"text-left mb-2"},e.createElement(J,{forInput:"title",value:"Lesson Title"}),e.createElement(q,{type:"text",name:"title",value:d.title,className:"mt-1 block w-full",handleChange:R}),e.createElement(S,{message:l.title,className:"mt-2"})),e.createElement("div",{className:"text-left my-2"},e.createElement(at,{handleFileChange:b,src:d.url})),e.createElement("div",null,e.createElement(S,{message:l.video,className:"mt-2"})),e.createElement("div",{className:"text-left my-2"}),e.createElement("div",null,e.createElement(Je,{handleFileChange:D,src:d.transcription})),e.createElement("div",{className:"my-4 flex items-center"},e.createElement("div",null,e.createElement("h4",{className:"font-semibold text-sm mb-2 mr-2"},"Premium lesson:")),e.createElement(de,{value:T,onChange:g})),e.createElement("div",{className:"flex my-4 justify-end"},e.createElement("button",{type:"button",onClick:()=>C(!1),className:"btn-white mr-2"},"Cancel"),e.createElement("button",{type:"submit",className:"btn-orange"},"Upload Lesson"))))},ot=()=>{const{data:v,csrf:r,sections:i,setSections:y,setModalSection:N}=s.exports.useContext(V),[C,l]=s.exports.useState(null),[n,x]=s.exports.useState({course_id:v.id,order:Number(i.length)+1,title:""});function T(){N(!1)}function _(E){new FormData,E.preventDefault(),L.post(route("course.section"),{_token:r,...n}).then(g=>{const b=g.data.section;console.log(b);const D=[...i];y(D.concat({...b,lessons:[]})),l(null),N(!1)}).catch(g=>{var b;return l((b=g.response)==null?void 0:b.data.message)})}function d(E){const g=E.target.name,b=E.target.value;x({...n,[g]:b})}return e.createElement("form",{onSubmit:_},e.createElement("div",{className:"w-full bg-orange text-white p-3"},e.createElement("h2",{className:"text-lg font-semibold"},"New Section or chapter")),e.createElement("div",{className:"p-4"},e.createElement("div",{className:"text-left mb-2"},e.createElement(J,{forInput:"title",value:"Title"}),e.createElement(q,{type:"text",name:"title",value:n.title,className:"mt-1 block w-full",handleChange:d}),e.createElement(S,{message:C,className:"mt-2"})),e.createElement("div",{className:"flex my-4 justify-end"},e.createElement("button",{type:"button",className:"btn-white mr-2",onClick:T},"Cancel"),e.createElement("button",{type:"submit",className:"btn-orange"},"Upload Lesson"))))},mt=v=>{const{section:r,onRequestClose:i}=v,{indexSection:y,sections:N,setSections:C}=s.exports.useContext(V),[l,n]=s.exports.useState(r.title||""),[x,T]=s.exports.useState({});function _(E){E.preventDefault();var g=new FormData;g.append("_method","put"),g.append("title",l),L.post(route("chapter.update",r.id),g).then(b=>{console.log(y);const D=b.data.chapter,R=[...N];R[y].title=D.title,C(R),i()}).catch(b=>console.error(b))}function d(E){E.target.name;const g=E.target.value;n(g)}return e.createElement("form",{onSubmit:_},e.createElement("div",{className:"w-full bg-orange text-white p-3"},e.createElement("h2",{className:"text-lg font-semibold"},"Edit course section")),e.createElement("div",{className:"p-4"},e.createElement("div",{className:"text-left mb-2"},e.createElement(J,{forInput:"title",value:"Title"}),e.createElement(q,{type:"text",name:"title",value:l,className:"mt-1 block w-full",handleChange:d}),e.createElement(S,{message:x.title,className:"mt-2"})),e.createElement("div",{className:"flex my-4 justify-end"},e.createElement("button",{type:"button",className:"btn-white mr-2",onClick:i},"Cancel"),e.createElement("button",{type:"submit",className:"btn-orange"},"Update section"))))},it=({index:v,lesson:r,section:i})=>{const{sections:y,setSections:N,course:C}=e.useContext(V),[l,n]=e.useState(!1),[x,T]=e.useState(!1),_=e.useRef(),d=e.useRef(),[E,g]=e.useState(!1),[b,D]=e.useState(!1),[R,B]=e.useState(!1),[w,o]=e.useState(Number(r.premium)||0);console.log(r.title,r.premium);const[u,I]=e.useState({id:r.id,course_id:C.id,chapter_id:0,order:v,title:r.title||"",time:r.time||"",video:r.video||"",transcription:r.transcription||"",videofile:"",transcriptionfile:""});function j(p){const m=p.target.name,f=p.target.value;I({...u,[m]:f})}function P(){o(w==1?0:1)}const[H,ee]=e.useState(u.video.path||""),W=p=>{const m=p.target.files[0],f=URL.createObjectURL(m);ee(f),I({...u,videofile:m}),D(!0)},te=p=>{_.current.click()},ae=function(p){if(p.preventDefault(),p.target.files&&p.target.files[0]){console.log(p.target.files);const m=p.target.files[0],f=URL.createObjectURL(m);I({...u,transcription:f,transcriptionfile:m}),B(!0)}},O=p=>{d.current.click()};function Z(p){p.preventDefault();var m=new FormData;m.append("title",u.title),m.append("_method","put"),m.append("premium",w),b==!0&&m.append("video",u.videofile),R==!0&&m.append("transcription",u.transcriptionfile),L.post(route("lesson.update",r.id),m,{headers:{"Content-Type":"multipart/form-data"}}).then(f=>{console.log(f);const U=[...y];console.log(U),console.log("section",U[i]);const le=f.data.lesson;U[i].lessons[v]=le,N(U),g(!1)}).catch(f=>{console.log(f)})}function $(){n(!1)}function z(){L.delete(route("lesson.delete",r.id)).then(p=>{console.log(p);const m=[...y];console.log(m),console.log("section",m[i]),m[i].lessons.splice(v,1),N(m)}).catch(p=>console.log(p))}return e.createElement("div",{className:"w-full p-4 border-b"},e.createElement("div",{onClick:()=>T(!x),className:"cursor-pointer w-full text-left flex items-center justify-between"},e.createElement("div",{className:"flex items-center"},e.createElement(A,{name:"play",className:"w-3 h-3 mr-2 fill-orange"}),e.createElement("h4",null,r.title," ",e.createElement("span",{className:"text-xs text-gray-400"},r.premium==1?"Premium Lesson":""))),e.createElement("div",{className:"text-gray-400"},rt(r.video.time))),x&&e.createElement("div",{className:"flex flex-wrap items-start md:p-6"},e.createElement("div",{className:"w-full md:w-1/2 pt-4"},e.createElement("div",{className:"w-full"},e.createElement("div",{style:{boxShadow:"0px -1px 13px 1px rgba(0,0,0,0.05),",WebkitBoxShadow:"0px -1px 13px 1px rgba(0,0,0,0.05)",MozBoxShadow:"0px -1px 13px 1px rgba(0,0,0,0.05)",width:"auto"}},e.createElement("video",{className:"w-full",controls:!0,src:H},e.createElement("track",{src:u.transcription.path,kind:"subtitles",srcLang:"en",label:"English",default:!0})))),e.createElement("div",{className:"my-4 flex justify-center"},e.createElement("button",{type:"button",onClick:()=>n(!0),className:"btn-delete"},"Delete Lesson"))),e.createElement("div",{className:"w-full md:w-1/2 pt-4 md:pt-0 md:px-6 text-left relative"},!E&&e.createElement(e.Fragment,null,e.createElement("div",{className:"absolute right-0"},e.createElement("div",{className:"cursor-pointer p-2 rounded-full bg-gray-50",onClick:()=>g(!0)},e.createElement(A,{name:"edit",className:"w-4 h-4 fill-orange"}))),e.createElement("div",null,e.createElement("p",{className:"text-gray-400"},"Title:"),e.createElement("h4",null,r.title),e.createElement("p",{className:"text-gray-400"},"Video:"),e.createElement("h4",null,r.title),e.createElement("p",{className:"text-gray-400"},"Type:"),e.createElement("h4",null,"mp4"),e.createElement("p",{className:"text-gray-400"},"Transcription:"),e.createElement("h4",null,u.transcription.filename))),E&&e.createElement("div",null,e.createElement(J,{forInput:"title",value:"Title"}),e.createElement(q,{type:"text",name:"title",value:u.title,className:"mt-1 block w-full",handleChange:j}),e.createElement("div",null,e.createElement("label",null,e.createElement("input",{ref:_,className:"hidden",type:"file",onChange:W,accept:".mov,.mp4"}),e.createElement("div",{className:"w-full flex justify-end my-2"},e.createElement("button",{type:"button",onClick:te,className:"w-full bg-gray-100 rounded-lg flex p-2 px-4 border items-center justify-center text-gray-700"},e.createElement(A,{name:"upload-video",className:"w-4 h-4 mr-2 fill-current"}),e.createElement("span",null,"Change Video"))))),e.createElement("div",null,e.createElement("label",null,e.createElement("input",{ref:d,className:"hidden",type:"file",onChange:ae,accept:".vtt"}),e.createElement("div",{className:"w-full flex justify-end my-2"},e.createElement("button",{type:"button",onClick:O,className:"bg-gray-100 rounded-lg flex justify-center p-2 px-4 border items-center text-gray-700 w-full"},e.createElement(A,{name:"transcription",className:"w-4 h-4 mr-2 fill-current"}),e.createElement("span",null,"Change Transcription"))))),e.createElement("div",{className:"my-4 flex items-center"},e.createElement("div",null,e.createElement("h4",{className:"font-semibold text-sm mb-2 mr-2"},"Premium lesson:")),e.createElement(de,{value:w,onChange:P})),e.createElement("div",{className:"text-right"},e.createElement("button",{onClick:()=>g(!1),className:"btn-white mr-2"},"Cancel"),e.createElement("button",{className:"btn-orange",onClick:Z},"Save"))))),e.createElement(F,{isOpen:l,onRequestClose:$,className:"modal-lesson",overlayClassName:"modal-lesson-overlay",contentLabel:"Delete Lesson"},e.createElement("div",{className:"w-full p-4"},e.createElement("div",{className:"text-gray-500"},e.createElement("p",{className:"text-lg font-semibold"},"Are you sure you want to delete this lesson?"),e.createElement("p",null,"This action is irreversible")),e.createElement("div",{className:"w-full flex justify-between"},e.createElement("button",{onClick:()=>n(!1),className:"btn-white mr-2"},"Cancel"),e.createElement("button",{type:"button",onClick:z,className:"btn-delete"},"Delete Lesson")))))};F.setAppElement("*");const Y=v=>{const{text:r,checked:i,onClick:y}=v,N=ie("w-full p-2 px-4 rounded-lg border focus:ring-orange focus:ring-opacity-10",{"bg-orange text-white":i,"bg-white":!i});return e.createElement("div",{className:"w-full md:w-48 md:mr-2 p-1"},e.createElement("button",{type:"button",className:N,onClick:y},r))},dt=()=>{const v=e.useRef(null),{skills:r,csrf:i,categories:y,topics:N,select_instructors:C}=Qe().props;s.exports.useState(!1);const{data:l,setData:n,errors:x,post:T,processing:_}=Xe({category_id:"",id:null,level:"",title:"",description:"",highlight:!1,skills:[],slug:"",video:"",topics:[],topic_id:"",thumbnail:null,section:[],publish:""}),[d,E]=s.exports.useState({title:""}),[g,b]=s.exports.useState([...C]),[D,R]=s.exports.useState(!1),[B,w]=s.exports.useState([]),[o,u]=s.exports.useState([]),[I,j]=s.exports.useState(!1),[P,H]=s.exports.useState(!1),[ee,W]=s.exports.useState(!1),[te,ae]=s.exports.useState(""),[O,Z]=s.exports.useState([]);s.exports.useState(null);const[$,z]=s.exports.useState(null),[p,m]=s.exports.useState(null),[f,U]=s.exports.useState(0),[le,Ce]=s.exports.useState(null),[Se,se]=s.exports.useState(!1),ke=ie("flex items-center w-full md:w-1/2 md:border-y ",{"border-b-2 md:border-b-[3px] border-b-orange text-orange":f==0,"font-semibold text-gray-500":f==1}),Te=ie("flex items-center w-full md:w-1/2 border-l border-y p-3 md:px-6 ",{"border-b-2 md:border-b-[3px] border-b-orange text-orange":f==1,"text-gray-400":f==0});function G(){ne(!1),se(!1),H(!1)}function De(){const t=X.released?new Date(X.released):new Date;n("publish",t)}function Le(t,a){const c=[...o];u(c.concat(t))}function _e(){R(t=>!t),n("highlight",!D)}function ue(){W(!1)}function Ie(t){const a=[...o];a.splice(t,1),u(a)}function je(t,a){j(!0),m(a),Ce(t)}function Ae(t,a){re(t),console.log(t),E(a),H(!0)}function Re(){L.delete(route("chapter.delete",p)).then(t=>{const a=[...O];a.splice(le,1),Z(a),j(!1)}).catch(t=>console.log(t))}const pe=t=>{n(t.target.name,t.target.type==="checkbox"?t.target.checked:t.target.value)},Me=(t,a)=>{const c=t;w(c);const h=c.map(k=>k.file);n("thumbnail",h),console.log(c)};function Fe(){const t=o.map(a=>a.value);Ye.Inertia.post(route("course.release",l.id),{...X,instructors:t,publish:l.publish!==""?l.publish.toISOString().slice(0,19).replace("T"," "):null})}function Pe(t){if(ae(t),t){const a=C.filter(c=>{const h=t.toLowerCase(),k=c.name.toLowerCase(),M=c.email.toLowerCase();return k.includes(h)||M.includes(h)});console.log(a),b(a)}t||b(C)}const Oe=t=>{t.preventDefault(),T(route("course.store"))},[ge,fe]=s.exports.useState([]);function Ue(t){L.post(route("skill.store"),{_token:i,title:t}).then(a=>{console.log(a.data);const c=a.data,h={label:c.title,id:c.id};fe(M=>[...M,h]);const k=ge.map(M=>M.value);n("skills",[...k,h.id])}).catch(a=>console.log(a))}const[qe,Ee]=s.exports.useState(null);function Be(t){L.post(route("category.store"),{_token:i,title:t}).then(a=>{console.log(a.data);const c=a.data,h={label:c.title,id:c.id};Ee(h),n("category",h.id)}).catch(a=>console.log(a))}const[be,he]=s.exports.useState([]),[ve,xe]=s.exports.useState(!1),[ze,Ne]=s.exports.useState(""),[K,Q]=s.exports.useState({title:"",category_id:l.category_id,description:""});console.log(l.topics);const ye=t=>{Q(a=>({...a,[t.target.name]:t.target.value}))};function Ve(t){xe(!0),Q({title:t,category_id:l.category_id,description:""})}function He(){L.post(route("topic.store"),{_token:i,title:K.title,category_id:l.category_id,description:K.description}).then(t=>{const a=t.data,c={label:a.title,id:a.id},h=be.map(k=>k.value);xe(!1),he(k=>[...k,c]),n("topics",[...h,c.id]),Q({title:"",category_id:"",description:""}),Ne("")}).catch(t=>{var a;return Ne((a=t.response)==null?void 0:a.data.message)})}const[X,ut]=s.exports.useState({id:0,category:1,created_at:"2022-12-02T03:49:34.000000Z",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra finibus ex, ut ornare diam tristique at. Praesent finibus vestibulum odio in egestas. Mauris a ex faucibus, tincidunt sem id, vehicula velit.",details:null,highlight:"0",level:"Begginer",slug:"test01dec-2",thumbnail:{created_at:"2022-12-02T04:07:14.000000Z",created_by:5,filename:"phpE4P75I",id:20,original_name:"excel.jpeg",path:"/storage/thumbnails/juXoQ2ln98vwbmgAjN8wr16yir62RUZ0c31wsWfa.jpg",size:15632},skills:[{id:0,title:"Skill"}],topics:[{id:0,title:"Topics"}],title:"Title",updated_at:"2022-12-02T03:49:34.000000Z"});function We(){var t=new FormData;t.append("title",l.title),t.append("description",l.description),t.append("highlight",l.highlight==!0?1:0),t.append("level",l.level),t.append("category_id",l.category_id),t.append("thumbnail[0]",l.thumbnail[0]),l.topics.map((a,c)=>t.append(`topics[${c}]`,a)),l.skills.map((a,c)=>t.append(`skills[${c}]`,a)),L.post(route("course.store"),t,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>{U(1),n(a.data.course)}).catch(a=>console.log(a))}const[Ze,ne]=s.exports.useState(!1),[$e,re]=s.exports.useState(null),[Ge,we]=s.exports.useState(null),Ke=(t,a)=>{re(t),we(a),ne(!0)};return console.log(l),e.createElement(V.Provider,{value:{data:l,setData:n,course:X,csrf:i,sections:O,setSections:Z,setModalSection:se,setModalLesson:ne,sectionSelect:Ge,setSectionSelect:we,indexSection:$e,setIndexSection:re}},e.createElement("div",{ref:v,className:"max-w-4xl sticky mx-auto  flex flex-wrap my-2"},e.createElement("div",{className:ke},e.createElement("div",{className:"relative w-full flex items-center p-3"},e.createElement("div",{className:"hidden md:block w-4 h-4 absolute bg-white border-r border-t top-1/2 -right-2 -translate-y-1/2 rotate-45"}),e.createElement("div",{className:"mr-2"},f==0?e.createElement("div",{className:"bg-orange text-white rounded-full w-6 h-6 md:w-10 md:h-10 flex items-center justify-center px-2 font-semibold"},e.createElement("p",null,"1")):e.createElement("div",{className:"bg-orange text-white rounded-full w-6 md:w-10 h-6 md:h-10 flex items-center justify-center"},e.createElement(A,{name:"check",className:"fill-current w-4 h-4"}))),e.createElement("div",null,"Course details"))),e.createElement("div",{className:Te},e.createElement("div",{className:"mr-2"},f==1?e.createElement("div",{className:"bg-orange text-white rounded-full w-6 h-6 md:w-10 md:h-10 flex items-center justify-center"},e.createElement("p",{className:"font-semibold"},"2")):e.createElement("div",{className:"border border-gray-400 text-gray-400 rounded-full w-6 h-6 md:w-10 md:h-10 flex items-center justify-center"},e.createElement("p",{className:"font-semibold"},"2"))),e.createElement("div",null,"Course content"))),f===0&&e.createElement("form",{className:"p-4",onSubmit:Oe},e.createElement("div",{className:"max-w-4xl mx-auto"},e.createElement("div",{className:"text-left mb-2 bg-orange rounded-lg p-3"},e.createElement(q,{type:"text",name:"title",value:l.title,className:"text-white text-2xl p-2 bg-orange border-none w-full focus:border-none placeholder-white focus:ring-0 shadow-none",isFocused:!0,handleChange:pe,placeholder:"Your course title goes here..."}),e.createElement(S,{message:x.title,className:"mt-2 text-white"})),e.createElement("div",{className:"flex items-center mb-4"},e.createElement("div",{className:"h-4 w-2 rounded-r bg-orange mr-2"}),e.createElement("h2",{className:"font-semibold"},"Description")),e.createElement("div",{className:"text-left my-4 bg-gray-100 rounded-lg p-3"},e.createElement("textarea",{className:"w-full bg-gray-100 focus:ring-0 border-none",onChange:pe,name:"description",rows:8,placeholder:"Type description here...",value:l.description})),e.createElement("div",null,e.createElement(S,{message:x.description,className:"mt-2"})),e.createElement("div",{className:"w-full"},e.createElement("div",{className:"flex items-center mb-4"},e.createElement("div",{className:"h-4 w-2 rounded-r bg-orange mr-2"}),e.createElement("h2",{className:"font-semibold"},"Level")),e.createElement("div",{className:"flex flex-wrap mb-4 bg-gray-100 rounded-lg p-2"},e.createElement(Y,{checked:l.level=="All level",text:"All level",onClick:()=>n("level","All level")}),e.createElement(Y,{checked:l.level=="Begginer",text:"Begginer",onClick:()=>n("level","Begginer")}),e.createElement(Y,{checked:l.level=="Intermediate",text:"Intermediate",onClick:()=>n("level","Intermediate")}),e.createElement(Y,{checked:l.level=="Expert",text:"Expert",onClick:()=>n("level","Expert")}))),e.createElement("div",null,e.createElement(S,{message:x.level,className:"mt-2"})),e.createElement("div",{className:"w-full mb-4"},e.createElement("div",{className:"flex items-center mb-4"},e.createElement("div",{className:"h-4 w-2 rounded-r bg-orange mr-2"}),e.createElement("h2",{className:"font-semibold"},"Category")),e.createElement("div",{className:"bg-gray-100 rounded-lg p-4"},e.createElement(me,{onCreateOption:t=>{Be(t)},value:qe,options:y.map(t=>({label:t.title,value:t.id})),onChange:t=>{Ee(t),n("category_id",t.value),Q(a=>({...a,category_id:t.value}))},isMulti:!1})),e.createElement("div",null,e.createElement(S,{message:x.category,className:"mt-2"}))),!ve&&e.createElement("div",{className:"w-full mb-4"},e.createElement("div",{className:"flex items-center mb-4"},e.createElement("div",{className:"h-4 w-2 rounded-r bg-orange mr-2"}),e.createElement("h2",{className:"font-semibold"},"Topics related to course")),e.createElement("div",{className:"bg-gray-100 rounded-lg p-4"},e.createElement(me,{onCreateOption:t=>{Ve(t)},value:be.map(t=>({label:t.label,value:t.id})),options:N.map(t=>({label:t.title,value:t.id})),onChange:t=>{he(t.map(a=>({label:a.label,id:a.value}))),n("topics",t.map(a=>a.value))},isMulti:!0})),e.createElement("div",null,e.createElement(S,{message:x.topics,className:"mt-2"}))),ve&&e.createElement("div",{className:"w-full mb-4"},e.createElement("div",{className:"flex items-center mb-4"},e.createElement("div",{className:"h-4 w-2 rounded-r bg-orange mr-2"}),e.createElement("h2",{className:"font-semibold"},"Create new topic")),e.createElement("div",{className:"bg-gray-100 p-4 mb-4 rounded-lg"},e.createElement(q,{type:"text",name:"title",value:K.title,className:"mt-1 block w-full",handleChange:ye,placeholder:"Topic Title"}),e.createElement("textarea",{name:"description",value:K.description,className:"mt-2 block w-full border border-gray-300 focus:border-orange  focus:ring-orange focus:ring-opacity-50 rounded-md shadow-sm",onChange:ye,placeholder:"Topic description",rows:6})),e.createElement("div",null,e.createElement(S,{message:ze,className:"mt-2"})),e.createElement("div",{className:"flex justify-end"},e.createElement("button",{type:"button",className:"btn-orange mr-2",onClick:He},"Save"),e.createElement("button",{type:"button",className:"btn-white"},"Cancel"))),e.createElement("div",{className:"w-full"},e.createElement("div",{className:"flex items-center mb-4"},e.createElement("div",{className:"h-4 w-2 rounded-r bg-orange mr-2"}),e.createElement("h2",{className:"font-semibold"},"Skills that students will learn")),e.createElement("div",{className:"bg-gray-100 rounded-lg p-4"},e.createElement(me,{onCreateOption:t=>{Ue(t)},value:ge.map(t=>({label:t.label,value:t.id})),options:r.map(t=>({label:t.title,value:t.id})),onChange:t=>{fe(t.map(a=>({label:a.label,id:a.value}))),n("skills",t.map(a=>a.value))},isMulti:!0})),e.createElement("div",null,e.createElement(S,{message:x.skills,className:"mt-2"}))),e.createElement("div",{className:"w-full my-4"},e.createElement("div",{className:"flex items-center mb-4"},e.createElement("div",{className:"h-4 w-2 rounded-r bg-orange mr-2"}),e.createElement("h2",{className:"font-semibold"},"Cover Image")),e.createElement("div",null,e.createElement(st,{multiple:!1,value:B,onChange:Me,maxNumber:1,dataURLKey:"data_url"},({imageList:t,onImageUpload:a,onImageUpdate:c,onImageRemove:h,isDragging:k,dragProps:M})=>e.createElement("div",{className:`w-full rounded-xl  border-gray-200 ${k?"bg-gray-100":"bg-white"}`},e.createElement("div",{className:"w-full p-4",...M},t.length==0?e.createElement("div",{className:"w-full"},e.createElement("div",{className:"w-full flex justify-center"},e.createElement("div",{onClick:a,className:"cursor-pointer p-8 text-gray-400 bg-white rounded-full"},e.createElement(A,{className:"fill-current w-8",name:"image"}))),e.createElement("p",{className:"text-center text-gray-600 mt-4 select-none"},"Drag and drop an image, or ",e.createElement("button",{type:"button",className:"text-orange cursor-pointer",onClick:a},"Browse")),e.createElement("p",{className:"text-center text-gray-400"},"1200 x 675 or higher recommended. Max 2MB (png, jpg )")):null,t.map((ce,oe)=>e.createElement("div",{key:oe},e.createElement("div",{className:"flex flex-wrap justify-center items-end"},e.createElement("div",{className:"w-full md:w-80"},e.createElement("img",{src:ce.data_url})),e.createElement("div",{className:"py-1 px-3 w-full md:w-auto"},e.createElement("h4",{className:"font-semibold mb-2"},ce.file.name),e.createElement("p",{className:"text-gray-500 mb-4"},"Size: ",nt(ce.file.size,!0)),e.createElement("div",{className:"flex"},e.createElement("button",{type:"button",onClick:()=>c(oe),className:"flex items-center py-2 px-4 mr-2 rounded-lg border bg-gray-50"},e.createElement(A,{className:"fill-current w-4 h-4 mr-2",name:"images"}),e.createElement("span",null,"Change Image")),e.createElement("button",{type:"button",onClick:()=>h(oe),className:"p-4 text-white rounded-lg border border-red-500 bg-red-600"},e.createElement(A,{className:"fill-current w-2 h-2",name:"close"}))))))))))),e.createElement("div",null,e.createElement(S,{message:x.thumbnail,className:"mt-2"}))),e.createElement("div",{className:"w-full max-w-4xl mx-auto flex justify-end"},e.createElement("button",{type:"submit",className:"p-2 px-4 bg-gray-50 hover:shadow-md mr-2"},"Save as Draft"),e.createElement("button",{type:"button",onClick:We,className:"btn-orange"},"Continue")))),f===1&&e.createElement("div",{className:"w-full max-w-4xl mx-auto px-2"},e.createElement("div",{className:"bg-orange bg-opacity-10 rounded-lg p-4"},e.createElement("h2",null,"Course has been storage has draft")),e.createElement("div",{className:"w-full"},e.createElement("div",{className:"flex items-center mb-4"},e.createElement("div",{className:"h-4 w-2 rounded-r bg-orange mr-2"}),e.createElement("h2",{className:"font-semibold"},"Course Info")),e.createElement("div",{className:"mb-6 rounded-lg p-4 text-right bg-gray-100 flex flex-wrap"},e.createElement("div",{className:"w-64"},e.createElement("img",{src:l.thumbnail.path})),e.createElement("div",{className:"px-4 text-left flex-1"},e.createElement("p",{className:"text-xs text-gray-600 "},"Title:"),e.createElement("h3",{className:"font-semibold text-lg"},l.title),e.createElement("p",{className:"text-xs text-gray-600 "},"Slug:"),e.createElement("h3",{className:"font-semibold text-sm"},l.slug),e.createElement("p",{className:"text-xs text-gray-600 "},"Category:"),e.createElement("h3",{className:"font-semibold"},"Training and skills"),e.createElement("p",{className:"text-xs text-gray-600 "},"Level:"),e.createElement("h3",{className:"font-semibold"},l.level)),e.createElement("div",{className:"w-full text-left"},e.createElement("p",{className:"text-xs text-gray-600 "},"Description:"),e.createElement("h3",{className:"font-semibold text-sm"},l.description),e.createElement("p",{className:"text-xs text-gray-600 mb-1"},"Topics:"),e.createElement("div",{className:"flex flex-wrap"},l.topics.map((t,a)=>e.createElement("div",{key:a,className:"p-2 border rounded-lg bg-white font-semibold text-sm"},t.title))),e.createElement("p",{className:"text-xs text-gray-600 mb-1"},"Skills:"),e.createElement("div",{className:"flex flex-wrap"},l.skills.map((t,a)=>e.createElement("div",{key:a,className:"p-2 border rounded-lg bg-white font-semibold text-sm"},t.title)))),e.createElement("div",{className:"w-full"},e.createElement("button",{type:"button",className:"bg-black font-semibold px-4 p-2 rounded-lg text-white"},"Edit Course Info")))),e.createElement("div",{className:"w-full"},e.createElement("div",{className:"flex items-center mb-4"},e.createElement("div",{className:"h-4 w-2 rounded-r bg-orange mr-2"}),e.createElement("h2",{className:"font-semibold"},"Content")),O.map((t,a)=>e.createElement(lt,{key:a,index:a,title:t.title,collapse:!0,lessons:t.lessons.length},e.createElement("div",{key:a,className:" rounded-b-lg md:px-4 pb-4 text-right"},t.lessons.map((c,h)=>e.createElement(it,{key:h,section:a,index:h,lesson:c})),e.createElement("div",{className:"flex items-center justify-between mt-6"},e.createElement("button",{type:"button",className:"bg-white p-4 hover:text-orange text-gray-600 hover:bg-gray-100 rounded-lg flex items-center",onClick:()=>je(a,t.id)},e.createElement(A,{name:"trash",className:"w-4 h-4 fill-current mr-2"}),e.createElement("span",null,"Delete Section")),e.createElement("div",{className:"flex"},e.createElement("button",{typeof:"button",className:"bg-gray-100 p-4 rounded-lg mr-2",onClick:()=>Ae(a,t)},"Edit Section"),e.createElement("button",{type:"button",className:"bg-black p-4 rounded-lg text-white",onClick:()=>Ke(a,t.id)},"Add Lesson")))))),O.length===0&&e.createElement("div",{className:"bg-gray-100 p-4 text-center text-gray-400 rounded-lg"},"No sections were added"),e.createElement("div",{className:"my-4 py-2 text-center"},e.createElement("button",{type:"button",className:"bg-black text-white font-semibold p-4 px-10 rounded-lg",onClick:()=>se(!0)},"Add Section"))),e.createElement("div",{className:"text-right"},e.createElement("button",{className:"btn-orange",onClick:()=>W(!0)},"Release Course")),e.createElement("div",null)),e.createElement(F,{isOpen:Ze,onRequestClose:G,className:"modal-lesson",overlayClassName:"modal-lesson-overlay",contentLabel:"New Lesson"},e.createElement(ct,null)),e.createElement(F,{isOpen:Se,onRequestClose:G,className:"modal-lesson",overlayClassName:"modal-lesson-overlay",contentLabel:"New category"},e.createElement(ot,null)),e.createElement(F,{isOpen:I,onRequestClose:()=>j(!1),className:"modal-lesson",overlayClassName:"modal-lesson-overlay",contentLabel:"Delete Section"},e.createElement("div",{className:"w-full p-4"},e.createElement("div",{className:"text-gray-500"},e.createElement("p",{className:"text-lg font-semibold"},"Are you sure you want to delete this section?"),e.createElement("p",null,"This action is irreversible")),e.createElement("div",{className:"w-full flex justify-end"},e.createElement("button",{className:"btn-white mr-2",onClick:()=>j(!1)},"Cancel"),e.createElement("button",{className:"btn-red",onClick:Re},"Delete")))),e.createElement(F,{isOpen:P,onRequestClose:G,className:"modal-lesson",overlayClassName:"modal-lesson-overlay",contentLabel:"Edit Section"},e.createElement(mt,{section:d,onRequestClose:G})),e.createElement(F,{isOpen:ee,onAfterOpen:De,onRequestClose:ue,className:"modal-publish",overlayClassName:"modal-publish-overlay",contentLabel:"Publish"},e.createElement("div",{className:"flex"},e.createElement("div",{className:"p-2 w-1/2"},e.createElement("button",{onClick:Fe,className:"bg-orange p-2 text-white w-full rounded-md"},"Publish")),e.createElement("div",{className:"p-2 w-1/2"},e.createElement("button",{className:"border p-2 w-full rounded-md",onClick:ue},"Cancel"))),e.createElement("div",{className:"p-2"},e.createElement("h4",{className:"font-semibold"},"Are you ready to publish?"),e.createElement("p",{className:"text-sm"},"Double-check your settings before publishing.")),e.createElement("div",{className:"flex items-center p-2"},e.createElement("div",{className:"h-4 w-2 rounded-r bg-orange mr-2"}),e.createElement("h2",{className:"font-semibold"},"Highlight Course")),e.createElement("div",{className:"px-4"},e.createElement(de,{value:D,onChange:_e})),e.createElement("div",{className:"p-2"},e.createElement("div",{className:"flex items-center p-2"},e.createElement("div",{className:"h-4 w-2 rounded-r bg-orange mr-2"}),e.createElement("h2",{className:"font-semibold"},"Publish date")),e.createElement("div",null,e.createElement(et,{dateFormat:"dd/MM/yyyy",selected:l.publish,minDate:new Date(2e3,1,1),onChange:t=>n("publish",t),placeholderText:"dd/mm/yyyy",className:"w-full border-gray-200 rounded-md"}))),e.createElement("div",{className:"flex items-center p-2"},e.createElement("div",{className:"h-4 w-2 rounded-r bg-orange mr-2"}),e.createElement("h2",{className:"font-semibold"},"Instructors")),e.createElement("div",{className:"p-2"},e.createElement("div",{className:"relative p-2 h-10"},$&&e.createElement("div",{className:"fixed flex h-full w-full top-0 left-0"},e.createElement("div",{className:"h-full flex-1",onClick:()=>{setModalSettings(!1),z(!1)}}),e.createElement("div",{className:"w-full h-full max-w-[400px]",onClick:()=>{z(!1)}})),e.createElement("input",{className:"absolute top-0 left-0 w-full border border-gray-200 rounded-md p-2 z-1",placeholder:"Search instructor",value:te,onClick:()=>{z(!0)},onChange:t=>Pe(t.target.value)}),$&&e.createElement("div",{className:"direction-left absolute bg-white z-10 border rounded w-full top-14 left-0 max-h-72 overflow-hidden overflow-y-auto"},g.map((t,a)=>e.createElement("div",{key:a,className:"flex p-2 w-full hover:bg-lightGray"},e.createElement("div",null,e.createElement("img",{src:t.avatar,className:"rounded-full w-12"})),e.createElement("div",{className:"p-2 flex-1"},e.createElement("h3",{className:"font-semibold"},t.name),e.createElement("p",{className:"text-xs"},t.email)),e.createElement("div",null,e.createElement("button",{className:"border p-2 px-4 rounded-lg hover:bg-orange hover:text-white shadow-sm hover:shadow-md",type:"button",onClick:()=>Le(t)},"Add"))))))),e.createElement("div",{className:"p-2"},e.createElement("h4",null,o.length," instructors in this course"),o.map((t,a)=>e.createElement("div",{key:a,className:"flex my-4"},e.createElement("div",null,e.createElement("img",{src:t.avatar,className:"rounded-full w-12"})),e.createElement("div",{className:"p-2 flex-1"},e.createElement("h3",{className:"font-semibold"},t.name),e.createElement("p",{className:"text-xs"},t.email)),e.createElement("div",null,e.createElement("button",{className:"border hover:bg-orange hover:text-white p-2 rounded-lg",onClick:()=>Ie(a),type:"button"},"Remove")))))))};dt.layout=v=>e.createElement(tt,{title:"Create Course",children:v});export{dt as default};
