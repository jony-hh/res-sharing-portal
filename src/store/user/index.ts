// @ts-check
import { defineStore } from 'pinia'
import request from '@/utils/request'
import { userInfo, userResponseData } from '@/api/user/type'

/**
 * Simulate a login
 */
function apiLogin(a: string, p: string) {
  if (a === 'ed' && p === 'ed') return Promise.resolve({ isAdmin: true })
  if (p === 'ed') return Promise.resolve({ isAdmin: false })
  return Promise.reject(new Error('invalid credentials'))
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: '',
    nickname: '',
    isAdmin: false,
    test: '',
    loginUser: {
      nickname: '',
      motto: '',
      avatar: '',
    },
  }),

  actions: {
    logout() {
      this.$patch({
        name: '',
        isAdmin: false,
      })

      // we could do other stuff like redirecting the user
    },

    setToken() {
      this.$patch({
        token: localStorage.getItem('token'),
      })
    },

    setLoginUser(loginUser: userInfo) {
      this.$patch({
        name: loginUser.nickname,
        isAdmin: false,
        loginUser: loginUser,
      })
    },

    async testMock() {
      const res = await request.get<any, userResponseData>('/hedge/index')
      const { msg } = res
      this.$patch({
        test: msg,
      })
    },

    /**
     * Attempt to login a user
     */
    async login(user: string, password: string) {
      const userData = await apiLogin(user, password)

      this.$patch({
        name: user,
        ...userData,
      })
    },
  },

  persist: {
    enabled: true,
  },
})
