import { takeLatest } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPromotionsAsync(){
    const idsRes = yield call(()=>axios.get('/ml-ids.json'));
    yield put({ type: 'FETCH_ML_IDS_SUCCESS', payload: idsRes.data });
    const promotionsRes = yield call(()=>axios.get(`https://api.mercadolibre.com/items/?ids=${idsRes.data.promotions}`));
    yield put({ type: 'FETCH_PROMOTIONS_SUCCESS', payload: promotionsRes.data });
}

function* fetchPromotions(){
    yield* takeLatest('FETCH_PROMOTIONS', fetchPromotionsAsync);
}

export { fetchPromotions };