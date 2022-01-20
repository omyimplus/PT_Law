export default [{
  path: '/breakpromise',
  name: 'breakpromise',
  component: () => import(/* webpackChunkName: "users-list" */ '@/pages/breakpromise/BreakpromisePage.vue')
}]