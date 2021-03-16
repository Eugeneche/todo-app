import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import styles from './Todo.module.css';

export const TodoDetail = () => {

    const state = useContext(StoreContext);

    return (
        <div className={styles.todoWrap}>
            <div className={styles.todoItem}>
                <div className={styles.todoText}>Todo ID: {state.currentTodo.id}</div>
                <div className={styles.todoText}>Todo sublect: {state.currentTodo.title}</div>
            </div>
        </div>
    )
}