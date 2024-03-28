<script setup lang="ts">
import BusinessCard from '@/views/user/center/BusinessCard.vue'
import ItemBar from '@/views/user/center/ItemBar.vue'
import AttendCalendar from '@/views/user/AttendCalendar.vue'
</script>

<template>
  <div style="display: flex">
    <div style="flex: 3">
      <business-card></business-card>
      <item-bar></item-bar>
    </div>
    <div style="flex: 1">
      <attend-calendar></attend-calendar>
      <!--<weather-card></weather-card>-->
    </div>
  </div>
</template>

<style scoped></style>
