import React from 'react'
import './Input.css';


const STYLES =[
  "input--solido",
  "input--vazado"  
];

const SIZES =[
  "input--g",
  "input--m",
  "input--p",
];

export const Input = ({
    children,
    type,
    onClick,
    inputStyle,
    inputSize,
    placeholder}) => {

      const checkInputStyle = STYLES.includes(inputStyle) ? inputStyle : STYLES[0];
      const checkInputSize = SIZES.includes(inputSize) ? inputSize : SIZES[0];

        return(

            
            <input className ={`input ${checkInputStyle} ${checkInputSize}`}
             onClick={onClick}
             type={type}
             placeholder={placeholder}>

               {children}

            </input>
            
                       
            )   
        };

