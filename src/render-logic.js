import { getProjectsFromStorage, getTodosFromStorage } from "./local-storage";
import { displayProjects, todosDisplay, projectHeading } from "./DOM";

export function renderProjects() {

    const projects = getProjectsFromStorage() || {};

    console.log(Object.keys(projects).length);

    displayProjects.innerHTML = ``;
    if (Object.keys(projects).length === 0) {
        return;
    }

    for (const [key, value] of Object.entries(projects)) {
        displayProjects.innerHTML += `
        <div class="project js-project background-bg" data-project-id="${key}"> 
            ${value} 
            <button class="add-todo js-add-todo" data-project-id ="${key}"">+</button>
            <button class="remove-project js-remove-project" data-project-id="${key}">-</button>
        </div>
    `
    }
}

export function renderTodos(projectId) {

    const todos = getTodosFromStorage() || {};
    const projects = getProjectsFromStorage() || {};

    if (!Object.hasOwn(todos, projectId)) return;

    todosDisplay.innerHTML = ``;
    projectHeading.textContent = ``;
    projectHeading.textContent = `${projects[projectId]}`;

    for (const [key, value] of Object.entries(todos[projectId])) {
        todosDisplay.innerHTML += `
            <div class="todo">
                ${todos[projectId][key].title} 
                <button class="delete-todo js-delete-todo" data-project-id=${projectId} data-todo-id=${key}>-</button>
                <button class="expand-todo-button js-expand-todo-button" data-todo-id=${key}> > </button>
                <button class="edit-todo-button js-edit-todo-button" data-todo-id=${key} data-project-id=${projectId}> edit</button>
                    <div class="expand-field-${key} expand-field">
                        <div><p>${todos[projectId][key].description}</p></div>
                    </div>
                    <div class="expand-field-${key} expand-field">
                        <div><p>${todos[projectId][key].dueDate}</p></div>
                    </div>
                    <div class="expand-field-${key} expand-field">
                        <div><p>${todos[projectId][key].priority}</p></div>
                    </div>
            </div>
        `
    }


}


export function toggleExpandButton(expandField){


    expandField.forEach((field) => {

        if(field.classList.contains('expand-field-click')){
            field.classList.remove('expand-field-click');
        }else {
            field.classList.add('expand-field-click')
        }

    })

}