import React from 'react'
import'./TodoSerch.css'

function TodoSerch({serchValue, setSerchValue}){

      return(
      <input 
      className="TodoSearch" 
      placeholder="Buscar Todo"
      value={serchValue}
      onChange={(event)=>{
        setSerchValue(event.target.value)
        
      }}
      />
    )
  };

  
  export {TodoSerch};