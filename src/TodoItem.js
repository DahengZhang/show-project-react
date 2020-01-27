import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoList extends Component {

    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render () {

        const { content } = this.props
        return (
            <div onClick={this.handleClick}>{content}</div>
        )
    }

    handleClick () {
        const { deleteItem, index } = this.props
        deleteItem(index)
    }
}

TodoList.propTypes = {
    'content': PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    'deleteItem': PropTypes.func,
    'index': PropTypes.number
}

TodoList.defaultProps = {
    'content': 'Hello World'
}

export default TodoList