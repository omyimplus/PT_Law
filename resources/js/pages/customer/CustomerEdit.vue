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
						<div class="layoutCreate">
							<h1 class="mb-2">สร้างลูกค้า</h1>
							<v-row no-gutters>
								<v-col cols="6" class="pr-1">
									<v-text-field
										v-model="create.name"
										label="ชื่อ"
										placeholder="กรอกชื่อ"
										background-color="#fff"
										hide-details
										dense
										outlined
										class="mb-2"
									></v-text-field>
								</v-col>
								<v-col cols="6" class="pl-1">
									<v-text-field
										v-model="create.surname"
										label="นามสกุล"
										placeholder="กรอกนามสกุล"
										background-color="#fff"
										hide-details
										dense
										outlined
										class="mb-2"
									></v-text-field>
								</v-col>
							</v-row>
							<v-text-field
								v-model="create.address"
								label="ที่อยู่"
								placeholder="กรอกที่อยู่"
								background-color="#fff"
								hide-details
								dense
								outlined
								class="mb-2"
							></v-text-field>
							<v-text-field
								v-model="create.phone"
								label="เบอร์ติดต่อ"
								placeholder="กรอกเบอร์ติดต่อ"
								background-color="#fff"
								hide-details
								dense
								outlined
								class="mb-2"
							></v-text-field>
							<v-text-field
								v-model="create.line"
								label="Line ID"
								placeholder="กรอกเบอร์ไลน์"
								background-color="#fff"
								hide-details
								dense
								outlined
								class="mb-2"
							></v-text-field>
							<v-text-field
								v-model="create.id_card"
								label="เลขบัตรประชาชน"
								placeholder="กรอกเลขบัตรประชาชน"
								background-color="#fff"
								hide-details
								dense
								outlined
								class="mb-2"
							></v-text-field>
							
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
				name: '',
				surname: '',
				address: '',
				phone: '',
				line: '',
				id_card: '',
			},
			title: {
				icon: 'mdi-account-multiple-outline',
				name_en: 'Customer',
				name_th: 'สร้างลูกค้า'
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
			if (this.create.name == '') this.error_msg = 'กรุณากรอก ชื่อ', this.error = true
			else if (this.create.surname == '') this.error_msg = 'กรุณากรอก นามสกุล', this.error = true
			else if (this.create.address == '') this.error_msg = 'กรุณากรอก ที่อยู่', this.error = true
			else if (this.create.phone == '') this.error_msg = 'กรุณากรอก เบอร์ติดต่อ', this.error = true
			else if (this.create.line == '') this.error_msg = 'กรุณากรอก ไลน์', this.error = true
			else if (this.create.id_card == '') this.error_msg = 'กรุณากรอก เลขบัตรประชาชน', this.error = true
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
