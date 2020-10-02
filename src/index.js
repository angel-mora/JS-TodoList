console.log("Hello Webpack");
console.log("Hello Webpack");

const defaultExerciseProject = {
  name: "My Exercise Plan",
  list:
  [
    {
    title: "Do 20 Squats before breakfast",
    description: "I need squats to .... Lorem ipsim jseft yug huger serdagh montergh dergrats",
    dueDate: 12102020,
    priority: 2
  },
  {
    title: "Do 20 pushups after breakfast",
    description: "Pushups are good for strength and cardio .... Lorem ipsim jseft yug huger serdagh montergh dergrats",
    dueDate: 12102020,
    priority: 1
  },
  {
    title: "Do planks for 3 min after work",
    description: "Planks are great for the circuit .... Lorem ipsim jseft yug huger serdagh montergh dergrats",
    dueDate: 12102020,
    priority: 3
  }
  ]
}

 class Todo {  
   constructor (title, description, dueDate, priority) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
    }
  }

class Project {
  constructor(name) {
    this.name = name;
    this.list = [];
  }

  validation(title, description, dueDate, priority) {
    
  }

  addTodo(title, description, dueDate, priority) {
    let newTodo = new Todo(title, description, dueDate, priority);
    this.list.push(newTodo)
  }
  
}

// let newTodo = new Todo("Jug 20 mins", "Jugging is good", 202010, 2);
// console.log(newTodo);
let a = new Project("Lola");
console.log(a.list);
a.addTodo("Jug 20 mins", "Jugging is good", 202010, 2);
console.log(a.list);
console.log(defaultExerciseProject.list);