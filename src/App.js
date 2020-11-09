import React from 'react';
import './App.css';
// Importing components
import Form from './components/Forms';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
    <header>
     <h1>Luay's Todo List</h1>
     </header>
     <Form />
     <TodoList />
    </div>
  );
}

export default App;
