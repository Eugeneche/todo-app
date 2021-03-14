import React from 'react';
import styles from './App.module.css';
import axios from 'axios';
import { Todo } from './components/Todo/Todo';


type TodoItem = {
  id: string, 
  title: string
}

function App() {
  const [state, setState] = React.useState<Array<TodoItem>>([]);

  React.useEffect(() => {
    function getUrl() {
      return 'https://jsonplaceholder.typicode.com/todos?userId=1';
    }
    (async () => {
      const awaitedTodos = await axios.get(getUrl());
      const todos = await awaitedTodos.data.map( (el: any) => {
        return {id: el.id.toString(), title: el.title}
      });
      setState([...state, ...todos]);
    })();

    //Added a second parameter to interrupt the call to useEffect after every render.
    //Since the function getUrl is placed in the effect, 
    //and we don't use outside dependencies, it is permissible to use an empty array.
  }, [])

  return (
    <div className={styles.todoList}>
      {state.map((todo) => (
        //added uniq keys in the each daughter element       
         <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;
