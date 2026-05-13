//Seleccion de elementos
const taskList = document.querySelector(".task-list");
console.log(taskList);
const taskItems = document.querySelectorAll(".task-item");
console.log(taskItems);
const taskItemOne = taskItems[0];
const addtaskBtn = document.querySelector(".task-form__button");
console.log(addtaskBtn);
const input = document.querySelector(".task-form__input");
console.log(input);

//Marcar una tarea como completada
function isCompleted() {
   taskItemOne.classList.toggle("is-completed");
}
taskItemOne.addEventListener("click", isCompleted);
console.log(taskItemOne);

//Destacar una tarea
for (let i = 0; i < taskItems.length; i++) {
    const taskItemHighlight = taskItems[i];
    const destacarBtn = taskItems[i].querySelector(".task-item__highlight-button");
    function isHighlighted() {
        taskItemHighlight.classList.toggle("is-highlighted")
    }
    destacarBtn.addEventListener("click", isHighlighted);
    console.log(taskItemHighlight);
}

//Añadir una nueva tarea desde el input
function createTask() {
    const newTask = document.createElement("li");
    taskList.prepend(newTask);
    newTask.classList.add("task-list__item", "task-item");

    const newSpan = document.createElement("span");
    newSpan.classList.add("task-item__text");
    newTask.append(newSpan);
    let saveTxt = input.value;
    newSpan.textContent = saveTxt;

    const newDiv = document.createElement("div");
    newDiv.classList.add("task-item__actions");
    newTask.append(newDiv);
    const newdestacarBtn = document.createElement("button");
    newdestacarBtn.textContent = "Destacar";
    newdestacarBtn.classList.add("button", "button--ghost");
    const newdeleteBtn = document.createElement("button");
    newdeleteBtn.textContent = "Eliminar";
    newdeleteBtn.classList.add("button", "button--ghost");
    newDiv.append(newdestacarBtn);
    newDiv.append(newdeleteBtn);   
    
    input.value = '';
}

function hasWrite() {
    if (input.value.trim() !== '') {
        createTask();
    }
}

addtaskBtn.addEventListener("click", hasWrite);

//Eliminar una tarea
for (let i = 0; i < taskItems.length; i++) {
    const taskItemDelete = taskItems[i];
    const deleteBtn = taskItemDelete.querySelector(".task-item__delete-button")
    function isDeleted() {
        taskItemDelete.remove();
    }
    deleteBtn.addEventListener("click", isDeleted);
}