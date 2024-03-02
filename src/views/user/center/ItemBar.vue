<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import { useCommonStore } from '@/store/common'

const drawer = ref(false)

// Define your navigation items
const navItems = [
  { name: '动态', url: '/profile/activity' },
  { name: '资源', url: '/profile/res' },
  { name: '问答', url: '/profile/question' },
  { name: '喜欢', url: '/profile/like' },
  { name: '收藏集', url: '/profile/collection' },
  { name: '浏览记录', url: '/profile/record' },
]
const common = useCommonStore()
// Function to handle navigation
const navigateRouter = (url: string) => {
  common.displayBackground = true
  router.push(url)
}

const judgeDisplay = (url: string) => {
  if (url === common.activePath) {
    return common.displayBackground
  }
  return false
}
</script>

<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="d-flex" style="background-color: #cfd8dc">
            <!-- Your navigation items -->
            <v-btn
              variant="text"
              class="mx-5"
              v-for="(item, index) in navItems"
              :key="index"
              :active="judgeDisplay(item.url)"
              @click="navigateRouter(item.url)"
            >
              {{ item.name }}
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Your main content goes here -->
      <v-row>
        <v-col cols="12">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped></style>
