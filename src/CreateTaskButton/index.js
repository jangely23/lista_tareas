import React from "react";
import "./CreateTaskButton.css";

function CreateTaskButton(props){
    const onClickButton =  ()=>{
       props.setOpenModal(!props.openModal);
    };

    return(
        <button 
            className={!props.openModal?'taskButton taskButton-normal':'taskButton taskButton-modal'}
            onClick={onClickButton}
        >
            {!props.openModal?'Agregar':'x'}
        
        </button>
    )
}

export {CreateTaskButton};