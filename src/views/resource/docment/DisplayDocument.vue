<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { LocationQueryValue, useRouter } from 'vue-router'
import { fetchSingDocumentResource } from '@/api/res'

const docRes = ref<any>({
  id: 0,
  name: '',
  typeUrl: '',
  tags: [],
  author: '',
  documentUrl: '',
})
const router = useRouter()
const isShow = ref<any>(true)

const judgePdfType = (url: any) => {
  // 使用正则表达式来匹配URL中的文件名和扩展名
  const regex = /[^\/]+$/
  const match = url.match(regex)
  if (match) {
    // 获取文件名
    const filename = match[0]
    // 用点号分割文件名，取最后一部分作为扩展名
    const extension = filename.split('.').pop().toLowerCase()
    if (extension === 'pdf') {
      return true
    } else {
      return false
    }
  }
}

const getSingleDocumentData = async (
  id: string | null | LocationQueryValue[],
) => {
  const res = await fetchSingDocumentResource(id)
  isShow.value = judgePdfType(res.data.documentUrl)
  docRes.value = { ...res.data }
}

onMounted(async () => {
  await getSingleDocumentData(router.currentRoute.value.query.id)
})
</script>

<template>
  <div style="width: 100%; height: 85vh">
    <!-- 头部信息-->
    <div class="ma-2" style="height: 48px">
      <span style="line-height: 48px">{{ docRes.title }}</span>
      <span style="float: right">
        <v-btn color="#61666D" icon="mdi-thumb-up" variant="text"></v-btn>
        <v-btn color="#61666D" icon="mdi-star" variant="text"></v-btn>
      </span>
    </div>
    <!--定义显示策略-->
    <!--1、word、excel、ppt 使用 iframe 简单预览-->
    <div v-if="!isShow" style="width: 100%; height: 100%">
      <iframe
        :src="
          'https://view.officeapps.live.com/op/view.aspx?src=' +
          docRes.documentUrl
        "
        width="100%"
        height="100%"
        frameborder="1"
      ></iframe>
    </div>
    <!-- 2、pdf 使用 pdf.js  -->
    <div v-if="isShow" id="pdf-container" style="width: 100%; height: 100%">
      <iframe
        :src="docRes.documentUrl"
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
