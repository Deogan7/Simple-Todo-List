document.getElementById('new-task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('new-task-input');
    const taskList = document.getElementById('task-list');
    const newTask = taskInput.value.trim();

    if (newTask) {
        const listItem = document.createElement('li');
        listItem.textContent = newTask;

        // Allows me to create the complete button when user is done the task they hope to achieve
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'complete-btn';

        // This is where we create the checkbox, so if the user needs to check and uncheck the box after co pletion, it is possible
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.style.display = 'none'; 

       
        completeButton.addEventListener('click', function() {
        // We can display the checkbox here 
            checkbox.style.display = 'block'; 
            completeButton.style.display = 'none'; 
        });

        listItem.appendChild(completeButton);
        listItem.appendChild(checkbox);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
});
