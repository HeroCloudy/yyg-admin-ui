import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as coreApi from '@/api/core'

const coreStore = defineStore('core', () => {
  const token = ref()
  const userInfo = ref<any>({})

  const login = async (payload: { username: string, password: string}) => {
    const t = await coreApi.login(payload)
    token.value = t as string
  }

  const getUserInfo = async () => {
    userInfo.value = await coreApi.userProfile()
  }

  const exit = () => {
    token.value = null
    userInfo.value = {}
  }

  return {
    token,
    login,
    userInfo,
    getUserInfo,
    exit
  }
}, {
  persist: {
    storage: sessionStorage
  }
})

export default coreStore
