<template>
<div class="userPage d-flex flex-grow-1 flex-column propertyCreate">
	<v-row class="flex-grow-0" dense>
		<v-col cols="12">
			<title-bar :btn_title.sync="btnTitle" :title.sync="title" />
		</v-col>
		<v-col cols="12">
			<div class="layoutContent">
				<table-user :data.sync="user_data" :loading.sync="loading" :pagination.sync="pagination"/>
			</div>
		</v-col>
	</v-row>
</div>
</template>

<script>
import TitleBar from '../../components/title/TitleBar'
import TableUser from '../../components/table/TableUser'

export default {
	components: {
		TitleBar,
		TableUser
	},
	data() {
		return {
			loading: false,
			pagination: {
				current_page: 1,
				last_page: 1
			},
			user_data: [
				{ email: 'omyimplus', id: 1 }
			],
			title: {
				icon: 'mdi-account',
				name_en: 'Users',
				name_th: 'ข้อมูลผู้ใช้งาน'
			},
			btnTitle: [
				{text: 'สร้าง', icon: 'mdi-plus-circle-outline', link: '/user-create'}
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
