import * as React from 'react'
import {container} from './CardWrapper.module.css'

const CardWrapper = ({children}) => {
    return (
        <div className={container}>
        {children}
        </div>
    )
}

export default CardWrapper