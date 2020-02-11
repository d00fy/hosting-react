(this["webpackJsonpdesign-chart"]=this["webpackJsonpdesign-chart"]||[]).push([[0],{201:function(e,t,a){e.exports=a(393)},206:function(e,t,a){},207:function(e,t,a){},393:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(41),s=a.n(l),i=(a(206),a(8)),c=(a(207),a(13)),o=a(10),u=a(14),m=a(15),d=a(16),p=a(50),g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).exportSVG=function(e){var t=e;return(new XMLSerializer).serializeToString(t)},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){this.props!==e&&(console.log(document.getElementsByClassName("katagaki")),this.props.val(this.exportSVG(document.getElementById("tes"))))}},{key:"render",value:function(){return r.a.createElement(p.e,{id:"tes",className:"App",cx:300,cy:250,outerRadius:150,width:600,height:450,data:[{subject:"\u76ee",A:this.props.eye,B:110,fullMark:150},{subject:"\u624b",A:this.props.hand,B:130,fullMark:150},{subject:"\u982d",A:this.props.head,B:130,fullMark:150},{subject:"\u53e3",A:this.props.mouse,B:100,fullMark:150},{subject:"\u8db3",A:this.props.leg,B:90,fullMark:150},{subject:"\u5fc3",A:this.props.mental,B:85,fullMark:150}]},r.a.createElement(p.a,{id:"katagaki",verticalAlign:"center",iconType:"star",wrapperStyle:{marginTop:"24px"}}),r.a.createElement(p.c,null),r.a.createElement(p.b,{dataKey:"subject"}),r.a.createElement(p.d,{name:this.props.name,dataKey:"A",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.6}))}}]),t}(r.a.Component),h={border:"1px solid gray",backgroundColor:"white"},b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).canvas=document.getElementById("canvas"),e.state={drawing:""},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"getContext",value:function(){return this.refs.canvas.getContext("2d")}},{key:"test",value:function(){var e=this,t=this.getContext(),a=new Image;a.src="data:image/svg+xml;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(this.props.svg))),a.onload=function(){t.font="24px serif",t.textBaseline="hanging",t.drawImage(a,0,0,a.width,a.height),t.fillText(e.props.name,40,50);var n=document.getElementById("canvas");e.setState({drawing:n.toDataURL()})}}},{key:"shouldComponentUpdate",value:function(e){this.props.svg!==e&&this.test()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("canvas",{id:"canvas",ref:"canvas",width:"600px",height:"450px",onMouseUp:function(){},style:h}),r.a.createElement("a",{onClick:function(){},href:this.state.drawing,download:(new Date).getTime()+".png"},r.a.createElement("div",{className:"box"},r.a.createElement("h2",{className:"title"},"\u753b\u50cf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"))))}}]),t}(n.Component),f=a(405),v=a(407),y=a(408),E=a(169),j=Object(f.a)((function(e){return{root:{width:200,margin:"auto"},margin:{height:e.spacing(3)}}})),x=[{value:0}],k={overflowY:"scroll",border:"1px solid grey",borderRadius:"3px",width:"500px",height:"200px"};var O=function(){var e=Object(n.useState)(90),t=Object(i.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(90),c=Object(i.a)(s,2),o=c[0],u=c[1],m=Object(n.useState)(90),d=Object(i.a)(m,2),p=d[0],h=d[1],f=Object(n.useState)(90),O=Object(i.a)(f,2),w=O[0],B=O[1],A=Object(n.useState)(90),S=Object(i.a)(A,2),V=S[0],C=S[1],T=Object(n.useState)(90),D=Object(i.a)(T,2),L=D[0],M=D[1],I=Object(n.useState)("\u80a9\u66f8\u304d"),N=Object(i.a)(I,2),U=N[0],R=N[1],z=Object(n.useState)(""),F=Object(i.a)(z,2),G=F[0],J=F[1],K=j();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(g,{id:"testes",eye:a,hand:o,head:p,mouse:w,leg:V,mental:L,name:U,val:function(e){J(e),console.log(G)}}),r.a.createElement("div",{style:k},r.a.createElement("div",{className:K.root},r.a.createElement("label",null,"Name:",r.a.createElement("input",{type:"text",name:"name",value:U,onChange:function(e){R(e.target.value),console.log(U)}})),r.a.createElement(v.a,{id:"discrete-slider-custom",gutterBottom:!0},"\u76ee"),r.a.createElement(y.a,{defaultValue:90,max:120,getAriaValueText:function(e){l(e)},"aria-labelledby":"discrete-slider-custom",step:1,valueLabelDisplay:"auto",marks:x}),r.a.createElement(v.a,{id:"discrete-slider-custom",gutterBottom:!0},"\u624b"),r.a.createElement(y.a,{defaultValue:90,max:120,getAriaValueText:function(e){u(e)},"aria-labelledby":"discrete-slider-custom",step:1,valueLabelDisplay:"auto",marks:x}),r.a.createElement(v.a,{id:"discrete-slider-custom",gutterBottom:!0},"\u982d"),r.a.createElement(y.a,{defaultValue:90,max:120,getAriaValueText:function(e){h(e)},"aria-labelledby":"discrete-slider-custom",step:1,valueLabelDisplay:"auto",marks:x}),r.a.createElement(v.a,{id:"discrete-slider-custom",gutterBottom:!0},"\u53e3"),r.a.createElement(y.a,{defaultValue:90,max:120,getAriaValueText:function(e){B(e)},"aria-labelledby":"discrete-slider-custom",step:1,valueLabelDisplay:"auto",marks:x}),r.a.createElement(v.a,{id:"discrete-slider-custom",gutterBottom:!0},"\u8db3"),r.a.createElement(y.a,{defaultValue:90,max:120,getAriaValueText:function(e){C(e)},"aria-labelledby":"discrete-slider-custom",step:1,valueLabelDisplay:"auto",marks:x}),r.a.createElement(v.a,{id:"discrete-slider-custom",gutterBottom:!0},"\u5fc3"),r.a.createElement(y.a,{defaultValue:90,max:120,getAriaValueText:function(e){M(e)},"aria-labelledby":"discrete-slider-custom",step:1,valueLabelDisplay:"auto",marks:x}))),r.a.createElement(b,{svg:G,name:U}),r.a.createElement(E.a,{url:"https://d00fy.github.io/hosting-react/",options:{text:"\u30c7\u30b6\u30a4\u30f3\u30c1\u30e3\u30fc\u30c8",via:"uchibashi"}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[201,1,2]]]);
//# sourceMappingURL=main.043bcb16.chunk.js.map