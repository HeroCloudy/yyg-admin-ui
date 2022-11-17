import { request } from '@/utils/request'
import { urls } from '@/api/urls'

/**
 * 登录
 */
export const login = (param: { username: string, password: string}) => {
  return request.post(urls.system.login, { data: param })
}
