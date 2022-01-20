<template>
  <div v-if="loading">
    <v-skeleton-loader
      class="mx-auto"
      max-width="100%"
      type="table"
    ></v-skeleton-loader>
  </div>
  <div v-else>
      <v-simple-table class="tableLayout">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">ชื่อ - นามสกุล</th>
              <th>ที่อยู่</th>
              <th>เบอร์ติดต่อ</th>
              <th>ไลน์</th>
              <th>เลขบัตรประชาชน</th>
              <th>เลขบัญชี</th>
              <th class="text-right">แก้ไข</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in data" :key="key">
              <td class="text-center">{{item.name}} {{item.surname}}</td>
              <td>{{item.address}}</td>
              <td><a :href="'tel:' + item.phone">{{item.phone}}</a></td>
              <td><a :href="'https://line.me/ti/p/~' + item.line" target="_blank">{{item.line}}</a></td>
              <td>{{item.id_card}}</td>
              <td>{{item.bank_number}}</td>
              <td class="text-right"><v-btn :to="'customer-edit?id=' + item.id" icon><v-icon>mdi-dots-horizontal-circle-outline</v-icon></v-btn></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-pagination
          v-model="pagination.current_page"
          class="my-4"
          :length="pagination.last_page"
          total-visible="10"
      ></v-pagination>
  </div>
</template>

<script>
export default {
  components: {
		
	},
  props:[
    'data',
    'pagination',
    'loading'
  ],
  data() {
    return {
    }
  },
  beforeDestroy() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.tableLayout {
  a { text-decoration: none; }
  thead { background: #333; }
  th { font-size: 0.9em!important; font-weight: 400; color: #fff!important; height: 35px!important; }
  td { vertical-align: middle; white-space: nowrap; }
}
</style>
