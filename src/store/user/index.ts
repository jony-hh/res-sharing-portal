// @ts-check
import { defineStore } from 'pinia'

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
    name: 'Eduardo',
    isAdmin: true,
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
