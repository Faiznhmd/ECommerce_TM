export const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //calculate items price
  const itemsPrice = state.cartItems.reduce(
    (acc, item) => acc + (item.price * 100 * item.qty) / 100,
    0
  );
  state.itemsPrice = addDecimal(itemsPrice);

  //cal shipping price
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  state.shippingPrice = addDecimal(shippingPrice);

  //cal tax price
  const taxPrice = 0.15 * itemsPrice;
  state.taxPrice = addDecimal(taxPrice);

  //cal total price
  // state.totalPrice = addDecimal(
  //   Number(state.itemsPrice) +
  //     Number(state.shippingPrice) +
  //     Number(state.taxprice)
  // );

  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  // Calculate the total price
  state.totalPrice = addDecimal(totalPrice);

  localStorage.setItem('cart', JSON.stringify(state));
  return state;
};
