<template>
  <!-- 图片轮播组件外部容器 -->
  <div class="box">
    <!-- 列表 -->
    <ul class="img_list">
      <!-- 使用 v-for 遍历 banners 数组，生成轮播项 -->
      <li
        v-for="(val, index) in banners"
        :key="index"
        :id="'last' + (index + 1)"
      >
        <!-- 显示图片 -->
        <img class="img" :src="val.pictureUrl" alt="" />
      </li>

      <!-- 按钮导航条 -->
      <div class="span">
        <!-- 使用 v-for 遍历 banners 数组，生成导航按钮 -->
        <span
          v-for="(val, index) in banners"
          :key="index"
          @mouseover="mouse(index)"
          @mouseleave="leave()"
        ></span>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 定义响应式变量
const li = ref<string[]>([])
let time: any
let index = ref(0)
const banners = ref<any[]>()
const li1 = ref<string[][]>([])

// 初始化图片数据
const initImg = () => {
  const realApiResponse = {
    banners: [
      {
        name: 'hello',
        pictureUrl:
          'https://images.pexels.com/photos/1456291/pexels-photo-1456291.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'hey',
        pictureUrl:
          'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        name: 's',
        pictureUrl:
          'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        name: 'f',
        pictureUrl:
          'https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ],
  }
  banners.value = realApiResponse.banners

  // 初始化 li 数组
  for (let i = 0; i < realApiResponse.banners.length; i++) {
    li.value[i] = 'last' + (i + 1)
  }

  // 初始化 li1 数组
  for (let i = 0; i < realApiResponse.banners.length; i++) {
    li1.value.push(JSON.parse(JSON.stringify(li.value)))
    li.value.unshift(li.value.pop())
  }
}

// 向右滚动一次
const right1 = () => {
  const libox = document.getElementsByClassName('img_list')[0].children
  const span = document.getElementsByClassName('span')[0].children

  li.value.unshift(li.value.pop())

  // 重置导航按钮样式
  for (let i = 0; i < span.length; i++) {
    span[i].style.background = '#e6e6e6'
  }

  index.value++

  // 循环滚动
  if (index.value > span.length - 1) {
    index.value = 0
  }

  // 设置当前导航按钮样式
  span[index.value].style.background = '#ec4141'

  // 更新图片列表项的 id
  for (let i = 0; i < li.value.length; i++) {
    libox[i].id = li.value[i]
  }
}

// 向右滚动
const right = () => {
  const libox = document.getElementsByClassName('img_list')[0].children
  const span = document.getElementsByClassName('span')[0].children

  // 重置导航按钮样式
  for (let i = 0; i < span.length; i++) {
    span[i].style.background = '#e6e6e6'
  }

  // 循环滚动
  if (index.value > span.length - 1) {
    index.value = 0
  }

  // 设置当前导航按钮样式
  span[index.value].style.background = '#ec4141'

  // 更新图片列表项的 id
  for (let i = 0; i < li.value.length; i++) {
    libox[i].id = li.value[i]
  }
}

// 向左滚动
const left = () => {
  const libox = document.getElementsByClassName('img_list')[0].children
  const span = document.getElementsByClassName('span')[0].children

  // 重置导航按钮样式
  for (let i = 0; i < span.length; i++) {
    span[i].style.background = '#e6e6e6'
  }

  // 防止 index 值为负数
  if (index.value < 0) {
    index.value = 0
  }

  // 设置当前导航按钮样式
  span[index.value].style.background = '#ec4141'
}

// 鼠标移入导航按钮事件
const mouse = (e: number) => {
  const libox = document.getElementsByClassName('img_list')[0].children

  // 清除定时器
  clearInterval(time)

  // 更新图片列表项的顺序
  li.value = JSON.parse(JSON.stringify(li1.value[e]))

  // 鼠标移入的导航按钮在当前导航按钮之后
  if (e > index.value) {
    index.value = e

    // 更新图片列表项的 id
    for (let i = 0; i < li.value.length; i++) {
      libox[i].id = li.value[i]
    }

    // 向右滚动
    right()
  }

  // 鼠标移入的导航按钮在当前导航按钮之前
  if (e < index.value) {
    index.value = e

    // 更新图片列表项的 id
    for (let i = 0; i < li.value.length; i++) {
      libox[i].id = li.value[i]
    }

    // 向左滚动
    left()
  }
}

// 鼠标移出导航按钮事件
const leave = () => {
  clearInterval(time)

  // 重新设置定时器，实现自动轮播
  time = setInterval(right1, 3000)
}

// 组件挂载时初始化
onMounted(() => {
  initImg()
})

// 组件销毁时清除定时器
onBeforeUnmount(() => {
  clearInterval(time)
})
</script>

<style scoped>
.box {
  border: 1px red solid;
  width: 67%;
  height: 240px;
  margin: 40px;
  position: relative;
}

.img_list li {
  float: left;
  position: absolute;
  left: 0;
  border-radius: 10px;
  transition: all 0.5s;
}

.img_list li img {
  width: 450px;
  height: 180px;
  border-radius: 10px;
}

#last1 {
  left: 0;
  z-index: 1;
}

#last2 {
  left: 280px;
  transform: scale(1.25);
  z-index: 99;
}

#last3 {
  left: 550px;
  z-index: 1;
}

.span {
  width: auto;
  height: 20px;
  position: absolute;
  bottom: -5px;
  z-index: 99;
  left: 50%;
  transform: translateX(-50%);
}

.span span {
  width: 30px;
  height: 5px;
  text-align: center;
  display: inline-block;
  background-color: #e6e6e6;
  margin-left: 20px;
  border-radius: 3px;
}

.span span:nth-child(1) {
  margin-left: 0px;
  background-color: #ec4141;
}
</style>
