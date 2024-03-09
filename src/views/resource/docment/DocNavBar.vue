<script setup lang="ts">
import { ref } from 'vue'

const docTypes = [
  '新闻传播大类',
  '教育与体育大类',
  '装备制造大类',
  '电子与信息大类',
]

const viewMore = () => {
  alert('hello')
}

const activeTag = ref('default')
const activateTag = (tag: string) => {
  activeTag.value = tag
}
</script>

<template>
  <div class="d-flex justify-lg-space-between ma-2 align-center">
    <div class="d-flex align-center">
      <img src="https://s21.ax1x.com/2024/03/05/pFDTmVA.png" alt="" />
      <div class="px-4 j-doc-title">课程思政文档库</div>
      <div class="d-flex ml-10">
        <div
          class="mx-2 px-4 j-item"
          :class="{ 'j-active': activeTag === 'default' }"
          @click="activateTag('default')"
        >
          推荐
        </div>
        <div
          class="mx-2 px-4 j-item"
          :class="{ 'j-active': activeTag === doctype }"
          v-for="(doctype, index) in docTypes"
          :key="index"
          @click="activateTag(doctype)"
        >
          {{ doctype }}
        </div>
      </div>
    </div>

    <div class="d-flex" @click="viewMore">
      <div class="px-4 py-1 align-center j-more">更多</div>
      <div class="d-flex align-center" style="cursor: pointer">
        <img src="https://s21.ax1x.com/2024/03/05/pFDTQ8f.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.j-doc-title {
  font-size: 20px;
  font-weight: 700;
  color: #cf0d04;
}

.j-item {
  padding: 5px 20px;
  color: #676f7f;
  background: #f6f7f9;
  border-radius: 16px;
  display: inline-block;
  margin-right: 12px;
  border: 1px solid transparent;
  cursor: pointer;
}

.j-item:hover,
.j-active {
  font-weight: 700;
  color: #ee373d;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 8px 0 hsla(0, 0%, 51%, 0.2);
}

.j-more:hover {
  color: #ee373d;
  background: #f6f7f9;
  border-radius: 16px;
  border: 1px solid transparent;
  cursor: pointer;
}
</style>
