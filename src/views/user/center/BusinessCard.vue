<script setup lang="ts">
import router from '@/router'
import { useCommonStore } from '@/store/common'
import { useUserStore } from '@/store/user'

const common = useCommonStore()
const user = useUserStore()
const jumpToEditProfile = () => {
  common.disableSlide = true
  router.push('/edit')
}
</script>

<template>
  <v-card
    color="#E0E0E0"
    class="ma-2 d-flex"
    rounded="0"
    max-height="300"
    max-width="884"
  >
    <div>
      <v-card-actions>
        <v-avatar color="grey" rounded="0" size="150">
          <v-img :src="user.loginUser.avatar" cover></v-img>
        </v-avatar>
      </v-card-actions>
      <v-card-text class="pa-0 ml-2">{{ user.loginUser.nickname }}</v-card-text>
    </div>

    <div
      style="width: 100%"
      class="d-flex flex-column justify-lg-space-between"
    >
      <v-card-item>
        <v-card-text>
          {{ user.loginUser.motto }}
        </v-card-text>
      </v-card-item>

      <div class="d-flex justify-lg-space-between">
        <div></div>
        <v-btn class="ma-5" color="#E8F5E9" @click="jumpToEditProfile">
          修改资料
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<style scoped></style>
