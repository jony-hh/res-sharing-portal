<script setup lang="ts">
import TopicCard from '@/views/resource/topic/TopicCard.vue'
import { fetchWholeTopicResource } from '@/api/res'
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useResStore } from '@/store/res'

const res = useResStore()
const topics = ref<any>([...res.topic])
const router = useRouter()
const isDisplaySkeleton = ref(true)
const isDisplayTopic = ref(false)
const sendTopicId = (id: number) => {
  if (id === null || id === undefined) {
    ElMessage.info('数据错误')
    return
  }
  router.push({
    path: '/topic/detail',
    query: { id: id },
  })
}

const getTopicData = async () => {
  const res = await fetchWholeTopicResource()
  topics.value.push(...res.data)
}

onMounted(async () => {
  setTimeout(() => {
    isDisplaySkeleton.value = false
    isDisplayTopic.value = true
  }, 1000)
  await getTopicData()
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

    <v-container v-if="isDisplayTopic">
      <v-row>
        <v-col
          class="pa-0"
          cols="3"
          v-for="(topic, index) in topics"
          :key="index"
          @click="sendTopicId(topic.id)"
        >
          <topic-card
            :topicInfo="topic"
            style="cursor: pointer; user-select: none"
          ></topic-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped></style>
