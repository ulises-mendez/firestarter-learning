import{r as m,R as e,u as C,H as k,I as v}from"./app.642c5782.js";import{u as S,a as I,C as y,l as P,E as T}from"./react-stripe.esm.386392cb.js";import{d as g}from"./Date.384df194.js";import{L as j}from"./Logo.5230289a.js";import{c as q}from"./index.1a7c34d6.js";import{T as a}from"./TextInput.97e240fd.js";import{I as r}from"./InputLabel.012336a1.js";import{I as D}from"./Icon.e3dd0399.js";import"./index.1d0124c4.js";function M(){const l=S(),n=I(),[p,w]=m.exports.useState(null),[i,h]=m.exports.useState(!1),[d,f]=m.exports.useState({firstName:"",lastName:"",cc:"",expiration:"",code:"",country:"",postalCode:"",gst:"",qst:""}),o=c=>{f(c.target.name,c.target.type==="checkbox"?c.target.checked:c.target.value)},N={style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},x=async c=>{if(!l||!n)return;const t=await l.createPaymentMethod({type:"card",card:n.getElement(y),billing_details:{email:"email@example.com"}});if(t.error)console.log(t.error.message);else{axios.post(route("stripe.subscription"),{payment_method:t.paymentMethod.id,email:"email@example.com"});const{client_secret:b,status:s}=res.data;s==="requires_action"?l.confirmCardPayment(b).then(function(u){u.error?(console.log("There was an issue!"),console.log(u.error)):console.log("You got the money!")}):console.log("You got the money!")}};return e.createElement("form",{id:"payment-form",onSubmit:x},e.createElement("label",{htmlFor:"firstName",className:"block text-sm text-gray-800 "},"First Name *"),e.createElement(a,{type:"text",name:"firstName",value:d.firstName,className:"mt-1 block w-full",autoComplete:"first name",handleChange:o}),e.createElement("label",{htmlFor:"lastName",className:"block text-sm text-gray-800 "},"Last Name *"),e.createElement(a,{type:"text",name:"lastName",value:d.lastName,className:"mt-1 block w-full",autoComplete:"last name",handleChange:o}),e.createElement(y,{options:N}),e.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2"},e.createElement("div",{className:"w-full"},e.createElement(r,{forInput:"gst",value:"GST ID"}),e.createElement(a,{type:"text",name:"gst",value:d.gst,className:"mt-1 block w-full",handleChange:o})),e.createElement("div",{className:"w-full"},e.createElement(r,{forInput:"qst",value:"PST/QST ID"}),e.createElement(a,{type:"text",name:"qst",value:d.qst,className:"mt-1 block w-full",handleChange:o}))),e.createElement("button",{className:"btn-orange my-4",disabled:i||!l||!n,id:"submit"},e.createElement("span",{id:"button-text"},i?"Processing ... ":"Pay now")),p&&e.createElement("div",{id:"payment-message"},p))}const E=l=>{const n=l.checked,p=q("border-2 rounded-lg p-2 h-full flex flex-col justify-center cursor-pointer",{"border-orange bg-white shadow-lg":n,"bg-gray-100 ":!n});return e.createElement("div",{className:p,...l},e.createElement("div",{className:"text-center p-4"},l.children))},H=P("pk_test_51JYiCeHOSZzHYeBQ0KjMSaGX7VS649UAxnVr8xOFpJfzfqjG5z3ytxQw0Ut6xivhYEiPpdojOnzx03yRmLhqTVvH00JZJ7g4bi"),G=()=>{const{intent:l}=C().props,n={clientSecret:l.client_secret},[p,w]=m.exports.useState(!1);m.exports.useState(null),m.exports.useState(!1);const[i,h]=m.exports.useState(null),[d,f]=m.exports.useState(null),o=new Date,N=new Date,x=o.getMonth(),c=N.setMonth(x+1),[t,b]=m.exports.useState({firstName:"",lastName:"",cc:"",expiration:"",code:"",country:"",postalCode:"",gst:"",qst:""}),s=u=>{b(u.target.name,u.target.type==="checkbox"?u.target.checked:u.target.value)};return console.log(n),e.createElement(e.Fragment,null,e.createElement(k,{title:"Checkout Page"}),p&&e.createElement("div",{className:"fixed bg-gray-100 z-50 h-screen w-screen flex items-center justify-center"},e.createElement("div",{className:"bg-white rounded-lg"},e.createElement("div",{className:"p-4 border-b text-orange"},"Processing"),e.createElement("div",{className:"p-4"},e.createElement("p",null,"Your transaction may take up to 30 seconds to process."),e.createElement("p",null,"Please do not refresh this page")))),e.createElement("div",{className:"w-full bg-white p-4 "},e.createElement("div",{className:"max-w-7xl mx-auto flex justify-between items-center"},e.createElement("div",{className:"p-2"},e.createElement(v,{href:"/"},e.createElement(j,{className:"w-56"}))),e.createElement("div",null,e.createElement(v,{href:route("login")},e.createElement("button",{className:"p-2 px-4 text-orange rounded-full"},"Login"))))),e.createElement("div",{className:"w-full bg-orange bg-opacity-10 py-10"},e.createElement("h1",{className:"text-3xl font-semibold text-center"},"Start your ",e.createElement("strong",null,"1-month free trial"),"."),e.createElement("p",{className:"text-xl font-semibold text-center mb-2"}," Cancel anytime."),e.createElement("div",{className:"w-full max-w-2xl mx-auto"},e.createElement("div",{className:"flex items-center mb-4"},e.createElement("div",{className:"bg-orange w-8 h-8 rounded-full text-white flex items-center justify-center mr-2"},e.createElement("span",{className:"font-semibold"},"1")),e.createElement("div",null,e.createElement("h2",{className:"font-semibold"},"Confirm your billing cycle"),e.createElement("p",{className:"text-sm"},"Select annual to save 49% and expense with a single receipt"))),e.createElement("div",{className:"bg-white rounded-lg border"},e.createElement("div",{className:"flex flex-wrap items-stretch"},e.createElement("div",{className:"text-center w-full md:w-1/2 p-4 "},e.createElement(E,{checked:d==0,onClick:()=>f(0)},e.createElement("h2",{className:"font-bold text-lg my-2"},"Monthly"),e.createElement("p",null,"1-month free trial then MX$49CAD/month*"))),e.createElement("div",{className:" text-center rounded-lg w-full md:w-1/2 p-4"},e.createElement(E,{checked:d==1,onClick:()=>f(1)},e.createElement("div",{className:"text-center p-4"},e.createElement("h2",{className:"font-bold text-lg my-2"},"Annually"),e.createElement("p",{className:"px-8"},"1-month free trial then MX$499CAD/year*"))))),e.createElement("div",{className:"bg-white rounded-lg "},e.createElement("div",{className:"border-y p-4"},e.createElement("div",{className:"flex border-b p-2 justify-between"},e.createElement("p",null,"Monthly after free trial"),e.createElement("p",null,"CAD$49.00")),e.createElement("div",{className:"flex p-2 justify-between"},e.createElement("p",null,"Today's total"),e.createElement("p",null,"CAD$0.00"))),e.createElement("div",{className:"p-4 text-sm"},e.createElement("p",null,"Your free trial begins on ",g(o)," and will end on ",g(c),". You can cancel anytime before ",g(c)," to avoid being charged and we'll send an email reminder 7 days before the trial ends."))))),e.createElement("div",{className:"w-full max-w-2xl mx-auto mt-4"},e.createElement("div",{className:"flex items-center mb-4"},e.createElement("div",{className:"bg-orange w-8 h-8 rounded-full text-white flex items-center justify-center mr-2"},e.createElement("span",{className:"font-semibold"},"2")),e.createElement("div",null,e.createElement("h2",{className:"font-semibold"},"Select your payment method")),e.createElement("div",{className:"flex-1 text-right"},"Why do we need this for a free trial?")),e.createElement("div",{className:"bg-white rounded-lg p-4 mb-4"},e.createElement("div",{className:"items-center px-4 grid grid-cols-2 gap-4"},e.createElement(E,{checked:i==0,onClick:()=>h(0)},e.createElement("img",{src:"/img/logos/cc.png",className:"w-full mx-auto"})),e.createElement(E,{checked:i==1,onClick:()=>h(1)},e.createElement("img",{src:"/img/logos/pp.jpg",className:"mx-auto w-14"}))),e.createElement("div",null,n&&e.createElement(T,{stripe:H,options:n},e.createElement(M,null))),e.createElement("div",{className:"p-4"},i===0&&e.createElement("form",null,e.createElement(r,{forInput:"firstName",value:"First Name*"}),e.createElement(a,{type:"text",name:"firstName",value:t.firstName,className:"mt-1 block w-full",autoComplete:"first name",handleChange:s}),e.createElement(r,{forInput:"lastName",value:"Last Name*"}),e.createElement(a,{type:"text",name:"lastName",value:t.lastName,className:"mt-1 block w-full",autoComplete:"last name",handleChange:s}),e.createElement(r,{forInput:"cc",value:"Credit or debit card number*"}),e.createElement(a,{type:"text",name:"cc",value:t.cc,className:"mt-1 block w-full",autoComplete:"credit card number",handleChange:s}),e.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2"},e.createElement("div",{className:"w-full"},e.createElement(r,{forInput:"expiration",value:"Expiration date*"}),e.createElement(a,{type:"text",name:"expiration",value:t.expiration,className:"mt-1 block w-full",autoComplete:"ccv",handleChange:s})),e.createElement("div",{className:"w-full"},e.createElement(r,{forInput:"expiration",value:"Expiration date*"}),e.createElement(a,{type:"text",name:"code",value:t.code,className:"mt-1 block w-full",handleChange:s}))),e.createElement("div",{className:"w-full md:w-1/2"},e.createElement(r,{forInput:"postalCode",value:"Postal code *"}),e.createElement(a,{type:"text",name:"postalCode",value:t.postalCode,className:"mt-1 block w-full",handleChange:s})),e.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2"},e.createElement("div",{className:"w-full"},e.createElement(r,{forInput:"gst",value:"GST ID"}),e.createElement(a,{type:"text",name:"gst",value:t.gst,className:"mt-1 block w-full",handleChange:s})),e.createElement("div",{className:"w-full"},e.createElement(r,{forInput:"qst",value:"PST/QST ID"}),e.createElement(a,{type:"text",name:"qst",value:t.qst,className:"mt-1 block w-full",handleChange:s}))),e.createElement("button",{className:"btn-orange my-4"},"Review Order")),i===1&&e.createElement(e.Fragment,null,e.createElement("p",{className:"my-2"},"Click ",e.createElement("b",null,"Continue to PayPal")," to log in and confirm your purchase. You'll be sent back to this page to finish up."),e.createElement("button",{className:"btn-orange"},"Continue to PayPal")))),e.createElement("div",{className:"w-full max-w-2xl mx-auto mt-4"},e.createElement("div",{className:"flex items-center mb-4"},e.createElement("div",{className:"bg-orange w-8 h-8 rounded-full text-white flex items-center justify-center mr-2"},e.createElement("span",{className:"font-semibold"},"3")),e.createElement("div",null,e.createElement("h2",{className:"font-semibold"},"Review your order"))),e.createElement("div",{className:"bg-white rounded-lg p-4 mb-4"},e.createElement("ul",{className:"list-disc pl-4 mb-4"},e.createElement("li",null,"Your free trial begins today and ends on ",g(c)),e.createElement("li",null,"Beginning ",g(o),", your payment method will be charged CAN$49.00 each month (plus tax)"),e.createElement("li",null,"The plan will automaticallv renew each month until cancelled. To avoid charges for the next month cancel, before the renewal date.")),e.createElement("div",{className:"bg-gray-100 p-4 mb-4"},e.createElement("p",{className:"text-sm"},"By placing this order you agree to our terms of service. To ensure continued service, we'll store and update (e.g., upon expiration) your payment method. Learn about how to cancel and oyr refund policy. Prices may change.")),e.createElement("div",{className:"text-center"},e.createElement("button",{className:"btn-orange"},"Start your free trial")),e.createElement("div",{className:"mt-4 flex w-full items-center justify-center"},e.createElement(D,{name:"secure",className:"w-4 h-4 fill-current mr-1"}),e.createElement("p",{className:"text-gray-800 text-sm"},"Secure Checkout")))),e.createElement("div",{className:"bg-white rounded-lg "},e.createElement("div",{className:"border-b p-4"},e.createElement("h2",null,"Frequently asked questions")),e.createElement("div",{className:"p-4 grid grid-cols-1 md:grid-cols-3"},e.createElement("div",{className:"p-2"},e.createElement("h2",{className:"font-semibold text-sm"},"Will I be charged during my free trial?"),e.createElement("p",{className:"text-xs"},"No, you won't be charged during vour free trial. which begins on Cantamber 17 2022 and ends on October 17 2022 You can cance anvtime before October 17 2022 tc avoid beina charged")),e.createElement("div",{className:"p-2"},e.createElement("h2",{className:"font-semibold text-sm"},"How can I cancel during my free trial?"),e.createElement("p",{className:"text-xs"},"Once you're signed up, a link tc cancel will appear on your Settings page. Learn more about how to cancel on our Helo Center")),e.createElement("div",{className:"p-2"},e.createElement("h2",{className:"font-semibold text-sm"},"What happens after the free trial period?"),e.createElement("p",{className:"text-xs"},"If vou do not cancel before your free trial neriod ends on Octobe 17 2022 vou will he automaticall charged for vour subscrintion")))))))};export{G as default};
