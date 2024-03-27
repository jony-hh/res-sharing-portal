<script setup lang="ts">
import router from '@/router'
import { useCommonStore } from '@/store/common'

const common = useCommonStore()
const jumpToEditProfile = () => {
  common.disableSlide = true
  console.log(111)
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
          <v-img
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            cover
          ></v-img>
        </v-avatar>
      </v-card-actions>
      <v-card-text class="pa-0 ml-2">不吃香菜</v-card-text>
    </div>

    <div>
      <v-card-item>
        <v-card-title>座右铭：</v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
      </v-card-item>

      <div class="d-flex justify-lg-space-between">
        <div class="d-flex">
          <div class="mx-5">
            <v-icon class="me-1" icon="mdi-heart"></v-icon>
            <span class="subheading me-2">256</span>
          </div>

          <div class="mx-5">
            <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
            <span class="subheading">45</span>
          </div>
        </div>


        <v-btn
          class="mx-5"
          color="#E8F5E9"
          @click="jumpToEditProfile"
        >
          修改资料
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<style scoped></style>
