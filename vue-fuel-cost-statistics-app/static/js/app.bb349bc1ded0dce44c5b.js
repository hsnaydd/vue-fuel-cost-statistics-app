webpackJsonp([1],[,,,,,,,,,,function(t,e,a){function n(t){a(74)}var r=a(0)(a(30),a(97),n,null,null);t.exports=r.exports},,,,,,,,,,function(t,e,a){"use strict";var n=a(6),r=a(104),i=a(88),s=a.n(i),o=a(86),l=a.n(o),u=a(81),c=a.n(u),d=a(78),v=a.n(d),m=a(79),f=a.n(m),p=a(82),_=a.n(p);n.a.use(r.a),e.a=new r.a({mode:"history",routes:[{path:"/",name:"Statistics",component:s.a},{path:"/routes",name:"Routes",component:l.a},{path:"/entries",name:"Entries",component:c.a},{path:"/add-entry",name:"AddEntry",component:v.a},{path:"/entry/:id",name:"EditEntry",component:f.a,props:!0},{path:"*",component:n.a.component("NotFound",_.a)}]})},function(t,e,a){"use strict";var n=a(6),r=a(2),i=a(106),s=a.n(i),o=a(26),l=a(25);n.a.use(r.c),e.a=new r.c.Store({modules:{routes:o.a,entries:l.a},plugins:[s()()]})},,function(t,e,a){function n(t){a(73)}var r=a(0)(a(27),a(94),n,null,null);t.exports=r.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),r=a(22),i=a(23),s=a.n(i),o=a(20),l=a(21);n.a.config.productionTip=!1,n.a.use(r.a,{classes:!0,classNames:{invalid:"is-invalid"}}),n.a.filter("currency",{read:function(t,e){return t.toFixed(2)+" "+e},write:function(t){return t||"number"==typeof t?t.toFixed(2):0}}),new n.a({el:"#app",store:l.a,router:o.a,template:"<App/>",components:{App:s.a}})},function(t,e,a){"use strict";var n,r=a(11),i=a.n(r),s=a(1),o=a.n(s),l={ADD_ENTRY:"ADD_ENTRY",EDIT_ENTRY:"EDIT_ENTRY",DELETE_ENTRY:"DELETE_ENTRY"},u={lastEntryId:0,entries:[]},c={entries:function(t){return t.entries},getEntryById:function(t){return function(e){return t.entries.find(function(t){return t.id===e})}}},d={addEntry:function(t,e){(0,t.commit)(l.ADD_ENTRY,e)},editEntry:function(t,e){(0,t.commit)(l.EDIT_ENTRY,e)},deleteEntry:function(t,e){(0,t.commit)(l.DELETE_ENTRY,e)}},v=(n={},i()(n,l.ADD_ENTRY,function(t,e){t.lastEntryId+=1,t.entries.push(o()({id:t.lastEntryId},e))}),i()(n,l.EDIT_ENTRY,function(t,e){t.entries=t.entries.map(function(t){return t.id===e.entry.id?e.entry:t})}),i()(n,l.DELETE_ENTRY,function(t,e){t.entries=t.entries.filter(function(t){return t.id!==e.entryId})}),n);e.a={namespaced:!0,state:u,getters:c,actions:d,mutations:v}},function(t,e,a){"use strict";var n,r=a(11),i=a.n(r),s={ADD_ROUTE:"ADD_ROUTE",EDIT_ROUTE:"EDIT_ROUTE",DELETE_ROUTE:"DELETE_ROUTE"},o={lastRouteId:0,routes:[]},l={routes:function(t){return t.routes},getRouteById:function(t){return function(e){return t.routes.find(function(t){return t.id===e})}}},u={addRoute:function(t,e){(0,t.commit)(s.ADD_ROUTE,e)},editRoute:function(t,e){(0,t.commit)(s.EDIT_ROUTE,e)},deleteRoute:function(t,e){(0,t.commit)(s.DELETE_ROUTE,e)}},c=(n={},i()(n,s.ADD_ROUTE,function(t,e){t.lastRouteId+=1,t.routes.push({id:t.lastRouteId,name:e})}),i()(n,s.EDIT_ROUTE,function(t,e){t.routes=t.routes.map(function(t){return t.id===e.route.id?e.route:t})}),i()(n,s.DELETE_ROUTE,function(t,e){t.routes=t.routes.filter(function(t){return t.id!==e.routeId})}),n);e.a={namespaced:!0,state:o,getters:l,actions:u,mutations:c}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{isNavbarActive:!1}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),r=a.n(n),i=a(2);e.default={data:function(){return{model:{route:null}}},components:{},computed:r()({},a.i(i.a)("routes",["routes"])),methods:r()({},a.i(i.b)("entries",{addEntryAction:"addEntry"}),{save:function(){var t=this;this.$validator.validateAll().then(function(e){e&&(t.addEntryAction(t.model),t.$router.push("Entries"))})}})}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),r=a.n(n),i=a(2);e.default={props:["id"],data:function(){return{model:{route:null}}},mounted:function(){this.model=this.getEntryById(parseInt(this.id,10))},components:{},computed:r()({},a.i(i.a)("routes",["routes"]),a.i(i.a)("entries",["getEntryById"])),methods:r()({},a.i(i.b)("entries",{editEntryAction:"editEntry"}),{save:function(){var t=this;this.$validator.validateAll().then(function(e){e&&(t.editEntryAction({entry:t.model}),t.$router.push({name:"Entries"}))})}})}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{text:{type:String,default:"İçerik bulunamadı"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),r=a.n(n),i=a(2);e.default={props:["entry"],computed:r()({},a.i(i.a)("routes",["getRouteById"]),{cost:function(){return(this.entry.distance*this.entry.averageFuel*this.entry.fuelPrice/100).toFixed(2)}}),methods:r()({},a.i(i.b)("entries",{deleteEntryAction:"deleteEntry"}),{deleteEntry:function(){window.confirm("Kayıt silinecek, emin misiniz?")&&this.deleteEntryAction({entryId:this.entry.id})}})}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),r=a.n(n),i=a(2),s=a(10),o=a.n(s),l=a(80),u=a.n(l);e.default={data:function(){return{}},components:{EmptyState:o.a,Entry:u.a},computed:r()({},a.i(i.a)("entries",["entries"])),methods:r()({},a.i(i.b)("entries",{deleteEntryAction:"deleteEntry"}))}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["route","onEditButtonPressed","onDeleteButtonPressed"]}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),r=a.n(n);e.default={props:["route","onSubmit","onCancel"],data:function(){return{routeName:this.$props.route?this.$props.route.name:""}},methods:{onSubmitForm:function(){this.$props.onSubmit(r()({},this.route,{name:this.routeName}))}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(83),r=a.n(n),i=a(84),s=a.n(i);e.default={props:["route","onEditPressed","onDeletePressed"],components:{Default:r.a,Edit:s.a},data:function(){return{editable:!1}},methods:{activeEditable:function(){this.editable=!0},deactiveEditable:function(){this.editable=!1},onEdit:function(t){this.$props.onEditPressed(t),this.deactiveEditable()}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),r=a.n(n),i=a(2),s=a(85),o=a.n(s),l=a(10),u=a.n(l);e.default={data:function(){return{newRouteName:"",isAddRouteActive:!1}},components:{Route:o.a,EmptyState:u.a},computed:r()({},a.i(i.a)("routes",["routes"])),methods:r()({},a.i(i.b)("routes",{addRouteAction:"addRoute",editRouteAction:"editRoute",deleteRouteAction:"deleteRoute"}),{toggleAddRoute:function(){this.isAddRouteActive=!this.isAddRouteActive},addRoute:function(){this.newRouteName&&(this.addRouteAction(this.newRouteName),this.newRouteName="")},editRoute:function(t){this.editRouteAction({route:t})},deleteRoute:function(t){this.deleteRouteAction({routeId:t})}})}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),r=a.n(n),i=a(2);e.default={props:["entry"],computed:r()({},a.i(i.a)("routes",["getRouteById"]),{cost:function(){return(this.entry.distance*this.entry.averageFuel*this.entry.fuelPrice/100).toFixed(2)}})}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(42),r=a.n(n),i=a(1),s=a.n(i),o=a(2),l=a(89),u=a.n(l),c=a(10),d=a.n(c),v=a(87),m=a.n(v);e.default={data:function(){return{filters:{route:"",duration:""},entryList:[],durations:[{id:1,label:"Son 1 gün",days:1},{id:2,label:"Son 7 gün",days:7},{id:3,label:"Son 30 gün",days:30}]}},components:{Card:u.a,EmptyState:d.a,ListItem:m.a},created:function(){var t=this.$route.query;this.updateFilters(t)},beforeRouteUpdate:function(t,e,a){this.updateFilters(t.query),a()},computed:s()({},a.i(o.a)("entries",["entries"]),a.i(o.a)("routes",["routes","getRouteById"]),{totalCost:function(){var t=this,e=this.entryList.reduce(function(e,a){return e+=t.calculateCost(a)},0);return e||0},averageCost:function(){return this.totalCost?this.totalCost/this.entryList.length:0},averageCruisingTime:function(){var t=this.entryList.reduce(function(t,e){return e.cruisingTime&&(t.total+=e.cruisingTime,t.count++),t},{total:0,count:0}),e=Math.round(t.total/t.count);return isNaN(e)?"-":e}}),methods:{calculateCost:function(t){return t.distance*t.averageFuel*t.fuelPrice/100},toFixed:function(t){return!t||isNaN(t)?0:t.toFixed(2)},updateFilters:function(t){var e=this;r()(t).forEach(function(a){var n=t[a];e.filters[a]=n?parseInt(t[a]):""}),this.filter()},filter:function(){var t=this,e=this.filters,a=this.durations,n=new Date,r=void 0,i=void 0;e.duration&&(r=a.find(function(t){return t.id===e.duration}),i=n.setDate(n.getDate()-r.days)),this.entryList=this.entries.filter(function(a){var n=new Date(a.date).getTime();if(!(e.route&&a.route!==t.filters.route||e.duration&&n<=i))return a})},onFilterDuration:function(){this.$router.push({query:s()({},this.$route.query,{duration:""===this.filters.duration?void 0:this.filters.duration})})},onFilterRoute:function(){this.$router.push({query:s()({},this.$route.query,{route:""===this.filters.route?void 0:this.filters.route})})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Card",props:["title","count"]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,a){var n=a(0)(a(28),a(96),null,null,null);t.exports=n.exports},function(t,e,a){var n=a(0)(a(29),a(95),null,null,null);t.exports=n.exports},function(t,e,a){var n=a(0)(a(31),a(103),null,null,null);t.exports=n.exports},function(t,e,a){function n(t){a(75)}var r=a(0)(a(32),a(98),n,null,null);t.exports=r.exports},function(t,e,a){var n=a(0)(null,a(100),null,null,null);t.exports=n.exports},function(t,e,a){var n=a(0)(a(33),a(102),null,null,null);t.exports=n.exports},function(t,e,a){var n=a(0)(a(34),a(93),null,null,null);t.exports=n.exports},function(t,e,a){var n=a(0)(a(35),a(90),null,null,null);t.exports=n.exports},function(t,e,a){function n(t){a(72)}var r=a(0)(a(36),a(92),n,null,null);t.exports=r.exports},function(t,e,a){var n=a(0)(a(37),a(99),null,null,null);t.exports=n.exports},function(t,e,a){var n=a(0)(a(38),a(101),null,null,null);t.exports=n.exports},function(t,e,a){function n(t){a(71)}var r=a(0)(a(39),a(91),n,null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.editable?a("Edit",{attrs:{route:t.route,onSubmit:t.onEdit,onCancel:t.deactiveEditable}}):a("Default",{attrs:{route:t.route,onEditButtonPressed:t.activeEditable,onDeleteButtonPressed:t.onDeletePressed}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card bg-light mb-3"},[a("div",{staticClass:"card-header"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-stats"},[t._t("icon"),t._v(" "),a("span",{staticClass:"card-count"},[t._v(t._s(t.count))])],2)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex justify-content-between align-items-center px-2 py-2"},[a("h1",{staticClass:"border-bottom-0 mb-0"},[t._v("Yollarım")]),t._v(" "),a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.toggleAddRoute}},[t._v("Ekle")])]),t._v(" "),t.isAddRouteActive?a("form",{staticClass:"c-add-route-form p-2 border mb-2",on:{submit:function(e){e.preventDefault(),t.addRoute(e)}}},[a("div",{staticClass:"form-row align-items-center"},[a("div",{staticClass:"col-sm-3"},[a("label",{staticClass:"sr-only",attrs:{for:"inlineFormInputName"}},[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newRouteName,expression:"newRouteName"}],staticClass:"form-control mb-2 mb-sm-0",attrs:{type:"text",placeholder:"Route Name"},domProps:{value:t.newRouteName},on:{input:function(e){e.target.composing||(t.newRouteName=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-auto ml-auto"},[a("button",{staticClass:"btn btn-secondary btn-sm",attrs:{type:"button"},on:{click:t.toggleAddRoute}},[t._v("İptal")]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"submit",disabled:!t.newRouteName}},[t._v("Kaydet")])])])]):t._e(),t._v(" "),t.routes.length?t._e():a("EmptyState"),t._v(" "),t.routes.length?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),a("tbody",[t._l(t.routes,function(e){return[a("Route",{key:e.id,attrs:{route:e,onEditPressed:t.editRoute,onDeletePressed:t.deleteRoute}})]})],2)])]):t._e()],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"30"}},[t._v("#")]),t._v(" "),a("th",[t._v("Adı")]),t._v(" "),a("th")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{attrs:{colspan:"3"}},[a("form",{staticClass:"form-row align-items-center",on:{submit:function(e){e.preventDefault(),t.onSubmitForm(e)}}},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.routeName,expression:"routeName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.routeName},on:{input:function(e){e.target.composing||(t.routeName=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-auto ml-auto"},[a("button",{staticClass:"btn btn-secondary btn-sm",attrs:{type:"button"},on:{click:t.onCancel}},[t._v("İptal")]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"submit"}},[t._v("Kaydet")])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",[a("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark"},[a("a",{staticClass:"navbar-brand",attrs:{href:""}},[t._v("Yakıt Maliyet İzleme")]),t._v(" "),a("button",{staticClass:"navbar-toggler d-sm-none",attrs:{type:"button","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:function(e){t.isNavbarActive=!t.isNavbarActive}}},[a("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",class:{show:t.isNavbarActive}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("İstatistikler")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/routes"}},[t._v("Yollarım")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/entries"}},[t._v("Kayıtlarım")])],1)])])])]),t._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("nav",{staticClass:"col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar"},[a("ul",{staticClass:"nav nav-pills flex-column"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("İstatistikler")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/routes"}},[t._v("Yollarım")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/entries"}},[t._v("Kayıtlarım")])],1)])]),t._v(" "),a("main",{staticClass:"col-sm-9 ml-sm-auto col-md-10 pt-3",attrs:{role:"main"}},[a("router-view")],1)])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("hr"),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.save(e)}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"route"}},[t._v("Yol*")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.model.route,expression:"model.route"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{id:"route"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.model.route=e.target.multiple?a:a[0]}}},[a("option",{attrs:{selected:""},domProps:{value:null}},[t._v("Seçiniz")]),t._v(" "),t._l(t.routes,function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2),t._v(" "),a("div",{staticClass:"invalid-feedback"},[t._v("\n            Bu alan zorunludur.\n          ")])])]),t._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"date"}},[t._v("Tarih*")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.date,expression:"model.date"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{id:"date",type:"date"},domProps:{value:t.model.date},on:{input:function(e){e.target.composing||(t.model.date=e.target.value)}}}),t._v(" "),a("div",{staticClass:"invalid-feedback"},[t._v("\n            Bu alan zorunludur.\n          ")])])])]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"fuel-price"}},[t._v("Yakıt Litre Fiyatı*")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.model.fuelPrice,expression:"model.fuelPrice",modifiers:{number:!0}},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"fuel-price",id:"fuel-price"},domProps:{value:t.model.fuelPrice},on:{input:function(e){e.target.composing||(t.model.fuelPrice=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),a("span",{staticClass:"input-group-addon"},[t._v(" TL")])]),t._v(" "),a("div",{staticClass:"invalid-feedback",class:{"d-block":t.errors.has("fuel-price")}},[t._v("\n            Bu alan zorunludur.\n          ")])])]),t._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"distance"}},[t._v("Katedilen Mesafe*")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.model.distance,expression:"model.distance",modifiers:{number:!0}},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"distance",id:"distance"},domProps:{value:t.model.distance},on:{input:function(e){e.target.composing||(t.model.distance=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),a("span",{staticClass:"input-group-addon"},[t._v("km")])]),t._v(" "),a("div",{staticClass:"invalid-feedback",class:{"d-block":t.errors.has("fuel-price")}},[t._v("\n            Bu alan zorunludur.\n          ")])])])]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"average-fuel"}},[t._v("Ortalama Yakıt*")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.model.averageFuel,expression:"model.averageFuel",modifiers:{number:!0}},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",id:"average-fuel",name:"average-fuel"},domProps:{value:t.model.averageFuel},on:{input:function(e){e.target.composing||(t.model.averageFuel=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),a("span",{staticClass:"input-group-addon"},[t._v("lt/100 km")])]),t._v(" "),a("div",{staticClass:"invalid-feedback",class:{"d-block":t.errors.has("fuel-price")}},[t._v("\n            Bu alan zorunludur.\n          ")])])]),t._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"cruising-time"}},[t._v("Yolculuk Süresi")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.model.cruisingTime,expression:"model.cruisingTime",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"text",id:"cruising-time",name:"cruising-time"},domProps:{value:t.model.cruisingTime},on:{input:function(e){e.target.composing||(t.model.cruisingTime=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),a("span",{staticClass:"input-group-addon"},[t._v("dk")])])])])]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-between align-items-center px-2 py-2"},[a("h1",{staticClass:"border-bottom-0 mb-0"},[t._v("Kayıt Düzenle")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col col-lg-2 col-md-3 ml-auto"},[a("button",{staticClass:"btn btn-primary btn-block ml-auto",attrs:{type:"submit"}},[t._v("Kaydet")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.routes.length?a("div",[t._m(0),t._v(" "),a("hr"),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.save(e)}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"route"}},[t._v("Yol*")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.model.route,expression:"model.route"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{id:"route"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.model.route=e.target.multiple?a:a[0]}}},[a("option",{attrs:{selected:""},domProps:{value:null}},[t._v("Seçiniz")]),t._v(" "),t._l(t.routes,function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2),t._v(" "),a("div",{staticClass:"invalid-feedback"},[t._v("\n            Bu alan zorunludur.\n          ")])])]),t._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"date"}},[t._v("Tarih*")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.date,expression:"model.date"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{id:"date",type:"date"},domProps:{value:t.model.date},on:{input:function(e){e.target.composing||(t.model.date=e.target.value)}}}),t._v(" "),a("div",{staticClass:"invalid-feedback"},[t._v("\n            Bu alan zorunludur.\n          ")])])])]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"fuel-price"}},[t._v("Yakıt Litre Fiyatı*")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.model.fuelPrice,expression:"model.fuelPrice",modifiers:{number:!0}},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"fuel-price",id:"fuel-price"},domProps:{value:t.model.fuelPrice},on:{input:function(e){e.target.composing||(t.model.fuelPrice=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),a("span",{staticClass:"input-group-addon"},[t._v(" TL")])]),t._v(" "),a("div",{staticClass:"invalid-feedback",class:{"d-block":t.errors.has("fuel-price")}},[t._v("\n            Bu alan zorunludur.\n          ")])])]),t._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"distance"}},[t._v("Katedilen Mesafe*")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.model.distance,expression:"model.distance",modifiers:{number:!0}},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"distance",id:"distance"},domProps:{value:t.model.distance},on:{input:function(e){e.target.composing||(t.model.distance=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),a("span",{staticClass:"input-group-addon"},[t._v("km")])]),t._v(" "),a("div",{staticClass:"invalid-feedback",class:{"d-block":t.errors.has("fuel-price")}},[t._v("\n            Bu alan zorunludur.\n          ")])])])]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"average-fuel"}},[t._v("Ortalama Yakıt*")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.model.averageFuel,expression:"model.averageFuel",modifiers:{number:!0}},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",id:"average-fuel",name:"average-fuel"},domProps:{value:t.model.averageFuel},on:{input:function(e){e.target.composing||(t.model.averageFuel=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),a("span",{staticClass:"input-group-addon"},[t._v("lt/100 km")])]),t._v(" "),a("div",{staticClass:"invalid-feedback",class:{"d-block":t.errors.has("fuel-price")}},[t._v("\n            Bu alan zorunludur.\n          ")])])]),t._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"cruising-time"}},[t._v("Yolculuk Süresi")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.model.cruisingTime,expression:"model.cruisingTime",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"text",id:"cruising-time",name:"cruising-time"},domProps:{value:t.model.cruisingTime},on:{input:function(e){e.target.composing||(t.model.cruisingTime=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),a("span",{staticClass:"input-group-addon"},[t._v("dk")])])])])]),t._v(" "),t._m(1)])]):a("div",{staticClass:"alert alert-danger"},[t._v("\n  Kayıt ekleyebilmek için lütfen önce\n  "),a("router-link",{staticClass:"alert-link",attrs:{to:"/routes"}},[t._v("yol")]),t._v(" ekleyiniz!\n")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-between align-items-center px-2 py-2"},[a("h1",{staticClass:"border-bottom-0 mb-0"},[t._v("Kayıt Ekle")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col col-lg-2 col-md-3 ml-auto"},[a("button",{staticClass:"btn btn-primary btn-block ml-auto",attrs:{type:"submit"}},[t._v("Kaydet")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"c-empty-state p-5"},[a("svg",{staticClass:"c-empty-state__icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 38.75"}},[a("path",{attrs:{d:"M79.062 17.164l.43.784-.83.46-.427-.78-.776.434-.462-.83.78-.436-.43-.784.83-.46.428.78.776-.434.46.83-.78.436zm12.944 3.725l.43.783-.83.46-.427-.78-.778.434-.46-.83.78-.436-.43-.783.83-.46.428.78.776-.434.46.83-.78.436zM3.59 23.883c-4.3-.268-4.83-7.878-1.185-10.086C-1.072 12.058 2.4 1.644 8.28 3.44c2.674-5.22 8.86-3.356 10.275-1.464 1.107-2.807 9.61.22 5.932 6.342L13.655 26.345c-4.258 6.7-11.4.442-10.066-2.46zM14.51 7.837c.33-.55.056-1.318-.61-1.72-.103-.06-.21-.105-.316-.143l-1.59 1.194c.086.357.332.705.713.934.667.4 1.476.282 1.804-.265zM7.85 19.023c.327-.548.053-1.318-.614-1.72-.38-.228-.803-.28-1.16-.19L5.77 19.08c.083.077.172.148.274.21.667.4 1.475.283 1.805-.265zm5.516-1.67c-.148-.09-.393-.28-.64-.56-.71-.806-.882-1.73-.207-2.864.35-.59.76-.944 1.22-1.117.55-.206 1.162-.152 1.76.072.2.075.345.148.414.19l.577-.97c-.124-.074-.33-.178-.6-.28-.827-.31-1.7-.386-2.54-.07-.705.264-1.313.79-1.79 1.592-.953 1.598-.683 3.05.33 4.197.33.375.662.634.9.778l.576-.97zm10.302-2.31c-1.464-4.667 6.386-8.326 10.21-5.36.43-4.393 12.88-4.95 13.368 2.014 6.622.71 7.162 8.025 5.733 10.294 3.424.032 3.676 10.277-4.31 8.868l-23.514-4.146c-8.834-1.787-5.106-11.903-1.488-11.67zm19.795 5.554c.715.126 1.42-.478 1.572-1.348.024-.135.03-.265.025-.394l-1.912-1.2c-.344.238-.613.64-.7 1.136-.155.87.3 1.68 1.015 1.805zM31.956 18.56c.714.126 1.42-.478 1.572-1.348.088-.497-.027-.966-.27-1.306l-2.206.473c-.048.12-.088.242-.11.376-.155.87.3 1.678 1.014 1.804zm1.437 4.99c.002-.012.076-.113.37-.243.662-.294 1.857-.35 3.702-.023 1.845.325 2.95.785 3.47 1.288.232.223.267.342.265.355l1.065.187c.063-.36-.08-.85-.582-1.332-.7-.674-1.993-1.213-4.03-1.572-2.036-.36-3.435-.295-4.323.1-.636.28-.938.69-1.002 1.052l1.065.188zm62.456-1.398c.878 4.35-6.554 6.907-9.723 3.867-.806 3.924-12.095 3.244-11.875-3.086-5.91-1.268-5.703-7.922-4.197-9.835-3.09-.353-2.345-9.623 4.73-7.595l20.828 5.973c7.804 2.45 3.48 11.227.236 10.674zm-4-8.377c-.23.81-.815 1.29-1.374 1.13-.233-.067-.316-.156-.507-.505-.303-.55-.54-.804-1.076-.958-.537-.154-.872-.063-1.42.243-.346.194-.463.226-.696.16-.234-.068-.316-.157-.507-.505-.3-.55-.537-.805-1.074-.96-.537-.153-.872-.062-1.42.245-.346.194-.464.226-.697.16-.536-.155-.73-.822-.49-1.666l-.91-.262c-.368 1.286-.01 2.51 1.137 2.84.538.153.873.062 1.42-.244.347-.194.464-.226.697-.16.233.068.316.157.507.505.302.55.538.803 1.076.958.537.154.872.063 1.42-.244.346-.194.463-.226.696-.16.233.068.316.157.507.505.3.55.537.804 1.074.958 1.15.33 2.186-.524 2.547-1.783l-.91-.26z"}})]),t._v(" "),a("span",{staticClass:"c-empty-state__text"},[t._v(t._s(t.text))])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex justify-content-between align-items-center px-2 py-2"},[a("h1",{staticClass:"border-bottom-0 mb-0"},[t._v("Kayıtlarım")]),t._v(" "),a("router-link",{staticClass:"btn btn-success",attrs:{to:"/add-entry"}},[t._v("Ekle")])],1),t._v(" "),t.entries.length?t._e():a("EmptyState",{attrs:{text:"Henüz hiç kayıdınız bulunmamaktadır."}}),t._v(" "),t.entries.length?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-striped table-bordered"},[t._m(0),t._v(" "),a("tbody",[t._l(t.entries,function(t){return[a("Entry",{key:t.id,attrs:{entry:t}})]})],2)])]):t._e()],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"30"}},[t._v("#")]),t._v(" "),a("th",[t._v("Yol Adı")]),t._v(" "),a("th",[t._v("Mesafe")]),t._v(" "),a("th",[t._v("Süre")]),t._v(" "),a("th",[t._v("Tarih")]),t._v(" "),a("th",[t._v("Ortalama Yakıt")]),t._v(" "),a("th",[t._v("Yakıt Birim Fiyat")]),t._v(" "),a("th",[t._v("Maliyet")]),t._v(" "),a("th")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v(t._s(t.entry.id))]),t._v(" "),a("td",[t._v(t._s(t.getRouteById(t.entry.route).name))]),t._v(" "),a("td",[t._v(t._s(t.entry.distance)+" km")]),t._v(" "),a("td",[t._v(t._s(t.entry.cruisingTime?t.entry.cruisingTime+" dk":"-"))]),t._v(" "),a("td",[t._v(t._s(t.entry.date))]),t._v(" "),a("td",[t._v(t._s(t.entry.averageFuel)+" lt/100km")]),t._v(" "),a("td",[t._v(t._s(t.entry.fuelPrice)+" TL")]),t._v(" "),a("td",[t._v(t._s(t.cost)+" TL")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",[t._v("\n  Sayfa bulunamadı!")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("İstatistikler")]),t._v(" "),a("div",{staticClass:"row justify-content-end align-items-center mb-4"},[a("div",{staticClass:"col-auto"},[t._v("\n      Filtreler\n    ")]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("label",{staticClass:"sr-only",attrs:{for:"filter-route"}},[t._v("Yol")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.route,expression:"filters.route"}],staticClass:"form-control",attrs:{id:"filter-route"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.filters.route=e.target.multiple?a:a[0]},t.onFilterRoute]}},[a("option",{attrs:{value:""}},[t._v("Tüm Yollar")]),t._v(" "),t._l(t.routes,function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2)]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("label",{staticClass:"sr-only",attrs:{for:"filter-duration"}},[t._v("Yol")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.duration,expression:"filters.duration"}],staticClass:"form-control",attrs:{id:"filter-duration"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.filters.duration=e.target.multiple?a:a[0]},t.onFilterDuration]}},[a("option",{attrs:{value:""}},[t._v("Tüm Zamanlar")]),t._v(" "),t._l(t.durations,function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.label))])})],2)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("Card",{attrs:{title:"Ortalama Yakıt Maliyeti",count:t.toFixed(t.averageCost)+" TL"}},[a("svg",{attrs:{slot:"icon",width:"48",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 71"},slot:"icon"},[a("g",{attrs:{fill:"#868e96","fill-rule":"nonzero"}},[a("path",{attrs:{d:"M28.5 60.7c0-5.2-4.2-9.4-9.4-9.4s-9.4 4.2-9.4 9.4 4.2 9.4 9.4 9.4 9.4-4.2 9.4-9.4zM89.9 60.7c0-5.2-4.2-9.4-9.4-9.4S71 55.5 71 60.7s4.2 9.4 9.4 9.4 9.5-4.2 9.5-9.4zM34.4 20.5c-1.2-2-3.3-3.5-5.8-3.7V10l4.4 1.1c.2 0 .3.1.5.1.9 0 1.7-.6 1.9-1.5.3-1.1-.4-2.2-1.5-2.4L28.5 6V2c0-1.1-.9-2-2-2s-2 .9-2 2v3.5c-2.3.2-4.3 1.4-5.6 3.2-.9 1.3-1.3 2.8-1.3 4.4 0 1.5.4 2.8 1.1 4 1.2 2 3.3 3.5 5.8 3.7v6.8l-4.4-1.1c-.2 0-.3-.1-.5-.1-.9 0-1.7.6-1.9 1.5-.3 1.1.4 2.2 1.5 2.4l5.4 1.3v4c0 1.1.9 2 2 2s2-.9 2-2v-3.5c2.3-.2 4.3-1.4 5.6-3.2.9-1.3 1.3-2.8 1.3-4.4 0-1.4-.4-2.8-1.1-4zM21.7 13c0-.6.1-1.1.4-1.6.1-.2.2-.3.3-.5.5-.8 1.3-1.3 2.3-1.4v7.2c-1.8-.5-3-2-3-3.7zm6.9 15.1v-7.2c1.3.3 2.3 1.2 2.7 2.4.1.4.2.8.2 1.3 0 .8-.2 1.5-.6 2.1-.3.4-.6.7-1 .9-.4.2-.8.4-1.3.5z"}}),t._v(" "),a("path",{attrs:{d:"M99.8 46.7c-1.2-6.4-5.1-8.3-13.9-10.4-8.3-2-15-5.5-21.5-9-8.6-4.6-16.8-8.9-27.6-8.9h-.1c.1.2.3.4.4.6 1 1.7 1.6 3.6 1.6 5.6 0 2.2-.6 4.2-1.8 6-1.2 1.8-3 3.2-5.1 3.9v1.2c0 2.8-2.2 5-5 5s-5-2.2-5-5V34l-3.1-.8c-2.7-.7-4.3-3.4-3.6-6.1.6-2.2 2.5-3.8 4.8-3.8.4 0 .8.1 1.2.1l.7.2V23c-2.2-.9-4.1-2.4-5.4-4.5v-.1C7.4 18.8.2 26.2.2 35.3v11c0 4.9 2.7 9.1 6.8 11.3 1.4-5.5 6.4-9.5 12.3-9.5 6.4 0 11.8 4.8 12.6 11.1h36.3c.8-6.2 6.1-11.1 12.6-11.1 6.4 0 11.8 4.8 12.6 11.1h.8c1.1 0 2.3-1 3.1-1.8 2.1-2.8 3.2-6.8 2.5-10.7z"}})])])])],1),t._v(" "),a("div",{staticClass:"col"},[a("Card",{attrs:{title:"Toplam Yakıt Maliyeti",count:t.toFixed(t.totalCost)+" TL"}},[a("svg",{attrs:{slot:"icon",width:"48",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 71"},slot:"icon"},[a("g",{attrs:{fill:"#868e96","fill-rule":"nonzero"}},[a("path",{attrs:{d:"M28.5 60.7c0-5.2-4.2-9.4-9.4-9.4s-9.4 4.2-9.4 9.4 4.2 9.4 9.4 9.4 9.4-4.2 9.4-9.4zM89.9 60.7c0-5.2-4.2-9.4-9.4-9.4S71 55.5 71 60.7s4.2 9.4 9.4 9.4 9.5-4.2 9.5-9.4zM34.4 20.5c-1.2-2-3.3-3.5-5.8-3.7V10l4.4 1.1c.2 0 .3.1.5.1.9 0 1.7-.6 1.9-1.5.3-1.1-.4-2.2-1.5-2.4L28.5 6V2c0-1.1-.9-2-2-2s-2 .9-2 2v3.5c-2.3.2-4.3 1.4-5.6 3.2-.9 1.3-1.3 2.8-1.3 4.4 0 1.5.4 2.8 1.1 4 1.2 2 3.3 3.5 5.8 3.7v6.8l-4.4-1.1c-.2 0-.3-.1-.5-.1-.9 0-1.7.6-1.9 1.5-.3 1.1.4 2.2 1.5 2.4l5.4 1.3v4c0 1.1.9 2 2 2s2-.9 2-2v-3.5c2.3-.2 4.3-1.4 5.6-3.2.9-1.3 1.3-2.8 1.3-4.4 0-1.4-.4-2.8-1.1-4zM21.7 13c0-.6.1-1.1.4-1.6.1-.2.2-.3.3-.5.5-.8 1.3-1.3 2.3-1.4v7.2c-1.8-.5-3-2-3-3.7zm6.9 15.1v-7.2c1.3.3 2.3 1.2 2.7 2.4.1.4.2.8.2 1.3 0 .8-.2 1.5-.6 2.1-.3.4-.6.7-1 .9-.4.2-.8.4-1.3.5z"}}),t._v(" "),a("path",{attrs:{d:"M99.8 46.7c-1.2-6.4-5.1-8.3-13.9-10.4-8.3-2-15-5.5-21.5-9-8.6-4.6-16.8-8.9-27.6-8.9h-.1c.1.2.3.4.4.6 1 1.7 1.6 3.6 1.6 5.6 0 2.2-.6 4.2-1.8 6-1.2 1.8-3 3.2-5.1 3.9v1.2c0 2.8-2.2 5-5 5s-5-2.2-5-5V34l-3.1-.8c-2.7-.7-4.3-3.4-3.6-6.1.6-2.2 2.5-3.8 4.8-3.8.4 0 .8.1 1.2.1l.7.2V23c-2.2-.9-4.1-2.4-5.4-4.5v-.1C7.4 18.8.2 26.2.2 35.3v11c0 4.9 2.7 9.1 6.8 11.3 1.4-5.5 6.4-9.5 12.3-9.5 6.4 0 11.8 4.8 12.6 11.1h36.3c.8-6.2 6.1-11.1 12.6-11.1 6.4 0 11.8 4.8 12.6 11.1h.8c1.1 0 2.3-1 3.1-1.8 2.1-2.8 3.2-6.8 2.5-10.7z"}})])])])],1),t._v(" "),a("div",{staticClass:"col"},[a("Card",{attrs:{title:"Ortalama yolculuk süresi",count:t.averageCruisingTime+" dk"}},[a("svg",{attrs:{slot:"icon",width:"32",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 56 56"},slot:"icon"},[a("path",{attrs:{fill:"#868e96","fill-rule":"nonzero",d:"M28 0C12.56 0 0 12.56 0 28s12.56 28 28 28 28-12.56 28-28S43.44 0 28 0zm0 4c13.28 0 24 10.722 24 24S41.28 52 28 52C14.722 52 4 41.278 4 28S14.722 4 28 4zm0 6c-1.105 0-2 .895-2 2v16c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2s-.895-2-2-2H30V12c0-1.105-.895-2-2-2z"}})])])],1)]),t._v(" "),t.entryList.length?t._e():a("EmptyState",{attrs:{text:"Yeterli kayıdınız bulunmamaktadır."}}),t._v(" "),t.entryList.length?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-striped table-bordered"},[t._m(0),t._v(" "),a("tbody",[t._l(t.entryList,function(t){return[a("ListItem",{key:t.id,attrs:{entry:t}})]})],2)])]):t._e()],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"30"}},[t._v("#")]),t._v(" "),a("th",[t._v("Yol Adı")]),t._v(" "),a("th",[t._v("Mesafe")]),t._v(" "),a("th",[t._v("Süre")]),t._v(" "),a("th",[t._v("Tarih")]),t._v(" "),a("th",[t._v("Ortalama Yakıt")]),t._v(" "),a("th",[t._v("Yakıt Birim Fiyat")]),t._v(" "),a("th",[t._v("Maliyet")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v(t._s(t.route.id))]),t._v(" "),a("td",[t._v(t._s(t.route.name))]),t._v(" "),a("td",{attrs:{align:"right"}},[a("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button"},on:{click:t.onEditButtonPressed}},[t._v("Düzenle")]),t._v(" "),a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(e){t.onDeleteButtonPressed(t.route.id)}}},[t._v("Sil")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v(t._s(t.entry.id))]),t._v(" "),a("td",[t._v(t._s(t.getRouteById(t.entry.route).name))]),t._v(" "),a("td",[t._v(t._s(t.entry.distance)+" km")]),t._v(" "),a("td",[t._v(t._s(t.entry.cruisingTime?t.entry.cruisingTime+" dk":"-"))]),t._v(" "),a("td",[t._v(t._s(t.entry.date))]),t._v(" "),a("td",[t._v(t._s(t.entry.averageFuel)+" lt/100km")]),t._v(" "),a("td",[t._v(t._s(t.entry.fuelPrice)+" TL")]),t._v(" "),a("td",[t._v(t._s(t.cost)+" TL")]),t._v(" "),a("td",{attrs:{align:"right"}},[a("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:{name:"EditEntry",params:{id:t.entry.id}}}},[t._v("Düzenle")]),t._v(" "),a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:t.deleteEntry}},[t._v("Sil")])],1)])},staticRenderFns:[]}}],[24]);
//# sourceMappingURL=app.bb349bc1ded0dce44c5b.js.map