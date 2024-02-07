<script setup lang="ts">
import { ref } from "vue";

const loading = ref(false)

</script>

<template>
<div>
  <v-card elevation="16" class="mx-auto j-card" max-width="280">
    <v-card-text>
      <div style="color: #6200ea">政党重要节日</div>
      <p class="text-h6 text--primary">
        距离五四青年节还剩
        <span style="color: red">150</span>
        天
      </p>
      <div class="text--primary">
        中国共产党成立纪念日（7月1日）
        <br />
        国庆节（10月1日）
        <br />
        抗日战争胜利纪念日（9月3日）
      </div>
    </v-card-text>
    <v-card-actions style="position: relative">
      <v-btn
        style="margin: 0 10px; transform: translateY(30%)"
        :disabled="loading"
        :loading="loading"
        class="text-none mb-4"
        color="indigo-darken-3"
        size="x-middle"
        @click="loading = !loading"
      >
        查看签到日历
      </v-btn>
      <v-btn
        style="position: absolute; right: 0; margin: 0 10px"
        variant="flat"
        color="deep-purple-accent-4"
      >
        签到
      </v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>

<style scoped>
.j-card {
  margin: 10px;
}
</style>
