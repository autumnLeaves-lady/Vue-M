<template>
  <div>
    <video width="320" height="240" controls>
    <!-- <source src="../assets/will.mp4" type="video/mp4"> -->
    <source src="../assets/kufang.mp4.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    您的浏览器不支持 video 标签。
</video>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >

</style>
