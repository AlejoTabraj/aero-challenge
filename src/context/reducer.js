export const initialState = {
  products: [],
  user: '',
};

export const globalReducers = (state, action) => {
  const { type, payload } = action;
  console.log('ooo', type,payload)
  switch (type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: payload
      };
    case "SET_USER":
      return {
        ...state,
        user: payload
      };
    case "SET_USER_POINTS":
      return {
        ...state,
        user: {...state.user, points: +state.user.points + +payload}
      };
    case "SET_POINTS_AFTER_BUY":
      return {
        ...state,
        user: {...state.user, points: +state.user.points - +payload}
      };
    default:
      return 0;
  }
};
