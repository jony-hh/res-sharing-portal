<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { fetchWikiData } from '@/api/search'
import BlankData from '@/views/search/BlankData.vue'

const loading = ref(true)
const router = useRouter()
const wikiData = ref<any>([])
const getWikiData = async (keyword: any) => {
  const res = await fetchWikiData(keyword)
  wikiData.value.push(...res.data)
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
      cols="4"
      v-for="(wiki, index) in wikiData"
      :key="index"
    >
      <v-card>
        {{ wiki.title }}
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped></style>
