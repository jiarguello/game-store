import React from 'react';
import CartList from '../cartList';
import OrderSummary from '../orderSummary';

const CartMenu = () => {
  return (
    <div>
      <CartList />
      <OrderSummary />
    </div>
  );
};

export default CartMenu;
