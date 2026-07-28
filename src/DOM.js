import { createProject, projects, createTodo, addTodo, todos } from "./todos.js"
import { renderProjects } from "./render-logic.js";

export const displayProjects = document.querySelector('.display-projects');
const createProjectButton = document.querySelector('.js-create-project');

document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
})

createProjectButton.addEventListener('click', () => {
    const projectId = createProject("First Project");
    renderProjects();
})


// using event delegation to add event listeners to add todo buttons

displayProjects.addEventListener('click', (event)=>{
    const addTodoButton = event.target.closest('.js-add-todo');

    if (addTodoButton) {

        const projectId = addTodoButton.dataset.projectId;

        addTodo(projectId, "Test Todo", "How is your day?", "no data", "low");

    }
})