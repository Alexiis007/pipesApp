import{A as h,B as L,C as p,D as c,E as f,F as v,G as x,K as V,L as j,M as G,N as D,O as J,P as K,Q as R,R as X,S as $,T as z,U as H,V as Y,W as q,X as Q,c as A,f as F,ha as w,i as C,j as T,k as E,ka as W,la as _,m as o,ma as S,na as k,oa as Z,pa as ee,qa as te,r as I,s as g,sa as ie,t as i,u as t,v as U,w as y,x as r,y as s,z as B}from"./chunk-MIETTIPV.js";var ne=(()=>{let e=class e{constructor(){this.nameUpper="minusculas",this.nameLower="MAYUSCULAS",this.nameTitle="DeSoRdEn",this.customDate=new Date}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=C({type:e,selectors:[["app-basic-pages"]],decls:70,vars:50,consts:[["header","Pipes Basicos",1,"p-1"],[1,"grid"],[1,"col-12","md:col-6","lg:col-3"],["header","UpperCase"],["header","LowerCase"],["header","TitleCase"],[1,"col-12","md:col-6"],["header","Pipes Date's Estructura"],["header","Pipes Date's Ejecucion"]],template:function(l,a){l&1&&(i(0,"p-panel",0)(1,"p"),r(2," Pipes incluidos en Angular - Usualmente en el Common Module "),t()(),i(3,"div",1)(4,"div",2)(5,"p-card",3),r(6),p(7,"uppercase"),t()(),i(8,"div",2)(9,"p-card",4),r(10),p(11,"lowercase"),t()(),i(12,"div",2)(13,"p-card",5),r(14),p(15,"titlecase"),t()(),i(16,"div",6)(17,"p-card",7)(18,"ol")(19,"li"),r(20,"Fecha"),t(),i(21,"li"),r(22,"Fecha | date"),t(),i(23,"li"),r(24,"Fecha | date: 'short'"),t(),i(25,"li"),r(26,"Fecha | date: 'MMMM'"),t(),i(27,"li"),r(28,"Fecha | date: 'MMMM dd, yyyy'"),t()(),U(29,"hr"),i(30,"ol")(31,"li"),r(32,"Fecha | date: 'long' : 'GMT-6'"),t(),i(33,"li"),r(34,"Fecha | date: 'long' : 'GMT-4'"),t(),i(35,"li"),r(36,"Fecha | date: 'long' : '' : 'es-MX'"),t(),i(37,"li"),r(38,"Fecha | date: 'long' : '' : 'fr-CA'"),t()()()(),i(39,"div",6)(40,"p-card",8)(41,"ol")(42,"li"),r(43),t(),i(44,"li"),r(45),p(46,"date"),t(),i(47,"li"),r(48),p(49,"date"),t(),i(50,"li"),r(51),p(52,"date"),t(),i(53,"li"),r(54),p(55,"date"),t()(),U(56,"hr"),i(57,"ol")(58,"li"),r(59),p(60,"date"),t(),i(61,"li"),r(62),p(63,"date"),t(),i(64,"li"),r(65),p(66,"date"),t(),i(67,"li"),r(68),p(69,"date"),t()()()()()),l&2&&(o(6),h(" ",a.nameUpper," => ",c(7,15,a.nameUpper)," "),o(4),h(" ",a.nameLower," => ",c(11,17,a.nameLower)," "),o(4),h(" ",a.nameTitle," => ",c(15,19,a.nameTitle)," "),o(29),s(a.customDate),o(2),s(c(46,21,a.customDate)),o(3),s(f(49,23,a.customDate,"short")),o(3),s(f(52,26,a.customDate,"MMMM")),o(3),s(f(55,29,a.customDate,"MMMM dd, yyyy")),o(5),s(v(60,32,a.customDate,"long","GMT-6")),o(3),s(v(63,36,a.customDate,"long","GMT-4")),o(3),s(x(66,40,a.customDate,"long","","es-MX")),o(3),s(x(69,45,a.customDate,"long","","fr-CA")))},dependencies:[_,S,J,G,D,K]});let n=e;return n})();var ae=(()=>{let e=class e{constructor(){this.totalSell=25677895567e-4,this.percentage=.5567}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=C({type:e,selectors:[["app-numbers-pages"]],decls:16,vars:19,consts:[["header","Pipes Basicos - Numericos",1,"p-1"],[1,"grid"],[1,"col-12","md:col-6","lg:col-3"],["header","Ventas Netas","subheader","Del Presente mes"],["header","Ventas Brutas","subheader","Del Presente mes"]],template:function(l,a){l&1&&(i(0,"p-panel",0)(1,"p"),r(2," Pipes incluidos en Angular - Usualmente en el Common Module "),t()(),i(3,"div",1)(4,"div",2)(5,"p-card",3),r(6),p(7,"number"),t()(),i(8,"div",2)(9,"p-card",4),r(10),p(11,"currency"),t()(),i(12,"div",2)(13,"p-card",4),r(14),p(15,"currency"),t()()()),l&2&&(o(6),h(" ",a.totalSell+4782," => ",f(7,6,a.totalSell+4782,"1.2-2")," "),o(4),h(" ",a.totalSell," => ",x(11,9,a.totalSell,"","symbol-narrow","1.4-4")," "),o(4),h(" ",a.totalSell," => ",x(15,14,a.totalSell,"","symbol-narrow","1.4-4")," "))},dependencies:[_,S,H,Y]});let n=e;return n})();function ue(n,e){if(n&1&&(i(0,"ul")(1,"li")(2,"b"),r(3),t(),r(4),t()()),n&2){let P=e.$implicit;o(3),s(P.key),o(),B(" ",P.value,"")}}var re=(()=>{let e=class e{constructor(){this.name="Alexis",this.gender="male",this.invitationMap={male:"invitarlo",female:"invitarla"},this.clients=["Maria","Pedro","Roberto","Mario","Toby"],this.clientsMap={"=0":"No hay clientes","=1":"Cliente a la espera","=2":"Tenemos dos clientes esperando",other:"Tenemos # clientes esperando"},this.person={name:"Alexis",age:20,address:"Garcia N.L."},this.myObservableTime=A(2e3)}changeClient(){this.gender=="male"?(this.name="Melisa",this.gender="female"):(this.name="Alexis",this.gender="male")}deleteClient(){this.clients.pop()}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=C({type:e,selectors:[["app-uncommon-pages"]],decls:51,vars:40,consts:[["header","Pipes No Tan Comunes",1,"p-1"],[1,"grid"],[1,"col-12","md:col-6"],["legend","i18nSelect Pipe",3,"toggleable"],["label","Cambiar Cliente",3,"click"],["legend","i18nPlural Pipe",3,"toggleable"],["label","Borrar Cliente",3,"onClick"],["legend","Slice Pipe",3,"toggleable"],["legend","Json Pipe",3,"toggleable"],["legend","Key Value Pipe",3,"toggleable"],[4,"ngFor","ngForOf"],["legend","Async Pipe",3,"toggleable"]],template:function(l,a){l&1&&(i(0,"p-panel",0)(1,"p"),r(2," Pipes incluidos en Angular - Usualmente en el Common Module "),t()(),i(3,"div",1)(4,"div",2)(5,"p-fieldset",3)(6,"p"),r(7),p(8,"i18nSelect"),t(),i(9,"p-button",4),y("click",function(){return a.changeClient()}),t()()(),i(10,"div",2)(11,"p-fieldset",5)(12,"p"),r(13),p(14,"i18nPlural"),t(),i(15,"p-button",6),y("onClick",function(){return a.deleteClient()}),t()()(),i(16,"div",2)(17,"p-fieldset",7)(18,"b"),r(19,"Original"),t(),i(20,"pre"),r(21),t(),i(22,"b"),r(23,"Slice:0:2"),t(),i(24,"pre"),r(25),p(26,"slice"),t(),i(27,"b"),r(28,"Slice:1:2"),t(),i(29,"pre"),r(30),p(31,"slice"),t(),i(32,"b"),r(33,"Slice:0:1"),t(),i(34,"pre"),r(35),p(36,"slice"),t()()(),i(37,"div",2)(38,"p-fieldset",8)(39,"pre"),r(40),p(41,"json"),t()()(),i(42,"div",2)(43,"p-fieldset",9),I(44,ue,5,2,"ul",10),p(45,"keyvalue"),t()(),i(46,"div",2)(47,"p-fieldset",11)(48,"pre"),r(49),p(50,"async"),t()()()()),l&2&&(o(5),g("toggleable",!0),o(2),h("Saludos ",a.name,", es un placer ",f(8,16,a.gender,a.invitationMap)," a nuestro evento."),o(4),g("toggleable",!0),o(2),s(f(14,19,a.clients.length,a.clientsMap)),o(4),g("toggleable",!0),o(4),s(a.clients),o(4),s(v(26,22,a.clients,0,2)),o(5),s(v(31,26,a.clients,1,2)),o(5),s(v(36,30,a.clients,0,-1)),o(3),g("toggleable",!0),o(2),s(c(41,34,a.person)),o(3),g("toggleable",!0),o(),g("ngForOf",c(45,36,a.person)),o(3),g("toggleable",!0),o(2),B("Timer : ",c(50,38,a.myObservableTime),""))},dependencies:[V,k,Z,S,j,$,q,R,X,z]});let n=e;return n})();var M=function(n){return n[n.red=0]="red",n[n.black=1]="black",n[n.blue=2]="blue",n[n.green=3]="green",n}(M||{});var oe=(()=>{let e=class e{transform(m){return m==!0?"Vuela":"No Vuela"}};e.\u0275fac=function(l){return new(l||e)},e.\u0275pipe=E({name:"cantFly",type:e,pure:!0});let n=e;return n})();var le=(()=>{let e=class e{transform(m,l=!1){return l==!1?m.toLowerCase():m.toUpperCase()}};e.\u0275fac=function(l){return new(l||e)},e.\u0275pipe=E({name:"toggleCase",type:e,pure:!0});let n=e;return n})();var pe=(()=>{let e=class e{transform(m,l,a){switch(l){case"name":return a==!1?m.sort((d,u)=>d.name>u.name?1:-1):(a==!0,m.sort((d,u)=>d.name>u.name?-1:1));case"cantFly":return a==!1?m.sort((d,u)=>d.cantFly>u.cantFly?1:-1):(a==!0,m.sort((d,u)=>d.cantFly>u.cantFly?-1:1));case"color":return a==!1?m.sort((d,u)=>d.color>u.color?1:-1):(a==!0,m.sort((d,u)=>d.color>u.color?-1:1));default:return m}}};e.\u0275fac=function(l){return new(l||e)},e.\u0275pipe=E({name:"sortBy",type:e,pure:!0});let n=e;return n})();var ve=()=>({"min-width":"50rem"});function Ce(n,e){n&1&&(i(0,"tr")(1,"th"),r(2,"Name"),t(),i(3,"th"),r(4,"Cant Fly?"),t(),i(5,"th"),r(6,"Color"),t()())}function ye(n,e){if(n&1&&(i(0,"tr")(1,"td"),r(2),t(),i(3,"td"),r(4),p(5,"cantFly"),p(6,"titlecase"),t(),i(7,"td"),r(8),t()()),n&2){let P=e.$implicit;o(2),s(P.name),o(2),s(c(6,5,c(5,3,P.cantFly))),o(4),s(P.color)}}var me=(()=>{let e=class e{constructor(){this.isUpperCase=!1,this.heros=[{name:"Superman",cantFly:!0,color:M.blue},{name:"Daredevill",cantFly:!1,color:M.red},{name:"Batman",cantFly:!1,color:M.black},{name:"Green Litner",cantFly:!0,color:M.green}],this.orderBy="",this.filtroInverso=!0}toggleUpperCase(){this.isUpperCase=!this.isUpperCase}changeOrder(m){this.orderBy=m,this.filtroInverso=!this.filtroInverso}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=C({type:e,selectors:[["app-order"]],decls:16,vars:11,consts:[["header","Pipes Personalizados",1,"p-1"],[1,"p-toolbar-group-start"],["label","ToggleCase","icon","pi pi-search","styleClass","p-button-help",1,"mr-2",3,"onClick"],[1,"p-toolbar-group-end"],["label","Por nombre","icon","pi pi-sort","styleClass","p-button-danger",1,"mr-2",3,"onClick"],["label","Por Vuela","icon","pi pi-sort","styleClass","p-button-warning",1,"mr-2",3,"onClick"],["label","Por Color","icon","pi pi-sort","styleClass","p-button",1,"mr-2",3,"onClick"],["header","Tabla de SuperHeroes"],[3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"]],template:function(l,a){l&1&&(i(0,"p-panel",0)(1,"p"),r(2),p(3,"toggleCase"),t()(),i(4,"p-toolbar")(5,"div",1)(6,"p-button",2),y("onClick",function(){return a.toggleUpperCase()}),t()(),i(7,"div",3)(8,"p-button",4),y("onClick",function(){return a.changeOrder("name")}),t(),i(9,"p-button",5),y("onClick",function(){return a.changeOrder("cantFly")}),t(),i(10,"p-button",6),y("onClick",function(){return a.changeOrder("color")}),t()()(),i(11,"p-panel",7)(12,"p-table",8),p(13,"sortBy"),I(14,Ce,7,0,"ng-template",9)(15,ye,9,7,"ng-template",10),t()()),l&2&&(o(2),B(" Pipes Creados Por La Comunidad ",f(3,3,"nosotros",a.isUpperCase)," "),o(10),g("value",v(13,6,a.heros,a.orderBy,a.filtroInverso))("tableStyle",L(10,ve)))},dependencies:[W,k,S,ee,te,D,oe,le,pe]});let n=e;return n})();var Se=[{path:"",component:ne},{path:"Numbers",component:ae},{path:"Uncommon",component:re},{path:"Customs",component:me},{path:"**",redirectTo:""}],se=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=T({type:e}),e.\u0275inj=F({imports:[w.forChild(Se),w]});let n=e;return n})();var tt=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=T({type:e}),e.\u0275inj=F({imports:[Q,se,ie]});let n=e;return n})();export{tt as ProductsModule};