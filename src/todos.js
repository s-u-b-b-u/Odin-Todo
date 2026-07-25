const projects = {};
const todos = {};

const createTodo = (
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

const createProject = (
    function (name) {
        const projectId = "1";

        // add to projects object
        projects[projectId] = name;

        // add to todos
        todos[projectId] = {};
    }
)

const addTodo = (
    function (projectId, title, description, dueDate, priority) {
        const todo = createTodo(projectId, title, description, dueDate, priority);

        todos[projectId][todo.id] = todo;
    }
)


const removeTodo = (
    function (projectId,todoId) {
        delete todos[projectId][todoId]
    }
)

createProject("First Project");

addTodo("1", "First todo", "Nothing special", "Today", "medium")


console.log(projects);
console.log(todos);
