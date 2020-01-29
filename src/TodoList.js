import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd'

import store from './store'

import 'antd/dist/antd.css'

class TodoList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            ...store.getState()
        }
        this.bundleInputChange = this.bundleInputChange.bind(this)
        this.bundlePushList = this.bundlePushList.bind(this)
        // this.bundleDeleteItem = this.bundleDeleteItem(this)

        store.subscribe( () => this.setState(store.getState()))
    }
    render () {
        return (
            <Fragment>
                <Input
                    value={this.state.inputValue}
                    placeholder="to do info"
                    style={{width: '300px', marginRight: '10px'}}
                    onChange={this.bundleInputChange}/>
                <Button type="primary" onClick={this.bundlePushList}>add</Button>
                <List
                    style={{width: '300px', marginTop: '10px'}}
                    size="small"
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => <List.Item onClick={this.bundleDeleteItem.bind(this, index)}>{item}</List.Item>}/>
            </Fragment>
        )
    }

    bundleInputChange (e) {
        store.dispatch({
            type: 'change_input_value',
            value: e.target.value
        })
    }

    bundlePushList () {
        store.dispatch({
            type: 'push_todo_list',
            value: this.state.inputValue
        })
    }

    bundleDeleteItem (index) {
        store.dispatch({
            type: 'remove_todo_list',
            index
        })
    }
}

export default TodoList