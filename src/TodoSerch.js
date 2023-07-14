import React from 'react'
import'./TodoSerch.css'

function TodoSerch(){

  const [serchValue, setSerchValue] = React.useState('');

  console.log("Estas buscando " + serchValue);

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