// 登录接口需要携带的参数ts类型
export interface loginForm {
  username: string
  password: string
}

// 获取用户信息
export interface userResponseData {
  code: number
  data: user
}

// 登录接口返回数据类型
export interface loginResponseData {
  code: number
  data: dataType
}

interface dataType {
  token: string
}

interface userInfo {
  userId: string
  avatar: string
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
  checkUser: userInfo
}
