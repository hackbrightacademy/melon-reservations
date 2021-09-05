(this["webpackJsonpmelon-reservations"]=this["webpackJsonpmelon-reservations"]||[]).push([[0],{219:function(e,t,n){},220:function(e,t,n){},238:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(26),c=n.n(i),o=n(107),s=(n(219),n(8)),l=(n(220),n(27)),j=n(347),u=n(348),h=n(333),d=n(246),b=n(93),m=n(87),O=n(167),f=n(330),p=n(177),v=n.n(p),x=n(176),g=n.n(x),w=n(334),k=n(125),y=n(1);function C(e){var t=e.reservations,n=e.setReservations;var r=[{field:"reservationTime",headerName:"Reservation Info",width:400},{field:"cancelReservation",headerName:"Cancel Reservation",width:400,renderCell:function(e){var t=e.id;return Object(y.jsx)(b.a,{variant:"contained",color:"primary",size:"small",onClick:function(e){return function(e){n((function(t){return t.filter((function(t){return t.reservation_id!==e}))})),fetch("/api/reservations/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}(t)},children:"Cancel Reservation"})}}],a=t.map((function(e){return{id:e.reservation_id,reservationTime:new Date(e.start_time).toLocaleString(),cancelReservation:e.reservation_id}}));return Object(y.jsx)("div",{style:{width:"100%"},children:Object(y.jsx)(k.a,{autoHeight:!0,rows:a,columns:r,isRowSelectable:!1})})}function S(e){var t=e.username,n=Object(l.f)(),a=Object(r.useState)([]),i=Object(s.a)(a,2),c=i[0],o=i[1];return t||n.push("/login"),Object(r.useEffect)((function(){fetch("/api/user/".concat(t,"/reservations/")).then((function(e){return e.json()})).then((function(e){return o(e)}))}),[t]),Object(y.jsx)(w.a,{component:"main",maxWidth:"md",children:0===c.length?Object(y.jsx)(d.a,{component:"h1",variant:"h5",children:"No reservations yet. Make one!"}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(d.a,{component:"h1",variant:"h5",children:"Your reservations:"}),Object(y.jsx)(C,{reservations:c,setReservations:o})]})})}var N=n(156);function T(e){var t=Object(l.f)(),n=Object(r.useState)(""),a=Object(s.a)(n,2),i=a[0],c=a[1];return Object(y.jsx)(w.a,{component:"main",maxWidth:"xs",children:Object(y.jsxs)("div",{children:[Object(y.jsx)(d.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(y.jsxs)("form",{noValidate:!0,children:[Object(y.jsx)(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoFocus:!0,onChange:function(e){return c(e.target.value)},value:i}),Object(y.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(n){n.preventDefault(),e.setUsername(i),t.push("/schedule")},children:"Log In"})]})]})})}var R=n(148),D=n(71),E=n(336),I=n(350),W=n(351),B=n(335),_=n(349);function M(e){var t=e.appointments,n=e.username;var r=[{field:"appointmentInfo",headerName:"Appointment Info",width:400},{field:"schedule",headerName:"Make Reservation",width:400,renderCell:function(e){return Object(y.jsx)(b.a,{variant:"contained",color:"primary",size:"small",onClick:function(){return function(e){var t=JSON.stringify({startTime:e,username:n});fetch("/api/reservations/book",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.error("Error:",e)}))}(e.value)},children:"Make Reservation"})}}],a=t.map((function(e){return{id:Number(e),appointmentInfo:e.toLocaleString(),schedule:e}}));return Object(y.jsx)("div",{style:{width:"100%"},children:Object(y.jsx)(k.a,{autoHeight:!0,rows:a,columns:r,isRowSelectable:!1})})}function P(e){var t=e.username,n=Object(r.useState)(new Date),a=Object(s.a)(n,2),i=a[0],c=a[1],o=Object(r.useState)(new Date),j=Object(s.a)(o,2),u=j[0],h=j[1],d=Object(r.useState)([]),m=Object(s.a)(d,2),f=m[0],p=m[1];var v=Object(O.a)((function(e){return{label:{justifyContent:"left"},submitBtn:{backgroundColor:"#00745d",color:"white","&:hover":{backgroundColor:"#015041",borderColor:"#54ffde",boxShadow:"none"}}}}))(),x=Object(l.f)();return t||x.push("/login"),Object(y.jsx)(w.a,{maxWidth:"lg",children:Object(y.jsxs)(B.b,{dateAdapter:I.a,children:[Object(y.jsxs)(E.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:4,children:[Object(y.jsx)(E.a,{item:!0,className:v.label,htmlFor:"date-picker-dialog",children:"Pick a date for your reservation:"}),Object(y.jsxs)(E.a,{container:!0,direction:"row",spacing:3,justifyContent:"center",children:[Object(y.jsx)(E.a,{item:!0,children:Object(y.jsx)(_.a,{renderInput:function(e){return Object(y.jsx)(W.a,Object(R.a)({},e))},label:"DateTimePicker",value:i,onChange:function(e){return c(e)},minDate:Object(D.a)(new Date)})}),Object(y.jsx)(E.a,{item:!0,children:Object(y.jsx)(_.a,{renderInput:function(e){return Object(y.jsx)(W.a,Object(R.a)({},e))},label:"DateTimePicker",value:u,onChange:function(e){return h(e)},minDate:Object(D.a)(new Date)})})]}),Object(y.jsx)(E.a,{item:!0,children:Object(y.jsx)(b.a,{variant:"contained",className:v.submitBtn,onClick:function(){var e=JSON.stringify({startTime:i,endTime:u});fetch("/api/reservations",{method:"POST",headers:{"Content-Type":"application/json"},body:e}).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){p(e.map((function(e){return new Date(e)})))})).catch((function(e){console.error("Error:",e)}))},children:"Search for reservations"})})]}),f.length>0&&Object(y.jsx)(M,{appointments:f,username:t})]})})}var F=Object(m.b)({palette:{primary:{main:"#ffa177"},secondary:{main:g.a.A100}}});var J=function(){var e=Object(l.f)(),t=Object(r.useState)(),n=Object(s.a)(t,2),a=n[0],i=n[1],c=Object(O.a)((function(e){return{appBar:{marginBottom:e.spacing(2)},icon:{marginRight:e.spacing(2)},title:{flexGrow:1}}}))();return a||e.push("/login"),Object(y.jsxs)(f.a,{theme:F,children:[Object(y.jsx)(j.a,{}),Object(y.jsx)(u.a,{position:"static",className:c.appBar,children:Object(y.jsxs)(h.a,{children:[Object(y.jsx)(v.a,{className:c.icon}),Object(y.jsx)(d.a,{variant:"h6",color:"inherit",noWrap:!0,className:c.title,children:"Melon Tasting Scheduler"}),Object(y.jsx)(b.a,{to:"/schedule",component:o.b,color:"inherit",children:"Schedule Tasting"}),Object(y.jsx)(b.a,{to:"/current_reservations",component:o.b,color:"inherit",children:"Current Reservations"})]})}),Object(y.jsxs)(l.c,{children:[Object(y.jsx)(l.a,{path:"/schedule",children:Object(y.jsx)(P,{username:a})}),Object(y.jsx)(l.a,{path:"/current_reservations",children:Object(y.jsx)(S,{username:a})}),Object(y.jsx)(l.a,{path:"/login",children:Object(y.jsx)(T,{setUsername:i})}),Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(d.a,{variant:"h3",children:["Welcome, ",a,"!"]})})]})]})};c.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(o.a,{children:Object(y.jsx)(J,{})})}),document.getElementById("root"))}},[[238,1,2]]]);
//# sourceMappingURL=main.75194d6a.chunk.js.map