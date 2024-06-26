<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store/user'
import Editor from '@tinymce/tinymce-vue'
import { useRouter } from 'vue-router'
import { writeAnswerApi } from '@/api/user'

const router = useRouter()
const dialog = ref(false)
const userStore = useUserStore()
const props = defineProps(['operateItem'])

// 问题信息
const answer = ref({
  questionId: router.currentRoute.value.query.id,
  userId: userStore.loginUser.id,
  content: '',
  title: '',
})

const judgeStatus = () => {
  if (userStore.token === '') {
    ElMessage.info('请先登录！')
    dialog.value = false
    return
  }
}

const wirteAnswer = async (answer: any) => {
  if (answer.content === '' || answer.title === '') {
    ElMessage.error('请按要求输入！')
    return
  }
  dialog.value = false
  const res = await writeAnswerApi(answer)
  if (res.code !== 200) {
    ElMessage.info('发布失败！')
    return
  }
  ElMessage.success('发布成功！')
  router.go(0)
  return
}
</script>

<template>
  <div>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="j-btn-primary ma-1"
          v-bind="activatorProps"
          @click="judgeStatus()"
        >
          <i aria-label="图标: edit" class="anticon anticon-edit">
            <svg
              viewBox="64 64 896 896"
              data-icon="edit"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              class=""
            >
              <path
                d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
              ></path>
            </svg>
          </i>
          <span>写回答</span>
        </v-btn>
      </template>

      <v-card>
        <v-toolbar>
          <v-btn icon="mdi-close" @click="dialog = false"></v-btn>

          <v-toolbar-title>你正在回答别人的问题...</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn
              size="x-large"
              text="确认回复"
              variant="text"
              @click="wirteAnswer(answer)"
            ></v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div class="ma-4 d-flex">
          <div style="line-height: 56px">请输入回复总结：</div>
          <v-text-field
            v-model="answer.title"
            label="answer's title"
            variant="outlined"
          />
        </div>
        <div>
          <main id="sample">
            <Editor
              v-model="answer.content"
              api-key="fckwv5pbgn02nut9dcfaz7awa810f5mxof2bl3uds1olpu0c"
              :init="{
                plugins: 'lists link image table code help wordcount',
              }"
            />
          </main>
        </div>
        {{ answer }}
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.j-btn-primary {
  background-color: #004fc4;
  border-color: #004fc4;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  color: #fff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
}
</style>
