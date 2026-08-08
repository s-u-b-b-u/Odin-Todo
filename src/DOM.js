import { createProject, projects, createTodo, addTodo, todos, removeProject, removeTodo } from "./todos.js"
import { renderProjects, renderTodos, toggleExpandButton} from "./render-logic.js";
import { fillTheUpdateFormWithBeforeData, updateTodo } from "./forms.js";

export const displayProjects = document.querySelector('.display-projects');

const openProjectDialog = document.querySelector('.js-open-project-dialog');
export const projectHeading = document.querySelector('.js-project-name');

const projectForm = document.querySelector('.project-form')
const projectDialog = document.querySelector('.project-dialog');
const projectInput = document.querySelector('#project-input');
const closeProjectDialog = document.querySelector('.close-project-dialog');

const todoForm = document.querySelector('.todo-form');
const todoDialog = document.querySelector('.todo-dialog');
const closeTodoDialog = document.querySelector('.close-todo-dialog');

// todo form inputs
const todoTitleInput = document.querySelector('#todo-title');
const todoDescriptionInput = document.querySelector('#todo-description');
const todoDueDateInput = document.querySelector('#todo-due-date');
const todoPriorityInput = document.querySelector('#todo-priority');

export const todosDisplay = document.querySelector('.todo-list');

// DOM elements related to the form and dialog for the updating the todo

export const updateTodoDialog = document.querySelector('.todo-update-dialog');
export const updatedTodoTitle = document.querySelector('#todo-update-title');
export const updatedTodoDescription = document.querySelector('#todo-update-description');
export const updatedTodoDueDate = document.querySelector('#todo-update-due-date');
export const updatedTodoPrority = document.querySelector('#todo-update-priority');
export const updateTodoButton = document.querySelector('.update-todo-button')


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

// using event delegation to add event listeners to add todo buttons
displayProjects.addEventListener('click', (event)=>{
    const addTodoButton = event.target.closest('.js-add-todo');

    if (addTodoButton) {

        const projectId = addTodoButton.dataset.projectId;
        closeTodoDialog.setAttribute('data-project-id', projectId);
        todoDialog.showModal();
       
    }
});


closeTodoDialog.addEventListener('click', ()=>{    
    const projectId = closeTodoDialog.dataset.projectId;
    
    const todoTitle = todoTitleInput.value;
    const todoDescription = todoDescriptionInput.value;
    const todoDueDate = todoDueDateInput.value;
    const todoPriority = todoPriorityInput.value
    
    
    todoTitleInput.value = "";
    todoDialog.close();
    
    
    if (todoTitle === "") return
    
    addTodo(projectId,
        todoTitle,
        todoDescription,
        todoDueDate,
        todoPriority
    )
    console.log(todos[projectId]);
    
    renderTodos(projectId);
})


// use event delegation todosDisplay to remove the todos

todosDisplay.addEventListener('click', (event) =>{
    const deleteTodoButton = event.target.closest('.js-delete-todo');
    
    if (deleteTodoButton) {
        
        const projectId = deleteTodoButton.dataset.projectId;
        const todoId = deleteTodoButton.dataset.todoId;

        removeTodo(projectId, todoId);
        renderTodos(projectId);
    }
})

// using event delegation to make expand the todo to didplay the remaining fields;

todosDisplay.addEventListener('click', (event) =>{
    const todoExpandButton = event.target.closest('.js-expand-todo-button');
    
    if(todoExpandButton) {
        const todoId = todoExpandButton.dataset.todoId;
        const expandField = document.querySelectorAll(`.expand-field-${todoId}`);

        toggleExpandButton(expandField);

    }
})

// use event delegation to add listener to the edit todo button

todosDisplay.addEventListener('click', (event) =>{
    const editTodoButton = event.target.closest('.js-edit-todo-button');

    if (editTodoButton) {
        const todoId = editTodoButton.dataset.todoId;
        const projectId = editTodoButton.dataset.projectId;

        console.log(todoId, projectId);
        fillTheUpdateFormWithBeforeData(projectId, todoId)
        updateTodoDialog.showModal();
    }
})

updateTodoButton.addEventListener('click', ()=>{
    updateTodoDialog.close();
    updateTodo();
})
