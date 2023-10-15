const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-input");
const toDoList = document.getElementById("todo-list");
const sayNothing = document.querySelector("#todo-list-box h3");

const TODOS_KEY = "todos"

let toDos = [];

function checkNothing(arr) {
    if (arr.length == 0) {
        sayNothing.classList.remove("hidden");
    } else {
        sayNothing.classList.add("hidden");
    }
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    isChecked();
    checkNothing(toDos);
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const wrap = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    if(newTodo.checked == true) {
        checkbox.setAttribute("checked", true);
    }
    checkbox.classList.add("star");
    const label = document.createElement("label");
    label.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo)
    li.appendChild(wrap);
    wrap.appendChild(checkbox)
    wrap.appendChild(label);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        checked: false,
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function handleCheck(event) {
    for(i in toDos) {
        if(toDos[i].id == event.target.parentElement.parentElement.id) {
            toDos[i].checked = event.target.checked;
            saveToDos();
            break;
        }
    }
}

function isChecked() {
    for(i in toDos){
        const id = String(toDos[i].id);
        const star = document.getElementById(id);
        star.addEventListener("change", handleCheck);
    }
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
    const parsedToDos = JSON.parse(savedToDos);
    checkNothing(parsedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    isChecked();
} else {
    checkNothing([]);
}
