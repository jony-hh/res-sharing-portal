//统一管理咱们项目用户相关的接口
import request from '@/utils/request'
import type {
  loginForm,
  loginResponseData,
  userResponseData,
} from '@/api/user/type'

//项目用户相关的请求地址
enum USER_API {
  LOGIN_URL = '/sys/auth/login',
  USERINFO_URL = '/user/info',
  LOGOUT_URL = '/user/logout',
}

//登录接口
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(USER_API.LOGIN_URL, data)

//获取用户信息
export const reqUserInfo = () =>
  request.get<any, userResponseData>(USER_API.USERINFO_URL)

//退出登录
export const reqLogout = () => request.post<any, any>(USER_API.LOGOUT_URL)
