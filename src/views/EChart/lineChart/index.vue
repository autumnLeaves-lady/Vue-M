<template>
  <div>
    <div
      id="lineChart"
      class="line-chart"
    />
  </div>
</template>

<script>
import option from './data';

export default {
  data() {
    return {
      option,
      myChart: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 1.获取要渲染图表的dom
      const ele = document.getElementById('lineChart');
      // 2.初始化echarts实例
      this.myChart = this.$echarts.init(ele);
      // 4.使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(this.option);
    },
  },
};
</script>

<style lang="scss">
.line-chart {
  width: 100%;
  height: 400px;
  background-color: rgb(223, 231, 208);
}
</style>
