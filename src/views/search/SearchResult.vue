<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import SearchItemBar from '@/views/search/SearchItemBar.vue'

const router = useRouter()
onMounted(() => {
  console.log(router.currentRoute.value.query.keyword)
})
</script>

<template>
  <div>
    <search-item-bar></search-item-bar>
  </div>
</template>

<style scoped>
.search-condition-row {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
</style>
