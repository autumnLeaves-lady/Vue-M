<template>
  <div>
    <div
      id="pieChart"
      class="pie-chart"
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
      const ele = document.getElementById('pieChart');
      // 2.初始化echarts实例
      this.myChart = this.$echarts.init(ele);
      // 4.使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(this.option);
    },
  },
};
</script>

<style lang="scss">
.pie-chart {
  width: 100%;
  height: 400px;
  background-color: rgb(223, 231, 208);
}
</style>
