const todoText = document.getElementById("todo-text");
const todoSub = document.getElementById("todo-submit");
const todoList = document.getElementById("todo-list");
const todoClear = document.getElementById("todo-clear");

todoSub.addEventListener("click", function onSub() {
  todoList.innerHTML += `<li>${todoText.value}</li>`;
  todoText.value = "";
});

todoClear.addEventListener("click", function () {
  todoList.innerHTML = "";
});
