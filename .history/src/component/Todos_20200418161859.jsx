import React, { Component } from 'react';
import TodoItem from './co'

class Todos extends Component{
    
    render() { 
        return this.props.todos.map((todo)=>(
        <TodoItem todo={todo}/>
        ))
    }
}
 
export default Todos;
