import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSerch } from './TodoSerch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import './App.css';

const defaultTodos = [
  {text:"Armar PPT balanzas", completed: true, key:0},
  {text:"Definir prueba de campo", completed: true, key:1},
  {text:"Realizar operativo", completed: false, key:2}
]


function App() {
  return (
    <>
      
        <TodoCounter
        completed={7}
        total={18}
        />
        <TodoSerch/>
        <TodoList>
          {defaultTodos.map(todo=>(
            <TodoItem key={todo.key} text={todo.text} completed={todo.completed} />

          ))
          }

        </TodoList>
       
        <CreateTodoButton/>

    </>
  );
}

export default App;


