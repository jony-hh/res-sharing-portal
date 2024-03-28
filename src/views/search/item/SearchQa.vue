<script setup lang="ts">
import BlankData from '@/views/search/BlankData.vue'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { fetchQaData } from '@/api/search'

const loading = ref(true)
const router = useRouter()
const qaData = ref<any>([])
const getQaData = async (keyword: any) => {
  const res = await fetchQaData(keyword)
  qaData.value.push(...res.data)
}

onMounted(async () => {
  await getQaData(router.currentRoute.value.query.keyword)
})
</script>

<template>
  <v-row>
    <v-col v-if="qaData.length === 0 && !loading">
      <blank-data></blank-data>
    </v-col>
    <v-col
      v-else
      class="pa-5"
      cols="4"
      v-for="(qa, index) in qaData"
      :key="index"
    >
      <v-card>{{ qa.title }}</v-card>
    </v-col>
  </v-row>
</template>

<style scoped></style>
