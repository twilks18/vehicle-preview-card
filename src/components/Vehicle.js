import * as React from 'react'
import {descriptionText} from './Vehicle.module.css'

const Vehicle = ({name, text}) => {
    
    return (
        <div>
            <h1>{name.toUpperCase()}</h1>
            <p className={descriptionText}>{text}</p>
        </div>
    )
}

export default Vehicle