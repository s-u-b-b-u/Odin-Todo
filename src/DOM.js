import { createProject, projects, createTodo, addTodo, todos } from "./todos.js"
import { renderProjects } from "./render-logic.js";

export const displayProjects = document.querySelector('.display-projects');
const createProjectButton = document.querySelector('.js-create-project');
const projectHeading = document.querySelector('.js-project-name')

document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
})

createProjectButton.addEventListener('click', () => {
    // this project name should be taken form the user later.
    const projectId = createProject("First Project");
    projectHeading.textContent = projects[projectId];
    renderProjects();
})


// using event delegation to add event listeners to add todo buttons
displayProjects.addEventListener('click', (event)=>{
    const addTodoButton = event.target.closest('.js-add-todo');

    if (addTodoButton) {

        const projectId = addTodoButton.dataset.projectId;

        addTodo(projectId, "Test Todo", "How is your day?", "no data", "low");
        console.log("added")

    }
})