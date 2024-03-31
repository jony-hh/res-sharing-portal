//统一管理咱们项目用户相关的接口
import request from '@/utils/request'
import type {
  loginForm,
  loginResponseData,
  registerForm,
  userResponseData,
} from '@/api/user/type'
import { operateDTO } from '@/api/user/type'

//项目用户相关的请求地址
enum USER_API {
  LOGIN_URL = '/user/center/localLogin',
  REGISTER_URL = '/user/center/localRegister',
  USERINFO_URL = '/user/center/getLoginUser',
  LOGOUT_URL = '/user/center/localLogout',

  USER_THUMB = '/user/operate/thumb',
  USER_STAR = '/user/operate/star',

  POSE_QUESTION_API = '/user/operate/pose/question',
  WRITE_ANSWER_API = '/user/operate/write/answer',
}

//登录接口
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(USER_API.LOGIN_URL, data)

//注册接口
export const reqTegister = (data: registerForm) =>
  request.post<any, loginResponseData>(USER_API.REGISTER_URL, data)

//获取用户信息
export const reqGetLoginUser = (token: string) =>
  request.get<any, userResponseData>(USER_API.USERINFO_URL, {
    headers: { AuthToken: token },
  })

//退出登录
export const reqLogout = () => request.post<any, any>(USER_API.LOGOUT_URL)

export const userThumb = (data: operateDTO) =>
  request.post<any, any>(USER_API.USER_THUMB, data)

export const userStar = (data: operateDTO) =>
  request.post<any, any>(USER_API.USER_STAR, data)

export const poseQuestionApi = (question: any) =>
  request.post<any, any>(QA_API.POSE_QUESTION_API, question)

export const writeAnswerApi = (answer: any) =>
  request.post<any, any>(QA_API.WRITE_ANSWER_API, answer)
