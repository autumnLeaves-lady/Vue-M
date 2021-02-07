<template>
  <div class="about">
    <el-input
      type="textarea"
      placeholder="请输入内容"
      v-model="textarea"
      maxlength="30"
      show-word-limit
    >
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: '',
    };
  },
  methods: {

  },

};
</script>

<style lang="scss">
.about {
  background-color: wheat;
  width: 300px;
  padding: 20px;
  .line {
    padding: 10px 0;
  }
}
</style>
