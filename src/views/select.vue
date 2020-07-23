<template>
  <div class="box">

    <el-progress
      :percentage="percentage"
      :color="customColorMethod"
    ></el-progress>

    <div>
      <el-button-group>
        <el-button
          icon="el-icon-minus"
          @click="decrease"
        ></el-button>
        <el-button
          icon="el-icon-plus"
          @click="increase"
        ></el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'select',
  data() {
    return {
      percentage: 20,
      customColor: '#409eff',
      customColors: [
        { color: 'green', percentage: 30 },
        { color: 'blue', percentage: 70 },
        { color: 'red', percentage: 100 },
      ],
    };
  },
  methods: {
    customColorMethod(percentage) {
      if (percentage < 30) {
        return 'green';
      } if (percentage < 70) {
        return 'blue';
      }
      return 'red';
    },
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
  },

};
</script>

<style lang="scss">
.box {
  // background-color: rgb(207, 216, 160);
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // width: 550px;
  height: 300px;
}
</style>
