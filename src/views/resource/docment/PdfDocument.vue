<template>
  <div id="pdf-container">
    <canvas
      v-for="page in state.pdfPages"
      :key="page"
      :id="`pdfCanvas${page}`"
      style="border-bottom: 1px solid #d4d2d2"
    />
  </div>
</template>
<script setup>
import { nextTick, onMounted, reactive } from 'vue'
import * as PDF from 'pdfjs-dist'
// 在assect目录下的pdf
import pdf from '@/assets/document/三方协议网签操作流程.pdf'

const pdfjsWorker = import('pdfjs-dist/build/pdf.worker.entry')
PDF.GlobalWorkerOptions.workerSrc = await pdfjsWorker

const props = defineProps(['pdf_url'])

const state = reactive({
  pdfPath: pdf, // 本地PDF文件路径放在/public中
  pdfPages: '', // 页数
  pdfWidth: '', // 宽度
  pdfSrc: '', // 地址
  pdfScale: 1.0, // 放大倍数
})

let pdfDoc = null

onMounted(() => {
  loadFile(state.pdfPath)
})
function loadFile(url) {
  PDF.getDocument(url).promise.then((p) => {
    pdfDoc = p
    const { numPages } = p
    state.pdfPages = numPages
    nextTick(() => {
      renderPage(1) // 从第一页开始渲染
    })
  })
}
function renderPage(num) {
  pdfDoc.getPage(num).then((page) => {
    const canvas = document.getElementById(`pdfCanvas${num}`)
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const bsr =
      ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio ||
      1
    const ratio = dpr / bsr
    const viewport = page.getViewport({ scale: state.pdfScale })
    canvas.width = viewport.width * ratio
    canvas.height = viewport.height * ratio
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    state.pdfWidth = `${viewport.width}px`
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    // 将 PDF 页面渲染到 canvas 上下文中
    const renderContext = {
      canvasContext: ctx,
      viewport,
    }
    page.render(renderContext)
    if (state.pdfPages > num) renderPage(num + 1)
  })
}
</script>
<style>
#videoContainer {
  height: 842px;
}
</style>
