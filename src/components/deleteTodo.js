import { renderProjects } from '../utils';

export const deleteTodo = () => {
  const dltBtnArr = document.querySelectorAll('.dltBtn');

  dltBtnArr.forEach((btn, index) => {
    btn.addEventListener('click', (evt) => {
      const allProjects = JSON.parse(localStorage.getItem('allProjects'));
      const btnIDs = evt.target.id.split('');
      
      const todos = allProjects[btnIDs[0]]['list'];
      const sortedTodos = todos.sort((a, b) => {
        return b.priority - a.priority
     })
      
      sortedTodos.splice(btnIDs[1], 1);
      allProjects[btnIDs[0]]['list'] = sortedTodos;
      localStorage.setItem('allProjects', JSON.stringify(allProjects));

      renderProjects();
      location.reload();
    });
  })
}  

