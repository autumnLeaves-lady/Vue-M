<template>
  <div class="echat">
    <div
      id="blood"
      class="e"
    >www</div>
  </div>

</template>

<script>
export default {
  name: 'echarts',
  data() {
    return {
      bloodOption: {
        title: {
          text: '血压监测波形图',
          left: 'center',
        },
        grid: {
          left: 40,
          top: 30,
          right: 10,
          bottom: 20,
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [{
          data: [70, 80, 78, 56, 73, 83, 69],
          type: 'line',
          smooth: true,
        }],
      },
    };
  },
  mounted() {
    const ele1 = document.getElementById('blood');
    this.myEchart1 = this.$echarts.init(ele1);
    this.myEchart1.setOption(this.bloodOption);
  },

};
</script>

<style lang="scss">
.echat {
  // width: 400px;
  // height: 400px;
  .e {
    width: 600px;
    height: 400px;
  }
}
</style>
