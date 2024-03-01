<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="loginForm.username"
        label="username"
      ></v-text-field>

      <v-text-field
        v-model="loginForm.password"
        label="Last name"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2" @click="submit">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { reqLogin } from '@/api/user'
import router from '@/router'
import { useCommonStore } from '@/store/common'
import { useUserStore } from '@/store/user'
import { ElMessage } from "element-plus";

const common = useCommonStore()
const userStore = useUserStore()
let loginForm = reactive({ username: 'jony', password: '123456' })

const submit = async () => {
  await reqLogin(loginForm).then((res) => {
    if (res.code === 200) {
      ElMessage.success("登录成功！")
      router.push('/')
      localStorage.setItem("token",res.data.token)
      userStore.token = res.data.token
      return
    }
    ElMessage.error("用户名或密码错误！")
  })
}
</script>
