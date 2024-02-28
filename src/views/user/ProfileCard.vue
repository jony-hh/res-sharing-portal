<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'

const fav = ref(true)
const menu = ref(false)

const profile = () => {
  window.sessionStorage.setItem('activePath', '/login')
  router.push('/login')
}

const logout = () => {
  // alert("hello")
  open4('成功退出登录！！！')
}

const setting = () => {
  alert('进入设置')
}

const buttons = ref([
  { text: '我的主页' },
  { text: '我的资源' },
  { text: '我的Wiki' },
  { text: '我的问答' },
  { text: '我的动态' },
  { text: '浏览记录' },
])


const open1 = () => {
  ElMessage('this is a message.')
}
const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = (s:string) => {
  ElMessage.error(s)
}
</script>

<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      transition="scale-transition"
      :close-on-content-click="false"
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
              <v-btn>{{ button.text }}</v-btn>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn color="primary" variant="text" @click="setting">我的设置</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="red" variant="text" @click="logout">退出登录</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<style scoped></style>
