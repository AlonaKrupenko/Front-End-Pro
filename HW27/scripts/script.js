function sum(accum = 0) {
  function insideSum(num) {
    return (accum += num);
  }
  return insideSum;
}

let result = sum();
