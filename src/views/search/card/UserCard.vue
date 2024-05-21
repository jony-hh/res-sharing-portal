<script setup lang="ts">
const props = defineProps(['user'])
</script>

<template>
  <v-card>
    <div class="d-flex ma-2">
      <div>
        <img
          style="width: 100px; height: 100px; border-radius: 50%"
          alt="faild"
          :src="user.avatar"
        />
      </div>
      <div
        style="width: 100%"
        class="d-flex flex-column justify-lg-space-around ml-2"
      >
        <h2 class="ml-2">{{ user.nickname }}</h2>
        <p class="ml-2">{{ user.introduction }}</p>
        <v-btn color="#004fc4" class="mr-4 align-self-end">+ 关注</v-btn>
      </div>
    </div>
  </v-card>
</template>

<style scoped></style>
