<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { feachSlideshow, PARAM_CONSTANT } from '@/api/home'

const show_index = ref(0)
const banners = ref<any>([])

onMounted(async () => {
  const { data } = await feachSlideshow(PARAM_CONSTANT.FEACH_FLAG)
  banners.value = data
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
