import React from 'react';
import { NavLink } from 'react-router-dom';
import { Todo } from './Todo';
import { StoreContext } from '../../context/StoreContext';
import { TodoItem } from '../../types';
import styles from './Todo.module.css';
  
export const TodoList = () => {

/*     const [state, setState] = React.useState<Array<TodoItem>>([]);

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
}, []) */
    
  return <StoreContext.Consumer> 
    {
      (state) => (
        <div className={styles.todoWrap}>
          {state.map((todo: TodoItem) => (
            //added uniq keys in the each daughter element       
            <NavLink key={todo.id} to='/detail'>
              <Todo id={todo.id} title={todo.title} />
            </NavLink>
          ))}
        </div>
        )
      }       
    </StoreContext.Consumer>
}
