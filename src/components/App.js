import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    tasks: []
  };

  render() {
    return (
      <section className="content">
        <h1 className="content-title">TO DO LIST</h1>
        <div className="content-btns">
          {/* <Btn/> */}
          {/* <Btn/> */}
          {/* <Btn/> */}
        </div>
        {/* <TaskList/> */}
      </section>
    );
  }
}

export default App;
