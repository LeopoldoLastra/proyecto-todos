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
import { TodoForm } from "../TodoForm";

import { Modal } from "../Modal";

function AppUI(){

const {loading,
    error,
    serchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal} = React.useContext(TodoContext)

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
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onCompleted = {()=>completeTodos(todo.key)} 
                        onDeleted = {()=>deleteTodos(todo.key)} />
                    ))
                    }
                </TodoList>           
        <CreateTodoButton setOpenModal={setOpenModal}/>

        {openModal && (
            <Modal>
                <TodoForm/>
            </Modal>
        )}
    </>

            );}
                
  

export {AppUI}