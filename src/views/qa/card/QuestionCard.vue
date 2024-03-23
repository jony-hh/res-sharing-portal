<script setup lang="ts">
// 使用 defineProps 来声明props
const props = defineProps(['questionInfo'])
</script>

<template>
  <v-card class="ma-2" style="user-select: none">
    <!-- 回答和阅读数部分 -->
    <v-card-actions>
      <div
        style="
          border: 1px solid dodgerblue;
          padding: 5px;
          margin: 10px;
          border-radius: 5px;
        "
      >
        <v-list-item-title>
          {{ questionInfo.answerCount }}
        </v-list-item-title>
        <v-list-item-subtitle>回答</v-list-item-subtitle>
      </div>
      <div>
        <v-list-item-title>
          {{ questionInfo.viewCount }}
        </v-list-item-title>
        <v-list-item-subtitle>阅读</v-list-item-subtitle>
      </div>

      <!-- 问题内容部分 -->
      <v-card-title class="headline">
        {{ questionInfo.title }}
      </v-card-title>
    </v-card-actions>

    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <!-- 问题标签部分 -->
          <v-chip-group>
            <v-chip
              v-for="(tag, index) in questionInfo.tags"
              :key="index"
              class="ma-2"
            >
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </template>

        <template v-slot:append>
          <!-- 用户信息部分 -->
          <v-row>
            <v-col cols="auto">
              <v-avatar>
                <!-- 用户头像 -->
                <img :src="questionInfo.avatar" alt="头像" />
              </v-avatar>
            </v-col>
            <v-col>
              <!-- 用户昵称和发问时间 -->
              <div>{{ questionInfo.nickname }}</div>
              <div>{{ questionInfo.askedTime }}</div>
            </v-col>
          </v-row>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
