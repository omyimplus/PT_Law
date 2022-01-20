<template>
<div class="userPage d-flex flex-grow-1 flex-column propertyCreate">
	<v-row class="flex-grow-0" dense>
		<v-col cols="12">
			<title-bar :btn_title.sync="btnTitle" :title.sync="title" :menu.sync="menu" :menu_select.sync="menu_select">
				<v-row no-gutters>
					<menu-main :data.sync="menu" :menu_select.sync="menu_select"/>
				</v-row>
			</title-bar>
		</v-col>
		<v-col cols="12">
			<div class="layoutContent">
				<table-contract :data.sync="user_data" :loading.sync="loading" :pagination.sync="pagination" />
			</div>
		</v-col>
	</v-row>
</div>
</template>

<script>
import TitleBar from '../../components/title/TitleBar'
import TableContract from '../../components/table/TableContract'
import MenuMain from '../../components/menu/MenuMain'
export default {
	components: {
		TitleBar,
		TableContract,
		MenuMain
	},
	data() {
		return {
			loading: false,
			menu_select: 0,
			menu: [
				{ text: 'วันนี้' },
				{ text: 'พรุ่งนี้' },
				{ text: 'ทั้งหมด' }
			],
			pagination: {
				current_page: 1,
				last_page: 1
			},
			user_data: [	  
				{ id_contract: '1001', name: 'พัชร', surname: 'เลิศพรชัยกุล', borrow_amount: '100,000', pay_amount: '1,100', pay_date: '17/01/2565', postpone_date: '18/01/2565', status: 'ขอเลื่อน', },
				{ id_contract: '1001', name: 'พัชร', surname: 'เลิศพรชัยกุล', borrow_amount: '100,000', pay_amount: '1,100', pay_date: '17/01/2565', postpone_date: '18/01/2565', status: 'ชำระเสร็จสิ้น', },
				{ id_contract: '1001', name: 'พัชร', surname: 'เลิศพรชัยกุล', borrow_amount: '100,000', pay_amount: '1,100', pay_date: '17/01/2565', postpone_date: '18/01/2565', status: 'ผิดสัญญา', },
				{ id_contract: '1001', name: 'พัชร', surname: 'เลิศพรชัยกุล', borrow_amount: '100,000', pay_amount: '1,100', pay_date: '17/01/2565', postpone_date: '18/01/2565', status: 'ขอสัญญาใหม่', }
			],
			title: {
				icon: 'mdi-file-document-edit',
				name_en: 'Contract',
				name_th: 'สัญญา'
			},
			btnTitle: [
				{text: 'สร้าง', icon: 'mdi-plus-circle-outline', link: '/contract-create'}
			]
		}
	},
	watch: {
		menu_select(val) {
			console.log(val)
		}
	},
	methods: {
			
	}
}
</script>

<style lang="scss" scoped>

.userPage {
	.layoutContent { border: 1px solid rgb(233, 233, 233); border-radius: 10px; box-shadow: 2px 2px 2px 2px rgb(233, 233, 233); background: #fff; padding: 15px; }
}
</style>
