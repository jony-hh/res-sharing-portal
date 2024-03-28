<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { fetchCompositeData } from '@/api/search'
import BlankData from '@/views/search/BlankData.vue'

const loading = ref(true)
const router = useRouter()
const compositeData = ref<any>([])
const getCompositeData = async (keyword: any) => {
  const res = await fetchCompositeData(keyword)
  compositeData.value.push(...res.data)
  loading.value = false
}

onMounted(async () => {
  await getCompositeData(router.currentRoute.value.query.keyword)
})
</script>

<template>
  <v-row>
    <v-col v-if="compositeData.length === 0 && !loading">
      <blank-data></blank-data>
    </v-col>
    <v-col
      v-else
      class="pa-5"
      cols="4"
      v-for="(composite, index) in compositeData"
      :key="index"
    >
      <v-card>{{ composite.title }}</v-card>
    </v-col>
  </v-row>
</template>

<style scoped></style>
