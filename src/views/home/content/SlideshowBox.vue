<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const banners = ref([
  {
    name: 'hello',
    pictureUrl: 'https://wj008.xhsz.tisapi.com/upfiles/1681187967155.jpg',
  },
  {
    name: 'hey',
    pictureUrl: 'https://wj008.xhsz.tisapi.com/upfiles/1702949581442.jpg',
  },
  {
    name: 's',
    pictureUrl: 'http://wj008.xhsz.tisapi.com/upfiles/1651030793009.jpg',
  },
  {
    name: 'f',
    pictureUrl: 'https://wj008.xhsz.tisapi.com/upfiles/1696843404860.jpg',
  },
])
const addBannersId = ref(
  banners.value.map((item, index) => ({ id: index, ...item })),
)
const initialFirstElementId = ref<number>(addBannersId.value[0].id)
//获取元素
const leftBtn = ref(null)
const rightBtn = ref(null)
const dots = ref(null)
// 存储setInterval返回的ID
const autoTurn = ref(0)
onMounted(() => {
  initializeColor()
  autoTurn.value = setInterval(rightf, 3000)
})
onBeforeUnmount(() => {
  clearInterval(autoTurn.value)
})
//左右按钮的出现
const handleMouseEnter = () => {
  if (leftBtn.value) {
    let leftBtnEl = leftBtn.value as HTMLElement
    leftBtnEl.style.display = 'block'
  }
  if (rightBtn.value) {
    let rightBtnEl = rightBtn.value as HTMLElement
    rightBtnEl.style.display = 'block'
  }
  //移入时清除定时器
  clearInterval(autoTurn.value)
  autoTurn.value = 0
}
//左右按钮的消失
const handleMouseLeave = () => {
  if (leftBtn.value) {
    let leftBtnEl = leftBtn.value as HTMLElement
    leftBtnEl.style.display = 'none'
  }
  if (rightBtn.value) {
    let rightBtnEl = rightBtn.value as HTMLElement
    rightBtnEl.style.display = 'none'
  }
  //恢复定时器
  clearInterval(autoTurn.value)
  autoTurn.value = setInterval(function () {
    rightf()
  }, 3000)
}
// 鼠标移到小圆点变色且切换图片
const handleMouseEnterDot = (key: number) => {
  // 1更改颜色
  if (dots.value) {
    let dotsEl = dots.value as HTMLElement
    //给图片对应的小圆圈上色
    dotsEl.children[key].className = 'change'
    // 遍历其它小圆圈，给其它的去色
    for (let i = 0; i < addBannersId.value.length; i++) {
      if (key !== i) {
        dotsEl.children[i].className = ''
      }
    }
  }
  // 2切换对应的图片
  //计算经过点与当前点的距离
  let distance =
    Math.max(key, initialFirstElementId.value) -
    Math.min(key, initialFirstElementId.value)
  // console.log(dis);
  if (key > initialFirstElementId.value) {
    while (distance--) {
      rightf()
    }
  } else {
    while (distance--) {
      leftf()
    }
  }
}
// 把一个数组的前n个元素倒序放在数组的后面，然后删除
const reverseAndMove = (array: any, n: number) => {
  // 检查 n 是否合理
  if (n < 0 || n > array.length) {
    console.error('Invalid value for n')
    return
  }
  // 取前 n 个元素并倒序
  const reversed = array.slice(0, n).reverse()
  // 将倒序的元素添加到数组的末尾
  array.push(...reversed)
  // 删除原来的前 n 个元素
  array.splice(0, n)
  return array
}
// 初始化颜色函数
const initializeColor = () => {
  if (addBannersId.value[0].id === 0) {
    if (dots.value) {
      let dotsEl = dots.value as HTMLElement
      //给图片对应的小圆圈上色
      dotsEl.children[0].className = 'change'
    }
  }
}
// 变色函数
const colors = () => {
  if (dots.value) {
    let dotsEl = dots.value as HTMLElement
    //给图片对应的小圆圈上色
    dotsEl.children[initialFirstElementId.value].className = 'change'
    // 遍历其它小圆圈，给其它的去色
    for (let i = 0; i < addBannersId.value.length; i++) {
      if (initialFirstElementId.value !== i) {
        dotsEl.children[i].className = ''
      }
    }
  }
}
// 右翻页，显示右边的图片
const rightf = () => {
  if (addBannersId.value.length) {
    // 移除并获取第一个元素
    const firstElement = addBannersId.value.shift()
    if (firstElement !== undefined) {
      // 将第一个元素添加到数组末尾
      addBannersId.value.push(firstElement)
    }
  }
  // 更新记录的初始第一个元素的ID
  initialFirstElementId.value = addBannersId.value[0].id
  colors()
}
// 左翻页
const leftf = () => {
  // 移除最后一个元素并保存
  let lastElement = addBannersId.value.pop()
  // 在数组开头插入最后一个元素
  if (lastElement !== undefined) {
    addBannersId.value.unshift(lastElement)
  }
  // 更新记录的初始第一个元素的ID
  initialFirstElementId.value = addBannersId.value[0].id
  colors()
}
//点击图片实现翻页,这里我是通过在左右两边添加一个盒子来实现的
const handleLeftDivClick = () => {
  leftf()
}
const handleRightDivClick = () => {
  rightf()
}
// 动态获取class选择器
const getLiClasses = (key: number) => {
  if (key === 0) return 'img1'
  else if (key === 1) return 'img2'
  else if (key == addBannersId.value.length - 1) return 'img4'
  else return 'img3'
}
</script>

<template>
  <div
    class="slideshow"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- 左侧按钮 -->
    <a
      href="javascript:;"
      ref="leftBtn"
      class="left"
      @click="handleLeftDivClick"
    >
      &lt
    </a>
    <!-- 右侧按钮 -->
    <a
      href="javascript:;"
      ref="rightBtn"
      class="right"
      @click="handleRightDivClick"
    >
      &gt
    </a>

    <!-- 轮播图片 -->
    <ul class="imgs">
      <li
        v-for="(banner, key, index) in addBannersId"
        :key="key"
        :class="getLiClasses(key)"
      >
        <a :href="banner.pictureUrl">
          <img :src="banner.pictureUrl" :alt="banner.name" />
        </a>
        <!--<p>Index: {{ key }}</p>-->
      </li>
    </ul>

    <!--小圆圈-->
    <ul ref="dots" class="list">
      <li
        v-for="(data, key, index) in addBannersId"
        :key="key"
        @mouseenter="handleMouseEnterDot(key)"
      ></li>
    </ul>

    <!--两个空盒子，实现左右两侧图片点击效果-->
    <div class="rights" @click="handleRightDivClick"></div>
    <div class="lefts" ref="leftDiv" @click="handleLeftDivClick"></div>
  </div>
</template>

<style lang="scss" scoped>
/* 设定容器大小 */
$container_height: 270px;
$container_width: 960px;
$img_width: calc($container_width * 3 / 4);
a {
  text-decoration: none;
}
/* 更改图片的大小  TODO 过度效果bug */
img {
  width: 100%;
  height: $container_height;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
}
img:hover {
  transform: scale(1.1);
}
/* 确定盒子的大小 */
.slideshow {
  position: relative;
  min-width: $container_width;
  height: $container_height;
  margin: 20px 0;
}
.imgs {
  position: absolute;
  width: $img_width;
  height: $container_height;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
}
/* 让图片都叠在一起 */
.imgs li {
  position: absolute;
  width: $img_width;
}
/* 给左右按钮设计样式，和定位 */
.slideshow .left {
  position: absolute;
  font-size: 24px;
  color: white;
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background-color: black;
  border-radius: 18px;
  /* 添加半透明 */
  opacity: 0.3;
  top: 50%;
  left: 10px;
  z-index: 999;
  display: none;
}
.slideshow .right {
  position: absolute;
  font-size: 24px;
  color: white;
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background-color: black;
  border-radius: 18px;
  /* 添加半透明 */
  opacity: 0.3;
  top: 50%;
  right: 10px;
  z-index: 999;
  display: none;
}
/* 给左右按钮添加鼠标移入样式 */
.left:hover {
  /* 把透明度挑高一点，让按钮看起来更亮一些 */
  opacity: 0.7;
}
.right:hover {
  opacity: 0.7;
}
/* 第一张图片在中间，层级最高 */
.imgs .img1 {
  z-index: 99;
}
/* 第二张图片在右边 */
.imgs .img2 {
  transform: translateX(150px) scale(0.9);
  z-index: 2;
}
/* 第三张到n-1张图片在中间，层级低不显示 */
.imgs .img3 {
  z-index: 1;
}
/* 最后一张 */
.imgs .img4 {
  transform: translateX(-150px) scale(0.9);
  z-index: 0;
}
/* 设计小圆圈 */
/* 定位 */
.list {
  padding: 2px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 777;
}
/* 设计样式 */
.list li {
  float: left;
  width: 15px;
  height: 15px;
  background-color: rgb(230, 230, 230);
  border-radius: 50%;
  margin: 0 6px;
  cursor: pointer;
}
/* 小圆圈改变后的样式 */
.list .change {
  background-color: rgb(236, 65, 65);
}
/* 左右两边各一个盒子 */
.rights {
  position: absolute;
  right: 0;
  bottom: 10px;
  height: calc($container_height * 0.9);
  width: 100px;
}
.lefts {
  position: absolute;
  left: 0;
  bottom: 10px;
  height: calc($container_height * 0.9);
  width: 100px;
}
</style>
