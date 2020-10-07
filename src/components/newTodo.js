import { format } from 'date-fns';
import Todo from '../Todo';
import { renderProjects } from '../utils';

const allProjects = JSON.parse(localStorage.getItem('allProjects'));

export const createTodo = () => {
  const btnNewTodoArr = document.querySelectorAll('.btnNewTodo');

  btnNewTodoArr.forEach((btn, index) => {
    const todoTitle = document.querySelector(`#todoTitle${index}`);
    const description = document.querySelector(`#description${index}`);
    const dueDate = document.querySelector(`#dueDate${index}`); 
    const priority = document.querySelector(`#priority${index}`);

    btn.addEventListener('click', () => {
      let date = dueDate.value.split('-');
        date = date.map((item)=> parseInt(item));
      const formatedDate = format(new Date(date[0], date[1], date[2]), 'dd/MM/yyyy');

      const newTodo =  new Todo(todoTitle.value, description.value, formatedDate, priority.value);
      allProjects[index]['list'].push(newTodo);

      localStorage.setItem('allProjects', JSON.stringify(allProjects));

      renderProjects();
      location.reload();
    });
  })

}  



