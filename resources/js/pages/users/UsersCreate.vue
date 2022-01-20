<template>
<div class="userCreate d-flex flex-grow-1 flex-column propertyCreate">
	<v-row class="flex-grow-0" dense>
		<v-col cols="12">
			<title-bar :btn_title.sync="btnTitle" :title.sync="title" />
		</v-col>
		<v-col cols="12">
			<div class="layoutContent">
				<v-row class="justify-center" no-gutters>
					<v-col cols="12" v-if="error">
						<v-alert
							dense
							outlined
							type="error"
							>
							{{error_msg}}
						</v-alert>
					</v-col>
					<v-col cols="6">
						<div class="layoutCreate my-10">
							<h1 class="mb-2">สร้างผู้ใช้งาน</h1>
							<v-text-field
								v-model="create.username"
								label="Username"
								placeholder="กรอก Username"
								background-color="#fff"
								hide-details
								dense
								outlined
								class="mb-2"
							></v-text-field>
							<v-text-field
								v-model="create.password"
								label="Password"
								type="password"
								placeholder="กรอก Password"
								background-color="#fff"
								hide-details
								dense
								outlined
								class="mb-2"
							></v-text-field>
							<v-select
								v-model="create.role"
								label="ตำแหน่ง"
								:items="role"
								placeholder="เลือกตำแหน่ง"
								background-color="#fff"
								hide-details
								dense
								outlined
								class="mb-2"
							></v-select>
							<v-btn block color="#333" style="color: #fff; font-weight: 400; font-size: 1.2em;" class="text-center" @click="validate()">สร้าง</v-btn>
						</div>
					</v-col>
				</v-row>
			</div>
		</v-col>
	</v-row>
</div>
</template>

<script>
import TitleBar from '../../components/title/TitleBar'

export default {
	components: {
		TitleBar
	},
	data() {
		return {
			error: false,
			error_msg: null,
			loading: false,
			create: {
				username: '',
				password: '',
				role: 'employee'
			},
			role: ['employee', 'admin'],
			title: {
				icon: 'mdi-account',
				name_en: 'Create User',
				name_th: 'สร้างผู้ใช้งาน'
			},
			btnTitle: [
				{text: 'ย้อนกลับ', icon: 'mdi-chevron-left', click: () => this.$router.back()}
			]
		}
	},
	watch: {
	},
	methods: {
		validate() {
			if (this.create.username == '') this.error_msg = 'กรุณากรอก Username', this.error = true
			else if (this.create.password == '') this.error_msg = 'กรุณากรอก password', this.error = true
			else this.error = false, this.error_msg = null, this.createApi()
		},
		createApi() {
			console.log('create api')
		}
	}
}
</script>

<style lang="scss" scoped>

.userCreate {
	.layoutContent { border: 1px solid rgb(233, 233, 233); border-radius: 10px; box-shadow: 2px 2px 2px 2px rgb(233, 233, 233); background: #fff; padding: 15px; }
	.layoutCreate { background: #1565C0; padding: 15px 50px; border-radius: 5px;
		h1 { font-size: 1.1em; font-weight: 400; text-align: center; color: #fff; }
	}
}
</style>
