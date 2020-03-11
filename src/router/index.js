import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Index',
      component:()=>import('../pages/Index/template.vue')
    },
    {
      path: '/detail/:blogId',
      name: 'detail',
      component:()=>import('../pages/Detail/template.vue')
    },
    {
      path: '/login',
      name: 'login',
      component:()=>import('../pages/login/template.vue')
    },
    {
      path: '/register',
      name: 'register',
      component:()=>import('../pages/register/template.vue')
    },
    {
      path: '/my',
      name: 'my',
      component:()=>import('../pages/My/template.vue')
    },
    {
      path: '/edit/:blogId',
      name: 'edit',
      component:()=>import('../pages/Edit/template.vue')
    },
    {
      path: '/create',
      name: 'create',
      component:()=>import('../pages/Create/template.vue')
    },
    {
      path: '/user/:userId',
      name: 'user',
      component:()=>import('../pages/User/template.vue')
    },

  ]
})
