import { getProjectsFromStorage, getTodosFromStorage } from "./local-storage";
import { saveProjectsToStorage, saveTodosToStorage } from "./local-storage";
import { removeItemFromStorage } from "./local-storage";

export const projects = getProjectsFromStorage() || {};
export const todos = getTodosFromStorage()  || {};

export const createTodo = (
    function (
        projectId = "projectId",
        title="Title",
        description = "Description",
        dueDate = "Due date",
        priority = "Priority"
    ) {

        const id = crypto.randomUUID();
        
        return {
            id, 
            projectId,
            title,
            description,
            dueDate,
            priority
        }
    }
)

export const createProject = (
    function (name) {
        
        const projectId = crypto.randomUUID();

        // add to projects object
        projects[projectId] = name;
        // clearStorage()
        
        // add to todos
        todos[projectId] = {};

        removeItemFromStorage('projects');
        removeItemFromStorage('todos');

        saveProjectsToStorage();
        saveTodosToStorage();

        return projectId;
    }
)

export const addTodo = (
    function (projectId, title, description, dueDate, priority) {
        const todo = createTodo(projectId, title, description, dueDate, priority);

        todos[projectId][todo.id] = todo;
        removeItemFromStorage('todos')
        saveTodosToStorage();
    }
)


export const removeTodo = (
    function (projectId,todoId) {
        delete todos[projectId][todoId]
        removeItemFromStorage('todos')
        saveTodosToStorage();
    }
)

export const removeProject = (
    function (projectId) {
        delete todos[projectId];
        delete projects[projectId]
        
        removeItemFromStorage('projects');
        removeItemFromStorage('todos')

        saveProjectsToStorage()
        saveTodosToStorage();
    }
)

console.log(projects);
