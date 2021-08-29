import React, { useEffect, useContext } from 'react';
import Header from '../../components/header';
import OrderSummary from '../../components/orderSummary';
import CartList from '../../components/cartList';
import OrderForm from '../../components/orderForm';
import Footer from '../../components/footer';
import * as S from './styled';
import Context from '../../context';

const Checkout = () => {
  const { setRedirect, setShowMenu } = useContext(Context);

  useEffect(() => {
    setRedirect(false);
    setShowMenu(false);
  }, [setRedirect, setShowMenu]);

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