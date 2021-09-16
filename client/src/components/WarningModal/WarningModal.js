import React from "react";
import { AlertTriangle } from "../../assets/Icons/AlertTriangle/AlertTriangle";
import "./WarningModal.css";

export const WarningModal = ({closeWarningModal, children}) => {

    return (

           
        <div onClick={() => closeWarningModal(false)} className='warningModalBackground'>

         <div className='warning-figure'>
             
           <AlertTriangle />

        </div> 
           
            <div className='warningModalContainer'>
               
               {children}

            </div>



        </div>






    )


}


