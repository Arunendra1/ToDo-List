// Taskinput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Taskinput.css';
import { AddTodoAction } from '../actions/TodoActions';

function Taskinput() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
    setTodo('');
  };

  const navigateToTaskList = () => {
    navigate('/tasklist');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">GO</button>
      </form>
      <button onClick={navigateToTaskList} className="view-tasks-button">
        View Tasks
      </button>
    </div>
  );
}

export default Taskinput;
