<script setup lang="ts">
import { LocationQueryValue, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { fetchSingTopicResource } from '@/api/res'
import { useUserStore } from "@/store/user";

interface topicType {
  id: number
  backgroundUrl: string
  title: string
  content: string
}

const router = useRouter()
const userStore = useUserStore()
const topicInfo = ref<topicType>({
  id: 0,
  backgroundUrl: '',
  title: '',
  content: '',
})

// 操作dto
const operate = ref({
  content_id: topicInfo.value.id,
  user_id: userStore.loginUser.id,
  content_type: 'course',
})
// 点赞与收藏数据
const thumb_num = ref(0)
const star_num = ref(0)
// 按钮是否被点亮
const thumb_flag = ref(false)
const star_flag = ref(false)

const getSingleTopicData = async (id: string | null | LocationQueryValue[]) => {
  const res = await fetchSingTopicResource(id)
  topicInfo.value = { ...res.data }
}
// 更新数据
const thumb = async (operate: object) => {
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
const star = async (operate: object) => {
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

onMounted(async () => {
  await getSingleTopicData(router.currentRoute.value.query.id)
})
</script>

<template>
  <div>
    <div class="mb-4">
      <span class="j-intro">元素说明</span>
      <span style="float: right">
        <v-btn
          color="#61666D"
          icon="mdi-thumb-up"
          variant="text"
          @click="thumb(operate)"
        ></v-btn>
        <v-btn
          color="#61666D"
          icon="mdi-star"
          variant="text"
          @click="star(operate)"
        ></v-btn>
      </span>
    </div>
    <div>{{ topicInfo.content }}</div>
  </div>
</template>

<style scoped>
.j-intro {
  font-size: 16px;
  font-weight: 700;
  color: #dd363a;
  display: inline-block;
  position: relative;
  line-height: 20px;
}

.j-intro::after {
  content: '';
  width: 100%;
  height: 4px;
  background: linear-gradient(162deg, #dd363a, #df4531);
  border-radius: 2px;
  left: 0;
  display: inline-block;
  bottom: -13px;
  position: absolute;
}
</style>
