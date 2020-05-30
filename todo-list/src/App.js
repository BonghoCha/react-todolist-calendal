import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import Form from './components/Form';

function App() {
  return (
   <TodoTemplate form={<Form/>}></TodoTemplate>
  );
}

export default App;