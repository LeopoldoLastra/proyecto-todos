import './TodoItem.css';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';



function TodoItem({text, completed, onCompleted, onDeleted }){
    return(
        <li className="TodoItem">


        {/* <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick = {onCompleted }>
          V
        </span> */}

        <CompleteIcon
        completed={completed}
        onCompleted={onCompleted}
        />


        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
          {text}
        </p>

        <DeleteIcon
        onDeleted = {onDeleted}
        />
        
        {/* <span className="Icon Icon-delete"
        onClick = {onDeleted}>
          X
        </span> */}

      </li>


    )
  };

  
  export {TodoItem};