<template>
<div class="userPage d-flex flex-grow-1 flex-column propertyCreate">
	<v-row class="flex-grow-0" dense>
		<v-col cols="12">
			<title-bar :btn_title.sync="btnTitle" :title.sync="title" />
		</v-col>
		<v-col cols="12">
			<div class="layoutContent">
				<table-customer :data.sync="user_data" :loading.sync="loading" :pagination.sync="pagination" />
			</div>
		</v-col>
	</v-row>
</div>
</template>

<script>
import TitleBar from '../../components/title/TitleBar'
import TableCustomer from '../../components/table/TableCustomer'

export default {
	components: {
		TitleBar,
		TableCustomer
	},
	data() {
		return {
			loading: false,
      pagination: {
        current_page: 1,
        last_page: 1
      },
			user_data: [
				{ name: 'พัชร', surname: 'เลิศพรชัยกุล', address: '255 หมู่ 9 ต.ท่าสาย อ.เมือง จ.เชียงราย', phone: '0946693034', line: 'aisuru_oat', id_card: '1100800124976', bank_number: '1234567890' },
        { name: 'พัชร', surname: 'เลิศพรชัยกุล', address: '255 หมู่ 9 ต.ท่าสาย อ.เมือง จ.เชียงราย', phone: '0946693034', line: 'aisuru_oat', id_card: '1100800124976', bank_number: '1234567890' },
        { name: 'พัชร', surname: 'เลิศพรชัยกุล', address: '255 หมู่ 9 ต.ท่าสาย อ.เมือง จ.เชียงราย', phone: '0946693034', line: 'aisuru_oat', id_card: '1100800124976', bank_number: '1234567890' },
        { name: 'พัชร', surname: 'เลิศพรชัยกุล', address: '255 หมู่ 9 ต.ท่าสาย อ.เมือง จ.เชียงราย', phone: '0946693034', line: 'aisuru_oat', id_card: '1100800124976', bank_number: '1234567890' },
			],
			title: {
				icon: 'mdi-account-multiple-outline',
				name_en: 'Customer',
				name_th: 'ข้อมูลลูกค้า'
			},
			btnTitle: [
				{text: 'สร้าง', icon: 'mdi-plus-circle-outline', link: '/customer-create'}
			]
		}
	},
	watch: {
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
