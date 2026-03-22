//This modulo is to store all the different tasks that the user has created
//We use an array to have a full list of the tasks


//These variables are needed to store the page after a refresh
const savedTasks = localStorage.getItem('myTasks');
const tasks = savedTasks ? JSON.parse(savedTasks) : [];

function saveLocalStorage (){
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}


export function addTask(newTask){
    tasks.push(newTask);
    console.log('Current inventory of tasks: ', tasks);
    saveLocalStorage();
}

export function getAllTasks(){
    return tasks;
}

export function deleteTask(index){
    tasks.splice(index, 1);
    console.log('Task deleted. In inventory : ', tasks);
    saveLocalStorage();
}


