function validate(str) {
  return str !== null && str.trim() !== "" && !isNaN(+str);
}

const calculator = {
  read() {
    const a = prompt("введите A");
    const b = prompt("введите B");

    if (!validate(a) || !validate(b)) {
      return "Вы ввели не числа";
    }

    (this.firstArg = +a), (this.secondArg = +b);
  },
  sum() {
    return this.firstArg + this.secondArg;
  },
  mul() {
    return this.firstArg * this.secondArg;
  },
};
