const bodyChildsItems = document.getElementById("ulId").childNodes;
const bodyChildsItemsArr = Array.from(bodyChildsItems);

for (let elem of bodyChildsItemsArr) {
  console.log(elem);
}

console.log(bodyChildsItemsArr.length);

const liElementsFilteredArr = bodyChildsItemsArr.filter(
  (elem) => elem.nodeName === "LI"
);

const liContent = [];
for (let liElem of liElementsFilteredArr) {
  let content = liElem.textContent;
  liContent.push(content);
}
console.log(liContent);
