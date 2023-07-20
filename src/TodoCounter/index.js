import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

function TodoCounter(){

const {completedTodos:completed,
  totalTodos:total} = React.useContext(TodoContext);

    return(
     <>
     <h1 className='TodoCounter'>Has completado {completed} de {total} Todos</h1>
     </>
              
    )
  };

  
  export {TodoCounter};