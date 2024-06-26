<template>
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
    <template #operate="scope">
      <Operate :comment="scope" @remove="remove" />
    </template>
    <u-comment-nav v-model="latest" @sorted="sorted"></u-comment-nav>
  </u-comment>
</template>

<script setup lang="ts">
import emoji from '@/plugins/emoji'
import { reactive, ref } from 'vue'
import {
  CommentApi,
  CommentInstance,
  createObjectURL,
  dayjs,
  ReplyApi,
  ReplyPageParamApi,
  SubmitParamApi,
  throttle,
  usePage,
  UToast,
} from 'undraw-ui'

// 评论组件的ref引用
const commentRef = ref<CommentInstance>()

// 删除评论
const remove = (comment: CommentApi) => {
  setTimeout(() => {
    commentRef.value?.remove(comment)
  }, 200)
}

const _throttle = throttle(
  (type: string, comment: CommentApi, finish: Function) => {
    switch (type) {
      case '删除':
        alert(`删除成功: ${comment.id}`)
        finish()
        break
      case '举报':
        alert(`举报成功: ${comment.id}`)
        break
    }
  },
)

const operate = (type: string, comment: CommentApi, finish: Function) => {
  _throttle(type, comment, finish)
}

// 定义响应式【评论数据】
const config = reactive<any>({
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

// mock时，评论的初始id
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
    createTime: dayjs().subtract(5, 'seconds').toString(),
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
  console.log('点赞: ', finish)

  setTimeout(() => {
    finish()
  }, 200)
}

// 回复分页
const replyPage = ({
  parentId,
  pageNum,
  pageSize,
  finish,
}: ReplyPageParamApi) => {
  let tmp = {
    total: reply.total,
    list: usePage(pageNum, pageSize, reply.list),
  }
  setTimeout(() => {
    finish(tmp)
  }, 200)
}

// 第二条评论的回复
const reply = {
  total: 8,
  list: [
    {
      id: '31',
      parentId: '3',
      uid: '6',
      address: '来自成都',
      content: '人生就像愤怒的小鸟，当你失败时，总有几只猪在笑。',
      likes: 7,
      createTime: dayjs().subtract(1, 'hour').toString(),
      user: {
        username: '陆呈洋',
        avatar:
          'https://static.juzicon.com/avatars/avatar-20220310090547-fxvx.jpeg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 4,
        homeLink: '/31',
      },
    },
    {
      id: '32',
      parentId: '3',
      uid: '7',
      address: '来自杭州',
      content: '深思熟虑的结果往往就是说不清楚。',
      likes: 3,
      createTime: dayjs().subtract(49, 'minute').toString(),
      user: {
        username: '哑谜',
        avatar:
          'https://static.juzicon.com/avatars/avatar-190919180152-2VDE.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 3,
        homeLink: '/32',
      },
    },
    {
      id: '33',
      parentId: '3',
      uid: '8',
      level: 2,
      address: '来自深圳',
      content: '当我跨过沉沦的一切，向着永恒开战的时候，你是我的军旗。',
      createTime: dayjs().subtract(5, 'hour').toString(),
      user: {
        username: 'Mia',
        avatar:
          'https://static.juzicon.com/avatars/avatar-190919181554-L2ZO.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        likes: 3,
        homeLink: '/33',
      },
    },
    {
      id: '34',
      parentId: '3',
      uid: '9',
      address: '来自西安',
      likes: 34,
      content:
        '不要由于别人不能成为我们所希望的人而愤怒，因为我们自己也难以成为自己所希望的人。',
      createTime: dayjs().subtract(6, 'hour').toString(),
      user: {
        username: 'poli301',
        avatar:
          'https://static.juzicon.com/avatars/avatar-190919180043-XPLP.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 4,
        homeLink: '/34',
      },
    },
    {
      id: '35',
      parentId: '3',
      uid: '10',
      username: 'fish_eno',
      avatar:
        'https://static.juzicon.com/avatars/avatar-190919180320-NAQJ.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
      level: 6,
      link: '/35',
      likes: 32,
      address: '来自武汉',
      content:
        '世上莫名其妙走霉运的人多的是，都是一边为命运生气，一边化愤怒为力量地活着。',
      createTime: dayjs().subtract(4, 'hour').toString(),
      user: {
        username: 'poli301',
        avatar:
          'https://static.juzicon.com/avatars/avatar-190919180043-XPLP.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 4,
        homeLink: '/34',
      },
    },
    {
      id: '36',
      parentId: '3',
      uid: '11',
      likes: 21,
      address: '来自上海',
      content: '这世上所有的不利情况，都是当事者能力不足造成的',
      createTime: dayjs().subtract(6, 'hour').toString(),
      user: {
        username: '十三',
        avatar:
          'https://static.juzicon.com/user/avatar-f103e42d-a5c9-4837-84e3-d10fad0bcb36-210108053135-E90E.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 4,
        homeLink: '/36',
      },
    },
    {
      id: '37',
      parentId: '3',
      uid: '12',
      likes: 18,
      address: '来自广州',
      content: ' 绝望自有绝望的力量，就像希望自有希望的无能。',
      createTime: dayjs().subtract(2, 'hour').toString(),
      user: {
        username: 'D.z.H****',
        avatar:
          'https://static.juzicon.com/avatars/avatar-190919181051-M3HK.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 3,
        homeLink: '/37',
      },
    },
    {
      id: '38',
      parentId: '3',
      uid: '13',
      likes: 17,
      address: '来自重庆',
      content: ' 无论这个世界对你怎样，都请你一如既往的努力，勇敢，充满希望。',
      createTime: dayjs().subtract(3, 'hour').toString(),
      user: {
        username: '繁星Cong2',
        avatar:
          'https://static.juzicon.com/user/avatar-f81b3655-03fd-485c-811b-4b5ceaca52b6-210817180051-YTO4.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 1,
        homeLink: '/38',
      },
    },
  ],
} as ReplyApi

// 评论数据
config.comments = [
  {
    id: '2',
    parentId: null,
    uid: '2',
    address: '来自苏州',
    content:
      '知道在学校为什么感觉这么困吗？[大笑2]因为学校，是梦开始的地方。[脱单doge]',
    likes: 11,
    createTime: dayjs().subtract(10, 'hour').toString(),
    user: {
      username: '悟二空',
      avatar:
        'https://static.juzicon.com/user/avatar-bf22291e-ea5c-4280-850d-88bc288fcf5d-220408002256-ZBQQ.jpeg',
      level: 1,
      homeLink: '/2',
    },
    reply: {
      total: 2,
      list: [
        {
          id: '21',
          parentId: '2',
          uid: '3',
          address: '来自重庆',
          content: '说的对[大笑2]，所以，综上所述，上课睡觉不怪我呀💤',
          likes: 3,
          createTime: dayjs().subtract(10, 'minute').toString(),
          user: {
            username: '别扰我清梦*ぁ',
            avatar:
              'https://static.juzicon.com/user/avatar-8b6206c1-b28f-4636-8952-d8d9edec975d-191001105631-MDTM.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
            level: 5,
            homeLink: '/21',
          },
        },
        {
          id: '22',
          parentId: '2',
          uid: '4',
          content:
            '回复 <span style="color: var(--u-color-success-dark-2);">@别扰我清梦*ぁ:</span> 看完打了一个哈切。。。会传染。。。[委屈]',
          address: '来自广州',
          likes: 9,
          createTime: dayjs().subtract(20, 'minute').toString(),
          user: {
            username: 'Blizzard',
            avatar:
              'https://static.juzicon.com/user/avatar-3cb86a0c-08e7-4305-9ac6-34e0cf4937cc-180320123405-BCV6.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
            level: 3,
            homeLink: '/22',
          },
        },
      ],
    },
  },
  {
    id: '3',
    parentId: null,
    uid: '2',
    address: '来自苏州',
    content:
      '知道在学校为什么感觉这么困吗？[大笑2]因为学校，是梦开始的地方。[脱单doge]',
    likes: 11,
    createTime: dayjs().subtract(8, 'hour').toString(),
    user: {
      username: '悟二空',
      avatar:
        'https://static.juzicon.com/user/avatar-bf22291e-ea5c-4280-850d-88bc288fcf5d-220408002256-ZBQQ.jpeg',
      level: 1,
      homeLink: '/2',
    },
    reply: reply,
  },
]
</script>
