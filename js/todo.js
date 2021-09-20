const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todosArray = [];


function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todosArray));
}

function deleteTodo(event) {
    const deletedLi = event.target.parentElement;
    deletedLi.remove();
    todosArray = todosArray.filter((todo) => parseInt(deletedLi.id) !== todo.id);
    saveTodos();
}

function paintNewTodo(newTodoObj) {
    const madeLi = document.createElement("li");
    madeLi.id = newTodoObj.id;
    const madeSpan = document.createElement("span");
    madeSpan.innerText = newTodoObj.item;
    const madeButton = document.createElement("button");
    madeButton.innerText = "❌";
    madeButton.addEventListener("click", deleteTodo);
    madeLi.appendChild(madeSpan);
    madeLi.appendChild(madeButton);
    todoList.appendChild(madeLi);
}

function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        item: newTodo,
        id: Date.now(),
    };
    todosArray.push(newTodoObj);
    paintNewTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleToDoSubmit);


const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todosArray = parsedTodos;
    parsedTodos.forEach(paintNewTodo);
}