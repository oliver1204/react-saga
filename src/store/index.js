import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = applyMiddleware(sagaMiddleware)(createStore)(reducers);

export default store;
