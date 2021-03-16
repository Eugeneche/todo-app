export type TodoItem = {
    id: string | null, 
    title: string | null
  }

export interface State {
    todosList: Array<TodoItem>;
    currentTodo: TodoItem;
  }