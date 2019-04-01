import React from 'react'

import './button.css'


const Button = ({ onClick, children }) => (
    <button 
        className="button" 
        onClick={onClick}>
        {children}
    </button>
)


export default Button