import { takeLatest } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import axios from 'axios';

function* fetchProductsAsync() {
    const idsRes = yield call(() => axios.get('/ml-ids.json'));
    yield put({ type: 'FETCH_ML_IDS_SUCCESS', payload: idsRes.data });
    const productsRes = yield call(() => axios.get(`https://api.mercadolibre.com/items/?ids=${idsRes.data.products}`));
    yield put({ type: 'FETCH_PRODUCTS_SUCCESS', payload: productsRes.data });
}

function* fetchProducts() {
    yield* takeLatest('FETCH_PRODUCTS', fetchProductsAsync);
}

export { fetchProducts };