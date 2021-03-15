import React from 'react';
import { TodoItem } from'../types'


export const StoreContext = React.createContext<Array<TodoItem>>([]);