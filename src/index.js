import '../css/styles.css'
import { renderProjects } from './utils'
import createProject from './components/newProject'
import { createTodo } from './components/newTodo'
import { deleteTodo } from './components/deleteTodo'


renderProjects();
createProject();
createTodo();
deleteTodo();