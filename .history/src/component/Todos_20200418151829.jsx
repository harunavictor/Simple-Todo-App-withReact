import React, { Component } from 'react';


class Todos extends Component{
    
    render() { 
        console.log(this.props.Todos)
        return this.props.Todos.map((todo)=>(

        ));
    }
}
 
export default Todos;
