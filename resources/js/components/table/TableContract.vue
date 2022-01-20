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
              <th class="text-center">เลขที่สัญญา</th>
              <th class="text-center">ชื่อ - นามสกุล</th>
              <th class="text-center">จำนวนเงินกู้</th>
              <th class="text-center">จำนวนที่ต้องชำระ</th>
              <th class="text-center">วันที่ชำระ</th>
              <th class="text-center">วันที่ขอเลื่อน</th>
              <th class="text-center">สถานะ</th>
              <th class="text-right">แก้ไข</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in data" :key="key">
              <td class="text-center">{{item.id_contract}}</td>
              <td class="text-center">{{item.name}} {{item.surname}}</td>
              <td class="text-center">{{item.borrow_amount}}</td>
              <td class="text-center red--text">{{item.pay_amount}}</td>
              <td class="text-center">{{item.pay_date}}</td>
              <td class="text-center red--text">{{item.postpone_date ? item.postpone_date : ''}}</td>
              <td class="text-center">
                <div class="status status_postpone" v-if="item.status == 'ขอเลื่อน'">{{item.status}}</div>
                <div class="status status_success" v-if="item.status == 'ชำระเสร็จสิ้น'">{{item.status}}</div>
                <div class="status status_break_promise" v-if="item.status == 'ผิดสัญญา'">{{item.status}}</div>
                <div class="status status_new_promise" v-if="item.status == 'ขอสัญญาใหม่'">{{item.status}}</div>
              </td>
              <td class="text-right"><v-btn :to="'contract-edit?id=' + item.id_contract" icon><v-icon>mdi-dots-horizontal-circle-outline</v-icon></v-btn></td>
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
  .status { padding: 2px 15px; color: #fff; border-radius: 4px; display: inline-block; width: 100px;
    &.status_postpone { background: #d30000; }
    &.status_success { background: rgb(4, 119, 13) }
    &.status_break_promise { background: #000; }
    &.status_new_promise { background: #963407; }
  }
  
}
</style>
