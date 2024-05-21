<script setup lang="ts">
import BookCard from '@/views/wiki/BookCard.vue'
import { ElMessage } from 'element-plus'
import { fetchBookById, fetchWIkiBooks } from '@/api/wiki'
import router from '@/router'
import { onMounted, ref } from 'vue'

const books = ref([])

const sendId = async (id: string) => {
  await fetchBookById(id).then((res) => {
    if (res.code === 200) {
      router.push('/wiki/bookDetail')
      return
    }
    ElMessage.error('暂无数据！')
  })
}

const getBookData = async () => {
  const res = await fetchWIkiBooks()
  books.value.push(...res.data)
}

onMounted(async () => {
  await getBookData()
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        class="pa-0"
        cols="6"
        v-for="(book, index) in books"
        :key="index"
        @click="sendId(book.id)"
      >
        <book-card :bookInfo="book"></book-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
