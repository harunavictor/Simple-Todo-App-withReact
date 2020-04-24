import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    render() {
        return (
            <div style>
                <h1>{this.props.todo.title}</h1>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo:PropTypes.object.isRequired
}

export default TodoItem
