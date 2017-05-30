import { takeLatest } from 'redux-saga';
import { call, put, take, select } from 'redux-saga/effects';
import axios from 'axios';

function* fetchProductsAsync() {
    const mlIds = yield select(state => state.mlIds);
    const productsRes = yield call(() => axios.get(`https://api.mercadolibre.com/items/?ids=${mlIds.products}`));
    yield put({ type: 'FETCH_PRODUCTS_SUCCESS', payload: productsRes.data });
}

function* fetchProducts() {
    yield* takeLatest('FETCH_PRODUCTS', fetchProductsAsync);
}

export { fetchProducts };