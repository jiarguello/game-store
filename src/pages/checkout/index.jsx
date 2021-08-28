import React from 'react';
import Header from '../../components/header';
import OrderSummary from '../../components/orderSummary';
import CartList from '../../components/cartList';
import OrderForm from '../../components/orderForm';
import Footer from '../../components/footer';
import * as S from './styled';

const Checkout = () => {
  return (
    <S.Container>
      <Header />
      <OrderSummary />
      <CartList />
      <OrderForm />
      <Footer />      
    </S.Container>
  );
};

export default Checkout;