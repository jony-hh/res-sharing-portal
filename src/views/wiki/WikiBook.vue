<script setup lang="ts">
import BookCard from '@/views/wiki/BookCard.vue'
import { ElMessage } from 'element-plus'
import { feachBookById, feachWIkiBooks } from '@/api/wiki'
import router from '@/router'
import { onMounted, ref } from 'vue'

const books = ref([
  {
    id: '10001',
    coverUrl:
      'https://static.developers.pub/9d5c6b348bd2432da6fd7e324e66327e.jpeg',
    bookTitle: 'web前端面试-面试官系列',
    avatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erwwAXLxAmVMb5ONicicbccEw9dUaxgOKwT29XEQUKGBmWrjEsUoE5eLibotjFXVbCfU9d3Q3kUxhc1Q/132',
    author: ' 动感超人',
    nodeNum: '471',
    status: '公开',
    summary:
      '包含不限于Vue面试题，React面试题，JS面试题，HTTP面试题，工程化面试题，CSS面试题，算法面试题，大厂面试题，高频面试题',
  },
  {
    id: '10002',
    coverUrl:
      'https://static.developers.pub/9d5c6b348bd2432da6fd7e324e66327e.jpeg',
    bookTitle: 'web前端面试-面试官系列',
    avatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erwwAXLxAmVMb5ONicicbccEw9dUaxgOKwT29XEQUKGBmWrjEsUoE5eLibotjFXVbCfU9d3Q3kUxhc1Q/132',
    author: ' 动感超人',
    nodeNum: '471',
    status: '公开',
    summary:
      '包含不限于Vue面试题，React面试题，JS面试题，HTTP面试题，工程化面试题，CSS面试题，算法面试题，大厂面试题，高频面试题',
  },
  {
    id: '10003',
    coverUrl:
      'https://static.developers.pub/9d5c6b348bd2432da6fd7e324e66327e.jpeg',
    bookTitle: 'web前端面试-面试官系列',
    avatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erwwAXLxAmVMb5ONicicbccEw9dUaxgOKwT29XEQUKGBmWrjEsUoE5eLibotjFXVbCfU9d3Q3kUxhc1Q/132',
    author: ' 动感超人',
    nodeNum: '471',
    status: '公开',
    summary:
      '包含不限于Vue面试题，React面试题，JS面试题，HTTP面试题，工程化面试题，CSS面试题，算法面试题，大厂面试题，高频面试题',
  },
  {
    id: '10004',
    coverUrl:
      'https://static.developers.pub/9d5c6b348bd2432da6fd7e324e66327e.jpeg',
    bookTitle: 'web前端面试-面试官系列',
    avatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erwwAXLxAmVMb5ONicicbccEw9dUaxgOKwT29XEQUKGBmWrjEsUoE5eLibotjFXVbCfU9d3Q3kUxhc1Q/132',
    author: ' 动感超人',
    nodeNum: '471',
    status: '公开',
    summary:
      '包含不限于Vue面试题，React面试题，JS面试题，HTTP面试题，工程化面试题，CSS面试题，算法面试题，大厂面试题，高频面试题',
  },
  {
    id: '10005',
    coverUrl:
      'https://static.developers.pub/9d5c6b348bd2432da6fd7e324e66327e.jpeg',
    bookTitle: 'web前端面试-面试官系列',
    avatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erwwAXLxAmVMb5ONicicbccEw9dUaxgOKwT29XEQUKGBmWrjEsUoE5eLibotjFXVbCfU9d3Q3kUxhc1Q/132',
    author: ' 动感超人',
    nodeNum: '471',
    status: '公开',
    summary:
      '包含不限于Vue面试题，React面试题，JS面试题，HTTP面试题，工程化面试题，CSS面试题，算法面试题，大厂面试题，高频面试题',
  },
  {
    id: '10006',
    coverUrl:
      'https://static.developers.pub/9d5c6b348bd2432da6fd7e324e66327e.jpeg',
    bookTitle: 'web前端面试-面试官系列',
    avatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erwwAXLxAmVMb5ONicicbccEw9dUaxgOKwT29XEQUKGBmWrjEsUoE5eLibotjFXVbCfU9d3Q3kUxhc1Q/132',
    author: ' 动感超人',
    nodeNum: '471',
    status: '公开',
    summary:
      '包含不限于Vue面试题，React面试题，JS面试题，HTTP面试题，工程化面试题，CSS面试题，算法面试题，大厂面试题，高频面试题',
  },
])

const sendId = async (id: string) => {
  await feachBookById(id).then((res) => {
    if (res.code === 200) {
      ElMessage.success('请求成功！')
      router.push('/wiki/bookDetail')
      return
    }
    ElMessage.error('暂无数据！')
  })
}

const getBookData = async () => {
  const res = await feachWIkiBooks()
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
