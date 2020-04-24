import React, { Component } from "react";
import "./App.css";
import Todos from "./component/Todos";

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "Sleeping in my room", completed: true },
      { id: 2, title: "Bathing in my bathroom", completed: false },
      { id: 3, title: "Reading my courses", completed: false }
    ]
  };
  render() {
    return (
      <div>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
