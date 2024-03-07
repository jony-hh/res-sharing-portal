<script setup lang="ts">
import { computed, ref } from 'vue'

const loading = ref(false)

const calcResidue = (month: any, day: any) => {
  // 获取当前日期
  let currentDate = new Date()

  // 设置目标日期为5月4日
  let targetDate = new Date(currentDate.getFullYear(), month - 1, day) // 月份从0开始，所以5月对应的是4
  // 如果目标日期已经过去，则将目标日期设置为下一年的5月4日
  if (currentDate > targetDate) {
    targetDate.setFullYear(targetDate.getFullYear() + 1)
  }
  // 计算时间差
  let timeDiff = targetDate.getTime() - currentDate.getTime()
  // 将时间差转换为天数
  let daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
  return daysDiff
}

const political_festival = ref([
  {
    name: '五四青年节',
    month: 5,
    day: 4,
  },
  {
    name: '中国共产党成立纪念日',
    month: 7,
    day: 1,
  },
  {
    name: '抗日战争胜利纪念日',
    month: 7,
    day: 3,
  },
  {
    name: '国庆节',
    month: 10,
    day: 1,
  },
])

const sortedFestivals = computed(() => {
  const currentDate = new Date()
  return political_festival.value
    .map((festival) => ({
      ...festival,
      targetDate:
        currentDate <
        new Date(currentDate.getFullYear(), festival.month - 1, festival.day)
          ? new Date(
              currentDate.getFullYear(),
              festival.month - 1,
              festival.day,
            )
          : new Date(
              currentDate.getFullYear() + 1,
              festival.month - 1,
              festival.day,
            ),
    }))
    .sort((a: any, b: any) => a.targetDate - b.targetDate)
})
</script>

<template>
  <div>
    <v-card elevation="16" class="mx-auto j-card" max-width="280">
      <v-card-text>
        <div style="color: #6200ea">政党重要节日</div>
        <p class="text-h6 text--primary" v-if="sortedFestivals.length > 0">
          距离【{{ sortedFestivals[0].name }}】还剩
          <span style="color: red">
            {{ calcResidue(sortedFestivals[0].month, sortedFestivals[0].day) }}
          </span>
          天
        </p>
        <div class="text--primary">
          <template v-for="festival in sortedFestivals">
            {{ festival.name }}（{{ festival.month }}月{{ festival.day }}日）
            <br />
          </template>
        </div>
      </v-card-text>
      <v-card-actions style="position: relative">
        <v-btn
          style="margin: 0 10px; transform: translateY(30%)"
          :disabled="loading"
          :loading="loading"
          class="text-none mb-4"
          color="indigo-darken-3"
          size="x-middle"
          @click="loading = !loading"
        >
          查看签到日历
        </v-btn>
        <v-btn
          style="position: absolute; right: 0; margin: 0 10px"
          variant="flat"
          color="deep-purple-accent-4"
        >
          今日签到
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
.j-card {
  margin: 10px;
}
</style>
