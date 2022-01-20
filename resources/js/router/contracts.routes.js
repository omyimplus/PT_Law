export default [{
  path: '/contract',
  name: 'contract',
  component: () => import(/* webpackChunkName: "users-list" */ '@/pages/contract/ContractPage.vue')
}]
