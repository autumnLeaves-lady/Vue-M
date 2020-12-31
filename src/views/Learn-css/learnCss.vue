<template>
  <div class="box">
    <div class="item item1">一</div>
    <div class="item item2">贰二</div>
    <div class="item item3">项目咕咕咕咕咕咕过过过过过过过过过过过过过过过过过过过过过过过过过过过过过过过过过三</div>
    <!-- <div class="item item4">项目四</div> -->
    <!-- <div class="item item5">项目该公司的故事告诉哥哥是个刚刚试根深蒂固分公司的故事帝国时代五</div> -->
    <!-- <div class="item item6">项目六</div> -->
    <!-- <div class="item item7">项目七</div> -->
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.box {
  border: 1px solid #000;
  width: 200px;
  height: 200px;
  margin: 100px auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  display: flex;

  flex-direction:column;

  // flex-wrap: wrap;

  // justify-content: space-between;

  // align-items: baseline;

  // align-content: flex-start;
  .item {
    // height: 60px;
    // width: 60px;
  }
  .item1 {
    background-color: rgb(241, 240, 183);
  }
  .item2 {
    background-color: rgb(230, 227, 102);
  }
  .item3 {
    background-color: rgb(248, 245, 54);
    // height: 60px;
  }
  .item4 {
    background-color: rgb(231, 201, 103);
  }
  .item5 {
    background-color: rgb(185, 182, 7);
    // color: #fff;
  }
  .item6 {
    background-color: rgb(134, 132, 5);
    // color: #fff;
  }
  .item7 {
    background-color: rgb(83, 82, 3);
    color: #fff;
  }
}
</style>
