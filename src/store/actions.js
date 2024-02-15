const updateCart = (product) => {
  return {
    type: "update",
    payload: product,
  };
};

const increaseOrDecrease = (id, quantity) => {
  return {
    type: "increase/decrease",
    payload: id,
    value: quantity,
  };
};

const deleteItem = (id) => {
  return {
    type: "delete",
    payload: id,
  };
};

export default { updateCart, increaseOrDecrease, deleteItem };
