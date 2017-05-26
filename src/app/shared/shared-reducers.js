const mlIds = (state = {}, action = {}) => {
    switch (action.type) {
        case 'FETCH_ML_IDS_SUCCESS':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export { mlIds };