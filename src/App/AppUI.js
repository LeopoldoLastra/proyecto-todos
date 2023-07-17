import React from "react";

import { TodoCounter } from '../TodoCounter';
import { TodoSerch } from '../TodoSerch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    completedTodos,
    totalTodos,
    serchValue,
    setSerchValue,
    serchedTodos,
    completeTodos,
    deleteTodos
}){
    return(
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
    )
}

export {AppUI}