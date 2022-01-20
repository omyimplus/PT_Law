<template>
  <v-col class="navMenu" v-if="data">
    <v-btn v-bind:class="menu_select == key ? 'active' : ''" text color="#fff" v-for="(item, key) in data" :key="key" :to="item.link" @click="sendIndex(key)">{{item.text}}</v-btn>
  </v-col>
</template>

<script>
/*
|---------------------------------------------------------------------
| Copy Label Component
|---------------------------------------------------------------------
|
| Copy to clipboard with the plugin clipboard `this.$clipboard`
|
*/
export default {
  props:[
    'data',
    'menu_select'
  ],
  data() {
    return {
    }
  },
  beforeDestroy() {
  },
  methods: {
    sendIndex(key) {
      this.$emit('update:menu_select', key)
    }
  }
}
</script>

<style lang="scss" scoped>
.navMenu { margin-bottom: 5px;
	button { position: relative; margin-right: 8px; font-weight: 400;
    &.active {
      &::before { opacity: 0.3; }
    }
		&:after { content: ''; position: absolute; right: -5px; top: 25%; bottom: 25%; width: 1px; background: #fff; }
		&:last-child::after { display: none; }
	}
}
</style>
