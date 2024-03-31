<script setup lang="ts">
import { LocationQueryValue, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { fetchSingQuestionResource } from '@/api/qa'
import AnswerDialog from '@/views/qa/detail/card/AnswerDialog.vue'

interface question {
  id: number
  avatar: string
  nickname: string
  title: string
  content: string
  tags: []
  answerCount: number
  viewCount: number
  askedTime: string
}

const router = useRouter()
const questionInfo = ref<question>({
  id: 0,
  avatar: '',
  nickname: '',
  title: '',
  content: '',
  tags: [],
  answerCount: 0,
  viewCount: 0,
  askedTime: '',
})
const getSingleQuestionData = async (
  id: string | null | LocationQueryValue[],
) => {
  const res = await fetchSingQuestionResource(id)
  questionInfo.value = { ...res.data }
}

const writeAnswer = () => {}

onMounted(async () => {
  await getSingleQuestionData(router.currentRoute.value.query.id)
})
</script>

<template>
  <v-card class="ma-5">
    <div class="j-question-main">
      <h1 class="question-title">{{ questionInfo.title }}</h1>

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
        <h2 style="border-bottom: 1px solid #eaecef">问题描述</h2>
        <div>{{ questionInfo.content }}</div>
      </div>

      <p class="question-tags" style="border-bottom: 1px solid #eaecef">
        <strong>问题标签：</strong>
        <span class="tags-line" v-for="tag in questionInfo.tags">
          {{ tag }}
        </span>
      </p>

      <div class="d-flex float-lg-right">
        <div style="width: 100%"></div>
        <div class="mx-2">
          <v-btn class="j-btn-primary ma-1">
            <i aria-label="图标: share-alt" class="anticon anticon-share-alt">
              <svg
                viewBox="64 64 896 896"
                data-icon="share-alt"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
                class=""
              >
                <path
                  d="M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 0 0 0-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"
                ></path>
              </svg>
            </i>
            <span>分享</span>
          </v-btn>
        </div>
        <div class="mx-2">
          <v-btn class="j-btn-primary ma-1">
            <i aria-label="图标: star" class="anticon anticon-star">
              <svg
                viewBox="64 64 896 896"
                data-icon="star"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
                class=""
              >
                <path
                  d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"
                ></path>
              </svg>
            </i>
            <span>关注问题</span>
          </v-btn>
        </div>
        <answer-dialog class="mx-2"></answer-dialog>
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
