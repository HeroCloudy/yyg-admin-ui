import router from '@/router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import useCoreStore from '@/store/modules/core'
import { storeToRefs } from 'pinia'

nProgress.configure({
  showSpinner: false
})

const whiteList = [
  '/login'
]

// 全局前置守卫
router.beforeEach(async (to, from) => {
  nProgress.start()

  const demoStore = useCoreStore()
  const { token, userInfo } = storeToRefs(demoStore)
  // 从 store 中获取token，判断是否登录
  if (token.value) {
    if (to.path === '/login') {
      return { path: '/' }
    } else {
      console.log(1, JSON.stringify(userInfo))
      if (!userInfo.value || JSON.stringify(userInfo.value) === '{}') {
        await demoStore.getUserInfo()
      }
      return true
    }
  } else {
    if (whiteList.includes(to.path)) {
      return true
    } else {
      return { path: '/login' }
    }
  }
})

// 全局后置钩子
router.afterEach(() => {
  nProgress.done(true)
})
