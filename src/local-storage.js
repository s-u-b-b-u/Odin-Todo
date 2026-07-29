import { projects, todos } from "./todos";

export function saveProjectsToStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function saveTodosToStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

export function getProjectsFromStorage () {
    return JSON.parse(localStorage.getItem('projects'));
}


export function getTodosFromStorage () {
    return JSON.parse(localStorage.getItem('todos'));
}

export function clearStorage() {
    localStorage.clear();
}