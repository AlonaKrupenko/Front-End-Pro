//Task 3
const num = prompt("Введите целое число");

if (num === null || num.trim() === "" || isNaN(+num)) {
  alert("Вы ввели что-то не то");
} else {
  if (num.startsWith("-")) {
    let subNum = num.slice(1, num.length);
    if (subNum.length === 1) {
      alert("Число " + num + " однозначное отрицательное");
    } else if (subNum.length === 2) {
      alert("Число " + num + " двухзначное отрицательное");
    } else if (subNum.length === 3) {
      alert("Число " + num + " трехзначное отрицательное");
    } else if (subNum.length > 3) {
      alert("Число " + num + " многозначное отрицательное");
    }
  } else {
    if (num.length === 1) {
      alert("Число " + num + " однозначное положительное");
    } else if (num.length === 2) {
      alert("Число " + num + " двухзначное положительное");
    } else if (num.length === 3) {
      alert("Число " + num + " трехзначное положительное");
    } else if (num.length > 3) {
      alert("Число " + num + " многозначное положительное");
    }
  }
}
