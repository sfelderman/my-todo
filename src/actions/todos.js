export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO';

let todoIds = 0;

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export function addTodo(text) {
    return {
        type: ADD_TODO,
        todo: {
            checked: false,
            text,
            id: todoIds++
        }
    }
}