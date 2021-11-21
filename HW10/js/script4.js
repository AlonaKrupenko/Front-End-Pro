//Task 4

const num1 = +prompt("Введите первое число");
const num2 = +prompt("Введите второе число");
const num3 = +prompt("Введите третье число");

  if (num1 > num2 && num1 > num3) {
    alert("Первое число наибольшее");
  } else if (num2 > num1 && num2 > num3) {
    alert("Второе число наибольшее");
  } else {
    alert("Третье число наибольшее");
  }

