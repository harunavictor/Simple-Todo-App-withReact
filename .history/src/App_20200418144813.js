import React, { Component } from "react";
import "./App.css";
import Todos from "./component/Todos";

class App extends Component {
  state = {
    todos: [{ id: 1, title: "Sleeping in my room", completed: false }
    { id: 1, title: "Sleeping in my room", completed: false }]
  };
  render() {
    return (
      <div>
        <Todos />
      </div>
    );
  }
}

export default App;
