import React from 'react';
import { NavLink } from 'react-router-dom';
import { Todo } from './Todo';
import { StoreContext } from '../../context/StoreContext';
import { TodoItem } from '../../types';
import styles from './Todo.module.css';
  
export const TodoList = (props: any) => {
    
  return <StoreContext.Consumer> 
    {
      (state) => (
        <div className={styles.todoWrap}>
          {state.todosList.map((todo: TodoItem) => (
            //added uniq keys in the each daughter element       
            <NavLink key={todo.id} to='/detail' onClick={ () => props.setCurrentTodo(todo.id, todo.title)} >
              <Todo id={todo.id} title={todo.title} />
            </NavLink>
          ))}
        </div>
        )
      }       
    </StoreContext.Consumer>
}
