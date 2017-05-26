const secondHand = (state = { items: [] }, action = {}) => {
    switch (action.type) {
        case 'FETCH_SECOND_HAND_SUCCESS':
            return Object.assign({}, state, { items: action.payload });
        default:
            return state;
    }
}

export { secondHand };