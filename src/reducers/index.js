export default (state, action) => {
  switch (action.type) {
    case 'MINUS_AMOUNT': {
      return {
        ...state,
        totalAmount: action.value
      };
    }

    case 'ADD_AMOUNT': {
      return {
        ...state,
        totalAmount: action.value
      };
    }
    case 'CHARITY_AMOUNT': {
      return {
        ...state,
        totalAmount: action.value
      };
    }
    default:
      return state;
  }
};
