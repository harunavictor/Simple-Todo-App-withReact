import React, { Component } from 'react';


class Todos extends Component{
    
    render() { 
        console.log(this.props.Todos)
        return this.props.Todos.map((todo)=>(
        <h3> {Todos.ti}</h3>
        ));
    }
}
 
export default Todos;
