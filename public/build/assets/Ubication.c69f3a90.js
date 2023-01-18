import{u as s,a as v,R as e}from"./app.91217be9.js";import{L as E}from"./Registration.53671dd5.js";import{T as r}from"./TextInput.ef395053.js";import{I as u}from"./InputLabel.95fc6d59.js";import{I as o}from"./InputError.1fb88d28.js";import{S as d}from"./SelectInput.6efb3ebe.js";/* empty css            */import"./Helmet.f8dabf9f.js";import"./index.1d0124c4.js";import"./Logo.54ebcf4a.js";const b=()=>{const{auth:l}=s().props;console.log(l);const{data:t,setData:c,errors:n,post:m,processing:g}=v({country:"",street:"",city:"",postal_code:""}),i=a=>{c(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)},p=a=>{a.preventDefault(),m(route("store.ubication"))};return e.createElement("form",{onSubmit:p},e.createElement("div",{className:"max-w-lg mx-auto"},e.createElement("h1",{className:"text-2xl font-bold text-left"},"Where are you located?"),e.createElement("p",{className:"text-left mb-4"},"This helps match you with nearby jobs"),e.createElement("div",{className:"text-left mb-4"},e.createElement(d,{label:"Country",value:t.country,onChange:a=>c("country",a.target.value),style:{border:"1px solid #d1d5db"}},e.createElement("option",null,"Select Country"),e.createElement("option",{value:"Afghanistan"},"Afghanistan"),e.createElement("option",{value:"Aland Islands"},"Aland Islands"),e.createElement("option",{value:"Albania"},"Albania"),e.createElement("option",{value:"Algeria"},"Algeria"),e.createElement("option",{value:"American Samoa"},"American Samoa"),e.createElement("option",{value:"Andorra"},"Andorra"),e.createElement("option",{value:"Angola"},"Angola"),e.createElement("option",{value:"Anguilla"},"Anguilla"),e.createElement("option",{value:"Antarctica"},"Antarctica"),e.createElement("option",{value:"Antigua and Barbuda"},"Antigua and Barbuda"),e.createElement("option",{value:"Argentina"},"Argentina"),e.createElement("option",{value:"Armenia"},"Armenia"),e.createElement("option",{value:"Aruba"},"Aruba"),e.createElement("option",{value:"Australia"},"Australia"),e.createElement("option",{value:"Austria"},"Austria"),e.createElement("option",{value:"Azerbaijan"},"Azerbaijan"),e.createElement("option",{value:"Bahamas"},"Bahamas"),e.createElement("option",{value:"Bahrain"},"Bahrain"),e.createElement("option",{value:"Bangladesh"},"Bangladesh"),e.createElement("option",{value:"Barbados"},"Barbados"),e.createElement("option",{value:"Belarus"},"Belarus"),e.createElement("option",{value:"Belgium"},"Belgium"),e.createElement("option",{value:"Belize"},"Belize"),e.createElement("option",{value:"Benin"},"Benin"),e.createElement("option",{value:"Bermuda"},"Bermuda"),e.createElement("option",{value:"Bhutan"},"Bhutan"),e.createElement("option",{value:"Bolivia"},"Bolivia"),e.createElement("option",{value:"Bonaire, Sint Eustatius and Saba"},"Bonaire, Sint Eustatius and Saba"),e.createElement("option",{value:"Bosnia and Herzegovina"},"Bosnia and Herzegovina"),e.createElement("option",{value:"Botswana"},"Botswana"),e.createElement("option",{value:"Bouvet Island"},"Bouvet Island"),e.createElement("option",{value:"Brazil"},"Brazil"),e.createElement("option",{value:"British Indian Ocean Territory"},"British Indian Ocean Territory"),e.createElement("option",{value:"Brunei Darussalam"},"Brunei Darussalam"),e.createElement("option",{value:"Bulgaria"},"Bulgaria"),e.createElement("option",{value:"Burkina Faso"},"Burkina Faso"),e.createElement("option",{value:"Burundi"},"Burundi"),e.createElement("option",{value:"Cambodia"},"Cambodia"),e.createElement("option",{value:"Cameroon"},"Cameroon"),e.createElement("option",{value:"Canada"},"Canada"),e.createElement("option",{value:"Cape Verde"},"Cape Verde"),e.createElement("option",{value:"Cayman Islands"},"Cayman Islands"),e.createElement("option",{value:"Central African Republic"},"Central African Republic"),e.createElement("option",{value:"Chad"},"Chad"),e.createElement("option",{value:"Chile"},"Chile"),e.createElement("option",{value:"China"},"China"),e.createElement("option",{value:"Christmas Island"},"Christmas Island"),e.createElement("option",{value:"Cocos (Keeling) Islands"},"Cocos (Keeling) Islands"),e.createElement("option",{value:"Colombia"},"Colombia"),e.createElement("option",{value:"Comoros"},"Comoros"),e.createElement("option",{value:"Congo"},"Congo"),e.createElement("option",{value:"Congo, Democratic Republic of the Congo"},"Congo, Democratic Republic of the Congo"),e.createElement("option",{value:"Cook Islands"},"Cook Islands"),e.createElement("option",{value:"Costa Rica"},"Costa Rica"),e.createElement("option",{value:"Cote D'Ivoire"},"Cote D'Ivoire"),e.createElement("option",{value:"Croatia"},"Croatia"),e.createElement("option",{value:"Cuba"},"Cuba"),e.createElement("option",{value:"Curacao"},"Curacao"),e.createElement("option",{value:"Cyprus"},"Cyprus"),e.createElement("option",{value:"Czech Republic"},"Czech Republic"),e.createElement("option",{value:"Denmark"},"Denmark"),e.createElement("option",{value:"Djibouti"},"Djibouti"),e.createElement("option",{value:"Dominica"},"Dominica"),e.createElement("option",{value:"Dominican Republic"},"Dominican Republic"),e.createElement("option",{value:"Ecuador"},"Ecuador"),e.createElement("option",{value:"Egypt"},"Egypt"),e.createElement("option",{value:"El Salvador"},"El Salvador"),e.createElement("option",{value:"Equatorial Guinea"},"Equatorial Guinea"),e.createElement("option",{value:"Eritrea"},"Eritrea"),e.createElement("option",{value:"Estonia"},"Estonia"),e.createElement("option",{value:"Ethiopia"},"Ethiopia"),e.createElement("option",{value:"Falkland Islands (Malvinas)"},"Falkland Islands (Malvinas)"),e.createElement("option",{value:"Faroe Islands"},"Faroe Islands"),e.createElement("option",{value:"Fiji"},"Fiji"),e.createElement("option",{value:"Finland"},"Finland"),e.createElement("option",{value:"France"},"France"),e.createElement("option",{value:"French Guiana"},"French Guiana"),e.createElement("option",{value:"French Polynesia"},"French Polynesia"),e.createElement("option",{value:"French Southern Territories"},"French Southern Territories"),e.createElement("option",{value:"Gabon"},"Gabon"),e.createElement("option",{value:"Gambia"},"Gambia"),e.createElement("option",{value:"Georgia"},"Georgia"),e.createElement("option",{value:"Germany"},"Germany"),e.createElement("option",{value:"Ghana"},"Ghana"),e.createElement("option",{value:"Gibraltar"},"Gibraltar"),e.createElement("option",{value:"Greece"},"Greece"),e.createElement("option",{value:"Greenland"},"Greenland"),e.createElement("option",{value:"Grenada"},"Grenada"),e.createElement("option",{value:"Guadeloupe"},"Guadeloupe"),e.createElement("option",{value:"Guam"},"Guam"),e.createElement("option",{value:"Guatemala"},"Guatemala"),e.createElement("option",{value:"Guernsey"},"Guernsey"),e.createElement("option",{value:"Guinea"},"Guinea"),e.createElement("option",{value:"Guinea-Bissau"},"Guinea-Bissau"),e.createElement("option",{value:"Guyana"},"Guyana"),e.createElement("option",{value:"Haiti"},"Haiti"),e.createElement("option",{value:"Heard Island and Mcdonald Islands"},"Heard Island and Mcdonald Islands"),e.createElement("option",{value:"Holy See (Vatican City State)"},"Holy See (Vatican City State)"),e.createElement("option",{value:"Honduras"},"Honduras"),e.createElement("option",{value:"Hong Kong"},"Hong Kong"),e.createElement("option",{value:"Hungary"},"Hungary"),e.createElement("option",{value:"Iceland"},"Iceland"),e.createElement("option",{value:"India"},"India"),e.createElement("option",{value:"Indonesia"},"Indonesia"),e.createElement("option",{value:"Iran, Islamic Republic of"},"Iran, Islamic Republic of"),e.createElement("option",{value:"Iraq"},"Iraq"),e.createElement("option",{value:"Ireland"},"Ireland"),e.createElement("option",{value:"Isle of Man"},"Isle of Man"),e.createElement("option",{value:"Israel"},"Israel"),e.createElement("option",{value:"Italy"},"Italy"),e.createElement("option",{value:"Jamaica"},"Jamaica"),e.createElement("option",{value:"Japan"},"Japan"),e.createElement("option",{value:"Jersey"},"Jersey"),e.createElement("option",{value:"Jordan"},"Jordan"),e.createElement("option",{value:"Kazakhstan"},"Kazakhstan"),e.createElement("option",{value:"Kenya"},"Kenya"),e.createElement("option",{value:"Kiribati"},"Kiribati"),e.createElement("option",{value:"Korea, Democratic People's Republic of"},"Korea, Democratic People's Republic of"),e.createElement("option",{value:"Korea, Republic of"},"Korea, Republic of"),e.createElement("option",{value:"Kosovo"},"Kosovo"),e.createElement("option",{value:"Kuwait"},"Kuwait"),e.createElement("option",{value:"Kyrgyzstan"},"Kyrgyzstan"),e.createElement("option",{value:"Lao People's Democratic Republic"},"Lao People's Democratic Republic"),e.createElement("option",{value:"Latvia"},"Latvia"),e.createElement("option",{value:"Lebanon"},"Lebanon"),e.createElement("option",{value:"Lesotho"},"Lesotho"),e.createElement("option",{value:"Liberia"},"Liberia"),e.createElement("option",{value:"Libyan Arab Jamahiriya"},"Libyan Arab Jamahiriya"),e.createElement("option",{value:"Liechtenstein"},"Liechtenstein"),e.createElement("option",{value:"Lithuania"},"Lithuania"),e.createElement("option",{value:"Luxembourg"},"Luxembourg"),e.createElement("option",{value:"Macao"},"Macao"),e.createElement("option",{value:"Macedonia, the Former Yugoslav Republic of"},"Macedonia, the Former Yugoslav Republic of"),e.createElement("option",{value:"Madagascar"},"Madagascar"),e.createElement("option",{value:"Malawi"},"Malawi"),e.createElement("option",{value:"Malaysia"},"Malaysia"),e.createElement("option",{value:"Maldives"},"Maldives"),e.createElement("option",{value:"Mali"},"Mali"),e.createElement("option",{value:"Malta"},"Malta"),e.createElement("option",{value:"Marshall Islands"},"Marshall Islands"),e.createElement("option",{value:"Martinique"},"Martinique"),e.createElement("option",{value:"Mauritania"},"Mauritania"),e.createElement("option",{value:"Mauritius"},"Mauritius"),e.createElement("option",{value:"Mayotte"},"Mayotte"),e.createElement("option",{value:"Mexico"},"Mexico"),e.createElement("option",{value:"Micronesia, Federated States of"},"Micronesia, Federated States of"),e.createElement("option",{value:"Moldova, Republic of"},"Moldova, Republic of"),e.createElement("option",{value:"Monaco"},"Monaco"),e.createElement("option",{value:"Mongolia"},"Mongolia"),e.createElement("option",{value:"Montenegro"},"Montenegro"),e.createElement("option",{value:"Montserrat"},"Montserrat"),e.createElement("option",{value:"Morocco"},"Morocco"),e.createElement("option",{value:"Mozambique"},"Mozambique"),e.createElement("option",{value:"Myanmar"},"Myanmar"),e.createElement("option",{value:"Namibia"},"Namibia"),e.createElement("option",{value:"Nauru"},"Nauru"),e.createElement("option",{value:"Nepal"},"Nepal"),e.createElement("option",{value:"Netherlands"},"Netherlands"),e.createElement("option",{value:"Netherlands Antilles"},"Netherlands Antilles"),e.createElement("option",{value:"New Caledonia"},"New Caledonia"),e.createElement("option",{value:"New Zealand"},"New Zealand"),e.createElement("option",{value:"Nicaragua"},"Nicaragua"),e.createElement("option",{value:"Niger"},"Niger"),e.createElement("option",{value:"Nigeria"},"Nigeria"),e.createElement("option",{value:"Niue"},"Niue"),e.createElement("option",{value:"Norfolk Island"},"Norfolk Island"),e.createElement("option",{value:"Northern Mariana Islands"},"Northern Mariana Islands"),e.createElement("option",{value:"Norway"},"Norway"),e.createElement("option",{value:"Oman"},"Oman"),e.createElement("option",{value:"Pakistan"},"Pakistan"),e.createElement("option",{value:"Palau"},"Palau"),e.createElement("option",{value:"Palestinian Territory, Occupied"},"Palestinian Territory, Occupied"),e.createElement("option",{value:"Panama"},"Panama"),e.createElement("option",{value:"Papua New Guinea"},"Papua New Guinea"),e.createElement("option",{value:"Paraguay"},"Paraguay"),e.createElement("option",{value:"Peru"},"Peru"),e.createElement("option",{value:"Philippines"},"Philippines"),e.createElement("option",{value:"Pitcairn"},"Pitcairn"),e.createElement("option",{value:"Poland"},"Poland"),e.createElement("option",{value:"Portugal"},"Portugal"),e.createElement("option",{value:"Puerto Rico"},"Puerto Rico"),e.createElement("option",{value:"Qatar"},"Qatar"),e.createElement("option",{value:"Reunion"},"Reunion"),e.createElement("option",{value:"Romania"},"Romania"),e.createElement("option",{value:"Russian Federation"},"Russian Federation"),e.createElement("option",{value:"Rwanda"},"Rwanda"),e.createElement("option",{value:"Saint Barthelemy"},"Saint Barthelemy"),e.createElement("option",{value:"Saint Helena"},"Saint Helena"),e.createElement("option",{value:"Saint Kitts and Nevis"},"Saint Kitts and Nevis"),e.createElement("option",{value:"Saint Lucia"},"Saint Lucia"),e.createElement("option",{value:"Saint Martin"},"Saint Martin"),e.createElement("option",{value:"Saint Pierre and Miquelon"},"Saint Pierre and Miquelon"),e.createElement("option",{value:"Saint Vincent and the Grenadines"},"Saint Vincent and the Grenadines"),e.createElement("option",{value:"Samoa"},"Samoa"),e.createElement("option",{value:"San Marino"},"San Marino"),e.createElement("option",{value:"Sao Tome and Principe"},"Sao Tome and Principe"),e.createElement("option",{value:"Saudi Arabia"},"Saudi Arabia"),e.createElement("option",{value:"Senegal"},"Senegal"),e.createElement("option",{value:"Serbia"},"Serbia"),e.createElement("option",{value:"Serbia and Montenegro"},"Serbia and Montenegro"),e.createElement("option",{value:"Seychelles"},"Seychelles"),e.createElement("option",{value:"Sierra Leone"},"Sierra Leone"),e.createElement("option",{value:"Singapore"},"Singapore"),e.createElement("option",{value:"Sint Maarten"},"Sint Maarten"),e.createElement("option",{value:"Slovakia"},"Slovakia"),e.createElement("option",{value:"Slovenia"},"Slovenia"),e.createElement("option",{value:"Solomon Islands"},"Solomon Islands"),e.createElement("option",{value:"Somalia"},"Somalia"),e.createElement("option",{value:"South Africa"},"South Africa"),e.createElement("option",{value:"South Georgia and the South Sandwich Islands"},"South Georgia and the South Sandwich Islands"),e.createElement("option",{value:"South Sudan"},"South Sudan"),e.createElement("option",{value:"Spain"},"Spain"),e.createElement("option",{value:"Sri Lanka"},"Sri Lanka"),e.createElement("option",{value:"Sudan"},"Sudan"),e.createElement("option",{value:"Suriname"},"Suriname"),e.createElement("option",{value:"Svalbard and Jan Mayen"},"Svalbard and Jan Mayen"),e.createElement("option",{value:"Swaziland"},"Swaziland"),e.createElement("option",{value:"Sweden"},"Sweden"),e.createElement("option",{value:"Switzerland"},"Switzerland"),e.createElement("option",{value:"Syrian Arab Republic"},"Syrian Arab Republic"),e.createElement("option",{value:"Taiwan, Province of China"},"Taiwan, Province of China"),e.createElement("option",{value:"Tajikistan"},"Tajikistan"),e.createElement("option",{value:"Tanzania, United Republic of"},"Tanzania, United Republic of"),e.createElement("option",{value:"Thailand"},"Thailand"),e.createElement("option",{value:"Timor-Leste"},"Timor-Leste"),e.createElement("option",{value:"Togo"},"Togo"),e.createElement("option",{value:"Tokelau"},"Tokelau"),e.createElement("option",{value:"Tonga"},"Tonga"),e.createElement("option",{value:"Trinidad and Tobago"},"Trinidad and Tobago"),e.createElement("option",{value:"Tunisia"},"Tunisia"),e.createElement("option",{value:"Turkey"},"Turkey"),e.createElement("option",{value:"Turkmenistan"},"Turkmenistan"),e.createElement("option",{value:"Turks and Caicos Islands"},"Turks and Caicos Islands"),e.createElement("option",{value:"Tuvalu"},"Tuvalu"),e.createElement("option",{value:"Uganda"},"Uganda"),e.createElement("option",{value:"Ukraine"},"Ukraine"),e.createElement("option",{value:"United Arab Emirates"},"United Arab Emirates"),e.createElement("option",{value:"United Kingdom"},"United Kingdom"),e.createElement("option",{value:"United States"},"United States"),e.createElement("option",{value:"United States Minor Outlying Islands"},"United States Minor Outlying Islands"),e.createElement("option",{value:"Uruguay"},"Uruguay"),e.createElement("option",{value:"Uzbekistan"},"Uzbekistan"),e.createElement("option",{value:"Vanuatu"},"Vanuatu"),e.createElement("option",{value:"Venezuela"},"Venezuela"),e.createElement("option",{value:"Viet Nam"},"Viet Nam"),e.createElement("option",{value:"Virgin Islands, British"},"Virgin Islands, British"),e.createElement("option",{value:"Virgin Islands, U.s."},"Virgin Islands, U.s."),e.createElement("option",{value:"Wallis and Futuna"},"Wallis and Futuna"),e.createElement("option",{value:"Western Sahara"},"Western Sahara"),e.createElement("option",{value:"Yemen"},"Yemen"),e.createElement("option",{value:"Zambia"},"Zambia"),e.createElement("option",{value:"Zimbabwe"},"Zimbabwe")),e.createElement(o,{message:n.country,className:"mt-2"})),e.createElement("div",{className:"text-left mb-2"},e.createElement(u,{forInput:"firstName",value:"Street address"}),e.createElement(r,{type:"text",name:"street",value:t.street,className:"mt-1 block w-full",autoComplete:"street",isFocused:!0,handleChange:i}),e.createElement(o,{message:n.street,className:"mt-2"})),e.createElement("div",{className:"text-left mb-2"},e.createElement(u,{forInput:"lastName",value:"City, State"}),e.createElement(r,{type:"text",name:"city",value:t.city,className:"mt-1 block w-full",autoComplete:"city",isFocused:!0,handleChange:i}),e.createElement(o,{message:n.city,className:"mt-2"})),e.createElement("div",{className:"text-left mb-2"},e.createElement(u,{forInput:"lastName",value:"Postal code"}),e.createElement(r,{type:"text",name:"postal_code",value:t.postal_code,className:"mt-1 block w-full",autoComplete:"postalCode",isFocused:!0,handleChange:i}),e.createElement(o,{message:n.postal_code,className:"mt-2"})),e.createElement("div",{className:"text-left mt-4"},e.createElement("button",{className:"btn-orange"},"Continue"))))};b.layout=l=>e.createElement(E,{title:"Where are you located?",children:l});export{b as default};
