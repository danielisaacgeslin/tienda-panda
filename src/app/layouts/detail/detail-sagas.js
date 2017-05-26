import { takeLatest } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import axios from 'axios';

function* fetchDetailAsync(action){
    const detailRes = yield call(()=>axios.get(`https://api.mercadolibre.com/items/?id=${action.payload.id}`));
    yield put({ type: 'FETCH_DETAIL_SUCCESS', payload: detailRes.data });
}

function* fetchDetail(action){
    yield* takeLatest('FETCH_DETAIL', fetchDetailAsync);
}

export { fetchDetail };