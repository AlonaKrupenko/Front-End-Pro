let num = +prompt("Введите число");
let isSimple = false;

if (num === 1 || num === 2 || num === 3) {
  isSimple = true;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isSimple = false;
      break;
    } else {
      isSimple = true;
    }
  }
}

console.log(isSimple);
