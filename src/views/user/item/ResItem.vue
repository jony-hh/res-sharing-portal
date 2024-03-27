<script setup lang="ts">
import { ref } from "vue";
import BlankHink from "@/views/user/item/BlankHink.vue";

const resources = ref([])
</script>

<template>
  <blank-hink v-if="resources.length===0"></blank-hink>
</template>

<style scoped></style>
