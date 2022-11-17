import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import pinia from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import YygAdminUi from '@yyg-admin-ui/yyg-admin-ui'
import 'virtual:svg-icons-register'

const env = import.meta.env
console.log(env)
console.log('hello')

if (env.VITE_IS_MOCK === 'Y') {
  await import('@/mock')
}

const app = createApp(App)
  .use(router)
  .use(pinia)
  .use(ElementPlus)
  .use(YygAdminUi)
app.mount('#app')
