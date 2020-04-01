import store from '../store/index';
export const setAmount = value => {
  return {
    type: 'MINUS_AMOUNT',
    value: store.getState().totalAmount - value
  };
};

export const charityAmount = () => {
  return {
    type: 'CHARITY_AMOUNT',
    value: 0
  };
};

export const addAmount = value => {
  return {
    type: 'ADD_AMOUNT',
    value: Number(store.getState().totalAmount) + Number(value)
  };
};
