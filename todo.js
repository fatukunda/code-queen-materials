let todos = [];

//
const fetchAllTodos = async () => {
  const response = await fetch("http://localhost:3000/todos");
  const todos = await response.json();
  todos.forEach((todo) => {
    createTodoElement(todo);
  });
};

fetchAllTodos();

const todosContainer = document.getElementById("todos-container");

const createTodoElement = (todo) => {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  const todoTextElement = document.createElement("p");
  todoTextElement.innerHTML = todo.item;
  if (todo.completed === true) {
    todoTextElement.style.textDecoration = "line-through";
    todoTextElement.style.color = "blue";
  }

  todoItem.appendChild(todoTextElement);

  const todoItemButtons = document.createElement("div");
  todoItemButtons.classList.add("todo-item-buttons");

  const completedBtn = document.createElement("button");
  completedBtn.classList.add("completed-btn");
  completedBtn.innerHTML = "✓";
  completedBtn.style.cursor = "pointer";

  completedBtn.addEventListener("click", async () => {
    const response = await fetch(`http://localhost:3000/todos/${todo._id}`, {
      method: "PATCH",
    });
    const data = await response.json();
    if (data.data.completed) {
      todoTextElement.style.textDecoration = "line-through";
      todoTextElement.style.color = "blue";
    } else {
      todoTextElement.style.textDecoration = "none";
      todoTextElement.style.color = "#232323";
    }
  });

  todoItemButtons.appendChild(completedBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = "x";
  deleteBtn.style.cursor = "pointer";

  deleteBtn.addEventListener("click", async () => {
    const response = await fetch(`http://localhost:3000/todos/${todo._id}`, {
      method: "DELETE",
    });
    await response.json();
    todoItem.remove();
  });

  todoItemButtons.appendChild(deleteBtn);

  todoItem.append(todoItemButtons);

  todosContainer.appendChild(todoItem);
};

const newTodoInput = document.getElementById("new-todo-input");

const saveButton = document.getElementById("save-btn");

saveButton.addEventListener("click", async () => {
  let newTodoInputValue = newTodoInput.value;
  if (newTodoInputValue === "") {
    alert("A todo is required.");
  } else {
    const todoPayload = {
      item: newTodoInputValue,
    };
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify(todoPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const todo = await response.json();
    createTodoElement(todo);
    newTodoInput.value = "";
  }
});
