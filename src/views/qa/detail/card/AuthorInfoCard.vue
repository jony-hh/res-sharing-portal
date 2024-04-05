<script setup lang="ts">
</script>

<template>
  <v-card class="ma-5">
    <div
      class="g-sidebar-container"
      style="background-color: #fff; min-width: 305px; max-width: 305px"
    >
      <h2 class="slider-title ma-2" style="border-bottom: 1px solid #eaecef">关于作者 📝</h2>

      <div class="author-info">
        <div class="infos d-flex justify-lg-space-between">
          <div class="ma-2">
              <img
                src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLkSA49EGsBTREicEiaw9YSLAvDeVk0jwc9z4ibMRLVBvzdnkHDRNnr8FMMk2C3o5zQ40fggVADU094A/132"
                alt="空心"
                style="height: 40px;width: 40px"
              />
            <span class="j-nickname">空心</span>
          </div>
         <div class="ma-2">
           <v-btn color="#004fc4">关 注</v-btn>
         </div>
        </div>
        <p class="ma-2">
          <span class="j-author-motto">这个人很懒~</span>
        </p>
        <div class="ma-2">
          <v-row>
            <v-col cols="6">
              <p class="acht-item">
                <span class="level">等级</span>
                <span class="level-number">LV1</span>
              </p>
              <p class="acht-item btm-acht">
                <span class="level">粉丝</span>
                <span class="level-number">0</span>
              </p>
            </v-col>
            <v-col cols="6">
              <p class="acht-item">
                <span class="level">获赞</span>
                <span class="level-number">0</span>
              </p>
              <p class="acht-item btm-acht">
                <span class="level">经验</span>
                <span class="level-number">4</span>
              </p>
            </v-col>
          </v-row>
        </div>

      </div>
    </div>
  </v-card>
</template>

<style scoped>
</style>
