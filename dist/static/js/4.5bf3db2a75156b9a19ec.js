webpackJsonp([4],{"8Rnh":function(t,e){},R6sS:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("ZYmg"),o={data:function(){return{blogId:null,title:"",description:"",content:"",value:"false",titleNumber:"30",descNumber:"30",titleLimit:"",descLimit:""}},created:function(){var t=this;this.blogId=this.$route.params.blogId,i.a.getDetail({blogId:this.blogId}).then(function(e){t.title=e.data.title,t.description=e.data.description,t.content=e.data.content})},methods:{onCommit:function(){var t=this;i.a.updateBlog({blogId:this.blogId},{title:this.title,description:this.description,content:this.content,anIndex:this.atIndex}).then(function(e){t.$message.success(e.msg),t.$router.push({path:"/detail/"+e.data.id})})}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"edit"}},[n("h2",[t._v("编辑文章")]),t._v(" "),n("h3",[t._v("文章标题")]),t._v(" "),n("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("h3",[t._v("内容简介")]),t._v(" "),n("el-input",{attrs:{type:"textarea",rows:6,placeholder:"请输入内容"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),n("h3",[t._v("文章内容")]),t._v(" "),n("el-input",{attrs:{type:"textarea",autosize:{minRows:14,maxRows:20},placeholder:"请输入内容"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.onCommit}},[t._v("提交文章")])],1)},staticRenderFns:[]};var s=n("VU/8")(o,a,!1,function(t){n("8Rnh")},null,null);e.default=s.exports}});
//# sourceMappingURL=4.5bf3db2a75156b9a19ec.js.map