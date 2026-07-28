import { createProject, projects, createTodo, addTodo, todos } from "./todos.js"
import { renderProjects } from "./render-logic.js";

export const displayProjects = document.querySelector('.display-projects');

const openProjectDialog = document.querySelector('.js-open-project-dialog');
const projectHeading = document.querySelector('.js-project-name');

const projectForm = document.querySelector('.project-form')
const projectDialog = document.querySelector('.project-dialog');
const projectInput = document.querySelector('#project-input');
const closeProjectDialog = document.querySelector('.close-project-dialog');''

document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
})

projectForm.addEventListener('submit', (event) =>{
    event.preventDefault();
})

closeProjectDialog.addEventListener('click', ()=> {
    projectDialog.close();
    const projectName = projectInput.value;
    createProject(projectName);
    renderProjects();
})

openProjectDialog.addEventListener('click', () => {
    projectDialog.showModal();
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