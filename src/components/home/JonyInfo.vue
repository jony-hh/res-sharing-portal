<script setup lang="ts">

import { ref } from "vue";

const messages = ref([
  {
    from: 'developer',
    message: `TODO（待办）新功能上线啦 ！！！ 🎉🎉🎉`,
    time: '2022/11/7 10:42am',
    color: 'deep-purple-lighten-1',
  },
  {
    from: 'John Doe',
    message: '你好，交个朋友？',
    time: '10:37am',
    color: 'green',
  },
  {
    from: 'developer',
    message: '已上线，关于我们',
    time: '2020/11/9 9:47am',
    color: 'deep-purple-lighten-1',
  },
])
</script>

<template>
  <div>
    <v-card elevation="16" class="j-card" max-width="280">
      <v-img
        height="60"
        src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
        cover
        class="text-white"
      >
        <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
          <template v-slot:prepend>
            <v-btn icon="mdi mdi-alarm-light"></v-btn>
          </template>

          <v-toolbar-title class="text-h6">信息与公告</v-toolbar-title>

          <template v-slot:append>
            <v-btn icon="mdi-dots-vertical"></v-btn>
          </template>
        </v-toolbar>
      </v-img>

      <v-card-text>
        <div class="font-weight-bold ms-1 mb-2">Today</div>

        <v-timeline density="compact" align="start">
          <v-timeline-item
            v-for="message in messages"
            :key="message.time"
            :dot-color="message.color"
            size="x-small"
          >
            <div class="mb-4">
              <div class="font-weight-normal">
                <strong>{{ message.from }}</strong>
                @{{ message.time }}
              </div>
              <div>{{ message.message }}</div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.j-card {
  margin: 10px;
}
</style>
