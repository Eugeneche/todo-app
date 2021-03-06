import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { TodoList } from './components/Todo/TodoList';
import { TodoDetail } from './components/Todo/TodoDetail';
import { StoreContext } from './context/StoreContext';
import { State } from './types';


function App() {

  const [state, setState] = React.useState<State>({
    todosList: [],
    currentTodo: {
      id: null, 
      title: null
    }
  });

  React.useEffect(() => {
    function getUrl() {
      return 'https://jsonplaceholder.typicode.com/todos?userId=1';
    }
    (async () => {
      const awaitedTodos = await axios.get(getUrl());
      const todos = await awaitedTodos.data.map( (el: any) => {
        return {id: el.id.toString(), title: el.title}
      });
      setState({...state, todosList: [...todos]})
    })();

    //Added a second parameter to interrupt the call to useEffect after every render.
    //Since the function getUrl is placed in the effect, 
    //and we don't use outside dependencies, it is permissible to use an empty array.
  }, []);

  const setCurrentTodo = (id: string, title: string) => {
    setState({...state, currentTodo: {id: id, title: title}})
  }

  return (
    <StoreContext.Provider value={state}>
      <div className={'App'}>
        <Switch>
          <Route path='/detail' render={() => <TodoDetail />} />
          <Route path='/' render={() => <TodoList setCurrentTodo={setCurrentTodo} />} />
        </Switch>         
      </div>
    </StoreContext.Provider>
  );
}

export default App;
