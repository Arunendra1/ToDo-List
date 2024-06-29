import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveTodoAction, EditTodoAction } from '../actions/TodoActions';
import { useNavigate } from 'react-router-dom';
import './TaskList.css';

function TaskList() {
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;
  const navigate = useNavigate();

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  const editHandler = (id, newTodo) => {
    dispatch(EditTodoAction(id, newTodo));
  };

  return (
    <div>
      <h3>Task List</h3>
      <ul className="allTodo">
        {todos &&
          todos.map((t) => (
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
          ))}
      </ul>
      <button onClick={() => navigate('/')}>Back to Task Input</button> 
    </div>
  );
}

export default TaskList;
