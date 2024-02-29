<script setup lang="ts">
import JonySearch from "@/components/JonySearch.vue";
import JonySelect from "@/components/JonySelect.vue";
import ProfileCard from "@/views/user/ProfileCard.vue";
import { onMounted, ref } from "vue";

import { useUserStore } from "@/store/user";
import { useCommonStore } from "@/store/common";
import router from "@/router";

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

</script>

<template>
  <v-app-bar color="indigo-lighten-4">
    <v-icon icon="mdi-domain" ></v-icon>
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
            :hide-slider="common.disableSlide"
            @click="displaySlide"
        >
          {{ tab.name }}
        </v-tab>
      </v-tabs>
    </v-container>

    <v-container>
      <jony-search></jony-search>
    </v-container>
    <jony-select class="mx-3"></jony-select>
    <v-btn variant="outlined" v-if="!userStore.token" @click="signIn">去登录</v-btn>
    <profile-card v-else></profile-card>
  </v-app-bar>
</template>

<style scoped>

</style>
