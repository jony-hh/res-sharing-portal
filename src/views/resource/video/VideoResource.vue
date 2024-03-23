<script setup lang="ts">
import VideoNavBar from '@/views/resource/video/VideoNavBar.vue'
import VideoCard from '@/views/resource/video/VideoCard.vue'
import { fetchVideoResource } from '@/api/res'
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const videos = ref([
  {
    id: 101,
    coverUrl: 'http://wj008.xhsz.tisapi.com/upfiles/1642483539176.png',
    college: '海南大学',
    author: 'jony',
    student_num: 278,
    lecturer: '教师：闵义',
    sign: '国家示范',
    course_name: '细胞生物学',
  },
  {
    id: 102,
    coverUrl: 'http://wj008.xhsz.tisapi.com/upfiles/1642483539176.png',
    college: '海南大学',
    author: 'jony',
    student_num: 278,
    lecturer: '教师：闵义',
    sign: '国家示范',
    course_name: '细胞生物学',
  },
  {
    id: 103,
    coverUrl: 'http://wj008.xhsz.tisapi.com/upfiles/1642483539176.png',
    college: '海南大学',
    author: 'jony',
    student_num: 278,
    lecturer: '教师：闵义',
    sign: '国家示范',
    course_name: '细胞生物学',
  },
  {
    id: 104,
    coverUrl: 'http://wj008.xhsz.tisapi.com/upfiles/1642483539176.png',
    college: '海南大学',
    author: 'jony',
    student_num: 278,
    lecturer: '教师：闵义',
    sign: '国家示范',
    course_name: '细胞生物学',
  },
])
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
  const res = await fetchVideoResource()
  videos.value.push(...res.data)
}

onMounted(async () => {
  await getVideoData()
})
</script>

<template>
  <div>
    <video-nav-bar></video-nav-bar>
    <v-container>
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
