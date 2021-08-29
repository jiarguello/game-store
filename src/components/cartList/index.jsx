import React, { useContext } from 'react';
import * as S from './styled';
import Context from '../../context';
import EmptCart from '../../images/empty-cart.png';
import { updateLocalStorage } from '../../services/updateLocalStorage';

const CartList = () => {
  const { cart, setCart } = useContext(Context);
  const { products, totalProducts, quantityProducts } = cart;
  const removeProduct = (id) => {
    const itemToCart = products.findIndex((product) => product.id === id);
    products.splice(itemToCart, 1);

    const updatedCart = {
      totalProducts: totalProducts - itemToCart.price,
      quantityProducts: quantityProducts - 1,
      shipping: ((totalProducts - itemToCart.price) > 250 ? 0 : products.length * 10),
      products: [...products],
    }

    updateLocalStorage(updatedCart);
    setCart(updatedCart);
  }

  return (
    <S.List>
      {
        products.length === 0 ?
        <S.EmptyCartContainer>
          <h3>Seu carrinho ainda está vazio :(</h3>
          <S.EmptyCartImage src={EmptCart} alt="Carrinho de compras vazio" />
        </S.EmptyCartContainer>
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
