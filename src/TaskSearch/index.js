import React from "react";
import "./TaskSearch.css";
import { TaskContext } from "../TaskContext";

function TaskSearch(){

    const {searchValue, setSearchValue} = React.useContext(TaskContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }
    return(
        <input 
            placeholder="Estudiar" 
            className="taskSearch"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )
}

export default TaskSearch;