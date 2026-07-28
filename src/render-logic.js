import { projects } from "./todos";
import { displayProjects } from "./DOM";

export function renderProjects() {

    if (Object.keys(projects).length === 0) {
        return;
    }
    displayProjects.innerHTML = ``;

    for (const [key, value] of Object.entries(projects)) {
        displayProjects.innerHTML += `
        <div class="project"> ${value} <button class="add-todo js-add-todo" data-project-id ="${key}"">+</button></div>
    `
    }
}