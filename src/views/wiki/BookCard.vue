<script setup lang="ts">
// 使用 defineProps 来声明props
const props = defineProps(['bookInfo'])
</script>

<template>
  <v-card class="d-flex ma-1" max-height="200" rounded="0">
    <div class="ma-1">
      <img
        style="width: 130px; height: 160px"
        :src="bookInfo.coverUrl"
        alt=""
      />
    </div>
    <div>
      <v-card-title>{{ bookInfo.bookTitle }}</v-card-title>
      <v-row class="ml-2">
        <v-col cols="auto">
          <v-avatar size="24">
            <!-- 用户头像 -->
            <img :src="bookInfo.avatar" alt="头像" />
          </v-avatar>
        </v-col>
        <v-col>
          <v-card-subtitle>{{ bookInfo.author }}</v-card-subtitle>
        </v-col>
      </v-row>
      <v-card-text>{{ bookInfo.summary }}</v-card-text>
    </div>
  </v-card>
</template>

<style scoped></style>
