
<template>
  <div style="display: flex">
    <!--【markdown内容】-->
    <div v-html="html" style="flex: 3;border: 1px red solid"></div>
    <!--目录-->
    <div class="category" style="flex: 1;border: 1px red solid">
      <ul>
        <!-- 这里为了设置各级标题的不同样式，添加了类，h1标签类为item-1，h2标签类为item-2 -->
        <li
          v-for="item in tocData"
          :key="item.id"
          :class="`item-${item.tagName.charAt(1)}`"
          @click="locate(item.id)"
        >
          {{item.id}}
        </li>
      </ul>
    </div>
  </div>

</template>

<script setup lang="ts">
import { nextTick, ref } from "vue";
import { marked } from 'marked'
import { renderer } from "@/utils/render";
import data from "@/views/wiki/data.json";

// 配置【marked实例】
marked.use({
  renderer: renderer, // 重写渲染规则
  gfm: true, // 启动类似于Github样式的Markdown语法
  pedantic: false, // 只解析符合Markdwon定义的，不修正Markdown的错误
})

// 【文章内容】
const content = ref(data.content)
const html = ref(marked.parse(content.value))

// 存放 toc 目录数据
const tocData = ref<any>(null)

// 获取所有h1 h2 h3 标签
function initToc() {
  let all_headings = document.querySelectorAll('h1, h2, h3')
  return all_headings
}

nextTick(() => {
  tocData.value = initToc()
})

const locate = (id:string) => {
  let anchorElement = document.getElementById(id)
  console.log(id)
  if (anchorElement) {
    // TODO 【标题相同怎么办】
    anchorElement.scrollIntoView()
  }
}

</script>

<style scoped>
.category ul li:hover{
  color: red;
}
</style>
