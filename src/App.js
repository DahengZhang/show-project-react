import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './style.css'

class App extends Component {

    constructor (props) {
        super(props)

        this.state = {
            show: true,
            list: []
        }

        this.bundleClick = this.bundleClick.bind(this)
    }

    render () {
        return (
            <Fragment>
                <TransitionGroup>
                {
                    this.state.list.map(item => {
                        return (
                            <CSSTransition
                                key={item}
                                timeout={1000}
                                classNames="fade"
                                onEntered={el => {
                                    el.style.color = 'blue'
                                }}
                                unmountOnExit
                                appear={true}>
                                <div>{item}</div>
                            </CSSTransition>
                        )
                    })
                }
                </TransitionGroup>
                <button onClick={this.bundleClick}>toggle</button>
            </Fragment>
        )
    }

    bundleClick () {
        this.setState(() => ({
            list: [ ...this.state.list, new Date().getTime() ]
        }))
        // this.setState(() => ({
        //     show: !this.state.show
        // }))
    }
}

export default App