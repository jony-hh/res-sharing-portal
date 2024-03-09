<script setup lang="ts">
import NewsBox from '@/views/home/content/NewsBox.vue'
import AttendCard from '@/views/home/content/AttendCard.vue'
import InfoCard from '@/views/home/content/InfoCard.vue'
import SlideshowBox from '@/views/home/content/SlideshowBox.vue'
</script>

<template>
  <div class="j-page">
    <div class="j-part1">
      <!-- 左侧栏目-->
      <div>
        <!-- 轮播图 -->
        <slideshow-box></slideshow-box>
        <!-- 资讯要闻-->
        <news-box></news-box>
      </div>
      <!-- 右侧栏目-->
      <div>
        <!-- 签到与日历-->
        <attend-card></attend-card>
        <!-- 信息与公告 -->
        <info-card></info-card>
      </div>
    </div>
    <div class="j-part2"></div>
  </div>
</template>

<style scoped>
.j-part1 {
  display: flex;
  justify-content: center;
}
</style>
