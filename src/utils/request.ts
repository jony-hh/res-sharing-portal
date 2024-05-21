// 进行axios二次封装:使用请求与响应拦截器
import axios, { AxiosResponse } from "axios";
import { useUserStore } from "@/store/user";

// 第一步:利用axios对象的create方法,去创建axios实例(其他的配置:基础路径、超时的时间)
const request = axios.create({
  baseURL: import.meta.env.VITE_SERVER + import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

// 第二步:给axios的实例request添加请求拦截器
request.interceptors.request.use((config) => {
  const userStore = useUserStore()

  if (userStore?.token) {
    config.headers['auth-token'] = userStore.token
  }

  // 追加时间戳，防止GET请求缓存
  if (config.method?.toUpperCase() === 'GET') {
    config.params = { ...config.params, t: new Date().getTime() }
  }

  return config
})

//第三步:响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    // 成功回调
    // 有token则保存token
    const userStore = useUserStore()
    console.log(response)
    let token = response.headers['auth-token']
    if (token !== '' && token !== null && token !== undefined) {
      userStore.setToken(token)
    }
    // 简化数据
    return response.data
  },
  (error) => {
    // 失败回调:处理http网络错误的
    // 定义一个变量:存储网络错误信息
    let message = ''
    // http状态码
    console.log(error)
    const status = error.response.status
    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络出现问题'
        break
    }
    // 提示错误信息
    alert(message)
    return Promise.reject(error)
  },
)

//对外暴露
export default request
