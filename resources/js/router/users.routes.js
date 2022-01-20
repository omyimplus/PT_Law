export default [{
  path: '/users',
  name: 'users',
  component: () => import(/* webpackChunkName: "users-list" */ '@/pages/users/UsersPage.vue')
},{
  path: '/user-create',
  name: 'user_create',
  component: () => import(/* webpackChunkName: "users-list" */ '@/pages/users/UsersCreate.vue')
},{
  path: '/user-edit',
  name: 'user_edit',
  component: () => import(/* webpackChunkName: "users-list" */ '@/pages/users/UsersEdit.vue')
},]
