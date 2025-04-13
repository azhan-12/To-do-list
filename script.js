const adding = () => {
    const inputbox = document.querySelector(".input")
    const value = inputbox.value.trim();

    if (value == "") {
        alert("Please enter any text ")
        return;
    }

    const lists = document.querySelector(".listContainer")

    const li = document.createElement("li")
    li.innerHTML = ` 
        <div class="outputtext" onclick="toggleTask(this)">${value}</div>
        <button class="editingbutn" onclick="editTask(this)">✎</button>
        <button class="editingbutn" onclick="removeTask(this)">🗑️</button>
    `;

    lists.appendChild(li)
    inputbox.value = "";
}

function toggleTask(task) {
    task.classList.toggle("completed");
}

const editTask = (editButton) => {
    const taskSpan = editButton.previousElementSibling;
    const newTaskText = prompt("Edit your task:", taskSpan.textContent);

    if (newTaskText !== null && newTaskText.trim() !== "") {
        taskSpan.textContent = newTaskText.trim();
    }
}

const removeTask = (taskButton) => {
    taskButton.parentElement.remove();
}