import { renderProjects } from '../utils';

export const deleteTodo = () => {
  const dltBtnArr = document.querySelectorAll('.dltBtn');

  dltBtnArr.forEach((btn, index) => {
    btn.addEventListener('click', (evt) => {
      const allProjects = JSON.parse(localStorage.getItem('allProjects'));
      const projID = parseInt(evt.target.id);
      
      const todos = allProjects[projID]['list'];
      const sortedTodos = todos.sort((a, b) => {
        return b.priority - a.priority
     })
      
      sortedTodos.splice(index, 1);
      allProjects[projID]['list'] = sortedTodos;
      localStorage.setItem('allProjects', JSON.stringify(allProjects));

      renderProjects();
      location.reload();
    });
  })
}  

