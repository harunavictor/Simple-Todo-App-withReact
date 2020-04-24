import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
            <form  style={{}}>
                <input 
                type="time"
                 name="title" 
                 placeholder='Add TodoList...'/>
            </form>
        )
    }
}

export default AddTodo
