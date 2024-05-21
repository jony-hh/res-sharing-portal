<script setup lang="ts">
import AuthorInfoCard from '@/component/user/AuthorInfoCard.vue'

const props = defineProps(['videoId'])
const videoId = props.videoId
</script>

<template>
  <author-info-card :id="videoId"></author-info-card>
</template>

<style scoped></style>
