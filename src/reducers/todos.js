import {
  TOGGLE_TODO,
  ADD_TODO ,
  REMOVE_TODO
} from '../actions/todos';

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case TOGGLE_TODO:
      return state.map((todo) => todo.id === action.id ?
        {...todo, checked: !todo.checked} : {...todo}
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}