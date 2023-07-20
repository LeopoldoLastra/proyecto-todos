import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){

    const {
        item:todos,
        saveItem:saveTodos,
        loading,
        error} = useLocalStorage('TODOS_V1', []);
        
      const [serchValue, setSerchValue] = React.useState('');
    
      const completedTodos = todos.filter(todo=>todo.completed ).length;
      const totalTodos = todos.length
      const serchedTodos = todos.filter((todo)=>{return todo.text.toLowerCase().includes(serchValue.toLocaleLowerCase()) })
     
       const completeTodos = (key)=>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo=>todo.key == key);
        newTodos[todoIndex].completed = true
        saveTodos(newTodos);
      }
    
      const deleteTodos = (key)=>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo=>todo.key == key);
        newTodos.splice(todoIndex,1)
        saveTodos(newTodos);
      }

    return (

        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            serchValue,
            setSerchValue,
            serchedTodos,
            completeTodos,
            deleteTodos
        }
            
        }>
            {children}
        </TodoContext.Provider>
        
    );
}

export {TodoContext, TodoProvider};