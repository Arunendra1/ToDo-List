export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';


// Action to add a todo
export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const newTodos = [...todos, todo];
  localStorage.setItem('todos', JSON.stringify(newTodos));// Save to local storage

  dispatch({
    type: ADD_TODO,
    payload: todo,
  });
};
// Action to remove a todo
export const RemoveTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const newTodos = todos.filter((t) => t.id !== todo.id);
  localStorage.setItem('todos', JSON.stringify(newTodos));// Update local storage

  dispatch({
    type: REMOVE_TODO,
    payload: todo,
  });
};
// Action to edit a todo
export const EditTodoAction = (id, newTodo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const newTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, todo: newTodo } : todo
  );
  localStorage.setItem('todos', JSON.stringify(newTodos));// Update local storage

  dispatch({
    type: EDIT_TODO,
    payload: { id, newTodo },
  });
};
