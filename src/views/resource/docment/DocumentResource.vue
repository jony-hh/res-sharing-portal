<script setup lang="ts">
import DocNavBar from '@/views/resource/docment/DocNavBar.vue'
import DocumentCard from '@/views/resource/docment/DocumentCard.vue'
import { fetchDocumentResource } from '@/api/res'
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const documents = ref<any>([
  {
    id: 101,
    type: '',
    typeUrl:
      'https://cdn.pixabay.com/photo/2021/01/30/12/20/microsoft-word-5963679_960_720.png',
    tags: ['科技', '创新'],
    author: 'jony',
    document_url:
      'http://qn.jonyh.eu.org/2024/03/13/aae4841c69b4479a825e74d21b01dfde.doc',
  },
  {
    id: 102,
    type: '',
    typeUrl:
      'https://cdn.pixabay.com/photo/2021/01/30/12/20/microsoft-word-5963679_960_720.png',
    tags: ['科技', '创新'],
    author: 'leapsss',
    document_url:
      'http://qn.jonyh.eu.org/2024/03/13/aae4841c69b4479a825e74d21b01dfde.doc',
  },
  {
    id: 103,
    type: '',
    typeUrl:
      'https://cdn.pixabay.com/photo/2021/01/30/12/20/microsoft-word-5963679_960_720.png',
    tags: ['科技', '创新'],
    author: 'leapsss',
    document_url:
      'http://qn.jonyh.eu.org/2024/03/13/aae4841c69b4479a825e74d21b01dfde.doc',
  },
  {
    id: 104,
    type: '',
    typeUrl:
      'https://cdn.pixabay.com/photo/2021/01/30/12/20/microsoft-word-5963679_960_720.png',
    tags: ['科技', '创新'],
    author: 'leapsss',
    document_url:
      'http://qn.jonyh.eu.org/2024/03/13/aae4841c69b4479a825e74d21b01dfde.doc',
  },
])

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
  await getDocumentData()
})
</script>

<template>
  <div>
    <doc-nav-bar></doc-nav-bar>
    <v-container>
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
