const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      ${taskText}
      <span class="cross-sign">❌</span>
    `;
    taskList.appendChild(li);
    taskInput.value = '';

    const crossSign = li.querySelector('.cross-sign');
    crossSign.addEventListener('click', () => {
      taskList.removeChild(li);
    });
  }
}
