import React, { Component } from "react";
import "./App.css";
import Todos from "./component/Todos";

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "Sleeping in my room", completed: false },
      { id: 2, title: "Bathing in my bathroom", completed: true },
      { id: 3, title: "Reading my courses", completed: false }
    ]
  };
  markComplete = id => {
    this.setState({todos:this.state.todos.map})
  };
  render() {
    return (
      <div>
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
