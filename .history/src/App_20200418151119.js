import React, { Component } from "react";
import "./App.css";
import Todos from "./component/Todos";

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "Sleeping in my room", completed: false },
      { id: 2, title: "Bathing in my bathroom", completed: false},
      { id: 3, title: "Reading my courses", completed: false }
    ]
  };
  render() {
    console.log(this.state.todos)
    return (
      <div>
        <Todos todos={this.state.}/>
      </div>
    );
  }
}

export default App;
