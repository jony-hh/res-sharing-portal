<script setup lang="ts">
const props = defineProps(['answer'])
</script>

<template>
  <v-card class="ma-5">
    <div class="j-question-main">
      <div class="posts-author-info">
        <span class="g-user-popover">
          <span class="g-hover">
            <span class="ant-avatar">
              <img
                src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLkSA49EGsBTREicEiaw9YSLAvDeVk0jwc9z4ibMRLVBvzdnkHDRNnr8FMMk2C3o5zQ40fggVADU094A/132"
                alt="avatar"
              />
            </span>
            <span class="nick-name g-hover j-center">空心</span>
          </span>
        </span>
        <span class="j-space">
          <span class="j-space-item" style="width: 6px"></span>
          <span>|</span>
          <span class="j-space-item" style="width: 6px"></span>
        </span>
        <span>
          <i aria-label="图标: eye" class="j-center">
            <svg
              viewBox="64 64 896 896"
              data-icon="eye"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              class=""
            >
              <path
                d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
              ></path>
            </svg>
          </i>
          95
        </span>
        <span class="j-space">
          <span class="j-space-item" style="width: 6px"></span>
          <span>|</span>
          <span class="j-space-item" style="width: 6px"></span>
        </span>
        <span>
          <i
            aria-label="图标: clock-circle"
            class="anticon anticon-clock-circle"
          >
            <svg
              viewBox="64 64 896 896"
              data-icon="clock-circle"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              class=""
            >
              <path
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
              ></path>
              <path
                d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"
              ></path>
            </svg>
          </i>
          3周前
        </span>
      </div>

      <div class="description">
        <h2 style="border-bottom: 1px solid #eaecef">回答描述</h2>
        <div>{{ answer.content }}</div>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.j-btn-primary {
  background-color: #004fc4;
  border-color: #004fc4;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  color: #fff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
}

.tags-line {
  background-color: rgba(5, 105, 204, 0.06);
  border-radius: 4px;
  color: #999;
  font-size: 12px;
  margin-right: 7.5px;
  padding: 3px 8px;
}

.j-space {
  .j-space-item {
    display: inline-block;
  }

  color: #dedede;
  font-size: 12px;
}

.ant-avatar {
  font-feature-settings: 'tnum', 'tnum';
  background: #ccc;
  border-radius: 50%;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  color: #fff;
  display: inline-block;
  font-size: 14px;
  font-variant: tabular-nums;
  height: 32px;
  line-height: 32px;
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: relative;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  width: 32px;
}
</style>
