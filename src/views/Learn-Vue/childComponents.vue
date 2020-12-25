<template>
  <div>子组件{{num}}</div>
</template>

<script>
export default {
  props: ['cityName', 'num'],
  beforeUpdate() {
    console.log('beforeUpdate-子: ', this.cityName);
  },
  updated() {
    console.log('updated-子: ', this.cityName);
  },
};
</script>

<style>

</style>
