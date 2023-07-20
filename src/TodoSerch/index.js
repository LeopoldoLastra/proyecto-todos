import React from 'react'
import'./TodoSerch.css'
import { TodoContext } from '../TodoContext';

function TodoSerch(){

      return(

        <TodoContext.Consumer>
          {({
            serchValue,
            setSerchValue,
          })=>(

            <input 
            className="TodoSearch" 
            placeholder="Buscar Todo"
            value={serchValue}
            onChange={(event)=>{
              setSerchValue(event.target.value)
              
             }}
          />
      )}
            

        </TodoContext.Consumer>

      
    )
  };

  
  export {TodoSerch};