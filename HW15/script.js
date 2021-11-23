const string = prompt("Введите строку");
const number = prompt(" Введите длину строки");
const symbol = prompt("Введите дополняющий символ");
const indicateSide = prompt(
  "Введите fasle если хотите добавить символ слева, по умолчанию добавлякм справа"
);

function padString(str, num, symb, side = 'true') {
  if (str === null || str.trim() === "") {
    return alert("Вы некорректно ввели строку");
  }
  if (num === null || num.trim() === "" || isNaN(+num)) {
    return alert("Вы некорректно ввели длину строки");
  }
  if (symb === null || num.trim() === "" || symb.length !== 1) {
    return alert("Вы некорректно ввели символ");
  }
  if (side !== "true" && side !== "false") {
    return alert("Вы некорректно ввели сторону добавления символа");
  }

  if (str.length >= +num) {
     alert(str.slice(0, +num));
     return;
  } else {
    const quantityOsSymb = num - str.length;
    for (i = 1; i <= quantityOsSymb; i++) {
      if (side === 'false') {
        str = symbol + str;
      } else {
        str += symbol;
      }
    }
    alert(str);
  }
}

padString(string, number, symbol, indicateSide);
