import { createForm } from "./form.js";

const content = document.querySelector('#content');
const startButton =  document.createElement('button');

startButton.textContent = "Create new list";

content.appendChild(startButton);

startButton.addEventListener('click', () => {
    console.log('Testing button');
    createForm();
})



