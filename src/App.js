import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './Components/TodoTemplate';
import TodoHead from './Components/TodoHead';
import TodoList from './Components/TodoList';
import TodoCreate from './Components/TodoCreate';
import { TodoProvider } from './TodoContext';




const GlobalStyle = createGlobalStyle`
  body{
    background:#e9ecef;
  }
`;

 

function App(){
  //  const localTodos = localStorage.TodoList;
  //  useEffect(() => {
  //    localStorage.getItem(localTodos);

  //  })
  return (
  
  <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
  </TodoProvider>
    
  )
}

export default App