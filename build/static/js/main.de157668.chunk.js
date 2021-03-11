(this.webpackJsonpimmutrack=this.webpackJsonpimmutrack||[]).push([[0],{153:function(e,t,n){},154:function(e,t,n){e.exports=n.p+"static/media/introImg.c79ed648.jpg"},176:function(e,t,n){e.exports=n(339)},181:function(e,t,n){},182:function(e,t,n){},335:function(e,t,n){},339:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(33),o=n.n(i),c=(n(181),n(182),n(8)),l=n(168),u=function(e){var t=e.component,n=Object(l.a)(e,["component"]);return r.a.createElement(c.b,Object.assign({},n,{render:function(e){return localStorage.getItem("token")?r.a.createElement(t,e):r.a.createElement(c.a,{to:"/login"})}}))},m=n(3),s=n(4),d=n(154),p=n.n(d),h=n(15);function f(){var e=Object(m.a)(["\n  background: #87a9b0;\n  border: 1px solid #527f89;\n  box-sizing: border-box;\n  font-family: Barlow;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 18px;\n  padding: 16px 73px;\n  margin-top: 56px;\n  margin-bottom: 50px;\n"]);return f=function(){return e},e}function g(){var e=Object(m.a)(["\n  font-family: Barlow;\n  font-size: 25px;\n  line-height: 35px;\n  width: 422px;\n  padding: 20px;\n  text-align: left;\n  @media (max-width: 500px) {\n    width: 70%;\n    font-size: 18px;\n    line-height: 25px;\n  }\n"]);return g=function(){return e},e}function b(){var e=Object(m.a)(["\n  max-width: 734px;\n  width: 734px;\n  max-height: 228px;\n  height: 228px;\n  background-image: url(",");\n  background-size: 734px;\n  background-position-y: -100px;\n  background-repeat: no-repeat;\n  border-radius: 200px;\n  box-shadow: inset 0px 4px 15px rgba(0, 0, 0, 0.25);\n  @media (max-width: 1230px) {\n    max-width: 525px;\n    max-height: 155px;\n    background-size: 100%;\n    background-position-y: -65px;\n  }\n  @media (max-width: 550px) {\n    max-width: 90%;\n    max-height: 150px;\n    background-position-y: -55px;\n  }\n  @media (max-width: 480px) {\n    max-height: 125px;\n    background-position-y: -35px;\n  }\n  @media (max-width: 370px) {\n    max-height: 125px;\n    background-position-y: -15px;\n  }\n"]);return b=function(){return e},e}function E(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  height: 90vh;\n  width: 80%;\n  margin: 0 auto;\n  background: #f2f2f2;\n  @media (max-width: 599px) {\n    width: 100%;\n  }\n"]);return E=function(){return e},e}var x=s.a.div(E()),v=s.a.div(b(),p.a),y=s.a.p(g()),w=s.a.button(f());function O(){return r.a.createElement(x,null,r.a.createElement(v,null),r.a.createElement(y,null,"ImmuTrack gives parents the ability to track their children\u2019s immunization records. Talk to your doctor to receive a code that will connect your account to your preferred office."),r.a.createElement(h.b,{to:"/patient-register"},r.a.createElement(w,null,"SIGN UP")))}var N=n(11),j=n(158),k=n.n(j),I=function(){var e=localStorage.getItem("token");return k.a.create({baseURL:"https://immunization-tracker-bw.herokuapp.com",headers:{Authorization:e}})},S=n(6),F=n(24),R=n(354),C=n(355),z=n(16),T=n(358),P=n(167),A=Object(P.a)({palette:{primary:{main:"#A3C3CA",light:"#E1F2F6",dark:"#87A9B0",contrastText:"##454545"},secondary:{main:"#E39292",light:"#F7B8B8",dark:"#A05757",contrastText:"#454545"}},typography:{fontFamily:["Barlow","sans-serif"].join(",")},breakpoints:{values:{xs:0,sm:600,md:960,lg:1280,xl:1920}}}),D=Object(z.a)({root:{height:"75px",width:"250px",margin:"0 auto",marginTop:A.spacing(4),background:A.palette.primary.main,color:A.palette.primary.contrastText,fontFamily:A.typography.fontFamily,fontSize:"20px",fontWeight:"700","&:hover":{background:A.palette.primary.light}}})(T.a),L=Object(z.a)({root:{height:"75px",width:"250px",margin:"0 auto",marginTop:A.spacing(4),background:A.palette.secondary.main,color:A.palette.primary.contrastText,fontFamily:A.typography.fontFamily,fontSize:"20px",fontWeight:"700","&:hover":{background:A.palette.secondary.light}}})(T.a),_=Object(z.a)({root:{height:"50px",width:"175px",margin:"0 auto",marginTop:A.spacing(4),background:A.palette.primary.dark,color:A.palette.primary.contrastText,fontFamily:A.typography.fontFamily,fontSize:"15px",fontWeight:"500","&:hover":{background:A.palette.primary.light}}})(T.a),B=Object(z.a)({root:{height:"50px",width:"100px",background:A.palette.primary.dark,fontFamily:A.typography.fontFamily,fontSize:"15px",fontWeight:"500","&:hover":{background:A.palette.primary.light}}})(T.a),U=n(30),V=n(353),q=Object(V.a)({root:Object(U.a)({height:"100vh",width:"100%",margin:"0 auto",paddingTop:A.spacing(5),background:"#f2f2f2",fontFamily:A.typography.fontFamily,fontSize:"15px"},A.breakpoints.up("md"),{width:"80%"}),container:Object(U.a)({margin:"0 auto"},A.breakpoints.up("md"),{padding:A.spacing(6),width:"400px",background:"#C5C5C5"}),labels:{width:"300px","&:not(:first-child)":{marginTop:"30px"}},inputs:{height:"35px",width:"300px",margin:"0 auto"},errors:{marginTop:A.spacing(4),color:A.palette.secondary.dark}}),M=Object(S.c)({mapPropsToValues:function(e){return{firstName:e.firstName||"",lastName:e.lastName||"",phoneNumber:e.phoneNumber||"",email:e.email||"",password:e.password||""}},validationSchema:F.object().shape({firstName:F.string().required("Please enter your name"),lastName:F.string().required("Please enter your name"),phoneNumber:F.string().required("Please enter your phone number").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid"),email:F.string().required("Email is required").email("Email is not valid"),password:F.string().required("Password is required")}),handleSubmit:function(e,t){var n=t.props,a=t.resetForm;n.register(n,a,e)}})((function(e){var t=e.errors,n=e.touched,a=(e.values,q());return r.a.createElement(R.a,{className:a.root,elevation:0},r.a.createElement(S.b,{className:a.container},r.a.createElement(C.a,{container:!0,direction:"column",alignItems:"center",justify:"center"},r.a.createElement("div",{className:a.labels},r.a.createElement("label",{htmlFor:"firstName"},"First Name")),r.a.createElement(S.a,{className:a.inputs,type:"text",name:"firstName",autoComplete:"false"}),r.a.createElement("div",{className:a.labels},r.a.createElement("label",{htmlFor:"lastName"},"Last Name")),r.a.createElement(S.a,{className:a.inputs,type:"text",name:"lastName",autoComplete:"false"}),r.a.createElement("div",{className:a.labels},r.a.createElement("label",{htmlFor:"email"},"Email")),r.a.createElement(S.a,{className:a.inputs,type:"text",name:"email",autoComplete:"false"}),r.a.createElement("div",{className:a.labels},r.a.createElement("label",{htmlFor:"password"},"Password")),r.a.createElement(S.a,{className:a.inputs,type:"password",name:"password",autoComplete:"false"}),r.a.createElement("div",{className:a.labels},r.a.createElement("label",{htmlFor:"phone"},"Phone Number")),r.a.createElement(S.a,{className:a.inputs,type:"text",name:"phoneNumber",autoComplete:"false"}),r.a.createElement(_,{variant:"contained",type:"submit"},"sign up")),r.a.createElement(C.a,{className:a.errors,container:!0,direction:"column",alignItems:"center"},n.firstName&&t.firstName&&r.a.createElement("p",null,t.firstName),n.lastName&&t.lastName&&r.a.createElement("p",null,t.lastName),n.email&&t.email&&r.a.createElement("p",null,t.email),n.password&&t.password&&r.a.createElement("p",null,t.password),n.phoneNumber&&t.phoneNumber&&r.a.createElement("p",null,t.phoneNumber))))})),G=Object(N.b)(null,{register:function(e,t,n){return function(a){a({type:"REGISTER_REQUEST"}),I().post("/auth/register/parents",n).then((function(t){a({type:"REGISTER_SUCCESS",payload:t.data.message}),e.history.push("/login")})).catch((function(e){a({type:"REGISTER_FAILURE",payload:"".concat(e.response.status," - ").concat(e.response.statusText)}),t()}))}}})(M),H=n(356),W=Object(N.b)(null,{loginParent:function(e){return{type:"PARENT",payload:e}},loginProvider:function(e){return{type:"PROVIDER",payload:e}}})((function(e){var t=e.history,n=e.loginParent,a=e.loginProvider,i=q();return r.a.createElement(R.a,{className:i.root,elevation:0},r.a.createElement(C.a,{className:i.container,container:!0,direction:"column",alignItems:"center",justify:"center"},r.a.createElement(H.a,{component:"h1",variant:"h4"},"I am a..."),r.a.createElement(D,{variant:"contained",onClick:function(e){e.preventDefault(),n("parents"),t.push("/parent-login")}},"Patient"),r.a.createElement(L,{variant:"contained",onClick:function(e){e.preventDefault(),a("providers"),t.push("/provider-login")}},"Doctor")))})),Q=function(e,t,n){return function(a){e.map((function(e,r){I().get("/child/".concat(e.id,"/immunization")).then((function(e){a({type:"SET_IMMUNIZATION_ACTION",payload:{immuneObj:e.data,index:r}}),t.push("/".concat(n,"-home"))})).catch((function(e){return console.log("ERROR IMMUNIZATION REQ: ",e)}))}))}},Z=function(e,t){return function(n){"parents"===t.user?I().get("/parent/".concat(e,"/children")).then((function(e){n({type:"SET_CHILD_ACTION",payload:e.data}),Q(e.data,t.history,"patient")(n)})).catch((function(e){return console.log("ERROR CHILD REQ: ",e)})):I().get("/provider/".concat(e,"/children")).then((function(e){n({type:"SET_CHILD_ACTION",payload:e.data}),Q(e.data,t.history,"doctor")(n)})).catch((function(e){return console.log("ERROR CHILD REQ: ",e)}))}},J=Object(S.c)({mapPropsToValues:function(e){return{email:e.email||"",password:e.password||""}},validationSchema:F.object().shape({email:F.string().email("Please enter a valid email").required("Email is required"),password:F.string().required("Password is required")}),handleSubmit:function(e,t){t.resetForm;var n=t.props;n.loginAction(n,e)}})((function(e){var t=e.errors,n=e.touched,a=(e.values,e.history,q());return r.a.createElement(R.a,{className:a.root,elevation:0},r.a.createElement(S.b,{className:a.container},r.a.createElement(C.a,{container:!0,direction:"column",alignItems:"center",justify:"center"},r.a.createElement("div",{className:a.labels},r.a.createElement("label",{htmlFor:"email"},"Email")),r.a.createElement(S.a,{className:a.inputs,component:"input",type:"text",name:"email",autoComplete:"false"}),r.a.createElement("div",{className:a.labels},r.a.createElement("label",{htmlFor:"password"},"Password")),r.a.createElement(S.a,{className:a.inputs,component:"input",type:"password",name:"password",autoComplete:"false"}),r.a.createElement(_,{variant:"contained",type:"submit"},"sign in")),r.a.createElement(C.a,{className:a.errors,container:!0,direction:"column",alignItems:"center"},n.email&&t.email&&r.a.createElement("p",null,t.email),n.password&&t.password&&r.a.createElement("p",null,t.password))))})),Y=Object(N.b)((function(e){return{user:e.loginReducer.user}}),{loginAction:function(e,t){return function(n){var a;I().post("/auth/login/".concat(e.user),t).then((function(t){localStorage.setItem("token",t.data.token),localStorage.setItem("userId",t.data.user.id),a=t.data.user.id,n({type:"SET_USER_ACTION",payload:a}),Z(a,e)(n)})).catch((function(e){return console.log("ERROR LOGIN: ",e)}))}}})(J),$=n(28);function K(){var e=Object(m.a)(["\n    border-radius: 100%;\n    width: 24px;\n    height: 24px;\n    background: #A1A1A1;\n"]);return K=function(){return e},e}function X(){var e=Object(m.a)(["\nborder-radius: 100%;\nwidth: 20px;\nheight: 20px;\nborder: 2px solid #FFFFFF;\npadding-top: 7px;\nbackground: linear-gradient(0deg, #F3F3F3, #F3F3F3), #F3F3F3;\n"]);return X=function(){return e},e}function ee(){var e=Object(m.a)(["\nborder-radius: 100%;\nwidth: 20px;\nheight: 20px;\npadding-top: 7px;\nbackground: #DBD424;\nborder: 2px solid #FFFFFF;\n"]);return ee=function(){return e},e}function te(){var e=Object(m.a)(["\nborder-radius: 100%;\nwidth: 20px;\nheight: 20px;\nborder: 2px solid #FFFFFF;\npadding-top: 7px;\nbackground: #229449;\n"]);return te=function(){return e},e}var ne=s.a.button(te()),ae=s.a.button(ee()),re=s.a.button(X()),ie=s.a.div(K());function oe(e){var t=e.patient.immunizations,n=t.map((function(e){return new Date(e.nextImmunizationDate)})),a=new Date,i=n.filter((function(e){return a>=e})).sort((function(e,t){return e-t})),o=((t||{})[n.indexOf(i[0])]||{}).grantPermission;return r.a.createElement(ie,null,0===i.length?r.a.createElement(re,null):null,0!==i.length&&!1===o?r.a.createElement(ae,null):null,0!==i.length&&!0===o?r.a.createElement(ne,null):null)}function ce(){var e=Object(m.a)(["\n  border-radius: 100%;\n  width: 24px;\n  height: 24px;\n  background: #a1a1a1;\n  margin-left: 10px;\n"]);return ce=function(){return e},e}function le(){var e=Object(m.a)(["\n  background: #c67474;\n  border: 1px solid #924646;\n  border-radius: 20px;\n  width: 80px;\n  height: 25px;\n  justify-content: center;\n  margin-right: 10px;\n"]);return le=function(){return e},e}function ue(){var e=Object(m.a)(["\n  width: 350px;\n  height: 50px;\n  left: 32px;\n  top: 191px;\n  background: #e1f2f6;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  align-items: center;\n"]);return ue=function(){return e},e}function me(){var e=Object(m.a)(["\n  margin-top: 40px;\n"]);return me=function(){return e},e}function se(){var e=Object(m.a)(["\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 10px;\n  background: #c5c5c5;\n  border-top: 1px solid #000;\n  font-size: 20px;\n  text-align: center;\n"]);return se=function(){return e},e}function de(){var e=Object(m.a)(["\n  text-align: center;\n  /* padding: 50px 0; */\n  background-color: white;\n  height: 100vh;\n  width: 80vw;\n  margin-right: auto;\n  margin-left: auto;\n  background: #f2f2f2;\n  @media (max-width: 599px) {\n    width: 100%;\n  }\n"]);return de=function(){return e},e}var pe=s.a.div(de()),he=s.a.div(se()),fe=s.a.div(me()),ge=s.a.div(ue()),be=s.a.button(le()),Ee=s.a.div(ce());var xe=Object(N.b)((function(e){return{patients:e.patientReducer.childList,display:e.patientReducer.display}}),{})((function(e){var t=e.patients,n=e.display,i=Object(a.useState)(""),o=Object($.a)(i,2),c=o[0],l=o[1],u=Object(a.useState)([]),m=Object($.a)(u,2),s=m[0],d=m[1];return Object(a.useEffect)((function(){var e=t.filter((function(e){return e.firstName.includes(c)||e.lastName.includes(c)}));d(e)}),[c]),r.a.createElement(pe,null,r.a.createElement(he,null,r.a.createElement("h2",null,"Patient Status")),r.a.createElement("form",{className:"form"},r.a.createElement("input",{id:"name",type:"text",name:"textfield",placeholder:"\uf002",value:c,onChange:function(e){l(e.target.value)},className:"input"})),r.a.createElement(fe,null,n&&s.map((function(e){return r.a.createElement(ge,{key:e.id},r.a.createElement(Ee,null,e.immunizations?r.a.createElement(oe,{patient:e}):null),r.a.createElement("p",null,e.firstName," ",e.lastName),r.a.createElement(h.b,{to:"/patient/".concat(e.id)},r.a.createElement(be,null,"Record")))}))))}));function ve(){var e=Object(m.a)(["\n    background: #87a9b0;\n    border: 1px solid #527f89;\n    width: 200px;\n    height: 50px;\n    margin: 25px auto 0 auto;\n  "]);return ve=function(){return e},e}function ye(){var e=Object(m.a)(["\n    width: 750px;\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n\n    @media (max-width: 500px) {\n      width: 350px;\n    }\n  "]);return ye=function(){return e},e}function we(){var e=Object(m.a)(["\n    width: 750px;\n    height: 50px;\n    left: 32px;\n    top: 191px;\n    background: #e1f2f6;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    margin-left: auto;\n    margin-right: auto;\n    align-items: center;\n\n    @media (max-width: 500px) {\n      width: 350px;\n    }\n  "]);return we=function(){return e},e}function Oe(){var e=Object(m.a)(["\n    margin-top: 40px;\n  "]);return Oe=function(){return e},e}function Ne(){var e=Object(m.a)(["\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin-top: 20px;\n  "]);return Ne=function(){return e},e}function je(){var e=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    height: 90vh;\n    width: 80%;\n    margin: 0 auto;\n    background: #f2f2f2;\n    border-top: 1px solid #000;\n    @media (max-width: 599px) {\n      width: 100%;\n    }\n  "]);return je=function(){return e},e}var ke=Object(N.b)((function(e){return{childList:e.patientReducer.childList}}),{})((function(e){var t=Object(a.useState)({}),n=Object($.a)(t,2),i=n[0],o=n[1],c=s.a.div(je()),l=s.a.header(Ne()),u=s.a.div(Oe()),m=s.a.div(we()),d=s.a.span(ye()),p=s.a.button(ve());return Object(a.useEffect)((function(){var t=e.match.params.id,n=e.childList.filter((function(e){if("".concat(e.id)===t)return e}));console.log("GOT REF: ",n[0]),o(n[0])}),[]),r.a.createElement(c,null,r.a.createElement(l,null,r.a.createElement("div",null,i.immunizations?r.a.createElement("h2",null,i.lastName,", ",i.firstName):null),r.a.createElement("div",null,i.immunizations?r.a.createElement(oe,{patient:i}):null)),r.a.createElement(u,null,i.immunizations&&i.immunizations.map((function(e){return!0===e.immunizationCompleted?null:r.a.createElement(m,{key:e.id},r.a.createElement(d,null,r.a.createElement("div",null,e.vaccine)," due"," ",e.nextImmunizationDate.slice(0,10)))})),i.immunizations&&i.immunizations.map((function(e){return!0===e.immunizationCompleted?r.a.createElement(m,{key:e.id},r.a.createElement(d,null,r.a.createElement("div",null,e.vaccine)," ",r.a.createElement("div",null," completed on ",e.date.slice(0,10)))):null})))," ",r.a.createElement(h.b,{to:"/UpdateImmune/".concat(e.match.params.id)},r.a.createElement(p,null,"Add Record")))})),Ie=(n(335),n(52)),Se=n(102),Fe=n(76);function Re(){var e=Object(m.a)(["\n          display: flex;\n          width: 38%;\n          margin: 0 auto;\n          @media(max-width: 599px){    \n            width: 100%;\n          }\n    "]);return Re=function(){return e},e}function Ce(){var e=Object(m.a)(["\n        min-width: 24%;\n        margin-left: 10%;\n        @media(max-width: 599px){    \n            margin-left: 4%;\n        }\n    "]);return Ce=function(){return e},e}function ze(){var e=Object(m.a)(["\n        margin: 10px 10%;\n        display: flex;\n        justify-content: space-between;\n        background: #C5C5C5;\n        font-size: 20px;\n        font-weight: bold;\n        p{\n            margin-left: 10px;\n            margin-top: 10px\n        }\n    "]);return ze=function(){return e},e}function Te(){var e=Object(m.a)(["\n        margin: 0 auto;\n        width: 50%;\n        @media (max-width: 599px){\n            width: 100%;\n            margin: 0;\n        }\n    "]);return Te=function(){return e},e}function Pe(){var e=Object(m.a)(["\n        background: rgba(0, 0, 0, 0);\n        border: 1px solid #A1A1A1;\n        width: 26px;\n        height: 26px;\n        border-radius: 50%;\n    "]);return Pe=function(){return e},e}function Ae(){var e=Object(m.a)(["\n        display: flex;\n    "]);return Ae=function(){return e},e}function De(){var e=Object(m.a)(["\n        display: flex;\n        justify-content: space-around;\n    "]);return De=function(){return e},e}function Le(){var e=Object(m.a)(["\n          margin-top: 10px;\n          margin-right: 36px;\n          margin-bottom: 0;\n    "]);return Le=function(){return e},e}function _e(){var e=Object(m.a)(["\n        background: #f2f2f2;\n        width: 80%;\n        margin: 0 auto;\n        min-height: 100vh;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        align-content: center;\n        margin-bottom: 62px;\n        @media(max-width: 599px){\n              margin: 0;\n              width: 100%;\n          }\n    "]);return _e=function(){return e},e}Ie.b.add(Fe.b),Ie.b.add(Fe.a);var Be=Object(N.b)((function(e){return{patientList:e.patientReducer.childList,displayPatient:e.patientReducer.display,parentId:e.patientReducer.parentId}}),{})((function(e){var t=Object(a.useState)(-1),n=Object($.a)(t,2),i=n[0],o=n[1],c=s.a.div(_e()),l=s.a.div(Le()),u=s.a.div(De()),m=s.a.div(Ae()),d=s.a.div(Pe()),p=s.a.div(Te()),h=s.a.p(ze()),f=s.a.p(Ce()),g=s.a.div(Re()),b={background:"#229449",borderRadius:"50%",width:"20px",height:"20px",margin:"auto",marginTop:"3%"},E={background:"#DBD424",borderRadius:"50%",width:"20px",height:"20px",margin:"auto",marginTop:"3%"};return r.a.createElement(c,null,r.a.createElement(g,null,r.a.createElement(D,{onClick:function(){e.history.push("/add-child")}},"Add Child"),r.a.createElement(D,{onClick:function(){e.history.push("/permissions")}},"Permissions")),e.displayPatient&&e.patientList.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{onClick:function(){return function(e){o(e)}(t)}},r.a.createElement("p",null,e.firstName," ",e.lastName),r.a.createElement(l,null,i===t?r.a.createElement(Se.a,{icon:"angle-down"}):r.a.createElement(Se.a,{icon:"angle-right"}))),r.a.createElement(p,{key:e.id},r.a.createElement("div",{key:e.id,className:i===t?"Show-Vaccines":"Hide-Vaccines"},r.a.createElement("div",null,r.a.createElement(u,null,r.a.createElement("h2",null,"Status"),r.a.createElement("h2",null,"Vaccine"),r.a.createElement("h2",null,"Date"),r.a.createElement("h2",null,"Location"))),r.a.createElement("div",{style:{width:"100%"}},e.immunizations&&e.immunizations.map((function(e){var t=new Date(e.date);return r.a.createElement(m,{key:e.id},r.a.createElement("div",{style:{margin:"0 11%"}},r.a.createElement(d,null,r.a.createElement("div",{style:e.immunizationCompleted?b:E}))),r.a.createElement(f,null,e.vaccine),r.a.createElement("p",{style:{minWidth:"23%"}},t.toDateString()),r.a.createElement("p",null,e.location))}))))))})))}));n(153);function Ue(){var e=Object(m.a)(["\n  width: 12rem;\n  height: 3rem;\n  margin-top: 3rem;\n  margin-left: 3.5rem;\n  border-radius: 3px;\n  justify-conent: center;\n  font-size: 20px;\n  text-align: center;\n  padding-top: 0.3rem;\n  background-color: #6b8496;\n"]);return Ue=function(){return e},e}function Ve(){var e=Object(m.a)(["\n  display: flex;\n  flex-flow: row;\n  justify-content: center;\n  background-color: lightgrey;\n  height: 40rem;\n  width: 40rem;\n  margin-left: 30rem;\n  margin-right: 15rem;\n  padding: 5rem;\n"]);return Ve=function(){return e},e}var qe=s.a.div(Ve()),Me=s.a.button(Ue());var Ge=Object(S.c)({mapPropsToValues:function(e){return{firstName:e.firstName||"",lastName:e.lastName||"",dateOfBirth:e.dateOfBirth||"",socialSecurityNumber:e.socialSecurityNumber||"",parent_id:e.parent_id||""}},handleSubmit:function(e,t){var n=t.props;console.log("SUBMITED: ",n),n.addChildAction(n.userId,e,n)}})((function(e){return r.a.createElement(qe,null,r.a.createElement(S.b,null,r.a.createElement("div",null,r.a.createElement("h6",null," First Name "),r.a.createElement(S.a,{id:"childName",value:e.firstName,type:"text",name:"firstName",placeholder:"Enter your Child's Name"})),r.a.createElement("div",null,r.a.createElement("h6",null," Last Name "),r.a.createElement(S.a,{id:"childName",value:e.lastName,type:"text",name:"lastName",placeholder:"Enter your Child's Name"})),r.a.createElement("div",null,r.a.createElement("h6",null," Date of Birth"),r.a.createElement(S.a,{id:"dateOfBirth",value:e.dateOfBirth,type:"text",name:"dateOfBirth",placeholder:"Enter your Childs's Date of Birth"})),r.a.createElement("div",null,r.a.createElement("h6",null,"Social Security"),r.a.createElement(S.a,{id:"socialSecurityNumber",value:e.socialSecurityNumber,type:"text",name:"socialSecurityNumber",placeholder:"Enter your Child's SSN"})),r.a.createElement("div",null,r.a.createElement("h6",null,"Sign Up Code"),r.a.createElement(S.a,{id:"parent_id",value:e.parent_id,type:"text",name:"parent_id",placeholder:"Enter your Sign up Code"})),r.a.createElement(Me,{type:"submit"},"Submit")))})),He=Object(N.b)((function(e){return{userId:e.patientReducer.userId,user:e.loginReducer.user}}),{addChildAction:function(e,t,n){return function(a){var r=localStorage.getItem("userId");I().post("/parent/".concat(r,"/children"),t).then((function(t){Z(e,n)(a)})).catch((function(e){return console.log("ERROR: ",e)}))}}})(Ge),We=n(14),Qe=n(357);function Ze(){var e=Object(m.a)(["\n    width: 80%;\n    margin: 0 auto;\n    padding: 10px;\n    background: #c5c5c5;\n    border-top: 1px solid #000;\n    font-size: 20px;\n    text-align: center;\n    @media (max-width: 599px) {\n      width: 100%;\n    }\n  "]);return Ze=function(){return e},e}var Je=Object(N.b)((function(e){return{childList:e.patientReducer.childList,userId:e.patientReducer.userId,user:e.loginReducer.user}}),{updateChildAction:function(e,t,n,a){return function(r){I().put("/child/immunization/".concat(e),t).then((function(e){console.log("Success Put: ",e),Z(a,n)(r)})).catch((function(e){return console.log("ERROR: ",e)}))}}})((function(e){var t=Object(a.useState)({vaccine:"Measles",location:"",grantPermission:!1}),n=Object($.a)(t,2),i=n[0],o=n[1],c=Object(a.useState)(!0),l=Object($.a)(c,2),u=l[0],m=l[1],d=function(e){o(Object(We.a)(Object(We.a)({},i),{},Object(U.a)({},e.target.name,e.target.value)))},p=s.a.div(Ze()),h=q();return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null,"Permission"),r.a.createElement(Qe.a,{className:h.root},r.a.createElement("form",{onSubmit:function(t){var n={};t.preventDefault(),e.childList.forEach((function(t){"".concat(t.firstName," ").concat(t.lastName)===i.childsName&&t.immunizations.forEach((function(t){t.vaccine===i.vaccine&&(n=Object(We.a)(Object(We.a)({},t),{},{vaccine:i.vaccine,location:i.location,grantPermission:!0}),e.updateChildAction(t.id,n,e,e.userId))}))})),m(!1)}},r.a.createElement(C.a,{container:!0,direction:"column",alignItems:"center",justify:"center"},r.a.createElement("label",{className:h.labels,htmlFor:"fullName"},"I:"),r.a.createElement("input",{type:"text",name:"fullName",value:i.fullName,onChange:d,className:h.inputs,placeholder:"Guardian"}),r.a.createElement("label",{className:h.labels,htmlFor:"location"},"Grant:"),r.a.createElement("input",{type:"text",name:"location",value:i.location,onChange:d,className:h.inputs,placeholder:"Location"}),r.a.createElement("label",{className:h.labels,htmlFor:"childsName"},"Permission to update:"),r.a.createElement("input",{type:"text",name:"childsName",value:i.childsName,onChange:d,className:h.inputs,placeholder:"Patients Name"}),r.a.createElement("span",null,u?null:r.a.createElement("p",null,"Child Name Not Found")),r.a.createElement("label",{className:h.labels,htmlFor:"vaccine"},"for the following immunization:"),r.a.createElement("select",{value:i.vaccine,onChange:d,name:"vaccine",className:h.inputs},["Measles","Rotavirus","Smallpox","Chickenpox","Yellow Fever","Heapatitis A","Polio","Rabies"].map((function(e){return r.a.createElement("option",{value:e},e)}))),r.a.createElement(_,{variant:"contained",type:"submit"},"submit")))))}));function Ye(){var e=Object(m.a)(["\nwidth: 12rem;\nheight:3rem;\nmargin-top: 5rem;\nmargin-left:4rem;\nborder-radius: 3px;\njustify-conent: center;\nfont-size: 20px;\ntext-align:center;\npadding-top: .3rem;\nbackground-color: #6b8496;\n\n"]);return Ye=function(){return e},e}function $e(){var e=Object(m.a)(["\ndisplay: flex;\nflex-flow: row;\njustify-content: center;\nbackground-color: lightgrey;\nheight: 40rem;\nwidth:40rem;\nmargin-left: 30rem;\nmargin-right:15rem;\npadding:8rem;\n"]);return $e=function(){return e},e}var Ke=s.a.div($e()),Xe=s.a.button(Ye());var et=Object(S.c)({mapPropsToValues:function(e){return{vaccine:e.vaccine||"",date:e.date||"",location:e.vLocation||"",nextImmunizationDate:e.nextImmunizationDate||"",grantPermission:!1,immunizationCompleted:!1}},handleSubmit:function(e,t){var n=t.props;console.log("VALUES: ",e),n.addImmunizationUpdate(e,n.match.params.id,n.userId,n)}})((function(e){return r.a.createElement(Ke,null,r.a.createElement(S.b,null,r.a.createElement("div",null,r.a.createElement("h6",null," Vaccine "),r.a.createElement(S.a,{id:"vaccine",type:"text",value:e.vaccine,name:"vaccine",placeholder:"Enter the Vaccine"})),r.a.createElement("div",null,r.a.createElement("h6",null," Date"),r.a.createElement(S.a,{id:"vDate",type:"text",value:e.date,name:"date",placeholder:"Enter the Date"})),r.a.createElement("div",null,r.a.createElement("h6",null,"Next Immunization"),r.a.createElement(S.a,{type:"text",value:e.nextImmunizationDate,name:"nextImmunizationDate",placeholder:"Enter date of next immunization"})),r.a.createElement("div",null,r.a.createElement("h6",null,"Location"),r.a.createElement(S.a,{id:"location",type:"text",value:e.vLocation,name:"location",placeholder:"Enter the location"})),r.a.createElement(Xe,{type:"submit"},"Update")))})),tt=Object(N.b)((function(e){return{userId:e.patientReducer.userId}}),{addImmunizationUpdate:function(e,t,n,a){return function(r){I().post("/child/".concat(t,"/immunization/").concat(n),e).then((function(e){console.log("Success Post: ",e),Z(n,a)(r)})).catch((function(e){return console.log("ERROR: ",e)}))}}})(et),nt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/",component:O}),r.a.createElement(c.b,{path:"/patient-register",component:G}),r.a.createElement(c.b,{path:"/login",component:W}),r.a.createElement(c.b,{path:"/parent-login",component:Y}),r.a.createElement(c.b,{path:"/provider-login",component:Y}),r.a.createElement(u,{path:"/doctor-home",component:xe}),r.a.createElement(u,{path:"/patient/:id",component:ke}),r.a.createElement(u,{path:"/patient-home",component:Be}),r.a.createElement(u,{path:"/add-child",component:He}),r.a.createElement(u,{path:"/permissions",component:Je}),r.a.createElement(u,{path:"/UpdateImmune/:id",component:tt})))},at=n(360),rt=Object(V.a)({root:Object(U.a)({width:"100%",margin:"0 auto",padding:A.spacing(2),background:"#f2f2f2",fontFamily:A.typography.fontFamily,lineHeight:"0",textAlign:"center"},A.breakpoints.up("sm"),{width:"80%"})}),it=Object(c.g)((function(e){var t=e.location,n=e.history,a=rt(),i=localStorage.getItem("token");return i?r.a.createElement(C.a,{className:a.root,container:!0,alignItems:"center",justify:"center"},r.a.createElement(C.a,{item:!0,xs:2},r.a.createElement(at.a,{onClick:function(){return n.goBack()},style:{fontSize:"30px",color:"#000"}})),r.a.createElement(C.a,{item:!0,xs:8},r.a.createElement(H.a,{component:"header",variant:"h5"},"ImmuTrack")),r.a.createElement(C.a,{item:!0,xs:2},r.a.createElement(B,{onClick:function(e){e.preventDefault(),localStorage.removeItem("token"),n.push("/")}},"Sign Out"))):i||"/"!==t.pathname?r.a.createElement(C.a,{className:a.root,container:!0,alignItems:"center",justify:"center"},r.a.createElement(C.a,{item:!0,xs:2},r.a.createElement(at.a,{onClick:n.goBack,style:{fontSize:"30px",color:"#000"}})),r.a.createElement(C.a,{item:!0,xs:8},r.a.createElement(H.a,{component:"header",variant:"h5"},"ImmuTrack")),r.a.createElement(C.a,{item:!0,xs:2})):r.a.createElement(C.a,{component:"header",className:a.root,container:!0,alignItems:"center",justify:"center"},r.a.createElement(C.a,{item:!0,xs:2}),r.a.createElement(C.a,{item:!0,xs:8},r.a.createElement(H.a,{component:"header",variant:"h5"},"ImmuTrack")),r.a.createElement(C.a,{item:!0,xs:2},r.a.createElement(B,{onClick:function(e){e.preventDefault(),n.push("/login")}},"Sign In")))}));function ot(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 200px;\n  @media (max-width: 599px) {\n    flex-direction: column;\n  }\n"]);return ot=function(){return e},e}function ct(){var e=Object(m.a)(['\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 5vh;\n  padding: 20px 50px;\n  background: #7e7e7e;\n  font-family: "Barlow";\n  font-size: 15px;\n  z-index: 100;\n  @media (max-width: 599px) {\n    height: 10vh;\n  }\n  margin-bottom: 0;\n']);return ct=function(){return e},e}var lt=s.a.div(ct()),ut=s.a.div(ot());function mt(){return r.a.createElement("footer",null,r.a.createElement(lt,{component:"footer"},r.a.createElement(ut,null,r.a.createElement(h.c,{style:{color:"#000",textDecoration:"none"},to:"/privacy-policy"},"Privacy Policy"),r.a.createElement(h.c,{style:{color:"#000",textDecoration:"none"},to:"/contact"},"Contact Us")),r.a.createElement("div",null,"@ImmuTrack")))}var st=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(it,null),r.a.createElement(nt,null),r.a.createElement(mt,null))},dt=(n(338),n(42)),pt=n(165),ht=n(166),ft=n.n(ht),gt=n(103),bt={childList:[{firstName:"Brandon",immunizations:[{vaccine:"stuff"}]}],display:!1,userId:-1},Et=Object(dt.c)({loginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PARENT":case"PROVIDER":return Object(We.a)(Object(We.a)({},e),{},{user:t.payload});default:return e}},patientReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CHILD_ACTION":return Object(We.a)(Object(We.a)({},e),{},{childList:t.payload,display:!1});case"SET_IMMUNIZATION_ACTION":var n=Object(gt.a)(e.childList);return n[t.payload.index].immunizations=t.payload.immuneObj||{Empty:0},Object(We.a)(Object(We.a)({},e),{},{childList:Object(gt.a)(n),display:!0});case"SET_USER_ACTION":return Object(We.a)(Object(We.a)({},e),{},{userId:t.payload,display:!1});default:return e}}}),xt=Object(dt.d)(Et,Object(dt.a)(pt.a,ft.a));o.a.render(r.a.createElement(N.a,{store:xt},r.a.createElement(h.a,null,r.a.createElement(st,null))),document.getElementById("root"))}},[[176,1,2]]]);
//# sourceMappingURL=main.de157668.chunk.js.map