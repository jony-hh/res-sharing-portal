// 常量路由
import { RouteRecordRaw } from "vue-router";

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

// profile子路由404配置
const profileRoute404: RouteRecordRaw[] = [
  {
    path: '404',
    component: () => import('@/views/not-found/NotFound.vue'),
  },
  {
    path: '/:pathMatch(profile/.*)',
    redirect: '/profile/404',
  },
]

const searchRoute404: RouteRecordRaw[] = [
  {
    path: '404',
    component: () => import('@/views/not-found/NotFound.vue'),
  },
  {
    path: '/:pathMatch(search/.*)',
    redirect: '/search/404',
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
    path: '/search',
    component: () => import('@/views/search/SearchResult.vue'),
    name: 'search',
    children: [
      {
        path: 'course',
        component: () => import('@/views/search/item/SearchCourse.vue'),
        name: 'searchCourse',
      },
      {
        path: 'document',
        component: () => import('@/views/search/item/SearchDocument.vue'),
        name: 'searchDocument',
      },
      {
        path: 'qa',
        component: () => import('@/views/search/item/SearchQa.vue'),
        name: 'searchQa',
      },
      {
        path: 'wiki',
        component: () => import('@/views/search/item/SearchWiki.vue'),
        name: 'searchWiki',
      },
      {
        path: 'user',
        component: () => import('@/views/search/item/SearchUser.vue'),
        name: 'searchUser',
      },
      ...searchRoute404,
    ],
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
    path: '/resource/video/more',
    component: () => import('@/views/resource/video/MoreVideo.vue'),
    name: 'MoreVideo',
  },
  {
    path: '/resource/topic/more',
    component: () => import('@/views/resource/topic/MoreTopic.vue'),
    name: 'MoreTopic',
  },
  {
    path: '/resource/document/more',
    component: () => import('@/views/resource/docment/MoreDocument.vue'),
    name: 'MoreDocument',
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
    path: '/question/detail',
    component: () => import('@/views/qa/detail/QaDetail.vue'),
    name: 'question_detail',
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
      ...profileRoute404,
    ],
  },
  {
    path: '/edit',
    component: () => import('@/views/user/center/EditProfile.vue'),
    name: 'edit',
  },
  ...rootRoutePage404,
]
