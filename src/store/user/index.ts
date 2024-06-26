// @ts-check
import { defineStore } from 'pinia'
import { userInfo } from '@/api/user/type'

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
    loginUser: {
      id: 0,
      nickname: '',
      motto: '',
      avatar: '',
      profession: '',
      company: '',
      introduction: '',
      interests: '',
    },
  }),

  actions: {
    setToken(token: string) {
      this.$patch({
        token: token,
      })
    },

    setLoginUser(loginUser: userInfo) {
      this.$patch({
        name: loginUser.nickname,
        isAdmin: false,
        loginUser: loginUser,
      })
    },
  },

  persist: {
    enabled: true,
  },
})
