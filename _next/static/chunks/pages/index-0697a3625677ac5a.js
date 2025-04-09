(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2368:(e,r,t)=>{"use strict";t.r(r),t.d(r,{__N_SSG:()=>y,default:()=>N});var s=t(7876),n=t(4232);let a=e=>{let{border:r=!0,children:t,className:n,title:a=""}=e;return(0,s.jsxs)("div",{className:"mt-5 ".concat(n),children:[a&&(0,s.jsx)("h2",{className:"text-lg md:text-xl text-gray-700 mb-2 ".concat(r?"border-b border-gray":""),id:a.toLowerCase().replace(/ /g,"-"),children:a}),t]})},l=e=>{var r;return(0,s.jsx)(a,{...e,children:(0,s.jsx)("div",{className:"overflow-auto lg:overflow-visible",children:(0,s.jsxs)("table",{className:"lg:table-fixed w-full",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"px-4 py-2 lowercase",children:"Package"}),(0,s.jsx)("th",{className:"px-4 py-2 lowercase",children:"Version"}),(0,s.jsx)("th",{className:"px-4 py-2 lowercase",children:"Specification"}),(0,s.jsx)("th",{className:"px-4 py-2 lowercase",children:"Status"}),(0,s.jsx)("th",{className:"px-4 py-2 lowercase",children:"Maintainer"})]})}),(0,s.jsx)("tbody",{children:null===(r=e.pkgs)||void 0===r?void 0:r.map(e=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:(0,s.jsx)("a",{className:"text-blue-500 hover:underline",rel:"noopener noreferrer",href:e.repo,children:e.name})}),(0,s.jsx)("td",{className:"border px-4 py-2",children:(0,s.jsx)("a",{className:"text-blue-500 hover:underline",rel:"noopener noreferrer",href:e.repo,children:(0,s.jsx)("img",{src:"https://img.shields.io/github/v/release/organisationsnummer/".concat(e.repo.split("/").pop(),"?style=flat-square"),alt:"GitHub release (latest by date)"})})}),(0,s.jsx)("td",{className:"border px-4 py-2",children:(0,s.jsx)("a",{className:"text-blue-500 hover:underline",rel:"noopener noreferrer",href:"https://github.com/organisationsnummer/meta/#package-specification-v".concat(e.spec.replace(/(\d).0/,"$1").replace(".","")),children:(0,s.jsx)("img",{src:"https://img.shields.io/static/v1?label=spec&message=".concat(e.spec,"&color=blue&style=flat-square"),alt:"Specification version"})})}),(0,s.jsx)("td",{className:"border px-4 py-2",children:(0,s.jsx)("a",{className:"text-blue-500 hover:underline",rel:"noopener noreferrer",href:"".concat(e.repo,"/actions"),children:(0,s.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/".concat(e.repo.split("/").slice(-2).join("/"),"/").concat(e.workflow,"?branch=").concat(e.branch,"&style=flat-square"),alt:"GitHub Workflow Status"})})}),(0,s.jsx)("td",{className:"border px-4 py-2",children:(0,s.jsx)("a",{className:"text-blue-500 hover:underline",rel:"noopener noreferrer",href:"https://github.com/".concat(e.maintainer.slice(1)),children:e.maintainer})})]},e.repo))})]})})})};var i=class extends Error{constructor(){super("Invalid swedish personal identity number")}},o=(e,r)=>{let t=e.getTime()-r.getTime();return t<0?-1:t>0?1:t},h=(e,r)=>{let t=o(e,r),s=Math.abs(e.getFullYear()-r.getFullYear());e.setFullYear(e.getFullYear()-t*s);let n=o(e,r)===-t,a=t*(s-+n);return 0===a?0:a},c=e=>{let r=0;e+="";for(let t=0,s=e.length;t<s;t++){let s=parseInt(e[t]);(s*=2-t%2)>9&&(s-=9),r+=s}return 10*Math.ceil(r/10)-r},d=(e,r,t)=>{let s=new Date(e,r-=1,t);return s.getFullYear()===e&&s.getMonth()===r&&s.getDate()===t},m=class{constructor(e,r){this._century="",this._fullYear="",this._year="",this._month="",this._day="",this._sep="",this._num="",this._check="",this.parse(e,{allowCoordinationNumber:!0,allowInterimNumber:!1,...r})}get century(){return this._century}get fullYear(){return this._fullYear}get year(){return this._year}get month(){return this._month}get day(){return this._day}get sep(){return this._sep}get num(){return this._num}get check(){return this._check}static parse(e,r){return new m(e,r)}static valid(e,r){try{return m.parse(e,r),!0}catch(e){return!1}}parse(e,r){if(e.length<10||e.length>13)throw new i;let t=/^(\d{2}){0,1}(\d{2})(\d{2})(\d{2})([+-]?)((?!000)\d{3}|[TRSUWXJKLMN]\d{2})(\d)$/.exec(e);if(!t)throw new i;let s=t[1],n=t[2],a=t[3],l=t[4],o=t[5],h=t[6],c=t[7];if(void 0!==s&&s.length)this._century=s,new Date().getFullYear()-parseInt(s+n,10)<100?this._sep="-":this._sep="+";else{let e=new Date,r=0;"+"===o?(this._sep="+",r=e.getFullYear()-100):(this._sep="-",r=e.getFullYear()),this._century=(""+(r-(r-parseInt(n))%100)).substr(0,2)}if(this._year=n,this._fullYear=this._century+n,this._month=a,this._day=l,this._num=h,this._check=c,!this.valid()||!(null==r?void 0:r.allowCoordinationNumber)&&this.isCoordinationNumber()||!(null==r?void 0:r.allowInterimNumber)&&this.isInterimNumber())throw new i}valid(){let e=c(this.year+this.month+this.day+this.num.replace(/[TRSUWXJKLMN]/,"1"))===+this.check&&!!this.check;return e&&d(parseInt(this.century+this.year),+this.month,+this.day)?e:e&&d(parseInt(this.century+this.year),+this.month,+this.day-60)}format(e=!1){return e?`${this.century}${this.year}${this.month}${this.day}${this.num}${this.check}`:`${this.year}${this.month}${this.day}${this.sep}${this.num}${this.check}`}getAge(){let e=this.getDate();return h(new Date(Date.now()),e)}getDate(){let e=+this.day;return this.isCoordinationNumber()&&(e-=60),new Date(this.century+this.year+"-"+this.month+"-"+(e<10?"0"+e:e))}isInterimNumber(){return/[TRSUWXJKLMN]/.test(this.num[0])}isCoordinationNumber(){return d(parseInt(this.century+this.year),+this.month,+this.day-60)}isFemale(){return!this.isMale()}isMale(){return parseInt(this.num.substr(-1))%2==1}},u=e=>{let r=0;e+="";for(let t=0,s=e.length;t<s;t++){let s=parseInt(e[t]);(s*=2-t%2)>9&&(s-=9),r+=s}return r%10==0},p=class extends Error{constructor(){super("Invalid Swedish organization number")}},g=class{constructor(e){this.number="",this.parse(e)}parse(e){if(e.length<10||e.length>13)throw new p;try{let r=/^(\d{2}){0,1}(\d{2})(\d{2})(\d{2})([-+]?)?(\d{3})(\d)$/g.exec(e);if(!r)throw new p;let t=e.replace("-","");if(r[1])if(16!=+r[1])throw new p;else t=t.slice(2);if(20>+r[3]||10>+r[2]||!u(t))throw new p;this.number=t}catch(r){try{this._personnummer=m.parse(e)}catch(e){throw r}}}static parse(e){return new g(e)}static valid(e){try{return this.parse(e),!0}catch(e){return!1}}format(e=!0){let r=this.number,t="-";return this.isPersonnummer()&&(t=(r=this._personnummer.format(!1)).includes("+")?"+":"-",r=r.replace(t,"")),e?r.slice(0,6)+t+r.slice(6):r}personnummer(){return this._personnummer||null}isPersonnummer(){return!!this._personnummer}type(){return this.isPersonnummer()?"Enskild firma":({1:"D\xf6dsbon",2:"Stat, landsting, kommun eller f\xf6rsamling",3:"Utl\xe4ndska f\xf6retag som bedriver n\xe4ringsverksamhet eller \xe4ger fastigheter i Sverige",5:"Aktiebolag",6:"Enkelt bolag",7:"Ekonomisk f\xf6rening eller bostadsr\xe4ttsf\xf6rening",8:"Ideella f\xf6rening och stiftelse",9:"Handelsbolag, kommanditbolag och enkelt bolag"})[+this.number[0]]||"Ok\xe4nt"}vatNumber(){return`SE${this.format(!1)}01`}};let x=JSON.parse('{"rh":{"wh":"1.2.0"}}'),b=e=>{let r={type:"n/a",long:"n/a",short:"n/a",vat:"n/a",valid:!1};if("string"!=typeof e)return r;try{let t=g.parse(e);r.type=t.type(),r.long=t.format(),r.short=t.format(!1),r.vat=t.vatNumber(),r.valid=!0}catch(e){}return r},f=e=>{let[r,t]=(0,n.useState)(""),l=b(r);return(0,s.jsxs)(a,{...e,children:[(0,s.jsx)("p",{className:"pt-3",children:"input"}),(0,s.jsx)("input",{type:"text",onChange:e=>t(e.target.value),className:"appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-hidden focus:shadow-outline",placeholder:"AABBCC-XXXX"}),(0,s.jsx)("p",{className:"pt-3",children:"result"}),(0,s.jsx)("table",{className:"table-fixed w-full",children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:"valid"}),(0,s.jsx)("td",{className:"border px-4 py-2 ".concat(l.valid?"text-green-500":"text-red-500"),children:l.valid?"yes":"no"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:"short format"}),(0,s.jsx)("td",{className:"border px-4 py-2",children:l.short})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:"long format"}),(0,s.jsx)("td",{className:"border px-4 py-2",children:l.long})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:"type"}),(0,s.jsx)("td",{className:"border px-4 py-2",children:l.type})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:"vat number"}),(0,s.jsx)("td",{className:"border px-4 py-2",children:l.vat})]})]})}),(0,s.jsxs)("p",{className:"mt-3 italic",children:["using javascript version"," ",x.rh.wh.replace("^","")]})]})},j=[{name:"Organisationsnummer",image:"https://avatars.githubusercontent.com/u/96255764?s=200&v=4",link:"https://organisationsnummer.dev/"}].sort((e,r)=>e.name.localeCompare(r.name));var y=!0;let N=e=>{let{pkgs:r=[]}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a,{title:"Validate Swedish organization numbers",children:[(0,s.jsxs)("p",{className:"pt-3",children:["Organisationsnummer is a"," ",(0,s.jsx)("a",{href:"https://github.com/organisationsnummer",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"small open-source project"})," ","created to validate, format and getting the organization type from swedish organization numbers. Support the project by becoming a backer or sponsor at"," ",(0,s.jsx)("a",{href:"https://opencollective.com/sweidproject",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"OpenCollective"}),"."]}),(0,s.jsxs)("p",{className:"pt-5 text-center",children:[(0,s.jsx)("span",{className:"text-gray-500 pr-1",children:"available in:"}),r.map((e,t)=>(0,s.jsxs)("span",{children:[t+1===r.length&&(0,s.jsx)("span",{className:"text-gray-500 pr-1",children:"and for"}),(0,s.jsxs)("a",{className:"inline-block text-blue-500 cursor-pointer hover:underline",rel:"noopener noreferrer",target:"_blank",href:e.repo,children:[e.name,t+1===r.length&&"."]}),(0,s.jsx)("span",{className:"pr-1",children:t>=r.length-2?"":","})]},t))]})]}),(0,s.jsxs)(a,{title:"Features",children:[(0,s.jsxs)("ul",{className:"list-decimal ml-4",children:[(0,s.jsx)("li",{children:"validation"}),(0,s.jsx)("li",{children:"formatting"}),(0,s.jsx)("li",{children:"organization type"}),(0,s.jsx)("li",{children:"vat number"})]}),(0,s.jsxs)("p",{className:"pt-3",children:["All features might not be implemented in all languages. Full specification can be found"," ",(0,s.jsx)("a",{className:"inline-block text-blue-500 cursor-pointer hover:underline",rel:"noopener noreferrer",target:"_blank",href:"https://github.com/organisationsnummer/meta/blob/master/README.md#package-specification-v1",children:"here"}),"."]})]}),(0,s.jsx)(f,{title:"Try"}),(0,s.jsx)(l,{title:"Implementations",pkgs:r}),(0,s.jsxs)("p",{className:"pt-3",children:["Some implementations may be a"," ",(0,s.jsx)("span",{className:"rounded-sm bg-gray-300 px-1",children:"work in progress"})," if you find a bug, please open an issue in the specific implementation repository."]}),(0,s.jsxs)("p",{className:"pt-3",children:["If an implementation for your favorite language is missing, feel free to port it over from one of the existing versions. There are still plenty of languages to contribute to:"," ",(0,s.jsx)("a",{target:"_blank",href:"https://www.r-project.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"R"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://programming-nu.github.io/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Nu"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://groovy-lang.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Groovy"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://julialang.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Julia"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://racket-lang.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Racket"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://fsharp.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"F#"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://clojure.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Clojure"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://www.erlang.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Erlang"}),"."]}),(0,s.jsxs)(a,{title:"Who is using Organisationsnummer",children:[(0,s.jsx)("div",{className:"mt-5",children:j.filter(e=>e.link&&e.name&&e.image).map((e,r)=>(0,s.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("img",{src:e.image,alt:e.name,title:e.name,width:e.width?e.width:100,height:e.height?e.height:100,className:"rounded-md border border-gray-200 border-solid"})},r))}),(0,s.jsx)("div",{className:"mt-5",children:(0,s.jsxs)("p",{children:["Add your logo"," ",(0,s.jsx)("a",{href:"https://github.com/organisationsnummer/organisationsnummer.github.io/blob/develop/src/data/users.ts",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"here"}),"."]})})]}),(0,s.jsx)(a,{title:"License",className:"mb-20",children:(0,s.jsxs)("p",{children:["All organisationsnummer packages are released under the"," ",(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://opensource.org/licenses/MIT",className:"text-blue-500 hover:underline",children:"MIT license"}),"."]})})]})}},6760:(e,r,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2368)}])}},e=>{var r=r=>e(e.s=r);e.O(0,[636,593,792],()=>r(6760)),_N_E=e.O()}]);