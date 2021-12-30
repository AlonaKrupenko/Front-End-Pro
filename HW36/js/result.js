function createList() {
  if (localStorage.formData) {
    let parsedData = JSON.parse(localStorage.formData);
    console.log(parsedData);

    for (let key in parsedData) {
      const newUl = document.createElement("ul");
      let ulText = document.createTextNode(key);
      newUl.append(ulText);

      const newLi = document.createElement("li");
      let liText = document.createTextNode(parsedData[key]);
      newLi.append(liText);
      newUl.append(newLi);

      document.body.append(newUl);
    }
  } else {
    console.log("no data saved");
  }
}
