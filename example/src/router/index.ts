import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'index'
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
  },
  {
    path: '/form',
    name: 'sform',
    component: () => import('@/views/temp/form-demo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
