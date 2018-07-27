import {
  TOGGLE_TODO
} from '../actions/todos';

const defaultState = [

];

export default function todos(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo];
    case TOGGLE_TODO:
      return state.map((todo) => todo.id === action.id ?
        {...todo, checked: !todo.checked} : {...todo}
      );
    default:
      return state;
  }
};