(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(18),r=n.n(i),s=(n(116),n(212)),l=n(201),o=n(208),d=n(1),j=Object(o.a)({headingContainer:{height:"20vh",backgroundColor:"rgba(0, 0, 0, 0)",padding:"20px",borderRadius:"5px",boxShadow:"6px 4px 39px -14px rgb(0 0 0 / 40%)",fontFamily:"'Montserrat', sans-serif",alignContent:"center",justifyContent:"flex-end",textAlign:"center"}});var u=function(){var e=j();return Object(d.jsxs)(l.a,{container:!0,className:e.headingContainer,xs:12,children:[Object(d.jsx)(l.a,{item:!0,xs:4,children:Object(d.jsx)("h1",{children:"Micro-Lending"})}),Object(d.jsx)(l.a,{item:!0,xs:4})]})},x=n(38),b=n(27),p=n(67),h=n(66),O=n(39),m=n.n(O),g=n(16),f=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).state={clients:[],clientId:null,clientName:null,amount:null,date:null,duration:null},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;m.a.get("http://localhost:3001/read").then((function(t){e.setState({clients:t.data[0]})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.props.classes;return Object(d.jsxs)(l.a,{container:!0,xs:12,className:e.dashboardContainer,spacing:2,children:[Object(d.jsx)(l.a,{item:!0,xs:3,children:Object(d.jsx)("h3",{children:"Total Balance"})}),Object(d.jsx)(l.a,{item:!0,xs:3,children:Object(d.jsx)("h3",{children:"hello"})}),Object(d.jsx)(l.a,{item:!0,xs:3,children:Object(d.jsx)("h3",{children:"hello"})}),Object(d.jsx)(l.a,{item:!0,xs:3,children:Object(d.jsx)("h3",{children:"hello"})})]})}}]),n}(a.Component),v=Object(g.a)((function(e){return{dashboardContainer:{padding:"20px",height:"100%",borderRadius:"5px",boxShadow:"rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",fontFamily:"'Montserrat', sans-serif"},clientName:{backgroundColor:"red",listStyle:"none"}}}))(f),C=n(14),y=n(57),N=n(10),w=n(210),S=["text","size","color","variant","onClick"];var k=n(207),I=["type","value","onChange"];var B={Button:function(e){var t=e.text,n=e.size,a=(e.color,e.variant),c=e.onClick,i=Object(N.a)(e,S);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(w.a,Object(y.a)(Object(y.a)({variant:a||"outlined",size:n||"small",onClick:c},i),{},{children:t}))})},Input:function(e){var t=e.type,n=e.value,a=e.onChange,c=Object(N.a)(e,I);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(k.a,Object(y.a)({type:t,value:n,onChange:a},c))})}},D=n(96),F=n.n(D),M=Object(o.a)({addClientContainer:{display:"flex",minHeight:"50vh",minWidth:"14vw",flexWrap:"wrap",alignItems:"center",justifyContent:"normal",alignContent:"center",borderRadius:"5px",boxShadow:"rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"},clientForm:{minHeight:"40vh",alignContent:"space-around",display:"flex",justifyContent:"space-around",alignItems:"baseline",flexWrap:"wrap",flexDirection:"column",fontFamily:"'Montserrat', sans-serif"},inputs:{minHeight:"20px"},clientFormButton:{display:"flex",justifyContent:"center"},addCLientButton:{fontFamily:"'Montserrat', sans-serif"}});var z=function(){var e=M(),t=Object(a.useState)(""),n=Object(C.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(0),s=Object(C.a)(r,2),o=s[0],j=s[1],u=Object(a.useState)(new Date),x=Object(C.a)(u,2),b=x[0],p=x[1],h=Object(a.useState)(0),O=Object(C.a)(h,2),g=O[0],f=O[1];return Object(d.jsxs)(l.a,{container:!0,xs:12,className:e.addClientContainer,children:[Object(d.jsxs)(l.a,{item:!0,xs:12,className:e.clientForm,children:[Object(d.jsx)("label",{children:"Name:"}),Object(d.jsx)("input",{className:e.inputs,type:"text",onChange:function(e){i(e.target.value)}}),Object(d.jsx)("label",{children:"Amount:"}),Object(d.jsx)("input",{className:e.inputs,type:"number",onChange:function(e){j(e.target.value)}}),Object(d.jsx)("label",{children:"Date issued:"}),Object(d.jsx)("input",{className:e.inputs,type:"date",min:"2018-01-01",max:"2025-01-01",onChange:function(e){p(e.target.value)},placeholder:"YYYY-MM-DD"}),Object(d.jsx)("label",{children:"Duration:"}),Object(d.jsx)("input",{className:e.inputs,type:"number",onChange:function(e){f(e.target.value)}})]}),Object(d.jsx)(l.a,{item:!0,xs:12,className:e.clientFormButton,children:Object(d.jsx)(B.Button,{className:e.addCLientButton,text:"Add New",type:"text",startIcon:Object(d.jsx)(F.a,{}),onClick:function(){return console.log(i),void m.a.post("http://localhost:3001/add-client",{name:c,amount:o,date:b,duration:g}).then((function(){alert("New client added!")}))}})})]})},P=n(4),W=(n(145),n(218)),R=n(220),A=n(206),H=n(78),L=n(8),Y=n(217),_=n(219),E=n(216),J=n(214),T=n(209),U=n(215),q=n(204),G=n(205);function K(e){var t=Object(o.a)({}),n=e.title,a=e.children,c=e.openPopup,i=e.setOpenPopup,r=t();return Object(d.jsx)("div",{children:Object(d.jsxs)(T.a,{open:c,children:[Object(d.jsx)(U.a,{children:n}),Object(d.jsx)(q.a,{children:a}),Object(d.jsx)(G.a,{children:Object(d.jsx)(B.Button,{className:r.updateButton,size:"small",text:"CLOSE",variant:"text",onClick:function(){return i(!1)}})})]})})}var Q=function(e){var t=Object(o.a)({updateDeletecontainer:{display:"flex"},updateIcon:{width:"20",height:"20"},updateButton:{padding:"0",width:"5vw",fontFamily:"'Montserrat', sans-serif"},updateInput:{width:"10vw"}}),n=Object(a.useState)(!1),c=Object(C.a)(n,2),i=c[0],r=c[1],s=t(),l=Object(a.useState)(""),j=Object(C.a)(l,2),u=j[0],x=j[1];return Object(d.jsxs)("div",{className:s.updateDeletecontainer,children:[Object(d.jsx)(B.Input,{className:s.updateInput,variant:"dafault",type:"text",label:"Name",onChange:function(e){x(e.target.value)}}),Object(d.jsx)(B.Button,{className:s.updateButton,size:"small",variant:"text",onClick:function(){return e.clientId,void m.a.put("http://localhost:3001/update",{id:e.clientId,newName:u})},text:"submit"}),Object(d.jsx)(K,{openPopup:i,setOpenPopup:r})]})},V=n(97),X=n.n(V);function Z(e){var t=c.a.useState(!1),n=Object(C.a)(t,2),a=n[0],i=n[1],r=e.clientId;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(B.Button,{text:Object(d.jsx)(X.a,{}),onClick:function(){return i(!0)},variant:"text"}),Object(d.jsx)(K,{openPopup:a,setOpenPopup:i,children:Object(d.jsx)(Q,{clientId:r})})]})}var $=Object(L.a)(A.a)((function(e){var t,n=e.theme;return t={},Object(P.a)(t,"&.".concat(H.a.head),{backgroundColor:n.palette.common.black,color:n.palette.common.white,fontFamily:"'Montserrat', sans-serif"}),Object(P.a)(t,"&.".concat(H.a.body),{fontSize:12,fontFamily:"'Montserrat', sans-serif",color:n.palette.common.black,fontWeight:400}),t})),ee=Object(L.a)(E.a)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}})),te=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).state={clients:[],clientId:null,clientName:null,amount:null,date:null,duration:null,openPopup:!1},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;m.a.get("http://localhost:3001/read").then((function(t){e.setState({clients:t.data,clientId:t.data.id,clientName:t.data[0].name,amount:t.data[0].amount,date:t.data[0].date,duration:t.data[0].duration})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.props.classes;return Object(d.jsx)("div",{className:e.previewContainer,children:Object(d.jsx)(Y.a,{component:J.a,children:Object(d.jsxs)(W.a,{sx:{minWidth:650},size:"small","aria-label":"a dense table",children:[Object(d.jsx)(_.a,{className:e.tableHead,children:Object(d.jsxs)(E.a,{children:[Object(d.jsx)($,{align:"center",children:"ID"}),Object(d.jsx)($,{align:"center",children:"Name"}),Object(d.jsx)($,{align:"center",children:"Amount"}),Object(d.jsx)($,{align:"center",children:"Date"}),Object(d.jsx)($,{align:"center",children:"Duration(days)"}),Object(d.jsx)($,{align:"center",children:"Update/Del"})]})}),Object(d.jsx)(R.a,{children:this.state.clients.map((function(t){return Object(d.jsxs)(ee,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(d.jsx)($,{className:e.tableBody,component:"th",scope:"row",children:t._id.substr(0,7)}),Object(d.jsx)($,{align:"center",children:t.name}),Object(d.jsx)($,{align:"center",children:.2*t.amount+t.amount}),Object(d.jsx)($,{align:"center",children:t.date.substr(0,10)}),Object(d.jsx)($,{align:"center",children:t.duration}),Object(d.jsx)($,{align:"center",children:Object(d.jsx)(Z,{clientId:t._id})})]},t._id)}))})]})})})}}]),n}(c.a.Component),ne=Object(g.a)((function(e){return{previewContainer:{padding:"20px",borderRadius:"5px",boxShadow:"rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"},addButton:{right:"10px"},tableBody:{},tableRowBody:{},nameRow:{color:"red"}}}))(te),ae=Object(o.a)({bodyContainer:{display:"flex",boxSizing:"border-box",justifyContent:"center",alignItems:"baseline",flexDirection:"row",flexWrap:"wrap"},previewSection:{},addClientSection:{}});var ce=function(){var e=ae();return Object(d.jsx)(s.a,{maxWidth:"xl",className:"App",children:Object(d.jsxs)(l.a,{container:!0,className:"bodyContainer",xs:12,spacing:2,children:[Object(d.jsx)(l.a,{item:!0,xs:12,children:Object(d.jsx)(u,{})}),Object(d.jsx)(l.a,{item:!0,xs:12,md:9,className:e.previewSection,children:Object(d.jsx)(v,{})}),Object(d.jsx)(l.a,{item:!0,xs:12,md:3,className:e.addClientSection,children:Object(d.jsx)(z,{})}),Object(d.jsx)(l.a,{item:!0,xs:12,className:e.previewSection,children:Object(d.jsx)(ne,{})})]})})};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(ce,{})}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.8a43626b.chunk.js.map