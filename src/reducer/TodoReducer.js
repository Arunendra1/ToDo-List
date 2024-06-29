import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from '../actions/TodoActions';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [], // Initialize state from local storage
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const updatedAddTodos = [...state.todos, action.payload];
      localStorage.setItem('todos', JSON.stringify(updatedAddTodos));
      return {
        ...state,
        todos: updatedAddTodos,
      };
    case REMOVE_TODO:
      const updatedRemoveTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      localStorage.setItem('todos', JSON.stringify(updatedRemoveTodos));
      return {
        ...state,
        todos: updatedRemoveTodos,
      };
    case EDIT_TODO:
      const updatedEditTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, todo: action.payload.newTodo } : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedEditTodos));
      return {
        ...state,
        todos: updatedEditTodos,
      };
    default:
      return state;
  }
};

export default TodoReducer;
