import { renderProjects } from '../utils';

const deleteTodo = () => {
  const dltBtnArr = document.querySelectorAll('.dltBtn');

  dltBtnArr.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      const allProjects = JSON.parse(localStorage.getItem('allProjects'));
      const btnIDs = (evt.target.id).split('').map((b) => parseInt(b, 10));
      const [projID, todoId] = btnIDs;

      const todos = allProjects[projID].list;
      const sortedTodos = todos.sort((a, b) => b.priority - a.priority);

      sortedTodos.splice(todoId, 1);
      allProjects[projID].list = sortedTodos;
      localStorage.setItem('allProjects', JSON.stringify(allProjects));

      renderProjects();
      location.reload();
    });
  });
};

export default deleteTodo;
