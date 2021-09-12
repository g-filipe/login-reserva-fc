import React, { useDebugValue, useEffect, useRef, useState } from "react";
import './Dropdown.css';


export const DropdownSP = ({selected, setSelected }) => {

    const [isActive, setIsActive] = useState(false)
    
    const range = (start, end) => {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
    const options = range(0, 100);

    

    return (

        <div classname='box'>


            <div className="dropdown">
                <div className="dropdown-btn" onClick={() =>{
                    setIsActive(!isActive)}}>
                    {selected}
                    <span className="fas fa-caret-down"></span>
                </div>
                {isActive && (
                    <div className="dropdown-content">
                        {options.map((option) => (
                            <div onClick={(e) => {
                                setSelected(option)
                                setIsActive(false)
                            }}
                                className="dropdown-item">
                                {option}
                            </div>

                        ))}

                    </div>
                )}
            </div>
        </div>
    )



}