webpackJsonp([5],{Bmxf:function(e,n){},oVIv:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=t("Dd8w"),o=t.n(s),r=t("NYxO"),a={data:function(){return{password:"",username:""}},methods:o()({},Object(r.b)(["register"]),{onRegister:function(){var e=this;console.log("username"),console.log(this.username),this.register({username:this.username,password:this.password}).then(function(){e.$router.push({path:"/"})})}})},u={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"login"}},[t("el-input",{attrs:{placeholder:"请输入用户名",autocomplete:"on"},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}}),e._v(" "),t("el-input",{attrs:{placeholder:"请输入密码",autocomplete:"on"},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.onLogin(n)}},model:{value:e.password,callback:function(n){e.password=n},expression:"password"}}),e._v(" "),t("el-button",{attrs:{type:"success",plain:""},on:{click:e.onRegister}},[e._v("注册账号")])],1)},staticRenderFns:[]};var i=t("VU/8")(a,u,!1,function(e){t("Bmxf")},"data-v-37a465ed",null);n.default=i.exports}});
//# sourceMappingURL=5.00ecf7bc439642e7b55f.js.map