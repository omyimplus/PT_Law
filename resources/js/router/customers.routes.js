export default [{
  path: '/customer',
  name: 'customer',
  component: () => import(/* webpackChunkName: "auth-signin" */ '@/pages/customer/CustomerPage.vue'),
},{
  path: '/customer-create',
  name: 'customer_create',
  component: () => import(/* webpackChunkName: "auth-signin" */ '@/pages/customer/CustomerCreate.vue'),
},{
  path: '/customer-edit',
  name: 'customer_edit',
  component: () => import(/* webpackChunkName: "auth-signin" */ '@/pages/customer/CustomerEdit.vue'),
}]
