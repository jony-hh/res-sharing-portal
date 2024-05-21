<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { fetchTopicData } from '@/api/search'
import BlankData from '@/views/search/BlankData.vue'

const loading = ref(true)
const router = useRouter()
const topicData = ref<any>([])
const getTopicData = async (keyword: any) => {
  const res = await fetchTopicData(keyword)
  topicData.value.push(...res.data)
}

onMounted(async () => {
  await getTopicData(router.currentRoute.value.query.keyword)
})
</script>

<template>
  <v-row>
    <v-col v-if="topicData.length === 0 && !loading">
      <blank-data></blank-data>
    </v-col>
    <v-col
      v-else
      class="pa-5"
      cols="4"
      v-for="(res, index) in topicData"
      :key="index"
    >
      <v-card>{{ res.title }}</v-card>
    </v-col>
  </v-row>
</template>

<style scoped></style>
