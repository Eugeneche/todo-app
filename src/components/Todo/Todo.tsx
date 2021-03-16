import React from 'react';
import styles from './Todo.module.css';

export const Todo = (props: any) => {

	return (
		<div className={styles.todoItem}>
			<div className={styles.todoText}>{props.title}</div>
		</div>
	);
}

export const MemoizedTodo = React.memo(Todo); 

/* shouldComponentUpdate refactoring:

shouldComponentUpdate(nextProps, nextState) {
	return nextProps !== this.props || nextState !== this.state //this expression will return true or false
} */