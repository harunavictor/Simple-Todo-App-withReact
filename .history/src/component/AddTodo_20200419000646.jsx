import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
            <form  style={{display:'flex'}}>
                <input 
                type="time"
                 name="title" 
                 style
                 placeholder='Add TodoList...'/>
            </form>
        )
    }
}

export default AddTodo
