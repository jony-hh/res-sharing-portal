<template>
  <div>
    <v-dialog v-model="dialog" max-width="800">
      <template v-slot:activator="{ props: activatorProps }">
        <v-list-item-title
          v-bind="activatorProps"
          aria-controls
          @click="operate(operateItem)"
        >
          {{ operateItem.title }}
        </v-list-item-title>
      </template>

      <v-card prepend-icon="mdi-upload" title="上传资源">
        <div>
          <v-tabs align-tabs="left" stacked>
            <v-tab value="one" @click="switchTab(1)">
              <v-icon icon="mdi-file-document"></v-icon>
              文档
            </v-tab>
            <v-tab value="two" @click="switchTab(2)">
              <v-icon icon="mdi-video"></v-icon>
              视频
            </v-tab>
          </v-tabs>
        </div>

        <v-card-text v-if="sign === 1">
          <v-row dense>
            <v-col cols="12">
              <v-text-field
                prepend-icon="mdi-format-title"
                v-model="document.title"
                label="请输入文档标题"
                variant="outlined"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-file-input
                v-model="files"
                label="选择了文件当即上传，请等待..."
                variant="outlined"
                @change="uploadDocument()"
              ></v-file-input>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-text v-if="sign === 2">
          <v-dialog v-model="dialog2" max-width="800">
            <template v-slot:activator="{ props: activatorProps }">
              没有课程请点击创建：
              <v-btn
                v-bind="activatorProps"
                aria-controls
                @click="operate(operateItem)"
              >
                创建课程
              </v-btn>
            </template>

            <v-card
              prepend-icon="mdi-pencil-outline"
              class="pa-4"
              title="创建课程"
            >
              <v-row dense>
                <v-col cols="12">
                  <v-text-field
                    prepend-icon="mdi-format-title"
                    v-model="course.courseName"
                    label="请输入课程名称"
                    variant="outlined"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    prepend-icon="mdi-format-title"
                    v-model="course.lecturer"
                    label="请输入讲师名称"
                    variant="outlined"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    prepend-icon="mdi-format-title"
                    v-model="course.sign"
                    label="请输入课程标识，例：国家示范"
                    variant="outlined"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    prepend-icon="mdi-format-title"
                    v-model="course.college"
                    label="请输入归属大学"
                    variant="outlined"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-file-input
                    v-model="thunbnails"
                    label="选择了封面图片当即上传，请等待..."
                    variant="outlined"
                    multiple
                    accept="image/*"
                    @change="uploadThunbnail()"
                  ></v-file-input>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  text="取消"
                  variant="plain"
                  @click="dialog2 = false"
                ></v-btn>

                <v-btn
                  color="primary"
                  text="提交"
                  variant="tonal"
                  @click="submit2"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-divider class="ma-2"></v-divider>

          <div class="mb-2">选择你的课程进行上传视频</div>
          <div>
            <div v-if="courses.length > 0">
              <!-- 展示课程 -->
              <v-row>
                <v-col
                  class="pa-0"
                  cols="4"
                  v-for="(course, key) in courses"
                  :key="key"
                  :class="{ 'red-border': course.id === activeVideoId }"
                  @click="toggleClass(course.id)"
                >
                  <video-card :videoInfo="course" class=""></video-card>
                </v-col>
              </v-row>
            </div>
            <div v-else>你没有上传课程哦</div>
          </div>

          <v-divider class="ma-4"></v-divider>

          <v-row dense>
            <v-col cols="12">
              <v-text-field
                prepend-icon="mdi-format-title"
                v-model="video.chapter"
                label="请输入视频章节"
                variant="outlined"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-file-input
                v-model="videos"
                label="选择了视频当即上传，请等待..."
                variant="outlined"
                @change="uploadVideo()"
              ></v-file-input>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="取消" variant="plain" @click="dialog = false"></v-btn>

          <v-btn
            color="primary"
            text="提交"
            variant="tonal"
            @click="submit"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/store/user'
import {
  addCourse,
  addDocument,
  addVideo,
  fetchCourseByUserId,
  uploadFile,
  uploadImage,
} from '@/api/res'
import { ElMessage } from 'element-plus'
import VideoCard from '@/views/resource/video/VideoCard.vue'

const dialog = ref(false)
const dialog2 = ref(false)
const sign = ref(1)
const tab = ref(null)

const files = ref<any>(null)
const videos = ref<any>(null)
const thunbnails = ref<any>(null)

const submitSign = ref(false)
const submitSign2 = ref(false)
const userStore = useUserStore()
const activeVideoId = ref(0)
const hasBorder = ref(false)
const toggleClass = (id: any) => {
  console.log(id)
  activeVideoId.value = id
  hasBorder.value = !hasBorder.value
}

const courses = ref<Array<object>>([])

const props = defineProps(['operateItem'])

const switchTab = async (value: any) => {
  const res = await fetchCourseByUserId(userStore.loginUser.id)
  courses.value.push(...res.data)
  console.log(courses.value)
  sign.value = value
}

const document = ref<any>({
  userId: userStore.loginUser.id,
  title: '',
  author: userStore.loginUser.nickname,
  documentUrl: '',
  name: '',
})

const course = ref<any>({
  userId: userStore.loginUser.id,
  courseName: '',
  lecturer: '',
  sign: '',
  coverUrl: '',
  college: '',
})

const video = ref<any>({
  userId: userStore.loginUser.id,
  videoId: 0,
  chapter: '',
  url: '',
  level: 0,
})

const uploadDocument = async () => {
  if (!files.value) {
    console.error('请先选择文件')
    return
  }
  // 创建 FormData 对象
  let formData = new window.FormData()
  // 添加文件到 FormData 对象
  // files.value.forEach((file:File) => {
  //   formData.append('file', file)
  // })
  formData.append('file', files.value[0])
  const res = await uploadFile(formData)
  if (res.code == 200) {
    submitSign.value = true
    document.value.name = res.data[0][0].name
    document.value.documentUrl = res.data[0][1].url
    ElMessage.success('文档成功上传请保存')
  }
}

const uploadVideo = async () => {
  if (!videos.value) {
    console.error('请先选择文件')
    return
  }
  // 创建 FormData 对象
  let formData = new window.FormData()
  // 添加文件到 FormData 对象
  // videos.value.forEach((file:File) => {
  //   formData.append('file', file)
  // })
  formData.append('file', videos.value[0])
  const res = await uploadFile(formData)
  if (res.code == 200) {
    submitSign.value = true
    video.value.url = res.data[0][1].url
    ElMessage.success('文档成功上传请保存')
  }
}

const uploadThunbnail = async () => {
  if (!thunbnails.value) {
    console.error('请先选择文件')
    return
  }
  // 创建 FormData 对象
  let formData = new window.FormData()
  // 添加文件到 FormData 对象
  // thunbnails.value.forEach((file:File) => {
  //   formData.append('file', file)
  // })
  formData.append('file', thunbnails.value[0])
  const res = await uploadImage(formData)
  if (res.code == 200) {
    submitSign2.value = true
    course.value.coverUrl = res.data[0][1].url
    ElMessage.success('文档成功上传请保存')
  }
}

const submit2 = async () => {
  if (!thunbnails.value) {
    ElMessage.info('请选择文件上传...')
    return
  }
  if (!submitSign2.value) {
    ElMessage.info('请等待文件上传...')
    return
  }

  const res = await addCourse(course.value)
  if (res.code == 200) {
    video.value.videoId = res.data.id
    dialog2.value = false
    ElMessage.info('请等待审核...')
  }
}

const submit = async () => {
  if (sign.value === 1) {
    if (!files.value) {
      ElMessage.info('请选择文件上传...')
      return
    }
    if (!submitSign.value) {
      ElMessage.info('请等待文件上传...')
      return
    }
    const res1 = await addDocument(document.value)
    if (res1.code == 200) {
      dialog.value = false
      ElMessage.info('请等待审核...')
    }
  }
  if (sign.value === 2) {
    if (!videos.value) {
      ElMessage.info('请选择文件上传...')
      return
    }
    if (!submitSign.value) {
      ElMessage.info('请等待文件上传...')
      return
    }
    video.value.videoId = activeVideoId.value
    const res2 = await addVideo(video.value)
    if (res2.code == 200) {
      dialog.value = false
      ElMessage.info('请等待审核...')
    }
  }
}

const operate = (operateItem: any) => {
  if (userStore.token === '') {
    ElMessage.info('请先登录！')
    dialog.value = false
    return
  }
  if (operateItem.code === 'send') {
    dialog.value = true
    return
  }
  ElMessage.info('你没有权限！请去申请。')
}
</script>

<style scoped>
.red-border {
  border: 2px solid red; /* 红色边框样式 */
}
</style>
