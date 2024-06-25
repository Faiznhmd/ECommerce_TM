export const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //calculate items price
  state.itemsPrice = addDecimal(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  //cal shipping price
  state.shippingPrice = addDecimal(state.itemsPrice > 100 ? 0 : 10);

  //cal tax price
  state.taxprice = addDecimal(Number((0.15 * state.itemsPrice).toFixed(2)));

  //cal total price
  state.totalPrice = addDecimal(
    Number(state.itemsPrice) +
      Number(state.shippingPrice) +
      Number(state.taxprice)
  );
  localStorage.setItem('cart', JSON.stringify(state));
  return state;
};
