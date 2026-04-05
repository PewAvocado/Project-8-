import { TodoTask } from './infoTask.js';
import { addTask, tasks, updateTask } from './infoArray.js';
import { showTask } from './interfaceTask.js';
import { modal } from './domElements.js';
import { showError } from './navigation.js';

export function createForm() {
  //Using the div named in my template.html
  const categories = ['Studies', 'Gaming', 'Entertainment', 'Others'];
  const content2 = document.querySelector('#content');
  const titleError = document.createElement('span');

  //Creating the different elements needed in the form
  const form = document.createElement('form');
  const title = document.createElement('input');
  const description = document.createElement('textarea');
  const priority = document.createElement('input');
  const submit = document.createElement('button');
  const cancelBtn = document.createElement('button');
  const taskGroup = document.createElement('select');

  const titleBag = document.createElement('div');
  const descriptionBag = document.createElement('div');
  const priorityBag = document.createElement('div');
  const taskGroupBag = document.createElement('div');

  titleBag.append('Task title', title, titleError);
  descriptionBag.append('Task description', description);
  priorityBag.append('Urgent?', priority);
  taskGroupBag.append('Which category?', taskGroup);

  //Adding the corresponding properties to my elements
  form.id = 'task-form';
  title.placeholder = 'TITLE';
  title.id = 'task-title';
  title.required = true;
  title.minLength = 5;
  title.maxLength = 30;
  description.placeholder = 'DESCRIPTION';
  description.maxLength = 300;
  description.id = 'task-description';
  priority.type = 'checkbox';
  taskGroup.id = 'projectCategory';
  submit.textContent = 'CREATE TASK';
  submit.type = 'submit';
  submit.id = 'task-submit';
  cancelBtn.textContent = 'CANCEL';
  cancelBtn.type = 'button';

  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category.toLowerCase();
    option.textContent = category;
    taskGroup.append(option);
  });

  //Adding listener to the submit button
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskTitle = title.value.trim();
    const taskDescription = description.value;
    const taskPriority = priority.checked;
    const taskProject = taskGroup.value;

    const editingId = form.dataset.editingId;

    if (editingId) {
      const newData = {
        title: taskTitle,
        description: taskDescription,
        priority: taskPriority,
        project: taskProject,
      };

      updateTask(editingId, newData, tasks);
      delete form.dataset.editingId;

      const modal = document.querySelector('.modal-overlay');
      modal.classList.remove('active');

      content2.append(form);
      submit.textContent = 'CREATE TASK';

      console.log('Updated!');
    } else {
      const newTask = new TodoTask(
        taskTitle,
        taskDescription,
        taskPriority,
        taskProject
      );
      addTask(newTask);
    }
    showTask();
    console.log('Task created!');
    form.reset();
  });

  cancelBtn.addEventListener('click', () => {
    modal.classList.remove('active');

    form.reset();
    delete form.dataset.editingId;
    content2.append(form);
    submit.textContent = 'CREATE TASK';
  });

  title.addEventListener('input', () => showError(title, titleError));

  //Form append
  form.append(
    titleBag,
    descriptionBag,
    priorityBag,
    taskGroupBag,
    submit,
    cancelBtn
  );
  content2.append(form);
}
