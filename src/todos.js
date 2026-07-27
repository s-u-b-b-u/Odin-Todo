export const projects = {};
export const todos = {};

export const createTodo = (
    function (
        projectId = "projectId",
        title="Title",
        description = "Description",
        dueDate = "Due date",
        priority = "Priority"
    ) {

        const id = "1";
        
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

        // add to todos
        todos[projectId] = {};

        return projectId;
    }
)

export const addTodo = (
    function (projectId, title, description, dueDate, priority) {
        const todo = createTodo(projectId, title, description, dueDate, priority);

        todos[projectId][todo.id] = todo;
    }
)


export const removeTodo = (
    function (projectId,todoId) {
        delete todos[projectId][todoId]
    }
)

export const removeProject = (
    function (projectId) {
        delete todos[projectId];
        delete projects[projectId]
    }
)

const e = createProject("TEst");
removeProject(e);


console.log(projects)