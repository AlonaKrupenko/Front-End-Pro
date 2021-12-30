const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let inputs = event.target.querySelectorAll("input, select, textarea");
  let formData = {};

  for (let item of inputs) {
    formData[item.name] = item.value;
  }

  localStorage.setItem("formData", JSON.stringify(formData));
});
