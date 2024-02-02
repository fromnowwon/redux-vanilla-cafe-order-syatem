// 초기 상태 정의
// => 주문이 없는 상태
const initialStateOrders = [];

// 리듀서 함수 정의
// => 점원의 역할 정의
const orderReducer = (state = initialStateOrders, action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      return [
        ...state,
        {
          id: state.length + 1,
          item: action.payload.item,
          quantity: action.payload.quantity,
        },
      ];
    case 'CANCEL_ORDER':
      return state.filter(order => order.id !== action.payload.orderId);
    default:
      return state;
  }
};

module.exports = {
  orderReducer,
};
