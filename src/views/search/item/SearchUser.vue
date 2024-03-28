<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { fetchUserData } from '@/api/search'
import BlankData from '@/views/search/BlankData.vue'
import UserCard from '@/views/search/card/UserCard.vue'

const loading = ref(true)
const router = useRouter()
const userData = ref<Array<object>>([])
const getUserData = async (keyword: any) => {
  const res = await fetchUserData(keyword)
  userData.value.push(...res.data)
}

onMounted(async () => {
  await getUserData(router.currentRoute.value.query.keyword)
})
</script>

<template>
  <v-row>
    <v-col v-if="userData.length === 0 && !loading">
      <blank-data></blank-data>
    </v-col>
    <v-col
      v-else
      class="pa-5"
      cols="4"
      v-for="(user, index) in userData"
      :key="index"
    >
      <user-card></user-card>
    </v-col>
  </v-row>
</template>

<style scoped></style>
