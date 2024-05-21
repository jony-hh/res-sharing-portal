<script setup lang="ts">
import BlankData from '@/views/search/BlankData.vue'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { fetchQaData } from '@/api/search'
import QuestionCard from '@/views/qa/card/QuestionCard.vue'
import { ElMessage } from 'element-plus'

const loading = ref(true)
const router = useRouter()
const qaData = ref<any>([])
const getQaData = async (keyword: any) => {
  const res = await fetchQaData(keyword)
  qaData.value.push(...res.data)
  loading.value = false
}

const sendQuestionId = (id: number) => {
  if (id === null || id === undefined) {
    ElMessage.info('数据错误')
    return
  }
  router.push({
    path: '/question/detail',
    query: { id: id },
  })
}

onMounted(async () => {
  await getQaData(router.currentRoute.value.query.keyword)
})
</script>

<template>
  <v-row>
    <v-col v-if="qaData.length === 0 && !loading">
      <blank-data></blank-data>
    </v-col>
    <v-col
      v-else
      class="pa-5"
      cols="6"
      v-for="(question, index) in qaData"
      :key="index"
      @click="sendQuestionId(question.id)"
    >
      <question-card :questionInfo="question"></question-card>
    </v-col>
  </v-row>
</template>

<style scoped></style>
