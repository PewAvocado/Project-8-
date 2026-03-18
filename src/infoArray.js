const tasks = [];

export function addTask(newTask){
    tasks.push(newTask);
    console.log('Current inventory of tasks: ', tasks);
}

export function getAllTasks(){
    return tasks;
}