function counter(accum = 0) {
  const statistics = {
    increase: 0,
    decrease: 0,
    get: 0,
    getStatistics: 0,
  };
  return {
    increase(num) {
      statistics.increase++;
      return (accum += num);
    },
    decrease(num) {
      statistics.decrease++;
      return (accum -= num);
    },
    get() {
      statistics.get++;
      return accum;
    },
    getStatistics() {
      statistics.getStatistics++;
      return statistics;
    },
    clearAccum() {
      return (accum = 0);
    },
    clearStatistics() {
      for (let key in statistics) {
        statistics[key] = 0;
      }
      return statistics;
    },
    clearAll() {
      this.clearAccum(), this.clearStatistics();
      return {
        accum,
        statistics,
      };
    },
  };
}
