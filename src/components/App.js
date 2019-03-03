import React, { Component } from "react";
import "./App.css";
import Btn from "./Btn";
import TasksList from "./TasksList";

class App extends Component {
  state = {
    tasks: []
  };

  handleClick = e => {
    // Button ADD task
    // ----------------------------------------
    if (e.target.name === "add") {
      const task = {
        id: this.state.tasks.length + 1,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus diam sed volutpat euismod. Aliquam erat volutpat. Quisque viverra, metus eu accumsan condimentum, dui dolor imperdiet erat, sed dapibus libero mauris eget nisi. Pellentesque maximus ex interdum consequat luctus. Nam sed dui massa. Quisque id tincidunt nibh, vel maximus ex"
      };

      this.setState({
        tasks: [...this.state.tasks, task]
      });
      // Button REMOVE (last) task
      // ----------------------------------------
    } else if (e.target.name === "remove") {
      const tasks = this.state.tasks;
      tasks.pop();

      this.setState({
        tasks: [...tasks]
      });
      // Button RESET all tasks
      // ----------------------------------------
    } else if (e.target.name === "reset") {
      this.setState({
        tasks: []
      });
    }
  };

  render() {
    return (
      <section className="content">
        <h1 className="content-title">TO DO LIST</h1>
        <div className="content-btns">
          <Btn name="add" click={this.handleClick} />
          <Btn name="remove" click={this.handleClick} />
          <Btn name="reset" click={this.handleClick} />
        </div>
        <TasksList tasks={this.state.tasks} />
      </section>
    );
  }
}

export default App;
