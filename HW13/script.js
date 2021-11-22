let num = prompt("введите число");

if (num < 1) {
  alert("NaN");
} else if (+num === 1) {
  alert("1 - простое число и делится только на себя");
} else {
  for (let i = 2; i <= num; i++) {
    if (+num === i) {
      alert(`${num} простое - делители 1 и ${i}`);
    } else if (num % i === 0) {
      alert(`Наименьший делитель ${num} это ${i}`);
      break;
    }
  }
}
