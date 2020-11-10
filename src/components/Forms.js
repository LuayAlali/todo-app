import React from 'react';
import TodoList from './TodoList';


const Form = ({setInputText, setTodos, inputText, todos,setStatus}) => {
  
  const inputTextHandler = (e) => {
      setInputText(e.target.value);
  };
  const submitTodoHandeler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {text: inputText, 
        completed: false,
        id: Math.random() * 1000
      }
    ]);
    setInputText('');
  };


  const statusHandeler = (e) => {
    setStatus(e.target.value)
  };


    return(
        <form>

      <input value={inputText} 
      onChange={inputTextHandler}
       type="text" className="todo-input" />

      <button onClick={submitTodoHandeler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select onChange={statusHandeler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form;
