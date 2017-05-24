export const todos = (state = [], action = {}) => {
    switch (action.type) {
        case 'FETCH_TODOS_SUCCESS':
            return state.concat(action.payload);
        case 'ADD_TODO_SUCCESS':
            return state.concat(action.payload);
        default:
            return state;
    }
}

export const newTodo = (state = '', action = {}) => {
    switch (action.type) {
        case 'NEW_TODO_UPDATE':
            return action.payload;
        default:
            return state;
    }
}

export default { todos, newTodo };