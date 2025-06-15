document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create the <li> element and set its text content
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn'); // ✅ Use classList.add()

        // Assign onclick to remove the <li> element
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the <li>, then append <li> to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    addButton.addEventListener('click', addTask);

    taskInput
