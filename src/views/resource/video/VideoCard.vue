<script setup lang="ts">
const props = defineProps(['videoInfo'])
</script>

<template>
  <v-card class="ma-1">
    <v-img :src="videoInfo.coverUrl" class="position-relative">
      <div
        class="position-absolute ma-1 pa-1 rounded"
        style="background: #ee7c6e; color: #fff; right: 0"
      >
        {{ videoInfo.sign }}
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
        {{ videoInfo.college }}
      </div>
    </v-img>

    <div class="content">
      <div class="title">
        <a style="font-size: 20px">
          {{ videoInfo.course_name }}
        </a>
      </div>
      <div class="d-flex justify-lg-space-between">
        <div class="teacher">{{ videoInfo.lecturer }}</div>
        <div class="d-flex">
          <img
            src="https://xhsz.news.cn/static/home1/images/nxincourse.png"
            alt=""
          />
          <div class="student">{{ videoInfo.student_num }}人</div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<style scoped></style>
