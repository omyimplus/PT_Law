import menuPages from './menus/pages.menu'

export default {
  // main navigation - side menu
  menu: [{
    text: '',
    key: '',
    items: [
      { icon: 'mdi-view-dashboard-outline', key: 'menu.dashboard', text: 'สรุปข้อมูล', link: '/dashboard/analytics' },
      { icon: 'mdi-file-document-edit', key: 'menu.contract', text: 'สัญญา', link: '/contract' },
      { icon: 'mdi-text-box-remove', key: 'menu.breakpromise', text: 'ผิดสัญญา', link: '/breakpromise' }
    ]
  }, {
    text: 'ข้อมูลทั่วไป',
    items: [
      { icon: 'mdi-account-multiple-outline', key: 'menu.customer', text: 'ข้อมูลลูกค้า', link: '/customer' },
      { icon: 'mdi-account', key: 'menu.users', text: 'ข้อมูลผู้ใช้งาน', link: '/users' },
    ]
  }],
}
