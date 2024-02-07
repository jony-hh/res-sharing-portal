<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field v-model="username" label="username"></v-text-field>

      <v-text-field v-model="password" label="Last name"></v-text-field>

      <v-btn type="submit" block class="mt-2" @click="submit">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { reqLogin } from '@/api/user'
import router from "@/router";
const username = ref('')

const password = ref('')
let loginForm = reactive({ username: 'admin', password: 'admin' })

const submit = async () => {
  loginForm.username = username.value
  loginForm.password = password.value
  await reqLogin(loginForm)
  router.push('/qa')
}
</script>

<style scoped lang="scss"></style>
