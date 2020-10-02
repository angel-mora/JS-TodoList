import { allProjects } from './utils'
import Todo from './Todo'

class Project {
  constructor(name) {
    this.name = name;
    this.list = [];

    allProjects.push(this)
  }

  addTodo(title, description, dueDate, priority) {
    let newTodo = new Todo(title, description, dueDate, priority);
    this.list.push(newTodo)
  }  
}

export default Project;

