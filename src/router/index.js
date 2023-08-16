import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/MyHome.vue'
import About from '@/views/MyAbout.vue'
import Picbox from '@/views/MyPicbox.vue'
import Time from '@/views/MyTimescroll.vue'
import ArticleDetial from '@/views/ArticleDetial.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/time', component: Time },
    { path: '/picbox', component: Picbox },
    { path: '/nextpage', redirect: '/home' },
    { path: '/top', redirect: '/home' },
    {
      path: '/article/:id',
      component: ArticleDetial,
      props: true
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // 如果有保存的滚动位置，则恢复之前的位置
    if (savedPosition) {
      return savedPosition
    }
    // 否则，滚动到页面顶部
    return { x: 0, y: 0 }
  }
})

export default router
