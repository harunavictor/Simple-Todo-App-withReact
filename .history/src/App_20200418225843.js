import React, { Component } from "react";
import Header from './component/layout/Header'
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
  //Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  //Delete Todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
  render() {
    return (
      <div className>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
