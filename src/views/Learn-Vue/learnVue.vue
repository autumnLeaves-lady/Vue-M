<template>
  <div ref="box">
    <el-button @click="event"> 按钮</el-button>
    <div>{{cityName}}</div>
    <child-components :cityName="cityName" :num="num"/>
  </div>
</template>

<script>
// import searchMixin from '@/utils/smallMixin';
import ChildComponents from './childComponents.vue';

export default {
  data() {
    return {
      cityName: 0,
      num: 0,
    };
  },
  components: {
    ChildComponents,
  },
  // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
  beforeCreate() {
    console.log('beforeCreate-cityName: ', this.cityName);
  },
  // 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el property 目前尚不可用。
  created() {
    console.log('created-cityName: ', this.cityName);
  },
  // 在挂载开始之前被调用
  beforeMount() {
    console.log('beforeMount-cityName: ', this.cityName);
  },
  // 实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内
  mounted() {
    console.log('mounted-cityName: ', this.cityName);
  },
  // 数据更新时调用，发生在虚拟 DOM 打补丁之前
  beforeUpdate() {
    console.log('beforeUpdate-cityName: ', this.cityName);
  },
  // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。
  updated() {
    console.log('updated-cityName: ', this.cityName);
  },
  // 实例销毁之前调用。在这一步，实例仍然完全可用。
  beforeDestroy() {
    console.log('beforeDestroy-cityName: ', this.cityName);
  },
  // 实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。
  destroyed() {
    console.log('destroyed-cityName: ', this.cityName);
  },
  methods: {
    event() {
      this.cityName += 3;
      console.log(this.cityName);
    },
  },
};
</script>

<style>

</style>
