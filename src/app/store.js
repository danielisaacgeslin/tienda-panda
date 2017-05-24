import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import TodoListPack from './todo-list';

const reducers = combineReducers(Object.assign({}, TodoListPack.TodoListReducers));

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware, logger));

for (let saga in TodoListPack.TodoListSagas) sagaMiddleware.run(TodoListPack.TodoListSagas[saga]);

export default store;