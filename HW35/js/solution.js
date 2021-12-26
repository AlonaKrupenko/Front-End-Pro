const button1 = document.createElement("input");
button1.setAttribute("type", "button");
button1.setAttribute("value", "Задание 1 - console");
button1.setAttribute("id", "console");
button1.addEventListener("click", getSolutionFirst);

const button2 = document.createElement("input");
button2.setAttribute("type", "button");
button2.setAttribute("value", "Задание 2 - list");
button2.setAttribute("id", "list");
button2.addEventListener("click", getSolutionSecond);

const button3 = document.createElement("input");
button3.setAttribute("type", "button");
button3.setAttribute("value", "Задание 3 - table");
button3.setAttribute("id", "table");
button3.addEventListener("click", getSolutionThird);

document.body.append(button1);
document.body.append(button2);
document.body.append(button3);

//1
function getSolutionFirst() {
  const bodyChildsItems = document.getElementById("ulId").childNodes;
  const bodyChildsItemsArr = Array.from(bodyChildsItems);

  //Вытянуть все аттрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого аттрибута в массив — вывсести этот массив в консоль
  const bodyChildUl = document.body.firstElementChild;
  const bodyChildUlArr = Array.from(bodyChildUl.attributes);

  const atributesValue = [];
  for (let atribute of bodyChildUlArr) {
    let value = bodyChildUl.getAttribute(atribute.name);
    atributesValue.push(value);
  }
  console.log(atributesValue);

  //Так-же записать в отдельный массив каждое имя аттрибута — вывести массив в консоль
  console.log(bodyChildUlArr);

  // С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
  const lastLi = bodyChildUl.lastElementChild;
  lastLi.innerHTML = "Привет меня зовут Алена";

  // Добавить первому элементу li аттрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
  const firstLi = bodyChildUl.firstElementChild;
  firstLi.setAttribute("data-my-name", "Alona");

  // Удалить у тега ul аттрибут ‘data-dog-tail‘
  bodyChildUl.removeAttribute("data-dog-tail");
}

//2
function getSolutionSecond() {
  function generateList(arr, listWrapper) {
    function createList(arr) {
      const newUl = document.createElement("ul");

      for (let elem of arr) {
        const newLi = document.createElement("li");

        if (Array.isArray(elem)) {
          newLi.append(createList(elem));
        } else {
          newLi.innerHTML = elem;
        }

        newUl.append(newLi);
      }

      return newUl;
    }

    listWrapper.append(createList(arr));
  }

  generateList([1, 2, [1.1, 1.2, 1.3], 3], document.body);
}

//3
function getSolutionThird() {
  function generateTable() {
    const newTable = document.createElement("table");

    for (let i = 0; i < 10; i++) {
      let createRow = document.createElement("tr");
      newTable.append(createRow);

      for (let j = 0; j < 10; j++) {
        let createCell = document.createElement("td");
        createRow.append(createCell);

        let cellText = document.createTextNode(i * 10 + j + 1);
        createCell.append(cellText);
      }
    }

    document.body.append(newTable);
  }
  generateTable();
}
