<script setup lang="ts">
const props = defineProps(['VideoInfo'])
</script>

<template>
  <v-card>
    <div class="ma-2 position-relative">
      <div class="">国家示范</div>
      <div class="txtbox">海南大学</div>
      <div class="imgbox">
        <img
          style="height: 165px;width: 280px"
          src="http://wj008.xhsz.tisapi.com/upfiles/1642483539176.png"
          alt=""
        />
      </div>
    </div>
    <div class="content">
      <div class="title">
        <a href="/curriculum/detail/983" title="细胞生物学">细胞生物学</a>
      </div>
      <div class="d-flex justify-lg-space-between">
        <div class="teacher">教师：闵义</div>
        <div class="student">17357人</div>
      </div>
    </div>
  </v-card>
</template>

<style scoped></style>
