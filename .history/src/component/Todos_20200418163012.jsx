import React, { Component } from 'react';
import TodoItem from'./TodoItem'
import PropTypes from 'pro'

class Todos extends Component{
    
    render() { 
        return this.props.todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo}/>
        ))
    }
}
 
export default Todos;
