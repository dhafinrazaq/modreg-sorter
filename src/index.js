// Default SortableJS
import Sortable from "sortablejs";

var el = document.getElementById("items");
var sortable = Sortable.create(el, {
  animation: 150,
  ghostClass: "sortable-ghost",
});

// const codes = []

// function submitNewCode(e) {
//     e.preventDefault();
//     const title = e.target.title.value;
//     renderProjectList();
//   }
