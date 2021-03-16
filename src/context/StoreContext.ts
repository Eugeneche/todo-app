import React from 'react';
import { State, TodoItem } from'../types'


export const StoreContext = React.createContext<State>({
    todosList: [],
    currentTodo: {} as TodoItem
});