<template>
  <textarea v-model="value" @input="change(value)" />
  <div v-html="markdownToHtml" class="markdown-body"></div>

</template>
<script lang="ts" setup>
import { marked } from 'marked';
import { ref, shallowRef } from 'vue';


const render = new marked.Renderer()
marked.setOptions({
  renderer: render,
  gfm: true,
  pedantic: false,
  // 高亮的语法规范
})

// Set options
marked.use({
  async: true,
  pedantic: false,
  gfm: true,
});

const value = ref('**Hello,World**')
const markdownToHtml = shallowRef<any>("")
markdownToHtml.value = marked(value.value)

const change = (value: string) => {
  markdownToHtml.value = marked(value)
}

</script>
<style>
</style>
