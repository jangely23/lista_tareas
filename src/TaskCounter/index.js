import React from "react";
import './TaskCounter.css';
import { TaskContext } from "../TaskContext";

function TaskCounter(){
    const {completedTask, totalTask} = React.useContext(TaskContext);
    return(
        <>
            <h1 className="title">Lista de Tareas</h1>
            <h2 className="titleCounter">Has completado {completedTask} de {totalTask} Tareas</h2>
        </>
    )
}

export default TaskCounter;