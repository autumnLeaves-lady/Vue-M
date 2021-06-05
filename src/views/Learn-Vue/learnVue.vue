<template>
  <div ref="box">
    <strong>父组件：</strong>
    <el-button @click="event">改变a的值</el-button>
    <el-button @click="event1">改变b的值</el-button>
    <hr>
    <child
      :a="a"
      :b="JSON.parse(JSON.stringify(b))"
    />
  </div>
</template>

<script>
import child from './child.vue';

export default {
  data() {
    return {
      a: 'aaaaaaa',
      b: [11, 22],
    };
  },
  components: {
    child,
  },
  watch: {
    a: {
      handler(val) {
        console.log('父-watch-a: ', val);
      },
      deep: true,
      immediate: true,
    },
    b: {
      handler(val) {
        console.log('父-watch-b: ', val);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    event() {
      this.a = `mlj-${Math.round(Math.random() * 100)}`;
    },
    event1() {
      this.b = `mlj-${Math.round(Math.random() * 100)}`;
    },
  },
};
</script>
