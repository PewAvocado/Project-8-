import { TodoTask } from "./infoTask.js";
import { addTask } from "./infoArray.js";

export function createForm(){
    //Using the div named in my template.html
    const content2 = document.querySelector('#content');

    //Creating the different elements needed in the form
    const form = document.createElement('form');

    const code = document.createElement('input');
    const title = document.createElement('input');
    const description = document.createElement('input');
    const priority = document.createElement('input');
    const color = document.createElement('input');
    const submit = document.createElement('button');
    
    //Adding the corresponding properties to my elements
    title.placeholder = 'TITLE';
    title.id = 'task-title';
    title.required = true;
    title.maxLength = 30;
    description.placeholder = 'DESCRIPTION';
    description.maxLength = 120;
    priority.type = 'checkbox';
    color.type = 'color';
    submit.textContent = 'CREATE';
    submit.type = 'submit';

    //Adding listener to the submit button
    form.addEventListener('submit', (event) =>{
        event.preventDefault();

        const taskTitle = title.value.trim();
        const taskDescription = description.value;
        const taskPriority = priority.checked;
        const taskColor = color.value;

        const newTask = new TodoTask(
            taskTitle,
            taskDescription,
            taskPriority,
            taskColor
        )
        addTask(newTask);
        console.log('Task created!');
        form.reset();
    })

    form.append(
        code,
        title,
        description, 
        priority, 'Urgent?',
        color, 'Color?',
        submit);
    content2.append(form);

   
}
