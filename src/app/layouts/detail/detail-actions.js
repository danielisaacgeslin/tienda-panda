const fetchDetail = id => {
    return {
        type: 'FETCH_DETAIL',
        payload: { id }
    };
};

const fetchDetailSuccess = detail => {
    return {
        type: 'FETCH_DETAIL_SUCCESS',
        payload: detail
    };
};

export { fetchDetail, fetchDetailSuccess };