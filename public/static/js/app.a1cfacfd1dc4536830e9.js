webpackJsonp([9],{NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var i=e("VU/8")({name:"App",components:{}},r,!1,function(t){e("wNWZ")},null,null).exports,a=e("/ocq"),c=e("lbHh"),s=e.n(c),u={data:function(){return{isLogin:s.a.get("token")}},methods:{logout:function(){s.a.remove("token"),location.reload()}}},l={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-menu",{staticClass:"navbar",attrs:{mode:"horizontal"}},[e("el-menu-item",{staticClass:"welcome-wrapper",attrs:{index:"1"}}),t._v(" "),e("el-dropdown",{staticClass:"avatar-container",attrs:{trigger:"click"}},[e("div",{staticClass:"avatar-wrapper"},[e("i",{staticClass:"el-icon-setting"}),t._v(" "),e("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),e("el-dropdown-menu",{staticClass:"user-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[e("router-link",{staticClass:"inlineBlock",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),t.isLogin?e("el-dropdown-item",{attrs:{divided:""}},[e("span",{staticStyle:{display:"block"},on:{click:t.logout}},[t._v("LogOut")])]):e("el-dropdown-item",{attrs:{divided:""}},[e("span",{staticStyle:{display:"block"},on:{click:function(n){t.$router.push("/login")}}},[t._v("Login")])])],1)],1)],1)},staticRenderFns:[]};var d={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper"}},[e("el-menu",{attrs:{"show-timeout":200,"default-active":t.$route.path,mode:"vertical","background-color":"#304156","text-color":"#bfcbd9","active-text-color":"#409EFF"}},[e("el-menu-item",{attrs:{index:"0"},on:{click:function(n){t.$router.push("/")}}},[t._v("HOME")]),t._v(" "),e("el-menu-item",{attrs:{index:"1"},on:{click:function(n){t.$router.push("/notice/list")}}},[t._v("NOTICE")]),t._v(" "),e("el-menu-item",{attrs:{index:"2"}},[e("router-link",{attrs:{to:"/popup/register"}},[t._v("POPUP")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"3"},on:{click:function(n){t.$router.push("/registration")}}},[t._v("JOIN")])],1)],1)},staticRenderFns:[]},p={components:{Navbar:e("VU/8")(u,l,!1,function(t){e("jA0G")},"data-v-77f2f160",null).exports,Sidebar:e("VU/8")({},d,!1,null,null,null).exports}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"app-wrapper"},[n("Sidebar",{staticClass:"sidebar-container"}),this._v(" "),n("div",{staticClass:"main-container"},[n("Navbar"),this._v(" "),n("section",{staticClass:"app-main"},[n("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var m=e("VU/8")(p,f,!1,function(t){e("NYaU")},null,null).exports;o.default.use(a.a);var h=[{path:"/login",name:"Login",component:function(){return e.e(1).then(e.bind(null,"T+/8"))}},{path:"/",component:m,redirect:"/helloworld",name:"HelloWorld",children:[{path:"/helloworld",component:function(){return e.e(5).then(e.bind(null,"q/3a"))}}]},{path:"/",component:m,children:[{path:"registration",name:"Registration",component:function(){return e.e(6).then(e.bind(null,"KwhX"))}}]},{path:"/notice",component:m,children:[{path:"list",name:"NoticeList",component:function(){return e.e(7).then(e.bind(null,"gVpZ"))}},{path:"register",name:"NoticeRegister",component:function(){return e.e(3).then(e.bind(null,"gZMs"))}},{path:"detail",name:"NoticeDetail",component:function(){return e.e(2).then(e.bind(null,"uxEq"))}}]},{path:"/popup",component:m,children:[{path:"register",name:"PopupRegister",component:function(){return e.e(0).then(e.bind(null,"k3Lc"))}}]},{path:"*",component:m,children:[{path:"*",name:"NotFound",component:function(){return e.e(4).then(e.bind(null,"De3b"))}}]}],v=new a.a({routes:h,mode:"history"}),g=e("zL8q"),b=e.n(g),_=(e("tvR6"),e("wUZ8")),w=e.n(_),k=(e("yh13"),e("NYxO")),N=(e("mtWM"),e("mof7")),x={state:{id:"",loading:!1},mutations:{SET_ID:function(t,n){n&&(t.id=n)},SET_LOADING:function(t,n){t.loading=n}},actions:{Login:function(t,n){var e=t.commit;Object(N.h)({data:n}).then(function(t){console.log("==========  res  =========="),console.log(t),console.log("==========  res  =========="),e("SET_ID",t.data.body),s.a.set("token",t.data.body,{expires:1})}).catch(function(t){console.log(t),alert(t.response.data.error)}).finally(function(t){e("SET_LOADING",!1)})}}};o.default.use(k.a);var L=new k.a.Store({modules:{user:x,modal:{state:{showModal:!1},mutations:{SET_MODAL:function(t,n){t.showModal=n}}}}});o.default.use(b.a,{locale:w.a}),new o.default({el:"#app",router:v,store:L,render:function(t){return t(i)}})},NYaU:function(t,n){},jA0G:function(t,n){},mof7:function(t,n,e){"use strict";e.d(n,"h",function(){return c}),e.d(n,"c",function(){return s}),e.d(n,"b",function(){return u}),e.d(n,"d",function(){return l}),e.d(n,"e",function(){return d}),e.d(n,"a",function(){return p}),e.d(n,"f",function(){return f}),e.d(n,"g",function(){return m});var o=e("mtWM"),r=e.n(o),i=e("zL8q"),a=(e.n(i),r.a.create({baseURL:"http://52.78.57.192:3000",timeout:5e3})),c=function(t){return a.post("/login",t)},s=function(t){return a.get("/notice",{params:t})},u=function(t){return a.get("/notice/"+t)},l=function(t){return a.post("/notice/"+t)},d=function(t){return a.post("/notice",t)},p=function(t){return a.post("/notice/"+t)},f=function(t){return a.post("/popup",t)},m=function(t){return a.post("/registration",t)}},tvR6:function(t,n){},wNWZ:function(t,n){},yh13:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.a1cfacfd1dc4536830e9.js.map