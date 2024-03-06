<script setup lang="ts">
import VideoNavBar from '@/views/resource/video/VideoNavBar.vue'
import VideoCard from '@/views/resource/video/VideoCard.vue'

const documents = [
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
]

const sendDocumentId = (id: string) => {}
</script>

<template>
  <div>
    <video-nav-bar></video-nav-bar>
    <v-container>
      <v-row>
        <v-col
          class="pa-0"
          cols="3"
          v-for="(ducument, index) in documents"
          :key="index"
        >
          <video-card :documentInfo="ducument"></video-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped></style>
