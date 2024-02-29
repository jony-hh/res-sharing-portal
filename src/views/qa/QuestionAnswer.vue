<script setup lang="ts">
import { computed, ref } from 'vue'
import UserQuestion from '@/views/qa/card/QuestionCard.vue'
import QuestionCard from '@/views/qa/card/QuestionCard.vue'
import TaskCard from '@/views/qa/card/TaskCard.vue'
import FeatureCard from '@/views/qa/card/FeatureCard.vue'

const tags = ref([
  '师资力量',
  '在线教育',
  '学术研究',
  '党建工作',
  '文化建设',
  '社会实践',
  '国情教育',
  '多元化教育',
  '活动策划',
  '课外阅读',
  '国际交流',
  '数字化资源',
])
const activeStatus = ref('最新')
const activeTag = ref('')
const changeStatus = (status: string) => {
  activeStatus.value = status
}
const changeTag = (tag: string) => {
  activeTag.value = tag
}
// 用户信息
const userInfo = ref({
  avatar: 'Han Solo 的头像链接',
  nickname: '空心',
})

// 问题数据列表
const questions = ref([
  {
    avatar: 'Han Solo 的头像链接',
    nickname: '空心',
    title: '简历导出的时候会出现一些问题，这如何解决',
    tags: ['浏览器'],
    answerCount: 1,
    viewCount: 14,
    askedTime: '19小时前提问',
  },
  {
    avatar: 'Han Solo 的头像链接',
    nickname: '空心',
    title: '简历导出的时候会出现一些问题，这如何解决',
    tags: ['浏览器'],
    answerCount: 1,
    viewCount: 14,
    askedTime: '19小时前提问',
  },
  {
    avatar: 'Han Solo 的头像链接',
    nickname: '空心',
    title: '简历导出的时候会出现一些问题，这如何解决',
    tags: ['浏览器'],
    answerCount: 1,
    viewCount: 14,
    askedTime: '19小时前提问',
  },
  // 添加更多问题...
])
</script>

<template>
  <div>
    <!-- 导航分类 -->
    <div class="navigation">
      <!-- 按问题的标签搜索 -->
      <nav class="tag-nav">
        <ul>
          <li
            v-for="(tag, index) in tags"
            :key="index"
            :class="{ active: activeTag === tag }"
          >
            <a @click="changeTag(tag)">{{ tag }}</a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- 主体内容 -->
    <div class="main-content">
      <!-- Left part -->
      <div class="left-part">
        <!-- 最新、未解决、已解决 -->
        <div class="status-nav">
          <!-- 按解决状态搜索 -->
          <div
            :class="{ active: activeStatus === '最新' }"
            @click="changeStatus('最新')"
          >
            最新
          </div>
          <div
            :class="{ active: activeStatus === '未解决' }"
            @click="changeStatus('未解决')"
          >
            未解决
          </div>
          <div
            :class="{ active: activeStatus === '已解决' }"
            @click="changeStatus('已解决')"
          >
            已解决
          </div>
        </div>
        <!-- 问题区域 -->
        <div class="question-area">
          <!-- 问题卡片 -->
          <v-container>
            <!-- 遍历问题数据列表，渲染 UserQuestion 组件 -->
            <question-card
              v-for="(question, index) in questions"
              :key="index"
              :questionInfo="question"
            />
          </v-container>
        </div>
      </div>

      <!-- Right part -->
      <div class="right-part">
        <task-card></task-card>
        <feature-card></feature-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* General styling */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

/* Navigation styling */
.navigation {
  background-color: #333;
  padding: 10px;
}

.tag-nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
}

.tag-nav li {
  margin-right: 10px;
}

.tag-nav a {
  text-decoration: none;
  color: white;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.tag-nav a:hover {
  background-color: #555;
}

.tag-nav .active {
  background-color: #555;
}

/* Main content styling */
.main-content {
  display: flex;
}

/* Left part styling */
.left-part {
  flex: 3;
  padding: 20px;
}

.status-nav {
  display: flex;
  margin-bottom: 20px;
}

.status-nav div {
  flex: 1;
  text-align: center;
  padding: 10px;
  background-color: #555;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.status-nav div:hover {
  background-color: #777;
}

.status-nav .active {
  background-color: #777;
}

/* Right part styling */
.right-part {
  flex: 1;
  padding: 0 20px 20px;
  background-color: #f5f5f5;
}
</style>
