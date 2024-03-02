<script setup lang="ts">
import AppBar from '@/views/home/AppBar.vue'
</script>

<template>
  <v-layout class="rounded rounded-md">
    <app-bar></app-bar>

    <v-main style="min-width: 1200px; max-width: 1200px; margin: 0 auto">
      <!--路由占位-->
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<style scoped lang="scss">
div {
  p {
    font-size: 50px;
    color: $color;
  }
}
</style>
