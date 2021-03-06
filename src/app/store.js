import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import * as BasePack from './layouts/base';
import * as ProductsPack from './layouts/products';
import * as PromotionsPack from './layouts/promotions';
import * as SecondHandPack from './layouts/second-hand';
import * as DetailPack from './layouts/detail';

const reducers = combineReducers(Object.assign(
    {},
    BasePack.BaseReducers,
    ProductsPack.ProductsReducers,
    PromotionsPack.PromotionsReducers,
    SecondHandPack.SecondHandReducers,
    DetailPack.DetailReducers
));

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware, logger));

for (let saga in BasePack.BaseSagas) sagaMiddleware.run(BasePack.BaseSagas[saga]);
for (let saga in ProductsPack.ProductsSagas) sagaMiddleware.run(ProductsPack.ProductsSagas[saga]);
for (let saga in PromotionsPack.PromotionsSagas) sagaMiddleware.run(PromotionsPack.PromotionsSagas[saga]);
for (let saga in SecondHandPack.SecondHandSagas) sagaMiddleware.run(SecondHandPack.SecondHandSagas[saga]);
for (let saga in DetailPack.DetailSagas) sagaMiddleware.run(DetailPack.DetailSagas[saga]);

export { store, sagaMiddleware };