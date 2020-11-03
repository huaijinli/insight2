webpackJsonp([38],{LW7d:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=a("bOdI"),s=a.n(n),l=a("mw3O"),r=a.n(l),o=a("X2Oc"),m={name:"Setting",data:function(){return{rules:{group:[{required:!0,message:"请输入群组名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}]},del_url:"/api/authmode/del",form_errors:[],createVisible:!1,editVisible:!1,cur_entity:null,data:function(t){var e=[],a=["weishenhe","xintonggao","zanbuchuli","xiufuzhong","fucezhong","yiwancheng","yibohui"],i=["10","40","20","50","55","60","30"];return["未审核","新通告","暂不处理","修复中","复测中","已完成","已驳回"].forEach(function(t,n){e.push({label:t,key:i[n],pinyin:a[n]})}),e}(),current_auth_type:"LDAP",vulnsSetting:[],normalSettingForm:{},paramSettingForm:{},filterMethod:function(t,e){return e.pinyin.indexOf(t)>-1},authTableData:[],tab_cur:"global_setting",status_options:[{value:"LDAP",label:"LDAP"}],emailForm:{smtp_host:"127.0.0.1",smtp_port:"25",smtp_user:"root",smtp_pass:"",mail_list:"guest@guest.com"}}},created:function(){this.getAllSetting("global_setting"),this.$route.query.id&&(this.tab_cur=this.$route.query.id,this.getAuthList())},updated:function(){this.$desensitive()},methods:(i={dataDel:function(t){var e=this,a=null;t&&(a=t,this.$confirm("是否确认此操作","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios.post(e.del_url,Object(o.h)({id:a})).then(function(t){t.data.status>=1?(e.getAuthList(),e.$message.success("删除成功")):e.$message.error("删除失败, 错误码: "+t.data.status)})}).catch(function(){}))},handleCurrentChangeRow:function(t){this.cur_entity=t},testAuth:function(t,e){var a=this;this.$axios.post("/api/authmode/test ",Object(o.h)({id:e.id})).then(function(t){1==t.data.status?a.$message.success("测试成功"):a.$message.error("操作失败, 错误码:"+t.data.status+t.data.msg)})},handleEdit:function(t,e){this.cur_entity=e,this.jumpToEditLdap()},jumpToEditLdap:function(){this.cur_entity.id?this.$router.push({name:"editldap",params:this.cur_entity}):this.$message.info("请选择数据")},handleTabClick:function(t,e){console.log(t.name),"auth_setting"===t.name?this.getAuthList():"vul_audit_setting"===t.name?this.getVulnsSetting():"global_setting"===t.name?this.getAllSetting("global_setting"):"point_setting"===t.name?this.getAllSetting("point_setting"):"email_setting"===t.name&&this.getAllSetting("email_setting")},getAuthList:function(){var t=this;this.$axios.get("/api/authmode/list ").then(function(e){t.authTableData=e.data.result})},getVulnsSetting:function(){var t=this;this.$axios.get("/api/system/config/get",{}).then(function(e){console.log(e),e.data.result.vul_setting&&(t.vulnsSetting=e.data.result.vul_setting)})},getAllSetting:function(t){var e=this;this.$axios.get("/api/system/config/get",{}).then(function(a){console.log(a),a.data.result[t]&&("global_setting"==t&&(e.normalSettingForm=a.data.result[t]),"point_setting"==t&&(e.paramSettingForm=a.data.result[t]),"email_setting"==t&&(e.emailForm=a.data.result[t]))})},saveConfigSetting:function(){var t=this;this.$confirm("是否确认此操作","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){t.normalSettingForm.type=t.tab_cur,t.$axios.post("/api/system/config",Object(o.h)(t.normalSettingForm)).then(function(e){1==e.data.status?(t.$message.success("操作成功"),t.getAllSetting("global_setting")):t.$message.error("操作失败, 错误码:"+e.data.status+e.data.msg)})}).catch(function(){})},saveParamSetting:function(){var t=this;this.$confirm("是否确认此操作","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){t.paramSettingForm.type=t.tab_cur,t.$axios.post("/api/system/config",Object(o.h)(t.paramSettingForm)).then(function(e){1==e.data.status?(t.$message.success("操作成功"),t.getAllSetting("point_setting")):t.$message.error("操作失败, 错误码:"+e.data.status+e.data.msg)})}).catch(function(){})},saveVulnsSetting:function(){var t=this;this.$axios.post("/api/system/vulconfig",Object(o.h)({id:this.vulnsSetting})).then(function(e){1==e.data.status?(t.$message.success("操作成功"),t.getVulnsSetting()):t.$message.error("操作失败, 错误码:"+e.data.status+e.data.msg)})},saveEmailSetting:function(){var t=this;this.$confirm("是否确认此操作?","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios.post("/api/system/mailconfig",r.a.stringify(t.emailForm)).then(function(e){1==e.data.status?t.$message.success("配置保存成功!"):t.$message.error(e.data.msg)})})},clearTask:function(){var t=this;this.$confirm("是否确认此操作,此操作可能会造成数据丢失!!!无法恢复!!!慎重执行!!!","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios.post("/api/system/op",r.a.stringify({OP:"CLEAR_TASK_INS"})).then(function(e){1==e.data.status?t.$message.success("操作成功"):t.$message.error("操作失败")})})},initDB:function(){var t=this;this.$confirm("是否确认此操作,此操作可能会造成数据丢失!!!无法恢复!!!慎重执行!!!","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios.post("/api/system/op",r.a.stringify({OP:"INIT_DB"})).then(function(e){1==e.data.status?t.$message.success("操作成功"):t.$message.error("操作失败")})})}},s()(i,"initDB",function(){var t=this;this.$confirm("是否确认此操作,此操作可能会造成数据丢失!!!无法恢复!!!慎重执行!!!","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios.get("/api/init/db").then(function(e){1==e.data.status?t.$message.success("操作成功"):t.$message.error("操作失败")})})}),s()(i,"genEgData",function(){var t=this;this.$confirm("是否确认此操作,此操作可能会造成数据丢失!!!无法恢复!!!慎重执行!!!","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios.get("/api/example/data").then(function(e){1==e.data.status?t.$message.success("操作成功"):t.$message.error("操作失败")})})}),s()(i,"testMail",function(){var t=this;this.$confirm("是否确认此操作?","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios.post("/api/system/mailtest").then(function(e){1==e.data.status?t.$message.success("操作成功"):t.$message.error("操作失败 - "+e.data.msg)})})}),i)},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-date"}),t._v(" 系统\n      ")]),t._v(" "),a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-configuration iconfont_no_margin"}),t._v(" 系统设置\n      ")])],1)],1),t._v(" "),a("div",{staticClass:"container"},[a("el-tabs",{attrs:{"tab-position":"left"},on:{"tab-click":t.handleTabClick},model:{value:t.tab_cur,callback:function(e){t.tab_cur=e},expression:"tab_cur"}},[a("el-tab-pane",{attrs:{label:"全局配置",name:"global_setting"}},[a("div",{staticClass:"form-box"},[a("el-form",{ref:"form",attrs:{"label-width":"120px",rules:t.rules}},[a("el-form-item",{attrs:{label:"站点地址",prop:"domain"}},[a("el-input",{staticClass:"insight_sensitive",model:{value:t.normalSettingForm.domian,callback:function(e){t.$set(t.normalSettingForm,"domian",e)},expression:"normalSettingForm.domian"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"负责人联系方式",prop:"domain"}},[a("el-input",{staticClass:"insight_sensitive",model:{value:t.normalSettingForm.contact,callback:function(e){t.$set(t.normalSettingForm,"contact",e)},expression:"normalSettingForm.contact"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"消息发送"}},[a("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:t.normalSettingForm.isSendEmail,callback:function(e){t.$set(t.normalSettingForm,"isSendEmail",e)},expression:"normalSettingForm.isSendEmail"}},[t._v("邮件通知")])],1),t._v(" "),a("el-form-item",{attrs:{label:"用户组",prop:"group"}},[a("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:t.normalSettingForm.isCreateGroup,callback:function(e){t.$set(t.normalSettingForm,"isCreateGroup",e)},expression:"normalSettingForm.isCreateGroup"}},[t._v("允许新建用户组")])],1),t._v(" "),a("el-form-item",{attrs:{label:"组最大成员数"}},[a("el-input-number",{attrs:{min:1,max:500,label:"组最大成员数",size:"mini"},model:{value:t.normalSettingForm.group_member_limit,callback:function(e){t.$set(t.normalSettingForm,"group_member_limit",e)},expression:"normalSettingForm.group_member_limit"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"全局水印选项"}},[a("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:t.normalSettingForm.isWaterMarkOn,callback:function(e){t.$set(t.normalSettingForm,"isWaterMarkOn",e)},expression:"normalSettingForm.isWaterMarkOn"}},[t._v("开启")])],1),t._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.saveConfigSetting}},[t._v("保存")])],1)],1)],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:"积分参数",name:"point_setting"}},[a("div",{staticClass:"form-box"},[a("el-form",{ref:"form",attrs:{"label-width":"120px",rules:t.rules}},[a("el-form-item",{attrs:{label:"一级资产系数"}},[a("el-input-number",{attrs:{min:1,max:500,label:"一级资产系数",size:"mini"},model:{value:t.paramSettingForm.one_level_point,callback:function(e){t.$set(t.paramSettingForm,"one_level_point",e)},expression:"paramSettingForm.one_level_point"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"二级资产系数"}},[a("el-input-number",{attrs:{min:1,max:500,label:"一级资产系数",size:"mini"},model:{value:t.paramSettingForm.two_level_point,callback:function(e){t.$set(t.paramSettingForm,"two_level_point",e)},expression:"paramSettingForm.two_level_point"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"三级资产系数"}},[a("el-input-number",{attrs:{min:1,max:500,label:"一级资产系数",size:"mini"},model:{value:t.paramSettingForm.three_level_point,callback:function(e){t.$set(t.paramSettingForm,"three_level_point",e)},expression:"paramSettingForm.three_level_point"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"其他资产系数"}},[a("el-input-number",{attrs:{min:1,max:500,label:"一级资产系数",size:"mini"},model:{value:t.paramSettingForm.other_level_point,callback:function(e){t.$set(t.paramSettingForm,"other_level_point",e)},expression:"paramSettingForm.other_level_point"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"威胁情报系数"}},[a("el-input-number",{attrs:{min:1,max:500,label:"一级资产系数",size:"mini"},model:{value:t.paramSettingForm.ti_level_point,callback:function(e){t.$set(t.paramSettingForm,"ti_level_point",e)},expression:"paramSettingForm.ti_level_point"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"倍数奖励"}},[a("el-input-number",{attrs:{min:1,max:500,label:"一级资产系数",size:"mini"},model:{value:t.paramSettingForm.times_level_point,callback:function(e){t.$set(t.paramSettingForm,"times_level_point",e)},expression:"paramSettingForm.times_level_point"}})],1),t._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.saveParamSetting}},[t._v("保存")])],1)],1)],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:"认证",name:"auth_setting"}},[a("div",{staticClass:"form-box"},[a("el-form",{ref:"form",staticStyle:{width:"800px"},attrs:{"label-width":"120px"}},[a("el-form-item",{attrs:{label:"新增认证方式"}},[a("el-select",{staticClass:"handle-select mr10",attrs:{size:"mini",placeholder:"选择认证方式"},model:{value:t.current_auth_type,callback:function(e){t.current_auth_type=e},expression:"current_auth_type"}},t._l(t.status_options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))])])}),1),t._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.$router.push({name:"editldap"})}}},[t._v("+")])],1),t._v(" "),a("el-form-item",{attrs:{label:"认证方式"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.authTableData,border:"","highlight-current-row":""},on:{"current-change":t.handleCurrentChangeRow}},[a("el-table-column",{attrs:{label:"认证名称",prop:"name","min-width":"80"}}),t._v(" "),a("el-table-column",{attrs:{label:"认证类型",prop:"mode","min-width":"55"}}),t._v(" "),a("el-table-column",{attrs:{label:"主机",prop:"config.host","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"insight_sensitive"},[t._v("     "+t._s(e.row.config.host)+"  ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"人数",prop:"usercount","min-width":"55"}}),t._v(" "),a("el-table-column",{attrs:{label:"默认",prop:"config.default","min-width":"40"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"insight_sensitive"},[t._v("     "+t._s(e.row.config.default?"✓":"")+"  ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态",prop:"enable"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(1===e.row.enable?"启用":"禁用")+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.testAuth(e.$index,e.row)}}},[t._v("\n                      测试\n                    ")]),t._v(" "),a("span",{attrs:{size:"mini"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[a("i",{staticClass:"el-iconbianji2 iconfont_no_margin sumeru_op_button"})]),t._v(" "),a("span",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.dataDel(e.row.id)}}},[a("i",{staticClass:"el-iconshanchu1 iconfont_no_margin sumeru_op_button sumeru_red"})])]}}])})],1)],1)],1)],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:"漏洞审核流程配置",name:"vul_audit_setting"}},[a("el-transfer",{attrs:{filterable:"","filter-method":t.filterMethod,titles:["未选择","已选择"],"filter-placeholder":"请输入流程拼音",data:t.data},model:{value:t.vulnsSetting,callback:function(e){t.vulnsSetting=e},expression:"vulnsSetting"}}),t._v(" "),a("br"),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.saveVulnsSetting}},[t._v("保存")])],1),t._v(" "),a("el-tab-pane",{attrs:{label:"邮箱配置",name:"email_setting"}},[a("div",{staticClass:"form-box"},[a("el-form",{ref:"form",attrs:{model:t.emailForm,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"SMTP服务器"}},[a("el-input",{staticClass:"insight_sensitive",model:{value:t.emailForm.smtp_host,callback:function(e){t.$set(t.emailForm,"smtp_host",e)},expression:"emailForm.smtp_host"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"SMTP端口号"}},[a("el-input",{staticClass:"insight_sensitive",model:{value:t.emailForm.smtp_port,callback:function(e){t.$set(t.emailForm,"smtp_port",e)},expression:"emailForm.smtp_port"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"SMTP用户"}},[a("el-input",{staticClass:"insight_sensitive",model:{value:t.emailForm.smtp_user,callback:function(e){t.$set(t.emailForm,"smtp_user",e)},expression:"emailForm.smtp_user"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"SMTP密码"}},[a("el-input",{attrs:{type:"password"},model:{value:t.emailForm.smtp_pass,callback:function(e){t.$set(t.emailForm,"smtp_pass",e)},expression:"emailForm.smtp_pass"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"认证方式"}},[a("el-radio",{attrs:{label:"pure"},model:{value:t.emailForm.smtp_auth_type,callback:function(e){t.$set(t.emailForm,"smtp_auth_type",e)},expression:"emailForm.smtp_auth_type"}},[t._v("默认")]),t._v(" "),a("el-radio",{attrs:{label:"ssl"},model:{value:t.emailForm.smtp_auth_type,callback:function(e){t.$set(t.emailForm,"smtp_auth_type",e)},expression:"emailForm.smtp_auth_type"}},[t._v("SSL")]),t._v(" "),a("el-radio",{attrs:{label:"tls"},model:{value:t.emailForm.smtp_auth_type,callback:function(e){t.$set(t.emailForm,"smtp_auth_type",e)},expression:"emailForm.smtp_auth_type"}},[t._v("TLS")])],1),t._v(" "),a("el-form-item",{attrs:{label:"邮件列表"}},[a("el-input",{staticClass:"insight_sensitive",attrs:{type:"textarea",rows:"5"},model:{value:t.emailForm.mail_list,callback:function(e){t.$set(t.emailForm,"mail_list",e)},expression:"emailForm.mail_list"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"邮件头"}},[a("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:t.emailForm.smtp_head,callback:function(e){t.$set(t.emailForm,"smtp_head",e)},expression:"emailForm.smtp_head"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"邮件签名"}},[a("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:t.emailForm.smtp_sign,callback:function(e){t.$set(t.emailForm,"smtp_sign",e)},expression:"emailForm.smtp_sign"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.testMail}},[t._v("测试邮件")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.saveEmailSetting}},[t._v("保存")])],1)],1)],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:"管理员操作",name:"admin_op"}},[a("el-form",{ref:"form",attrs:{"label-width":"120px"}},[a("el-form-item",{attrs:{label:"操作"}},[a("el-button",{attrs:{type:"danger"},on:{click:t.initDB}},[t._v("初始化数据库")]),t._v(" "),a("el-button",{attrs:{type:"warning"},on:{click:t.genEgData}},[t._v("生成示例数据")])],1)],1)],1)],1)],1)])},staticRenderFns:[]},c=a("VU/8")(m,u,!1,null,null,null);e.default=c.exports}});