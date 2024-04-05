<script setup lang="ts">
import { LocationQueryValue, useRouter } from 'vue-router'
import { fetchSingVideoResource, fetchStarNum, fetchThumbNum } from '@/api/res'
import { onMounted, ref } from 'vue'
import MyVideo from '@/views/resource/video/detail/MyVideo.vue'
import { useCommonStore } from '@/store/common'
import { useUserStore } from '@/store/user'
import { operateDTO } from '@/api/user/type'

interface course {
  id: number
  coverUrl: string
  college: string
  author: string
  student_num: number
  lecturer: string
  sign: string
  course_name: string
  video_list: [{ video_name: string; video_url: string }]
}
const flag = ref(false)
const router = useRouter()
const courseInfo = ref<course>({
  id: 0,
  coverUrl: '',
  college: '',
  author: '',
  student_num: 0,
  lecturer: '',
  sign: '',
  course_name: '',
  video_list: [{ video_name: '', video_url: '' }],
})
const currentVideo = ref({
  video_name: '',
  video_url: '',
})
const common = useCommonStore()
const userStore = useUserStore()

// 操作dto
const operateDTO = ref({
  content_id: courseInfo.value.id,
  user_id: userStore.loginUser.id,
  content_type: 'course',
})

// 点赞与收藏数据
const thumb_num = ref(0)
const star_num = ref(0)
// 按钮是否被点亮
const thumb_flag = ref(false)
const star_flag = ref(false)

// 初始化点赞数据
const getThumbNum = async (id: number) => {
  const res = await fetchThumbNum(id)
  thumb_num.value = res.data.thumb_num
}
// 初始化收藏数据
const getStarNum = async (id: number) => {
  const res = await fetchStarNum(id)
  star_num.value = res.data.star_num
  // TODO 更据返回结果判断按钮颜色
  if (res.code == 1) {
  }
}

// TODO 初始化点赞收藏按钮颜色
const initializeBtnColor = async () => {}

// 更新数据
const thumb = async (operateDTO: operateDTO) => {
  //const res = await userThumb(operateDTO)
  //thumb_num.value = res.data.thumb_num
  if (!thumb_flag.value) {
    thumb_num.value++
    thumb_flag.value = true
  } else {
    thumb_num.value--
    thumb_flag.value = false
  }
}
const star = async (operateDTO: operateDTO) => {
  //const res = await userStar(operateDTO)
  //star_num.value = res.data.star_num
  if (!star_flag.value) {
    star_num.value++
    star_flag.value = true
  } else {
    star_num.value--
    star_flag.value = false
  }
}

const getSingleVideoData = async (id: string | null | LocationQueryValue[]) => {
  const res = await fetchSingVideoResource(id)
  courseInfo.value = { ...res.data }
  currentVideo.value = { ...courseInfo.value.video_list[0] }
  common.setCurrentVideo(currentVideo.value)

  // 获取完课程信息后，再获取点赞收藏信息
  await getThumbNum(courseInfo.value.id)
  await getStarNum(courseInfo.value.id)
}

onMounted(async () => {
  await getSingleVideoData(router.currentRoute.value.query.id)
  flag.value = true
})
</script>

<template>
  <div>
    <div class="viewbox_report">
      <div class="text-sm-h6">{{ courseInfo.course_name }}</div>
      <div class="video-info-detail d-flex">
        <div class="view item my-2 mr-2">
          <img src="/public/static/svg/view-icon.svg" alt="view-icon" />
          <span>6309</span>
        </div>
        <div class="dm item ma-2">
          <img src="/public/static/svg/dm-icon.svg" alt="dm-icon" />
          <span>12</span>
        </div>
        <div class="pubdate item ma-2">
          <span class="pubdate-text">2024-03-20 08:00:00</span>
        </div>
        <div class="copyright item ma-2">
          <img src="/public/static/svg/forbid-icon.svg" alt="forbid-icon" />
          <span class="item-text">未经作者授权，禁止转载</span>
        </div>
      </div>
    </div>

    <div class="playerWrap" style="width: 100%; height: 420px">
      <my-video v-if="flag" :video_url="currentVideo.video_url" />
    </div>

    <div class="toolbar_report">
      <div class="video-toolbar-left-main d-flex">
        <div class="toolbar-left-item-wrap">
          <div
            title="点赞（Q）"
            class="video-like video-toolbar-left-item my-1 mx-2"
          >
            <v-btn
              color="#61666D"
              icon="mdi-thumb-up"
              variant="text"
              @click="thumb(operateDTO)"
            ></v-btn>
            <span class="video-like-info video-toolbar-item-text">
              {{ thumb_num }}
            </span>
          </div>
        </div>
        <div
          title="收藏（E）"
          class="video-fav video-toolbar-left-item my-1 mx-10"
        >
          <v-btn
            color="#61666D"
            icon="mdi-star"
            variant="text"
            @click="star(operateDTO)"
          ></v-btn>
          <span>{{ star_num }}</span>
        </div>
        <div
          title="分享（W）"
          class="video-share video-toolbar-left-item my-1 mx-2"
        >
          <v-btn color="#61666D" icon="mdi-share" variant="text"></v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$move_color: #1890ff;

.item,
.video-toolbar-left-item {
  display: flex;
  align-items: center;
}

.video-toolbar-left-item :hover {
  color: $move_color;
}
</style>
