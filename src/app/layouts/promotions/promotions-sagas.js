import { takeLatest } from 'redux-saga';
import { call, put, take, select } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPromotionsAsync(){
    const mlIds = yield select(state => state.mlIds);
    const promotionsRes = yield call(()=>axios.get(`https://api.mercadolibre.com/items/?ids=${mlIds.promotions}`));
    yield put({ type: 'FETCH_PROMOTIONS_SUCCESS', payload: promotionsRes.data });
}

function* fetchPromotions(){
    yield* takeLatest('FETCH_PROMOTIONS', fetchPromotionsAsync);
}

export { fetchPromotions };