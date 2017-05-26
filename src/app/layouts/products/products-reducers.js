const products = (state = { items: [] }, action = {}) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return Object.assign({}, state, { items: action.payload });
        default:
            return state;
    }
}

export { products };