// @ts-check
import { defineStore } from "pinia";

export const useCommonStore = defineStore({
  id: "common",
  state: () => ({
    // 隐藏导航滑动条
    disableSlide: true,
    activePath: "/compositive",
    name:''
  }),

  actions: {},
  // 开启会话存储
  persist: {
    enabled: true
  }

});
