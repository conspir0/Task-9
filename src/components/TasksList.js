import React from "react";
import "./TasksList.css";
import Task from "./Task";

const TasksList = props => (
  <ul className="tasks-list">
    <Task tasks={props.tasks} />
  </ul>
);

export default TasksList;
