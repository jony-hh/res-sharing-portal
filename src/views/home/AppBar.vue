<script setup lang="ts">
import ProfileCard from '@/views/user/ProfileCard.vue'
import { ref } from 'vue'

import { useUserStore } from '@/store/user'
import { useCommonStore } from '@/store/common'
import router from '@/router'
import SearchBar from "@/views/home/bar/SearchBar.vue";
import SelectMenu from "@/views/home/bar/SelectMenu.vue";

const navData = ref([
  { id: 1, name: '资源', link: '/resource' },
  { id: 2, name: '问答', link: '/qa' },
  { id: 3, name: 'wiki', link: '/wiki' },
])

const userStore = useUserStore()
const common = useCommonStore()

const jumpToHomePage = () => {
  common.disableSlide = true
  router.push('/')
}

const signIn = () => {
  common.disableSlide = true
  router.push('/signIn')
}

const displaySlide = () => {
  common.disableSlide = false
}

const judgeDisplay = (link: string) => {
  if (link === common.activePath) {
    return common.disableSlide
  }
  return true
}
</script>

<template>
  <v-app-bar color="indigo-lighten-4">
    <v-icon icon="mdi-domain"></v-icon>
    <v-btn style="user-select: none" @click="jumpToHomePage">
      思政资源共享平台
    </v-btn>
    <v-container>
      <v-tabs align-tabs="start">
        <v-tab
          :lazy="true"
          v-for="(tab, key, index) in navData"
          :key="index"
          :to="tab.link"
          :hide-slider="judgeDisplay(tab.link)"
          @click="displaySlide"
        >
          {{ tab.name }}
        </v-tab>
      </v-tabs>
    </v-container>

    <v-container>
      <search-bar></search-bar>
    </v-container>
    <select-menu class="mx-3"></select-menu>
    <profile-card v-if="userStore.token"></profile-card>
    <v-btn variant="outlined" v-else @click="signIn">去登录</v-btn>
  </v-app-bar>
</template>

<style scoped></style>
