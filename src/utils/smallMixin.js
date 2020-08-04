export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    add() {
      this.num += this.count;
    },
    cut() {
      this.num -= this.count;
    },
  },
};
