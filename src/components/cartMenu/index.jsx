import React from 'react';
import CartList from '../cartList';
import OrderSummary from '../orderSummary';
import * as S from './styled';

const CartMenu = () => {
  return (
    <S.Section>
      <CartList />
      <OrderSummary />
    </S.Section>
  );
};

export default CartMenu;
