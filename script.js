// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Remove task on button click
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append button to list item, and list item to task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input
        taskInput.value = "";
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on "Enter" key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});