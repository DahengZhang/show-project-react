import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class App extends Component {
    render () {
        return (
            <Fragment>
                <input
                    value={this.props.inputValue}
                    onChange={this.props.changeInputValue} />
            </Fragment>
        )
    }

}

const mapStateProps = state => {
    return {
        inputValue: state.inputValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeInputValue (e) {
            dispatch({
                type: 'change_input_value',
                value: e.target.value
            })
        }
    }
}

export default connect(mapStateProps, mapDispatchToProps)(App)
