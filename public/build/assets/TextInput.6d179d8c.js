import{r as t,R as r}from"./app.9fb965fa.js";function p({type:o="text",name:s,value:n,className:c,autoComplete:a,required:i,isFocused:f,handleChange:u}){const e=t.exports.useRef();return t.exports.useEffect(()=>{f&&e.current.focus()},[]),r.createElement("div",{className:"flex flex-col items-start"},r.createElement("input",{type:o,name:s,value:n,className:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm "+c,ref:e,autoComplete:a,required:i,onChange:d=>u(d)}))}export{p as T};
