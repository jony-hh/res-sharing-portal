<script setup lang="ts">
import { LocationQueryValue, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { feachSingTopicResource } from '@/api/res'

interface topicType {
  id: number
  backgroundUrl: string
  title: string,
  content:string
}

const router = useRouter()
const topicInfo = ref<topicType>({
  id: 0,
  backgroundUrl: '',
  title: '',
  content:''
})
const getSingleTopicData = async (id: string | null | LocationQueryValue[]) => {
  const res = await feachSingTopicResource(id)
  topicInfo.value = { ...res.data }
}

onMounted(async () => {
  await getSingleTopicData(router.currentRoute.value.query.id)
})
</script>

<template>
  <div>
    <div class="mb-4"><span class="j-intro">元素说明</span></div>
    <div>{{topicInfo.content}}</div>
  </div>
</template>

<style scoped>
.j-intro{
  font-size: 16px;
  font-weight: 700;
  color: #dd363a;
  display: inline-block;
  position: relative;
  line-height: 20px;
}

.j-intro::after{
    content: "";
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
