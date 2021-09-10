import React from 'react'
import './Button.css';


const STYLES =[
  "btn--solido",
  "btn--vazado",
];

const SIZES =[
  "btn--g",
  "btn--m",
  "btn--p"
];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize}) => {

      const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
      const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

        return(

            
            <button className ={`btn ${checkButtonStyle} ${checkButtonSize}`}
             onClick={onClick}
             type={type}>

               {children}

            </button>
            
                       
            )   
        };


