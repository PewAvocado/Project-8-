import { createForm } from './form.js';
import { showTask } from './interfaceTask.js';
import { createCategoryButton } from './navigation.js';
import { startModal } from './domElements.js';
import './style.css';

startModal();
createForm();
createCategoryButton();
showTask();
