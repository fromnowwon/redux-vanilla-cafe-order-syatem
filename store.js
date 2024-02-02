const redux = require('redux');
const reduxLogger = require('redux-logger');
const { createStore, applyMiddleware, combineReducers } = redux;
const { createLogger } = reduxLogger;
const { orderReducer } = require('./reducers');

const logger = createLogger();
const rootReducer = combineReducers({
  order: orderReducer,
});

// orderReducer를 사용하는 스토어 생성
// => 담당 점원의 주문 목록 생성
const store = createStore(rootReducer, applyMiddleware(logger));

module.exports = store;
