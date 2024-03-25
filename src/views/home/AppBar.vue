<script setup lang="ts">
import ProfileCard from '@/views/user/ProfileCard.vue'
import { useUserStore } from '@/store/user'
import { useCommonStore } from '@/store/common'
import router from '@/router'
import SelectMenu from '@/views/home/bar/SelectMenu.vue'
import { navData } from '@/constant/appBar'
import NewSearchBar from '@/views/home/bar/NewSearchBar.vue'

const userStore = useUserStore()
const common = useCommonStore()

const jumpToHomePage = () => {
  common.disableSlide = true
  router.push('/home')
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
  <v-app-bar color="#960A11" style="overflow: visible">
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
      <new-search-bar></new-search-bar>
    </v-container>
    <select-menu class="mx-3"></select-menu>
    <profile-card v-if="userStore.token"></profile-card>
    <v-btn color="white" variant="outlined" v-else @click="signIn">
      去登录
    </v-btn>
  </v-app-bar>
</template>

<style scoped></style>
