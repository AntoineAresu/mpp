(window.webpackJsonpmpp=window.webpackJsonpmpp||[]).push([[0],{146:function(e,t,n){e.exports=n.p+"static/media/logo.2054d5e3.png"},172:function(e,t,n){e.exports=n(220)},177:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),c=n.n(l),o=(n(177),n(16)),i=n(149),u=n(267),s=a.createContext({notes:[],setNotes:function(){}}),m=Object(a.createContext)({workshops:[],setWorkshops:function(){}}),d=Object(a.createContext)({dropdowns:{},setDropdowns:function(){}}),p=n(23),b=n(17),f=n(65),E=n(12),h=n(247),v=n(78),g=n(251),y=n(85),O=n.n(y),j=(n(178),n(99)),C=n(13),w=n(18),x=n.n(w),k=n(28),P=n(132),N=n.n(P),S="https://api.mpp.reconnect.fr",B="".concat(S,"/oauth/trigger"),q="".concat(S,"/admin"),D="".concat(S,"/api"),A="".concat(D,"/centers"),F="".concat(D,"/dropdowns"),V="".concat(S,"/login"),I="".concat(S,"/logout"),R="".concat(D,"/notes"),T="".concat(D,"/tags"),K="".concat(D,"/workshops"),W=function(e){return"".concat(S).concat(e["@id"])},L=N.a.create();L.defaults.withCredentials=!0;var M=function(){var e=Object(k.a)(x.a.mark(function e(t){var n,a,r=arguments;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:"get",a=r.length>2&&void 0!==r[2]?r[2]:{},e.abrupt("return",L({method:n,url:t,headers:{},data:a}));case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return a.useCallback(Object(k.a)(x.a.mark(function a(){var r,l,c=arguments;return x.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:{},a.prev=1,a.next=4,M(e,n,r);case 4:l=a.sent,null!==t&&t(l.data),l.request.responseURL===V&&"/login"!==window.location.pathname&&window.location.replace("login"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),console.log("Error making http call",e,a.t0.message);case 12:case"end":return a.stop()}},a,null,[[1,9]])})),[e])},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",r=G(e,t,n);return a.useEffect(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(e)},[e])};function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function J(){var e=Object(E.a)(["\n  position: absolute !important;\n  right: 10px;\n  top: 10px;\n"]);return J=function(){return e},e}var Q=Object(C.a)(h.a)(J()),$=Object(b.h)(function(e){var t=e.history,n=Object(a.useContext)(s);z("".concat(R),function(e){n.setNotes(e["hydra:member"])});var l={},c={},o={};return n.notes.forEach(function(e,t){l=U({},l,Object(f.a)({},e.date,e.nbProAccounts)),c=U({},c,Object(f.a)({},e.date,e.nbBeneficiariesAccounts)),o=U({},o,Object(f.a)({},e.date,e.nbStoredDocs))}),r.a.createElement(g.a,{maxWidth:"sm"},r.a.createElement(Q,{size:"small",color:"primary","aria-label":"add",onClick:function(){return t.push("")}},r.a.createElement(O.a,null)),r.a.createElement(v.a,{variant:"h3",component:"h2",gutterBottom:!0,color:"textPrimary"},"Statistiques"),r.a.createElement(v.a,{variant:"h5",gutterBottom:!0,color:"textPrimary"},"Nombre de comptes b\xe9n\xe9ficiaires cr\xe9es par permanence"),r.a.createElement(j.a,{data:c,colors:["white"]}),r.a.createElement(v.a,{variant:"h5",gutterBottom:!0,color:"textPrimary"},"Nombre de comptes pros cr\xe9es par permanence"),r.a.createElement(j.a,{data:l,colors:["#d35400"]}),r.a.createElement(v.a,{variant:"h5",gutterBottom:!0,color:"textPrimary"},"Nombre de documents stock\xe9s par permanence"),r.a.createElement(j.a,{data:o,colors:["#8e44ad"]}))}),X=n(252),Y=n(275),Z=n(274),_=n(256),ee=n(222),te=n(257),ne=n(258),ae=n(140),re=n.n(ae),le=n(141),ce=n.n(le),oe=n(142),ie=n.n(oe),ue=n(143),se=n.n(ue);function me(){var e=Object(E.a)(["\n  position: absolute !important;\n  left: 50px;\n  top: 10px;\n"]);return me=function(){return e},e}function de(){var e=Object(E.a)(["\n  position: absolute !important;\n  right: 100px;\n  top: 10px;\n"]);return de=function(){return e},e}function pe(){var e=Object(E.a)(["\n  position: absolute !important;\n  right: 10px;\n  top: 10px;\n"]);return pe=function(){return e},e}function be(){var e=Object(E.a)(["\n  background-color: #212121;\n  color: white;\n  cursor: pointer;\n  border-radius: 12px;\n  padding: 10px;\n"]);return be=function(){return e},e}function fe(){var e=Object(E.a)(["\n  display: flex;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  justify-content: space-around;\n"]);return fe=function(){return e},e}function Ee(){var e=Object(E.a)(["\n  padding-top: 50px;\n  display: flex;\n  flex-direction: column;\n"]);return Ee=function(){return e},e}var he=C.a.div(Ee()),ve=C.a.div(fe()),ge=C.a.a(be()),ye=Object(C.a)(h.a)(pe()),Oe=Object(C.a)(X.a)(de()),je=Object(C.a)(X.a)(me()),Ce=function(){var e=Object(b.e)(),t=Object(a.useState)([]),n=Object(o.a)(t,2),l=n[0],c=n[1],i=Object(a.useState)([]),u=Object(o.a)(i,2),s=u[0],m=u[1],d=Object(a.useState)([]),p=Object(o.a)(d,2),f=p[0],E=p[1];z(A,function(e){c(e["hydra:member"]),E(e["hydra:member"])}),z(T,function(e){return m(e["hydra:member"])});return r.a.createElement(g.a,{maxWidth:"md"},r.a.createElement(he,null,r.a.createElement(Oe,{onClick:Object(k.a)(x.a.mark(function e(){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(I);case 2:window.location.replace("/");case 3:case"end":return e.stop()}},e)}))},"D\xe9connexion"),r.a.createElement(je,{onClick:function(){window.location.replace(q)}},"Admin"),r.a.createElement(ye,{size:"small",color:"primary","aria-label":"add",onClick:function(){return e.push("/charts")}},r.a.createElement(re.a,null)),r.a.createElement(v.a,{variant:"h2",component:"h2",gutterBottom:!0,color:"textPrimary"},"Centres"),r.a.createElement(ve,null,s?s.map(function(e){return r.a.createElement(Y.a,{key:e.id,label:e.name,clickable:!0,color:"secondary",onClick:function(){return t=e.id,void E(l.filter(function(e){return e.tags.includes("/api/tags/".concat(t))}));var t}})}):null),r.a.createElement(Z.a,{id:"outlined-basic",label:"Rechercher",variant:"outlined",onChange:function(e){var t=e.target.value;E(l.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}}),r.a.createElement(_.a,{dense:!1},f?f.map(function(t){return r.a.createElement(ee.a,{key:t.id},r.a.createElement(te.a,null,r.a.createElement(ce.a,{htmlColor:"white"})),r.a.createElement(ne.a,{secondary:t.name}),t.permanence?r.a.createElement(ge,{style:{textAlign:"center",width:200},onClick:function(){return e.push("/centers/".concat(t.id,"/notes"))}},r.a.createElement(ie.a,{htmlColor:"white"}),r.a.createElement(ne.a,{secondary:"Permanences Coffre-fort num\xe9rique"})):null,t.workshop?r.a.createElement(ge,{style:{marginLeft:8,textAlign:"center",width:200},onClick:function(){return e.push("/centers/".concat(t.id,"/workshops"))}},r.a.createElement(se.a,{htmlColor:"white"}),r.a.createElement(ne.a,{secondary:"Accompagnements num\xe9rique (individuel ou collectif)"})):null)}):null)))},we=n(147),xe=n.n(we),ke=n(73),Pe=n(146),Ne=n.n(Pe);function Se(){var e=Object(E.a)(["\n  padding-top: 100px;\n  margin-bottom: 200px;\n  display: flex;\n  flex-direction: column;\n"]);return Se=function(){return e},e}function Be(){var e=Object(E.a)(["\n  padding-top: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Be=function(){return e},e}function qe(){var e=Object(E.a)(["\n  width: 140px;\n  height: 140px;\n  align-self: center;\n"]);return qe=function(){return e},e}var De=C.a.img(qe()),Ae=C.a.div(Be()),Fe=C.a.form(Se()),Ve=function(){var e=Object(b.e)(),t=Object(a.useContext)(d),n=(t.dropdowns,t.setDropdowns),r=G(F,n),l=function(){var t=Object(k.a)(x.a.mark(function t(n){return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(V,"POST",n);case 2:return t.next=4,r();case 4:e.push("/");case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return a.createElement(g.a,{maxWidth:"sm"},a.createElement(Ae,null,a.createElement(v.a,{variant:"h3",component:"h2",gutterBottom:!0,color:"textPrimary"},"Ma petite permanence"),a.createElement(De,{src:Ne.a,alt:"logo"})),a.createElement(ke.a,{initialValues:{email:"",password:""},onSubmit:l,render:function(e){return a.createElement(Fe,{onSubmit:e.handleSubmit},a.createElement(Z.a,{id:"email",name:"email",type:"email",label:"Email",margin:"normal",variant:"outlined",onChange:e.handleChange}),e.errors.email&&a.createElement("div",{id:"feedback"},e.errors.email),a.createElement(Z.a,{id:"password",name:"password",type:"password",label:"Password",margin:"normal",variant:"outlined",onChange:e.handleChange}),e.errors.password&&a.createElement("div",{id:"feedback"},e.errors.password),a.createElement(X.a,{variant:"outlined",color:"primary",type:"submit"},"Login"),a.createElement(X.a,{color:"primary",variant:"contained",style:{marginTop:50,marginBottom:100,fontSize:20},href:B},a.createElement(xe.a,{style:{marginRight:20}}),"Me connecter avec Reconnect Pro"))}}))},Ie=n(261),Re=n(270),Te=n(94),Ke=n.n(Te),We=n(50),Le=n(259),Me=n(260),Ge=n(279),ze=n(89),He=n.n(ze),Ue=n(150);function Je(e){return e.match(/\d+/)}function Qe(){var e=Object(E.a)(["\n  margin: 8px;\n"]);return Qe=function(){return e},e}function $e(){var e=Object(E.a)(["\n  position: absolute !important;\n  right: 10px;\n  top: 10px;\n"]);return $e=function(){return e},e}function Xe(){var e=Object(E.a)(["\n  margin-bottom: 10px;\n"]);return Xe=function(){return e},e}var Ye=Object(C.a)(Le.a)(Xe()),Ze=Object(C.a)(h.a)($e()),_e=Object(C.a)(Y.a)(Qe()),et=Object(b.h)(function(e){var t=e.note,n=Object(b.e)();return r.a.createElement(Ye,{key:t.id,variant:"outlined"},r.a.createElement(Me.a,{style:{position:"relative",backgroundColor:"#212121"}},r.a.createElement(Ze,{size:"small",color:"primary","aria-label":"add",onClick:function(){return n.push("/note/".concat(Je(t["@id"]),"/edit"))}},r.a.createElement(He.a,null)),r.a.createElement(v.a,{color:"textPrimary",gutterBottom:!0},"Date : ",Object(Ue.a)(new Date(t.date),"dd-MM-yyyy")),r.a.createElement(v.a,{variant:"body2",component:"p"},"Dur\xe9e : ",t.hours," h"),t.attendees?r.a.createElement(v.a,{variant:"body2",component:"p"},"Participants : ",t.attendees):null,t.place?r.a.createElement(v.a,{variant:"body2",component:"p"},"Lieu : ",t.place):null,r.a.createElement(_e,{avatar:r.a.createElement(Ge.a,null,t.nbPros),label:"Professionnels rencontr\xe9s"}),r.a.createElement(_e,{avatar:r.a.createElement(Ge.a,null,t.nbProAccounts),label:"Comptes pro cr\xe9es"}),r.a.createElement(_e,{avatar:r.a.createElement(Ge.a,null,t.nbBeneficiaries),label:"B\xe9n\xe9ficiaires rencontr\xe9s"}),r.a.createElement(_e,{avatar:r.a.createElement(Ge.a,null,t.nbBeneficiariesAccounts),label:"Comptes b\xe9n\xe9ficiaires cr\xe9es"}),r.a.createElement(_e,{avatar:r.a.createElement(Ge.a,null,t.nbStoredDocs),label:"Documents stock\xe9s"}),r.a.createElement(v.a,{variant:"subtitle1"},"Genres :"),r.a.createElement(v.a,{variant:"body2"},"[ Femmes : ",t.femaleCount," ] [ Hommes : ",t.maleCount," ] [ Autres : ",t.noGenderCount," ]"),r.a.createElement("br",null),r.a.createElement(v.a,{variant:"subtitle1"},"Remarques concernant les b\xe9n\xe9ficiaires :"),r.a.createElement(v.a,{variant:"body2",component:"p"},t.beneficiariesNotes),r.a.createElement("br",null),r.a.createElement(v.a,{variant:"subtitle1"},"Remarques concernant les professionnels :"),r.a.createElement(v.a,{variant:"body2",component:"p"},t.proNotes),r.a.createElement("br",null),r.a.createElement(v.a,{variant:"subtitle1"},"Remarques concernant Reconnect :"),r.a.createElement(v.a,{variant:"body2",component:"p"},t.reconnectNotes)))}),tt=function(){var e=Object(b.e)();return r.a.createElement(X.a,{onClick:function(){return e.push("/")}},r.a.createElement(O.a,null),"Accueil")};function nt(){var e=Object(E.a)(["\n  position: absolute;\n  right: 0;\n"]);return nt=function(){return e},e}function at(){var e=Object(E.a)(["\n  flex: 1;\n"]);return at=function(){return e},e}function rt(){var e=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 32px;\n  margin-bottom: 32px;\n"]);return rt=function(){return e},e}function lt(){var e=Object(E.a)(["\n  position: absolute;\n  left: 140px;\n  top: 10px;\n"]);return lt=function(){return e},e}function ct(){var e=Object(E.a)(["\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  color: whitesmoke;\n"]);return ct=function(){return e},e}var ot=C.a.div(ct()),it=C.a.div(lt()),ut=C.a.div(rt()),st=Object(C.a)(v.a)(at()),mt=Object(C.a)(h.a)(nt()),dt=Object(b.h)(function(e){var t=e.history,n=e.match,l=Object(We.useNumber)(0),c=Object(o.a)(l,2),i=c[0],u=c[1],m=Object(We.useNumber)(1),d=Object(o.a)(m,2),p=d[0],b=d[1],f=n.params.centerId,E=Object(a.useContext)(s),h=E.notes,y=E.setNotes,O=r.a.useState({}),j=Object(o.a)(O,2),C=j[0],w=j[1];z("".concat(A,"/").concat(f),w);var x=G("".concat(R,"?center=").concat(f,"&page=").concat(p),function(e){u.setValue(e["hydra:totalItems"]),y(e["hydra:member"])});return r.a.useEffect(function(){x()},[x]),r.a.createElement(g.a,{maxWidth:"sm"},r.a.createElement(it,null,r.a.createElement(tt,null)),r.a.createElement(ot,null,C?r.a.createElement(r.a.Fragment,null,r.a.createElement(st,{variant:"h4",gutterBottom:!0,color:"textPrimary"},C.name),r.a.createElement(v.a,null,"Nb permanences: ",C.notes?C.notes.length:0),r.a.createElement(v.a,null,"Nb b\xe9nef rencontr\xe9s: ",C.beneficiaryCount),r.a.createElement(v.a,null,"Nb CFN cr\xe9es: ",C.createdBeneficiaryCount),r.a.createElement(v.a,null,"Nb docs stock\xe9s: ",C.documentsCount)):null,r.a.createElement("br",null),r.a.createElement(Ie.a,null),r.a.createElement(st,{variant:"h4",gutterBottom:!0,color:"textPrimary"},"Permanences CFN"),null===C?null:r.a.createElement(mt,{size:"medium",color:"primary","aria-label":"add",onClick:function(){return t.push("/centers/".concat(C.id,"/create-note"))}},r.a.createElement(Ke.a,null)),r.a.createElement(ut,null,r.a.createElement(Re.a,{count:Math.ceil(i/30),variant:"outlined",page:p,onChange:function(e,t){return b.setValue(t)}})),h.map(function(e){return r.a.createElement(et,{note:e,key:e.id})})))}),pt=n(113),bt=n(265),ft=n(273),Et=n(266),ht=n(263),vt=n(148),gt=n(24),yt=n(268),Ot=function(e){var t=e.label,n=e.handleChange,a=e.value;return r.a.createElement(gt.a,{utils:vt.a},r.a.createElement(yt.a,{disableToolbar:!0,format:"dd/MM/yyyy",margin:"normal",id:"date-picker-inline",label:t,onChange:n,variant:"inline",value:a,KeyboardButtonProps:{"aria-label":"change date"},style:{margin:8,flex:1}}))},jt=n(255),Ct=n(253),wt=n(277),xt=n(264),kt=n(271);function Pt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Nt(e,t){return e[t]?e[t].name:""}function St(e,t){return e[t]?e[t]:{}}function Bt(e,t){var n=St(e,t);return Object.keys(n).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pt(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pt(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n[e],{"@id":e})})}var qt=function(e){var t=e.id,n=e.label,l=e.value,c=e.setFieldValue,o=e.required,i=void 0!==o&&o,u=Bt(Object(a.useContext)(d).dropdowns,t),s=u||[];return r.a.createElement(jt.a,{style:{marginLeft:8,marginRight:8,flex:1}},r.a.createElement(wt.a,{id:t},n),r.a.createElement(kt.a,{labelId:t,id:t,multiple:!0,value:l||[],required:i,onChange:function(e){c(t,e.target.value)},input:r.a.createElement(Ct.a,{id:t}),renderValue:function(e){return r.a.createElement("div",null,e.map(function(e){var t=s.find(function(t){return t["@id"]===e});return r.a.createElement(Y.a,{key:e,label:t?t.name:""})}))}},s.map(function(e){return r.a.createElement(xt.a,{key:e["@id"],value:e["@id"]},e.name)})))},Dt=function(e){var t=e.id,n=e.label,a=e.handleChange,l=e.value,c=e.required,o=void 0!==c&&c;return r.a.createElement(Z.a,{id:t,label:n,name:t,onChange:a,type:"number",variant:"outlined",style:{marginLeft:8,marginRight:8,flex:1},value:l,required:o})};function At(){var e=Object(E.a)(["\n  display: flex;\n  margin-top: 16px;\n"]);return At=function(){return e},e}var Ft=C.a.div(At()),Vt=function(e){var t=e.children;return r.a.createElement(Ft,null,t)},It=function(e){var t=e.id,n=e.label,l=e.value,c=e.setFieldValue,o=e.required,i=Bt(Object(a.useContext)(d).dropdowns,"".concat(t,"s")),u=i||[];return r.a.createElement(jt.a,{style:{flex:1,margin:8}},r.a.createElement(wt.a,{id:t},n),r.a.createElement(kt.a,{labelId:t,id:t,value:l||[],required:o,onChange:function(e){c(t,e.target.value)}},u.map(function(e){return r.a.createElement(xt.a,{key:e["@id"],value:e["@id"]},e.name)})))},Rt=function(e){var t=e.id,n=e.label,a=e.value,l=e.handleChange,c=e.rows,o=e.multiline,i=void 0!==o&&o,u=e.required,s=void 0!==u&&u;return r.a.createElement(Z.a,{id:t,name:t,type:"text",label:n,variant:"outlined",value:a,onChange:l,rows:c,multiline:i,required:s,style:{marginLeft:8,marginRight:8,flex:1}})},Tt=function(e){return r.a.createElement(X.a,{variant:"contained",color:"primary",type:"submit",disabled:e.disabled,style:{margin:8,flex:1}},e.children)},Kt=function(e){var t=e.workshop,n=e.onSubmit,l=Object(b.e)(),c=Object(We.useBoolean)(!1),i=Object(o.a)(c,2),u=i[0],s=i[1],m=Object(a.useContext)(d).dropdowns,p=St(m,"skills"),f=Bt(m,"skills");return r.a.createElement(ke.a,{initialValues:t,onSubmit:function(){var e=Object(k.a)(x.a.mark(function e(t){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s.setTrue(),e.next=3,n(t);case 3:setTimeout(function(){s.setFalse(),l.goBack()},500);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),render:function(e){var n=e.handleChange,a=e.handleSubmit,l=e.values,c=e.setFieldValue;return r.a.createElement("form",{onSubmit:a},r.a.createElement(Vt,null,r.a.createElement(Ot,{label:"Date",handleChange:function(e){c("date",e.toDateString())},value:l.date}),r.a.createElement(Dt,{id:"nbParticipants",value:l.nbParticipants,label:"Nombre de participants",handleChange:n,required:!0})),r.a.createElement(Vt,null,r.a.createElement(Dt,{id:"femaleCount",value:l.femaleCount,label:"nb Femmes",handleChange:n,required:!0}),r.a.createElement(Dt,{id:"maleCount",value:l.maleCount,label:"nb Hommes",handleChange:n,required:!0}),r.a.createElement(Dt,{id:"noGenderCount",value:l.noGenderCount,label:"nb Autres",handleChange:n,required:!0})),r.a.createElement(Vt,null,r.a.createElement(It,{id:"duration",label:"Dur\xe9e",value:l.duration,setFieldValue:c,required:!0}),r.a.createElement(Rt,{id:"attendees",value:l.attendees,label:"Animateur.trice",required:!0,handleChange:n,style:{marginLeft:8,marginRight:8,flex:1}})),r.a.createElement(Vt,null,r.a.createElement(qt,{id:"topics",label:"Th\xe8mes",value:l.topics,required:!0,setFieldValue:function(e,t){c("topics",t),c("skills",function(e,t){var n=e;return t.reduce(function(e,t){return[].concat(Object(pt.a)(e),Object(pt.a)(f.filter(function(e){return e.topic["@id"]===t})))},[]).forEach(function(e){n.includes(e["@id"])||n.push(e["@id"])}),n}(l.skills,t))}})),r.a.createElement(Vt,null,r.a.createElement("div",null,l.skills.map(function(e){return r.a.createElement(Y.a,{key:e,label:Nt(p,e),variant:"outlined",onDelete:function(){return c("skills",l.skills.filter(function(t){return t!==e}))}})}))),r.a.createElement(Vt,null,r.a.createElement(qt,{id:"participantKinds",label:"Types de participants",value:l.participantKinds,setFieldValue:c})),r.a.createElement(Vt,null,r.a.createElement(qt,{id:"ageBreakpoints",label:"Tranches d'\xe2ge",value:l.ageBreakpoints,setFieldValue:c})),r.a.createElement(Vt,null,r.a.createElement(qt,{id:"usedEquipments",label:"Outils utilis\xe9s",value:l.usedEquipments,setFieldValue:c})),r.a.createElement(Vt,null,r.a.createElement(qt,{id:"equipmentSuppliers",label:"\xc9quipement fourni par",value:l.equipmentSuppliers,setFieldValue:c})),r.a.createElement(Vt,null,r.a.createElement(Rt,{id:"globalReport",value:l.globalReport,label:"Bilan global",required:!0,multiline:!0,rows:"4",handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(Rt,{id:"improvementAxis",value:l.improvementAxis,label:"Axes d'am\xe9lioration",multiline:!0,rows:"4",handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(bt.a,{control:r.a.createElement(ft.a,{style:{marginLeft:8},value:l.usedVault,onChange:function(e,t){c("usedVault",t)},color:"primary"}),label:r.a.createElement("span",{style:{color:"white"}},"Coffre-fort num\xe9rique")})),l.usedVault?r.a.createElement(Et.a,null,r.a.createElement(Vt,null,r.a.createElement(Dt,{id:"nbBeneficiariesAccounts",value:l.nbBeneficiariesAccounts,label:"Nombre de cfn cr\xe9es",handleChange:n}),r.a.createElement(Dt,{id:"nbStoredDocs",value:l.nbStoredDocs,label:"Nombre de documents stock\xe9s",handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(Dt,{id:"nbCreatedEvents",value:l.nbCreatedEvents,label:"\xc9v\xe8nements ajout\xe9s",handleChange:n}),r.a.createElement(Dt,{id:"nbCreatedContacts",value:l.nbCreatedContacts,label:"Contacts ajout\xe9s",handleChange:n}),r.a.createElement(Dt,{id:"nbCreatedNotes",value:l.nbCreatedNotes,label:"Notes ajout\xe9es",handleChange:n}))):null,r.a.createElement(Vt,null,u?r.a.createElement(Tt,{disabled:!0},r.a.createElement(ht.a,{size:20})):r.a.createElement(Tt,null,t["@id"]?"Mettre \xe0 jour":"Cr\xe9er")))}})},Wt=function(){var e=Object(b.g)().workshopId,t=Object(a.useState)(null),n=Object(o.a)(t,2),l=n[0],c=n[1],i=l?W(l):"";z("".concat(K,"/").concat(parseInt(e)),c);var u=G(i,function(){},"PUT");return r.a.createElement(g.a,{maxWidth:"sm"},null===l?r.a.createElement(r.a.Fragment,null):r.a.createElement(Kt,{workshop:l,onSubmit:u}))},Lt=function(e){var t=e.list,n=e.dropdownKind,l=Object(a.useContext)(d).dropdowns,c=n?St(l,n):{};return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(Y.a,{key:e,label:Nt(c,e),variant:"outlined"})}))},Mt=function(e){var t=e.iri,n=e.dropdownKind,l=Object(a.useContext)(d).dropdowns,c=n?St(l,n):{};return r.a.createElement("span",null,Nt(c,t))};function Gt(){var e=Object(E.a)(["\n  position: absolute !important;\n  right: 10px;\n  top: 10px;\n"]);return Gt=function(){return e},e}function zt(){var e=Object(E.a)(["\n  margin-bottom: 10px;\n"]);return zt=function(){return e},e}var Ht=Object(C.a)(Le.a)(zt()),Ut=Object(C.a)(h.a)(Gt()),Jt=function(e){var t=e.workshop,n=Object(b.e)();return r.a.createElement(Ht,{variant:"outlined"},r.a.createElement(Me.a,{style:{position:"relative",backgroundColor:"#212121"}},r.a.createElement(Ut,{size:"small",color:"primary","aria-label":"add",onClick:function(){return n.push("/workshop/".concat(Je(t["@id"]),"/edit"))}},r.a.createElement(He.a,null)),r.a.createElement(v.a,{color:"textPrimary",gutterBottom:!0},"Date : ",Object(Ue.a)(new Date(t.date),"dd-MM-yyyy")),r.a.createElement(v.a,null,"Animateur.trice : ",t.attendees),r.a.createElement(v.a,null,"Dur\xe9e : ",r.a.createElement(Mt,{iri:t.duration,dropdownKind:"durations"})," minutes"),r.a.createElement(v.a,null,"Nombre de participants : ",t.nbParticipants),r.a.createElement(v.a,{variant:"body2"},"Genres : [ Femmes : ",t.femaleCount," ] [ Hommes : ",t.maleCount," ] [ Autres : ",t.noGenderCount," ]"),r.a.createElement("br",null),r.a.createElement("div",null,"Th\xe8mes : ",r.a.createElement(Lt,{list:t.topics,dropdownKind:"topics"})),t.topicPrecision?r.a.createElement(v.a,{variant:"body2",component:"p"},"Pr\xe9cisions sur le th\xe8me : ",t.topicPrecision):null,r.a.createElement("div",null,"Comp\xe9tences : ",r.a.createElement(Lt,{list:t.skills,dropdownKind:"skills"})),r.a.createElement("div",null,"Types de participants : ",r.a.createElement(Lt,{list:t.participantKinds,dropdownKind:"participantKinds"})),r.a.createElement("div",null,"Tranches d'\xe2ge : ",r.a.createElement(Lt,{list:t.ageBreakpoints,dropdownKind:"ageBreakpoints"})),r.a.createElement("div",null,"Outils utilis\xe9s : ",r.a.createElement(Lt,{list:t.usedEquipments,dropdownKind:"usedEquipments"})),r.a.createElement("div",null,"Equipement fourni par : ",r.a.createElement(Lt,{list:t.equipmentSuppliers,dropdownKind:"equipmentSuppliers"})),r.a.createElement("br",null),r.a.createElement(v.a,{variant:"subtitle1"},"Bilan global :"),r.a.createElement(v.a,{variant:"body2",style:{whiteSpace:"pre-line"}},t.globalReport),r.a.createElement("br",null),r.a.createElement(v.a,{variant:"subtitle1"},"Axes d'am\xe9lioration :"),r.a.createElement(v.a,{variant:"body2",style:{whiteSpace:"pre-line"}},t.improvementAxis),t.usedVault?r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(v.a,null,"Coffre-fort num\xe9rique :"),r.a.createElement(v.a,{variant:"body2",component:"p"},"- Nb CFN cr\xe9\xe9s : ",t.nbBeneficiariesAccounts),r.a.createElement(v.a,{variant:"body2",component:"p"},"- Nb documents : ",t.nbStoredDocs),r.a.createElement(v.a,{variant:"body2",component:"p"},"- Nb rappels : ",t.nbCreatedEvents),r.a.createElement(v.a,{variant:"body2",component:"p"},"- Nb contacts : ",t.nbCreatedContacts),r.a.createElement(v.a,{variant:"body2",component:"p"},"- Nb notes : ",t.nbCreatedNotes)):null))};function Qt(){var e=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 32px;\n  margin-bottom: 32px;\n"]);return Qt=function(){return e},e}function $t(){var e=Object(E.a)(["\n  position: absolute;\n  right: 0;\n"]);return $t=function(){return e},e}function Xt(){var e=Object(E.a)(["\n  flex: 1;\n"]);return Xt=function(){return e},e}function Yt(){var e=Object(E.a)(["\n  position: absolute;\n  left: 140px;\n  top: 10px;\n"]);return Yt=function(){return e},e}function Zt(){var e=Object(E.a)(["\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  color: whitesmoke;\n"]);return Zt=function(){return e},e}var _t=C.a.div(Zt()),en=C.a.div(Yt()),tn=Object(C.a)(v.a)(Xt()),nn=Object(C.a)(h.a)($t()),an=C.a.div(Qt()),rn=function(){var e=r.a.useState(null),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(b.e)(),i=Object(b.g)().centerId,u=Object(a.useContext)(m),s=u.workshops,d=u.setWorkshops,p=Object(We.useNumber)(0),f=Object(o.a)(p,2),E=f[0],h=f[1],y=Math.ceil(E/30),O=function(){var e=Object(b.f)().search;return r.a.useMemo(function(){return new URLSearchParams(e)},[e])}().get("page"),j=null===O?1:O;z("".concat(A,"/").concat(i),l),z("".concat(K,"?center=").concat(i,"&page=").concat(j),function(e){d(e["hydra:member"]),h.setValue(e["hydra:totalItems"])});var C=function(){var e=Object(k.a)(x.a.mark(function e(t,n){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:c.push("/centers/".concat(i,"/workshops?page=").concat(null===n?"1":n));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}();return r.a.createElement(g.a,{maxWidth:"sm"},r.a.createElement(en,null,r.a.createElement(tt,null)),null===n?null:r.a.createElement(_t,null,r.a.createElement(tn,{variant:"h4",gutterBottom:!0,color:"textPrimary"},n.name),r.a.createElement(v.a,null,"Nb d'ateliers : ",n.workshops?n.workshops.length:0),r.a.createElement(v.a,null,"Nb CFN cr\xe9es : ",n.createdBeneficiaryCount?n.createdBeneficiaryCount:0),r.a.createElement(v.a,null,"Nb docs stock\xe9s : ",n.documentsCount?n.documentsCount:0)),r.a.createElement(Ie.a,null),r.a.createElement(tn,{variant:"h4",gutterBottom:!0,color:"textPrimary"},"Accompagnements num\xe9rique"),null===n?null:r.a.createElement(nn,{size:"medium",color:"primary","aria-label":"add",onClick:function(){return c.push("/centers/".concat(n.id,"/create-workshop"))}},r.a.createElement(Ke.a,null)),r.a.createElement(an,null,r.a.createElement(Re.a,{count:y,variant:"outlined",page:parseInt(j),onChange:C})),s.map(function(e){return r.a.createElement(Jt,{key:e["@id"],workshop:e})}))},ln=function(){var e=Object(b.g)().centerId,t={center:"".concat(A,"/").concat(e),date:new Date,skills:[],nbBeneficiariesAccounts:0,nbStoredDocs:0,nbCreatedEvents:0,nbCreatedContacts:0,nbCreatedNotes:0},n=G(K,function(){},"POST");return r.a.createElement(g.a,{maxWidth:"sm"},r.a.createElement(Kt,{workshop:t,onSubmit:n}))},cn=function(e){var t=e.note,n=e.onSubmit,a=Object(b.e)(),l=Object(We.useBoolean)(!1),c=Object(o.a)(l,2),i=c[0],u=c[1];return r.a.createElement(ke.a,{initialValues:t,onSubmit:function(){var e=Object(k.a)(x.a.mark(function e(t){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u.setTrue(),e.next=3,n(t);case 3:setTimeout(function(){u.setFalse(),a.goBack()},500);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),render:function(e){var n=e.handleChange,a=e.handleSubmit,l=e.values,c=e.setFieldValue;return r.a.createElement("form",{onSubmit:a},r.a.createElement(Vt,null,r.a.createElement(Ot,{label:"Date",handleChange:function(e){c("date",e.toDateString())},value:l.date}),r.a.createElement(Dt,{id:"hours",value:l.hours,label:"Nombre d'heures",handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(Dt,{id:"nbPros",value:l.nbPros,label:"Nb pros rencontr\xe9s",handleChange:n}),r.a.createElement(Dt,{id:"nbProAccounts",value:l.nbProAccounts,label:"Nb comptes pros cr\xe9\xe9s",handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(Dt,{id:"nbBeneficiaries",value:l.nbBeneficiaries,label:"Nb benef rencontr\xe9s",handleChange:n}),r.a.createElement(Dt,{id:"nbBeneficiariesAccounts",value:l.nbBeneficiariesAccounts,label:"Nb comptes benef cr\xe9\xe9s",handleChange:n}),r.a.createElement(Dt,{id:"nbStoredDocs",value:l.nbStoredDocs,label:"Nb doc stock\xe9s",handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(Dt,{id:"femaleCount",value:l.femaleCount,label:"nb Femmes",handleChange:n,required:!0}),r.a.createElement(Dt,{id:"maleCount",value:l.maleCount,label:"nb Hommes",handleChange:n,required:!0}),r.a.createElement(Dt,{id:"noGenderCount",value:l.noGenderCount,label:"nb Autres",handleChange:n,required:!0})),r.a.createElement(Vt,null,r.a.createElement(Rt,{id:"attendees",type:"text",label:"Qui a fait la perm",value:l.attendees,handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(Rt,{id:"place",label:"Lieu (optionnel)",value:l.place,handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(Rt,{id:"beneficiariesNotes",label:"Remarques en rapport avec les b\xe9n\xe9ficiaires",multiline:!0,rows:"4",value:l.beneficiariesNotes,handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(Rt,{id:"proNotes",label:"Remarques en rapport avec les professionnels",multiline:!0,rows:"4",value:l.proNotes,handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(Rt,{id:"reconnectNotes",label:"Remarques en rapport avec Reconnect",multiline:!0,rows:"4",value:l.reconnectNotes,handleChange:n})),r.a.createElement(Vt,null,i?r.a.createElement(Tt,{disabled:!0},r.a.createElement(ht.a,{size:20})):r.a.createElement(Tt,null,t["@id"]?"Mettre \xe0 jour":"Cr\xe9er")))}})},on=function(){var e=Object(b.g)().centerId,t={center:"".concat(A,"/").concat(e),date:new Date,hours:0,attendees:"",place:"",nbPros:0,nbProAccounts:0,nbBeneficiaries:0,nbBeneficiariesAccounts:0,nbStoredDocs:0,beneficiariesNotes:"",proNotes:"",reconnectNotes:""},n=G(R,function(){},"POST");return r.a.createElement(g.a,{maxWidth:"sm"},r.a.createElement(cn,{note:t,onSubmit:n}))},un=function(){var e=Object(b.g)().noteId,t=Object(a.useState)(null),n=Object(o.a)(t,2),l=n[0],c=n[1],i=l?W(l):"";z("".concat(R,"/").concat(parseInt(e)),c);var u=G(i,function(){},"PUT");return r.a.createElement(g.a,{maxWidth:"sm"},null===l?r.a.createElement(r.a.Fragment,null):r.a.createElement(cn,{note:l,onSubmit:u}))},sn=function(){return a.createElement(p.a,null,a.createElement(b.a,{path:"/",exact:!0,component:Ce}),a.createElement(b.a,{path:"/login",component:Ve}),a.createElement(b.a,{path:"/charts",component:$}),a.createElement(b.a,{path:"/centers/:centerId/notes",component:dt}),a.createElement(b.a,{path:"/centers/:centerId/create-note",component:on}),a.createElement(b.a,{path:"/note/:noteId/edit",component:un}),a.createElement(b.a,{path:"/centers/:centerId/workshops",component:rn}),a.createElement(b.a,{path:"/workshop/:workshopId/edit",component:Wt}),a.createElement(b.a,{path:"/centers/:centerId/create-workshop",component:ln}))},mn=Object(i.a)({palette:{type:"dark",background:{default:"#203468",paper:"#203468"},text:{primary:"#eff1f7",secondary:"#eff1f7"},primary:{main:"#eff1f7",contrastText:"#677273"}}}),dn=function(){var e=a.useState([]),t=Object(o.a)(e,2),n=t[0],r=t[1],l=a.useState([]),c=Object(o.a)(l,2),i=c[0],p=c[1],b=a.useState({}),f=Object(o.a)(b,2),E=f[0],h=f[1];return z(F,h),a.createElement(u.a,{theme:mn},a.createElement(m.Provider,{value:{workshops:i,setWorkshops:p}},a.createElement(s.Provider,{value:{notes:n,setNotes:r}},a.createElement(d.Provider,{value:{dropdowns:E,setDropdowns:h}},a.createElement(sn,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(dn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[172,1,2]]]);
//# sourceMappingURL=main.8480300a.chunk.js.map