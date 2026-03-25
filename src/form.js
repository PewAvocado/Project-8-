import { TodoTask } from "./infoTask.js";
import { addTask } from "./infoArray.js";
import { showTask } from "./interfaceTask.js";

export function createForm(){
    //Using the div named in my template.html
    const categories = ['studies', 'gaming', 'entertainment', 'others'];
    const content2 = document.querySelector('#content');
    

    //Creating the different elements needed in the form
    const form = document.createElement('form');
    const title = document.createElement('input');
    const description = document.createElement('input');
    const priority = document.createElement('input');
    const submit = document.createElement('button');
    const taskGroup = document.createElement('select');

    
    //Adding the corresponding properties to my elements
    title.placeholder = 'TITLE';
    title.id = 'task-title';
    title.required = true;
    title.maxLength = 30;
    description.placeholder = 'DESCRIPTION';
    description.maxLength = 120;
    priority.type = 'checkbox';
    taskGroup.id = 'projectCategory';
    submit.textContent = 'CREATE';
    submit.type = 'submit';

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.toLowerCase();
        option.textContent = category;
        taskGroup.append(option);
    })

    //Adding listener to the submit button
    form.addEventListener('submit', (event) =>{
        event.preventDefault();

        const taskTitle = title.value.trim();
        const taskDescription = description.value;
        const taskPriority = priority.checked;
        const taskProject = taskGroup.value;

        const newTask = new TodoTask(
            taskTitle,
            taskDescription,
            taskPriority,
            taskProject  
        )
        addTask(newTask);
        showTask();
        console.log('Task created!');
        form.reset();
    })

    //Form append
    form.append(
        title,
        description, 
        priority, 'Urgent?',
        taskGroup,
        submit);
    content2.append(form);

   
}
