import {incrementAsync, decrement, reset, increment} from './actions'

jest.useFakeTimers()

describe('actions', () => {
    describe('incrementAsync', () => {
        it('should return object with type INCREMENT', () => {
            const action = {
                type: 'INCREMENT'
            }
            expect(incrementAsync()).toEqual(action)
        })
    })
    describe('increment', () => {
        it('should return a snapshot', () => {
            expect(increment()).toMatchSnapshot()
        })
        it('should return a function', () => {
            expect(typeof increment()).toEqual('function')
        })
        it('should call a function', () => {
            const dispatch = jest.fn()
            increment()(dispatch)

            jest.advanceTimersByTime(2000)

            expect(dispatch).toHaveBeenCalledTimes(1)
            expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
        })
    })
    describe('decrement', () => {
        it('should return an object with type DECREMENT', () => {
            const action = {
                type: 'DECREMENT'
            }
            
            expect(decrement()).toEqual(action)
        })
    })
    describe('reset', () => {
        it('should return an object with type RESET', () => {
            const action = {
                type: 'RESET'
            }

            expect(reset()).toEqual(action)
        })
    })
})