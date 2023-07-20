import React from "react";

import { TodoCounter } from '../TodoCounter';
import { TodoSerch } from '../TodoSerch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoLoading } from "../TodoLoading";
import { TodoErrors } from "../TodoErrors";
import { EmptyTodos } from "../EmptyTodos";
import { TodoContext } from "../TodoContext";

function AppUI(){

const {loading,
    error,
    serchedTodos,
    completeTodos,
    deleteTodos} = React.useContext(TodoContext)

    return(
        <>
        <TodoCounter/>
        <TodoSerch/>
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

            );}
                
  

export {AppUI}