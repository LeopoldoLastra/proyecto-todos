import React from 'react';

import { AppUI } from './AppUI';

import './App.css';
import { useLocalStorage } from './useLocalStorage';

function App() {
 
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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
    <AppUI 
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    serchValue={serchValue}
    setSerchValue={setSerchValue}
    serchedTodos={serchedTodos}
    completeTodos={completeTodos}
    deleteTodos={deleteTodos}
    />
  );
}
export default App;


