

var todoList = JSON.parse(localStorage.getItem("todoList")) || []; // Load tasks from localStorage or initialize as empty
var comdoList = [];
var remList = [];
var addButton = document.getElementById("add-button");
var todoInput = document.getElementById("todo-input");
var deleteAllButton = document.getElementById("delete-all");
var allTodos = document.getElementById("all-todos");
var deleteSButton = document.getElementById("delete-selected");

// Initialize the app with data from localStorage
update();
addinmain(todoList);

// Event listeners for add and delete
addButton.addEventListener("click", add);
deleteAllButton.addEventListener("click", deleteAll);
deleteSButton.addEventListener("click", deleteS);

// Event listeners for filters
document.addEventListener("click", (e) => {
    if (e.target.className.split(" ")[0] == "complete" || e.target.className.split(" ")[0] == "ci") {
        completeTodo(e);
    }
    if (e.target.className.split(" ")[0] == "delete" || e.target.className.split(" ")[0] == "di") {
        deleteTodo(e);
    }
    if (e.target.id == "all") {
        viewAll();
    }
    if (e.target.id == "rem") {
        viewRemaining();
    }
    if (e.target.id == "com") {
        viewCompleted();
    }
});

// Event listener for the Enter key
todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        add();
    }
});

// Updates all the lists and stores them in localStorage
function update() {
    comdoList = todoList.filter((ele) => ele.complete);
    remList = todoList.filter((ele) => !ele.complete);

    document.getElementById("r-count").innerText = todoList.length.toString();
    document.getElementById("c-count").innerText = comdoList.length.toString();

    localStorage.setItem("todoList", JSON.stringify(todoList)); // Save updated list to localStorage
}

// Adds a task to the main list
function add() {
    var value = todoInput.value;
    if (value === "") {
        alert("😮 Task cannot be empty");
        return;
    }
    todoList.push({
        task: value,
        id: Date.now().toString(),
        complete: false,
    });

    todoInput.value = "";
    update();
    addinmain(todoList);
}

// Renders the main list and displays it in the UI
function addinmain(todoList) {
    allTodos.innerHTML = "";
    todoList.forEach((element) => {
        var x = `<li id=${element.id} class="todo-item">
            <p id="task">${element.complete ? `<strike>${element.task}</strike>` : element.task}</p>
            <div class="todo-actions">
                <button class="complete btn btn-success">
                    <i class="ci bx bx-check bx-sm"></i>
                </button>
                <button class="delete btn btn-error">
                    <i class="di bx bx-trash bx-sm"></i>
                </button>
            </div>
        </li>`;
        allTodos.innerHTML += x;
    });
}

// Deletes an individual task and updates all lists
function deleteTodo(e) {
    var deleted = e.target.parentElement.parentElement.getAttribute("id");
    todoList = todoList.filter((ele) => ele.id != deleted);

    update();
    addinmain(todoList);
}

// Marks a task as completed or uncompleted and updates all lists
function completeTodo(e) {
    var completed = e.target.parentElement.parentElement.getAttribute("id");
    todoList.forEach((obj) => {
        if (obj.id == completed) {
            obj.complete = !obj.complete;
        }
    });

    update();
    addinmain(todoList);
}

// Deletes all tasks
function deleteAll() {
    todoList = [];

    update();
    addinmain(todoList);
}

// Deletes only completed tasks
function deleteS() {
    todoList = todoList.filter((ele) => !ele.complete);

    update();
    addinmain(todoList);
}

// Functions for filters
function viewCompleted() {
    addinmain(comdoList);
}

function viewRemaining() {
    addinmain(remList);
}

function viewAll() {
    addinmain(todoList);
}
