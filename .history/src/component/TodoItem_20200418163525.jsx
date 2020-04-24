import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.todo.title}</h1>
            </div>
        )
    }
}



export default TodoItem
