// 常量路由
import { RouteRecordRaw } from 'vue-router'

// 根路由404配置
const rootRoutePage404: RouteRecordRaw[] = [
  {
    path: '/404',
    component: () => import('@/views/not-found/NotFound.vue'),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
    name: 'Any Route',
  },
]

// index子路由404配置
const indexSubRoute404: RouteRecordRaw[] = [
  {
    path: '404',
    component: () => import('@/views/not-found/NotFound.vue'),
  },
  {
    path: '/:pathMatch(profile/.*)',
    redirect: '/profile/404',
  },
]

// 静态路由
export const constantRoute = [
  {
    //登录成功以后展示数据的路由
    path: '/',
    name: 'root',
    redirect: '/home',
  },
  {
    //登录成功以后展示数据的路由
    path: '/home',
    component: () => import('@/views/home/MainContent.vue'),
    name: 'home',
  },
  {
    path: '/signin',
    component: () => import('@/views/user/SignIn.vue'),
    name: 'signin',
  },
  {
    path: '/signup',
    component: () => import('@/views/user/SignUp.vue'),
    name: 'signup',
  },
  {
    path: '/test',
    component: () => import('@/views/test/TestScreen.vue'),
    name: 'test',
  },
  {
    path: '/resource',
    component: () => import('@/views/resource/ResourceLib.vue'),
    name: 'resource',
  },
  {
    path: '/document/detail',
    component: () => import('@/views/resource/docment/DisplayDocument.vue'),
    name: 'document_detail',
  },
  {
    path: '/video/detail',
    component: () => import('@/views/resource/video/detail/CourseVideo.vue'),
    name: 'video_detail',
  },
  {
    path: '/topic/detail',
    component: () => import('@/views/resource/topic/detail/TopicElement.vue'),
    name: 'topic_detail',
  },
  {
    path: '/qa',
    component: () => import('@/views/qa/QuestionAnswer.vue'),
    name: 'qa',
  },
  {
    path: '/wiki',
    component: () => import('@/views/wiki/WikiBook.vue'),
    name: 'wiki',
  },
  {
    path: '/wiki/bookDetail',
    component: () => import('@/views/wiki/book/BookDetail.vue'),
    name: 'bookDetail',
  },
  {
    path: '/profile',
    component: () => import('@/views/user/center/ProfileCenter.vue'),
    name: 'profile',
    redirect: '/profile/activity',
    children: [
      {
        path: 'activity',
        component: () => import('@/views/user/item/ActivityItem.vue'),
        name: 'activity',
      },
      {
        path: 'res',
        component: () => import('@/views/user/item/ResItem.vue'),
        name: 'res',
      },
      {
        path: 'question',
        component: () => import('@/views/user/item/QaItem.vue'),
        name: 'question',
      },
      {
        path: 'like',
        component: () => import('@/views/user/item/LikeItem.vue'),
        name: 'like',
      },
      {
        path: 'collection',
        component: () => import('@/views/user/item/CollectionItem.vue'),
        name: 'collection',
      },
      {
        path: 'record',
        component: () => import('@/views/user/item/RecordItem.vue'),
        name: 'record',
      },
      ...indexSubRoute404,
    ],
  },
  {
    path: '/edit',
    component: () => import('@/views/user/center/EditProfile.vue'),
    name: 'edit',
  },
  ...rootRoutePage404,
]
