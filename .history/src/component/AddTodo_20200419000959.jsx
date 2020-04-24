import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
            <form  style={{display:'flex'}}>
                <input 
                type="time"
                 name="title" 
                 style={{flex:'10' padding}}
                 placeholder='Add TodoList...'/>

                 <input type="submit"
                  value="Submit"
                  className="btn"
                  style={{flex:'1'}}/>
            </form>
        )
    }
}

export default AddTodo
