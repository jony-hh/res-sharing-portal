<script setup lang="ts">
const props = defineProps(['topicInfo'])
</script>

<template>
  <v-card class="ma-1">
    <v-img
      class="bg-white position-relative"
      :src="topicInfo.backgroundUrl"
      aria-controls
    >
      <div v-text="topicInfo.title" class="j-el-title"></div>
    </v-img>
  </v-card>
</template>

<style scoped>
.j-el-title {
  position: absolute;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  color: #bd0e10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
