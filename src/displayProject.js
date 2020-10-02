
const loopTodos = (todos, index) => {
  let tableBody = document.querySelector(`#todos${index}`);

  for (let todo of todos) {
    tableBody.innerHTML += `
    <tr>
      <td class='mx-4'>${todo.title}</td>
      <td class='mx-4'>${todo.description}</td>
      <td class='mx-4'>${todo.dueDate}</td>
      <td class='mx-4'>${todo.priority}</td>
    </tr>` 
  }
};

const projectCard = (accordion, project, index) => {
  let todos = project.list;

  accordion.innerHTML += `
    <div class="card">
      <div class="card-header" id="headingOne">
        <h2 class="mb-0">
          <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapseOne">
            ${project.name}
          </button>
        </h2>
      </div>

      <div id="collapse${index}" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div class="card-body">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Due date</th>
                <th scope="col">Priority</th>
              </tr>
            </thead>
            <tbody id="todos${index}"></tbody>
          </table>
        </div>
      </div>
    </div>`

  loopTodos(todos, index);
};

const displayProjects = (projects) => {
  const accordion = document.querySelector('#accordionExample');
  accordion.innerHTML = '';

  projects.forEach((project, index) => {
    projectCard(accordion, project, index);
  });
};

export { displayProjects }