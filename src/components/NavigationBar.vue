<template>
  <v-app-bar color="indigo-lighten-4" prominent>
    <v-btn icon>
      <v-icon icon="mdi-domain" @click="jumpToHomePage()"></v-icon>
    </v-btn>

    <v-toolbar-title @click="jumpToHomePage()">
      思政资源共享平台
    </v-toolbar-title>

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

    <v-container>
      <jony-select></jony-select>
      <v-btn icon="mdi-message-settings"></v-btn>
      <v-btn icon="mdi-account-heart"></v-btn>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import router from '@/router'
import JonySearch from '@/components/JonySearch.vue'
import JonySelect from '@/components/JonySelect.vue'

// 路由跳转
const navData = ref([
  { id: 1, name: '资源', link: '/resource' },
  { id: 2, name: '问答', link: '/qa' },
  { id: 3, name: 'wiki', link: '/wiki' },
])
const activePath = ref<any>('/compositive')
const disableSlide = ref(true)
const saveNavState = (value: string) => {
  disableSlide.value = false
  window.sessionStorage.setItem('activePath', value)
  activePath.value = value
}

const jumpToHomePage = () => {
  disableSlide.value = true
  console.log(disableSlide.value)
  window.sessionStorage.setItem('activePath', '/compositive')
  router.push('/compositive')
}
</script>
