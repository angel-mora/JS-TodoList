import { format } from 'date-fns';
import Todo from '../Todo';
import { renderProjects } from '../utils';


export const createTodo = () => {
  const btnNewTodoArr = document.querySelectorAll('.btnNewTodo');

  btnNewTodoArr.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const allProjects = JSON.parse(localStorage.getItem('allProjects'));
      const todoTitle = document.querySelector(`#todoTitle${index}`);
      const description = document.querySelector(`#description${index}`);
      const dueDate = document.querySelector(`#dueDate${index}`); 
      const priority = document.querySelector(`#priority${index}`);
      
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
