import { format } from 'date-fns';
import Todo from '../Todo';
import { renderProjects } from '../utils';


const editUtils = (evt) => {
    const allProjects = JSON.parse(localStorage.getItem('allProjects'));
    const editBtnId = (evt.target.id).split('').map((b) => parseInt(b));
    const [projID, todoId] = editBtnId;

    const todoTitle = document.querySelector(`#editTitle${projID}${todoId}`);
    const description = document.querySelector(`#editDesc${projID}${todoId}`);
    const dueDate = document.querySelector(`#editDate${projID}${todoId}`); 
    const priority = document.querySelector(`#editPriority${projID}${todoId}`);

    return [todoTitle, description, dueDate, priority, allProjects, projID, todoId];
}


const editTodo = () => {
  const updateBtns = document.querySelectorAll('.btnEditTodo');
  const editBtnArr = document.querySelectorAll('.editBtn');

  editBtnArr.forEach((edbtn, index) => {
    edbtn.addEventListener('click', (evt) => {
      const [todoTitle, description, dueDate, priority, allProjects, projID, todoId] = editUtils(evt);
     
      if (allProjects) {
        const sortedTodos = allProjects[projID]['list'].sort((a, b) => {
          return b.priority - a.priority;
        });

        let todo = sortedTodos[todoId];
        todoTitle.value = todo.title;
        description.value = todo.description;
        dueDate.value = todo.dueDate.split('/').join('-');
        priority.value = todo.priority;
      }
    });
  });

  updateBtns.forEach((patchBtn) => {
    patchBtn.addEventListener('click', (evt) => {
      const [todoTitle, description, dueDate, priority, allProjects, projID, todoId] = editUtils(evt);

      let date = dueDate.value.split('-');
      date = date.map((item)=> parseInt(item));
      const formatedDate = format(new Date(date[0], date[1], date[2]), 'yyyy/MM/dd');
      const updatedTodo =  new Todo(todoTitle.value, description.value, formatedDate, parseInt(priority.value));

      allProjects[projID]['list'][todoId] = updatedTodo; 

      localStorage.setItem('allProjects', JSON.stringify(allProjects));

      renderProjects();

      window.location = '/build/index.html';
    })
  });
}  

export {
  editTodo
}