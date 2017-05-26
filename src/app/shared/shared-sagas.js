import { takeLatest } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import axios from 'axios';

function* fetchMLIdsAsync(){
    const idsRes = yield call(()=>axios.get('/ml-ids.json'));
    yield put({ type: 'FETCH_ML_IDS_SUCCESS', payload: idsRes.data });
    // yield put({ type: 'NEW_TODO_UPDATE', payload: '' });
}

function* fetchMLIds(){
    yield* takeLatest('FETCH_ML_IDS', fetchMLIdsAsync);
}

export { fetchMLIds };