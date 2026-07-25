const projects = {}

const createTodo = (
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

// const createProject = (
//     function (name) {
//         const projectId = crypto.randomUUID();

//         if (!projects[projectId]) {
//             projects[projectId] = {};
//         }
//     }
// )

const addTodo = (
    function () {
        const todo = createTodo();
        if (!projects[todo.projectId]) {
            projects[todo.projectId] = {};
        }
        projects[todo.projectId][todo.id] = todo
    }
)

addTodo();
addTodo();

console.log(projects);
