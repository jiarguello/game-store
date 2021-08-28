import React, { useContext } from 'react';
import Context from '../../context';
import * as S from './styled';

const OrderSummary = () => {
  const { cart: { totalProducts, shipping } } = useContext(Context);
  return (
    <S.OrderSummaryContainer>
      <S.TextContainer>
        <S.Text>Total do carrinho: {totalProducts}</S.Text>
        <S.Text>Frete: {shipping}</S.Text>
        <S.Text>Valor da compra: { totalProducts + shipping }</S.Text>
      </S.TextContainer>
      <S.Button>Comprar</S.Button>
    </S.OrderSummaryContainer>
  );
};

export default OrderSummary;
