import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as coreApi from '@/api/core'

const coreStore = defineStore('core', () => {
  const token = ref()

  const login = async (payload: { username: string, password: string}) => {
    const t = await coreApi.login(payload)
    token.value = t as string
  }

  return {
    token,
    login
  }
}, {
  persist: {
    storage: sessionStorage
  }
})

export default coreStore
