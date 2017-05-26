const detail = (state = {}, action = {}) => {
    switch (action.type) {
        case 'FETCH_DETAIL_SUCCESS':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export { detail };