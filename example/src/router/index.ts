import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
