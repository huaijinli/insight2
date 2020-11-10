webpackJsonp([17],{"/0kM":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("mvHQ"),o=i.n(r),s=i("INCx"),a=i.n(s),n=i("X2Oc"),l={name:"curd",components:{},data:function(){return{form_errors:[],cur_entity:{},user_list_url:"/api/user/list",change_url:"/api/group/owner/set",add_url:"/api/group/add",list_url:"/api/group/list",del_url:"/api/group/del",role_list_url:"/api/role/select",sub_group_list_url:"/api/group/child/list",del_list:new URLSearchParams,tableData:[],select_word:"",cur_page:1,page_size:10,total:0,multipleSelection:[],editVisible:!1,createVisible:!1,addSubGroupVisible:!1,editSubGroupVisible:!1,groupOwnerChangeVisible:!1,form:{enable:"1",role_id:""},form_sub_group:{},owner_form:{username:""},role_options:[]}},created:function(){this.getRoleList(),this.getData()},updated:function(){this.$desensitive()},computed:{},filters:{getDateDiff_timestamp:function(t){return Object(n.e)(t)},formatDate:function(t){var e=new Date(a()(1e3*t));return Object(n.c)(e,"yyyy-MM-dd HH:mm:ss")},statusFilter:function(t){return{0:"info",1:"success","-1":"danger"}[t]}},methods:{load:function(t,e,i){this.$axios.get(this.sub_group_list_url,{params:{group_id:t.id}}).then(function(t){i(t.data.result)})},querySearchAsync:function(t,e){this.$axios.get(this.user_list_url,{params:{search:t}}).then(function(t){var i=new Array;t.data.result.map(function(t){i.push({value:t.username,id:t.id})}),e(i)})},getRoleList:function(){var t=this;this.$axios.get(this.role_list_url,{params:{type:0}}).then(function(e){t.role_options=e.data.result})},handleOwnerSelect:function(t){this.owner_form.owner_id=t.id},sortChange:function(t,e,i){this.sortcolumn=t.prop,this.sortorder=t.order,this.getData()},viewGroupUser:function(){"{}"!=o()(this.cur_entity)?this.$router.push({name:"editgroupuser",params:this.cur_entity}):this.$message.info("请选择数据")},addSubGroup:function(){"{}"!=o()(this.cur_entity)&&null!=this.cur_entity&&void 0!=this.cur_entity?(console.log(this.cur_entity.id),this.form_sub_group.parent=this.cur_entity.id,this.addSubGroupVisible=!0):this.$message.info("请选择数据")},changeGroupOwner:function(){"{}"!=o()(this.cur_entity)&&null!=this.cur_entity&&void 0!=this.cur_entity?(this.owner_form.id=this.cur_entity.id,this.groupOwnerChangeVisible=!0):this.$message.info("请选择数据")},checkForm:function(){if(this.form.name)return!0;this.form_errors=[],this.form.name||this.form_errors.push("请输入用户组名")},doCreateSub:function(t){var e=this;this.$axios.post(this.add_url,Object(n.h)(this.form_sub_group)).then(function(t){1==t.data.status?(e.$message.success("操作成功"),e.getData()):e.$message.error("操作失败, 错误码:"+t.data.status+t.data.msg),e.addSubGroupVisible=!1,e.editSubGroupVisible=!1})},checkFormSub:function(){if(this.form_sub_group.name)return!0;this.form_errors=[],this.form_sub_group.name||this.form_errors.push("请输入用户组名")},doChange:function(t){var e=this;this.$axios.post(this.change_url,Object(n.h)(this.owner_form)).then(function(t){1==t.data.status?(e.$message.success("操作成功"),e.getData()):e.$message.error("操作失败, 错误码:"+t.data.status+t.data.msg),e.groupOwnerChangeVisible=!1})},doCreate:function(t){var e=this;this.$axios.post(this.add_url,Object(n.h)(this.form)).then(function(t){1==t.data.status?(e.$message.success("操作成功"),e.getData()):e.$message.error("操作失败, 错误码:"+t.data.status+t.data.msg),e.createVisible=!1,e.editVisible=!1})},getData:function(){var t=this;this.$axios.get(this.list_url,{params:{search:this.select_word,page_index:this.cur_page,page_size:this.page_size,sort:this.sortcolumn,direction:this.sortorder}}).then(function(e){t.tableData=e.data.result,t.total=e.data.total})},handleSizeChange:function(t){this.page_size=t,this.getData()},handleCurrentChange:function(t){this.cur_page=t,this.getData()},handleCurrentChangeRow:function(t){this.cur_entity=t},search:function(){this.getData()},handleEdit:function(t,e){0==e.parent?(this.form_errors=[],this.editVisible=!0,this.form=e):(this.form_errors=[],this.editSubGroupVisible=!0,this.form_sub_group=e)},handleSelect:function(t,e){this.$refs.dataTable.setCurrentRow(e),this.cur_entity=e},handleSelectionChange:function(t){this.multipleSelection=t},dataDel:function(t){var e=this,i=null;if(t)i=t;else{if(this.multipleSelection.length<=0)return void this.$message.info("未选择任何数据");this.del_list=this.multipleSelection.map(function(t){return t.id}),i=this.del_list}this.$confirm("是否确认此操作","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios.post(e.del_url,Object(n.h)({id:i})).then(function(t){t.data.status>=1?(e.getData(),e.$message.success("删除成功")):e.$message.error("删除失败, 错误码: "+t.data.status_code+t.data.msg)})}).catch(function(){})}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[i("i",{staticClass:"el-icon-tickets"}),t._v(" 用户\n      ")]),t._v(" "),i("el-breadcrumb-item",[t._v("用户组")])],1)],1),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"handle-box"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus",size:"mini"},on:{click:function(e){t.createVisible=!0,t.form={enable:"1"}}}},[t._v("新增用户组")]),t._v(" "),i("el-input",{staticClass:"handle-input",attrs:{size:"mini",placeholder:"请输入关键词"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search()}},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:t.search}},[t._v("搜索")]),t._v(" "),i("div",{staticStyle:{float:"right"}},[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){t.form_sub_group={},t.addSubGroup()}}},[t._v("创建子组")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.viewGroupUser()}}},[t._v("管理成员")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.changeGroupOwner}},[t._v("拥有者变更")]),t._v(" "),i("el-button",{attrs:{size:"mini",icon:"search"},on:{click:function(e){return t.dataDel()}}},[t._v("批量删除")])],1)],1),t._v(" "),i("el-table",{ref:"dataTable",attrs:{data:t.tableData,border:"","highlight-current-row":"","row-key":"id",lazy:"",load:t.load,"tree-props":{children:"children",hasChildren:"group_child_count"}},on:{select:t.handleSelect,"selection-change":t.handleSelectionChange,"current-change":t.handleCurrentChangeRow,"sort-change":t.sortChange}},[i("el-table-column",{attrs:{type:"selection",width:"45"}}),t._v(" "),i("el-table-column",{attrs:{prop:"name",label:"用户组","min-width":"80","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"second-title insight_sensitive",style:{color:0==e.row.parent?"#35423ff3":"#6fa397"}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"task_type",label:"成员数量","min-width":"80","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.usercount))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"task_type",label:"子组数","min-width":"80","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.group_child_count))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"desc","min-width":"110",label:"描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"insight_sensitive"},[t._v(t._s(e.row.desc))])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"owner","min-width":"110",label:"拥有者"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"insight_sensitive"},[t._v(t._s(e.row.owner))])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"update_time",label:"创建时间","min-width":"100",sortable:"","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tooltip",{attrs:{effect:"light",content:t._f("formatDate")(e.row.update_time),placement:"right"}},[i("span",[t._v(t._s(t._f("getDateDiff_timestamp")(e.row.update_time)))])])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"编辑",expression:"'编辑'"}],attrs:{size:"mini"},on:{click:function(i){return t.handleEdit(e.$index,e.row)}}},[i("i",{staticClass:"el-iconbianji2 iconfont_no_margin sumeru_op_button"})]),t._v(" "),i("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"删除",expression:"'删除'"}],attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.dataDel(e.row.id)}}},[i("i",{staticClass:"el-iconshanchu1 iconfont_no_margin sumeru_op_button sumeru_red"})])]}}])})],1),t._v(" "),i("div",{staticClass:"pagination"},[i("el-pagination",{attrs:{"current-page":t.cur_page,"page-sizes":[10,20,50,100],"page-size":t.page_size,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.cur_page=e},"update:current-page":function(e){t.cur_page=e},"update:pageSize":function(e){t.page_size=e},"update:page-size":function(e){t.page_size=e},"update:total":function(e){t.total=e}}})],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"新建用户组",visible:t.createVisible,width:"30%"},on:{"update:visible":function(e){t.createVisible=e}}},[i("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"用户组名"}},[i("el-input",{attrs:{clearable:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"描述"}},[i("el-input",{attrs:{tclearable:""},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),t._v(" "),t.form_errors.length?i("el-form-item",{staticStyle:{color:"#f78989"}},[i("b",[t._v("出现以下问题 :")]),t._v(" "),i("ul",t._l(t.form_errors,function(e){return i("li",{key:e},[t._v(t._s(e))])}),0)]):t._e()],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.checkForm()&&t.doCreate()}}},[t._v("创建")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"新建子组",visible:t.addSubGroupVisible,width:"30%"},on:{"update:visible":function(e){t.addSubGroupVisible=e}}},[i("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"子组名"}},[i("el-input",{attrs:{clearable:""},model:{value:t.form_sub_group.name,callback:function(e){t.$set(t.form_sub_group,"name",e)},expression:"form_sub_group.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"描述"}},[i("el-input",{attrs:{tclearable:""},model:{value:t.form_sub_group.desc,callback:function(e){t.$set(t.form_sub_group,"desc",e)},expression:"form_sub_group.desc"}})],1),t._v(" "),t.form_errors.length?i("el-form-item",{staticStyle:{color:"#f78989"}},[i("b",[t._v("出现以下问题 :")]),t._v(" "),i("ul",t._l(t.form_errors,function(e){return i("li",{key:e},[t._v(t._s(e))])}),0)]):t._e()],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.checkFormSub()&&t.doCreateSub()}}},[t._v("创建")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"编辑",visible:t.editVisible,width:"30%"},on:{"update:visible":function(e){t.editVisible=e}}},[i("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"子组名"}},[i("el-input",{attrs:{clearable:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"描述"}},[i("el-input",{attrs:{tclearable:""},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){return t.doCreate()}}},[t._v("修 改")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"编辑",visible:t.editSubGroupVisible,width:"30%"},on:{"update:visible":function(e){t.editSubGroupVisible=e}}},[i("el-form",{ref:"form",attrs:{model:t.form_sub_group,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"用户组名"}},[i("el-input",{attrs:{clearable:""},model:{value:t.form_sub_group.name,callback:function(e){t.$set(t.form_sub_group,"name",e)},expression:"form_sub_group.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"描述"}},[i("el-input",{attrs:{tclearable:""},model:{value:t.form_sub_group.desc,callback:function(e){t.$set(t.form_sub_group,"desc",e)},expression:"form_sub_group.desc"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){return t.doCreateSub()}}},[t._v("修 改")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"拥有者变更",visible:t.groupOwnerChangeVisible,width:"30%"},on:{"update:visible":function(e){t.groupOwnerChangeVisible=e}}},[i("el-form",{attrs:{"label-width":"80px"}},[i("el-form-item",{attrs:{label:"当前"}},[t._v(t._s("{}"!=JSON.stringify(t.cur_entity)&&void 0!=t.cur_entity&&null!=t.cur_entity?t.cur_entity.name+" - "+t.cur_entity.owner:""))]),t._v(" "),i("el-form-item",{attrs:{label:"变更为"}},[i("el-autocomplete",{attrs:{"fetch-suggestions":t.querySearchAsync,placeholder:"请输入内容"},on:{select:t.handleOwnerSelect},model:{value:t.owner_form.username,callback:function(e){t.$set(t.owner_form,"username",e)},expression:"owner_form.username"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){return t.doChange()}}},[t._v("确认变更")])],1)],1)],1)},staticRenderFns:[]};var c=i("VU/8")(l,u,!1,function(t){i("2OhC")},"data-v-cab88304",null);e.default=c.exports},"2OhC":function(t,e){}});