import React from "react";
import "./TaskItem.css";

function TaskItem(props){
    return(
        <li className="taskItem">
            <span 
                className={` ${props.status && 'active'}`}
                onClick={props.onStatus}
            >  
                √ 
            </span>
            <p className={`${props.status && 'active'}`}>{props.text}</p>
            <span 
                className="false"
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    )
}

export {TaskItem};