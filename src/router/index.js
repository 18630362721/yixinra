import { createRouter, createWebHashHistory } from 'vue-router'
// import layout from '@/layout/index'

/**
 * 私有路由表
 */
// const privateRoutes = [
//   {
//     path: '/user',
//     name: 'user',
//     component: layout,
//     redirect: '/user/manage',
//     meta: {
//       title: 'user',
//       icon: 'personnel'
//     },
//     children: [
//       {
//         path: '/user/manage',
//         name: '用户管理',
//         component: () => import('@/views/user-manage/index'),
//         meta: {
//           title: 'userManage',
//           icon: 'personnel-manage'
//         }
//       },
//       {
//         path: '/user/role',
//         name: '角色列表',
//         component: () => import('@/views/role-list/index'),
//         meta: {
//           title: 'roleList',
//           icon: 'role'
//         }
//       },
//       {
//         path: '/user/permission',
//         name: '权限列表',
//         component: () => import('@/views/permission-list/index'),
//         meta: {
//           title: 'permissionList',
//           icon: 'permission'
//         }
//       },
//       {
//         path: '/user/info/:id',
//         name: '用户详情',
//         component: () => import('@/views/user-info/index'),
//         props: true,
//         meta: {
//           title: 'userInfo'
//         }
//       },
//       {
//         path: '/user/import',
//         name: '导入',
//         component: () => import('@/views/import/index'),
//         meta: {
//           title: 'excelImport'
//         }
//       }
//     ]
//   },
//   {
//     path: '/article',
//     component: layout,
//     redirect: '/article/ranking',
//     meta: {
//       title: 'article',
//       icon: 'article'
//     },
//     children: [
//       {
//         path: '/article/ranking',
//         name: '文章排名',
//         component: () => import('@/views/article-ranking/index'),
//         meta: {
//           title: 'articleRanking',
//           icon: 'article-ranking'
//         }
//       },
//       {
//         path: '/article/:id',
//         name: '文章详情',
//         component: () => import('@/views/article-detail/index'),
//         meta: {
//           title: 'articleDetail'
//         }
//       },
//       {
//         path: '/article/create',
//         name: '创建文章',
//         component: () => import('@/views/article-create/index'),
//         meta: {
//           title: 'articleCreate',
//           icon: 'article-create'
//         }
//       },
//       {
//         path: '/article/editor/:id',
//         component: () => import('@/views/article-create/index'),
//         meta: {
//           title: 'articleEditor'
//         }
//       }
//     ]
//   },
//   {
//     path: '/echarts',
//     name: '图表',
//     component: layout,
//     redirect: '/echarts/echars',
//     meta: {
//       title: 'echarts',
//       icon: 'el-icon-menu'
//     },
//     children: [
//       {
//         path: '/echarts/echars',
//         name: '数据可视化',
//         component: () => import('@/views/echarts/index'),
//         meta: {
//           title: 'charsEchars',
//           icon: 'personnel-manage'
//         }
//       }
//     ]
//   }
// ]

/**
 * 公开路由表
 */
const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    // redirect: '/profile',
    component: () => import('@/layout/index')
    //   children: [
    //     // 个人中心
    //     {
    //       path: '/profile',
    //       name: 'profile',
    //       component: () => import('@/views/profile/index'),
    //       meta: {
    //         title: 'profile',
    //         icon: 'personnel'
    //       }
    //     },
    //     // 404
    //     {
    //       path: '/404',
    //       name: '404',
    //       component: () => import('@/views/error-page/404')
    //     },
    //     {
    //       path: '/401',
    //       name: '401',
    //       component: () => import('@/views/error-page/401')
    //     }
    //     // 401
    //   ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes]
})

export default router
