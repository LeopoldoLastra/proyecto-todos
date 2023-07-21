import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm(){

    const{
        addTodo,
        setOpenModal,
    }= React.useContext(TodoContext)

const [newTodoValue, setNewTodoValue] = React.useState('')

const onSubmit = (event) =>{
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);
}

const onCancel = () =>{
    setOpenModal(false);
}

const onChange = (event)=>{
    setNewTodoValue(event.target.value)
}


    return(
        <>

        <form onSubmit ={onSubmit}>
            <label>Nuevo Todo</label>

            <textarea
            placeholder="Escribe tu Todo"
            value={newTodoValue}
            onChange={onChange}
            />

            <div className="TodoForm-buttonContainer">

                <button 
                className='TodoForm-button Todoform-button--cancel' 
                type='button'
                onClick={onCancel}
                >Cancel
                </button>

                <button 
                className='TodoForm-button Todoform-button--add' 
                type='submit'
                >Add</button>
            </div>
            </form>
        

        </>
    )
};

export {TodoForm};