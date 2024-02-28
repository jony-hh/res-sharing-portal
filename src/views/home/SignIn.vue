<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field v-model="loginForm.username" label="username"></v-text-field>

      <v-text-field v-model="loginForm.password" label="Last name"></v-text-field>

      <v-btn type="submit" block class="mt-2" @click="submit">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { reqLogin } from '@/api/user'
import router from '@/router'

let loginForm = reactive({ username: 'jony', password: '123456' })

const submit = async () => {
  await reqLogin(loginForm).then((res) => {
    window.sessionStorage.setItem('activePath', '/login')
    router.push('/qa')
    console.log(res)
  })
}
</script>
