import React from 'react'

import './display.css'

const Display = ({children}) =>  (
    <div className='display'>
       <p className='display__content'>{children}</p>
    </div>
)


export default Display