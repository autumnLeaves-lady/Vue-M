<template>
  <div>
    <div
      id="barChart"
      class="bar-chart"
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
      // count: 11
    };
  },
  mounted() {
    this.init();
    // this.interval();
  },
  methods: {
    init() {
      // 1.获取要渲染图表的dom
      const ele = document.getElementById('barChart');
      // 2.初始化echarts实例
      this.myChart = this.$echarts.init(ele);
      // 4.使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(this.option);
    },
    interval() {
      let count = 11;
      setInterval(() => {
        const axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');

        const data0 = this.option.series[0].data;
        const data1 = this.option.series[1].data;
        data0.shift();
        data0.push(Math.round(Math.random() * 1000));
        data1.shift();
        data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

        this.option.xAxis[0].data.shift();
        this.option.xAxis[0].data.push(axisData);
        this.option.xAxis[1].data.shift();
        this.option.xAxis[1].data.push(count += 1);

        this.myChart.setOption(this.option);
      }, 2100);
    },
  },
};
</script>

<style lang="scss">
.bar-chart {
  width: 100%;
  height: 400px;
  background-color: rgb(223, 231, 208);
}
</style>
