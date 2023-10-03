(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4758)}])},4758:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return d},default:function(){return pages}});var s=t(5893),n=t(7294),components_Block=e=>{let{border:r=!0,children:t,className:n,title:a=""}=e;return(0,s.jsxs)("div",{className:"mt-5 ".concat(n),children:[a&&(0,s.jsx)("h2",{className:"text-lg md:text-xl text-gray-700 mb-2 ".concat(r?"border-b border-gray":""),id:a.toLowerCase().replace(/ /g,"-"),children:a}),t]})},components_Implementations=e=>{var r;return(0,s.jsx)(components_Block,{...e,children:(0,s.jsx)("div",{className:"overflow-auto lg:overflow-visible",children:(0,s.jsxs)("table",{className:"lg:table-fixed w-full",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"px-4 py-2 lowercase",children:"Package"}),(0,s.jsx)("th",{className:"px-4 py-2 lowercase",children:"Version"}),(0,s.jsx)("th",{className:"px-4 py-2 lowercase",children:"Specification"}),(0,s.jsx)("th",{className:"px-4 py-2 lowercase",children:"Status"}),(0,s.jsx)("th",{className:"px-4 py-2 lowercase",children:"Maintainer"})]})}),(0,s.jsx)("tbody",{children:null===(r=e.pkgs)||void 0===r?void 0:r.map(e=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:(0,s.jsx)("a",{className:"text-blue-500 hover:underline",rel:"noopener noreferrer",href:e.repo,children:e.name})}),(0,s.jsx)("td",{className:"border px-4 py-2",children:(0,s.jsx)("a",{className:"text-blue-500 hover:underline",rel:"noopener noreferrer",href:e.repo,children:(0,s.jsx)("img",{src:"https://img.shields.io/github/v/release/personnummer/".concat(e.repo.split("/").pop(),"?style=flat-square"),alt:"GitHub release (latest by date)"})})}),(0,s.jsx)("td",{className:"border px-4 py-2",children:(0,s.jsx)("a",{className:"text-blue-500 hover:underline",rel:"noopener noreferrer",href:"https://github.com/personnummer/meta/#package-specification-v".concat(e.spec.replace(/(\d).0/,"$1").replace(".","")),children:(0,s.jsx)("img",{src:"https://img.shields.io/static/v1?label=spec&message=".concat(e.spec,"&color=blue&style=flat-square"),alt:"Specification version"})})}),(0,s.jsx)("td",{className:"border px-4 py-2",children:(0,s.jsx)("a",{className:"text-blue-500 hover:underline",rel:"noopener noreferrer",href:"".concat(e.repo,"/actions"),children:(0,s.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/".concat(e.repo.split("/").slice(-2).join("/"),"/").concat(e.workflow,"?branch=").concat(e.branch,"&style=flat-square"),alt:"GitHub Workflow Status"})})}),(0,s.jsx)("td",{className:"border px-4 py-2",children:(0,s.jsx)("a",{className:"text-blue-500 hover:underline",rel:"noopener noreferrer",href:"https://github.com/".concat(e.maintainer.slice(1)),children:e.maintainer})})]},e.repo))})]})})})},a=class extends Error{constructor(){super("Invalid swedish personal identity number")}},compareAsc=(e,r)=>{let t=e.getTime()-r.getTime();return t<0?-1:t>0?1:t},diffInYears=(e,r)=>{let t=compareAsc(e,r),s=Math.abs(e.getFullYear()-r.getFullYear());e.setFullYear(e.getFullYear()-t*s);let n=compareAsc(e,r)===-t,a=t*(s-+n);return 0===a?0:a},luhn=e=>{let r=0;e+="";for(let t=0,s=e.length;t<s;t++){let s=parseInt(e[t]);(s*=2-t%2)>9&&(s-=9),r+=s}return 10*Math.ceil(r/10)-r},testDate=(e,r,t)=>{r-=1;let s=new Date(e,r,t);return!(s.getFullYear()!==e||s.getMonth()!==r||s.getDate()!==t)},l=class{constructor(e,r){this._century="",this._fullYear="",this._year="",this._month="",this._day="",this._sep="",this._num="",this._check="",this.parse(e,{allowCoordinationNumber:!0,allowInterimNumber:!1,...r})}get century(){return this._century}get fullYear(){return this._fullYear}get year(){return this._year}get month(){return this._month}get day(){return this._day}get sep(){return this._sep}get num(){return this._num}get check(){return this._check}static parse(e,r){return new l(e,r)}static valid(e,r){try{return l.parse(e,r),!0}catch(e){return!1}}parse(e,r){if(e.length<10||e.length>13)throw new a;let t=/^(\d{2}){0,1}(\d{2})(\d{2})(\d{2})([+-]?)((?!000)\d{3}|[TRSUWXJKLMN]\d{2})(\d)$/.exec(e);if(!t)throw new a;let s=t[1],n=t[2],l=t[3],i=t[4],o=t[5],c=t[6],h=t[7];if(void 0!==s&&s.length)this._century=s,new Date().getFullYear()-parseInt(s+n,10)<100?this._sep="-":this._sep="+";else{let e=new Date,r=0;"+"===o?(this._sep="+",r=e.getFullYear()-100):(this._sep="-",r=e.getFullYear()),this._century=(""+(r-(r-parseInt(n))%100)).substr(0,2)}if(this._year=n,this._fullYear=this._century+n,this._month=l,this._day=i,this._num=c,this._check=h,!this.valid()||!(null==r?void 0:r.allowCoordinationNumber)&&this.isCoordinationNumber()||!(null==r?void 0:r.allowInterimNumber)&&this.isInterimNumber())throw new a}valid(){let e=luhn(this.year+this.month+this.day+this.num.replace(/[TRSUWXJKLMN]/,"1"))===+this.check&&!!this.check;return e&&testDate(parseInt(this.century+this.year),+this.month,+this.day)?e:e&&testDate(parseInt(this.century+this.year),+this.month,+this.day-60)}format(e=!1){return e?`${this.century}${this.year}${this.month}${this.day}${this.num}${this.check}`:`${this.year}${this.month}${this.day}${this.sep}${this.num}${this.check}`}getAge(){let e=this.getDate();return diffInYears(new Date(Date.now()),e)}getDate(){let e=+this.day;this.isCoordinationNumber()&&(e-=60);let r=this.century+this.year+"-"+this.month+"-"+(e<10?"0"+e:e);return new Date(r)}isInterimNumber(){return/[TRSUWXJKLMN]/.test(this.num[0])}isCoordinationNumber(){return testDate(parseInt(this.century+this.year),+this.month,+this.day-60)}isFemale(){return!this.isMale()}isMale(){let e=parseInt(this.num.substr(-1));return e%2==1}},luhn2=e=>{let r=0;e+="";for(let t=0,s=e.length;t<s;t++){let s=parseInt(e[t]);(s*=2-t%2)>9&&(s-=9),r+=s}return r%10==0},i=class extends Error{constructor(){super("Invalid Swedish organization number")}},o=class{constructor(e){this.number="",this.parse(e)}parse(e){if(e.length<10||e.length>13)throw new i;try{let r=/^(\d{2}){0,1}(\d{2})(\d{2})(\d{2})([-+]?)?(\d{3})(\d)$/g.exec(e);if(!r)throw new i;let t=e.replace("-","");if(r[1]){if(16!=+r[1])throw new i;t=t.slice(2)}if(20>+r[3]||10>+r[2]||!luhn2(t))throw new i;this.number=t}catch(r){try{this._personnummer=l.parse(e)}catch(e){throw r}}}static parse(e){return new o(e)}static valid(e){try{return this.parse(e),!0}catch(e){return!1}}format(e=!0){let r=this.number;return this.isPersonnummer()&&(r=this._personnummer.format(!0).slice(2,12)),e?r.slice(0,6)+"-"+r.slice(6):r}personnummer(){return this._personnummer||null}isPersonnummer(){return!!this._personnummer}type(){return this.isPersonnummer()?"Enskild firma":({1:"D\xf6dsbon",2:"Stat, landsting, kommun eller f\xf6rsamling",3:"Utl\xe4ndska f\xf6retag som bedriver n\xe4ringsverksamhet eller \xe4ger fastigheter i Sverige",5:"Aktiebolag",6:"Enkelt bolag",7:"Ekonomisk f\xf6rening eller bostadsr\xe4ttsf\xf6rening",8:"Ideella f\xf6rening och stiftelse",9:"Handelsbolag, kommanditbolag och enkelt bolag"})[+this.number[0]]||"Ok\xe4nt"}vatNumber(){return`SE${this.format(!1)}01`}},c=JSON.parse('{"v6":{"v$":"^1.1.5"}}');let getOrganisationsnummerObj=e=>{let r={type:"n/a",long:"n/a",short:"n/a",vat:"n/a",valid:!1};if("string"!=typeof e)return r;try{let t=o.parse(e);r.type=t.type(),r.long=t.format(),r.short=t.format(!1),r.vat=t.vatNumber(),r.valid=!0}catch(e){}return r};var components_Try=e=>{let[r,t]=(0,n.useState)(""),a=getOrganisationsnummerObj(r);return(0,s.jsxs)(components_Block,{...e,children:[(0,s.jsx)("p",{className:"pt-3",children:"input"}),(0,s.jsx)("input",{type:"text",onChange:e=>t(e.target.value),className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"AABBCC-XXXX"}),(0,s.jsx)("p",{className:"pt-3",children:"result"}),(0,s.jsx)("table",{className:"table-fixed w-full",children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:"valid"}),(0,s.jsx)("td",{className:"border px-4 py-2 ".concat(a.valid?"text-green-500":"text-red-500"),children:a.valid?"yes":"no"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:"short format"}),(0,s.jsx)("td",{className:"border px-4 py-2",children:a.short})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:"long format"}),(0,s.jsx)("td",{className:"border px-4 py-2",children:a.long})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:"type"}),(0,s.jsx)("td",{className:"border px-4 py-2",children:a.type})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:"vat number"}),(0,s.jsx)("td",{className:"border px-4 py-2",children:a.vat})]})]})}),(0,s.jsxs)("p",{className:"mt-3 italic",children:["using javascript version"," ",c.v6.v$.replace("^","")]})]})};let h=[{name:"Organisationsnummer",image:"https://avatars.githubusercontent.com/u/96255764?s=200&v=4",link:"https://organisationsnummer.dev/"}].sort((e,r)=>e.name.localeCompare(r.name));var d=!0,pages=e=>{let{pkgs:r=[]}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(components_Block,{title:"Validate Swedish organization numbers",children:[(0,s.jsxs)("p",{className:"pt-3",children:["Organisationsnummer is a"," ",(0,s.jsx)("a",{href:"https://github.com/organisationsnummer",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"small open-source project"})," ","created to validate, format and getting the organization type from swedish organization numbers. Support the project by becoming a backer or sponsor at"," ",(0,s.jsx)("a",{href:"https://opencollective.com/sweidproject",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"OpenCollective"}),"."]}),(0,s.jsxs)("p",{className:"pt-5 text-center",children:[(0,s.jsx)("span",{className:"text-gray-500 pr-1",children:"available in:"}),r.map((e,t)=>(0,s.jsxs)("span",{children:[t+1===r.length&&(0,s.jsx)("span",{className:"text-gray-500 pr-1",children:"and for"}),(0,s.jsxs)("a",{className:"inline-block text-blue-500 cursor-pointer hover:underline",rel:"noopener noreferrer",target:"_blank",href:e.link,children:[e.name,t+1===r.length&&"."]}),(0,s.jsx)("span",{className:"pr-1",children:t>=r.length-2?"":","})]},t))]})]}),(0,s.jsxs)(components_Block,{title:"Features",children:[(0,s.jsxs)("ul",{className:"list-decimal ml-4",children:[(0,s.jsx)("li",{children:"validation"}),(0,s.jsx)("li",{children:"formatting"}),(0,s.jsx)("li",{children:"organization type"}),(0,s.jsx)("li",{children:"vat number"})]}),(0,s.jsxs)("p",{className:"pt-3",children:["All features might not be implemented in all languages. Full specification can be found"," ",(0,s.jsx)("a",{className:"inline-block text-blue-500 cursor-pointer hover:underline",rel:"noopener noreferrer",target:"_blank",href:"https://github.com/organisationsnummer/meta/blob/master/README.md#package-specification-v1",children:"here"}),"."]})]}),(0,s.jsx)(components_Try,{title:"Try"}),(0,s.jsx)(components_Implementations,{title:"Implementations",pkgs:r}),(0,s.jsxs)("p",{className:"pt-3",children:["Some implementations may be a"," ",(0,s.jsx)("span",{className:"rounded bg-gray-300 px-1",children:"work in progress"})," if you find a bug, please open an issue in the specific implementation repository."]}),(0,s.jsxs)("p",{className:"pt-3",children:["If an implementation for your favorite language is missing, feel free to port it over from one of the existing versions. There are still plenty of languages to contribute to:"," ",(0,s.jsx)("a",{target:"_blank",href:"https://www.r-project.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"R"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://programming-nu.github.io/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Nu"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://groovy-lang.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Groovy"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://julialang.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Julia"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://racket-lang.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Racket"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://fsharp.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"F#"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://clojure.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Clojure"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://www.erlang.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Erlang"}),"."]}),(0,s.jsxs)(components_Block,{title:"Who is using Organisationsnummer",children:[(0,s.jsx)("div",{className:"mt-5",children:h.filter(e=>e.link&&e.name&&e.image).map((e,r)=>(0,s.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("img",{src:e.image,alt:e.name,title:e.name,width:e.width?e.width:100,height:e.height?e.height:100,className:"rounded-md border border-gray-200 border-solid"})},r))}),(0,s.jsx)("div",{className:"mt-5",children:(0,s.jsxs)("p",{children:["Add your logo"," ",(0,s.jsx)("a",{href:"https://github.com/personnummer/personnummer.github.io/blob/develop/src/data/users.ts",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"here"}),"."]})})]}),(0,s.jsx)(components_Block,{title:"License",className:"mb-20",children:(0,s.jsxs)("p",{children:["All organisationsnummer packages are released under the"," ",(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://opensource.org/licenses/MIT",className:"text-blue-500 hover:underline",children:"MIT license"}),"."]})})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);