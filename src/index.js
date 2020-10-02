import { allProjects } from './utils'

const stringifiedProjects = JSON.stringify(allProjects);
localStorage.setItem('allProjects', stringifiedProjects);