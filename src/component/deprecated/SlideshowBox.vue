<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { feachSlideshow, NEWS_PARAM_CONSTANT } from '@/api/home'

const show_index = ref(0)
const banners = ref<any>([])
const getSlideshowData = async () => {
  const res = await feachSlideshow(NEWS_PARAM_CONSTANT.FEACH_SLIDESHOW_FLAG)
  banners.value = res.data
  console.log(res.data)
}
onMounted(async () => {
  await getSlideshowData()
})
</script>

<template>
  <v-carousel height="280" class="rounded" v-model="show_index">
    <v-carousel-item
      style="object-fit: cover !important"
      v-for="(banner, i) in banners"
      :key="i"
      :src="banner.pictureUrl"
      cycle
    ></v-carousel-item>
  </v-carousel>
</template>

<style scoped></style>
