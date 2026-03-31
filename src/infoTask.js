//This is the class created to store all the data each time the user fills the form
export class TodoTask {
  constructor(title, description, priority, project) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.project = project;
    this.id = crypto.randomUUID();
    this.isDone = false;
  }
}
