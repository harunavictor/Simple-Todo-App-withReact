import React, { Component } from 'react';
import TodoItem from './compo '

class Todos extends Component{
    
    render() { 
        return this.props.todos.map((todo)=>(
        <TodoItem todo={todo}/>
        ))
    }
}
 
export default Todos;
