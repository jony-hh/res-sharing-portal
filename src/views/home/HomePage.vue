<script setup lang="ts">
import jonySearch from '@/components/JonySearch.vue'
import jonySelect from '@/components/JonySelect.vue'
import { ref, onMounted, provide } from 'vue'
import router from '@/router'
import ProfileCard from "@/views/user/ProfileCard.vue";

const navData = ref([
  { id: 1, name: '资源', link: '/resource' },
  { id: 2, name: '问答', link: '/qa' },
  { id: 3, name: 'wiki', link: '/wiki' },
])

// 路由跳转
const jumpToTab = (link: string) => {
  router.push(link)
}
const activePath = ref<any>('/compositive')
const disableSlide = ref(true)

const saveNavState = (value: string) => {
  disableSlide.value = false
  window.sessionStorage.setItem('activePath', value)
  activePath.value = value
}
onMounted(() => {
  activePath.value = window.sessionStorage.getItem('activePath')
  if (activePath.value == null || activePath.value === '/compositive') {
    disableSlide.value = true
    router.push('/compositive')
    return
  }
  disableSlide.value = false
  router.push(activePath.value)
})

const jumpToHomePage = () => {
  disableSlide.value = true
  window.sessionStorage.setItem('activePath', '/compositive')
  router.push('/compositive')
}


</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="indigo-lighten-4">
      <v-icon icon="mdi-domain" @click="jumpToHomePage()"></v-icon>
      <v-btn style="user-select: none" @click="jumpToHomePage()">
        思政资源共享平台
      </v-btn>
      <v-container>
        <v-tabs align-tabs="start">
          <v-tab
            :lazy="true"
            v-for="(tab, key, index) in navData"
            :key="index"
            :to="tab.link"
            :hide-slider="disableSlide"
            @click="saveNavState(tab.link)"
          >
            {{ tab.name }}
          </v-tab>
        </v-tabs>
      </v-container>

      <v-container>
        <jony-search></jony-search>
      </v-container>
      <jony-select></jony-select>
      <profile-card></profile-card>
    </v-app-bar>

    <v-main style="min-width: 1200px; max-width: 1200px; margin: 0 auto">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
