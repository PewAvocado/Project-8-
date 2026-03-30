    import { getAllTasks, deleteTask, rememberTask } from "./infoArray.js";
    import { togglePriority } from "./infoArray.js";
    import { getModal } from "./domElements.js";
    
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
                    const editBtn = document.createElement('button');
                    const interactiveBtns = document.createElement('div');

                    interactiveBtns.append(editBtn, deleteBtn);

                    title.textContent = task.title;
                    description.textContent = task.description;
                    changePriority.textContent = 'Normal/Urgent!';
                    deleteBtn.textContent = 'DELETE';
                    editBtn.textContent = 'EDIT';
                    card.classList.add('task-card');
                    priority.classList.add('priority-task');
                    deleteBtn.classList.add('delete-btn');
                    editBtn.classList.add('edit-btn');
                    interactiveBtns.classList.add('interactive-btn');
                    
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

                    editBtn.addEventListener('click', () => {
                        const form = document.querySelector('#task-form');
                        form.dataset.editingId = task.id;
                       
                        rememberTask(task);

                        const currentModal = getModal();
                        currentModal.append(form);
                        currentModal.classList.add('active');
                    })
    
                
                card.append(
                        title,
                        description,
                        priority,
                        changePriority,
                        interactiveBtns
                    );
                    projectSection.append(card);
                    
                        });
                    container.append(projectSection);
                    } 
                
            });
    };