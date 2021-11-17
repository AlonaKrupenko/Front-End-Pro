const a = +prompt("Pls input A");
const b = +prompt("Pls input B");

function sumNumbers(num1, num2) {
  return num1 + num2;
}

function substractNumbers(num1, num2) {
  return num1 - num2;
}

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

function divideNumbers(num1, num2) {
  return num1 / num2;
}

console.log(`Результат суммирования: ${a} + ${b} = ${sumNumbers(a, b)}`);
console.log(`Результат вычитания: ${a} - ${b} = ${substractNumbers(a, b)}`);
console.log(`Результат умножения: ${a} * ${b} = ${multiplyNumbers(a, b)}`);
console.log(`Результат деления: ${a} / ${b} = ${divideNumbers(a, b)}`);
