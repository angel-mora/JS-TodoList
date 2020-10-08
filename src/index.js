import '../css/styles.css'
import { renderProjects } from './utils'
import createProject from './components/newProject'
import { createTodo } from './components/newTodo'
import { deleteTodo } from './components/deleteTodo'
import { editTodo } from './components/editTodo'


renderProjects();
createProject();
createTodo();
editTodo();
deleteTodo();