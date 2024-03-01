<script setup lang="ts">
import BusinessCard from '@/views/user/center/BusinessCard.vue'
import WeatherCard from '@/views/user/center/WeatherCard.vue'
import ItemBar from "@/views/user/center/ItemBar.vue";
</script>

<template>
  <div style="display: flex">
    <div style="flex: 3">
      <business-card></business-card>
      <item-bar></item-bar>

    </div>
    <div style="flex: 1;">
      <weather-card></weather-card>
    </div>
  </div>
</template>

<style scoped>

</style>
