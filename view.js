// view.js
const store = require('./store');
const { addOrder, cancelOrder } = require('./actions');

// store.subscribe(() => {
//   console.log('현재 주문 목록: ', store.getState());
// });

// 주문 실행
store.dispatch(addOrder('아메리카노', 2));
store.dispatch(cancelOrder(1)); // 주문 ID 넘기기
store.dispatch(addOrder('카라멜 마키아또', 3));
store.dispatch(cancelOrder(2));
