<script setup lang="ts">
import VideoNavBar from '@/views/resource/video/VideoNavBar.vue'
import VideoCard from '@/views/resource/video/VideoCard.vue'
import { feachVideoResource } from '@/api/res'
import { onMounted, ref } from 'vue'

const videos = ref([
  {
    id: '101',
    coverUrl: 'http://wj008.xhsz.tisapi.com/upfiles/1642483539176.png',
    college: '海南大学',
    author: 'jony',
    student_num: 278,
    lecturer: '教师：闵义',
    sign: '国家示范',
    course_name: '细胞生物学',
  },
  {
    id: '101',
    coverUrl: 'http://wj008.xhsz.tisapi.com/upfiles/1642483539176.png',
    college: '海南大学',
    author: 'jony',
    student_num: 278,
    lecturer: '教师：闵义',
    sign: '国家示范',
    course_name: '细胞生物学',
  },
  {
    id: '101',
    coverUrl: 'http://wj008.xhsz.tisapi.com/upfiles/1642483539176.png',
    college: '海南大学',
    author: 'jony',
    student_num: 278,
    lecturer: '教师：闵义',
    sign: '国家示范',
    course_name: '细胞生物学',
  },
  {
    id: '101',
    coverUrl: 'http://wj008.xhsz.tisapi.com/upfiles/1642483539176.png',
    college: '海南大学',
    author: 'jony',
    student_num: 278,
    lecturer: '教师：闵义',
    sign: '国家示范',
    course_name: '细胞生物学',
  },
])

const sendDocumentId = (id: string) => {}

const getVideoData = async () => {
  const res = await feachVideoResource()
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
