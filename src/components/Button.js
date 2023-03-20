import React, {useState }  from 'react'
import {button} from './Button.module.css'

const Button = ({name, color, id}) => {

    const [isHover, setIsHover] = useState(false);

    const ligtGrey = 'hsl(0, 0%, 95%)';   
  
  
    const onMouseOverHandler =  () => {
        setIsHover(true);  
    }
  
   const onMouseOutHandler =  () => {
        setIsHover(false);
  
    }

    let buttonStyle =  {
          
        color: isHover ? ligtGrey : color,
        backgroundColor: isHover ? color : ligtGrey,
        border: isHover ? 'solid ' + ligtGrey +'2px' : 'none'
        
    }
    return (
        <button id={id} onFocus={ () => void 0 } onBlur={ () => void 0 } onMouseOut={onMouseOutHandler} onMouseOver={onMouseOverHandler} style={buttonStyle} className={button}>{name}</button>
    )
}

export default Button