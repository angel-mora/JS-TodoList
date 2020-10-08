import Todo from './Todo';

class Project {
  constructor(name) {
    this.name = name;
    this.list = [];
  }

  addTodo(title, description, dueDate, priority) {
    const newTodo = new Todo(title, description, dueDate, priority);
    this.list.push(newTodo);
  }
}

export default Project;
