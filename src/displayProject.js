import '../css/styles.css'

const theTodos = (todosAccord, todo, todoIndex, projIndex) => {
  todosAccord.innerHTML += `
  <div class="card">
    <div class="card-header">
      <h2 class="mb-0">
        <div class="btn btn-link btn-block text-left todoHeader" type="button" data-toggle="collapse" data-target="#todo${todoIndex}">
          <div>${todo.title}</div>
          <div>${todo.dueDate}</div>
        </div>
      </h2>
    </div>

    <div id="todo${todoIndex}" class="collapse" data-parent="#todos${projIndex}">
      <div class="card-body">
        <p>Description: ${todo.description}</p>
        <p>Priority: ${todo.priority}</p>
        <button class="btn btn-warning">Edit</button>
        <button class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
  `
};

const loopTodos = (todos, projIndex) => {
  let todosAccord = document.querySelector(`#todos${projIndex}`);

  const sortedTodo = todos.sort((a, b) => {
     return b.priority - a.priority
  })

  sortedTodo.forEach((todo, todoIndex) => {
    theTodos(todosAccord, todo, todoIndex, projIndex);
  });
};

const projectCard = (accordion, project, projIndex) => {
  let todos = project.list;

  accordion.innerHTML += `
    <div class="card">
      <div class="card-header" id="headingOne">
        <h2 class="mb-0">
          <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${projIndex}">
            ${project.name} 
          </button>
        </h2>
      </div>

      <div id="collapse${projIndex}" class="collapse ${projIndex == 0 ? 'show' : ''}" data-parent="#accordionExample">
        <div class="card-body">

          <!--Todo Starts here -->
          <div class="accordion ml-auto mr-auto" id="todos${projIndex}" style="width: 90%;">
            
          </div>
            
        </div>
        <div class="text-center mb-3">
          <button class="btn btn-primary">Add Todo</button>
        </div>
      </div>
    </div>
    `

  loopTodos(todos, projIndex);
};


const displayProjects = (projects) => {
  const accordion = document.querySelector('#accordionExample');
  accordion.innerHTML = '';

  projects.forEach((project, index) => {
    projectCard(accordion, project, index);
  });
};

export { displayProjects }