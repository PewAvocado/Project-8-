export class TodoTask{
    constructor(title, description, priority, color){
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.color = color;
        this.id = crypto.randomUUID();
        this.isDone = false;
    }
}
