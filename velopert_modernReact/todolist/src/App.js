import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoCreate from './compo/TodoCreate';
import TodoHead from './compo/TodoHead';
import TodoList from './compo/TodoList';
import TodoTemplate from './compo/TodoTemplate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function App(){
  return(
    <TodoProvider>
    <GlobalStyle/>
    <TodoTemplate> 
      <TodoHead/>
      <TodoList/>
      <TodoCreate/>
    </TodoTemplate>
    </TodoProvider>
  )
}

export default App;