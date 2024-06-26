//通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoute } from "./routes";
import { useCommonStore } from "@/store/common";
import { useUserStore } from "@/store/user";
//创建路由器
export const router = createRouter({
  //路由模式hash
  history: createWebHashHistory(),
  routes: constantRoute,
})

const blackList = ['/profile', '/logout']

router.beforeEach((to, from, next) => {
  const common = useCommonStore()
  const user = useUserStore()

  common.disableSlide = false
  common.activePath = to.path

  if (!user.token) {
    for (let i = 0; i < blackList.length; i++) {
      if (to.path.indexOf(blackList[i]) !== -1) {
        next('/')
        break
      }
      if (i === blackList.length - 1) {
        next()
      }
    }
  } else {
    next()
  }
})

export default router
