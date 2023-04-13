import React, { createContext } from "react";
import { useLocalStorage} from './useLocalStorage.js';

const TaskContext = createContext();

function TaskProvider(props){

    const {item: taskList, saveItem: saveTask, loading, error} = useLocalStorage('TASK_V1', []);

    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    const completedTask =taskList.filter(task => task.completed).length;
    const totalTask = taskList.length;

    let searchedTask= [];

    if(!searchValue.length >= 1){
        searchedTask = taskList;
    }else{
        searchedTask = taskList.filter(task => {
        const textTask =  task.text.toLowerCase();
        const textSearch =  searchValue.toLowerCase().trim();

        return textTask.includes(textSearch);
        });
    }
    
    //Actualiza la propiedad completed con el valor true
    const completeTask = (text) => {
        const taskIndex = taskList.findIndex(task => task.text === text);

        const newItemList = [...taskList]

        if(newItemList[taskIndex].completed === false){
        newItemList[taskIndex].completed = true;
        }else{
        newItemList[taskIndex].completed = false;
        }

        saveTask(newItemList);
    }

    //Borrar el item de la lista de tareas
    const deleteTask = (text) => {
        const taskIndex = taskList.findIndex(task => task.text === text);

        const newItemList = [...taskList];
        
        newItemList.splice(taskIndex, 1);
        
        saveTask(newItemList);
    }


    return(
        <TaskContext.Provider value={
            {
                error, 
                loading,
                completedTask, 
                totalTask, 
                searchValue, 
                setSearchValue,
                searchedTask,
                completeTask,
                deleteTask,
                openModal,
                setOpenModal
            }
        }>
            {props.children}
        </TaskContext.Provider>
    )
}

export { TaskContext, TaskProvider};