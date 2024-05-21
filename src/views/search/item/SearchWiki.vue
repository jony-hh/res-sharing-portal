<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { fetchWikiData } from '@/api/search'
import BlankData from '@/views/search/BlankData.vue'
import BookCard from '@/views/wiki/BookCard.vue'

const loading = ref(true)
const router = useRouter()
const wikiData = ref<any>([])
const getWikiData = async (keyword: any) => {
  const res = await fetchWikiData(keyword)
  wikiData.value.push(...res.data)
  loading.value = false
}

onMounted(async () => {
  await getWikiData(router.currentRoute.value.query.keyword)
})
</script>

<template>
  <v-row>
    <v-col v-if="wikiData.length === 0 && !loading">
      <blank-data></blank-data>
    </v-col>
    <v-col
      v-else
      class="pa-5"
      cols="6"
      v-for="(wiki, index) in wikiData"
      :key="index"
    >
      <book-card :bookInfo="wiki" />
    </v-col>
  </v-row>
</template>

<style scoped></style>
