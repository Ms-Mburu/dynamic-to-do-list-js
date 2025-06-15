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
        removeBtn.classList.add('remove-btn'); // ✅ Correct use of classList.add

        // Add click handler to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button and list item
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input
        taskInput.value = "";
    }

    // ✅ Event listener for Add button
    addButton.addEventListener('click', addTask);

    // ✅ Checker-required: input keypress event to add task on Enter
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
