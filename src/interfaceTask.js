    import { getAllTasks, deleteTask } from "./infoArray.js";
    import { togglePriority } from "./infoArray.js";

    //This is
    export function showTask(selectedCategory = 'all'){
        const container = document.querySelector('#task-content');
        container.innerHTML = '';

        const allTasks = getAllTasks();
        const categories = ['Studies', 'Gaming', 'Entertainment', 'Others'];

        let categoriesDisplay;

        if (selectedCategory === 'all'){
            categoriesDisplay = categories;
        } else {
            categoriesDisplay = [selectedCategory];
        }

        categoriesDisplay.forEach(category => {
            const projectSection = document.createElement('div');
            projectSection.classList.add('project-section');

            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = category;
            categoryTitle.classList.add(`title-${category.toLowerCase()}`);

            const filteredTasks = allTasks.filter(task => task.project === category.toLowerCase());

            if (filteredTasks.length > 0){
                projectSection.append(categoryTitle);
                filteredTasks.forEach(task => {
                    const card = document.createElement('div');
                    card.classList.add('task-card');
                    card.classList.add(`task-${category.toLowerCase()}`);
                    const title = document.createElement('h3');
                    const description = document.createElement('p');
                    const priority = document.createElement('span');
                    const changePriority = document.createElement('button');
                    const deleteBtn = document.createElement('button');

                    title.textContent = task.title;
                    description.textContent = task.description;
                    changePriority.textContent = 'Normal/Urgent!';
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

                    changePriority.addEventListener('click', () =>{
                        togglePriority(task);
                        showTask();
                    })

                    deleteBtn.addEventListener('click', () => {
                        deleteTask(task);
                        showTask();
                    })
    
                
                card.append(
                        title,
                        description,
                        priority,
                        changePriority,
                        deleteBtn
                    );
                    projectSection.append(card);
                    
                        });
                    container.append(projectSection);
                    } 
                
            });
    };