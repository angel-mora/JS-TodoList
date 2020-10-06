import Project from '../Project'
import { renderProjects, allProjects } from '../utils'
import { displayProjects } from '../displayProject'


const createProject = () => {
  const projectTitle = document.querySelector('#projectTitle');
  const btnNewProject = document.querySelector('#btnNewProject');

  btnNewProject.addEventListener('click', () => {
    new Project(projectTitle.value);

    const stringifiedProjects = JSON.stringify(allProjects);
    localStorage.setItem('allProjects', stringifiedProjects);
    
    projectTitle.value = ''
  })
}

export default createProject;


