<template>
  <u-comment-scroll :disable="disable" @more="more">
    <u-comment
      ref="commentRef"
      :config="config"
      upload
      page
      @submit="submit"
      @like="like"
      @reply-page="replyPage"
      @operate="operate"
      relative-time
    >
      <!-- <div>导航栏卡槽</div> -->
      <!-- <template #header>头部卡槽</template> -->
      <!-- <template #info>用户信息卡槽</template> -->
      <!-- <template #card>用户信息卡片卡槽</template> -->
      <!-- <template #opearte>操作栏卡槽</template> -->
      <!-- <template #func>功能区域卡槽</template> -->
    </u-comment>
  </u-comment-scroll>
</template>

<script setup lang="ts">
// 下载表情包资源emoji.zip https://gitee.com/undraw/undraw-ui/releases/tag/v0.0.0
// static文件放在public下,引入emoji.ts文件可以移动assets下引入,也可以自定义到指定位置
import emoji from '@/plugins/emoji'
import { reactive, ref } from 'vue'
import {
  CommentApi,
  ConfigApi,
  createObjectURL,
  SubmitParamApi,
  UToast,
} from 'undraw-ui'
import { commentSize, getComment } from './comment'

const config = reactive<ConfigApi>({
  user: {
    id: 1,
    username: 'jack',
    avatar:
      'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
    // 评论id数组 建议:存储方式用户uid和评论id组成关系,根据用户uid来获取对应点赞评论id,然后加入到数组中返回
    likeIds: [1, 2, 3],
  },
  emoji: emoji,
  comments: [],
  total: 10,
})

// 排序分类（default最新）
const latest = ref(true)

//排序
const sorted = (latest: boolean) => {
  // 执行操作
  console.log(latest)
}

// 初始化评论列表
config.comments = getComment(1, 3)

// 是否禁用滚动加载评论
const disable = ref(false)

// 当前页数
let pageNum = 2
// 页大小
let pageSize = 3
// 评论总数量
let total = commentSize

// 加载更多评论
const more = () => {
  console.log(disable.value)
  if (pageNum <= Math.ceil(total / pageSize)) {
    setTimeout(() => {
      config.comments.push(...getComment(pageNum, 3))
      pageNum++
    }, 200)
  } else {
    disable.value = true
  }
}

let temp_id = 100

// 提交评论事件
const submit = ({ content, parentId, files, finish }: SubmitParamApi) => {
  console.log('提交评论: ' + content, parentId, files)

  /**
   * 上传文件后端返回图片访问地址，格式以'||'为分割; 如:  '/static/img/program.gif||/static/img/normal.webp'
   */
  let contentImg = files?.map((e) => createObjectURL(e)).join('||')
  temp_id += 1
  const comment: CommentApi = {
    id: String(temp_id),
    parentId: parentId,
    uid: config.user.id,
    address: '来自江苏',
    content: content,
    likes: 0,
    createTime: '2023-05-05 06:00:00',
    contentImg: contentImg,
    user: {
      username: config.user.username,
      avatar: config.user.avatar,
      level: 6,
      homeLink: `/${temp_id}`,
    },
    reply: null,
  }
  setTimeout(() => {
    finish(comment)
    UToast({ message: '评论成功!', type: 'info' })
  }, 200)
}

// 点赞按钮事件 将评论id返回后端判断是否点赞，然后在处理点赞状态
const like = (id: string, finish: () => void) => {
  console.log('点赞: ' + id)
  setTimeout(() => {
    finish()
  }, 200)
}
</script>
