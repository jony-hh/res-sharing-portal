// @ts-check
import { defineStore } from 'pinia'

export const useResStore = defineStore({
  id: 'res',
  state: () => ({
    course: [],
    topic: [],
    document: [],
  }),

  actions: {
    setCourse(course: []) {
      this.$patch({
        course: course,
      })
    },
  },

  persist: {
    enabled: true,
  },
})
