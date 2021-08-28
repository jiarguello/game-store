import React, { useContext } from 'react';
import Context from '../../context';

const OrderSummary = () => {
  const { cart: { totalProducts, shipping } } = useContext(Context);
  return (
    <div>
      <p>Total do carrinho: {totalProducts}</p>
      <p>Frete: {shipping}</p>
      <p>Valor da compra: { totalProducts + shipping }</p>
    </div>
  );
};

export default OrderSummary;
