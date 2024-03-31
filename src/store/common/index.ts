// @ts-check
import { defineStore } from 'pinia'

export const useCommonStore = defineStore({
  id: 'common',
  state: () => ({
    // 隐藏导航滑动条
    disableSlide: true,
    // 展示按钮背景
    displayBackground: true,
    // 激活路径
    activePath: '/compositive',
    // 当前的课程
    currentVideo: {
      video_url: '',
      video_name: '',
    },
  }),

  actions: {
    setCurrentVideo(currentVideo: {}) {
      this.$patch({
        currentVideo: currentVideo,
      })
    },
  },
  // 开启会话存储
  persist: {
    enabled: true,
  },
})
