<script setup lang="ts">
import BasicInfo from '@/views/user/center/BasicInfo.vue'
import { ref } from 'vue'

const tab = ref('基本信息')
</script>

<template>
  <v-card class="ma-5">
    <div class="d-flex flex-row">
      <v-tabs v-model="tab" color="primary" direction="vertical">
        <v-tab value="option-1">
          <v-icon start>mdi-account</v-icon>
          基本信息
        </v-tab>
        <v-tab value="option-2">
          <v-icon start>mdi-lock</v-icon>
          账号设置
        </v-tab>
        <v-tab value="option-3">
          <v-icon start>mdi-access-point</v-icon>
          通用设置
        </v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item value="option-1">
          <basic-info></basic-info>
        </v-window-item>

        <v-window-item value="option-2">
          <v-card flat>
            <v-card-text>
              <P>【账号设置】正在内测中...</P>
            </v-card-text>
          </v-card>
        </v-window-item>

        <v-window-item value="option-3">
          <v-card flat>
            <v-card-text>
              <P>【通用设置】正在内测中...</P>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </v-card>
</template>

<style scoped></style>
