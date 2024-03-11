<script setup lang="ts">
import DirectoryTree from '@/views/wiki/book/DirectoryTree.vue'
import PostAndCategory from '@/views/wiki/book/PostAndCategory.vue'
</script>

<template>
  <div style="display: flex">
    <!--wiki书籍的主题，以及包含的帖子-->
    <div class="wiki ma-2" style="flex: 1">
      <directory-tree></directory-tree>
    </div>
    <!-- 帖子的具体内容 -->
    <div class="ma-2" style="flex: 4">
      <post-and-category></post-and-category>
    </div>
  </div>
</template>

<style scoped>
.wiki {
  height: 100%;
  border: 1px red solid;
}
</style>
