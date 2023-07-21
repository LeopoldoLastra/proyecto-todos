import './TodoItem.css';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';



function TodoItem({text, completed, onCompleted, onDeleted }){
    return(
        <li className="TodoItem">


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
       

      </li>


    )
  };

  
  export {TodoItem};