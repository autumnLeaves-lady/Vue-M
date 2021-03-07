<template>
  <div ref="box">

    <el-button
      @click="event"
      size="mini"
    >改变a的值</el-button>
    <div>{{a.name.x[0]}}……{{a.type}}</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      a: {
        name: { x: ['张三'] },
        type: '这是他的名字',
      },
    };
  },
  watch: {
    a: {
      handler(val) {
        console.log('val: ', val);
      },
      deep: true,
    },
  },
  methods: {
    event() {
      this.a.name.x[0] = 'mlj';
    },
  },
};
</script>

<style>
</style>
