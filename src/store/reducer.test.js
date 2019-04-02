import reducer from './reducer'

describe('reducer', () => {
    it('should return the initial state', () => {
        const initialState = {
            count: 0
        }
        expect(reducer(undefined, {})).toEqual(initialState);
     })
     it('should increment the initialState', () => {
        const initialState = {
            count: 0
        }
        const expected = {
            count: 1
        }
        const action ={
            type: "INCREMENT"
        }
        expect(reducer(initialState, action)).toEqual(expected);
     })
     it('should decrement the initialState', () => {
        const initialState = {
            count: 1
        }
        const expected = {
            count: 0
        }
        const action ={
            type: "DECREMENT"
        }
        expect(reducer(initialState, action)).toEqual(expected)
     })
     it('should reset the initialState', () => {
        const initialState = {
            count: 1
        }
        const expected = {
            count: 0
        }
        const action ={
            type: "RESET"
        }
        expect(reducer(initialState, action)).toEqual(expected)
     })
})  