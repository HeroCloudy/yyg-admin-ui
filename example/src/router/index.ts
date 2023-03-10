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
    name: 'form',
    component: () => import('@/views/temp/form-demo.vue')
  },
  {
    path: '/description',
    name: 'description',
    component: () => import('@/views/temp/description-demo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
