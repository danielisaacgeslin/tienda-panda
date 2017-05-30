import { takeLatest } from 'redux-saga';
import { call, put, take, select } from 'redux-saga/effects';
import axios from 'axios';

function* fetchsecondHandAsync() {
    const mlIds = yield select(state => state.mlIds);
    const secondHandRes = yield call(() => axios.get(`https://api.mercadolibre.com/items/?ids=${mlIds.secondHand}`));
    yield put({ type: 'FETCH_SECOND_HAND_SUCCESS', payload: secondHandRes.data });
}

function* fetchsecondHand() {
    yield* takeLatest('FETCH_SECOND_HAND', fetchsecondHandAsync);
}

export { fetchsecondHand };