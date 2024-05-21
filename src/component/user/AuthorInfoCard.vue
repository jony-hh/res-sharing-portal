<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchAuthorInfo } from '@/api/user'

const authorInfo = ref({
  avatar:
    'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLkSA49EGsBTREicEiaw9YSLAvDeVk0jwc9z4ibMRLVBvzdnkHDRNnr8FMMk2C3o5zQ40fggVADU094A/132',
  nickname: 'leapsss',
  motto: '这个人很懒~',
  level: 'LV0',
  fans: 0,
  beThumbed: 0,
  experience: 0,
})

const props = defineProps(['id'])
const isDisplayCard = ref(false)
const getAuthorInfo = async (id: number) => {
  const res = await fetchAuthorInfo(id)
  authorInfo.value = { ...res.data }
  isDisplayCard.value = true
}

onMounted(async () => {
  await getAuthorInfo(props.id)
})
</script>

<template>
  <v-card v-if="isDisplayCard" class="ma-5">
    <div
      class="g-sidebar-container"
      style="background-color: #fff; min-width: 305px; max-width: 305px"
    >
      <h2 class="slider-title ma-2" style="border-bottom: 1px solid #eaecef">
        关于作者 📝
      </h2>

      <div class="author-info">
        <div class="infos d-flex justify-lg-space-between">
          <div class="ma-2">
            <img
              :src="authorInfo.avatar"
              :alt="authorInfo.nickname"
              style="height: 40px; width: 40px; margin-right: 10px"
            />
            <span class="j-nickname">{{ authorInfo.nickname }}</span>
          </div>
          <div class="ma-2">
            <v-btn color="#004fc4">关 注</v-btn>
          </div>
        </div>
        <p class="ma-2">
          <span class="j-author-motto">{{ authorInfo.motto }}~</span>
        </p>
        <div class="ma-2">
          <v-row>
            <v-col cols="6">
              <p class="acht-item">
                <span class="level">等级</span>
                <span class="level-number">{{ authorInfo.level }}</span>
              </p>
              <p class="acht-item btm-acht">
                <span class="level">粉丝</span>
                <span class="level-number">{{ authorInfo.fans }}</span>
              </p>
            </v-col>
            <v-col cols="6">
              <p class="acht-item">
                <span class="level">获赞</span>
                <span class="level-number">{{ authorInfo.beThumbed }}</span>
              </p>
              <p class="acht-item btm-acht">
                <span class="level">经验</span>
                <span class="level-number">{{ authorInfo.experience }}</span>
              </p>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.level {
  margin-right: 10px;
}
</style>
