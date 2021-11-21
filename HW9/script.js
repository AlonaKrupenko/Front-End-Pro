const birthYear = prompt("Ваш год рождения?");
const city = prompt("Ваш родной город?");
const sport = prompt("Ваш любимый вид спорта?");

const age = new Date().getFullYear() - +birthYear;

switch (city) {
  case "Киев":
    cityUpdated = "Ты живешь в столице Украины";
    break;
  case "Минск":
    cityUpdated = "Ты живешь в столице Беларуси";
    break;
  case "Москва":
    cityUpdated = "Ты живешь в столице Росии";
    break;
  default:
    cityUpdated = `Ты живешь в городе ${city}`;
}

switch (sport) {
  case "плавание":
    sportUpdated = "Круто! Хочешь стать как Майкл Фелпс?";
    break;
  case "спортивная гимнастика":
    sportUpdated = "Круто! Хочешь стать как Лариса Латынина?";
    break;
  case "лёгкая атлетика":
    sportUpdated = "Круто! Хочешь стать как Пааво Нурми?";
    break;
  default:
    sportUpdated = `${sport} - это круто!`;
}

if (birthYear === null || birthYear.trim() === "" || isNaN(+birthYear)) {
  alert("Жаль, что Вы не захотели ввести свой год рождения");
} else if (city === null || birthYear.trim() === "") {
  alert("Жаль, что Вы не захотели ввести свой родной город");
} else if (sport === null || birthYear.trim() === "") {
  alert("Жаль, что Вы не захотели ввести свой любимый вид спорта");
} else {
  alert(`Вам ${age} лет. ${cityUpdated}. ${sportUpdated} `);
}
