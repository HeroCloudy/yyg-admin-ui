import { request } from '@/utils/request'
import { urls } from '@/api/urls'

/**
 * 登录
 */
export const login = (param: { username: string, password: string}) => {
  return request.post(urls.core.login, { data: param })
}

/**
 * 获取当前用户信息
 */
export const userProfile = () => {
  return request.get(urls.core.profile, {})
}
