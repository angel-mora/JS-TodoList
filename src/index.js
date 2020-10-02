import { allProjects } from './utils'

const stringifiedProjects = JSON.stringify(allProjects);
localStorage.setItem('allProjects', stringifiedProjects);
const projects = JSON.parse(localStorage.getItem('allProjects'));

console.log(projects);

const loopTodos = (todos, index) => {
  let cardBody = document.querySelector(`#todos${index}`)
  for(let todo of todos){
    cardBody.innerHTML += `<div class='d-flex'>
    <p class='mx-4'>${todo.title}</p>
    <p class='mx-4'>${todo.description}</p>
    <p class='mx-4'>${todo.dueDate}</p>
    <p class='mx-4'>${todo.priority}</p>
  </div>` 
  }
};

const projectCard = (accordion, project, index) => {
  let todos = project.list;

  accordion.innerHTML += `<div class="card">
  <div class="card-header" id="headingOne">
    <h2 class="mb-0">
      <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapseOne">
        ${project.name}
      </button>
    </h2>
  </div>

  <div id="collapse${index}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
    <div class="card-body" id="todos${index}">
    </div>
  </div>
  </div>`

  loopTodos(todos, index)
};

const displayProjects = (projects) => {
  const accordion = document.querySelector('#accordionExample');
  accordion.innerHTML = '';

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    projectCard(accordion, project, i);
  }
};



displayProjects(projects);


// const renderTodo = (todo) => 
//    ( `<div class='d-flex'>
//       <p class='mx-4'>${todo.title}</p>
//       <p class='mx-4'>${todo.description}</p>
//       <p class='mx-4'>${todo.dueDate}</p>
//       <p class='mx-4'>${todo.priority}</p>
//     </div>` 
//   );

//   const accordion = document.querySelector('#accordionExample');
//   accordion.innerHTML = 
//   projects.map((proj, index) => (
//     `<div class="card">
//     <div class="card-header" id="headingOne">
//       <h2 class="mb-0">
//         <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapseOne">
//           ${proj.name}
//         </button>
//       </h2>
//     </div>

//     <div id="collapse${index}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
//       <div class="card-body">
//         ${proj.list.map((todo) => (renderTodo(todo)))}
//       </div>
//     </div>
//   </div>`