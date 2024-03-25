<script setup lang="ts">
import UserCard from '@/views/search/card/UserCard.vue'
</script>

<template>
  <v-row>
    <v-col class="pa-5" cols="4" v-for="i in 6" :key="index">
      <user-card></user-card>
    </v-col>
  </v-row>
</template>

<style scoped></style>
