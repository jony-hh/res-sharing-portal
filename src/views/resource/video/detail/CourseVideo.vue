<script setup lang="ts">
import PlayerCard from '@/views/resource/video/detail/PlayerCard.vue'
import CommentPart from '@/views/resource/video/detail/CommentPart.vue'
import UploaderCard from '@/views/resource/video/detail/UploaderCard.vue'
import VideoRecommendCard from '@/views/resource/video/detail/VideoRecommendCard.vue'
import { useRouter } from 'vue-router'

const props = defineProps(['id'])
const router = useRouter()
</script>

<template>
  <div class="d-flex">
    <div class="left-container ma-1" style="flex: 3">
      <player-card></player-card>
      <comment-part></comment-part>
    </div>

    <div class="right-container" style="flex: 1">
      <uploader-card
        :videoId="router.currentRoute.value.query.id"
      ></uploader-card>
      <video-recommend-card></video-recommend-card>
    </div>
  </div>
</template>

<style scoped></style>
