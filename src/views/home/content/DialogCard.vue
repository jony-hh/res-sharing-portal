<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store/user'
import Editor from '@tinymce/tinymce-vue'

const dialog = ref(false)

const props = defineProps(['operateItem'])
const userStore = useUserStore()

// 问题信息
const question = ref({
  content: '',
  title: '',
})

const operate = (operateItem: any) => {
  if (userStore.token === '') {
    ElMessage.info('请先登录！')
    dialog.value = false
    return
  }
  if (operateItem.code === 'pose') {
    dialog.value = true
    return
  }
  dialog.value = false
  ElMessage.info('你没有权限！请去申请。')
}

const poseQuestion = async (question: any) => {
  dialog.value = false
  //const res = await poseQuestionApi(question)
  ElMessage.success('发布成功！')
}
</script>

<template>
  <div>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
      <template v-slot:activator="{ props: activatorProps }">
        <v-list-item-title
          v-bind="activatorProps"
          aria-controls
          @click="operate(operateItem)"
        >
          {{ operateItem.title }}
        </v-list-item-title>
      </template>

      <v-card>
        <v-toolbar>
          <v-btn icon="mdi-close" @click="dialog = false"></v-btn>

          <v-toolbar-title>提出问题</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn
              size="x-large"
              text="发布"
              variant="text"
              @click="poseQuestion(question)"
            ></v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div class="ma-4 d-flex">
          <div style="line-height: 56px">请输入问题标题：</div>
          <v-text-field
            v-model="question.title"
            label="question's title"
            variant="outlined"
          />
        </div>
        <div v-if="operateItem.code === 'pose'">
          <main id="sample">
            <Editor
              v-model="question.content"
              api-key="fckwv5pbgn02nut9dcfaz7awa810f5mxof2bl3uds1olpu0c"
              :init="{
                plugins: 'lists link image table code help wordcount',
              }"
            />
          </main>
        </div>
        {{ question }}
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped></style>
