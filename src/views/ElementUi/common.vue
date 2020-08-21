<template>
  <div class="common">
    <el-tree
      :data="data"
      :props="defaultProps"
      show-checkbox
      :render-after-expand="false"
      @check-change="handleCheckChange"
    ></el-tree>

  </div>

</template>

<script>
export default {
  data() {
    return {
      checkArr: [],
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1',
                },
              ],
            },
          ],
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1',
                },
              ],
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1',
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    };
  },
  methods: {
    /**
    * @description 节点选中状态发生变化时的回调
    * @param data 传递给 data 属性的数组中该节点所对应的对象
    * @param checked 节点本身是否被选中 true-选中 false-取消
    * @param indeterminate 节点的子树中是否有被选中的节点
    */
    handleCheckChange(data, checked) {
      if (checked) {
        this.checkArr.push(data.label);
      } else {
        const checkIndex = this.checkArr.indexOf(data.label);
        if (checkIndex > -1) {
          this.checkArr.splice(checkIndex, 1);
        }
      }
      console.log('this.checked: ', this.checkArr);
    },
  },

};
</script>

<style lang="scss">
.common {
  // background-color: rgb(230, 233, 241);
}
.btn {
  margin: 20px;
}
</style>
