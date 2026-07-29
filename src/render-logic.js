import { projects, todos } from "./todos";
import { displayProjects, todosDisplay } from "./DOM";

export function renderProjects() {

    if (Object.keys(projects).length === 0) {
        return;
    }
    displayProjects.innerHTML = ``;

    for (const [key, value] of Object.entries(projects)) {
        displayProjects.innerHTML += `
        <div class="project js-project background-bg" data-project-id="${key}"> 
            ${value} 
            <button class="add-todo js-add-todo" data-project-id ="${key}"">+</button>
        </div>
    `
    }
}

export function renderTodos(projectId) {

    todosDisplay.innerHTML = ``;

    for (const [key, value] of Object.entries(todos[projectId])) {
        todosDisplay.innerHTML += `
            <div class="todo">${todos[projectId][key].title}</div>
        `
    }


}