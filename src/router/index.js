// history模式
import { createRouter, createWebHashHistory } from 'vue-router'

import MainPage from '../components/MainPage.vue'
import Login from '../components/Login.vue'
import SoulStation from '../components/SoulStation.vue'

const routes = [
  // 路由的默认路径
  {
    path: '/',
    redirect: '/mainpage',
  },
  {
    path: '/mainpage',
    component: MainPage,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/soulstation',
    component: SoulStation,
  },
]

// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
