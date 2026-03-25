import { createForm } from "./form.js";
import { showTask } from "./interfaceTask.js";
import "./style.css";

const content = document.querySelector('#content');
const startButton =  document.createElement('button');

startButton.textContent = "Create new task";
content.appendChild(startButton);
showTask();

startButton.addEventListener('click', () => {
    content.innerHTML = '';
    createForm();
    showTask();
    
});



