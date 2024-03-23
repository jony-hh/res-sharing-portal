<script setup lang="ts">
import PlayerCard from '@/views/resource/video/detail/PlayerCard.vue'
import CommentPart from '@/views/resource/video/detail/CommentPart.vue'
import UploaderCard from '@/views/resource/video/detail/UploaderCard.vue'
</script>

<template>
  <div class="d-flex">
    <div class="left-container ma-1" style="flex: 3">
      <player-card></player-card>
      <comment-part></comment-part>
    </div>

    <div class="right-container ma-1" style="flex: 1; border: 1px red solid">
      <uploader-card></uploader-card>
    </div>
  </div>
</template>

<style scoped></style>
