//统一管理咱们项目用户相关的接口
import request from '@/utils/request'
import type {
  loginForm,
  loginResponseData,
  userResponseData,
} from '@/api/user/type'

//项目用户相关的请求地址
enum USER_API {
  LOGIN_URL = '/user/center/localLogin',
  USERINFO_URL = '/user/center/getLoginUser',
  LOGOUT_URL = '/user/center/localLogout',
}

//登录接口
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(USER_API.LOGIN_URL, data)

//获取用户信息
export const reqGetLoginUser = (token: string) =>
  request.get<any, userResponseData>(USER_API.USERINFO_URL, {
    headers: { AuthToken: token },
  })

//退出登录
export const reqLogout = () => request.post<any, any>(USER_API.LOGOUT_URL)
