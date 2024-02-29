<script setup lang="ts">
import { ref } from 'vue'
import router from "@/router";

const drawer = ref(false)

// Define your navigation items
const navItems = [
  { name: '动态', url: '/profile/activity' },
  { name: '资源', url: '/profile/res' },
  { name: '问答', url: '/profile/question' },
  { name: '喜欢', url: '/profile/like' },
  { name: '收藏集', url: '/profile/collection' },
  { name: '浏览记录', url: '/profile/history' }
];

// Function to handle navigation
const navigateRouter = (url: string) => {
  console.log(url)
  router.push(url)
}
</script>

<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="d-flex" style="background-color: #CFD8DC">
            <!-- Your navigation items -->
            <v-btn
              variant="text"
              class="mx-5"
              v-for="(item, index) in navItems"
              :key="index"
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
