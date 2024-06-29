const TodoReducer=(state={todos:[]},action)=>{
    switch(action.type){
        case 'ADD_TODO':
              return {todos:action.payload};

        case 'REMOVE_TODO':
        return {todos:action.payload};

        case 'EDIT_TODO':
            return {
              ...state,
              todos: state.todos.map(todo =>
                todo.id === action.payload.id ? { ...todo, todo: action.payload.newTodo } : todo
              )
            };

        default:
            return state;
    }
}
export default TodoReducer;