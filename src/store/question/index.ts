// @ts-check
import { defineStore } from 'pinia'

export const useQuestionStore = defineStore({
  id: 'question',
  state: () => ({
    name: 'Eduardo',
    isAdmin: true,
  }),

  actions: {},
})
