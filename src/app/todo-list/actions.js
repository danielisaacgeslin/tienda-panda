const fetchTodos = () => {
    return {
        type: 'FETCH_TODOS',
        payload: null
    };
};

const addTodo = text => {
    /** @todo ADD_TODO_FAIL */
    const type = text ? 'ADD_TODO' : 'ADD_TODO_FAIL';
    return {
        type: type,
        payload: { text }
    };
};

const updateNewTodo = text => {
    return {
        type: 'NEW_TODO_UPDATE',
        payload: text
    };
};

export default { fetchTodos, addTodo, updateNewTodo };