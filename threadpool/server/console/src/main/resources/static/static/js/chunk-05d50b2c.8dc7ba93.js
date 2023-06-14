(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05d50b2c"],{"333d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total,"hide-on-single-page":!0},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},n=[];a("a9e3");Math.easeInOutQuad=function(e,t,a,i){return e/=i/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function l(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,a){var i=r(),n=e-i,s=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=s;var r=Math.easeInOutQuad(c,i,n,t);l(r),c<t?o(e):a&&"function"===typeof a&&a()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&s(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},u=c,d=(a("fe41"),a("2877")),p=Object(d["a"])(u,i,n,!1,null,"df7d1fa0",null);t["a"]=p.exports},"3a8d":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:e.$t("logManage.bizType")},model:{value:e.listQuery.category,callback:function(t){e.$set(e.listQuery,"category",t)},expression:"listQuery.category"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:e.$t("logManage.bizID")},model:{value:e.listQuery.bizNo,callback:function(t){e.$set(e.listQuery,"bizNo",t)},expression:"listQuery.bizNo"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:e.$t("logManage.operator")},model:{value:e.listQuery.operator,callback:function(t){e.$set(e.listQuery,"operator",t)},expression:"listQuery.operator"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.fetchData}},[e._v("\n      "+e._s(e.$t("common.query"))+"\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{border:"",data:e.list,"element-loading-text":"Loading",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:e.$t("common.num"),fixed:"",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.$index+1))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("logManage.bizType"),width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.category))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("logManage.bizID"),width:"380"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.bizNo))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("logManage.logContent"),width:"500"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("ellipsis")(t.row.action)))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("logManage.operator"),width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.operator)+" ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("common.createTime"),width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.createTime))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("common.operation"),fixed:"right",width:"90",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.handleUpdate(i)}}},[e._v("\n          "+e._s(e.$t("common.detail"))+"\n        ")])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.listQuery.current,limit:e.listQuery.size},on:{"update:page":function(t){return e.$set(e.listQuery,"current",t)},"update:limit":function(t){return e.$set(e.listQuery,"size",t)},pagination:e.fetchData}}),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"800px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.temp,"label-width":"110px"}},[a("el-form-item",{attrs:{label:e.$t("logManage.bizType"),prop:"category"}},[a("el-input",{staticStyle:{width:"50%"},attrs:{disabled:!0,placeholder:e.$t("logManage.bizType")},model:{value:e.temp.category,callback:function(t){e.$set(e.temp,"category",t)},expression:"temp.category"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("logManage.bizID"),prop:"bizNo"}},[a("el-input",{staticStyle:{width:"50%"},attrs:{disabled:!0,placeholder:e.$t("logManage.bizID")},model:{value:e.temp.bizNo,callback:function(t){e.$set(e.temp,"bizNo",t)},expression:"temp.bizNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("logManage.operator"),prop:"operator"}},[a("el-input",{staticStyle:{width:"50%"},attrs:{disabled:!0,placeholder:e.$t("logManage.operator")},model:{value:e.temp.operator,callback:function(t){e.$set(e.temp,"operator",t)},expression:"temp.operator"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("common.createTime"),prop:"createTime"}},[a("el-input",{staticStyle:{width:"50%"},attrs:{disabled:!0,placeholder:e.$t("common.createTime")},model:{value:e.temp.createTime,callback:function(t){e.$set(e.temp,"createTime",t)},expression:"temp.createTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("logManage.logContent"),prop:"action"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{disabled:!0,autosize:{minRows:4,maxRows:10},type:"textarea",placeholder:e.$t("logManage.logContent")},model:{value:e.temp.action,callback:function(t){e.$set(e.temp,"action",t)},expression:"temp.action"}})],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogPluginVisible,title:"Reading statistics"},on:{"update:visible":function(t){e.dialogPluginVisible=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pluginData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v("Confirm")])],1)],1)],1)},n=[],o=(a("fb6a"),a("b775"));function l(e){return Object(o["a"])({url:"/hippo4j/v1/cs/log/query/page",method:"post",data:e})}var r=a("6724"),s=a("333d"),c={name:"JobProject",components:{Pagination:s["a"]},directives:{waves:r["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]},ellipsis:function(e){return e?e.length>100?e.slice(0,100)+"...":e:""}},data:function(){return{list:null,listLoading:!0,total:0,listQuery:{current:1,size:10,tenantId:""},pluginTypeOptions:["reader","writer"],dialogPluginVisible:!1,pluginData:[],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Info",create:"Create"},temp:{id:void 0,tenantId:"",tenantName:"",owner:"",tenantDesc:""},visible:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,l(this.listQuery).then((function(t){var a=t.records,i=t.total;e.total=i,e.list=a,e.listLoading=!1}))},resetTemp:function(){this.temp={id:void 0,tenantName:"",tenantDesc:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&jobProjectApi.created(e.temp).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:e.$t("message.success"),message:e.$t("message.createdSuccess"),type:"success",duration:2e3})}))}))},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){var a=Object.assign({},e.temp);jobProjectApi.updated(a).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:e.$t("message.success"),message:e.$t("message.updateSuccess"),type:"success",duration:2e3})}))}}))},handleDelete:function(e){var t=this;console.log("删除"),jobProjectApi.deleted(e.tenantId).then((function(e){t.fetchData(),t.$notify({title:t.$t("message.success"),message:t.$t("message.deleteSuccess"),type:"success",duration:2e3})}))}}},u=c,d=a("2877"),p=Object(d["a"])(u,i,n,!1,null,null,null);t["default"]=p.exports},6724:function(e,t,a){"use strict";a("8d41");var i="@@wavesContext";function n(e,t){function a(a){var i=Object.assign({},t.value),n=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),o=n.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var l=o.getBoundingClientRect(),r=o.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(l.width,l.height)+"px",o.appendChild(r)),n.type){case"center":r.style.top=l.height/2-r.offsetHeight/2+"px",r.style.left=l.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(a.pageY-l.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(a.pageX-l.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=n.color,r.className="waves-ripple z-active",!1}}return e[i]?e[i].removeHandle=a:e[i]={removeHandle:a},a}var o={bind:function(e,t){e.addEventListener("click",n(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[i].removeHandle,!1),e.addEventListener("click",n(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[i].removeHandle,!1),e[i]=null,delete e[i]}},l=function(e){e.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(l)),o.install=l;t["a"]=o},"8d41":function(e,t,a){},b36cf:function(e,t,a){},fe41:function(e,t,a){"use strict";a("b36cf")}}]);