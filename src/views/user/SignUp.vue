<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://s21.ax1x.com/2024/03/10/pFy4iZ9.png"
    ></v-img>

    <v-card class="mx-auto pa-6" elevation="8" max-width="448" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        v-model="loginForm.username"
        density="compact"
        placeholder="account"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis">Password</div>

      <v-text-field
        v-model="loginForm.password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis">Confirm Password</div>

      <v-text-field
        v-model="loginForm.confirmPassword"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        @click="submit"
      >
        Sign Up
      </v-btn>

      <v-card-text class="text-center pa-0">
        <p
          class="text-blue"
          style="user-select: none"
          @click="router.push('/signin')"
        >
          已有账号，去登陆
          <v-icon icon="mdi-chevron-right"></v-icon>
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { reqLogin } from '@/api/user'
import router from '@/router'
import { useUserStore } from '@/store/user'
import { ElMessage } from 'element-plus'

const visible = ref(false)
const userStore = useUserStore()
let loginForm = reactive({
  username: '',
  password: '123456',
  confirmPassword: '123456',
})

const submit = async () => {
  if (loginForm.password !== loginForm.confirmPassword) {
    ElMessage.error('请输入一样的密码！')
    return
  }
  await reqLogin(loginForm).then((res) => {
    if (res.code === 200) {
      ElMessage.success('登录成功！')
      router.push('/home')
      localStorage.setItem('token', res.data.token)
      userStore.token = res.data.token
      return
    }
    ElMessage.error(res.message)
  })
}
</script>
