import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveTodoAction, EditTodoAction } from '../actions/TodoActions';
import { useNavigate } from 'react-router-dom';
import './TaskList.css';

function TaskList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.Todo.todos); // Get todos from Redux store
  const navigate = useNavigate();

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));// Dispatch remove todo action
  };

  const editHandler = (id, newTodo) => {
    dispatch(EditTodoAction(id, newTodo));// Dispatch edit todo action
  };

  return (
    <div>
      <ul className="allTodo">
        {todos && todos.length > 0 ? todos.map((t) => (
          <li key={t.id} className="singleTodo">
            <span className="todoText">{t.todo}</span>
            <button onClick={() => removeHandler(t)}>Delete</button>
            <button
              onClick={() => {
                const newTodo = prompt('Edit todo:', t.todo);
                if (newTodo) {
                  editHandler(t.id, newTodo);
                }
              }}
            >
              Edit
            </button>
          </li>
        )) : (
          <li>No todos available</li>
        )}
      </ul>
      <button onClick={() => navigate('/')}>Back to Task Input</button> {/* Navigate to Taskinput */}
    </div>
  );
}

export default TaskList;
