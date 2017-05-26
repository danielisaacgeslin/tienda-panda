import { takeLatest } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import axios from 'axios';

function* fetchsecondHandAsync(){
    const idsRes = yield call(()=>axios.get('/ml-ids.json'));
    yield put({ type: 'FETCH_ML_IDS_SUCCESS', payload: idsRes.data });
    const secondHandRes = yield call(()=>axios.get(`https://api.mercadolibre.com/items/?ids=${idsRes.data.secondHand}`));
    yield put({ type: 'FETCH_SECOND_HAND_SUCCESS', payload: secondHandRes.data });
}

function* fetchsecondHand(){
    yield* takeLatest('FETCH_SECOND_HAND', fetchsecondHandAsync);
}

export { fetchsecondHand };