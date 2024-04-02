document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
  });
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
  
    taskList.innerHTML = '';
    tasks.forEach(function(task) {
      const li = document.createElement('li');
      li.textContent = task.text;
      if (task.completed) {
        li.classList.add('completed');
      }
      li.addEventListener('click', function() {
        toggleTaskCompletion(this);
      });
      taskList.appendChild(li);
    });
  }
  
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const newTask = { text: taskText, completed: false };
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      loadTasks();
      taskInput.value = '';
    }
  }
  
  function toggleTaskCompletion(taskElement) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskIndex = Array.from(taskElement.parentNode.children).indexOf(taskElement);
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
  }
  