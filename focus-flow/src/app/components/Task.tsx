interface Task{
    task: any
}

function Task({task}: Task) {
    return (
        // The gray background is for testing: Change this in prod
        <div className="border p-6 shadow-sm bg-white mx-2">
            {task.title}
        </div>
    )
}

export default Task;