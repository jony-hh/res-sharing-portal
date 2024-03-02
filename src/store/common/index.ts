// @ts-check
import { defineStore } from 'pinia'

export const useCommonStore = defineStore({
  id: 'common',
  state: () => ({
    // 隐藏导航滑动条
    disableSlide: true,
    // 展示按钮背景
    displayBackground: true,
    activePath: '/compositive',
  }),

  actions: {},
  // 开启会话存储
  persist: {
    enabled: true,
  },
})
