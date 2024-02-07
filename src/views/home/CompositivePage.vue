<script setup lang="ts">
import NewSlideshow from '@/components/NewSlideshow.vue'
import JonyNews from '@/components/home/JonyNews.vue'
import JonyInfo from '@/components/home/JonyInfo.vue'
import JonyAttend from '@/components/home/JonyAttend.vue'
import JonyFineAtricle from "@/components/home/JonyFineAtricle.vue";
</script>

<template>
  <div class="j-page">
    <div class="part1">
      <div>
        <!-- 轮播图 -->
        <new-slideshow></new-slideshow>
        <!-- 资讯要闻-->
        <jony-news></jony-news>
      </div>
      <!-- 右侧栏目-->
      <div>
        <!-- 签到与日历-->
        <jony-attend></jony-attend>
        <!-- 信息与公告 -->
        <jony-info></jony-info>
      </div>
    </div>
    <div>
      <jony-fine-atricle></jony-fine-atricle>
    </div>
  </div>
</template>

<style scoped>
.part1 {
  display: flex;
  justify-content: center;
}
</style>
