const defaultState = {
    inputValue: '123',
    list: ['流利说', '慕课网']
}

export default (state = defaultState, action) => {
    let newState = { ...state }
    if (action.type === 'change_input_value') {
        newState.inputValue = action.value
        return newState
    }
    if (action.type === 'push_todo_list') {
        newState.list.push(action.value)
        newState.inputValue = ''
        return newState
    }
    if (action.type === 'remove_todo_list') {
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}