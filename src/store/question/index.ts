// @ts-check
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'question',
  state: () => ({
    name: 'Eduardo',
    isAdmin: true,
  }),

  actions: {

  },
})
