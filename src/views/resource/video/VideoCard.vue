<script setup lang="ts">
const props = defineProps(['VideoInfo'])
</script>

<template>
  <v-card class="ma-1">
    <v-img
      src="http://wj008.xhsz.tisapi.com/upfiles/1642483539176.png"
      class="position-relative"
    >
      <div
        class="position-absolute ma-1 pa-1 rounded"
        style="background: #ee7c6e; color: #fff; right: 0"
      >
        国家示范
      </div>
      <div
        class="position-absolute pa-1"
        style="
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          width: 100%;
          color: white;
        "
      >
        海南大学
      </div>
    </v-img>

    <div class="content">
      <div class="title">
        <a
          href="/curriculum/detail/983"
          title="细胞生物学"
          style="font-size: 20px"
        >
          细胞生物学
        </a>
      </div>
      <div class="d-flex justify-lg-space-between">
        <div class="teacher">教师：闵义</div>
        <div class="d-flex">
          <img
            src="https://xhsz.news.cn/static/home1/images/nxincourse.png"
            alt=""
          />
          <div class="student">17357人</div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<style scoped></style>
