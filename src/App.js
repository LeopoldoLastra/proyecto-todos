import React from 'react';
import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSerch } from './TodoSerch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import './App.css';

const defaultTodos = [
  {text:"Armar PPT balanzas", completed: false, key:0},
  {text:"Definir pruebá de campo", completed: false, key:1},
  {text:"Realizar operativo", completed: false, key:2}
]


function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [serchValue, setSerchValue] = React.useState('');


  const completedTodos = todos.filter(todo=>todo.completed ).length;
  const totalTodos = todos.length
  
  const serchedTodos = todos.filter((todo)=>{return todo.text.toLowerCase().includes(serchValue.toLocaleLowerCase()) })

  console.log("Estas buscando " + serchValue);

  const completeTodos = (key)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo=>todo.key == key);
    newTodos[todoIndex].completed = true
    setTodos(newTodos);
  }

  const deleteTodos = (key)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo=>todo.key == key);
    newTodos.splice(todoIndex,1)
    setTodos(newTodos);
  }
  

  return (
    <>
      
        <TodoCounter
        completed= {completedTodos}
        total = {totalTodos}
        />
        <TodoSerch
        serchValue={serchValue}
        setSerchValue={setSerchValue}
        />
        <TodoList>
          {serchedTodos.map(todo=>(
            <TodoItem 
            key={todo.key} 
            text={todo.text} 
            completed={todo.completed}
            onCompleted = {()=>completeTodos(todo.key)} 
            onDeleted = {()=>deleteTodos(todo.key)} />
          ))
          }

        </TodoList>
       
        <CreateTodoButton/>

    </>
  );
}

export default App;


