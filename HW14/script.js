const num1 = prompt("Введите ЧИСЛО");
const num2 = prompt("Введите СТЕПЕНЬ в которую будете возводить число");

function isValidInput(num) {
    return num !== null && num.trim() !== "" && !isNaN(+num)
}

function putToPow(number, pow = "1") {
  if (!isValidInput(number) || !isValidInput(pow)) {
    return "Some error";
  }
  return (result = Math.pow(number, pow));
}

alert(putToPow(num1, num2));
