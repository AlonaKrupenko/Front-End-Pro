function mainFunction(callback) {
  const num = prompt("Введите число");
  const pow = prompt("Введите стапень");

  callback(num, pow);
}

function exponentiation(num1, num2) {
  const result = num1 ** num2;
  alert(result);
}
function mltiply(num1, num2) {
  const result = num1 * num2;
  alert(result);
}
function division(num1, num2) {
  const result = num1 / num2;
  alert(result);
}
function modulo(num1, num2) {
  const result = num1 % num2;
  alert(result);
}

mainFunction(exponentiation);
