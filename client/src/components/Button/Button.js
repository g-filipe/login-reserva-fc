import React from 'react'
import './Button.css';


const STYLES =[
  "btn--solido",
  "btn--vazado",
  "btn--icon",
  "btn--select",
  "btn--agenda"
];

const SIZES =[
  "btn--xg",
  "btn--gg",
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
      const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[2];

        return(

            
            <button className ={`btn ${checkButtonStyle} ${checkButtonSize}`}
             onClick={onClick}
             type={type}>

               {children}

            </button>
            
                       
            )   
        };


