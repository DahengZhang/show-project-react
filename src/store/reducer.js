import _ from 'lodash'

const defaultState = {
    inputValue: 'halo',
    list: []
}

export default ( state = defaultState, action ) => {
    if (action.type === 'change_input_value') {
        let newSate = _.cloneDeep(state)
        newSate.inputValue = action.value
        return newSate
    }
    return state
}
