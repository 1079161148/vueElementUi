import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: resolve=>require(["@/pages/index"],resolve) //form表单
    },
    {
      path: '/collapse',
      name: 'collapse',
      component: resolve=>require(["@/pages/collapse"],resolve) //折叠面板
    }
  ]
})

export default router;