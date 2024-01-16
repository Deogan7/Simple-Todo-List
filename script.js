document.getElementById('new-task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('new-task-input');
    const taskList = document.getElementById('task-list');
    const newTask = taskInput.value.trim();

    if (newTask) {
        const listItem = document.createElement('li');
        listItem.textContent = newTask;

        // Create Complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'complete-btn';

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.style.display = 'none'; // Initially hide the checkbox

        // Event listener for Complete button
        completeButton.addEventListener('click', function() {
            checkbox.style.display = 'block'; // Show checkbox
            completeButton.style.display = 'none'; // Hide Complete button
        });

        listItem.appendChild(completeButton);
        listItem.appendChild(checkbox);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
});
