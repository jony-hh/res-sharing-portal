<script setup lang="ts">
import { ElMessage } from 'element-plus'
import router from '@/router'
import { useUserStore } from '@/store/user'
import { ref } from 'vue'

const formData = ref<any>({})
const requiredRules = [(v: any) => !!v || 'Please fill out this field!']
const numberRules = [
  (v: any) => !!v || 'Please fill out this field!',
  (v: any) => Number.isInteger(Number(v)) || 'Please enter numbers only!',
]
const emailRules = [
  (v: any) => !!v || 'Please fill out the field!',
  (v: any) =>
    !v ||
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
    'E-mail must be valid',
]

const userStore = useUserStore()

const saveProfile = async () => {
  // 在这里处理保存个人信息的逻辑，可以通过 API 请求将数据发送到后端
  //const res = await reqUpdateUser(userStore.loginUser)
  const res = 200
  if (res === 200) {
    ElMessage.success('修改成功！！！')
    await router.push('/profile')
    return
  }
  ElMessage.success('修改失败！！！')
  // 在这里添加保存个人信息的逻辑，可以使用axios或其他HTTP库发送请求
}

const cancel = () => {
  router.push('/profile')
}
</script>

<template>
  <div>
    <v-form
      style="width: 1000px"
      lazy-validation
      class="elevation-5 rounded-lg px-5 py-7"
    >
      <v-row>
        <v-col cols="6" md="6">
          <!-- 用户名 -->
          <v-text-field
            v-model="userStore.loginUser.nickname"
            label="用户名"
            :rules="requiredRules"
            variant="outlined"
          />
        </v-col>
        <v-col cols="6" md="6">
          <!-- 职业方向 -->
          <v-text-field
            v-model="userStore.loginUser.profession"
            label="职业方向"
            :rules="requiredRules"
            variant="outlined"
          />
        </v-col>

        <v-col cols="12" md="6">
          <!-- 职位公司 -->
          <v-text-field
            v-model="userStore.loginUser.company"
            label="职位公司"
            :rules="requiredRules"
            variant="outlined"
          />
        </v-col>
        <v-col cols="12" md="6">
          <!-- 兴趣标签 -->
          <v-text-field
            v-model="userStore.loginUser.interests"
            label="兴趣标签"
            :rules="requiredRules"
            variant="outlined"
          />
        </v-col>
        <v-col cols="12" md="12">
          <!-- 兴趣标签 -->
          <v-textarea
            v-model="userStore.loginUser.introduction"
            label="我的介绍"
            :rules="requiredRules"
            variant="outlined"
          />
        </v-col>

        <!--<v-col cols="12" md="6" class="mb-0">-->
        <!--  <v-text-field-->
        <!--    label="First Name"-->
        <!--    v-model="formData.firstName"-->
        <!--    prepend-inner-icon="mdi-account-arrow-right-outline"-->
        <!--    :rules="requiredRules"-->
        <!--    variant="outlined"/>-->
        <!--</v-col>-->
        <!--<v-col cols="12" md="6">-->
        <!--  <v-text-field-->
        <!--    label="Last Name"-->
        <!--    v-model="formData.lastName"-->
        <!--    prepend-inner-icon="mdi-account-arrow-left-outline"-->
        <!--    :rules="requiredRules"-->
        <!--    variant="outlined"/>-->
        <!--</v-col>-->

        <!--<v-col cols="12" md="6">-->
        <!--  <v-text-field-->
        <!--    label="E-Mail"-->
        <!--    v-model="formData.email"-->
        <!--    :rules="emailRules"-->
        <!--    prepend-inner-icon="mdi-email-outline"-->
        <!--    variant="outlined"/>-->
        <!--</v-col>-->
        <!--<v-col cols="12" md="6">-->
        <!--  <v-text-field-->
        <!--    label="Phone Number"-->
        <!--    v-model="formData.phoneNumber"-->
        <!--    :rules="numberRules"-->
        <!--    prepend-inner-icon="mdi-cellphone"-->
        <!--    variant="outlined"/>-->
        <!--</v-col>-->
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-lg-space-between">
          <v-btn variant="outlined" @click="cancel">取消</v-btn>
          <v-btn color="primary" @click="saveProfile">保存</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<style scoped></style>
