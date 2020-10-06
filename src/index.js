import '../css/styles.css'
import { renderProjects, allProjects } from './utils'
import { displayProjects } from './displayProject'
import createProject from './components/newProject'

const projects = JSON.parse(localStorage.getItem('allProjects'));
if (projects) {
  displayProjects(projects);
} else {
  displayProjects(allProjects);
}  

createProject();
