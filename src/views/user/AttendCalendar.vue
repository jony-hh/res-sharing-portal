<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/store/user'

const greetByTime = (): string => {
  const now = new Date()
  const currentHour = now.getHours()

  if (currentHour < 6) {
    return '凌晨好！'
  } else if (currentHour < 12) {
    return '早上好！'
  } else if (currentHour < 14) {
    return '中午好！'
  } else if (currentHour < 18) {
    return '下午好！'
  } else if (currentHour < 22) {
    return '晚上好！'
  } else {
    return '夜深了，注意休息！'
  }
}
const reminder = ref<string>(greetByTime())
const user = useUserStore()
</script>

<template>
  <v-card class="ma-2">
    <v-container>
      <v-row justify="space-around">
        <v-date-picker
          show-adjacent-months
          :header="user.loginUser.nickname + ', ' + reminder"
          title="签到日历"
        ></v-date-picker>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped></style>
