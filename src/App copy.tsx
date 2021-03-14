import React from 'react';
import axios from 'axios';
import Todo from './components/Todo/Todo';


// rework this into regular api call, feel free to use any open api
/* const todos = (): Promise<{id: string, title: string}[]> => new Promise(() => {
  
  return axios.get('https://jsonplaceholder.typicode.com/todos?userId=2')
    //.then((response: any) => response.json())
    //.then((json: any) => console.log(json));
    .then((response: any) => response.data)
    .then((response) => response.map( (el: any) => {
      return {id: el.id.toString(), title: el.title}
    }))
    .then((response) => console.log(response))
  }); */

function App() {
  const [state, setState] = React.useState<{ id: string, title: string }[]>([]);

  React.useEffect(() => {
    (async () => {
      //var were changed to let
      const awaitedTodos = await axios.get('https://jsonplaceholder.typicode.com/todos?userId=2')
      //.then((response: any) => response.json())
      //.then((json: any) => console.log(json));
      .then((response: any) => response.data)
      .then((response) => response.map( (el: any) => {
        return {id: el.id.toString(), title: el.title}
      }))
      .then((response) => console.log(response));
      //console.log(todos())
/*       for (let i = 0; i < awaitedTodos.length; i++) {
        //use rest operator for awaitedTodos to add all todos instead single todo
        
      } */
      setState([...state]);
      console.log(state)
    })();
    console.log(state)
    //Added a second parameter to interrupt the call to useEffect after every render.
    //Since the function is placed in the effect, 
    //and we don't use outside dependencies, it is permissible to use an empty array.
  }, [])

  return (
    <div>
      {state.map((todo) => (
        //added uniq keys in the each daughter element
        
         <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;
