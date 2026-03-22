import { getAllTasks, deleteTask } from "./infoArray.js";


export function showTask(){
    const container = document.querySelector('#task-content');
    container.innerHTML = '';

    const allTasks = getAllTasks();

    allTasks.forEach(task => {
        const card = document.createElement('div');

        const title = document.createElement('h3');
        const description = document.createElement('p');
        const priority = document.createElement('span');
        const deleteBtn = document.createElement('button');

        title.textContent = task.title;
        description.textContent = task.description;
        deleteBtn.textContent = 'DELETE';
        card.classList.add('task-card');
        priority.classList.add('priority-task');
        deleteBtn.classList.add('delete-btn');
        
        if (task.priority){
            priority.textContent = 'Urgent!';
            priority.classList.add('urgent');
        } else {
            priority.textContent = 'Normal';
            priority.classList.add('normal');
        }

        deleteBtn.addEventListener('click', () => {
            deleteTask(task);
            showTask();
        })

        card.append(
            title,
            description,
            priority,
            deleteBtn
        )

        container.append(card);
    })
}