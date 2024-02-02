// 액션 타입 정의
// => 요구 사항 정의
const ADD_ORDER = 'ADD_ORDER';
const CANCEL_ORDER = 'CANCEL_ORDER';

// 액션 생성 함수 정의
// => 요구 사항에 대한 동작
const addOrder = (item, quantity) => {
  return {
    type: ADD_ORDER,
    payload: {
      item,
      quantity,
    },
  };
};

const cancelOrder = (orderId) => {
  return {
    type: CANCEL_ORDER,
    payload: {
      orderId,
    },
  };
};

module.exports = {
  addOrder,
  cancelOrder,
};
