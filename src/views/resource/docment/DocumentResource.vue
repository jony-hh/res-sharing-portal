<script setup lang="ts">
import DocNavBar from '@/views/resource/docment/DocNavBar.vue'
import DocumentCard from '@/views/resource/docment/DocumentCard.vue'
import { fetchDocumentResource } from '@/api/res'
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useResStore } from '@/store/res'

const res = useResStore()
const documents = ref<any>([...res.document])
const isDisplaySkeleton = ref(true)
const isDisplayDocument = ref(false)
const router = useRouter()
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

const getDocumentData = async () => {
  const res = await fetchDocumentResource()
  documents.value.push(...res.data)
}

onMounted(async () => {
  setTimeout(() => {
    isDisplaySkeleton.value = false
    isDisplayDocument.value = true
  }, 1000)
  await getDocumentData()
})
</script>

<template>
  <div>
    <doc-nav-bar></doc-nav-bar>

    <v-container v-if="isDisplaySkeleton">
      <v-row v-for="i in 2">
        <v-col v-for="i in 2" cols="6">
          <v-skeleton-loader
            class="mx-auto border"
            max-width="300"
            type="image, list-item-two-line"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="isDisplayDocument">
      <v-row>
        <v-col
          class="pa-0"
          cols="6"
          v-for="(ducument, index) in documents"
          :key="index"
          @click="sendDocumentId(ducument.id)"
        >
          <document-card :documentInfo="ducument"></document-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped></style>
