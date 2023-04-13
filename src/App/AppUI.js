import React from 'react';
import { TaskContext } from '../TaskContext';
import TaskCounter from "../TaskCounter";
import TaskSearch from "../TaskSearch";
import { TaskList } from "../TaskList";
import { TaskItem } from "../TaskItem";
import { CreateTaskButton } from "../CreateTaskButton";
import { Modal } from "../Modal";
import { TaskForm } from '../TaskForm';

function AppUI(){
    const {
        error, 
        loading,
        searchedTask,
        completeTask,
        deleteTask,
        openModal,
        setOpenModal
    } = React.useContext(TaskContext);

    return (
        <React.Fragment>

            <TaskCounter />
        
            <TaskSearch />

            <TaskList>
                {error && <p>Tu página presento un error</p>}
                {loading && <p>Tu página esta cargando, por favor ten paciencia...</p>}
                {(!loading && !searchedTask.length) && <p>¡Crear tu primera tarea!</p>}

                {
                    searchedTask.map(task => (
                        <TaskItem 
                        key={task.text} 
                        text={task.text} 
                        status={task.completed}
                        onStatus = {()=>completeTask(task.text)}
                        onDelete = {()=>deleteTask(task.text)}
                        />
                    ))
                }
            </TaskList> 

            {!!openModal && (<Modal>
                <TaskForm />  
            </Modal>
            )}   
                
            <CreateTaskButton setOpenModal={setOpenModal} openModal={openModal}/>
        </React.Fragment>
    );
}

export { AppUI };