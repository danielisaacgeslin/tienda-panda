import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import * as SharedPack from './shared';
import * as ProductsPack from './layouts/products';

const reducers = combineReducers(Object.assign(
    {},
    SharedPack.SharedReducers,
    ProductsPack.ProductsReducers
));

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware, logger));

for (let saga in SharedPack.SharedSagas) sagaMiddleware.run(SharedPack.SharedSagas[saga]);
for (let saga in ProductsPack.ProductsSagas) sagaMiddleware.run(ProductsPack.ProductsSagas[saga]);

export { store };