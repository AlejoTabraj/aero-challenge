export const initialState = {
  products: [],
  user: '',
};

export const globalReducers = (state, action) => {
  const { type, payload } = action;
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
    default:
      return 0;
  }
};
