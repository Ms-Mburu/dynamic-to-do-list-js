document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // ✅ Load tasks from Local Storage when page loads
    loadTasks();

    // ✅ Add Task Button Click Event
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText, true);
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    });

    // ✅ Pressing Enter also adds task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                addTask(taskText, true);
                taskInput.value = "";
            } else {
                alert("Please enter a task.");
            }
        }
    });

    // ✅ Function to add a task to DOM and optionally to Local Storage
    function addTask(taskText, save = true) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');

        // ✅ Remove task from DOM and update Local Storage
        removeBtn.onclick = function () {
            taskList.removeChild(li);

            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = storedTasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // ✅ Save to Local Storage only if 'save' is true
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // ✅ Load tasks on page load
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }
});