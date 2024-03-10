<script setup lang="ts">
import DocNavBar from '@/views/resource/docment/DocNavBar.vue'
import DocumentCard from '@/views/resource/docment/DocumentCard.vue'
import { feachDocumentResource } from '@/api/res'
import { onMounted, ref } from 'vue'

const documents = ref<any>([
  {
    id: '101',
    typeUrl:
      'https://cdn.pixabay.com/photo/2021/01/30/12/20/microsoft-word-5963679_960_720.png',
    tags: ['科技', '创新'],
    author: 'jony',
  },
  {
    id: '101',
    typeUrl:
      'https://cdn.pixabay.com/photo/2021/01/30/12/20/microsoft-word-5963679_960_720.png',
    tags: ['科技', '创新'],
    author: 'leapsss',
  },
  {
    id: '101',
    typeUrl:
      'https://cdn.pixabay.com/photo/2021/01/30/12/20/microsoft-word-5963679_960_720.png',
    tags: ['科技', '创新'],
    author: 'leapsss',
  },
  {
    id: '101',
    typeUrl:
      'https://cdn.pixabay.com/photo/2021/01/30/12/20/microsoft-word-5963679_960_720.png',
    tags: ['科技', '创新'],
    author: 'leapsss',
  },
])

const sendDocumentId = (id: string) => {}

const getDocumentData = async () => {
  const res = await feachDocumentResource()
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
