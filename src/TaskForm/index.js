import React from "react";

function TaskForm() {
    return (
        <form>
            <label>Descripción</label>
            <textarea placeholder="Hacer mercado"/>
        
            <div>
                <button>Cancelar</button>
                <button>Añadir</button>
            </div>
        </form>
    )
}

export {TaskForm};