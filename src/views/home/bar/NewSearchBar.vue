<template>
  <u-search
    class="j-search"
    :config="config"
    style="margin-left: 20px"
    @submit="submit"
  ></u-search>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { SearchConfig } from 'undraw-ui'
import { useRouter } from 'vue-router'

const config = ref<SearchConfig>({
  search: '', //可选输入框默认值
  keywords: [
    '电子与信息大类',
    '细胞生物学',
    '新闻传播大类',
    '教育与体育大类',
    '红色经典',
  ], // 搜索框关键字滚动
  hotSearchList: [
    '红色经典',
    '细胞生物学',
    '新闻传播大类',
    '新思想',
    '电子与信息大类',
    '美好明天',
    '努力生活',
    '健康人生',
    '天道酬勤',
    '备课',
  ], // top10 热门搜索 最多显示10条数据
})
const router = useRouter()
const submit = (val: string) => {
  if (val === '' || val === undefined) {
    return
  }
  router.push({
    path: '/search',
    query: { keyword: val },
  })
}
</script>

<style lang="scss" scoped></style>
