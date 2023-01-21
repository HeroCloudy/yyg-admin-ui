import Mock from 'mockjs'
import { urls } from '@/api/urls'

const { VITE_BASE_API } = import.meta.env

// 登录请求
Mock.mock(VITE_BASE_API + urls.core.login, 'post', () => '149e5916-fada-42cd-9298-5d85b7dff2bb')

Mock.mock(VITE_BASE_API + urls.core.profile, 'get', () => ({
  avatar: 'http://www.yygnb.com/logo.png',
  name: '张三',
  username: 'zhangsan',
  workNo: '0010001'
}))
