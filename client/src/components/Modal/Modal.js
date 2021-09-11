import React, { useState } from "react";
import "./Modal.css";

export const Modal = ({closeModal, children}) => {

    return (

           
        <div onClick={() => closeModal(false)} className='ModalBackground'>

                  
            <div className='ModalContainer'>
               
               {children}

            </div>


        </div>


    )


}


