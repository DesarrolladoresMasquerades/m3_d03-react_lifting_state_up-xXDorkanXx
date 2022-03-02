import { useState } from "react";
import Task from "./Task";
import Summary from "./Summary";

const initialTasks = [
  {
    _id: "1a",
    name: "Task1",
    description: "Do something important",
    isDone: false
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important",
    isDone: false
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    isDone: false
  },
];


function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  function toggleTaskDone(taskId){
    const tasksCopy = [...tasks];

    tasksCopy.forEach((task)=>{
      if(task._id === taskId){
        task.isDone = !task.isDone;
        if(task.isDone){
          setTasksCompleted(tasksCompleted + 1);
        }else{
          setTasksCompleted(tasksCompleted - 1);
        }
      }
    })

    setTasks(tasksCopy);
  }

  return (
    <div>
      <Summary tasksCompleted={tasksCompleted}/>

      <div className="todo-container">
        {tasks.map((task) => <Task key={task._id} task={task} toggleTaskDone={toggleTaskDone} /> )}
      </div>
    </div>
  );
}

export default ToDoList;
