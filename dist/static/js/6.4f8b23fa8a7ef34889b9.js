webpackJsonp([6],{kt88:function(e,t){},oVIv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Dd8w"),o=n.n(s),r=n("NYxO"),a={data:function(){return{password:"",username:""}},methods:o()({},Object(r.b)(["register"]),{onRegister:function(){var e=this;console.log("username"),console.log(this.username),this.register({username:this.username,password:this.password}).then(function(){e.$router.push({path:"/"})})}})},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("el-input",{attrs:{placeholder:"请输入用户名",autocomplete:"on"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),n("el-input",{attrs:{placeholder:"请输入密码",autocomplete:"on"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onLogin(t)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),n("el-button",{attrs:{type:"success",plain:""},on:{click:e.onRegister}},[e._v("注册账号")])],1)},staticRenderFns:[]};var i=n("VU/8")(a,u,!1,function(e){n("kt88")},"data-v-37a465ed",null);t.default=i.exports}});
//# sourceMappingURL=6.4f8b23fa8a7ef34889b9.js.map