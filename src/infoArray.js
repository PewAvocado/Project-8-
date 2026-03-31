//This module is to store all the different tasks that the user has created
//We use an array to have a full list of the tasks

//These variables are needed to store the page after a refresh
const savedTasks = localStorage.getItem('myTasks');
export const tasks = savedTasks ? JSON.parse(savedTasks) : [];

function saveLocalStorage() {
  localStorage.setItem('myTasks', JSON.stringify(tasks));
}

export function addTask(newTask) {
  tasks.push(newTask);
  console.log('Current inventory of tasks: ', tasks);
  saveLocalStorage();
}

export function getAllTasks() {
  return tasks;
}

export function deleteTask(taskToDelete) {
  const index = tasks.indexOf(taskToDelete);
  tasks.splice(index, 1);
  console.log('Task deleted. In inventory : ', tasks);
  saveLocalStorage();
}

export function togglePriority(task) {
  task.priority = !task.priority;
  saveLocalStorage();
}

export function rememberTask(task) {
  const titleInput = document.querySelector('#task-title');
  const descriptionInput = document.querySelector('#task-description');
  const form = document.querySelector('#task-form');
  const submitBtn = document.querySelector('#task-submit');

  titleInput.value = task.title;
  descriptionInput.value = task.description;

  form.dataset.editingId = task.id;

  submitBtn.textContent = 'SAVE CHANGES';
}

export function updateTask(id, newData, myTasks) {
  const index = myTasks.findIndex((task) => task.id === id);

  if (index !== -1) {
    myTasks[index] = { ...myTasks[index], ...newData };
    saveLocalStorage();
    return true;
  }

  return false;
}
