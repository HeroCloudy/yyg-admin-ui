import Mock from 'mockjs'
import { urls } from '@/api/urls'

// 登录请求
Mock.mock(import.meta.env.VITE_BASE_API + urls.core.login, 'post', () => '149e5916-fada-42cd-9298-5d85b7dff2bb')
