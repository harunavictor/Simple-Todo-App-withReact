import React, { Component } from "react";
import TodoItem from "./component/TodoItem"

class Todos extends Component {
  render() {
    return this.props.todos.map(todo =><TodoItem todos={tod}/>
  }
}

export default Todos;
