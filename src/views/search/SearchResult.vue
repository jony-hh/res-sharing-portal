<script setup lang="ts">
import { ref } from 'vue'
import { useCommonStore } from '@/store/common'
import { useRouter } from 'vue-router'

const drawer = ref(false)

// Define your navigation items
const navItems = [
  { name: '课程', url: '/search/course' },
  { name: '文档', url: '/search/document' },
  { name: '问答', url: '/search/qa' },
  { name: 'wiki', url: '/search/wiki' },
  { name: '用户', url: '/search/user' },
]
const common = useCommonStore()
const router = useRouter()
// Function to handle navigation
const navigateRouter = (url: string) => {
  common.displayBackground = true
  router.push({
    path: url,
    query: {
      keyword: router.currentRoute.value.query.keyword,
    },
  })
}

const judgeDisplay = (url: string) => {
  if (url === common.activePath) {
    return common.displayBackground
  }
  return false
}
</script>

<template>
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
</template>

<style scoped></style>
