const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'


const initialState = {
    count: 76
}

function reducer(state = initialState, action) {
    console.log(action.type)
    switch(action.type) {
        case 'INCREMENT':
        return {
            count: state.count + 1
        }
        case 'DECREMENT':
        return {
            count: state.count - 1
        }
        case 'RESET':
        return {
            count: 0
        }
        default:
        return state
    }
}

export default reducer
