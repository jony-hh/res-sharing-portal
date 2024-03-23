<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchDefault, fetchGrid, NEWS_PARAM_CONSTANT } from '@/api/home'

const gridData = ref<any>([])
const defaultData = ref<any>([])

// 获取栅格数据
const getGridData = async () => {
  const { data } = await fetchGrid(NEWS_PARAM_CONSTANT.FETCH_GRiD_FLAG)
  console.log(data)
  gridData.value = data
}

// 获取默认数据
const getDefaultData = async () => {
  const { data } = await fetchDefault(NEWS_PARAM_CONSTANT.FEATCH_DEFAULT_FLAG)
  console.log(data)
  defaultData.value = data
}

onMounted(async () => {
  await getGridData()
  await getDefaultData()
})
</script>

<template>
  <div class="news">
    <div class="d-flex justify-lg-space-between my-2 mx-10">
      <div>资讯要闻</div>
      <div>查看更多 ></div>
    </div>
    <div class="d-flex justify-lg-space-around">
      <div style="height: 200px">
        <div class="box">
          <a
            target="_blank"
            :title="gridData[0].title"
            :href="gridData[0].href"
          >
            <span class="txt" style="width: 360px">
              {{ gridData[0].title }}
            </span>
            <div class="img" style="height: 200px">
              <img
                style="height: 200px; width: 360px; object-fit: cover"
                :src="gridData[0].pictureUrl"
                alt=""
              />
            </div>
          </a>
        </div>
        <div style="display: flex">
          <div class="box">
            <a
              target="_blank"
              :title="gridData[1].title"
              :href="gridData[1].href"
            >
              <span class="txt" style="width: 180px">
                {{ gridData[1].title }}
              </span>
              <div class="img">
                <img
                  style="height: 100px; width: 180px; object-fit: cover"
                  :src="gridData[1].pictureUrl"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div class="box">
            <a
              target="_blank"
              :title="gridData[2].title"
              :href="gridData[2].href"
            >
              <span style="width: 180px" class="txt">
                {{ gridData[2].title }}
              </span>
              <div class="img">
                <img
                  style="height: 100px; width: 180px; object-fit: cover"
                  :src="gridData[2].pictureUrl"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div style="width: 420px">
        <div class="item" v-for="(item, index) in defaultData" :key="index">
          <div class="tit">
            <a target="_blank" :title="item.title" :href="item.href">
              {{ item.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.news {
  width: 960px;
}

.box {
  position: relative;
}

.txt {
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  font-size: 13px;
  color: #fff;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  padding: 0 10px;
  bottom: 0;
  z-index: 20;
}

.item .tit {
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 15px 20px;

  a {
    text-decoration: none;
    color: #333;
    margin-left: 20px;
    font-family:
      PingFang SC,
      '微软雅黑',
      Arial,
      Helvetica Neue,
      Helvetica,
      Tahoma,
      sans-serif;
  }

  a:hover {
    color: #f88b00;
  }

  a:before {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    font-size: 0;
    line-height: 0;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -2.5px;
    background: #ccc;
  }
}
</style>
