// Default SortableJS
import Sortable from "sortablejs";

var el = document.getElementById("items");
var sortable = Sortable.create(el, {
  animation: 150,
  ghostClass: "sortable-ghost",
});

let numCodes = 0;

const form = document.querySelector(".newCodeForm");

form.addEventListener("submit", (e) => {
  submitNewCode(e);
  form.reset();
});

function submitNewCode(e) {
  e.preventDefault();
  const title = e.target.title.value;
  renderNewCode(title);
  renderNewNumber(++numCodes);
}

function renderNewCode(title) {
  const items = document.querySelector("#items");
  const newCode = document.createElement("li");
  newCode.classList.add("list-group-item");
  newCode.textContent = title;
  items.appendChild(newCode);
}

function renderNewNumber(number) {
  const numbers = document.querySelector("#numbers");
  const newNumber = document.createElement("li");
  newNumber.classList.add("list-group-item");
  newNumber.classList.add("center");
  newNumber.textContent = number;
  numbers.appendChild(newNumber);
}
