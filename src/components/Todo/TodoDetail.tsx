import React from 'react';
import { StoreContext } from '../../context/StoreContext';
import { Todo } from './Todo';
import styles from './Todo.module.css';

export const TodoDetail = (props: any) => {

    return <StoreContext.Consumer>
        {
            (state) => (
                <div className={styles.todoWrap}>
                    <Todo />
                </div>
            )
        }       
    </StoreContext.Consumer>
}