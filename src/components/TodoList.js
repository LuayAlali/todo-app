import React from 'react';
// import components
import Todo from './Todo';

const TodoList = ({ todos, setTodos}) => {
  // Events
  
  return(
        <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo 
              text={todo.text}
              key={todo.id}
              todo={todo}
              setTodos={setTodos}
              todos={todos}
            />
          ))}
        </ul>
      </div>
    );
}

export default TodoList;