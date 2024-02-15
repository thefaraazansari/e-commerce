const initialState = [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "update":
      const product = { ...action.payload, quantity: 1 };
      return state.find((item) => item.id === product.id)
        ? state
        : [...state, product];

    case "increase/decrease":
      state.filter((item) => item.id === action.payload)[0].quantity =
        action.value;
      return state;

    case "delete":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default cart;
