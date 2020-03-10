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
    }
  ]
})
