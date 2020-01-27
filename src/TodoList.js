import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'

export default class TodoList extends Component {

    constructor (props) {
        super(props)

        this.state = { // 组建状态
            inputValue: 'halo',
            list: [
                '流利说',
                '达尔文英语'
            ]
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleClickItem = this.handleClickItem.bind(this)
    }

    render () {
        return (
            <Fragment>
                {/* 这是一段注释 */}
                <label>
                    请输入内容
                    <input
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        onKeyUp={this.handleKeyUp}
                        placeholder="请输入要做的实情" />
                </label>
                <button
                    onClick={this.handleBtnClick}>
                    提交
                </button>
                <ul>
                    {this.renderTodoItem()}
                </ul>
            </Fragment>
        )
    }

    renderTodoItem () {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={item + index}
                    index={index}
                    content={item}
                    deleteItem={this.handleClickItem} />
            )
        })
    }

    handleInputChange (e) {
        const inputValue = e.target.value
        this.setState(() => ({
            inputValue
        }))
    }

    handleBtnClick () {
        if (!this.state.inputValue) {
            return
        }
        this.setState(prevState => ({
            list: [ ...prevState.list, prevState.inputValue ],
            inputValue: ''
        }))
    }

    handleKeyUp (e) {
        if (e.key === 'Enter') {
            this.handleBtnClick()
        }
    }

    handleClickItem (index) {
        this.setState(prevState => {
            const list = [ ...prevState.list ]
            list.splice(index, 1)

            return {
                list
            }
        })
    }
}