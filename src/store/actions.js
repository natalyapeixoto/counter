export const incrementAsync = () =>{
    return {
        type:'INCREMENT'
    }
} 

export const increment = () => dispatch => {
        setTimeout(()=>{
            dispatch(incrementAsync())
        },2000)
    }

export const decrement = () =>{
    return {
        type:'DECREMENT'
    }
} 

export const reset = () =>{
    return {
        type:'RESET'
    }
} 