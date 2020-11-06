const todos = [
  {
    id: 1,
    item: "Wake Up",
  },
  {
    id: 2,
    item: "Eat breakfast",
  },
  {
    id: 3,
    item: "Go to work",
  },
  {
    id: 4,
    item: "Go Swimming",
  },
];

const todosContainer = document.getElementById("todos-container");

for (let todo of todos) {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  const todoTextElement = document.createElement("p");
  todoTextElement.innerHTML = todo.item;

  todoItem.appendChild(todoTextElement);

  const todoItemButtons = document.createElement("div");
  todoItemButtons.classList.add("todo-item-buttons");

  const completedBtn = document.createElement("button");
  completedBtn.classList.add("completed-btn");
  completedBtn.innerHTML = "✓";

  todoItemButtons.appendChild(completedBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = "x";

  todoItemButtons.appendChild(deleteBtn);

  todoItem.append(todoItemButtons);

  todosContainer.appendChild(todoItem);
}
