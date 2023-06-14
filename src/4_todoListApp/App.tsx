import './App.css';
import { useState } from "react";
import { Task, TaskType } from "./Task";
function App() {
  // Mini-Project : Doing a todolist.

  
  const [todoList, setTodoList] = useState<TaskType[]>([]);
  
  const [newTask, setNewTask] = useState<string>("");

  const handleNewTask = (event : React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const addNewTask = () => {
    const task : TaskType = {
      id: todoList.length === 0 ? 0 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...todoList, task]);
  };

  const deleteTask = (taskId :number) : void => {
    setTodoList(todoList.filter((task) => taskId !== task.id))
  };

  const completeTask = (taskId :number) : void => {
    const newTodoList: TaskType[] = todoList.map((task) => {
      if (task.id === taskId){
        task.completed = !task.completed;
      }
      return task;
    })
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleNewTask} placeholder="New task..."/>
        <button onClick={addNewTask}>Add a new task</button>
        <Task todoList={todoList} deleteTask={deleteTask} completeTask={completeTask}/>
      </div>
    </div>
  );
}

export default App;
