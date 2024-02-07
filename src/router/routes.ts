// 常量路由
export const constantRoute = [
  {
    //登录成功以后展示数据的路由
    path: '/',
    component: () => import('@/views/home/HomePage.vue'),
    name: 'home',
    children: [
      {
        path: '/login',
        component: () => import('@/views/home/SignIn.vue'),
        name: 'login',
      },
      {
        path: '/compositive',
        component: () => import('@/views/home/CompositivePage.vue'),
        name: 'compositive',
      },
      {
        path: '/article',
        component: () => import('@/views/article/MyArticle.vue'),
        name: 'article',
      },
      {
        path: '/qa',
        component: () => import('@/views/qa/QuestionAnswer.vue'),
        name: 'qa',
      },
      {
        path: '/wiki',
        component: () => import('@/views/wiki/MyWiki.vue'),
        name: 'wiki',
      },
    ],
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/not-found/NotFound.vue'),
    name: '404',
  },
  {
    //任意路由
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
]
