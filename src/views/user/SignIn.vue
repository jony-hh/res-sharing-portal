<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://s21.ax1x.com/2024/03/10/pFy4iZ9.png"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        v-model="loginForm.username"
        density="compact"
        placeholder="account"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Password

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          忘记密码？
        </a>
      </div>

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

      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        @click="submit"
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <p
          class="text-blue"
          style="user-select: none"
          @click="router.push('/signup')"
        >
          没有账号，去注册
          <v-icon icon="mdi-chevron-right"></v-icon>
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { reqGetLoginUser, reqLogin } from '@/api/user'
import router from '@/router'
import { useUserStore } from '@/store/user'
import { ElMessage } from 'element-plus'

const visible = ref(false)
const userStore = useUserStore()
let loginForm = reactive({ username: 'jony', password: '123456' })
const submit = async () => {
  const res = await reqLogin(loginForm)
  if (res.code === 200) {
    ElMessage.success('登录成功！')
    await router.push('/home')
    localStorage.setItem('token', userStore.token)
  }
  const res2 = await reqGetLoginUser(userStore.token)
  if (res2.code === 200) {
    userStore.setLoginUser(res2.data.loginUser)
    return
  }
  ElMessage.error(res.message)
}
</script>
