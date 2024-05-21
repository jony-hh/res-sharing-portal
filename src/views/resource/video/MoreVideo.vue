<script setup lang="ts">
import VideoCard from '@/views/resource/video/VideoCard.vue'
import { fetchWholeVideoResource } from '@/api/res'
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useResStore } from '@/store/res'

const res = useResStore()
const videos = ref<any>([...res.course])
const isDisplaySkeleton = ref(true)
const isDisplayVideo = ref(false)
const router = useRouter()
const sendVideoId = (id: number) => {
  if (id === null || id === undefined) {
    ElMessage.info('数据错误')
    return
  }
  router.push({
    path: '/video/detail',
    query: { id: id },
  })
}

const getVideoData = async () => {
  const res = await fetchWholeVideoResource()
  videos.value.push(...res.data)
  res.setCourse(res.data)
}

onMounted(async () => {
  setTimeout(() => {
    isDisplaySkeleton.value = false
    isDisplayVideo.value = true
  }, 1000)
  if (res.course.length <= 0) {
    await getVideoData()
  }
})
</script>

<template>
  <div>
    <v-container v-if="isDisplaySkeleton">
      <v-row v-for="i in 2">
        <v-col v-for="i in 4" cols="12" md="3">
          <v-skeleton-loader
            class="mx-auto border"
            max-width="300"
            type="image, list-item-two-line"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="isDisplayVideo">
      <v-row>
        <v-col
          class="pa-0"
          cols="3"
          v-for="(video, index) in videos"
          :key="index"
          @click="sendVideoId(video.id)"
        >
          <video-card
            :videoInfo="video"
            style="cursor: pointer; user-select: none"
          ></video-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped></style>
