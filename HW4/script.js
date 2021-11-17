let mathFunction = prompt(
  "Введите какое действие использовать",
  "add, sub, mult, div"
);
let firstNum = +prompt("введите первое число");
let secondNum = +prompt("введите второе число");

if (mathFunction === "add") {
  console.log(` Н-р "${firstNum} + ${secondNum} = ${firstNum + secondNum}"`);
} else if (mathFunction === "sub") {
  console.log(` Н-р "${firstNum} - ${secondNum} = ${firstNum - secondNum}"`);
} else if (mathFunction === "mult") {
  console.log(` Н-р "${firstNum} * ${secondNum} = ${firstNum * secondNum}"`);
} else if (mathFunction === "div") {
  console.log(` Н-р "${firstNum} / ${secondNum} = ${firstNum / secondNum}"`);
} else {
  console.log(
    "Вы ввели некорректне действе. Можно выбрать только add, sub, mult, div"
  );
}
