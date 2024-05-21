<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import { fetchCourseData } from '@/api/search'
import BlankData from '@/views/search/BlankData.vue'
import VideoCard from '@/views/resource/video/VideoCard.vue'
import { ElMessage } from 'element-plus'

const loading = ref(true)
const router = useRouter()
const courseData = ref<any>([])
const getCourseData = async (keyword: any) => {
  const res = await fetchCourseData(keyword)
  courseData.value.push(...res.data)
  loading.value = false
}

// 监听路由变化
watch(
  () => router.currentRoute.value.query.keyword,
  async (newKeyword, oldKeyword) => {
    if (newKeyword !== oldKeyword) {
      if (newKeyword !== '' && newKeyword !== undefined) {
        courseData.value = []
        await getCourseData(newKeyword)
        // 如果需要在数据更新后刷新页面
        // window.location.reload();
      }
    }
  },
)

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

onMounted(async () => {
  await getCourseData(router.currentRoute.value.query.keyword)
})
</script>

<template>
  <v-row>
    <v-col v-if="courseData.length === 0 && !loading">
      <blank-data></blank-data>
    </v-col>
    <v-col
      v-else
      class="pa-5"
      cols="4"
      v-for="(course, index) in courseData"
      :key="index"
      @click="sendVideoId(course.id)"
    >
      <video-card :videoInfo="course"></video-card>
    </v-col>
  </v-row>
</template>

<style scoped></style>
