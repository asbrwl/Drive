import React from "react";
import cross from "./cross.png";


  



const Modal = ({ isOpen, closeModal }) => {

    //get time
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = hours + ":" + minutes;
   
    return (
        
            <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
           
                
           
                
                
                <div className="modal-content">
                <img src={cross } alt="cross" className="close-button" onClick={closeModal}/>  
        </div>
                
              {/* Your modal content goes here */}
            </div>
          
    )
       
} 

export default Modal;
  