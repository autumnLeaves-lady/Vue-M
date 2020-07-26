<template>
  <div class="step">
    <el-steps
      :space="200"
      :active="active"
      finish-status="success"
    >
      <el-step title="已完成"></el-step>
      <el-step title="进行中"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>

    <el-button
      style="margin-top: 12px;"
      @click="next"
    >下一步</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    next() {
      this.active += 1;
      if (this.active > 2) this.active = 0;
    },
  },

};
</script>

<style lang="scss" scorpt>
.step {
  border: 1px solid #000;
  padding: 10px;
}
</style>
