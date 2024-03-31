// 登录接口需要携带的参数ts类型

export interface loginForm {
  username: string
  password: string
}

export interface registerForm {
  username: string
  password: string
  confirmPassword: string
}

export interface operateDTO {
  content_id: number
  user_id: number
  content_type: string
}

// 获取用户信息
export interface userResponseData {
  code: number
  msg: string
  data: user
}

// 登录接口返回数据类型
export interface loginResponseData {
  code: number
  message: string
  data: dataType
}

interface dataType {
  token: string
}

export interface userInfo {
  userId: string
  avatar: string
  motto: string
  nickname: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

// 定义服务器返回用户信息相关的数据类型
interface user {
  loginUser: userInfo
}
