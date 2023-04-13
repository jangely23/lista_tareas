import React from "react";

function useLocalStorage(itemName, initialValue) {

    // Usamos el hook de estado 
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                // Obtenemos la informacion en la DB del navegador
                const localStorageItem = localStorage.getItem(itemName);
                let defaultItem;

                // Verificamos si ya existia si no se crea
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    defaultItem = initialValue;
                } else {
                    defaultItem = JSON.parse(localStorageItem);
                }

                setItem(defaultItem);
                setLoading(false);

            } catch (error) {
                setError(error);
            }
        }, 3600);
    });


    // Actualiza los datos del localStorage y el estado de la interfaz
    const saveItem = (newItem) => {
        try {
            const stringifiedTask = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedTask);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }

    }

    return {
        item,
        saveItem,
        loading,
        error,
    }

}

export { useLocalStorage }