<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import router from '@/router'

const saveProfile = () => {
  // 在这里处理保存个人信息的逻辑，可以通过 API 请求将数据发送到后端
  ElMessage.success('修改成功！！！')
  router.push('/profile')
  // 在这里添加保存个人信息的逻辑，可以使用axios或其他HTTP库发送请求
}

const profile = ref({
  username: '不吃香菜',
  profession: 'Java开发',
  company: 'Jony',
  introduction: 'blblblblblblblblblblblblblblb',
  interests: 'coding',
})
</script>

<template>
  <v-sheet class="ma-5" width="1000">
    <v-form @submit.prevent="saveProfile">
      <!-- 用户名 -->
      <v-text-field v-model="profile.username" label="用户名"></v-text-field>

      <!-- 职业方向 -->
      <v-text-field
        v-model="profile.profession"
        label="职业方向"
      ></v-text-field>

      <!-- 职位公司 -->
      <v-text-field v-model="profile.company" label="职位公司"></v-text-field>

      <!-- 个人介绍 -->
      <v-textarea v-model="profile.introduction" label="个人介绍"></v-textarea>

      <!-- 兴趣标签 -->
      <v-text-field v-model="profile.interests" label="兴趣标签"></v-text-field>

      <!-- 提交按钮 -->
      <v-btn class="float-lg-right" type="submit" color="primary">保存</v-btn>
    </v-form>
  </v-sheet>
</template>

<style scoped></style>
