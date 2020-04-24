import React, { Component } from 'react';
import TodoItem from'./TodoItem'
import propty

class Todos extends Component{
    
    render() { 
        return this.props.todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo}/>
        ))
    }
}
 
export default Todos;
