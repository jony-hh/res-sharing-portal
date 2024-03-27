<script setup lang="ts">
import BlankHink from "@/views/user/item/BlankHink.vue";
import { ref } from "vue";
const collections = ref([])
</script>

<template>
  <blank-hink v-if="collections.length===0"></blank-hink>

</template>

<style scoped></style>
