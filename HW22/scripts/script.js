function counter(count = 0) {
  return {
    increase: function () {
      return count++;
    },
    decrease: function () {
      return count--;
    },
    value: function () {
      return count;
    },
  };
}
