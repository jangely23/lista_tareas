import React from "react";
import "./TaskList.css";

function TaskList(props){
    return(
        <section className="taskList">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TaskList};