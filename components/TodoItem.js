import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context)
  }


  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    let element = "Test!!!"

    return (
      <li>
        {element}
      </li>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
}

export default TodoItem
