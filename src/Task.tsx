export interface TaskType{
    id: number;
    taskName: string;
    completed: boolean;
  };

interface Props{
    todoList: TaskType[];
    deleteTask: (taskId: number) => void;
    completeTask: (taskId: number) => void;
}

export const Task = (props : Props): JSX.Element => {
    return (
        <div>
            {props.todoList.map((task)=> {
                return (
                    <div>
                        <h1 style={{color: task.completed ? "green" : "black"}}>{task.taskName}</h1>
                        <button onClick={() => props.deleteTask(task.id)}>X</button>
                        <button onClick={() => props.completeTask(task.id)}>Complete Task ✅</button>
                    </div>
                );
            })}
        </div>
    );
};