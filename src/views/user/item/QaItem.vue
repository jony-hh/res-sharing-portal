<script setup lang="ts">
import { ref } from 'vue'
import BlankHink from '@/views/user/item/BlankHink.vue'

const qas = ref([])
</script>

<template>
  <blank-hink v-if="qas.length === 0"></blank-hink>
</template>

<style scoped></style>
