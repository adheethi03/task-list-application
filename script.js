let tasks = [];

// Reference to DOM elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');
const removeTaskBtn = document.getElementById('removeTaskBtn');

// Function to update the task list UI
function updateTaskList() {
    taskList.innerHTML = ''; // Clear existing list
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${task}`;
        taskList.appendChild(li);
    });
}

// Add task function
addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task); // Add task to array
        updateTaskList(); // Update UI
        taskInput.value = ''; // Clear input field
    } else {
        alert('Please enter a task!');
    }
});

// Remove last task function
removeTaskBtn.addEventListener('click', () => {
    if (tasks.length > 0) {
        tasks.pop(); // Remove last task from array
        updateTaskList(); // Update UI
    } else {
        alert('No tasks to remove!');
    }
});