import '../css/styles.css'
import { allProjects } from './utils'
import { displayProjects } from './displayProject'

const stringifiedProjects = JSON.stringify(allProjects);
localStorage.setItem('allProjects', stringifiedProjects);
const projects = JSON.parse(localStorage.getItem('allProjects'));


displayProjects(projects);
