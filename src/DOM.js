import { createProject, projects } from "./todos.js"

const displayProjects = document.querySelector('.display-projects');
const createProjectButton = document.querySelector('.js-create-project');

createProjectButton.addEventListener('click', () => {
    const projectId = createProject("First Project");
    displayProjects.innerHTML += `
        <div class="project"> ${projects[projectId]} </div>
    `
})