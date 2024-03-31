<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { LocationQueryValue, useRouter } from 'vue-router'
import { fetchSingDocumentResource } from '@/api/res'

const docRes = ref<any>({
  id: 0,
  name: '',
  type: '',
  typeUrl: '',
  tags: [],
  author: '',
  document_url: '',
})
const router = useRouter()

const getSingleDocumentData = async (
  id: string | null | LocationQueryValue[],
) => {
  const res = await fetchSingDocumentResource(id)
  docRes.value = { ...res.data }
}

onMounted(async () => {
  await getSingleDocumentData(router.currentRoute.value.query.id)
  if (docRes.value.type === 'pdf') {
  }
})
</script>

<template>
  <div style="width: 100%; height: 85vh">
    <!-- 头部信息-->
    <div class="ma-2" style="border: 1px red solid; height: 48px">
      <span style="line-height: 48px">毕 业 设 计（论 文）</span>
      <span style="float: right">
        <v-btn color="#61666D" icon="mdi-thumb-up" variant="text"></v-btn>
        <v-btn color="#61666D" icon="mdi-star" variant="text"></v-btn>
      </span>
    </div>
    <!--定义显示策略-->
    <!--1、word、excel、ppt 使用 iframe 简单预览-->
    <div v-if="docRes.type !== 'pdf'" style="width: 100%; height: 100%">
      <iframe
        :src="
          'https://view.officeapps.live.com/op/view.aspx?src=' +
          docRes.document_url
        "
        width="100%"
        height="100%"
        frameborder="1"
      ></iframe>
    </div>
    <!-- 2、pdf 使用 pdf.js  -->
    <div v-else id="pdf-container" style="width: 100%; height: 100%">
      <iframe
        :src="docRes.document_url"
        width="100%"
        height="100%"
        frameborder="1"
      ></iframe>
      <!-- 本地pdf -->
      <!--<pdf-document :pdf_url="docRes.document_url"></pdf-document>-->
    </div>
  </div>
</template>

<style scoped></style>
