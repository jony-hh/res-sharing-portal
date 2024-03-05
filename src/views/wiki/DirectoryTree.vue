<template>
  <el-input
    v-model="filterText"
    style="width: 240px"
    placeholder="Filter keyword"
  />

  <el-tree
    ref="treeRef"
    style="max-width: 600px"
    class="filter-tree"
    :data="data"
    :props="defaultProps"
    :filter-node-method="filterNode"
  />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { ElTree } from 'element-plus'

interface Tree {
  [key: string]: any
}

const filterText = ref('')
const treeRef = ref<InstanceType<typeof ElTree>>()

const defaultProps = {
  children: 'children',
  label: 'label',
}

watch(filterText, (val) => {
  treeRef.value!.filter(val)
})

const filterNode = (value: string, data: Tree) => {
  if (!value) return true
  return data.label.includes(value)
}

const data: Tree[] = [
  {
    "id": 1,
    "label": "Vue系列",
    "children": [
      {
        "id": 101,
        "label": "Vue基础入门",
        "author": "张三",
        "date": "2022-03-01"
      },
      {
        "id": 102,
        "label": "Vue组件开发",
        "author": "李四",
        "date": "2022-03-05"
      },
      {
        "id": 103,
        "label": "Vue路由管理",
        "author": "王五",
        "date": "2022-03-10"
      }
    ]
  },
  {
    "id": 2,
    "label": "Vue3系列",
    "children": [
      {
        "id": 201,
        "label": "Vue3新特性介绍",
        "author": "赵六",
        "date": "2022-03-15"
      },
      {
        "id": 202,
        "label": "Vue3响应式原理解析",
        "author": "钱七",
        "date": "2022-03-20"
      }
    ]
  },
  {
    "id": 3,
    "label": "ES6系列",
    "children": [
      {
        "id": 301,
        "label": "ES6箭头函数",
        "author": "张三",
        "date": "2022-03-02"
      },
      {
        "id": 302,
        "label": "ES6模块化",
        "author": "李四",
        "date": "2022-03-06"
      }
    ]
  },
  {
    "id": 4,
    "label": "JavaScript系列",
    "children": [
      {
        "id": 401,
        "label": "JavaScript异步编程",
        "author": "王五",
        "date": "2022-03-12"
      }
    ]
  },
  {
    "id": 5,
    "label": "CSS系列",
    "children": [
      {
        "id": 501,
        "label": "CSS布局技巧",
        "author": "赵六",
        "date": "2022-03-18"
      }
    ]
  },
  {
    "id": 6,
    "label": "Webpack系列",
    "children": [
      {
        "id": 601,
        "label": "Webpack配置指南",
        "author": "钱七",
        "date": "2022-03-25"
      }
    ]
  },
  {
    "id": 7,
    "label": "HTTP系列",
    "children": [
      {
        "id": 701,
        "label": "HTTP基础知识",
        "author": "张三",
        "date": "2022-03-03"
      }
    ]
  },
  {
    "id": 8,
    "label": "NodeJS系列",
    "children": [
      {
        "id": 801,
        "label": "NodeJS入门指南",
        "author": "李四",
        "date": "2022-03-08"
      }
    ]
  },
  {
    "id": 9,
    "label": "React系列",
    "children": [
      {
        "id": 901,
        "label": "React组件生命周期",
        "author": "王五",
        "date": "2022-03-14"
      }
    ]
  },
  {
    "id": 10,
    "label": "版本控制系列",
    "children": [
      {
        "id": 1001,
        "label": "Git基础操作",
        "author": "赵六",
        "date": "2022-03-21"
      }
    ]
  },
  {
    "id": 11,
    "label": "操作系统系列",
    "children": [
      {
        "id": 1101,
        "label": "操作系统原理概述",
        "author": "钱七",
        "date": "2022-03-28"
      }
    ]
  },
  {
    "id": 12,
    "label": "TypeScript系列",
    "children": [
      {
        "id": 1201,
        "label": "TypeScript类型系统",
        "author": "张三",
        "date": "2022-04-01"
      }
    ]
  },
  {
    "id": 13,
    "label": "算法与数据结构系列",
    "children": [
      {
        "id": 1301,
        "label": "算法复杂度分析",
        "author": "李四",
        "date": "2022-04-05"
      }
    ]
  },
  {
    "id": 14,
    "label": "小程序系列",
    "children": [
      {
        "id": 1401,
        "label": "小程序开发入门",
        "author": "王五",
        "date": "2022-04-10"
      }
    ]
  },
  {
    "id": 15,
    "label": "设计模式系列",
    "children": [
      {
        "id": 1501,
        "label": "常用设计模式解析",
        "author": "赵六",
        "date": "2022-04-15"
      }
    ]
  },
  {
    "id": 16,
    "label": "Web部件",
    "children": [
      {
        "id": 1601,
        "label": "Web部件设计原则",
        "author": "钱七",
        "date": "2022-04-20"
      }
    ]
  },
  {
    "id": 17,
    "label": "Web前端集合",
    "children": [
      {
        "id": 1701,
        "label": "前端工程化实践",
        "author": "张三",
        "date": "2022-04-25"
      }
    ]
  }
]
</script>
