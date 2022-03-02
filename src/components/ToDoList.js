import { useState } from "react";
import Task from "./Task";
import Summary from "./Summary";

const initialTasks = [
  {
    _id: "1a",
    name: "Task1",
    description: "Do something important",
    isDone: false                                    // <== ADD
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important",
    isDone: false                                    // <== ADD
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    isDone: false                                    // <== ADD
  },
];


function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0);           // <== ADD

  return (
    <div>
      <Summary />

      <div className="todo-container">
        {tasks.map((task) => <Task key={task._id} task={task} /> )}
      </div>
    </div>
  );
}

export default ToDoList;
