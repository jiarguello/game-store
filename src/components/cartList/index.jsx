import React, { useContext } from 'react';
import * as S from './styled';
import Context from '../../context';

const CartList = () => {
  const { cart, setCart } = useContext(Context);
  const { products, totalValue, quantityProducts } = cart;
  const removeProduct = (id) => {
    const itemToCart = products.findIndex((product) => product.id === id);
    products.splice(itemToCart, 1);

    setCart({
      totalValue: totalValue - itemToCart.price,
      quantityProducts: quantityProducts - 1,
      shipping: ((totalValue - itemToCart.price) > 250 ? 0 : products.length * 10),
      products: [...products],
    });
  }

  return (
    <S.List>
      {
        products.length === 0 ?
        <h1>vazio</h1>
        : products.map(({ id, name, image, price, score }, index) => (
          <S.Card key={`${id}-${index}`} >
            <S.Image src={`../../assets/images/${image}`} alt={`Imagem do jogo ${name}`} />
            <S.Description>
              <S.Text>{ name }</S.Text>
              <S.Text>{ price }</S.Text>
              <S.Text>Avaliação: { score }</S.Text>
            </S.Description>
            <S.RemoveButton onClick={ () => removeProduct(id) } >Remove</S.RemoveButton>
          </S.Card>
        ))
      }
    </S.List>
  );
};

export default CartList;
