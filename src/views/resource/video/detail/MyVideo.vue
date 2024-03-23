<script setup lang="ts">
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import { onMounted, onUnmounted, ref } from 'vue'
import { useCommonStore } from '@/store/common'

const videoPlayer = ref<any>(null)
const myPlayer = ref<any>(null)
const common = useCommonStore()

onMounted(() => {
  console.log(common.currentVideo.video_url)
  myPlayer.value = videojs(
    videoPlayer.value,
    {
      poster: '',
      controls: true,
      sources: [
        {
          src: common.currentVideo.video_url,
          type: 'video/mp4',
        },
      ],
      controlBar: {
        remainingTimeDisplay: {
          displayNegative: false,
        },
      },
      playbackRates: [0.5, 1, 1.5, 2],
    },
    () => {
      myPlayer.value.log('play.....')
    },
  )
})

onUnmounted(() => {
  if (myPlayer.value) {
    myPlayer.value.dispose()
  }
})
</script>
<template>
  <video ref="videoPlayer" class="video-js"></video>
</template>
<style lang="scss" scoped>
.vjs_video_3-dimensions {
  width: 100%;
  height: 100%;
}
</style>
