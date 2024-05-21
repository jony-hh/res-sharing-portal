<script setup lang="ts">
import QuestionDetailCard from '@/views/qa/detail/card/QuestionDetailCard.vue'
import AnswerCard from '@/views/qa/detail/card/AnswerCard.vue'
import { onMounted, ref } from 'vue'
import { LocationQueryValue, useRouter } from 'vue-router'
import { fetchAnswerByQuestionId } from '@/api/qa'
import AuthorInfoCard from '@/component/user/AuthorInfoCard.vue'
import RecommendCard from '@/views/qa/detail/card/QaRecommendCard.vue'

const router = useRouter()
const answers = ref<any>([])

const getAnswersData = async (id: string | null | LocationQueryValue[]) => {
  const res = await fetchAnswerByQuestionId(id)
  answers.value.push(...res.data)
  console.log(answers.value)
}

onMounted(async () => {
  await getAnswersData(router.currentRoute.value.query.id)
})
</script>

<template>
  <div class="d-flex">
    <div style="flex: 3">
      <question-detail-card></question-detail-card>

      <h2 class="ma-5" style="border-bottom: 1px solid #eaecef">回答列表</h2>

      <answer-card v-for="answer in answers" :answer="answer"></answer-card>
    </div>

    <div style="flex: 1">
      <author-info-card
        :id="router.currentRoute.value.query.id"
      ></author-info-card>
      <recommend-card></recommend-card>
    </div>
  </div>
</template>

<style scoped></style>
