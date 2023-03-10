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
    path: '/pro-form',
    name: 'pro-form',
    component: () => import('@/views/temp/pro-form-demo.vue')
  },
  {
    path: '/description',
    name: 'description',
    component: () => import('@/views/temp/description-demo.vue')
  },
  {
    path: '/pro-description',
    name: 'pro-description',
    component: () => import('@/views/temp/pro-description-demo.vue')
  },
  {
    path: '/form-card',
    name: 'form-card',
    component: () => import('@/views/temp/form-card-demo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
