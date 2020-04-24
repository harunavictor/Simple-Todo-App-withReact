import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    
getStyle=()=>{
    if(this.props.todo.completed){
        return {
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:
            textDecoration:this.props.todo.completed? "line-through":"none"
        }
    }
}

    render() {
        return (
            <div style={this.getStyle()}>
                <h1>{this.props.todo.title}</h1>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo:PropTypes.object.isRequired
}

export default TodoItem
