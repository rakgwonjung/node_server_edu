webpackJsonp([7],{gVpZ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("lbHh"),a=n.n(o),l=n("mof7"),r={data:function(){return{noticeData:[],total:1,pageSize:10,currentPage:1}},created:function(){this.onList()},methods:{onList:function(){var t=this;Object(l.c)().then(function(e){console.log("==== res ===="),console.log(e),console.log("==== res ====");var n=e.data.noticeData;console.log("notiData.length = ",n.length),t.total=n.length;var o=t.currentPage*t.pageSize,a=o-t.pageSize;console.log(o,a),t.noticeData=n.slice(a,o)}).catch(function(t){console.log(t)}).finally(function(t){})},onDetail:function(t){console.log(t),this.$router.push({path:"/notice/detail",query:{noticeId:t.row.id}})},onPageChange:function(t){console.log("pageNo = ",t),this.onList()}},beforeRouteEnter:function(t,e,n){a.a.get("token")?"/login"===t.path?n({path:"/"}):n():"/login"!==t.path?n({path:"/login?redirect="+t.path}):n()}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("el-table",{attrs:{data:t.noticeData}},[n("el-table-column",{attrs:{prop:"id",label:"No",width:"70",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"subj",label:"제목","header-align":"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"link",on:{click:function(n){t.onDetail(e)}}},[t._v(t._s(e.row.subj))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"tp",align:"center",label:"구분",width:"150"}}),t._v(" "),n("el-table-column",{attrs:{prop:"createdAt",align:"center",label:"등록일",width:"220"}})],1),t._v(" "),n("el-pagination",{attrs:{layout:"prev, pager, next","page-size":t.pageSize,total:t.total,"current-page":t.currentPage},on:{"update:currentPage":function(e){t.currentPage=e},"current-change":t.onPageChange}}),t._v(" "),n("div",{staticClass:"bottomBtns"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.$router.push("/notice/register")}}},[t._v("공지사항 등록")])],1)],1)},staticRenderFns:[]},i=n("VU/8")(r,c,!1,null,null,null);e.default=i.exports}});
//# sourceMappingURL=7.da77a8ad8ad4d97eac74.js.map