<script setup lang="ts">
import TopicNavBar from '@/views/resource/topic/TopicNavBar.vue'
import TopicCard from '@/views/resource/topic/TopicCard.vue'

const topics = [
  {
    id: '101',
    backgroundUrl: 'https://sz.jiaoyu.cn/img/sizheng5.0ae3783f.jpg',
    title: '应急管理',
  },
  {
    id: '102',
    backgroundUrl: 'https://sz.jiaoyu.cn/img/sizheng3.a41960d3.jpg',
    title: '公共安全',
  },
  {
    id: '103',
    backgroundUrl: 'https://sz.jiaoyu.cn/img/sizheng4.4305f6d7.jpg',
    title: '职业道德',
  },
  {
    id: '104',
    backgroundUrl: 'https://sz.jiaoyu.cn/img/sizheng2.9e6f562c.jpg',
    title: '职业健康',
  },
  {
    id: '105',
    backgroundUrl: 'https://sz.jiaoyu.cn/img/sizheng5.0ae3783f.jpg',
    title: '应急管理',
  },
  {
    id: '106',
    backgroundUrl: '\thttps://sz.jiaoyu.cn/img/sizheng4.4305f6d7.jpg',
    title: '公共安全',
  },
  {
    id: '107',
    backgroundUrl: 'https://sz.jiaoyu.cn/img/sizheng5.0ae3783f.jpg',
    title: '职业道德',
  },
  {
    id: '108',
    backgroundUrl: 'https://sz.jiaoyu.cn/img/sizheng5.0ae3783f.jpg',
    title: '职业健康',
  },
]

const sendDocumentId = (id: string) => {}
</script>

<template>
  <div>
    <topic-nav-bar></topic-nav-bar>
    <v-container>
      <v-row>
        <v-col
          class="pa-0"
          cols="3"
          v-for="(topic, index) in topics"
          :key="index"
        >
          <topic-card :topicInfo="topic"></topic-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped></style>
