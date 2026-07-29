import { createProject, projects, createTodo, addTodo, todos, removeProject } from "./todos.js"
import { renderProjects, renderTodos } from "./render-logic.js";

export const displayProjects = document.querySelector('.display-projects');

const openProjectDialog = document.querySelector('.js-open-project-dialog');
const projectHeading = document.querySelector('.js-project-name');

const projectForm = document.querySelector('.project-form')
const projectDialog = document.querySelector('.project-dialog');
const projectInput = document.querySelector('#project-input');
const closeProjectDialog = document.querySelector('.close-project-dialog');

const todoForm = document.querySelector('.todo-form');
const todoDialog = document.querySelector('.todo-dialog');
const todoTitleInput = document.querySelector('#todo-title');
const closeTodoDialog = document.querySelector('.close-todo-dialog');

const deleteProjectButton = document.querySelector('.js-remove-project');

export const todosDisplay = document.querySelector('.todo-list');



document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
})

projectForm.addEventListener('submit', (event) =>{
    event.preventDefault();
})

closeProjectDialog.addEventListener('click', ()=> {
    projectDialog.close();
    const projectName = projectInput.value;

    if (projectName === "") return; 

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
        closeTodoDialog.setAttribute('data-project-id', projectId);
        todoDialog.showModal();
       
    }
});


// using event delegation to add event listeners to delte the project button
displayProjects.addEventListener('click', (event)=>{
    const deleteProject = event.target.closest('.js-remove-project');

    if (deleteProject) {

        const projectId = deleteProject.dataset.projectId;
        removeProject(projectId);
        console.log(projects);
        renderProjects();
       
    }
});
// using event delegation to render the todos in that project when clicked on project div

displayProjects.addEventListener('click', (event) => {
    const project = event.target.closest('.js-project');


    if (project) {

        const projectId = project.dataset.projectId;
        renderTodos(projectId);
    }
})

closeTodoDialog.addEventListener('click', ()=>{    
    const todoTitle = todoTitleInput.value;
    const projectId = closeTodoDialog.dataset.projectId;
    todoTitleInput.value = "";
    todoDialog.close();

    
    if (todoTitle === "") return

    addTodo(projectId,
        todoTitle,
        "This is a great day",
        "todya",
        "low"
    )
    console.log(todos[projectId]);

    renderTodos(projectId);
})





