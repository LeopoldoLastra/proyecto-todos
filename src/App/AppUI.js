import React from "react";

import { TodoCounter } from '../TodoCounter';
import { TodoSerch } from '../TodoSerch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoLoading } from "../TodoLoading";
import { TodoErrors } from "../TodoErrors";
import { EmptyTodos } from "../EmptyTodos";


function AppUI({
    loading,
    error,
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
        {loading && <TodoLoading/>}
        {error && <TodoErrors/>}
        {(!loading && serchedTodos.length===0)  && <EmptyTodos/>}

        

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