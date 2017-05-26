const promotions = (state = { items: [] }, action = {}) => {
    switch (action.type) {
        case 'FETCH_PROMOTIONS_SUCCESS':
            return Object.assign({}, state, { items: action.payload });
        default:
            return state;
    }
}

export { promotions };