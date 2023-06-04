import './App.css';
import {useState} from "react";
import {Task} from './Task.js';

function App() {

  const [todoList, setTodoList] = useState([]);

  const [newTask, setNewTask] = useState("");

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  };

  const addNewTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  };

  const completeTask = (id) => {
    const newTodoList = todoList.map((task) => {
      if (task.id === id){
        task.completed = !task.completed;
      }
      return task;
    })
    setTodoList(newTodoList);
  };

  return( 
    <div className="App">
      <div className="addTask">
        <input onChange={handleNewTask}/>
        <button onClick={addNewTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return <Task completeTask={completeTask} deleteTask={deleteTask} taskName={task.taskName} id={task.id} completed={task.completed}/>
        })}
      </div>
    </div>
  );
};


export default App;