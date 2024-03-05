<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import 'element-plus/es/components/message/style/css'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useCommonStore } from '@/store/common'
import { useUserStore } from '@/store/user'

const fav = ref(true)
const menu = ref(false)
const common = useCommonStore()
const useStore = useUserStore()
const jumpToProfile = (url: string) => {
  common.disableSlide = true
  router.push(url)
}

const enterProfile = () => {
  common.disableSlide = true
  router.push('/profile')
}
const logout = () => {
  ElMessageBox.confirm('确定继续退出登录吗？', 'Warning', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      localStorage.setItem('token', '')
      useStore.token = ''
      router.push('/')
      ElMessage.success('成功退出登录！！！')
    })
    .catch(() => {
      ElMessage.info('取消退出登录！！！')
    })
}

const setting = () => {
  open1()
}

const buttons = ref([
  { text: '我的动态', url: '/profile/activity' },
  { text: '我的资源', url: '/profile/res' },
  { text: '我的问答', url: '/profile/question' },
  { text: '我的喜欢', url: '/profile/like' },
  { text: '我的收藏', url: '/profile/collection' },
  { text: '浏览记录', url: '/profile/record' },
])

const open1 = () => {
  ElMessage('this is a message.')
}
const open2 = (s: string) => {
  ElMessage({
    message: s,
    type: 'success',
  })
}
const open3 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = (s: string) => {
  ElMessage.error(s)
}
</script>

<template>
  <div class="text-center">
    <v-menu
      location="bottom"
      v-model="menu"
      transition="scale-transition"
      :close-on-content-click="true"
    >
      <template v-slot:activator="{ props }">
        <v-btn color="indigo" v-bind="props">个人中心</v-btn>
      </template>

      <v-card max-width="300" style="top: 20px">
        <v-list>
          <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
            title="John Leider"
            subtitle="Founder of Vuetify"
          >
            <template v-slot:append>
              <v-btn
                :class="fav ? 'text-red' : ''"
                icon="mdi-heart"
                @click="fav = !fav"
              ></v-btn>
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-container>
          <v-row>
            <v-col
              class=""
              cols="6"
              v-for="(button, index) in buttons"
              :key="index"
            >
              <v-btn @click="jumpToProfile(button.url)">
                {{ button.text }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn color="primary" variant="text" @click="enterProfile">
            进入主页
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="red" variant="text" @click="logout">退出登录</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<style scoped></style>
