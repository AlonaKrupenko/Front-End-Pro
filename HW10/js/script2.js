//Task 2
const num = prompt("Введите число");

if (num === null || num.trim() === "" || isNaN(+num)) {
  alert("Вы ввели что-то не то");
} else {
  if (num % 2 === 0) {
    alert("Число " + num + " четное");
  } else {
    alert("Число " + num + " нечетное");
  }
}
