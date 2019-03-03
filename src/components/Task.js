import React from "react";
import "./Task.css";

const Task = props => {
  const tasks = props.tasks
    .map(task => (
      <li className="task" key={task.id}>
        <h3 className="task-title">{`Task number ${task.id}`}</h3>
        <p className="task-text">{task.content}</p>
      </li>
    ))
    .reverse();
  return tasks;
};

export default Task;
