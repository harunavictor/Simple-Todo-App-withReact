import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    getStyle=()=>{
        this.props.todo.completed===true? textDecoration:"line-through":
    }
    render() {
        return (
            <div style={{backgroundColor:'#f4f4f4'}}>
                <h1>{this.props.todo.title}</h1>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo:PropTypes.object.isRequired
}

export default TodoItem
