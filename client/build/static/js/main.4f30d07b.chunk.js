(window.webpackJsonpmpp=window.webpackJsonpmpp||[]).push([[0],{141:function(e,t,n){e.exports=n.p+"static/media/logo.2054d5e3.png"},165:function(e,t,n){e.exports=n(220)},170:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),l=(n(170),n(9)),i=n(263),s=n(145),u=a.createContext({list:[],set:function(){}}),m=n(34),d=n(17),b=n(45),p=n(14),f=n(247),h=n(72),v=n(251),y=n(135),g=n.n(y),E=(n(171),n(94)),O=n(15),j=n(31),x=n.n(j),C="https://api.mpp.reconnect.fr",k="".concat(C,"/api"),w="".concat(k,"/centers"),N="".concat(k,"/tags"),P="".concat(C,"/login"),S="".concat(C,"/admin_login"),B="".concat(k,"/notes");function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function A(){var e=Object(p.a)(["\n  position: absolute !important;\n  right: 10px;\n  top: 10px;\n"]);return A=function(){return e},e}var R=Object(O.a)(f.a)(A()),z=Object(d.g)(function(e){var t=e.history,n=(e.match,Object(a.useContext)(u)),o=Object(a.useCallback)(function(){var e=localStorage.getItem("token");null!==e?x.a.get("".concat(B)).set("Authorization","Bearer ".concat(e)).then(function(e){n.set(e.body["hydra:member"])}):t.push("/login")},[t,n]);Object(a.useEffect)(function(){o()},[o]);var c={},l={},i={};return n.list.forEach(function(e,t){c=D({},c,Object(b.a)({},e.date,e.nbProAccounts)),l=D({},l,Object(b.a)({},e.date,e.nbBeneficiariesAccounts)),i=D({},i,Object(b.a)({},e.date,e.nbStoredDocs))}),r.a.createElement(v.a,{maxWidth:"sm"},r.a.createElement(R,{size:"small",color:"primary","aria-label":"add",onClick:function(){return t.push("")}},r.a.createElement(g.a,null)),r.a.createElement(h.a,{variant:"h3",component:"h2",gutterBottom:!0,color:"textPrimary"},"Statistiques"),r.a.createElement(h.a,{variant:"h5",gutterBottom:!0,color:"textPrimary"},"Nombre de comptes b\xe9n\xe9ficiaires cr\xe9es par permanence"),r.a.createElement(E.a,{data:l,colors:["white"]}),r.a.createElement(h.a,{variant:"h5",gutterBottom:!0,color:"textPrimary"},"Nombre de comptes pros cr\xe9es par permanence"),r.a.createElement(E.a,{data:c,colors:["#d35400"]}),r.a.createElement(h.a,{variant:"h5",gutterBottom:!0,color:"textPrimary"},"Nombre de documents stock\xe9s par permanence"),r.a.createElement(E.a,{data:i,colors:["#8e44ad"]}))}),M=n(252),q=n(270),W=n(266),F=n(253),L=n(254),T=n(255),V=n(256),J=n(136),K=n.n(J),Q=n(137),$=n.n(Q);function _(){var e=Object(p.a)(["\n  position: absolute !important;\n  left: 50px;\n  top: 10px;\n"]);return _=function(){return e},e}function G(){var e=Object(p.a)(["\n  position: absolute !important;\n  right: 100px;\n  top: 10px;\n"]);return G=function(){return e},e}function H(){var e=Object(p.a)(["\n  position: absolute !important;\n  right: 10px;\n  top: 10px;\n"]);return H=function(){return e},e}function U(){var e=Object(p.a)(["\n  background-color: #212121;\n  color: white;\n  cursor: pointer;\n  border-radius: 12px;\n  padding: 10px;\n  flex: 1;\n  display: flex;\n"]);return U=function(){return e},e}function X(){var e=Object(p.a)(["\n  display: flex;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  justify-content: space-around;\n"]);return X=function(){return e},e}function Y(){var e=Object(p.a)(["\n  padding-top: 50px;\n  display: flex;\n  flex-direction: column;\n"]);return Y=function(){return e},e}var Z=O.a.div(Y()),ee=O.a.div(X()),te=O.a.div(U()),ne=Object(O.a)(f.a)(H()),ae=Object(O.a)(M.a)(G()),re=Object(O.a)(M.a)(_()),oe=Object(d.g)(function(e){var t=e.history,n=Object(a.useState)([]),o=Object(l.a)(n,2),c=o[0],i=o[1],s=Object(a.useState)([]),u=Object(l.a)(s,2),m=u[0],d=u[1],b=Object(a.useState)([]),p=Object(l.a)(b,2),f=p[0],y=p[1],g=Object(a.useCallback)(function(){var e=localStorage.getItem("token");null!==e?x.a.get(w).set("Authorization","Bearer ".concat(e)).then(function(e){i(e.body["hydra:member"]),y(e.body["hydra:member"])}).catch(function(e){t.push("/login")}):t.push("/login")},[t]),E=Object(a.useCallback)(function(){var e=localStorage.getItem("token");null!==e&&x.a.get(N).set("Authorization","Bearer ".concat(e)).then(function(e){d(e.body["hydra:member"])})},[]);return Object(a.useEffect)(function(){g()},[g]),Object(a.useEffect)(function(){E()},[E]),r.a.createElement(v.a,{maxWidth:"sm"},r.a.createElement(Z,null,r.a.createElement(ae,{onClick:function(){localStorage.removeItem("token"),t.push("/login")}},"D\xe9connexion"),r.a.createElement(re,{onClick:function(){var e=localStorage.getItem("token");window.location.replace("".concat(S,"?token=").concat(e))}},"Admin"),r.a.createElement(ne,{size:"small",color:"primary","aria-label":"add",onClick:function(){return t.push("/charts")}},r.a.createElement(K.a,null)),r.a.createElement(h.a,{variant:"h2",component:"h2",gutterBottom:!0,color:"textPrimary"},"Centres"),r.a.createElement(ee,null,m.map(function(e){return r.a.createElement(q.a,{label:e.name,clickable:!0,color:"secondary",onClick:function(){return t=e.id,void y(c.filter(function(e){return e.tags.includes("/api/tags/".concat(t))}));var t}})})),r.a.createElement(W.a,{id:"outlined-basic",label:"Rechercher",variant:"outlined",onChange:function(e){var t=e.target.value;y(c.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}}),r.a.createElement(F.a,{dense:!1},f.map(function(e){return r.a.createElement(L.a,{key:e.id,onClick:function(){return t.push("/notes/".concat(e.id))}},r.a.createElement(te,null,r.a.createElement(T.a,null,r.a.createElement($.a,{htmlColor:"white"})),r.a.createElement(V.a,{primary:"".concat(e.name)})))}))))}),ce=n(142),le=n.n(ce),ie=n(67),se=n(140),ue=n.n(se),me=n(84),de=n.n(me),be=n(141),pe=n.n(be);function fe(){var e=Object(p.a)(["\n  padding-top: 100px;\n  margin-bottom: 200px;\n  display: flex;\n  flex-direction: column;\n"]);return fe=function(){return e},e}function he(){var e=Object(p.a)(["\n  padding-top: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return he=function(){return e},e}function ve(){var e=Object(p.a)(["\n  width: 140px;\n  height: 140px;\n  align-self: center;\n"]);return ve=function(){return e},e}var ye=O.a.img(ve()),ge=O.a.div(he()),Ee=O.a.form(fe()),Oe=Object(d.g)(function(e){var t=e.history,n=e.location,r=ue.a.parse(n.search);r&&r.token&&"string"===typeof r.token&&(localStorage.setItem("token",r.token.toString()),t.push("/"));return a.createElement(v.a,{maxWidth:"sm"},a.createElement(ge,null,a.createElement(h.a,{variant:"h3",component:"h2",gutterBottom:!0,color:"textPrimary"},"Ma petite permanence"),a.createElement(ye,{src:pe.a,alt:"logo"})),a.createElement(ie.a,{initialValues:{email:"",password:""},onSubmit:function(e){var n,a;n=e.email,a=e.password,de.a.post(P,{email:n,password:a}).then(function(e){localStorage.setItem("token",e.data.token),t.push("/")})},render:function(e){return a.createElement(Ee,{onSubmit:e.handleSubmit},a.createElement(W.a,{id:"email",name:"email",type:"email",label:"Email",margin:"normal",variant:"outlined",onChange:e.handleChange}),e.errors.email&&a.createElement("div",{id:"feedback"},e.errors.email),a.createElement(W.a,{id:"password",name:"password",type:"password",label:"Password",margin:"normal",variant:"outlined",onChange:e.handleChange}),e.errors.password&&a.createElement("div",{id:"feedback"},e.errors.password),a.createElement(M.a,{variant:"outlined",color:"primary",type:"submit"},"Login"),a.createElement(M.a,{color:"primary",variant:"contained",style:{marginTop:50,marginBottom:100,fontSize:20},href:"".concat(C,"/oauth/trigger")},a.createElement(le.a,{style:{marginRight:20}}),"Me connecter avec Reconnect Pro"))}}))}),je=n(269),xe=n(261),Ce=n(257),ke=n(258),we=n(262),Ne=n(267),Pe=n(144),Se=n.n(Pe),Be=n(106),Ie=n(95),De=n(57),Ae=n(89),Re=n(22),ze=n(264);function Me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function qe(){var e=Object(p.a)(["\n  margin-bottom: 100px;\n  display: flex;\n  flex-direction: column;\n"]);return qe=function(){return e},e}var We=O.a.form(qe()),Fe=Object(d.g)(function(e){var t=e.history,n=e.centerId,r=e.closeModal,o=a.useContext(u),c=a.useState(new Date),i=Object(l.a)(c,2),s=i[0],m=i[1];function d(e){m(e)}return a.createElement(v.a,{maxWidth:"sm"},a.createElement(ie.a,{initialValues:{date:new Date,center:"",hours:0,attendees:"",place:"",nbPros:0,nbProAccounts:0,nbBeneficiaries:0,nbBeneficiariesAccounts:0,nbStoredDocs:0,beneficiariesNotes:"",proNotes:"",reconnectNotes:""},onSubmit:function(e){!function(e){var n=localStorage.getItem("token");null!==n?x.a.post(B).send(e).set("Authorization","Bearer ".concat(n)).then(function(e){r(),o.set([e.body].concat(Object(De.a)(o.list)))}):(alert("Il semble que vous ne soyez pas connect\xe9, veuillex vous reconnecter"),t.push("/login"))}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Me(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Me(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{date:s,center:"/api/centers/".concat(n)}))},render:function(e){return a.createElement(We,{onSubmit:e.handleSubmit},a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{flex:1}},a.createElement(Re.a,{utils:Ae.a},a.createElement(ze.a,{disableToolbar:!0,format:"dd/MM/yyyy",margin:"normal",id:"date-picker-inline",label:"Date",onChange:d,variant:"inline",value:s,KeyboardButtonProps:{"aria-label":"change date"}}))),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(W.a,{id:"hours",label:"Nombre d'heures",name:"hours",onChange:e.handleChange,type:"number",variant:"outlined"}))),a.createElement("div",{style:{height:16}}),a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(W.a,{id:"nb-pros",label:"Nb pros rencontr\xe9s",name:"nbPros",onChange:e.handleChange,type:"number",variant:"outlined"})),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(W.a,{id:"nb-pro-accounts",label:"Nb comptes pros cr\xe9es",name:"nbProAccounts",onChange:e.handleChange,type:"number",variant:"outlined"}))),a.createElement("div",{style:{height:16}}),a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(W.a,{id:"nb-beneficiaries",label:"Nb benefs rencontr\xe9s",name:"nbBeneficiaries",onChange:e.handleChange,type:"number",variant:"outlined"})),a.createElement("div",{style:{width:8}}),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(W.a,{id:"nb-beneficiaries-accounts",label:"Nb comptes benef cr\xe9es",name:"nbBeneficiariesAccounts",onChange:e.handleChange,type:"number",variant:"outlined"})),a.createElement("div",{style:{width:8}}),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(W.a,{id:"nb-docs-stored",label:"Nb doc stock\xe9s",name:"nbStoredDocs",onChange:e.handleChange,type:"number",variant:"outlined"}))),a.createElement(W.a,{id:"attendees",name:"attendees",type:"text",label:"Qui a fait la perm",margin:"normal",variant:"outlined",onChange:e.handleChange}),e.errors.attendees&&a.createElement("div",{id:"feedback"},e.errors.attendees),a.createElement(W.a,{id:"place",name:"place",type:"text",label:"Lieu (optionnel)",margin:"normal",variant:"outlined",value:e.values.place,onChange:e.handleChange}),e.errors.place&&a.createElement("div",{id:"feedback"},e.errors.place),a.createElement(W.a,{id:"beneficiaries-notes",name:"beneficiariesNotes",type:"text",label:"Remarques en rapport avec les b\xe9n\xe9ficiaires",margin:"normal",variant:"outlined",multiline:!0,rows:"4",onChange:e.handleChange}),e.errors.beneficiariesNotes&&a.createElement("div",{id:"feedback"},e.errors.beneficiariesNotes),a.createElement(W.a,{id:"pro-notes",name:"proNotes",type:"text",label:"Remarques en rapport avec les professionnels",margin:"normal",variant:"outlined",multiline:!0,rows:"4",onChange:e.handleChange}),e.errors.proNotes&&a.createElement("div",{id:"feedback"},e.errors.proNotes),a.createElement(W.a,{id:"reconnect-notes",name:"reconnectNotes",type:"text",label:"Remarques en rapport avec Reconnect",margin:"normal",variant:"outlined",multiline:!0,rows:"4",onChange:e.handleChange}),e.errors.reconnectNotes&&a.createElement("div",{id:"feedback"},e.errors.reconnectNotes),a.createElement(M.a,{variant:"contained",color:"primary",type:"submit"},"Cr\xe9er"))}}))});function Le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Te(){var e=Object(p.a)(["\n  margin-bottom: 100px;\n  display: flex;\n  flex-direction: column;\n"]);return Te=function(){return e},e}var Ve=O.a.form(Te()),Je=Object(d.g)(function(e){var t=e.history,n=e.centerId,r=e.closeModal,o=e.note,c=a.useContext(u),i=a.useState(new Date),s=Object(l.a)(i,2),m=s[0],d=s[1];function p(e){d(e)}return a.createElement(v.a,{maxWidth:"sm"},a.createElement(ie.a,{enableReinitialize:!0,initialValues:o,onSubmit:function(e){!function(e){var n=localStorage.getItem("token");null!==n?x.a.put("".concat(B,"/").concat(e.id)).send(e).set("Authorization","Bearer ".concat(n)).then(function(e){r(),c.set(c.list.map(function(t){return t.id===e.body.id?e.body:t}))}):(alert("Il semble que vous ne soyez pas connect\xe9, veuillex vous reconnecter"),t.push("/login"))}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Le(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Le(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{date:m,center:"/api/centers/".concat(n)}))}},function(e){return a.createElement(Ve,{onSubmit:e.handleSubmit},a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{flex:1}},a.createElement(Re.a,{utils:Ae.a},a.createElement(ze.a,{disableToolbar:!0,format:"dd/MM/yyyy",margin:"normal",id:"date-picker-inline",label:"Date",onChange:p,variant:"inline",value:m,KeyboardButtonProps:{"aria-label":"change date"}}))),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(W.a,{id:"hours",label:"Nombre d'heures",name:"hours",onChange:e.handleChange,value:e.values.hours,type:"number",variant:"outlined"}))),a.createElement("div",{style:{height:16}}),a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(W.a,{id:"nb-pros",label:"Nb pros rencontr\xe9s",name:"nbPros",onChange:e.handleChange,type:"number",value:e.values.nbPros,variant:"outlined"})),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(W.a,{id:"nb-pro-accounts",label:"Nb comptes pros cr\xe9es",name:"nbProAccounts",onChange:e.handleChange,value:e.values.nbProAccounts,type:"number",variant:"outlined"}))),a.createElement("div",{style:{height:16}}),a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(W.a,{id:"nb-beneficiaries",label:"Nb benefs rencontr\xe9s",name:"nbBeneficiaries",onChange:e.handleChange,type:"number",value:e.values.nbBeneficiaries,variant:"outlined"})),a.createElement("div",{style:{width:8}}),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(W.a,{id:"nb-beneficiaries-accounts",label:"Nb comptes benef cr\xe9es",name:"nbBeneficiariesAccounts",value:e.values.nbBeneficiariesAccounts,onChange:e.handleChange,type:"number",variant:"outlined"})),a.createElement("div",{style:{width:8}}),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(W.a,{id:"nb-docs-stored",label:"Nb doc stock\xe9s",name:"nbStoredDocs",onChange:e.handleChange,value:e.values.nbStoredDocs,type:"number",variant:"outlined"}))),a.createElement(W.a,{id:"attendees",name:"attendees",type:"text",label:"Qui a fait la perm",margin:"normal",variant:"outlined",value:e.values.attendees,onChange:e.handleChange}),e.errors.attendees&&a.createElement("div",{id:"feedback"},e.errors.attendees),a.createElement(W.a,{id:"place",name:"place",type:"text",label:"Lieu (optionnel)",margin:"normal",variant:"outlined",value:e.values.place,onChange:e.handleChange}),e.errors.place&&a.createElement("div",{id:"feedback"},e.errors.place),a.createElement(W.a,{id:"beneficiaries-notes",name:"beneficiariesNotes",type:"text",label:"Remarques en rapport avec les b\xe9n\xe9ficiaires",margin:"normal",variant:"outlined",multiline:!0,rows:"4",value:e.values.beneficiariesNotes,onChange:e.handleChange}),e.errors.beneficiariesNotes&&a.createElement("div",{id:"feedback"},e.errors.beneficiariesNotes),a.createElement(W.a,{id:"pro-notes",name:"proNotes",type:"text",label:"Remarques en rapport avec les professionnels",margin:"normal",variant:"outlined",value:e.values.proNotes,multiline:!0,rows:"4",onChange:e.handleChange}),e.errors.proNotes&&a.createElement("div",{id:"feedback"},e.errors.proNotes),a.createElement(W.a,{id:"reconnect-notes",name:"reconnectNotes",value:e.values.reconnectNotes,type:"text",label:"Remarques en rapport avec Reconnect",margin:"normal",variant:"outlined",multiline:!0,rows:"4",onChange:e.handleChange}),e.errors.reconnectNotes&&a.createElement("div",{id:"feedback"},e.errors.reconnectNotes),a.createElement(M.a,{variant:"contained",color:"primary",type:"submit"},"Mettre \xe0 jour"))}))}),Ke=n(259),Qe=n(260),$e=n(272),_e=n(143),Ge=n.n(_e),He=n(146);function Ue(){var e=Object(p.a)(["\n  margin: 8px;\n"]);return Ue=function(){return e},e}function Xe(){var e=Object(p.a)(["\n  position: absolute !important;\n  right: 10px;\n  top: 10px;\n"]);return Xe=function(){return e},e}function Ye(){var e=Object(p.a)(["\n  margin-bottom: 10px;\n"]);return Ye=function(){return e},e}var Ze=Object(O.a)(Ke.a)(Ye()),et=Object(O.a)(f.a)(Xe()),tt=Object(O.a)(q.a)(Ue()),nt=Object(d.g)(function(e){e.history,e.match;var t=e.note,n=e.editNote;return r.a.createElement(Ze,{key:t.id},r.a.createElement(Qe.a,{style:{position:"relative",backgroundColor:"#212121"}},r.a.createElement(et,{size:"small",color:"primary","aria-label":"add",onClick:function(){return n(t.id)}},r.a.createElement(Ge.a,null)),r.a.createElement(h.a,{color:"textPrimary",gutterBottom:!0},"Date : ",Object(He.a)(new Date(t.date),"dd-MM-yyyy")),r.a.createElement(h.a,{variant:"body2",component:"p"},"Dur\xe9e : ",t.hours," h"),t.attendees?r.a.createElement(h.a,{variant:"body2",component:"p"},"Participants : ",t.attendees):null,t.place?r.a.createElement(h.a,{variant:"body2",component:"p"},"Lieu : ",t.place):null,r.a.createElement(tt,{avatar:r.a.createElement($e.a,null,t.nbPros),label:"Professionnels rencontr\xe9s"}),r.a.createElement(tt,{avatar:r.a.createElement($e.a,null,t.nbProAccounts),label:"Comptes pro cr\xe9es"}),r.a.createElement(tt,{avatar:r.a.createElement($e.a,null,t.nbBeneficiaries),label:"B\xe9n\xe9ficiaires rencontr\xe9s"}),r.a.createElement(tt,{avatar:r.a.createElement($e.a,null,t.nbBeneficiariesAccounts),label:"Comptes b\xe9n\xe9ficiaires cr\xe9es"}),r.a.createElement(tt,{avatar:r.a.createElement($e.a,null,t.nbStoredDocs),label:"Documents stock\xe9s"}),r.a.createElement(h.a,{variant:"subtitle1"},"Remarques concernant les b\xe9n\xe9ficiaires"),r.a.createElement(h.a,{variant:"body2",component:"p"},t.beneficiariesNotes),r.a.createElement(h.a,{variant:"subtitle1"},"Remarques concernant les professionnels"),r.a.createElement(h.a,{variant:"body2",component:"p"},t.proNotes),r.a.createElement(h.a,{variant:"subtitle1"},"Remarques concernant Reconnect"),r.a.createElement(h.a,{variant:"body2",component:"p"},t.reconnectNotes)))}),at={name:"",workshops:[],notes:[],beneficiaryCount:"",createdBeneficiaryCount:"",documentsCount:""};var rt=function(){var e=r.a.useState(at),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(d.e)(),i=Object(d.f)().centerId,s=Object(a.useCallback)(function(e){var t=localStorage.getItem("token");null!==t?de.a.get("".concat(w,"/").concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then(function(e){o(e.data)}):c.push("/login")},[c,i]);return Object(a.useEffect)(function(){s(i)},[s,i]),n};function ot(){var e=Object(p.a)(["\n  position: absolute;\n  right: 0;\n"]);return ot=function(){return e},e}function ct(){var e=Object(p.a)(["\n  position: relative;\n  align-self: stretch;\n  flex: 1;\n"]);return ct=function(){return e},e}function lt(){var e=Object(p.a)(["\n  flex: 1;\n"]);return lt=function(){return e},e}function it(){var e=Object(p.a)(["\n  display: flex;\n  position: relative;\n"]);return it=function(){return e},e}function st(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 32px;\n  margin-bottom: 32px;\n"]);return st=function(){return e},e}function ut(){var e=Object(p.a)(["\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  color: whitesmoke;\n"]);return ut=function(){return e},e}var mt=O.a.div(ut()),dt=O.a.div(st()),bt=O.a.div(it()),pt=Object(O.a)(h.a)(lt()),ft=Object(O.a)(bt)(ct()),ht=Object(O.a)(f.a)(ot()),vt=Object(d.g)(function(e){var t=e.history,n=e.match,o=Object(Be.a)(!1),c=Object(Be.a)(!1),i=Object(Ie.useNumber)(0),s=Object(l.a)(i,2),m=s[0],d=s[1],b=Object(Ie.useNumber)(0),p=Object(l.a)(b,2),f=p[0],y=p[1],g=Object(Ie.useNumber)(1),E=Object(l.a)(g,2),O=E[0],j=E[1],C=n.params.centerId,k=Object(a.useContext)(u),w=rt(),N=Object(a.useCallback)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=localStorage.getItem("token");null!==n?x.a.get("".concat(B,"?center=").concat(C,"&page=").concat(e)).set("Authorization","Bearer ".concat(n)).then(function(e){y.setValue(e.body["hydra:totalItems"]),k.set(e.body["hydra:member"])}):t.push("/login")},[C,t]);Object(a.useEffect)(function(){N()},[N,C]);var P=function(e){d.setValue(e),c.setTrue()};return r.a.createElement(v.a,{maxWidth:"sm"},r.a.createElement(je.a,{fullScreen:!0,open:o.value,onClose:o.setFalse,"aria-labelledby":"form-dialog-title"},r.a.createElement(xe.a,{id:"form-dialog-title"},"Cr\xe9er une note"),r.a.createElement(Ce.a,null,r.a.createElement(Fe,{centerId:C,closeModal:o.setFalse})),r.a.createElement(ke.a,null,r.a.createElement(M.a,{onClick:o.setFalse,color:"primary"},"Annuler"))),r.a.createElement(je.a,{fullScreen:!0,open:c.value,onClose:c.setFalse,"aria-labelledby":"edit-note"},r.a.createElement(xe.a,{id:"edit-note"},"Modifier la note"),r.a.createElement(Ce.a,null,r.a.createElement(Je,{centerId:C,note:k.list.find(function(e){return e.id===m}),closeModal:c.setFalse})),r.a.createElement(ke.a,null,r.a.createElement(M.a,{onClick:c.setFalse,color:"primary"},"Annuler"))),r.a.createElement(mt,null,r.a.createElement(pt,{variant:"h4",gutterBottom:!0,color:"textPrimary"},w.name),r.a.createElement(h.a,null,"Nb permanences: ",w.notes.length),r.a.createElement(h.a,null,"Nb b\xe9nef rencontr\xe9s: ",w.beneficiaryCount),r.a.createElement(h.a,null,"Nb CFN cr\xe9es: ",w.createdBeneficiaryCount),r.a.createElement(h.a,null,"Nb docs stock\xe9s: ",w.documentsCount),r.a.createElement("br",null),r.a.createElement(bt,null,r.a.createElement(we.a,null),r.a.createElement(ft,null,r.a.createElement(we.a,null),r.a.createElement(pt,{variant:"h4",gutterBottom:!0,color:"textPrimary"},"Permanences"),r.a.createElement(ht,{size:"medium",color:"primary","aria-label":"add",onClick:o.setTrue},r.a.createElement(Se.a,null)))),r.a.createElement(dt,null,r.a.createElement(Ne.a,{count:Math.ceil(f/30),variant:"outlined",page:O,onChange:function(e,t){j.setValue(t),N(t)}})),k.list.map(function(e){return r.a.createElement(nt,{note:e,key:e.id,editNote:P})})))}),yt=function(){var e=rt();return r.a.createElement("div",null,r.a.createElement("h1",null,e.name),r.a.createElement("h2",null,"Nombre d'ateliers : ",e.workshops.length))},gt=function(){return a.createElement(m.a,null,a.createElement(d.a,{path:"/",exact:!0,component:oe}),a.createElement(d.a,{path:"/login",exact:!0,component:Oe}),a.createElement(d.a,{path:"/charts",exact:!0,component:z}),a.createElement(d.a,{path:"/notes/:centerId",component:vt}),a.createElement(d.a,{path:"/workshops/:centerId",component:yt}))},Et=Object(s.a)({palette:{type:"dark",background:{default:"#28ad7a",paper:"#28ad7a"},text:{primary:"#eff1f7",secondary:"#eff1f7"},primary:{main:"#eff1f7",contrastText:"#677273"}}}),Ot=function(){var e=a.useState([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return a.createElement(i.a,{theme:Et},a.createElement(u.Provider,{value:{list:n,set:r}},a.createElement(gt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[165,1,2]]]);
//# sourceMappingURL=main.4f30d07b.chunk.js.map