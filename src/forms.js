import { updateTodoDialog, updatedTodoTitle, updatedTodoDescription, updatedTodoDueDate, updatedTodoPrority, updateTodoButton } from "./DOM";
import { getTodosFromStorage } from "./local-storage";
import { editTodo } from "./todos";
import { renderTodos } from "./render-logic";


export function  fillTheUpdateFormWithBeforeData(projectId, todoId) {

    updateTodoButton.setAttribute('data-todo-id', todoId);
    updateTodoButton.setAttribute('data-project-id', projectId);

    const todos = getTodosFromStorage();

    updatedTodoTitle.value = todos[projectId][todoId].title;
    updatedTodoDescription.value = todos[projectId][todoId].description;
    updatedTodoDueDate.value = todos[projectId][todoId].dueDate;
    updatedTodoPrority.value = todos[projectId][todoId].priority;       
}

export function updateTodo() {

    const projectId = updateTodoButton.dataset.projectId;
    const todoId = updateTodoButton.dataset.todoId;
    const title = updatedTodoTitle.value;
    const description = updatedTodoDescription.value;
    const dueDate = updatedTodoDueDate.value;
    const priority = updatedTodoPrority.value;

    updateTodoButton.removeAttribute('data-todo-id');
    updateTodoButton.removeAttribute('data-project-id');


    editTodo(todoId, projectId, title, description, dueDate, priority);
    renderTodos(projectId);

}