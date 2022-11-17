import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
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
app.use(router)
app.use(ElementPlus)
app.use(YygAdminUi)
app.mount('#app')
