import { createForm } from "./form.js";
import { showTask } from "./interfaceTask.js";
import "./style.css";

const content = document.querySelector('#content');
const startButton =  document.createElement('button');

startButton.textContent = "Create new list";
content.appendChild(startButton);
showTask();

startButton.addEventListener('click', () => {
    content.innerHTML = '';
    createForm();
    showTask();
    
});



