import { showTask } from './interfaceTask.js';

export function clearContent() {
  const container = document.querySelector('#task-content');
  container.innerHTML = '';
}

export function filterTask(category) {
  clearContent();
  showTask(category);
}

export function createCategoryButton() {
  const nav = document.querySelector('#categories');
  const categories = ['all', 'studies', 'gaming', 'entertainment', 'others'];

  categories.forEach((category) => {
    const button = document.createElement('button');
    button.textContent = category.toUpperCase();
    button.classList.add('category-btn');

    button.addEventListener('click', () => {
      filterTask(category);
    });

    nav.append(button);
  });
}
