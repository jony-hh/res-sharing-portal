<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { fetchDocumentData } from '@/api/search'
import BlankData from '@/views/search/BlankData.vue'
import DocumentCard from '@/views/resource/docment/DocumentCard.vue'
import { ElMessage } from 'element-plus'

const loading = ref(true)
const router = useRouter()
const documentData = ref<any>([])
const getDocumentData = async (keyword: any) => {
  const res = await fetchDocumentData(keyword)
  documentData.value.push(...res.data)
  loading.value = false
}

const sendDocumentId = (id: number) => {
  if (id === null || id === undefined) {
    ElMessage.info('数据错误')
    return
  }
  router.push({
    path: '/document/detail',
    query: { id: id },
  })
}

onMounted(async () => {
  await getDocumentData(router.currentRoute.value.query.keyword)
})
</script>

<template>
  <v-row>
    <v-col v-if="documentData.length === 0 && !loading">
      <blank-data></blank-data>
    </v-col>
    <v-col
      v-else
      class="pa-5"
      cols="6"
      v-for="(ducument, index) in documentData"
      :key="index"
      @click="sendDocumentId(ducument.id)"
    >
      <document-card :documentInfo="ducument"></document-card>
    </v-col>
  </v-row>
</template>

<style scoped></style>
