<template>
  <div class="titleBar pt-3">
    <v-row class="pb-2" align="end" no-gutters>
      <v-col cols="6">
        <div class="mb-1">
          <v-icon color="#fff" large>{{title.icon}}</v-icon>
          <h1 class="d-inline-block">{{title.name_en}}</h1>
      </div>
        <h2>{{title.name_th}}</h2>
      </v-col>
      <v-col cols="6" class="text-right">
        <v-btn class="btnTitle" :to="item.link" v-for="(item, key) in btn_title" :key="key" v-on:click="()=>{ if(item.click) item.click() }"><v-icon class="mr-1">{{item.icon}}</v-icon> {{item.text}}</v-btn>
      </v-col>
    </v-row>
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {
	},
  props:[
    'title',
    'btn_title',
    'menu',
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
.titleBar { background: #1565C0; border-radius: 5px; color: #fff; padding: 0 30px;
	h1 { font-size: 1.4em; font-weight: 400; vertical-align: middle; margin-left: 5px; }
	h2 { font-size: 1em; font-weight: 400; }
}
.btnTitle { font-size: 1.1em!important; height: auto !important; padding: 3px 15px!important; font-size: 1em; font-weight: 400; border-radius: 3px; }
</style>
